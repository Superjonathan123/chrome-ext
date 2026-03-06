/**
 * StayTypeBadge — shows the stay/payer type on cert cards.
 *
 * managed_care → "Managed" (teal)
 * default      → "Med A" (blue)
 */
export function StayTypeBadge({ payerType }) {
  const isManaged = payerType === 'managed_care';
  return (
    <span class={`cert__stay-type-badge${isManaged ? ' cert__stay-type-badge--managed' : ''}`}>
      {isManaged ? 'Managed' : 'Med A'}
    </span>
  );
}
