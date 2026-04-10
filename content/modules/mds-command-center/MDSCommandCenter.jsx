/**
 * MDSCommandCenter — root component for the MDS Command Center overlay.
 *
 * Three tabs:
 *   1. Overview    — stat cards + needs-attention list (landing tab)
 *   2. Assessments — urgency-grouped cards with ARD countdown
 *   3. Queries     — outstanding queries list
 */
import { useState, useMemo, useEffect, useRef, useCallback } from 'preact/hooks';
import { useCommandCenter } from './hooks/useCommandCenter.js';
import { useDocRisks } from './hooks/useDocRisks.js';
import { useCertDashboard } from '../certifications/hooks/useCertDashboard.js';
import { CommandCenterHeader } from './CommandCenterHeader.jsx';
import { CertsView } from '../certifications/CertsView.jsx';
import { AssessmentRow, cleanAssessmentType } from './AssessmentRow.jsx';
import { AssessmentPreview } from './AssessmentPreview.jsx';
import { ItemPopover } from './ItemPopover.jsx';
import { formatPaymentDelta, getPaymentDeltaNumeric } from '../../utils/payment.js';
import { useComplianceDashboard } from '../care-plan-coverage/hooks/useComplianceDashboard.js';
import { useTrending } from '../care-plan-coverage/hooks/useTrending.js';
import { ComplianceView } from '../care-plan-coverage/ComplianceView.jsx';

// ── Helpers ──

function getUrgency(assessment) {
  return assessment.deadlines?.urgency || assessment.urgency || 'on_track';
}

function filterAssessments(assessments, payerFilter, classFilter, focusFilter) {
  let result = assessments;
  if (payerFilter !== 'all') result = result.filter(a => a.payerType === payerFilter);
  if (classFilter !== 'all') result = result.filter(a => a.assessmentClass === classFilter);
  if (focusFilter === 'revenue') result = result.filter(a => a.pdpm?.hasImprovements);
  if (focusFilter === 'issues') result = result.filter(a => {
    const u = a.udaSummary;
    const hasUda = u && (
      u.bims === 'missing' || u.bims === 'near_miss' || u.bims === 'in_progress' ||
      u.phq9 === 'missing' || u.phq9 === 'near_miss' || u.phq9 === 'in_progress' ||
      u.gg === 'missing' || u.gg === 'near_miss' || u.gg === 'in_progress'
    );
    const hasOrder = a.compliance?.checks?.orders
      ? a.compliance.checks.orders.status !== 'passed'
      : false;
    return hasUda || hasOrder;
  });
  return result;
}

// ── Urgency grouping ──

const URGENCY_ORDER = ['overdue', 'urgent', 'approaching', 'on_track', 'completed'];

const URGENCY_META = {
  overdue:     { label: 'OVERDUE',     color: '#ef4444' },
  urgent:      { label: 'URGENT',      color: '#f97316' },
  approaching: { label: 'APPROACHING', color: '#eab308' },
  on_track:    { label: 'ON TRACK',    color: '#22c55e' },
  completed:   { label: 'COMPLETED',   color: '#6b7280' },
};

function groupByUrgency(assessments) {
  const groups = {};
  for (const key of URGENCY_ORDER) groups[key] = [];
  for (const a of assessments) {
    const u = getUrgency(a);
    if (groups[u]) groups[u].push(a);
    else groups.on_track.push(a);
  }
  // Sort within each group by ARD ascending
  for (const key of URGENCY_ORDER) {
    groups[key].sort((a, b) => {
      const dA = a.ardDate ? new Date(a.ardDate) : new Date(0);
      const dB = b.ardDate ? new Date(b.ardDate) : new Date(0);
      return dA - dB;
    });
  }
  return groups;
}

function getGroupSummary(items) {
  let udasComplete = 0;
  let revenueOpp = 0;
  for (const a of items) {
    const u = a.udaSummary;
    if (u) {
      if (u.bims === 'complete' || u.bims === 'locked_in_range') udasComplete++;
      if (u.gg === 'complete' || u.gg === 'locked_in_range') udasComplete++;
      if (u.phq9 === 'complete' || u.phq9 === 'locked_in_range') udasComplete++;
    }
    if (a.pdpm?.hasImprovements) revenueOpp++;
  }
  const parts = [];
  if (udasComplete > 0) parts.push(`${udasComplete} UDAs complete`);
  if (revenueOpp > 0) parts.push(`${revenueOpp} revenue opp.`);
  return parts.join(' \u00B7 ') || `${items.length} assessment${items.length !== 1 ? 's' : ''}`;
}

// ── Overview helpers ──

