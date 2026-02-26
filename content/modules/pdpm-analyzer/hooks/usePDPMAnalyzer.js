import { useState, useEffect } from 'preact/hooks';

/**
 * usePDPMAnalyzer — fetches PDPM data for a given MDS context.
 *
 * For scope 'mds': fetches single-assessment PDPM detail via pdpm-potential.
 * For scope 'patient': fetches patient's assessment list, then auto-selects first.
 *
 * @param {object} context - { scope, assessmentId, patientId, patientName }
 * @returns {{ data, loading, error, retry }}
 */
export function usePDPMAnalyzer(context) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchCount, setFetchCount] = useState(0);

  function retry() {
    setFetchCount(n => n + 1);
  }

  useEffect(() => {
    if (!context) return;

    let cancelled = false;

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
        if (!authState.authenticated) {
          throw new Error('Please log in to view MDS data');
        }

        const orgResponse = await chrome.runtime.sendMessage({ type: 'GET_ORG' });
        const orgSlug = orgResponse?.org;
        const facilityName = window.getChatFacilityInfo?.() || '';

        if (!orgSlug || !facilityName) {
          throw new Error('Could not determine organization or facility');
        }

        if (context.scope === 'mds' && context.assessmentId) {
          const params = new URLSearchParams({ externalAssessmentId: context.assessmentId, facilityName, orgSlug });
          const result = await chrome.runtime.sendMessage({
            type: 'API_REQUEST',
            endpoint: `/api/extension/mds/pdpm-potential?${params}`,
            options: { method: 'GET' }
          });
          if (!result.success) throw new Error(result.error || 'Failed to load MDS data');
          if (!cancelled) setData({ scope: 'mds', assessment: result.data });

        } else if (context.scope === 'patient' && context.patientId) {
          const params = new URLSearchParams({ facilityName, orgSlug });
          const result = await chrome.runtime.sendMessage({
            type: 'API_REQUEST',
            endpoint: `/api/extension/patients/${context.patientId}/assessments?${params}`,
            options: { method: 'GET' }
          });
          if (!result.success) throw new Error(result.error || 'Failed to load patient data');

          const responseData = result.data?.data || result.data || result;
          const patientName = responseData.patientName || context.patientName || 'Patient';
          const assessments = responseData.assessments || [];

          if (!cancelled) {
            setData({ scope: 'patient', patientId: context.patientId, patientName, assessments });
          }
        } else {
          if (!cancelled) setData({ scope: 'global', assessments: [] });
        }
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load data');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, [context?.scope, context?.assessmentId, context?.patientId, fetchCount]);

  return { data, loading, error, retry };
}
