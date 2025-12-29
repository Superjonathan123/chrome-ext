// Content script for Super LTC Chrome Extension
// Runs on pointclickcare.com pages to read DOM elements and inject MDS overlay

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
// Initialization
// ============================================
function initSuperOverlay() {
  if (SuperOverlay.initialized) return;

  // Check if we're on an MDS section page
  if (!isMDSPage()) {
    console.log('Super LTC: Not an MDS section page, skipping overlay');
    return;
  }

  console.log('Super LTC: MDS page detected, initializing overlay');

  // Load dismissed items from storage
  loadDismissedItems().then(() => {
    // Get mock data (will be replaced with API call later)
    const mockData = window.SUPER_MOCK_DATA;
    if (!mockData || !mockData.items) {
      console.log('Super LTC: No AI data available');
      return;
    }

    // Process each MDS item
    processItems(mockData.items);

    // Create summary panel
    createSummaryPanel();

    SuperOverlay.initialized = true;
  });
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
  // Look for selected response
  const selectedResponse = questionEl.querySelector('.responses a.selected');
  if (selectedResponse) {
    const value = selectedResponse.getAttribute('data-value');
    if (value === '1') return 'yes';
    if (value === '0') return 'no';
    if (value === '-') return 'dash';
  }

  // Try to find from signed response area
  const signedResponse = questionEl.querySelector('.signed_response .responses a.selected');
  if (signedResponse) {
    const value = signedResponse.getAttribute('data-value');
    if (value === '1') return 'yes';
    if (value === '0') return 'no';
    if (value === '-') return 'dash';
  }

  // Check for locked response
  const lockedResponse = questionEl.querySelector('.locked_response .responses a.selected');
  if (lockedResponse) {
    const value = lockedResponse.getAttribute('data-value');
    if (value === '1') return 'yes';
    if (value === '0') return 'no';
    if (value === '-') return 'dash';
  }

  return null;
}

function determineStatus(aiAnswer, pccAnswer) {
  // Check if dismissed
  const key = `${aiAnswer.mdsItem}-${aiAnswer.column}`;
  if (SuperOverlay.dismissedItems.has(key)) {
    return 'dismissed';
  }

  // Needs review if low/medium confidence
  if (aiAnswer.confidence === 'low' || aiAnswer.confidence === 'medium') {
    return 'review';
  }

  // Compare answers
  const aiValue = aiAnswer.answer?.toLowerCase();
  const pccValue = pccAnswer?.toLowerCase();

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
  const answerText = result.aiAnswer.answer?.toUpperCase() || '?';

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

  // Find the best place to insert the badge
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

  return `
    <div class="super-popover-header">
      <div>
        <div class="super-popover-header__title">${result.mdsItem} - ${result.description}</div>
        <div class="super-popover-header__subtitle">Column ${result.column}</div>
      </div>
      <button class="super-popover-close" aria-label="Close">&times;</button>
    </div>
    <div class="super-popover-body">
      <div class="super-answer-row">
        <div class="super-answer">
          <span class="super-answer__label">Super Answer:</span>
          <span class="super-answer__value super-answer__value--${ai.answer}">${ai.answer?.toUpperCase() || '?'}</span>
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
          <span class="super-answer__value super-answer__value--${result.pccAnswer}">${result.pccAnswer?.toUpperCase() || '?'}</span>
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

      ${datesHTML}

      ${evidenceHTML}
    </div>
    <div class="super-popover-actions">
      <button class="super-btn super-btn--agree" data-action="agree">&#10003; Agree</button>
      <button class="super-btn super-btn--disagree" data-action="disagree">&#10007; Disagree</button>
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
    const typeClass = `super-evidence-card__type--${ev.sourceType}`;
    const typeLabel = formatSourceType(ev.sourceType);

    return `
      <div class="super-evidence-card">
        <div class="super-evidence-card__header">
          <span class="super-evidence-card__type ${typeClass}">${typeLabel}</span>
        </div>
        <div class="super-evidence-card__quote">${ev.quote}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="super-evidence-section">
      <div class="super-evidence-section__label">Evidence (${evidence.length})</div>
      <div class="super-evidence-list">${cards}</div>
    </div>
  `;
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
  const aiAnswer = result.aiAnswer.answer?.toUpperCase() || '?';
  const pccAnswer = result.pccAnswer?.toUpperCase() || '?';

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
