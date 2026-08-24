/**
 * Surface E — Functional Decline (a screen INSIDE the QM Command Center).
 *
 * GG decline is its own screen, reached from a button on the QM dashboard
 * (not its own FAB). Facility roster grouped by overallSeverity, a Therapy
 * Pickup / QM Decline mode toggle, search, snooze, and the existing per-patient
 * GG chart (GgDeclineDetail) on click.
 *
 *   GET /api/extension/qm-planner/gg-decline-dashboard?facilityName&orgSlug&mode
 *   per-patient drill-in + GG snooze reuse the existing GG endpoints.
 */
import { useState, useMemo, useEffect, useCallback } from 'preact/hooks';
import { track } from '../../utils/analytics.js';
import { useGgDashboard } from './hooks/useGgDashboard.js';
import { useSnooze } from './hooks/useSnooze.js';
import { GgDeclineDetail } from './components/GgDeclineDetail.jsx';
import { QmLoading } from './components/QmLoading.jsx';
import { ChevronLeft, ChevronRight, Search, X, Clock, Undo2, Info } from './components/icons.jsx';
import {
  applyDeclineFilters,
  countByRunway,
  formatObraChip,
  formatTherapyChip,
  payerOptions,
  EMPTY_FILTERS,
  RUNWAY_LABELS,
  RUNWAY_ORDER,
  RUNWAY_TONE,
  UNKNOWN_PAYER,
} from './lib/gg-decline-view.js';

const MODES = [
  { value: 'therapy', label: 'Therapy Pickup' },
  { value: 'qm', label: 'QM Decline' },
];

const STAY_OPTIONS = [
  { value: '', label: 'All stays' },
  { value: 'short', label: 'Short stay' },
  { value: 'long', label: 'Long stay' },
  { value: 'unknown', label: 'Unknown' },
];

/**
 * `unavailable` is offered deliberately. NetHealth answers for 12 of 19
 * facilities, and inside a working facility an individual resident can still
 * fail — those residents must stay reachable, not silently absent.
 */
const THERAPY_OPTIONS = [
  { value: '', label: 'All therapy' },
  { value: 'on_therapy', label: 'On therapy' },
  { value: 'recently_ended', label: 'Therapy recently ended' },
  { value: 'not_on_therapy', label: 'Not on therapy' },
  { value: 'unavailable', label: 'Therapy unknown' },
];
const SEVERITY_GROUPS = [
  { key: 'severe',   label: 'Severe',   tone: 'rose' },
  { key: 'moderate', label: 'Moderate', tone: 'amber' },
  { key: 'mild',     label: 'Mild',     tone: 'sky' },
];

