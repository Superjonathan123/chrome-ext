import { useState, useEffect, useCallback, useMemo } from 'preact/hooks';

// Collapse legacy 4-tier urgency to the 3-tier contract the backend now ships.
// ('urgent' and 'approaching' both → 'warning'.)
const URGENCY_ALIAS = { urgent: 'warning', approaching: 'warning' };
function normalizeUrgency(u) { return URGENCY_ALIAS[u] || u || 'ok'; }

function toIsoDate(d) {
  const yr = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const dy = String(d.getDate()).padStart(2, '0');
  return `${yr}-${mo}-${dy}`;
}

function startOfWeek(d) {
  const out = new Date(d);
  out.setHours(0, 0, 0, 0);
  const day = out.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  out.setDate(out.getDate() + mondayOffset);
  return out;
}

function addDays(d, n) {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

/**
 * useMdsPlanner — fetches the weekly planner data from the two backend endpoints.
 *
 * Calls /api/extension/planner/week-events + /summary in parallel.
 * Re-fetches when the week range changes or when a mutation event fires
 * (super:query-sent, super:cert-signed).
 */
export function useMdsPlanner({ facilityName, orgSlug }) {
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()));
  const [events, setEvents] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const weekEnd = useMemo(() => addDays(weekStart, 6), [weekStart]);

  const fetchData = useCallback(async () => {
    if (!facilityName || !orgSlug) return;
    setLoading(true);
    setError(null);

    const weekParams = new URLSearchParams({
      facilityName, orgSlug,
      startDate: toIsoDate(weekStart),
      endDate: toIsoDate(weekEnd),
    });
    const summaryParams = new URLSearchParams({ facilityName, orgSlug });

    try {
      const [weekRes, summaryRes] = await Promise.all([
        chrome.runtime.sendMessage({
          type: 'API_REQUEST',
          endpoint: `/api/extension/planner/week-events?${weekParams}`,
          options: { method: 'GET' },
        }),
        chrome.runtime.sendMessage({
          type: 'API_REQUEST',
          endpoint: `/api/extension/planner/summary?${summaryParams}`,
          options: { method: 'GET' },
        }),
      ]);

      if (!weekRes?.success) throw new Error(weekRes?.error || 'Failed to load planner events');
      if (!summaryRes?.success) throw new Error(summaryRes?.error || 'Failed to load planner summary');

      const rawEvents = weekRes.data?.events || [];
      const normalizedEvents = rawEvents.map(e => ({ ...e, urgency: normalizeUrgency(e.urgency) }));
      setEvents(normalizedEvents);
      setSummary(summaryRes.data?.summary || null);
    } catch (err) {
      console.error('[MdsPlanner] fetch failed', err);
      setError(err.message || 'Failed to load planner');
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug, weekStart, weekEnd]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Refetch when downstream actions mutate state the planner depends on.
  useEffect(() => {
    const handler = () => fetchData();
    window.addEventListener('super:query-sent', handler);
    window.addEventListener('super:cert-signed', handler);
    window.addEventListener('super:care-plan-updated', handler);
    return () => {
      window.removeEventListener('super:query-sent', handler);
      window.removeEventListener('super:cert-signed', handler);
      window.removeEventListener('super:care-plan-updated', handler);
    };
  }, [fetchData]);

  const goPrevWeek = useCallback(() => setWeekStart(w => addDays(w, -7)), []);
  const goNextWeek = useCallback(() => setWeekStart(w => addDays(w, 7)), []);
  const goThisWeek = useCallback(() => setWeekStart(startOfWeek(new Date())), []);

  return {
    events, summary, loading, error,
    weekStart, weekEnd,
    goPrevWeek, goNextWeek, goThisWeek,
    refetch: fetchData,
  };
}
