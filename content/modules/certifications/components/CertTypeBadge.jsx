/**
 * CertTypeBadge — colored pill indicating certification type.
 *
 * initial       → blue  "Initial"
 * day_14_recert → purple "Day 14"
 * day_30_recert → purple "Day 30"
 */

const TYPE_CONFIG = {
  initial:       { label: 'Initial', cls: 'cert__type-badge--initial' },
  day_14_recert: { label: 'Day 14',  cls: 'cert__type-badge--recert' },
  day_30_recert: { label: 'Day 30',  cls: 'cert__type-badge--recert' },
};

export function CertTypeBadge({ type }) {
  const config = TYPE_CONFIG[type];
  if (!config) return null;

  return (
    <span class={`cert__type-badge ${config.cls}`}>
      {config.label}
    </span>
  );
}
