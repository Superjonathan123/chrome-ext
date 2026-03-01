# Assessment Preview Redesign — "Action-Focused"

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Simplify the expanded AssessmentPreview from a busy two-column dashboard into a clean, scannable single-column layout with a summary strip + action-item list.

**Architecture:** Replace the two-column grid (left: items/queries, right: sections/compliance) with a single-column flow: summary strip → item list → action buttons. Remove the section letter grid entirely. Collapse compliance into a one-liner. Keep the HIPPS hero but simplify it. Users click "Open Full Analyzer" for deep detail.

**Tech Stack:** Preact JSX, vanilla CSS (existing patterns)

---

### Task 1: Rewrite AssessmentPreview.jsx — Summary Strip + Single-Column Items

**Files:**
- Modify: `content/modules/mds-command-center/AssessmentPreview.jsx`

**Step 1: Rewrite the full component**

Replace the entire `AssessmentPreview.jsx` with the new design. Key changes:

1. **Remove** `SectionProgress` component (the letter grid)
2. **Remove** `ComplianceChecklist` component (the 5-check grid)
3. **Add** `SummaryStrip` — single row: `+$X/day opportunity · Sections X% · N issues`
4. **Simplify** `WouldChangeHippsSection` — rename to revenue opportunities, item name first (human-readable), code secondary right-aligned, component impacts as plain text line below
5. **Simplify** `DocRisksSection` — same clean list style, no colored component badges
6. **Simplify** `PendingQueriesSection` — same clean list style
7. **Add** `ComplianceIssues` — simple one-liner listing failed checks only (replaces the full checklist)
8. **Remove** `PaymentHero` — fold HIPPS change into the summary strip text
9. **Remove** the two-column `prev-grid` layout — everything flows single-column
10. **Keep** action buttons at bottom

New component structure:
```
AssessmentPreview
├── SummaryStrip (one line: revenue | sections % | issue count)
├── DetailLoading / DetailError (if applicable)
├── Revenue Opportunities section (if any drivers)
│   └── Item rows: name on left, code on right, impacts below
├── Doc Risks section (if any)
│   └── Item rows: same clean style
├── Pending Queries section (if any)
│   └── Item rows: name, code, sent date, impacts below
├── Compliance Issues (one line, only if failures)
└── Action buttons
```

Each section only renders if it has content. No section = no header.

The summary strip computes:
- Revenue delta from `detailPayment.delta` (or falls back to pdpm data)
- HIPPS change text from `currentHipps → potentialHipps`
- Section % from `sectionProgress.percentComplete`
- Issue count = compliance failures + doc risk count

**New AssessmentPreview.jsx:**

