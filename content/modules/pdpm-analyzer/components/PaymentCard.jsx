/** PaymentCard — Revenue Opportunity hero card */

function formatCurrency(val) {
  if (val == null) return '—';
  return `$${Math.round(val).toLocaleString()}`;
}

export function PaymentCard({ data }) {
  const payment = data?.payment;
  if (!payment?.isApplicable) return null;

  const ppd = payment.ppd;
  const tex = payment.texasPdpm;
  const cmi = payment.cmi;

  // Medicare PPD
  if (ppd && ppd.delta > 0) {
    const current  = ppd.current?.total ?? ppd.currentTotal ?? null;
    const potential = ppd.potential?.total ?? ppd.potentialTotal ?? null;
    const delta = ppd.delta;

    return (
      <div class="pdpm-an__payment-card">
        <div class="pdpm-an__payment-label">Revenue Opportunity</div>
        <div class="pdpm-an__payment-row">
          {current != null && <span class="pdpm-an__payment-current">{formatCurrency(current)}/day</span>}
          {current != null && potential != null && <span class="pdpm-an__payment-arrow">→</span>}
          {potential != null && <span class="pdpm-an__payment-potential">{formatCurrency(potential)}/day</span>}
          <span class="pdpm-an__payment-delta">+{formatCurrency(delta)}/day</span>
        </div>
      </div>
    );
  }

  // Texas PDPM
  if (tex && tex.delta > 0) {
    return (
      <div class="pdpm-an__payment-card">
        <div class="pdpm-an__payment-label">TX PDPM Opportunity</div>
        <div class="pdpm-an__payment-row">
          <span class="pdpm-an__payment-delta">+{formatCurrency(tex.delta)}/day</span>
        </div>
      </div>
    );
  }

  // CMI
  if (cmi && cmi.delta > 0) {
    return (
      <div class="pdpm-an__payment-card">
        <div class="pdpm-an__payment-label">CMI Opportunity</div>
        <div class="pdpm-an__payment-row">
          <span class="pdpm-an__payment-delta">+{cmi.delta.toFixed(2)} CMI</span>
        </div>
      </div>
    );
  }

  return null;
}
