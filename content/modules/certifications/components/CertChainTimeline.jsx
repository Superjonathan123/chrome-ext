import { useMemo } from 'preact/hooks';

/**
 * CertChainTimeline — renders a patient's cert chain as a compact timeline.
 *
 * Groups certs by partAStayId, renders each stay as a row of 3 slots:
 * Initial → Day 14 → Day 30.
 *
 * @param {{ certs: Array, onAction: (cert, action: string) => void }} props
 */

const SLOT_ORDER = ['initial', 'day_14_recert', 'day_30_recert'];
const SLOT_LABELS = {
  initial: 'Initial',
  day_14_recert: 'Day 14',
  day_30_recert: 'Day 30',
};

function getDaysUntil(dateStr) {
  if (!dateStr) return null;
  const due = new Date(dateStr);
  const now = new Date();
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

function getSlotState(cert) {
  if (!cert) return { variant: 'empty', label: '\u2014' };

  const daysUntil = getDaysUntil(cert.dueDate);
  const isOverdue = daysUntil !== null && daysUntil < 0;

  if (cert.status === 'signed') {
    return {
      variant: 'signed',
      label: 'Signed',
      detail: formatShortDate(cert.signedAt),
      subDetail: cert.signedByName || '',
    };
  }

  if (cert.status === 'skipped') {
    return { variant: 'skipped', label: 'Skipped', showUnskip: true };
  }

  if ((cert.isDelayed || cert.status === 'delayed') && isOverdue) {
    const daysOver = Math.abs(daysUntil);
    return {
      variant: 'overdue',
      label: `${daysOver}d overdue`,
      showSend: true,
    };
  }

  if (isOverdue) {
    const daysOver = Math.abs(daysUntil);
    return {
      variant: 'overdue',
      label: `${daysOver}d overdue`,
      showSend: true,
    };
  }

  if (cert.status === 'sent') {
    return {
      variant: 'sent',
      label: 'Awaiting',
      detail: formatShortDate(cert.sentAt),
    };
  }

  // pending
  return {
    variant: 'pending',
    label: 'Pending',
    detail: cert.dueDate ? `Due ${formatShortDate(cert.dueDate)}` : '',
    showSend: true,
  };
}

function SlotCard({ type, cert, onAction }) {
  const state = getSlotState(cert);

  return (
    <div class={`cert-chain__slot cert-chain__slot--${state.variant}`}>
      <div class="cert-chain__slot-header">
        <span class="cert-chain__slot-type">{SLOT_LABELS[type]}</span>
      </div>
      <div class="cert-chain__slot-status">{state.label}</div>
      {state.detail && <div class="cert-chain__slot-detail">{state.detail}</div>}
      {state.subDetail && <div class="cert-chain__slot-sub">{state.subDetail}</div>}
      {state.showSend && cert && (
        <button
          class={`cert-chain__slot-btn cert-chain__slot-btn--${state.variant === 'overdue' ? 'destructive' : 'primary'}`}
          onClick={(e) => { e.stopPropagation(); onAction(cert, 'send'); }}
        >
          Send
        </button>
      )}
      {state.showUnskip && cert && (
        <button
          class="cert-chain__slot-btn cert-chain__slot-btn--ghost"
          onClick={(e) => { e.stopPropagation(); onAction(cert, 'unskip'); }}
        >
          Unskip
        </button>
      )}
    </div>
  );
}

function StayRow({ certs, onAction }) {
  // Map cert types to slots
  const slotMap = {};
  for (const cert of certs) {
    slotMap[cert.type] = cert;
  }

  return (
    <div class="cert-chain__stay">
      {SLOT_ORDER.map((type, i) => (
        <div key={type} class="cert-chain__step-wrapper">
          {i > 0 && <div class="cert-chain__connector" />}
          <SlotCard type={type} cert={slotMap[type] || null} onAction={onAction} />
        </div>
      ))}
    </div>
  );
}

export function CertChainTimeline({ certs, onAction }) {
  const stays = useMemo(() => {
    if (!certs || certs.length === 0) return [];

    const groups = {};
    for (const cert of certs) {
      const key = cert.partAStayId || 'unknown';
      if (!groups[key]) groups[key] = [];
      groups[key].push(cert);
    }

    // Sort each group by sequenceNumber ascending
    const entries = Object.entries(groups);
    for (const [, group] of entries) {
      group.sort((a, b) => (a.sequenceNumber || 0) - (b.sequenceNumber || 0));
    }

    // Sort stays: most recent first (highest sequenceNumber in group)
    entries.sort((a, b) => {
      const aMax = Math.max(...a[1].map(c => c.sequenceNumber || 0));
      const bMax = Math.max(...b[1].map(c => c.sequenceNumber || 0));
      return bMax - aMax;
    });

    return entries;
  }, [certs]);

  if (stays.length === 0) return null;

  return (
    <div class="cert-chain">
      {stays.map(([stayId, group]) => (
        <StayRow key={stayId} certs={group} onAction={onAction} />
      ))}
    </div>
  );
}