```jsx
import { useAssessmentDetail } from './hooks/useAssessmentDetail.js';
import { formatPaymentDelta, isPaymentApplicable } from '../../utils/payment.js';

// ── helpers ──

function ntaLevelToTier(level, payment) {
  if (!payment?.meta?.ntaTiers) return null;
  for (const t of payment.meta.ntaTiers) {
    if ((t.levels || []).includes(level)) return t.tier;
  }
  return null;
}

function formatNtaImpact(nta, payment) {
  if (payment?.mode === 'state_rate') {
    const curTier = ntaLevelToTier(nta.currentLevel, payment);
    const newTier = ntaLevelToTier(nta.newLevel, payment);
    if (curTier != null && newTier != null) return `NTA: Tier ${curTier}\u2009→\u2009Tier ${newTier}`;
    return 'NTA: tier upgrade';
  }
  return `NTA: ${nta.currentLevel}\u2009→\u2009${nta.newLevel}`;
}

function buildImpacts(d, payment) {
  const impacts = [];
  if (d.impact?.slp?.wouldChangeGroup)
    impacts.push(`SLP: ${d.impact.slp.currentGroup}\u2009→\u2009${d.impact.slp.newGroup}`);
  if (d.impact?.nta?.wouldChangeLevel)
    impacts.push(formatNtaImpact(d.impact.nta, payment));
  if (d.impact?.nursing?.wouldChangeGroup)
    impacts.push(`Nursing: ${d.impact.nursing.currentPaymentGroup}\u2009→\u2009${d.impact.nursing.newPaymentGroup}`);
  if (d.impact?.ptot?.wouldChangeGroup)
    impacts.push(`PT/OT: ${d.impact.ptot.currentGroup}\u2009→\u2009${d.impact.ptot.newGroup}`);
  return impacts;
}

function buildQueryImpacts(q, payment) {
  const ci = q.pdpmImpact?.componentImpacts;
  if (!ci) return [];
  const impacts = [];
  if (ci.slp?.wouldChangeGroup)
    impacts.push(`SLP: ${ci.slp.currentGroup}\u2009→\u2009${ci.slp.newGroup}`);
  if (ci.nta?.wouldChangeLevel)
    impacts.push(formatNtaImpact(ci.nta, payment));
  if (ci.nursing?.wouldChangeGroup)
    impacts.push(`Nursing: ${ci.nursing.currentPaymentGroup}\u2009→\u2009${ci.nursing.newPaymentGroup}`);
  if (ci.ptot?.wouldChangeGroup)
    impacts.push(`PT/OT: ${ci.ptot.currentGroup}\u2009→\u2009${ci.ptot.newGroup}`);
  return impacts;
}

function relativeDate(sentAt) {
  if (!sentAt) return 'not yet sent';
  const days = Math.floor((Date.now() - new Date(sentAt)) / 86400000);
  return days === 0 ? 'sent today' : `sent ${days}d ago`;
}

function getFailedChecks(compliance) {
  if (!compliance?.checks) {
    // Legacy format
    if (compliance?.status === 'failed' && compliance.issues?.length > 0) {
      return compliance.issues.map(i => i.message || i);
    }
    return [];
  }
  const labels = { bims: 'BIMS', phq9: 'PHQ-9', gg: 'GG', orders: 'Orders', therapyDocs: 'Therapy' };
  const failed = [];
  for (const [key, check] of Object.entries(compliance.checks)) {
    if (check.status === 'failed') {
      failed.push(check.message || `${labels[key] || key} incomplete`);
    }
  }
  return failed;
}

// ── Summary Strip ──

function SummaryStrip({ pdpm, detailData, payment, sectionProgress, compliance, isEndOfStay }) {
  const parts = [];

  // HIPPS change + revenue
  const currentHipps = detailData?.currentHipps || pdpm?.currentHipps;
  const potentialHipps = detailData?.potentialHipps || pdpm?.potentialHipps;
  const hasChange = potentialHipps && potentialHipps !== currentHipps && !isEndOfStay;
  const hasDelta = isPaymentApplicable(payment) && payment.delta > 0;
  const delta = hasDelta ? formatPaymentDelta(payment, 'short') : null;

  if (hasChange && delta) {
    parts.push(<span class="mds-cc__ss-part mds-cc__ss-part--revenue">{delta} opportunity</span>);
  } else if (hasChange) {
    parts.push(<span class="mds-cc__ss-part">HIPPS {currentHipps} → {potentialHipps}</span>);
  }

  // Sections progress
  if (sectionProgress?.percentComplete != null) {
    parts.push(<span class="mds-cc__ss-part">Sections {sectionProgress.percentComplete}%</span>);
  }

  // Issue count
  const failedChecks = getFailedChecks(compliance);
  const docRiskCount = detailData?.enhancedDetections?.filter(
    d => d.solverStatus === 'dont_code' && (d.diagnosisPassed === false || d.activeStatusPassed === false)
  ).length || 0;
  const issueCount = failedChecks.length + docRiskCount;
  if (issueCount > 0) {
    parts.push(<span class="mds-cc__ss-part mds-cc__ss-part--issues">⚠ {issueCount} {issueCount === 1 ? 'issue' : 'issues'}</span>);
  }

  if (parts.length === 0) return null;

  return (
    <div class="mds-cc__ss">
      {parts.map((p, i) => (
        <>{i > 0 && <span class="mds-cc__ss-sep" />}{p}</>
      ))}
    </div>
  );
}

// ── Item list sections ──

function RevenueSection({ detailData, onSelectItem }) {
  const detections = detailData?.enhancedDetections || [];
  const payment = detailData?.payment;
  const drivers = detections.filter(
    d => d.wouldChangeHipps && d.solverStatus !== 'query_sent' && d.solverStatus !== 'awaiting_response' && d.solverStatus !== 'dont_code'
  );
  if (drivers.length === 0) return null;

  const currentHipps = detailData?.currentHipps;
  const potentialHipps = detailData?.potentialHipps;
  const hippsNote = potentialHipps && potentialHipps !== currentHipps
    ? ` (${currentHipps} → ${potentialHipps})`
    : '';

  return (
    <div class="mds-cc__ps">
      <div class="mds-cc__ps-header">{drivers.length} {drivers.length === 1 ? 'item' : 'items'} would change HIPPS{hippsNote}</div>
      <div class="mds-cc__ps-items">
        {drivers.map((d, i) => {
          const code = d.mdsItem?.startsWith('I8000:') ? 'I8000' : d.mdsItem;
          const impacts = buildImpacts(d, payment);
          return (
            <div
              key={i}
              class="mds-cc__ps-item mds-cc__ps-item--clickable"
              onClick={() => onSelectItem(d)}
              role="button"
              title="View evidence"
            >
              <div class="mds-cc__ps-item-top">
                <span class="mds-cc__ps-item-name">{d.itemName}</span>
                <span class="mds-cc__ps-item-code">{code}</span>
              </div>
              {impacts.length > 0 && (
                <div class="mds-cc__ps-item-detail">Would change {impacts.join(', ')}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DocRisksSection({ detailData }) {
  const detections = detailData?.enhancedDetections || [];
  const allRisks = detections.filter(
    d => d.solverStatus === 'dont_code' && (d.diagnosisPassed === false || d.activeStatusPassed === false)
  );
  if (allRisks.length === 0) return null;

  return (
    <div class="mds-cc__ps">
      <div class="mds-cc__ps-header mds-cc__ps-header--amber">{allRisks.length} documentation {allRisks.length === 1 ? 'risk' : 'risks'}</div>
      <div class="mds-cc__ps-items">
        {allRisks.map((d, i) => {
          const code = d.mdsItem?.startsWith('I8000:') ? 'I8000' : d.mdsItem;
          const reasons = [];
          if (d.diagnosisPassed === false) reasons.push('No physician diagnosis');
          if (d.activeStatusPassed === false) reasons.push('No active treatment order');
          return (
            <div key={i} class="mds-cc__ps-item">
              <div class="mds-cc__ps-item-top">
                <span class="mds-cc__ps-item-name">{d.itemName}</span>
                <span class="mds-cc__ps-item-code">{code}</span>
              </div>
              {reasons.length > 0 && (
                <div class="mds-cc__ps-item-detail">{reasons.join(' · ')}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QueriesSection({ detailData, querySummary, assessmentClass }) {
  const queries = detailData?.outstandingQueries || [];
  const payment = detailData?.payment;
  const pending = queries.filter(
    q => q.status === 'sent' || q.status === 'pending' || q.status === 'awaiting_response'
  );

  if (pending.length > 0) {
    return (
      <div class="mds-cc__ps">
        <div class="mds-cc__ps-header">{pending.length} pending {pending.length === 1 ? 'query' : 'queries'}</div>
        <div class="mds-cc__ps-items">
          {pending.map((q, i) => {
            const impacts = buildQueryImpacts(q, payment);
            return (
              <div key={i} class="mds-cc__ps-item">
                <div class="mds-cc__ps-item-top">
                  <span class="mds-cc__ps-item-name">{q.mdsItemName}</span>
                  <span class="mds-cc__ps-item-code">{q.mdsItem}</span>
                  <span class="mds-cc__ps-item-meta">{relativeDate(q.sentAt)}</span>
                </div>
                {impacts.length > 0 && (
                  <div class="mds-cc__ps-item-detail">Would change {impacts.join(', ')}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Fallback: simple counts from dashboard data
  if (assessmentClass !== 'pps_payment' || !querySummary) return null;
  const { pending: pendCount = 0, sent = 0 } = querySummary;
  if (pendCount === 0 && sent === 0) return null;

  const parts = [];
  if (pendCount > 0) parts.push(`${pendCount} pending`);
  if (sent > 0) parts.push(`${sent} sent, awaiting response`);

  return (
    <div class="mds-cc__ps">
      <div class="mds-cc__ps-header">Outstanding queries</div>
      <div class="mds-cc__ps-item-detail" style={{ paddingLeft: '0' }}>{parts.join(' · ')}</div>
    </div>
  );
}

function ComplianceIssues({ compliance }) {
  const failed = getFailedChecks(compliance);
  if (failed.length === 0) return null;

  return (
    <div class="mds-cc__ps">
      <div class="mds-cc__ps-header mds-cc__ps-header--amber">{failed.length} compliance {failed.length === 1 ? 'issue' : 'issues'}</div>
      <div class="mds-cc__ps-item-detail" style={{ paddingLeft: '0' }}>{failed.join(' · ')}</div>
    </div>
  );
}

// ── Loading / Error ──

function DetailLoading() {
  return (
    <div class="mds-cc__prev-detail-loading">
      <div class="mds-cc__spinner mds-cc__spinner--sm" />
      <span>Loading assessment detail...</span>
    </div>
  );
}

function DetailError({ message }) {
  return (
    <div class="mds-cc__prev-detail-error">
      <span>⚠ {message}</span>
    </div>
  );
}

// ── Main Preview ──

export function AssessmentPreview({ assessment, onOpenAnalyzer, onSelectItem }) {
  const { pdpm, sectionProgress, compliance, querySummary } = assessment;
  const assessmentId = assessment.externalAssessmentId || assessment.assessmentId;
  const isEndOfStay = assessment.assessmentClass === 'end_of_stay';

  const { detailData, loading: detailLoading, error: detailError } = useAssessmentDetail(assessmentId);
  const detailPayment = detailData?.payment || pdpm?.payment;

  return (
    <div class="mds-cc__preview" onClick={(e) => e.stopPropagation()}>
      <SummaryStrip
        pdpm={pdpm}
        detailData={detailData}
        payment={detailPayment}
        sectionProgress={sectionProgress}
        compliance={compliance}
        isEndOfStay={isEndOfStay}
      />

      {detailLoading && <DetailLoading />}
      {!detailLoading && detailError && <DetailError message={detailError} />}

      {!detailLoading && detailData && (
        <>
          <RevenueSection detailData={detailData} onSelectItem={onSelectItem} />
          <DocRisksSection detailData={detailData} />
        </>
      )}

      <QueriesSection
        detailData={detailLoading ? null : detailData}
        querySummary={querySummary}
        assessmentClass={assessment.assessmentClass}
      />

      <ComplianceIssues compliance={compliance} />

      <div class="mds-cc__prev-actions">
        <button class="mds-cc__action-btn mds-cc__action-btn--primary" onClick={onOpenAnalyzer}>
          Open Full Analyzer
        </button>
        {assessmentId && (
          <button
            class="mds-cc__action-btn mds-cc__action-btn--secondary"
            onClick={() => {
              try {
                sessionStorage.setItem('super_cc_restore', JSON.stringify({
                  expandedId: assessmentId,
                  openAnalyzer: true,
                  analyzerMode: 'panel',
                  timestamp: Date.now(),
                }));
              } catch (_) {}
              location.href = `${location.origin}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${assessmentId}`;
            }}
          >
            Go to MDS {'\u2197'}
          </button>
        )}
      </div>
    </div>
  );
}
```

**Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
git add content/modules/mds-command-center/AssessmentPreview.jsx
git commit -m "refactor: redesign AssessmentPreview to action-focused single-column layout"
```

---

### Task 2: Replace Preview CSS — Summary Strip + Clean Item List

**Files:**
- Modify: `content/css/mds-command-center.css`

**Step 1: Add new CSS classes and clean up old ones**

Remove or leave the old `mds-cc__prev-*` classes that are no longer used (the section grid, letter tags, checklist, payment hero, etc). Add the new classes:

**New classes to add:**

```css
/* ── Summary Strip ── */
.mds-cc__ss {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
  margin-bottom: 2px;
  font-family: var(--super-font, sans-serif);
  font-size: 12px;
  color: var(--super-gray-500, #6b7280);
}
.mds-cc__ss-sep {
  width: 1px;
  height: 12px;
  background: var(--super-gray-200, #e5e7eb);
  flex-shrink: 0;
}
.mds-cc__ss-part--revenue {
  color: #15803d;
  font-weight: 600;
}
.mds-cc__ss-part--issues {
  color: #d97706;
  font-weight: 500;
}

/* ── Preview Section (ps = preview section) ── */
.mds-cc__ps {
  margin-top: 10px;
}
.mds-cc__ps:first-child {
  margin-top: 0;
}
.mds-cc__ps-header {
  font-size: 12px;
  font-weight: 600;
  color: var(--super-gray-700, #374151);
  font-family: var(--super-font, sans-serif);
  margin-bottom: 6px;
}
.mds-cc__ps-header--amber {
  color: #d97706;
}
.mds-cc__ps-items {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* ── Item rows ── */
.mds-cc__ps-item {
  padding: 5px 8px;
  border-radius: var(--super-radius-sm, 4px);
}
.mds-cc__ps-item--clickable {
  cursor: pointer;
}
.mds-cc__ps-item--clickable:hover {
  background: var(--super-gray-50, #f9fafb);
}
.mds-cc__ps-item-top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.mds-cc__ps-item-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--super-gray-700, #374151);
  font-family: var(--super-font, sans-serif);
  flex: 1;
  min-width: 0;
}
.mds-cc__ps-item-code {
  font-size: 11px;
  font-weight: 600;
  color: var(--super-gray-400, #9ca3af);
  font-family: var(--super-font-mono, monospace);
  flex-shrink: 0;
}
.mds-cc__ps-item-meta {
  font-size: 11px;
  color: var(--super-gray-400, #9ca3af);
  font-family: var(--super-font, sans-serif);
  flex-shrink: 0;
}
.mds-cc__ps-item-detail {
  font-size: 11px;
  color: var(--super-gray-500, #6b7280);
  font-family: var(--super-font, sans-serif);
  padding-left: 8px;
  margin-top: 1px;
}
```

**Old classes to remove** (no longer referenced in JSX):
- `.mds-cc__prev-grid` and column classes
- `.mds-cc__prev-col-left`, `.mds-cc__prev-col-right`
- `.mds-cc__prev-payment-hero` and all `.mds-cc__prev-ph-*` classes
- `.mds-cc__prev-hipps-quiet`, `.mds-cc__prev-meta`, `.mds-cc__hipps-code*`
- `.mds-cc__prev-drivers`, `.mds-cc__prev-driver*`
- `.mds-cc__sections-tags`, `.mds-cc__stag*`
- `.mds-cc__prev-checklist`, `.mds-cc__prev-check*`
- `.mds-cc__prev-doc-risk*`, `.mds-cc__prev-comp-badge`
- `.mds-cc__prev-query-items`, `.mds-cc__prev-query-item*`
- `.mds-cc__prev-query-stats`, `.mds-cc__prev-query-stat*`
- `.mds-cc__prev-counts-text`, `.mds-cc__prev-count*`
- `.mds-cc__prev-hipps-row`
- `.mds-cc__prev-label`, `.mds-cc__prev-label--amber`

**Keep** (still used):
- `.mds-cc__preview` (wrapper)
- `.mds-cc__prev-actions` (action buttons)
- `.mds-cc__prev-detail-loading`, `.mds-cc__prev-detail-error` (loading states)
- `.mds-cc__prev-progress-row`, `.mds-cc__prev-pct`, `.mds-cc__progress-bar`, `.mds-cc__progress-fill` (not used in preview anymore but may be used elsewhere — check first)

**Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds, no CSS warnings

**Step 3: Commit**

```bash
git add content/css/mds-command-center.css
git commit -m "style: add clean preview section CSS, remove old grid/checklist styles"
```

---

### Task 3: Build and Manual QA

**Step 1: Full build**

Run: `npm run build`
Expected: Clean build

**Step 2: Manual QA checklist**

Load extension in Chrome, open MDS Command Center, verify:
- [ ] Collapsed row still looks the same (no changes to AssessmentRow)
- [ ] Expanding a row shows the summary strip
- [ ] Revenue opportunity assessments show delta + HIPPS in strip
- [ ] Non-revenue assessments show just sections % and issues
- [ ] "X items would change HIPPS" section renders with clean item rows
- [ ] Clicking an item still opens the ItemPopover
- [ ] Doc risks section shows when applicable
- [ ] Pending queries section shows when applicable
- [ ] Compliance issues show as one-liner when failures exist
- [ ] "Open Full Analyzer" and "Go to MDS" buttons work
- [ ] No visual regressions elsewhere in the Command Center

**Step 3: Final commit if any fixes needed**
