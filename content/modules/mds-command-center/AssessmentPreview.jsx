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

// Plain-English impact summary — one short phrase per item.
// Replaces the technical "NTA: NE → ND" / "SLP: SA → SD" notation with
// "raises nursing payment" / "raises speech therapy" etc.
function plainImpact(d) {
  const parts = [];
  if (d.impact?.nursing?.wouldChangeGroup) parts.push('raises nursing');
  if (d.impact?.ptot?.wouldChangeGroup) parts.push('raises PT/OT');
  if (d.impact?.slp?.wouldChangeGroup) parts.push('raises speech therapy');
  if (d.impact?.nta?.wouldChangeLevel) parts.push('raises NTA tier');
  if (parts.length === 0) return '';
  return parts.join(' \u00B7 ');
}

function plainQueryImpact(q) {
  const ci = q.pdpmImpact?.componentImpacts;
  if (!ci) return '';
  const parts = [];
  if (ci.nursing?.wouldChangeGroup) parts.push('raises nursing');
  if (ci.ptot?.wouldChangeGroup) parts.push('raises PT/OT');
  if (ci.slp?.wouldChangeGroup) parts.push('raises speech therapy');
  if (ci.nta?.wouldChangeLevel) parts.push('raises NTA tier');
  if (parts.length === 0) return '';
  return parts.join(' \u00B7 ');
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
  const drivers = detections.filter(
    d => d.wouldChangeHipps && d.solverStatus !== 'query_sent' && d.solverStatus !== 'awaiting_response' && d.solverStatus !== 'dont_code'
  );
  if (drivers.length === 0) return null;

  return (
    <div class="mds-cc__ps">
      <div class="mds-cc__ps-header">
        {drivers.length} revenue {drivers.length === 1 ? 'opportunity' : 'opportunities'}
      </div>
      <div class="mds-cc__ps-items">
        {drivers.map((d, i) => {
          const impactText = plainImpact(d);
          return (
            <div
              key={i}
              class="mds-cc__ps-item mds-cc__ps-item--clickable"
              onClick={() => onSelectItem(d)}
              role="button"
              title="View evidence"
            >
              <span class="mds-cc__ps-item-name">{d.itemName}</span>
              {impactText && <span class="mds-cc__ps-item-impact">&mdash; {impactText}</span>}
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

// ── Blockers (combined "what needs attention") ──
//
// Shows everything actionable in one place: missing UDAs, pending queries,
// failed compliance checks, and doc risks. Rendered at the top of the
// assessment detail view so the coordinator sees "what needs to happen"
// before anything else.

const UDA_OWNER = {
  bims: 'nursing or social services',
  phq9: 'nursing',
  gg: 'therapy',
};

const UDA_LABEL = {
  bims: 'BIMS',
  phq9: 'PHQ-9',
  gg: 'GG',
};

function getMissingUdas(udaSummary) {
  if (!udaSummary) return [];
  const out = [];
  for (const key of ['bims', 'phq9', 'gg']) {
    const status = udaSummary[key];
    if (status === 'missing' || status === 'not_created') {
      out.push({ key, label: UDA_LABEL[key], owner: UDA_OWNER[key], severity: 'missing' });
    } else if (status === 'near_miss' || status === 'out_of_range') {
      out.push({ key, label: UDA_LABEL[key], owner: UDA_OWNER[key], severity: 'out_of_range' });
    }
  }
  return out;
}

function BlockersSection({ assessment, detailData }) {
  const missingUdas = getMissingUdas(assessment.udaSummary);
  const failedChecks = getFailedChecks(assessment.compliance);

  const pendingQueries = (detailData?.outstandingQueries || []).filter(
    q => q.status === 'sent' || q.status === 'pending' || q.status === 'awaiting_response'
  );

  const docRisks = (detailData?.enhancedDetections || []).filter(
    d => d.solverStatus === 'dont_code' && (d.diagnosisPassed === false || d.activeStatusPassed === false)
  );

  const hasAnything = missingUdas.length > 0 || failedChecks.length > 0 || pendingQueries.length > 0 || docRisks.length > 0;
  if (!hasAnything) return null;

  const totalCount = missingUdas.length + failedChecks.length + pendingQueries.length + docRisks.length;

  return (
    <div class="mds-cc__blockers">
      <div class="mds-cc__blockers-header">
        {'\u26A0'} {totalCount} {totalCount === 1 ? 'blocker' : 'blockers'}
      </div>

      {missingUdas.length > 0 && (
        <div class="mds-cc__blockers-group">
          {missingUdas.map(u => (
            <div key={u.key} class="mds-cc__blocker mds-cc__blocker--uda">
              <span class="mds-cc__blocker-label">{u.label}</span>
              <span class="mds-cc__blocker-status">
                {u.severity === 'missing' ? 'Not completed' : 'Outside window'}
              </span>
              <span class="mds-cc__blocker-owner">{'\u2192'} {u.owner}</span>
            </div>
          ))}
        </div>
      )}

      {pendingQueries.length > 0 && (
        <div class="mds-cc__blockers-group">
          {pendingQueries.map((q, i) => (
            <div key={i} class="mds-cc__blocker mds-cc__blocker--query">
              <span class="mds-cc__blocker-label">{q.mdsItem || 'Query'}: {q.mdsItemName}</span>
              <span class="mds-cc__blocker-status">{relativeDate(q.sentAt)}</span>
            </div>
          ))}
        </div>
      )}

      {docRisks.length > 0 && (
        <div class="mds-cc__blockers-group">
          {docRisks.map((d, i) => {
            const code = d.mdsItem?.startsWith('I8000:') ? 'I8000' : d.mdsItem;
            const reasons = [];
            if (d.diagnosisPassed === false) reasons.push('no dx');
            if (d.activeStatusPassed === false) reasons.push('no active tx');
            return (
              <div key={i} class="mds-cc__blocker mds-cc__blocker--risk">
                <span class="mds-cc__blocker-label">{code}: {d.itemName}</span>
                <span class="mds-cc__blocker-status">{reasons.join(' \u00B7 ')}</span>
              </div>
            );
          })}
        </div>
      )}

      {failedChecks.length > 0 && (
        <div class="mds-cc__blockers-group">
          {failedChecks.map((msg, i) => (
            <div key={i} class="mds-cc__blocker mds-cc__blocker--compliance">
              <span class="mds-cc__blocker-label">{msg}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Preview ──

export function AssessmentPreview({ assessment, onOpenAnalyzer, onSelectItem }) {
  const { pdpm, sectionProgress, compliance } = assessment;
  const assessmentId = assessment.externalAssessmentId || assessment.assessmentId;
  const isEndOfStay = assessment.assessmentClass === 'end_of_stay';

  const { detailData, loading: detailLoading, error: detailError } = useAssessmentDetail(assessmentId);
  const detailPayment = detailData?.payment || pdpm?.payment;

  return (
    <div class="mds-cc__preview" onClick={(e) => e.stopPropagation()}>
      {/* Blockers first — what needs attention */}
      <BlockersSection assessment={assessment} detailData={detailData} />

      {/* Progress — section + summary */}
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

      {/* Revenue — only if there's an opportunity */}
      {!detailLoading && detailData && (
        <RevenueSection detailData={detailData} onSelectItem={onSelectItem} />
      )}

      <div class="mds-cc__prev-actions">
        <button data-track="mds_cc_item_actioned" data-track-prop-action="open_full_analyzer" class="mds-cc__action-btn mds-cc__action-btn--primary" onClick={onOpenAnalyzer}>
          Open Full Analyzer
        </button>
        {assessmentId && (
          <button
            data-track="mds_cc_item_actioned" data-track-prop-action="go_to_mds_in_pcc"
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
