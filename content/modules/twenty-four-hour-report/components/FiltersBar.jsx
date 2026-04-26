import { useEffect, useRef, useState } from 'preact/hooks';
import { categoryInfo } from '../utils/formatFinding.js';

/**
 * FiltersBar — search + category selector + clear + result count.
 * Severity filtering is driven by the SeverityCards strip above.
 */
export function FiltersBar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
  hasActiveFilters,
  onClear,
  visibleCount,
  totalCount,
}) {
  return (
    <div class="thr__filters">
      <div class="thr__filters-controls">
        <div class="thr__search-wrap">
          <svg class="thr__search-icon" width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            class="thr__search"
            placeholder="Search patient, room, finding…"
            value={search}
            onInput={(e) => onSearchChange(e.currentTarget.value)}
            aria-label="Search findings"
          />
        </div>

        <CategoryDropdown
          value={category}
          onChange={onCategoryChange}
          categories={categories}
        />

        {hasActiveFilters && (
          <button class="thr__clear" onClick={onClear} aria-label="Clear filters">
            <span class="thr__clear-x">×</span> Clear
          </button>
        )}
      </div>

      <div class="thr__count" aria-live="polite">
        {visibleCount} of {totalCount}
      </div>
    </div>
  );
}

function CategoryDropdown({ value, onChange, categories }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const selected = value ? categoryInfo(value) : null;

  return (
    <div class="thr__category-wrap" ref={wrapRef}>
      <button
        type="button"
        class="thr__category-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        {selected ? (
          <span>
            {selected.emoji && <span class="thr__chip-emoji" aria-hidden="true">{selected.emoji}</span>}
            {selected.label}
          </span>
        ) : (
          <span>All Categories</span>
        )}
        <span class="thr__caret">▾</span>
      </button>
      {open && (
        <ul class="thr__category-menu" role="listbox">
          <li>
            <button
              type="button"
              class={`thr__category-opt ${!value ? 'is-active' : ''}`}
              role="option"
              aria-selected={!value}
              onClick={() => { onChange(null); setOpen(false); }}
            >
              All Categories
            </button>
          </li>
          {categories.map(cat => {
            const info = categoryInfo(cat);
            return (
              <li key={cat}>
                <button
                  type="button"
                  class={`thr__category-opt ${value === cat ? 'is-active' : ''}`}
                  role="option"
                  aria-selected={value === cat}
                  onClick={() => { onChange(cat); setOpen(false); }}
                >
                  {info?.emoji && <span class="thr__chip-emoji" aria-hidden="true">{info.emoji}</span>}
                  {info?.label || cat}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
