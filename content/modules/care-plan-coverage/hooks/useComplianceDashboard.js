import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * Data fetching hook for facility-wide compliance dashboard.
 */
export function useComplianceDashboard({ facilityName, orgSlug, enabled }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!enabled || !facilityName || !orgSlug) return;
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        facilityName: facilityName || '',
        orgSlug: orgSlug || ''
      });

      const result = await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint: `/api/extension/compliance/dashboard?${params}`
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to load compliance dashboard');
      }

      setData(result.data);
    } catch (err) {
      console.error('[ComplianceDashboard] Failed to fetch:', err);
      setError(err.message || 'Failed to load compliance data');
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug, enabled]);

  useEffect(() => {
    if (enabled) fetchData();
  }, [fetchData, enabled]);

  return { data, loading, error, retry: fetchData };
}
