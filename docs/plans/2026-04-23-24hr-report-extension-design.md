# 24-Hour Report — Chrome Extension Design

**Date:** 2026-04-23
**Status:** Design validated, ready for implementation
**Scope:** Add a new top-level feature to the Chrome extension that surfaces
the facility's 24-hour clinical report (critical / high / medium / low findings
by patient) with day-to-day navigation and "open in PCC" continuity.

---

## Context

Facility-wide 24-hour reports already exist in the web app — daily digests of
clinical findings across categories (Falls & Safety, Vitals & Labs, Behavioral,
Respiratory, Skin & Wounds, Medications, Abuse & Neglect, Other Clinical).
Nurses and DONs use them as a shift handoff / overnight review.

The backend route `GET /api/extension/24hr-report` is already built on branch
`Superjonathan123/ext-24hr-report`. It supports:

- **List mode** (no `date` param) → `{ locationId, timezone, reports: [...] }`
  where each report item has `{ id, reportDate, status, counts }`.
- **Single-day mode** (`?date=YYYY-MM-DD` in facility-local TZ) → the full
  report with findings, narrative, summary, counts.

This design covers the extension side only — the shell, data flow, UX decisions,
and the "open in PCC with state preserved" flow.

---

## Placement & philosophy

**Own FAB item** — not inside the MDS Command Center. Rationale:

- Different audience (DON / clinical leadership vs MDS coordinator).
- Different cadence (daily shift handoff vs assessment lifecycle).
- Data model is facility-wide clinical findings, not resident-assessment —
  collapsing it into the Command Center muddies both products.

Placement in the FAB stack: between QM Board and Coverage, so facility-scoped
actions sit together (Chat, MDS, QM, **24H**, Coverage).

**Icon:** text "24H" inside a round button (matches the "S" main button style).
No SVG.

**Always visible** (not patient-page gated). Facility is resolved via the
existing `getChatFacilityInfo()` + `getOrg()` helpers, same as QM Board.

---

## UX decisions (locked)

| # | Decision | Choice |
|---|----------|--------|
| 1 | Scope of the in-extension view | **C** — lean list + severity cards + severity filter + category filter + search. No Type filter, no All/Category/Patient/Narrative tabs, no copy/print/delete. |
| 2 | Landing & navigation | **A** — opens straight to the most recent available report. Prev/next arrows at the top walk through days. |
| 3 | Missing days | **B** — prev/next steps by calendar day. If a day has no report, show an empty state with a "jump to last available" button. |
| 4 | Patient row click | **D** — rows are read-only. A small `↗` icon appears on hover at the far right of each row; that's the sole "open this patient" entry point. |
| 5 | Open-in-PCC continuity | **B** — same-tab navigation with auto-restore. Persist `{ date, findingId, scrollTop }` to sessionStorage before nav; on content-script re-init, re-open the panel, scroll the finding into view, pulse-highlight it, clear the flag. |
| 6 | Modal shape | Right-side panel, ~680px wide, full height. Dark scrim, click-outside + Escape close. No "from 24HR report" chip on the PCC page for v1. |

---

## File layout

```
content/modules/twenty-four-hour-report/
  TwentyFourHourReport.jsx          # root panel
  hooks/
    useReportData.js                # list + single-day fetch, day navigation, cache
    useRestoreFromPCC.js            # consumes sessionStorage payload, scroll + pulse
  components/
    SeverityCards.jsx
    FiltersBar.jsx
    FindingRow.jsx
    EmptyDay.jsx
    LoadingState.jsx
  utils/
    api.js                          # unwrap helper (mirrors qm-board/utils/api.js)
    restore.js                      # sessionStorage read/write/validate for the PCC handoff
content/css/24hr-report.css         # panel, severity strip, row styles, pulse animation
```

FAB integration lives in `content/super-menu/fab.js` alongside the existing
launchers. No changes to `navigation.js` or the vanilla view system — this is a
standalone overlay like QM Board and Coverage.

---

## Architecture

### Launcher pattern

`TwentyFourHourReportLauncher` — direct copy of `QMBoardLauncher`'s shape:

