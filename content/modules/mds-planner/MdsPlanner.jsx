/**
 * MdsPlanner — digital replica of the MDS coordinator's paper planner.
 *
 * Mental model (Anna interview + paper artifact):
 *   - Calendar (left page) = date-locked events: admits, discharges, MDS
 *     ARDs, queries, certs. Things that happen on a specific day.
 *   - Queue tables (right page) = state-based rosters: MDS in coding window,
 *     care plans to open/review, queries outstanding, certs, skilled census.
 *     Weekly work, not tied to a specific day.
 *
 * Layout:
 *   Left column  — week calendar, swaps to Day view when a day is clicked
 *   Right column — queue tables (always visible, scrolls if overflow)
 */
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { useMdsPlanner } from './hooks/useMdsPlanner.js';
import { WeekCalendar } from './components/WeekCalendar.jsx';
import { QueueCards } from './components/QueueCards.jsx';
import { DayView } from './components/DayView.jsx';
import { track } from '../../utils/analytics.js';

// Only date-locked events go on the calendar. Care plan work is weekly, not
// day-specific, so it lives in the queue tables instead.
const CALENDAR_EVENT_TYPES = new Set([
  'admit', 'readmit', 'discharge',
  'mds_ard', 'next_mds_ard',
  'query_due',
  'cert_due', 'cert_overdue',
]);

function formatRange(start, end) {
  const sameMonth = start.getMonth() === end.getMonth();
  const mS = start.toLocaleDateString('en-US', { month: 'short' });
  const mE = end.toLocaleDateString('en-US', { month: 'short' });
  if (sameMonth) return `${mS} ${start.getDate()} – ${end.getDate()}`;
  return `${mS} ${start.getDate()} – ${mE} ${end.getDate()}`;
}

function LoadingState() {
  return (
    <div class="mds-pl__state">
      <div class="mds-pl__spinner" />
      <p>Loading planner...</p>
    </div>
  );
}

function ErrorState({ message, onRetry }) {
  return (
    <div class="mds-pl__state">
      <div class="mds-pl__state-icon">{'⚠'}</div>
      <p>{message || 'Failed to load planner.'}</p>
      {/* NO_TRACK: error-state retry */}
      <button class="mds-pl__retry" onClick={onRetry}>Retry</button>
    </div>
  );
}

export function MdsPlanner({ facilityName, orgSlug, isFullscreen, onOpenTab }) {
  const {
    events, summary, loading, error,
    weekStart, weekEnd,
    goPrevWeek, goNextWeek, goThisWeek,
    refetch,
  } = useMdsPlanner({ facilityName, orgSlug });

  const [selectedDay, setSelectedDay] = useState(null);
  const [queuesExpanded, setQueuesExpanded] = useState(false);

  // Mount-only: fire mds_planner_opened exactly once.
  useEffect(() => {
    track('mds_planner_opened', { source: 'fab' });
  }, []);

  // View name derived from current state. Track switches between named views.
  // Names are categorical reference data (no PHI).
  const currentView = queuesExpanded ? 'focus' : (selectedDay ? 'day' : 'week');
  const prevViewRef = useRef(currentView);
  useEffect(() => {
    if (prevViewRef.current !== currentView) {
      track('mds_planner_view_switched', { from_view: prevViewRef.current, to_view: currentView });
      prevViewRef.current = currentView;
    }
  }, [currentView]);

  // Wrap setSelectedDay to fire mds_planner_event_clicked when a day is opened
  // (each day-open is effectively clicking that day's stack of events).
  const handleSelectDay = (day) => {
    if (day && day !== selectedDay) {
      // Day-level open is a coarse click; we can't tag a specific event_type here.
      // Per-event clicks are tracked via openEventAction in EventRow / DayView.
    }
    setSelectedDay(day);
  };

  const calendarEvents = useMemo(
    () => (events || []).filter(e => CALENDAR_EVENT_TYPES.has(e.type)),
    [events]
  );

  const dayEvents = useMemo(() => {
    if (!selectedDay) return [];
    return calendarEvents.filter(e => e.date === selectedDay);
  }, [calendarEvents, selectedDay]);

  const rangeLabel = useMemo(() => formatRange(weekStart, weekEnd), [weekStart, weekEnd]);
  const eventCount = calendarEvents.length;

  return (
    <div class={`mds-pl${isFullscreen ? ' mds-pl--full' : ' mds-pl--compact'}${queuesExpanded ? ' mds-pl--queues-expanded' : ''}`}>

      {/* ── Top bar ── */}
      <div class="mds-pl__nav-bar">
        <div class="mds-pl__week-nav">
          {/* NO_TRACK: pure-UI week nav */}
          <button type="button" onClick={goPrevWeek} aria-label="Previous week">&lsaquo;</button>
          <span class="mds-pl__week-label">{rangeLabel}</span>
          {/* NO_TRACK: pure-UI week nav */}
          <button type="button" onClick={goNextWeek} aria-label="Next week">&rsaquo;</button>
          {/* NO_TRACK: pure-UI week nav */}
          <button type="button" class="mds-pl__today-btn" onClick={goThisWeek}>Today</button>
        </div>
        <div class="mds-pl__nav-right">
          <span class="mds-pl__event-count">
            {eventCount === 0 ? 'quiet week' : `${eventCount} event${eventCount === 1 ? '' : 's'} this week`}
            {!selectedDay && eventCount > 0 && <span class="mds-pl__hint"> · click a day for detail</span>}
          </span>
          <button
            type="button"
            class={`mds-pl__focus-mode-toggle${queuesExpanded ? ' mds-pl__focus-mode-toggle--active' : ''}`}
            onClick={() => setQueuesExpanded(v => !v)}
            aria-label={queuesExpanded ? 'Show calendar' : 'Hide calendar — focus on queues'}
            title={queuesExpanded ? 'Show calendar' : 'Hide calendar — focus on queues'}
          >
            {queuesExpanded ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" y1="10" x2="21" y2="3" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            )}
            <span>{queuesExpanded ? 'Show calendar' : 'Focus mode'}</span>
          </button>
        </div>
      </div>

      {loading && <LoadingState />}
      {!loading && error && <ErrorState message={error} onRetry={refetch} />}

      {!loading && !error && (
        <div class="mds-pl__body">
          {/* Left column: week or day — hidden when queues are expanded */}
          {!queuesExpanded && (
            <section class="mds-pl__left">
              {selectedDay ? (
                <DayView
                  date={selectedDay}
                  events={dayEvents}
                  onBack={() => handleSelectDay(null)}
                />
              ) : (
                <WeekCalendar
                  events={calendarEvents}
                  weekStart={weekStart}
                  selectedDay={null}
                  onSelectDay={handleSelectDay}
                />
              )}
            </section>
          )}

          {/* Right column: queue tables (always visible) */}
          <aside class="mds-pl__right">
            <QueueCards
              summary={summary}
              onOpenQueriesTab={onOpenTab ? () => onOpenTab('queries') : undefined}
              onOpenCertsTab={onOpenTab ? () => onOpenTab('certs') : undefined}
            />
          </aside>
        </div>
      )}
    </div>
  );
}
