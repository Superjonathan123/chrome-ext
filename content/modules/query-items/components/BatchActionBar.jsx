/**
 * Sticky footer with selection count, Select All, and Generate Queries button.
 * Shows progress bar during generation/sending.
 */
export const BatchActionBar = ({
  selectedCount,
  selectableCount,
  batchState,
  progress,
  onSelectAll,
  onDeselectAll,
  onGenerate
}) => {
  const isIdle = batchState === 'idle';
  const isGenerating = batchState === 'generating';
  const isSending = batchState === 'sending';
  const isWorking = isGenerating || isSending;

  // Hide bar only when there's nothing to select at all
  if (selectableCount === 0 && isIdle) {
    return <div className="query-items__batch-bar query-items__batch-bar--hidden" />;
  }

  return (
    <div className="query-items__batch-bar">
      <div className="query-items__batch-left">
        {isIdle && (
          <>
            <span className="query-items__batch-count">
              <span>{selectedCount}</span> of {selectableCount} items selected
            </span>
            {selectedCount > 0 ? (
              /* NO_TRACK */
              <button className="query-items__select-all-btn" onClick={onDeselectAll}>
                Deselect all
              </button>
            ) : (
              /* NO_TRACK */
              <button className="query-items__select-all-btn" onClick={onSelectAll}>
                Select all queryable
              </button>
            )}
          </>
        )}
        {isWorking && (
          <div className="query-items__progress">
            <div className="query-items__progress-bar">
              <div
                className="query-items__progress-fill"
                style={{ width: `${progress.total > 0 ? (progress.current / progress.total) * 100 : 0}%` }}
              />
            </div>
            <span className="query-items__progress-text">
              {isGenerating ? 'Generating' : 'Sending'} {progress.current}/{progress.total}...
            </span>
          </div>
        )}
      </div>

      <div className="query-items__batch-right">
        {isIdle && (
          <button
            className="query-items__generate-btn"
            disabled={selectedCount === 0}
            onClick={onGenerate}
            data-track="query_modal_opened"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
            Generate Queries
          </button>
        )}
      </div>
    </div>
  );
};
