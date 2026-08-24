import { describe, it, expect } from 'vitest';
import {
  applyDeclineFilters,
  countByRunway,
  formatObraChip,
  formatTherapyChip,
  payerOptions,
  EMPTY_FILTERS,
  UNKNOWN_PAYER,
} from '../gg-decline-view.js';

/**
 * Mirrors web/components/gg-decline/gg-decline-view.test.ts so the two surfaces
 * cannot drift on the claims they make. The chip text is a clinical assertion:
 * "ARD 16d" means PCC really has that date scheduled, "Due 34d" is our computed
 * CMS ceiling that the facility may beat by weeks.
 */
const row = (over = {}) => ({
  patientId: 'p1',
  patientName: 'Doe, Jane',
  locationId: 'l1',
  locationName: 'Test',
  declines: [],
  baselines: [],
  hasDecline: true,
  overallSeverity: 'moderate',
  stayType: 'long',
  payerClass: 'Medicaid',
  runway: 'act_now',
  ...over,
});

describe('formatObraChip', () => {
  it('renders nothing when no OBRA could be predicted', () => {
    expect(formatObraChip(null)).toBeNull();
    expect(formatObraChip(undefined)).toBeNull();
  });

  it('says ARD when the assessment is already open in PCC', () => {
    expect(
      formatObraChip({ type: 'quarterly', dueDate: '2026-09-09', daysUntil: 16, isOpened: true, actualArd: '2026-09-02' }).label
    ).toBe('ARD 16d');
  });

  it('says Due when the date is our computed ceiling', () => {
    expect(formatObraChip({ type: 'quarterly', dueDate: '2026-09-27', daysUntil: 34, isOpened: false }).label).toBe('Due 34d');
  });

  it('never says ARD for an assessment nobody has opened', () => {
    expect(
      formatObraChip({ type: 'quarterly', dueDate: '2026-09-27', daysUntil: 34, isOpened: false }).label
    ).not.toContain('ARD');
  });

  it('reads as overdue rather than as negative days', () => {
    const chip = formatObraChip({ type: 'quarterly', dueDate: '2026-08-10', daysUntil: -14, isOpened: false });
    expect(chip.label).toBe('Due 14d ago');
    expect(chip.tone).toBe('rose');
  });

  it.each([
    [-1, 'rose'],
    [7, 'rose'],
    [8, 'amber'],
    [21, 'amber'],
    [22, 'slate'],
    [90, 'slate'],
  ])('tones %i days as %s', (daysUntil, tone) => {
    expect(formatObraChip({ type: 'quarterly', dueDate: '2026-09-09', daysUntil, isOpened: false }).tone).toBe(tone);
  });
});

describe('formatTherapyChip', () => {
  it('renders nothing when NetHealth could not answer', () => {
    // NetHealth answers for 12 of 19 facilities. On the other 7 the cell must be
    // BLANK — rendering "no therapy" would turn every resident into a false
    // pickup candidate.
    expect(formatTherapyChip({ state: 'unavailable' })).toBeNull();
    expect(formatTherapyChip(undefined)).toBeNull();
  });

  it('renders nothing when the resident is simply not on therapy', () => {
    expect(formatTherapyChip({ state: 'not_on_therapy' })).toBeNull();
  });

  it('says "On therapy", never the raw case type', () => {
    // NetHealth returns a level-of-care word ("Skilled"), not a discipline. A bare
    // "Skilled" chip does not read as "someone is already treating them".
    const chip = formatTherapyChip({ state: 'on_therapy', disciplines: ['Skilled'] });
    expect(chip.label).toBe('On therapy');
    expect(chip.detail).toBe('Skilled');
    expect(chip.loud).toBe(false);
  });

  it('still says "On therapy" when no case type came back', () => {
    expect(formatTherapyChip({ state: 'on_therapy' }).label).toBe('On therapy');
  });

  it('makes therapy-just-ended the one loud chip', () => {
    const chip = formatTherapyChip({ state: 'recently_ended', endedDaysAgo: 9 });
    expect(chip.label).toBe('Therapy ended 9d');
    expect(chip.loud).toBe(true);
  });
});

