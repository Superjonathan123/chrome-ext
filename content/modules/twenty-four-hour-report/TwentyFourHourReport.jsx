/**
 * TwentyFourHourReport — root of the 24-hour clinical report panel.
 *
 * Launched from FAB via TwentyFourHourReportLauncher. Right-side panel
 * (~680px) with day-to-day navigation and auto-restore on open-in-PCC.
 *
 * See docs/plans/2026-04-23-24hr-report-extension-design.md.
 */
import { useMemo, useRef, useState } from 'preact/hooks';
import { useReportData } from './hooks/useReportData.js';
import { useRestoreFromPCC } from './hooks/useRestoreFromPCC.js';
import { formatFacilityDate, todayInFacilityTz } from './utils/api.js';
import { SeverityCards } from './components/SeverityCards.jsx';
import { FiltersBar } from './components/FiltersBar.jsx';
import { FindingRow } from './components/FindingRow.jsx';
import { LoadingState } from './components/LoadingState.jsx';
import { EmptyDay } from './components/EmptyDay.jsx';
import { writeRestorePayload } from './utils/restore.js';

const ALL_SEVERITIES = ['critical', 'high', 'medium', 'low'];

/**
 * Extract the list of findings from the report, regardless of shape variance.
 */
function getFindings(report) {
  if (!report) return [];
  if (Array.isArray(report.findings)) return report.findings;
  if (Array.isArray(report.items)) return report.items;
  return [];
}

/**
 * Get severity counts: prefer the server-provided `counts`, fall back to
 * deriving from findings so we still render a strip on older payloads.
 */
function getSeverityCounts(report) {
  const base = { critical: 0, high: 0, medium: 0, low: 0 };
  if (!report) return base;
  if (report.counts && typeof report.counts === 'object') {
    return { ...base, ...report.counts };
  }
  for (const f of getFindings(report)) {
    const sev = (f.severity || '').toLowerCase();
    if (sev in base) base[sev] += 1;
  }
  return base;
}

