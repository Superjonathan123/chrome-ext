/**
 * SeverityCards — compact severity count strip.
 * Clicking a card toggles that severity in the active filter set.
 */
const SEVERITY_ORDER = ['critical', 'high', 'medium', 'low'];

const SEVERITY_LABELS = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

export function SeverityCards({ counts, activeSeverities, onToggle }) {
  return (
    <div class="thr__severity-strip" role="group" aria-label="Filter by severity">
      {SEVERITY_ORDER.map(sev => {
        const count = counts?.[sev] ?? 0;
        const active = activeSeverities.has(sev);
        return (
          <button
            key={sev}
            type="button"
            class={`thr__sev-card thr__sev-card--${sev} ${active ? 'is-active' : ''}`}
            aria-pressed={active}
            onClick={() => onToggle(sev)}
          >
            <span class="thr__sev-label">{SEVERITY_LABELS[sev]}</span>
            <span class="thr__sev-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
