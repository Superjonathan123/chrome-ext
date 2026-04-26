import { useState, useCallback } from 'preact/hooks';
import { unwrap } from '../utils/api.js';

/**
 * Snooze mutation hook — covers both snooze flows:
 *
 *   GG decline:   POST   /patients/[id]/gg-decline/snooze
 *                 DELETE /patients/[id]/gg-decline/snooze/[snoozeId]
 *
 *   Non-GG alert: POST   /patients/[id]/preventable-alert-snooze
 *                 DELETE /patients/[id]/preventable-alert-snooze/[snoozeId]
 *
 * On success, fires a 'super:qm-snooze-changed' window event so the main
 * board hook can refetch.
 */
export function useSnooze({ facilityName, orgSlug }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const qs = new URLSearchParams({ facilityName, orgSlug }).toString();

  const mutate = useCallback(async (endpoint, method, body) => {
    setPending(true);
    setError(null);
    try {
      const res = await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint,
        options: {
          method,
          headers: body ? { 'Content-Type': 'application/json' } : undefined,
          body: body ? JSON.stringify(body) : undefined,
        },
      });
      if (!res?.success) throw new Error(res?.error || 'Request failed');
      window.dispatchEvent(new CustomEvent('super:qm-snooze-changed'));
      return unwrap(res.data);
    } catch (err) {
      console.error('[QMBoard] snooze mutation failed', err);
      window.SuperAnalytics?.track?.('error_shown', {
        surface: 'qm_snooze',
        error_code: window.SuperAnalytics.toErrorCode(err),
        error_type: 'api_error',
      });
      setError(err.message || 'Mutation failed');
      throw err;
    } finally {
      setPending(false);
    }
  }, [qs]);

  const snoozeGg = useCallback((patientId, days, reason) =>
    mutate(
      `/api/extension/patients/${patientId}/gg-decline/snooze?${qs}`,
      'POST',
      { days, reason },
    ), [mutate, qs]);

  const unsnoozeGg = useCallback((patientId, snoozeId) =>
    mutate(
      `/api/extension/patients/${patientId}/gg-decline/snooze/${snoozeId}?${qs}`,
      'DELETE',
      null,
    ), [mutate, qs]);

  const snoozeAlert = useCallback((patientId, alertId, days, reason) =>
    mutate(
      `/api/extension/patients/${patientId}/preventable-alert-snooze?${qs}`,
      'POST',
      { alertId, days, reason },
    ), [mutate, qs]);

  const unsnoozeAlert = useCallback((patientId, snoozeId) =>
    mutate(
      `/api/extension/patients/${patientId}/preventable-alert-snooze/${snoozeId}?${qs}`,
      'DELETE',
      null,
    ), [mutate, qs]);

  return { snoozeGg, unsnoozeGg, snoozeAlert, unsnoozeAlert, pending, error };
}
