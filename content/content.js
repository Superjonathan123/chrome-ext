// Content script for Super LTC Chrome Extension
// Runs on pointclickcare.com pages to read DOM elements and inject MDS overlay

// ============================================
// Auth Check & Login Banner
// ============================================
async function checkAuthAndShowBanner() {
  try {
    const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });

    if (!authState.authenticated) {
      showLoginBanner();
    } else {
      // Remove banner if it exists (user logged in from another tab)
      removeLoginBanner();
    }
  } catch (error) {
    console.error('Super LTC: Error checking auth state:', error);
  }
}

function showLoginBanner() {
  // Don't show if already exists
  if (document.getElementById('super-ltc-login-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'super-ltc-login-banner';
  banner.innerHTML = `
    <div class="super-ltc-banner-content">
      <span class="super-ltc-banner-icon">S</span>
      <span class="super-ltc-banner-text">
        <strong>Super LTC</strong> — Login to enable AI-powered MDS assistance
      </span>
      <button class="super-ltc-banner-login" id="super-ltc-banner-login-btn">
        Login
      </button>
      <button class="super-ltc-banner-dismiss" id="super-ltc-banner-dismiss-btn">
        ✕
      </button>
    </div>
  `;

  // Add styles
  const style = document.createElement('style');
  style.id = 'super-ltc-banner-styles';
  style.textContent = `
    #super-ltc-login-banner {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: white;
      padding: 12px 20px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .super-ltc-banner-content {
      display: flex;
      align-items: center;
      gap: 12px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .super-ltc-banner-icon {
      width: 28px;
      height: 28px;
      background: white;
      color: #4f46e5;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 14px;
      flex-shrink: 0;
    }
    .super-ltc-banner-text {
      flex: 1;
      font-size: 14px;
    }
    .super-ltc-banner-login {
      background: white;
      color: #4f46e5;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.1s, box-shadow 0.1s;
    }
    .super-ltc-banner-login:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    .super-ltc-banner-dismiss {
      background: transparent;
      border: none;
      color: rgba(255,255,255,0.7);
      font-size: 18px;
      cursor: pointer;
      padding: 4px 8px;
      line-height: 1;
    }
    .super-ltc-banner-dismiss:hover {
      color: white;
    }
  `;

  document.head.appendChild(style);
  document.body.insertBefore(banner, document.body.firstChild);

  // Add padding to body so content isn't hidden
  document.body.style.paddingTop = (banner.offsetHeight) + 'px';

  // Login button click
  document.getElementById('super-ltc-banner-login-btn').addEventListener('click', async () => {
    try {
      const response = await chrome.runtime.sendMessage({ type: 'LOGIN' });
      if (response.success && response.authUrl) {
        window.open(response.authUrl, '_blank');
      }
    } catch (error) {
      console.error('Super LTC: Login error:', error);
    }
  });

  // Dismiss button click
  document.getElementById('super-ltc-banner-dismiss-btn').addEventListener('click', () => {
    removeLoginBanner();
    // Store dismissal for this session
    sessionStorage.setItem('super-ltc-banner-dismissed', 'true');
  });
}

function removeLoginBanner() {
  const banner = document.getElementById('super-ltc-login-banner');
  const style = document.getElementById('super-ltc-banner-styles');
  if (banner) {
    document.body.style.paddingTop = '';
    banner.remove();
  }
  if (style) {
    style.remove();
  }
}

// Check auth on page load (unless dismissed this session)
if (!sessionStorage.getItem('super-ltc-banner-dismissed')) {
  checkAuthAndShowBanner();
}

// Listen for auth state changes (e.g., user logged in from popup)
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.authToken) {
    if (changes.authToken.newValue) {
      // User logged in - remove banner and show success toast
      removeLoginBanner();
      showSuccessToast();
    } else {
      // User logged out - show banner (if not dismissed)
      if (!sessionStorage.getItem('super-ltc-banner-dismissed')) {
        showLoginBanner();
      }
    }
  }
});

