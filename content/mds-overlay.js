// MDS Section Overlay for Super LTC Chrome Extension
// Detects MDS pages, injects badges on questions, shows popovers with AI rationale/evidence
// Extracted from original content.js (commit 05cb4a0)

import { render, h } from 'preact';
import { PDFViewer } from './components/PDFViewer.jsx';
import { fetchDocument, fetchClinicalNote, fetchTherapyDocument, formatDateDisplay, formatDateTimeDisplay } from './evidence-viewers.js';

// ============================================
// State Management
// ============================================
const SuperOverlay = {
  results: [],
  currentMismatchIndex: -1,
  dismissedItems: new Set(),
  serverDecisions: {},  // Keyed by mdsItem+mdsColumn (e.g. "O0250B", "I2000")
  panelExpanded: false,
  initialized: false,
  patientId: null  // Stored from API response for diagnosis queries
};

// Evidence cache — keyed by "section:itemCode", stores fetched evidence data
const EvidenceCache = new Map();

/**
 * Fetch evidence for a specific MDS item on demand.
 * Returns cached data if previously fetched.
 */
async function fetchItemEvidence(section, itemCode) {
  const cacheKey = `${section}:${itemCode}`;
  if (EvidenceCache.has(cacheKey)) return EvidenceCache.get(cacheKey);

  const endpoint = `/api/extension/mds/sections/${section}/items/${encodeURIComponent(itemCode)}/evidence` +
    `?externalAssessmentId=${SuperOverlay.assessmentId}` +
    `&facilityName=${encodeURIComponent(SuperOverlay.facilityName)}` +
    `&orgSlug=${SuperOverlay.orgSlug}`;

  const response = await chrome.runtime.sendMessage({ type: 'API_REQUEST', endpoint });
  if (!response.success) throw new Error(response.error || 'Failed to fetch evidence');

  const item = response.data?.item || {};
  const result = {
    evidence: item.evidence || [],
    queryEvidence: item.queryEvidence || [],
    validation: item.validation || {},
    columns: item.columns || null
  };
  EvidenceCache.set(cacheKey, result);
  return result;
}

// Expose on window for other content scripts (query-send-modal.js, etc.)
window.SuperOverlay = SuperOverlay;
window.renderSplitAdministrations = renderSplitAdministrations;
window.renderSplitNote = renderSplitNote;
window.renderSplitTherapy = renderSplitTherapy;

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
  const orgResponse = getOrg();
  const orgSlug = orgResponse?.org;

  // Get facility from DOM — try multiple sources
  const facilityInfo = getFacilityInfo();
  const chatFacility = typeof getChatFacilityInfo === 'function' ? getChatFacilityInfo() : null;
  const facilityName = facilityInfo?.facility || chatFacility || '';

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

/**
 * Fetch all decisions for this assessment from the server.
 * Returns a map keyed by mdsItem+mdsColumn (e.g. "O0250B", "I2000").
 */
