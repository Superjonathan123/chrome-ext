# MDS Command Center — Table Layout Redesign

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace busy card-style assessment rows with a clean table layout — column headers at top, one-line rows, detail stays in expand preview.

**Architecture:** CSS Grid on the list container defines columns. A sticky column header row sits above the assessment rows. Each AssessmentRow renders cells aligned to the same grid. All section/clinical/compliance detail removed from row — that info lives in AssessmentPreview (unchanged). Type filter dropdown switches from raw `assessmentType` strings to `assessmentClass`-based filtering with clean labels.

**Tech Stack:** Preact JSX, vanilla CSS (no build-time CSS modules)

---

### Task 1: Rewrite AssessmentRow.jsx — table-row layout

**Files:**
- Rewrite: `content/modules/mds-command-center/AssessmentRow.jsx`

**Step 1: Replace entire file with table-row component**

Delete all chip components (`ChecklistChip`, `SectionsChip`, `ClinicalChip`, `OrdersChip`, `QueriesChip`, `RevenueChip`), compliance parser (`parseCompliance`, `CLINICAL_KEYS`, etc.), and the two-line layout.

Replace with:

```jsx
/**
 * AssessmentRow — single table-row in the MDS Command Center.
 *
 * Columns: [dot] Patient | Type | ARD | Sections | Revenue | Due [chevron]
 *
 * All section/clinical/compliance detail lives in AssessmentPreview (expanded).
 */

const URGENCY_DOT_COLORS = {
  overdue: '#ef4444',
  urgent: '#f97316',
  approaching: '#eab308',
  on_track: '#22c55e',
  completed: '#6b7280',
};

const PAYER_COLORS = {
  medicare_a:   '#1d4ed8',
  managed_care: '#7c3aed',
  medicaid:     '#15803d',
};

const PAYER_LABELS = {
  medicare_a:   'Medicare',
  managed_care: 'Managed Care',
  medicaid:     'Medicaid',
};

function cleanAssessmentType(type) {
  if (!type) return '—';
  // Strip payer prefix if present (e.g. "Medicare - 5 Day" → "5 Day")
  // Also clean slashes and extra spaces
  return type
    .replace(/^(Medicare|Medicaid|Managed\s*Care)\s*[-–—]\s*/i, '')
    .replace(/\s*\/\s*/g, ' ')
    .replace(/\s*-\s*None\s*PPS\s*/i, '')
    .replace(/\s{2,}/g, ' ')
    .trim() || type;
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function getPaymentDelta(payment) {
  if (!payment?.isApplicable) return null;
  if (payment.ppd?.delta > 0)       return `est. +$${Math.round(payment.ppd.delta)}/day`;
  if (payment.texasPdpm?.delta > 0) return `+$${Math.round(payment.texasPdpm.delta)}/day`;
  if (payment.cmi?.delta > 0)       return `+${payment.cmi.delta.toFixed(2)} CMI`;
  return null;
}

function getSectionsText(sp) {
  if (!sp) return '—';
  const { completed = 0, total = 0, locked = 0 } = sp;
  if (total === 0) return '—';
  const lockedNote = locked > 0 ? ` (${locked} lkd)` : '';
  return `${completed}/${total}${lockedNote}`;
}

function getSectionsVariant(sp) {
  if (!sp || !sp.total) return '';
  if (sp.completed === sp.total) return 'mds-cc__cell--good';
  return 'mds-cc__cell--warn';
}

export function AssessmentRow({ assessment, isExpanded, onToggle }) {
  const {
    patientName, assessmentType, ardDate, pdpm, payerType,
    assessmentClass, hasDischargeComponent, sectionProgress,
  } = assessment;

  const hideRevenue = assessmentClass === 'end_of_stay';
  const showDischargeBadge = hasDischargeComponent && assessmentClass !== 'end_of_stay';
  const delta = hideRevenue ? null : getPaymentDelta(pdpm?.payment);
  const urgency = assessment.deadlines?.urgency;

  // Urgency pill
  let urgencyText = '';
  if (urgency === 'completed') urgencyText = 'Done';
  else if (urgency === 'overdue') urgencyText = 'Overdue';
  else if (assessment.deadlines?.completionDaysRemaining != null)
    urgencyText = `${assessment.deadlines.completionDaysRemaining}d`;

  return (
    <div
      class={`mds-cc__row${isExpanded ? ' mds-cc__row--expanded' : ''}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
    >
      {/* Col 1: Dot + Patient */}
      <div class="mds-cc__cell mds-cc__cell--patient">
        <span
          class="mds-cc__urgency-dot"
          style={{ background: URGENCY_DOT_COLORS[urgency] || '#9ca3af' }}
        />
        <span class="mds-cc__patient-name">{patientName || 'Unknown'}</span>
      </div>

      {/* Col 2: Payer · Type */}
      <div class="mds-cc__cell mds-cc__cell--type">
        {PAYER_LABELS[payerType] && (
          <span style={{ color: PAYER_COLORS[payerType] || 'inherit', fontWeight: 600 }}>
            {PAYER_LABELS[payerType]}
          </span>
        )}
        <span class="mds-cc__type-sep">·</span>
        <span>{cleanAssessmentType(assessmentType)}</span>
        {showDischargeBadge && <span class="mds-cc__discharge-chip">+ Disch</span>}
      </div>

      {/* Col 3: ARD */}
      <div class="mds-cc__cell mds-cc__cell--ard">
        {formatDate(ardDate)}
      </div>

      {/* Col 4: Sections */}
      <div class={`mds-cc__cell mds-cc__cell--sections ${getSectionsVariant(sectionProgress)}`}>
        {getSectionsText(sectionProgress)}
      </div>

      {/* Col 5: Revenue */}
      <div class="mds-cc__cell mds-cc__cell--revenue">
        {delta && <span class="mds-cc__delta">{delta}</span>}
      </div>

      {/* Col 6: Due */}
      <div class="mds-cc__cell mds-cc__cell--due">
        {urgencyText && (
          <span class={`mds-cc__pill mds-cc__pill--${urgency || 'default'}`}>{urgencyText}</span>
        )}
      </div>

      {/* Chevron */}
      <div class="mds-cc__cell mds-cc__cell--chevron">
        <span class={`mds-cc__chevron${isExpanded ? ' mds-cc__chevron--open' : ''}`}>›</span>
      </div>
    </div>
  );
}
```

Key changes from current:
- Removed: `parseCompliance`, `ChecklistChip`, all 5 chip components, `PayerPill` (replaced with colored text)
- Kept: `UrgencyDot` colors (inline now), `getPaymentDelta`, `formatDate`
- `cleanAssessmentType` now strips payer prefix and "None PPS" suffix for cleaner display
- Row is a single CSS Grid row — no line 2

**Step 2: Verify build**

Run: `npm run build`
Expected: Clean build (warnings about chunk size OK)

**Step 3: Commit**

```
git add content/modules/mds-command-center/AssessmentRow.jsx
git commit -m "refactor: AssessmentRow to table-row layout, remove chips"
```

---

### Task 2: Add column header + class filter to MDSCommandCenter.jsx

**Files:**
- Modify: `content/modules/mds-command-center/MDSCommandCenter.jsx`

**Step 1: Replace typeFilter with classFilter**

Change state from `typeFilter` to `classFilter`:

```jsx
// Replace this line:
const [typeFilter, setTypeFilter] = useState('all');

