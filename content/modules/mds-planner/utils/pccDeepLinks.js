/**
 * Maps a planner event → the PCC URL that lets the coordinator act on it.
 *
 * URL patterns are verified against what the rest of the extension already
 * uses (see queries/query-modal.js, super-menu/mds-view.js, etc).
 */

function origin() {
  return window.location.origin;
}

const PATIENT_DASHBOARD = (patientExternalId) =>
  `${origin()}/admin/client/cp_residentdashboard.jsp?ESOLrow=1&ESOLclientid=${patientExternalId}`;

const MDS_SECTION_LIST = (assessmentExternalId) =>
  `${origin()}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${assessmentExternalId}`;

const NEW_CP_REVIEW = (patientExternalId) =>
  `${origin()}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=-1&ESOLclientid=${patientExternalId}`;

const EXISTING_CP_REVIEW = (reviewId, patientExternalId) =>
  `${origin()}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=${reviewId}&ESOLclientid=${patientExternalId}`;

const CP_DETAIL = (carePlanId, patientExternalId) =>
  `${origin()}/care/chart/cp/careplandetail_rev.jsp?ESOLcareplanid=${carePlanId}&ESOLclientid=${patientExternalId}`;

/**
 * Returns { url, target } for a planner event, or null if not externally navigable.
 * target: 'pcc' for PCC deep-links, 'internal' for our own surfaces (queries/certs).
 */
export function resolveEventAction(event) {
  if (!event) return null;
  const { type, meta = {}, patientExternalId } = event;
  const pid = patientExternalId;

  switch (type) {
    case 'admit':
    case 'discharge':
    case 'readmit':
      return pid ? { url: PATIENT_DASHBOARD(pid), target: 'pcc' } : null;

    case 'mds_ard':
    case 'mds_due':
      return meta.pccAssessmentId
        ? { url: MDS_SECTION_LIST(meta.pccAssessmentId), target: 'pcc' }
        : pid ? { url: PATIENT_DASHBOARD(pid), target: 'pcc' } : null;

    case 'next_mds_ard':
      // Projected — nothing to open yet.
      return null;

    case 'cp_open_needed':
    case 'cp_review_expected':
      return pid ? { url: NEW_CP_REVIEW(pid), target: 'pcc' } : null;

    case 'cp_review_in_progress':
    case 'cp_review_due':
      // Land on the care plan detail page — coordinator can open the review
      // from there in PCC's right-sidebar. Falls back to existing/new review
      // URLs if we don't have the care plan ID.
      if (meta.pccCarePlanId && pid) return { url: CP_DETAIL(meta.pccCarePlanId, pid), target: 'pcc' };
      if (meta.pccReviewId && pid) return { url: EXISTING_CP_REVIEW(meta.pccReviewId, pid), target: 'pcc' };
      return pid ? { url: NEW_CP_REVIEW(pid), target: 'pcc' } : null;

    case 'cp_completion_due':
      if (meta.pccCarePlanId && pid) return { url: CP_DETAIL(meta.pccCarePlanId, pid), target: 'pcc' };
      if (meta.pccAssessmentId) return { url: MDS_SECTION_LIST(meta.pccAssessmentId), target: 'pcc' };
      return pid ? { url: PATIENT_DASHBOARD(pid), target: 'pcc' } : null;

    case 'query_due':
      return { target: 'internal', handler: 'query', id: meta.queryId };

    case 'cert_due':
    case 'cert_overdue':
      return { target: 'internal', handler: 'cert', id: meta.certId };

    default:
      return null;
  }
}

/**
 * Clicks a planner event — navigates to the right surface.
 * For PCC links, navigates the current tab (PCC is the parent page).
 */
export function openEventAction(event) {
  const action = resolveEventAction(event);
  if (!action) return false;

  if (action.target === 'pcc' && action.url) {
    window.location.href = action.url;
    return true;
  }

  if (action.target === 'internal') {
    if (action.handler === 'query' && action.id) {
      window.dispatchEvent(new CustomEvent('super:open-query', { detail: { queryId: action.id } }));
    } else if (action.handler === 'cert' && action.id) {
      window.dispatchEvent(new CustomEvent('super:open-cert', { detail: { certId: action.id } }));
    }
    // Until an internal listener is wired, open the patient dashboard as a
    // useful default — the coordinator at least lands next to the work.
    if (event.patientExternalId) {
      window.location.href = PATIENT_DASHBOARD(event.patientExternalId);
    }
    return true;
  }

  return false;
}