describe('applyDeclineFilters', () => {
  const rows = [
    row({ patientId: 'a', patientName: 'Alpha', stayType: 'long', payerClass: 'Medicaid', runway: 'act_now', overallSeverity: 'severe', therapy: { state: 'on_therapy' } }),
    row({ patientId: 'b', patientName: 'Bravo', stayType: 'short', payerClass: 'Medicare A', runway: 'closing', overallSeverity: 'mild', therapy: { state: 'not_on_therapy' } }),
    row({ patientId: 'c', patientName: 'Charlie', stayType: 'unknown', payerClass: null, runway: 'no_obra', overallSeverity: 'moderate', therapy: { state: 'unavailable' } }),
  ];
  const ids = (r) => r.map((x) => x.patientId);

  it('returns everything when no filter is set', () => {
    expect(applyDeclineFilters(rows, EMPTY_FILTERS)).toHaveLength(3);
  });

  it('filters by stay type', () => {
    expect(ids(applyDeclineFilters(rows, { ...EMPTY_FILTERS, stayType: 'long' }))).toEqual(['a']);
  });

  it('filters by payer', () => {
    expect(ids(applyDeclineFilters(rows, { ...EMPTY_FILTERS, payer: 'Medicare A' }))).toEqual(['b']);
  });

  it('filters by runway bucket', () => {
    expect(ids(applyDeclineFilters(rows, { ...EMPTY_FILTERS, runway: 'closing' }))).toEqual(['b']);
  });

  it('filters by therapy state', () => {
    expect(ids(applyDeclineFilters(rows, { ...EMPTY_FILTERS, therapy: 'on_therapy' }))).toEqual(['a']);
  });

  it('searches on name, case-insensitively', () => {
    expect(ids(applyDeclineFilters(rows, { ...EMPTY_FILTERS, search: 'brav' }))).toEqual(['b']);
  });

  it('scopes the runway filter to residents who are actually declining', () => {
    // The runway CARD counts decliners only. If the filter matched non-decliners
    // too, clicking "Closing 3" would produce a longer list than the count promised.
    const quiet = row({ patientId: 'quiet', hasDecline: false, overallSeverity: null, runway: 'closing' });
    const loud = row({ patientId: 'loud', hasDecline: true, runway: 'closing' });
    expect(ids(applyDeclineFilters([quiet, loud], { ...EMPTY_FILTERS, runway: 'closing' }))).toEqual(['loud']);
  });

  describe('unknown buckets are reachable, never silently dropped', () => {
    it('finds residents whose stay type could not be determined', () => {
      expect(ids(applyDeclineFilters(rows, { ...EMPTY_FILTERS, stayType: 'unknown' }))).toEqual(['c']);
    });

    it('finds residents with no payer classification', () => {
      expect(ids(applyDeclineFilters(rows, { ...EMPTY_FILTERS, payer: UNKNOWN_PAYER }))).toEqual(['c']);
    });

    it('finds residents NetHealth could not answer for', () => {
      expect(ids(applyDeclineFilters(rows, { ...EMPTY_FILTERS, therapy: 'unavailable' }))).toEqual(['c']);
    });
  });

  it('combines filters conjunctively', () => {
    expect(applyDeclineFilters(rows, { ...EMPTY_FILTERS, stayType: 'long', payer: 'Medicare A' })).toHaveLength(0);
  });

  it('treats a row missing enrichment as unknown rather than excluding it outright', () => {
    // The extension ships independently of the backend. A build running against an
    // older API must still list residents, just without chips.
    const legacy = row({ patientId: 'legacy', stayType: undefined, payerClass: undefined, runway: undefined });
    expect(applyDeclineFilters([legacy], EMPTY_FILTERS)).toHaveLength(1);
    expect(applyDeclineFilters([legacy], { ...EMPTY_FILTERS, stayType: 'unknown' })).toHaveLength(1);
  });
});

describe('countByRunway', () => {
  it('counts only residents who are declining', () => {
    const counts = countByRunway([
      row({ hasDecline: true, runway: 'closing' }),
      row({ hasDecline: false, runway: 'closing' }),
      row({ hasDecline: true, runway: 'monitor' }),
    ]);
    expect(counts.closing).toBe(1);
    expect(counts.monitor).toBe(1);
  });

  it('buckets a decliner with no predicted OBRA under no_obra', () => {
    expect(countByRunway([row({ hasDecline: true, runway: undefined })]).no_obra).toBe(1);
  });
});

describe('payerOptions', () => {
  it('lists the payers actually present, sorted', () => {
    expect(payerOptions([row({ payerClass: 'Medicare A' }), row({ payerClass: 'Medicaid' })])).toEqual(['Medicaid', 'Medicare A']);
  });

  it('appends an Unknown option only when some resident lacks a payer', () => {
    expect(payerOptions([row({ payerClass: 'Medicaid' })])).toEqual(['Medicaid']);
    expect(payerOptions([row({ payerClass: 'Medicaid' }), row({ payerClass: null })])).toEqual(['Medicaid', UNKNOWN_PAYER]);
  });
});
