import { openEventAction, resolveEventAction } from '../utils/pccDeepLinks.js';
import { shortenDescription } from '../utils/shortenDescription.js';

const TYPE_LABEL = {
  admit: 'admit',
  readmit: 'readmit',
  discharge: 'discharge',
  mds_ard: 'MDS ARD',
  mds_due: 'MDS due',
  next_mds_ard: 'next ARD',
  cp_open_needed: 'CP open',
  cp_review_expected: 'CP review',
  cp_review_in_progress: 'CP in progress',
  cp_review_due: 'CP review',
  cp_completion_due: 'CP complete',
  query_due: 'query',
  cert_due: 'cert',
  cert_overdue: 'cert overdue',
};

// Flat type icons — restore scan-by-type ("show me all queries this week")
// while the urgency bar keeps scan-by-urgency ("what's overdue today").
const TYPE_ICON = {
  admit: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  readmit: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  ),
  discharge: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
      <path d="M14 3h6v6" />
      <line x1="10" y1="14" x2="21" y2="3" />
      <path d="M20 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" />
    </svg>
  ),
  mds_ard: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  mds_due: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="14" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  ),
  next_mds_ard: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  query_due: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  cert_due: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 7h-7" /><path d="M14 17H5" />
      <circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
    </svg>
  ),
  cert_overdue: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 7h-7" /><path d="M14 17H5" />
      <circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
    </svg>
  ),
};

/**
 * EventRow — renders one event inside a day row (calendar) or day view.
 *
 * - Left bar color encodes urgency (red/amber/grey) so the eye tracks action.
 * - `interactive` prop enables direct click-to-PCC. Default false: the parent
 *   day row handles clicks (enters DayView). In DayView, rows are interactive.
 */
export function EventRow({ event, interactive = false }) {
  const urgency = event.urgency || 'ok';
  // For MDS events, prefer the specific assessment description so "5-Day PPS" / "Quarterly"
  // shows instead of generic "mds ard". Falls back to the type label if description is absent.
  const isMdsEvent = event.type === 'mds_ard' || event.type === 'mds_due' || event.type === 'next_mds_ard';
  const descLabel = isMdsEvent && event.meta?.description ? shortenDescription(event.meta.description) : null;
  // Append "ARD" to MDS events so the calendar reads "Entry ARD" / "5-Day PPS ARD"
  // instead of just the description (user-requested clarity — Anna's paper planner language).
  const label = descLabel ? `${descLabel} ARD` : TYPE_LABEL[event.type] || event.type;
  const hasAction = !!resolveEventAction(event);
  const isProxy = event.type === 'cp_completion_due' && event.meta?.isProxy === true;
  const clickable = interactive && hasAction;

  // Type bucket for visual weight. MDS ARD + admit get always-colored bars
  // because they're never "unimportant" — always need to stand out.
  const typeClass = isMdsEvent ? 'mds-pl__evt--t-mds'
    : (event.type === 'admit' || event.type === 'readmit') ? 'mds-pl__evt--t-admit'
    : event.type === 'discharge' ? 'mds-pl__evt--t-dc'
    : '';

  return (
    <div
      class={[
        'mds-pl__evt',
        `mds-pl__evt--u-${urgency}`,
        typeClass,
        isProxy ? 'mds-pl__evt--proxy' : '',
        clickable ? 'mds-pl__evt--clickable' : '',
      ].filter(Boolean).join(' ')}
      onClick={clickable ? (e) => { e.stopPropagation(); openEventAction(event); } : undefined}
      title={clickable ? 'Open in PCC' : undefined}
    >
      <span class="mds-pl__evt-bar" />
      <span class="mds-pl__evt-icon" aria-hidden="true">{TYPE_ICON[event.type]}</span>
      <span class="mds-pl__evt-text">
        <span class="mds-pl__evt-who">{event.patientName || 'Unknown'}</span>
        <span class="mds-pl__evt-tag">{label}</span>
      </span>
    </div>
  );
}
