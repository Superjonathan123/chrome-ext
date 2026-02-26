/** HippsDisplay — shows current → potential HIPPS codes with improvement arrow */

export function HippsDisplay({ data }) {
  const summary = data?.summary || {};
  const calculation = data?.calculation || {};

  const current = summary.currentHipps || calculation.hippsCode || '?????';
  const potential = summary.potentialHippsIfCoded;
  const hasImprovement = summary.hasImprovements && potential && potential !== current;

  return (
    <div class="pdpm-an__hipps">
      <div class="pdpm-an__hipps-row">
        <div class="pdpm-an__hipps-block">
          <div class="pdpm-an__hipps-label">Current HIPPS</div>
          <div class="pdpm-an__hipps-code">{current}</div>
        </div>
        {hasImprovement && (
          <>
            <div class="pdpm-an__hipps-arrow">→</div>
            <div class="pdpm-an__hipps-block pdpm-an__hipps-block--potential">
              <div class="pdpm-an__hipps-label">Potential</div>
              <div class="pdpm-an__hipps-code pdpm-an__hipps-code--potential">{potential}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
