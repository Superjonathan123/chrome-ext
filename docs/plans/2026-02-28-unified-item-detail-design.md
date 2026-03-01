# Unified Item Detail View — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace both `ItemPopover` (coding modal) and `ItemDetailView` (PDPM analyzer detail) with a single shared `<ItemDetail>` component that shows validation steps (check/X) for Section I items, with variant-based differences for HIPPS and key findings.

**Architecture:** Extract duplicated evidence helpers into a shared utility. Create one `ItemDetail.jsx` component with a `variant` prop (`"compact"` for coding modal, `"full"` for PDPM detail). Each parent component keeps its own outer shell (backdrop/back-button) and delegates the body to `<ItemDetail>`. New CSS goes in `content/css/item-detail.css`.

**Tech Stack:** Preact, CSS (BEM with `sid__` prefix — "super item detail")

---

### Task 1: Extract shared evidence helpers

Both `ItemPopover.jsx` and `ItemDetailView.jsx` have **identical** copies of these functions: `inferSourceType`, `SOURCE_LABELS`, `parseViewer`, `openEvidence`, `getActionText`. Extract them once.

**Files:**
- Create: `content/utils/evidence-helpers.js`
- Modify: `content/modules/mds-command-center/ItemPopover.jsx` (remove duplicated functions, import from utils)
- Modify: `content/modules/pdpm-analyzer/components/ItemDetailView.jsx` (remove duplicated functions, import from utils)

**Step 1: Create the shared evidence helpers file**

```js
// content/utils/evidence-helpers.js

export function inferSourceType(displayName, evidenceId) {
  if (evidenceId) {
    if (evidenceId.startsWith('order-')) return 'order';
    if (evidenceId.startsWith('mar-')) return 'mar';
    if (evidenceId.startsWith('lab-')) return 'lab-result';
  }
  if (!displayName) return 'document';
  const lower = displayName.toLowerCase();
  if (lower.includes('dc_summary') || lower.includes('discharge')) return 'progress-note';
  if (lower.includes('lab')) return 'lab-result';
  if (lower.includes('order')) return 'order';
  if (lower.includes('mar')) return 'mar';
  if (lower.includes('vital')) return 'vital-signs';
  if (lower.includes('nursing')) return 'nursing-note';
  if (lower.includes('history') || lower.includes('h&p') || lower.includes('physical')) return 'progress-note';
  if (lower.includes('eval') || lower.includes('st ') || lower.includes('slp')) return 'progress-note';
  return 'document';
}

export const SOURCE_LABELS = {
  'order': 'Order',
  'mar': 'MAR',
  'lab-result': 'Lab',
  'progress-note': 'Progress Note',
  'nursing-note': 'Nursing Note',
  'vital-signs': 'Vitals',
  'therapy-doc': 'Therapy Doc',
  'document': 'Document',
};

export function parseViewer(ev) {
  const sourceType = ev.sourceType || '';
  const sourceId = ev.sourceId || ev.id || '';
  const evType = ev.type || '';
  const evidenceId = ev.evidenceId || sourceId;

  if (sourceType === 'progress-note' && sourceId) return { viewerType: 'clinical-note', id: sourceId };
  if (sourceType === 'therapy-doc' && sourceId) return { viewerType: 'therapy-document', id: sourceId };
  if (sourceType === 'document' && sourceId) return { viewerType: 'document', id: sourceId };

  if (evType === 'clinical_note' && sourceId)
    return { viewerType: 'clinical-note', id: sourceId.replace(/^pcc-prognote-/, '').replace(/^patient-practnote-/, '') };
  if (evType === 'therapy_document' && sourceId)
    return { viewerType: 'therapy-document', id: sourceId.replace(/^therapy-doc-/, '') };
  if (evType === 'document' && sourceId) return { viewerType: 'document', id: sourceId };

  if (evidenceId) {
    if (evidenceId.startsWith('therapy-doc-')) return { viewerType: 'therapy-document', id: evidenceId.replace('therapy-doc-', '') };
    if (evidenceId.startsWith('pcc-prognote-')) return { viewerType: 'clinical-note', id: evidenceId.replace('pcc-prognote-', '') };
    if (evidenceId.startsWith('patient-practnote-')) return { viewerType: 'clinical-note', id: evidenceId.replace('patient-practnote-', '') };
    if (evidenceId.includes('-chunk-')) return { viewerType: 'document', id: evidenceId.split('-chunk-')[0] };
  }
  return { viewerType: null, id: null };
}

export function openEvidence(ev) {
  const viewer = parseViewer(ev);
  const quote = ev.quoteText || ev.quote || ev.snippet || '';
  if (viewer.viewerType === 'clinical-note' && viewer.id)
    return window.showClinicalNoteModal?.(viewer.id);
  if (viewer.viewerType === 'therapy-document' && viewer.id)
    return window.showTherapyDocModal?.(viewer.id, quote);
  if (viewer.viewerType === 'document' && viewer.id)
    return window.showDocumentModal?.(viewer.id, ev.wordBlocks || []);
  const orderId = ev.sourceId || ev.evidenceId || '';
  if ((ev.sourceType === 'order' || orderId.startsWith('order-')) && window.showAdministrationModal)
    return window.showAdministrationModal(orderId.replace(/^order-/, ''));
  window.SuperDocViewer?.open(ev);
}

export function getActionText(ev) {
  const viewer = parseViewer(ev);
  if (ev.sourceType === 'order' || (ev.evidenceId || '').startsWith('order-')) return 'View Administrations';
  if (viewer.viewerType === 'therapy-document') return 'View Document';
  if (viewer.viewerType === 'clinical-note') return 'View Note';
  if (viewer.viewerType === 'document') return 'View PDF';
  return null;
}
```