- Creates `#twenty-four-hour-report-overlay` div on `document.body`.
- Dynamic-imports `preact` + `./TwentyFourHourReport.jsx`.
- Renders with `{ facilityName, orgSlug, onClose, restore? }` props.
- Escape key and click-outside close.
- Unmount on close.

Button in `createBubbles()`:

```html
<button id="super-24hr-action"
        class="super-dial__action super-dial__action--24hr"
        aria-label="24-Hour Report">24H</button>
```

Placed between QM Board and Coverage in the DOM / stack order.

### Data layer (inside `useReportData`)

No separate `api.js`. Fetches live in the hook via
`chrome.runtime.sendMessage({ type: 'API_REQUEST', endpoint, options })` — same
pattern as `useQmBoard`. The module's `utils/api.js` only contains the `unwrap`
helper (shape: `(res) => res?.success ? res : throw`).

Hook surface:

```js
const {
  availableDates,       // [{ id, reportDate, counts, ... }] sorted desc
  timezone,             // from list response; for header date formatting
  currentDate,          // YYYY-MM-DD (facility-local)
  currentReport,        // full report | null (null = no report that day)
  loading,              // boolean (current day)
  listLoading,          // boolean (the list call on first mount)
  error,                // string | null (current day)
  listError,            // string | null (fatal: can't load list)
  goToDate,             // (date) => void
  goPrevDay,            // () => void — calendar day - 1
  goNextDay,            // () => void — calendar day + 1
  goToNearestAvailable, // ('prev' | 'next') => void
  retry,                // () => void
} = useReportData({ facilityName, orgSlug });
```

Internal cache: `Map<date, report | null>`. Prev/next + back to a visited day
are instant. Calendar-day arithmetic respects `timezone` so "yesterday" means
yesterday in the facility's timezone, not UTC.

Initial load: fire `listReports` → set `currentDate = availableDates[0] ?? todayInFacilityTZ` →
fire `getReportForDate(currentDate)`. Don't block the header on the list call;
render the skeleton immediately.

### Open-in-PCC flow (Q4 answer B)

Each row's `↗` is an `<a href={pccPatientUrl}>` so middle-click / cmd-click
default to new-tab without triggering our intercept.

On plain same-tab click:

1. `e.preventDefault()`.
2. Compute `scrollTop` of the panel's scroll container.
3. Write to sessionStorage key `super:24hr:restore`:
   ```json
   {
     "version": 1,
     "facilityName": "...",
     "orgSlug": "...",
     "date": "2026-04-22",
     "findingId": "finding_abc123",
     "scrollTop": 842,
     "expiresAt": 1714000000000
   }
   ```
   TTL 30 minutes.
4. `window.location.href = pccPatientUrl`.

On content-script re-init (in `fab.js`, after `createBubbles()`):

```js
hydrateTwentyFourHourRestore();
```

Validates:

- `version === 1`
- `!expired`
- `facilityName` matches current PCC facility (`getChatFacilityInfo()`)

If valid → clear the sessionStorage key → call
`TwentyFourHourReportLauncher.open({ restore: payload })`.

Inside the panel, `useRestoreFromPCC(payload)`:

1. On mount, if `payload` is present, set `currentDate = payload.date`.
2. After the fetched report renders, `requestAnimationFrame` then:
   - `document.querySelector('[data-finding-id="..."]')` inside the panel.
   - `element.scrollIntoView({ block: 'center' })` so the row clears the
     sticky header.
   - Add `.pulse` class (yellow glow, ~1.5s). Remove on animation end.
3. If the finding element is missing (report regenerated, row culled), fall
   back to restoring `panel.scrollTop`. No error surfaced.

---

## UI reference

### Overall shape

```
┌─── right-side panel (~680px wide) ────────────────────┐
│  24-Hour Report                                  ✕    │  ← sticky header (~96px)
│  SPEARFISH CANYON HEALTHCARE                          │
│  ‹  Wed, Apr 23, 2026  ›           [jump to today]    │
├───────────────────────────────────────────────────────┤
│  [Critical 3] [High 10] [Medium 21] [Low 118]         │  ← severity strip (~72px)
├───────────────────────────────────────────────────────┤
│  🔍 Search  | 3 Severities ▾ | All Categories ▾  × C  │  ← filters (~44px, sticky)
│                                        27 of 152      │
├───────────────────────────────────────────────────────┤
│  ● Critical  Hall, Lewis · 411-A · Vitals & Labs  [↗] │
│              O2 saturation 86% on room air …          │
│                                                       │
│  ● Critical  Neal, Mildred · 603-A · Falls & Safety   │  ← scrolling list
│              Unwitnessed fall with forehead hematoma…│
│  ...                                                  │
└───────────────────────────────────────────────────────┘
```

