/**
 * AssessmentPreview — inline accordion content shown when a card is expanded.
 *
 * Lazy-loads full PDPM detail from /api/extension/mds/pdpm-potential.
 *
 * Layout: Summary strip → item list → action buttons (single-column, action-focused).
 * Users click "Open Full Analyzer" for deep detail.
 */
import { useAssessmentDetail } from './hooks/useAssessmentDetail.js';
import { formatPaymentDelta, isPaymentApplicable } from '../../utils/payment.js';

// ── helpers ──

function ntaLevelToTier(level, payment) {
  if (!payment?.meta?.ntaTiers) return null;
  for (const t of payment.meta.ntaTiers) {
    if ((t.levels || []).includes(level)) return t.tier;
  }
  return null;
}

function formatNtaImpact(nta, payment) {
  if (payment?.mode === 'state_rate') {
    const curTier = ntaLevelToTier(nta.currentLevel, payment);
    const newTier = ntaLevelToTier(nta.newLevel, payment);
    if (curTier != null && newTier != null) return `NTA: Tier ${curTier}\u2009\u2192\u2009Tier ${newTier}`;
    return 'NTA: tier upgrade';
  }
  return `NTA: ${nta.currentLevel}\u2009\u2192\u2009${nta.newLevel}`;
}

function buildImpacts(d, payment) {
  const impacts = [];
  if (d.impact?.slp?.wouldChangeGroup)
    impacts.push(`SLP: ${d.impact.slp.currentGroup}\u2009\u2192\u2009${d.impact.slp.newGroup}`);
  if (d.impact?.nta?.wouldChangeLevel)
    impacts.push(formatNtaImpact(d.impact.nta, payment));
  if (d.impact?.nursing?.wouldChangeGroup)
    impacts.push(`Nursing: ${d.impact.nursing.currentPaymentGroup}\u2009\u2192\u2009${d.impact.nursing.newPaymentGroup}`);
  if (d.impact?.ptot?.wouldChangeGroup)
    impacts.push(`PT/OT: ${d.impact.ptot.currentGroup}\u2009\u2192\u2009${d.impact.ptot.newGroup}`);
  return impacts;
}

function buildQueryImpacts(q, payment) {
  const ci = q.pdpmImpact?.componentImpacts;
  if (!ci) return [];
  const impacts = [];
  if (ci.slp?.wouldChangeGroup)
    impacts.push(`SLP: ${ci.slp.currentGroup}\u2009\u2192\u2009${ci.slp.newGroup}`);
  if (ci.nta?.wouldChangeLevel)
    impacts.push(formatNtaImpact(ci.nta, payment));
  if (ci.nursing?.wouldChangeGroup)
    impacts.push(`Nursing: ${ci.nursing.currentPaymentGroup}\u2009\u2192\u2009${ci.nursing.newPaymentGroup}`);
  if (ci.ptot?.wouldChangeGroup)
    impacts.push(`PT/OT: ${ci.ptot.currentGroup}\u2009\u2192\u2009${ci.ptot.newGroup}`);
  return impacts;
}

function relativeDate(sentAt) {
  if (!sentAt) return 'not yet sent';
  const days = Math.floor((Date.now() - new Date(sentAt)) / 86400000);
  return days === 0 ? 'sent today' : `sent ${days}d ago`;
}

function getFailedChecks(compliance) {
  if (!compliance?.checks) {
    if (compliance?.status === 'failed' && compliance.issues?.length > 0) {
      return compliance.issues.map(i => i.message || i);
    }
    return [];
  }
  const labels = { bims: 'BIMS', phq9: 'PHQ-9', gg: 'GG', orders: 'Orders', therapyDocs: 'Therapy' };
  const failed = [];
  for (const [key, check] of Object.entries(compliance.checks)) {
    if (check.status === 'failed') {
      failed.push(check.message || `${labels[key] || key} incomplete`);
    }
  }
  return failed;
}

// ── Summary Strip ──

