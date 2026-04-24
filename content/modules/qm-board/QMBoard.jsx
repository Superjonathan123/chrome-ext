/**
 * QMBoard — root of the Quality Measures board overlay.
 *
 * Layout:
 *   ┌ header ──────────────────────────────────────────────┐
 *   │  QM Board · Heritage Convalescent            ✕       │
 *   ├ summary strip ───────────────────────────────────────┤
 *   │  36 triggering · 12 ≤7d · 2 overdue · 52 heads-up    │
 *   ├──────────────────────────────┬───────────────────────┤
 *   │  Tile grid (all measures)    │  Clearing soon        │
 *   │                              │  Heads-up             │
 *   └──────────────────────────────┴───────────────────────┘
 *
 * Views (single-surface, state-driven — no tabs):
 *   'dashboard' — default (tiles left, action rail right)
 *   'measure'   — full-left takeover: residents for one measure (rail stays)
 *   'clearing'  — full-width takeover: flat "Clearing soon" list
 *   'headsup'   — full-width takeover: flat "Heads-up" list
 *   'alert'     — full-width takeover: single alert detail (GG chart if applicable)
 */
import { useState, useMemo, useCallback } from 'preact/hooks';
import { useQmBoard } from './hooks/useQmBoard.js';
import { Tile } from './components/Tile.jsx';
import { ActionRail } from './components/ActionRail.jsx';
import { MeasureDetail } from './components/MeasureDetail.jsx';
import { AlertDetail } from './components/AlertDetail.jsx';
import { TriggerDetail } from './components/TriggerDetail.jsx';
import { ClearingAllView } from './components/ClearingAllView.jsx';
import { HeadsUpAllView } from './components/HeadsUpAllView.jsx';
import { deriveMeasureTiles, flattenTriggeringRows, flattenAlerts } from './utils/derive.js';

export function QMBoard({ facilityName, orgSlug, onClose }) {
  // View history — each row is a view state. Back pops one level; the
  // dashboard is always at the bottom of the stack.
  const [history, setHistory] = useState([{ kind: 'dashboard' }]);
  const view = history[history.length - 1];

  const push = useCallback((v) => setHistory(h => [...h, v]), []);
  const pop = useCallback(() => setHistory(h => h.length > 1 ? h.slice(0, -1) : h), []);

  const { currentlyTriggering, preventableAlerts, loading, error, retry } =
    useQmBoard({ facilityName, orgSlug });

  const tiles = useMemo(
    () => deriveMeasureTiles(currentlyTriggering, preventableAlerts),
    [currentlyTriggering, preventableAlerts]
  );

  const triggeringRows = useMemo(
    () => flattenTriggeringRows(currentlyTriggering),
    [currentlyTriggering]
  );

  const alerts = useMemo(
    () => flattenAlerts(preventableAlerts),
    [preventableAlerts]
  );

  const totalTriggering = triggeringRows.length;
  const overdueCount = triggeringRows.filter(r => r.urgency === 'overdue').length;
  const soonCount = triggeringRows.filter(r => r.urgency === 'soon' || r.urgency === 'overdue').length;
  const headsUpCount = alerts.length;

  const openMeasure = (measureId) => push({ kind: 'measure', measureId });
  const openAlert = (alert) => push({ kind: 'alert', alert });
  const openTrigger = (row) => push({ kind: 'trigger', row });
  const openClearingAll = () => push({ kind: 'clearing' });
  const openHeadsUpAll = () => push({ kind: 'headsup' });

  // Rows in the right rail / cross-measure list / measure detail all
  // drill into the same per-patient+measure TriggerDetail.
  const handleRowClick = (row) => openTrigger(row);

  // When view is a takeover that should use full width, drop the right rail.
  const isTakeover = view.kind === 'clearing'
    || view.kind === 'headsup'
    || view.kind === 'alert'
    || view.kind === 'trigger';

  return (
    <div className="qmb__overlay" role="dialog" aria-modal="true" aria-labelledby="qmb-title">
      <div className="qmb__backdrop" onClick={onClose}></div>

      <div className="qmb__modal">
        <header className="qmb__header">
          <div className="qmb__title-row">
            <div className="qmb__title-group">
              <h2 className="qmb__title" id="qmb-title">QM Board</h2>
              {facilityName && <span className="qmb__facility">{facilityName}</span>}
            </div>
            <button type="button" className="qmb__close" onClick={onClose} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>

        <div className="qmb__summary">
          <Stat num={totalTriggering} label="Triggering" />
          <Stat num={soonCount} label="Clearing ≤ 7d" tone="soon" />
          <Stat num={overdueCount} label="Overdue" tone="urgent" />
          <Stat num={headsUpCount} label="Heads-up" tone="alert" />
        </div>

        {loading ? (
          <div className="qmb__loading">Loading QM board…</div>
        ) : error ? (
          <div className="qmb__error">
            <div>Failed to load QM data</div>
            <div className="qmb__error-detail">{error}</div>
            <button type="button" className="qmb__retry" onClick={retry}>Retry</button>
          </div>
        ) : (
          <div className={`qmb__body ${isTakeover ? 'qmb__body--takeover' : ''}`}>

            <div className="qmb__left">
              {view.kind === 'dashboard' && (
                <DashboardView tiles={tiles} onTileClick={openMeasure} />
              )}
              {view.kind === 'measure' && (
                <MeasureDetail
                  measureId={view.measureId}
                  currentlyTriggering={currentlyTriggering}
                  preventableAlerts={preventableAlerts}
                  onBack={pop}
                  onRowClick={handleRowClick}
                  onAlertClick={openAlert}
                />
              )}
              {view.kind === 'clearing' && (
                <ClearingAllView
                  currentlyTriggering={currentlyTriggering}
                  onBack={pop}
                  onRowClick={handleRowClick}
                />
              )}
              {view.kind === 'headsup' && (
                <HeadsUpAllView
                  alerts={alerts}
                  onBack={pop}
                  onAlertClick={openAlert}
                />
              )}
              {view.kind === 'alert' && (
                <AlertDetail
                  alert={view.alert}
                  facilityName={facilityName}
                  orgSlug={orgSlug}
                  onBack={pop}
                />
              )}
              {view.kind === 'trigger' && (
                <TriggerDetail
                  row={view.row}
                  preventableAlerts={preventableAlerts}
                  onBack={pop}
                  onAlertClick={openAlert}
                />
              )}
            </div>

            {!isTakeover && (
              <aside className="qmb__right">
                <ActionRail
                  triggeringRows={triggeringRows}
                  alerts={alerts}
                  onRowClick={handleRowClick}
                  onAlertClick={openAlert}
                  onViewAllClearing={openClearingAll}
                  onViewAllHeadsUp={openHeadsUpAll}
                />
              </aside>
            )}

          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ num, label, tone }) {
  return (
    <div className="qmb-stat">
      <span className={`qmb-stat__num ${tone ? `qmb-stat__num--${tone}` : ''}`}>{num}</span>
      <span className="qmb-stat__label">{label}</span>
    </div>
  );
}

function DashboardView({ tiles, onTileClick }) {
  return (
    <>
      <div className="qmb-slabel">
        <span>Measures</span>
        <span className="qmb-slabel__meta">{tiles.length} measures · click a tile to drill in</span>
      </div>
      <div className="qmb-tiles">
        {tiles.map(t => (
          <Tile key={t.id} tile={t} onClick={onTileClick} />
        ))}
      </div>
    </>
  );
}
