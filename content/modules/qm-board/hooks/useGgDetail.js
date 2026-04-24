import { useState, useEffect, useCallback } from 'preact/hooks';
import { unwrap } from '../utils/api.js';

/**
 * useGgDetail — per-patient GG decline detail (chart + table source).
 *
 *   GET /api/extension/patients/[patientId]/gg-decline
 *     ?facilityName&orgSlug&days=30&mode=qm
 *
 * Listens for 'super:qm-snooze-changed' so the detail view updates its
 * Snooze/Unsnooze button state immediately after a mutation.
 */
export function useGgDetail({ patientId, facilityName, orgSlug, days = 30, mode = 'qm', enabled = true }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    if (!enabled) return () => {};
    if (!patientId || !facilityName || !orgSlug) {
      setLoading(false);
      setError('Missing patient, facility, or org context');
      return () => {};
    }
    let cancelled = false;

    setLoading(true);
    setError(null);

    const params = new URLSearchParams({
      facilityName, orgSlug,
      days: String(days),
      mode,
    });

    chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint: `/api/extension/patients/${patientId}/gg-decline?${params}`,
      options: { method: 'GET' },
    }).then(res => {
      if (cancelled) return;
      if (!res?.success) throw new Error(res?.error || 'Failed to load GG detail');
      setData(unwrap(res.data));
    }).catch(err => {
      if (cancelled) return;
      console.error('[QMBoard] gg-decline fetch failed', err);
      setError(err.message || 'Failed to load');
    }).finally(() => {
      if (!cancelled) setLoading(false);
    });

    return () => { cancelled = true; };
  }, [patientId, facilityName, orgSlug, days, mode, enabled]);

  // Fire the initial fetch + refetch on snooze-changed. Tracks the most
  // recent in-flight request so we can cancel it if a new fetch kicks off
  // before it completes.
  useEffect(() => {
    let cancelCurrent = fetchData();
    const handler = () => {
      if (cancelCurrent) cancelCurrent();
      cancelCurrent = fetchData();
    };
    window.addEventListener('super:qm-snooze-changed', handler);
    return () => {
      window.removeEventListener('super:qm-snooze-changed', handler);
      if (cancelCurrent) cancelCurrent();
    };
  }, [fetchData]);

  return { data, loading, error };
}
