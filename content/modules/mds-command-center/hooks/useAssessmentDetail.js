import { useState, useEffect } from 'preact/hooks';

/**
 * Lazy-loads full PDPM detail for a single assessment.
 * Only fetches when externalAssessmentId is truthy (card expanded).
 *
 * Uses same endpoint as PDPMAnalyzer: /api/extension/mds/pdpm-potential
 */
export function useAssessmentDetail(externalAssessmentId) {
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!externalAssessmentId) {
      setDetailData(null);
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    async function fetchDetail() {
      try {
        const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
        if (!authState.authenticated) {
          throw new Error('Please log in to view detail');
        }

        const orgResponse = getOrg();
        const orgSlug = orgResponse?.org;
        const facilityName = window.getChatFacilityInfo?.() || '';

        const params = new URLSearchParams({
          externalAssessmentId,
          facilityName,
          orgSlug,
        });

        const result = await chrome.runtime.sendMessage({
          type: 'API_REQUEST',
          endpoint: `/api/extension/mds/pdpm-potential?${params}`,
          options: { method: 'GET' },
        });

        if (!result.success) {
          throw new Error(result.error || 'Failed to load assessment detail');
        }

        if (!cancelled) setDetailData(result.data);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load detail');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchDetail();
    return () => { cancelled = true; };
  }, [externalAssessmentId]);

  return { detailData, loading, error };
}
