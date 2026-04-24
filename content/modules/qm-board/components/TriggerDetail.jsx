import { useMemo } from 'preact/hooks';
import { shortLabel, clearLabel, alertCta, formatShortDate, summarizeEvidence, flattenAlerts } from '../utils/derive.js';

/**
 * TriggerDetail — full-width detail view for one (patient × measure)
 * currently-triggering row. Mirrors the Heads-up alert detail UX.
 *
 * Shows:
 *   - Header: name + urgency · QM chip · target assessment context
 *   - Summary: "Clears in ~14d" with the basis (time vs next OBRA vs locked)
 *   - Why it's triggering: every evidence row, with pairing for GG items
 *   - What to do: clearGuidance.actions[]
 *   - Related heads-up: any alerts for the same patient × QM
 */
const SEVERITY_PILL_CLASS = {
  overdue: 'qmb-pill qmb-pill--high',
  soon:    'qmb-pill qmb-pill--medium',
  later:   'qmb-pill qmb-pill--low',
  stable:  'qmb-pill qmb-pill--low',
};

const GG_ITEM_NAMES = {
  GG0170B: 'Sit to Lying',
  GG0170D: 'Sit to Stand',
  GG0170F: 'Toilet Transfer',
  GG0130A: 'Eating',
  GG0170I: 'Walk 10 Feet',
  GG0170J: 'Walk 50 Feet',
  GG0170K: 'Walk 150 Feet',
};

