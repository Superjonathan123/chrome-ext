import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * Diagnosis Confirmation Dialog
 * Shows staged codes with effective date picker before submitting to PCC.
 * Supports a global date for all codes, with per-code date overrides.
 */
export function DiagnosisConfirmationDialog({ stagedCodes, defaultDate, patientId, onApply, onCancel, onDiscardAndExit }) {
  const today = new Date().toISOString().split('T')[0];
  const globalDefault = defaultDate || today;

  const [codes, setCodes] = useState(() =>
    stagedCodes.map(c => ({ ...c, customDate: null, expanded: false }))
  );
  const [globalDate, setGlobalDate] = useState(globalDefault);
  const [submitting, setSubmitting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState(null);
  const [rankId, setRankId] = useState('-1');
  const [rankLoading, setRankLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof PCCDiagnosisClient === 'undefined') {
      setRankLoading(false);
      return;
    }
    PCCDiagnosisClient.fetchRankOptions(patientId)
      .then(options => {
        const selected = PCCDiagnosisClient.autoSelectRank(options);
        setRankId(selected);
      })
      .catch(err => {
        console.warn('DiagnosisConfirmation: Failed to fetch rank options:', err);
        setError('Could not load rank options, using default.');
      })
      .finally(() => setRankLoading(false));
  }, [patientId]);

  const removeCode = useCallback((icd10Code) => {
    setCodes(prev => prev.filter(c => c.icd10Code !== icd10Code));
  }, []);

  const toggleExpanded = useCallback((icd10Code) => {
    setCodes(prev => prev.map(c =>
      c.icd10Code === icd10Code ? { ...c, expanded: !c.expanded } : c
    ));
  }, []);

  const setCodeDate = useCallback((icd10Code, date) => {
    setCodes(prev => prev.map(c =>
      c.icd10Code === icd10Code ? { ...c, customDate: date || null } : c
    ));
  }, []);

  const clearCodeDate = useCallback((icd10Code) => {
    setCodes(prev => prev.map(c =>
      c.icd10Code === icd10Code ? { ...c, customDate: null, expanded: false } : c
    ));
  }, []);

  const hasAnyCustomDate = codes.some(c => c.customDate);

  const handleApply = useCallback(async () => {
    if (codes.length === 0 || !globalDate) return;

    setSubmitting(true);
    setError(null);

    // Build codes with resolved dates
    const codesWithDates = codes.map(c => {
      const date = c.customDate || globalDate;
      const [year, month, day] = date.split('-');
      return { ...c, pccDate: `${month}/${day}/${year}` };
    });

    try {
      const batchResults = await PCCDiagnosisClient.submitBatch(
        codesWithDates.map(c => ({ icd10Code: c.icd10Code, description: c.description })),
        patientId,
        codesWithDates[0].pccDate, // fallback global
        rankId,
        (completedCount) => {
          setCurrentIndex(completedCount);
        },
        // Pass per-code dates map
        Object.fromEntries(codesWithDates.map(c => [c.icd10Code, c.pccDate]))
      );
      setResults(batchResults);
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  }, [codes, globalDate, patientId, rankId]);

  const handleDone = useCallback(() => {
    onApply(results);
    // Refresh page so PCC shows newly added diagnoses
    window.location.reload();
  }, [results, onApply]);

  // When results are showing, any dismiss action should refresh the page
  const handleDismiss = useCallback(() => {
    if (results) {
      onCancel();
      window.location.reload();
    } else {
      onCancel();
    }
  }, [results, onCancel]);

  const hasSessionExpiry = results?.some(r => r.error === 'SESSION_EXPIRED');
  const successCount = results?.filter(r => r.success).length || 0;
  const failCount = results?.filter(r => !r.success).length || 0;

  const formatDisplayDate = (dateStr) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return `${m}/${d}/${y}`;
  };

  return (
    <div class="dx-confirm__overlay" onClick={(e) => { if (e.target === e.currentTarget) handleDismiss(); }}>
      <div class="dx-confirm__dialog">

        {/* Header */}
        <div class="dx-confirm__header">
          <div class="dx-confirm__header-left">
            <div class="dx-confirm__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div>
              <h3 class="dx-confirm__title">Push Diagnoses</h3>
              <p class="dx-confirm__subtitle">{codes.length} code{codes.length !== 1 ? 's' : ''} to add to PCC</p>
            </div>
          </div>
          <button class="dx-confirm__close" onClick={handleDismiss} disabled={submitting} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Results view */}
        {results ? (
          <div class="dx-confirm__body">
            <div class="dx-confirm__results-banner">
              {successCount > 0 && (
                <div class="dx-confirm__result-badge dx-confirm__result-badge--success">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  {successCount} added
                </div>
              )}
              {failCount > 0 && (
                <div class="dx-confirm__result-badge dx-confirm__result-badge--fail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  {failCount} failed
                </div>
              )}
            </div>
            {hasSessionExpiry && (
              <div class="dx-confirm__error">Your PCC session has expired. Please log in and try again.</div>
            )}
            <div class="dx-confirm__code-list">
              {results.map(r => (
                <div key={r.icd10Code} class={`dx-confirm__code-row dx-confirm__code-row--${r.success ? 'success' : 'fail'}`}>
                  <span class="dx-confirm__code-status-dot" />
                  <span class="dx-confirm__code-badge">{r.icd10Code}</span>
                  <span class="dx-confirm__code-desc">{r.description}</span>
                  {r.error && r.error !== 'SESSION_EXPIRED' && (
                    <span class="dx-confirm__code-error-msg">{r.error}</span>
                  )}
                </div>
              ))}
            </div>
            <div class="dx-confirm__footer">
              <button class="dx-confirm__btn dx-confirm__btn--primary dx-confirm__btn--full" onClick={handleDone}>Done</button>
            </div>
          </div>
        ) : (
          /* Staging view */
          <div class="dx-confirm__body">
            {error && <div class="dx-confirm__error">{error}</div>}

            {/* Global date */}
            <div class="dx-confirm__global-date">
              <div class="dx-confirm__global-date-row">
                <label class="dx-confirm__global-date-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Effective Date
                </label>
                <input
                  type="date"
                  class="dx-confirm__date-input"
                  value={globalDate}
                  onInput={(e) => setGlobalDate(e.target.value)}
                  disabled={submitting}
                />
              </div>
              {hasAnyCustomDate && (
                <div class="dx-confirm__date-hint">Some codes have custom dates</div>
              )}
            </div>

            {/* Code list */}
            <div class="dx-confirm__code-list">
              {codes.map(c => {
                const effectiveDate = c.customDate || globalDate;
                const hasCustom = !!c.customDate;
                return (
                  <div key={c.icd10Code} class={`dx-confirm__code-card ${c.expanded ? 'dx-confirm__code-card--expanded' : ''}`}>
                    <div class="dx-confirm__code-row">
                      <span class="dx-confirm__code-badge">{c.icd10Code}</span>
                      <span class="dx-confirm__code-desc">{c.description}</span>
                      {hasCustom && (
                        <span class="dx-confirm__code-custom-date-tag">{formatDisplayDate(c.customDate)}</span>
                      )}
                      <button
                        class={`dx-confirm__code-date-toggle ${hasCustom ? 'dx-confirm__code-date-toggle--active' : ''}`}
                        onClick={() => toggleExpanded(c.icd10Code)}
                        disabled={submitting}
                        title={c.expanded ? 'Collapse' : 'Set custom date'}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </button>
                      <button
                        class="dx-confirm__code-remove"
                        onClick={() => removeCode(c.icd10Code)}
                        disabled={submitting}
                        title="Remove"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                    {c.expanded && (
                      <div class="dx-confirm__code-date-panel">
                        <label class="dx-confirm__code-date-label">Custom date for {c.icd10Code}</label>
                        <div class="dx-confirm__code-date-controls">
                          <input
                            type="date"
                            class="dx-confirm__date-input dx-confirm__date-input--sm"
                            value={c.customDate || globalDate}
                            onInput={(e) => setCodeDate(c.icd10Code, e.target.value)}
                            disabled={submitting}
                          />
                          {hasCustom && (
                            <button
                              class="dx-confirm__code-date-reset"
                              onClick={() => clearCodeDate(c.icd10Code)}
                              title="Reset to global date"
                            >
                              Use global
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {codes.length === 0 && (
              <div class="dx-confirm__empty">All codes removed.</div>
            )}

            {submitting && (
              <div class="dx-confirm__progress">
                <div class="dx-confirm__progress-bar">
                  <div class="dx-confirm__progress-fill" style={{ width: `${(currentIndex / codes.length) * 100}%` }} />
                </div>
                <span class="dx-confirm__progress-text">Adding {currentIndex} of {codes.length}...</span>
              </div>
            )}

            <div class="dx-confirm__footer">
              <button class="dx-confirm__btn dx-confirm__btn--ghost" onClick={handleDismiss} disabled={submitting}>
                Cancel
              </button>
              {onDiscardAndExit && (
                <button
                  class="dx-confirm__btn dx-confirm__btn--ghost"
                  onClick={onDiscardAndExit}
                  disabled={submitting}
                  title="Exit without adding these codes to PCC"
                >
                  Discard & Exit
                </button>
              )}
              <button
                class="dx-confirm__btn dx-confirm__btn--primary"
                onClick={handleApply}
                disabled={submitting || codes.length === 0 || !globalDate || rankLoading}
              >
                {rankLoading ? (
                  <><span class="dx-confirm__btn-spinner" /> Loading...</>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                    Apply {codes.length} Code{codes.length !== 1 ? 's' : ''}
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
