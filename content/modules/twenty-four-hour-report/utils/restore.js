/**
 * sessionStorage handoff for the "open in PCC" flow.
 *
 * When a user clicks the ↗ icon on a finding, we persist a payload and
 * navigate the current tab to that resident's PCC chart. On content-script
 * re-init (post-navigation), hydrateTwentyFourHourRestore() reads this
 * payload and re-opens the 24-hour panel at the same date, scrolled to the
 * same finding, with a pulse highlight.
 */

const STORAGE_KEY = 'super:24hr:restore';
const VERSION = 1;
const TTL_MS = 30 * 60 * 1000; // 30 minutes

/**
 * Persist the restore payload before navigating away.
 */
export function writeRestorePayload({
  facilityName,
  orgSlug,
  date,
  findingId,
  scrollTop,
}) {
  if (!facilityName || !orgSlug || !date) return false;
  const payload = {
    version: VERSION,
    facilityName,
    orgSlug,
    date,
    findingId: findingId || null,
    scrollTop: Number.isFinite(scrollTop) ? scrollTop : 0,
    expiresAt: Date.now() + TTL_MS,
  };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch (err) {
    console.warn('[24HR] failed to write restore payload', err);
    return false;
  }
}

/**
 * Read and validate the restore payload. Returns the payload or null.
 * Does NOT clear the key — that's the caller's job after a successful
 * hand-off so we don't double-fire.
 */
export function readRestorePayload() {
  let raw;
  try {
    raw = sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
  if (!raw) return null;

  let payload;
  try {
    payload = JSON.parse(raw);
  } catch {
    clearRestorePayload();
    return null;
  }

  if (!payload || typeof payload !== 'object') {
    clearRestorePayload();
    return null;
  }
  if (payload.version !== VERSION) {
    clearRestorePayload();
    return null;
  }
  if (!payload.date || !payload.facilityName || !payload.orgSlug) {
    clearRestorePayload();
    return null;
  }
  if (!Number.isFinite(payload.expiresAt) || Date.now() > payload.expiresAt) {
    clearRestorePayload();
    return null;
  }
  return payload;
}

export function clearRestorePayload() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* noop */
  }
}