async function fetchDecisions(params) {
  const { assessmentId, orgSlug, facilityName } = params;

  const endpoint = `/api/extension/mds/decisions?` +
    `externalAssessmentId=${assessmentId}` +
    `&facilityName=${encodeURIComponent(facilityName)}` +
    `&orgSlug=${orgSlug}`;

  const response = await chrome.runtime.sendMessage({ type: 'API_REQUEST', endpoint });
  if (!response.success) {
    console.log('Super LTC: Could not fetch decisions', response.error);
    return {};
  }
  return response.data?.decisions || {};
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

    // Fetch section data and decisions in parallel
    console.log('Super LTC: Fetching section data and decisions from API...');
    const [apiResponse, decisions] = await Promise.all([
      fetchSectionData(params),
      fetchDecisions(params)
    ]);
    console.log('Super LTC: API response:', apiResponse);
    console.log('Super LTC: Decisions:', decisions);

    // Store patientId from assessment for diagnosis queries
    if (apiResponse.assessment?.patientId) {
      SuperOverlay.patientId = apiResponse.assessment.patientId;
      console.log('Super LTC: Stored patientId:', SuperOverlay.patientId);
    }

    // Transform response to overlay format
    const data = transformAPIResponse(apiResponse, params.section);

    if (!data.items || data.items.length === 0) {
      console.log('Super LTC: No items in API response');
      return;
    }

    // Store context for query features and lazy evidence loading
    SuperOverlay.assessmentId = params.assessmentId;
    SuperOverlay.facilityName = params.facilityName;
    SuperOverlay.orgSlug = params.orgSlug;
    SuperOverlay.section = params.section;

    // Store server decisions so processQuestion can look up prior decisions
    SuperOverlay.serverDecisions = decisions;
    await loadDismissedItems();
    processItems(data.items);
    createSummaryPanel();

    SuperOverlay.initialized = true;
    console.log('Super LTC: Overlay initialized with', data.items.length, 'items');

    // Load queries for this assessment (async, non-blocking)
    loadAssessmentQueries(params.assessmentId, params.facilityName, params.orgSlug);

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

  // Check server-side decisions — first from decisions endpoint, then from section data
  const decisionKey = column ? `${item.mdsItem}${column}` : item.mdsItem;
  const serverDecision = SuperOverlay.serverDecisions[decisionKey];
  if (serverDecision) {
    const dismissKey = `${item.mdsItem}-${column}`;
    result.userDecision = serverDecision;
    if (serverDecision.decision === 'disagree') {
      SuperOverlay.dismissedItems.add(dismissKey);
      result.status = 'dismissed';
    } else if (serverDecision.decision === 'agree') {
      SuperOverlay.dismissedItems.add(dismissKey);
      result.status = 'dismissed';
    }
  } else if (aiAnswer.userDecision?.decision === 'disagree') {
    const dismissKey = `${item.mdsItem}-${column}`;
    SuperOverlay.dismissedItems.add(dismissKey);
    result.status = 'dismissed';
    result.userDecision = aiAnswer.userDecision;
  } else if (aiAnswer.userDecision?.decision === 'agree') {
    result.userDecision = aiAnswer.userDecision;
  }

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
      if (result.userDecision?.decision === 'disagree') {
        badge.classList.add('super-badge--mismatch', 'super-badge--dismissed', 'super-badge--disagreed');
        badge.innerHTML = `<span class="super-badge__icon">&#10007;</span> Dismissed`;
      } else {
        badge.classList.add('super-badge--match', 'super-badge--dismissed');
        badge.innerHTML = `<span class="super-badge__icon">&#10003;</span> Super: ${answerText}`;
      }
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

  // Add secondary query badge for Section I items (all diagnoses can be queried)
  // Uses QueryBadges module which shows status if query exists, or "Query" button if not
  if (result.mdsItem && result.mdsItem.startsWith('I')) {
    QueryBadges.injectQueryBadge(questionEl, result, badge);
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

  // Store evidence data for split-view access (populated lazily)
  popover._evidence = [];
  popover._result = result;
  popover._docCache = new Map();
  popover._anchorEl = anchorEl;
  popover._section = SuperOverlay.section;

  // Position popover
  document.body.appendChild(popover);
  positionPopover(popover, anchorEl);

  // Setup event listeners
  setupPopoverListeners(popover, result);

  // Prefetch all PDF documents
  prefetchDocuments(popover);
}

function buildPopoverHTML(result) {
  const ai = result.aiAnswer;
  const confidenceDots = renderConfidenceDots(ai.confidence);
  const totalEvidenceCount = (ai.evidenceCount || 0) + (ai.queryEvidenceCount || 0);
  const evidenceHTML = renderEvidencePlaceholder(totalEvidenceCount);
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

      ${ai.diagnosisSummary || ai.treatmentSummary ? `
      <div class="super-step-lines" style="display: flex; flex-direction: column; gap: 4px; margin: 8px 0;">
        ${ai.diagnosisSummary ? `
        <div style="display: flex; align-items: flex-start; gap: 8px; font-size: 12px; line-height: 1.4;">
          <span style="flex-shrink: 0; color: ${ai.diagnosisPassed ? 'var(--super-match)' : 'var(--super-mismatch)'}; font-weight: 700;">${ai.diagnosisPassed ? '\u2713' : '\u2717'}</span>
          <span><strong style="color: var(--super-gray-600);">Dx:</strong> <span style="color: var(--super-gray-500);">${escapeHTML(ai.diagnosisSummary)}</span></span>
        </div>
        ` : ''}
        ${ai.treatmentSummary ? `
        <div style="display: flex; align-items: flex-start; gap: 8px; font-size: 12px; line-height: 1.4;">
          <span style="flex-shrink: 0; color: ${ai.activeStatusPassed ? 'var(--super-match)' : 'var(--super-mismatch)'}; font-weight: 700;">${ai.activeStatusPassed ? '\u2713' : '\u2717'}</span>
          <span><strong style="color: var(--super-gray-600);">Tx:</strong> <span style="color: var(--super-gray-500);">${escapeHTML(ai.treatmentSummary)}</span></span>
        </div>
        ` : ''}
      </div>
      ` : ''}

      <div class="super-rationale super-rationale--collapsed">
        <div class="super-rationale__label" onclick="this.parentElement.classList.toggle('super-rationale--collapsed')">Rationale <span class="super-rationale__chevron">&#9660;</span></div>
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
      ${result.mdsItem && result.mdsItem.startsWith('I') ? `
        <button class="super-btn super-btn--query" data-action="query">? Query Physician</button>
      ` : ''}
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

function renderEvidenceCard(ev, evIdx) {
  // Handle multiple evidence formats:
  // - Section I documents: quoteText, displayName, rationale
  // - Section I orders/admins: orderDescription, displayName, rationale (quoteText may be null)
  // - Other sections: quote, sourceType
  const quote = ev.quoteText || ev.orderDescription || ev.quote || '';
  const sourceType = ev.sourceType || inferSourceType(ev.displayName, ev.evidenceId);
  const typeClass = `super-evidence-card__type--${sourceType}`;
  const typeLabel = ev.displayName || formatSourceType(sourceType);

  // Use rationale as display text for admin/order evidence that has no quote
  const displayText = quote || ev.rationale || '';

  // Skip if nothing to display at all
  if (!displayText) return '';

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

  // Don't repeat rationale if it's already the display text
  const showRationale = ev.rationale && quote;

  return `
    <div class="super-evidence-card ${clickableClass}" ${dataAttrs} data-ev-idx="${evIdx}">
      <div class="super-evidence-card__header">
        <span class="super-evidence-card__type ${typeClass}">${typeLabel}</span>
      </div>
      <div class="super-evidence-card__quote">${displayText}</div>
      ${showRationale ? `<div class="super-evidence-card__rationale">${ev.rationale}</div>` : ''}
      ${actionHTML}
    </div>
  `;
}

function renderEvidence(evidence) {
  if (!evidence || evidence.length === 0) {
    return '';
  }

  const cards = evidence.map((ev, evIdx) => renderEvidenceCard(ev, evIdx)).filter(c => c).join('');

  if (!cards) return '';

  return `
    <div class="super-evidence-section">
      <div class="super-evidence-section__label">Evidence (${evidence.length})</div>
      <div class="super-evidence-list">${cards}</div>
    </div>
  `;
}

function renderEvidencePlaceholder(count) {
  if (!count) return '';
  return `
    <div class="super-evidence-section" data-evidence-section>
      <div class="super-evidence-section__label">Evidence (${count})</div>
      <div class="super-evidence-list" data-evidence-container>
        <div class="super-evidence-loading"><div class="super-viewer-loading__spinner"></div><span>Loading evidence...</span></div>
      </div>
    </div>
  `;
}

// Helper: Infer source type from filename/evidenceId for Section I evidence
function inferSourceType(displayName, evidenceId) {
  // Check evidenceId first (e.g., "order-jc9js716uh70", "admin-zm8ur6f0uhs7")
  if (evidenceId) {
    if (evidenceId.startsWith('order-')) return 'order';
    if (evidenceId.startsWith('admin-')) return 'order';
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

  // Query button (for Section I diagnosis items)
  const queryBtn = popover.querySelector('[data-action="query"]');
  if (queryBtn) {
    queryBtn.addEventListener('click', () => {
      closePopover();
      window.QuerySendModal?.show(result);
    });
  }

  // Order evidence click handlers for viewing administrations
  setupAdministrationViewers(popover);

  // Auto-load evidence when popover opens
  const evidenceContainer = popover.querySelector('[data-evidence-container]');
  if (evidenceContainer) {
    const totalCount = (result.aiAnswer.evidenceCount || 0) + (result.aiAnswer.queryEvidenceCount || 0);
    if (totalCount > 0) {
      fetchItemEvidence(SuperOverlay.section, result.mdsItem).then(data => {
        const allEvidence = [...(data.evidence || []), ...(data.queryEvidence || [])];
        popover._evidence = allEvidence;

        // Backfill onto aiAnswer for query modal
        result.aiAnswer.evidence = data.evidence || [];
        result.aiAnswer.queryEvidence = data.queryEvidence || [];
        if (data.validation) result.aiAnswer.validation = data.validation;

        // Render cards
        const cards = allEvidence.map((ev, i) => renderEvidenceCard(ev, i)).filter(c => c).join('');
        evidenceContainer.innerHTML = cards || '<div class="super-evidence-empty">No evidence available</div>';

        // Update evidence count label
        const label = popover.querySelector('.super-evidence-section__label');
        if (label) label.textContent = `Evidence (${allEvidence.length})`;

        // Re-attach viewers + prefetch PDFs
        setupAdministrationViewers(popover);
        prefetchDocuments(popover);
      }).catch(err => {
        console.error('[Super LTC] Failed to load evidence:', err);
        evidenceContainer.innerHTML = '<div class="super-evidence-error">Failed to load evidence</div>';
      });
    }
  }
}

function setupAdministrationViewers(popover) {
  // Handle clicks on clickable evidence cards (orders, notes, therapy docs, PDFs)
  popover.querySelectorAll('.super-evidence-card--clickable').forEach(card => {
    card.addEventListener('click', async (e) => {
      e.stopPropagation();

      // Determine viewer type and ID
      const orderId = card.dataset.orderId;
      const viewerType = card.dataset.viewerType;
      const viewerId = card.dataset.viewerId;
      const evIdx = card.dataset.evIdx != null ? parseInt(card.dataset.evIdx, 10) : -1;

      let splitType = null;
      let splitId = null;
      let extra = { _idx: evIdx };

      if (orderId) {
        splitType = 'order';
        splitId = orderId;
      } else if (viewerType && viewerId) {
        splitType = viewerType;
        splitId = viewerId;
        if (card.dataset.wordBlocks) {
          try { extra.wordBlocks = JSON.parse(card.dataset.wordBlocks); } catch {}
        }
        if (card.dataset.quote) extra.quote = card.dataset.quote;
      }

      if (splitType && splitId) {
        enterSplitView(popover, splitType, splitId, extra);
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

// ============================================
// Split-View: Inline Evidence Viewer
// ============================================

/**
 * Prefetch all viewable evidence sources.
 * PDF documents are prefetched eagerly; other types are fetched on demand.
 */
async function prefetchDocuments(popover) {
  const evidence = popover._evidence || [];
  const cache = popover._docCache;
  if (!evidence.length) return;

  let params;
  try {
    params = await window.getCurrentParams();
  } catch { return; }

  for (const ev of evidence) {
    const parsed = typeof parseEvidenceForViewer === 'function' ? parseEvidenceForViewer(ev) : { viewerType: null, id: null };
    if (parsed.viewerType !== 'document' || !parsed.id || cache.has(parsed.id)) continue;

    const cacheKey = `document:${parsed.id}`;
    const promise = fetchDocument(parsed.id, params)
      .then(result => {
        const entry = cache.get(cacheKey);
        if (entry) entry.data = result.document;
        return result.document;
      })
      .catch(err => {
        console.warn('[SuperOverlay] Prefetch failed for', parsed.id, err);
        return null;
      });

    cache.set(cacheKey, { data: null, promise });
  }
}

/**
 * Collect all viewable evidence items (documents, notes, therapy docs, orders).
 */
function getViewableEvidence(popover) {
  const evidence = popover._evidence || [];
  return evidence.filter(ev => {
    const sourceType = ev.sourceType || '';
    const orderId = ev.sourceId || ev.evidenceId || '';
    const isOrder = sourceType === 'order' || orderId.startsWith('order-');
    if (isOrder) return true;

    const parsed = typeof parseEvidenceForViewer === 'function' ? parseEvidenceForViewer(ev) : { viewerType: null };
    return parsed.viewerType !== null;
  }).map(ev => {
    // Annotate each evidence item with its resolved viewer info
    const sourceType = ev.sourceType || '';
    const orderId = ev.sourceId || ev.evidenceId || '';
    const isOrder = sourceType === 'order' || orderId.startsWith('order-');

    if (isOrder) {
      return { ...ev, _viewerType: 'order', _viewerId: orderId.replace(/^order-/, '') };
    }
    const parsed = typeof parseEvidenceForViewer === 'function' ? parseEvidenceForViewer(ev) : { viewerType: null, id: null };
    return { ...ev, _viewerType: parsed.viewerType, _viewerId: parsed.id };
  });
}

/** Get a short action label for the viewer type */
function getViewerLabel(viewerType) {
  switch (viewerType) {
    case 'document': return 'PDF';
    case 'clinical-note': return 'Note';
    case 'therapy-document': return 'Therapy';
    case 'order': return 'Orders';
    default: return 'Source';
  }
}

/**
 * Transform the popover into split-view mode showing evidence inline.
 * Supports: document (PDF), clinical-note, therapy-document, order.
 */
async function enterSplitView(popover, viewerType, viewerId, extra = {}) {
  // Save original body & actions for "back"
  if (!popover._savedBody) {
    popover._savedBody = popover.querySelector('.super-popover-body')?.innerHTML;
    popover._savedActions = popover.querySelector('.super-popover-actions')?.innerHTML;
  }

  // Add split class (widens the popover)
  popover.classList.add('super-popover--split');

  // Store active source index for highlighting (each evidence is distinct)
  const activeIdx = extra._idx != null ? extra._idx : -1;
  popover._activeSourceIdx = activeIdx;

  // Build split layout
  const body = popover.querySelector('.super-popover-body');
  body.className = 'super-popover-body super-popover-body--split';
  body.style.maxHeight = 'none';

  const viewableEvidence = getViewableEvidence(popover);

  // Build source sidebar cards — each evidence item is distinct (even same doc)
  const sourceCards = viewableEvidence.map((ev, idx) => {
    const isActive = idx === activeIdx;
    const displayName = ev.displayName || formatSourceType(ev.sourceType || inferSourceType(ev.displayName, ev.evidenceId));
    const snippet = ev.quoteText || ev.orderDescription || ev.quote || '';
    const truncated = snippet.length > 80 ? snippet.slice(0, 80) + '...' : snippet;
    const page = ev.wordBlocks?.[0]?.p;
    const typeLabel = getViewerLabel(ev._viewerType);

    let extraAttrs = '';
    if (ev.wordBlocks && Array.isArray(ev.wordBlocks) && ev.wordBlocks.length > 0) {
      extraAttrs += ` data-word-blocks="${JSON.stringify(ev.wordBlocks).replace(/"/g, '&quot;')}"`;
    }
    if (ev.quoteText || ev.quote) {
      const q = (ev.quoteText || ev.quote || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      extraAttrs += ` data-quote="${q}"`;
    }

    return `
      <div class="super-split__source-card${isActive ? ' super-split__source-card--active' : ''}"
           data-idx="${idx}" data-viewer-type="${ev._viewerType}" data-viewer-id="${ev._viewerId}"${extraAttrs} role="button">
        <div class="super-split__source-badge-row">
          <span class="super-split__source-type">${escapeHTML(typeLabel)}</span>
          <span class="super-split__source-badge">${escapeHTML(displayName)}</span>
        </div>
        ${truncated ? `<div class="super-split__source-snippet">${escapeHTML(truncated)}</div>` : ''}
        ${page ? `<div class="super-split__source-page">Page ${page}</div>` : ''}
      </div>
    `;
  }).join('');

  body.innerHTML = `
    <div class="super-split__sidebar">
      <div class="super-split__sidebar-label">Sources (${viewableEvidence.length})</div>
      ${sourceCards}
    </div>
    <div class="super-split__viewer" id="super-split-viewer">
      <div class="super-split__viewer-loading">
        <div class="super-viewer-loading__spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
  `;

  // Add back button to header
  const header = popover.querySelector('.super-popover-header');
  if (header && !header.querySelector('.super-split__back-btn')) {
    const backBtn = document.createElement('button');
    backBtn.className = 'super-split__back-btn';
    backBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg> Back`;
    backBtn.addEventListener('click', () => exitSplitView(popover));
    header.insertBefore(backBtn, header.firstChild);
  }

  // Source card click handlers — switch active source by index
  body.querySelectorAll('.super-split__source-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.idx, 10);
      if (isNaN(idx) || idx === popover._activeSourceIdx) return;

      const type = card.dataset.viewerType;
      const id = card.dataset.viewerId;
      const cardExtra = { _idx: idx };
      if (card.dataset.wordBlocks) {
        try { cardExtra.wordBlocks = JSON.parse(card.dataset.wordBlocks); } catch {}
      }
      if (card.dataset.quote) cardExtra.quote = card.dataset.quote;
      enterSplitView(popover, type, id, cardExtra);
    });
  });

  // Reposition popover to center at wider size
  const popW = Math.min(960, window.innerWidth - 32);
  const popH = Math.min(window.innerHeight - 32, 700);
  popover.style.left = `${Math.max(16, (window.innerWidth - popW) / 2)}px`;
  popover.style.top = `${Math.max(16, (window.innerHeight - popH) / 2)}px`;
  popover.style.width = `${popW}px`;
  popover.style.height = `${popH}px`;

  // Render the appropriate viewer content
  const viewerEl = body.querySelector('#super-split-viewer');
  await renderSplitContent(popover, viewerEl, viewerType, viewerId, extra);
}

/**
 * Render the right-pane content based on viewer type.
 */
async function renderSplitContent(popover, viewerEl, viewerType, viewerId, extra) {
  viewerEl.innerHTML = `<div class="super-split__viewer-loading"><div class="super-viewer-loading__spinner"></div><span>Loading...</span></div>`;

  try {
    if (viewerType === 'document') {
      await renderSplitPDF(popover, viewerEl, viewerId, extra.wordBlocks);
    } else if (viewerType === 'clinical-note') {
      await renderSplitNote(viewerEl, viewerId);
    } else if (viewerType === 'therapy-document') {
      await renderSplitTherapy(viewerEl, viewerId, extra.quote);
    } else if (viewerType === 'order') {
      await renderSplitAdministrations(viewerEl, viewerId);
    } else {
      viewerEl.innerHTML = `<div class="super-split__viewer-loading"><span>Unknown source type</span></div>`;
    }
  } catch (err) {
    console.error('[SuperOverlay] Split view load failed:', err);
    viewerEl.innerHTML = `<div class="super-split__viewer-loading"><span>Failed to load: ${escapeHTML(err.message)}</span></div>`;
  }
}

/** Render PDF document in split viewer using Preact PDFViewer */
async function renderSplitPDF(popover, viewerEl, documentId, wordBlocks) {
  const cache = popover._docCache;
  const cacheKey = `document:${documentId}`;
  let doc;

  const cached = cache.get(cacheKey);
  if (cached?.data) {
    doc = cached.data;
  } else if (cached?.promise) {
    doc = await cached.promise;
  } else {
    const params = await window.getCurrentParams();
    const result = await fetchDocument(documentId, params);
    doc = result.document;
    cache.set(cacheKey, { data: doc, promise: Promise.resolve(doc) });
  }

  if (!doc) throw new Error('Document not found');

  const targetPage = wordBlocks?.[0]?.p || 1;
  viewerEl.innerHTML = '';
  render(
    h(PDFViewer, {
      url: doc.signedUrl || null,
      wordBlocks: wordBlocks || [],
      targetPage,
      title: doc.title || 'Document',
      documentType: doc.documentType,
      effectiveDate: doc.effectiveDate,
      fileSize: doc.fileSize,
      expiresAt: true,
      openInNewTabUrl: doc.signedUrl || null,
    }),
    viewerEl
  );
}

/** Render clinical note inline in split viewer */
async function renderSplitNote(viewerEl, noteId, overrideParams) {
  const params = overrideParams || await window.getCurrentParams();
  const data = await fetchClinicalNote(noteId, params);
  const note = data.note;

  const noteTypeLabel = note.noteType === 'practitioner' ? 'Practitioner Note' : 'Progress Note';
  viewerEl.innerHTML = `
    <div class="super-split__content">
      <div class="super-split__content-header">
        <h3 class="super-split__content-title">${escapeHTML(note.department || noteTypeLabel)}</h3>
        <span class="super-split__content-badge">${noteTypeLabel}</span>
      </div>
      ${note.provider ? `<div class="super-split__content-meta">${escapeHTML(note.provider)}</div>` : ''}
      <div class="super-split__content-meta">
        ${note.effectiveDate ? formatDateDisplay(note.effectiveDate) : ''}
        ${note.visitType ? ` &middot; ${escapeHTML(note.visitType)}` : ''}
      </div>
      <div class="super-split__content-body">
        <pre class="super-split__note-text">${escapeHTML(note.noteText || 'No note content available.')}</pre>
      </div>
      ${note.signedDate ? `<div class="super-split__content-footer">Signed: ${formatDateTimeDisplay(note.signedDate)}</div>` : ''}
    </div>
  `;
}

/** Render therapy document inline in split viewer */
async function renderSplitTherapy(viewerEl, therapyDocId, highlightQuote, overrideParams) {
  const params = overrideParams || await window.getCurrentParams();
  const data = await fetchTherapyDocument(therapyDocId, params);
  const doc = data.therapyDocument;

  const title = doc.title || `${doc.therapyType || ''} ${doc.documentType || 'Document'}`.trim();
  let bodyHTML = '';

  // Build structured content from therapy doc fields
  if (doc.patientInfo) {
    bodyHTML += `<div class="super-split__therapy-section"><strong>Patient:</strong> ${escapeHTML(doc.patientInfo.name || '')}</div>`;
  }
  if (doc.treatmentDiagnosis) {
    bodyHTML += `<div class="super-split__therapy-section"><strong>Treatment Diagnosis:</strong> ${escapeHTML(doc.treatmentDiagnosis)}</div>`;
  }
  if (doc.goals && doc.goals.length > 0) {
    bodyHTML += `<div class="super-split__therapy-section"><strong>Goals:</strong><ul>${doc.goals.map(g => `<li>${escapeHTML(typeof g === 'string' ? g : g.description || JSON.stringify(g))}</li>`).join('')}</ul></div>`;
  }
  if (doc.content || doc.rawContent) {
    const text = doc.content || (typeof doc.rawContent === 'string' ? doc.rawContent : JSON.stringify(doc.rawContent, null, 2));
    bodyHTML += `<pre class="super-split__note-text">${escapeHTML(text)}</pre>`;
  }
  if (!bodyHTML) {
    bodyHTML = `<pre class="super-split__note-text">${escapeHTML(JSON.stringify(doc, null, 2))}</pre>`;
  }

  viewerEl.innerHTML = `
    <div class="super-split__content">
      <div class="super-split__content-header">
        <h3 class="super-split__content-title">${escapeHTML(title)}</h3>
        ${doc.documentType ? `<span class="super-split__content-badge">${escapeHTML(doc.documentType)}</span>` : ''}
      </div>
      ${doc.therapyType ? `<div class="super-split__content-meta">${escapeHTML(doc.therapyType)}</div>` : ''}
      ${doc.effectiveDate ? `<div class="super-split__content-meta">${formatDateDisplay(doc.effectiveDate)}</div>` : ''}
      <div class="super-split__content-body">${bodyHTML}</div>
    </div>
  `;

  // Highlight quoted text if provided
  if (highlightQuote && highlightQuote.length > 10) {
    const textEl = viewerEl.querySelector('.super-split__note-text');
    if (textEl) {
      const html = textEl.innerHTML;
      const escaped = escapeHTML(highlightQuote);
      const idx = html.indexOf(escaped);
      if (idx !== -1) {
        textEl.innerHTML = html.slice(0, idx) +
          `<mark class="super-split__highlight">${escaped}</mark>` +
          html.slice(idx + escaped.length);
        textEl.querySelector('.super-split__highlight')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
}

/** Render administration (MAR/TAR) records inline in split viewer */
async function renderSplitAdministrations(viewerEl, orderId, customDateRange, overrideParams) {
  const params = overrideParams || await getAPIParams();
  const data = await fetchAdministrations(orderId, params, customDateRange || {});
  const { order, dateRange, adminRecords } = data;

  const firstRecord = adminRecords?.[0];
  const reportType = firstRecord?.type === 'treatment' ? 'tar' : 'mar';
  const isMar = reportType === 'mar' || order.category === 'Medication';
  const typeIcon = isMar ? '💊' : '⚡';
  const typeBadge = isMar ? 'MAR' : 'TAR';
  const typeBadgeClass = isMar ? 'super-admin-badge--mar' : 'super-admin-badge--tar';
  const gridData = buildAdminGridData(adminRecords || []);
  const eventCount = countEvents(gridData);
  const formattedDateRange = formatDateRangeDisplay(dateRange.startDate, dateRange.endDate);

  viewerEl.innerHTML = `
    <div class="super-split__admin">
      <div class="super-admin-modal__header">
        <div class="super-admin-modal__title-row">
          <span class="super-admin-modal__icon">${typeIcon}</span>
          <div class="super-admin-modal__title">
            <span class="super-admin-modal__order-name">${escapeHTML(order.name || 'Order')}</span>
            <span class="super-admin-badge ${typeBadgeClass}">${typeBadge}</span>
          </div>
        </div>
        ${order.directions ? `<div class="super-admin-modal__directions">${escapeHTML(order.directions)}</div>` : ''}
        <div class="super-admin-modal__meta">
          ${gridData.times.length} time slot${gridData.times.length !== 1 ? 's' : ''}
          ${order.startDate || order.endDate ? `<span class="super-admin-modal__dates">
            ${order.startDate ? `Start: ${formatOrderDate(order.startDate)}` : ''}
            ${order.startDate && order.endDate ? ' · ' : ''}
            ${order.endDate ? `Stop: ${formatOrderDate(order.endDate)}` : ''}
          </span>` : ''}
        </div>
      </div>
      <div class="super-admin-modal__date-bar">
        <button class="super-admin-modal__nav-btn" data-dir="prev" title="Previous week">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <span class="super-admin-modal__date-range">📅 ${formattedDateRange}</span>
        <button class="super-admin-modal__nav-btn" data-dir="next" title="Next week">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div class="super-admin-modal__body">
        ${adminRecords && adminRecords.length > 0
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
    </div>
  `;

  // Wire up date navigation — pass the shifted range to avoid re-fetching defaults
  viewerEl.querySelectorAll('.super-admin-modal__nav-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const dir = btn.dataset.dir;
      const newRange = shiftDateRange(dateRange, dir === 'next' ? 7 : -7);
      viewerEl.innerHTML = `<div class="super-split__viewer-loading"><div class="super-split__spinner"></div><span>Loading...</span></div>`;
      try {
        await renderSplitAdministrations(viewerEl, orderId, newRange, params);
      } catch (err) {
        viewerEl.innerHTML = `<div class="super-split__viewer-loading"><span>Failed to load: ${escapeHTML(err.message)}</span></div>`;
      }
    });
  });
}

/**
 * Return popover from split-view to summary mode.
 */
function exitSplitView(popover) {
  popover.classList.remove('super-popover--split');
  popover._activeSourceIdx = null;

  // Unmount Preact PDFViewer if present
  const viewerEl = popover.querySelector('#super-split-viewer');
  if (viewerEl) render(null, viewerEl);

  // Restore body
  const body = popover.querySelector('.super-popover-body');
  body.className = 'super-popover-body';
  body.style.maxHeight = '';
  if (popover._savedBody) body.innerHTML = popover._savedBody;

  // Re-render loaded evidence into the restored body
  if (popover._evidence && popover._evidence.length > 0) {
    const container = body.querySelector('[data-evidence-container]');
    if (container) {
      container.innerHTML = popover._evidence.map((ev, i) => renderEvidenceCard(ev, i)).filter(c => c).join('');
    }
  }

  // Restore actions
  const actions = popover.querySelector('.super-popover-actions');
  if (actions && popover._savedActions) actions.innerHTML = popover._savedActions;

  // Remove back button
  const backBtn = popover.querySelector('.super-split__back-btn');
  if (backBtn) backBtn.remove();

  // Reset size & reposition
  popover.style.width = '';
  popover.style.height = '';
  if (popover._anchorEl) {
    positionPopover(popover, popover._anchorEl);
  } else {
    popover.style.left = `${Math.max(16, (window.innerWidth - 380) / 2)}px`;
    popover.style.top = `${Math.max(16, (window.innerHeight - 500) / 2)}px`;
  }

  // Re-attach evidence card click listeners
  setupAdministrationViewers(popover);
}

function closePopover() {
  const popover = document.querySelector('.super-popover');
  // Unmount any Preact PDFViewer before removing
  if (popover) {
    const viewerEl = popover.querySelector('#super-split-viewer');
    if (viewerEl) render(null, viewerEl);
  }
  popover?.remove();
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
      <div class="super-admin-modal__meta">
        ${gridData.times.length} time slot${gridData.times.length !== 1 ? 's' : ''}
        ${order.startDate || order.endDate ? `<span class="super-admin-modal__dates">
          ${order.startDate ? `Start: ${formatOrderDate(order.startDate)}` : ''}
          ${order.startDate && order.endDate ? ' · ' : ''}
          ${order.endDate ? `Stop: ${formatOrderDate(order.endDate)}` : ''}
        </span>` : ''}
      </div>
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

  // Chart code "0" means "given" — treat it like given status
  const isGiven = status === 'given' || status === 'measured' || chartCode === '0' || chartCode === 0;

  if (isGiven) {
    cellClass += ' super-admin-grid__cell--given';
    content = '<span class="super-admin-grid__check">✓</span>';
    if (staffInitials) {
      content += `<span class="super-admin-grid__initials">${escapeHTML(staffInitials)}</span>`;
    }
    if (value) {
      content += `<span class="super-admin-grid__value">${escapeHTML(value)}</span>`;
    }
  } else if (chartCode) {
    // Other non-zero chart codes get special display
    cellClass += ` super-admin-grid__cell--code-${chartCode}`;
    content = `<span class="super-admin-grid__code">${chartCode}</span>`;
    if (staffInitials) {
      content += `<span class="super-admin-grid__initials">${escapeHTML(staffInitials)}</span>`;
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

function formatOrderDate(dateStr) {
  const date = parseDate(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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
// Diagnosis Query Modal
// ============================================

// Get context needed for query modal
async function getQueryContext() {
  const url = new URL(window.location.href);
  const assessmentId = url.searchParams.get('ESOLassessid');

  // Use stored patientId from API response (preferred), fallback to URL param
  const patientId = SuperOverlay.patientId || url.searchParams.get('ESOLclientid');

  // Get org from cookie
  const orgResponse = getOrg();
  const orgSlug = orgResponse?.org;

  // Get facility from DOM
  const facilityInfo = getFacilityInfo();
  const facilityName = facilityInfo?.facility;

  // Get patient name from DOM (PCC header)
  const patientNameEl = document.querySelector('.patient-name, #patientName, .patientName, [class*="patient-name"]');
  const patientName = patientNameEl?.textContent?.trim() || 'Patient';

  // Get DOB if available
  const dobEl = document.querySelector('.patient-dob, #patientDOB, [class*="patient-dob"]');
  const patientDOB = dobEl?.textContent?.trim() || '';

  return {
    patientId,
    patientName,
    patientDOB,
    facilityName,
    orgSlug,
    assessmentId
  };
}

// Fetch practitioners for dropdown
async function fetchPractitioners(facilityName, orgSlug) {
  const endpoint = `/api/extension/practitioners?facilityName=${encodeURIComponent(facilityName)}&orgSlug=${orgSlug}`;

  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint
  });

  if (!response.success) throw new Error(response.error || 'Failed to fetch practitioners');
  return response.data?.practitioners || [];
}

// Create and send diagnosis query
async function createAndSendQuery(queryData, practitionerId, nurseNote) {
  const { facilityName, orgSlug } = queryData;

  // Step 1: Create the query
  const createEndpoint = `/api/extension/diagnosis-queries`;
  const createBody = {
    patientId: queryData.patientId,
    facilityName: facilityName,
    orgSlug: orgSlug,
    mdsAssessmentId: queryData.assessmentId,
    mdsItem: queryData.mdsItem,
    mdsItemName: queryData.mdsItemName,
    queryReason: queryData.queryReason,
    keyFindings: queryData.keyFindings,
    queryEvidence: queryData.queryEvidence,
    recommendedIcd10: queryData.recommendedIcd10,
    aiGeneratedNote: nurseNote
  };

  const createResponse = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: createEndpoint,
    options: {
      method: 'POST',
      body: JSON.stringify(createBody)
    }
  });

  if (!createResponse.success) throw new Error(createResponse.error || 'Failed to create query');

  const queryId = createResponse.data?.query?.id;
  if (!queryId) throw new Error('No query ID returned');

  // Step 2: Send the query to the practitioner
  const sendEndpoint = `/api/extension/diagnosis-queries/${queryId}/send`;
  const sendBody = {
    practitionerIds: [practitionerId],
    nurseEditedNote: nurseNote
  };

  const sendResponse = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: sendEndpoint,
    options: {
      method: 'POST',
      body: JSON.stringify(sendBody)
    }
  });

  if (!sendResponse.success) throw new Error(sendResponse.error || 'Failed to send query');

  return sendResponse.data;
}

// Create query modal shell with loading state
function createQueryModalShell() {
  const modal = document.createElement('div');
  modal.className = 'super-query-modal';
  modal.innerHTML = `
    <div class="super-query-modal__backdrop"></div>
    <div class="super-query-modal__container">
      <div class="super-query-modal__header">
        <div class="super-query-modal__title-row">
          <span class="super-query-modal__icon">?</span>
          <span class="super-query-modal__name">Query Physician</span>
        </div>
        <button class="super-query-modal__close">&times;</button>
      </div>
      <div class="super-query-modal__body">
        <div class="super-query-loading">
          <div class="super-query-loading__spinner"></div>
          <span>Loading...</span>
        </div>
      </div>
    </div>
  `;

  // Close handlers
  const closeModal = () => {
    modal.remove();
    document.body.style.overflow = '';
  };
  modal.querySelector('.super-query-modal__close').addEventListener('click', closeModal);
  modal.querySelector('.super-query-modal__backdrop').addEventListener('click', closeModal);

  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);

  return modal;
}

// Show the query modal
async function showQueryModal(result) {
  const modal = createQueryModalShell();
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  try {
    // Get context first
    const context = await getQueryContext();

    // Fetch practitioners
    const practitioners = await fetchPractitioners(context.facilityName, context.orgSlug);

    // Render the modal content
    renderQueryModalContent(modal, result, context, practitioners);
  } catch (error) {
    console.error('Super LTC: Failed to load query modal', error);
    renderQueryModalError(modal, error.message);
  }
}

// Generate default note text (fallback if API fails)
function generateDefaultNote(result) {
  const ai = result.aiAnswer;
  const diagnosisName = ai.mdsItemName || result.description;
  return `Please review the clinical evidence for potential ${diagnosisName} diagnosis. See supporting evidence below.`;
}

// Fetch AI-generated note from backend
async function fetchAIGeneratedNote(result) {
  // Pass the MDS item code and entire solver result object
  const mdsItem = result.mdsItem;  // e.g., "I5600" for Malnutrition
  const solverResult = result.aiAnswer;

  const endpoint = `/api/extension/diagnosis-queries/generate-note`;
  const body = {
    mdsItem: mdsItem,
    solverResult: solverResult
  };

  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: endpoint,
    options: {
      method: 'POST',
      body: JSON.stringify(body)
    }
  });

  if (!response.success || !response.data?.note) {
    throw new Error(response.error || 'No note returned');
  }

  // Return full response including ICD-10 data
  return {
    note: response.data.note,
    preferredIcd10: response.data.preferredIcd10 || null,
    icd10Options: response.data.icd10Options || []
  };
}

// Build evidence accordion HTML
function buildQueryEvidenceHTML(evidence) {
  if (!evidence || evidence.length === 0) {
    return '<div class="super-query-evidence-empty">No evidence available</div>';
  }

  return evidence.map(ev => {
    const quote = ev.findingText || ev.quoteText || ev.quote || ev.orderDescription || '';
    const source = ev.source || ev.displayName || ev.sourceType || 'Document';
    const rationale = ev.rationale || '';

    return `
      <div class="super-query-evidence-item">
        <div class="super-query-evidence-source">${escapeHTML(source)}</div>
        <div class="super-query-evidence-quote">"${escapeHTML(quote)}"</div>
        ${rationale ? `<div class="super-query-evidence-rationale">${escapeHTML(rationale)}</div>` : ''}
      </div>
    `;
  }).join('');
}

// Render the query modal content
function renderQueryModalContent(modal, result, context, practitioners) {
  const ai = result.aiAnswer;
  const container = modal.querySelector('.super-query-modal__container');

  // Build key findings HTML
  const keyFindingsHTML = (ai.keyFindings || []).map(f =>
    `<li class="super-query-finding">${escapeHTML(f)}</li>`
  ).join('') || '<li class="super-query-finding--empty">No key findings provided</li>';

  // Build evidence accordion HTML — evidence may already be loaded (backfilled by popover)
  const alreadyLoaded = Array.isArray(ai.evidence) && ai.evidence.length > 0;
  const evidenceData = alreadyLoaded
    ? (ai.queryEvidence?.length > 0 ? ai.queryEvidence : ai.evidence)
    : [];
  const totalCount = alreadyLoaded ? evidenceData.length : ((ai.evidenceCount || 0) + (ai.queryEvidenceCount || 0));
  const evidenceHTML = alreadyLoaded
    ? buildQueryEvidenceHTML(evidenceData)
    : (totalCount > 0 ? '<div class="super-evidence-loading"><div class="super-viewer-loading__spinner"></div><span>Loading evidence...</span></div>' : '<div class="super-query-evidence-empty">No evidence available</div>');

  // Build practitioners dropdown HTML
  const practitionerOptionsHTML = practitioners.map(p => {
    const displayName = p.firstName && p.lastName
      ? `${p.firstName} ${p.lastName}${p.title ? `, ${p.title}` : ''}`
      : p.name || 'Unknown';
    return `<option value="${escapeHTML(p.id)}">${escapeHTML(displayName)}</option>`;
  }).join('');

  container.innerHTML = `
    <div class="super-query-modal__header">
      <div class="super-query-modal__title-row">
        <span class="super-query-modal__icon">?</span>
        <div class="super-query-modal__title">
          <span class="super-query-modal__name">Diagnosis Query</span>
          <span class="super-query-badge">${escapeHTML(result.mdsItem)}</span>
        </div>
      </div>
      <button class="super-query-modal__close">&times;</button>
    </div>

    <div class="super-query-modal__body">
      <!-- Patient Info Header -->
      <div class="super-query-patient-header">
        <div class="super-query-patient-header__name">${escapeHTML(context.patientName)}</div>
        <div class="super-query-patient-header__info">
          ${context.patientDOB ? `<span>DOB: ${escapeHTML(context.patientDOB)}</span>` : ''}
          <span>${escapeHTML(context.facilityName || 'Unknown Facility')}</span>
        </div>
      </div>

      <!-- Diagnosis Name -->
      <div class="super-query-section">
        <div class="super-query-section__label">Diagnosis</div>
        <div class="super-query-diagnosis-name">${escapeHTML(ai.mdsItemName || result.description)}</div>
      </div>

      <!-- ICD-10 Code Selection -->
      <div class="super-query-section">
        <div class="super-query-section__label">ICD-10 Code</div>
        <select class="super-query-icd10-select" id="super-query-icd10">
          <option value="">Loading ICD-10 codes...</option>
        </select>
      </div>

      <!-- Note (editable) -->
      <div class="super-query-section">
        <div class="super-query-section__label">Query Note</div>
        <div class="super-query-note-wrapper">
          <textarea class="super-query-note super-query-note--loading" id="super-query-note" rows="4" placeholder="Enter note for physician..." disabled>Generating note...</textarea>
          <div class="super-query-note-spinner"></div>
        </div>
      </div>

      <!-- Key Findings (read-only) -->
      <div class="super-query-section">
        <div class="super-query-section__label">Key Findings</div>
        <ul class="super-query-findings-list">${keyFindingsHTML}</ul>
      </div>

      <!-- Evidence Preview (collapsible) -->
      <div class="super-query-section">
        <details class="super-query-evidence-accordion">
          <summary class="super-query-evidence-toggle">
            Evidence Preview (${totalCount})
          </summary>
          <div class="super-query-evidence-content">${evidenceHTML}</div>
        </details>
      </div>

      <!-- Practitioner Dropdown -->
      <div class="super-query-section">
        <div class="super-query-section__label">Send To</div>
        <select class="super-query-practitioner" id="super-query-practitioner">
          <option value="">Select a practitioner...</option>
          ${practitionerOptionsHTML}
        </select>
      </div>
    </div>

    <div class="super-query-modal__footer">
      <button class="super-query-modal__btn super-query-modal__btn--secondary" data-action="cancel">Cancel</button>
      <button class="super-query-modal__btn super-query-modal__btn--primary" data-action="send" disabled>Send Query</button>
    </div>
  `;

  setupQueryModalListeners(modal, result, context);

  // Lazy-load evidence if not already loaded
  if (!alreadyLoaded && totalCount > 0) {
    fetchItemEvidence(SuperOverlay.section, result.mdsItem).then(data => {
      result.aiAnswer.evidence = data.evidence || [];
      result.aiAnswer.queryEvidence = data.queryEvidence || [];
      const evidenceContainer = modal.querySelector('.super-query-evidence-content');
      if (evidenceContainer) {
        const merged = (data.queryEvidence?.length > 0 ? data.queryEvidence : data.evidence) || [];
        evidenceContainer.innerHTML = buildQueryEvidenceHTML(merged);
        // Update count in accordion summary
        const toggle = modal.querySelector('.super-query-evidence-toggle');
        if (toggle) toggle.textContent = `Evidence Preview (${merged.length})`;
      }
    }).catch(err => {
      console.error('[Super LTC] Failed to load evidence for query modal:', err);
      const evidenceContainer = modal.querySelector('.super-query-evidence-content');
      if (evidenceContainer) evidenceContainer.innerHTML = '<div class="super-query-evidence-empty">Failed to load evidence</div>';
    });
  }

  // Fetch AI-generated note asynchronously
  fetchAndPopulateNote(modal, result);
}

// Fetch AI note and populate textarea + ICD-10 dropdown
async function fetchAndPopulateNote(modal, result) {
  const textarea = modal.querySelector('#super-query-note');
  const spinner = modal.querySelector('.super-query-note-spinner');
  const icd10Select = modal.querySelector('#super-query-icd10');

  if (!textarea) return;

  try {
    const { note, preferredIcd10, icd10Options } = await fetchAIGeneratedNote(result);
    textarea.value = note;

    // Populate ICD-10 dropdown if we have options
    if (icd10Select && icd10Options.length > 0) {
      const optionsHTML = icd10Options.map(opt => {
        const code = typeof opt === 'object' ? opt.code : opt;
        const desc = typeof opt === 'object' ? opt.description : '';
        const isPreferred = preferredIcd10 && preferredIcd10.code === code;
        return `<option value="${escapeHTML(code)}" ${isPreferred ? 'selected' : ''}>${escapeHTML(code)}${desc ? ` - ${escapeHTML(desc)}` : ''}</option>`;
      }).join('');
      icd10Select.innerHTML = `<option value="">Select ICD-10 code...</option>${optionsHTML}`;

      // If we have a preferred code, pre-select it
      if (preferredIcd10) {
        icd10Select.value = preferredIcd10.code;
      }
    }
  } catch (error) {
    console.error('Super LTC: Failed to generate AI note, using fallback', error);
    textarea.value = generateDefaultNote(result);
  } finally {
    // Remove loading state
    textarea.classList.remove('super-query-note--loading');
    textarea.disabled = false;
    if (spinner) spinner.remove();
  }
}

// Render error state in query modal
function renderQueryModalError(modal, message) {
  const container = modal.querySelector('.super-query-modal__container');
  container.innerHTML = `
    <div class="super-query-modal__header">
      <div class="super-query-modal__title-row">
        <span class="super-query-modal__icon">!</span>
        <span class="super-query-modal__name">Error</span>
      </div>
      <button class="super-query-modal__close">&times;</button>
    </div>
    <div class="super-query-modal__body">
      <div class="super-query-error">
        <p>Failed to load query form</p>
        <span class="super-query-error__detail">${escapeHTML(message)}</span>
      </div>
    </div>
    <div class="super-query-modal__footer">
      <button class="super-query-modal__btn super-query-modal__btn--secondary" data-action="cancel">Close</button>
    </div>
  `;

  const closeModal = () => {
    modal.remove();
    document.body.style.overflow = '';
  };

  modal.querySelector('.super-query-modal__close').addEventListener('click', closeModal);
  modal.querySelector('[data-action="cancel"]').addEventListener('click', closeModal);
}

// Setup event listeners for query modal
function setupQueryModalListeners(modal, result, context) {
  const closeModal = () => {
    modal.remove();
    document.body.style.overflow = '';
  };

  // Close button
  modal.querySelector('.super-query-modal__close').addEventListener('click', closeModal);

  // Cancel button
  modal.querySelector('[data-action="cancel"]').addEventListener('click', closeModal);

  // Practitioner selection enables Send button
  const practitionerSelect = modal.querySelector('#super-query-practitioner');
  const sendBtn = modal.querySelector('[data-action="send"]');

  practitionerSelect.addEventListener('change', () => {
    sendBtn.disabled = !practitionerSelect.value;
  });

  // Send button
  sendBtn.addEventListener('click', async () => {
    const practitionerId = practitionerSelect.value;
    const noteText = modal.querySelector('#super-query-note').value;
    const selectedIcd10 = modal.querySelector('#super-query-icd10')?.value || '';

    if (!practitionerId) {
      alert('Please select a practitioner');
      return;
    }

    // Guard: evidence may still be loading
    const ai_ = result.aiAnswer;
    if (!Array.isArray(ai_.evidence) && !Array.isArray(ai_.queryEvidence)) {
      alert('Evidence is still loading. Please wait a moment.');
      return;
    }

    // Show loading state
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';

    try {
      const ai = result.aiAnswer;

      // Build recommendedIcd10 array - include selected code first if present
      let recommendedIcd10 = ai.recommendedIcd10 || [];
      if (selectedIcd10 && !recommendedIcd10.some(c => (typeof c === 'object' ? c.code : c) === selectedIcd10)) {
        recommendedIcd10 = [{ code: selectedIcd10 }, ...recommendedIcd10];
      }

      const queryData = {
        mdsItem: result.mdsItem,
        mdsItemName: ai.mdsItemName || ai.kbCategory?.categoryName || result.description,
        queryReason: ai.rationale || ai.queryReason || '',
        keyFindings: ai.keyFindings || [],
        queryEvidence: ai.evidence || ai.queryEvidence || [],
        recommendedIcd10: recommendedIcd10,
        patientId: context.patientId,
        assessmentId: context.assessmentId,
        facilityName: context.facilityName,
        orgSlug: context.orgSlug
      };

      await createAndSendQuery(queryData, practitionerId, noteText);

      // Show success and close
      showQuerySuccessToast();
      closeModal();

    } catch (error) {
      console.error('Super LTC: Failed to send query', error);
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send Query';
      alert(`Failed to send query: ${error.message}`);
    }
  });
}

// Show success toast after sending query
function showQuerySuccessToast() {
  const toast = document.createElement('div');
  toast.className = 'super-query-success-toast';
  toast.innerHTML = `
    <div class="super-query-success-toast__content">
      <span class="super-query-success-toast__icon">&#10003;</span>
      <span>Query sent successfully!</span>
    </div>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'superToastOut 0.3s ease-in forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
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

/**
 * POST a user decision (agree/disagree) for an MDS item to the API.
 */
async function postItemDecision(result, decision, note) {
  const mdsColumn = result.column || '';
  const body = {
    externalAssessmentId: SuperOverlay.assessmentId,
    facilityName: SuperOverlay.facilityName,
    orgSlug: SuperOverlay.orgSlug,
    decision,
    note: note || '',
    mdsColumn,
  };
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: `/api/extension/mds/items/${encodeURIComponent(result.mdsItem)}/decision`,
    options: { method: 'POST', body: JSON.stringify(body) },
  });
  if (!response.success) throw new Error(response.error || 'Failed to save decision');
  return response.data;
}

async function handleAction(action, result) {
  const key = `${result.mdsItem}-${result.column}`;

  if (action === 'agree') {
    const popover = document.querySelector('.super-popover');
    const btns = popover ? popover.querySelectorAll('.super-popover-actions .super-btn') : [];
    const agreeBtn = popover?.querySelector('[data-action="agree"]');

    // Disable buttons, show spinner on agree
    btns.forEach(b => b.disabled = true);
    if (agreeBtn) agreeBtn.innerHTML = '<span class="super-btn__spinner"></span> Agree';

    try {
      await postItemDecision(result, 'agree', '');

      // Click the PCC response that matches the solver's answer
      selectPCCAnswer(result);

      // Mark as dismissed
      SuperOverlay.dismissedItems.add(key);
      saveDismissedItems();
      result.status = 'dismissed';
      result.userDecision = { decision: 'agree' };
      injectBadge(result.element, result);
      createSummaryPanel();
      closePopover();

      // Notify PDPM Analyzer to re-fetch
      window.dispatchEvent(new CustomEvent('super:item-decision', {
        detail: { mdsItem: result.mdsItem, column: result.column, decision: 'agree' }
      }));

      console.log(`Super LTC: User agreed with ${result.mdsItem} Column ${result.column}, selected solver answer`);
    } catch (err) {
      console.error('Super LTC: Failed to save agree decision:', err);
      showPopoverError(popover, err.message || 'Failed to save decision');
      btns.forEach(b => b.disabled = false);
      if (agreeBtn) agreeBtn.innerHTML = '&#10003; Agree';
    }
  } else if (action === 'disagree') {
    showDisagreeForm(result);
  }
}

/**
 * Click the PCC page response link that matches the solver's answer.
 * PCC uses toggleSelection(anchor, jqSelector, value) on click,
 * so just clicking the right <a> triggers their handler.
 */
function selectPCCAnswer(result) {
  const solverAnswer = normalizeAnswer(result.aiAnswer?.answer);
  if (!solverAnswer) {
    console.log('Super LTC: No solver answer to select');
    return;
  }

  const responseLinks = result.element.querySelectorAll('.responses a');
  const targetLink = Array.from(responseLinks).find(
    a => a.getAttribute('data-value') === solverAnswer
  );

  if (targetLink) {
    // Don't click if already selected — toggleSelection would deselect it
    if (!targetLink.classList.contains('selected')) {
      targetLink.click();
      console.log(`Super LTC: Selected PCC answer "${solverAnswer}" for ${result.mdsItem}`);
    } else {
      console.log(`Super LTC: PCC already has "${solverAnswer}" selected for ${result.mdsItem}, skipping`);
    }
  } else {
    console.log(`Super LTC: Could not find PCC response for value "${solverAnswer}" on ${result.mdsItem}`);
  }
}

/**
 * Replace action buttons with a "why?" textarea form.
 */
function showDisagreeForm(result) {
  const popover = document.querySelector('.super-popover');
  if (!popover) return;

  const actionsEl = popover.querySelector('.super-popover-actions');
  if (!actionsEl) return;

  actionsEl.innerHTML = `
    <div class="super-disagree-form">
      <label class="super-disagree-form__label">Why do you disagree?</label>
      <textarea class="super-disagree-form__input" placeholder="Describe your reasoning..." rows="3"></textarea>
      <div class="super-disagree-form__buttons">
        <button class="super-btn super-btn--cancel" data-action="cancel-disagree">Cancel</button>
        <button class="super-btn super-btn--primary" data-action="submit-disagree">Submit</button>
      </div>
    </div>
  `;

  const textarea = actionsEl.querySelector('.super-disagree-form__input');
  textarea?.focus();

  actionsEl.querySelector('[data-action="cancel-disagree"]').addEventListener('click', () => {
    restorePopoverActions(popover, result);
  });

  actionsEl.querySelector('[data-action="submit-disagree"]').addEventListener('click', () => {
    submitDisagreeFeedback(result, textarea.value.trim());
  });

  // Ctrl/Cmd+Enter to submit
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      submitDisagreeFeedback(result, textarea.value.trim());
    }
  });
}

/**
 * Restore the original Agree / Disagree / Query buttons after cancelling disagree.
 */
function restorePopoverActions(popover, result) {
  const actionsEl = popover.querySelector('.super-popover-actions');
  if (!actionsEl) return;

  actionsEl.innerHTML = `
    <button class="super-btn super-btn--agree" data-action="agree">&#10003; Agree</button>
    <button class="super-btn super-btn--disagree" data-action="disagree">&#10007; Disagree</button>
    ${result.mdsItem && result.mdsItem.startsWith('I') ? `
      <button class="super-btn super-btn--query" data-action="query">? Query Physician</button>
    ` : ''}
  `;

  actionsEl.querySelector('[data-action="agree"]').addEventListener('click', () => handleAction('agree', result));
  actionsEl.querySelector('[data-action="disagree"]').addEventListener('click', () => handleAction('disagree', result));
  const queryBtn = actionsEl.querySelector('[data-action="query"]');
  if (queryBtn) {
    queryBtn.addEventListener('click', () => {
      closePopover();
      window.QuerySendModal?.show(result);
    });
  }
}

/**
 * Show an inline error message in the popover above the actions area.
 */
function showPopoverError(popover, message) {
  if (!popover) return;
  // Remove any existing error
  popover.querySelector('.super-popover-error')?.remove();
  const errDiv = document.createElement('div');
  errDiv.className = 'super-popover-error';
  errDiv.textContent = message;
  const actions = popover.querySelector('.super-popover-actions');
  if (actions) {
    actions.parentNode.insertBefore(errDiv, actions);
  } else {
    popover.appendChild(errDiv);
  }
}

/**
 * Submit disagree feedback and dismiss the item.
 */
async function submitDisagreeFeedback(result, reason) {
  const key = `${result.mdsItem}-${result.column}`;
  const popover = document.querySelector('.super-popover');
  const btns = popover ? popover.querySelectorAll('.super-disagree-form__buttons .super-btn') : [];
  const submitBtn = popover?.querySelector('[data-action="submit-disagree"]');

  // Disable buttons, show spinner on submit
  btns.forEach(b => b.disabled = true);
  if (submitBtn) submitBtn.innerHTML = '<span class="super-btn__spinner"></span> Submit';

  try {
    await postItemDecision(result, 'disagree', reason);

    SuperOverlay.dismissedItems.add(key);
    saveDismissedItems();
    result.status = 'dismissed';
    result.userDecision = { decision: 'disagree', note: reason };
    injectBadge(result.element, result);
    createSummaryPanel();
    closePopover();

    // Notify PDPM Analyzer to re-fetch
    window.dispatchEvent(new CustomEvent('super:item-decision', {
      detail: { mdsItem: result.mdsItem, column: result.column, decision: 'disagree' }
    }));

    console.log(`Super LTC: User disagreed with ${result.mdsItem} Column ${result.column}`, { reason });
  } catch (err) {
    console.error('Super LTC: Failed to save disagree decision:', err);
    showPopoverError(popover, err.message || 'Failed to save decision');
    btns.forEach(b => b.disabled = false);
    if (submitBtn) submitBtn.innerHTML = 'Submit';
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
// Query Loading
// ============================================
async function loadAssessmentQueries(assessmentId, facilityName, orgSlug) {
  try {
    console.log('Super LTC: Loading queries for assessment', assessmentId);

    // Use QueryState to load queries (from queries/query-state.js)
    await QueryState.loadQueries(assessmentId, facilityName, orgSlug);

    // Update badges to show query status
    if (QueryState.queries.length > 0) {
      QueryBadges.updateAllBadges();
      QueryPanel.updatePanel();
      console.log('Super LTC: Updated UI with', QueryState.queries.length, 'queries');
    }
  } catch (error) {
    console.error('Super LTC: Failed to load queries (non-fatal):', error);
    // Non-fatal - queries are supplementary
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