**Step 2: Update imports in both files**

In both `ItemPopover.jsx` and `ItemDetailView.jsx`, replace the ~80 lines of duplicated helper functions with:

```js
import { inferSourceType, SOURCE_LABELS, parseViewer, openEvidence, getActionText } from '../../utils/evidence-helpers.js';
```

(Adjust relative path for each file — `ItemDetailView.jsx` is one level deeper: `'../../../utils/evidence-helpers.js'`)

**Step 3: Build and verify no regressions**

Run: `npm run build`
Expected: Clean build, no errors.

**Step 4: Commit**

```bash
git add content/utils/evidence-helpers.js content/modules/mds-command-center/ItemPopover.jsx content/modules/pdpm-analyzer/components/ItemDetailView.jsx
git commit -m "refactor: extract shared evidence helpers from ItemPopover and ItemDetailView"
```

---

### Task 2: Create the shared ItemDetail component

The core new component. Handles the body content for both variants.

**Files:**
- Create: `content/components/ItemDetail.jsx`
- Create: `content/css/item-detail.css`
- Modify: `content/content.js` (import the new CSS)

**Props:**

```
variant        "compact" | "full"
data           API response object (from useItemDetail): { item, diagnosisSummary, treatmentSummary, ... }
detectionItem  The detection item passed from parent (has .impact, .mdsItem, .itemName, .categoryKey)
mdsItem        The MDS item code string (e.g. "I0600")
onAction       Callback for primary action (query physician)
```

**Step 1: Create the CSS file `content/css/item-detail.css`**

