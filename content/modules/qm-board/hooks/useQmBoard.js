import { useState, useEffect, useCallback } from 'preact/hooks';
import { unwrap } from '../utils/api.js';

/**
 * useQmBoard — parallel fetch of Currently Triggering + Preventable Alerts
 * from the extension QM endpoints.
 *
 *   GET /api/extension/qm-planner/currently-triggering?facilityName&orgSlug
 *   GET /api/extension/qm-planner/preventable-alerts?facilityName&orgSlug
 */
export function useQmBoard({ facilityName, orgSlug }) {
  const [currentlyTriggering, setCurrentlyTriggering] = useState(null);
  const [preventableAlerts, setPreventableAlerts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!facilityName || !orgSlug) {
      setError('Missing facility or organization context');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    const params = new URLSearchParams({ facilityName, orgSlug });

    try {
      const [ctRes, paRes] = await Promise.all([
        chrome.runtime.sendMessage({
          type: 'API_REQUEST',
          endpoint: `/api/extension/qm-planner/currently-triggering?${params}`,
          options: { method: 'GET' },
        }),
        chrome.runtime.sendMessage({
          type: 'API_REQUEST',
          endpoint: `/api/extension/qm-planner/preventable-alerts?${params}`,
          options: { method: 'GET' },
        }),
      ]);

      if (!ctRes?.success) throw new Error(ctRes?.error || 'Failed to load currently-triggering');
      if (!paRes?.success) throw new Error(paRes?.error || 'Failed to load preventable alerts');

      setCurrentlyTriggering(unwrap(ctRes.data));
      setPreventableAlerts(unwrap(paRes.data));
    } catch (err) {
      console.error('[QMBoard] fetch failed', err);
      window.SuperAnalytics?.track?.('error_shown', {
        surface: 'qm_board',
        error_code: window.SuperAnalytics.toErrorCode(err),
        error_type: 'api_error',
      });
      setError(err.message || 'Failed to load QM board');
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Refetch after snooze/unsnooze mutations anywhere in the app.
  useEffect(() => {
    const handler = () => fetchData();
    window.addEventListener('super:qm-snooze-changed', handler);
    return () => window.removeEventListener('super:qm-snooze-changed', handler);
  }, [fetchData]);

  return { currentlyTriggering, preventableAlerts, loading, error, retry: fetchData };
}
