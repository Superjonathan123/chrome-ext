import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * Data fetching hook for compliance dashboard trending data.
 */
export function useTrending({ facilityName, orgSlug, days = 30, enabled = true }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!enabled || !facilityName || !orgSlug) return;
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        days: String(days),
        facilityName: facilityName || '',
        orgSlug: orgSlug || ''
      });

      const result = await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint: `/api/extension/compliance/dashboard/trending?${params}`
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to load trending data');
      }

      setData(result.data);
    } catch (err) {
      console.error('[Trending] Failed to fetch:', err);
      setError(err.message || 'Failed to load trending data');
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug, days, enabled]);

  useEffect(() => {
    if (enabled) fetchData();
  }, [fetchData, enabled]);

  return { data, loading, error, retry: fetchData };
}
