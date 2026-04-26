/**
 * Queue tables — right-hand column of the planner.
 *
 * Each queue is its own mini-table with columns that suit its data.
 * Mirrors Anna's paper planner right-page layout: distinct tables with
 * different column structures, not a uniform card list.
 */
import { useState } from 'preact/hooks';
import { TodayFocusStrip } from './TodayFocusStrip.jsx';
import { shortenDescription } from '../utils/shortenDescription.js';
import { openEventAction } from '../utils/pccDeepLinks.js';

const MDS_WINDOW_DAYS = 14; // ARD → ARD+14 coding window

function formatShortDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function isPast(iso) {
  if (!iso) return false;
  const d = new Date(iso);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return d < today;
}

// Count renderer — split "1 overdue · 3 open · 4 done" when any sub-count > 0.
// The "done" tier is the key 2026-04 addition: completed work stays visible
// so Anna sees proof-of-work instead of a shrinking to-do list.
function QueueCount({ count, overdueCount = 0, doneCount = 0 }) {
  const numericCount = typeof count === 'number' ? count : parseInt(count, 10) || 0;
  const openCount = Math.max(0, numericCount - overdueCount);
  const parts = [];
  if (overdueCount > 0) parts.push(<span class="mds-pl__q-count-overdue">{overdueCount} overdue</span>);
  if (openCount > 0 && overdueCount > 0) parts.push(<span class="mds-pl__q-count-rest">{openCount} open</span>);
  if (parts.length === 0) parts.push(<span>{numericCount}</span>);
  if (doneCount > 0) parts.push(<span class="mds-pl__q-count-done">{doneCount} done</span>);

  return (
    <span class="mds-pl__q-count">
      {parts.map((p, i) => (
        <>
          {i > 0 && <span class="mds-pl__q-count-sep"> · </span>}
          {p}
        </>
      ))}
    </span>
  );
}

function QueueCard({ title, count, overdueCount = 0, doneCount = 0, footer, anchor, children }) {
  return (
    <div class="mds-pl__q" id={anchor ? `mds-pl-q-${anchor}` : undefined}>
      <div class="mds-pl__q-head">
        <h3 class="mds-pl__q-title">{title}</h3>
        <QueueCount count={count} overdueCount={overdueCount} doneCount={doneCount} />
      </div>
      {children}
      {footer && <div class="mds-pl__q-footer">{footer}</div>}
    </div>
  );
}

/**
 * Collapsible "✓ N done this week" footer for each queue.
 *
 * Renders the completedRecently roster in the same table shape as the
 * open queue above it, tinted green and marked with a checkmark. Hidden by
 * default — one click to expand. Matches Anna's "I want to see things
 * turn green" mental model.
 */
function CompletedSection({ completed, renderRow, windowLabel = 'this week' }) {
  if (!completed || completed.count === 0) return null;
  const [open, setOpen] = useState(false);
  const patients = completed.patients || [];
  return (
    <div class={`mds-pl__done ${open ? 'mds-pl__done--open' : ''}`}>
      <button
        type="button"
        class="mds-pl__done-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <svg class="mds-pl__done-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span class="mds-pl__done-label">
          {completed.count} done {windowLabel}
        </span>
        <span class="mds-pl__done-chev" aria-hidden="true">{open ? '▾' : '▸'}</span>
      </button>
      {open && patients.length > 0 && (
        <div class="mds-pl__done-body">
          {patients.map(renderRow)}
        </div>
      )}
    </div>
  );
}

// Clickable row wrapper — makes any queue row deep-link into PCC.
// Falls back to no-op if the event action can't be resolved.
function makeRowClickHandler(event) {
  if (!event) return undefined;
  return (e) => {
    // Ignore clicks on explicit inner buttons/links.
    if (e.target.closest('button, a')) return;
    openEventAction(event);
  };
}

// ── MDS Coding — ARD passed, code-by window is open ──

const OPEN_STATUSES = new Set(['In Progress', 'Open', 'Started', 'Not Started']);
function isOpenAssessment(p) {
  if (!p.status) return true;
  if (p.isLocked === true) return false;
  return OPEN_STATUSES.has(p.status);
}

