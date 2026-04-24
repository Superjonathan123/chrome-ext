import { useEffect, useRef } from 'preact/hooks';

/**
 * useRestoreFromPCC — after a round-trip to PCC, scroll the restored finding
 * into view and briefly pulse it. Falls back to restoring the panel's scroll
 * offset if the finding row no longer exists (report regenerated, row culled).
 *
 * Runs exactly once per payload — once the restore completes (or is judged
 * irrecoverable), the effect no-ops.
 */
export function useRestoreFromPCC({ payload, currentReport, currentDate, bodyRef }) {
  const doneRef = useRef(false);

  useEffect(() => {
    if (!payload || doneRef.current) return;
    // Wait until we have the right day's report loaded.
    if (!currentReport || currentDate !== payload.date) return;

    // Defer one frame so the list has committed to the DOM.
    const raf = requestAnimationFrame(() => {
      const body = bodyRef.current;
      if (!body) { doneRef.current = true; return; }

      const row = payload.findingId
        ? body.querySelector(`[data-finding-id="${cssEscape(payload.findingId)}"]`)
        : null;

      if (row) {
        row.scrollIntoView({ block: 'center', behavior: 'auto' });
        row.classList.add('thr__row--pulse');
        const clear = () => row.classList.remove('thr__row--pulse');
        row.addEventListener('animationend', clear, { once: true });
        // Safety: remove the class even if animationend never fires.
        setTimeout(clear, 2500);
      } else if (Number.isFinite(payload.scrollTop)) {
        body.scrollTop = payload.scrollTop;
      }

      doneRef.current = true;
    });

    return () => cancelAnimationFrame(raf);
  }, [payload, currentReport, currentDate, bodyRef]);
}

function cssEscape(value) {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(value);
  }
  return String(value).replace(/(["\\\]])/g, '\\$1');
}
