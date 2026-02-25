/**
 * PDPM component impact badge (e.g., "NTA: B → C")
 */
export const PdpmImpactBadge = ({ pdpmImpact }) => {
  if (!pdpmImpact || !pdpmImpact.impact) return null;

  const { impact } = pdpmImpact;

  // Find components that would change
  const changes = [];
  if (impact.nta?.wouldChangeLevel) {
    changes.push({ label: 'NTA', from: impact.nta.currentLevel, to: impact.nta.newLevel });
  }
  if (impact.slp?.wouldChangeGroup) {
    changes.push({ label: 'SLP', from: impact.slp.currentGroup, to: impact.slp.newGroup });
  }
  if (impact.nursing?.wouldChangeGroup) {
    changes.push({ label: 'Nursing', from: impact.nursing.currentPaymentGroup, to: impact.nursing.newPaymentGroup });
  }
  if (impact.ptot?.wouldChangeGroup) {
    changes.push({ label: 'PT/OT', from: impact.ptot.currentGroup, to: impact.ptot.newGroup });
  }

  if (changes.length === 0) return null;

  return (
    <>
      {changes.map((change, i) => (
        <span key={i} className="query-items__pdpm-badge">
          {change.label}: {change.from || '?'}
          <span className="query-items__pdpm-arrow">{'\u2192'}</span>
          <span className="query-items__pdpm-new">{change.to || '?'}</span>
        </span>
      ))}
    </>
  );
};
