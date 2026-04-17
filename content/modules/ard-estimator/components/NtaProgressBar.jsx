/**
 * NtaProgressBar — segmented bar showing NTA tier position.
 * Left = lowest (NF, 0 pts), Right = highest (NA, 12+ pts).
 * Bar fills left-to-right as points increase.
 * Ghost extension shows potential if queries confirmed.
 */

// Ordered left-to-right: lowest tier first (NF = 0 pts) → highest last (NA = 12+)
const NTA_TIERS = [
  { level: 'NF', min: 0, max: 0 },
  { level: 'NE', min: 1, max: 2 },
  { level: 'ND', min: 3, max: 7 },
  { level: 'NC', min: 8, max: 11 },
  { level: 'NB', min: 12, max: 15 },
  { level: 'NA', min: 16, max: 20 },
];

const MAX_DISPLAY = 20;

function getTierForPoints(pts) {
  for (const tier of NTA_TIERS) {
    if (pts >= tier.min && pts <= tier.max) return tier;
  }
  return NTA_TIERS[NTA_TIERS.length - 1];
}

export function NtaProgressBar({ currentPoints, potentialPoints }) {
  if (currentPoints == null) return null;

  const hasPotential = potentialPoints != null && potentialPoints > currentPoints;
  const currentPct = Math.min((currentPoints / MAX_DISPLAY) * 100, 100);
  const potentialPct = hasPotential ? Math.min((potentialPoints / MAX_DISPLAY) * 100, 100) : 0;
  const currentTier = getTierForPoints(currentPoints);
  const potentialTier = hasPotential ? getTierForPoints(potentialPoints) : null;

  return (
    <div className="ard-est__nta-bar">
      <div className="ard-est__nta-track">
        {/* Tier segments — NF (left/low) → NA (right/high) */}
        {NTA_TIERS.map(tier => {
          const width = ((tier.max - tier.min + 1) / (MAX_DISPLAY + 1)) * 100;
          return (
            <div
              key={tier.level}
              className={`ard-est__nta-seg${tier.level === currentTier.level ? ' ard-est__nta-seg--current' : ''}`}
              style={{ width: `${width}%` }}
            >
              <span className="ard-est__nta-seg-label">{tier.level}</span>
            </div>
          );
        })}

        {/* Current fill overlay */}
        <div className="ard-est__nta-fill" style={{ width: `${currentPct}%` }} />

        {/* Potential ghost fill */}
        {hasPotential && (
          <div
            className="ard-est__nta-fill ard-est__nta-fill--ghost"
            style={{ left: `${currentPct}%`, width: `${potentialPct - currentPct}%` }}
          />
        )}
      </div>

      {/* Legend */}
      <div className="ard-est__nta-legend">
        <span>{currentPoints} pts ({currentTier.level})</span>
        {hasPotential && (
          <span className="ard-est__nta-legend-potential">
            potential {potentialPoints} pts ({potentialTier.level}) if queries confirmed
          </span>
        )}
      </div>
    </div>
  );
}
