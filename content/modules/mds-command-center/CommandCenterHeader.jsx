/**
 * CommandCenterHeader — sticky top bar for the MDS Command Center overlay.
 *
 * Layout:
 *   - Title + close button
 *   - Summary stats strip
 *   - View switcher (Overview | Assessments | Queries)
 *   - [Assessments only] Filter row: class + payer dropdowns
 *   - [Assessments only] Urgency filter pills
 */
import { Selector } from '../../components/Selector.jsx';

const URGENCY_PILLS = [
  { value: 'all',         label: 'All',         color: null },
  { value: 'overdue',     label: 'Overdue',     color: '#ef4444' },
  { value: 'urgent',      label: 'Urgent',      color: '#f97316' },
  { value: 'approaching', label: 'Approaching', color: '#eab308' },
  { value: 'on_track',    label: 'On Track',    color: '#22c55e' },
];

function StatPill({ value, label, highlight }) {
  return (
    <span class={`mds-cc__stat${highlight ? ' mds-cc__stat--highlight' : ''}`}>
      <strong>{value}</strong> {label}
    </span>
  );
}

export function CommandCenterHeader({
  summary,
  facilityName,
  onClose,
  activeView,
  onViewChange,
  queryCount,
  certCount,
  certsEnabled,
  docRiskCount,
  complianceGaps,
  payerFilter,
  onPayerFilterChange,
  classFilter,
  onClassFilterChange,
  focusFilter,
  onFocusFilterChange,
  urgencyFilter,
  onUrgencyFilterChange,
}) {
  const total             = summary?.total ?? 0;
  const urgentCount       = summary?.urgent ?? 0;
  const hippsCount        = summary?.hippsImprovements ?? summary?.withHippsImprovements ?? 0;
  const pendingQueryCount = summary?.pendingQueries ?? summary?.pendingQueriesCount ?? 0;
  const revenuePerDay     = summary?.totalRevenueOpportunityPerDay ?? 0;

  return (
    <div class="mds-cc__header">

      {/* ── Title row ── */}
      <div class="mds-cc__title-row">
        <div class="mds-cc__title-group">
          <span class="mds-cc__title">MDS Command Center</span>
          {facilityName && <span class="mds-cc__facility-name">{facilityName}</span>}
        </div>
        <button class="mds-cc__close-btn" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6"  y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* ── Stats strip ── */}
      <div class="mds-cc__stats-strip">
        <StatPill value={total} label="assessments" />
        <span class="mds-cc__stats-sep">|</span>
        <StatPill value={urgentCount} label="urgent" highlight={urgentCount > 0} />
        {revenuePerDay > 0 && (
          <>
            <span class="mds-cc__stats-sep">|</span>
            <span class="mds-cc__stat mds-cc__stat--revenue">
              <strong>${Math.round(revenuePerDay)}/day available</strong>
              {hippsCount > 0 && <span class="mds-cc__stat-sub"> across {hippsCount} improvements</span>}
            </span>
          </>
        )}
        <span class="mds-cc__stats-sep">|</span>
        <StatPill value={pendingQueryCount} label="pending queries" highlight={pendingQueryCount > 0} />
        {docRiskCount > 0 && (
          <>
            <span class="mds-cc__stats-sep">|</span>
            <span class="mds-cc__stat mds-cc__stat--amber">
              {'\u26A0'} <strong>{docRiskCount}</strong> doc risk{docRiskCount !== 1 ? 's' : ''}
            </span>
          </>
        )}
      </div>

      {/* ── View switcher — 3 tabs ── */}
      <div class="mds-cc__view-switcher">
        <button
          class={`mds-cc__view-tab${activeView === 'overview' ? ' mds-cc__view-tab--active' : ''}`}
          onClick={() => onViewChange('overview')}
        >
          Overview
        </button>
        <button
          class={`mds-cc__view-tab${activeView === 'assessments' ? ' mds-cc__view-tab--active' : ''}`}
          onClick={() => onViewChange('assessments')}
        >
          Assessments
        </button>
        <button
          class={`mds-cc__view-tab${activeView === 'queries' ? ' mds-cc__view-tab--active' : ''}`}
          onClick={() => onViewChange('queries')}
        >
          Queries
          {queryCount > 0 && <span class="mds-cc__view-tab-badge">{queryCount}</span>}
        </button>
        {certsEnabled && (
          <button
            class={`mds-cc__view-tab${activeView === 'certs' ? ' mds-cc__view-tab--active' : ''}`}
            onClick={() => onViewChange('certs')}
          >
            Certs
            {certCount > 0 && <span class="mds-cc__view-tab-badge">{certCount}</span>}
          </button>
        )}
        {docRiskCount > 0 && (
          <button
            class={`mds-cc__view-tab${activeView === 'docRisks' ? ' mds-cc__view-tab--active' : ''}`}
            onClick={() => onViewChange('docRisks')}
          >
            Doc Risks
            <span class="mds-cc__view-tab-badge mds-cc__view-tab-badge--amber">{docRiskCount}</span>
          </button>
        )}
        <button
          class={`mds-cc__view-tab${activeView === 'compliance' ? ' mds-cc__view-tab--active' : ''}`}
          onClick={() => onViewChange('compliance')}
        >
          Compliance
          {complianceGaps > 0 && <span class="mds-cc__view-tab-badge mds-cc__view-tab-badge--amber">{complianceGaps}</span>}
        </button>
      </div>

      {/* ── Assessments filter row ── */}
      {activeView === 'assessments' && (
        <div class="mds-cc__filter-row">
          <Selector
            size="compact"
            options={[
              { value: 'all', label: 'All Classes' },
              { value: 'pps_payment', label: 'PPS / Payment' },
              { value: 'obra_cmi', label: 'OBRA / CMI' },
              { value: 'end_of_stay', label: 'End of Stay' },
            ]}
            value={classFilter}
            onChange={onClassFilterChange}
            ariaLabel="Assessment class filter"
          />
          <Selector
            size="compact"
            options={[
              { value: 'all', label: 'All Payers' },
              { value: 'medicare_a', label: 'Medicare A' },
              { value: 'medicaid', label: 'Medicaid' },
              { value: 'managed_care', label: 'Managed Care' },
            ]}
            value={payerFilter}
            onChange={onPayerFilterChange}
            ariaLabel="Payer filter"
          />
          <Selector
            size="compact"
            options={[
              { value: 'all', label: 'All Assessments' },
              { value: 'revenue', label: 'Revenue Opportunities' },
              { value: 'issues', label: 'Has Issues' },
            ]}
            value={focusFilter}
            onChange={onFocusFilterChange}
            ariaLabel="Focus filter"
          />
        </div>
      )}

      {/* ── Urgency filter pills (assessments tab only) ── */}
      {activeView === 'assessments' && onUrgencyFilterChange && (
        <div class="mds-cc__urgency-pills">
          {URGENCY_PILLS.map(pill => {
            const isActive = urgencyFilter === pill.value;
            return (
              <button
                key={pill.value}
                class={`mds-cc__urgency-pill${isActive ? ' mds-cc__urgency-pill--active' : ''}`}
                style={isActive && pill.color ? { background: pill.color, borderColor: pill.color, color: '#fff' } : undefined}
                onClick={() => onUrgencyFilterChange(pill.value)}
              >
                {pill.color && <span class="mds-cc__urgency-pill-dot" style={{ background: isActive ? '#fff' : pill.color }} />}
                {pill.label}
              </button>
            );
          })}
          {/* Revenue quick-filter toggle */}
          {onFocusFilterChange && (
            <button
              class={`mds-cc__urgency-pill mds-cc__revenue-pill${focusFilter === 'revenue' ? ' mds-cc__revenue-pill--active' : ''}`}
              onClick={() => onFocusFilterChange(focusFilter === 'revenue' ? 'all' : 'revenue')}
              title="Show only assessments with revenue opportunities"
            >
              <span class="mds-cc__revenue-pill-icon">$</span>
              Revenue
            </button>
          )}
        </div>
      )}
    </div>
  );
}
