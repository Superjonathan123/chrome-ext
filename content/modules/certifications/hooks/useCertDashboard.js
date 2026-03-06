import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * Fetches certification dashboard summary.
 * Returns data: null when the certs module is disabled for this facility.
 *
 * Endpoint: GET /api/extension/certifications/dashboard
 */
export function useCertDashboard({ facilityName, orgSlug, enabled = false }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!enabled || !facilityName || !orgSlug) return;

    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({ facilityName, orgSlug });
      const result = await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint: `/api/extension/certifications/dashboard?${params}`,
        options: { method: 'GET' }
      });

      // Non-2xx (404/403) means module disabled or no access — treat as null
      if (!result.success) {
        setData(null);
        return;
      }

      setData(result.data || null);
    } catch (err) {
      // Network errors etc — silently treat as disabled
      console.warn('[Certifications] Dashboard unavailable:', err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry: fetchData };
}
