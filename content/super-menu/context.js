// Super Menu Context Detection

// Cache for patient name to avoid repeated DOM queries
let cachedPatientName = null;
let cachedPatientId = null;

function getChatPatientId() {
  const url = new URL(window.location.href);
  return url.searchParams.get('ESOLclientid');
}

function getPatientNameFromPage() {
  // Try to get patient name from PCC page elements
  // Common locations: header, breadcrumb, patient info section

  // Try patient header (most common)
  const patientHeader = document.querySelector('.patient-header-name, .patientName, #patientName, .pcc-patient-name');
  if (patientHeader?.textContent?.trim()) {
    return patientHeader.textContent.trim();
  }

  // Try breadcrumb
  const breadcrumb = document.querySelector('.breadcrumb-patient, .pcc-breadcrumb .patient');
  if (breadcrumb?.textContent?.trim()) {
    return breadcrumb.textContent.trim();
  }

  // Try page title area
  const titleArea = document.querySelector('.page-title-patient, .chart-header');
  if (titleArea?.textContent?.trim()) {
    // Extract just the name part if it contains other info
    const text = titleArea.textContent.trim();
    // Often format is "Patient Name - DOB" or "Patient Name (MRN)"
    const nameMatch = text.match(/^([^-(\n]+)/);
    if (nameMatch) {
      return nameMatch[1].trim();
    }
  }

  return null;
}

function getMDSContext() {
  const url = new URL(window.location.href);
  const assessmentId = url.searchParams.get('ESOLassessid');
  const patientId = url.searchParams.get('ESOLclientid');

  // Get patient name, using cache if same patient
  let patientName = null;
  if (patientId) {
    if (patientId === cachedPatientId && cachedPatientName) {
      patientName = cachedPatientName;
    } else {
      patientName = getPatientNameFromPage();
      if (patientName) {
        cachedPatientName = patientName;
        cachedPatientId = patientId;
      }
    }
  } else {
    // Clear cache when no patient
    cachedPatientName = null;
    cachedPatientId = null;
  }

  // Check if we're on an MDS section page
  const isMDSSection = (
    (window.location.href.includes('/mds3/') || window.location.href.includes('section.xhtml')) &&
    assessmentId
  );

  if (isMDSSection) {
    return {
      scope: 'mds',
      assessmentId,
      patientId: patientId || null,
      patientName
    };
  }

  if (patientId) {
    return {
      scope: 'patient',
      assessmentId: null,
      patientId,
      patientName
    };
  }

  return {
    scope: 'global',
    assessmentId: null,
    patientId: null,
    patientName: null
  };
}

// Update cached patient name (called when API returns patient data)
function setCachedPatientName(patientId, name) {
  cachedPatientId = patientId;
  cachedPatientName = name;
}

function getChatFacilityInfo() {
  const facLink = document.getElementById('pccFacLink');
  if (facLink) {
    return facLink.title || facLink.textContent?.trim() || null;
  }
  return null;
}

// Handle messages from popup/background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_FACILITY') {
    const facility = getChatFacilityInfo();
    sendResponse({ facility });
    return false;
  }
});

// Shared helper: get orgSlug + facilityName for API calls
// Used by evidence-viewers.js, icd10-viewer.js, etc.
async function getCurrentParams() {
  const facilityName = getChatFacilityInfo() || '';

  let orgSlug = '';
  try {
    const orgResponse = await chrome.runtime.sendMessage({ type: 'GET_ORG' });
    orgSlug = orgResponse?.org || '';
  } catch (e) {
    console.warn('getCurrentParams: Could not get org slug:', e);
  }

  return { facilityName, orgSlug };
}

// Make available globally for cross-file access
window.getChatPatientId = getChatPatientId;
window.getPatientNameFromPage = getPatientNameFromPage;
window.getMDSContext = getMDSContext;
window.setCachedPatientName = setCachedPatientName;
window.getChatFacilityInfo = getChatFacilityInfo;
window.getCurrentParams = getCurrentParams;
