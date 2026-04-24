import { useState, useEffect } from 'preact/hooks';
import { GgDeclineDetail } from './GgDeclineDetail.jsx';
import { SnoozeControls } from './GgDeclineDetail.jsx';
import { shortLabel, formatShortDate } from '../utils/derive.js';
import { unwrap } from '../utils/api.js';

/**
 * AlertDetail — dispatches based on alert type:
 *   - gg_decline_canary → GgDeclineDetail (rich chart/table)
 *   - otherwise         → GenericAlertDetail (summary + clickable signals)
 *
 * Signal click behavior (generic alerts):
 *   - source=note  → window.showClinicalNoteModal(refId) (existing)
 *   - source=order → inline expander that fetches /evidence?type=order
 *   - source=vitals → text only
 */
export function AlertDetail({ alert, facilityName, orgSlug, onBack }) {
  if (alert.alertId === 'gg_decline_canary') {
    return (
      <GgDeclineDetail
        alert={alert}
        facilityName={facilityName}
        orgSlug={orgSlug}
        onBack={onBack}
      />
    );
  }
  return (
    <GenericAlertDetail
      alert={alert}
      facilityName={facilityName}
      orgSlug={orgSlug}
      onBack={onBack}
    />
  );
}

const SEVERITY_PILL_CLASS = {
  high: 'qmb-pill qmb-pill--high',
  medium: 'qmb-pill qmb-pill--medium',
  low: 'qmb-pill qmb-pill--low',
};

function GenericAlertDetail({ alert, facilityName, orgSlug, onBack }) {
  const severityCls = alert.urgency ? (SEVERITY_PILL_CLASS[alert.urgency] || 'qmb-pill') : null;

  return (
    <div className="qmb-detail">
      <div className="qmb-backbar">
        <div className="qmb-backbar__left">
          <button type="button" className="qmb-backbar__btn" onClick={onBack}>‹ Back</button>
          <span className="qmb-backbar__title">{alert.name}</span>
          {alert.urgency && <span className={severityCls}>{alert.urgency}</span>}
          <div className="qmb-backbar__subline">
            <span>{alert.label}</span>
            {alert.qmId && <span className="qmb-pill qmb-pill--alert">{shortLabel(alert.qmId)}</span>}
          </div>
        </div>
        {alert.alertId !== 'gg_decline_canary' && (
          <SnoozeControls
            patientId={alert.patientId}
            snooze={alert.snooze}
            kind="alert"
            alertId={alert.alertId}
            facilityName={facilityName}
            orgSlug={orgSlug}
          />
        )}
      </div>

      {alert.suggestedAction && (
        <p className="qmb-detail__summary">{alert.suggestedAction}</p>
      )}

      <SignalsList
        signals={alert.signals}
        patientId={alert.patientId}
        facilityName={facilityName}
        orgSlug={orgSlug}
      />
    </div>
  );
}

function SignalsList({ signals, patientId, facilityName, orgSlug }) {
  if (!signals || signals.length === 0) {
    return <div className="qmb-empty">No signals on this alert.</div>;
  }
  return (
    <div className="qmb-signals">
      <div className="qmb-slabel">
        <span>Signals</span>
        <span className="qmb-slabel__meta">{signals.length} total</span>
      </div>
      {signals.map((s, i) => (
        <SignalRow
          key={`${s.source}-${s.refId || i}-${s.date}`}
          signal={s}
          patientId={patientId}
          facilityName={facilityName}
          orgSlug={orgSlug}
        />
      ))}
    </div>
  );
}

/**
 * Single signal row — rendering + click behavior depends on source:
 *
 *   note   → click opens the in-extension clinical note viewer (existing global)
 *   order  → click expands an inline panel with the fetched order content
 *   vitals → text only (no click target, no fetch endpoint)
 *   other  → text only
 */