function showSuccessToast() {
  // Don't show if already exists
  if (document.getElementById('super-ltc-success-toast')) return;

  const toast = document.createElement('div');
  toast.id = 'super-ltc-success-toast';
  toast.innerHTML = `
    <div class="super-ltc-toast-content">
      <span class="super-ltc-toast-icon">✓</span>
      <span class="super-ltc-toast-text">
        <strong>Success!</strong> You're now logged in to Super LTC
      </span>
    </div>
  `;

  const style = document.createElement('style');
  style.id = 'super-ltc-toast-styles';
  style.textContent = `
    #super-ltc-success-toast {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #059669;
      color: white;
      padding: 16px 20px;
      border-radius: 12px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: super-ltc-toast-in 0.3s ease-out;
    }
    .super-ltc-toast-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .super-ltc-toast-icon {
      width: 24px;
      height: 24px;
      background: rgba(255,255,255,0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      flex-shrink: 0;
    }
    .super-ltc-toast-text {
      font-size: 14px;
    }
    @keyframes super-ltc-toast-in {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes super-ltc-toast-out {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(20px);
      }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(toast);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.style.animation = 'super-ltc-toast-out 0.3s ease-in forwards';
    setTimeout(() => {
      toast.remove();
      style.remove();
    }, 300);
  }, 4000);
}

// ============================================
// State Management
// ============================================
const SuperOverlay = {
  results: [],
  currentMismatchIndex: -1,
  dismissedItems: new Set(),
  panelExpanded: false,
  initialized: false
};

// ============================================
// Message Listener (existing functionality)
// ============================================
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_FACILITY') {
    const facilityInfo = getFacilityInfo();
    sendResponse(facilityInfo);
  }
  return true;
});

function getFacilityInfo() {
  const facLink = document.getElementById('pccFacLink');
  if (facLink) {
    return {
      facility: facLink.title || facLink.textContent?.trim() || null,
      facilityShort: facLink.textContent?.trim() || null
    };
  }
  return { facility: null, facilityShort: null };
}

// ============================================
// API Integration
// ============================================

/**
 * Extract MDS page parameters from URL
 * URL format: /mds3/section.xhtml?ESOLassessid=4767518&sectioncode=O
 */
function getMDSPageParams() {
  const url = new URL(window.location.href);
  return {
    assessmentId: url.searchParams.get('ESOLassessid'),
    section: url.searchParams.get('sectioncode')
  };
}

/**
 * Gather all parameters needed for API call
 */
async function getAPIParams() {
  const { assessmentId, section } = getMDSPageParams();

  // Get org from background (cookie)
  const orgResponse = await chrome.runtime.sendMessage({ type: 'GET_ORG' });
  const orgSlug = orgResponse?.org;

  // Get facility from DOM
  const facilityInfo = getFacilityInfo();
  const facilityName = facilityInfo?.facility;

  return { assessmentId, section, orgSlug, facilityName };
}

/**
 * Fetch section data from API via background script
 */
async function fetchSectionData(params) {
  const { assessmentId, section, orgSlug, facilityName } = params;

  const endpoint = `/api/extension/mds/sections/${section}?` +
    `externalAssessmentId=${assessmentId}` +
    `&facilityName=${encodeURIComponent(facilityName)}` +
    `&orgSlug=${orgSlug}`;

  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint
  });

  if (!response.success) {
    throw new Error(response.error);
  }

  return response.data;
}

/**
 * Transform Section O API response to overlay format
 */
function transformSectionO(results) {
  if (!results.items) {
    return { items: [] };
  }

  return {
    items: results.items.map(item => ({
      mdsItem: item.mdsItem,
      description: item.description,
      columns: item.columns
    }))
  };
}

/**
 * Transform Section K API response to overlay format
 * K has individual properties (k0100, k0200, etc.) instead of items array
 */
function transformSectionK(results) {
  const items = [];

  // K0100: Swallowing Disorder (subItems A-D, Z)
  // Note: Use empty string as column key so element lookup is K0100A_wrapper, not K0100AA_wrapper
  if (results.k0100) {
    const k0100 = results.k0100;
    // Each subItem becomes a separate overlay item
    Object.entries(k0100.subItems || {}).forEach(([subItem, data]) => {
      items.push({
        mdsItem: `K0100${subItem}`,
        description: getK0100Description(subItem),
        columns: {
          '': {
            answer: data.answer,
            confidence: data.confidence,
            rationale: data.rationale,
            evidence: data.evidence || []
          }
        }
      });
    });
  }

  // K0200: Height and Weight (special - numeric values)
  // Note: Use empty string as column key so element lookup is K0200A_wrapper, not K0200AA_wrapper
  if (results.k0200) {
    const k0200 = results.k0200;
    // Height
    if (k0200.heightInInches !== null) {
      items.push({
        mdsItem: 'K0200A',
        description: 'Height (in inches)',
        columns: {
          '': {
            answer: String(k0200.heightRounded || k0200.heightInInches),
            confidence: 'high',
            rationale: `Height: ${k0200.heightInInches} inches`,
            evidence: k0200.heightEvidence ? [k0200.heightEvidence] : []
          }
        }
      });
    }
    // Weight
    if (k0200.weightInPounds !== null) {
      items.push({
        mdsItem: 'K0200B',
        description: 'Weight (in pounds)',
        columns: {
          '': {
            answer: String(k0200.weightRounded || k0200.weightInPounds),
            confidence: 'high',
            rationale: `Weight: ${k0200.weightInPounds} pounds`,
            evidence: k0200.weightEvidence ? [k0200.weightEvidence] : []
          }
        }
      });
    }
  }

  // K0300: Weight Loss
  // Note: Use empty string as column key so element lookup is K0300_wrapper
  if (results.k0300) {
    items.push({
      mdsItem: 'K0300',
      description: 'Weight Loss',
      columns: {
        '': {
          answer: results.k0300.answer,
          confidence: results.k0300.confidence,
          rationale: results.k0300.rationale,
          evidence: results.k0300.evidence ? [results.k0300.evidence] : []
        }
      }
    });
  }

  // K0310: Weight Gain (not on IPA)
  // Note: Use empty string as column key so element lookup is K0310_wrapper
  if (results.k0310) {
    items.push({
      mdsItem: 'K0310',
      description: 'Weight Gain',
      columns: {
        '': {
          answer: results.k0310.answer,
          confidence: results.k0310.confidence,
          rationale: results.k0310.rationale,
          evidence: results.k0310.evidence ? [results.k0310.evidence] : []
        }
      }
    });
  }

  // K0520: Nutritional Approaches (items A-D, Z with columns 1-4)
  if (results.k0520) {
    Object.entries(results.k0520.items || {}).forEach(([itemKey, itemData]) => {
      // Each K0520 item has columns 1, 2, 3, 4
      const columns = {};
      Object.entries(itemData.columns || {}).forEach(([colNum, colData]) => {
        // Map column numbers to letters for consistency (1->A, 2->B, etc.)
        // Or keep as numbers - let's keep as numbers since that's how K0520 works
        columns[colNum] = {
          answer: colData.answer,
          confidence: colData.confidence,
          rationale: colData.rationale,
          evidence: colData.evidence || []
        };
      });

      items.push({
        mdsItem: `K0520${itemKey}`,
        description: getK0520Description(itemKey),
        columns: columns
      });
    });
  }

  // K0710: Percent Intake (only if triggered)
  if (results.k0710 && results.k0710.triggered) {
    // K0710 has columns 2 and 3, each with A (percent) and B (fluid intake)
    Object.entries(results.k0710.columns || {}).forEach(([colNum, colData]) => {
      if (colData.A) {
        items.push({
          mdsItem: `K0710A`,
          description: `Percent Intake (Column ${colNum})`,
          columns: {
            [colNum]: {
              answer: String(colData.A.percent),
              confidence: colData.A.confidence,
              rationale: colData.A.rationale,
              evidence: []
            }
          }
        });
      }
    });
  }

  return { items };
}

// Helper: K0100 sub-item descriptions
function getK0100Description(subItem) {
  const descriptions = {
    A: 'Loss of liquids/solids from mouth',
    B: 'Holding food in mouth/cheeks',
    C: 'Coughing/choking during meals',
    D: 'Complaints of difficulty swallowing',
    Z: 'None of the above'
  };
  return descriptions[subItem] || `Swallowing (${subItem})`;
}

// Helper: K0520 item descriptions
function getK0520Description(itemKey) {
  const descriptions = {
    A: 'Parenteral/IV Feeding',
    B: 'Feeding Tube',
    C: 'Mechanically Altered Diet',
    D: 'Therapeutic Diet',
    Z: 'None of the Above'
  };
  return descriptions[itemKey] || `Nutritional Approach (${itemKey})`;
}

/**
 * Transform Section I API response to overlay format
 * Section I - Active Diagnoses
 * Path: run.results.sectionI.items
 */
function transformSectionI(results) {
  const items = [];
  const sectionIData = results.sectionI?.items || {};

  Object.entries(sectionIData).forEach(([mdsItem, data]) => {
    // Skip items with no recommendation (dont_code with no evidence)
    // But include items that need coding or physician query
    if (data.status === 'dont_code' && data.confidence !== 'low') {
      // Still include dont_code items so we can show mismatches
    }

    items.push({
      mdsItem: mdsItem,
      description: getSectionIDescription(mdsItem),
      columns: {
        '': {
          answer: data.answer,
          confidence: data.confidence || 'medium',
          rationale: data.rationale || '',
          evidence: data.evidence || [],
          status: data.status, // code, needs_physician_query, dont_code
          triggers: data.triggers, // for needs_physician_query items
          suggestedIcd10: data.suggestedIcd10
        }
      }
    });
  });

  return { items };
}

// Helper: Section I MDS item descriptions
function getSectionIDescription(mdsItem) {
  const descriptions = {
    'I2100': 'Septicemia',
    'I2500': 'Wound Infection',
    'I2900': 'Diabetes Mellitus',
    'I5600': 'Malnutrition',
    'I1100': 'Cirrhosis',
    'I1700': 'MDRO',
    'I2000': 'Pneumonia',
    'I4300': 'Aphasia',
    'I6200': 'Asthma/COPD',
    'I6300': 'Respiratory Failure'
  };
  return descriptions[mdsItem] || mdsItem;
}

/**
 * Transform Section M API response to overlay format
 * Section M - Skin Conditions
 * Path: run.results.comparisons (flat at root, not wrapped)
 */
function transformSectionM(results) {
  const items = [];
  const comparisons = results.comparisons || [];

  comparisons.forEach(comparison => {
    items.push({
      mdsItem: comparison.mdsItem,
      description: comparison.mdsLabel || getSectionMDescription(comparison.mdsItem),
      columns: {
        '': {
          answer: comparison.solvedValue,
          confidence: comparison.status === 'match' ? 'high' : 'medium',
          rationale: `AI recommends: ${comparison.solvedValue}, Currently coded: ${comparison.codedValue || 'not coded'}`,
          evidence: [],
          comparisonStatus: comparison.status // match, mismatch, not_coded, needs_review
        }
      }
    });
  });

  return { items };
}

// Helper: Section M MDS item descriptions
function getSectionMDescription(mdsItem) {
  const descriptions = {
    'M0100': 'Determination of Pressure Ulcer Risk',
    'M0150': 'Risk of Pressure Ulcers',
    'M0210A': 'Unhealed Pressure Ulcer Stage 2',
    'M0210B': 'Unhealed Pressure Ulcer Stage 3',
    'M0210C': 'Unhealed Pressure Ulcer Stage 4',
    'M0300A': 'Stage 1 Pressure Ulcers',
    'M0300B': 'Stage 2 Pressure Ulcers',
    'M0300C': 'Stage 3 Pressure Ulcers',
    'M0300D': 'Stage 4 Pressure Ulcers',
    'M0300E': 'Unstageable - Deep Tissue',
    'M0300F': 'Unstageable - Slough/Eschar',
    'M0300G': 'Unstageable - Suspected Deep Tissue',
    'M1030': 'Venous/Arterial Ulcers',
    'M1040': 'Other Skin Conditions'
  };
  return descriptions[mdsItem] || mdsItem;
}

/**
 * Transform API response based on section type
 */
function transformAPIResponse(apiResponse, section) {
  const { run } = apiResponse;
  const results = run.results;

  // Section-specific transformers
  switch (section) {
    case 'I':
      return transformSectionI(results);
    case 'K':
      return transformSectionK(results);
    case 'M':
      return transformSectionM(results);
    case 'O':
      return transformSectionO(results);
    // Future: Add transformers for N, L, E, H, P, J
    default:
      console.warn(`Super LTC: No transformer for section ${section}`);
      return { items: [] };
  }
}

// ============================================
// Initialization
// ============================================
async function initSuperOverlay() {
  if (SuperOverlay.initialized) return;

  // Check if we're on an MDS section page
  if (!isMDSPage()) {
    console.log('Super LTC: Not an MDS section page, skipping overlay');
    return;
  }

  console.log('Super LTC: MDS page detected, initializing overlay');

  // Check auth first
  const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
  if (!authState.authenticated) {
    console.log('Super LTC: Not authenticated, skipping overlay');
    return;
  }

  try {
    // Gather API parameters
    const params = await getAPIParams();
    console.log('Super LTC: API params:', params);

    // Validate required params
    if (!params.assessmentId || !params.section) {
      console.log('Super LTC: Missing URL params (assessmentId or section)');
      return;
    }

    if (!params.orgSlug || !params.facilityName) {
      console.log('Super LTC: Missing org or facility info');
      return;
    }

    // Fetch from API
    console.log('Super LTC: Fetching section data from API...');
    const apiResponse = await fetchSectionData(params);
    console.log('Super LTC: API response:', apiResponse);

    // Transform response to overlay format
    const data = transformAPIResponse(apiResponse, params.section);

    if (!data.items || data.items.length === 0) {
      console.log('Super LTC: No items in API response');
      return;
    }

    // Load dismissed items and process
    await loadDismissedItems();
    processItems(data.items);
    createSummaryPanel();

    SuperOverlay.initialized = true;
    console.log('Super LTC: Overlay initialized with', data.items.length, 'items');

  } catch (error) {
    console.error('Super LTC: Failed to fetch section data:', error);
    // TODO: Show error state in UI
  }
}

function isMDSPage() {
  // Check for MDS-specific elements
  const hasQuestionWrappers = document.querySelectorAll('[id$="_wrapper"]').length > 0;
  const hasSectionNavigation = document.getElementById('sectionnavigation') !== null;
  const urlIndicatesMDS = window.location.href.includes('/mds3/') ||
                          window.location.href.includes('section.xhtml');

  return hasQuestionWrappers && (hasSectionNavigation || urlIndicatesMDS);
}

// ============================================
// Item Processing
// ============================================
function processItems(items) {
  SuperOverlay.results = [];

  items.forEach(item => {
    // Process each column (A, B, C)
    Object.keys(item.columns || {}).forEach(column => {
      const aiAnswer = item.columns[column];
      if (!aiAnswer) return;

      // Find the corresponding DOM element
      const elementId = `${item.mdsItem}${column}_wrapper`;
      const questionEl = document.getElementById(elementId);

      if (!questionEl) {
        // Try alternative ID format
        const altElementId = `${item.mdsItem}${column}`;
        const altQuestionEl = document.querySelector(`[id="${altElementId}_wrapper"]`) ||
                              document.querySelector(`[id^="${item.mdsItem}"][id$="${column}_wrapper"]`);
        if (altQuestionEl) {
          processQuestion(altQuestionEl, item, column, aiAnswer);
        }
        return;
      }

      processQuestion(questionEl, item, column, aiAnswer);
    });
  });
}

function processQuestion(questionEl, item, column, aiAnswer) {
  // Get PCC's current answer
  const pccAnswer = getPCCAnswer(questionEl);

  // Determine comparison status
  const status = determineStatus(aiAnswer, pccAnswer);

  // Create result object
  const result = {
    elementId: questionEl.id,
    element: questionEl,
    mdsItem: item.mdsItem,
    column: column,
    description: item.description,
    aiAnswer: aiAnswer,
    pccAnswer: pccAnswer,
    status: status
  };

  SuperOverlay.results.push(result);

  // Inject badge
  injectBadge(questionEl, result);
}

function getPCCAnswer(questionEl) {
  // Look for selected response - return raw data-value
  const selectedResponse = questionEl.querySelector('.responses a.selected');
  if (selectedResponse) {
    return selectedResponse.getAttribute('data-value');
  }

  // Try to find from signed response area
  const signedResponse = questionEl.querySelector('.signed_response .responses a.selected');
  if (signedResponse) {
    return signedResponse.getAttribute('data-value');
  }

  // Check for locked response
  const lockedResponse = questionEl.querySelector('.locked_response .responses a.selected');
  if (lockedResponse) {
    return lockedResponse.getAttribute('data-value');
  }

  // Check for numeric input (like K0200 height/weight)
  const numericInput = questionEl.querySelector('.readonlyquestionvalue b');
  if (numericInput) {
    return numericInput.textContent?.trim();
  }

  return null;
}

/**
 * Normalize answer to common format for comparison
 * Converts yes/no to 1/0, handles needs_review, etc.
 */
function normalizeAnswer(answer) {
  if (!answer) return null;
  const lower = String(answer).toLowerCase().trim();

  // Convert yes/no to 1/0
  if (lower === 'yes') return '1';
  if (lower === 'no') return '0';
  if (lower === 'dash') return '-';
  if (lower === 'needs_review') return null; // Treat as no answer for comparison

  return lower;
}

/**
 * Format answer for display (converts 0/1 to No/Yes for readability)
 */
function formatAnswerForDisplay(answer) {
  if (answer === null || answer === undefined) return '?';
  const str = String(answer).trim();

  // Convert 0/1 to No/Yes for better readability
  if (str === '0') return 'No';
  if (str === '1') return 'Yes';
  if (str === '-') return '-';

  return str.toUpperCase();
}

function determineStatus(aiAnswer, pccAnswer) {
  // Check if dismissed
  const key = `${aiAnswer.mdsItem}-${aiAnswer.column}`;
  if (SuperOverlay.dismissedItems.has(key)) {
    return 'dismissed';
  }

  // Section I: Handle special status values (code, needs_physician_query, dont_code, needs_review)
  if (aiAnswer.status === 'needs_physician_query' || aiAnswer.status === 'needs_review') {
    return 'review';
  }

  // Section I: code/dont_code statuses are definitive - skip confidence check
  const hasDefinitiveStatus = aiAnswer.status === 'code' || aiAnswer.status === 'dont_code';

  // Section M: Use comparisonStatus from API if available
  if (aiAnswer.comparisonStatus) {
    switch (aiAnswer.comparisonStatus) {
      case 'match':
        return 'match';
      case 'mismatch':
        return 'mismatch';
      case 'needs_review':
      case 'not_coded':
        return 'review';
    }
  }

  // Needs review if low/medium confidence or needs_review answer
  // BUT skip this check if we have a definitive status (code/dont_code)
  if (!hasDefinitiveStatus) {
    if (aiAnswer.confidence === 'low' || aiAnswer.confidence === 'medium') {
      return 'review';
    }

    if (aiAnswer.answer?.toLowerCase() === 'needs_review') {
      return 'review';
    }
  }

  // Normalize both answers for comparison
  // Use status field to derive answer for Section I items (code=Yes, dont_code=No)
  let aiValue;
  if (aiAnswer.status === 'dont_code') {
    aiValue = '0'; // No
  } else if (aiAnswer.status === 'code') {
    aiValue = '1'; // Yes
  } else {
    aiValue = normalizeAnswer(aiAnswer.answer);
  }
  const pccValue = normalizeAnswer(pccAnswer);

  if (!pccValue) {
    return 'review'; // No PCC answer yet
  }

  if (aiValue === pccValue) {
    return 'match';
  }

  return 'mismatch';
}

// ============================================
// Badge Injection
// ============================================
function injectBadge(questionEl, result) {
  // Remove existing badge if any
  const existingBadge = questionEl.querySelector('.super-badge');
  if (existingBadge) {
    existingBadge.remove();
  }

  // Create badge
  const badge = document.createElement('div');
  badge.className = 'super-badge';
  badge.setAttribute('data-mds-item', result.mdsItem);
  badge.setAttribute('data-column', result.column);

  // Set status class and text
  const answerText = formatAnswerForDisplay(result.aiAnswer.answer);

  switch (result.status) {
    case 'match':
      badge.classList.add('super-badge--match');
      badge.innerHTML = `<span class="super-badge__icon">&#10003;</span> Super: ${answerText}`;
      break;
    case 'mismatch':
      badge.classList.add('super-badge--mismatch');
      badge.innerHTML = `<span class="super-badge__icon">&#10007;</span> Super: ${answerText}`;
      break;
    case 'review':
      badge.classList.add('super-badge--review');
      badge.innerHTML = `<span class="super-badge__icon">&#9888;</span> Super: ${answerText}?`;
      break;
    case 'dismissed':
      badge.classList.add('super-badge--match', 'super-badge--dismissed');
      badge.innerHTML = `<span class="super-badge__icon">&#10003;</span> Super: ${answerText}`;
      break;
  }

  // Add click handler
  badge.addEventListener('click', (e) => {
    e.stopPropagation();
    showPopover(badge, result);
  });

  // Find the best place to insert the badge based on question type
  const questionType = questionEl.getAttribute('data-questiontype');

  if (questionType === 'rad') {
    // For radio questions, place badge after the question label
    const questionLabel = questionEl.querySelector('.question_label');
    if (questionLabel) {
      badge.style.display = 'inline-block';
      badge.style.marginLeft = '12px';
      badge.style.verticalAlign = 'middle';
      questionLabel.appendChild(badge);
    } else {
      // Fallback: append to question element
      questionEl.appendChild(badge);
    }
  } else {
    // For other question types (checkboxes, numeric), place after responses
    const responseArea = questionEl.querySelector('.question_content') ||
                         questionEl.querySelector('.responses')?.parentElement;

    if (responseArea) {
      const responsesUl = responseArea.querySelector('.responses');
      if (responsesUl) {
        responsesUl.style.display = 'inline-block';
        responsesUl.parentElement.appendChild(badge);
      } else {
        responseArea.appendChild(badge);
      }
    }
  }
}

