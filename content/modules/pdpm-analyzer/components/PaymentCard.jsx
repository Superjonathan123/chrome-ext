/** PaymentCard — Revenue Opportunity hero card (discriminated union on payment.mode) */
import { isPaymentApplicable, formatPaymentRates, getPaymentModeLabel } from '../../../utils/payment.js';

function StateRateDetail({ payment }) {
  if (payment.mode !== 'state_rate') return null;
  const cur = payment.current || {};
  const pot = payment.potential || {};
  const meta = payment.meta || {};

  const curNursing = cur.nursingGroup;
  const potNursing = pot.nursingGroup;
  const curNta = cur.ntaTier;
  const potNta = pot.ntaTier;
  const curBims = cur.bims;

  return (
    <div class="pdpm-an__state-detail">
      {curNursing && (
        <div class="pdpm-an__state-row">
          <span class="pdpm-an__state-key">Nursing Group</span>
          <span class="pdpm-an__state-val">
            {curNursing.shortLabel || curNursing.label || curNursing.code}
            {potNursing && potNursing.code !== curNursing.code
              ? ` \u2192 ${potNursing.shortLabel || potNursing.label || potNursing.code}`
              : ''}
          </span>
        </div>
      )}
      {curNta && (
        <div class="pdpm-an__state-row">
          <span class="pdpm-an__state-key">NTA Tier</span>
          <span class="pdpm-an__state-val">
            {curNta.label || `Tier ${curNta.tier}`}
            {potNta && potNta.tier !== curNta.tier
              ? ` \u2192 ${potNta.label || `Tier ${potNta.tier}`}`
              : ''}
          </span>
        </div>
      )}
      {curBims && (
        <div class="pdpm-an__state-row">
          <span class="pdpm-an__state-key">BIMS</span>
          <span class="pdpm-an__state-val">
            {curBims.label || (curBims.eligible ? 'Eligible' : 'Not eligible')}
            {curBims.addOnRate > 0 && ` (+$${curBims.addOnRate.toFixed(2)}/day)`}
          </span>
        </div>
      )}
      {meta.description && (
        <div class="pdpm-an__state-row">
          <span class="pdpm-an__state-key">Note</span>
          <span class="pdpm-an__state-val">{meta.description}</span>
        </div>
      )}
    </div>
  );
}

export function PaymentCard({ data }) {
  const payment = data?.payment;
  if (!isPaymentApplicable(payment)) return null;

  const rates = formatPaymentRates(payment);
  if (!rates) return null;

  const label = getPaymentModeLabel(payment);
  const meta = payment.meta || {};

  return (
    <div class="pdpm-an__payment-card">
      <div class="pdpm-an__payment-label">
        Revenue Opportunity{label ? ` \u00B7 ${label}` : ''}
        {rates.isEstimated && <span class="pdpm-an__est-badge">est.</span>}
      </div>
      <div class="pdpm-an__payment-row">
        {rates.currentGroupCode && (
          <span class="pdpm-an__payment-group">{rates.currentGroupCode}</span>
        )}
        {rates.current && <span class="pdpm-an__payment-current">{rates.current}</span>}
        {rates.current && rates.potential && <span class="pdpm-an__payment-arrow">{'\u2192'}</span>}
        {rates.potentialGroupCode && (
          <span class="pdpm-an__payment-group">{rates.potentialGroupCode}</span>
        )}
        {rates.potential && <span class="pdpm-an__payment-potential">{rates.potential}</span>}
        <span class="pdpm-an__payment-delta">{rates.delta}</span>
      </div>
      {meta.disclaimer && (
        <div class="pdpm-an__payment-disclaimer">{meta.disclaimer}</div>
      )}
      <StateRateDetail payment={payment} />
    </div>
  );
}
