/**
 * AssessmentRow — collapsed row in the MDS Command Center accordion list.
 *
 * Shows:
 *   • Urgency dot (color-coded)
 *   • Patient name, assessment type, ARD date
 *   • Urgency pill (days remaining / overdue / done)
 *   • Payment delta badge (+$47/day) — replaces HIPPS text badge
 *   • Fallback ↑ badge when improvements exist but payment not applicable
 *   • Icon-only badges: ✉ N for queries, ⚠ for compliance issues
 *   • Expand/collapse chevron
 */

const URGENCY_DOT_COLORS = {
  overdue: '#ef4444',
  urgent: '#f97316',
  approaching: '#eab308',
  on_track: '#22c55e',
  completed: '#6b7280',
};

function UrgencyDot({ urgency }) {
  const color = URGENCY_DOT_COLORS[urgency] || '#9ca3af';
  return (
    <span
      class="mds-cc__urgency-dot"
      style={{ background: color }}
      aria-label={urgency}
    />
  );
}

function UrgencyPill({ deadline }) {
  if (!deadline) return null;

  const { daysRemaining, urgency, label } = deadline;
  let text = label || '';
  if (!text) {
    if (urgency === 'completed') text = 'Done';
    else if (urgency === 'overdue') text = 'Overdue';
    else if (daysRemaining != null) text = `${daysRemaining}d`;
  }

  const cls = [
    'mds-cc__pill',
    `mds-cc__pill--${urgency || 'default'}`
  ].join(' ');

  return <span class={cls}>{text}</span>;
}

function getPaymentDelta(payment) {
  if (!payment?.isApplicable) return null;
  if (payment.ppd?.delta > 0)          return `+$${Math.round(payment.ppd.delta)}/day`;
  if (payment.texasPdpm?.delta > 0)    return `+$${Math.round(payment.texasPdpm.delta)}/day`;
  if (payment.cmi?.delta > 0)          return `+${payment.cmi.delta.toFixed(2)} CMI`;
  return null;
}

function PaymentDeltaBadge({ pdpm }) {
  const payment = pdpm?.payment;
  const delta = getPaymentDelta(payment);

  if (delta) {
    return (
      <span class="mds-cc__badge mds-cc__badge--payment">
        {delta}
      </span>
    );
  }

  // Fallback: show thin ↑ badge if improvements exist but payment not applicable
  if (pdpm?.hasImprovements) {
    return (
      <span class="mds-cc__badge mds-cc__badge--hipps-fallback">
        ↑
      </span>
    );
  }

  return null;
}

function QueryIconBadge({ querySummary }) {
  const pending = querySummary?.pending ?? 0;
  if (pending === 0) return null;
  return (
    <span class="mds-cc__icon-badge mds-cc__icon-badge--query" aria-label={`${pending} pending ${pending === 1 ? 'query' : 'queries'}`}>
      ✉ {pending}
    </span>
  );
}

function ComplianceIconBadge({ compliance }) {
  if (!compliance || compliance.status === 'ok') return null;
  const count = compliance.issues?.length ?? 0;
  if (count === 0) return null;
  return (
    <span class="mds-cc__icon-badge mds-cc__icon-badge--compliance" aria-label={`${count} compliance ${count === 1 ? 'issue' : 'issues'}`}>
      ⚠
    </span>
  );
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function AssessmentRow({ assessment, isExpanded, onToggle }) {
  const {
    patientName,
    assessmentType,
    ardDate,
    deadline,
    pdpm,
    querySummary,
    compliance,
    urgency
  } = assessment;

  return (
    <div
      class={`mds-cc__row${isExpanded ? ' mds-cc__row--expanded' : ''}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
      aria-expanded={isExpanded}
    >
      <div class="mds-cc__row-main">
        <UrgencyDot urgency={urgency || deadline?.urgency} />

        <div class="mds-cc__row-info">
          <span class="mds-cc__patient-name">{patientName || 'Unknown'}</span>
          <span class="mds-cc__assessment-type">{assessmentType || '—'}</span>
          <span class="mds-cc__ard-date">ARD {formatDate(ardDate)}</span>
        </div>

        <div class="mds-cc__row-badges">
          <UrgencyPill deadline={deadline} />
          <PaymentDeltaBadge pdpm={pdpm} />
          <QueryIconBadge querySummary={querySummary} />
          <ComplianceIconBadge compliance={compliance} />
        </div>

        <span class={`mds-cc__chevron${isExpanded ? ' mds-cc__chevron--open' : ''}`}>
          ›
        </span>
      </div>
    </div>
  );
}