export function TriggerDetail({ row, preventableAlerts, onBack, onAlertClick }) {
  const summaryText = useMemo(() => summarizeEvidence(row.measureId, row.evidence), [row]);

  // Related heads-up for the same patient × QM
  const relatedAlerts = useMemo(() => {
    const all = flattenAlerts(preventableAlerts);
    return all.filter(a => a.patientId === row.patientId && a.qmId === row.measureId);
  }, [preventableAlerts, row]);

  const clearsText = formatClearsText(row);
  const urgencyPillClass = SEVERITY_PILL_CLASS[row.urgency] || 'qmb-pill';

  return (
    <div className="qmb-detail">
      <div className="qmb-backbar">
        <div className="qmb-backbar__left">
          <button type="button" className="qmb-backbar__btn" onClick={onBack}>‹ Back</button>
          <span className="qmb-backbar__title">{row.name}</span>
          <span className={urgencyPillClass}>{row.urgency || 'triggering'}</span>
          <div className="qmb-backbar__subline">
            <span className="qmb-row__qm" style={{ background: '#eef2ff', color: '#4f46e5' }}>
              {row.measureLabel}
            </span>
            <span>{cleanType(row.targetType)}</span>
            {row.ardDate && <><span className="qmb-row__sep">·</span><span>ARD {formatShortDate(row.ardDate)}</span></>}
          </div>
        </div>
      </div>

      {/* Clears-in summary card */}
      <div className="qmb-trigger-summary">
        <div className="qmb-trigger-summary__main">{clearsText.headline}</div>
        {clearsText.sub && <div className="qmb-trigger-summary__sub">{clearsText.sub}</div>}
      </div>

      {/* Why it's triggering — evidence block */}
      <div className="qmb-slabel">
        <span>Why it's triggering</span>
        <span className="qmb-slabel__meta">{row.evidence?.length || 0} evidence row{(row.evidence?.length || 0) === 1 ? '' : 's'}</span>
      </div>
      {summaryText && (
        <div className="qmb-trigger-why">
          <span className="qmb-row__why-arrow">↘</span> {summaryText}
        </div>
      )}
      <EvidenceTable measureId={row.measureId} evidence={row.evidence || []} />

      {/* What to do */}
      {row.clearActions && row.clearActions.length > 0 && (
        <>
          <div className="qmb-slabel" style={{ marginTop: 18 }}>
            <span>What you can do</span>
          </div>
          <ul className="qmb-action-list">
            {row.clearActions.map((a, i) => (
              <li key={i}>
                <div className="qmb-action-list__label">{a.label}</div>
                {a.detail && <div className="qmb-action-list__detail">{a.detail}</div>}
                {a.effectiveDate && (
                  <div className="qmb-action-list__detail">
                    Effective {formatShortDate(a.effectiveDate)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Related heads-up for this patient × measure */}
      {relatedAlerts.length > 0 && (
        <>
          <div className="qmb-slabel" style={{ marginTop: 18 }}>
            <span>Related heads-up</span>
            <span className="qmb-slabel__meta">{relatedAlerts.length} signal{relatedAlerts.length === 1 ? '' : 's'}</span>
          </div>
          <div className="qmb-rows">
            {relatedAlerts.map(a => {
              const cta = alertCta(a);
              return (
                <div
                  key={`${a.patientId}-${a.alertId}`}
                  className="qmb-row qmb-row--alert"
                  onClick={() => onAlertClick(a)}
                >
                  <span className="qmb-row__dot qmb-row__dot--alert"></span>
                  <span className="qmb-row__name">{a.label}</span>
                  <span className="qmb-row__meta">
                    {a.signals?.[0]?.text || '—'}
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

function formatClearsText(row) {
  if (row.urgency === 'overdue') {
    return { headline: 'Overdue', sub: 'Target ARD has passed without clearing — schedule a new qualifying assessment.' };
  }
  const label = clearLabel(row);
  let sub = '';
  if (row.clearsOnNextObra) {
    sub = 'Clears on the next qualifying OBRA with clean coding. Days above are estimated from the typical 46–165 day quarterly window.';
  } else if (row.clearActionType === 'time') {
    sub = `Rolls off on ${formatShortDate(row.clearDate)} — no new assessment required, it exits the scan window automatically.`;
  } else if (row.clearActionType === 'stay_locked') {
    sub = 'Stay-locked — clears only on the next admission cycle.';
  }
  return { headline: `Clears ${label}`, sub };
}

function EvidenceTable({ measureId, evidence }) {
  if (!evidence || evidence.length === 0) {
    return <div className="qmb-empty">No evidence returned.</div>;
  }

  // For ADL Decline, pair target + prior rows per GG item.
  if (measureId === 'adl_decline') {
    const byItem = new Map();
    for (const e of evidence) {
      const key = (e.mdsItem || '').replace(/[1-9]$/, '');
      if (!byItem.has(key)) byItem.set(key, { name: GG_ITEM_NAMES[key] || key, target: null, prior: null, rows: [] });
      byItem.get(key).rows.push(e);
      const val = parseInt(e.value, 10);
      if (/^Target/i.test(e.note || '')) byItem.get(key).target = { val, note: e.note, ardDate: e.assessmentArdDate, type: e.assessmentType };
      if (/^Prior/i.test(e.note || '')) byItem.get(key).prior = { val, note: e.note, ardDate: e.assessmentArdDate, type: e.assessmentType };
    }
    return (
      <div className="qmb-evidence">
        {[...byItem.entries()].map(([key, v]) => (
          <div className="qmb-evidence__gg" key={key}>
            <div className="qmb-evidence__gg-title">
              <b>{v.name}</b>
              <span className="qmb-evidence__gg-key">{key}</span>
            </div>
            <div className="qmb-evidence__gg-change">
              Prior <b>{v.prior?.val ?? '—'}</b> ({formatShortDate(v.prior?.ardDate)}, {cleanType(v.prior?.type)})
              {' → '}
              Target <b style={{ color: '#b91c1c' }}>{v.target?.val ?? '—'}</b> ({formatShortDate(v.target?.ardDate)}, {cleanType(v.target?.type)})
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Generic: list every evidence row as-is.
  return (
    <div className="qmb-evidence">
      {evidence.map((e, i) => (
        <div className="qmb-evidence__row" key={i}>
          <span className="qmb-mono qmb-evidence__item">{e.mdsItem || '—'}</span>
          <span className="qmb-evidence__val">
            <b>{e.value ?? '—'}</b>
            {e.assessmentArdDate && (
              <span className="qmb-evidence__meta">
                · ARD {formatShortDate(e.assessmentArdDate)}
                {e.assessmentType && ` · ${cleanType(e.assessmentType)}`}
              </span>
            )}
          </span>
          {e.note && <div className="qmb-evidence__note">{e.note}</div>}
        </div>
      ))}
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
