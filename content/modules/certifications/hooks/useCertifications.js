import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * Fetches certifications list with optional filters.
 * Re-fetches when filters change.
 *
 * Endpoint: GET /api/extension/certifications
 */
export function useCertifications({ facilityName, orgSlug, status, patientId }) {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!facilityName || !orgSlug) return;

    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({ facilityName, orgSlug });
      if (status) params.set('status', status);
      if (patientId) params.set('patientId', patientId);

      const result = await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint: `/api/extension/certifications?${params}`,
        options: { method: 'GET' }
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to load certifications');
      }

      setCerts(result.data?.certifications || []);
    } catch (err) {
      console.error('[Certifications] Failed to fetch certifications:', err);
      window.SuperAnalytics?.track?.('error_shown', {
        surface: 'cert_view',
        error_code: window.SuperAnalytics.toErrorCode(err),
        error_type: 'api_error',
      });
      setError(err.message || 'Failed to load certifications');
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug, status, patientId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { certs, loading, error, refetch: fetchData };
}
