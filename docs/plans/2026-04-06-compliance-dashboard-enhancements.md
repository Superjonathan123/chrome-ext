# Compliance Dashboard Enhancements — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade the Compliance tab from a flat patient list to an actionable dashboard with trend charts, smart groupings, sparklines, and full patient navigation.

**Architecture:** Add two new data hooks (`useTrending`, `usePatientHistory`) for the new endpoints. Enhance ComplianceView with a trend chart (pure CSS/SVG, no chart library), "Needs Attention" smart sections, per-patient sparklines, and a "Go to Patient" link on each row. Patient rows get two click targets: the row itself opens the coverage panel, a navigate button goes to the PCC patient page.

**Tech Stack:** Preact, CSS, SVG polylines for charts (no external dependencies)

---

### Task 1: Trending Data Hook

**Files:**
- Create: `content/modules/care-plan-coverage/hooks/useTrending.js`

**Step 1: Create the hook**

```javascript
// Fetches GET /api/extension/compliance/dashboard/trending?days=30
// Returns { data, loading, error, retry }
// data shape: { days: [{ date, averageScore, totalGaps }] }
```

Pattern: identical to `useComplianceDashboard.js` — `chrome.runtime.sendMessage({ type: 'API_REQUEST', endpoint })`, `useState`/`useEffect`/`useCallback`.

Endpoint: `/api/extension/compliance/dashboard/trending?days=${days}&facilityName=...&orgSlug=...`

Expose: `{ data, loading, error }`

**Step 2: Build**

Run: `npm run build`

---

### Task 2: Facility Trend Chart Component

**Files:**
- Create: `content/modules/care-plan-coverage/components/TrendChart.jsx`

**Step 1: Create the component**

Pure SVG polyline chart — no library needed. Props: `{ days }` (array from trending endpoint).

Structure:
```
TrendChart({ days })
  ├── SVG viewBox 300x80
  │   ├── Filled area polygon (score over time, translucent fill)
  │   ├── Score polyline (solid line)
  │   └── Gap bar hints (subtle red ticks at bottom for high-gap days)
  ├── Left label: first date
  ├── Right label: latest date
  └── Current score callout (latest day's averageScore, bold)
```

Key details:
- Map `days[].averageScore` (0-100) to Y coordinates (invert: 100=top, 0=bottom)
- Map days to X coordinates (evenly spaced)
- Polyline `points` attribute: `"x1,y1 x2,y2 ..."`
- Color the line by latest score tier (green/amber/red)
- Area fill: same color at 10% opacity
- Width: 100% of parent. Height: 80px. Inline SVG.
- Handle empty/short data gracefully (show "Not enough data" if < 3 days)

**Step 2: Build**

Run: `npm run build`

---

### Task 3: Patient History Hook (Sparkline Data)

**Files:**
- Create: `content/modules/care-plan-coverage/hooks/usePatientHistory.js`

**Step 1: Create the hook**

This is different from the other hooks — it's called per-patient-row, so it needs to be batch-friendly. Instead of one hook per patient, create a **batch fetcher** that the ComplianceView calls once for all visible patients.

```javascript
// fetchPatientHistories(patientIds, facilityName, orgSlug)
// Returns Map<patientId, { scores: [{ date, score }] }>
//
// Calls: GET /api/extension/patients/:patientId/coverage/history?limit=10
// for each patient (in parallel, max 10 concurrent)
```

Export as a plain async function (not a hook) — called from ComplianceView's useEffect.

**Step 2: Build**

Run: `npm run build`

---

### Task 4: Sparkline Component

**Files:**
- Create: `content/modules/care-plan-coverage/components/Sparkline.jsx`

**Step 1: Create the component**

Tiny inline SVG. Props: `{ scores, width, height }` (defaults: 48px x 16px).

```
Sparkline({ scores, width=48, height=16 })
  └── SVG with polyline
      - scores mapped to points
      - Color: green if trending up, red if trending down, gray if flat
      - No axes, no labels — just the line
```

Trending logic: compare last score to first score. Up = green, down = red, same = gray.

Handle: empty scores → render nothing. Single score → render a dot.

**Step 2: Build**

Run: `npm run build`

---

### Task 5: Smart "Needs Attention" Grouping

**Files:**
- Modify: `content/modules/care-plan-coverage/ComplianceView.jsx`

**Step 1: Add smart grouping logic**

Above the patient list, add a "Needs Attention" section with three collapsible groups:

1. **"New Gaps"** — patients where `stale: true` (data changed since last check, likely new gaps). Red accent.
2. **"Declining"** — patients whose sparkline trends down (latest score < earliest score in history). Orange accent. Requires history data from Task 3.
3. **"Never Checked"** — patients where `hasResults: false`. Gray accent.

