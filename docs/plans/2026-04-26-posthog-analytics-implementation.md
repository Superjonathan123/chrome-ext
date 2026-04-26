# PostHog Analytics Instrumentation — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Instrument the Super LTC Chrome extension with curated PostHog events across every interactive surface, with PHI guardrails and a build-time lint that prevents un-tracked buttons from shipping.

**Architecture:** Direct-to-PostHog from the content script (no backend proxy). Events fire via three mechanisms: (a) a global delegated click listener that picks up any `[data-track]` element, (b) a `<TrackedButton>` Preact wrapper, and (c) explicit `track()` calls for non-click events (page views, async ops, errors). All event names and allowed properties are declared in a single schema file; the wrapper drops unknown props and a regex blocklist scans for PHI-shaped strings before send.

**Tech Stack:** `posthog-js` (npm), Vite build-time `define` for the project key (mirrors existing `__DEV_MODE__` pattern), Preact (existing), vanilla JS (existing).

**Companion design doc:** `docs/plans/2026-04-26-posthog-analytics-instrumentation-design.md` (on `main`).

**Verification per task:** This codebase has no test framework (`npm test` is not defined). Each task's verification is `npm run build` succeeding plus, where applicable, `npm run check:tracking` (the lint script we add in Task 10). For behavior-affecting changes, manual smoke-test via `npm run dev` and reload the extension.

**Branch:** `feat/posthog-analytics` (already created — this plan executes inside the worktree at `.worktrees/posthog-analytics/`).

---

## Task 1: Add posthog-js dependency

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json` (auto)

**Step 1: Install**

Run from worktree root:
```bash
npm install posthog-js
```

**Step 2: Verify**

```bash
node -e "console.log(require('posthog-js/package.json').version)"
```
Expected: a version string prints (e.g. `1.x.y`). No errors.

**Step 3: Build still passes**

```bash
npm run build
```
Expected: `✓ built in <time>` with no errors. The new package isn't imported anywhere yet so the bundle shouldn't change.

**Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add posthog-js dependency"
```

---

## Task 2: Inject build-time PostHog key via Vite define

**Files:**
- Modify: `vite.config.js:82-86`

**Why:** Mirrors the existing `__DEV_MODE__` pattern — keeps the public project key out of source. For now we set both dev and prod to the same placeholder key string `'phc_PLACEHOLDER'`; the operator will swap in the real key (or we wire it from an env var) before the BAA is signed and PostHog is provisioned.

**Step 1: Update `define` block**

Find the existing `define:` block in `vite.config.js`:
```js
    define: {
      // Replaced at build time in background.js
      // dev → true (localhost), prod → false (superltc.com)
      __DEV_MODE__: isDev,
    },
```

Replace with:
```js
    define: {
      // Replaced at build time in background.js
      // dev → true (localhost), prod → false (superltc.com)
      __DEV_MODE__: isDev,
      // PostHog public project key. Replace 'phc_PLACEHOLDER' with the real
      // key once provisioned. Placeholder is harmless — analytics.js will
      // detect it and skip init in production.
      __POSTHOG_KEY__: JSON.stringify(process.env.POSTHOG_KEY || 'phc_PLACEHOLDER'),
    },
```

**Step 2: Build**

```bash
npm run build
```
Expected: clean build, no errors.

**Step 3: Verify replacement**

