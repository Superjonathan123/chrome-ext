import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * useCertsByPatient — fetches the cert chain for a specific patient.
 *
 * Resolves facilityName/orgSlug internally (same pattern as usePDPMAnalyzer).
 * Returns a flat array — consumer handles grouping by partAStayId.
 *
 * @param {string|null} patientId - PCC patient ID
 * @returns {{ certs: Array, loading: boolean, error: string|null, refresh: Function }}
 */
export function useCertsByPatient(patientId) {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchCount, setFetchCount] = useState(0);

  const refresh = useCallback(() => {
    setFetchCount(n => n + 1);
  }, []);

  useEffect(() => {
    if (!patientId || !window.CertAPI) {
      setCerts([]);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        // Resolve facility context (same pattern as usePDPMAnalyzer.getApiContext)
        const orgResponse = getOrg();
        const orgSlug = orgResponse?.org;
        const facilityName = window.getChatFacilityInfo?.() || '';

        if (!orgSlug || !facilityName) {
          if (!cancelled) {
            setCerts([]);
            setLoading(false);
          }
          return;
        }

        const data = await window.CertAPI.fetchByPatient(facilityName, orgSlug, patientId);
        if (!cancelled) {
          setCerts(data || []);
        }
      } catch (err) {
        // 404/403 = module disabled or no access — silently return empty
        if (!cancelled) {
          setCerts([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, [patientId, fetchCount]);

  return { certs, loading, error, refresh };
}