```css
/* ============================================
   Shared Item Detail (coding modal + PDPM detail)
   Prefix: sid__ (super item detail)
   ============================================ */

/* ── Verdict badge ── */
.sid__verdict {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.sid__verdict-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.sid__verdict-dot--code    { background: #22c55e; }
.sid__verdict-dot--no-code { background: #ef4444; }
.sid__verdict-dot--query   { background: #f59e0b; }

.sid__verdict-text {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

/* ── Validation steps (Section I) ── */
.sid__steps {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e7eb;
}

.sid__step {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 16px;
  border-left: 3px solid transparent;
}

.sid__step + .sid__step {
  border-top: 1px dashed #e5e7eb;
}

.sid__step--pass {
  border-left-color: #22c55e;
}

.sid__step--fail {
  border-left-color: #ef4444;
}

.sid__step-icon {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 1px;
}

.sid__step-icon--pass { color: #22c55e; }
.sid__step-icon--fail { color: #ef4444; }

.sid__step-content {
  flex: 1;
  min-width: 0;
}

.sid__step-label {
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.sid__step-summary {
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
  line-height: 1.4;
}

/* ── Rationale block (non-Section-I) ── */
.sid__rationale {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 13px;
  color: #374151;
  line-height: 1.5;
}

.sid__rationale-label {
  font-size: 11px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
}

/* ── Column answer (Section O) ── */
.sid__col-answer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.sid__col-badge {
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
}

.sid__col-badge--yes { color: #065f46; background: #d1fae5; }
.sid__col-badge--no  { color: #6b7280; background: #f3f4f6; }

.sid__col-label {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
}

.sid__col-dates {
  font-size: 11px;
  color: #9ca3af;
}

/* ── HIPPS impact chips ── */
.sid__impacts {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.sid__impact {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  background: #f0fdf4;
  color: #065f46;
}

.sid__impact-from { opacity: 0.65; }
.sid__impact-to   { color: #059669; }

/* ── Evidence section ── */
.sid__evidence {
  padding: 10px 16px;
}

.sid__ev-label {
  font-size: 11px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}

.sid__ev-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sid__ev-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 12px;
  background: #fff;
}

.sid__ev-card--clickable {
  cursor: pointer;
  transition: border-color 0.12s, box-shadow 0.12s;
}

.sid__ev-card--clickable:hover {
  border-color: #c7d2fe;
  box-shadow: 0 1px 4px rgba(99, 102, 241, 0.1);
}

.sid__ev-header {
  margin-bottom: 6px;
}

.sid__ev-type {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 2px 6px;
  border-radius: 3px;
  display: inline-block;
}

.sid__ev-type--order         { background: #ede9fe; color: #7c3aed; }
.sid__ev-type--mar           { background: #ecfeff; color: #0891b2; }
.sid__ev-type--lab-result    { background: #fdf2f8; color: #db2777; }
.sid__ev-type--progress-note { background: #ecfdf5; color: #059669; }
.sid__ev-type--nursing-note  { background: #fffbeb; color: #d97706; }
.sid__ev-type--vital-signs   { background: #eef2ff; color: #4f46e5; }
.sid__ev-type--therapy-doc   { background: #f0fdfa; color: #0d9488; }
.sid__ev-type--document      { background: #f1f5f9; color: #64748b; }
.sid__ev-type--clinical_note { background: #ecfdf5; color: #059669; }

.sid__ev-quote {
  font-size: 12px;
  color: #374151;
  line-height: 1.45;
  font-style: italic;
}
.sid__ev-quote::before { content: '\201C'; }
.sid__ev-quote::after  { content: '\201D'; }

.sid__ev-rationale {
  font-size: 11px;
  color: #6b7280;
  margin-top: 4px;
  line-height: 1.35;
}

.sid__ev-action {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 600;
  color: #6366f1;
}
.sid__ev-action svg { flex-shrink: 0; }

.sid__ev-show-more {
  display: block;
  margin: 8px auto 0;
  padding: 4px 12px;
  font-size: 12px;
  color: #6366f1;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
}
.sid__ev-show-more:hover { text-decoration: underline; }

/* ── Key findings (collapsible) ── */
.sid__findings-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  background: none;
  border: none;
  border-top: 1px solid #e5e7eb;
  width: 100%;
  cursor: pointer;
  text-align: left;
}
.sid__findings-toggle:hover { background: #f9fafb; }

.sid__findings-arrow {
  transition: transform 0.2s ease;
  color: #9ca3af;
}
.sid__findings-arrow--open {
  transform: rotate(90deg);
}

.sid__findings {
  list-style: none;
  margin: 0;
  padding: 0 16px 10px 32px;
}

.sid__findings li {
  position: relative;
  font-size: 12px;
  color: #374151;
  line-height: 1.4;
  padding: 4px 0;
  border-bottom: 1px solid #f3f4f6;
}
.sid__findings li:last-child { border-bottom: none; }

.sid__findings li::before {
  content: '';
  position: absolute;
  left: -14px;
  top: 11px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #d1d5db;
}

/* ── Sticky actions ── */
.sid__actions {
  position: sticky;
  bottom: 0;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding: 12px 16px;
  background: #fff;
  border-top: 1px solid #e5e7eb;
  flex-shrink: 0;
}

.sid__btn {
  padding: 7px 14px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background 0.12s;
}

.sid__btn--primary {
  background: #6366f1;
  color: #fff;
}
.sid__btn--primary:hover { background: #4f46e5; }

.sid__btn--secondary {
  background: #f3f4f6;
  color: #374151;
}
.sid__btn--secondary:hover { background: #e5e7eb; }

/* ── Column tabs (Section O) ── */
.sid__coltabs {
  display: flex;
  gap: 4px;
  padding: 8px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.sid__coltab {
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #6b7280;
  transition: all 0.12s;
}
.sid__coltab--on {
  background: #eef2ff;
  border-color: #c7d2fe;
  color: #4338ca;
}

.sid__coltab-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #d1d5db;
}
.sid__coltab-dot--yes { background: #059669; }

/* ── Sub-items (Section O) ── */
.sid__subs {
  padding: 0 16px 8px;
  display: flex;
  flex-direction: column;
}

.sid__sub {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 8px;
  border-bottom: 1px solid #f3f4f6;
  font-size: 12px;
  color: #6b7280;
}
.sid__sub:last-child { border-bottom: none; }
.sid__sub--on { background: #f0fdf4; }

.sid__sub-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  background: #f3f4f6;
  color: #9ca3af;
  flex-shrink: 0;
}
.sid__sub-dot--yes { color: #059669; background: #d1fae5; }

.sid__sub-name {
  color: #374151;
}
.sid__sub--on .sid__sub-name { color: #065f46; font-weight: 600; }
```

