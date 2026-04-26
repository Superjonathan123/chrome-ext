// Thin button wrapper that emits a tracked event on click via the global
// delegated listener (content/utils/track-delegate.js). Renders a real native
// button element carrying data-track / data-track-prop-* attributes, so
// vanilla and Preact share a single tracking pathway.

export function TrackedButton({
  track: eventName,
  trackProps = {},
  children,
  ...rest
}) {
  const dataAttrs = {};
  for (const [key, value] of Object.entries(trackProps)) {
    if (value === null || value === undefined) continue;
    dataAttrs[`data-track-prop-${key.replace(/_/g, '-')}`] = String(value);
  }
  return (
    <button data-track={eventName} {...dataAttrs} {...rest}>
      {children}
    </button>
  );
}