// ============================================
// Popover Component
// ============================================
function showPopover(anchorEl, result) {
  // Remove any existing popover and backdrop
  closePopover();

  // Create backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'super-backdrop';
  backdrop.addEventListener('click', closePopover);
  document.body.appendChild(backdrop);

  // Create popover
  const popover = document.createElement('div');
  popover.className = 'super-popover';
  popover.innerHTML = buildPopoverHTML(result);

  // Position popover
  document.body.appendChild(popover);
  positionPopover(popover, anchorEl);

  // Setup event listeners
  setupPopoverListeners(popover, result);
}

function buildPopoverHTML(result) {
  const ai = result.aiAnswer;
  const confidenceDots = renderConfidenceDots(ai.confidence);
  const evidenceHTML = renderEvidence(ai.evidence || []);
  const datesHTML = renderDates(ai);
  const triggersHTML = renderTriggers(ai.triggers);
  const icd10HTML = renderIcd10Suggestions(ai.suggestedIcd10);
  const statusBadgeHTML = renderStatusBadge(ai.status);

  return `
    <div class="super-popover-header">
      <div>
        <div class="super-popover-header__title">${result.mdsItem} - ${result.description}</div>
        <div class="super-popover-header__subtitle">Column ${result.column}${statusBadgeHTML}</div>
      </div>
      <button class="super-popover-close" aria-label="Close">&times;</button>
    </div>
    <div class="super-popover-body">
      <div class="super-answer-row">
        <div class="super-answer">
          <span class="super-answer__label">Super Answer:</span>
          <span class="super-answer__value super-answer__value--${normalizeAnswer(ai.answer)}">${formatAnswerForDisplay(ai.answer)}</span>
        </div>
        <div class="super-confidence">
          <span class="super-confidence__label">Confidence:</span>
          <div class="super-confidence__dots">${confidenceDots}</div>
        </div>
      </div>

      ${result.pccAnswer ? `
      <div class="super-answer-row" style="padding-top: 0; border: none; margin-bottom: 8px;">
        <div class="super-answer">
          <span class="super-answer__label">PCC Answer:</span>
          <span class="super-answer__value super-answer__value--${normalizeAnswer(result.pccAnswer)}">${formatAnswerForDisplay(result.pccAnswer)}</span>
        </div>
        <div style="font-size: 12px; color: ${result.status === 'match' ? 'var(--super-match)' : result.status === 'mismatch' ? 'var(--super-mismatch)' : 'var(--super-review)'}; font-weight: 600;">
          ${result.status === 'match' ? 'Match' : result.status === 'mismatch' ? 'Mismatch' : 'Needs Review'}
        </div>
      </div>
      ` : ''}

      <div class="super-rationale">
        <div class="super-rationale__label">Rationale</div>
        <div class="super-rationale__text">${ai.rationale || 'No rationale provided.'}</div>
      </div>

      ${triggersHTML}
      ${icd10HTML}
      ${datesHTML}
      ${evidenceHTML}
    </div>
    <div class="super-popover-actions">
      <button class="super-btn super-btn--agree" data-action="agree">&#10003; Agree</button>
      <button class="super-btn super-btn--disagree" data-action="disagree">&#10007; Disagree</button>
    </div>
  `;
}

