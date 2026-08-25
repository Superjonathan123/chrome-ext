/**
 * Pure state math for the 24-hour report's per-user category filters.
 *
 * Kept out of the hook so the fiddly parts — tri-state derivation and what a
 * click on a half-muted category should mean — are testable without a renderer.
 *
 * The muted set is a DENYLIST of subcategory keys: it holds what she turned
 * OFF. Anything absent is visible, including a subcategory we ship after she
 * saved. Categories are never stored, only expanded to their children.
 */

/** Children of one category from the server's taxonomy payload. */
function childrenOf(categories, categoryKey) {
  const cat = (categories || []).find((c) => c.key === categoryKey);
  return (cat?.subcategories || []).map((s) => s.key);
}

/**
 * Per-category checkbox state: 'on' | 'partial' | 'off'.
 *
 * Derived from the leaf set rather than stored, so it cannot disagree with what
 * actually gets saved. Only counts children the taxonomy still knows about — a
 * retired value lingering in her saved set must not pin a category to 'partial'
 * with no checkbox that can clear it.
 */
export function deriveCategoryState(categories, muted) {
  const state = {};
  for (const cat of categories || []) {
    const children = (cat.subcategories || []).map((s) => s.key);
    const mutedCount = children.filter((k) => muted.has(k)).length;
    // Order matters: the zero-muted branch runs first, which also covers a
    // childless category (mutedCount can't exceed children.length, so it is 0)
    // and keeps it 'on'. Flip these and `mutedCount === children.length` would
    // read 0 === 0 and render an unchecked box she has no way to check.
    state[cat.key] =
      mutedCount === 0
        ? 'on'
        : mutedCount === children.length
          ? 'off'
          : 'partial';
  }
  return state;
}

/**
 * Toggle a whole category. Returns a NEW set.
 *
 * A partially-muted category counts as on, so one click silences what's left
 * rather than undoing the finer choices she already made. Going the other way
 * (off → on) clears all of its children.
 */
export function toggleCategoryIn(muted, categories, categoryKey) {
  const children = childrenOf(categories, categoryKey);
  if (children.length === 0) return new Set(muted);
  const next = new Set(muted);
  const allMuted = children.every((c) => next.has(c));
  if (allMuted) children.forEach((c) => next.delete(c));
  else children.forEach((c) => next.add(c));
  return next;
}

/** Toggle one leaf. Returns a NEW set. */
export function toggleSubcategoryIn(muted, subcategoryKey) {
  const next = new Set(muted);
  if (next.has(subcategoryKey)) next.delete(subcategoryKey);
  else next.add(subcategoryKey);
  return next;
}

/**
 * Membership equality — drives the Save button's dirty state.
 * Comparing sizes alone would call {a} and {b} equal and grey out Save on a
 * real edit.
 */
export function mutedSetsEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const k of a) if (!b.has(k)) return false;
  return true;
}

/** How many categories still show at least one type. */
export function visibleCategoryCount(categories, muted) {
  const state = deriveCategoryState(categories, muted);
  return (categories || []).filter((c) => state[c.key] !== 'off').length;
}
