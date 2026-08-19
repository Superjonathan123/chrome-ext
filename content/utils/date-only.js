/**
 * Timezone-safe handling for date-only values.
 *
 * Calendar dates — ARDs, due dates, deadlines — come off Postgres `date`
 * columns and reach us as bare `YYYY-MM-DD` strings: no time, no zone.
 * `new Date('2026-08-09')` parses that as UTC *midnight*, so formatting it in
 * any US timezone renders **Aug 8**. That is how every ARD in the MDS Command
 * Center came to read a day earlier than PCC.
 *
 * Route date-only values through `parseDateOnly` so they land on LOCAL midnight
 * and the calendar day survives both formatting and day arithmetic.
 *
 * These are for values that are genuinely date-only. A real instant (an event
 * timestamp) should keep using `new Date(...)` — its zone shift is correct.
 *
 * No JSX — pure functions, importable from both Preact and vanilla files.
 */

/**
 * Coerce a date-only value to a Date at local midnight.
 *
 * Accepts `YYYY-MM-DD`, a fuller ISO string whose leading date is the calendar
 * day we want (`2026-08-09T00:00:00.000Z`), or a Date. Returns null if the
 * value is empty or unparseable.
 */
export function parseDateOnly(value) {
  if (!value) return null;
  if (value instanceof Date) {
    return isNaN(value) ? null : new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }
  if (typeof value !== 'string') return null;

  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);

  // Non-ISO shapes (e.g. PCC's "8/9/2026") — the platform parser reads these as
  // local time already, so no shift to undo.
  const d = new Date(value);
  return isNaN(d) ? null : new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/** Date-only value -> "Aug 9". Falls back to the raw string when unparseable. */
export function formatShortDate(value) {
  const d = parseDateOnly(value);
  if (!d) return typeof value === 'string' ? value : '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/** Date-only value -> "8/9/2026". Falls back to the raw string when unparseable. */
export function formatMDY(value) {
  const d = parseDateOnly(value);
  if (!d) return typeof value === 'string' ? value : '';
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

/**
 * Add whole calendar days. `setDate` keeps the wall-clock day correct across
 * DST boundaries, where adding 86400000ms would not.
 */
export function addDays(date, n) {
  const out = new Date(date);
  out.setDate(out.getDate() + n);
  return out;
}

/** Today at local midnight — the correct comparand for a `parseDateOnly` result. */
export function todayDateOnly() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Whole days between two date-only values (b - a). Null if either is unparseable. */
export function daysBetween(a, b) {
  const from = parseDateOnly(a);
  const to = parseDateOnly(b);
  if (!from || !to) return null;
  return Math.round((to - from) / 86400000);
}