function SummaryStrip({ pdpm, detailData, payment, sectionProgress, compliance, isEndOfStay }) {
  const parts = [];

  const currentHipps = detailData?.currentHipps || pdpm?.currentHipps;
  const potentialHipps = detailData?.potentialHipps || pdpm?.potentialHipps;
  const hasChange = potentialHipps && potentialHipps !== currentHipps && !isEndOfStay;
  const hasDelta = isPaymentApplicable(payment) && payment.delta > 0;
  const delta = hasDelta ? formatPaymentDelta(payment, 'short') : null;

  if (hasChange && delta) {
    parts.push(<span class="mds-cc__ss-part mds-cc__ss-part--revenue">{delta} opportunity</span>);
  } else if (hasChange) {
    parts.push(<span class="mds-cc__ss-part">HIPPS {currentHipps} {'\u2192'} {potentialHipps}</span>);
  }

  if (sectionProgress?.percentComplete != null) {
    parts.push(<span class="mds-cc__ss-part">Sections {sectionProgress.percentComplete}%</span>);
  }

  const failedChecks = getFailedChecks(compliance);
  const docRiskCount = detailData?.enhancedDetections?.filter(
    d => d.solverStatus === 'dont_code' && (d.diagnosisPassed === false || d.activeStatusPassed === false)
  ).length || 0;
  const issueCount = failedChecks.length + docRiskCount;
  if (issueCount > 0) {
    parts.push(<span class="mds-cc__ss-part mds-cc__ss-part--issues">{'\u26A0'} {issueCount} {issueCount === 1 ? 'issue' : 'issues'}</span>);
  }

  if (parts.length === 0) return null;

  return (
    <div class="mds-cc__ss">
      {parts.map((p, i) => (
        <>{i > 0 && <span class="mds-cc__ss-sep" />}{p}</>
      ))}
    </div>
  );
}

// ── Item list sections ──