// With:
const [classFilter, setClassFilter] = useState('all');
```

Remove the `assessmentTypes` useMemo block (lines ~278-285). It's no longer needed — class options are static.

Update `displayedAssessments` to use `classFilter`:
```jsx
const displayedAssessments = useMemo(() => {
  const filtered = filterAssessments(assessments, actionFilter, payerFilter, classFilter);
  return sortAssessments(filtered, sortBy, sortDir);
}, [assessments, actionFilter, payerFilter, classFilter, sortBy, sortDir]);
```

Update `filterAssessments` — change the typeFilter block:
```jsx
// Replace:
if (typeFilter !== 'all') {
  result = result.filter(a => a.assessmentType === typeFilter);
}

// With:
if (classFilter !== 'all') {
  result = result.filter(a => a.assessmentClass === classFilter);
}
```

Update props passed to `CommandCenterHeader`:
```jsx
// Replace typeFilter/onTypeFilterChange/assessmentTypes with:
classFilter={classFilter}
onClassFilterChange={setClassFilter}
```

**Step 2: Add column header row above the assessment list**

Inside the assessments render block, before the `displayedAssessments.map(...)`, add:

```jsx
{displayedAssessments.length > 0 && (
  <div class="mds-cc__col-header" role="row" aria-hidden="true">
    <div class="mds-cc__col-label mds-cc__cell--patient">Patient</div>
    <div class="mds-cc__col-label mds-cc__cell--type">Type</div>
    <div class="mds-cc__col-label mds-cc__cell--ard">ARD</div>
    <div class="mds-cc__col-label mds-cc__cell--sections">Sections</div>
    <div class="mds-cc__col-label mds-cc__cell--revenue">Revenue</div>
    <div class="mds-cc__col-label mds-cc__cell--due">Due</div>
    <div class="mds-cc__col-label mds-cc__cell--chevron"></div>
  </div>
)}
```

**Step 3: Verify build**

Run: `npm run build`

**Step 4: Commit**

```
git add content/modules/mds-command-center/MDSCommandCenter.jsx
git commit -m "feat: add column header, switch to assessmentClass filter"
```

---

### Task 3: Update CommandCenterHeader.jsx — class dropdown

**Files:**
- Modify: `content/modules/mds-command-center/CommandCenterHeader.jsx`

**Step 1: Replace type dropdown with class dropdown**

Update props — rename `typeFilter`/`onTypeFilterChange`/`assessmentTypes` to `classFilter`/`onClassFilterChange` (remove `assessmentTypes`).

Replace the type `<select>` block with:

```jsx
<select
  class="mds-cc__compact-select"
  value={classFilter}
  onChange={(e) => onClassFilterChange(e.target.value)}
  aria-label="Assessment class filter"
