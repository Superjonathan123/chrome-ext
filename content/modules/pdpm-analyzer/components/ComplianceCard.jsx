/** ComplianceCard — shows all compliance checks with pass/fail icons */

const CHECK_ORDER = ['bims', 'phq9', 'gg', 'orders', 'therapyDocs'];
const CHECK_LABELS = { bims: 'BIMS', phq9: 'PHQ-9', gg: 'GG', orders: 'Orders', therapyDocs: 'Therapy' };

function ComplianceItem({ checkKey, check }) {
  const passed = check?.status === 'passed';
  return (
    <div class={`pdpm-an__compliance-item${passed ? ' pdpm-an__compliance-item--pass' : ' pdpm-an__compliance-item--fail'}`}>
      <span class="pdpm-an__compliance-icon">{passed ? '✓' : '✗'}</span>
      <span class="pdpm-an__compliance-label">{CHECK_LABELS[checkKey] || checkKey}</span>
      {!passed && check?.message && (
        <span class="pdpm-an__compliance-msg">{check.message}</span>
      )}
    </div>
  );
}

export function ComplianceCard({ data }) {
  const compliance = data?.compliance || {};
  const checks = compliance.checks || {};
  const passed = compliance.summary?.passed ?? 0;
  const total = compliance.summary?.total ?? CHECK_ORDER.length;

  return (
    <div class={`pdpm-an__card${passed === total ? ' pdpm-an__card--success' : ' pdpm-an__card--warning'}`}>
      <div class="pdpm-an__card-header">
        <span class="pdpm-an__card-icon">✓</span>
        <span class="pdpm-an__card-title">Compliance</span>
        <span class="pdpm-an__card-badge">{passed}/{total} passed</span>
      </div>
      <div class="pdpm-an__compliance-list">
        {CHECK_ORDER.map(key => (
          <ComplianceItem key={key} checkKey={key} check={checks[key]} />
        ))}
      </div>
    </div>
  );
}
