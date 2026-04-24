/**
 * AssessmentRow — compact card in the MDS Command Center.
 *
 * Two-line card with left accent border colored by urgency:
 *   Line 1: Patient name (bold) + UDA badges + sections + revenue + queries + chevron
 *   Line 2: Cleaned type · ARD context (colored countdown)
 */
import { formatPaymentDelta } from '../../utils/payment.js';

const URGENCY_ACCENT = {
  overdue: '#ef4444',
  urgent: '#f97316',
  approaching: '#eab308',
  on_track: '#22c55e',
  completed: '#6b7280',
};

// Maps backend udaSummary values to badge visuals.
const UDA_STATUS = {
  complete:        { icon: '\u2713', cls: 'done',  tip: 'Locked in range' },
  locked_in_range: { icon: '\u2713', cls: 'done',  tip: 'Locked in range' },
  in_progress:     { icon: '\u25D0', cls: 'wip',   tip: 'In progress' },
  near_miss:       { icon: '!',      cls: 'warn',  tip: 'Outside date range' },
  out_of_range:    { icon: '!',      cls: 'warn',  tip: 'Outside date range' },
  missing:         { icon: '\u2717', cls: 'miss',  tip: 'Not created' },
  not_created:     { icon: '\u2717', cls: 'miss',  tip: 'Not created' },
  not_required:    null, // hidden entirely
};

function UdaBadge({ label, status }) {
  const cfg = UDA_STATUS[status];
  if (!cfg) return null; // not_required or unknown → hidden
  return (
    <span class={`mds-cc__uda-badge mds-cc__uda-badge--${cfg.cls}`} title={cfg.tip}>
      {label} {cfg.icon}
    </span>
  );
}

export function cleanAssessmentType(type) {
  if (!type) return '';
  return type
    .replace(/^(Medicare|Medicaid|Managed\s*Care)\s*[-\u2013\u2014]\s*/i, '')
    .replace(/\s*\/\s*/g, ' ')
    .replace(/\s*-\s*None\s*PPS\s*/i, '')
    .replace(/\s{2,}/g, ' ')
    .trim() || type;
}