**Step 2: Create the `ItemDetail.jsx` component**

```jsx
// content/components/ItemDetail.jsx
import { useState } from 'preact/hooks';
import { inferSourceType, SOURCE_LABELS, openEvidence, getActionText } from '../utils/evidence-helpers.js';

/* ── SVG icons ── */

const CheckIcon = () => (
  <svg class="sid__step-icon sid__step-icon--pass" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg class="sid__step-icon sid__step-icon--fail" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

/* ── Sub-components ── */

function EvidenceCard({ ev }) {
  const quote = ev.quoteText || ev.orderDescription || ev.quote || ev.snippet || ev.text || '';
  if (!quote) return null;

  const sourceType = ev.sourceType || inferSourceType(ev.displayName, ev.evidenceId);
  const typeLabel = ev.displayName || SOURCE_LABELS[sourceType] || sourceType;
  const actionText = getActionText(ev);
  const isClickable = !!actionText;

  return (
    <div
      class={`sid__ev-card${isClickable ? ' sid__ev-card--clickable' : ''}`}
      onClick={isClickable ? () => openEvidence(ev) : undefined}
      role={isClickable ? 'button' : undefined}
    >
      <div class="sid__ev-header">
        <span class={`sid__ev-type sid__ev-type--${sourceType}`}>{typeLabel}</span>
      </div>
      <div class="sid__ev-quote">{quote}</div>
      {ev.rationale && <div class="sid__ev-rationale">{ev.rationale}</div>}
      {isClickable && (
        <div class="sid__ev-action">
          <span>{actionText}</span>
          <ArrowIcon />
        </div>
      )}
    </div>
  );
}

function ImpactChip({ label, impact }) {
  if (!impact) return null;
  if (!impact.wouldChangeGroup && !impact.wouldChangeLevel) return null;
  const from = impact.currentGroup || impact.currentLevel || impact.currentPaymentGroup;
  const to = impact.newGroup || impact.newLevel || impact.newPaymentGroup;
  return (
    <span class="sid__impact">
      {label} <span class="sid__impact-from">{from}</span> → <span class="sid__impact-to">{to}</span>
    </span>
  );
}

function ValidationSteps({ diagnosisSummary, treatmentSummary, validation }) {
  const diagPassed = validation?.diagnosisCheck?.passed ?? validation?.diagnosisPassed;
  const treatPassed = validation?.treatmentCheck?.passed ?? validation?.activeStatusPassed;

  return (
    <div class="sid__steps">
      <div class={`sid__step ${diagPassed ? 'sid__step--pass' : 'sid__step--fail'}`}>
        {diagPassed ? <CheckIcon /> : <XIcon />}
        <div class="sid__step-content">
          <div class="sid__step-label">Diagnosis</div>
          {diagnosisSummary && <div class="sid__step-summary">{diagnosisSummary}</div>}
        </div>
      </div>
      <div class={`sid__step ${treatPassed ? 'sid__step--pass' : 'sid__step--fail'}`}>
        {treatPassed ? <CheckIcon /> : <XIcon />}
        <div class="sid__step-content">
          <div class="sid__step-label">Treatment</div>
          {treatmentSummary && <div class="sid__step-summary">{treatmentSummary}</div>}
        </div>
      </div>
    </div>
  );
}

function RationaleBlock({ rationale }) {
  if (!rationale) return null;
  return (
    <div class="sid__rationale">
      <div class="sid__rationale-label">Rationale</div>
      {rationale}
    </div>
  );
}

/* ── Main component ── */

/**
 * ItemDetail — unified body content for item detail views.
 *
 * @param {Object}  props
 * @param {"compact"|"full"} props.variant — "compact" = coding modal, "full" = PDPM detail
 * @param {Object}  props.data — API response from useItemDetail ({ item, diagnosisSummary, treatmentSummary })
 * @param {Object}  props.detectionItem — detection item from parent (has .impact, .mdsItem, .itemName)
 * @param {string}  props.mdsItem — MDS item code (e.g. "I0600")
 */
export function ItemDetail({ variant = 'compact', data, detectionItem, mdsItem }) {
  const isFull = variant === 'full';
  const apiItem = data?.item;
  const isColumnBased = !!apiItem?.columns;
  const isDiag = apiItem && !isColumnBased;
  const hasSectionISteps = !!(data?.diagnosisSummary || data?.treatmentSummary);

  // Verdict
  const status = apiItem?.status;
  const needsQuery = status === 'needs_physician_query';
  const shouldCode = status === 'code' || status === 'recommend_coding';
  const verdictDotClass = needsQuery ? 'sid__verdict-dot--query' : shouldCode ? 'sid__verdict-dot--code' : 'sid__verdict-dot--no-code';
  const verdictLabel = needsQuery ? 'Needs Query' : shouldCode ? 'Recommend Coding' : (status?.replace(/_/g, ' ') || 'Don\'t Code');

  // Evidence
  const diagEvidence = apiItem?.queryEvidence || [];
  const colEvidence = [];
  if (isColumnBased) {
    const seen = new Set();
    for (const col of Object.values(apiItem.columns || {})) {
      if (col?.evidence) col.evidence.forEach(ev => {
        const k = ev.sourceId || ev.quote || JSON.stringify(ev);
        if (!seen.has(k)) { seen.add(k); colEvidence.push(ev); }
      });
    }
  }
  const evidence = isDiag ? diagEvidence : colEvidence;

  const [showAllEv, setShowAllEv] = useState(false);
  const visibleEvidence = showAllEv ? evidence : evidence.slice(0, 4);

  // Key findings
  const keyFindings = apiItem?.keyFindings || [];
  const [findingsOpen, setFindingsOpen] = useState(isFull);

  // HIPPS impact
  const impact = detectionItem?.impact;
  const hasImpact = impact && (impact.slp || impact.nta || impact.nursing || impact.ptot);

  // Column-based state
  const columns = apiItem?.columns || {};
  const colKeys = Object.keys(columns);
  const [activeCol, setActiveCol] = useState(colKeys[0] || 'A');
  const activeColData = columns[activeCol];
  const subItems = apiItem?.subItems || [];

  const displayCode = mdsItem?.startsWith('I8000:') ? 'I8000' : mdsItem;

  return (
    <>
      {/* ── Verdict ── */}
      <div class="sid__verdict">
        <span class={`sid__verdict-dot ${verdictDotClass}`} />
        <span class="sid__verdict-text">{verdictLabel}</span>
      </div>

      {/* ── Validation steps (Section I) or Rationale (others) ── */}
      {hasSectionISteps && (
        <ValidationSteps
          diagnosisSummary={data.diagnosisSummary}
          treatmentSummary={data.treatmentSummary}
          validation={apiItem?.validation}
        />
      )}

      {!hasSectionISteps && isColumnBased && activeColData && (
        <div class="sid__rationale">
          <div class="sid__col-answer">
            <span class="sid__col-label">Column {activeCol}:</span>
            <span class={`sid__col-badge ${activeColData.answer?.toLowerCase() === 'yes' ? 'sid__col-badge--yes' : 'sid__col-badge--no'}`}>
              {activeColData.answer?.toUpperCase()}
            </span>
            {(activeColData.firstAdministered || activeColData.lastAdministered) && (
              <span class="sid__col-dates">
                {activeColData.firstAdministered}{activeColData.firstAdministered && activeColData.lastAdministered && ' – '}{activeColData.lastAdministered}
              </span>
            )}
          </div>
          {activeColData.rationale && <div>{activeColData.rationale}</div>}
        </div>
      )}

      {!hasSectionISteps && !isColumnBased && (
        <RationaleBlock rationale={apiItem?.rationale} />
      )}

      {/* ── Column tabs (Section O, if multiple columns) ── */}
      {isColumnBased && colKeys.length > 1 && (
        <div class="sid__coltabs">
          {colKeys.map(k => {
            const c = columns[k];
            const yes = c?.answer?.toLowerCase() === 'yes';
            return (
              <button key={k} type="button"
                class={`sid__coltab ${activeCol === k ? 'sid__coltab--on' : ''}`}
                onClick={() => setActiveCol(k)}>
                Col {k}
                <span class={`sid__coltab-dot ${yes ? 'sid__coltab-dot--yes' : ''}`} />
              </button>
            );
          })}
        </div>
      )}

      {/* ── Sub-items (Section O) ── */}
      {subItems.length > 0 && (
        <div class="sid__subs">
          {subItems.map((sub, i) => {
            const a = sub.columns?.A;
            if (!a) return null;
            const yes = a.answer?.toLowerCase() === 'yes';
            return (
              <div key={sub.mdsItem || i} class={`sid__sub ${yes ? 'sid__sub--on' : ''}`}>
                <span class={`sid__sub-dot ${yes ? 'sid__sub-dot--yes' : ''}`}>{yes ? '\u2713' : '\u2013'}</span>
                <span class="sid__sub-name">{sub.description}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* ── HIPPS Impact (full variant only) ── */}
      {isFull && hasImpact && (
        <div class="sid__impacts">
          <ImpactChip label="NTA" impact={impact.nta} />
          <ImpactChip label="Nursing" impact={impact.nursing} />
          <ImpactChip label="SLP" impact={impact.slp} />
          <ImpactChip label="PT/OT" impact={impact.ptot} />
        </div>
      )}

      {/* ── Evidence ── */}
      {evidence.length > 0 && (
        <div class="sid__evidence">
          <div class="sid__ev-label">Evidence ({evidence.length})</div>
          <div class="sid__ev-list">
            {visibleEvidence.map((ev, i) => <EvidenceCard key={i} ev={ev} />)}
          </div>
          {evidence.length > 4 && !showAllEv && (
            <button class="sid__ev-show-more" type="button" onClick={() => setShowAllEv(true)}>
              Show all {evidence.length} &darr;
            </button>
          )}
        </div>
      )}

      {/* ── Key Findings (collapsible) ── */}
      {keyFindings.length > 0 && (
        <>
          <button class="sid__findings-toggle" type="button" onClick={() => setFindingsOpen(!findingsOpen)}>
            <span class={`sid__findings-arrow ${findingsOpen ? 'sid__findings-arrow--open' : ''}`}>&#9654;</span>
            Key Findings ({keyFindings.length})
          </button>
          {findingsOpen && (
            <ul class="sid__findings">
              {keyFindings.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}
        </>
      )}

      {/* ── Actions (sticky) ── */}
      <div class="sid__actions">
        <button class="sid__btn sid__btn--primary" onClick={() => window.QuerySendModal?.show(apiItem || data)} type="button">
          ? Query Physician
        </button>
        {mdsItem && (
          <button class="sid__btn sid__btn--secondary" onClick={() => window.navigateToMDSItem?.(mdsItem)} type="button">
            Go to {displayCode} &#x2197;
          </button>
        )}
      </div>
    </>
  );
}
```

