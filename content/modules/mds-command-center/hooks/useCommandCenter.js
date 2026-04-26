import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * Data fetching hook for /api/extension/mds/dashboard
 */
export function useCommandCenter({ facilityName, orgSlug }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        facilityName,
        orgSlug,
        windowDays: '30'
      });

      const result = await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint: `/api/extension/mds/dashboard?${params}`,
        options: { method: 'GET' }
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to load MDS dashboard data');
      }

      setData(result.data);
    } catch (err) {
      console.error('[MDSCommandCenter] Failed to fetch dashboard:', err);
      window.SuperAnalytics?.track?.('error_shown', {
        surface: 'mds_command_center',
        error_code: window.SuperAnalytics.toErrorCode(err),
        error_type: 'api_error',
      });
      setError(err.message || 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry: fetchData };
}
