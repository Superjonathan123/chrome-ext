import { StatusBadge } from './StatusBadge.jsx';
import { PdpmImpactBadge } from './PdpmImpactBadge.jsx';

/**
 * Get displayable quote from evidence object
 */
function getQuoteText(ev) {
  return ev.quoteText || ev.quote || ev.orderDescription || ev.findingText || ev.text || '';
}

/**
 * Infer evidence source type from available fields
 */
function inferSourceType(ev) {
  if (ev.sourceType) return ev.sourceType;
  const eid = ev.evidenceId || '';
  if (eid.startsWith('therapy-doc-')) return 'therapy-doc';
  if (eid.startsWith('pcc-prognote-') || eid.startsWith('patient-practnote-')) return 'progress-note';
  if (eid.startsWith('order-')) return 'order';
  if (eid.startsWith('lab-')) return 'lab-result';
  if (eid.startsWith('mar-')) return 'mar';
  if (eid.startsWith('uda-')) return 'uda';
  // Check ev.type (queryEvidence format)
  const evType = ev.type || '';
  if (evType === 'clinical_note') return 'progress-note';
  if (evType === 'therapy_document') return 'therapy-doc';
  if (evType === 'order') return 'order';
  if (evType === 'lab_result') return 'lab-result';
  if (evType === 'document') return 'document';
  const name = (ev.displayName || '').toLowerCase();
  if (name.includes('therapy') || name.includes('eval')) return 'therapy-doc';
  if (name.includes('lab')) return 'lab-result';
  if (name.includes('order')) return 'order';
  return 'document';
}

const SOURCE_TYPE_LABELS = {
  'progress-note': 'Progress Note',
  'therapy-doc': 'Therapy Doc',
  'order': 'Order',
  'lab-result': 'Lab Result',
  'nursing-note': 'Nursing Note',
  'vital-signs': 'Vitals',
  'mar': 'MAR',
  'uda': 'Assessment',
  'document': 'Document'
};

/**
 * Check if an evidence item can be opened in a viewer
 */
function isViewable(ev) {
  if (typeof window.parseEvidenceForViewer === 'function') {
    const { viewerType } = window.parseEvidenceForViewer(ev);
    return !!viewerType;
  }
  return false;
}

/**
 * Open the appropriate viewer for an evidence item
 */
function openEvidenceViewer(ev) {
  if (typeof window.parseEvidenceForViewer !== 'function') return;
  const { viewerType, id } = window.parseEvidenceForViewer(ev);
  if (!viewerType || !id) return;

  const quote = getQuoteText(ev);
  const wordBlocks = ev.wordBlocks || null;

  if (viewerType === 'clinical-note' && typeof window.showClinicalNoteModal === 'function') {
    window.showClinicalNoteModal(id);
  } else if (viewerType === 'therapy-document' && typeof window.showTherapyDocModal === 'function') {
    window.showTherapyDocModal(id, quote);
  } else if (viewerType === 'document' && typeof window.showDocumentModal === 'function') {
    window.showDocumentModal(id, wordBlocks);
  } else if (viewerType === 'uda' && typeof window.showUdaModal === 'function') {
    window.showUdaModal(id, quote, ev.patientId || null);
  }
}

/**
 * Single evidence card in the detail panel
 */
const EvidenceCard = ({ ev }) => {
  const sourceType = inferSourceType(ev);
  const label = ev.displayName || SOURCE_TYPE_LABELS[sourceType] || 'Evidence';
  const quote = getQuoteText(ev);
  const viewable = isViewable(ev);
  const date = ev.date || ev.serviceDate || '';

  return (
    <div
      className={`qi-detail__evidence-card${viewable ? ' qi-detail__evidence-card--viewable' : ''}`}
      onClick={viewable ? () => openEvidenceViewer(ev) : undefined}
    >
      <div className="qi-detail__evidence-card-header">
        <span className={`qi-detail__evidence-type qi-detail__evidence-type--${sourceType}`}>
          {label}
        </span>
        {date && <span className="qi-detail__evidence-date">{date}</span>}
        {viewable && (
          <span className="qi-detail__evidence-view-link">
            View
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        )}
      </div>
      {quote && (
        <div className="qi-detail__evidence-quote">{quote}</div>
      )}
      {ev.rationale && (
        <div className="qi-detail__evidence-rationale">{ev.rationale}</div>
      )}
    </div>
  );
};

/**
 * Right panel: full evidence detail for the selected item.
 * Shows item header, step summaries, key findings, and evidence cards.
 */
