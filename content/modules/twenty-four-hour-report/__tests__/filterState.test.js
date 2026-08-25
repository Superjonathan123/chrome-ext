import { describe, it, expect } from 'vitest';
import {
  deriveCategoryState,
  toggleCategoryIn,
  toggleSubcategoryIn,
  mutedSetsEqual,
  visibleCategoryCount,
} from '../utils/filterState.js';

/** Two categories, mirroring the server's taxonomy payload shape. */
const CATEGORIES = [
  {
    key: 'falls_safety',
    label: 'Falls & Safety',
    emoji: '🚑',
    subcategories: [
      { key: 'fall_event', label: 'Fall Event' },
      { key: 'elopement_wandering', label: 'Elopement / Wandering' },
    ],
  },
  {
    key: 'medications',
    label: 'Medications',
    emoji: '💊',
    subcategories: [
      { key: 'medication_error', label: 'Medication Error' },
      { key: 'medication_refusal', label: 'Medication Refusal' },
      { key: 'med_availability', label: 'Med Availability' },
    ],
  },
];

describe('deriveCategoryState', () => {
  it('1. nothing muted → every category is on', () => {
    const state = deriveCategoryState(CATEGORIES, new Set());
    expect(state).toEqual({ falls_safety: 'on', medications: 'on' });
  });

  it('2. some children muted → partial', () => {
    const state = deriveCategoryState(CATEGORIES, new Set(['med_availability']));
    expect(state.medications).toBe('partial');
    expect(state.falls_safety).toBe('on');
  });

  it('3. all children muted → off', () => {
    const state = deriveCategoryState(
      CATEGORIES,
      new Set(['medication_error', 'medication_refusal', 'med_availability'])
    );
    expect(state.medications).toBe('off');
  });

  it('4. an unknown muted value does not make a category partial', () => {
    // A subcategory retired since she saved must not leave a category stuck
    // showing "2 of 3" forever.
    const state = deriveCategoryState(CATEGORIES, new Set(['long_gone']));
    expect(state).toEqual({ falls_safety: 'on', medications: 'on' });
  });

  it('5. a category with no children is on, not off', () => {
    // `every` on an empty array is true — guard against that reading as "all
    // muted" and rendering an unchecked box she cannot check.
    const state = deriveCategoryState([{ key: 'empty', subcategories: [] }], new Set());
    expect(state.empty).toBe('on');
  });
});

describe('toggleCategoryIn', () => {
  it('6. turning a fully-on category off mutes every child', () => {
    const next = toggleCategoryIn(new Set(), CATEGORIES, 'medications');
    expect(next).toEqual(
      new Set(['medication_error', 'medication_refusal', 'med_availability'])
    );
  });

  it('7. turning a fully-off category on clears every child', () => {
    const start = new Set(['medication_error', 'medication_refusal', 'med_availability']);
    expect(toggleCategoryIn(start, CATEGORIES, 'medications')).toEqual(new Set());
  });

  it('8. a PARTIAL category silences the rest rather than un-muting', () => {
    // She already turned off one type. One click on the category should mean
    // "quiet the whole thing", not "undo the choice I already made".
    const next = toggleCategoryIn(new Set(['med_availability']), CATEGORIES, 'medications');
    expect(next).toEqual(
      new Set(['medication_error', 'medication_refusal', 'med_availability'])
    );
  });

  it('9. never touches another category', () => {
    const next = toggleCategoryIn(new Set(['fall_event']), CATEGORIES, 'medications');
    expect(next.has('fall_event')).toBe(true);
  });

  it('10. an unknown category key is a no-op, not a wipe', () => {
    const start = new Set(['fall_event']);
    expect(toggleCategoryIn(start, CATEGORIES, 'nope')).toEqual(start);
  });

  it('11. does not mutate the input set', () => {
    const start = new Set(['fall_event']);
    toggleCategoryIn(start, CATEGORIES, 'medications');
    expect(start).toEqual(new Set(['fall_event']));
  });
});

describe('toggleSubcategoryIn', () => {
  it('12. adds then removes a single leaf', () => {
    const on = toggleSubcategoryIn(new Set(), 'fall_event');
    expect(on).toEqual(new Set(['fall_event']));
    expect(toggleSubcategoryIn(on, 'fall_event')).toEqual(new Set());
  });

  it('13. does not mutate the input set', () => {
    const start = new Set();
    toggleSubcategoryIn(start, 'fall_event');
    expect(start.size).toBe(0);
  });
});

describe('mutedSetsEqual', () => {
  it('14. order does not matter', () => {
    expect(mutedSetsEqual(new Set(['a', 'b']), new Set(['b', 'a']))).toBe(true);
  });

  it('15. different sizes are unequal', () => {
    expect(mutedSetsEqual(new Set(['a']), new Set(['a', 'b']))).toBe(false);
  });

  it('16. same size, different members are unequal', () => {
    // A size-only check would call these equal and leave Save greyed out on a
    // real edit.
    expect(mutedSetsEqual(new Set(['a']), new Set(['b']))).toBe(false);
  });

  it('17. two empty sets are equal', () => {
    expect(mutedSetsEqual(new Set(), new Set())).toBe(true);
  });
});

describe('visibleCategoryCount', () => {
  it('18. counts categories that are not fully muted', () => {
    const muted = new Set(['medication_error', 'medication_refusal', 'med_availability']);
    expect(visibleCategoryCount(CATEGORIES, muted)).toBe(1);
  });

  it('19. a partially muted category still counts as shown', () => {
    expect(visibleCategoryCount(CATEGORIES, new Set(['med_availability']))).toBe(2);
  });
});