function RevenueSection({ detailData, onSelectItem }) {
  const detections = detailData?.enhancedDetections || [];
  const payment = detailData?.payment;
  const drivers = detections.filter(
    d => d.wouldChangeHipps && d.solverStatus !== 'query_sent' && d.solverStatus !== 'awaiting_response' && d.solverStatus !== 'dont_code'
  );
  if (drivers.length === 0) return null;

  const currentHipps = detailData?.currentHipps;
  const potentialHipps = detailData?.potentialHipps;
  const hippsNote = potentialHipps && potentialHipps !== currentHipps
    ? ` (${currentHipps} \u2192 ${potentialHipps})`
    : '';

  return (
    <div class="mds-cc__ps">
      <div class="mds-cc__ps-header">{drivers.length} {drivers.length === 1 ? 'item' : 'items'} would change HIPPS{hippsNote}</div>
      <div class="mds-cc__ps-items">
        {drivers.map((d, i) => {
          const code = d.mdsItem?.startsWith('I8000:') ? 'I8000' : d.mdsItem;
          const impacts = buildImpacts(d, payment);
          return (
            <div
              key={i}
              class="mds-cc__ps-item mds-cc__ps-item--clickable"
              onClick={() => onSelectItem(d)}
              role="button"
              title="View evidence"
            >
              <div class="mds-cc__ps-item-top">
                <span class="mds-cc__ps-item-name">{d.itemName}</span>
                <span class="mds-cc__ps-item-code">{code}</span>
              </div>
              {impacts.length > 0 && (
                <div class="mds-cc__ps-item-detail">Would change {impacts.join(', ')}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DocRisksSection({ detailData }) {
  const detections = detailData?.enhancedDetections || [];
  const allRisks = detections.filter(
    d => d.solverStatus === 'dont_code' && (d.diagnosisPassed === false || d.activeStatusPassed === false)
  );
  if (allRisks.length === 0) return null;

  return (
    <div class="mds-cc__ps">
      <div class="mds-cc__ps-header mds-cc__ps-header--amber">{allRisks.length} documentation {allRisks.length === 1 ? 'risk' : 'risks'}</div>
      <div class="mds-cc__ps-items">
        {allRisks.map((d, i) => {
          const code = d.mdsItem?.startsWith('I8000:') ? 'I8000' : d.mdsItem;
          const reasons = [];
          if (d.diagnosisPassed === false) reasons.push('No physician diagnosis');
          if (d.activeStatusPassed === false) reasons.push('No active treatment order');
          return (
            <div key={i} class="mds-cc__ps-item">
              <div class="mds-cc__ps-item-top">
                <span class="mds-cc__ps-item-name">{d.itemName}</span>
                <span class="mds-cc__ps-item-code">{code}</span>
              </div>
              {reasons.length > 0 && (
                <div class="mds-cc__ps-item-detail">{reasons.join(' \u00B7 ')}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QueriesSection({ detailData, querySummary, assessmentClass }) {
  const queries = detailData?.outstandingQueries || [];
  const payment = detailData?.payment;
  const pending = queries.filter(
    q => q.status === 'sent' || q.status === 'pending' || q.status === 'awaiting_response'
  );

  if (pending.length > 0) {
    return (
      <div class="mds-cc__ps">
        <div class="mds-cc__ps-header">{pending.length} pending {pending.length === 1 ? 'query' : 'queries'}</div>
        <div class="mds-cc__ps-items">
          {pending.map((q, i) => {
            const impacts = buildQueryImpacts(q, payment);
            return (
              <div key={i} class="mds-cc__ps-item">
                <div class="mds-cc__ps-item-top">
                  <span class="mds-cc__ps-item-name">{q.mdsItemName}</span>
                  {q.mdsItem && <span class="mds-cc__ps-item-code">{q.mdsItem}</span>}
                  <span class="mds-cc__ps-item-meta">{relativeDate(q.sentAt)}</span>
                </div>
                {impacts.length > 0 && (
                  <div class="mds-cc__ps-item-detail">Would change {impacts.join(', ')}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Fallback: simple counts from dashboard data
  if (assessmentClass !== 'pps_payment' || !querySummary) return null;
  const { pending: pendCount = 0, sent = 0 } = querySummary;
  if (pendCount === 0 && sent === 0) return null;

  const parts = [];
  if (pendCount > 0) parts.push(`${pendCount} pending`);
  if (sent > 0) parts.push(`${sent} sent, awaiting response`);

  return (
    <div class="mds-cc__ps">
      <div class="mds-cc__ps-header">Outstanding queries</div>
      <div class="mds-cc__ps-item-detail" style={{ paddingLeft: '0' }}>{parts.join(' \u00B7 ')}</div>
    </div>
  );
}

function ComplianceIssues({ compliance }) {
  const failed = getFailedChecks(compliance);
  if (failed.length === 0) return null;

  return (
    <div class="mds-cc__ps">
      <div class="mds-cc__ps-header mds-cc__ps-header--amber">{failed.length} compliance {failed.length === 1 ? 'issue' : 'issues'}</div>
      <div class="mds-cc__ps-item-detail" style={{ paddingLeft: '0' }}>{failed.join(' \u00B7 ')}</div>
    </div>
  );
}

// ── Loading / Error ──

function DetailLoading() {
  return (
    <div class="mds-cc__prev-detail-loading">
      <div class="mds-cc__spinner mds-cc__spinner--sm" />
      <span>Loading assessment detail...</span>
    </div>
  );
}

function DetailError({ message }) {
  return (
    <div class="mds-cc__prev-detail-error">
      <span>{'\u26A0'} {message}</span>
    </div>
  );
}

// ── Main Preview ──

export function AssessmentPreview({ assessment, onOpenAnalyzer, onSelectItem }) {
  const { pdpm, sectionProgress, compliance, querySummary } = assessment;
  const assessmentId = assessment.externalAssessmentId || assessment.assessmentId;
  const isEndOfStay = assessment.assessmentClass === 'end_of_stay';

  const { detailData, loading: detailLoading, error: detailError } = useAssessmentDetail(assessmentId);
  const detailPayment = detailData?.payment || pdpm?.payment;

  return (
    <div class="mds-cc__preview" onClick={(e) => e.stopPropagation()}>
      <SummaryStrip
        pdpm={pdpm}
        detailData={detailData}
        payment={detailPayment}
        sectionProgress={sectionProgress}
        compliance={compliance}
        isEndOfStay={isEndOfStay}
      />

      {detailLoading && <DetailLoading />}
      {!detailLoading && detailError && <DetailError message={detailError} />}

      {!detailLoading && detailData && (
        <>
          <RevenueSection detailData={detailData} onSelectItem={onSelectItem} />
          <DocRisksSection detailData={detailData} />
        </>
      )}

      <QueriesSection
        detailData={detailLoading ? null : detailData}
        querySummary={querySummary}
        assessmentClass={assessment.assessmentClass}
      />

      <ComplianceIssues compliance={compliance} />

      <div class="mds-cc__prev-actions">
        <button class="mds-cc__action-btn mds-cc__action-btn--primary" onClick={onOpenAnalyzer}>
          Open Full Analyzer
        </button>
        {assessmentId && (
          <button
            class="mds-cc__action-btn mds-cc__action-btn--secondary"
            onClick={() => {
              try {
                sessionStorage.setItem('super_cc_restore', JSON.stringify({
                  expandedId: assessmentId,
                  openAnalyzer: true,
                  analyzerMode: 'panel',
                  timestamp: Date.now(),
                }));
              } catch (_) {}
              location.href = `${location.origin}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${assessmentId}`;
            }}
          >
            Go to MDS {'\u2197'}
          </button>
        )}
      </div>
    </div>
  );
}
