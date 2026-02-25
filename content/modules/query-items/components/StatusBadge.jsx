/**
 * Color-coded solver status badge
 * coded = green, needs_physician_query = red, needs_review = yellow
 */
export const StatusBadge = ({ status }) => {
  const labels = {
    code: 'Can Code',
    coded: 'Can Code',
    needs_physician_query: 'Query Recommended',
    needs_review: 'Needs Review'
  };

  const label = labels[status] || status;

  return (
    <span className={`query-items__status-badge query-items__status-badge--${status}`}>
      {label}
    </span>
  );
};
