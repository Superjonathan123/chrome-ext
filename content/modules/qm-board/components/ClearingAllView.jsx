import { clearCta, formatShortDate, flattenTriggeringRows } from '../utils/derive.js';

/**
 * Full-panel takeover: flat cross-measure list of every currently-triggering
 * row, sorted by urgency (overdue → soon → later → stable).
 */
export function ClearingAllView({ currentlyTriggering, onBack, onRowClick }) {
  const all = flattenTriggeringRows(currentlyTriggering);
  const sorted = [...all].sort((a, b) => rank(a) - rank(b));

  return (
    <div className="qmb-detail">
      <div className="qmb-backbar">
        <div>
          <button type="button" className="qmb-backbar__btn" onClick={onBack}>‹ Back</button> {/* NO_TRACK */}
          <span className="qmb-backbar__title">Clearing soon</span>
          <span className="qmb-backbar__sub">
            {sorted.length} residents — flat list across all measures
          </span>
        </div>
      </div>
      {sorted.length === 0 ? (
        <div className="qmb-empty">Nothing triggering right now.</div>
      ) : (
        <div className="qmb-rows">
          {sorted.map(r => {
            const cta = clearCta(r);
            return (
              <div
                key={`${r.patientId}-${r.measureId}`}
                className={`qmb-row qmb-row--${r.urgency === 'overdue' ? 'urgent' : r.urgency === 'soon' ? 'soon' : 'stable'}`}
                onClick={() => onRowClick(r)}
                data-track="qm_drill_in"
                data-track-prop-measure-code={r.measureId}
                data-track-prop-view="triggers"
              >
                <span className="qmb-row__dot"></span>
                <span className="qmb-row__name">
                  {r.name}
                  <span className="qmb-row__qm">{r.measureLabel}</span>
                </span>
                <span className="qmb-row__meta">
                  {r.ardDate ? `ARD ${formatShortDate(r.ardDate)}` : '—'}
                </span>
                <RowCta cta={cta} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function rank(r) {
  if (r.urgency === 'overdue') return 0;
  if (r.urgency === 'soon')    return 1 + (r.daysUntilClear ?? 7);
  if (r.urgency === 'later')   return 100 + (r.daysUntilClear ?? 999);
  return 1000;
}

function RowCta({ cta }) {
  if (!cta) return null;
  return (
    <span className={`qmb-row__cta qmb-row__cta--${cta.tone}`}>
      <span className="qmb-row__cta-verb">{cta.verb}</span>
      {cta.detail && <span className="qmb-row__cta-detail">{cta.detail}</span>}
    </span>
  );
}
