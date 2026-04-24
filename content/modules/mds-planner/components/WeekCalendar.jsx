import { useMemo } from 'preact/hooks';
import { EventRow } from './EventRow.jsx';

const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function toIsoDate(d) {
  const yr = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const dy = String(d.getDate()).padStart(2, '0');
  return `${yr}-${mo}-${dy}`;
}

function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate();
}

// Urgency desc, then type asc. Keeps overdue at the top of the day.
const URGENCY_ORDER = { overdue: 0, warning: 1, ok: 2 };
function sortEvents(list) {
  return [...list].sort((a, b) => {
    const ua = URGENCY_ORDER[a.urgency] ?? 3;
    const ub = URGENCY_ORDER[b.urgency] ?? 3;
    if (ua !== ub) return ua - ub;
    return (a.type || '').localeCompare(b.type || '');
  });
}

export function WeekCalendar({ events, weekStart, selectedDay, onSelectDay }) {
  const today = new Date(); today.setHours(0, 0, 0, 0);

  // Build array of 7 day objects with events bucketed by ISO date.
  const days = useMemo(() => {
    const out = [];
    const byDay = new Map();
    for (const e of events || []) {
      if (!byDay.has(e.date)) byDay.set(e.date, []);
      byDay.get(e.date).push(e);
    }
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      const iso = toIsoDate(d);
      out.push({
        date: d,
        iso,
        events: sortEvents(byDay.get(iso) || []),
        isToday: sameDay(d, today),
      });
    }
    return out;
  }, [events, weekStart]);

  return (
    <div class="mds-pl__week">
      {days.map(day => {
        const isSelected = selectedDay === day.iso;
        const isEmpty = day.events.length === 0;
        return (
          <div
            key={day.iso}
            class={`mds-pl__day${day.isToday ? ' mds-pl__day--today' : ''}${isSelected ? ' mds-pl__day--selected' : ''}${isEmpty ? ' mds-pl__day--empty' : ''}${onSelectDay ? ' mds-pl__day--clickable' : ''}`}
            onClick={onSelectDay ? () => onSelectDay(isSelected ? null : day.iso) : undefined}
            role={onSelectDay ? 'button' : undefined}
            tabIndex={onSelectDay ? 0 : undefined}
          >
            <div class="mds-pl__day-head">
              <span class="mds-pl__day-dow">{DOW[(day.date.getDay() + 6) % 7]}</span>
              <span class="mds-pl__day-num">{day.date.getDate()}</span>
            </div>
            <div class="mds-pl__day-events">
              {day.events.map((e, idx) => (
                <EventRow key={`${e.type}-${e.patientId}-${idx}`} event={e} />
              ))}
              {isEmpty && <span class="mds-pl__day-quiet">—</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
