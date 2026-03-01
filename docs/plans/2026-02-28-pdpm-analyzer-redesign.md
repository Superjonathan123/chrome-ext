# PDPM Analyzer Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the PDPM Analyzer overlay to be lighter, more compact, and surface opportunities prominently — delta as headline, compact component rows, no per-component $/day.

**Architecture:** Pure UI restructure — no new APIs, data shapes, or hooks. Rewrite `HeroSection` → `SummaryStrip`, promote `WouldChangeSection` to appear right after summary, compress `ComponentBreakdown` rows, and restyle `ComplianceCard` as inline chips. All in `PDPMAnalyzer.jsx` + `pdpm-analyzer.css`.

**Tech Stack:** Preact JSX, vanilla CSS

---

## Summary of Changes

| Current | New |
|---------|-----|
| Dark gradient hero card | Light/white summary strip, delta is hero |
| Would-change-HIPPS buried below components | Opportunity callout right after summary |
| Component cards with $/day, description, progress bars always visible | Compact one-line rows, no $/day, expand for detail |
| Compliance as stacked expandable rows | Compact inline chips, expand on click |
| Lots of vertical padding/spacing | Tight, dense layout |

**Files to modify:**
- `content/modules/pdpm-analyzer/PDPMAnalyzer.jsx` (1,131 lines → restructure sections)
- `content/css/pdpm-analyzer.css` (restyle hero, components, compliance)

**Files unchanged:**
- `hooks/usePDPMAnalyzer.js` (data fetching stays same)
- `hooks/useItemDetail.js` (detail drill-in stays same)
- `components/ItemDetailView.jsx` (item detail view stays same)
- `components/PaymentCard.jsx` (can be deleted or left — no longer used)
- `utils/payment.js` (still used for formatPaymentRates)

---

### Task 1: Replace HeroSection with SummaryStrip

**Files:**
- Modify: `content/modules/pdpm-analyzer/PDPMAnalyzer.jsx:840-952` (HeroSection function)
- Modify: `content/css/pdpm-analyzer.css` (`.pdpm-an__hero*` → `.pdpm-an__summary*`)

**What to do:**

Replace the `HeroSection` component (dark gradient, dense stats strip) with a `SummaryStrip` component:

```jsx
function SummaryStrip({ data }) {
  if (!data) return null;

  const summary = data.summary || {};
  const calculation = data.calculation || {};
  const payment = data.payment;

  // HIPPS codes
  const cmsHipps = summary.currentHipps || calculation.hippsCode || '?????';
  const cmsPotential = summary.potentialHippsIfCoded;
  const isStateRate = payment?.mode === 'state_rate';
  const cleanGroup = (c) => c ? c.replace(/_/g, '') : null;
  const currentCode = isStateRate ? (cleanGroup(payment.current?.groupCode) || cmsHipps) : cmsHipps;
  const potentialCode = isStateRate ? (cleanGroup(payment.potential?.groupCode) ?? currentCode) : cmsPotential;
  const hasImprovement = isStateRate
    ? (potentialCode && potentialCode !== currentCode)
    : (summary.hasImprovements && cmsPotential && cmsPotential !== cmsHipps);

  // Revenue delta
  const rates = formatPaymentRates(payment);

  // Compliance
  const comp = data.compliance?.summary || {};
  const compPassed = comp.passed ?? 0;
  const compNa = comp.notApplicable ?? 0;
  const compTotal = (comp.total ?? 0) - compNa;

  // Section progress
  const sp = data.sectionProgress;
  const spDone = sp ? (sp.completed ?? 0) + (sp.locked ?? 0) : 0;
  const spTotal = sp?.total ?? 0;
  const spPct = spTotal > 0 ? Math.round((spDone / spTotal) * 100) : 0;

  // Opportunity count
  const drivers = (data.enhancedDetections || []).filter(
    d => d.wouldChangeHipps && d.solverStatus !== 'query_sent' && d.solverStatus !== 'awaiting_response'
  ).length;

  const hasDelta = rates && rates.delta && rates.delta !== '+$0/day' && rates.delta !== '+0';

  return (
    <div class="pdpm-an__summary">
      {/* Hero: delta is the headline */}
      {hasDelta && (
        <div class="pdpm-an__summary-delta">{rates.delta}</div>
      )}

      {/* HIPPS codes + rates */}
      <div class="pdpm-an__summary-codes">
        <span class="pdpm-an__summary-code">{currentCode}</span>
        {hasImprovement && (
          <>
            <span class="pdpm-an__summary-arrow">{'\u2192'}</span>
            <span class="pdpm-an__summary-code pdpm-an__summary-code--green">{potentialCode}</span>
          </>
        )}
        {rates && (
          <span class="pdpm-an__summary-rates">
            {rates.current}{'\u2192'}{rates.potential}
            {rates.isEstimated && <span class="pdpm-an__est-badge">est.</span>}
          </span>
        )}
      </div>

      {/* Quick stats line */}
      <div class="pdpm-an__summary-stats">
        {spTotal > 0 && <span class="pdpm-an__summary-stat">{spPct}% MDS</span>}
        {compTotal > 0 && <span class="pdpm-an__summary-stat">{compPassed}/{compTotal} Compliance</span>}
        {drivers > 0 && <span class="pdpm-an__summary-stat pdpm-an__summary-stat--green">{drivers} Opp{drivers !== 1 ? 's' : ''}</span>}
      </div>
    </div>
  );
}
```

