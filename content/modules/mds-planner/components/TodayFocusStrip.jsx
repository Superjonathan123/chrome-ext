/**
 * TodayFocusStrip — the "what do I work on first?" surface.
 *
 * Anna's morning triage in one place: cross-queue pull of overdue and
 * approaching items from every queue, sorted most-urgent first.
 * Replaces the mental "scan 6 queues for red" step.
 */
import { useState } from 'preact/hooks';
import { openEventAction } from '../utils/pccDeepLinks.js';
import { shortenDescription } from '../utils/shortenDescription.js';

function hoursAgo(iso) {
  if (!iso) return 0;
  const d = new Date(iso);
  if (isNaN(d)) return 0;
  return Math.floor((Date.now() - d.getTime()) / 3600000);
}

function isPast(iso) {
  if (!iso) return false;
  const d = new Date(iso);
  if (isNaN(d)) return false;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return d < today;
}

function daysTo(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d)) return null;
  d.setHours(0, 0, 0, 0);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return Math.round((d - today) / 86400000);
}

// Build one flat list of focus items across all queues, then sort by urgency.
// Each item carries enough metadata to deep-link to the relevant PCC page.
function buildFocusItems(summary) {
  if (!summary) return [];
  const items = [];

  const mkEvent = (p, type, metaExtras = {}) => ({
    type,
    patientExternalId: p.patientExternalId,
    patientName: p.patientName,
    meta: {
      pccAssessmentId: p.pccAssessmentId,
      pccCarePlanId: p.pccCarePlanId,
      pccReviewId: p.pccReviewId,
      ...metaExtras,
    },
  });

  // MDS Coding — overdue to lock, or within 2 days
  for (const p of summary.mdsCoding?.patients || []) {
    const days = p.daysToCompleteBy;
    if (days == null) continue;
    const typeLabel = p.description ? `MDS · ${shortenDescription(p.description)}` : 'MDS coding';
    if (days < 0) {
      items.push({ kind: 'mds', urgency: 'overdue', anchor: 'mds-coding', patient: p.patientName, label: typeLabel, detail: `${Math.abs(days)}d past lock`, sort: -100 + days, event: mkEvent(p, 'mds_ard') });
    } else if (days <= 2) {
      items.push({ kind: 'mds', urgency: 'warning', anchor: 'mds-coding', patient: p.patientName, label: typeLabel, detail: `${days}d to lock`, sort: days, event: mkEvent(p, 'mds_ard') });
    }
  }

  // Care Plans to Open — overdue (48h+) or approaching (24h+)
  for (const p of summary.carePlansToOpen?.patients || []) {
    const h = p.hoursSinceAdmit || 0;
    if (h >= 48) {
      items.push({ kind: 'cp_open', urgency: 'overdue', anchor: 'cp-open', patient: p.patientName, label: 'Care plan to open', detail: `${h}h since admit`, sort: -80 - h / 24, event: mkEvent(p, 'cp_open_needed') });
    } else if (h >= 24) {
      items.push({ kind: 'cp_open', urgency: 'warning', anchor: 'cp-open', patient: p.patientName, label: 'Care plan to open', detail: `${h}h since admit`, sort: 2, event: mkEvent(p, 'cp_open_needed') });
    }
  }

  // Care Plans to Review — overdue state or past expected
  for (const p of summary.carePlansToReview?.patients || []) {
    const past = p.state === 'overdue' || isPast(p.expectedDate);
    const d = daysTo(p.expectedDate);
    const evType = p.state === 'in_progress' ? 'cp_review_in_progress' : 'cp_review_due';
    if (past) {
      items.push({ kind: 'cp_review', urgency: 'overdue', anchor: 'cp-review', patient: p.patientName, label: 'Care plan review', detail: d != null ? `${Math.abs(d)}d past due` : 'past due', sort: -60 + (d ?? 0), event: mkEvent(p, evType) });
    } else if (d != null && d <= 2) {
      items.push({ kind: 'cp_review', urgency: 'warning', anchor: 'cp-review', patient: p.patientName, label: 'Care plan review', detail: `due in ${d}d`, sort: d, event: mkEvent(p, evType) });
    }
  }

  // Interviews — overdue (past dueDate)
  for (const p of summary.interviewsOwed?.patients || []) {
    if (isPast(p.dueDate)) {
      const d = daysTo(p.dueDate) || 0;
      const typeUpper = (p.dueType || '').toUpperCase();
      const label = p.mdsDescription
        ? `${typeUpper} interview · ${shortenDescription(p.mdsDescription)}`
        : `${typeUpper} interview`;
      items.push({ kind: 'interview', urgency: 'overdue', anchor: 'interviews', patient: p.patientName, label, detail: `${Math.abs(d)}d past due`, sort: -40 + d, event: mkEvent(p, 'mds_ard') });
    }
  }

  // Certs — prefer the patient-named roster (backend v2). Fall back to counts-only
  // rollup rows for older API versions that don't ship overdueList yet.
  const overdueCerts = summary.certs?.overdueList;
  if (Array.isArray(overdueCerts) && overdueCerts.length > 0) {
    for (const c of overdueCerts) {
      const evType = 'cert_overdue';
      const typeLabel = c.type === 'day_14_recert' ? 'Day-14 recert'
        : c.type === 'day_30_recert' ? 'Day-30 recert'
        : c.type === 'initial' ? 'Initial cert'
        : 'Cert';
      const bucketLabel = c.bucket === 'awaiting_signature' ? 'awaiting sig' : 'to send';
      items.push({
        kind: 'cert',
        urgency: 'overdue',
        anchor: 'certs',
        patient: c.patientName,
        label: `${typeLabel} · ${bucketLabel}`,
        detail: `${c.daysOverdue}d overdue`,
        sort: -20 - (c.daysOverdue || 0),
        event: {
          type: evType,
          patientExternalId: c.patientExternalId,
          patientName: c.patientName,
          meta: { certId: c.certId, type: c.type, bucket: c.bucket, daysOverdue: c.daysOverdue },
        },
      });
    }
  } else {
    // Fallback: counts-only rollup rows
    const certsOverdueSend = summary.certs?.needsToSend?.overdueCount || 0;
    const certsOverdueSig = summary.certs?.awaitingSignature?.overdueCount || 0;
    if (certsOverdueSend > 0) {
      items.push({ kind: 'cert', urgency: 'overdue', anchor: 'certs', patient: null, label: 'Certs to send', detail: `${certsOverdueSend} overdue`, sort: -20, event: null });
    }
    if (certsOverdueSig > 0) {
      items.push({ kind: 'cert', urgency: 'overdue', anchor: 'certs', patient: null, label: 'Certs awaiting sig', detail: `${certsOverdueSig} overdue`, sort: -19, event: null });
    }
  }

  return items.sort((a, b) => a.sort - b.sort);
}

