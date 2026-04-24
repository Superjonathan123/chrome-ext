import { openEventAction, resolveEventAction } from '../utils/pccDeepLinks.js';

const TYPE_LABELS = {
  admit: 'Admission',
  readmit: 'Readmit',
  discharge: 'Discharge',
  mds_ard: 'MDS ARD',
  next_mds_ard: 'Next MDS ARD (forecast)',
  query_due: 'Query',
  cert_due: 'Certification due',
  cert_overdue: 'Certification overdue',
};

const URGENCY_LABELS = {
  overdue: 'Overdue',
  warning: 'Due soon',
  ok: '',
};

const URGENCY_ORDER = { overdue: 0, warning: 1, ok: 2 };

function formatLongDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

function describeMeta(e) {
  const { type, meta = {} } = e;
  const parts = [];
  if (type === 'mds_ard') {
    if (meta.description) parts.push(meta.description);
    if (meta.ardDate) parts.push(`ARD ${meta.ardDate}`);
    if (meta.status) parts.push(meta.status.toLowerCase());
  } else if (type === 'next_mds_ard') {
    if (meta.expectedType) parts.push(meta.expectedType);
  } else if (type === 'query_due') {
    if (meta.itemCode) parts.push(meta.itemCode);
    if (meta.status) parts.push(meta.status);
    if (meta.linkedArdDate) parts.push(`linked ARD ${meta.linkedArdDate}`);
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

function Row({ event }) {
  const urgency = event.urgency || 'ok';
  const label = TYPE_LABELS[event.type] || event.type;
  const urgencyText = URGENCY_LABELS[urgency] || '';
  const metaText = describeMeta(event);
  const action = resolveEventAction(event);
  const clickable = !!action;

  return (
    <div
      class={`mds-pl__dv-row mds-pl__dv-row--u-${urgency}${clickable ? ' mds-pl__dv-row--clickable' : ''}`}
      onClick={clickable ? () => openEventAction(event) : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      <span class="mds-pl__dv-bar" />
      <div class="mds-pl__dv-body">
        <div class="mds-pl__dv-header">
          <span class="mds-pl__dv-name">{event.patientName || 'Unknown'}</span>
          <span class="mds-pl__dv-type">{label}</span>
          {urgencyText && (
            <span class={`mds-pl__dv-urgency mds-pl__dv-urgency--${urgency}`}>
              {urgencyText}
            </span>
          )}
        </div>
        {metaText && <div class="mds-pl__dv-meta">{metaText}</div>}
      </div>
      {clickable && <span class="mds-pl__dv-arrow">&rsaquo;</span>}
    </div>
  );
}

export function DayView({ date, events, onBack }) {
  const sorted = [...events].sort((a, b) => {
    const ua = URGENCY_ORDER[a.urgency] ?? 3;
    const ub = URGENCY_ORDER[b.urgency] ?? 3;
    if (ua !== ub) return ua - ub;
    return (a.type || '').localeCompare(b.type || '');
  });

  return (
    <div class="mds-pl__dv">
      <div class="mds-pl__dv-top">
        <button class="mds-pl__dv-back" onClick={onBack}>
          <span aria-hidden="true">&lsaquo;</span> Back to week
        </button>
        <div class="mds-pl__dv-title">
          <span class="mds-pl__dv-title-date">{formatLongDate(date)}</span>
          <span class="mds-pl__dv-title-count">
            {events.length} {events.length === 1 ? 'event' : 'events'}
          </span>
        </div>
      </div>
      {events.length === 0 ? (
        <div class="mds-pl__dv-empty">Nothing scheduled for this day.</div>
      ) : (
        <div class="mds-pl__dv-list">
          {sorted.map((e, i) => <Row key={`${e.type}-${e.patientId}-${i}`} event={e} />)}
        </div>
      )}
    </div>
  );
}
