import { useState } from 'preact/hooks';

/**
 * CollapsibleSection — simple expand/collapse wrapper with title + count badge.
 */
export function CollapsibleSection({ title, count, defaultOpen = true, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="ard-est__collapsible">
      <button
        className="ard-est__collapsible-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`ard-est__collapsible-chevron${isOpen ? ' ard-est__collapsible-chevron--open' : ''}`}
          width="12" height="12" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="ard-est__collapsible-title">{title}</span>
        <span className="ard-est__collapsible-count">{count}</span>
      </button>
      {isOpen && (
        <div className="ard-est__collapsible-body">
          {children}
        </div>
      )}
    </div>
  );
}
