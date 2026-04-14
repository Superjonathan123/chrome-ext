import { useState, useEffect } from 'preact/hooks';

/**
 * Fetches the facility-wide MDS assessment schedule — upcoming OBRA quarterlies,
 * annuals, and admissions — with "isOpened" flags indicating whether each
 * expected assessment has already been opened in PCC.
 *
 * Endpoint: GET /api/extension/mds/schedule
 *
 * Response shape:
 *   {
 *     success: true,
 *     facility: { locationId, facilityName },
 *     schedule: UpcomingAssessment[],
 *     summary: { total, overdue, urgent, approaching, opened, notOpened },
 *     generatedAt: string
 *   }
 *
 * UpcomingAssessment:
 *   {
 *     patientId, patientName,
 *     assessmentType: 'quarterly' | 'annual' | 'admission',
 *     dueDate: 'YYYY-MM-DD',
 *     daysUntilDue: number,
 *     urgency: 'overdue' | 'urgent' | 'approaching' | 'on_track' | 'far_out',
 *     isOpened: boolean,
 *     openedAssessmentId?: string,
 *     openedAssessmentStatus?: string,
 *     openedAssessmentArd?: string,
 *     basedOnArd: string | null,
 *     basedOnDescription: string | null,
 *   }
 */
export function useSchedule({ facilityName, orgSlug, enabled = true }) {
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

    async function fetchSchedule() {
      try {
        const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
        if (!authState.authenticated) {
          throw new Error('Please log in to view the MDS schedule');
        }

        const orgResponse = typeof getOrg === 'function' ? getOrg() : null;
        const resolvedOrg = orgSlug || orgResponse?.org;

        const params = new URLSearchParams({
          facilityName,
          orgSlug: resolvedOrg,
        });

        const result = await chrome.runtime.sendMessage({
          type: 'API_REQUEST',
          endpoint: `/api/extension/mds/schedule?${params}`,
          options: { method: 'GET' },
        });

        if (!result.success) {
          throw new Error(result.error || 'Failed to load MDS schedule');
        }

        if (!cancelled) setData(result.data);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load MDS schedule');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchSchedule();
    return () => { cancelled = true; };
  }, [facilityName, orgSlug, enabled]);

  return { data, loading, error };
}