>
  <option value="all">All Classes</option>
  <option value="pps_payment">PPS / Payment</option>
  <option value="obra_cmi">OBRA / CMI</option>
  <option value="end_of_stay">End of Stay</option>
</select>
```

**Step 2: Verify build**

Run: `npm run build`

**Step 3: Commit**

```
git add content/modules/mds-command-center/CommandCenterHeader.jsx
git commit -m "feat: class-based filter dropdown (PPS, OBRA, End of Stay)"
```

---

### Task 4: CSS — table grid layout + cleanup

**Files:**
- Modify: `content/css/mds-command-center.css`

**Step 1: Replace row styles with CSS Grid table layout**

Replace the `.mds-cc__row` and `.mds-cc__row-main` blocks (lines ~212-236) with:

```css
/* Table grid — shared by column header + each row */
.mds-cc__table-grid {
  display: grid;
  grid-template-columns: minmax(180px, 2fr) minmax(140px, 1.5fr) 70px 70px minmax(90px, 1fr) 80px 28px;
  align-items: center;
  gap: 0 8px;
  padding: 0 20px;
}

/* Column header */
.mds-cc__col-header {
  composes: mds-cc__table-grid; /* won't work in plain CSS — use both classes or duplicate */
  display: grid;
  grid-template-columns: minmax(180px, 2fr) minmax(140px, 1.5fr) 70px 70px minmax(90px, 1fr) 80px 28px;
  align-items: center;
  gap: 0 8px;
  padding: 6px 20px;
  border-bottom: 1px solid var(--super-gray-200, #e5e7eb);
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
}
.mds-cc__col-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--super-gray-400, #9ca3af);
  font-family: var(--super-font, sans-serif);
}

