/**
 * CoveragePanel — root Preact component for care plan coverage overlay.
 * Launched from FAB via CoveragePanelLauncher.
 */
import { useCoverage } from './hooks/useCoverage.js';
import { ScoreBar } from './components/ScoreBar.jsx';
import { ChangesList } from './components/ChangesList.jsx';
import { GapsList } from './components/GapsList.jsx';
import { CoveredList } from './components/CoveredList.jsx';

const RefreshIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

export function CoveragePanel({ patientId, patientName, facilityName, orgSlug, onClose }) {
  const { summary, changes, loading, error, refreshing, refresh, retry } = useCoverage({
    patientId,
    facilityName,
    orgSlug
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Drift alert text
  const driftParts = [];
  if (summary?.pendingChanges?.newDiagnoses > 0) {
    driftParts.push(`${summary.pendingChanges.newDiagnoses} new diagnosis${summary.pendingChanges.newDiagnoses > 1 ? 'es' : ''}`);
  }
  if (summary?.pendingChanges?.newOrders > 0) {
    driftParts.push(`${summary.pendingChanges.newOrders} new order${summary.pendingChanges.newOrders > 1 ? 's' : ''}`);
  }
  const hasDrift = driftParts.length > 0;

  // Never checked vs checked-but-empty
  const neverChecked = summary && summary.hasResults === false;
  const isEmpty = !neverChecked && summary && summary.score === 0 &&
    (!summary.gaps || summary.gaps.length === 0) &&
    (!summary.covered || summary.covered.length === 0);

  return (
    <div class="cpc__overlay" onClick={handleBackdropClick}>
      <div class="cpc__modal">
        {/* Header */}
        <div class="cpc__header">
          <div class="cpc__title-row">
            <div>
              <span class="cpc__title">Care Plan Coverage</span>
              {patientName && <span class="cpc__patient-name">{patientName}</span>}
            </div>
            <div class="cpc__header-actions">
              {summary?.stale && <span class="cpc__stale-badge">Stale</span>}
              <button
                class={`cpc__refresh-btn ${refreshing ? 'cpc__refresh-btn--spinning' : ''}`}
                onClick={refresh}
                disabled={refreshing}
                title="Re-run coverage check"
              >
                <RefreshIcon />
                {refreshing ? 'Checking...' : 'Refresh'}
              </button>
              <button class="cpc__close-btn" onClick={onClose} title="Close">&times;</button>
            </div>
          </div>

          {/* Score bar (only when data loaded and has results) */}
          {summary && !neverChecked && !isEmpty && (
            <ScoreBar
              score={summary.score}
              diagnosisCovered={summary.diagnosisCovered}
              diagnosisTotal={summary.diagnosisTotal}
              orderCovered={summary.orderCovered}
              orderTotal={summary.orderTotal}
            />
          )}
        </div>

        {/* Drift alert */}
        {hasDrift && (
          <div class="cpc__alert">
            <span class="cpc__alert-icon">{'\u26a0'}</span>
            <span>{driftParts.join(' and ')} since last check</span>
          </div>
        )}

        {/* Body */}
        <div class="cpc__body">
          {loading && (
            <div class="cpc__loading">
              <div class="cpc__spinner" />
              <span class="cpc__loading-text">Loading coverage data...</span>
            </div>
          )}

          {error && !loading && (
            <div class="cpc__error">
              <div class="cpc__error-text">{error}</div>
              <button class="cpc__retry-btn" onClick={retry}>Try Again</button>
            </div>
          )}

          {neverChecked && !loading && !error && (
            <div class="cpc__empty">
              No coverage data yet.<br />
              Coverage checks run automatically, or click Refresh to check now.
            </div>
          )}

          {isEmpty && !loading && !error && (
            <div class="cpc__empty">
              Coverage check ran but found no matching items.
            </div>
          )}

          {summary && !neverChecked && !isEmpty && !loading && !error && (
            <>
              {summary.checkedAt && (
                <div class="cpc__checked-at">
                  Last checked {new Date(summary.checkedAt).toLocaleString()}
                </div>
              )}
              <ChangesList changes={changes?.changes} />
              <GapsList gaps={summary.gaps} />
              <CoveredList covered={summary.covered} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
