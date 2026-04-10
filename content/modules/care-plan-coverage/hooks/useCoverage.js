import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * Data fetching hook for care plan coverage summary + changes.
 * Follows the same pattern as useCommandCenter.js.
 */
export function useCoverage({ patientId, facilityName, orgSlug }) {
  const [summary, setSummary] = useState(null);
  const [changes, setChanges] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchAll = useCallback(async () => {
    if (!patientId) return;
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({ facilityName: facilityName || '', orgSlug: orgSlug || '' });

      const [summaryRes, changesRes] = await Promise.all([
        chrome.runtime.sendMessage({
          type: 'API_REQUEST',
          endpoint: `/api/extension/patients/${patientId}/coverage/summary?${params}`
        }),
        chrome.runtime.sendMessage({
          type: 'API_REQUEST',
          endpoint: `/api/extension/patients/${patientId}/coverage/changes?${params}`
        })
      ]);

      if (!summaryRes.success) {
        throw new Error(summaryRes.error || 'Failed to load coverage summary');
      }

      setSummary(summaryRes.data);
      setChanges(changesRes.success ? changesRes.data : null);
    } catch (err) {
      console.error('[CoveragePanel] Failed to fetch coverage:', err);
      setError(err.message || 'Failed to load coverage data');
    } finally {
      setLoading(false);
    }
  }, [patientId, facilityName, orgSlug]);

  const refresh = useCallback(async () => {
    if (!patientId) return;
    setRefreshing(true);

    try {
      // Trigger AI re-check
      await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint: `/api/patients/${patientId}/care-plans/check`,
        options: { method: 'POST' }
      });

      // Wait for processing, then re-fetch
      await new Promise(r => setTimeout(r, 5000));
      await fetchAll();
    } catch (err) {
      console.error('[CoveragePanel] Refresh failed:', err);
      setError('Refresh failed. Showing cached data.');
    } finally {
      setRefreshing(false);
    }
  }, [patientId, fetchAll]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { summary, changes, loading, error, refreshing, refresh, retry: fetchAll };
}