**CSS for SummaryStrip:**

```css
.pdpm-an__summary {
  padding: 16px 20px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
}

.pdpm-an__summary-delta {
  font-size: 28px;
  font-weight: 700;
  color: #059669;
  line-height: 1.2;
}

.pdpm-an__summary-codes {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 4px;
  font-size: 14px;
  color: #374151;
}

.pdpm-an__summary-code {
  font-weight: 600;
  font-family: 'SF Mono', 'Consolas', monospace;
  letter-spacing: 0.5px;
}
.pdpm-an__summary-code--green { color: #059669; }

.pdpm-an__summary-arrow { color: #9ca3af; }

.pdpm-an__summary-rates {
  color: #6b7280;
  font-size: 13px;
  margin-left: 4px;
}

.pdpm-an__summary-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 6px;
  font-size: 12px;
  color: #9ca3af;
}
.pdpm-an__summary-stat--green { color: #059669; font-weight: 600; }
```

**Step 1:** Replace `HeroSection` function with `SummaryStrip` in PDPMAnalyzer.jsx
**Step 2:** Replace `.pdpm-an__hero*` CSS with `.pdpm-an__summary*` CSS
**Step 3:** Update `AssessmentView` to render `<SummaryStrip>` instead of `<HeroSection>`
**Step 4:** Build and visually verify — `npm run build`
**Step 5:** Commit: `feat: replace dark hero with light summary strip`

---

### Task 2: Promote Opportunity Callout (Would-Change-HIPPS)

**Files:**
- Modify: `content/modules/pdpm-analyzer/PDPMAnalyzer.jsx:215-259` (WouldChangeSection)
- Modify: `content/modules/pdpm-analyzer/PDPMAnalyzer.jsx:989-999` (AssessmentView render order)
- Modify: `content/css/pdpm-analyzer.css`

**What to do:**

