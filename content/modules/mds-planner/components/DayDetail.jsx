import { openEventAction, resolveEventAction } from '../utils/pccDeepLinks.js';

// Richer type labels for the day-detail view than what the calendar row shows.
const TYPE_LABELS = {
  admit: 'Admission',
  readmit: 'Readmit',
  discharge: 'Discharge',
  mds_ard: 'MDS ARD',
  mds_due: 'MDS completion deadline',
  next_mds_ard: 'Next MDS ARD (forecast)',
  cp_open_needed: 'Care plan to open',
  cp_review_expected: 'Care plan review — expected',
  cp_review_in_progress: 'Care plan review — in progress',
  cp_review_due: 'Care plan review due',
  cp_completion_due: 'Care plan completion due',
  query_due: 'Query',
  cert_due: 'Certification due',
  cert_overdue: 'Certification overdue',
};

const URGENCY_LABELS = {
  overdue: 'Overdue',
  urgent: 'Urgent',
  approaching: 'Approaching',
  ok: '',
};

// Category for the left-bar color — match EventRow / mds-planner.css tokens.
const TYPE_CATEGORY = {
  admit: 'admit',
  readmit: 'admit',
  discharge: 'dc',
  mds_ard: 'sig',
  mds_due: 'sig',
  next_mds_ard: 'sig',
  cp_open_needed: 'cp',
  cp_review_expected: 'cp',
  cp_review_in_progress: 'cp',
  cp_review_due: 'cp',
  cp_completion_due: 'cp',
  query_due: 'query',
  cert_due: 'cert',
  cert_overdue: 'cert',
};

const URGENCY_ORDER = { overdue: 0, urgent: 1, approaching: 2, ok: 3 };

function formatLongDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

function describeMeta(e) {
  const { type, meta = {} } = e;
  const parts = [];
  if (type === 'mds_ard' || type === 'mds_due') {
    if (meta.description) parts.push(meta.description);
    if (meta.ardDate) parts.push(`ARD ${meta.ardDate}`);
    if (meta.status) parts.push(meta.status.toLowerCase());
  } else if (type === 'next_mds_ard') {
    if (meta.expectedType) parts.push(meta.expectedType);
    if (meta.ardDate) parts.push(`ARD ${meta.ardDate}`);
  } else if (type === 'cp_open_needed') {
    if (meta.hoursSinceAdmit != null) parts.push(`${meta.hoursSinceAdmit}h since admit`);
  } else if (type === 'cp_review_expected') {
    if (meta.relatedArdDate) parts.push(`ARD ${meta.relatedArdDate} (− 2d)`);
  } else if (type === 'cp_review_in_progress') {
    if (meta.startDate) parts.push(`started ${meta.startDate}`);
    if (meta.targetCompletionDate) parts.push(`target ${meta.targetCompletionDate}`);
  } else if (type === 'cp_completion_due') {
    parts.push(meta.isProxy ? 'estimated (pre-signoff)' : 'signoff + 7');
  } else if (type === 'query_due') {
    if (meta.itemCode) parts.push(meta.itemCode);
    if (meta.status) parts.push(meta.status);
    if (meta.linkedArdDate) parts.push(`ARD ${meta.linkedArdDate}`);
  } else if (type === 'cert_due' || type === 'cert_overdue') {
    if (meta.type) parts.push(meta.type.replace(/_/g, ' '));
    if (meta.bucket) parts.push(meta.bucket.replace(/_/g, ' '));
    if (meta.daysOverdue) parts.push(`${meta.daysOverdue}d overdue`);
  } else if (type === 'admit' || type === 'readmit') {
    if (meta.payer) parts.push(meta.payer);
    if (meta.location) parts.push(meta.location);
  }
  return parts.join(' · ');
}

function EventRowDetail({ event }) {
  const category = TYPE_CATEGORY[event.type] || 'cp';
  const isUrgent = event.urgency === 'overdue' || event.urgency === 'urgent';
  const label = TYPE_LABELS[event.type] || event.type;
  const urgencyText = URGENCY_LABELS[event.urgency] || '';
  const metaText = describeMeta(event);
  const action = resolveEventAction(event);
  const clickable = !!action;

  return (
    <div
      class={`mds-pl__detail-row mds-pl__detail-row--${category}${isUrgent ? ' mds-pl__detail-row--urgent' : ''}${clickable ? ' mds-pl__detail-row--clickable' : ''}`}
      onClick={clickable ? () => openEventAction(event) : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      data-track={clickable ? 'mds_planner_event_clicked' : undefined}
      data-track-prop-event-type={clickable ? (event.type || '') : undefined}
    >
      <span class="mds-pl__detail-bar" />
      <div class="mds-pl__detail-body">
        <div class="mds-pl__detail-header">
          <span class="mds-pl__detail-name">{event.patientName || 'Unknown'}</span>
          <span class="mds-pl__detail-type">{label}</span>
          {urgencyText && (
            <span class={`mds-pl__detail-urgency mds-pl__detail-urgency--${event.urgency}`}>
              {urgencyText}
            </span>
          )}
        </div>
        {metaText && <div class="mds-pl__detail-meta">{metaText}</div>}
      </div>
      {clickable && <span class="mds-pl__detail-arrow">&rsaquo;</span>}
    </div>
  );
}

export function DayDetail({ date, events, onClose }) {
  const sorted = [...events].sort((a, b) => {
    const ua = URGENCY_ORDER[a.urgency] ?? 3;
    const ub = URGENCY_ORDER[b.urgency] ?? 3;
    if (ua !== ub) return ua - ub;
    return (a.type || '').localeCompare(b.type || '');
  });

  return (
    <div class="mds-pl__detail">
      <div class="mds-pl__detail-head">
        <span class="mds-pl__detail-head-label">{formatLongDate(date)}</span>
        <span class="mds-pl__detail-head-count">
          {events.length} {events.length === 1 ? 'event' : 'events'}
        </span>
        {/* NO_TRACK: close-X */}
        <button class="mds-pl__detail-close" onClick={onClose} aria-label="Close day detail">&times;</button>
      </div>
      {events.length === 0 ? (
        <div class="mds-pl__detail-empty">Nothing scheduled.</div>
      ) : (
        <div class="mds-pl__detail-list">
          {sorted.map((e, i) => (
            <EventRowDetail key={`${e.type}-${e.patientId}-${i}`} event={e} />
          ))}
        </div>
      )}
    </div>
  );
}