```bash
grep -c 'phc_PLACEHOLDER' dist/assets/content.js-*.js
```
Expected: `0` (the constant isn't referenced yet — Task 4 introduces the reference).

**Step 4: Commit**

```bash
git add vite.config.js
git commit -m "chore: wire __POSTHOG_KEY__ build-time define"
```

---

## Task 3: Create the analytics event schema

**Files:**
- Create: `content/utils/analytics-schema.js`

**Why:** Single source of truth for valid event names and allowed properties per event. The `track()` wrapper validates against this. Adding a new event = one entry here + one call site.

**Step 1: Create the file**

```js
// content/utils/analytics-schema.js
// Event name → allowed property names. Unknown event names log a dev warning
// and drop. Unknown property names are stripped silently before send.
//
// Conventions:
// - Event names: noun_verb_pastTense, snake_case
// - Allowed properties: see PHI guardrails — never include patient identifiers,
//   URLs, or free-text. Use buckets/counts/categorical strings.
// - Property suffixes that are ALWAYS rejected by analytics.js regardless of
//   schema: _text, _message, _query, _body, _content, _url, _name (except
//   *_type / *_pattern_name which are categorical).

export const EVENT_SCHEMA = {
  // === Lifecycle & auth ===
  extension_loaded: [],
  user_logged_in: ['method'],
  user_logged_out: [],
  auth_failed: ['reason'],
  update_banner_shown: ['current_version', 'latest_version'],
  update_banner_clicked: ['action'],
  update_check_failed: ['error_code'],

  // === Super menu (FAB + panel) ===
  fab_clicked: ['fab'],
  panel_opened: ['tab', 'source'],
  panel_closed: ['duration_ms'],
  panel_tab_switched: ['from_tab', 'to_tab'],

  // === Per-module opens (the "are people using X" core) ===
  dashboard_viewed: ['source'],
  mds_view_opened: ['source'],
  facility_dashboard_viewed: ['source'],
  chat_opened: ['source'],
  qm_board_opened: ['source'],
  query_items_opened: ['source'],
  mds_command_center_opened: ['source'],
  mds_planner_opened: ['source'],
  report_24hr_opened: ['source'],
  ard_estimator_opened: ['source'],
  pdpm_analyzer_opened: ['source'],
  dx_confirmation_opened: ['source', 'dx_count'],
  cert_view_opened: ['source'],
  care_plan_coverage_opened: ['source'],
  uda_viewer_opened: ['source'],
  icd10_viewer_opened: ['source'],

  // === Drill-ins & engagement ===
  mds_section_expanded: ['section_code'],
  mds_item_clicked: ['item_code'],

  facility_dashboard_tab_switched: ['from_tab', 'to_tab'],
  facility_dashboard_resident_clicked: [],

  qm_tile_clicked: ['measure_code'],
  qm_action_clicked: ['measure_code', 'action'],
  qm_evidence_opened: ['measure_code'],
  qm_drill_in: ['measure_code', 'view'],

  query_item_clicked: ['item_code'],
  query_evidence_opened: ['item_code', 'evidence_type'],
  query_evidence_filtered: ['filter'],
  query_modal_opened: [],
  query_modal_closed: ['reason'],

  mds_cc_view_switched: ['from_view', 'to_view'],
  mds_cc_item_popover_opened: ['item_code'],
  mds_cc_item_actioned: ['item_code', 'action'],

  mds_planner_view_switched: ['from_view', 'to_view'],
  mds_planner_event_clicked: ['event_type'],

  report_24hr_filter_changed: ['filter', 'value'],
  report_24hr_finding_clicked: ['finding_type'],
  report_24hr_export_clicked: ['format'],

  ard_estimator_estimated: ['duration_ms', 'has_recommendation'],
  ard_estimator_recommendation_accepted: [],
  ard_estimator_recommendation_dismissed: [],

  pdpm_breakdown_viewed: ['component'],
  pdpm_item_drilled_in: ['item_code'],

  dx_confirmed: ['code'],
  dx_rejected: ['code', 'reason'],
  dx_confirmation_completed: ['confirmed_count', 'rejected_count'],

  cert_clicked: ['cert_type'],

  care_plan_gap_clicked: ['gap_type'],

  uda_assessment_clicked: ['assessment_type'],

  icd10_code_clicked: ['code', 'source'],
  icd10_evidence_opened: ['code'],
  icd10_pdf_opened: ['code', 'page_count'],
  icd10_pdf_page_changed: ['code', 'from_page', 'to_page'],
  icd10_search_used: ['query_length_bucket'],

  evidence_viewer_opened: ['type', 'source'],
  evidence_viewer_closed: ['type', 'duration_ms'],

  // === Feedback module ===
  feedback_modal_opened: ['source'],
  feedback_submit_started: ['sentiment', 'has_screenshot', 'message_length_bucket'],
  feedback_submit_succeeded: ['duration_ms'],
  feedback_submit_failed: ['error_code'],
  feedback_modal_dismissed: [],

  // === Async funnels ===
  query_send_started: ['item_code', 'recipient_role'],
  query_send_succeeded: ['duration_ms'],
  query_send_failed: ['error_code'],

  chat_stream_started: [],
  chat_stream_completed: ['duration_ms'],
  chat_stream_failed: ['error_code'],
  chat_session_cleared: [],

  api_request_failed: ['endpoint', 'status'],

  // === Cross-cutting ===
  pcc_page_viewed: ['page_type', 'section', 'has_patient_context'],
  error_shown: ['surface', 'error_code', 'error_type'],
  error_caught: ['surface', 'error_code'],

  // === Meta (PHI guardrail tripwire) ===
  phi_guardrail_tripped: ['event_name', 'prop_name', 'pattern'],
};

// Property name suffixes that are forbidden regardless of event schema.
// The wrapper rejects any property whose name ends with one of these.
export const FORBIDDEN_PROP_SUFFIXES = [
  '_text', '_message', '_query', '_body', '_content', '_url',
];
// Exception: property names ending in these are allowed (categorical type
// fields, not free-text). Checked before FORBIDDEN_PROP_SUFFIXES.
export const ALLOWED_NAME_LIKE_SUFFIXES = [
  '_type', '_pattern_name', '_event_type', '_finding_type', '_assessment_type',
  '_gap_type', '_cert_type', '_evidence_type', '_error_type', '_page_type',
];
```

**Step 2: Build**

```bash
npm run build
```
Expected: clean build (file isn't imported yet).

**Step 3: Commit**

```bash
git add content/utils/analytics-schema.js
git commit -m "feat(analytics): add event schema registry"
```

---

## Task 4: Create the analytics core (init, identify, track wrapper, guardrails)

**Files:**
- Create: `content/utils/analytics.js`

**Step 1: Create the file**

```js
// content/utils/analytics.js
// PostHog wrapper with PHI guardrails. Single entry point for all events.
//
// Design notes:
// - PostHog is initialized once on module import.
// - Auth is bootstrapped from chrome.storage.local.user; identity changes
//   are observed via chrome.storage.onChanged.
// - All events flow through track(). Unknown event names log a dev warning;
//   unknown properties are stripped silently. PHI-shaped string values are
//   dropped and a phi_guardrail_tripped event fires (without the value).
// - The placeholder key 'phc_PLACEHOLDER' disables PostHog entirely so
//   builds work before the real key is provisioned.

import posthog from 'posthog-js';
import {
  EVENT_SCHEMA,
  FORBIDDEN_PROP_SUFFIXES,
  ALLOWED_NAME_LIKE_SUFFIXES,
} from './analytics-schema.js';

const KEY = __POSTHOG_KEY__;
const ENABLED = KEY && KEY !== 'phc_PLACEHOLDER';

// PHI-shaped patterns to scrub from string property values.
const PHI_PATTERNS = [
  { name: 'digits_6plus', re: /\b\d{6,}\b/ },               // potential MRN
  { name: 'mm_dd_yyyy',    re: /\b\d{2}\/\d{2}\/\d{4}\b/ }, // DOB
  { name: 'iso_date',      re: /\b\d{4}-\d{2}-\d{2}\b/ },   // DOB-ish
  { name: 'two_capitalized', re: /\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/ }, // FirstLast
];

function isForbiddenPropName(name) {
  if (ALLOWED_NAME_LIKE_SUFFIXES.some(s => name.endsWith(s))) return false;
  return FORBIDDEN_PROP_SUFFIXES.some(s => name.endsWith(s)) ||
         name === 'name' || name === 'patient_name' ||
         name.endsWith('_name'); // *_name is forbidden by default
}

function scanForPhi(value) {
  if (typeof value !== 'string') return null;
  for (const { name, re } of PHI_PATTERNS) {
    if (re.test(value)) return name;
  }
  return null;
}

// PostHog init. sanitize_properties is the global last-line scrubber —
// strips event-builtin props that could leak URLs (PostHog re-adds them).
function sanitizeProperties(props) {
  if (!props) return props;
  delete props.$current_url;
  delete props.$pathname;
  delete props.$referrer;
  delete props.$host;
  return props;
}

if (ENABLED) {
  posthog.init(KEY, {
    api_host: 'https://us.i.posthog.com',
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    disable_session_recording: true,
    capture_performance: false,
    mask_all_text: true,
    mask_all_element_attributes: true,
    property_blacklist: ['$current_url', '$pathname', '$referrer', '$host'],
    sanitize_properties: sanitizeProperties,
    persistence: 'localStorage', // service worker has no cookies; localStorage works in content scripts
    advanced_disable_decide: true, // we don't use feature flags yet; saves a network roundtrip
  });
  posthog.register({
    surface: 'extension',
    ext_version: chrome?.runtime?.getManifest?.().version || 'unknown',
  });
}

// ===== Public API =====

export function track(eventName, props = {}) {
  if (!ENABLED) return;

  const schema = EVENT_SCHEMA[eventName];
  if (!schema) {
    if (__DEV_MODE__) console.warn(`[analytics] Unknown event: ${eventName}`);
    return;
  }

  const sanitized = {};
  for (const [k, v] of Object.entries(props)) {
    if (!schema.includes(k)) continue; // strip unknown props silently
    if (isForbiddenPropName(k)) {
      posthog.capture('phi_guardrail_tripped', {
        event_name: eventName,
        prop_name: k,
        pattern: 'forbidden_suffix',
      });
      continue;
    }
    const phiPattern = scanForPhi(v);
    if (phiPattern) {
      posthog.capture('phi_guardrail_tripped', {
        event_name: eventName,
        prop_name: k,
        pattern: phiPattern,
      });
      continue;
    }
    sanitized[k] = v;
  }

  posthog.capture(eventName, sanitized);
}

export function identify(user) {
  if (!ENABLED || !user?.id) return;
  posthog.identify(user.id, {
    email: user.email,
    role: user.role,
  });
  if (user.facilityId) {
    posthog.group('facility', user.facilityId, { name: user.facilityName });
  }
}

export function reset() {
  if (!ENABLED) return;
  posthog.reset();
}

// PCC page super-property — refresh on URL changes to attach context to all
// subsequent events. Page-type values are constrained by the schema.
export function setPccContext({ pageType, section, hasPatientContext }) {
  if (!ENABLED) return;
  posthog.register({
    pcc_page_type: pageType || 'unknown',
    pcc_section: section || null,
    pcc_has_patient_context: !!hasPatientContext,
  });
}

// Bootstrap auth state on import. Login/logout transitions are observed via
// chrome.storage.onChanged below.
async function bootstrapAuth() {
  try {
    const { user } = await chrome.storage.local.get('user');
    if (user) identify(user);
  } catch (e) {
    if (__DEV_MODE__) console.warn('[analytics] auth bootstrap failed', e);
  }
}

if (ENABLED && typeof chrome !== 'undefined' && chrome.storage) {
  bootstrapAuth();
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local' || !changes.user) return;
    const next = changes.user.newValue;
    if (next) {
      identify(next);
      track('user_logged_in', { method: 'oauth_extension' });
    } else {
      track('user_logged_out');
      reset();
    }
  });
}
```

**Step 2: Build**

```bash
npm run build
```
Expected: clean build (file isn't imported by anything yet).

**Step 3: Commit**

```bash
git add content/utils/analytics.js
git commit -m "feat(analytics): add PostHog wrapper with PHI guardrails"
```

---

## Task 5: Wire analytics into content.js entry point

**Files:**
- Modify: `content/content.js:1-7` (top of file, right after `import '../config.js';`)

**Why:** Importing analytics early ensures `track()` is callable from any module. The import itself initializes PostHog and bootstraps auth.

**Step 1: Add import**

Find this existing block at the top of `content/content.js`:
```js
// 1. Import global config
import '../config.js';
import './css/selector.css';
```

Insert after `import '../config.js';`:
```js
// 1. Import global config
import '../config.js';
import './utils/analytics.js'; // initializes PostHog, sets super-properties, bootstraps auth
import './css/selector.css';
```

**Step 2: Build**

```bash
npm run build
```
Expected: clean build. Bundle size should grow modestly (posthog-js is ~50KB gzip).

**Step 3: Smoke test**

```bash
npm run dev
```

Then in Chrome:
1. `chrome://extensions` → Reload Super LTC
2. Open any PointClickCare page (or any page with the dev manifest's broader matching).
3. DevTools console — check for any `[analytics]` warnings or PostHog errors.

Expected: no errors. With the placeholder key, PostHog won't actually init, but the import shouldn't break anything.

**Step 4: Commit**

```bash
git add content/content.js
git commit -m "feat(analytics): wire analytics module into content entry"
```

---

## Task 6: Hook PCC URL changes for page-view events and super-property refresh

**Files:**
- Create: `content/utils/pcc-nav-observer.js`
- Modify: `content/content.js` (add import + invocation after analytics import)

**Why:** PCC is an SPA — URL changes don't fire page loads. We need to observe `pushState`/`popstate` to keep `pcc_page_type` super-property accurate and emit `pcc_page_viewed` for each navigation.

**Step 1: Create observer**

```js
// content/utils/pcc-nav-observer.js
// Observes PCC SPA navigation. Fires pcc_page_viewed on each new page and
// updates the pcc_page_type super-property. URL itself is never sent.

import { track, setPccContext } from './analytics.js';
import { PCCContext } from '../super-menu/context.js';

let lastPath = null;

function emitIfChanged() {
  const path = location.pathname;
  if (path === lastPath) return;
  lastPath = path;

  let ctx;
  try {
    ctx = PCCContext.detect();
  } catch (e) {
    ctx = { pageType: 'unknown', section: null, patientId: null };
  }

  setPccContext({
    pageType: ctx.pageType,
    section: ctx.section,
    hasPatientContext: !!ctx.patientId,
  });

  track('pcc_page_viewed', {
    page_type: ctx.pageType || 'unknown',
    section: ctx.section || null,
    has_patient_context: !!ctx.patientId,
  });
}

export function startPccNavObserver() {
  // Initial emit
  emitIfChanged();

  // History API patches — fire after pushState/replaceState
  const origPush = history.pushState;
  const origReplace = history.replaceState;
  history.pushState = function (...args) {
    const result = origPush.apply(this, args);
    queueMicrotask(emitIfChanged);
    return result;
  };
  history.replaceState = function (...args) {
    const result = origReplace.apply(this, args);
    queueMicrotask(emitIfChanged);
    return result;
  };

  // Back/forward
  window.addEventListener('popstate', emitIfChanged);
}
```

**Step 2: Wire into content.js**

In `content/content.js`, find the line `import './utils/analytics.js';` and add right after:
```js
import { startPccNavObserver } from './utils/pcc-nav-observer.js';
```

Then near the bottom of the file (before or after `UpdateChecker.startPolling()`), add:
```js
// 9. Start PCC navigation observer (fires pcc_page_viewed)
startPccNavObserver();
```

**Step 3: Build + smoke test**

```bash
npm run build
```
Expected: clean build.

Reload extension, open a PCC page, navigate to another PCC page. With placeholder key nothing fires; check there are no console errors.

**Step 4: Commit**

```bash
git add content/utils/pcc-nav-observer.js content/content.js
git commit -m "feat(analytics): observe PCC SPA navigation for page-view events"
```

---

## Task 7: Install global delegated `data-track` click listener

**Files:**
- Create: `content/utils/track-delegate.js`
- Modify: `content/content.js` (import + invocation)

**Why:** Single capture-phase document listener catches every `[data-track]` click. Vanilla call sites become a one-attribute change. Property values are read from `data-track-prop-*` attributes (kebab-case → snake_case key).

**Step 1: Create delegate**

```js
// content/utils/track-delegate.js
// Global capture-phase click listener. Any element (or ancestor) with
// data-track="event_name" fires that event. Properties come from
// data-track-prop-<key>="value" attributes (kebab-case → snake_case).
//
// Examples:
//   <button data-track="qm_tile_clicked"
//           data-track-prop-measure-code="N0410">…</button>
//
//   <button data-track="panel_tab_switched"
//           data-track-prop-from-tab="dashboard"
//           data-track-prop-to-tab="mds">…</button>

import { track } from './analytics.js';

function kebabToSnake(s) {
  return s.replace(/-/g, '_');
}

function readProps(el) {
  const props = {};
  for (const attr of el.attributes) {
    if (!attr.name.startsWith('data-track-prop-')) continue;
    const key = kebabToSnake(attr.name.slice('data-track-prop-'.length));
    props[key] = attr.value;
  }
  return props;
}

export function startTrackDelegate() {
  document.addEventListener('click', (e) => {
    const el = e.target.closest?.('[data-track]');
    if (!el) return;
    const event = el.dataset.track;
    if (!event) return;
    track(event, readProps(el));
  }, true); // capture phase — runs before the page's own handlers
}
```

**Step 2: Wire into content.js**

In `content/content.js`, after the analytics import block, add:
```js
import { startTrackDelegate } from './utils/track-delegate.js';
```

Then in the bottom section (with the `startPccNavObserver()` call), add:
```js
startTrackDelegate();
```

**Step 3: Build + smoke test**

```bash
npm run build
```
Expected: clean.

Reload extension. With placeholder key no events fire externally, but you can verify the delegate fires by temporarily adding `console.log` inside `startTrackDelegate`'s click handler and clicking buttons in the panel.

**Step 4: Commit**

```bash
git add content/utils/track-delegate.js content/content.js
git commit -m "feat(analytics): global delegated data-track click listener"
```

---

## Task 8: Create `<TrackedButton>` Preact wrapper

**Files:**
- Create: `content/components/TrackedButton.jsx`

**Why:** Preact-side equivalent of `data-track` — renders a real `<button>` carrying the same `data-track` / `data-track-prop-*` attributes, so the same global listener handles it. `<TrackedButton track="..." trackProps={{...}}>` is one concise call.

**Step 1: Create component**

```jsx
// content/components/TrackedButton.jsx
// Thin button wrapper that emits a tracked event on click via the global
// delegated listener (see content/utils/track-delegate.js). The actual
// posthog.capture happens through the document-level listener — this
// component just renders the data attributes.

export function TrackedButton({
  track: eventName,
  trackProps = {},
  children,
  ...rest
}) {
  const dataAttrs = {};
  for (const [key, value] of Object.entries(trackProps)) {
    if (value === null || value === undefined) continue;
    dataAttrs[`data-track-prop-${key.replace(/_/g, '-')}`] = String(value);
  }
  return (
    <button data-track={eventName} {...dataAttrs} {...rest}>
      {children}
    </button>
  );
}
```

**Step 2: Build**

```bash
npm run build
```
Expected: clean.

**Step 3: Commit**

```bash
git add content/components/TrackedButton.jsx
git commit -m "feat(analytics): TrackedButton Preact wrapper"
```

---

## Task 9: Build-time tracking lint script

**Files:**
- Create: `scripts/check-tracking.js`
- Modify: `package.json` (add `check:tracking` script + wire into `build`)

**Why:** Prevents un-tracked `<button>` elements from landing. Runs as part of `npm run build` so CI/local-dev fails closed.

**Step 1: Create lint**

```js
// scripts/check-tracking.js
// Build-time check: every <button> in content/ must have data-track="..."
// or be replaced with <TrackedButton track="...">. Same for clickable
// JSX <button> in content/components/ and content/modules/.
//
// Allowlist: buttons inside lib/ are vendored and not ours.
// Exemption mechanism: comment containing the marker NO_TRACK on the
// SAME line or the line directly above the <button> opening tag.

import { readdirSync, readFileSync, statSync } from 'fs';
import { join, extname } from 'path';

const ROOTS = ['content'];
const EXTS = new Set(['.js', '.jsx', '.html']);
const SKIP_DIRS = new Set(['node_modules', 'dist', 'dist-prod', '.worktrees']);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, files);
    else if (EXTS.has(extname(entry))) files.push(full);
  }
  return files;
}

const failures = [];

for (const root of ROOTS) {
  for (const file of walk(root)) {
    const text = readFileSync(file, 'utf8');
    const lines = text.split('\n');

    // Match <button ... > (vanilla HTML and JSX). Multi-line opens are not
    // handled — they're rare in this codebase and we accept the false
    // positives over a heavy parser.
    lines.forEach((line, idx) => {
      const isButtonOpen = /<button(\s|>)/.test(line);
      if (!isButtonOpen) return;
      const isTracked =
        /data-track\s*=/.test(line) ||
        /<TrackedButton(\s|>)/.test(line); // wrapper render is handled separately
      if (isTracked) return;

      // NO_TRACK marker on the same line or line above
      const sameLineMarker = line.includes('NO_TRACK');
      const aboveLine = idx > 0 ? lines[idx - 1] : '';
      const aboveMarker = aboveLine.includes('NO_TRACK');
      if (sameLineMarker || aboveMarker) return;

      failures.push(`${file}:${idx + 1}  ${line.trim().slice(0, 120)}`);
    });

    // Also catch <TrackedButton without a track= prop
    lines.forEach((line, idx) => {
      const isWrapperOpen = /<TrackedButton(\s|>)/.test(line);
      if (!isWrapperOpen) return;
      const hasTrack = /\btrack\s*=/.test(line);
      if (hasTrack) return;
      failures.push(
        `${file}:${idx + 1}  TrackedButton without track= prop: ${line.trim().slice(0, 120)}`
      );
    });
  }
}

if (failures.length) {
  console.error(`\n[check-tracking] ${failures.length} un-tracked button(s):\n`);
  for (const f of failures) console.error('  ' + f);
  console.error(
    '\nFix by adding data-track="event_name" or replacing with <TrackedButton track="event_name">. ' +
    'Use the // NO_TRACK marker if a button is intentionally not tracked.\n'
  );
  process.exit(1);
}

console.log('[check-tracking] OK');
```

**Step 2: Wire into package.json**

Find the existing scripts block and update:
```json
"scripts": {
  "dev": "vite build --watch --mode development",
  "build": "npm run check:tracking && vite build --mode development",
  "build:prod": "npm run check:tracking && vite build --mode production --outDir dist-prod",
  "check:tracking": "node scripts/check-tracking.js",
  ...
}
```

(Keep all other existing scripts unchanged. Only `dev` is left untouched so file-watch dev mode isn't gated by the lint — it would slow down iteration for no real benefit.)

**Step 3: Run lint to see current state**

```bash
npm run check:tracking
```
Expected: it WILL fail with a long list of un-tracked buttons (the whole codebase). This is expected — the failures are exactly what Tasks 11–22 are going to fix.

**Step 4: Verify build now fails closed**

```bash
npm run build
```
Expected: build fails with the lint error before vite runs. This proves the gate works.

**Step 5: Commit**

```bash
git add scripts/check-tracking.js package.json
git commit -m "feat(analytics): build-time check for un-tracked buttons"
```

> ⚠️ After this commit, `npm run build` will fail until Tasks 11–22 hook every button. That's the point. Use `npm run dev` for iteration during instrumentation; or temporarily skip the gate with `node node_modules/vite/bin/vite.js build --mode development`. Re-enabling it before the final commit is non-negotiable.

---

## Task 10: Add lifecycle + auth events (extension_loaded, update banner, auth_failed)

**Files:**
- Modify: `content/content.js` (one explicit `track('extension_loaded')` call)
- Modify: `content/utils/update-checker.js` (track update_check_failed)
- Modify: `content/components/UpdateBanner.jsx` (track update_banner_shown + clicks)
- Modify: `background/background.js` (NOTE: background.js fires events via the auth listener in content/utils/analytics.js; we don't track from the service worker because it doesn't have access to the same posthog instance. The chrome.storage.onChanged listener already fires user_logged_in / user_logged_out from content scripts.)

**Step 1: Add `extension_loaded` to content.js**

In `content/content.js`, near the bottom (after `startPccNavObserver()` and `startTrackDelegate()`):
```js
import { track } from './utils/analytics.js';
track('extension_loaded');
```

**Step 2: Add tracking to update-checker.js**

Read `content/utils/update-checker.js` first to find the existing structure. Then:
- In the catch block of the version-fetch (or wherever fetch failures are handled): `track('update_check_failed', { error_code: String(err?.code || err?.name || 'unknown') })`
- The `update_banner_shown` event fires from the banner component itself (see Step 3) since that's where "shown" actually happens.

**Step 3: Add tracking to UpdateBanner.jsx**

Read `content/components/UpdateBanner.jsx`. Wire:
- A `useEffect(() => { track('update_banner_shown', { current_version, latest_version }); }, [])` on initial mount (only once).
- For each banner action button (Reload / Dismiss / View Release Notes), use `<TrackedButton track="update_banner_clicked" trackProps={{ action: 'reload' }}>` etc.

**Step 4: auth_failed**

`auth_failed` fires when `AUTH_CALLBACK` returns `success: false`. Find the call site that processes that response (likely in popup.js or wherever the OAuth callback finishes) and add:
```js
import { track } from '...';
if (!response.success) {
  track('auth_failed', { reason: response.error || 'unknown' });
}
```

**Step 5: Build + smoke**

Use `npm run dev` to skip the lint while we still have un-tracked buttons across the codebase. Verify no console errors.

**Step 6: Commit**

```bash
git add content/content.js content/utils/update-checker.js content/components/UpdateBanner.jsx <other auth callback file>
git commit -m "feat(analytics): lifecycle + auth + update banner events"
```

---

## Task 11: Instrumentation pass — Super-menu FAB + panel + navigation

**Files:**
- Modify: `content/super-menu/fab.js`
- Modify: `content/super-menu/panel.js`
- Modify: `content/super-menu/navigation.js`

**Pattern for vanilla files:**
1. Open the file. Find every `<button>` in template-literal HTML strings.
2. Add `data-track="event_name"` and `data-track-prop-*` attributes.
3. For each FAB action button, the event is `fab_clicked` with a `data-track-prop-fab` value (`super_menu`, `qm_board`, `feedback`, etc.).
4. For each panel tab, `panel_tab_switched` with `data-track-prop-from-tab` and `data-track-prop-to-tab`. Since `from-tab` is dynamic, you may need to use an explicit `track()` call in the click handler instead of attributes.

**Specific call sites:**
- `fab.js`: each `super-dial__action--*` button → `data-track="fab_clicked" data-track-prop-fab="super_menu|qm_board|feedback|chat|24hr|coverage|mds"`
- `panel.js`: panel close button → `data-track="panel_closed"`. The open emit goes elsewhere — see Step 5 below.
- `navigation.js`: tab buttons → `data-track="panel_tab_switched"` with appropriate props. If `from-tab` is dynamic, call `track('panel_tab_switched', { from_tab, to_tab })` explicitly in the existing click handler instead.

**Step for panel_opened:** When the FAB main S button toggles open the panel, add `track('panel_opened', { tab: currentTab, source: 'fab' })` in the open path. When opened by keyboard shortcut, pass `source: 'keyboard'`.

**Step 5: Run lint + verify**

```bash
npm run check:tracking
```
The list of un-tracked buttons should shrink. Specifically all `<button>` matches in `content/super-menu/fab.js`, `panel.js`, `navigation.js` should be gone.

**Step 6: Smoke test**

`npm run dev` → reload → open FAB → switch tabs → close panel. No console errors.

**Step 7: Commit**

```bash
git add content/super-menu/fab.js content/super-menu/panel.js content/super-menu/navigation.js
git commit -m "feat(analytics): instrument FAB + panel + navigation"
```

---

## Task 12: Instrumentation pass — Vanilla super-menu views

**Files:**
- Modify: `content/super-menu/dashboard-view.js`
- Modify: `content/super-menu/mds-view.js`
- Modify: `content/super-menu/facility-dashboard-view.js`
- Modify: `content/super-menu/chat-view.js`

**Pattern:** Same as Task 11 — find every `<button>` in template-literal HTML and add `data-track`. Add `dashboard_viewed`, `mds_view_opened`, `facility_dashboard_viewed`, `chat_opened` explicit `track()` calls in each view's `render()` / open path with `source` prop.

**Specific events expected (from the schema):**
- `mds_section_expanded` — section toggles in mds-view
- `mds_item_clicked` — item clicks in mds-view
- `facility_dashboard_tab_switched` — tab buttons
- `facility_dashboard_resident_clicked` — row clicks (use `data-track` on the row element, not just buttons)
- `chat_session_cleared` — clear chat button

**Step:** After modifying, run `npm run check:tracking` and confirm reduced failures. `npm run dev`, smoke-test each view.

**Commit:**
```bash
git add content/super-menu/dashboard-view.js content/super-menu/mds-view.js content/super-menu/facility-dashboard-view.js content/super-menu/chat-view.js
git commit -m "feat(analytics): instrument vanilla super-menu views"
```

---

## Task 13: Instrumentation pass — QM Board module

**Files:**
- All `.jsx` files in `content/modules/qm-board/`

**Pattern (Preact):** Replace `<button>` with `<TrackedButton>` (import from `../../components/TrackedButton.jsx`) for every clickable button. Pass `track="event_name"` and `trackProps={{...}}`. For non-button clickable elements (tile divs), keep them as-is and add `data-track` directly to the rendered element (Preact passes through).

**Specific events:** `qm_board_opened` (on mount), `qm_tile_clicked`, `qm_action_clicked`, `qm_evidence_opened`, `qm_drill_in`.

**Step:** Run `npm run check:tracking` — all button-shaped JSX in qm-board should now be wrapped or have `data-track`. Smoke-test in dev.

**Commit:**
```bash
git add content/modules/qm-board/
git commit -m "feat(analytics): instrument QM Board module"
```

---

## Task 14: Instrumentation pass — Query Items + queries/

**Files:**
- All `.jsx` files in `content/modules/query-items/`
- `content/queries/query-modal.js`, `query-panel.js`, `query-send-modal.js`, `query-badges.js`

**Events:** `query_items_opened`, `query_item_clicked`, `query_evidence_opened`, `query_evidence_filtered`, `query_modal_opened`, `query_modal_closed` (with `reason: submit|cancel|dismiss`).

(Async funnel `query_send_started/succeeded/failed` is wired separately in Task 23.)

**Commit:**
```bash
git add content/modules/query-items/ content/queries/
git commit -m "feat(analytics): instrument Query Items + query modals"
```

---

## Task 15: Instrumentation pass — MDS Command Center + MDS Planner

**Files:**
- All `.jsx` files in `content/modules/mds-command-center/`
- All `.jsx` files in `content/modules/mds-planner/`

**Events:** `mds_command_center_opened`, `mds_cc_view_switched`, `mds_cc_item_popover_opened`, `mds_cc_item_actioned`, `mds_planner_opened`, `mds_planner_view_switched`, `mds_planner_event_clicked`.

**Commit:**
```bash
git add content/modules/mds-command-center/ content/modules/mds-planner/
git commit -m "feat(analytics): instrument MDS Command Center + Planner"
```

---

## Task 16: Instrumentation pass — 24-Hour Report

**Files:**
- All `.jsx` files in `content/modules/twenty-four-hour-report/`

**Events:** `report_24hr_opened`, `report_24hr_filter_changed`, `report_24hr_finding_clicked`, `report_24hr_export_clicked`.

**Commit:**
```bash
git add content/modules/twenty-four-hour-report/
git commit -m "feat(analytics): instrument 24-Hour Report"
```

---

## Task 17: Instrumentation pass — ARD Estimator + PDPM Analyzer

**Files:**
- All `.jsx` files in `content/modules/ard-estimator/`
- All `.jsx` files in `content/modules/pdpm-analyzer/`

**Events:** `ard_estimator_opened`, `ard_estimator_estimated`, `ard_estimator_recommendation_accepted`, `ard_estimator_recommendation_dismissed`, `pdpm_analyzer_opened`, `pdpm_breakdown_viewed`, `pdpm_item_drilled_in`.

**Commit:**
```bash
git add content/modules/ard-estimator/ content/modules/pdpm-analyzer/
git commit -m "feat(analytics): instrument ARD Estimator + PDPM Analyzer"
```

---

## Task 18: Instrumentation pass — Diagnosis Confirmation + Certifications + Care Plan + UDA + AI Chat

**Files:**
- All `.jsx` files in `content/modules/diagnosis-confirmation/`
- All `.jsx` files in `content/modules/certifications/`
- All `.jsx` files in `content/modules/care-plan-coverage/`
- All `.jsx` files in `content/modules/uda-viewer/`
- All `.jsx` files in `content/modules/ai-chat/`

**Events:** `dx_confirmation_opened`, `dx_confirmed`, `dx_rejected`, `dx_confirmation_completed`, `cert_view_opened`, `cert_clicked`, `care_plan_coverage_opened`, `care_plan_gap_clicked`, `uda_viewer_opened`, `uda_assessment_clicked`, `chat_opened` (if AI chat is distinct from super-menu chat-view).

**Commit:**
```bash
git add content/modules/diagnosis-confirmation/ content/modules/certifications/ content/modules/care-plan-coverage/ content/modules/uda-viewer/ content/modules/ai-chat/
git commit -m "feat(analytics): instrument Dx Confirm, Certs, Care Plan, UDA, AI Chat"
```

---

## Task 19: Instrumentation pass — ICD-10 Viewer

**Files:**
- All `.js` files in `content/icd10-viewer/` (vanilla)
- All `.jsx` files in `content/modules/icd10-sidebar/` (Preact)

**Events:** `icd10_viewer_opened`, `icd10_code_clicked`, `icd10_evidence_opened`, `icd10_pdf_opened`, `icd10_pdf_page_changed`, `icd10_search_used`.

**Note on `icd10_search_used`:** the `query_length_bucket` is computed client-side as `'short' | 'medium' | 'long'` based on input length. Never send the actual query text.

**Commit:**
```bash
git add content/icd10-viewer/ content/modules/icd10-sidebar/
git commit -m "feat(analytics): instrument ICD-10 Viewer"
```

---

## Task 20: Instrumentation pass — Evidence Viewers (vanilla)

**Files:**
- Modify: `content/evidence-viewers.js` (1,582 lines)

**Events:** `evidence_viewer_opened` (with `type` and `source` props — types include 'admin', 'clinical_notes', 'therapy', 'pdf', etc.), `evidence_viewer_closed` (with `type` and `duration_ms`).

**Pattern:** Each viewer's `show*Modal` function is a candidate for `evidence_viewer_opened` at the top. Each viewer's close handler emits `evidence_viewer_closed` with the elapsed time. Buttons within each modal get `data-track` for their specific actions (most are dismissive — `data-track-prop-action="close"` plus the type as a discriminator).

**Commit:**
```bash
git add content/evidence-viewers.js
git commit -m "feat(analytics): instrument evidence viewers"
```

---

## Task 21: Instrumentation pass — Feedback module + Update Banner + remaining shared components

**Files:**
- All files in `content/modules/feedback/`
- `content/components/UpdateBanner.jsx` (already done in Task 10 — verify)
- `content/components/Modal.jsx`, `ItemDetail.jsx`, `Selector.jsx`, `PDFViewer.jsx`
- `content/components/modal.js`, `dropdown.js`, `toast.js` (vanilla)

**Events:** `feedback_modal_opened`, `feedback_modal_dismissed`. (Submit funnel is in Task 23.)

For shared components: most internal buttons (modal close X, dropdown items) should NOT emit individual events — they're sub-elements of larger feature events. **Mark them with the `// NO_TRACK` marker** rather than wiring noise. Use the marker on the line above the `<button>` opening tag.

Example:
```jsx
{/* NO_TRACK — close X is part of the parent modal lifecycle */}
<button onClick={onClose} aria-label="Close">×</button>
```

**Commit:**
```bash
git add content/modules/feedback/ content/components/
git commit -m "feat(analytics): instrument Feedback module + shared components"
```

---

## Task 22: Async funnels — query send, chat stream, feedback submit, api_request_failed

**Files:**
- Modify: `content/queries/query-send-modal.js` (or wherever query submit happens)
- Modify: `content/super-menu/streaming.js` (chat stream)
- Modify: `content/modules/feedback/FeedbackModal.jsx`
- Modify: `background/background.js` (api_request_failed at the catch site)

**Pattern for funnel triples:** Wrap each async operation:
```js
const start = Date.now();
track('query_send_started', { item_code, recipient_role });
try {
  await sendQuery(...);
  track('query_send_succeeded', { duration_ms: Date.now() - start });
} catch (e) {
  track('query_send_failed', { error_code: String(e?.code || e?.name || 'unknown') });
  throw e;
}
```

**Note for background.js:** The service worker has a different module context than content scripts; importing `analytics.js` won't work directly because PostHog isn't initialized there and won't have user identity. Instead, when the SW catches an API error, post a message to the content script which calls `track('api_request_failed', { endpoint, status })` from there. The simplest path: don't track from background — track at the call site in the content script that originated the request.

**Commit:**
```bash
git add content/queries/ content/super-menu/streaming.js content/modules/feedback/
git commit -m "feat(analytics): wire async funnel triples (query/chat/feedback)"
```

---

## Task 23: Error events — error_shown at every toast/error-modal site

**Files:**
- Modify: every call site that shows a user-facing error toast or modal.

**How to find them:** grep across `content/`:
```bash
grep -rn "SuperToast\|toast(\|showError\|error_modal\|alert(" content/ | grep -v test
```

**Pattern:** Wherever an error toast/modal is shown, add a `track('error_shown', ...)` call right before:
```js
track('error_shown', {
  surface: 'query_send', // the module that failed
  error_code: String(err?.code || err?.status || 'unknown'),
  error_type: 'api_error', // or 'validation', 'timeout', 'permission', etc.
});
SuperToast.show({ message: 'Failed to send query', type: 'error' });
```

For uncaught try/catch hits we silently swallow (i.e. not user-visible but worth knowing about), use `error_caught`:
```js
} catch (e) {
  track('error_caught', { surface: 'icd10_search', error_code: String(e?.name || 'unknown') });
  // existing error handling
}
```

Be selective with `error_caught` — only add it where the catch already exists and is silently absorbed. Don't wrap new try/catch blocks just for tracking.

**Commit:**
```bash
git add content/  # likely many files
git commit -m "feat(analytics): error_shown + error_caught at every toast/error site"
```

---

## Task 24: Final verification

**Step 1: Lint passes clean**

```bash
npm run check:tracking
```
Expected: `[check-tracking] OK`

**Step 2: Build passes (which now includes lint)**

```bash
npm run build
```
Expected: clean build.

**Step 3: Bundle size sanity**

Compare to pre-PostHog baseline (892KB / 232KB gzip per Task 1's verification). Acceptable growth: posthog-js adds roughly 50–80KB gzip. If the new bundle is >320KB gzip, investigate.

**Step 4: Manual smoke test**

```bash
npm run dev
```

Then:
1. `chrome://extensions` → Reload Super LTC.
2. Open DevTools console on a PCC page.
3. Open the FAB, switch tabs, open every module at least once.
4. Submit a test query (with backend in dev mode).
5. Open and dismiss the feedback modal.
6. Click an ICD-10 code in the sidebar.
7. Watch the console for any `[analytics]` warnings (unknown event names = bug, fix them).
8. With the placeholder PostHog key, no actual events leave the browser — verify by Network tab having no requests to `us.i.posthog.com`. (Once the real key is provisioned, this test gets re-run with the real key in a separate environment.)

**Step 5: Final commit (if any clean-up made during smoke)**

```bash
git add -A
git commit -m "chore(analytics): smoke-test fixes"
```

(Skip if the smoke test surfaced no issues.)

---

## Task 25: PR

Once all tasks pass:

```bash
git push -u origin feat/posthog-analytics
gh pr create --title "feat: PostHog analytics instrumentation" --body "$(cat <<'EOF'
## Summary
- Adds `posthog-js` and a curated event taxonomy (~70 events) for the Chrome extension
- Direct-to-PostHog routing under BAA — no session replay, no autocapture, no pageview capture
- PHI guardrails at four layers: PostHog config, `track()` wrapper schema, runtime regex blocklist, build-time button lint
- Every interactive button across 14 modules + 6 super-menu views is instrumented via `data-track` (vanilla) or `<TrackedButton>` (Preact)
- `npm run check:tracking` runs as part of `npm run build` to fail closed if a new button lands un-tracked

## Out-of-PR follow-ups
- [ ] Sign BAA with PostHog (Scale plan)
- [ ] Update facility BAAs to authorize subcontractor processing for product analytics
- [ ] Provision PostHog project; replace `phc_PLACEHOLDER` (or wire `POSTHOG_KEY` env var into the build pipeline)
- [ ] Build initial dashboards in PostHog after first events flow

## Test plan
- [ ] `npm run check:tracking` passes
- [ ] `npm run build` passes
- [ ] Smoke test: FAB, every module open, query submit, feedback modal, ICD-10 click, panel tab switch — no console warnings
- [ ] With placeholder key, no network requests to `us.i.posthog.com` (verified)

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

---

## Notes on what's intentionally NOT in this PR

- **Real PostHog project key.** Ships with `phc_PLACEHOLDER` which disables PostHog entirely. Replace via `POSTHOG_KEY` env var or a direct edit to `vite.config.js` once the BAA is signed and the project is provisioned.
- **Dashboards.** Built in PostHog UI, not code.
- **Session replay.** Explicitly rejected in the design doc.
- **Autocapture / pageview capture.** Explicitly rejected.
- **Server-side proxy.** Considered and rejected — events flow direct from extension to PostHog.
