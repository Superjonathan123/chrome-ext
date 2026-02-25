/**
 * Header showing assessment info, HIPPS display with component breakdown,
 * and summary counts.
 */
export const QueryItemsHeader = ({ assessment, summary, pdpmData }) => {
  const calc = pdpmData?.calculation;
  const hasImprovement = pdpmData?.hasImprovements &&
    pdpmData.potentialHipps &&
    pdpmData.potentialHipps !== pdpmData.currentHipps;

  // Build component-level potential changes from enhancedDetections
  const componentChanges = buildComponentChanges(pdpmData);

  return (
    <div className="query-items__header">
      <div className="query-items__header-top">
        {/* Assessment info */}
        <div className="query-items__assessment-info">
          {assessment && (
            <>
              <strong>{assessment.description || 'Assessment'}</strong>
              {assessment.ardDate && (
                <span> &middot; ARD: {formatDate(assessment.ardDate)}</span>
              )}
            </>
          )}
        </div>

        {/* HIPPS display */}
        {pdpmData && pdpmData.currentHipps && (
          <div className="query-items__hipps">
            <span className="query-items__hipps-current">{pdpmData.currentHipps}</span>
            {hasImprovement ? (
              <>
                <span className="query-items__hipps-arrow">{'\u2192'}</span>
                <span className="query-items__hipps-potential">{pdpmData.potentialHipps}</span>
              </>
            ) : (
              <span className="query-items__hipps-same">No change</span>
            )}
          </div>
        )}
      </div>

      {/* PDPM Component Breakdown */}
      {calc && (
        <div className="query-items__components">
          <ComponentPill label="PT/OT" current={calc.ptot} change={componentChanges.ptot} />
          <ComponentPill label="SLP" current={calc.slp} change={componentChanges.slp} />
          <ComponentPill label="Nursing" current={calc.nursing} change={componentChanges.nursing} />
          <ComponentPill label="NTA" current={calc.nta} change={componentChanges.nta} />
        </div>
      )}

      {/* Summary counts */}
      {summary && (
        <div className="query-items__summary">
          <div className="query-items__summary-stat">
            <span className="query-items__summary-count query-items__summary-count--query">
              {summary.needsPhysicianQuery || 0}
            </span>
            <span>Query Recommended</span>
          </div>
          <div className="query-items__summary-stat">
            <span className="query-items__summary-count query-items__summary-count--coded">
              {summary.coded || 0}
            </span>
            <span>Coded</span>
          </div>
          <div className="query-items__summary-stat">
            <span className="query-items__summary-count query-items__summary-count--review">
              {summary.needsReview || 0}
            </span>
            <span>Needs Review</span>
          </div>
        </div>
      )}
    </div>
  );
};

const ComponentPill = ({ label, current, change }) => {
  if (!current) return null;

  const hasChange = change && change.to && change.to !== current;

  return (
    <div className={`query-items__component${hasChange ? ' query-items__component--has-change' : ''}`}>
      <span className="query-items__component-label">{label}</span>
      <span className="query-items__component-value">{current}</span>
      {hasChange && (
        <>
          <span className="query-items__component-arrow">{'\u2192'}</span>
          <span className="query-items__component-new">{change.to}</span>
        </>
      )}
    </div>
  );
};

/**
 * Aggregate component-level changes from all enhancedDetections.
 * Returns the "best" potential level per component.
 */
function buildComponentChanges(pdpmData) {
  const changes = { ptot: null, slp: null, nursing: null, nta: null };
  if (!pdpmData?.enhancedDetections) return changes;

  for (const det of pdpmData.enhancedDetections) {
    if (!det.impact) continue;
    if (det.impact.ptot?.wouldChangeGroup && !changes.ptot) {
      changes.ptot = { to: det.impact.ptot.newGroup };
    }
    if (det.impact.slp?.wouldChangeGroup && !changes.slp) {
      changes.slp = { to: det.impact.slp.newGroup };
    }
    if (det.impact.nursing?.wouldChangeGroup && !changes.nursing) {
      changes.nursing = { to: det.impact.nursing.newPaymentGroup };
    }
    if (det.impact.nta?.wouldChangeLevel && !changes.nta) {
      changes.nta = { to: det.impact.nta.newLevel };
    }
  }

  return changes;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}
