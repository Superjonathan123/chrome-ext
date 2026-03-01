// Shared Selector component for Super LTC Chrome Extension
// Replaces native <select> with a styled, accessible dropdown.
//
// Supports two modes:
//   compact  — small pill for filter bars (like native select replacement)
//   default  — full dropdown with optional subtitle, badge, search

import { useState, useEffect, useRef, useCallback } from 'preact/hooks';

/**
 * @param {Object} props
 * @param {Array<{value:string|number, label:string, subtitle?:string, badge?:string}>} props.options
 * @param {string|number} props.value - Currently selected value
 * @param {Function} props.onChange - Called with the new value
 * @param {string} [props.placeholder='Select…']
 * @param {string} [props.size='default'] - 'compact' | 'default'
 * @param {boolean} [props.searchable=false] - Show search input
 * @param {string} [props.searchPlaceholder='Search…']
 * @param {string} [props.className] - Extra class on the root
 * @param {string} [props.ariaLabel]
 * @param {'left'|'right'} [props.align='left'] - Dropdown alignment
 */
export function Selector({
  options = [],
  value,
  onChange,
  placeholder = 'Select\u2026',
  size = 'default',
  searchable = false,
  searchPlaceholder = 'Search\u2026',
  className = '',
  ariaLabel,
  align = 'left',
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [hlIdx, setHlIdx] = useState(-1);
  const rootRef = useRef(null);
  const searchRef = useRef(null);
  const listRef = useRef(null);

  const selected = options.find(o => o.value === value) || null;

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler, true);
    return () => document.removeEventListener('mousedown', handler, true);
  }, [open]);

  // Auto-focus search & reset query on open
  useEffect(() => {
    if (open) {
      setQuery('');
      setHlIdx(-1);
      if (searchable && searchRef.current) {
        requestAnimationFrame(() => searchRef.current?.focus({ preventScroll: true }));
      }
    }
  }, [open, searchable]);

  // Filter options
  const lowerQ = query.toLowerCase();
  const filtered = query
    ? options.filter(o =>
        o.label.toLowerCase().includes(lowerQ) ||
        (o.subtitle && o.subtitle.toLowerCase().includes(lowerQ)) ||
        (o.badge && o.badge.toLowerCase().includes(lowerQ))
      )
    : options;

  // Keyboard nav
  const onKeyDown = useCallback((e) => {
    if (!open && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHlIdx(i => Math.min(i + 1, filtered.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHlIdx(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (hlIdx >= 0 && filtered[hlIdx]) {
          onChange(filtered[hlIdx].value);
          setOpen(false);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(false);
        break;
      case 'Tab':
        setOpen(false);
        break;
    }
  }, [open, hlIdx, filtered, onChange]);

  // Scroll highlighted into view
  useEffect(() => {
    if (hlIdx < 0 || !listRef.current) return;
    const items = listRef.current.children;
    items[hlIdx]?.scrollIntoView({ block: 'nearest' });
  }, [hlIdx]);

  const isCompact = size === 'compact';

  return (
    <div
      class={`ss__root${isCompact ? ' ss__root--compact' : ''} ${className}`}
      ref={rootRef}
      onKeyDown={onKeyDown}
    >
      {/* ── Trigger ── */}
      <button
        type="button"
        class={`ss__trigger${open ? ' ss__trigger--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        <span class="ss__trigger-text">
          {selected ? selected.label : <span class="ss__placeholder">{placeholder}</span>}
        </span>
        <svg class={`ss__chevron${open ? ' ss__chevron--open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      {/* ── Dropdown ── */}
      {open && (
        <div class={`ss__dropdown${align === 'right' ? ' ss__dropdown--right' : ''}`} role="listbox">
          {searchable && (
            <div class="ss__search-wrap">
              <svg class="ss__search-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                ref={searchRef}
                class="ss__search"
                type="text"
                placeholder={searchPlaceholder}
                value={query}
                onInput={(e) => { setQuery(e.target.value); setHlIdx(-1); }}
                autocomplete="off"
              />
            </div>
          )}

          <div class="ss__list" ref={listRef}>
            {filtered.map((opt, i) => {
              const isActive = opt.value === value;
              const isHl = i === hlIdx;
              return (
                <button
                  key={opt.value}
                  type="button"
                  class={`ss__option${isActive ? ' ss__option--active' : ''}${isHl ? ' ss__option--hl' : ''}`}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => { onChange(opt.value); setOpen(false); }}
                  onMouseEnter={() => setHlIdx(i)}
                >
                  <div class="ss__option-body">
                    <span class="ss__option-label">{opt.label}</span>
                    {opt.subtitle && <span class="ss__option-sub">{opt.subtitle}</span>}
                  </div>
                  {opt.badge && <span class="ss__option-badge">{opt.badge}</span>}
                  {isActive && (
                    <svg class="ss__check" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7L6 10L11 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  )}
                </button>
              );
            })}
            {filtered.length === 0 && (
              <div class="ss__empty">No matches</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
