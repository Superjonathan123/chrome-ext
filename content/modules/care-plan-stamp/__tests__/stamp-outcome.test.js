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
import { _stampOutcome, _libraryPickToFocus, _hasLibraryStdId } from '../CarePlanStampModal.jsx';

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

describe('library pick routing', () => {
  // "Add from PCC library" is the button an MDS coordinator uses for the focuses
  // her facility requires on the Kardex. PCC only re-applies the library's own
  // Kardex category and positions when a focus is written through the library
  // WIZARD — and orchestrateStamp chooses that path via isLibraryFocus(), which
  // tests `libraryStdId`.
  //
  // The pick carries the std id as `_libraryStdNeedId` (a UI field, used for the
  // remove chip and the label) and never sets `libraryStdId`. So every focus
  // added this way is written through the CUSTOM endpoints and cannot reach the
  // Kardex, whatever the library says.
  //
  // These tests pin that as the CURRENT behaviour so the reported `routed_as`
  // is derived, not asserted. When the routing is fixed, the first one fails and
  // tells you to update it — which is the point.
  const pick = {
    stdNeedId: '1801',
    focusText: 'Res has/has potential for impairment of skin integrity',
    label: 'skin integrity',
    goals: [{ description: 'goal' }],
    interventions: [{ description: 'intervention', positions: [9897] }],
  };

  it('carries the std id only in a UI field, so it routes as custom today', () => {
    const focus = _libraryPickToFocus(pick);

    expect(focus._libraryStdNeedId).toBe('1801');
    expect(focus.libraryStdId).toBeUndefined();
    expect(_hasLibraryStdId(focus)).toBe(false); // → custom endpoints → no Kardex
  });

  it('would report library routing the moment the field is populated', () => {
    const focus = { ..._libraryPickToFocus(pick), libraryStdId: '1801' };

    expect(_hasLibraryStdId(focus)).toBe(true);
  });

  it('treats the -1 sentinel and blanks as not-library', () => {
    for (const id of ['-1', '', null, undefined]) {
      expect(_hasLibraryStdId({ libraryStdId: id })).toBe(false);
    }
  });
});
