// content/modules/care-plan-stamp/__tests__/stamp-outcome.test.js
//
// The sentence the nurse actually reads after pressing Add.
//
// It is derived entirely from the read-back, so it inherits the read-back's
// blind spots. An MDS coordinator was told "Focus added, but 1 goal and 7
// interventions did not save. Add them in PointClickCare, or try again." while
// every one of those rows was already on the chart — twice, because the same
// false zero had also triggered a repair. Both halves of that message were
// wrong, and each one cost her real work: re-adding rows that existed, then
// resolving the duplicates.
import { describe, it, expect } from 'vitest';
import { _stampOutcome } from '../CarePlanStampModal.jsx';

const verified = (over = {}) => ({
  ruleId: 'r1',
  route: 'custom',
  found: true,
  complete: false,
  blind: false,
  goalsRequested: 1,
  goalsAttached: 0,
  interventionsRequested: 7,
  interventionsAttached: 0,
  ...over,
});

describe('_stampOutcome', () => {
  it('names what fell short when the read-back could actually see the plan', () => {
    const out = _stampOutcome({ ok: false, verified: [verified()] });

    expect(out.ok).toBe(false);
    expect(out.message).toBe(
      'Focus added, but 1 goal and 7 interventions did not save. ' +
      'Add them in PointClickCare, or try again.',
    );
  });

  it('stays quiet about rows a blind read-back merely failed to count', () => {
    // Same zeroes, but the parser has declared it could not account for every
    // row — so this is "we cannot tell", not "your work was lost".
    const out = _stampOutcome({ ok: true, verified: [verified({ blind: true })] });

    expect(out).toEqual({ ok: true, message: 'Added to care plan' });
  });

  it('still reports a focus PCC genuinely refused', () => {
    const out = _stampOutcome({
      ok: false,
      verified: [verified({ found: false })],
    });

    expect(out.ok).toBe(false);
    expect(out.message).toMatch(/didn't save this focus/i);
  });

  it('reports a real shortfall alongside a blind one without inventing totals', () => {
    const out = _stampOutcome({
      ok: false,
      verified: [
        verified({ blind: true }),
        verified({ ruleId: 'r2', goalsRequested: 2, goalsAttached: 1, interventionsRequested: 3, interventionsAttached: 3 }),
      ],
    });

    // Only the legible focus contributes: 1 goal short, no interventions short.
    expect(out.message).toBe(
      'Focus added, but 1 goal did not save. Add it in PointClickCare, or try again.',
    );
  });
});
