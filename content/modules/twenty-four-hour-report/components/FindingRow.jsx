/**
 * FindingRow — single finding card in the 24-hour report list.
 *
 * Row is read-only. The ↗ link on hover is an <a href> so middle-click /
 * cmd-click open in a new tab natively. Plain same-tab click is intercepted
 * by onOpenInPCC which persists state for the auto-restore flow.
 */

import { categoryInfo, subcategoryLabel, findingText } from '../utils/formatFinding.js';

const SEVERITY_LABEL = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

function pccOrigin() {
  try {
    return new URL(window.location.href).origin;
  } catch {
    return '';
  }
}

function pccPatientUrl(patientId) {
  if (!patientId) return null;
  const origin = pccOrigin();
  if (!origin) return null;
  return `${origin}/admin/client/cp_residentdashboard.jsp?ESOLrow=1&ESOLclientid=${encodeURIComponent(patientId)}`;
}

function patientDisplayName(finding) {
  if (finding.patientName) return finding.patientName;
  const first = finding.patientFirstName || '';
  const last = finding.patientLastName || '';
  const joined = [last, first].filter(Boolean).join(', ');
  return joined || 'Unknown';
}

export function FindingRow({ finding, onOpenInPCC }) {
  const sev = (finding.severity || 'low').toLowerCase();
  const sevLabel = SEVERITY_LABEL[sev] || sev;
  const name = patientDisplayName(finding);
  const room = finding.room || finding.patientRoom || '';
  const cat = categoryInfo(finding.category);
  const subLabel = subcategoryLabel(finding.subcategory || finding.type || finding.findingType);
  const text = findingText(finding);
  const findingId = finding.id || finding.findingId || null;
  const patientId = finding.patientId || finding.residentId || null;
  const href = pccPatientUrl(patientId);

  const handleClick = (e) => {
    if (!href) return;
    // Let middle-click / cmd-click / ctrl-click do native new-tab behavior.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    onOpenInPCC?.(finding, { href });
  };

  return (
    <li class="thr__row" data-finding-id={findingId || undefined} data-severity={sev}>
      <span class={`thr__row-bar thr__row-bar--${sev}`} aria-hidden="true" />
      <div class="thr__row-main">
        <div class="thr__row-heading">
          <span class={`thr__sev-badge thr__sev-badge--${sev}`}>{sevLabel}</span>
          <span class="thr__row-name">{name}</span>
          {room && <span class="thr__row-meta">{room}</span>}
          {cat && (
            <span class="thr__chip">
              {cat.emoji && <span class="thr__chip-emoji" aria-hidden="true">{cat.emoji}</span>}
              {cat.label}
            </span>
          )}
          {subLabel && <span class="thr__chip thr__chip--type">{subLabel}</span>}
        </div>
        {text && <p class="thr__row-text">{text}</p>}
      </div>
      {href && (
        <a
          class="thr__row-open"
          href={href}
          onClick={handleClick}
          aria-label={`Open ${name} in PointClickCare`}
          title="Open in PointClickCare"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17L17 7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      )}
    </li>
  );
}
