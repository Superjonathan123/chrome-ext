/**
 * CommandCenterHeader — sticky top bar for the MDS Command Center overlay.
 *
 * Contains:
 *   • Title + close button
 *   • Summary stats strip (total, urgent, HIPPS improvements, pending queries)
 *   • Filter tabs (All / Urgent / HIPPS ↑ / Has Queries)
 *   • Sort control (ARD Date / Urgency / Patient Name)
 */

const FILTER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'urgent', label: 'Urgent' },
  { id: 'hipps', label: 'Revenue ↑' },
  { id: 'queries', label: 'Has Queries' },
];

const SORT_OPTIONS = [
  { id: 'ard', label: 'ARD Date' },
  { id: 'urgency', label: 'Urgency' },
  { id: 'name', label: 'Patient Name' },
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
  activeFilter,
  sortBy,
  onFilterChange,
  onSortChange,
  onClose,
  facilityName
}) {
  const total = summary?.total ?? 0;
  const urgentCount = summary?.urgent ?? 0;
  const hippsCount = summary?.hippsImprovements ?? summary?.withHippsImprovements ?? 0;
  const queryCount = summary?.pendingQueries ?? summary?.pendingQueriesCount ?? 0;
  const revenuePerDay = summary?.totalRevenueOpportunityPerDay ?? 0;

  return (
    <div class="mds-cc__header">
      {/* Title row */}
      <div class="mds-cc__title-row">
        <div class="mds-cc__title-group">
          <span class="mds-cc__title">MDS Command Center</span>
          {facilityName && (
            <span class="mds-cc__facility-name">{facilityName}</span>
          )}
        </div>
        <button class="mds-cc__close-btn" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Stats strip */}
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
        <StatPill value={queryCount} label="pending queries" highlight={queryCount > 0} />
      </div>

      {/* Filter tabs + sort */}
      <div class="mds-cc__controls-row">
        <div class="mds-cc__filter-tabs" role="tablist">
          {FILTER_TABS.map(tab => (
            <button
              key={tab.id}
              class={`mds-cc__tab${activeFilter === tab.id ? ' mds-cc__tab--active' : ''}`}
              role="tab"
              aria-selected={activeFilter === tab.id}
              onClick={() => onFilterChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div class="mds-cc__sort-group">
          <label class="mds-cc__sort-label" htmlFor="mds-cc-sort">Sort:</label>
          <select
            id="mds-cc-sort"
            class="mds-cc__sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.id} value={opt.id}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
