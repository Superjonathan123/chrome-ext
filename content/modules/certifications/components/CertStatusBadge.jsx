/**
 * CertStatusBadge — color-coded urgency/status indicator.
 *
 * Derives display from { status, isDelayed, dueDate }:
 *   overdue + delayed    → red   "X DAYS OVERDUE"
 *   due within 3 days    → amber "DUE IN X DAYS" / "DUE TODAY"
 *   sent + not overdue   → blue  "AWAITING SIGNATURE"
 *   signed               → green "Signed [date]"
 *   pending              → gray  "PENDING"
 *   delayed (not overdue)→ orange "DELAYED"
 *   skipped              → gray  "SKIPPED"
 */

function getDaysUntil(dateStr) {
  if (!dateStr) return null;
  const due = new Date(dateStr);
  const now = new Date();
  // Reset to midnight for day-level comparison
  due.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return Math.floor((due - now) / 86400000);
}

function formatShortDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function CertStatusBadge({ status, isDelayed, dueDate, signedAt }) {
  const daysUntil = getDaysUntil(dueDate);
  const isOverdue = daysUntil !== null && daysUntil < 0;
  const isDueSoon = daysUntil !== null && daysUntil >= 0 && daysUntil <= 3;

  // Overdue (delayed or past due)
  if ((isDelayed || status === 'delayed') && isOverdue) {
    const daysOver = Math.abs(daysUntil);
    return (
      <span class="cert__status-badge cert__status-badge--overdue">
        {daysOver} DAY{daysOver !== 1 ? 'S' : ''} OVERDUE
      </span>
    );
  }

  // Pending but overdue
  if (isOverdue && (status === 'pending' || status === 'sent')) {
    const daysOver = Math.abs(daysUntil);
    return (
      <span class="cert__status-badge cert__status-badge--overdue">
        {daysOver} DAY{daysOver !== 1 ? 'S' : ''} OVERDUE
      </span>
    );
  }

  // Due soon
  if (isDueSoon && status !== 'signed' && status !== 'skipped') {
    const label = daysUntil === 0 ? 'DUE TODAY' : `DUE IN ${daysUntil} DAY${daysUntil !== 1 ? 'S' : ''}`;
    return (
      <span class="cert__status-badge cert__status-badge--due-soon">
        {label}
      </span>
    );
  }

  // Sent / awaiting signature
  if (status === 'sent') {
    return (
      <span class="cert__status-badge cert__status-badge--awaiting">
        AWAITING SIGNATURE
      </span>
    );
  }

  // Signed
  if (status === 'signed') {
    return (
      <span class="cert__status-badge cert__status-badge--signed">
        Signed {formatShortDate(signedAt)}
      </span>
    );
  }

  // Delayed (not overdue)
  if (status === 'delayed' || isDelayed) {
    return (
      <span class="cert__status-badge cert__status-badge--delayed">
        DELAYED
      </span>
    );
  }

  // Skipped
  if (status === 'skipped') {
    return (
      <span class="cert__status-badge cert__status-badge--skipped">
        SKIPPED
      </span>
    );
  }

  // Default: pending
  return (
    <span class="cert__status-badge cert__status-badge--pending">
      PENDING
    </span>
  );
}
