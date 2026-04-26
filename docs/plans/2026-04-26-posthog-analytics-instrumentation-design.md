# PostHog Analytics Instrumentation — Design

**Date:** 2026-04-26
**Status:** Design approved, ready for implementation
**Scope:** Single comprehensive PR

## Goals

Instrument the Super LTC Chrome extension with PostHog to answer:

- Which features do users actually use vs ignore?
- Which facilities are sticky vs at risk?
- Where do users hit errors or abandon flows?

Constraints driving every decision below:
- Extension runs on PointClickCare pages, which display PHI in the DOM and embed patient IDs in URLs.
- Sideloaded distribution (no Chrome Web Store), so we own the BAA chain end-to-end.
- "Events only" — no session replay, no autocapture, no pageview capture.

## Non-goals

- Session replay (rejected — DOM we don't control, fragile masking, high blast radius).
- Autocapture / pageview capture (rejected — PCC button labels and URLs contain PHI).
- Server-side proxy through `superltc.com` (rejected — extra code with no PHI benefit since we curate every event manually).
- Hooking PCC's own buttons (rejected — fragile selectors, PHI in labels, low signal).
- Phased rollout (rejected — half-instrumented analytics is harder to trust than fully-instrumented).

## Architecture

### Routing

PostHog SDK loaded directly in the content script. The PostHog public project key ships in the extension bundle (designed to be client-visible). BAA chain:

```
Facility (covered entity) ↔ Super LTC (BA) ↔ PostHog (subcontractor BA)
```

Facility BAAs need to permit subcontractor processing for product analytics; PostHog BAA needed on their Scale plan or above.

### User identity

```js
// On AUTH_CALLBACK success / on extension load with cached user:
posthog.identify(user.id, {
  email: user.email,
  name: user.name,
  role: user.role,
  ext_version: chrome.runtime.getManifest().version,
});
posthog.group('facility', user.facilityId, { name: user.facilityName });

// On LOGOUT:
posthog.reset();
```

`group('facility', ...)` enables per-facility dashboards in PostHog. Pre-login events use anonymous distinct_id; PostHog auto-merges to the user when `identify` fires.

Identity sync mechanism: a `chrome.storage.onChanged` listener on the `user` key. Login from anywhere in the codebase triggers `identify()`; logout triggers `reset()`. No coupling to specific auth call sites.

### Init configuration

```js
posthog.init(__POSTHOG_KEY__, {
  api_host: 'https://us.i.posthog.com',
  autocapture: false,
  capture_pageview: false,
  disable_session_recording: true,
  capture_performance: false,
  mask_all_text: true,
  mask_all_element_attributes: true,
  property_blacklist: ['$current_url', '$pathname', '$referrer'],
  sanitize_properties: scrubProps,
});
```

`__POSTHOG_KEY__` injected at build time via Vite, mirroring the existing `__DEV_MODE__` pattern in `background/background.js`.

PostHog ships specific guidance for Chrome extensions (CSP, eval). Use the import path their MV3 docs recommend at implementation time — verify, don't guess.

## Event taxonomy

### Naming convention

`noun_verb_pastTense`, snake_case. Examples: `query_submitted`, `evidence_opened`, `icd10_code_clicked`, `panel_tab_switched`. For async ops, the triple: `query_send_started` → `query_send_succeeded` / `query_send_failed`.

### Super properties (auto-attached to every event)

```js
posthog.register({
  ext_version: chrome.runtime.getManifest().version,
  pcc_page_type: PCCContext.detect().pageType,
  surface: 'extension',
});
```

`pcc_page_type` refreshes on PCC SPA navigation.

### Per-event property conventions

- `feature` — module name (`query_items`, `mds_command_center`, etc.)
- `source` — origin of action (`fab`, `panel_tab`, `keyboard`, `right_click`, `popover`)
- `duration_ms` — for timed operations
- `error_code` / `error_type` — sanitized failure context
- IDs of *our* objects only (query IDs, evidence IDs). Reference codes (MDS item codes, ICD-10 codes) are allowed — they're public reference data. **Never** patient IDs/names/MRNs/DOBs/notes.

## Event catalog

### Lifecycle & auth

| Event | Properties |
|---|---|
| `extension_loaded` | — |
| `user_logged_in` | `method` |
| `user_logged_out` | — |
| `auth_failed` | `reason` |
| `update_banner_shown` | `current_version`, `latest_version` |
| `update_banner_clicked` | `action: reload \| dismiss \| view_release_notes` |
| `update_check_failed` | `error_code` |

### Super menu (FAB + panel)

| Event | Properties |
|---|---|
| `fab_clicked` | `fab: super_menu \| qm_board` |
| `panel_opened` | `tab`, `source: fab \| keyboard \| auto` |
| `panel_closed` | `duration_ms` |
| `panel_tab_switched` | `from_tab`, `to_tab` |

### Per-module opens

One `*_opened` event per module, each carrying a `source` property:

`dashboard_viewed`, `mds_view_opened`, `facility_dashboard_viewed`, `chat_opened`, `qm_board_opened`, `query_items_opened`, `mds_command_center_opened`, `mds_planner_opened`, `report_24hr_opened`, `ard_estimator_opened`, `pdpm_analyzer_opened`, `dx_confirmation_opened`, `cert_view_opened`, `care_plan_coverage_opened`, `uda_viewer_opened`, `icd10_viewer_opened`.

### Drill-ins & engagement

| Module | Events |
|---|---|
| MDS view | `mds_section_expanded {section_code}`, `mds_item_clicked {item_code}` |
| Facility dashboard | `facility_dashboard_tab_switched`, `facility_dashboard_resident_clicked` (count only — no patient ID) |
| QM Board | `qm_tile_clicked {measure_code}`, `qm_action_clicked {measure_code, action}`, `qm_evidence_opened {measure_code}` |
| Query Items | `query_item_clicked {item_code}`, `query_evidence_opened {item_code, type}`, `query_evidence_filtered {filter}` |
| MDS Command Center | `mds_cc_view_switched`, `mds_cc_item_popover_opened {item_code}`, `mds_cc_item_actioned {item_code, action}` |
| MDS Planner | `mds_planner_view_switched`, `mds_planner_event_clicked {event_type}` |
| 24-Hour Report | `report_24hr_filter_changed`, `report_24hr_finding_clicked {finding_type}`, `report_24hr_export_clicked {format}` |
| ARD Estimator | `ard_estimator_estimated {has_recommendation}`, `ard_estimator_recommendation_accepted`, `ard_estimator_recommendation_dismissed` |
| PDPM Analyzer | `pdpm_breakdown_viewed {component}`, `pdpm_item_drilled_in {item_code}` |
| Diagnosis Confirmation | `dx_confirmed {code}`, `dx_rejected {code, reason}`, `dx_confirmation_completed {confirmed_count, rejected_count}` |
| ICD-10 Viewer | `icd10_code_clicked {code, source}`, `icd10_evidence_opened {code}`, `icd10_pdf_opened {code}`, `icd10_search_used {query_length_bucket}` |
| Evidence (shared) | `evidence_viewer_opened {type, source}`, `evidence_viewer_closed {duration_ms}` |

### Async funnels

- `query_send_started/succeeded/failed` — `{item_code, recipient_role, duration_ms, error_code}`
- `chat_stream_started/completed/failed` — `{duration_ms, error_code}`
- `feedback_submit_started/succeeded/failed` — `{sentiment, has_screenshot, message_length_bucket, error_code}`
- `api_request_failed` — `{endpoint, status}` — catch-all for service-worker `API_REQUEST` failures

### Cross-cutting

- `pcc_page_viewed` — `{page_type, section, has_patient_context}` — fires on PCC SPA navigation
- `error_shown` — `{surface, error_code, error_type}` — wherever a toast or error modal appears
- `error_caught` — `{surface, error_code}` — non-user-visible try/catch hits worth knowing about

## Mechanism: how every button gets a hook

### A. Delegated `data-track` attribute (vanilla buttons)

One global click listener installed at extension load:

```js
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-track]');
  if (!el) return;
  const event = el.dataset.track;
  const props = parseTrackProps(el); // reads data-track-prop-* attrs
  track(event, props);
}, true);
```

Vanilla call sites become a one-attribute change:

```html
<button class="qm-tile" data-track="qm_tile_clicked"
        data-track-prop-measure-code="N0410">…</button>
```

Greppable, reviewable, can't be silently deleted.

### B. `<TrackedButton>` Preact wrapper

```jsx
<TrackedButton track="query_send_started"
               trackProps={{ item_code, recipient_role }}
               onClick={handleSubmit}>
  Send
</TrackedButton>
```

Lives in `content/components/TrackedButton.jsx`. Tracking is part of the button's API, not a separate call.

### C. Explicit `track()` for non-button events

Page views, panel opens, async ops, errors — explicit `track()` calls in the relevant code paths.

### Coverage check (lint)

`scripts/check-tracking.js` greps `content/` for `<button>` elements without `data-track` and `<TrackedButton>` without a `track` prop. Fails the build if any found. Wired into `npm run build`.

## PHI guardrails

### Allowed in event properties

- Categorical strings from a fixed enum (tab names, action names, page types)
- Reference codes (MDS item codes, ICD-10 codes — public data)
- Our object IDs (query ID, evidence ID, finding ID)
- Counts, durations (`*_ms`), buckets (`message_length_bucket: short|medium|long`)
- Booleans
- Sanitized error codes/types

### Forbidden in event properties

- Patient name, MRN, DOB, SSN, PCC patient ID
- Any URL (PCC URLs embed patient IDs)
- Free-text content — query messages, chat bodies, note excerpts, raw search queries
- API error response bodies (might contain patient context — log error code/status only)
- Stack traces (object dumps can contain PHI)

### Enforcement (4 layers)

1. **PostHog init config** kills auto-capture surfaces (see Architecture > Init configuration above).

2. **Typed `track()` wrapper.** `content/utils/analytics.js` exports `track(eventName, props)`. Validates props against a schema per event — unknown props get dropped, unknown event names log a dev warning. Forbidden prop name suffixes by convention: `_text`, `_message`, `_query`, `_body`, `_content`, `_url`, `_name` (except categorical type names).

3. **Runtime regex blocklist.** Before send, scan all string values for: digits-only ≥6 chars (potential MRN), `MM/DD/YYYY` (DOB), plausible name patterns. Hits get dropped and emit a `phi_guardrail_tripped` meta-event with `{event_name, prop_name, pattern}` — no value attached.

4. **Code review checklist** for any PR touching `track()` — patient ID? free-text? URL? unbounded string?

### Periodic audit

First month: weekly look at PostHog event explorer for property values that look PHI-shaped. Fix call site and add the pattern to the blocklist if anything slipped.

## Implementation plan

### New files

| File | Role |
|---|---|
| `content/utils/analytics.js` | PostHog init, `track()` wrapper, identify/reset, blocklist regex, sanitize hook |
| `content/utils/analytics-schema.js` | Event registry: `{ event_name: { allowed_props: [...] } }` |
| `content/components/TrackedButton.jsx` | Preact wrapper |
| `scripts/check-tracking.js` | Build-time lint for un-tracked buttons |

### npm package

`posthog-js`. Follow PostHog's MV3 / Chrome extension import guidance verbatim at implementation time.

### Init order in `content/content.js`

1. Import `analytics.js` early (right after `config.js`, before any module imports).
2. `analytics.js` initializes PostHog anonymously on import.
3. Read `chrome.storage.local.user` on load — if present, `identify()` + `group()`.
4. Add `chrome.storage.onChanged` listener — login transition → `identify()`; logout transition → `reset()`.
5. Install global delegated `data-track` click listener.
6. Hook PCC SPA navigation → fire `pcc_page_viewed`.

### What's in the PR

- All 4 new files above
- Every `*_opened` event wired (16 surfaces)
- Every button across all surfaces gets `data-track` (vanilla) or `<TrackedButton>` (Preact) — estimate ~150–250 buttons
- `pcc_page_viewed` wired
- Auth lifecycle events
- Async funnel triples for query send, chat stream, feedback submit
- `error_shown` at every existing toast/error-modal call site
- Lint script wired into `npm run build`

### Out-of-PR operational tasks

1. Sign BAA with PostHog (Scale plan or above).
2. Update facility BAAs to authorize subcontractor processing for product analytics.
3. Provision PostHog project, add public key to build pipeline.
4. After first events flow, build initial PostHog dashboards (per-feature usage, per-facility breakdown, error rate, query funnel).

### Effort

Focused 1.5–2 days of work for one engineer. The button-attribute pass is the longest part — mechanical, but covers many files.