const KIND_ICON = {
  mds: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  cp_open: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  cp_review: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  interview: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  cert: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
};

function scrollToQueue(anchor) {
  const el = document.getElementById(`mds-pl-q-${anchor}`);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Primary click: deep-link to PCC if we have enough data; otherwise scroll to queue.
function activateFocusItem(item) {
  if (item.event && openEventAction(item.event)) return;
  scrollToQueue(item.anchor);
}

export function TodayFocusStrip({ summary }) {
  const items = buildFocusItems(summary);
  if (items.length === 0) {
    return (
      <div class="mds-pl__focus mds-pl__focus--empty">
        <div class="mds-pl__focus-head">
          <span class="mds-pl__focus-title">Today's focus</span>
          <span class="mds-pl__focus-clear">All caught up ✓</span>
        </div>
      </div>
    );
  }

  const [showAll, setShowAll] = useState(false);
  const overdueCount = items.filter(i => i.urgency === 'overdue').length;
  const warningCount = items.filter(i => i.urgency === 'warning').length;
  const DEFAULT_CAP = 5;
  const shown = showAll ? items : items.slice(0, DEFAULT_CAP);
  const more = items.length - shown.length;

  return (
    <div class="mds-pl__focus">
      <div class="mds-pl__focus-head">
        <span class="mds-pl__focus-title">Today's focus</span>
        <span class="mds-pl__focus-summary">
          {overdueCount > 0 && <span class="mds-pl__focus-count mds-pl__focus-count--overdue">{overdueCount} overdue</span>}
          {overdueCount > 0 && warningCount > 0 && <span class="mds-pl__focus-sep"> · </span>}
          {warningCount > 0 && <span class="mds-pl__focus-count mds-pl__focus-count--warning">{warningCount} soon</span>}
        </span>
      </div>
      <div class="mds-pl__focus-list">
        {shown.map((item, i) => (
          <button
            key={i}
            type="button"
            class={`mds-pl__focus-row mds-pl__focus-row--${item.urgency}`}
            onClick={() => activateFocusItem(item)}
            title={item.event ? `Open ${item.patient || item.label} in PCC` : `Jump to ${item.label}`}
          >
            <span class="mds-pl__focus-icon">{KIND_ICON[item.kind]}</span>
            <span class="mds-pl__focus-main">
              {item.patient && <><span class="mds-pl__focus-patient">{item.patient}</span> </>}
              <span class="mds-pl__focus-label">{item.label}</span>
            </span>
            <span class="mds-pl__focus-detail">{item.detail}</span>
            <span class="mds-pl__focus-chev" aria-hidden="true">&rsaquo;</span>
          </button>
        ))}
        {more > 0 && (
          <button
            type="button"
            class="mds-pl__focus-more"
            onClick={() => setShowAll(true)}
          >
            + {more} more — show all
          </button>
        )}
        {showAll && items.length > DEFAULT_CAP && (
          <button
            type="button"
            class="mds-pl__focus-more"
            onClick={() => setShowAll(false)}
          >
            Show fewer
          </button>
        )}
      </div>
    </div>
  );
}
