import { useEffect, useRef, useState } from 'preact/hooks';

/**
 * FilterSettings — "My filters" popover: which finding categories this nurse
 * wants to see on the 24-hour report.
 *
 * Sits next to ScheduleSettings in the panel header but means something
 * different, and the copy works hard to keep them apart: the schedule is a
 * BUILDING setting anyone can change for everyone, this is HERS and follows her
 * to every facility. Hence the "Only you see this" line — without it, a filter
 * living beside a facility-wide control reads like it hides findings from the
 * whole team.
 *
 * Simple mode is 8 category toggles. Advanced opens the 29 subcategories,
 * because the real complaint is usually finer than a category — she wants
 * medication errors but not "med not available", infections but not new
 * admissions.
 */

function FunnelIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </svg>
  );
}

function CheckIcon({ partial }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      {partial ? <path d="M5 12h14" /> : <path d="M20 6 9 17l-5-5" />}
    </svg>
  );
}

export function FilterSettings({
  isOpen,
  onToggle,
  onClose,
  categories,
  categoryState,
  draft,
  loading,
  saving,
  error,
  isDirty,
  mutedCount,
  onToggleCategory,
  onToggleSubcategory,
  onClearAll,
  onSave,
  onRetry,
}) {
  const wrapRef = useRef(null);
  const [advanced, setAdvanced] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setAdvanced(false);
      return undefined;
    }
    const handlePointerDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) onClose();
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const shownCount = categories.length
    ? categories.filter((c) => categoryState[c.key] !== 'off').length
    : 0;

  const triggerText = (() => {
    if (loading) return 'Loading your filters…';
    if (error && !categories.length) return 'Could not load filters';
    if (mutedCount === 0) return 'Showing all categories';
    return (
      <>
        Showing <strong>{shownCount}</strong> of {categories.length} categories
      </>
    );
  })();

  const panel = (() => {
    if (loading) {
      return <div class="thr__schedule-loading">Loading your filters…</div>;
    }
    if (error && !categories.length) {
      return (
        <div class="thr__schedule-error">
          <p>Couldn't load your filters.</p>
          {/* NO_TRACK */}
          <button type="button" onClick={onRetry}>Retry</button>
        </div>
      );
    }

    return (
      <>
        <div class="thr__schedule-head">
          <span class="thr__schedule-label">What do you want to see?</span>
          <p class="thr__schedule-help">
            Uncheck anything you don't need. Applies to every building you cover
            and to your daily report email. <strong>Only you see this</strong> —
            it doesn't change the report for anyone else.
          </p>
        </div>

        <div class="thr__filter-list" role="group" aria-label="Finding categories">
          {categories.map((cat) => {
            const state = categoryState[cat.key] || 'on';
            const isOff = state === 'off';
            const isPartial = state === 'partial';
            return (
              <div class="thr__filter-cat" key={cat.key}>
                {/* NO_TRACK — onToggleCategory emits the filter event */}
                <button
                  type="button"
                  class={`thr__filter-row${isOff ? ' is-off' : ''}`}
                  onClick={() => onToggleCategory(cat.key)}
                  disabled={saving}
                  role="checkbox"
                  aria-checked={isPartial ? 'mixed' : !isOff}
                >
                  <span
                    class={`thr__filter-box${isOff ? '' : ' is-checked'}${isPartial ? ' is-partial' : ''}`}
                    aria-hidden="true"
                  >
                    {!isOff && <CheckIcon partial={isPartial} />}
                  </span>
                  <span class="thr__filter-emoji" aria-hidden="true">{cat.emoji}</span>
                  <span class="thr__filter-label">{cat.label}</span>
                  {isPartial && (
                    <span class="thr__filter-partial-note">
                      {cat.subcategories.filter((s) => !draft.has(s.key)).length}
                      {' of '}
                      {cat.subcategories.length}
                    </span>
                  )}
                </button>

                {advanced && (
                  <div class="thr__filter-subs">
                    {cat.subcategories.map((sub) => {
                      const subOff = draft.has(sub.key);
                      return (
                        // NO_TRACK — onToggleSubcategory emits the filter event
                        <button
                          type="button"
                          key={sub.key}
                          class={`thr__filter-row thr__filter-row--sub${subOff ? ' is-off' : ''}`}
                          onClick={() => onToggleSubcategory(sub.key)}
                          disabled={saving}
                          role="checkbox"
                          aria-checked={!subOff}
                          title={sub.description}
                        >
                          <span
                            class={`thr__filter-box${subOff ? '' : ' is-checked'}`}
                            aria-hidden="true"
                          >
                            {!subOff && <CheckIcon />}
                          </span>
                          <span class="thr__filter-label">{sub.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* NO_TRACK */}
        <button
          type="button"
          class="thr__schedule-more-btn"
          onClick={() => setAdvanced((v) => !v)}
          aria-expanded={advanced}
        >
          {advanced ? 'Hide detailed types' : 'Choose specific types instead'}
        </button>

        {error && categories.length > 0 && (
          <p class="thr__schedule-inline-error" role="alert">{error}</p>
        )}

        <div class="thr__schedule-footer">
          {mutedCount > 0 && (
            // NO_TRACK — onClearAll emits the filter event
            <button
              type="button"
              class="thr__schedule-reset-btn"
              onClick={onClearAll}
              disabled={saving}
            >
              Show everything
            </button>
          )}
          <div class="thr__schedule-actions">
            {/* NO_TRACK */}
            <button
              type="button"
              class="thr__schedule-cancel"
              onClick={onClose}
              disabled={saving}
            >
              Cancel
            </button>
            {/* NO_TRACK */}
            <button
              type="button"
              class="thr__schedule-save"
              onClick={onSave}
              disabled={!isDirty || saving}
            >
              {saving ? 'Saving…' : 'Save'}
            </button>
          </div>
        </div>
      </>
    );
  })();

  return (
    <div class="thr__settings-wrap" ref={wrapRef}>
      {/* NO_TRACK */}
      <button
        type="button"
        class={`thr__schedule-trigger${isOpen ? ' is-open' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        disabled={loading && !categories.length}
      >
        <span class="thr__schedule-trigger-icon" aria-hidden="true">
          <FunnelIcon />
        </span>
        <span class="thr__schedule-trigger-text">{triggerText}</span>
        <span class="thr__schedule-trigger-action">
          {isOpen ? 'Close' : 'Change'}
        </span>
      </button>

      {isOpen && (
        <div
          class="thr__schedule-popover thr__filter-popover"
          role="dialog"
          aria-label="My report filters"
        >
          {panel}
        </div>
      )}
    </div>
  );
}