export function FunctionalDeclineView({ facilityName, orgSlug, onBack }) {
  const [mode, setMode] = useState('therapy');
  const [query, setQuery] = useState('');
  const [showSnoozed, setShowSnoozed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [selected, setSelected] = useState(null); // { patientId, name } | null

  // Row context filters. Client-side over the cached payload — as server params
  // they would multiply the backend's cache keys and make every toggle a rebuild.
  const [severity, setSeverity] = useState(null);
  const [runway, setRunway] = useState(null);
  const [stayType, setStayType] = useState(null);
  const [payer, setPayer] = useState(null);
  const [therapy, setTherapy] = useState(null);
  const [sort, setSort] = useState('severity');

  useEffect(() => { track('functional_decline_opened', { source: 'qm_board' }); }, []);

  const { data, loading, error, retry } = useGgDashboard({ facilityName, orgSlug, mode });
  const { snoozeGg, unsnoozeGg, pending } = useSnooze({ facilityName, orgSlug });

  const all = data?.patients ?? [];
  const patients = useMemo(
    () => applyDeclineFilters(all, { ...EMPTY_FILTERS, severity, runway, stayType, payer, therapy, search: query }),
    [all, severity, runway, stayType, payer, therapy, query]
  );
  const snoozed = data?.snoozedPatients ?? [];
  const summary = data?.summary ?? { total: 0, withDecline: 0, severe: 0, moderate: 0, mild: 0, snoozed: 0 };

  const runwayCounts = useMemo(() => countByRunway(all), [all]);
  const payers = useMemo(() => payerOptions(all), [all]);
  // Therapy is absent entirely on facilities without a NetHealth binding — hide
  // the control there rather than offering a filter that can only return nothing.
  const hasTherapySignal = all.some((p) => p.therapy && p.therapy.state !== 'unavailable');
  // Anything not already inside the coding window can still be changed.
  const withRunway = all.filter((p) => p.hasDecline && p.runway && p.runway !== 'no_obra' && p.runway !== 'closing').length;
  const hasFilters = !!(query || severity || runway || stayType || payer || therapy);
  const clearFilters = useCallback(() => {
    setQuery(''); setSeverity(null); setRunway(null); setStayType(null); setPayer(null); setTherapy(null);
  }, []);

  const doSnooze = useCallback(async (patientId) => { try { await snoozeGg(patientId, 30, null); } catch { /* hook logs */ } }, [snoozeGg]);
  const doUnsnooze = useCallback(async (patientId, snoozeId) => { try { await unsnoozeGg(patientId, snoozeId); } catch { /* hook logs */ } }, [unsnoozeGg]);

  // Per-patient drill-in (reuses the GG chart view, which has its own back bar).
  if (selected) {
    return (
      <div className="qmc">
        <GgDeclineDetail
          alert={{ patientId: selected.patientId, name: selected.name, qmId: 'gg_decline' }}
          facilityName={facilityName} orgSlug={orgSlug} mode={mode}
          onBack={() => setSelected(null)}
        />
      </div>
    );
  }

  return (
    <div className="qmc" style={{ gap: '16px' }}>
      {/* Breadcrumb back to the Command Center */}
      <div className="qmc-bc">
        <button type="button" className="qmc-bc__back" onClick={onBack}><ChevronLeft /> Command Center</button> {/* NO_TRACK */}
        <span style={{ color: 'var(--slate-300)' }}>/</span>
        <div className="qmc-bc__crumb">Functional Decline</div>
      </div>

      {loading ? (
        <QmLoading title="Loading functional-decline roster" />
      ) : error ? (
        <div className="qmc-error">
          <div>Failed to load decline data</div>
          <div className="qmc-error__detail">{error}</div>
          <button type="button" className="qmc-retry" onClick={retry}>Retry</button> {/* NO_TRACK */}
        </div>
      ) : (
        <>
          {/* Mode toggle + search */}
          <div className="qmc-toolbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="qmc-tabs">
                {MODES.map((m) => (
                  <button key={m.value} type="button" className={mode === m.value ? 'qmc-tab qmc-tab--on' : 'qmc-tab'} onClick={() => { setMode(m.value); setQuery(''); }}> {/* NO_TRACK */}
                    {m.label}
                  </button>
                ))}
              </div>
              <button type="button" className={`qmc-info-btn ${showInfo ? 'qmc-info-btn--on' : ''}`} onClick={() => setShowInfo((v) => !v)} aria-label="What's this?"> {/* NO_TRACK */}
                <Info />
              </button>
            </div>
            <div className="qmc-search">
              <Search />
              <input value={query} onInput={(e) => setQuery(e.target.value)} placeholder="Search patients" />
              {query && <button type="button" className="qmc-search__clear" onClick={() => setQuery('')} aria-label="Clear search"><X /></button> /* NO_TRACK */}
            </div>
          </div>

          {showInfo && <DeclineExplainer mode={mode} onClose={() => setShowInfo(false)} />}

          <div className="qmc-fd-summary">
            <SummaryCard n={summary.withDecline} label="With decline" tone="slate" filter="all" active={severity === 'all'} onFilter={setSeverity} />
            <SummaryCard n={summary.severe} label="Severe" tone="rose" filter="severe" active={severity === 'severe'} onFilter={setSeverity} />
            <SummaryCard n={summary.moderate} label="Moderate" tone="amber" filter="moderate" active={severity === 'moderate'} onFilter={setSeverity} />
            <SummaryCard n={summary.mild} label="Mild" tone="sky" filter="mild" active={severity === 'mild'} onFilter={setSeverity} />
          </div>

          {/* Runway — how much room is left before the next OBRA codes it */}
          <div className="qmc-fd-runway">
            <div className="qmc-fd-runway__lead">
              <b>{summary.withDecline}</b> declining
              {withRunway > 0 && <> — <b>{withRunway}</b> still {withRunway === 1 ? 'has' : 'have'} runway to correct</>}
            </div>
            <div className="qmc-fd-runway__cards">
              {RUNWAY_ORDER.map((b) => {
                const on = runway === b;
                const { title, detail } = RUNWAY_LABELS[b];
                const n = runwayCounts[b];
                return (
                  <button key={b} type="button" aria-pressed={on} data-track="qm_filter_changed" data-track-prop-measure-code="gg_decline" data-track-prop-filter={`runway_${b}`}
                    className={`qmc-fd-rcard ${on ? 'qmc-fd-rcard--on' : ''}`}
                    onClick={() => setRunway(on ? null : b)}>
                    <span className="qmc-fd-rcard__label">{title}</span>
                    <span className="qmc-fd-rcard__row">
                      <b className={`qmc-fd-rcard__n qmc-text--${n > 0 ? RUNWAY_TONE[b] : 'slate'}`}>{n}</b>
                      <span className="qmc-fd-rcard__sub">{detail}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row-context filters */}
          <div className="qmc-fd-filters">
            <select className="qmc-aide-sel" value={stayType ?? ''} aria-label="Filter by stay type"
              onChange={(e) => setStayType(e.target.value || null)}> {/* NO_TRACK */}
              {STAY_OPTIONS.map((o) => <option key={o.label} value={o.value}>{o.label}</option>)}
            </select>
            <select className="qmc-aide-sel" value={payer ?? ''} aria-label="Filter by payer"
              onChange={(e) => setPayer(e.target.value || null)}> {/* NO_TRACK */}
              <option value="">All payers</option>
              {payers.map((p) => <option key={p} value={p}>{p === UNKNOWN_PAYER ? 'Unknown' : p}</option>)}
            </select>
            {hasTherapySignal && (
              <select className="qmc-aide-sel" value={therapy ?? ''} aria-label="Filter by therapy status"
                onChange={(e) => setTherapy(e.target.value || null)}> {/* NO_TRACK */}
                {THERAPY_OPTIONS.map((o) => <option key={o.label} value={o.value}>{o.label}</option>)}
              </select>
            )}
            <select className="qmc-aide-sel" value={sort} aria-label="Sort residents"
              onChange={(e) => setSort(e.target.value)}> {/* NO_TRACK */}
              <option value="severity">Sort: severity</option>
              <option value="runway">Sort: soonest ARD</option>
            </select>
            {hasFilters && <button type="button" className="qmc-fd-clear" onClick={clearFilters}>Clear</button> /* NO_TRACK */}
          </div>

          {hasTherapySignal && (
            <div className="qmc-fd-legend">
              No therapy chip means no open therapy case on file. <b>ARD</b> is a date already scheduled
              in PCC; <b>Due</b> is the CMS deadline and the facility may schedule sooner.
            </div>
          )}

          {(summary.snoozed > 0 || snoozed.length > 0) && (
            <div className="qmc-collapsible">
              <button type="button" className="qmc-collapsible__head" onClick={() => setShowSnoozed((s) => !s)}> {/* NO_TRACK */}
                {showSnoozed ? <ChevronLeft style={{ transform: 'rotate(-90deg)' }} /> : <ChevronRight />}
                <Clock style={{ width: '14px', height: '14px' }} />
                {snoozed.length || summary.snoozed} snoozed
              </button>
              {showSnoozed && (
                <div className="qmc-collapsible__body qmc-rows">
                  {snoozed.map((p) => (
                    <div key={p.patientId} className="qmc-snoozed">
                      <button type="button" className="qmc-prow__main" onClick={() => setSelected({ patientId: p.patientId, name: p.patientName })} /* NO_TRACK */>
                        <span className="qmc-row__name">{p.patientName}</span>
                        <span className="qmc-row__meta" style={{ display: 'block', marginTop: '2px' }}>
                          {p.overallSeverity ? `${p.overallSeverity} · ` : ''}until {p.snooze?.snoozedUntil ? new Date(p.snooze.snoozedUntil).toLocaleDateString() : '—'}
                        </span>
                      </button>
                      <button type="button" data-track="qm_action_clicked" data-track-prop-measure-code="gg" data-track-prop-action="unsnooze" className="qmc-undo" disabled={pending} onClick={() => doUnsnooze(p.patientId, p.snooze?.snoozeId)}>
                        <Undo2 /> Unsnooze
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Roster grouped by severity */}
          <div className="qmc-worklist">
            {SEVERITY_GROUPS.map((g) => {
              let rows = patients.filter((p) => p.overallSeverity === g.key);
              if (sort === 'runway') {
                rows = [...rows].sort(
                  (a, b) => (a.nextObra?.daysUntil ?? Infinity) - (b.nextObra?.daysUntil ?? Infinity)
                );
              }
              if (rows.length === 0) return null;
              return (
                <div key={g.key}>
                  <div className="qmc-ghead">
                    <span className={`qmc-dot qmc-dot--${g.tone}`} />
                    <span className="qmc-group__label">{g.label}</span>
                    <span className="qmc-group__count">{rows.length}</span>
                  </div>
                  <div className="qmc-rows">
                    {rows.map((p) => (
                      <PatientRow key={p.patientId} patient={p} tone={g.tone} pending={pending}
                        onOpen={() => setSelected({ patientId: p.patientId, name: p.patientName })}
                        onSnooze={() => doSnooze(p.patientId)} />
                    ))}
                  </div>
                </div>
              );
            })}
            {patients.length === 0 && (
              // An empty screen is an invitation to act, not a shrug. Name the way out.
              <div className="qmc-allclear">
                {hasFilters ? (
                  <>
                    No residents match these filters.{' '}
                    <button type="button" className="qmc-fd-clear qmc-fd-clear--inline" onClick={clearFilters}>Clear filters</button> {/* NO_TRACK */}
                  </>
                ) : 'No residents with functional decline.'}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function DeclineExplainer({ mode, onClose }) {
  return (
    <div className="qmc-explain">
      <button type="button" className="qmc-explain__close" onClick={onClose} aria-label="Close"><X /></button> {/* NO_TRACK */}
      <div className="qmc-explain__lead">
        <strong>Functional Decline</strong> is an <em>early-warning</em> screen: it compares each resident's
        <strong> daily CNA GG documentation</strong> against their <strong>baseline from the last completed MDS</strong> —
        catching decline <em>before</em> it locks on the next assessment. (The QM Board, by contrast, reads CMS measures
        off already-locked MDS pairs.)
      </div>
      <div className="qmc-explain__modes">
        <div className={`qmc-explain__mode ${mode === 'therapy' ? 'qmc-explain__mode--on' : ''}`}>
          <div className="qmc-explain__mode-name">Therapy Pickup</div>
          <div className="qmc-explain__mode-sub">Find sustained declines worth a therapy eval — less noise.</div>
          <ul className="qmc-explain__list">
            <li><b>7-day</b> lookback of CNA scores</li>
            <li><b>75%</b> of shift scores must be below baseline</li>
            <li>≥3 scores per shift</li>
          </ul>
        </div>
        <div className={`qmc-explain__mode ${mode === 'qm' ? 'qmc-explain__mode--on' : ''}`}>
          <div className="qmc-explain__mode-name">QM Decline</div>
          <div className="qmc-explain__mode-sub">Early warning before the ADL-Decline QM trips — more sensitive.</div>
          <ul className="qmc-explain__list">
            <li><b>3-day</b> lookback of CNA scores</li>
            <li><b>100%</b> of shift scores must be below baseline</li>
            <li>≥2 scores per shift</li>
          </ul>
        </div>
      </div>
      <div className="qmc-explain__foot">
        Both modes track the same 5 GG items (Eating, Sit-to-Lying, Sit-to-Stand, Toilet Transfer, Walk&nbsp;10ft).
        Alert when Walk&nbsp;10ft drops ≥1pt, or any other item drops ≥2pt (or ≥1pt across 2+ items). A resident can
        surface here before the QM Board flags them — that's by design.
      </div>
    </div>
  );
}

/**
 * Click-to-filter, matching the web screen. `filter` is the severity key this
 * card selects (or 'all' for "any decline"); omit it for a card that is only a
 * readout. Clicking the active card clears it.
 */
function SummaryCard({ n, label, tone, filter, active, onFilter }) {
  if (!filter) {
    return (
      <div className="qmc-fd-card">
        <span className={`qmc-fd-card__n qmc-text--${tone}`}>{n}</span>
        <span className="qmc-fd-card__label">{label}</span>
      </div>
    );
  }
  return (
    <button type="button" aria-pressed={active} data-track="qm_filter_changed" data-track-prop-measure-code="gg_decline" data-track-prop-filter={`severity_${filter}`}
      className={`qmc-fd-card qmc-fd-card--btn ${active ? 'qmc-fd-card--on' : ''}`}
      onClick={() => onFilter(active ? null : filter)}>
      <span className={`qmc-fd-card__n qmc-text--${tone}`}>{n}</span>
      <span className="qmc-fd-card__label">{label}</span>
    </button>
  );
}

const SEV_TONE = { severe: 'rose', moderate: 'amber', mild: 'sky' };
const fmtGg = (v) => (v == null ? '—' : Number.isInteger(v) ? `${v}` : v.toFixed(1));

function PatientRow({ patient, tone, pending, onOpen, onSnooze }) {
  const declines = patient.declines ?? [];
  const obraChip = formatObraChip(patient.nextObra);
  const therapyChip = formatTherapyChip(patient.therapy);
  return (
    <div className="qmc-prow qmc-prow--fd">
      <span className={`qmc-prow__dot qmc-dot--${tone}`} />
      <button type="button" data-track="qm_drill_in" data-track-prop-measure-code="gg_decline" data-track-prop-view="resident" className="qmc-prow__main" onClick={onOpen}>
        <span className="qmc-prow__name-row">
          <span className="qmc-prow__name">{patient.patientName}</span>
          {/* The facility name is dropped: this screen is already scoped to one
              building, so it repeated on every row and said nothing. The two
              context chips earn that space instead. */}
          <span className="qmc-fd-ctx">
            {therapyChip && (
              <span className={`qmc-chip qmc-chip--${therapyChip.tone}`} title={therapyChip.detail}>
                {therapyChip.loud && '⚠ '}{therapyChip.label}
              </span>
            )}
            {obraChip && (
              <span className={`qmc-chip qmc-chip--${obraChip.tone}`}
                title={patient.nextObra?.isOpened
                  ? `Assessment open in PCC with ARD ${patient.nextObra.actualArd}`
                  : `CMS deadline ${patient.nextObra?.dueDate} — the facility may schedule sooner`}>
                {obraChip.label}
              </span>
            )}
          </span>
        </span>
        <div className="qmc-fd-chips">
          {declines.length === 0 && <span className="qmc-row__meta">decline flagged — open for detail</span>}
          {declines.map((d) => {
            const t = SEV_TONE[d.severity] ?? 'slate';
            return (
              <span key={d.mdsKey} className={`qmc-chip qmc-chip--${t}`} title={`${d.name}: baseline ${fmtGg(d.baseline)} → worst ${fmtGg(d.worstShiftAverage)} (−${fmtGg(d.declineMagnitude)})`}>
                <span className="qmc-fd-chip__name">{d.name}</span>
                <b className="qmc-fd-chip__val">{fmtGg(d.baseline)}<span className="qmc-fd-chip__arrow"> ↓ </span>{fmtGg(d.worstShiftAverage)}</b>
              </span>
            );
          })}
        </div>
      </button>
      <button type="button" data-track="qm_action_clicked" data-track-prop-measure-code="gg" data-track-prop-action="snooze_30d" className="qmc-undo" disabled={pending} onClick={onSnooze}>
        <Clock style={{ width: '14px', height: '14px' }} /> Snooze
      </button>
      <ChevronRight className="qmc-row__chev" />
    </div>
  );
}