/* Row — same grid */
.mds-cc__row {
  display: grid;
  grid-template-columns: minmax(180px, 2fr) minmax(140px, 1.5fr) 70px 70px minmax(90px, 1fr) 80px 28px;
  align-items: center;
  gap: 0 8px;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
  transition: background 0.1s;
}
.mds-cc__row:hover {
  background: var(--super-gray-50, #f9fafb);
}
.mds-cc__row--expanded {
  background: var(--super-gray-50, #f9fafb);
}
.mds-cc__row:focus {
  outline: 2px solid var(--super-primary-light, #818cf8);
  outline-offset: -2px;
}
```

**Step 2: Add cell styles**

```css
/* Cells */
.mds-cc__cell {
  font-size: 12px;
  font-family: var(--super-font, sans-serif);
  color: var(--super-gray-700, #374151);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mds-cc__cell--patient {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.mds-cc__cell--patient .mds-cc__patient-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--super-gray-900, #111827);
  overflow: hidden;
  text-overflow: ellipsis;
}

.mds-cc__cell--type {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--super-gray-600, #4b5563);
}
.mds-cc__type-sep {
  color: var(--super-gray-300, #d1d5db);
}

.mds-cc__cell--ard {
  color: var(--super-gray-500, #6b7280);
}

.mds-cc__cell--sections {
  font-weight: 600;
  color: var(--super-gray-400, #9ca3af);
}
.mds-cc__cell--good {
  color: #15803d;
}
.mds-cc__cell--warn {
  color: #c2410c;
}

.mds-cc__cell--revenue {}
.mds-cc__delta {
  font-size: 12px;
  font-weight: 700;
  color: #15803d;
}

.mds-cc__cell--due {
  text-align: right;
}

.mds-cc__cell--chevron {
  text-align: center;
}
```

**Step 3: Remove old chip and card styles**

Delete these blocks from the CSS:
- `.mds-cc__row-main` (line ~232) — replaced by grid
- `.mds-cc__row-info` (line ~248) — replaced by cell--patient
- `.mds-cc__assessment-type` (line ~267) — now inside cell--type
- `.mds-cc__ard-date` (line ~274) — now cell--ard
- `.mds-cc__row-badges` (line ~282) — no longer used
- `.mds-cc__row-checklist` (line ~368) — removed
- `.mds-cc__cl-chip*` (lines ~375-400) — all removed
- `.mds-cc__payer-pill` (line ~302) — replaced with colored inline text
- `.mds-cc__icon-badge*` (lines ~356-363) — no longer used

Keep: `.mds-cc__urgency-dot`, `.mds-cc__pill*`, `.mds-cc__chevron*`, `.mds-cc__discharge-chip`, all preview/detail styles.

**Step 4: Verify build**

Run: `npm run build`

**Step 5: Commit**

```
git add content/css/mds-command-center.css
git commit -m "feat: CSS grid table layout for assessment list"
```

---

### Task 5: Smoke test

**Step 1: Full build**

Run: `npm run build`
Expected: Clean build, no errors.

**Step 2: Manual verification checklist**

Reload extension in chrome://extensions, open MDS Command Center overlay:

- [ ] Column header row visible at top (Patient, Type, ARD, Sections, Revenue, Due)
- [ ] Each row is one clean line — no second line of chips
- [ ] Patient column shows dot + name
- [ ] Type column shows colored payer text + type (e.g. "Medicare · 5 Day")
- [ ] Sections column shows fraction (e.g. "0/17") colored orange, or green when complete
- [ ] Revenue column shows delta when applicable, blank otherwise
- [ ] Due column shows urgency pill
- [ ] Clicking row expands AssessmentPreview with full detail (HIPPS, sections, compliance, actions)
- [ ] Class filter dropdown shows: All Classes, PPS / Payment, OBRA / CMI, End of Stay
- [ ] Selecting a class filters the list correctly
- [ ] Payer filter still works
- [ ] Sort pills still work
- [ ] Queries tab still works (unrelated component)
- [ ] "+ Disch" badge appears on combined discharge assessments

**Step 3: Final commit**

```
git add -A
git commit -m "MDS Command Center: table layout redesign + class filter"
```