**Step 3: Import the CSS in content.js**

Add to `content/content.js` alongside other CSS imports:

```js
import './css/item-detail.css';
```

**Step 4: Build and verify**

Run: `npm run build`
Expected: Clean build. Component isn't wired up yet, so nothing changes visually.

**Step 5: Commit**

```bash
git add content/components/ItemDetail.jsx content/css/item-detail.css content/content.js
git commit -m "feat: add shared ItemDetail component with validation steps"
```

---

### Task 3: Rewrite ItemPopover to use shared ItemDetail

Slim down `ItemPopover.jsx` to just the backdrop shell + loading/error states, delegating the body to `<ItemDetail variant="compact">`.

**Files:**
- Modify: `content/modules/mds-command-center/ItemPopover.jsx`

**Step 1: Rewrite the component**

Replace the entire file with:

```jsx
/**
 * ItemPopover — backdrop wrapper for item detail in MDS Command Center.
 * Delegates body content to shared <ItemDetail variant="compact" />.
 */
import { useItemDetail } from '../pdpm-analyzer/hooks/useItemDetail.js';
import { ItemDetail } from '../../components/ItemDetail.jsx';

export function ItemPopover({ item, context, onClose }) {
  const mdsItem = item?.mdsItem;
  const categoryKey = item?.categoryKey;
  const { data, loading, error } = useItemDetail(mdsItem, categoryKey, context);
  const displayCode = mdsItem?.startsWith('I8000:') ? 'I8000' : mdsItem;

  return (
    <div class="cc-pop__backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div class="cc-pop" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div class="cc-pop__header">
          <div class="cc-pop__header-top">
            <div class="cc-pop__header-left">
              <span class="cc-pop__code">{displayCode}</span>
              <span class="cc-pop__name">{item?.itemName || data?.item?.description || 'Item Detail'}</span>
            </div>
            <button class="cc-pop__close" onClick={onClose} type="button">&times;</button>
          </div>
        </div>

        {/* Body */}
        <div class="cc-pop__body">
          {loading && (
            <div class="cc-pop__loading">
              <div class="mds-cc__spinner mds-cc__spinner--sm" />
              <span>Loading...</span>
            </div>
          )}
          {error && <div class="cc-pop__error">{error}</div>}
          {!loading && !error && data && (
            <ItemDetail
              variant="compact"
              data={data}
              detectionItem={item}
              mdsItem={mdsItem}
            />
          )}
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Build and verify**

Run: `npm run build`
Expected: Clean build.

**Step 3: Commit**

```bash
git add content/modules/mds-command-center/ItemPopover.jsx
git commit -m "refactor: ItemPopover delegates body to shared ItemDetail component"
```

---

### Task 4: Rewrite ItemDetailView to use shared ItemDetail

Slim down `ItemDetailView.jsx` to just the back-button header + loading/error, delegating body to `<ItemDetail variant="full">`.

**Files:**
- Modify: `content/modules/pdpm-analyzer/components/ItemDetailView.jsx`

**Step 1: Rewrite the component**

Replace the entire file with:

```jsx
/**
 * ItemDetailView — detail sub-view in PDPM Analyzer.
 * Delegates body content to shared <ItemDetail variant="full" />.
 */
