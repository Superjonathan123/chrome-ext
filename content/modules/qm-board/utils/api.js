/**
 * Background worker wraps each API response as { success, data: <server-resp> }.
 * Our newer endpoints return their own { success, data: {...} } envelope on top,
 * so `result.data` is the server envelope and the real payload is `result.data.data`.
 * Legacy endpoints return their payload flat (no inner envelope). This helper
 * handles both shapes transparently.
 */
export function unwrap(payload) {
  if (payload && typeof payload === 'object' && 'success' in payload && 'data' in payload) {
    return payload.data;
  }
  return payload;
}