Each group:
- Shows count in header: "New Gaps (3)"
- Collapsed by default if empty
- Expanded by default if non-empty
- Contains the same PatientRow components (reuse existing)
- Patients in "Needs Attention" still appear in the main list below (they're not removed, just highlighted above)

**Step 2: Build**

Run: `npm run build`

---

### Task 6: Navigate to Patient in PCC

**Files:**
- Modify: `content/modules/care-plan-coverage/ComplianceView.jsx`

**Step 1: Add navigation to PatientRow**

The existing PCC navigation pattern (from `facility-dashboard-view.js:685-693`):
```javascript
const origin = new URL(window.location.href).origin;
window.location.href = `${origin}/admin/client/cp_residentdashboard.jsp?ESOLrow=1&ESOLclientid=${patientId}`;
```

Add two click targets per patient row:
1. **Row click** → opens CoveragePanel for that patient (existing `onOpenCoverage` behavior)
2. **"Go to Patient" arrow button** (right side) → navigates to PCC patient page

The arrow button needs `e.stopPropagation()` so it doesn't also trigger the row click.

PatientRow changes:
```jsx
<div class="cpc-cv__row" onClick={() => onOpenCoverage(patient)}>
  {/* ... existing content ... */}
  <button
    class="cpc-cv__row-nav"
    title="Go to patient in PCC"
    onClick={(e) => {
      e.stopPropagation();
      const origin = new URL(window.location.href).origin;
      window.location.href = `${origin}/admin/client/cp_residentdashboard.jsp?ESOLrow=1&ESOLclientid=${patient.patientId}`;
    }}
  >
    → 
  </button>
</div>
```

**Step 2: Build**

Run: `npm run build`

---

### Task 7: Wire Trend Chart + Sparklines into ComplianceView

**Files:**
- Modify: `content/modules/care-plan-coverage/ComplianceView.jsx`

**Step 1: Import and integrate**

Wire everything together:

1. Import `useTrending` hook, call it in ComplianceView. Render `TrendChart` above the summary cards.
2. Import `fetchPatientHistories`, call it in a `useEffect` when `data.patients` loads. Store results in state as `Map<patientId, scores[]>`.
3. Pass sparkline data to each `PatientRow` via `sparklineScores={histories.get(patient.patientId)}`.
4. Import and render `Sparkline` in `PatientRow` between the score and gaps columns.

Layout order in ComplianceView:
```
TrendChart (full width, 80px)
SummaryCards (4 stat cards)
NeedsAttention sections (if any)
Filter pills
Patient list (with sparklines + nav buttons)
```

**Step 2: Build and verify**

Run: `npm run build`
Verify: CoveragePanel chunk and MDSCommandCenter chunk both build. No import errors.

---

### Task 8: CSS for New Components

**Files:**
- Modify: `content/css/care-plan-coverage.css`

**Step 1: Add styles**

Trend chart:
- `.cpc-cv__trend` — container, full width, margin-bottom
- `.cpc-cv__trend-labels` — flex row for date labels
- `.cpc-cv__trend-callout` — latest score, positioned top-right

Sparkline:
- `.cpc-cv__sparkline` — inline-block in patient row

Needs Attention:
- `.cpc-cv__attention` — section container, margin-bottom
- `.cpc-cv__attention-group` — collapsible group with colored left border
- `.cpc-cv__attention-header` — clickable header with count badge
- `.cpc-cv__attention-header--red/orange/gray` — accent colors

Navigate button:
- `.cpc-cv__row-nav` — small arrow button, right side of row, subtle until hover

**Step 2: Build**

Run: `npm run build`

---

### Task 9: Final Integration + Build

**Step 1: Full build**

Run: `npm run build`

**Step 2: Verify chunk sizes**

Check that MDSCommandCenter chunk didn't balloon (should be <80KB). The trend/sparkline components are small SVG — no library bloat.

**Step 3: Manual verification checklist**

- [ ] MDS Command Center → Compliance tab → trend chart shows at top
- [ ] Summary cards show facility stats
- [ ] "Needs Attention" sections appear for stale/declining/unchecked patients
- [ ] Patient rows show mini sparklines
- [ ] Click patient row → Coverage Panel opens for that patient
- [ ] Click arrow button on row → navigates to PCC patient page
- [ ] Filter pills work (All, With Gaps, Unchecked, Stale)
- [ ] Empty states render correctly

---

## Key Files Reference

| File | Role |
|------|------|
| `content/modules/care-plan-coverage/ComplianceView.jsx` | Main view (modify heavily) |
| `content/modules/care-plan-coverage/components/TrendChart.jsx` | NEW — facility trend |
| `content/modules/care-plan-coverage/components/Sparkline.jsx` | NEW — per-patient trend |
| `content/modules/care-plan-coverage/hooks/useTrending.js` | NEW — trending endpoint |
| `content/modules/care-plan-coverage/hooks/usePatientHistory.js` | NEW — batch history fetch |
| `content/css/care-plan-coverage.css` | Styles (append) |
| `content/super-menu/facility-dashboard-view.js:685-693` | PCC navigation pattern to reuse |
| `content/modules/mds-command-center/MDSCommandCenter.jsx` | Parent (already wired) |

## Endpoints Used

| Endpoint | Component |
|----------|-----------|
| `GET /api/extension/compliance/dashboard` | SummaryCards + patient list (already wired) |
| `GET /api/extension/compliance/dashboard/trending?days=30` | TrendChart (Task 2) |
| `GET /api/extension/patients/:id/coverage/history?limit=10` | Sparkline per patient (Task 4) |
