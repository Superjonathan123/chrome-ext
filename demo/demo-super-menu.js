/**
 * Super Menu Demo Functionality
 * Creates and manages the Super Menu FAB and panel for demo pages
 */
(function() {
  'use strict';

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    console.log('[Demo] Initializing Super Menu...');

    // Set up patient context for ICD-10 viewer (needs to be done early)
    setupPatientContext();

    // Detect page type
    detectPageType();

    // Inject styles first
    injectStyles();

    // Create demo navigation bar
    createDemoNavigation();

    // Create the FAB and panel elements
    createSuperMenu();

    // Set up event listeners
    setupEventListeners();

    console.log('[Demo] Super Menu initialized');
  }

  // Detect what type of PCC page we're on
  function detectPageType() {
    const path = window.location.pathname;
    const title = document.title || '';

    if (path.includes('mds-section-i') || title.includes('Section I') || path.includes('sectioncode=I')) {
      window.SuperPageContext = { type: 'mds-section-i', section: 'I' };
    } else if (path.includes('mds') || title.includes('MDS')) {
      window.SuperPageContext = { type: 'mds', section: null };
    } else if (path.includes('medical-diagnosis') || title.includes('Medical Diagnosis')) {
      window.SuperPageContext = { type: 'diagnosis' };
    } else {
      window.SuperPageContext = { type: 'unknown' };
    }

    console.log('[Demo] Page context:', window.SuperPageContext);
  }

  function createDemoNavigation() {
    // Create demo nav bar
    const nav = document.createElement('div');
    nav.id = 'demo-nav-bar';
    nav.className = 'demo-nav-bar';

    const pages = [
      { url: 'medical-diagnosis.html', label: 'Medical Diagnosis', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>' },
      { url: 'mds-summary.html', label: 'MDS Summary', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>' },
      { url: 'mds-section-i.html', label: 'MDS Section I', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
      { url: 'index.html', label: 'Simple Demo', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' },
      { url: 'pcc-demo.html', label: 'PCC Demo', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' }
    ];

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    nav.innerHTML = `
      <div class="demo-nav-bar__inner">
        <div class="demo-nav-bar__brand">
          <span class="demo-nav-bar__logo">S</span>
          <span class="demo-nav-bar__title">Super LTC Demo</span>
        </div>
        <div class="demo-nav-bar__links">
          ${pages.map(p => `
            <a href="${p.url}" class="demo-nav-bar__link ${currentPage === p.url ? 'demo-nav-bar__link--active' : ''}">
              <span class="demo-nav-bar__link-icon">${p.icon}</span>
              <span class="demo-nav-bar__link-label">${p.label}</span>
            </a>
          `).join('')}
        </div>
        <div class="demo-nav-bar__actions">
          <button class="demo-nav-bar__btn demo-icd10-btn" title="ICD-10 Viewer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            ICD-10
          </button>
          <button class="demo-nav-bar__btn demo-mar-btn" title="MAR">MAR</button>
          <button class="demo-nav-bar__btn demo-tar-btn" title="TAR">TAR</button>
          <button class="demo-nav-bar__btn demo-therapy-btn" title="Therapy">Therapy</button>
        </div>
      </div>
    `;

    document.body.insertBefore(nav, document.body.firstChild);
  }

  function setupPatientContext() {
    // Set patient ID in URL for ICD10Viewer._gatherContext()
    const url = new URL(window.location.href);
    if (!url.searchParams.get('ESOLclientid')) {
      url.searchParams.set('ESOLclientid', '2657226');
      window.history.replaceState({}, '', url);
    }

    // Also set up SuperOverlay context as backup
    window.SuperOverlay = window.SuperOverlay || {};
    window.SuperOverlay.patientId = '2657226';

    // Set up mock getCurrentParams function that ICD10Viewer uses
    window.getCurrentParams = async function() {
      return {
        facilityName: 'Sunny Meadows Demo Facility',
        orgSlug: 'demo-org'
      };
    };

    console.log('[Demo] Patient context set up:', window.location.search);
  }

  function createSuperMenu() {
    // Remove any existing FABs (including extension FAB on left side)
    const existingFabs = document.querySelectorAll('.super-chat-fab, #super-chat-button, #super-menu-fab');
    existingFabs.forEach(fab => {
      console.log('[Demo] Removing existing FAB:', fab.id || fab.className);
      fab.remove();
    });

    // Create FAB button
    const fab = document.createElement('button');
    fab.id = 'super-chat-button';
    fab.className = 'super-chat-fab';
    fab.setAttribute('aria-label', 'Open Super Menu');
    fab.innerHTML = `
      <div class="super-menu-fab__logo super-chat-fab__icon--chat">S</div>
      <div class="super-menu-fab__badge" id="super-menu-badge">3</div>
      <svg class="super-chat-fab__icon super-chat-fab__icon--close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;

    // Create panel
    const panel = document.createElement('div');
    panel.id = 'super-chat-panel';
    panel.className = 'super-chat-panel';
    panel.innerHTML = `
      <div class="super-chat-header">
        <div class="super-menu-header__nav">
          <button class="super-menu-nav-btn super-menu-nav-btn--active" data-view="dashboard" title="Queries Dashboard">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button class="super-menu-nav-btn" data-view="mds" title="MDS Analysis">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </button>
          <button class="super-menu-nav-btn" data-view="chat" title="AI Assistant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
        <div class="super-chat-header__title">
          <div class="super-chat-header__logo">S</div>
          <span class="super-menu-header__title-text" id="super-menu-title">Queries</span>
        </div>
        <div class="super-chat-header__actions">
          <button class="super-chat-header__btn" id="super-menu-refresh" title="Refresh">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 4 23 10 17 10"></polyline>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
          </button>
          <button class="super-chat-header__btn" id="super-chat-close" title="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div class="super-menu-content" id="super-menu-content">
        <!-- Dashboard or Chat content rendered here -->
      </div>
    `;

    // Add to document
    document.body.appendChild(fab);
    document.body.appendChild(panel);

    // Watch for any new FABs being added (e.g., from Chrome extension) and remove them
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            // Check if it's a FAB button (but not our demo FAB)
            if ((node.classList && node.classList.contains('super-chat-fab') && node.id !== 'super-chat-button') ||
                (node.id === 'super-menu-fab' && node.id !== fab.id)) {
              console.log('[Demo] Removing duplicate FAB:', node.id || node.className);
              node.remove();
            }
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Set initial content
    const content = panel.querySelector('.super-menu-content');
    if (content) {
      content.innerHTML = getDashboardHTML();
    }
  }

  function setupEventListeners() {
    const fab = document.getElementById('super-chat-button');
    const panel = document.getElementById('super-chat-panel');

    if (!fab || !panel) {
      console.warn('[Demo] Super Menu elements not found after creation');
      return;
    }

    // Toggle panel on FAB click
    fab.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = panel.classList.contains('super-chat-panel--open');
      if (isOpen) {
        closePanel();
      } else {
        openPanel();
      }
    });

    // Close button
    const closeBtn = document.getElementById('super-chat-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closePanel);
    }

    // Nav buttons
    const navBtns = panel.querySelectorAll('.super-menu-nav-btn');
    navBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const view = this.getAttribute('data-view');
        navBtns.forEach(b => b.classList.remove('super-menu-nav-btn--active'));
        this.classList.add('super-menu-nav-btn--active');
        switchView(view);
      });
    });

    // Attach content listeners
    attachContentListeners();
  }

  function openPanel() {
    const panel = document.getElementById('super-chat-panel');
    const fab = document.getElementById('super-chat-button');
    panel.classList.add('super-chat-panel--open');
    fab.classList.add('super-chat-fab--active');
  }

  function closePanel() {
    const panel = document.getElementById('super-chat-panel');
    const fab = document.getElementById('super-chat-button');
    panel.classList.remove('super-chat-panel--open');
    fab.classList.remove('super-chat-fab--active');
  }

  function switchView(view) {
    console.log('[Demo] Switching to view:', view);
    const content = document.getElementById('super-menu-content');
    const titleEl = document.getElementById('super-menu-title');
    if (!content) return;

    switch(view) {
      case 'dashboard':
        if (titleEl) titleEl.textContent = 'Queries';
        content.innerHTML = getDashboardHTML();
        break;
      case 'mds':
        if (titleEl) titleEl.textContent = 'MDS Analysis';
        content.innerHTML = getMDSAnalysisHTML();
        break;
      case 'chat':
        if (titleEl) titleEl.textContent = 'AI Assistant';
        content.innerHTML = getChatHTML();
        break;
      default:
        content.innerHTML = getDashboardHTML();
    }

    attachContentListeners();
  }

  function attachContentListeners() {
    // Query items click
    document.querySelectorAll('.demo-query-item').forEach(item => {
      item.addEventListener('click', function() {
        const queryId = this.dataset.queryId;
        showQueryDetail(queryId);
      });
    });

    // ICD-10 viewer buttons (in Super Menu)
    document.querySelectorAll('.demo-icd10-btn').forEach(btn => {
      btn.addEventListener('click', openICD10Viewer);
    });

    // MAR/TAR viewer buttons
    document.querySelectorAll('.demo-mar-btn').forEach(btn => {
      btn.addEventListener('click', () => openMARViewer());
    });
    document.querySelectorAll('.demo-tar-btn').forEach(btn => {
      btn.addEventListener('click', () => openTARViewer());
    });
    document.querySelectorAll('.demo-therapy-btn').forEach(btn => {
      btn.addEventListener('click', () => openTherapyViewer());
    });

    // Also wire up "AI Code Patient" button on the PCC page itself
    const aiCodeBtn = document.querySelector('button[class*="AI Code Patient"], button');
    const pccButtons = document.querySelectorAll('button');
    pccButtons.forEach(btn => {
      if (btn.textContent && btn.textContent.includes('AI Code Patient')) {
        btn.addEventListener('click', openICD10Viewer);
      }
    });
  }

  function getDashboardHTML() {
    // Pull from DemoData if available
    const data = window.DemoData?.facilityDashboard || {};
    const queries = data.queriesToSend || [];
    const awaiting = data.awaitingSignatures || [];
    const recentlySigned = data.recentlySigned || [];
    const hipps = data.hippsOpportunities || [];
    const allAssessments = data.allAssessments || [];

    const totalQueries = queries.length + awaiting.length;
    const totalActionableItems = hipps.reduce((sum, h) => sum + h.hippsChangingCount, 0);

    // Build stats cards
    const statsHTML = `
      <div class="demo-stats-grid">
        <div class="demo-stat-card demo-stat-card--warning">
          <div class="demo-stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
              <rect x="9" y="3" width="6" height="4" rx="1"/>
            </svg>
          </div>
          <div class="demo-stat-content">
            <div class="demo-stat-value">${queries.length}</div>
            <div class="demo-stat-label">Draft Queries</div>
          </div>
        </div>

        <div class="demo-stat-card demo-stat-card--info">
          <div class="demo-stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div class="demo-stat-content">
            <div class="demo-stat-value">${awaiting.length}</div>
            <div class="demo-stat-label">Awaiting Signature</div>
          </div>
        </div>

        <div class="demo-stat-card demo-stat-card--success">
          <div class="demo-stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div class="demo-stat-content">
            <div class="demo-stat-value">${hipps.length}</div>
            <div class="demo-stat-label">HIPPS Opportunities</div>
          </div>
        </div>

        <div class="demo-stat-card demo-stat-card--primary">
          <div class="demo-stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <div class="demo-stat-content">
            <div class="demo-stat-value">${totalActionableItems}</div>
            <div class="demo-stat-label">Action Items</div>
          </div>
        </div>
      </div>
    `;

    // Build outstanding queries section (all queries)
    let outstandingQueriesHTML = '';
    const allQueries = [...queries, ...awaiting];
    if (allQueries.length > 0) {
      allQueries.forEach((q, i) => {
        const isAwait = q.status === 'sent';
        const daysAgo = isAwait ? Math.floor((Date.now() - new Date(q.sentAt)) / (1000*60*60*24)) : null;
        outstandingQueriesHTML += `
          <div class="demo-query-row ${isAwait ? 'demo-query-row--sent' : 'demo-query-row--draft'}" data-query-id="${q.id}">
            <div class="demo-query-row__left">
              <div class="demo-query-row__code">${q.mdsItem}</div>
              <div class="demo-query-row__info">
                <div class="demo-query-row__desc">${q.mdsItemName}</div>
                <div class="demo-query-row__patient">${q.patientName}</div>
              </div>
            </div>
            <div class="demo-query-row__right">
              <div class="demo-query-row__status ${isAwait ? 'demo-query-row__status--sent' : 'demo-query-row__status--draft'}">
                ${isAwait ? `Sent ${daysAgo}d ago` : 'Draft'}
              </div>
            </div>
          </div>`;
      });
    } else {
      outstandingQueriesHTML = '<div class="demo-empty-state">No outstanding queries</div>';
    }

    // Build all HIPPS opportunities section
    let allHippsHTML = '';
    if (hipps.length > 0) {
      hipps.forEach(h => {
        const revenueIncrease = calculateRevenueIncrease(h.currentHipps, h.potentialHipps);
        allHippsHTML += `
          <div class="demo-hipps-card" data-assessment-id="${h.externalAssessmentId}">
            <div class="demo-hipps-card__header">
              <div class="demo-hipps-card__patient">
                <div class="demo-hipps-card__patient-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <div class="demo-hipps-card__patient-name">${h.patientName}</div>
                  <div class="demo-hipps-card__meta">${h.hippsChangingCount} actionable items</div>
                </div>
              </div>
            </div>
            <div class="demo-hipps-card__body">
              <div class="demo-hipps-comparison">
                <div class="demo-hipps-current">
                  <div class="demo-hipps-label">Current</div>
                  <div class="demo-hipps-code">${h.currentHipps}</div>
                </div>
                <div class="demo-hipps-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
                <div class="demo-hipps-potential">
                  <div class="demo-hipps-label">Potential</div>
                  <div class="demo-hipps-code demo-hipps-code--highlight">${h.potentialHipps}</div>
                </div>
              </div>
              <div class="demo-hipps-revenue">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <polyline points="19 12 12 5 5 12"/>
                </svg>
                <span>${revenueIncrease}/day potential increase</span>
              </div>
            </div>
            <div class="demo-hipps-card__footer">
              <button class="demo-hipps-action-btn demo-icd10-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Open ICD-10 Viewer
              </button>
            </div>
          </div>`;
      });
    } else {
      allHippsHTML = '<div class="demo-empty-state">No HIPPS opportunities found</div>';
    }

    return `
      <div class="demo-dashboard">
        ${statsHTML}

        <div class="demo-section">
          <div class="demo-section-header">
            <div class="demo-section-title-group">
              <svg class="demo-section-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                <rect x="9" y="3" width="6" height="4" rx="1"/>
              </svg>
              <span class="demo-section-title">Outstanding Queries</span>
            </div>
            <span class="demo-badge">${totalQueries}</span>
          </div>
          <div class="demo-query-list-new">
            ${outstandingQueriesHTML}
          </div>
        </div>

        <div class="demo-section">
          <div class="demo-section-header">
            <div class="demo-section-title-group">
              <svg class="demo-section-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              <span class="demo-section-title">HIPPS Opportunities</span>
            </div>
            <span class="demo-badge demo-badge--success">${hipps.length} MDS</span>
          </div>
          <div class="demo-hipps-grid">
            ${allHippsHTML}
          </div>
        </div>
      </div>
    `;
  }

  // Helper function to calculate revenue increase
  function calculateRevenueIncrease(currentHipps, potentialHipps) {
    // Simplified calculation - in reality this would lookup actual HIPPS rates
    const hippsRates = {
      'KAQD': 567.32,
      'KBQE': 609.18,
      'CBQJ': 625.45,
      'CBQL': 678.90
    };
    const current = hippsRates[currentHipps] || 567;
    const potential = hippsRates[potentialHipps] || 609;
    const diff = potential - current;
    return diff > 0 ? `+$${diff.toFixed(2)}` : '$0.00';
  }

  function getMDSAnalysisHTML() {
    // Pull from DemoData
    const pdpmData = window.DemoData?.mdsPdpmPotential?.['4860265'] || {};
    const calc = pdpmData.calculation || { hippsCode: 'KAQD', ptot: 'TK', slp: 'SA', nursing: 'CA1', nta: 'ND' };
    const summary = pdpmData.summary || { currentHipps: 'KAQD', potentialHippsIfCoded: 'KBQE' };
    const detections = pdpmData.enhancedDetections || [];
    const therapy = window.DemoData?.therapyMinutes?.['2657226'] || { pt: {total:450,goal:720}, ot: {total:380,goal:600}, slp: {total:180,goal:300} };

    // Build detections HTML
    let detectionsHTML = '';
    detections.forEach(d => {
      const isHippsChanging = d.wouldChangeHipps;
      detectionsHTML += `
        <div class="demo-nta-item ${isHippsChanging ? 'demo-nta-item--suggested' : ''}">
          <input type="checkbox" ${isHippsChanging ? '' : 'checked disabled'}>
          <span class="demo-nta-code">${d.mdsItem}</span>
          <span class="demo-nta-desc">${d.itemName}${isHippsChanging ? ' - Detected' : ''}</span>
        </div>`;
    });

    return `
      <div class="demo-mds-analysis">
        <div class="demo-mds-summary">
          <div class="demo-mds-hipps">
            <div class="demo-hipps-current">
              <div class="demo-hipps-label">Current HIPPS</div>
              <div class="demo-hipps-code">${summary.currentHipps}</div>
              <div class="demo-hipps-rate">$567.32/day</div>
            </div>
            <div class="demo-hipps-arrow">&rarr;</div>
            <div class="demo-hipps-potential">
              <div class="demo-hipps-label">Potential HIPPS</div>
              <div class="demo-hipps-code demo-hipps-code--highlight">${summary.potentialHippsIfCoded}</div>
              <div class="demo-hipps-rate">$609.18/day</div>
            </div>
          </div>
          <div class="demo-hipps-diff">+$41.86/day potential</div>
        </div>

        <div class="demo-mds-components">
          <div class="demo-component">
            <div class="demo-component-label">PT/OT</div>
            <div class="demo-component-value">${calc.ptot}</div>
            <div class="demo-component-desc">${therapy.pt.total + therapy.ot.total} mins</div>
          </div>
          <div class="demo-component">
            <div class="demo-component-label">SLP</div>
            <div class="demo-component-value">${calc.slp}</div>
            <div class="demo-component-desc">${therapy.slp.total} mins</div>
          </div>
          <div class="demo-component">
            <div class="demo-component-label">Nursing</div>
            <div class="demo-component-value">${calc.nursing}</div>
            <div class="demo-component-desc">ADL: 12</div>
          </div>
          <div class="demo-component demo-component--opportunity">
            <div class="demo-component-label">NTA</div>
            <div class="demo-component-value">${calc.nta} &rarr; NE</div>
            <div class="demo-component-desc">+2 pts available</div>
          </div>
        </div>

        <div class="demo-section">
          <div class="demo-section-header">
            <span class="demo-section-title">Therapy Progress</span>
          </div>
          <div class="demo-therapy-grid">
            <div class="demo-therapy-item">
              <div class="demo-therapy-label">PT</div>
              <div class="demo-therapy-bar"><div class="demo-therapy-fill" style="width:${(therapy.pt.total/therapy.pt.goal*100).toFixed(0)}%"></div></div>
              <div class="demo-therapy-mins">${therapy.pt.total}/${therapy.pt.goal}</div>
            </div>
            <div class="demo-therapy-item">
              <div class="demo-therapy-label">OT</div>
              <div class="demo-therapy-bar"><div class="demo-therapy-fill" style="width:${(therapy.ot.total/therapy.ot.goal*100).toFixed(0)}%"></div></div>
              <div class="demo-therapy-mins">${therapy.ot.total}/${therapy.ot.goal}</div>
            </div>
            <div class="demo-therapy-item">
              <div class="demo-therapy-label">SLP</div>
              <div class="demo-therapy-bar"><div class="demo-therapy-fill" style="width:${(therapy.slp.total/therapy.slp.goal*100).toFixed(0)}%"></div></div>
              <div class="demo-therapy-mins">${therapy.slp.total}/${therapy.slp.goal}</div>
            </div>
          </div>
        </div>

        <div class="demo-section">
          <div class="demo-section-header">
            <span class="demo-section-title">PDPM Detections</span>
          </div>
          <div class="demo-nta-list">
            ${detectionsHTML || '<div class="demo-empty">No detections</div>'}
          </div>
        </div>
      </div>
    `;
  }

  function getChatHTML() {
    return `
      <div class="demo-chat">
        <div class="demo-chat-messages">
          <div class="demo-chat-message demo-chat-message--assistant">
            <div class="demo-chat-avatar">S</div>
            <div class="demo-chat-bubble">
              Hi! I'm your Super LTC assistant. I can help you with:
              <ul>
                <li>ICD-10 coding questions</li>
                <li>MDS documentation</li>
                <li>PDPM optimization</li>
                <li>Clinical documentation review</li>
              </ul>
              What can I help you with today?
            </div>
          </div>
        </div>
        <div class="demo-chat-input">
          <input type="text" placeholder="Ask me anything..." class="demo-chat-textbox">
          <button class="demo-chat-send">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  function showQueryDetail(queryId) {
    console.log('[Demo] Show query detail:', queryId);
    alert('Query detail modal would open here for query #' + queryId);
  }

  function openICD10Viewer() {
    console.log('[Demo] Opening ICD-10 Viewer...');

    // Check if ICD10Viewer exists (from extension)
    if (window.ICD10Viewer && typeof window.ICD10Viewer.open === 'function') {
      // Context is already set up in setupPatientContext() at init time
      window.ICD10Viewer.open();
    } else {
      // Show demo modal
      showDemoICD10Modal();
    }
  }

  // ============================================
  // MAR VIEWER
  // ============================================
  function openMARViewer() {
    console.log('[Demo] Opening MAR Viewer...');
    const patientId = '2657226';
    const patient = window.DemoData?.getPatient(patientId) || { name: 'Doe, Jane' };
    const marData = window.DemoData?.marData?.[patientId] || { medications: [] };

    let modal = document.getElementById('demo-mar-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'demo-mar-modal';
      modal.className = 'super-therapy-modal';
      document.body.appendChild(modal);
    }

    const medsHTML = marData.medications.map(med => `
      <tr>
        <td style="font-weight: 600;">${med.name}</td>
        <td>${med.schedule}</td>
        <td><span class="demo-mar-route demo-mar-route--${med.route.toLowerCase()}">${med.route}</span></td>
        <td><span class="demo-mar-status demo-mar-status--${med.status}">${med.status === 'prn' ? 'PRN' : 'Active'}</span></td>
        <td>${med.lastAdmin}</td>
      </tr>
    `).join('');

    modal.innerHTML = `
      <div class="super-therapy-modal__backdrop"></div>
      <div class="super-therapy-modal__container" style="width: 1000px;">
        <div class="super-therapy-modal__toolbar">
          <div class="super-therapy-modal__toolbar-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              <path d="M12 8v8m-4-4h8"/>
            </svg>
            <span>Medication Administration Record (MAR)</span>
          </div>
          <div class="super-therapy-modal__toolbar-controls">
            <span style="opacity: 0.7; font-size: 12px;">${patient.name}</span>
            <button class="super-therapy-modal__close" id="mar-modal-close">&times;</button>
          </div>
        </div>
        <div class="super-therapy-modal__body">
          <div class="super-therapy-doc" style="max-width: 100%;">
            <div class="super-therapy-doc__header">
              <div class="super-therapy-doc__discipline">MEDICATION ADMINISTRATION RECORD</div>
              <div class="super-therapy-doc__title">${patient.name} - Room ${window.DemoData?.getPatient(patientId)?.room || '308-B'}</div>
            </div>
            <div class="super-therapy-doc__info-row">
              <div class="super-therapy-doc__provider">
                <span class="super-therapy-doc__provider-label">Physician:</span> ${patient.physician || 'Dr. Demo Provider'}
              </div>
              <div class="super-therapy-doc__patient">
                <strong>Date Range:</strong> 01/21/2026 - 01/27/2026
              </div>
            </div>

            <div class="super-therapy-section">
              <div class="super-therapy-section-header">Current Medications</div>
              <div class="super-therapy-section__body" style="padding: 0;">
                <table class="demo-mar-table">
                  <thead>
                    <tr>
                      <th>Medication</th>
                      <th>Schedule</th>
                      <th>Route</th>
                      <th>Status</th>
                      <th>Last Admin</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${medsHTML}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="super-therapy-section">
              <div class="super-therapy-section-header">Administration Schedule - Today (01/27/2026)</div>
              <div class="super-therapy-section__body">
                <div class="demo-mar-timeline">
                  <div class="demo-mar-time-slot">
                    <div class="demo-mar-time">06:00</div>
                    <div class="demo-mar-admin demo-mar-admin--given">
                      <span class="demo-mar-checkmark">✓</span>
                      Albuterol Nebulizer - Given at 06:30 by CNA Johnson
                    </div>
                  </div>
                  <div class="demo-mar-time-slot">
                    <div class="demo-mar-time">08:00</div>
                    <div class="demo-mar-admin demo-mar-admin--given">
                      <span class="demo-mar-checkmark">✓</span>
                      Lisinopril 10mg, Metformin 500mg, Omeprazole 20mg - Given at 08:05 by RN Demo
                    </div>
                  </div>
                  <div class="demo-mar-time-slot">
                    <div class="demo-mar-time">12:00</div>
                    <div class="demo-mar-admin demo-mar-admin--upcoming">
                      <span class="demo-mar-pending">○</span>
                      No scheduled medications
                    </div>
                  </div>
                  <div class="demo-mar-time-slot">
                    <div class="demo-mar-time">18:00</div>
                    <div class="demo-mar-admin demo-mar-admin--upcoming">
                      <span class="demo-mar-pending">○</span>
                      Metformin 500mg - Due
                    </div>
                  </div>
                  <div class="demo-mar-time-slot">
                    <div class="demo-mar-time">21:00</div>
                    <div class="demo-mar-admin demo-mar-admin--upcoming">
                      <span class="demo-mar-pending">○</span>
                      Atorvastatin 40mg - Due
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="super-therapy-signatures">
              <div class="super-therapy-signature">
                <div class="super-therapy-signature__line">
                  <div class="super-therapy-signature__name-area">
                    <div class="super-therapy-signature__name">RN Demo Nurse</div>
                    <div class="super-therapy-signature__label">Reviewing Nurse</div>
                  </div>
                  <div class="super-therapy-signature__date-area">
                    <div class="super-therapy-signature__date">01/27/2026</div>
                    <div class="super-therapy-signature__date-label">Date</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="super-therapy-modal__footer">
          <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary" id="mar-modal-print">Print</button>
          <button class="super-therapy-modal__btn super-therapy-modal__btn--primary" id="mar-modal-done">Done</button>
        </div>
      </div>
    `;

    // Attach listeners
    modal.querySelector('.super-therapy-modal__backdrop').addEventListener('click', () => modal.remove());
    modal.querySelector('#mar-modal-close').addEventListener('click', () => modal.remove());
    modal.querySelector('#mar-modal-done').addEventListener('click', () => modal.remove());
    modal.querySelector('#mar-modal-print').addEventListener('click', () => window.print());
  }

  // ============================================
  // TAR VIEWER
  // ============================================
  function openTARViewer() {
    console.log('[Demo] Opening TAR Viewer...');
    const patientId = '2657226';
    const patient = window.DemoData?.getPatient(patientId) || { name: 'Doe, Jane' };
    const tarData = window.DemoData?.tarData?.[patientId] || { treatments: [] };

    let modal = document.getElementById('demo-tar-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'demo-tar-modal';
      modal.className = 'super-therapy-modal';
      document.body.appendChild(modal);
    }

    const treatmentsHTML = tarData.treatments.map(t => `
      <tr>
        <td style="font-weight: 600;">${t.name}</td>
        <td>${t.schedule}</td>
        <td><span class="demo-tar-status demo-tar-status--${t.status}">${t.status === 'active' ? 'Active' : t.status}</span></td>
        <td>${t.lastPerformed}</td>
      </tr>
    `).join('');

    modal.innerHTML = `
      <div class="super-therapy-modal__backdrop"></div>
      <div class="super-therapy-modal__container" style="width: 1000px;">
        <div class="super-therapy-modal__toolbar">
          <div class="super-therapy-modal__toolbar-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
              <rect x="9" y="3" width="6" height="4" rx="1"/>
              <path d="M9 12h6m-6 4h6"/>
            </svg>
            <span>Treatment Administration Record (TAR)</span>
          </div>
          <div class="super-therapy-modal__toolbar-controls">
            <span style="opacity: 0.7; font-size: 12px;">${patient.name}</span>
            <button class="super-therapy-modal__close" id="tar-modal-close">&times;</button>
          </div>
        </div>
        <div class="super-therapy-modal__body">
          <div class="super-therapy-doc" style="max-width: 100%;">
            <div class="super-therapy-doc__header">
              <div class="super-therapy-doc__discipline">TREATMENT ADMINISTRATION RECORD</div>
              <div class="super-therapy-doc__title">${patient.name} - Room ${window.DemoData?.getPatient(patientId)?.room || '308-B'}</div>
            </div>
            <div class="super-therapy-doc__info-row">
              <div class="super-therapy-doc__provider">
                <span class="super-therapy-doc__provider-label">Physician:</span> ${patient.physician || 'Dr. Demo Provider'}
              </div>
              <div class="super-therapy-doc__patient">
                <strong>Date Range:</strong> 01/21/2026 - 01/27/2026
              </div>
            </div>

            <div class="super-therapy-section">
              <div class="super-therapy-section-header">Active Treatments & Nursing Interventions</div>
              <div class="super-therapy-section__body" style="padding: 0;">
                <table class="demo-mar-table">
                  <thead>
                    <tr>
                      <th>Treatment</th>
                      <th>Schedule</th>
                      <th>Status</th>
                      <th>Last Performed</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${treatmentsHTML}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="super-therapy-section">
              <div class="super-therapy-section-header">Weekly Treatment Calendar</div>
              <div class="super-therapy-section__body">
                <table class="super-therapy-matrix">
                  <thead>
                    <tr>
                      <th class="super-therapy-matrix__service-col">Treatment</th>
                      <th>Mon</th>
                      <th>Tue</th>
                      <th>Wed</th>
                      <th>Thu</th>
                      <th>Fri</th>
                      <th>Sat</th>
                      <th>Sun</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="super-therapy-matrix__service-col">BP Check (TID)</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓○</td>
                    </tr>
                    <tr>
                      <td class="super-therapy-matrix__service-col">BG Check (AC & HS)</td>
                      <td>✓✓✓✓</td>
                      <td>✓✓✓✓</td>
                      <td>✓✓✓✓</td>
                      <td>✓✓✓✓</td>
                      <td>✓✓✓✓</td>
                      <td>✓✓✓✓</td>
                      <td>✓✓○○</td>
                    </tr>
                    <tr>
                      <td class="super-therapy-matrix__service-col">O2 Sat Check</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓✓</td>
                      <td>✓✓○</td>
                    </tr>
                    <tr>
                      <td class="super-therapy-matrix__service-col">CPAP (Nightly)</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>○</td>
                    </tr>
                    <tr>
                      <td class="super-therapy-matrix__service-col">Daily Weight</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>○</td>
                    </tr>
                  </tbody>
                </table>
                <div style="margin-top: 12px; font-size: 12px; color: #6b7280;">
                  ✓ = Completed &nbsp;&nbsp; ○ = Pending/Due
                </div>
              </div>
            </div>

            <div class="super-therapy-signatures">
              <div class="super-therapy-signature">
                <div class="super-therapy-signature__line">
                  <div class="super-therapy-signature__name-area">
                    <div class="super-therapy-signature__name">LPN Michelle Davis</div>
                    <div class="super-therapy-signature__label">Licensed Practical Nurse</div>
                  </div>
                  <div class="super-therapy-signature__date-area">
                    <div class="super-therapy-signature__date">01/27/2026</div>
                    <div class="super-therapy-signature__date-label">Date</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="super-therapy-modal__footer">
          <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary" id="tar-modal-print">Print</button>
          <button class="super-therapy-modal__btn super-therapy-modal__btn--primary" id="tar-modal-done">Done</button>
        </div>
      </div>
    `;

    // Attach listeners
    modal.querySelector('.super-therapy-modal__backdrop').addEventListener('click', () => modal.remove());
    modal.querySelector('#tar-modal-close').addEventListener('click', () => modal.remove());
    modal.querySelector('#tar-modal-done').addEventListener('click', () => modal.remove());
    modal.querySelector('#tar-modal-print').addEventListener('click', () => window.print());
  }

  // ============================================
  // THERAPY DOCUMENTATION VIEWER
  // ============================================
  function openTherapyViewer() {
    console.log('[Demo] Opening Therapy Viewer...');
    const patientId = '2657226';
    const patient = window.DemoData?.getPatient(patientId) || { name: 'Doe, Jane' };
    const therapy = window.DemoData?.therapyMinutes?.[patientId] || { pt: {total:450,goal:720}, ot: {total:380,goal:600}, slp: {total:180,goal:300} };

    let modal = document.getElementById('demo-therapy-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'demo-therapy-modal';
      modal.className = 'super-therapy-modal';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="super-therapy-modal__backdrop"></div>
      <div class="super-therapy-modal__container" style="width: 1000px;">
        <div class="super-therapy-modal__toolbar">
          <div class="super-therapy-modal__toolbar-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            <span>Therapy Documentation</span>
          </div>
          <div class="super-therapy-modal__toolbar-controls">
            <span style="opacity: 0.7; font-size: 12px;">${patient.name}</span>
            <button class="super-therapy-modal__close" id="therapy-modal-close">&times;</button>
          </div>
        </div>
        <div class="super-therapy-modal__body">
          <div class="super-therapy-doc" style="max-width: 100%;">
            <div class="super-therapy-doc__header">
              <div class="super-therapy-doc__discipline">PHYSICAL THERAPY</div>
              <div class="super-therapy-doc__title">Plan of Care - Progress Note</div>
            </div>
            <div class="super-therapy-doc__info-row">
              <div class="super-therapy-doc__provider">
                <span class="super-therapy-doc__provider-label">Therapist:</span> Demo PT, PT, DPT
              </div>
              <div class="super-therapy-doc__patient">
                <strong>Patient:</strong> ${patient.name}<br>
                <strong>Room:</strong> 308-B
              </div>
            </div>

            <div class="super-therapy-dates-box">
              <div class="super-therapy-dates-box__item">
                <strong>Date of Service:</strong> 01/27/2026
              </div>
              <div class="super-therapy-dates-box__item">
                <strong>Session #:</strong> 8 of 15
              </div>
              <div class="super-therapy-dates-box__item">
                <strong>Duration:</strong> 45 minutes
              </div>
            </div>

            <div class="super-therapy-section">
              <div class="super-therapy-section-header">Therapy Minutes Summary (PDPM Assessment Period)</div>
              <div class="super-therapy-section__body">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
                  <div>
                    <div style="font-weight: 600; margin-bottom: 8px;">Physical Therapy</div>
                    <div class="demo-therapy-progress-ring" data-progress="${Math.round(therapy.pt.total/therapy.pt.goal*100)}">
                      <div class="demo-therapy-progress-value">${therapy.pt.total}/${therapy.pt.goal}</div>
                      <div class="demo-therapy-progress-label">minutes</div>
                    </div>
                    <div class="demo-therapy-bar-wrapper">
                      <div class="demo-therapy-bar-fill" style="width: ${Math.round(therapy.pt.total/therapy.pt.goal*100)}%; background: #3b82f6;"></div>
                    </div>
                    <div style="text-align: center; font-size: 12px; color: #666; margin-top: 4px;">${therapy.pt.sessions} sessions</div>
                  </div>
                  <div>
                    <div style="font-weight: 600; margin-bottom: 8px;">Occupational Therapy</div>
                    <div class="demo-therapy-progress-ring" data-progress="${Math.round(therapy.ot.total/therapy.ot.goal*100)}">
                      <div class="demo-therapy-progress-value">${therapy.ot.total}/${therapy.ot.goal}</div>
                      <div class="demo-therapy-progress-label">minutes</div>
                    </div>
                    <div class="demo-therapy-bar-wrapper">
                      <div class="demo-therapy-bar-fill" style="width: ${Math.round(therapy.ot.total/therapy.ot.goal*100)}%; background: #10b981;"></div>
                    </div>
                    <div style="text-align: center; font-size: 12px; color: #666; margin-top: 4px;">${therapy.ot.sessions} sessions</div>
                  </div>
                  <div>
                    <div style="font-weight: 600; margin-bottom: 8px;">Speech-Language Pathology</div>
                    <div class="demo-therapy-progress-ring" data-progress="${Math.round(therapy.slp.total/therapy.slp.goal*100)}">
                      <div class="demo-therapy-progress-value">${therapy.slp.total}/${therapy.slp.goal}</div>
                      <div class="demo-therapy-progress-label">minutes</div>
                    </div>
                    <div class="demo-therapy-bar-wrapper">
                      <div class="demo-therapy-bar-fill" style="width: ${Math.round(therapy.slp.total/therapy.slp.goal*100)}%; background: #8b5cf6;"></div>
                    </div>
                    <div style="text-align: center; font-size: 12px; color: #666; margin-top: 4px;">${therapy.slp.sessions} sessions</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="super-therapy-section">
              <div class="super-therapy-section-header">Diagnosis & Treatment</div>
              <div class="super-therapy-section__body">
                <table class="super-therapy-dx-table">
                  <thead>
                    <tr>
                      <th>ICD-10</th>
                      <th>Description</th>
                      <th>PDPM Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="super-therapy-dx-table__code">J44.9</span></td>
                      <td>Chronic obstructive pulmonary disease</td>
                      <td>NTA (2 pts)</td>
                    </tr>
                    <tr>
                      <td><span class="super-therapy-dx-table__code">M62.81</span></td>
                      <td>Muscle weakness (generalized)</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><span class="super-therapy-dx-table__code">R26.89</span></td>
                      <td>Other abnormalities of gait and mobility</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="super-therapy-section">
              <div class="super-therapy-section-header">Goals Progress</div>
              <div class="super-therapy-section__body" style="padding: 0;">
                <div class="super-therapy-goal">
                  <div class="super-therapy-goal__header">
                    <div class="super-therapy-goal__title">Goal 1: Ambulation</div>
                    <span class="super-therapy-goal__status super-therapy-goal__status--continue">Continue</span>
                  </div>
                  <div class="super-therapy-goal__body">
                    <div class="super-therapy-goal__text">Patient will ambulate 150 feet with rolling walker and supervision within 2 weeks.</div>
                    <div class="super-therapy-goal__target">Target Date: 02/10/2026</div>
                  </div>
                  <div class="super-therapy-goal__progress">
                    <div>
                      <div class="super-therapy-goal__progress-item">
                        <div class="super-therapy-goal__progress-label">Current Performance</div>
                        <div class="super-therapy-goal__progress-value">100 feet with RW, CGA</div>
                      </div>
                    </div>
                    <div>
                      <div class="super-therapy-goal__progress-item">
                        <div class="super-therapy-goal__progress-label">Progress</div>
                        <div class="super-therapy-goal__progress-value" style="color: #059669; font-weight: 600;">67% toward goal</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="super-therapy-goal">
                  <div class="super-therapy-goal__header">
                    <div class="super-therapy-goal__title">Goal 2: Bed Mobility</div>
                    <span class="super-therapy-goal__status super-therapy-goal__status--achieved">Achieved</span>
                  </div>
                  <div class="super-therapy-goal__body">
                    <div class="super-therapy-goal__text">Patient will perform bed mobility (supine to sit) independently within 1 week.</div>
                    <div class="super-therapy-goal__target">Achieved: 01/25/2026</div>
                  </div>
                  <div class="super-therapy-goal__progress">
                    <div>
                      <div class="super-therapy-goal__progress-item">
                        <div class="super-therapy-goal__progress-label">Current Performance</div>
                        <div class="super-therapy-goal__progress-value">Independent</div>
                      </div>
                    </div>
                    <div>
                      <div class="super-therapy-goal__progress-item">
                        <div class="super-therapy-goal__progress-label">Progress</div>
                        <div class="super-therapy-goal__progress-value" style="color: #059669; font-weight: 600;">100% - Goal Met</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="super-therapy-goal">
                  <div class="super-therapy-goal__header">
                    <div class="super-therapy-goal__title">Goal 3: Balance</div>
                    <span class="super-therapy-goal__status super-therapy-goal__status--continue">Continue</span>
                  </div>
                  <div class="super-therapy-goal__body">
                    <div class="super-therapy-goal__text">Patient will maintain standing balance for 60 seconds without UE support within 2 weeks.</div>
                    <div class="super-therapy-goal__target">Target Date: 02/10/2026</div>
                  </div>
                  <div class="super-therapy-goal__progress">
                    <div>
                      <div class="super-therapy-goal__progress-item">
                        <div class="super-therapy-goal__progress-label">Current Performance</div>
                        <div class="super-therapy-goal__progress-value">35 seconds with min UE support</div>
                      </div>
                    </div>
                    <div>
                      <div class="super-therapy-goal__progress-item">
                        <div class="super-therapy-goal__progress-label">Progress</div>
                        <div class="super-therapy-goal__progress-value" style="color: #f59e0b; font-weight: 600;">58% toward goal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="super-therapy-signatures">
              <div class="super-therapy-signature">
                <div class="super-therapy-signature__line">
                  <div class="super-therapy-signature__name-area">
                    <div class="super-therapy-signature__name">Demo PT, PT, DPT</div>
                    <div class="super-therapy-signature__label">Physical Therapist - License #PT45892</div>
                  </div>
                  <div class="super-therapy-signature__date-area">
                    <div class="super-therapy-signature__date">01/27/2026</div>
                    <div class="super-therapy-signature__date-label">Date</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="super-therapy-modal__footer">
          <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary" id="therapy-modal-print">Print</button>
          <button class="super-therapy-modal__btn super-therapy-modal__btn--primary" id="therapy-modal-done">Done</button>
        </div>
      </div>
    `;

    // Attach listeners
    modal.querySelector('.super-therapy-modal__backdrop').addEventListener('click', () => modal.remove());
    modal.querySelector('#therapy-modal-close').addEventListener('click', () => modal.remove());
    modal.querySelector('#therapy-modal-done').addEventListener('click', () => modal.remove());
    modal.querySelector('#therapy-modal-print').addEventListener('click', () => window.print());
  }

  function showDemoICD10Modal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('demo-icd10-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'demo-icd10-modal';
      modal.className = 'demo-modal';
      modal.innerHTML = `
        <div class="demo-modal-backdrop"></div>
        <div class="demo-modal-container">
          <div class="demo-modal-header">
            <button class="demo-modal-back">&larr; Back</button>
            <span class="demo-modal-title">ICD-10 Viewer - Doe, Jane</span>
            <button class="demo-modal-close">&times;</button>
          </div>
          <div class="demo-modal-body">
            <div class="demo-icd10-layout">
              <div class="demo-icd10-sidebar">
                <div class="demo-icd10-categories">
                  <div class="demo-icd10-cat demo-icd10-cat--active" data-cat="nta">
                    <span>NTA Comorbidities</span>
                    <span class="demo-badge">4</span>
                  </div>
                  <div class="demo-icd10-cat" data-cat="slp">
                    <span>SLP Comorbidities</span>
                    <span class="demo-badge">0</span>
                  </div>
                  <div class="demo-icd10-cat" data-cat="nursing">
                    <span>Nursing Comorbidities</span>
                    <span class="demo-badge">2</span>
                  </div>
                </div>
                <div class="demo-icd10-codes">
                  <div class="demo-icd10-code demo-icd10-code--active">
                    <div class="demo-code-header">
                      <span class="demo-code-icd">J44.9</span>
                      <span class="demo-code-pts">2 pts</span>
                    </div>
                    <div class="demo-code-desc">COPD, unspecified</div>
                    <div class="demo-code-evidence">3 evidence items</div>
                  </div>
                  <div class="demo-icd10-code">
                    <div class="demo-code-header">
                      <span class="demo-code-icd">E11.9</span>
                      <span class="demo-code-pts">2 pts</span>
                    </div>
                    <div class="demo-code-desc">Type 2 DM without complications</div>
                    <div class="demo-code-evidence">2 evidence items</div>
                  </div>
                  <div class="demo-icd10-code demo-icd10-code--suggested">
                    <div class="demo-code-header">
                      <span class="demo-code-icd">F32.9</span>
                      <span class="demo-code-pts">+2 pts</span>
                    </div>
                    <div class="demo-code-desc">Major depressive disorder</div>
                    <div class="demo-code-evidence">AI Suggested - 2 evidence items</div>
                  </div>
                </div>
              </div>
              <div class="demo-icd10-evidence">
                <div class="demo-evidence-header">Evidence for J44.9</div>
                <div class="demo-evidence-cards">
                  <div class="demo-evidence-card">
                    <div class="demo-evidence-type">Progress Note</div>
                    <div class="demo-evidence-date">01/25/2026</div>
                    <div class="demo-evidence-text">"Patient continues to experience <mark>shortness of breath</mark> and <mark>chronic cough</mark> consistent with COPD exacerbation..."</div>
                    <button class="demo-evidence-view">View in Document</button>
                  </div>
                  <div class="demo-evidence-card">
                    <div class="demo-evidence-type">H&amp;P</div>
                    <div class="demo-evidence-date">06/12/2020</div>
                    <div class="demo-evidence-text">"History of <mark>chronic obstructive pulmonary disease</mark>, on home oxygen 2L NC..."</div>
                    <button class="demo-evidence-view">View in Document</button>
                  </div>
                </div>
              </div>
              <div class="demo-icd10-pdf">
                <div class="demo-pdf-header">
                  <span>Progress Note - 01/25/2026</span>
                  <div class="demo-pdf-controls">
                    <button>-</button>
                    <span>100%</span>
                    <button>+</button>
                  </div>
                </div>
                <div class="demo-pdf-viewer">
                  <div class="demo-pdf-page">
                    <p><strong>Progress Note</strong></p>
                    <p><strong>Date:</strong> 01/25/2026</p>
                    <p><strong>Patient:</strong> Doe, Jane</p>
                    <p><strong>Provider:</strong> Dr. Demo Provider</p>
                    <br>
                    <p><strong>Subjective:</strong></p>
                    <p>Patient reports increased <span class="demo-highlight">shortness of breath</span> over the past 3 days. Denies fever or chest pain. <span class="demo-highlight">Chronic cough</span> productive of white sputum.</p>
                    <br>
                    <p><strong>Objective:</strong></p>
                    <p>VS: BP 147/80, HR 88, RR 22, O2 sat 94% on 2L NC</p>
                    <p>Lungs: Decreased breath sounds bilateral bases, scattered wheezes</p>
                    <br>
                    <p><strong>Assessment:</strong></p>
                    <p>1. <span class="demo-highlight">COPD</span> exacerbation, mild</p>
                    <p>2. Type 2 diabetes mellitus</p>
                    <p>3. Hypertension</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      // Add event listeners
      modal.querySelector('.demo-modal-backdrop').addEventListener('click', () => modal.classList.remove('demo-modal--open'));
      modal.querySelector('.demo-modal-close').addEventListener('click', () => modal.classList.remove('demo-modal--open'));
      modal.querySelector('.demo-modal-back').addEventListener('click', () => modal.classList.remove('demo-modal--open'));
    }

    modal.classList.add('demo-modal--open');
  }

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
    /* ===== Demo Navigation Bar ===== */
    .demo-nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 48px;
      background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      z-index: 100000;
    }

    .demo-nav-bar__inner {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 16px;
      gap: 24px;
    }

    .demo-nav-bar__brand {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .demo-nav-bar__logo {
      width: 28px;
      height: 28px;
      background: white;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 16px;
      color: #1e3a5f;
    }

    .demo-nav-bar__title {
      font-weight: 600;
      font-size: 14px;
      color: white;
    }

    .demo-nav-bar__links {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
    }

    .demo-nav-bar__link {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 6px;
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 13px;
      transition: all 0.2s;
    }

    .demo-nav-bar__link:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      text-decoration: none;
    }

    .demo-nav-bar__link--active {
      background: rgba(255, 255, 255, 0.2);
      color: white;
    }

    .demo-nav-bar__link-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .demo-nav-bar__link-icon svg {
      width: 14px;
      height: 14px;
    }

    .demo-nav-bar__link-label {
      font-weight: 500;
    }

    .demo-nav-bar__actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .demo-nav-bar__btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      color: white;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .demo-nav-bar__btn:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .demo-nav-bar__btn svg {
      width: 14px;
      height: 14px;
    }

    /* Offset body for nav bar */
    body {
      padding-top: 48px !important;
    }

    /* ===== FAB Button Styles ===== */
    @keyframes fabPulse {
      0%, 100% { box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4); }
      50% { box-shadow: 0 4px 24px rgba(25, 118, 210, 0.6), 0 0 0 8px rgba(25, 118, 210, 0.1); }
    }
    .super-chat-fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99998;
      transition: all 0.3s ease;
      animation: fabPulse 2s ease-in-out infinite;
    }

    .super-chat-fab:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 20px rgba(25, 118, 210, 0.5);
    }

    /* Tooltip for FAB button */
    .super-chat-fab::before {
      content: 'Open Super Menu';
      position: absolute;
      right: 68px;
      top: 50%;
      transform: translateY(-50%) scale(0.9);
      background: #1f2937;
      color: white;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: all 0.2s;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .super-chat-fab::after {
      content: '';
      position: absolute;
      right: 62px;
      top: 50%;
      transform: translateY(-50%);
      border: 6px solid transparent;
      border-left-color: #1f2937;
      opacity: 0;
      transition: all 0.2s;
    }
    .super-chat-fab:hover::before,
    .super-chat-fab:hover::after {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
    .super-chat-fab--active::before,
    .super-chat-fab--active::after {
      display: none;
    }

    .super-chat-fab--active {
      transform: rotate(45deg);
    }

    .super-menu-fab__logo {
      width: 32px;
      height: 32px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 18px;
      color: #1976d2;
    }

    .super-chat-fab--active .super-menu-fab__logo {
      display: none;
    }

    .super-chat-fab__icon--close {
      display: none;
      width: 24px;
      height: 24px;
      color: white;
    }

    .super-chat-fab--active .super-chat-fab__icon--close {
      display: block;
    }

    .super-menu-fab__badge {
      position: absolute;
      top: -4px;
      right: -4px;
      min-width: 20px;
      height: 20px;
      background: #f44336;
      color: white;
      font-size: 11px;
      font-weight: 600;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 6px;
    }

    /* ===== Panel Styles ===== */
    .super-chat-panel {
      position: fixed;
      bottom: 92px;
      right: 24px;
      width: 440px;
      height: 620px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      z-index: 99997;
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      pointer-events: none;
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .super-chat-panel--open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    /* Header */
    .super-chat-header {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
      color: white;
      gap: 12px;
    }

    .super-menu-header__nav {
      display: flex;
      gap: 4px;
    }

    .super-menu-nav-btn {
      width: 36px;
      height: 36px;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }

    .super-menu-nav-btn svg {
      width: 18px;
      height: 18px;
      color: rgba(255, 255, 255, 0.8);
    }

    .super-menu-nav-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .super-menu-nav-btn--active {
      background: rgba(255, 255, 255, 0.25);
    }

    .super-menu-nav-btn--active svg {
      color: white;
    }

    .super-chat-header__title {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .super-chat-header__logo {
      width: 28px;
      height: 28px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 14px;
      color: #1976d2;
    }

    .super-menu-header__title-text {
      font-weight: 600;
      font-size: 15px;
    }

    .super-chat-header__actions {
      display: flex;
      gap: 4px;
    }

    .super-chat-header__btn {
      width: 32px;
      height: 32px;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }

    .super-chat-header__btn svg {
      width: 16px;
      height: 16px;
      color: rgba(255, 255, 255, 0.8);
    }

    .super-chat-header__btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .super-chat-header__btn:hover svg {
      color: white;
    }

    /* Content */
    .super-menu-content {
      flex: 1;
      overflow-y: auto;
    }

    /* ===== Demo Dashboard Styles ===== */
    .demo-dashboard, .demo-mds-analysis, .demo-chat {
      padding: 14px;
      height: 100%;
      overflow-y: auto;
      background: #fafbfc;
    }

    /* Stats Grid */
    .demo-stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-bottom: 16px;
    }

    .demo-stat-card {
      background: white;
      border-radius: 10px;
      padding: 12px;
      display: flex;
      gap: 10px;
      border: 1px solid #e8eaed;
      transition: all 0.15s;
    }

    .demo-stat-card:hover {
      border-color: #d0d3d9;
    }

    .demo-stat-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .demo-stat-card--warning .demo-stat-icon {
      background: #fef7ed;
      color: #ea8600;
    }

    .demo-stat-card--info .demo-stat-icon {
      background: #eff6ff;
      color: #4b91f1;
    }

    .demo-stat-card--success .demo-stat-icon {
      background: #f0fdf4;
      color: #16a34a;
    }

    .demo-stat-card--primary .demo-stat-icon {
      background: #f4f3ff;
      color: #6366f1;
    }

    .demo-stat-icon svg {
      width: 18px;
      height: 18px;
    }

    .demo-stat-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .demo-stat-value {
      font-size: 20px;
      font-weight: 600;
      color: #1f2937;
      line-height: 1;
      margin-bottom: 3px;
    }

    .demo-stat-label {
      font-size: 11px;
      color: #6b7280;
      font-weight: 500;
    }

    .demo-section {
      margin-bottom: 16px;
    }

    .demo-section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding-bottom: 6px;
      border-bottom: 1px solid #e8eaed;
    }

    .demo-section-title-group {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .demo-section-icon {
      color: #9ca3af;
      width: 16px;
      height: 16px;
    }

    .demo-section-title {
      font-weight: 600;
      color: #374151;
      font-size: 13px;
    }

    .demo-badge {
      background: #f3f4f6;
      color: #4b5563;
      padding: 3px 8px;
      border-radius: 10px;
      font-size: 10px;
      font-weight: 600;
    }

    .demo-badge--success {
      background: #f0fdf4;
      color: #15803d;
    }

    /* Query List - New Design */
    .demo-query-list-new {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .demo-query-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background: white;
      border: 1px solid #e8eaed;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
    }

    .demo-query-row:hover {
      border-color: #cbd5e1;
      background: #fafbfc;
    }

    .demo-query-row--draft {
      border-left: 2px solid #f59e0b;
    }

    .demo-query-row--sent {
      border-left: 2px solid #6b7280;
    }

    .demo-query-row__left {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
    }

    .demo-query-row__code {
      font-family: 'SF Mono', 'Courier New', monospace;
      font-weight: 600;
      color: #4b5563;
      background: #f3f4f6;
      padding: 4px 8px;
      border-radius: 5px;
      font-size: 11px;
      flex-shrink: 0;
    }

    .demo-query-row__info {
      flex: 1;
      min-width: 0;
    }

    .demo-query-row__desc {
      font-weight: 500;
      color: #1f2937;
      font-size: 12px;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .demo-query-row__patient {
      font-size: 11px;
      color: #6b7280;
    }

    .demo-query-row__status {
      font-size: 10px;
      padding: 3px 8px;
      border-radius: 10px;
      font-weight: 600;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .demo-query-row__status--draft {
      background: #fef7ed;
      color: #ea8600;
    }

    .demo-query-row__status--sent {
      background: #f3f4f6;
      color: #4b5563;
    }

    /* HIPPS Cards Grid */
    .demo-hipps-grid {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .demo-hipps-card {
      background: white;
      border: 1px solid #d1fae5;
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.15s;
    }

    .demo-hipps-card:hover {
      border-color: #a7f3d0;
      background: #fafffe;
    }

    .demo-hipps-card__header {
      padding: 10px;
      border-bottom: 1px solid #e8f5f0;
      background: #f7fefa;
    }

    .demo-hipps-card__patient {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .demo-hipps-card__patient-icon {
      width: 28px;
      height: 28px;
      background: #d1fae5;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #16a34a;
    }

    .demo-hipps-card__patient-icon svg {
      width: 14px;
      height: 14px;
    }

    .demo-hipps-card__patient-name {
      font-weight: 600;
      color: #374151;
      font-size: 12px;
    }

    .demo-hipps-card__meta {
      font-size: 10px;
      color: #6b7280;
    }

    .demo-hipps-card__body {
      padding: 12px 10px;
    }

    .demo-hipps-comparison {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 10px;
    }

    .demo-hipps-current,
    .demo-hipps-potential {
      text-align: center;
    }

    .demo-hipps-label {
      font-size: 9px;
      color: #6b7280;
      font-weight: 600;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .demo-hipps-code {
      font-family: 'SF Mono', 'Courier New', monospace;
      font-size: 16px;
      font-weight: 600;
      color: #374151;
      background: #f9fafb;
      padding: 5px 10px;
      border-radius: 6px;
      display: inline-block;
      border: 1px solid #e5e7eb;
    }

    .demo-hipps-code--highlight {
      color: #15803d;
      background: #f0fdf4;
      border-color: #86efac;
    }

    .demo-hipps-arrow {
      color: #9ca3af;
      display: flex;
      align-items: center;
    }

    .demo-hipps-arrow svg {
      width: 18px;
      height: 18px;
    }

    .demo-hipps-revenue {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      background: #f0fdf4;
      border-radius: 6px;
      padding: 6px 10px;
      color: #15803d;
      font-weight: 600;
      font-size: 11px;
      border: 1px solid #d1fae5;
    }

    .demo-hipps-revenue svg {
      width: 12px;
      height: 12px;
      color: #15803d;
    }

    .demo-hipps-card__footer {
      padding: 10px;
      border-top: 1px solid #e8f5f0;
      background: #fafffe;
    }

    .demo-hipps-action-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 7px 12px;
      background: #16a34a;
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 11px;
      cursor: pointer;
      transition: all 0.15s;
    }

    .demo-hipps-action-btn:hover {
      background: #15803d;
    }

    .demo-hipps-action-btn svg {
      width: 12px;
      height: 12px;
    }

    /* Empty State */
    .demo-empty-state {
      text-align: center;
      padding: 24px 16px;
      color: #9ca3af;
      font-size: 12px;
    }

    /* Scrollbar styling */
    .demo-dashboard::-webkit-scrollbar {
      width: 6px;
    }

    .demo-dashboard::-webkit-scrollbar-track {
      background: transparent;
    }

    .demo-dashboard::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }

    .demo-dashboard::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }

    /* Old query list styles (kept for compatibility) */
    .demo-query-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .demo-query-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: #f5f5f5;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .demo-query-item:hover {
      background: #e8e8e8;
    }

    .demo-query-code {
      font-family: monospace;
      font-weight: 600;
      color: #1976d2;
      background: white;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .demo-query-info {
      flex: 1;
    }

    .demo-query-desc {
      font-weight: 500;
      color: #333;
    }

    .demo-query-patient {
      font-size: 12px;
      color: #666;
    }

    .demo-query-status {
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .demo-query-status--pending {
      background: #fff3e0;
      color: #e65100;
    }

    .demo-query-status--sent {
      background: #e3f2fd;
      color: #1565c0;
    }

    .demo-opportunity-card {
      background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
      padding: 16px;
      border-radius: 8px;
      border-left: 4px solid #2e7d32;
    }

    .demo-opportunity-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .demo-arrow {
      color: #2e7d32;
    }

    .demo-opportunity-new {
      color: #2e7d32;
      font-weight: 600;
    }

    .demo-opportunity-detail {
      font-size: 13px;
      color: #555;
      margin-bottom: 12px;
    }

    .demo-icd10-btn {
      background: #1976d2;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: background 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .demo-icd10-btn:hover {
      background: #1565c0;
    }

    /* ===== MDS Analysis Styles ===== */
    .demo-mds-summary {
      background: #f5f5f5;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 20px;
    }

    .demo-mds-hipps {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-bottom: 12px;
    }

    .demo-hipps-current, .demo-hipps-potential {
      text-align: center;
    }

    .demo-hipps-label {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }

    .demo-hipps-code {
      font-size: 24px;
      font-weight: 700;
      font-family: monospace;
      color: #333;
    }

    .demo-hipps-code--highlight {
      color: #2e7d32;
    }

    .demo-hipps-rate {
      font-size: 14px;
      color: #666;
    }

    .demo-hipps-arrow {
      font-size: 24px;
      color: #2e7d32;
    }

    .demo-hipps-diff {
      text-align: center;
      color: #2e7d32;
      font-weight: 600;
    }

    .demo-mds-components {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 20px;
    }

    .demo-component {
      background: #f5f5f5;
      padding: 12px;
      border-radius: 8px;
      text-align: center;
    }

    .demo-component--opportunity {
      background: #e8f5e9;
      border: 1px solid #2e7d32;
    }

    .demo-component-label {
      font-size: 12px;
      color: #666;
    }

    .demo-component-value {
      font-size: 18px;
      font-weight: 700;
      font-family: monospace;
    }

    .demo-component-desc {
      font-size: 11px;
      color: #888;
    }

    .demo-nta-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .demo-nta-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      background: #f5f5f5;
      border-radius: 4px;
    }

    .demo-nta-item--suggested {
      background: #e8f5e9;
      border: 1px dashed #2e7d32;
    }

    .demo-nta-code {
      font-family: monospace;
      font-weight: 600;
    }

    .demo-empty {
      text-align: center;
      color: #888;
      padding: 16px;
      font-style: italic;
    }

    /* ===== Therapy Progress Styles ===== */
    .demo-therapy-grid {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .demo-therapy-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .demo-therapy-label {
      width: 32px;
      font-weight: 600;
      font-size: 11px;
      color: #666;
    }

    .demo-therapy-bar {
      flex: 1;
      height: 8px;
      background: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
    }

    .demo-therapy-fill {
      height: 100%;
      background: linear-gradient(90deg, #4caf50, #8bc34a);
      border-radius: 4px;
      transition: width 0.3s;
    }

    .demo-therapy-mins {
      font-size: 11px;
      color: #666;
      min-width: 60px;
      text-align: right;
    }

    /* ===== Chat Styles ===== */
    .demo-chat {
      display: flex;
      flex-direction: column;
    }

    .demo-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding-bottom: 16px;
    }

    .demo-chat-message {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }

    .demo-chat-avatar {
      width: 32px;
      height: 32px;
      background: #1976d2;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      flex-shrink: 0;
    }

    .demo-chat-bubble {
      background: #f5f5f5;
      padding: 12px 16px;
      border-radius: 12px;
      max-width: 80%;
    }

    .demo-chat-bubble ul {
      margin: 8px 0 0 0;
      padding-left: 20px;
    }

    .demo-chat-bubble li {
      margin: 4px 0;
    }

    .demo-chat-input {
      display: flex;
      gap: 8px;
      padding-top: 12px;
      border-top: 1px solid #e0e0e0;
    }

    .demo-chat-textbox {
      flex: 1;
      padding: 10px 14px;
      border: 1px solid #ddd;
      border-radius: 20px;
      outline: none;
    }

    .demo-chat-textbox:focus {
      border-color: #1976d2;
    }

    .demo-chat-send {
      width: 40px;
      height: 40px;
      border: none;
      background: #1976d2;
      color: white;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ===== ICD-10 Modal Styles ===== */
    .demo-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100000;
    }

    .demo-modal--open {
      display: block;
    }

    .demo-modal-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
    }

    .demo-modal-container {
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
      background: white;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .demo-modal-header {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      background: #1976d2;
      color: white;
      gap: 16px;
    }

    .demo-modal-back, .demo-modal-close {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 16px;
      padding: 4px 8px;
    }

    .demo-modal-title {
      flex: 1;
      font-weight: 600;
    }

    .demo-modal-body {
      flex: 1;
      overflow: hidden;
    }

    .demo-icd10-layout {
      display: grid;
      grid-template-columns: 280px 1fr 1fr;
      height: 100%;
    }

    .demo-icd10-sidebar {
      background: #f5f5f5;
      border-right: 1px solid #e0e0e0;
      display: flex;
      flex-direction: column;
    }

    .demo-icd10-categories {
      border-bottom: 1px solid #e0e0e0;
    }

    .demo-icd10-cat {
      display: flex;
      justify-content: space-between;
      padding: 12px 16px;
      cursor: pointer;
      border-left: 3px solid transparent;
    }

    .demo-icd10-cat:hover {
      background: #e8e8e8;
    }

    .demo-icd10-cat--active {
      background: white;
      border-left-color: #1976d2;
    }

    .demo-icd10-codes {
      flex: 1;
      overflow-y: auto;
      padding: 8px;
    }

    .demo-icd10-code {
      padding: 12px;
      background: white;
      border-radius: 8px;
      margin-bottom: 8px;
      cursor: pointer;
      border: 2px solid transparent;
    }

    .demo-icd10-code:hover {
      border-color: #e0e0e0;
    }

    .demo-icd10-code--active {
      border-color: #1976d2;
    }

    .demo-icd10-code--suggested {
      background: #e8f5e9;
      border-color: #2e7d32;
    }

    .demo-code-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }

    .demo-code-icd {
      font-family: monospace;
      font-weight: 700;
      color: #1976d2;
    }

    .demo-code-pts {
      font-size: 12px;
      color: #2e7d32;
      font-weight: 600;
    }

    .demo-code-desc {
      font-size: 13px;
      color: #333;
      margin-bottom: 4px;
    }

    .demo-code-evidence {
      font-size: 11px;
      color: #888;
    }

    .demo-icd10-evidence {
      border-right: 1px solid #e0e0e0;
      display: flex;
      flex-direction: column;
    }

    .demo-evidence-header {
      padding: 12px 16px;
      font-weight: 600;
      border-bottom: 1px solid #e0e0e0;
    }

    .demo-evidence-cards {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
    }

    .demo-evidence-card {
      background: #f5f5f5;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 12px;
    }

    .demo-evidence-type {
      font-weight: 600;
      color: #1976d2;
    }

    .demo-evidence-date {
      font-size: 12px;
      color: #888;
      margin-bottom: 8px;
    }

    .demo-evidence-text {
      font-size: 13px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    .demo-evidence-text mark {
      background: #fff59d;
      padding: 0 2px;
    }

    .demo-evidence-view {
      background: white;
      border: 1px solid #ddd;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
    }

    .demo-icd10-pdf {
      display: flex;
      flex-direction: column;
      background: #eee;
    }

    .demo-pdf-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      background: #333;
      color: white;
    }

    .demo-pdf-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .demo-pdf-controls button {
      background: #555;
      border: none;
      color: white;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }

    .demo-pdf-viewer {
      flex: 1;
      overflow: auto;
      padding: 20px;
      display: flex;
      justify-content: center;
    }

    .demo-pdf-page {
      background: white;
      width: 600px;
      padding: 40px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      font-family: Georgia, serif;
      line-height: 1.6;
    }

    .demo-highlight {
      background: #fff59d;
      padding: 0 2px;
    }

    /* ===== Quick Actions ===== */
    .demo-quick-actions {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }

    .demo-action-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      background: #f5f5f5;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: #333;
      transition: all 0.2s;
    }

    .demo-action-btn:hover {
      background: #e8e8e8;
      border-color: #1976d2;
    }

    .demo-action-btn svg {
      color: #1976d2;
    }

    /* ===== MAR/TAR Table Styles ===== */
    .demo-mar-table {
      width: 100%;
      border-collapse: collapse;
    }

    .demo-mar-table th,
    .demo-mar-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }

    .demo-mar-table th {
      background: #f9fafb;
      font-weight: 600;
      font-size: 13px;
      color: #374151;
    }

    .demo-mar-table td {
      font-size: 14px;
    }

    .demo-mar-route,
    .demo-mar-status,
    .demo-tar-status {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .demo-mar-route--po { background: #dbeafe; color: #1e40af; }
    .demo-mar-route--inh { background: #fef3c7; color: #92400e; }
    .demo-mar-route--iv { background: #fee2e2; color: #991b1b; }
    .demo-mar-route--im { background: #ede9fe; color: #5b21b6; }

    .demo-mar-status--active,
    .demo-tar-status--active { background: #dcfce7; color: #166534; }
    .demo-mar-status--prn { background: #fef3c7; color: #92400e; }
    .demo-mar-status--hold { background: #fee2e2; color: #991b1b; }

    /* MAR Timeline */
    .demo-mar-timeline {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .demo-mar-time-slot {
      display: flex;
      gap: 16px;
      padding: 12px;
      border-radius: 8px;
    }

    .demo-mar-time {
      font-weight: 600;
      font-family: monospace;
      min-width: 50px;
      color: #4b5563;
    }

    .demo-mar-admin {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
    }

    .demo-mar-admin--given {
      background: #f0fdf4;
    }

    .demo-mar-time-slot:has(.demo-mar-admin--given) {
      background: #f0fdf4;
    }

    .demo-mar-time-slot:has(.demo-mar-admin--upcoming) {
      background: #fefce8;
    }

    .demo-mar-checkmark {
      color: #16a34a;
      font-weight: bold;
    }

    .demo-mar-pending {
      color: #ca8a04;
    }

    /* Therapy Progress Bars */
    .demo-therapy-progress-ring {
      text-align: center;
      padding: 12px;
      margin-bottom: 8px;
    }

    .demo-therapy-progress-value {
      font-size: 20px;
      font-weight: 700;
      color: #1f2937;
    }

    .demo-therapy-progress-label {
      font-size: 11px;
      color: #6b7280;
    }

    .demo-therapy-bar-wrapper {
      height: 8px;
      background: #e5e7eb;
      border-radius: 4px;
      overflow: hidden;
    }

    .demo-therapy-bar-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.3s;
    }
    `;
    document.head.appendChild(style);
  }
})();