1. Restyle `WouldChangeSection` to be a prominent callout with green-tinted background
2. Move it right after `SummaryStrip` in `AssessmentView` render order
3. Make it non-collapsible (always visible when opportunities exist — it's the key info)

**Updated WouldChangeSection:**

```jsx
function OpportunityCallout({ data, onItemClick }) {
  const enhancedDetections = data?.enhancedDetections || [];
  const payment = data?.payment;
  const drivers = enhancedDetections.filter(
    d => d.wouldChangeHipps && d.solverStatus !== 'query_sent' && d.solverStatus !== 'awaiting_response'
  );
  if (drivers.length === 0) return null;

  return (
    <div class="pdpm-an__opps">
      {drivers.map((d, i) => {
        const displayCode = d.mdsItem?.startsWith('I8000:') ? 'I8000' : d.mdsItem;
        return (
          <div
            key={i}
            class="pdpm-an__opp-row"
            onClick={() => onItemClick && onItemClick(d)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onItemClick?.(d); } }}
          >
            <span class="pdpm-an__opp-icon">{'\u26A1'}</span>
            <span class="pdpm-an__opp-code">{displayCode}</span>
            <span class="pdpm-an__opp-name">{resolveItemName(d.itemName, d.mdsItem)}</span>
            <ImpactChips impact={d.impact} payment={payment} />
            <svg class="pdpm-an__opp-go" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        );
      })}
    </div>
  );
}
```

**CSS:**

```css
.pdpm-an__opps {
  margin: 0 12px;
  border-radius: 8px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  overflow: hidden;
}

.pdpm-an__opp-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  cursor: pointer;
  transition: background 0.1s;
}
.pdpm-an__opp-row:hover { background: #dcfce7; }
.pdpm-an__opp-row + .pdpm-an__opp-row { border-top: 1px solid #dcfce7; }

.pdpm-an__opp-icon { font-size: 14px; flex-shrink: 0; }

.pdpm-an__opp-code {
  font-size: 11px;
  font-weight: 600;
  color: #059669;
  background: #dcfce7;
  padding: 1px 6px;
  border-radius: 4px;
  flex-shrink: 0;
}

.pdpm-an__opp-name {
  font-size: 13px;
  font-weight: 500;
  color: #1f2937;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pdpm-an__opp-go { color: #9ca3af; flex-shrink: 0; }
```

**Updated AssessmentView render order:**
```jsx
<SummaryStrip data={assessmentData} />
<OpportunityCallout data={assessmentData} onItemClick={onItemClick} />
<ComponentBreakdown ... />
<DocRisksSection ... />
<PendingQueriesSection ... />
<RecentlySignedSection ... />
<ClinicalScores ... />
<ComplianceCard ... />
```

**Step 1:** Rename `WouldChangeSection` → `OpportunityCallout`, simplify (remove collapse logic)
**Step 2:** Add `.pdpm-an__opps*` CSS
**Step 3:** Move `OpportunityCallout` to render right after `SummaryStrip`
**Step 4:** Build and verify — `npm run build`
**Step 5:** Commit: `feat: promote opportunities callout to top of view`

---

### Task 3: Compact Component Breakdown

**Files:**
- Modify: `content/modules/pdpm-analyzer/PDPMAnalyzer.jsx:490-669` (ComponentBreakdown)
- Modify: `content/css/pdpm-analyzer.css`

**What to do:**

Make each component a single compact row:
- **Left:** Component label (PT/OT, SLP, Nursing, NTA)
- **Middle:** Classification name (truncated)
- **Right:** Change indicator if applicable (e.g., `NF → NE` with green highlight), chevron
- **No $/day** per row
- Click to expand for full detail (tier info, sub-items, progress bar)
- Row with opportunity gets subtle green left border

Key changes to `ComponentBreakdown`:
1. Remove `showComponentRates` logic and all `r.current`, `r.delta` display
2. Keep `comp.name`/`comp.detail` but show inline on same row (not separate line)
3. Move progress indicators (NTA bar, SLP dots) inside expanded section only
4. Keep expand/collapse and item drill-in behavior

**Updated component row structure:**

```jsx
<div class={`pdpm-an__comp-row${improved ? ' pdpm-an__comp-row--improved' : ''}${isExpanded ? ' pdpm-an__comp-row--expanded' : ''}`}>
  <div
    class={`pdpm-an__comp-row-header${hasItems ? ' pdpm-an__comp-row-header--clickable' : ''}`}
    onClick={toggleExpand}
  >
    <span class="pdpm-an__comp-label">{comp.label}</span>
    <span class="pdpm-an__comp-name">{comp.name || '\u2014'}</span>
    {improved && (
      <span class="pdpm-an__comp-change">
        {comp.currentCode} {'\u2192'} {comp.potential}
      </span>
    )}
    {!improved && comp.currentCode && (
      <span class="pdpm-an__comp-code">{comp.currentCode}</span>
    )}
    {hasItems && (
      <svg class={`pdpm-an__comp-chevron${isExpanded ? ' open' : ''}`} .../>
    )}
  </div>

  {/* Expanded detail: progress bars, sub-items */}
  {isExpanded && (
    <div class="pdpm-an__comp-detail">
      {comp.key === 'nta' && <NtaProgressBar gap={gap} payment={payment} />}
      {comp.key === 'slp' && <SlpTierIndicator gap={gap} />}
      {comp.detail && <div class="pdpm-an__comp-qualifier">{comp.detail}</div>}
      <div class="pdpm-an__ci-list">
        {comp.items.map(...)}
      </div>
    </div>
  )}
</div>
```

**CSS:**

```css
.pdpm-an__comp-row {
  border-bottom: 1px solid #f3f4f6;
}
.pdpm-an__comp-row--improved {
  border-left: 3px solid #34d399;
}

.pdpm-an__comp-row-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
}
.pdpm-an__comp-row-header--clickable { cursor: pointer; }
.pdpm-an__comp-row-header--clickable:hover { background: #f9fafb; }

.pdpm-an__comp-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  width: 56px;
  flex-shrink: 0;
}

.pdpm-an__comp-name {
  font-size: 13px;
  color: #374151;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pdpm-an__comp-change {
  font-size: 12px;
  font-weight: 600;
  color: #059669;
  flex-shrink: 0;
}

.pdpm-an__comp-code {
  font-size: 12px;
  font-weight: 500;
  color: #9ca3af;
  font-family: 'SF Mono', monospace;
  flex-shrink: 0;
}
```

**Step 1:** Rewrite `ComponentBreakdown` — compact rows, no $/day, detail behind expand
**Step 2:** Add `.pdpm-an__comp-*` CSS
**Step 3:** Build and verify — `npm run build`
**Step 4:** Commit: `feat: compact component breakdown rows`

---

### Task 4: Compact Compliance Card

**Files:**
- Modify: `content/modules/pdpm-analyzer/components/ComplianceCard.jsx`
- Modify: `content/css/pdpm-analyzer.css`

**What to do:**

Default view shows all checks as inline chips on a single row instead of stacked items. Click a chip to expand its detail.

```jsx
// Compact default: horizontal row of check chips
<div class="pdpm-an__cc-chips">
  {CHECK_ORDER.map(key => {
    const check = checks[key];
    if (!check || check.status === 'not_applicable') return null;
    const passed = check.status === 'passed';
    return (
      <button
        key={key}
        class={`pdpm-an__cc-chip${passed ? ' pdpm-an__cc-chip--pass' : ' pdpm-an__cc-chip--fail'}${expandedKey === key ? ' pdpm-an__cc-chip--active' : ''}`}
        onClick={() => setExpandedKey(expandedKey === key ? null : key)}
      >
        <span class="pdpm-an__cc-chip-icon">{passed ? '\u2713' : '\u2717'}</span>
        {CHECK_LABELS[key]}
      </button>
    );
  })}
</div>
{/* Expanded detail appears below chips */}
{expandedKey && checks[expandedKey] && (
  <CheckDetail checkKey={expandedKey} check={checks[expandedKey]} />
)}
```

**CSS:**

```css
.pdpm-an__cc-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 14px;
}

.pdpm-an__cc-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid;
  cursor: pointer;
  background: none;
  transition: background 0.1s;
}
.pdpm-an__cc-chip--pass { color: #059669; border-color: #bbf7d0; }
.pdpm-an__cc-chip--pass:hover { background: #f0fdf4; }
.pdpm-an__cc-chip--fail { color: #dc2626; border-color: #fecaca; }
.pdpm-an__cc-chip--fail:hover { background: #fef2f2; }
.pdpm-an__cc-chip--active { background: #f3f4f6; }
```

**Step 1:** Rewrite `ComplianceCard` with chip layout
**Step 2:** Add `.pdpm-an__cc-chip*` CSS
**Step 3:** Build and verify
**Step 4:** Commit: `feat: compact compliance chips`

---

### Task 5: CSS Cleanup & Polish

**Files:**
- Modify: `content/css/pdpm-analyzer.css`

**What to do:**

1. Remove all `.pdpm-an__hero*` CSS (dead after Task 1)
2. Remove old `.pdpm-an__component-*` CSS (dead after Task 3)
3. Tighten overall `.pdpm-an__content` spacing: reduce gap between sections
4. Ensure `.pdpm-an__card` has less padding (currently generous)
5. Verify panel mode (420px sidebar) still looks good with compact layout
6. Remove unused PaymentCard import from PDPMAnalyzer.jsx

```css
/* Tighter content spacing */
.pdpm-an__content {
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;  /* was 12-16px */
}

/* Tighter card padding */
.pdpm-an__card {
  margin: 0 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}
.pdpm-an__card-header {
  padding: 10px 14px;  /* was 12-16px */
}
```

**Step 1:** Remove dead CSS from hero and old component styles
**Step 2:** Tighten spacing throughout
**Step 3:** Test panel mode
**Step 4:** Build and verify
**Step 5:** Commit: `style: cleanup and tighten spacing`

---

### Task 6: Integration Verify & Final Polish

**Step 1:** Full build: `npm run build`
**Step 2:** Load in Chrome, test with real assessment data
**Step 3:** Verify: opportunity callout appears after summary
**Step 4:** Verify: clicking opportunity row opens ItemDetailView
**Step 5:** Verify: component rows expand correctly
**Step 6:** Verify: compliance chips expand correctly
**Step 7:** Verify: panel mode (sidebar) layout works
**Step 8:** Fix any visual issues found
**Step 9:** Commit: `fix: final polish for PDPM redesign`
