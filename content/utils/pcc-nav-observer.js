// Observes PCC SPA navigation. Fires pcc_page_viewed on each new path and
// updates the pcc_page_type super-property. URLs are never sent — only the
// scope ('mds' | 'patient' | 'global') and a has_patient_context boolean.
//
// Reads context from window.getMDSContext (attached by content/super-menu/context.js).
// That global may not be available at the very first emit (depends on module
// load order); we fall back to 'unknown' until it appears.

import { track, setPccContext } from './analytics.js';

let lastPath = null;

function detectContext() {
  const fn = typeof window !== 'undefined' && window.getMDSContext;
  if (typeof fn !== 'function') {
    return { pageType: 'unknown', hasPatientContext: false, hasAssessment: false };
  }
  try {
    const ctx = fn();
    return {
      pageType: ctx?.scope || 'unknown',
      hasPatientContext: !!ctx?.patientId,
      hasAssessment: !!ctx?.assessmentId,
    };
  } catch {
    return { pageType: 'unknown', hasPatientContext: false, hasAssessment: false };
  }
}

function emitIfChanged() {
  const path = location.pathname;
  if (path === lastPath) return;
  lastPath = path;

  const ctx = detectContext();

  setPccContext({
    pageType: ctx.pageType,
    hasPatientContext: ctx.hasPatientContext,
  });

  track('pcc_page_viewed', {
    page_type: ctx.pageType,
    section: ctx.hasAssessment ? 'mds_assessment' : null,
    has_patient_context: ctx.hasPatientContext,
  });
}

export function startPccNavObserver() {
  emitIfChanged();

  const origPush = history.pushState;
  const origReplace = history.replaceState;
  history.pushState = function (...args) {
    const result = origPush.apply(this, args);
    queueMicrotask(emitIfChanged);
    return result;
  };
  history.replaceState = function (...args) {
    const result = origReplace.apply(this, args);
    queueMicrotask(emitIfChanged);
    return result;
  };

  window.addEventListener('popstate', emitIfChanged);
}
