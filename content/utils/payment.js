/**
 * Shared payment utilities for the discriminated-union payment shape.
 *
 * payment.mode: 'medicare' | 'state_rate' | 'cmi' | 'not_applicable'
 * payment may also be null/undefined.
 *
 * No JSX — pure functions, importable from both Preact and vanilla files.
 */

/**
 * Returns true if the payment object represents an applicable payment
 * (i.e. not null, not mode === 'not_applicable').
 */
export function isPaymentApplicable(payment) {
  if (!payment) return false;
  if (payment.mode === 'not_applicable') return false;
  // Legacy shape fallback
  if ('isApplicable' in payment) return !!payment.isApplicable;
  return true;
}

/**
 * True for modes that represent dollar amounts (medicare, state_rate).
 */
export function isMonetaryMode(payment) {
  if (!payment) return false;
  return payment.mode === 'medicare' || payment.mode === 'state_rate';
}

/**
 * Returns a human-readable label for the payment mode.
 * "Medicare", state name from payment.stateName, or "CMI".
 */
export function getPaymentModeLabel(payment) {
  if (!payment) return '';
  switch (payment.mode) {
    case 'medicare':   return 'Medicare';
    case 'state_rate': return payment.stateName || 'State Rate';
    case 'cmi':        return 'CMI';
    default:           return '';
  }
}

/**
 * Returns the raw numeric delta for sorting/comparison.
 * Returns 0 if payment is not applicable or has no delta.
 */
export function getPaymentDeltaNumeric(payment) {
  if (!isPaymentApplicable(payment)) return 0;
  return payment.delta > 0 ? payment.delta : 0;
}

/**
 * Formats the payment delta as a short or long string.
 * format: 'short' → "+$23/d" or "+0.15 CMI"
 * format: 'long'  → "+$23/day" or "+0.15 CMI"
 * Returns null if no positive delta.
 */
export function formatPaymentDelta(payment, format = 'long') {
  if (!isPaymentApplicable(payment)) return null;
  if (!(payment.delta > 0)) return null;

  const suffix = format === 'short' ? '/d' : '/day';

  switch (payment.mode) {
    case 'medicare':
      return `+$${Math.round(payment.delta)}${suffix}`;
    case 'state_rate':
      return `+$${Math.round(payment.delta)}${suffix}`;
    case 'cmi':
      return `+${payment.delta.toFixed(2)} CMI`;
    default:
      return null;
  }
}

/**
 * Returns a structured rates object for rendering payment cards, or null.
 *
 * {
 *   current: string,         // e.g. "$540/day" or "1.234 CMI"
 *   potential: string,       // e.g. "$563/day" or "1.384 CMI"
 *   delta: string,           // e.g. "+$23/day" or "+0.15 CMI"
 *   label: string,           // "Medicare", state name, or "CMI"
 *   isEstimated: boolean,
 *   currentGroupCode?: string,   // state_rate only
 *   potentialGroupCode?: string, // state_rate only
 * }
 */
/**
 * Strips underscores from group codes: 'P_3_X' → 'P3X'
 */
function cleanGroupCode(code) {
  return code ? code.replace(/_/g, '') : null;
}

export function formatPaymentRates(payment) {
  if (!isPaymentApplicable(payment)) return null;
  if (!(payment.delta > 0)) return null;

  const label = getPaymentModeLabel(payment);
  const isEstimated = !!payment.isEstimated;

  switch (payment.mode) {
    case 'medicare': {
      const cur = payment.current?.total;
      const pot = payment.potential?.total;
      if (cur == null && pot == null) return null;
      return {
        current: cur != null ? `$${Math.round(cur).toLocaleString()}/day` : null,
        potential: pot != null ? `$${Math.round(pot).toLocaleString()}/day` : null,
        delta: `+$${Math.round(payment.delta).toLocaleString()}/day`,
        label,
        isEstimated,
      };
    }
    case 'state_rate': {
      const cur = payment.current?.rate;
      const pot = payment.potential?.rate;
      if (cur == null && pot == null) return null;
      return {
        current: cur != null ? `$${Math.round(cur).toLocaleString()}/day` : null,
        potential: pot != null ? `$${Math.round(pot).toLocaleString()}/day` : null,
        delta: `+$${Math.round(payment.delta).toLocaleString()}/day`,
        label,
        isEstimated,
        currentGroupCode: cleanGroupCode(payment.current?.groupCode),
        potentialGroupCode: cleanGroupCode(payment.potential?.groupCode),
      };
    }
    case 'cmi': {
      const cur = payment.current?.total;
      const pot = payment.potential?.total;
      if (cur == null && pot == null) return null;
      return {
        current: cur != null ? `${cur.toFixed(3)} CMI` : null,
        potential: pot != null ? `${pot.toFixed(3)} CMI` : null,
        delta: `+${payment.delta.toFixed(3)} CMI`,
        label,
        isEstimated,
      };
    }
    default:
      return null;
  }
}