function priorityScore(a) {
  let score = 0;
  const u = getUrgency(a);
  if (u === 'overdue') score += 4;
  else if (u === 'urgent') score += 3;
  else if (u === 'approaching') score += 2;

  const delta = getPaymentDeltaNumeric(a.pdpm?.payment);
  if (delta > 0) score += 3;

  if (a.udaSummary) {
    if (a.udaSummary.bims === 'missing') score += 1;
    if (a.udaSummary.phq9 === 'missing') score += 1;
    if (a.udaSummary.gg === 'missing') score += 1;
  }

  return score;
}

const URGENCY_DOT_COLORS = {
  overdue: '#ef4444', urgent: '#f97316', approaching: '#eab308',
  on_track: '#22c55e', completed: '#6b7280',
};

function buildIssueSummary(a) {
  const parts = [];
  if (a.sectionProgress?.total > 0) {
    parts.push(`${a.sectionProgress.completed}/${a.sectionProgress.total} sections`);
  }
  if (a.udaSummary) {
    const missing = [];
    if (a.udaSummary.bims === 'missing') missing.push('BIMS');
    if (a.udaSummary.phq9 === 'missing') missing.push('PHQ-9');
    if (a.udaSummary.gg === 'missing') missing.push('GG');
    if (missing.length > 0) parts.push(`${missing.join(', ')} missing`);
  }
  return parts.join(' \u00B7 ');
}

// ── Overview Tab ──