import { useItemDetail } from '../hooks/useItemDetail.js';
import { ItemDetail } from '../../../components/ItemDetail.jsx';

export function ItemDetailView({ item, context, onBack }) {
  const mdsItem = item?.mdsItem;
  const categoryKey = item?.categoryKey;
  const { data, loading, error } = useItemDetail(mdsItem, categoryKey, context);
  const displayCode = mdsItem?.startsWith('I8000:') ? 'I8000' : mdsItem;

  const apiItem = data?.item;
  const needsQuery = apiItem?.status === 'needs_physician_query';

  return (
    <div class="idv">
      {/* Header with back button */}
      <div class="idv__head">
        <button class="idv__back" onClick={onBack} type="button">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Back
        </button>
        <span class="idv__code">{displayCode}</span>
        <h2 class="idv__name">{apiItem?.description || apiItem?.kbCategory?.categoryName || item?.itemName || 'Item Detail'}</h2>
        {needsQuery && <span class="idv__badge idv__badge--amber">Needs Query</span>}
      </div>

      {loading && <div class="pdpm-an__state"><div class="pdpm-an__spinner" /><p>Loading...</p></div>}
      {error && <div class="pdpm-an__state"><p>{error}</p></div>}

      {!loading && !error && data && (
        <div class="idv__body">
          <ItemDetail
            variant="full"
            data={data}
            detectionItem={item}
            mdsItem={mdsItem}
          />
        </div>
      )}
    </div>
  );
}
```

**Step 2: Build and verify**

Run: `npm run build`
Expected: Clean build.

**Step 3: Commit**

```bash
git add content/modules/pdpm-analyzer/components/ItemDetailView.jsx
git commit -m "refactor: ItemDetailView delegates body to shared ItemDetail component"
```

---

### Task 5: Clean up dead CSS

Remove the old body-content CSS rules from both stylesheets that are now handled by `item-detail.css`. Keep only the shell/container styles.

**Files:**
- Modify: `content/css/mds-command-center.css` — remove `.cc-pop__impacts` through `.cc-pop__btn--goto:hover` (lines ~1083-1330), keeping `.cc-pop__backdrop` through `.cc-pop__error` (shell styles)
- Modify: `content/css/pdpm-analyzer.css` — remove `.idv__hip` through `.idv__act--secondary:hover` (lines ~1739-2122), keeping `.idv__head` through `.idv__badge--amber` (header styles) and `.idv__body` (container)

**Step 1: Clean up `mds-command-center.css`**

Remove these CSS blocks (everything after `.cc-pop__error` through `.cc-pop__btn--goto:hover`):
- `.cc-pop__impacts`, `.cc-pop__impact`, `.cc-pop__impact-from`, `.cc-pop__impact-to`
- `.cc-pop__answer-row`, `.cc-pop__answer-label`, `.cc-pop__answer-value`
- `.cc-pop__section`, `.cc-pop__section-label`
- `.cc-pop__codes`, `.cc-pop__icd`, `.cc-pop__icd-code`, `.cc-pop__icd-desc`
- `.cc-pop__rationale`
- `.cc-pop__findings`, `.cc-pop__finding`, `.cc-pop__finding-dot`
- `.cc-pop__ev-list`, `.cc-pop__ev-card`, all `.cc-pop__ev-*` rules
- `.cc-pop__show-more`
- `.cc-pop__actions`, `.cc-pop__btn`, `.cc-pop__btn--query`, `.cc-pop__btn--goto`

Keep: `.cc-pop__backdrop`, `.cc-pop`, `.cc-pop__header*`, `.cc-pop__body`, `.cc-pop__loading`, `.cc-pop__error`

**Step 2: Clean up `pdpm-analyzer.css`**

Remove these CSS blocks (everything from `.idv__hip` onwards):
- `.idv__hip`, `.idv__hip-chip`, `.idv__hip-chip-k`, `.idv__hip-chip-v`
- `.idv__codes`, `.idv__codes-label`, `.idv__code-chips`
- `.idv__icd`, `.idv__icd-code`, `.idv__icd-desc`
- `.idv__summary`
- `.idv__findings`, `.idv__findings li`
- `.idv__coltabs`, `.idv__coltab`, `.idv__coltab-dot`
- `.idv__col-verdict`, `.idv__col-top`, `.idv__ans`, `.idv__col-dates`
- `.idv__subs`, `.idv__sub`, `.idv__sub-dot`, `.idv__sub-name`
- `.idv__evidence`, `.idv__ev-section-label`, all `.idv__ev-*` rules
- `.idv__actions`, `.idv__act`, `.idv__act--primary`, `.idv__act--secondary`

Keep: `.idv`, `.idv__head`, `.idv__back`, `.idv__code`, `.idv__name`, `.idv__badge`, `.idv__body`

**Step 3: Build and verify**

Run: `npm run build`
Expected: Clean build, no missing class warnings.

**Step 4: Commit**

```bash
git add content/css/mds-command-center.css content/css/pdpm-analyzer.css
git commit -m "chore: remove dead CSS replaced by shared item-detail.css"
```

---

### Task 6: Final build and manual test

**Step 1: Production build**

Run: `npm run build`
Expected: Clean build, similar bundle size to before.

**Step 2: Manual verification checklist**

Load extension in Chrome (`dist/` folder), then verify:

1. **MDS Command Center** → click an item → popover opens with:
   - Header (code + name + close button)
   - Verdict badge
   - For Section I: Step 1 (Diagnosis) + Step 2 (Treatment) with check/X icons
   - For other sections: Rationale block
   - Evidence cards (clickable, open viewers)
   - Key findings (collapsed by default)
   - Sticky action buttons at bottom
   - No HIPPS chips (compact variant)
   - No ICD-10 codes section

2. **PDPM Analyzer** → click an item → detail view with:
   - Back button header
   - Same verdict + steps/rationale as above
   - HIPPS impact chips (full variant shows these)
   - Evidence cards
   - Key findings (expanded by default)
   - Sticky action buttons
   - Section O items: column tabs + sub-items work

**Step 3: Commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: address item detail UI issues found during manual testing"
```
