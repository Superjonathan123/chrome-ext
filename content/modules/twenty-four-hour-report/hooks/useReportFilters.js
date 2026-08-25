import { useState, useEffect, useCallback, useMemo } from 'preact/hooks';
import { unwrap } from '../utils/api.js';
import {
  deriveCategoryState,
  toggleCategoryIn,
  toggleSubcategoryIn,
  mutedSetsEqual,
} from '../utils/filterState.js';

/**
 * useReportFilters — the nurse's per-user category filters for the 24-hour
 * report, via /api/extension/24hr-report/filters.
 *
 * Two things about this preference that shape the whole hook:
 *
 *  1. It is USER-GLOBAL, not per building. No facilityName/orgSlug — she tunes
 *     the report once and it follows her to every facility she covers. That is
 *     why this hook takes no arguments.
 *
 *  2. It is a DENYLIST stored at subcategory grain. We send what she MUTED,
 *     never what she kept, so a finding type we ship later shows up by default
 *     instead of being silently suppressed by a preference saved before it
 *     existed. Muting a whole category just means muting all of its children.
 *
 * The server owns the taxonomy and returns it alongside the preference, so the
 * panel never hard-codes a category list that can drift out of sync with what
 * the AI actually emits.
 *
 * Edits are local until save() — `draft` is the working set, `muted` is what is
 * actually persisted.
 */
export function useReportFilters() {
  const [categories, setCategories] = useState([]);
  const [muted, setMuted] = useState(new Set());
  const [draft, setDraft] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const fetchFilters = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint: '/api/extension/24hr-report/filters',
        options: { method: 'GET' },
      });
      if (!res?.success) throw new Error(res?.error || 'Failed to load filters');
      const data = unwrap(res.data) || {};
      if (!data.success) throw new Error(data.error || 'Failed to load filters');
      const next = new Set(data.mutedSubcategories || []);
      setCategories(Array.isArray(data.categories) ? data.categories : []);
      setMuted(next);
      setDraft(new Set(next));
      setLoading(false);
      return data;
    } catch (err) {
      console.error('[24HR] filters fetch failed', err);
      setError(err.message || 'Failed to load report filters');
      setLoading(false);
      return null;
    }
  }, []);

  useEffect(() => {
    fetchFilters();
  }, [fetchFilters]);

  /**
   * Persist the draft. Full replace, not a delta — the panel always submits the
   * complete set, so two edits in different tabs resolve to one of the two
   * states she actually chose rather than merging into a third she never saw.
   */
  const save = useCallback(async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint: '/api/extension/24hr-report/filters',
        options: {
          method: 'PATCH',
          body: JSON.stringify({ mutedSubcategories: [...draft] }),
        },
      });
      if (!res?.success) throw new Error(res?.error || 'Failed to save filters');
      const data = unwrap(res.data) || {};
      if (!data.success) throw new Error(data.error || 'Failed to save filters');
      // Trust the server's echo, not the local draft: it drops anything it
      // does not recognise, so a stale build can't leave the UI believing it
      // muted something that was never stored.
      const next = new Set(data.mutedSubcategories || []);
      setMuted(next);
      setDraft(new Set(next));
      if (Array.isArray(data.categories)) setCategories(data.categories);
      return next;
    } catch (err) {
      console.error('[24HR] filters save failed', err);
      const message = err.message || 'Failed to save report filters';
      setError(message);
      throw new Error(message);
    } finally {
      setSaving(false);
    }
  }, [draft]);

  /** Drop local edits back to what is persisted. */
  const revert = useCallback(() => {
    setDraft(new Set(muted));
    setError(null);
  }, [muted]);

  const toggleSubcategory = useCallback((key) => {
    setDraft((prev) => toggleSubcategoryIn(prev, key));
  }, []);

  /**
   * Category checkbox. Unchecking mutes every child; checking clears them all.
   * A partially-muted category counts as "on", so one click silences the rest
   * rather than un-muting the few she already turned off.
   */
  const toggleCategory = useCallback(
    (categoryKey) => {
      setDraft((prev) => toggleCategoryIn(prev, categories, categoryKey));
    },
    [categories]
  );

  /** Show everything again. */
  const clearAll = useCallback(() => setDraft(new Set()), []);

  /** Tri-state per category, for rendering the simple-mode checkboxes. */
  const categoryState = useMemo(
    () => deriveCategoryState(categories, draft),
    [categories, draft]
  );

  const isDirty = useMemo(
    () => !mutedSetsEqual(draft, muted),
    [draft, muted]
  );

  return {
    categories,
    muted,
    draft,
    categoryState,
    loading,
    saving,
    error,
    isDirty,
    hasAnyMuted: muted.size > 0,
    toggleCategory,
    toggleSubcategory,
    clearAll,
    save,
    revert,
    retry: fetchFilters,
  };
}
