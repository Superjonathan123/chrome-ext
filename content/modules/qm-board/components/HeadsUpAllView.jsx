import { shortLabel, alertCta, formatSignalText } from '../utils/derive.js';

/**
 * Full-panel takeover: flat list of actionable heads-up alerts.
 */
export function HeadsUpAllView({ alerts, onBack, onAlertClick }) {
  return (
    <div className="qmb-detail">
      <div className="qmb-backbar">
        <div>
          <button type="button" className="qmb-backbar__btn" onClick={onBack}>‹ Back</button> {/* NO_TRACK */}
          <span className="qmb-backbar__title">Heads-up</span>
          <span className="qmb-backbar__sub">
            {alerts.length} incoming signal{alerts.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>
      {alerts.length === 0 ? (
        <div className="qmb-empty">No preventable alerts right now.</div>
      ) : (
        <div className="qmb-rows">
          {alerts.map(a => {
            const cta = alertCta(a);
            return (
              <div
                key={`${a.patientId}-${a.alertId}`}
                className="qmb-row qmb-row--alert"
                onClick={() => onAlertClick(a)}
                data-track="qm_drill_in"
                data-track-prop-measure-code={a.qmId || 'unknown'}
                data-track-prop-view="alerts"
              >
                <span className="qmb-row__dot qmb-row__dot--alert"></span>
                <span className="qmb-row__name">
                  {a.name}
                  {a.qmId && <span className="qmb-row__qm">{shortLabel(a.qmId)}</span>}
                </span>
                <span className="qmb-row__meta">
                  {formatSignalText(a.signals?.[0]) || a.label}
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

function RowCta({ cta }) {
  if (!cta) return null;
  return (
    <span className={`qmb-row__cta qmb-row__cta--${cta.tone}`}>
      <span className="qmb-row__cta-verb">{cta.verb}</span>
      {cta.detail && <span className="qmb-row__cta-detail">{cta.detail}</span>}
    </span>
  );
}
