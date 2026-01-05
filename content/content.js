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

// Expose getAPIParams globally for evidence-viewers.js
window.getCurrentParams = getAPIParams;

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

// Section transformers moved to section-transformers.js

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

  console.log('Super LTC: processItems called with', items.length, 'items:', items);

  items.forEach(item => {
    // Process each column (A, B, C)
    Object.keys(item.columns || {}).forEach(column => {
      const aiAnswer = item.columns[column];
      if (!aiAnswer) return;

      // Find the corresponding DOM element
      const elementId = `${item.mdsItem}${column}_wrapper`;
      console.log(`Super LTC: Looking for element: ${elementId}`);
      const questionEl = document.getElementById(elementId);

      if (!questionEl) {
        console.log(`Super LTC: Not found: ${elementId}, trying alternatives...`);
        // Try alternative ID format
        const altElementId = `${item.mdsItem}${column}`;
        const altQuestionEl = document.querySelector(`[id="${altElementId}_wrapper"]`) ||
                              document.querySelector(`[id^="${item.mdsItem}"][id$="${column}_wrapper"]`);
        if (altQuestionEl) {
          console.log(`Super LTC: Found alt element: ${altQuestionEl.id}`);
          processQuestion(altQuestionEl, item, column, aiAnswer);
        } else {
          console.log(`Super LTC: No element found for ${item.mdsItem} col ${column} (n/a field)`);
        }
        return;
      }

      console.log(`Super LTC: Found element: ${elementId}`);
      processQuestion(questionEl, item, column, aiAnswer);
    });
  });

  console.log('Super LTC: processItems complete, SuperOverlay.results:', SuperOverlay.results.length);
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
 * @param {string|number} answer - The answer value
 * @param {boolean} isNumeric - If true, display as number (don't convert 0/1 to No/Yes)
 */
function formatAnswerForDisplay(answer, isNumeric = false) {
  if (answer === null || answer === undefined) return '?';
  const str = String(answer).trim();

  // For numeric fields (like day counts), display as-is
  if (isNumeric) {
    return str;
  }

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
  const answerText = formatAnswerForDisplay(result.aiAnswer.answer, result.aiAnswer.isNumeric);

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

  // Section E: Distinct dates for frequency items
  const distinctDatesHTML = renderDistinctDates(ai.distinctDates);

  // Section H: Incontinence episode dates
  const incontinenceEpisodeDatesHTML = renderIncontinenceEpisodeDates(ai.incontinenceEpisodeDates, ai.lookbackWindow);

  // Section N: Medications
  const injectionsHTML = renderMedications(ai.injections, 'Injections');
  const insulinHTML = renderMedications(ai.insulinInjections, 'Insulin Injections');
  const medicationsTakenHTML = renderMedications(ai.medicationsTaken, 'Medications Taken');
  const routineMedsHTML = renderMedications(ai.routineMedications, 'Routine Medications');
  const prnMedsHTML = renderMedications(ai.prnMedications, 'PRN Medications');
  const indicationsHTML = renderMedicationIndications(ai.medicationsWithIndication);
  const orderChangesHTML = renderOrderChanges(ai.orderChanges);
  const issuesHTML = renderDrugRegimenIssues(ai.issuesFound);

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
          <span class="super-answer__value super-answer__value--${normalizeAnswer(ai.answer)}">${formatAnswerForDisplay(ai.answer, ai.isNumeric)}</span>
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
          <span class="super-answer__value super-answer__value--${normalizeAnswer(result.pccAnswer)}">${formatAnswerForDisplay(result.pccAnswer, ai.isNumeric)}</span>
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
      ${distinctDatesHTML}
      ${incontinenceEpisodeDatesHTML}
      ${injectionsHTML}
      ${insulinHTML}
      ${medicationsTakenHTML}
      ${routineMedsHTML}
      ${prnMedsHTML}
      ${indicationsHTML}
      ${orderChangesHTML}
      ${issuesHTML}
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

    // Check if this is an order evidence that can show administrations
    const isOrder = sourceType === 'order';
    const orderId = ev.sourceId || ev.evidenceId || '';

    // Check if this evidence has a viewable type (clinical note, therapy doc, PDF)
    const { viewerType, id: viewerId } = typeof parseEvidenceForViewer === 'function'
      ? parseEvidenceForViewer(ev)
      : { viewerType: null, id: null };

    const isViewable = isOrder || viewerType;
    const clickableClass = isViewable ? 'super-evidence-card--clickable' : '';

    // Data attributes for click handling
    let dataAttrs = '';
    if (isOrder) {
      dataAttrs = `data-order-id="${orderId}"`;
    } else if (viewerType) {
      dataAttrs = `data-viewer-type="${viewerType}" data-viewer-id="${viewerId}"`;
      // Add quote text for highlighting in therapy documents
      if (quote) {
        const escapedQuote = quote.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        dataAttrs += ` data-quote="${escapedQuote}"`;
      }
      // Add wordBlocks data if available (for PDF documents)
      if (ev.wordBlocks && Array.isArray(ev.wordBlocks) && ev.wordBlocks.length > 0) {
        const wordBlocksJson = JSON.stringify(ev.wordBlocks).replace(/"/g, '&quot;');
        dataAttrs += ` data-word-blocks="${wordBlocksJson}"`;
      }
    }

    // Action text based on type
    let actionText = '';
    if (isOrder) actionText = 'View Administrations';
    else if (viewerType === 'therapy-document') actionText = 'View Document';
    else if (viewerType === 'clinical-note') actionText = 'View Note';
    else if (viewerType === 'document') actionText = 'View PDF';

    const actionHTML = isViewable ? `
      <div class="super-evidence-card__action">
        <span>${actionText}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    ` : '';

    return `
      <div class="super-evidence-card ${clickableClass}" ${dataAttrs}>
        <div class="super-evidence-card__header">
          <span class="super-evidence-card__type ${typeClass}">${typeLabel}</span>
        </div>
        <div class="super-evidence-card__quote">${quote}</div>
        ${ev.rationale ? `<div class="super-evidence-card__rationale">${ev.rationale}</div>` : ''}
        ${actionHTML}
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

// Helper: Render distinct dates for Section E frequency items
function renderDistinctDates(distinctDates) {
  if (!distinctDates || distinctDates.length === 0) return '';

  return `
    <div class="super-dates-section">
      <div class="super-dates-section__label">Dates Observed (${distinctDates.length})</div>
      <div class="super-dates-list">
        ${distinctDates.map(date => `<span class="super-date-chip">${date}</span>`).join('')}
      </div>
    </div>
  `;
}

// Helper: Render incontinence episode dates for Section H
function renderIncontinenceEpisodeDates(episodeDates, lookbackWindow) {
  if (!episodeDates || episodeDates.length === 0) return '';

  const lookbackInfo = lookbackWindow
    ? `<div class="super-lookback-info">Lookback: ${lookbackWindow.startDate} - ${lookbackWindow.endDate}</div>`
    : '';

  return `
    <div class="super-dates-section">
      <div class="super-dates-section__label">Episode Dates (${episodeDates.length})</div>
      ${lookbackInfo}
      <div class="super-dates-list">
        ${episodeDates.map(date => `<span class="super-date-chip">${date}</span>`).join('')}
      </div>
    </div>
  `;
}

// Helper: Render medications for Section N items
function renderMedications(medications, label = 'Medications') {
  if (!medications || medications.length === 0) return '';

  const medItems = medications.map(med => {
    const hasAdmins = med.administrationCount && med.administrationCount > 0;
    const orderId = med.orderId || med.sourceId || '';
    const isClickable = hasAdmins && orderId;

    const adminInfo = hasAdmins
      ? `<span class="super-med-admin">${med.administrationCount} admin${med.administrationCount > 1 ? 's' : ''}</span>`
      : '';
    const routeInfo = med.route ? `<span class="super-med-route">${med.route}</span>` : '';
    const typeInfo = med.insulinType ? `<span class="super-med-type">${med.insulinType}</span>` : '';

    const clickableClass = isClickable ? 'super-med-item--clickable' : '';
    const orderDataAttr = isClickable ? `data-order-id="${orderId}"` : '';

    return `
      <div class="super-med-item ${clickableClass}" ${orderDataAttr}>
        <div class="super-med-item__name">${med.medicationName}</div>
        <div class="super-med-item__details">
          ${routeInfo}${typeInfo}${adminInfo}
          ${isClickable ? '<span class="super-med-view">View →</span>' : ''}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="super-meds-section">
      <div class="super-meds-section__label">${label} (${medications.length})</div>
      <div class="super-meds-list">${medItems}</div>
    </div>
  `;
}

// Helper: Render medication indications for N0415 Column 2
function renderMedicationIndications(medicationsWithIndication) {
  if (!medicationsWithIndication || medicationsWithIndication.length === 0) return '';

  const medItems = medicationsWithIndication.map(med => {
    const indicationStatus = med.hasIndication
      ? '<span class="super-indication super-indication--yes">Has Indication</span>'
      : '<span class="super-indication super-indication--no">No Indication</span>';

    return `
      <div class="super-indication-item">
        <div class="super-indication-item__name">${med.medicationName}</div>
        ${indicationStatus}
        ${med.rationale ? `<div class="super-indication-item__rationale">${med.rationale}</div>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="super-indications-section">
      <div class="super-indications-section__label">Indication Status</div>
      <div class="super-indications-list">${medItems}</div>
    </div>
  `;
}

// Helper: Render order changes for N0350B
function renderOrderChanges(orderChanges) {
  if (!orderChanges || orderChanges.length === 0) return '';

  const changeItems = orderChanges.map(change => {
    return `
      <div class="super-change-item">
        <div class="super-change-item__med">${change.medicationName}</div>
        <div class="super-change-item__detail">
          <span class="super-change-type">${change.changeType}</span>
          ${change.previousValue ? `<span class="super-change-from">${change.previousValue}</span>` : ''}
          ${change.newValue ? `<span class="super-change-to">${change.newValue}</span>` : ''}
        </div>
        ${change.changeDate ? `<div class="super-change-date">${change.changeDate}</div>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="super-changes-section">
      <div class="super-changes-section__label">Order Changes (${orderChanges.length})</div>
      <div class="super-changes-list">${changeItems}</div>
    </div>
  `;
}

// Helper: Render drug regimen issues for N2001
function renderDrugRegimenIssues(issuesFound) {
  if (!issuesFound || issuesFound.length === 0) return '';

  const issueItems = issuesFound.map(issue => {
    const meds = issue.medications?.join(', ') || '';
    return `
      <div class="super-issue-item">
        <span class="super-issue-type">${issue.issueType?.replace(/_/g, ' ')}</span>
        <div class="super-issue-desc">${issue.description}</div>
        ${meds ? `<div class="super-issue-meds">${meds}</div>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="super-issues-section">
      <div class="super-issues-section__label">Issues Found (${issuesFound.length})</div>
      <div class="super-issues-list">${issueItems}</div>
    </div>
  `;
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

  // Order evidence click handlers for viewing administrations
  setupAdministrationViewers(popover);
}

function setupAdministrationViewers(popover) {
  // Handle clicks on clickable evidence cards (orders, notes, therapy docs, PDFs)
  popover.querySelectorAll('.super-evidence-card--clickable').forEach(card => {
    card.addEventListener('click', async (e) => {
      e.stopPropagation();

      // Check for order first (existing functionality)
      const orderId = card.dataset.orderId;
      if (orderId) {
        await showAdministrationModal(orderId);
        return;
      }

      // Check for other viewer types (from evidence-viewers.js)
      const viewerType = card.dataset.viewerType;
      const viewerId = card.dataset.viewerId;

      if (viewerType && viewerId) {
        // Extract wordBlocks if available (for PDF documents)
        let wordBlocks = null;
        if (card.dataset.wordBlocks) {
          try {
            wordBlocks = JSON.parse(card.dataset.wordBlocks);
          } catch (err) {
            console.error('Super LTC: Failed to parse wordBlocks:', err);
          }
        }

        if (viewerType === 'therapy-document' && typeof showTherapyDocModal === 'function') {
          // Pass quote text for highlighting in the therapy document
          const highlightQuote = card.dataset.quote || null;
          await showTherapyDocModal(viewerId, highlightQuote);
        } else if (viewerType === 'clinical-note' && typeof showClinicalNoteModal === 'function') {
          await showClinicalNoteModal(viewerId);
        } else if (viewerType === 'document' && typeof showDocumentModal === 'function') {
          await showDocumentModal(viewerId, wordBlocks);
        } else {
          console.error('Super LTC: Unknown viewer type or function not available:', viewerType);
        }
        return;
      }

      console.error('Super LTC: No valid ID found on evidence card');
    });
  });

  // Handle clicks on medication items with administrations
  popover.querySelectorAll('.super-med-item--clickable').forEach(item => {
    item.addEventListener('click', async (e) => {
      e.stopPropagation();
      const orderId = item.dataset.orderId;
      if (!orderId) {
        console.error('Super LTC: No order ID found on medication item');
        return;
      }
      await showAdministrationModal(orderId);
    });
  });
}

function closePopover() {
  document.querySelector('.super-popover')?.remove();
  document.querySelector('.super-backdrop')?.remove();
}

// ============================================
// Administration Modal (MAR/TAR Viewer)
// ============================================

async function showAdministrationModal(orderId) {
  // Get current page context
  const params = await getAPIParams();

  // Create and show loading modal
  const modal = createAdminModalShell();
  document.body.appendChild(modal);

  try {
    // Fetch administration data
    const data = await fetchAdministrations(orderId, params);

    // Render the full modal content
    renderAdminModalContent(modal, data, orderId, params);
  } catch (error) {
    console.error('Super LTC: Failed to fetch administrations', error);
    renderAdminModalError(modal, error.message);
  }
}

function createAdminModalShell() {
  const modal = document.createElement('div');
  modal.className = 'super-admin-modal';
  modal.innerHTML = `
    <div class="super-admin-modal__backdrop"></div>
    <div class="super-admin-modal__container">
      <div class="super-admin-modal__header">
        <div class="super-admin-modal__title">
          <span class="super-admin-modal__order-name">Loading...</span>
        </div>
        <button class="super-admin-modal__close">&times;</button>
      </div>
      <div class="super-admin-modal__body">
        <div class="super-admin-loading">
          <div class="super-admin-loading__spinner"></div>
          <span>Loading administration records...</span>
        </div>
      </div>
    </div>
  `;

  // Setup close handlers
  modal.querySelector('.super-admin-modal__close').addEventListener('click', () => modal.remove());
  modal.querySelector('.super-admin-modal__backdrop').addEventListener('click', () => modal.remove());

  // Close on Escape key
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);

  return modal;
}

function renderAdminModalContent(modal, data, orderId, params) {
  const { order, dateRange, adminRecords } = data;

  // Determine report type from first record or order category
  const firstRecord = adminRecords?.[0];
  const reportType = firstRecord?.type === 'treatment' ? 'tar' : 'mar';

  const container = modal.querySelector('.super-admin-modal__container');
  container.innerHTML = buildAdminModalHTML(order, dateRange, adminRecords || [], reportType);

  // Setup event listeners
  setupAdminModalListeners(modal, orderId, params, dateRange);
}

function buildAdminModalHTML(order, dateRange, adminRecords, reportType) {
  const formattedDateRange = formatDateRangeDisplay(dateRange.startDate, dateRange.endDate);
  const isMar = reportType === 'mar' || order.category === 'Medication';
  const typeIcon = isMar ? '💊' : '⚡';
  const typeBadge = isMar ? 'MAR' : 'TAR';
  const typeBadgeClass = isMar ? 'super-admin-badge--mar' : 'super-admin-badge--tar';

  // Build the grid data
  const gridData = buildAdminGridData(adminRecords);
  const eventCount = countEvents(gridData);

  return `
    <div class="super-admin-modal__header">
      <div class="super-admin-modal__title-row">
        <span class="super-admin-modal__icon">${typeIcon}</span>
        <div class="super-admin-modal__title">
          <span class="super-admin-modal__order-name">${escapeHTML(order.name || 'Order')}</span>
          <span class="super-admin-badge ${typeBadgeClass}">${typeBadge}</span>
        </div>
        <button class="super-admin-modal__close">&times;</button>
      </div>
      ${order.directions ? `<div class="super-admin-modal__directions">${escapeHTML(order.directions)}</div>` : ''}
      <div class="super-admin-modal__meta">${gridData.times.length} time slot${gridData.times.length !== 1 ? 's' : ''}</div>
    </div>

    <div class="super-admin-modal__date-bar">
      <button class="super-admin-modal__nav-btn" data-dir="prev" title="Previous week">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <span class="super-admin-modal__date-range">📅 ${formattedDateRange}</span>
      <button class="super-admin-modal__nav-btn" data-dir="next" title="Next week">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>

    <div class="super-admin-modal__body">
      ${adminRecords.length > 0
        ? renderAdminGrid(gridData)
        : '<div class="super-admin-empty">No events found in this date range</div>'
      }
    </div>

    <div class="super-admin-modal__footer">
      <span class="super-admin-modal__event-count">${eventCount} event${eventCount !== 1 ? 's' : ''}</span>
      <div class="super-admin-legend">
        <span class="super-admin-legend__item super-admin-legend__item--given">✓ Given</span>
        <span class="super-admin-legend__item super-admin-legend__item--refused">2 Refused</span>
        <span class="super-admin-legend__item super-admin-legend__item--loa">3 LOA</span>
        <span class="super-admin-legend__item super-admin-legend__item--hold">5 Hold</span>
      </div>
    </div>
  `;
}

// Build grid data structure: times as rows, dates as columns
function buildAdminGridData(adminRecords) {
  const allTimes = new Set();
  const allDates = new Set();

  // Collect all unique times and dates from events
  for (const record of adminRecords) {
    if (!record.events) continue;
    for (const event of record.events) {
      if (event.time) allTimes.add(event.time);
      if (event.date) {
        // Normalize date to YYYY-MM-DD for consistent keys
        allDates.add(normalizeDateKey(event.date));
      }
    }
  }

  // Sort times (numeric times first, then alpha like "BS")
  const times = [...allTimes].sort((a, b) => {
    const aIsNumeric = /^\d+$/.test(a);
    const bIsNumeric = /^\d+$/.test(b);
    if (aIsNumeric && bIsNumeric) return a.localeCompare(b);
    if (aIsNumeric) return -1;
    if (bIsNumeric) return 1;
    return a.localeCompare(b);
  });

  // Sort dates
  const dates = [...allDates].sort();

  // Build lookup: { time: { date: GridCell } }
  const grid = {};

  for (const record of adminRecords) {
    if (!record.events) continue;
    for (const event of record.events) {
      if (!event.time || !event.date) continue;
      const dateKey = normalizeDateKey(event.date);
      if (!grid[event.time]) grid[event.time] = {};
      grid[event.time][dateKey] = {
        status: mapAdminStatus(event.status),
        staffInitials: event.staffInitials || '',
        value: event.value || '',
        chartCode: event.chartCode || null,
      };
    }
  }

  return { times, dates, grid };
}

function mapAdminStatus(status) {
  if (!status) return 'scheduled';
  const s = status.toLowerCase();
  if (s === 'given' || s === 'administered') return 'given';
  if (s === 'measured') return 'measured';
  if (s === 'refused') return 'refused';
  return 'not_given';
}

function countEvents(gridData) {
  let count = 0;
  for (const time of Object.keys(gridData.grid)) {
    count += Object.keys(gridData.grid[time]).length;
  }
  return count;
}

// Render the grid with times as rows, dates as columns
function renderAdminGrid(gridData) {
  const { times, dates, grid } = gridData;

  if (times.length === 0 || dates.length === 0) {
    return '<div class="super-admin-empty">No events found in this date range</div>';
  }

  // Build date headers with day name and date
  const dateHeaders = dates.map(date => {
    const formatted = formatGridDate(date);
    return `<th class="super-admin-grid__date-header">
      <div class="super-admin-grid__day">${formatted.day}</div>
      <div class="super-admin-grid__date">${formatted.date}</div>
    </th>`;
  }).join('');

  // Build rows (one per time slot)
  const rows = times.map(time => {
    const cells = dates.map(date => {
      const cell = grid[time]?.[date];
      return renderGridCell(cell);
    }).join('');

    return `
      <tr class="super-admin-grid__row">
        <td class="super-admin-grid__time">${formatTime(time)}</td>
        ${cells}
      </tr>
    `;
  }).join('');

  return `
    <div class="super-admin-grid-wrapper">
      <table class="super-admin-grid">
        <thead>
          <tr>
            <th class="super-admin-grid__time-header">Time</th>
            ${dateHeaders}
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}

function renderGridCell(cell) {
  if (!cell) {
    return '<td class="super-admin-grid__cell super-admin-grid__cell--empty">-</td>';
  }

  const { status, staffInitials, value, chartCode } = cell;
  let cellClass = 'super-admin-grid__cell';
  let content = '';

  // Chart codes have special display
  if (chartCode) {
    cellClass += ` super-admin-grid__cell--code-${chartCode}`;
    content = `<span class="super-admin-grid__code">${chartCode}</span>`;
    if (staffInitials) {
      content += `<span class="super-admin-grid__initials">${escapeHTML(staffInitials)}</span>`;
    }
  } else if (status === 'given' || status === 'measured') {
    cellClass += ' super-admin-grid__cell--given';
    content = '<span class="super-admin-grid__check">✓</span>';
    if (staffInitials) {
      content += `<span class="super-admin-grid__initials">${escapeHTML(staffInitials)}</span>`;
    }
    if (value) {
      content += `<span class="super-admin-grid__value">${escapeHTML(value)}</span>`;
    }
  } else {
    cellClass += ' super-admin-grid__cell--empty';
    content = '-';
  }

  return `<td class="${cellClass}">${content}</td>`;
}

// Helper functions
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDateRangeDisplay(startDate, endDate) {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
}

function formatGridDate(dateStr) {
  const date = parseDate(dateStr);

  // Handle invalid dates
  if (isNaN(date.getTime())) {
    return { day: '???', date: dateStr };
  }

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return {
    day: days[date.getDay()],
    date: `${months[date.getMonth()]} ${date.getDate()}`
  };
}

function formatTime(time) {
  // Handle non-standard times like "BS" (blood sugar)
  if (!time) return time;

  // If it's not a 4-digit time, return as-is
  if (!/^\d{4}$/.test(time)) return time;

  // Convert "0800" to "8:00 AM"
  const hours = parseInt(time.substring(0, 2), 10);
  const mins = time.substring(2, 4);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  return `${hour12}:${mins} ${ampm}`;
}

function parseDate(dateStr) {
  // Handle ISO format, "MM/DD/YYYY", and "YYYY-MM-DD" formats
  if (!dateStr) return new Date();

  // Already an ISO string with T (e.g., "2025-10-22T00:00:00.000Z")
  if (dateStr.includes('T')) {
    return new Date(dateStr);
  }

  // MM/DD/YYYY format
  if (dateStr.includes('/')) {
    const [month, day, year] = dateStr.split('/');
    return new Date(year, month - 1, day);
  }

  // YYYY-MM-DD format
  return new Date(dateStr + 'T00:00:00');
}

// Normalize date to YYYY-MM-DD string for consistent grid keys
function normalizeDateKey(dateStr) {
  if (!dateStr) return '';

  // If it's already YYYY-MM-DD format, return as-is
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }

  // For ISO strings like "2025-10-22T00:00:00.000Z", extract the date part
  if (dateStr.includes('T')) {
    return dateStr.split('T')[0];
  }

  // For other formats, parse and format
  const date = parseDate(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return formatDateForAPI(date);
}

function shiftDateRange(dateRange, days) {
  const start = parseDate(dateRange.startDate);
  const end = parseDate(dateRange.endDate);
  start.setDate(start.getDate() + days);
  end.setDate(end.getDate() + days);
  return {
    startDate: formatDateForAPI(start),
    endDate: formatDateForAPI(end),
    isDefault: false
  };
}

function formatDateForAPI(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// API fetch function
async function fetchAdministrations(orderId, params, dateRange = {}) {
  let endpoint = `/api/extension/orders/${orderId}/administrations?` +
    `externalAssessmentId=${params.assessmentId}` +
    `&facilityName=${encodeURIComponent(params.facilityName)}` +
    `&orgSlug=${params.orgSlug}` +
    `&type=both`;

  if (dateRange.startDate) endpoint += `&startDate=${dateRange.startDate}`;
  if (dateRange.endDate) endpoint += `&endDate=${dateRange.endDate}`;

  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint
  });

  if (!response.success) throw new Error(response.error || 'Failed to fetch data');
  return response.data;
}

// Event listeners for modal
function setupAdminModalListeners(modal, orderId, params, currentDateRange) {
  // Close button
  modal.querySelector('.super-admin-modal__close')?.addEventListener('click', () => modal.remove());

  // Date navigation
  modal.querySelectorAll('.super-admin-modal__nav-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const dir = btn.dataset.dir;
      const newRange = shiftDateRange(currentDateRange, dir === 'next' ? 7 : -7);

      // Show loading in body
      const body = modal.querySelector('.super-admin-modal__body');
      body.innerHTML = '<div class="super-admin-loading"><div class="super-admin-loading__spinner"></div><span>Loading...</span></div>';

      try {
        const data = await fetchAdministrations(orderId, params, newRange);
        // Re-render the full modal content
        renderAdminModalContent(modal, data, orderId, params);
      } catch (error) {
        body.innerHTML = `<div class="super-admin-error"><p>Failed to load data</p><span>${escapeHTML(error.message)}</span></div>`;
      }
    });
  });
}

function renderAdminModalError(modal, message) {
  const container = modal.querySelector('.super-admin-modal__container');
  container.innerHTML = `
    <div class="super-admin-modal__header">
      <div class="super-admin-modal__title">
        <span class="super-admin-modal__order-name">Error</span>
      </div>
      <button class="super-admin-modal__close">&times;</button>
    </div>
    <div class="super-admin-modal__body">
      <div class="super-admin-error">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4M12 16h.01"/>
        </svg>
        <p>Failed to load administration records</p>
        <span class="super-admin-error__detail">${escapeHTML(message)}</span>
      </div>
    </div>
  `;

  modal.querySelector('.super-admin-modal__close').addEventListener('click', () => modal.remove());
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
  const aiAnswer = formatAnswerForDisplay(result.aiAnswer.answer, result.aiAnswer.isNumeric);
  const pccAnswer = formatAnswerForDisplay(result.pccAnswer, result.aiAnswer.isNumeric);

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
