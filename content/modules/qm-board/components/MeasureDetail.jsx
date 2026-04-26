import { shortLabel, clearCta, alertCta, formatShortDate, flattenTriggeringRows, formatSignalText, summarizeEvidence } from '../utils/derive.js';

/**
 * Measure drill-down — shows all triggering residents for one measure +
 * any nested heads-up signals targeting that measure.
 */
export function MeasureDetail({
  measureId,
  currentlyTriggering,
  preventableAlerts,
  onBack,
  onRowClick,
  onAlertClick,
}) {
  const all = flattenTriggeringRows(currentlyTriggering);
  const rows = all.filter(r => r.measureId === measureId);
  const measureDef = currentlyTriggering?.measuresEvaluated?.find(m => m.id === measureId);
  const title = shortLabel(measureId, measureDef?.label);

  // Nested heads-up that target this measure.
  const nestedAlerts = [];
  for (const p of (preventableAlerts?.patients || [])) {
    for (const a of [...(p.events || []), ...(p.canaries || [])]) {
      if (a.qmId !== measureId) continue;
      if (a.snooze || a.suppressedByExistingCoding) continue;
      nestedAlerts.push({
        patientId: p.patientId,
        name: `${p.lastName || ''}, ${p.firstName || ''}`.trim(),
        alertId: a.id,
        label: a.label,
        qmId: a.qmId,
        urgency: a.urgency,
        latestSignalDate: a.latestSignalDate,
        suggestedAction: a.suggestedAction,
        signals: a.signals || [],
      });
    }
  }

  const summary = currentlyTriggering?.summary?.byMeasure?.[measureId];

  return (
    <div className="qmb-detail">
      <div className="qmb-backbar">
        <div>
          <button type="button" className="qmb-backbar__btn" onClick={onBack}>‹ Back to measures</button> {/* NO_TRACK */}
          <span className="qmb-backbar__title">{title}</span>
          <span className="qmb-backbar__sub">
            {summary ? `${summary.triggering} triggering · ${summary.applicable} applicable` : ''}
            {nestedAlerts.length ? ` · ${nestedAlerts.length} heads-up` : ''}
          </span>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="qmb-empty">No currently-triggering residents.</div>
      ) : (
        <div className="qmb-rows">
          {rows.map(r => {
            const why = summarizeEvidence(r.measureId, r.evidence);
            const cta = clearCta(r);
            return (
              <div
                key={`${r.patientId}-${r.measureId}`}
                className={`qmb-row qmb-row--${r.urgency === 'overdue' ? 'urgent' : r.urgency === 'soon' ? 'soon' : 'stable'} ${why ? 'qmb-row--with-why' : ''}`}
                onClick={() => onRowClick(r)}
                data-track="qm_drill_in"
                data-track-prop-measure-code={r.measureId}
                data-track-prop-view="triggers"
              >
                <span className="qmb-row__dot"></span>
                <span className="qmb-row__name">{r.name}</span>
                <span className="qmb-row__meta">
                  {cleanType(r.targetType)}
                  {r.ardDate && <span className="qmb-row__sep">·</span>}
                  {r.ardDate && <span>ARD {formatShortDate(r.ardDate)}</span>}
                </span>
                <RowCta cta={cta} />
                {why && (
                  <span className="qmb-row__why">
                    <span className="qmb-row__why-arrow">↘</span> {why}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {nestedAlerts.length > 0 && (
        <>
          <div className="qmb-slabel" style={{ marginTop: 20 }}>
            <span>Heads-up on this measure</span>
            <span className="qmb-slabel__meta">{nestedAlerts.length} incoming signal{nestedAlerts.length === 1 ? '' : 's'}</span>
          </div>
          <div className="qmb-rows">
            {nestedAlerts.map(a => {
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
                  <span className="qmb-row__name">{a.name}</span>
                  <span className="qmb-row__meta">
                    {formatSignalText(a.signals?.[0]) || a.label}
                  </span>
                  <RowCta cta={cta} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

function cleanType(t) {
  if (!t) return '';
  return t.replace(/[\s/]+$/, '').trim();
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