function shortDateStr(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Returns { dateText, completionText, deadlineText, cls, isCompleted }
//
// - dateText: ARD date ("Mar 14")
// - completionText: completion deadline date ("Mar 28") — ARD + 14 days
// - deadlineText: urgency text ("12d overdue", "Due today", "5d left")
// - cls: 'overdue' | 'urgent' | 'approaching' | 'ok' | 'done' | 'na'
// - isCompleted: true if the assessment is already finalized
export function computeArdContext(ardDate, deadlines) {
  if (!ardDate) return { dateText: '', completionText: '', deadlineText: '', cls: 'na', isCompleted: false };

  const d = new Date(ardDate);
  if (isNaN(d)) return { dateText: '', completionText: '', deadlineText: '', cls: 'na', isCompleted: false };
  const dateText = shortDateStr(d);

  // Always compute the completion date (ARD + 14)
  const completionDate = new Date(d);
  completionDate.setDate(completionDate.getDate() + 14);
  const completionText = shortDateStr(completionDate);

  const urgency = deadlines?.urgency || 'on_track';

  if (urgency === 'completed') {
    return { dateText, completionText, deadlineText: '', cls: 'done', isCompleted: true };
  }

  // Use completion days remaining from backend (ARD + 14 days - today)
  const daysLeft = deadlines?.completionDaysRemaining ?? Math.round((completionDate - todayMidnight()) / 86400000);

  let deadlineText, cls;
  if (daysLeft < 0) { deadlineText = `${Math.abs(daysLeft)}d overdue`; cls = 'overdue'; }
  else if (daysLeft === 0) { deadlineText = 'Due today'; cls = 'urgent'; }
  else if (daysLeft <= 3) { deadlineText = `${daysLeft}d left`; cls = 'urgent'; }
  else if (daysLeft <= 7) { deadlineText = `${daysLeft}d left`; cls = 'approaching'; }
  else { deadlineText = `${daysLeft}d left`; cls = 'ok'; }

  return { dateText, completionText, deadlineText, cls, isCompleted: false };
}

function todayMidnight() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

// Only show a UDA chip if something is actually wrong with it.
// If all three are complete, we hide them entirely — a clean row means fine.
function udaNeedsAttention(status) {
  if (!status) return false;
  return status === 'missing' || status === 'not_created'
    || status === 'near_miss' || status === 'out_of_range'
    || status === 'in_progress';
}

export function AssessmentRow({ assessment, isExpanded, onToggle, onOpenAnalyzer }) {
  const {
    patientName, assessmentType, ardDate, pdpm,
    assessmentClass, sectionProgress, udaSummary, querySummary,
  } = assessment;

  const deadlines = assessment.deadlines;
  const urgency = deadlines?.urgency || 'on_track';
  const hideRevenue = assessmentClass === 'end_of_stay';
  const delta = hideRevenue ? null : formatPaymentDelta(pdpm?.payment, 'short');
  const ard = computeArdContext(ardDate, deadlines);

  const sectionsDone = sectionProgress?.total > 0
    && sectionProgress.completed === sectionProgress.total;
  const sectionsPercent = sectionProgress?.total > 0
    ? Math.round((sectionProgress.completed / sectionProgress.total) * 100)
    : 0;

  const pendingQueries = (querySummary?.pending || 0) + (querySummary?.sent || 0);

  // UDA chips: only show when something needs attention
  const anyUdaIssue = udaNeedsAttention(udaSummary?.bims)
    || udaNeedsAttention(udaSummary?.gg)
    || udaNeedsAttention(udaSummary?.phq9);

  // De-emphasize progress bar on on-track rows — show a thin bar only, no text
  const progressSubtle = urgency === 'on_track' || urgency === 'completed';

  // Determine what the urgency text should read
  const urgencyText = ard.isCompleted
    ? '\u2713 Completed'
    : (ard.deadlineText || '');
  const urgencyCls = ard.isCompleted ? 'done' : ard.cls;

  return (
    <div
      class={`mds-cc__card${isExpanded ? ' mds-cc__card--expanded' : ''}`}
      style={{ borderLeftColor: URGENCY_ACCENT[urgency] || '#9ca3af' }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); }
      }}
    >
      {/* Line 1: Patient name + urgency status (the most important info) */}
      <div class="mds-cc__card-row1">
        <span class="mds-cc__card-name">
          {patientName || 'Unknown'}
        </span>
        {urgencyText && (
          <span class={`mds-cc__card-urgency mds-cc__card-urgency--${urgencyCls}`}>
            {urgencyText}
          </span>
        )}
        <span class={`mds-cc__chevron${isExpanded ? ' mds-cc__chevron--open' : ''}`}>&rsaquo;</span>
      </div>

      {/* Line 2: Assessment type + dates */}
      <div class="mds-cc__card-row2">
        <span class="mds-cc__card-type">{cleanAssessmentType(assessmentType)}</span>
        {ard.dateText && (
          <>
            <span class="mds-cc__card-meta-sep">&middot;</span>
            <span class="mds-cc__card-ard-date">ARD {ard.dateText}</span>
            {ard.completionText && !ard.isCompleted && (
              <>
                <span class="mds-cc__card-meta-sep">&middot;</span>
                <span class="mds-cc__card-complete-date">Complete by {ard.completionText}</span>
              </>
            )}
          </>
        )}
      </div>

      {/* Line 3: Blockers / metrics (only shown if there's something to show) */}
      {(anyUdaIssue || sectionProgress?.total > 0 || delta || pendingQueries > 0) && (
        <div class="mds-cc__card-row3">
          {anyUdaIssue && (
            <span class="mds-cc__card-row3-group">
              <UdaBadge label="BIM" status={udaSummary?.bims} />
              <UdaBadge label="GG" status={udaSummary?.gg} />
              <UdaBadge label="PHQ" status={udaSummary?.phq9} />
            </span>
          )}
          {sectionProgress?.total > 0 && (
            <span class={`mds-cc__card-progress${sectionsDone ? ' mds-cc__card-progress--done' : ''}${progressSubtle ? ' mds-cc__card-progress--subtle' : ''}`}>
              <span class="mds-cc__card-progress-bar">
                <span
                  class="mds-cc__card-progress-fill"
                  style={{ width: `${sectionsPercent}%` }}
                />
              </span>
              {!progressSubtle && (
                <span class="mds-cc__card-progress-text">{sectionProgress.completed}/{sectionProgress.total}</span>
              )}
            </span>
          )}
          {pendingQueries > 0 && (
            <span class="mds-cc__card-queries">{pendingQueries} pending {pendingQueries === 1 ? 'query' : 'queries'}</span>
          )}
          {delta && (
            <span
              class={`mds-cc__card-revenue${onOpenAnalyzer ? ' mds-cc__card-revenue--clickable' : ''}`}
              onClick={onOpenAnalyzer ? (e) => { e.stopPropagation(); onOpenAnalyzer(); } : undefined}
              title={onOpenAnalyzer ? 'Open PDPM Analyzer' : undefined}
              role={onOpenAnalyzer ? 'button' : undefined}
            >{delta}</span>
          )}
        </div>
      )}
    </div>
  );
}

