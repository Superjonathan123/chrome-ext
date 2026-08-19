import { describe, it, expect } from 'vitest';
import { computeArdContext } from '../AssessmentRow.jsx';

/**
 * ARDs arrive from the backend as bare `YYYY-MM-DD` (Postgres `date` column,
 * passed through untouched). `new Date('2026-08-09')` parses that as UTC
 * midnight, so formatting it anywhere west of Greenwich prints Aug 8 — every
 * ARD in the Command Center reads one day early.
 *
 * vitest.config.js pins TZ to America/Los_Angeles so these assertions are real.
 * The two dates below are the ones WeCare reported on 2026-08-18 (Heritage
 * H1860 and 814081592).
 */
describe('computeArdContext', () => {
  const DEADLINES = { urgency: 'on_track', completionDaysRemaining: 5 };

  it('renders the ARD on its own calendar day, not the day before', () => {
    expect(computeArdContext('2026-08-09', DEADLINES).dateText).toBe('Aug 9');
    expect(computeArdContext('2026-08-04', DEADLINES).dateText).toBe('Aug 4');
  });

  it('renders the completion deadline as ARD + 14 calendar days', () => {
    expect(computeArdContext('2026-08-09', DEADLINES).completionText).toBe('Aug 23');
  });

  it('keeps calendar arithmetic intact across a DST boundary', () => {
    // DST ends 2026-11-01 in the US; ARD + 14 must still be Nov 15, not Nov 14.
    expect(computeArdContext('2026-11-01', DEADLINES).dateText).toBe('Nov 1');
    expect(computeArdContext('2026-11-01', DEADLINES).completionText).toBe('Nov 15');
  });

  it('tolerates an ARD serialized as a UTC-midnight timestamp', () => {
    // Defensive: a raw-SQL path can hand back a Date, which serializes to
    // "2026-08-09T00:00:00.000Z". The calendar day is still Aug 9.
    expect(computeArdContext('2026-08-09T00:00:00.000Z', DEADLINES).dateText).toBe('Aug 9');
  });

  it('computes the local fallback countdown when the backend omits it', () => {
    // No completionDaysRemaining → falls back to (ARD + 14) - today. Both sides
    // must be local midnight or the day count is off by one.
    const today = new Date();
    const ard = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const iso = `${ard.getFullYear()}-${String(ard.getMonth() + 1).padStart(2, '0')}-${String(ard.getDate()).padStart(2, '0')}`;

    const ctx = computeArdContext(iso, { urgency: 'on_track' });
    expect(ctx.deadlineText).toBe('14d left');
  });

  it('returns empty context for a missing or unparseable ARD', () => {
    expect(computeArdContext(null, DEADLINES).cls).toBe('na');
    expect(computeArdContext('not-a-date', DEADLINES).cls).toBe('na');
  });
});
