/**
 * Fetch coverage history for all patients at a facility in one request.
 *
 * @param {string} facilityName
 * @param {string} orgSlug
 * @param {number} limit - max runs per patient (default 5)
 * @returns {Promise<Map<string, Array<{date: string, score: number}>>>}
 */
export async function fetchPatientHistories(facilityName, orgSlug, limit = 5) {
  const results = new Map();

  try {
    const params = new URLSearchParams({
      facilityName: facilityName || '',
      orgSlug: orgSlug || '',
      limit: String(limit)
    });

    const result = await chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint: `/api/extension/compliance/dashboard/history?${params}`
    });

    if (result?.success && result?.data?.patients) {
      for (const [patientId, runs] of Object.entries(result.data.patients)) {
        if (Array.isArray(runs)) {
          results.set(patientId, runs.map(r => ({ date: r.checkedAt, score: r.overallScore })));
        }
      }
    }
  } catch (err) {
    console.warn('[PatientHistory] Batch fetch failed:', err);
  }

  return results;
}
