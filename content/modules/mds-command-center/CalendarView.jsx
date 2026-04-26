/**
 * CalendarView — Plot assessments on a calendar grid.
 *
 * Shows every dated assessment (open + upcoming from the schedule API)
 * plotted by due date. Two view modes: Month (grid) and Week (list per day).
 *
 * Unlike the List view, this INCLUDES far-out upcoming assessments that
 * wouldn't make sense in the urgency-sorted list (e.g. annual due in 200 days).
 */
import { useState, useMemo, useEffect, useRef } from 'preact/hooks';
import { cleanAssessmentType } from './AssessmentRow.jsx';
import { AssessmentPreview } from './AssessmentPreview.jsx';

// ── Color map ──
const URGENCY_COLOR = {
  overdue: '#ef4444',
  urgent: '#f97316',
  approaching: '#eab308',
  on_track: '#22c55e',
  completed: '#6b7280',
  far_out: '#9ca3af',
};

const LAYER_LABEL = {
  assessments: 'MDS',
  queries: 'QUERY',
  certs: 'CERT',
};

// ── Helpers ──

function toLocalDate(isoOrDate) {
  if (!isoOrDate) return null;
  const d = typeof isoOrDate === 'string' ? new Date(isoOrDate + 'T00:00:00') : new Date(isoOrDate);
  if (isNaN(d)) return null;
  d.setHours(0, 0, 0, 0);
  return d;
}