// Helper: Render status badge for Section I items
function renderStatusBadge(status) {
  if (!status) return '';

  const badges = {
    'code': '<span style="margin-left: 8px; background: #059669; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px;">Recommend Coding</span>',
    'needs_physician_query': '<span style="margin-left: 8px; background: #d97706; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px;">Query Physician</span>',
    'dont_code': '<span style="margin-left: 8px; background: #6b7280; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px;">No Evidence</span>'
  };

  return badges[status] || '';
}

// Helper: Render triggers for Section I needs_physician_query items
function renderTriggers(triggers) {
  if (!triggers || triggers.length === 0) return '';

  const triggerItems = triggers.map(t => {
    const operator = { lt: '<', gt: '>', lte: '≤', gte: '≥', eq: '=' }[t.operator] || t.operator;
    return `
      <div class="super-trigger-item">
        <span class="super-trigger-item__type">${t.type?.toUpperCase() || 'LAB'}</span>
        <span class="super-trigger-item__detail">${t.field}: ${t.actualValue} ${operator} ${t.threshold}</span>
        ${t.metAt ? `<span class="super-trigger-item__date">${t.metAt}</span>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="super-triggers-section">
      <div class="super-triggers-section__label">Triggers Found</div>
      <div class="super-triggers-list">${triggerItems}</div>
    </div>
  `;
}

// Helper: Render ICD10 suggestions for Section I items
function renderIcd10Suggestions(icd10Codes) {
  if (!icd10Codes || icd10Codes.length === 0) return '';

  return `
    <div class="super-icd10-section">
      <div class="super-icd10-section__label">Suggested ICD-10 Codes</div>
      <div class="super-icd10-list">
        ${icd10Codes.map(code => `<span class="super-icd10-code">${code}</span>`).join('')}
      </div>
    </div>
  `;
}

function renderConfidenceDots(confidence) {
  const levels = { high: 3, medium: 2, low: 1 };
  const level = levels[confidence] || 1;

  let dots = '';
  for (let i = 0; i < 3; i++) {
    const filled = i < level;
    dots += `<div class="super-confidence__dot ${filled ? 'super-confidence__dot--filled ' + confidence : ''}"></div>`;
  }
  return dots;
}

function renderEvidence(evidence) {
  if (!evidence || evidence.length === 0) {
    return '';
  }

  const cards = evidence.map(ev => {
    // Handle multiple evidence formats:
    // - Section I documents: quoteText, displayName, rationale
    // - Section I orders: orderDescription, displayName
    // - Other sections: quote, sourceType
    const quote = ev.quoteText || ev.orderDescription || ev.quote || '';
    const sourceType = ev.sourceType || inferSourceType(ev.displayName, ev.evidenceId);
    const typeClass = `super-evidence-card__type--${sourceType}`;
    const typeLabel = ev.displayName || formatSourceType(sourceType);

    // Skip if no quote text at all
    if (!quote) return '';

    return `
      <div class="super-evidence-card">
        <div class="super-evidence-card__header">
          <span class="super-evidence-card__type ${typeClass}">${typeLabel}</span>
        </div>
        <div class="super-evidence-card__quote">${quote}</div>
        ${ev.rationale ? `<div class="super-evidence-card__rationale">${ev.rationale}</div>` : ''}
      </div>
    `;
  }).filter(card => card).join('');

  if (!cards) return '';

  return `
    <div class="super-evidence-section">
      <div class="super-evidence-section__label">Evidence (${evidence.length})</div>
      <div class="super-evidence-list">${cards}</div>
    </div>
  `;
}

// Helper: Infer source type from filename/evidenceId for Section I evidence
function inferSourceType(displayName, evidenceId) {
  // Check evidenceId first (e.g., "order-jc9js716uh70")
  if (evidenceId) {
    if (evidenceId.startsWith('order-')) return 'order';
    if (evidenceId.startsWith('mar-')) return 'mar';
    if (evidenceId.startsWith('lab-')) return 'lab-result';
  }

  if (!displayName) return 'document';
  const lower = displayName.toLowerCase();
  if (lower.includes('dc_summary') || lower.includes('discharge')) return 'progress-note';
  if (lower.includes('lab')) return 'lab-result';
  if (lower.includes('order')) return 'order';
  if (lower.includes('mar')) return 'mar';
  if (lower.includes('vital')) return 'vital-signs';
  if (lower.includes('nursing')) return 'nursing-note';
  if (lower.includes('history') || lower.includes('h&p') || lower.includes('physical')) return 'progress-note';
  if (lower.includes('eval') || lower.includes('st ') || lower.includes('slp')) return 'progress-note';
  return 'document';
}

function formatSourceType(type) {
  const labels = {
    'order': 'Order',
    'mar': 'MAR',
    'lab-result': 'Lab',
    'progress-note': 'Progress Note',
    'nursing-note': 'Nursing Note',
    'vital-signs': 'Vitals'
  };
  return labels[type] || type;
}

function renderDates(aiAnswer) {
  if (!aiAnswer.firstAdministered && !aiAnswer.lastAdministered && !aiAnswer.startDate) {
    return '';
  }

  let datesHTML = '<div class="super-dates">';

  if (aiAnswer.startDate) {
    datesHTML += `
      <div class="super-dates__item">
        <span class="super-dates__label">Start:</span>
        <span class="super-dates__value">${aiAnswer.startDate}</span>
      </div>
    `;
  }

  if (aiAnswer.firstAdministered) {
    datesHTML += `
      <div class="super-dates__item">
        <span class="super-dates__label">First:</span>
        <span class="super-dates__value">${aiAnswer.firstAdministered}</span>
      </div>
    `;
  }

  if (aiAnswer.lastAdministered) {
    datesHTML += `
      <div class="super-dates__item">
        <span class="super-dates__label">Last:</span>
        <span class="super-dates__value">${aiAnswer.lastAdministered}</span>
      </div>
    `;
  }

  datesHTML += '</div>';
  return datesHTML;
}

function positionPopover(popover, anchorEl) {
  const anchorRect = anchorEl.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();

  let top = anchorRect.bottom + 8;
  let left = anchorRect.left;

  // Adjust if popover would go off-screen
  if (left + popoverRect.width > window.innerWidth - 16) {
    left = window.innerWidth - popoverRect.width - 16;
  }

  if (top + popoverRect.height > window.innerHeight - 16) {
    top = anchorRect.top - popoverRect.height - 8;
  }

  // Ensure minimum positioning
  left = Math.max(16, left);
  top = Math.max(16, top);

  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
}

function setupPopoverListeners(popover, result) {
  // Close button
  popover.querySelector('.super-popover-close').addEventListener('click', closePopover);

  // Action buttons
  popover.querySelector('[data-action="agree"]').addEventListener('click', () => {
    handleAction('agree', result);
  });

  popover.querySelector('[data-action="disagree"]').addEventListener('click', () => {
    handleAction('disagree', result);
  });
}

function closePopover() {
  document.querySelector('.super-popover')?.remove();
  document.querySelector('.super-backdrop')?.remove();
}

// ============================================
// Summary Panel
// ============================================
function createSummaryPanel() {
  // Remove existing panel
  document.querySelector('.super-panel')?.remove();

  const counts = getCounts();
  const itemsToReview = SuperOverlay.results.filter(r =>
    r.status === 'mismatch' || r.status === 'review'
  );

  const panel = document.createElement('div');
  panel.className = 'super-panel super-panel--collapsed';
  panel.innerHTML = buildPanelHTML(counts, itemsToReview);

  document.body.appendChild(panel);
  setupPanelListeners(panel);
}

function getCounts() {
  return {
    match: SuperOverlay.results.filter(r => r.status === 'match' || r.status === 'dismissed').length,
    mismatch: SuperOverlay.results.filter(r => r.status === 'mismatch').length,
    review: SuperOverlay.results.filter(r => r.status === 'review').length
  };
}

function buildPanelHTML(counts, itemsToReview) {
  const itemsHTML = itemsToReview.length > 0
    ? itemsToReview.map(buildPanelItemHTML).join('')
    : '<div class="super-panel-empty"><div class="super-panel-empty__icon">&#10003;</div><div class="super-panel-empty__text">All items match!</div></div>';

  const hasItemsToReview = itemsToReview.length > 0;

  return `
    <div class="super-panel-header">
      <div class="super-panel-header__title">
        <div class="super-panel-header__logo">S</div>
        Super Review
      </div>
      <div class="super-panel-header__actions">
        <button class="super-panel-header__btn super-panel-header__btn--toggle" aria-label="Toggle panel">&#9650;</button>
        <button class="super-panel-header__btn super-panel-header__btn--close" aria-label="Close panel">&times;</button>
      </div>
    </div>
    <div class="super-panel-summary">
      <div class="super-panel-counts">
        <span class="super-panel-count super-panel-count--match">${counts.match} &#10003;</span>
        <span class="super-panel-count super-panel-count--mismatch">${counts.mismatch} &#10007;</span>
        <span class="super-panel-count super-panel-count--review">${counts.review} &#9888;</span>
      </div>
      <button class="super-panel-next" ${!hasItemsToReview ? 'disabled' : ''}>
        Next &rarr;
      </button>
    </div>
    <div class="super-panel-details">
      <div class="super-panel-details__inner">
        <div class="super-panel-section">Items to Review</div>
        <div class="super-panel-list">
          ${itemsHTML}
        </div>
      </div>
    </div>
  `;
}

function buildPanelItemHTML(result) {
  const iconClass = result.status === 'mismatch'
    ? 'super-panel-item__icon--mismatch'
    : 'super-panel-item__icon--review';
  const icon = result.status === 'mismatch' ? '&#10007;' : '&#9888;';
  const aiAnswer = formatAnswerForDisplay(result.aiAnswer.answer);
  const pccAnswer = formatAnswerForDisplay(result.pccAnswer);

  return `
    <div class="super-panel-item" data-element-id="${result.elementId}">
      <span class="super-panel-item__icon ${iconClass}">${icon}</span>
      <div class="super-panel-item__content">
        <div class="super-panel-item__title">${result.mdsItem} ${result.description} (Col ${result.column})</div>
        <div class="super-panel-item__compare">PCC: ${pccAnswer} | Super: ${aiAnswer}</div>
      </div>
      <span class="super-panel-item__arrow">&rarr;</span>
    </div>
  `;
}

function setupPanelListeners(panel) {
  // Toggle expand/collapse
  panel.querySelector('.super-panel-header').addEventListener('click', (e) => {
    if (!e.target.closest('.super-panel-header__btn--close')) {
      togglePanel(panel);
    }
  });

  panel.querySelector('.super-panel-header__btn--toggle').addEventListener('click', (e) => {
    e.stopPropagation();
    togglePanel(panel);
  });

  // Close button
  panel.querySelector('.super-panel-header__btn--close').addEventListener('click', () => {
    panel.remove();
  });

  // Next button
  panel.querySelector('.super-panel-next').addEventListener('click', () => {
    navigateToNext();
  });

  // Item clicks
  panel.querySelectorAll('.super-panel-item').forEach(item => {
    item.addEventListener('click', () => {
      const elementId = item.getAttribute('data-element-id');
      navigateToItem(elementId);
    });
  });
}

function togglePanel(panel) {
  panel.classList.toggle('super-panel--expanded');
  panel.classList.toggle('super-panel--collapsed');
  SuperOverlay.panelExpanded = panel.classList.contains('super-panel--expanded');

  const toggleBtn = panel.querySelector('.super-panel-header__btn--toggle');
  toggleBtn.innerHTML = SuperOverlay.panelExpanded ? '&#9660;' : '&#9650;';
}

// ============================================
// Navigation
// ============================================
function navigateToNext() {
  const itemsToReview = SuperOverlay.results.filter(r =>
    r.status === 'mismatch' || r.status === 'review'
  );

  if (itemsToReview.length === 0) return;

  SuperOverlay.currentMismatchIndex = (SuperOverlay.currentMismatchIndex + 1) % itemsToReview.length;
  const result = itemsToReview[SuperOverlay.currentMismatchIndex];

  navigateToItem(result.elementId);
}

function navigateToItem(elementId) {
  const result = SuperOverlay.results.find(r => r.elementId === elementId);
  if (!result || !result.element) return;

  // Scroll to element
  result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Add highlight animation
  result.element.classList.add('super-highlight');
  setTimeout(() => {
    result.element.classList.remove('super-highlight');
  }, 2000);

  // Open popover
  const badge = result.element.querySelector('.super-badge');
  if (badge) {
    setTimeout(() => {
      showPopover(badge, result);
    }, 300);
  }
}

// ============================================
// Action Handlers
// ============================================
function handleAction(action, result) {
  const key = `${result.mdsItem}-${result.column}`;

  if (action === 'agree' || action === 'disagree') {
    // Mark as dismissed
    SuperOverlay.dismissedItems.add(key);
    saveDismissedItems();

    // Update result status
    result.status = 'dismissed';

    // Update badge
    injectBadge(result.element, result);

    // Update panel
    createSummaryPanel();

    // Close popover
    closePopover();

    console.log(`Super LTC: User ${action}d with ${result.mdsItem} Column ${result.column}`);
  }
}

// ============================================
// Storage
// ============================================
async function loadDismissedItems() {
  try {
    const data = await chrome.storage.local.get('superDismissedItems');
    if (data.superDismissedItems) {
      SuperOverlay.dismissedItems = new Set(data.superDismissedItems);
    }
  } catch (e) {
    console.log('Super LTC: Could not load dismissed items', e);
  }
}

function saveDismissedItems() {
  try {
    chrome.storage.local.set({
      superDismissedItems: Array.from(SuperOverlay.dismissedItems)
    });
  } catch (e) {
    console.log('Super LTC: Could not save dismissed items', e);
  }
}

// ============================================
// Initialize
// ============================================
console.log('Super LTC content script loaded on:', window.location.href);

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSuperOverlay);
} else {
  // Small delay to ensure all elements are rendered
  setTimeout(initSuperOverlay, 500);
}

// Also try to initialize on URL changes (for SPA navigation)
let lastUrl = window.location.href;
new MutationObserver(() => {
  if (window.location.href !== lastUrl) {
    lastUrl = window.location.href;
    SuperOverlay.initialized = false;
    setTimeout(initSuperOverlay, 500);
  }
}).observe(document.body, { childList: true, subtree: true });
