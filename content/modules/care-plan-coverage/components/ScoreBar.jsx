/**
 * ScoreBar — coverage percentage with color-coded progress bar.
 */
export function ScoreBar({ score, diagnosisCovered, diagnosisTotal, orderCovered, orderTotal }) {
  const tier = score >= 80 ? 'green' : score >= 50 ? 'amber' : 'red';

  const detailParts = [];
  if (diagnosisTotal > 0) detailParts.push(`${diagnosisCovered}/${diagnosisTotal} dx`);
  if (orderTotal > 0) detailParts.push(`${orderCovered}/${orderTotal} orders`);

  return (
    <div class="cpc__score">
      <div class="cpc__score-top">
        <div class={`cpc__score-pct cpc__score-pct--${tier}`}>
          {score}<span>%</span>
        </div>
        {detailParts.length > 0 && (
          <div class="cpc__score-detail">{detailParts.join(' \u00b7 ')}</div>
        )}
      </div>
      <div class="cpc__score-track">
        <div
          class={`cpc__score-fill cpc__score-fill--${tier}`}
          style={{ width: `${Math.min(100, Math.max(0, score))}%` }}
        />
      </div>
    </div>
  );
}
