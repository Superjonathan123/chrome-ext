/**
 * Expandable evidence section for a query item card.
 * Groups evidence by role for 'coded'/'needs_review' items,
 * shows keyFindings + queryEvidence for 'needs_physician_query' items.
 * Evidence cards are clickable — dispatches to existing vanilla evidence viewers.
 */

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

function inferSourceType(ev) {
  if (ev.sourceType) return ev.sourceType;
  const eid = ev.evidenceId || '';
  if (eid.startsWith('therapy-doc-')) return 'therapy-doc';
  if (eid.startsWith('pcc-prognote-') || eid.startsWith('patient-practnote-')) return 'progress-note';
  if (eid.startsWith('order-')) return 'order';
  if (eid.startsWith('lab-')) return 'lab-result';
  if (eid.startsWith('mar-')) return 'mar';
  if (eid.startsWith('uda-')) return 'uda';
  const name = (ev.displayName || '').toLowerCase();
  if (name.includes('therapy') || name.includes('eval') || name.includes('recert')) return 'therapy-doc';
  if (name.includes('lab')) return 'lab-result';
  if (name.includes('order')) return 'order';
  return 'document';
}

function getQuoteText(ev) {
  return ev.quoteText || ev.quote || ev.orderDescription || ev.findingText || ev.text || '';
}

function handleEvidenceClick(ev) {
  // Use the global parseEvidenceForViewer if available
  if (typeof window.parseEvidenceForViewer === 'function') {
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
}

function isViewable(ev) {
  if (typeof window.parseEvidenceForViewer === 'function') {
    const { viewerType } = window.parseEvidenceForViewer(ev);
    return !!viewerType;
  }
  return false;
}

const EvidenceCard = ({ ev }) => {
  const sourceType = inferSourceType(ev);
  const label = ev.displayName || SOURCE_TYPE_LABELS[sourceType] || 'Evidence';
  const quote = getQuoteText(ev);
  const viewable = isViewable(ev);

  return (
    <div
      className={`query-items__evidence-card${viewable ? '' : ''}`}
      onClick={viewable ? () => handleEvidenceClick(ev) : undefined}
      style={viewable ? { cursor: 'pointer' } : { cursor: 'default' }}
    >
      <span className={`query-items__evidence-type query-items__evidence-type--${sourceType}`}>
        {label}
      </span>
      <span className="query-items__evidence-text">
        {quote || 'No excerpt available'}
      </span>
      {viewable && (
        <span className="query-items__evidence-viewable" title="Click to view">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      )}
    </div>
  );
};

export const EvidenceSection = ({ item }) => {
  const { solverStatus, evidence, keyFindings, queryEvidence, recommendedIcd10 } = item;

  // For needs_physician_query: show keyFindings + queryEvidence, fall back to evidence[]
  if (solverStatus === 'needs_physician_query') {
    const hasKeyFindings = keyFindings && keyFindings.length > 0;
    const hasQueryEvidence = queryEvidence && queryEvidence.length > 0;
    const hasEvidence = evidence && evidence.length > 0;

    // If no structured query data, fall through to the general evidence grouping below
    if (hasKeyFindings || hasQueryEvidence) {
      return (
        <div className="query-items__evidence">
          {hasKeyFindings && (
            <div className="query-items__evidence-group">
              <div className="query-items__evidence-group-title">Key Findings</div>
              <ul className="query-items__key-findings">
                {keyFindings.map((finding, i) => (
                  <li key={i} className="query-items__key-finding">
                    {typeof finding === 'string' ? finding : finding.text || finding.finding || JSON.stringify(finding)}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasQueryEvidence && (
            <div className="query-items__evidence-group">
              <div className="query-items__evidence-group-title">Supporting Evidence</div>
              {queryEvidence.map((ev, i) => (
                <EvidenceCard key={i} ev={ev} />
              ))}
            </div>
          )}
          {/* Also show evidence[] if present alongside query data */}
          {hasEvidence && (
            <div className="query-items__evidence-group">
              <div className="query-items__evidence-group-title">Clinical Evidence</div>
              {evidence.map((ev, i) => (
                <EvidenceCard key={i} ev={ev} />
              ))}
            </div>
          )}
          {renderRecommendedCodes(recommendedIcd10)}
        </div>
      );
    }
    // else: fall through to general evidence grouping below
  }

  // For coded / needs_review: group evidence by evidenceRole
  if (evidence && evidence.length > 0) {
    const groups = {};
    for (const ev of evidence) {
      const role = ev.evidenceRole || 'supporting';
      if (!groups[role]) groups[role] = [];
      groups[role].push(ev);
    }

    const roleOrder = ['diagnosis', 'active_treatment', 'supporting'];
    const roleLabels = {
      diagnosis: 'Step 1: Diagnosis',
      active_treatment: 'Step 2: Active Treatment',
      supporting: 'Supporting'
    };

    return (
      <div className="query-items__evidence">
        {roleOrder.map(role => {
          const evs = groups[role];
          if (!evs || evs.length === 0) return null;
          return (
            <div key={role} className="query-items__evidence-group">
              <div className="query-items__evidence-group-title">{roleLabels[role] || role}</div>
              {evs.map((ev, i) => (
                <EvidenceCard key={i} ev={ev} />
              ))}
            </div>
          );
        })}
        {/* Show any ungrouped roles */}
        {Object.keys(groups)
          .filter(r => !roleOrder.includes(r))
          .map(role => (
            <div key={role} className="query-items__evidence-group">
              <div className="query-items__evidence-group-title">{role}</div>
              {groups[role].map((ev, i) => (
                <EvidenceCard key={i} ev={ev} />
              ))}
            </div>
          ))
        }
        {renderRecommendedCodes(recommendedIcd10)}
      </div>
    );
  }

  return (
    <div className="query-items__evidence">
      <span style={{ fontSize: '12px', color: 'var(--super-gray-500)' }}>No evidence available</span>
    </div>
  );
};

function renderRecommendedCodes(recommendedIcd10) {
  if (!recommendedIcd10 || recommendedIcd10.length === 0) return null;

  return (
    <div className="query-items__recommended-codes">
      {recommendedIcd10.map((code, i) => (
        <span key={i} className="query-items__recommended-code" title={code.description || ''}>
          {code.code || code}
        </span>
      ))}
    </div>
  );
}
