import { useState, useEffect } from 'preact/hooks';

/**
 * Fetches facility-wide doc risk items from the dedicated endpoint.
 * Only fires when `enabled` is true (e.g. user navigates to the doc risks view).
 *
 * Endpoint: GET /api/extension/mds/doc-risks
 */
export function useDocRisks({ facilityName, orgSlug, windowDays = 30, enabled = false }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled || !facilityName) {
      setData(null);
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    async function fetchDocRisks() {
      try {
        const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
        if (!authState.authenticated) {
          throw new Error('Please log in to view documentation risks');
        }

        const orgResponse = getOrg();
        const resolvedOrg = orgSlug || orgResponse?.org;

        const params = new URLSearchParams({
          facilityName,
          orgSlug: resolvedOrg,
          windowDays: String(windowDays),
        });

        const result = await chrome.runtime.sendMessage({
          type: 'API_REQUEST',
          endpoint: `/api/extension/mds/doc-risks?${params}`,
          options: { method: 'GET' },
        });

        if (!result.success) {
          throw new Error(result.error || 'Failed to load documentation risks');
        }

        if (!cancelled) setData(result.data);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load documentation risks');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchDocRisks();
    return () => { cancelled = true; };
  }, [facilityName, orgSlug, windowDays, enabled]);

  return { data, loading, error };
}
