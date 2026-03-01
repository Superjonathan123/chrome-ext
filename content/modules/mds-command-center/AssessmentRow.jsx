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

export function computeArdContext(ardDate, deadlines) {
  if (!ardDate) return { dateText: '', deadlineText: '', cls: 'na' };

  const d = new Date(ardDate);
  if (isNaN(d)) return { dateText: '', deadlineText: '', cls: 'na' };
  const dateText = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  const urgency = deadlines?.urgency || 'on_track';

  if (urgency === 'completed') {
    return { dateText, deadlineText: '', cls: 'done' };
  }

  // Use completion deadline from backend (ARD + 14 days)
  const daysLeft = deadlines?.completionDaysRemaining;

  if (daysLeft != null) {
    if (daysLeft < 0) return { dateText, deadlineText: `${Math.abs(daysLeft)}d overdue`, cls: 'overdue' };
    if (daysLeft === 0) return { dateText, deadlineText: 'Due today', cls: 'urgent' };
    if (daysLeft <= 3) return { dateText, deadlineText: `${daysLeft}d left`, cls: 'urgent' };
    if (daysLeft <= 7) return { dateText, deadlineText: `${daysLeft}d left`, cls: 'approaching' };
    return { dateText, deadlineText: `${daysLeft}d left`, cls: 'ok' };
  }

  // Fallback: compute from ARD + 14 days
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const completionDate = new Date(d);
  completionDate.setDate(completionDate.getDate() + 14);
  const diffDays = Math.round((completionDate - now) / 86400000);

  if (diffDays < 0) return { dateText, deadlineText: `${Math.abs(diffDays)}d overdue`, cls: 'overdue' };
  if (diffDays === 0) return { dateText, deadlineText: 'Due today', cls: 'urgent' };
  if (diffDays <= 3) return { dateText, deadlineText: `${diffDays}d left`, cls: 'urgent' };
  if (diffDays <= 7) return { dateText, deadlineText: `${diffDays}d left`, cls: 'approaching' };
  return { dateText, deadlineText: `${diffDays}d left`, cls: 'ok' };
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

  const pendingQueries = (querySummary?.pending || 0) + (querySummary?.sent || 0);

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
      {/* Line 1: Name + right zone badges */}
      <div class="mds-cc__card-line1">
        <span class="mds-cc__card-name">{patientName || 'Unknown'}</span>
        <span class="mds-cc__card-badges">
          <UdaBadge label="BIM" status={udaSummary?.bims} />
          <UdaBadge label="GG" status={udaSummary?.gg} />
          <UdaBadge label="PHQ" status={udaSummary?.phq9} />
          {sectionProgress?.total > 0 && (
            <span class={`mds-cc__card-progress${sectionsDone ? ' mds-cc__card-progress--done' : ''}`}>
              <span class="mds-cc__card-progress-bar">
                <span
                  class="mds-cc__card-progress-fill"
                  style={{ width: `${Math.round((sectionProgress.completed / sectionProgress.total) * 100)}%` }}
                />
              </span>
              <span class="mds-cc__card-progress-text">{sectionProgress.completed}/{sectionProgress.total}</span>
            </span>
          )}
          {delta && (
            <span
              class={`mds-cc__card-revenue${onOpenAnalyzer ? ' mds-cc__card-revenue--clickable' : ''}`}
              onClick={onOpenAnalyzer ? (e) => { e.stopPropagation(); onOpenAnalyzer(); } : undefined}
              title={onOpenAnalyzer ? 'Open PDPM Analyzer' : undefined}
              role={onOpenAnalyzer ? 'button' : undefined}
            >{delta}</span>
          )}
          {pendingQueries > 0 && (
            <span class="mds-cc__card-queries">{pendingQueries}Q</span>
          )}
          <span class={`mds-cc__chevron${isExpanded ? ' mds-cc__chevron--open' : ''}`}>&rsaquo;</span>
        </span>
      </div>

      {/* Line 2: Type · ARD date · deadline context */}
      <div class="mds-cc__card-line2">
        <span class="mds-cc__card-type">{cleanAssessmentType(assessmentType)}</span>
        {ard.dateText && (
          <>
            <span class="mds-cc__card-meta-sep">&middot;</span>
            <span class="mds-cc__card-ard-date">ARD {ard.dateText}</span>
          </>
        )}
        {ard.deadlineText && (
          <>
            <span class="mds-cc__card-meta-sep">&middot;</span>
            <span class={`mds-cc__card-ard mds-cc__card-ard--${ard.cls}`}>{ard.deadlineText}</span>
          </>
        )}
      </div>
    </div>
  );
}
