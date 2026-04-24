import { clearCta, alertCta, formatSignalText, shortLabel } from '../utils/derive.js';

/**
 * Right-rail with two action queues: Clearing Soon + Heads-up.
 */
export function ActionRail({
  triggeringRows,
  alerts,
  onRowClick,
  onAlertClick,
  onViewAllClearing,
  onViewAllHeadsUp,
}) {
  // Top 5 by (overdue → soon → other), then by daysUntilClear ascending.
  const sortedRows = [...triggeringRows].sort((a, b) => rowRank(a) - rowRank(b));
  const clearingTop = sortedRows.slice(0, 5);
  const overdueCount = sortedRows.filter(r => r.urgency === 'overdue').length;
  const thisWeekCount = sortedRows.filter(r => r.urgency === 'soon' || r.urgency === 'overdue').length;

  const alertsTop = alerts.slice(0, 5);

  return (
    <div className="qmb-rail">

      <div className="qmb-panel">
        <div className="qmb-panel__head">
          <h3 className="qmb-panel__title">Clearing soon</h3>
          <span className={`qmb-panel__count ${overdueCount ? 'qmb-panel__count--hot' : ''}`}>
            {overdueCount ? `${overdueCount} overdue · ` : ''}
            {thisWeekCount} this week
          </span>
        </div>

        {clearingTop.length === 0 ? (
          <div className="qmb-panel__empty">Nothing triggering right now.</div>
        ) : clearingTop.map(r => {
          const cta = clearCta(r);
          return (
            <div
              key={`${r.patientId}-${r.measureId}`}
              className="qmb-qrow"
              onClick={() => onRowClick(r)}
            >
              <span className={`qmb-qrow__dot qmb-qrow__dot--${r.urgency === 'overdue' ? 'urgent' : r.urgency === 'soon' ? 'soon' : 'stable'}`}></span>
              <span className="qmb-qrow__body">
                <span className="qmb-qrow__name">
                  {r.name}
                  <span className="qmb-qrow__qm">{r.measureLabel}</span>
                </span>
              </span>
              <CtaCell cta={cta} />
            </div>
          );
        })}

        {sortedRows.length > 5 && (
          <button type="button" className="qmb-panel__foot" onClick={onViewAllClearing}>
            View all {sortedRows.length} ›
          </button>
        )}
      </div>

      <div className="qmb-panel">
        <div className="qmb-panel__head">
          <h3 className="qmb-panel__title">Heads-up</h3>
          <span className="qmb-panel__count qmb-panel__count--alert">
            {alerts.length} incoming
          </span>
        </div>

        {alertsTop.length === 0 ? (
          <div className="qmb-panel__empty">No preventable alerts right now.</div>
        ) : alertsTop.map(a => {
          const cta = alertCta(a);
          return (
            <div
              key={`${a.patientId}-${a.alertId}`}
              className="qmb-qrow"
              onClick={() => onAlertClick(a)}
            >
              <span className="qmb-qrow__dot qmb-qrow__dot--alert"></span>
              <span className="qmb-qrow__body">
                <span className="qmb-qrow__name">
                  {a.name}
                  {a.qmId && <span className="qmb-qrow__qm">{shortLabel(a.qmId)}</span>}
                </span>
                <span className="qmb-qrow__meta">{alertMetaText(a)}</span>
              </span>
              <CtaCell cta={cta} />
            </div>
          );
        })}

        {alerts.length > 5 && (
          <button type="button" className="qmb-panel__foot" onClick={onViewAllHeadsUp}>
            View all {alerts.length} ›
          </button>
        )}
      </div>

    </div>
  );
}

function rowRank(r) {
  if (r.urgency === 'overdue') return 0;
  if (r.urgency === 'soon')    return 1 + (r.daysUntilClear ?? 7);
  if (r.urgency === 'later')   return 100 + (r.daysUntilClear ?? 999);
  return 1000; // next_obra, stable
}

function alertMetaText(a) {
  const firstSignal = a.signals?.[0];
  if (firstSignal) {
    const formatted = formatSignalText(firstSignal);
    if (formatted) return formatted;
  }
  return a.label;
}

function CtaCell({ cta }) {
  if (!cta) return null;
  return (
    <span className={`qmb-cta qmb-cta--${cta.tone}`}>
      <span className="qmb-cta__verb">{cta.verb}</span>
      {cta.detail && <span className="qmb-cta__detail">{cta.detail}</span>}
    </span>
  );
}
