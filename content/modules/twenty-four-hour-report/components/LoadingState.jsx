/**
 * LoadingState — shimmer skeleton shown while the current day is loading.
 * Kept inside the body only (header + severity strip render live around it
 * once the list fetch returns).
 */
export function LoadingState() {
  return (
    <div class="thr__skeleton" aria-busy="true" aria-label="Loading">
      {[0, 1, 2, 3, 4, 5].map(i => (
        <div key={i} class="thr__skeleton-row">
          <span class="thr__skeleton-bar" />
          <div class="thr__skeleton-body">
            <span class="thr__skeleton-line thr__skeleton-line--short" />
            <span class="thr__skeleton-line thr__skeleton-line--long" />
          </div>
        </div>
      ))}
    </div>
  );
}
