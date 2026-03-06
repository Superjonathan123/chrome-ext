/**
 * MAPayerBadge — small "MA" chip for managed care payer type.
 * Renders nothing for non-managed-care certs.
 */
export function MAPayerBadge({ payerType }) {
  if (payerType !== 'managed_care') return null;

  return <span class="cert__ma-badge">MA</span>;
}