export const EvidenceDetailPanel = ({ item }) => {
  if (!item) {
    return (
      <div className="qi-detail qi-detail--empty">
        <div className="qi-detail__empty-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </div>
        <div className="qi-detail__empty-text">Select an item to view evidence</div>
      </div>
    );
  }

  const name = item.pdpmCategoryName || item.mdsItemName || item.mdsItem;
  const isQueryRecommended = item.solverStatus === 'needs_physician_query';

  // Gather all evidence
  const queryEvidence = item.queryEvidence || [];
  const generalEvidence = item.evidence || [];

  // Group general evidence by role
  const evidenceByRole = {};
  for (const ev of generalEvidence) {
    const role = ev.evidenceRole || 'supporting';
    if (!evidenceByRole[role]) evidenceByRole[role] = [];
    evidenceByRole[role].push(ev);
  }

  const roleLabels = {
    diagnosis: 'Step 1: Diagnosis',
    active_treatment: 'Step 2: Active Treatment',
    supporting: 'Supporting Evidence'
  };
  const roleOrder = ['diagnosis', 'active_treatment', 'supporting'];

  return (
    <div className="qi-detail">
      {/* Header */}
      <div className="qi-detail__header">
        <div className="qi-detail__header-top">
          <h2 className="qi-detail__name">{name}</h2>
          <StatusBadge status={item.solverStatus} />
        </div>
        <div className="qi-detail__header-meta">
          <span className="qi-detail__code">{item.mdsItem}</span>
          {item.pdpmComponent && (
            <span className="qi-detail__component">{item.pdpmComponent}</span>
          )}
          <PdpmImpactBadge pdpmImpact={item.pdpmImpact} />
          {item.codedOnMds && (
            <span className="qi-detail__coded-badge">On MDS</span>
          )}
        </div>
      </div>

      {/* Scrollable content */}
      <div className="qi-detail__content">
        {/* Step summaries */}
        {(item.diagnosisSummary || item.treatmentSummary) && (
          <div className="qi-detail__steps">
            {item.diagnosisSummary && (
              <div className={`qi-detail__step qi-detail__step--${item.diagnosisPassed ? 'pass' : 'fail'}`}>
                <span className="qi-detail__step-icon">{item.diagnosisPassed ? '\u2713' : '\u2717'}</span>
                <div className="qi-detail__step-body">
                  <div className="qi-detail__step-label">Step 1: Diagnosis</div>
                  <div className="qi-detail__step-text">{item.diagnosisSummary}</div>
                </div>
              </div>
            )}
            {item.treatmentSummary && (
              <div className={`qi-detail__step qi-detail__step--${item.activeStatusPassed ? 'pass' : 'fail'}`}>
                <span className="qi-detail__step-icon">{item.activeStatusPassed ? '\u2713' : '\u2717'}</span>
                <div className="qi-detail__step-body">
                  <div className="qi-detail__step-label">Step 2: Active Treatment</div>
                  <div className="qi-detail__step-text">{item.treatmentSummary}</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Rationale (for query-recommended items without step summaries) */}
        {isQueryRecommended && !item.diagnosisSummary && item.rationale && (
          <div className="qi-detail__rationale">
            <div className="qi-detail__section-label">Rationale</div>
            <p>{item.rationale}</p>
          </div>
        )}

        {/* Key findings */}
        {item.keyFindings && item.keyFindings.length > 0 && (
          <div className="qi-detail__findings">
            <div className="qi-detail__section-label">Key Findings</div>
            <ul className="qi-detail__findings-list">
              {item.keyFindings.map((finding, i) => (
                <li key={i}>
                  {typeof finding === 'string' ? finding : finding.text || finding.finding || JSON.stringify(finding)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Query Evidence (for needs_physician_query items) */}
        {queryEvidence.length > 0 && (
          <div className="qi-detail__evidence-section">
            <div className="qi-detail__section-label">
              Query Evidence
              <span className="qi-detail__section-count">{queryEvidence.length}</span>
            </div>
            {queryEvidence.map((ev, i) => (
              <EvidenceCard key={i} ev={ev} />
            ))}
          </div>
        )}

        {/* General evidence grouped by role */}
        {generalEvidence.length > 0 && (
          <div className="qi-detail__evidence-section">
            {roleOrder.map(role => {
              const evs = evidenceByRole[role];
              if (!evs || evs.length === 0) return null;
              return (
                <div key={role} className="qi-detail__evidence-group">
                  <div className="qi-detail__section-label">
                    {roleLabels[role] || role}
                    <span className="qi-detail__section-count">{evs.length}</span>
                  </div>
                  {evs.map((ev, i) => (
                    <EvidenceCard key={i} ev={ev} />
                  ))}
                </div>
              );
            })}
            {/* Ungrouped roles */}
            {Object.keys(evidenceByRole)
              .filter(r => !roleOrder.includes(r))
              .map(role => (
                <div key={role} className="qi-detail__evidence-group">
                  <div className="qi-detail__section-label">{role}</div>
                  {evidenceByRole[role].map((ev, i) => (
                    <EvidenceCard key={i} ev={ev} />
                  ))}
                </div>
              ))
            }
          </div>
        )}

        {/* Recommended ICD-10 codes */}
        {item.recommendedIcd10 && item.recommendedIcd10.length > 0 && (
          <div className="qi-detail__icd10-section">
            <div className="qi-detail__section-label">Suggested ICD-10 Codes</div>
            <div className="qi-detail__icd10-codes">
              {item.recommendedIcd10.map((code, i) => (
                <span key={i} className="qi-detail__icd10-code" title={code.description || ''}>
                  {code.code || code}
                  {code.description && <span className="qi-detail__icd10-desc">{code.description}</span>}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
