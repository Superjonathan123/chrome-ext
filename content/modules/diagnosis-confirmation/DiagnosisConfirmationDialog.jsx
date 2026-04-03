import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * Diagnosis Confirmation Dialog
 * Shows staged codes with effective date picker before submitting to PCC.
 */
export function DiagnosisConfirmationDialog({ stagedCodes, defaultDate, patientId, onApply, onCancel }) {
  const [codes, setCodes] = useState([...stagedCodes]);
  // Default to admit date if provided, otherwise today
  const today = new Date().toISOString().split('T')[0];
  const [effectiveDate, setEffectiveDate] = useState(defaultDate || today);
  const [submitting, setSubmitting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState(null);
  const [rankId, setRankId] = useState('-1');
  const [rankLoading, setRankLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch rank options on mount and auto-select
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

  const handleApply = useCallback(async () => {
    if (codes.length === 0 || !effectiveDate) return;

    setSubmitting(true);
    setError(null);

    // Format date from YYYY-MM-DD to MM/DD/YYYY for PCC
    const [year, month, day] = effectiveDate.split('-');
    const pccDate = `${month}/${day}/${year}`;

    try {
      const batchResults = await PCCDiagnosisClient.submitBatch(
        codes,
        patientId,
        pccDate,
        rankId,
        (completedCount, total) => {
          setCurrentIndex(completedCount);
        }
      );
      setResults(batchResults);
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  }, [codes, effectiveDate, patientId, rankId]);

  const handleDone = useCallback(() => {
    onApply(results);
  }, [results, onApply]);

  const hasSessionExpiry = results?.some(r => r.error === 'SESSION_EXPIRED');
  const successCount = results?.filter(r => r.success).length || 0;
  const failCount = results?.filter(r => !r.success).length || 0;

  return (
    <div class="dx-confirm__overlay" onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}>
      <div class="dx-confirm__dialog">
        <div class="dx-confirm__header">
          <h3 class="dx-confirm__title">Add Diagnoses to PCC</h3>
          <button class="dx-confirm__close" onClick={onCancel} disabled={submitting}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Results view */}
        {results ? (
          <div class="dx-confirm__body">
            <div class="dx-confirm__results-summary">
              {successCount > 0 && <span class="dx-confirm__result-count dx-confirm__result-count--success">{successCount} added</span>}
              {failCount > 0 && <span class="dx-confirm__result-count dx-confirm__result-count--fail">{failCount} failed</span>}
            </div>
            {hasSessionExpiry && (
              <div class="dx-confirm__error">Your PCC session has expired. Please log in and try again.</div>
            )}
            <div class="dx-confirm__code-list">
              {results.map(r => (
                <div key={r.icd10Code} class={`dx-confirm__code-item dx-confirm__code-item--${r.success ? 'success' : 'fail'}`}>
                  <span class="dx-confirm__code-status">
                    {r.success ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                  </span>
                  <span class="dx-confirm__code-value">{r.icd10Code}</span>
                  <span class="dx-confirm__code-desc">{r.description}</span>
                  {r.error && r.error !== 'SESSION_EXPIRED' && (
                    <span class="dx-confirm__code-error">{r.error}</span>
                  )}
                </div>
              ))}
            </div>
            <div class="dx-confirm__footer">
              <button class="dx-confirm__btn dx-confirm__btn--primary" onClick={handleDone}>Done</button>
            </div>
          </div>
        ) : (
          /* Staging view */
          <div class="dx-confirm__body">
            {error && <div class="dx-confirm__error">{error}</div>}

            <div class="dx-confirm__code-list">
              {codes.map(c => (
                <div key={c.icd10Code} class="dx-confirm__code-item">
                  <span class="dx-confirm__code-value">{c.icd10Code}</span>
                  <span class="dx-confirm__code-desc">{c.description}</span>
                  <button
                    class="dx-confirm__code-remove"
                    onClick={() => removeCode(c.icd10Code)}
                    disabled={submitting}
                    title="Remove"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {codes.length === 0 && (
              <div class="dx-confirm__empty">All codes removed.</div>
            )}

            <div class="dx-confirm__date-section">
              <label class="dx-confirm__label" for="dx-effective-date">Effective Date</label>
              <input
                id="dx-effective-date"
                type="date"
                class="dx-confirm__date-input"
                value={effectiveDate}
                onInput={(e) => setEffectiveDate(e.target.value)}
                disabled={submitting}
              />
            </div>

            {submitting && (
              <div class="dx-confirm__progress">
                <span class="dx-confirm__progress-spinner" />
                Added {currentIndex} of {codes.length}...
              </div>
            )}

            <div class="dx-confirm__footer">
              <button class="dx-confirm__btn dx-confirm__btn--secondary" onClick={onCancel} disabled={submitting}>
                Cancel
              </button>
              <button
                class="dx-confirm__btn dx-confirm__btn--primary"
                onClick={handleApply}
                disabled={submitting || codes.length === 0 || !effectiveDate || rankLoading}
              >
                {rankLoading ? 'Loading...' : `Apply ${codes.length} Code${codes.length !== 1 ? 's' : ''}`}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