function ymd(d) {
  if (!d) return null;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function monthLabel(d) {
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function dayOfMonth(d) {
  return d.getDate();
}

function isSameMonth(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

function isToday(d) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return d.getTime() === now.getTime();
}

function startOfMonth(d) {
  const out = new Date(d);
  out.setDate(1);
  out.setHours(0, 0, 0, 0);
  return out;
}

function startOfWeek(d) {
  const out = new Date(d);
  const day = out.getDay(); // 0 = Sun
  // Use Monday-start weeks (coordinators plan by weekday, Mon Tue Wed...)
  const diff = (day + 6) % 7;
  out.setDate(out.getDate() - diff);
  out.setHours(0, 0, 0, 0);
  return out;
}

function addDays(d, n) {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

function addMonths(d, n) {
  const out = new Date(d);
  out.setMonth(out.getMonth() + n);
  return out;
}

// ── Build calendar items from dashboard + schedule + queries + certs ──
//
// Each item has a `layer` property: 'assessments' | 'queries' | 'certs'
// so they can be filtered by the layer toggle.
//
// Dashboard open assessments: plot by ardDate
// Schedule items: plot by dueDate (these include the far-out ones)
// Queries: plot by ardDate of linked assessment (deadline for them to matter)
// Certs: plot by dueDate

function buildItems(dashboardAssessments, scheduleItems, outstandingQueries, certs) {
  const items = [];

  // Assessments layer ---
  for (const a of dashboardAssessments || []) {
    if (!a.ardDate) continue;
    const urgency = a.deadlines?.urgency || 'on_track';
    items.push({
      id: a.id || a.assessmentId || a.externalAssessmentId,
      layer: 'assessments',
      patientId: a.patientId,
      patientName: a.patientName,
      type: cleanAssessmentType(a.assessmentType) || a.assessmentType,
      date: a.ardDate,
      urgency,
      kind: 'open',
      ref: a,
    });
  }

  for (const s of scheduleItems || []) {
    if (s.isOpened) continue; // dashboard has it
    if (!s.dueDate) continue;
    items.push({
      id: `sched-${s.patientId}-${s.assessmentType}-${s.dueDate}`,
      layer: 'assessments',
      patientId: s.patientId,
      patientName: s.patientName,
      type: scheduleTypeLabel(s.assessmentType),
      date: s.dueDate,
      urgency: s.urgency || 'on_track',
      kind: 'upcoming',
      ref: s,
    });
  }

  // Queries layer — plot pending/sent queries by their ARD deadline ---
  for (const q of outstandingQueries || []) {
    if (!q.ardDate) continue; // nothing to plot
    items.push({
      id: `query-${q.id}`,
      layer: 'queries',
      patientId: q.patientId,
      patientName: q.patientName,
      type: `Query: ${q.mdsItem || ''} ${q.mdsItemName || ''}`.trim(),
      date: q.ardDate,
      urgency: queryUrgency(q.ardDaysRemaining),
      kind: 'query',
      ref: q,
    });
  }

  // Certs layer — plot certs by their due date ---
  for (const c of certs || []) {
    if (!c.dueDate) continue;
    items.push({
      id: `cert-${c.id}`,
      layer: 'certs',
      patientId: c.patientId,
      patientName: c.patientName,
      type: `${c.certType || 'Cert'}${c.stayType ? ` (${c.stayType})` : ''}`,
      date: c.dueDate,
      urgency: certUrgency(c),
      kind: 'cert',
      ref: c,
    });
  }

  return items;
}

function queryUrgency(daysRemaining) {
  if (daysRemaining == null) return 'on_track';
  if (daysRemaining < 0) return 'overdue';
  if (daysRemaining <= 3) return 'urgent';
  if (daysRemaining <= 7) return 'approaching';
  return 'on_track';
}

function certUrgency(cert) {
  const due = cert.dueDate ? new Date(cert.dueDate + 'T00:00:00') : null;
  if (!due) return 'on_track';
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.round((due - today) / 86400000);
  if (days < 0 || cert.isDelayed) return 'overdue';
  if (days <= 3) return 'urgent';
  if (days <= 7) return 'approaching';
  return 'on_track';
}

function scheduleTypeLabel(t) {
  if (t === 'quarterly') return 'Quarterly';
  if (t === 'annual') return 'Annual';
  if (t === 'admission') return 'Admission';
  return t;
}

// Strip room number from "LAST, FIRST (101-225)" → "Last, First"
// Room numbers are noise in tight calendar cells. Also title-case the name
// since the dashboard returns it uppercase.
function shortPatientName(full) {
  if (!full) return '';
  const stripped = full.replace(/\s*\(\d[\d-]*\)\s*$/, '').trim();
  // Title-case each word
  return stripped.replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());
}

// ── Month grid ──

function MonthView({ anchorDate, itemsByDay, onSelectDay, selectedDay }) {
  const firstOfMonth = startOfMonth(anchorDate);
  const gridStart = startOfWeek(firstOfMonth);
  // 6 weeks = 42 days always — keeps grid height consistent
  const days = [];
  for (let i = 0; i < 42; i++) days.push(addDays(gridStart, i));

  const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div class="mds-cc__cal-month">
      <div class="mds-cc__cal-weekdays">
        {weekdayLabels.map(l => (
          <div key={l} class="mds-cc__cal-weekday">{l}</div>
        ))}
      </div>
      <div class="mds-cc__cal-grid">
        {days.map(d => {
          const key = ymd(d);
          const items = itemsByDay.get(key) || [];
          const inMonth = isSameMonth(d, anchorDate);
          const today = isToday(d);
          const selected = selectedDay === key;
          return (
            <div
              key={key}
              class={`mds-cc__cal-day${inMonth ? '' : ' mds-cc__cal-day--out'}${today ? ' mds-cc__cal-day--today' : ''}${selected ? ' mds-cc__cal-day--selected' : ''}${items.length > 0 ? ' mds-cc__cal-day--has-items' : ''}`}
              onClick={() => items.length > 0 && onSelectDay(key)}
              role={items.length > 0 ? 'button' : undefined}
              tabIndex={items.length > 0 ? 0 : undefined}
            >
              <div class="mds-cc__cal-day-num">{dayOfMonth(d)}</div>
              {items.length > 0 && (
                <div class="mds-cc__cal-day-dots">
                  {items.slice(0, 4).map((item, i) => (
                    <span
                      key={i}
                      class="mds-cc__cal-dot"
                      style={{ background: URGENCY_COLOR[item.urgency] || '#9ca3af' }}
                    />
                  ))}
                  {items.length > 4 && (
                    <span class="mds-cc__cal-day-overflow">+{items.length - 4}</span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Week view ──

function WeekView({ anchorDate, itemsByDay, onItemClick }) {
  const weekStart = startOfWeek(anchorDate);
  const days = [];
  for (let i = 0; i < 7; i++) days.push(addDays(weekStart, i));
  const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div class="mds-cc__cal-week">
      {days.map((d, i) => {
        const key = ymd(d);
        const items = itemsByDay.get(key) || [];
        const today = isToday(d);
        return (
          <div key={key} class={`mds-cc__cal-week-col${today ? ' mds-cc__cal-week-col--today' : ''}`}>
            <div class="mds-cc__cal-week-header">
              <span class="mds-cc__cal-week-dow">{weekdayLabels[i]}</span>
              <span class="mds-cc__cal-week-date">
                {d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
            <div class="mds-cc__cal-week-body">
              {items.length === 0 && <div class="mds-cc__cal-week-empty">&mdash;</div>}
              {items.map(item => {
                const canJump = item.kind === 'open';
                return (
                  <div
                    key={item.id}
                    class={`mds-cc__cal-week-item mds-cc__cal-week-item--${item.kind}${canJump ? ' mds-cc__cal-week-item--clickable' : ''}`}
                    style={{ borderLeftColor: URGENCY_COLOR[item.urgency] || '#9ca3af' }}
                    title={`${item.patientName} · ${item.type}`}
                    onClick={canJump ? () => onItemClick?.(item) : undefined}
                    role={canJump ? 'button' : undefined}
                    tabIndex={canJump ? 0 : undefined}
                  >
                    <div class="mds-cc__cal-week-patient">{shortPatientName(item.patientName)}</div>
                    <div class="mds-cc__cal-week-type">{item.type}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Day detail side panel ──
//
// Slides in from the right when a day is clicked. Shows all items for that day.
// Click an open assessment in the list → the panel switches to detail mode
// showing the assessment's full blockers/progress/revenue (via AssessmentPreview).
// Close button and back-arrow return you to the list / calendar as expected.

function DayDetailPanel({ dayKey, items, onClose, onOpenAnalyzer }) {
  const [expandedItem, setExpandedItem] = useState(null);

  // Reset expanded item when day changes
  useEffect(() => {
    setExpandedItem(null);
  }, [dayKey]);

  if (!dayKey || !items || items.length === 0) return null;
  const date = toLocalDate(dayKey);
  const label = date ? date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : dayKey;

  // Detail mode — show the assessment preview for a clicked item
  if (expandedItem && expandedItem.kind === 'open' && expandedItem.ref) {
    return (
      <>
        <div class="mds-cc__cal-panel-backdrop" onClick={onClose} />
        <div class="mds-cc__cal-panel mds-cc__cal-panel--detail">
          <div class="mds-cc__cal-panel-header">
            <button
              class="mds-cc__cal-panel-back"
              onClick={() => setExpandedItem(null)}
              aria-label="Back to day"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              {label}
            </button>
            {/* NO_TRACK: close-X */}
            <button class="mds-cc__cal-panel-close" onClick={onClose} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6"  y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div class="mds-cc__cal-panel-detail-title">
            <div class="mds-cc__cal-panel-detail-patient">{expandedItem.patientName}</div>
            <div class="mds-cc__cal-panel-detail-type">{expandedItem.type}</div>
          </div>
          <div class="mds-cc__cal-panel-body">
            <AssessmentPreview
              assessment={expandedItem.ref}
              onOpenAnalyzer={() => onOpenAnalyzer?.(expandedItem.ref)}
            />
          </div>
        </div>
      </>
    );
  }

  // List mode — show all items for the day
  return (
    <>
      <div class="mds-cc__cal-panel-backdrop" onClick={onClose} />
      <div class="mds-cc__cal-panel">
        <div class="mds-cc__cal-panel-header">
          <span class="mds-cc__cal-panel-date">{label}</span>
          {/* NO_TRACK: close-X */}
          <button class="mds-cc__cal-panel-close" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6"  y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div class="mds-cc__cal-panel-count">
          {items.length} {items.length === 1 ? 'assessment' : 'assessments'}
        </div>
        <div class="mds-cc__cal-panel-items">
          {items.map(item => {
            const canView = item.kind === 'open';
            const layerLabel = LAYER_LABEL[item.layer] || '';
            return (
              <div
                key={item.id}
                class={`mds-cc__cal-panel-item mds-cc__cal-panel-item--${item.layer}${canView ? ' mds-cc__cal-panel-item--clickable' : ''}`}
                style={{ borderLeftColor: URGENCY_COLOR[item.urgency] || '#9ca3af' }}
                onClick={canView ? () => setExpandedItem(item) : undefined}
                role={canView ? 'button' : undefined}
                tabIndex={canView ? 0 : undefined}
              >
                <div class="mds-cc__cal-panel-item-top">
                  <span class={`mds-cc__cal-panel-item-layer mds-cc__cal-panel-item-layer--${item.layer}`}>
                    {layerLabel}
                  </span>
                  <span class="mds-cc__cal-panel-item-patient">{item.patientName}</span>
                </div>
                <div class="mds-cc__cal-panel-item-meta">
                  {item.type}
                  {item.kind === 'upcoming' && (
                    <span class="mds-cc__cal-panel-item-badge">Not opened</span>
                  )}
                </div>
                {canView && (
                  <span class="mds-cc__cal-panel-item-chevron">&rsaquo;</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ── Layer toggle chip ──

function LayerToggle({ label, count, active, color, onToggle }) {
  return (
    <button
      class={`mds-cc__cal-layer${active ? ' mds-cc__cal-layer--active' : ''}`}
      style={active ? { borderColor: color, color: color } : undefined}
      onClick={onToggle}
      type="button"
    >
      <span class="mds-cc__cal-layer-dot" style={{ background: active ? color : '#d1d5db' }} />
      {label}
      <span class="mds-cc__cal-layer-count">{count}</span>
    </button>
  );
}

// ── Main Calendar ──

const DEFAULT_LAYERS = { assessments: true, queries: true, certs: true };

export function CalendarView({
  dashboardAssessments,
  scheduleItems,
  outstandingQueries,
  certs,
  onJumpToAssessment,
}) {
  const [mode, setMode] = useState('month'); // 'month' | 'week'
  const [layers, setLayers] = useState(DEFAULT_LAYERS);

  const allItems = useMemo(
    () => buildItems(dashboardAssessments, scheduleItems, outstandingQueries, certs),
    [dashboardAssessments, scheduleItems, outstandingQueries, certs]
  );

  // Filter by active layers
  const items = useMemo(
    () => allItems.filter(it => layers[it.layer]),
    [allItems, layers]
  );

  const itemsByDay = useMemo(() => {
    const map = new Map();
    for (const item of items) {
      const key = item.date;
      const list = map.get(key) || [];
      list.push(item);
      map.set(key, list);
    }
    // Sort within each day by urgency (overdue first)
    const urgencyRank = { overdue: 0, urgent: 1, approaching: 2, on_track: 3, far_out: 4, completed: 5 };
    for (const list of map.values()) {
      list.sort((a, b) => (urgencyRank[a.urgency] ?? 9) - (urgencyRank[b.urgency] ?? 9));
    }
    return map;
  }, [items]);

  // Smart default anchor: if today's month has any items, anchor there.
  // Otherwise find the earliest item in the data and anchor to that month.
  // This prevents the "calendar is empty" problem when everything is overdue.
  const defaultAnchor = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (items.length === 0) return today;

    const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    const hasItemsThisMonth = items.some(it => (it.date || '').startsWith(todayKey));
    if (hasItemsThisMonth) return today;

    // Find earliest item date
    const sorted = [...items].sort((a, b) => (a.date || '').localeCompare(b.date || ''));
    const earliest = sorted[0];
    const d = toLocalDate(earliest.date) || today;
    return d;
  }, [items]);

  const [anchor, setAnchor] = useState(defaultAnchor);
  const [selectedDay, setSelectedDay] = useState(null);

  // If the default changes (data loads after initial render), update the anchor
  // — but only if the user hasn't manually navigated away.
  const didUserNavigate = useRef(false);
  useEffect(() => {
    if (!didUserNavigate.current) setAnchor(defaultAnchor);
  }, [defaultAnchor]);

  const selectedItems = selectedDay ? itemsByDay.get(selectedDay) : null;

  // Count items outside the current view so we can show an "overdue elsewhere" banner
  const itemsOutsideView = useMemo(() => {
    if (mode === 'month') {
      const monthKey = `${anchor.getFullYear()}-${String(anchor.getMonth() + 1).padStart(2, '0')}`;
      return items.filter(it => !(it.date || '').startsWith(monthKey));
    }
    // Week mode: items not in this week
    const weekStart = startOfWeek(anchor);
    const weekEnd = addDays(weekStart, 6);
    const startKey = ymd(weekStart);
    const endKey = ymd(weekEnd);
    return items.filter(it => (it.date || '') < startKey || (it.date || '') > endKey);
  }, [items, anchor, mode]);

  const overdueOutsideView = itemsOutsideView.filter(it => it.urgency === 'overdue' || it.urgency === 'urgent').length;

  function handlePrev() {
    didUserNavigate.current = true;
    setSelectedDay(null);
    setAnchor(mode === 'month' ? addMonths(anchor, -1) : addDays(anchor, -7));
  }

  function handleNext() {
    didUserNavigate.current = true;
    setSelectedDay(null);
    setAnchor(mode === 'month' ? addMonths(anchor, 1) : addDays(anchor, 7));
  }

  function handleToday() {
    didUserNavigate.current = true;
    setSelectedDay(null);
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setAnchor(d);
  }

  // Jump to the month/week that contains the earliest overdue item
  function handleJumpToOverdue() {
    const overdueItems = items.filter(it => it.urgency === 'overdue' || it.urgency === 'urgent');
    if (overdueItems.length === 0) return;
    const sorted = [...overdueItems].sort((a, b) => (a.date || '').localeCompare(b.date || ''));
    const target = toLocalDate(sorted[0].date);
    if (!target) return;
    didUserNavigate.current = true;
    setSelectedDay(null);
    setAnchor(target);
  }

  function handleItemClick(item) {
    if (!onJumpToAssessment) return;
    // Only open-assessment items can be jumped to (they have a real ID)
    if (item.kind === 'open' && item.ref) {
      const id = item.ref.id || item.ref.assessmentId || item.ref.externalAssessmentId;
      onJumpToAssessment(id);
    }
  }

  const headerLabel = mode === 'month'
    ? monthLabel(anchor)
    : `Week of ${startOfWeek(anchor).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;

  return (
    <div class="mds-cc__cal">
      <div class="mds-cc__cal-toolbar">
        <div class="mds-cc__cal-nav">
          {/* NO_TRACK: pure-UI nav */}
          <button class="mds-cc__cal-nav-btn" onClick={handlePrev} aria-label="Previous">&lsaquo;</button>
          {/* NO_TRACK: pure-UI nav */}
          <button class="mds-cc__cal-today-btn" onClick={handleToday}>Today</button>
          {/* NO_TRACK: pure-UI nav */}
          <button class="mds-cc__cal-nav-btn" onClick={handleNext} aria-label="Next">&rsaquo;</button>
          <span class="mds-cc__cal-label">{headerLabel}</span>
        </div>
        <div class="mds-cc__cal-mode">
          <button
            class={`mds-cc__cal-mode-btn${mode === 'month' ? ' mds-cc__cal-mode-btn--active' : ''}`}
            onClick={() => { setMode('month'); setSelectedDay(null); }}
          >
            Month
          </button>
          <button
            class={`mds-cc__cal-mode-btn${mode === 'week' ? ' mds-cc__cal-mode-btn--active' : ''}`}
            onClick={() => { setMode('week'); setSelectedDay(null); }}
          >
            Week
          </button>
        </div>
      </div>

      {/* Layer toggles — show/hide assessments, queries, certs */}
      <div class="mds-cc__cal-layers">
        <LayerToggle
          label="Assessments"
          count={allItems.filter(it => it.layer === 'assessments').length}
          active={layers.assessments}
          color="#6366f1"
          onToggle={() => setLayers(l => ({ ...l, assessments: !l.assessments }))}
        />
        <LayerToggle
          label="Queries"
          count={allItems.filter(it => it.layer === 'queries').length}
          active={layers.queries}
          color="#a855f7"
          onToggle={() => setLayers(l => ({ ...l, queries: !l.queries }))}
        />
        <LayerToggle
          label="Certs"
          count={allItems.filter(it => it.layer === 'certs').length}
          active={layers.certs}
          color="#0891b2"
          onToggle={() => setLayers(l => ({ ...l, certs: !l.certs }))}
        />
      </div>

      {/* Banner: items outside current view */}
      {overdueOutsideView > 0 && (
        <div class="mds-cc__cal-banner" onClick={handleJumpToOverdue} role="button" tabIndex={0}>
          <span class="mds-cc__cal-banner-icon">{'\u26A0'}</span>
          <span>
            <strong>{overdueOutsideView}</strong> overdue {overdueOutsideView === 1 ? 'item' : 'items'} outside this {mode}
          </span>
          <span class="mds-cc__cal-banner-action">Jump to earliest &rsaquo;</span>
        </div>
      )}

      {mode === 'month' && (
        <MonthView
          anchorDate={anchor}
          itemsByDay={itemsByDay}
          onSelectDay={setSelectedDay}
          selectedDay={selectedDay}
        />
      )}

      {mode === 'week' && (
        <WeekView
          anchorDate={anchor}
          itemsByDay={itemsByDay}
          onItemClick={handleItemClick}
        />
      )}

      {/* Slide-in side panel — shown when a day is selected (month mode only) */}
      {mode === 'month' && selectedItems && (
        <DayDetailPanel
          dayKey={selectedDay}
          items={selectedItems}
          onClose={() => setSelectedDay(null)}
          onOpenAnalyzer={(assessment) => {
            // Close the panel and hand off to the parent
            setSelectedDay(null);
            onJumpToAssessment?.(assessment.id || assessment.assessmentId || assessment.externalAssessmentId);
          }}
        />
      )}
    </div>
  );
}