// Progress bar color reflects time-at-risk, not raw progress.
// Compares actual completion to expected pace across the 14-day coding window.
function pacingFor(p) {
  const days = p.daysToCompleteBy;
  if (days == null) return 'pace-ok';
  if (days < 0) return 'pace-over';
  const total = p.sectionsTotal || 0;
  if (total === 0) return 'pace-ok';
  const daysElapsed = Math.max(0, MDS_WINDOW_DAYS - days);
  const expected = daysElapsed / MDS_WINDOW_DAYS;
  const actual = (p.sectionsCompleted || 0) / total;
  if (actual < expected - 0.05) return 'pace-behind';
  return 'pace-ok';
}

function MdsCodingTable({ data }) {
  const openPatients = (data?.patients || []).filter(isOpenAssessment);
  const completed = data?.completedRecently;
  const doneCount = completed?.count || 0;

  if (!data || (openPatients.length === 0 && doneCount === 0)) {
    return (
      <QueueCard title="MDS Coding" count="0" anchor="mds-coding">
        <div class="mds-pl__q-empty">No MDS in the coding window.</div>
      </QueueCard>
    );
  }
  const overdueCount = openPatients.filter(p => p.daysToCompleteBy != null && p.daysToCompleteBy < 0).length;
  return (
    <QueueCard
      title="MDS Coding"
      count={openPatients.length}
      overdueCount={overdueCount}
      doneCount={doneCount}
      anchor="mds-coding"
    >
      {openPatients.length > 0 ? (
        <table class="mds-pl__t mds-pl__t--coding">
          <thead>
            <tr><th>Patient</th><th>ARD</th><th>Progress</th><th>Due</th></tr>
          </thead>
          <tbody>
            {openPatients.slice(0, 6).map(p => {
              const pct = p.sectionsTotal ? Math.round((p.sectionsCompleted / p.sectionsTotal) * 100) : 0;
              const overdue = p.daysToCompleteBy != null && p.daysToCompleteBy < 0;
              const pace = pacingFor(p);
              const rowClass = overdue ? 'mds-pl__trow--overdue' : pace === 'pace-behind' ? 'mds-pl__trow--warning' : '';
              const event = {
                type: 'mds_ard',
                patientExternalId: p.patientExternalId,
                patientName: p.patientName,
                meta: { pccAssessmentId: p.pccAssessmentId },
              };
              return (
                <tr
                  key={p.assessmentId || p.patientId}
                  class={`${rowClass} mds-pl__trow--clickable`.trim()}
                  onClick={makeRowClickHandler(event)}
                  title={`Open ${p.patientName} MDS in PCC`}
                  data-track="mds_planner_event_clicked"
                  data-track-prop-event-type="mds_ard"
                >
                  <td class="mds-pl__t-name">
                    <div class="mds-pl__t-name-main">{p.patientName}</div>
                    {p.description && (
                      <div class="mds-pl__t-name-sub">{shortenDescription(p.description)}</div>
                    )}
                  </td>
                  <td class="mds-pl__t-date">{formatShortDate(p.ardDate)}</td>
                  <td class="mds-pl__t-progress">
                    <span class={`mds-pl__bar mds-pl__bar--${pace}`}><span class="mds-pl__bar-fill" style={{ width: `${pct}%` }} /></span>
                    <span class="mds-pl__bar-label">{p.sectionsCompleted}/{p.sectionsTotal}</span>
                  </td>
                  <td class={`mds-pl__t-date${overdue ? ' mds-pl__t-date--over' : ''}`}>
                    {overdue ? `${Math.abs(p.daysToCompleteBy)}d over` : `${p.daysToCompleteBy}d left`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
      <CompletedSection
        completed={completed}
        renderRow={(p) => {
          const event = {
            type: 'mds_ard',
            patientExternalId: p.patientExternalId,
            patientName: p.patientName,
            meta: { pccAssessmentId: p.pccAssessmentId },
          };
          return (
            <div
              key={p.assessmentId || p.patientId}
              class="mds-pl__done-row"
              onClick={makeRowClickHandler(event)}
              title={`Open ${p.patientName} MDS in PCC`}
              data-track="mds_planner_event_clicked"
              data-track-prop-event-type="mds_ard"
            >
              <span class="mds-pl__done-row-name">{p.patientName}</span>
              {p.description && <span class="mds-pl__done-row-sub">{shortenDescription(p.description)}</span>}
              <span class="mds-pl__done-row-date">locked {formatShortDate(p.lockedAt)}</span>
            </div>
          );
        }}
      />
    </QueueCard>
  );
}

// ── Care Plans to Open — new admits without a CP ──

function CarePlansToOpenTable({ data }) {
  const completed = data?.completedRecently;
  const doneCount = completed?.count || 0;

  if (!data || (data.count === 0 && doneCount === 0)) {
    return (
      <QueueCard title="Care Plans to Open" count="0" anchor="cp-open">
        <div class="mds-pl__q-empty">Nothing to open.</div>
      </QueueCard>
    );
  }
  return (
    <QueueCard
      title="Care Plans to Open"
      count={data.count}
      overdueCount={(data.patients || []).filter(p => p.hoursSinceAdmit >= 48).length}
      doneCount={doneCount}
      anchor="cp-open"
    >
      {data.count > 0 && (
        <table class="mds-pl__t mds-pl__t--cpopen">
          <thead>
            <tr><th>Patient</th><th>Admit</th><th>Since</th></tr>
          </thead>
          <tbody>
            {data.patients.slice(0, 6).map(p => {
              const overdue = p.hoursSinceAdmit >= 48;
              const warning = p.hoursSinceAdmit >= 24 && !overdue;
              const rowClass = overdue ? 'mds-pl__trow--overdue' : warning ? 'mds-pl__trow--warning' : '';
              const event = {
                type: 'cp_open_needed',
                patientExternalId: p.patientExternalId,
                patientName: p.patientName,
                meta: {},
              };
              return (
                <tr
                  key={p.patientId}
                  class={`${rowClass} mds-pl__trow--clickable`.trim()}
                  onClick={makeRowClickHandler(event)}
                  title={`Open new care plan for ${p.patientName}`}
                  data-track="mds_planner_event_clicked"
                  data-track-prop-event-type="cp_open_needed"
                >
                  <td class="mds-pl__t-name">{p.patientName}</td>
                  <td class="mds-pl__t-date">{formatShortDate(p.admitDate)}</td>
                  <td class={`mds-pl__t-date${overdue ? ' mds-pl__t-date--over' : ''}`}>{p.hoursSinceAdmit}h</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <CompletedSection
        completed={completed}
        renderRow={(p) => {
          const event = {
            type: 'cp_review_in_progress',
            patientExternalId: p.patientExternalId,
            patientName: p.patientName,
            meta: { pccCarePlanId: p.pccCarePlanId },
          };
          return (
            <div
              key={p.patientId}
              class="mds-pl__done-row"
              onClick={makeRowClickHandler(event)}
              title={`Open care plan for ${p.patientName}`}
              data-track="mds_planner_event_clicked"
              data-track-prop-event-type="cp_review_in_progress"
            >
              <span class="mds-pl__done-row-name">{p.patientName}</span>
              <span class="mds-pl__done-row-date">opened {formatShortDate(p.carePlanOpenedAt)}</span>
            </div>
          );
        }}
      />
    </QueueCard>
  );
}

// ── Care Plans to Review — due for review this week ──

function CarePlansToReviewTable({ data }) {
  const completed = data?.completedRecently;
  const doneCount = completed?.count || 0;

  if (!data || (data.count === 0 && doneCount === 0)) {
    return (
      <QueueCard title="Care Plans to Review" count="0" anchor="cp-review">
        <div class="mds-pl__q-empty">All caught up.</div>
      </QueueCard>
    );
  }
  const reviewOverdueCount = (data.patients || []).filter(p => p.state === 'overdue' || isPast(p.expectedDate)).length;
  return (
    <QueueCard
      title="Care Plans to Review"
      count={data.count}
      overdueCount={reviewOverdueCount}
      doneCount={doneCount}
      anchor="cp-review"
    >
      {data.count > 0 && (
        <table class="mds-pl__t mds-pl__t--cpreview">
          <thead>
            <tr><th>Patient</th><th>Due</th><th>State</th></tr>
          </thead>
          <tbody>
            {data.patients.slice(0, 6).map(p => {
              const overdue = p.state === 'overdue' || isPast(p.expectedDate);
              const rowClass = overdue ? 'mds-pl__trow--overdue' : '';
              const evType = p.state === 'in_progress' ? 'cp_review_in_progress' : 'cp_review_due';
              const event = {
                type: evType,
                patientExternalId: p.patientExternalId,
                patientName: p.patientName,
                meta: { pccCarePlanId: p.pccCarePlanId, pccReviewId: p.pccReviewId },
              };
              return (
                <tr
                  key={`${p.patientId}-${p.expectedDate}`}
                  class={`${rowClass} mds-pl__trow--clickable`.trim()}
                  onClick={makeRowClickHandler(event)}
                  title={`Open care plan for ${p.patientName}`}
                  data-track="mds_planner_event_clicked"
                  data-track-prop-event-type={evType}
                >
                  <td class="mds-pl__t-name">{p.patientName}</td>
                  <td class={`mds-pl__t-date${overdue ? ' mds-pl__t-date--over' : ''}`}>{formatShortDate(p.expectedDate)}</td>
                  <td><span class={`mds-pl__chip mds-pl__chip--${p.state}`}>{p.state.replace('_', ' ')}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <CompletedSection
        completed={completed}
        renderRow={(p) => {
          const event = {
            type: 'cp_review_in_progress',
            patientExternalId: p.patientExternalId,
            patientName: p.patientName,
            meta: { pccCarePlanId: p.pccCarePlanId, pccReviewId: p.pccReviewId },
          };
          return (
            <div
              key={p.patientId}
              class="mds-pl__done-row"
              onClick={makeRowClickHandler(event)}
              title={`Open care plan for ${p.patientName}`}
              data-track="mds_planner_event_clicked"
              data-track-prop-event-type="cp_review_in_progress"
            >
              <span class="mds-pl__done-row-name">{p.patientName}</span>
              <span class="mds-pl__done-row-date">reviewed {formatShortDate(p.reviewCompletedAt)}</span>
            </div>
          );
        }}
      />
    </QueueCard>
  );
}

// ── Queries — counts-only roster + completed recently ──

function QueriesSummary({ data, onOpenQueriesTab }) {
  if (!data) return null;
  const completed = data.completedRecently;
  const doneCount = completed?.count || 0;
  return (
    <QueueCard
      title="Queries Outstanding"
      count={data.count}
      doneCount={doneCount}
      anchor="queries"
      footer={onOpenQueriesTab && (
        /* NO_TRACK: tab nav — covered by mds_cc_view_switched in parent */
        <button class="mds-pl__q-link" onClick={onOpenQueriesTab}>Open Queries tab &rsaquo;</button>
      )}
    >
      <div class="mds-pl__q-split">
        <div class="mds-pl__q-split-item">
          <div class="mds-pl__q-split-num">{data.sent}</div>
          <div class="mds-pl__q-split-label">awaiting doctor</div>
        </div>
        <div class="mds-pl__q-split-item">
          <div class="mds-pl__q-split-num">{data.pending}</div>
          <div class="mds-pl__q-split-label">to send</div>
        </div>
      </div>
      <CompletedSection
        completed={completed}
        renderRow={(p) => (
          <div key={p.queryId} class="mds-pl__done-row">
            <span class="mds-pl__done-row-name">{p.patientName}</span>
            {p.itemCode && <span class="mds-pl__done-row-sub">{p.itemCode}</span>}
            <span class="mds-pl__done-row-date">signed {formatShortDate(p.signedAt)}</span>
          </div>
        )}
      />
    </QueueCard>
  );
}

// ── Certs — two-bucket split per Anna's mental model ──

function CertsSummary({ data, onOpenCertsTab }) {
  if (!data) return null;
  const n = data.needsToSend || {};
  const s = data.awaitingSignature || {};
  const certsOverdueCount = (n.overdueCount || 0) + (s.overdueCount || 0);
  const completed = data.completedRecently;
  const doneCount = completed?.count || 0;
  return (
    <QueueCard
      title="Certs"
      count={data.count}
      overdueCount={certsOverdueCount}
      doneCount={doneCount}
      anchor="certs"
      footer={onOpenCertsTab && (
        /* NO_TRACK: tab nav — covered by mds_cc_view_switched in parent */
        <button class="mds-pl__q-link" onClick={onOpenCertsTab}>Open Certs tab &rsaquo;</button>
      )}
    >
      <div class="mds-pl__q-split">
        <div class="mds-pl__q-split-item">
          <div class="mds-pl__q-split-num">{n.count || 0}</div>
          <div class="mds-pl__q-split-label">
            to send{n.upcomingCount ? ` · ${n.upcomingCount} soon` : ''}{n.overdueCount ? ` · ${n.overdueCount} overdue` : ''}
          </div>
        </div>
        <div class="mds-pl__q-split-item">
          <div class="mds-pl__q-split-num">{s.count || 0}</div>
          <div class="mds-pl__q-split-label">
            awaiting sig{s.overdueCount ? ` · ${s.overdueCount} overdue` : ''}
          </div>
        </div>
      </div>
      <CompletedSection
        completed={completed}
        renderRow={(p) => {
          const typeLabel = p.type === 'day_14_recert' ? 'Day-14 recert'
            : p.type === 'day_30_recert' ? 'Day-30 recert'
            : p.type === 'initial' ? 'Initial cert'
            : 'Cert';
          return (
            <div key={p.certId} class="mds-pl__done-row">
              <span class="mds-pl__done-row-name">{p.patientName}</span>
              <span class="mds-pl__done-row-sub">{typeLabel}</span>
              <span class="mds-pl__done-row-date">signed {formatShortDate(p.signedAt)}</span>
            </div>
          );
        }}
      />
    </QueueCard>
  );
}

// ── Interviews / GG — per-row status, with recently-completed footer ──

const INTERVIEW_STATUS_LABEL = {
  not_open:    'Not open',
  in_progress: 'In progress',
  overdue:     'Overdue',
};

function deriveInterviewStatus(p) {
  if (isPast(p.dueDate)) return 'overdue';
  return p.status || 'not_open';
}

function InterviewStatusIcon({ status }) {
  const label = INTERVIEW_STATUS_LABEL[status] || 'Not open';
  const kind = status === 'overdue' ? 'overdue' : status === 'in_progress' ? 'progress' : 'idle';
  return (
    <span class={`mds-pl__sicon mds-pl__sicon--${kind}`} role="img" aria-label={label} title={label}>
      {status === 'overdue' ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
          <path d="M12 3 L22 20 L2 20 Z" />
          <line x1="12" y1="10" x2="12" y2="14" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ) : status === 'in_progress' ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3 A9 9 0 0 1 12 21 Z" fill="currentColor" stroke="none" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="9" />
        </svg>
      )}
    </span>
  );
}

function InterviewsQueue({ data }) {
  if (!data) return null;
  const byType = data.byType || {};
  const patients = data.patients || [];
  const completed = data.completedRecently;
  const doneCount = completed?.count || 0;
  // v4 contract: `count` = row count. Header math uses patients.length as the
  // authoritative roster total so overdue/open arithmetic stays consistent.
  const rowCount = patients.length;

  if (rowCount === 0 && doneCount === 0) {
    return (
      <QueueCard title="Interviews Owed" count="0" anchor="interviews">
        <div class="mds-pl__q-empty">All interviews caught up.</div>
      </QueueCard>
    );
  }
  const overdueRows = patients.filter(p => isPast(p.dueDate)).length;
  return (
    <QueueCard
      title="Interviews Owed"
      count={rowCount}
      overdueCount={overdueRows}
      doneCount={doneCount}
      anchor="interviews"
    >
      {rowCount > 0 && (
        <>
          <div class="mds-pl__q-chips">
            {byType.gg   ? <span class="mds-pl__chip mds-pl__chip--gg">GG · {byType.gg}</span>   : null}
            {byType.bims ? <span class="mds-pl__chip mds-pl__chip--bims">BIMS · {byType.bims}</span> : null}
            {byType.phq  ? <span class="mds-pl__chip mds-pl__chip--phq">PHQ · {byType.phq}</span>   : null}
          </div>
          <table class="mds-pl__t mds-pl__t--interviews">
            <thead>
              <tr><th>Patient</th><th>Type</th><th>Due</th><th class="mds-pl__t-status-head">Status</th></tr>
            </thead>
            <tbody>
              {patients.slice(0, 6).map(p => {
                const displayStatus = deriveInterviewStatus(p);
                const overdue = displayStatus === 'overdue';
                const rowClass = overdue ? 'mds-pl__trow--overdue' : '';
                const rowKey = `${p.patientId}-${p.dueType}-${(p.assessmentIds || []).join(',') || p.assessmentId || ''}`;
                const event = {
                  type: 'mds_ard',
                  patientExternalId: p.patientExternalId,
                  patientName: p.patientName,
                  meta: { pccAssessmentId: p.pccAssessmentId },
                };
                return (
                  <tr
                    key={rowKey}
                    class={`${rowClass} mds-pl__trow--clickable`.trim()}
                    onClick={makeRowClickHandler(event)}
                    title={`Open ${p.patientName} MDS in PCC`}
                    data-track="mds_planner_event_clicked"
                    data-track-prop-event-type="mds_ard"
                  >
                    <td class="mds-pl__t-name">{p.patientName}</td>
                    <td class="mds-pl__t-type">
                      <div class="mds-pl__t-type-main">{(p.dueType || '').toUpperCase()}</div>
                      {p.mdsDescription && (
                        <div class="mds-pl__t-type-sub">{shortenDescription(p.mdsDescription)}</div>
                      )}
                    </td>
                    <td class={`mds-pl__t-date${overdue ? ' mds-pl__t-date--over' : ''}`}>
                      {formatShortDate(p.dueDate)}
                    </td>
                    <td class="mds-pl__t-status"><InterviewStatusIcon status={displayStatus} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
      <CompletedSection
        completed={completed}
        renderRow={(p) => {
          const event = {
            type: 'mds_ard',
            patientExternalId: p.patientExternalId,
            patientName: p.patientName,
            meta: { pccAssessmentId: p.pccAssessmentId },
          };
          return (
            <div
              key={`${p.patientId}-${p.dueType}-${p.assessmentId || ''}`}
              class="mds-pl__done-row"
              onClick={makeRowClickHandler(event)}
              title={`Open ${p.patientName} MDS in PCC`}
              data-track="mds_planner_event_clicked"
              data-track-prop-event-type="mds_ard"
            >
              <span class="mds-pl__done-row-name">{p.patientName}</span>
              <span class="mds-pl__done-row-sub">
                {(p.dueType || '').toUpperCase()}
                {p.mdsDescription && <> · {shortenDescription(p.mdsDescription)}</>}
              </span>
              <span class="mds-pl__done-row-date">done {formatShortDate(p.completedAt)}</span>
            </div>
          );
        }}
      />
    </QueueCard>
  );
}

// ── Skilled census — quick reference rosters ──

function SkilledRoster({ mcr, managed }) {
  if (!mcr && !managed) return null;
  const total = (mcr?.count || 0) + (managed?.count || 0);
  return (
    <QueueCard title="Skilled Census" count={`${total} total`} anchor="skilled">
      <div class="mds-pl__q-roster">
        <div class="mds-pl__q-roster-col">
          <div class="mds-pl__q-roster-head">Medicare A · {mcr?.count || 0}</div>
          {(mcr?.patients || []).slice(0, 5).map(p => (
            <div
              key={p.patientId}
              class={`mds-pl__q-roster-name${p.patientExternalId ? ' mds-pl__q-roster-name--clickable' : ''}`}
              onClick={p.patientExternalId ? () => openEventAction({
                type: 'admit',
                patientExternalId: p.patientExternalId,
                patientName: p.patientName,
                meta: {},
              }) : undefined}
              title={p.patientExternalId ? `Open ${p.patientName} in PCC` : undefined}
              data-track={p.patientExternalId ? 'mds_planner_event_clicked' : undefined}
              data-track-prop-event-type={p.patientExternalId ? 'admit' : undefined}
            >
              {p.patientName}
            </div>
          ))}
        </div>
        <div class="mds-pl__q-roster-col">
          <div class="mds-pl__q-roster-head">Managed · {managed?.count || 0}</div>
          {(managed?.patients || []).slice(0, 5).map(p => (
            <div
              key={p.patientId}
              class={`mds-pl__q-roster-name${p.patientExternalId ? ' mds-pl__q-roster-name--clickable' : ''}`}
              onClick={p.patientExternalId ? () => openEventAction({
                type: 'admit',
                patientExternalId: p.patientExternalId,
                patientName: p.patientName,
                meta: {},
              }) : undefined}
              title={p.patientExternalId ? `Open ${p.patientName} in PCC` : undefined}
              data-track={p.patientExternalId ? 'mds_planner_event_clicked' : undefined}
              data-track-prop-event-type={p.patientExternalId ? 'admit' : undefined}
            >
              {p.patientName}
            </div>
          ))}
        </div>
      </div>
    </QueueCard>
  );
}

// ── Root export ──

export function QueueCards({ summary, onOpenQueriesTab, onOpenCertsTab }) {
  if (!summary) return null;
  return (
    <div class="mds-pl__queues-wrap">
      <TodayFocusStrip summary={summary} />
      <div class="mds-pl__queues">
        <MdsCodingTable data={summary.mdsCoding} />
        <CarePlansToOpenTable data={summary.carePlansToOpen} />
        <CarePlansToReviewTable data={summary.carePlansToReview} />
        <QueriesSummary data={summary.queriesOpen} onOpenQueriesTab={onOpenQueriesTab} />
        <CertsSummary data={summary.certs} onOpenCertsTab={onOpenCertsTab} />
        <InterviewsQueue data={summary.interviewsOwed} />
        <SkilledRoster mcr={summary.skilledMCR} managed={summary.skilledManagedCare} />
      </div>
    </div>
  );
}