### Header

- Title, facility name, close button on the top line.
- Date row: chevrons frame the currently-selected date (formatted in facility
  TZ). Prev disabled past oldest available; next disabled when on today.
- `Jump to today` visible only when not on the latest available date.

### Severity strip

Four compact cards (~56px tall): Critical / High / Medium / Low. Each shows
count + color swatch. Clicking a card toggles that severity in the filter.

### Filters bar

- Search (patient name / room / finding text).
- Severity dropdown (multi-select, default: all).
- Category dropdown (single-select, default: "All Categories"; list matches
  the web dropdown).
- `× Clear` appears when any non-default filter is active.
- Count ("27 of 152") on the right reflects current filter.

### Finding row

- Left color bar = severity.
- Severity badge + patient name + room + category chip + type chip.
- Narrative / finding text on a second line, 2-line ellipsis.
- `↗` icon top-right, visible on hover (always visible on touch).
- `data-finding-id` attribute for the restore flow.

---

## States

| State | Treatment |
|-------|-----------|
| Initial loading | Skeleton: shimmer on date, 4 grey cards, 6 placeholder rows. No middle spinner. |
| Empty day (report is null) | Full-width empty state: "No 24-hour report for this day" + "[Jump to last available report]". Chevrons still work. |
| No reports at all | "No 24-hour reports have been generated for this facility yet." No button. |
| Day-fetch error | Inline error in list area: "Couldn't load this report. [Retry]". Header + strip preserved. |
| List-fetch error (fatal) | Panel-level error takeover: "Couldn't load 24-hour reports. [Retry]". |
| Missing facility/org at launch | Launcher toasts via `SuperToast.show` and aborts before mounting. |
| Filters → 0 matches | Inline "No findings match these filters. [Clear]" inside the list. |

---

## Out of scope (v1)

- Copy link, print, delete actions.
- All / Category / Patient / Narrative grouping tabs.
- Type filter (Fall Event, Elopement/Wandering, etc).
- "From 24HR report" chip rendered on the PCC patient page.
- Badge count on the FAB button (may add later if we find nurses want a
  "findings since last opened" indicator).
- Generating new reports from the extension — read-only surface only.
- Historical search across dates (the web archive covers this).

---

## Dependencies & assumptions

- `GET /api/extension/24hr-report` is deployed (branch
  `Superjonathan123/ext-24hr-report` is merged).
- `getChatFacilityInfo()` / `getOrg()` behave identically here as in QM Board.
- The `chrome.runtime.sendMessage` API_REQUEST channel handles bearer-token
  auth; no extension-side auth changes needed.
- PCC patient URL construction: reuse whatever helper QM Board / Coverage use
  to build a deep link to a resident's chart. (Needs confirmation during
  implementation — fall back to the URL pattern observed in
  `icd10-viewer/icd10-api.js` or the existing chart-link helpers if any.)

---

## Implementation order

1. Stub `TwentyFourHourReportLauncher` + FAB button. Verify the button opens
   an empty panel with close button working.
2. Wire `useReportData` (list + single-day fetch, caching, day nav). Render
   JSON into a minimal list.
3. Header with date chevrons, jump-to-today, facility name.
4. Severity cards strip (clickable → severity filter toggle).
5. Filters bar (search, severity, category dropdowns).
6. Finding row component with severity badge, category chip, `↗` hover icon.
7. Empty / loading / error states.
8. `restore.js` sessionStorage helpers + `hydrateTwentyFourHourRestore()` call
   in `fab.js`.
9. `useRestoreFromPCC` + pulse animation. Manual test the round-trip.
10. CSS polish, accessibility pass (keyboard nav, focus rings).

Each step can build and reload independently — no step leaves the feature
broken for other users.