function SignalRow({ signal, patientId, facilityName, orgSlug }) {
  const [expanded, setExpanded] = useState(false);
  const clickable = isClickable(signal);

  const handleClick = () => {
    if (signal.source === 'note' && signal.refId) {
      if (typeof window.showClinicalNoteModal === 'function') {
        window.showClinicalNoteModal(signal.refId);
      } else {
        // Fallback: expand inline
        setExpanded(v => !v);
      }
      return;
    }
    if (signal.source === 'order' && signal.refId) {
      setExpanded(v => !v);
      return;
    }
  };

  return (
    <div className="qmb-signal-wrap">
      <div
        className={`qmb-signal ${clickable ? 'qmb-signal--clickable' : ''}`}
        onClick={clickable ? handleClick : undefined}
      >
        <span className="qmb-signal__date">{formatShortDate(signal.date)}</span>
        <span className="qmb-signal__src">{signal.source}</span>
        <span className="qmb-signal__text">{signal.text}</span>
        {clickable && (
          <span className="qmb-signal__cta">
            {signal.source === 'note' ? 'open note ›' : 'view ›'}
          </span>
        )}
      </div>
      {expanded && signal.source === 'order' && signal.refId && (
        <OrderInlineView
          patientId={patientId}
          orderId={signal.refId}
          facilityName={facilityName}
          orgSlug={orgSlug}
        />
      )}
    </div>
  );
}

function isClickable(signal) {
  if (!signal.refId) return false;
  return signal.source === 'note' || signal.source === 'order';
}

/**
 * Inline order detail — fetches /api/patients/[id]/evidence?type=order&sourceId=X
 * and renders the raw payload as a lightweight card. This mirrors the evidence
 * viewer pattern used elsewhere in the extension, without needing a new modal.
 */
function OrderInlineView({ patientId, orderId, facilityName, orgSlug }) {
  const [state, setState] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    let cancelled = false;
    setState({ loading: true, data: null, error: null });

    const params = new URLSearchParams({
      type: 'order',
      sourceId: orderId,
      ...(facilityName ? { facilityName } : {}),
      ...(orgSlug ? { orgSlug } : {}),
    });

    chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint: `/api/patients/${patientId}/evidence?${params}`,
      options: { method: 'GET' },
    }).then(res => {
      if (cancelled) return;
      if (!res?.success) throw new Error(res?.error || 'Failed to load order');
      setState({ loading: false, data: unwrap(res.data), error: null });
    }).catch(err => {
      if (cancelled) return;
      setState({ loading: false, data: null, error: err.message || 'Failed to load' });
    });

    return () => { cancelled = true; };
  }, [patientId, orderId, facilityName, orgSlug]);

  if (state.loading) return <div className="qmb-signal-inline">Loading order…</div>;
  if (state.error) return <div className="qmb-signal-inline qmb-signal-inline--error">Failed to load: {state.error}</div>;

  const d = state.data || {};
  return (
    <div className="qmb-signal-inline">
      <div className="qmb-signal-inline__grid">
        {d.description && <InlineRow k="Description" v={d.description} />}
        {d.category && <InlineRow k="Category" v={d.category} />}
        {d.status && <InlineRow k="Status" v={d.status} />}
        {d.medicationName && <InlineRow k="Medication" v={d.medicationName} />}
        {d.directions && <InlineRow k="Directions" v={d.directions} />}
        {d.startDate && <InlineRow k="Start" v={formatShortDate(d.startDate)} />}
        {d.endDate && <InlineRow k="End" v={formatShortDate(d.endDate)} />}
        {d.orderedBy && <InlineRow k="Ordered by" v={d.orderedBy} />}
        {d.notes && <InlineRow k="Notes" v={d.notes} />}
      </div>
      {/* Fallback: dump keys we didn't surface, so nothing is hidden in MVP */}
      {Object.keys(d).length === 0 && <div style={{ color: '#9ca3af', fontStyle: 'italic' }}>No details returned.</div>}
    </div>
  );
}

function InlineRow({ k, v }) {
  return (
    <>
      <dt>{k}</dt>
      <dd>{v}</dd>
    </>
  );
}