export function TwentyFourHourReport({ facilityName, orgSlug, restore, onClose }) {
  const {
    availableDates,
    timezone,
    currentDate,
    currentReport,
    loading,
    listLoading,
    error,
    listError,
    goToDate,
    goPrevDay,
    goNextDay,
    retry,
    retryList,
  } = useReportData({
    facilityName,
    orgSlug,
    initialDate: restore?.date || null,
  });

  const today = useMemo(() => todayInFacilityTz(timezone), [timezone]);
  const latestAvailable = availableDates[0] || null;
  const oldestAvailable = availableDates[availableDates.length - 1] || null;

  const canGoPrev = !!currentDate && (!oldestAvailable || currentDate > oldestAvailable);
  const canGoNext = !!currentDate && currentDate < today;
  const showJumpToToday = !!currentDate && !!latestAvailable && currentDate !== latestAvailable;

  // Filter state — lives at the panel root so filters + cards + list share it.
  const [activeSeverities, setActiveSeverities] = useState(new Set(ALL_SEVERITIES));

  const toggleSeverity = (sev) => {
    setActiveSeverities(prev => {
      const next = new Set(prev);
      // If everything is active, clicking a card isolates that severity
      // (matches the web UX: "show me just the critical ones").
      if (next.size === ALL_SEVERITIES.length) {
        return new Set([sev]);
      }
      if (next.has(sev)) {
        next.delete(sev);
        // Empty set = re-enable everything (prevents "no cards selected" dead state).
        if (next.size === 0) return new Set(ALL_SEVERITIES);
      } else {
        next.add(sev);
      }
      return next;
    });
  };

  const severityCounts = useMemo(
    () => getSeverityCounts(currentReport),
    [currentReport]
  );

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(null);

  const allFindings = useMemo(() => getFindings(currentReport), [currentReport]);

  const categories = useMemo(() => {
    const set = new Set();
    for (const f of allFindings) {
      if (f?.category) set.add(f.category);
    }
    return [...set].sort();
  }, [allFindings]);

  const filteredFindings = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return allFindings.filter(f => {
      const sev = (f.severity || '').toLowerCase();
      if (!activeSeverities.has(sev)) return false;
      if (category && f.category !== category) return false;
      if (needle) {
        const haystack = [
          f.patientName,
          f.patientFirstName,
          f.patientLastName,
          f.room,
          f.patientRoom,
          f.category,
          f.type,
          f.findingType,
          f.findingText,
          f.narrative,
          f.description,
        ].filter(Boolean).join(' ').toLowerCase();
        if (!haystack.includes(needle)) return false;
      }
      return true;
    });
  }, [allFindings, activeSeverities, category, search]);

  const hasActiveFilters =
    !!search.trim() ||
    !!category ||
    activeSeverities.size !== ALL_SEVERITIES.length;

  const clearFilters = () => {
    setSearch('');
    setCategory(null);
    setActiveSeverities(new Set(ALL_SEVERITIES));
  };

  const listRef = useRef(null);
  const bodyRef = useRef(null);

  useRestoreFromPCC({
    payload: restore,
    currentReport,
    currentDate,
    bodyRef,
  });

  const handleOpenInPCC = (finding, { href }) => {
    if (!href) return;
    const scrollTop = bodyRef.current?.scrollTop ?? 0;
    writeRestorePayload({
      facilityName,
      orgSlug,
      date: currentDate,
      findingId: finding.id || finding.findingId || null,
      scrollTop,
    });
    window.location.href = href;
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div class="thr__overlay" onClick={handleBackdropClick}>
      <aside
        class="thr__panel"
        role="dialog"
        aria-modal="true"
        aria-label="24-Hour Report"
      >
        <header class="thr__header">
          <div class="thr__header-top">
            <div class="thr__titles">
              <span class="thr__title">24-Hour Report</span>
              {facilityName && (
                <span class="thr__facility">{facilityName}</span>
              )}
            </div>
            <button
              class="thr__close"
              onClick={onClose}
              aria-label="Close"
              title="Close"
            >
              &times;
            </button>
          </div>
          <div class="thr__header-date">
            <button
              class="thr__nav-btn"
              onClick={goPrevDay}
              disabled={!canGoPrev}
              aria-label="Previous day"
            >‹</button>
            <span class="thr__date">
              {currentDate
                ? formatFacilityDate(currentDate, timezone, { weekday: 'short' })
                : '—'}
            </span>
            <button
              class="thr__nav-btn"
              onClick={goNextDay}
              disabled={!canGoNext}
              aria-label="Next day"
            >›</button>
            {showJumpToToday && (
              <button
                class="thr__jump-today"
                onClick={() => goToDate(latestAvailable)}
              >
                Jump to today
              </button>
            )}
          </div>
        </header>

        {currentReport && (
          <>
            <SeverityCards
              counts={severityCounts}
              activeSeverities={activeSeverities}
              onToggle={toggleSeverity}
            />
            <FiltersBar
              search={search}
              onSearchChange={setSearch}
              category={category}
              onCategoryChange={setCategory}
              categories={categories}
              hasActiveFilters={hasActiveFilters}
              onClear={clearFilters}
              visibleCount={filteredFindings.length}
              totalCount={allFindings.length}
            />
          </>
        )}

        <div class="thr__body" ref={bodyRef}>
          {listError && (
            <div class="thr__error">
              <p>Couldn't load 24-hour reports.</p>
              <button onClick={retryList}>Retry</button>
            </div>
          )}

          {!listError && error && (
            <div class="thr__error">
              <p>Couldn't load this report.</p>
              <button onClick={retry}>Retry</button>
            </div>
          )}

          {!listError && !error && (loading || (listLoading && !currentDate)) && <LoadingState />}

          {!listError && !error && !loading && currentReport === null && (
            <EmptyDay
              variant={availableDates.length === 0 ? 'ever' : 'day'}
              date={currentDate}
              timezone={timezone}
              onJumpToLastAvailable={
                availableDates.length > 0
                  ? () => goToDate(latestAvailable)
                  : undefined
              }
            />
          )}

          {!listError && !error && !loading && currentReport && filteredFindings.length === 0 && allFindings.length > 0 && (
            <div class="thr__placeholder">
              No findings match these filters.{' '}
              <button class="thr__inline-link" onClick={clearFilters}>Clear</button>
            </div>
          )}

          {!listError && !error && !loading && currentReport && allFindings.length === 0 && (
            <div class="thr__placeholder">This report has no findings.</div>
          )}

          {!listError && !error && !loading && currentReport && filteredFindings.length > 0 && (
            <ul class="thr__row-list" ref={listRef}>
              {filteredFindings.map((f, i) => (
                <FindingRow key={f.id || i} finding={f} onOpenInPCC={handleOpenInPCC} />
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
}
