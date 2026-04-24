/**
 * EmptyDay — "no report for this day" empty state.
 *
 * Two variants:
 *   • variant="day" — there are reports for other days; show a "jump to last
 *     available report" button.
 *   • variant="ever" — no reports have ever been generated for this facility.
 */
import { formatFacilityDate } from '../utils/api.js';

export function EmptyDay({ variant = 'day', date, timezone, onJumpToLastAvailable }) {
  const dateLabel = date ? formatFacilityDate(date, timezone, { weekday: 'short' }) : '';

  return (
    <div class="thr__empty" role="status">
      <div class="thr__empty-icon" aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 17h6" />
          <path d="M9 13h6" />
          <path d="M16 3H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
          <path d="M9 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3" />
        </svg>
      </div>
      {variant === 'ever' ? (
        <>
          <h3 class="thr__empty-title">No 24-hour reports yet</h3>
          <p class="thr__empty-sub">
            No 24-hour reports have been generated for this facility.
          </p>
        </>
      ) : (
        <>
          <h3 class="thr__empty-title">No 24-hour report for this day</h3>
          {dateLabel && <p class="thr__empty-sub">{dateLabel}</p>}
          {onJumpToLastAvailable && (
            <button
              type="button"
              class="thr__empty-action"
              onClick={onJumpToLastAvailable}
            >
              Jump to last available report
            </button>
          )}
        </>
      )}
    </div>
  );
}
