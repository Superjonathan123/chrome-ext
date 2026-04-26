import { useState, useCallback } from 'preact/hooks';
import { StatusBadge } from './StatusBadge.jsx';
import { PdpmImpactBadge } from './PdpmImpactBadge.jsx';
import { EvidenceSection } from './EvidenceSection.jsx';

/**
 * Derive a human-readable category name from the item data.
 * Falls back through several fields since the API shape varies.
 */
function getCategoryName(item) {
  return item.pdpmCategoryName
    || item.mdsItemName
    || item.kbCategory?.categoryName
    || item.categoryName
    || item.itemName
    || item.name
    || '';
}

/**
 * Count evidence items available for this item
 */
function getEvidenceCount(item) {
  if (item.solverStatus === 'needs_physician_query') {
    const qe = item.queryEvidence?.length || 0;
    const ev = item.evidence?.length || 0;
    return qe + ev;
  }
  return item.evidence?.length || 0;
}

/**
 * Single query item card — redesigned for scannability.
 *
 * Layout:
 *   [checkbox]  Category Name           MDS Code
 *               STATUS BADGE
 *               ✗ Dx: summary...
 *               ✗ Tx: summary...
 *               [PDPM badges] [Coded: X]
 *               ▸ N Supporting Evidence
 */
export const QueryItemCard = ({ item, isSelected, onToggle, onDismiss, isDismissed }) => {
  const [evidenceOpen, setEvidenceOpen] = useState(false);

  const hasExistingQuery = !!item.existingQuery;
  // Allow selecting coded items too — only block if there's already a query
  const isSelectable = !hasExistingQuery;
  const isQueryRecommended = item.solverStatus === 'needs_physician_query';

  const categoryName = getCategoryName(item);
  const evidenceCount = getEvidenceCount(item);

  const handleCheckbox = useCallback((e) => {
    e.stopPropagation();
    if (isSelectable) {
      onToggle(item.mdsItem);
    }
  }, [item.mdsItem, isSelectable, onToggle]);

  const handleDismiss = useCallback((e) => {
    e.stopPropagation();
    onDismiss(item.mdsItem);
  }, [item.mdsItem, onDismiss]);

  const toggleEvidence = useCallback((e) => {
    e.stopPropagation();
    setEvidenceOpen(prev => !prev);
  }, []);

  if (isDismissed) {
    return <div className="query-items__card query-items__card--dismissed" />;
  }

  const cardClasses = [
    'query-items__card',
    hasExistingQuery && 'query-items__card--has-query',
    isQueryRecommended && 'query-items__card--query-recommended',
    item.solverStatus === 'coded' && 'query-items__card--coded'
  ].filter(Boolean).join(' ');

  // Display code — clean up I8000 composite keys for display
  const displayCode = item.mdsItem?.startsWith('I8000:')
    ? item.mdsItem
    : item.mdsItem;

  return (
    <div className={cardClasses}>
      <div className="query-items__card-main">
        {/* Checkbox */}
        <div className="query-items__card-checkbox" onClick={handleCheckbox}>
          <input
            type="checkbox"
            checked={isSelected}
            disabled={!isSelectable}
            readOnly
          />
        </div>

        {/* Body */}
        <div className="query-items__card-body">
          {/* Row 1: Category name + MDS code */}
          <div className="query-items__card-header">
            <div className="query-items__card-title">
              {categoryName && (
                <span className="query-items__card-name">{categoryName}</span>
              )}
              <span className="query-items__card-mds-item">{displayCode}</span>
            </div>
            <div className="query-items__card-header-right">
              <StatusBadge status={item.solverStatus} />
              {/* NO_TRACK */}
              <button
                className="query-items__dismiss-btn"
                onClick={handleDismiss}
                title="Dismiss"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Row 2: Step summaries (Dx/Tx) — always visible */}
          {(item.diagnosisSummary || item.treatmentSummary) ? (
            <div className="query-items__step-lines">
              {item.diagnosisSummary && (
                <div className={`query-items__step-line query-items__step-line--${item.diagnosisPassed ? 'pass' : 'fail'}`}>
                  <span className="query-items__step-line-icon">{item.diagnosisPassed ? '\u2713' : '\u2717'}</span>
                  <span className="query-items__step-line-text">
                    <strong>Dx:</strong> {item.diagnosisSummary}
                  </span>
                </div>
              )}
              {item.treatmentSummary && (
                <div className={`query-items__step-line query-items__step-line--${item.activeStatusPassed ? 'pass' : 'fail'}`}>
                  <span className="query-items__step-line-icon">{item.activeStatusPassed ? '\u2713' : '\u2717'}</span>
                  <span className="query-items__step-line-text">
                    <strong>Tx:</strong> {item.treatmentSummary}
                  </span>
                </div>
              )}
            </div>
          ) : item.rationale ? (
            <div className="query-items__card-rationale">
              {item.rationale}
            </div>
          ) : null}

          {/* Row 3: Meta badges */}
          <div className="query-items__card-meta">
            <PdpmImpactBadge pdpmImpact={item.pdpmImpact} />
            {item.isI8000 && <span className="query-items__i8000-badge">I8000</span>}
            {item.codedOnMds && (
              <span className="query-items__coded-mds">Coded: {item.codedOnMds}</span>
            )}
            {item.existingQuery && (
              <span className={`query-items__existing-query query-items__existing-query--${item.existingQuery.status || 'pending'}`}>
                Query: {item.existingQuery.status || 'pending'}
              </span>
            )}
          </div>

          {/* Row 4: Evidence toggle */}
          {evidenceCount > 0 && (
            <button
              className="query-items__evidence-toggle"
              onClick={toggleEvidence}
              data-track="query_evidence_opened"
              data-track-prop-item-code={item.mdsItem}
              data-track-prop-evidence-type="card_summary"
            >
              <svg
                className={`query-items__evidence-toggle-icon${evidenceOpen ? ' query-items__evidence-toggle-icon--open' : ''}`}
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <span>{evidenceCount} Supporting Evidence</span>
            </button>
          )}
        </div>
      </div>

      {/* Expandable Evidence */}
      {evidenceOpen && (
        <EvidenceSection item={item} />
      )}
    </div>
  );
};