function OverviewView({ assessments, outstandingQueries, onViewChange, onOpenAssessment }) {
  const counts = useMemo(() => {
    let overdue = 0, urgent = 0, hipps = 0;
    let docRiskTotal = 0, docRiskDx = 0, docRiskTx = 0;
    for (const a of assessments) {
      const u = getUrgency(a);
      if (u === 'overdue') overdue++;
      if (u === 'urgent' || u === 'approaching') urgent++;
      if (a.isHippsOpportunityPrimary) hipps++;
      const dr = a.detectionSummary?.docRisks;
      if (dr) {
        docRiskTotal += dr.total || 0;
        docRiskDx += dr.diagnosisMissing || 0;
        docRiskTx += dr.treatmentMissing || 0;
      }
    }
    return { overdue, urgent, hipps, queries: (outstandingQueries || []).length, docRiskTotal, docRiskDx, docRiskTx };
  }, [assessments, outstandingQueries]);

  const priorities = useMemo(() => {
    return [...assessments]
      .filter(a => { const u = getUrgency(a); return u === 'overdue' || u === 'urgent' || u === 'approaching'; })
      .sort((a, b) => priorityScore(b) - priorityScore(a))
      .slice(0, 8);
  }, [assessments]);

  const hippsItems = useMemo(() => {
    return assessments
      .filter(a => a.isHippsOpportunityPrimary)
      .slice(0, 5);
  }, [assessments]);

  return (
    <div class="mds-cc__overview">
      {/* Stat cards */}
      <div class="mds-cc__ov-cards">
        <div class="mds-cc__ov-card mds-cc__ov-card--red" onClick={() => onViewChange('assessments')}>
          <div class="mds-cc__ov-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div class="mds-cc__ov-card-body">
            <div class="mds-cc__ov-card-num">{counts.overdue}</div>
            <div class="mds-cc__ov-card-label">Overdue</div>
          </div>
        </div>
        <div class="mds-cc__ov-card mds-cc__ov-card--orange" onClick={() => onViewChange('assessments')}>
          <div class="mds-cc__ov-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div class="mds-cc__ov-card-body">
            <div class="mds-cc__ov-card-num">{counts.urgent}</div>
            <div class="mds-cc__ov-card-label">Urgent</div>
          </div>
        </div>
        <div class="mds-cc__ov-card mds-cc__ov-card--green" onClick={() => onViewChange('assessments')}>
          <div class="mds-cc__ov-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div class="mds-cc__ov-card-body">
            <div class="mds-cc__ov-card-num">{counts.hipps}</div>
            <div class="mds-cc__ov-card-label">HIPPS Opportunities</div>
          </div>
        </div>
        <div class="mds-cc__ov-card mds-cc__ov-card--blue" onClick={() => onViewChange('queries')}>
          <div class="mds-cc__ov-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div class="mds-cc__ov-card-body">
            <div class="mds-cc__ov-card-num">{counts.queries}</div>
            <div class="mds-cc__ov-card-label">Outstanding Queries</div>
          </div>
        </div>
      </div>

      {/* Documentation Risks banner */}
      {counts.docRiskTotal > 0 && (
        <div class="mds-cc__ov-card mds-cc__ov-card--amber mds-cc__ov-card--full" onClick={() => onViewChange('docRisks')}>
          <div class="mds-cc__ov-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div class="mds-cc__ov-card-body">
            <div class="mds-cc__ov-card-num">{counts.docRiskTotal}</div>
            <div class="mds-cc__ov-card-label">Documentation Risks</div>
            <div class="mds-cc__ov-card-sublabel">
              {counts.docRiskDx > 0 && <span>{counts.docRiskDx} missing diagnosis</span>}
              {counts.docRiskDx > 0 && counts.docRiskTx > 0 && <span> &middot; </span>}
              {counts.docRiskTx > 0 && <span>{counts.docRiskTx} missing treatment</span>}
            </div>
          </div>
        </div>
      )}

      {/* Needs attention */}
      {priorities.length > 0 && (
        <div class="mds-cc__ov-section">
          <div class="mds-cc__ov-section-header">Needs Attention</div>
          {priorities.map(a => {
            const id = a.id || a.assessmentId || a.externalAssessmentId;
            const u = getUrgency(a);
            const delta = formatPaymentDelta(a.pdpm?.payment);
            const issues = buildIssueSummary(a);
            const type = cleanAssessmentType(a.assessmentType);
            return (
              <div key={id} class="mds-cc__ov-priority" onClick={() => onOpenAssessment(a)}>
                <span class="mds-cc__urgency-dot" style={{ background: URGENCY_DOT_COLORS[u] || '#9ca3af' }} />
                <span class="mds-cc__ov-priority-name">{a.patientName}</span>
                {type && <span class="mds-cc__ov-priority-type">{type}</span>}
                {a.pdpm?.currentHipps && (
                  <span class="mds-cc__ov-hipps-code">{a.pdpm.currentHipps}</span>
                )}
                <span class="mds-cc__ov-priority-issues">{issues}</span>
                {delta && <span class="mds-cc__card-badge--revenue">{delta}</span>}
              </div>
            );
          })}
        </div>
      )}

      {/* HIPPS Opportunities */}
      {hippsItems.length > 0 && (
        <div class="mds-cc__ov-section">
          <div class="mds-cc__ov-section-header">HIPPS Opportunities</div>
          {hippsItems.map(a => {
            const id = a.id || a.assessmentId || a.externalAssessmentId;
            const delta = formatPaymentDelta(a.pdpm?.payment);
            const type = cleanAssessmentType(a.assessmentType);
            return (
              <div key={id} class="mds-cc__ov-hipps-row" onClick={() => onOpenAssessment(a)}>
                <span class="mds-cc__ov-hipps-name">{a.patientName}</span>
                {type && <span class="mds-cc__ov-priority-type">{type}</span>}
                <span class="mds-cc__ov-hipps-codes">
                  {a.pdpm?.currentHipps && <span class="mds-cc__ov-hipps-code">{a.pdpm.currentHipps}</span>}
                  {a.pdpm?.potentialHipps && a.pdpm.potentialHipps !== a.pdpm.currentHipps && (
                    <>
                      <span class="mds-cc__ov-hipps-arrow">&rarr;</span>
                      <span class="mds-cc__ov-hipps-code mds-cc__ov-hipps-code--improved">{a.pdpm.potentialHipps}</span>
                    </>
                  )}
                </span>
                {delta && <span class="mds-cc__card-badge--revenue">{delta}</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Shared sub-components ──

function LoadingState() {
  return (
    <div class="mds-cc__state-container">
      <div class="mds-cc__spinner" />
      <p class="mds-cc__state-text">Loading assessments...</p>
    </div>
  );
}

function ErrorState({ message, onRetry }) {
  return (
    <div class="mds-cc__state-container">
      <div class="mds-cc__state-icon">{'\u26A0'}</div>
      <p class="mds-cc__state-text">{message}</p>
      <button class="mds-cc__retry-btn" onClick={onRetry}>Retry</button>
    </div>
  );
}

function EmptyState() {
  return (
    <div class="mds-cc__state-container">
      <div class="mds-cc__state-icon">&#x1F4CB;</div>
      <p class="mds-cc__state-text">No assessments found.</p>
    </div>
  );
}

// ── Queries view helpers ──

function formatRelative(dateStr) {
  if (!dateStr) return '';
  const days = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (days === 0) return 'today';
  if (days === 1) return '1d ago';
  return `${days}d ago`;
}

function formatShortDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function cleanType(type) {
  if (!type) return '';
  return type.replace(/\s*\/\s*/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

function ardBadge(q) {
  const d = q.ardDaysRemaining;
  if (d == null) return null;
  let label, cls;
  if (d < 0) {
    label = `ARD passed ${Math.abs(d)}d ago`;
    cls = 'mds-cc__ard--critical';
  } else if (d === 0) {
    label = 'ARD today';
    cls = 'mds-cc__ard--critical';
  } else if (d <= 3) {
    label = `ARD in ${d}d`;
    cls = 'mds-cc__ard--warn';
  } else {
    label = `ARD in ${d}d`;
    cls = 'mds-cc__ard--neutral';
  }
  return <span class={`mds-cc__ard ${cls}`}>{label}</span>;
}

function sortByArd(queries) {
  return [...queries].sort((a, b) => {
    const aVal = a.ardDaysRemaining ?? Infinity;
    const bVal = b.ardDaysRemaining ?? Infinity;
    return aVal - bVal;
  });
}

function QueryCard({ q, expanded, onToggle, onOpenAssessment, assessmentCtx, isPending }) {
  const delta = formatPaymentDelta(q.assessmentPayment);
  const sentTo = q.sentTo?.[0] || q.practitioner;
  const practName = sentTo ? `${sentTo.firstName || ''} ${sentTo.lastName || ''}`.trim() : null;
  const practTitle = sentTo?.title;

  return (
    <div class={`mds-cc__qcard${expanded ? ' mds-cc__qcard--open' : ''}`}>
      <div class="mds-cc__qcard-header" onClick={onToggle} role="button" tabIndex={0}>
        <div class="mds-cc__qcard-left">
          <span class="mds-cc__qcard-patient">{q.patientName}</span>
          <div class="mds-cc__qcard-diag">
            <span class="mds-cc__qcard-code">{q.mdsItem}</span>
            <span class="mds-cc__qcard-name">{q.mdsItemName}</span>
          </div>
        </div>
        <div class="mds-cc__qcard-right">
          {ardBadge(q)}
          {delta && <span class={`mds-cc__qcard-delta${isPending ? ' mds-cc__qcard-delta--pending' : ''}`}>{delta}</span>}
          <svg class={`mds-cc__qcard-chevron${expanded ? ' mds-cc__qcard-chevron--open' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="mds-cc__qcard-meta">
        {assessmentCtx && <span class="mds-cc__qcard-ctx">{assessmentCtx}</span>}
        <span class={`mds-cc__qcard-status mds-cc__qcard-status--${isPending ? 'pending' : 'sent'}`}>
          {isPending ? 'Not yet sent' : `Sent ${formatRelative(q.sentAt)}`}
        </span>
        {practName && <span class="mds-cc__qcard-practitioner">to {practName}{practTitle ? `, ${practTitle}` : ''}</span>}
      </div>
      {expanded && (
        <div class="mds-cc__qcard-body">
          <div class="mds-cc__qcard-actions">
            <button class="mds-cc__qcard-btn mds-cc__qcard-btn--primary" onClick={(e) => { e.stopPropagation(); onOpenAssessment(); }}>
              Open in PDPM Analyzer
            </button>
            {!isPending && (
              <button class="mds-cc__qcard-btn mds-cc__qcard-btn--secondary" onClick={(e) => {
                e.stopPropagation();
                const btn = e.currentTarget;
                btn.textContent = 'Sending...';
                btn.disabled = true;
                try {
                  window.QueryAPI.resendQuery(q.id)
                    .then(() => { window.SuperToast?.success?.('SMS resent'); btn.textContent = 'Sent!'; })
                    .catch((err) => { console.error('[Super] Resend failed:', err); window.SuperToast?.error?.('Failed to resend'); btn.textContent = 'Resend SMS'; btn.disabled = false; });
                } catch (err) {
                  console.error('[Super] Resend error:', err);
                  btn.textContent = 'Resend SMS';
                  btn.disabled = false;
                }
              }}>
                Resend SMS
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function QueriesView({ outstandingQueries, recentlySigned, assessments, onOpenAssessment }) {
  const [expandedId, setExpandedId] = useState(null);
  const pending = sortByArd((outstandingQueries || []).filter(q => q.status === 'pending'));
  const sent = sortByArd((outstandingQueries || []).filter(q => q.status === 'sent' || q.status === 'awaiting_response'));

  function findAssessmentId(q) {
    const match = (assessments || []).find(a => a.id === q.mdsAssessmentId);
    return match?.externalAssessmentId || match?.assessmentId || match?.id || q.mdsAssessmentId;
  }

  function findAssessmentContext(q) {
    const match = (assessments || []).find(a => a.id === q.mdsAssessmentId);
    if (!match) return null;
    return cleanType(match.assessmentType) || null;
  }

  async function handleViewPdf(queryId) {
    try {
      const resp = await fetch(`/api/extension/diagnosis-queries/${queryId}/pdf`);
      const { pdfUrl } = await resp.json();
      if (pdfUrl) window.open(pdfUrl, '_blank');
    } catch (e) {
      console.warn('[Super] PDF fetch failed', e);
    }
  }

  const totalOutstanding = pending.length + sent.length;

  return (
    <div class="mds-cc__queries-view">
      {sent.length > 0 && (
        <div class="mds-cc__queries-group">
          <div class="mds-cc__queries-group-label">
            <span class="mds-cc__queries-group-dot mds-cc__queries-group-dot--sent" />
            Awaiting Doctor
            <span class="mds-cc__queries-group-count">{sent.length}</span>
          </div>
          {sent.map(q => (
            <QueryCard
              key={q.id}
              q={q}
              expanded={expandedId === q.id}
              onToggle={() => setExpandedId(expandedId === q.id ? null : q.id)}
              onOpenAssessment={() => onOpenAssessment?.(findAssessmentId(q))}
              assessmentCtx={findAssessmentContext(q)}
              isPending={false}
            />
          ))}
        </div>
      )}

      {pending.length > 0 && (
        <div class="mds-cc__queries-group">
          <div class="mds-cc__queries-group-label">
            <span class="mds-cc__queries-group-dot mds-cc__queries-group-dot--pending" />
            Needs to be Sent
            <span class="mds-cc__queries-group-count">{pending.length}</span>
          </div>
          {pending.map(q => (
            <QueryCard
              key={q.id}
              q={q}
              expanded={expandedId === q.id}
              onToggle={() => setExpandedId(expandedId === q.id ? null : q.id)}
              onOpenAssessment={() => onOpenAssessment?.(findAssessmentId(q))}
              assessmentCtx={findAssessmentContext(q)}
              isPending={true}
            />
          ))}
        </div>
      )}

      {recentlySigned && recentlySigned.length > 0 && (
        <div class="mds-cc__queries-group">
          <div class="mds-cc__queries-group-label">
            <span class="mds-cc__queries-group-dot mds-cc__queries-group-dot--signed" />
            Recently Signed
            <span class="mds-cc__queries-group-count">{recentlySigned.length}</span>
          </div>
          {recentlySigned.map(q => {
            const isSigned = q.status === 'signed';
            const isRejected = q.status === 'rejected';
            const practitioner = q.practitioner || q.sentTo?.[0];
            return (
              <div key={q.id || q.mdsItem} class={`mds-cc__qcard mds-cc__qcard--signed${isRejected ? ' mds-cc__qcard--rejected' : ''}`}>
                <div class="mds-cc__qcard-header" onClick={() => setExpandedId(expandedId === q.id ? null : q.id)} role="button" tabIndex={0}>
                  <div class="mds-cc__qcard-left">
                    <span class="mds-cc__qcard-patient">{q.patientName}</span>
                    <div class="mds-cc__qcard-diag">
                      <span class="mds-cc__qcard-code">{q.mdsItem}</span>
                      <span class="mds-cc__qcard-name">{q.mdsItemName}</span>
                    </div>
                  </div>
                  <div class="mds-cc__qcard-right">
                    <span class={`mds-cc__qcard-status-badge mds-cc__qcard-status-badge--${q.status}`}>
                      {isSigned ? 'Signed' : 'Rejected'}
                    </span>
                    <svg class={`mds-cc__qcard-chevron${expandedId === q.id ? ' mds-cc__qcard-chevron--open' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="mds-cc__qcard-meta">
                  {practitioner && (
                    <span class="mds-cc__qcard-practitioner">
                      {practitioner.firstName} {practitioner.lastName}{practitioner.title ? `, ${practitioner.title}` : ''}
                    </span>
                  )}
                  {isSigned && q.selectedIcd10Code && (
                    <span class="mds-cc__qcard-icd">{q.selectedIcd10Code}</span>
                  )}
                  {isRejected && q.rejectionReason && (
                    <span class="mds-cc__qcard-rejection">&ldquo;{q.rejectionReason}&rdquo;</span>
                  )}
                </div>
                {expandedId === q.id && (
                  <div class="mds-cc__qcard-body">
                    <div class="mds-cc__qcard-actions">
                      <button class="mds-cc__qcard-btn mds-cc__qcard-btn--primary" onClick={(e) => { e.stopPropagation(); onOpenAssessment?.(findAssessmentId(q)); }}>
                        Open in PDPM Analyzer
                      </button>
                      {q.hasPdf && (
                        <button class="mds-cc__qcard-btn mds-cc__qcard-btn--secondary" onClick={(e) => { e.stopPropagation(); handleViewPdf(q.id); }}>
                          View Signed PDF
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {totalOutstanding === 0 && (!recentlySigned || recentlySigned.length === 0) && (
        <div class="mds-cc__state-container">
          <div class="mds-cc__state-icon">{'\u2709'}</div>
          <p class="mds-cc__state-text">No outstanding queries.</p>
        </div>
      )}
    </div>
  );
}

// ── Doc Risks View ──

function DocRisksView({ facilityName, orgSlug }) {
  const { data, loading, error } = useDocRisks({ facilityName, orgSlug, enabled: true });

  if (loading) return <LoadingState />;
  if (error) return (
    <div class="mds-cc__state-container">
      <div class="mds-cc__state-icon">{'\u26A0'}</div>
      <p class="mds-cc__state-text">{error}</p>
    </div>
  );

  const items = data?.items || [];
  const summary = data?.summary || {};

  if (items.length === 0) {
    return (
      <div class="mds-cc__state-container">
        <div class="mds-cc__state-icon">{'\u2705'}</div>
        <p class="mds-cc__state-text">No documentation risks found.</p>
      </div>
    );
  }

  return (
    <div class="mds-cc__doc-risks-view">
      <div class="mds-cc__doc-risks-summary">
        <span class="mds-cc__doc-risks-summary-icon">{'\u26A0'}</span>
        <div class="mds-cc__doc-risks-summary-body">
          <div class="mds-cc__doc-risks-summary-title">{summary.total || items.length} Documentation Risk{(summary.total || items.length) !== 1 ? 's' : ''}</div>
          <div class="mds-cc__doc-risks-summary-detail">
            Diagnoses lacking chart documentation support
            {(summary.diagnosisMissing > 0 || summary.treatmentMissing > 0) && (
              <span>
                {' \u00B7 '}
                {summary.diagnosisMissing > 0 && `${summary.diagnosisMissing} missing diagnosis`}
                {summary.diagnosisMissing > 0 && summary.treatmentMissing > 0 && ' \u00B7 '}
                {summary.treatmentMissing > 0 && `${summary.treatmentMissing} missing treatment`}
              </span>
            )}
          </div>
        </div>
      </div>

      {items.map((item, i) => (
        <div key={i} class="mds-cc__doc-risk-row">
          <div class="mds-cc__doc-risk-row-top">
            <span class="mds-cc__query-patient">{item.patientName}</span>
            {item.assessmentType && <span class="mds-cc__ov-priority-type">{cleanType(item.assessmentType)}</span>}
          </div>
          <div class="mds-cc__doc-risk-row-item">
            <span class="mds-cc__query-item-code">{item.mdsItem}</span>
            <span class="mds-cc__query-item-name">&middot; {item.itemName}</span>
            <div class="mds-cc__doc-risk-pills">
              {item.missingDiagnosis && <span class="mds-cc__doc-risk-pill">Diagnosis</span>}
              {item.missingTreatment && <span class="mds-cc__doc-risk-pill">Active Treatment</span>}
            </div>
          </div>
          {item.rationale && <div class="mds-cc__doc-risk-rationale">{item.rationale}</div>}
        </div>
      ))}
    </div>
  );
}

// ── Urgency Group Component ──

function UrgencyGroup({ urgencyKey, items, isCollapsed, onToggleCollapse, expandedId, onToggleCard, onOpenAnalyzer, onSelectItem }) {
  const meta = URGENCY_META[urgencyKey];
  if (!items || items.length === 0) return null;

  return (
    <div class="mds-cc__urgency-group">
      <div
        class="mds-cc__urgency-group-header"
        onClick={() => onToggleCollapse(urgencyKey)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggleCollapse(urgencyKey); }
        }}
      >
        <span class={`mds-cc__urgency-group-arrow${isCollapsed ? '' : ' mds-cc__urgency-group-arrow--open'}`}>&rsaquo;</span>
        <span class="mds-cc__urgency-group-dot" style={{ background: meta.color }} />
        <span class="mds-cc__urgency-group-label" style={{ color: meta.color }}>{meta.label}</span>
        <span class="mds-cc__urgency-group-count">({items.length})</span>
        {isCollapsed && (
          <span class="mds-cc__urgency-group-summary">{getGroupSummary(items)}</span>
        )}
      </div>
      {!isCollapsed && (
        <div class="mds-cc__urgency-group-body">
          {items.map(assessment => {
            const id = assessment.id || assessment.assessmentId || assessment.externalAssessmentId;
            const isExpanded = expandedId === id;
            return (
              <div key={id} class="mds-cc__card-wrapper" data-assessment-id={id}>
                <AssessmentRow
                  assessment={assessment}
                  isExpanded={isExpanded}
                  onToggle={() => onToggleCard(id)}
                  onOpenAnalyzer={() => onOpenAnalyzer(assessment)}
                />
                {isExpanded && (
                  <AssessmentPreview
                    assessment={assessment}
                    onOpenAnalyzer={() => onOpenAnalyzer(assessment)}
                    onSelectItem={onSelectItem ? (item) => onSelectItem(item, assessment) : undefined}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Main Component ──

export function MDSCommandCenter({ facilityName, orgSlug, onClose, initialExpandedId }) {
  const [activeView, setActiveView] = useState(initialExpandedId ? 'assessments' : 'overview');
  const [payerFilter, setPayerFilter] = useState('all');
  const [classFilter, setClassFilter] = useState('all');
  const [focusFilter, setFocusFilter] = useState('all');
  const [urgencyFilter, setUrgencyFilter] = useState('all');
  const [collapsedGroups, setCollapsedGroups] = useState(new Set(['completed']));
  const [expandedId, setExpandedId] = useState(initialExpandedId || null);
  const [selectedItem, setSelectedItem] = useState(null); // { item, assessmentId }

  const { data, loading, error, retry } = useCommandCenter({ facilityName, orgSlug });

  // Certification dashboard (returns null when module disabled)
  const { data: certDashboard } = useCertDashboard({ facilityName, orgSlug, enabled: true });
  const certsEnabled = certDashboard !== null;
  const certCount = certsEnabled ? (certDashboard?.pending || 0) + (certDashboard?.overdue || 0) : 0;

  // Compliance dashboard (care plan coverage)
  const {
    data: complianceData,
    loading: complianceLoading,
    error: complianceError,
    retry: complianceRetry
  } = useComplianceDashboard({ facilityName, orgSlug, enabled: true });
  const complianceGaps = complianceData?.summary?.totalGaps || 0;

  // Trending data for compliance chart
  const { data: trendingData } = useTrending({ facilityName, orgSlug, enabled: true });

  // Patient context for cert auto-filtering
  const patientId = typeof window.getChatPatientId === 'function' ? window.getChatPatientId() : null;
  const patientName = typeof window.getPatientNameFromPage === 'function' ? window.getPatientNameFromPage() : null;

  const assessments = data?.assessments || [];
  const summary = data?.summary || {};

  // Facility-wide doc risk count from assessment summaries
  const docRiskCount = useMemo(() => {
    let total = 0;
    for (const a of assessments) {
      const dr = a.detectionSummary?.docRisks;
      if (dr) total += dr.total || 0;
    }
    return total;
  }, [assessments]);

  // Group assessments by urgency
  const urgencyGroups = useMemo(() => {
    const filtered = filterAssessments(assessments, payerFilter, classFilter, focusFilter);
    return groupByUrgency(filtered);
  }, [assessments, payerFilter, classFilter, focusFilter]);

  // Adaptive collapse: auto-collapse on_track when >20 active
  useMemo(() => {
    const activeCount = (urgencyGroups.overdue?.length || 0) +
      (urgencyGroups.urgent?.length || 0) +
      (urgencyGroups.approaching?.length || 0) +
      (urgencyGroups.on_track?.length || 0);
    if (activeCount > 20 && !collapsedGroups.has('on_track')) {
      setCollapsedGroups(prev => new Set([...prev, 'on_track']));
    }
  }, [urgencyGroups]);

  // When restoring with initialExpandedId, ensure its urgency group is uncollapsed and scroll to it
  const didRestoreScroll = useRef(false);
  useEffect(() => {
    if (!initialExpandedId || !assessments.length || didRestoreScroll.current) return;
    didRestoreScroll.current = true;
    const match = assessments.find(a =>
      (a.externalAssessmentId || a.assessmentId || a.id) === initialExpandedId
    );
    if (match) {
      const u = getUrgency(match);
      setCollapsedGroups(prev => {
        if (!prev.has(u)) return prev;
        const next = new Set(prev);
        next.delete(u);
        return next;
      });
      // Scroll after render
      requestAnimationFrame(() => {
        const el = listRef.current?.querySelector(`[data-assessment-id="${initialExpandedId}"]`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  }, [assessments, initialExpandedId]);

  // Which groups to show based on urgency filter
  const visibleGroupKeys = useMemo(() => {
    if (urgencyFilter === 'all') return URGENCY_ORDER;
    return [urgencyFilter];
  }, [urgencyFilter]);

  const totalFiltered = useMemo(() => {
    return URGENCY_ORDER.reduce((sum, key) => sum + (urgencyGroups[key]?.length || 0), 0);
  }, [urgencyGroups]);

  function handleToggleCollapse(key) {
    setCollapsedGroups(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function handleToggleCard(id) {
    setExpandedId(prev => {
      const next = prev === id ? null : id;
      // Scroll expanded card into view after render
      if (next) {
        requestAnimationFrame(() => {
          const el = listRef.current?.querySelector(`[data-assessment-id="${next}"]`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
      }
      return next;
    });
  }

  // Ref for scrolling to a specific assessment after view switch
  const scrollTargetRef = useRef(null);
  const listRef = useRef(null);

  // After view switches to assessments with a scroll target, scroll to it
  useEffect(() => {
    if (activeView === 'assessments' && scrollTargetRef.current) {
      const targetId = scrollTargetRef.current;
      scrollTargetRef.current = null;
      // Use requestAnimationFrame to wait for DOM render
      requestAnimationFrame(() => {
        const el = listRef.current?.querySelector(`[data-assessment-id="${targetId}"]`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Brief highlight flash
          el.classList.add('mds-cc__card-wrapper--highlight');
          setTimeout(() => el.classList.remove('mds-cc__card-wrapper--highlight'), 1500);
        }
      });
    }
  }, [activeView, expandedId]);

  function navigateToAssessment(assessment) {
    const id = assessment.id || assessment.assessmentId || assessment.externalAssessmentId;
    const urgency = getUrgency(assessment);

    // Ensure the assessment's urgency group is expanded
    setCollapsedGroups(prev => {
      if (!prev.has(urgency)) return prev;
      const next = new Set(prev);
      next.delete(urgency);
      return next;
    });

    // Expand the card
    setExpandedId(id);

    // Set scroll target and switch to assessments view
    scrollTargetRef.current = id;
    setActiveView('assessments');
  }

  function handleOpenAnalyzer(assessment) {
    const assessmentId = assessment.externalAssessmentId || assessment.assessmentId || assessment.id;
    onClose({ hide: true });
    window.PDPMAnalyzerLauncher?.open({ scope: 'mds', assessmentId });
  }

  function handleOpenAssessmentById(assessmentId) {
    onClose({ hide: true });
    window.PDPMAnalyzerLauncher?.open({ scope: 'mds', assessmentId });
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div class="mds-cc__overlay" onClick={handleBackdropClick}>
      <div class="mds-cc__modal" role="dialog" aria-modal="true" aria-label="MDS Command Center">

        {/* ── Item detail popover ── */}
        {selectedItem && (
          <ItemPopover
            item={selectedItem.item}
            context={{ assessmentId: selectedItem.assessmentId }}
            onClose={() => setSelectedItem(null)}
          />
        )}

        <CommandCenterHeader
          summary={summary}
          facilityName={facilityName}
          onClose={onClose}
          activeView={activeView}
          onViewChange={setActiveView}
          queryCount={(data?.outstandingQueries || []).length}
          certCount={certCount}
          certsEnabled={certsEnabled}
          docRiskCount={docRiskCount}
          complianceGaps={complianceGaps}
          payerFilter={payerFilter}
          onPayerFilterChange={setPayerFilter}
          classFilter={classFilter}
          onClassFilterChange={setClassFilter}
          focusFilter={focusFilter}
          onFocusFilterChange={setFocusFilter}
          urgencyFilter={urgencyFilter}
          onUrgencyFilterChange={setUrgencyFilter}
        />

        <div class="mds-cc__list" ref={listRef}>
          {loading && <LoadingState />}
          {!loading && error && <ErrorState message={error} onRetry={retry} />}

          {/* Overview */}
          {!loading && !error && activeView === 'overview' && (
            <OverviewView
              assessments={assessments}
              outstandingQueries={data?.outstandingQueries || []}
              onViewChange={setActiveView}
              onOpenAssessment={navigateToAssessment}
            />
          )}

          {/* Assessments — urgency-grouped cards */}
          {!loading && !error && activeView === 'assessments' && (
            <>
              {totalFiltered === 0 && <EmptyState />}
              {totalFiltered > 0 && (
                <div class="mds-cc__assessments">
                  {visibleGroupKeys.map(key => (
                    <UrgencyGroup
                      key={key}
                      urgencyKey={key}
                      items={urgencyGroups[key]}
                      isCollapsed={collapsedGroups.has(key)}
                      onToggleCollapse={handleToggleCollapse}
                      expandedId={expandedId}
                      onToggleCard={handleToggleCard}
                      onOpenAnalyzer={handleOpenAnalyzer}
                      onSelectItem={(item, assessment) => {
                        const aid = assessment.externalAssessmentId || assessment.assessmentId || assessment.id;
                        setSelectedItem({ item, assessmentId: aid });
                      }}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Queries */}
          {!loading && !error && activeView === 'queries' && (
            <QueriesView
              outstandingQueries={data?.outstandingQueries || []}
              recentlySigned={data?.recentlySigned || []}
              assessments={assessments}
              onOpenAssessment={handleOpenAssessmentById}
            />
          )}

          {/* Doc Risks */}
          {!loading && !error && activeView === 'docRisks' && (
            <DocRisksView facilityName={facilityName} orgSlug={orgSlug} />
          )}

          {/* Certifications */}
          {activeView === 'certs' && (
            <CertsView
              facilityName={facilityName}
              orgSlug={orgSlug}
              patientId={patientId}
              patientName={patientName}
            />
          )}

          {/* Compliance */}
          {activeView === 'compliance' && (
            <ComplianceView
              data={complianceData}
              loading={complianceLoading}
              error={complianceError}
              retry={complianceRetry}
              trendingData={trendingData}
              facilityName={facilityName}
              orgSlug={orgSlug}
            />
          )}
        </div>
      </div>
    </div>
  );
}
