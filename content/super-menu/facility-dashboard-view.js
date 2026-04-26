// Facility Dashboard View Component for Super Menu
// Tab-based navigation with Queries, MDS, and All Assessments

const FacilityDashboardView = {
  /**
   * Render the complete facility dashboard
   * @returns {string} HTML string
   */
  render() {
    if (FacilityDashboardState.loading && !FacilityDashboardState.data) {
      return this._renderLoading();
    }

    if (FacilityDashboardState.error && !FacilityDashboardState.data) {
      return this._renderError();
    }

    return `
      <div class="super-facility-dashboard">
        ${this._renderMainTabs()}
        ${this._renderSubTabs()}
        ${this._renderContent()}
      </div>
    `;
  },

  /**
   * Render loading state
   * @returns {string} HTML string
   */
  _renderLoading() {
    return `
      <div class="super-menu-loading">
        <div class="super-menu-loading__spinner"></div>
        <div class="super-menu-loading__text">Loading dashboard...</div>
      </div>
    `;
  },

  /**
   * Render error state
   * @returns {string} HTML string
   */
  _renderError() {
    return `
      <div class="super-menu-error">
        <div class="super-menu-error__icon">&#9888;</div>
        <div class="super-menu-error__text">${this._escapeHtml(FacilityDashboardState.error)}</div>
        <!-- NO_TRACK: vestigial — facility dashboard panel removed (overlay architecture) -->
        <button class="super-menu-error__retry" id="super-facility-retry">Try Again</button>
      </div>
    `;
  },

  /**
   * Render main tab bar (Queries, MDS, All)
   * @returns {string} HTML string
   */
  _renderMainTabs() {
    const currentTab = FacilityDashboardState.selectedTab;

    const tabs = [
      { key: 'queries', label: 'Queries', icon: '&#9993;' },
      { key: 'mds', label: 'MDS', icon: '&#9776;' },
      { key: 'all', label: 'All', icon: '&#9744;' }
    ];

    const tabsHtml = tabs.map(tab => {
      const count = FacilityDashboardState.getTabCount(tab.key);
      const isActive = currentTab === tab.key;
      const isMuted = count === 0 && tab.key !== 'all';

      return `
        <!-- NO_TRACK: vestigial — facility dashboard panel removed (overlay architecture) -->
        <button class="super-tab ${isActive ? 'super-tab--active' : ''} ${isMuted ? 'super-tab--muted' : ''}"
                data-tab="${tab.key}">
          <span class="super-tab__label">${tab.label}</span>
          <span class="super-tab__count">${count}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="super-tabs">
        ${tabsHtml}
      </div>
    `;
  },

  /**
   * Render sub-tabs based on current main tab
   * @returns {string} HTML string
   */
  _renderSubTabs() {
    const currentTab = FacilityDashboardState.selectedTab;

    if (currentTab === 'all') {
      // Show filter for All tab
      return this._renderAllFilter();
    }

    const subTabConfigs = {
      queries: [
        { key: 'toSend', label: 'To Send', countKey: 'queriesToSend' },
        { key: 'awaiting', label: 'Awaiting', countKey: 'awaitingSignatures' },
        { key: 'signed', label: 'Signed', countKey: 'recentlySigned' }
      ],
      mds: [
        { key: 'hipps', label: 'HIPPS', countKey: 'hippsOpportunities' },
        { key: 'compliance', label: 'Compliance', countKey: 'complianceRisks' }
      ]
    };

    const subTabs = subTabConfigs[currentTab];
    if (!subTabs) return '';

    const currentSubTab = FacilityDashboardState.selectedSubTab[currentTab];

    const subTabsHtml = subTabs.map(sub => {
      const count = FacilityDashboardState.getCard(sub.countKey).count;
      const isActive = currentSubTab === sub.key;

      return `
        <!-- NO_TRACK: vestigial — facility dashboard panel removed (overlay architecture) -->
        <button class="super-subtab ${isActive ? 'super-subtab--active' : ''}"
                data-maintab="${currentTab}" data-subtab="${sub.key}">
          ${sub.label}
          <span class="super-subtab__count">${count}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="super-subtabs">
        ${subTabsHtml}
      </div>
    `;
  },

  /**
   * Render filter for "All" tab
   * @returns {string} HTML string
   */
  _renderAllFilter() {
    const currentFilter = FacilityDashboardState.filter;

    return `
      <div class="super-subtabs">
        <!-- NO_TRACK: vestigial — facility dashboard panel removed (overlay architecture) -->
        <button class="super-subtab ${currentFilter === 'needs_attention' ? 'super-subtab--active' : ''}"
                data-filter="needs_attention">
          Needs Attention
        </button>
        <!-- NO_TRACK: vestigial — facility dashboard panel removed (overlay architecture) -->
        <button class="super-subtab ${currentFilter === 'all' ? 'super-subtab--active' : ''}"
                data-filter="all">
          All Open
        </button>
      </div>
    `;
  },

  /**
   * Render content area based on current tab/subtab
   * @returns {string} HTML string
   */
  _renderContent() {
    const currentTab = FacilityDashboardState.selectedTab;

    switch (currentTab) {
      case 'queries':
        return this._renderQueriesContent();
      case 'mds':
        return this._renderMDSContent();
      case 'all':
        return this._renderAllContent();
      default:
        return '';
    }
  },

  /**
   * Render queries content based on sub-tab
   * @returns {string} HTML string
   */
  _renderQueriesContent() {
    const subTab = FacilityDashboardState.selectedSubTab.queries;

    const cardKeyMap = {
      toSend: 'queriesToSend',
      awaiting: 'awaitingSignatures',
      signed: 'recentlySigned'
    };

    const cardKey = cardKeyMap[subTab];
    const data = FacilityDashboardState.getCard(cardKey);

    if (!data.items || data.items.length === 0) {
      return this._renderEmpty(this._getEmptyMessage(subTab));
    }

    const itemsHtml = data.items.map(item => this._renderQueryItem(subTab, item)).join('');

    return `
      <div class="super-content">
        <div class="super-content__list">
          ${itemsHtml}
        </div>
      </div>
    `;
  },

  /**
   * Render a single query item
   * @param {string} subTab - toSend | awaiting | signed
   * @param {Object} item
   * @returns {string} HTML string
   */
  _renderQueryItem(subTab, item) {
    let detail = '';
    let statusBadge = '';

    switch (subTab) {
      case 'toSend':
        detail = `${this._escapeHtml(item.mdsItem)} - ${this._escapeHtml(item.mdsItemName || '')}`;
        statusBadge = '<span class="super-badge super-badge--yellow">To Send</span>';
        break;
      case 'awaiting':
        detail = `${this._escapeHtml(item.mdsItem)} - sent ${this._formatTimeAgo(item.sentAt)}`;
        statusBadge = '<span class="super-badge super-badge--orange">Awaiting</span>';
        break;
      case 'signed':
        detail = `${this._escapeHtml(item.mdsItem)} - ${this._escapeHtml(item.mdsItemName || '')}`;
        const codedStatus = item.mdsItemCoded
          ? '<span class="super-badge super-badge--green">Coded</span>'
          : '<span class="super-badge super-badge--blue">Needs Coding</span>';
        statusBadge = codedStatus;
        break;
    }

    return `
      <div class="super-content__item"
           data-type="query"
           data-subtab="${subTab}"
           data-query-id="${item.id}"
           data-patient-id="${item.patientExternalId || item.patientId || ''}"
           data-assessment-id="${item.mdsExternalAssessmentId || item.assessmentId || ''}">
        <div class="super-content__item-main">
          <div class="super-content__item-name">${this._escapeHtml(item.patientName)}</div>
          <div class="super-content__item-detail">${detail}</div>
        </div>
        <div class="super-content__item-right">
          ${statusBadge}
        </div>
        <div class="super-content__item-chevron">&#10095;</div>
      </div>
    `;
  },

  /**
   * Render MDS content based on sub-tab
   * @returns {string} HTML string
   */
  _renderMDSContent() {
    const subTab = FacilityDashboardState.selectedSubTab.mds;

    const cardKeyMap = {
      hipps: 'hippsOpportunities',
      compliance: 'complianceRisks'
    };

    const cardKey = cardKeyMap[subTab];
    const data = FacilityDashboardState.getCard(cardKey);

    if (!data.items || data.items.length === 0) {
      return this._renderEmpty(this._getEmptyMessage(subTab));
    }

    const itemsHtml = data.items.map(item => this._renderMDSItem(subTab, item)).join('');

    return `
      <div class="super-content">
        <div class="super-content__list">
          ${itemsHtml}
        </div>
      </div>
    `;
  },

  /**
   * Render a single MDS item
   * @param {string} subTab - hipps | compliance
   * @param {Object} item
   * @returns {string} HTML string
   */
  _renderMDSItem(subTab, item) {
    let detail = '';
    let badge = '';

    switch (subTab) {
      case 'hipps':
        detail = `${item.currentHipps || '?????'} &#8594; ${item.potentialHipps || '?????'}`;
        badge = `<span class="super-badge super-badge--green">${item.hippsChangingCount || 0} items</span>`;
        break;
      case 'compliance':
        detail = item.complianceIssues?.join(', ') || 'Issues detected';
        badge = `<span class="super-badge super-badge--red">${item.complianceIssues?.length || 0} issues</span>`;
        break;
    }

    return `
      <div class="super-content__item"
           data-type="mds"
           data-subtab="${subTab}"
           data-assessment-id="${item.externalAssessmentId}"
           data-patient-id="${item.patientId || ''}">
        <div class="super-content__item-main">
          <div class="super-content__item-name">${this._escapeHtml(item.patientName)}</div>
          <div class="super-content__item-detail">${detail}</div>
        </div>
        <div class="super-content__item-right">
          ${badge}
        </div>
        <div class="super-content__item-chevron">&#10095;</div>
      </div>
    `;
  },

  /**
   * Render all assessments content
   * @returns {string} HTML string
   */
  _renderAllContent() {
    const assessments = FacilityDashboardState.getFilteredAssessments();

    // Sort by ARD date ascending (oldest/soonest due first)
    const sortedAssessments = [...assessments].sort((a, b) => {
      return new Date(a.ardDate) - new Date(b.ardDate);
    });

    if (sortedAssessments.length === 0) {
      const msg = FacilityDashboardState.filter === 'needs_attention'
        ? 'No assessments need attention'
        : 'No open assessments';
      return this._renderEmpty(msg);
    }

    const itemsHtml = sortedAssessments.map(a => this._renderAssessmentItem(a)).join('');

    return `
      <div class="super-content">
        <div class="super-content__list">
          ${itemsHtml}
        </div>
      </div>
    `;
  },

  /**
   * Render a single assessment item
   * @param {Object} assessment
   * @returns {string} HTML string
   */
  _renderAssessmentItem(assessment) {
    const hasHippsChange = assessment.potentialHipps && assessment.potentialHipps !== assessment.currentHipps;
    const hippsDisplay = hasHippsChange
      ? `${assessment.currentHipps || '?????'} &#8594; ${assessment.potentialHipps}`
      : (assessment.currentHipps || '');

    // Build status badges
    const badges = [];
    if (assessment.hippsItemCount > 0) {
      badges.push(`<span class="super-badge super-badge--green">HIPPS</span>`);
    }
    if (assessment.pendingQueryCount > 0) {
      badges.push(`<span class="super-badge super-badge--orange">${assessment.pendingQueryCount} ${assessment.pendingQueryCount === 1 ? 'query' : 'queries'}</span>`);
    }
    if (assessment.complianceStatus === 'failed' || assessment.complianceStatus === 'warning') {
      badges.push(`<span class="super-badge super-badge--red">${assessment.complianceIssues?.length || ''} issues</span>`);
    }

    const badgesHtml = badges.length > 0
      ? badges.join('')
      : '<span class="super-badge super-badge--muted">OK</span>';

    return `
      <div class="super-content__item"
           data-type="assessment"
           data-assessment-id="${assessment.externalAssessmentId}"
           data-patient-id="${assessment.patientId}">
        <div class="super-content__item-main">
          <div class="super-content__item-name">${this._escapeHtml(assessment.patientName)}</div>
          <div class="super-content__item-detail">
            ${this._escapeHtml(assessment.mdsType)} &middot; ${this._formatDate(assessment.ardDate)}
          </div>
        </div>
        <div class="super-content__item-right">
          ${hippsDisplay ? `<div class="super-content__item-hipps">${hippsDisplay}</div>` : ''}
          <div class="super-content__item-badges">${badgesHtml}</div>
        </div>
        <div class="super-content__item-chevron">&#10095;</div>
      </div>
    `;
  },

  /**
   * Render empty state
   * @param {string} message
   * @returns {string} HTML string
   */
  _renderEmpty(message) {
    return `
      <div class="super-content">
        <div class="super-empty">
          <div class="super-empty__icon">&#10024;</div>
          <div class="super-empty__text">${message}</div>
        </div>
      </div>
    `;
  },

  /**
   * Get empty message for sub-tab
   * @param {string} subTab
   * @returns {string}
   */
  _getEmptyMessage(subTab) {
    const messages = {
      toSend: 'No queries to send',
      awaiting: 'No queries awaiting signatures',
      signed: 'No recently signed queries',
      hipps: 'No HIPPS opportunities',
      compliance: 'No compliance issues'
    };
    return messages[subTab] || 'Nothing to show';
  },

  /**
   * Format date for display
   * @param {string} dateStr - ISO date string or YYYY-MM-DD
   * @returns {string}
   */
  _formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  },

  /**
   * Format timestamp as relative time
   * @param {string} timestamp - ISO timestamp
   * @returns {string}
   */
  _formatTimeAgo(timestamp) {
    if (!timestamp) return '';

    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return this._formatDate(timestamp);
  },

  /**
   * Escape HTML to prevent XSS
   * @param {string} str
   * @returns {string}
   */
  _escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  /**
   * Setup event listeners on the dashboard container
   * @param {HTMLElement} container
   */
  setupListeners(container) {
    if (!container) return;

    // Retry button
    const retryBtn = container.querySelector('#super-facility-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => this._handleRetry());
    }

    // Main tab clicks
    container.querySelectorAll('.super-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabKey = tab.dataset.tab;
        if (tabKey) {
          this._handleTabClick(tabKey);
        }
      });
    });

    // Sub-tab clicks
    container.querySelectorAll('.super-subtab').forEach(subtab => {
      subtab.addEventListener('click', () => {
        const mainTab = subtab.dataset.maintab;
        const subTabKey = subtab.dataset.subtab;
        const filter = subtab.dataset.filter;

        if (filter) {
          this._handleFilterChange(filter);
        } else if (mainTab && subTabKey) {
          this._handleSubTabClick(mainTab, subTabKey);
        }
      });
    });

    // Content item clicks
    container.querySelectorAll('.super-content__item').forEach(item => {
      item.addEventListener('click', () => {
        const type = item.dataset.type;
        const subTab = item.dataset.subtab;
        const queryId = item.dataset.queryId;
        const assessmentId = item.dataset.assessmentId;
        const patientId = item.dataset.patientId;

        this._handleItemClick(type, { subTab, queryId, assessmentId, patientId });
      });
    });
  },

  /**
   * Handle retry button click
   */
  async _handleRetry() {
    if (window.SuperMenu) {
      window.SuperMenu.renderFacilityDashboard(true);
    }
  },

  /**
   * Handle main tab click
   * @param {string} tabKey
   */
  _handleTabClick(tabKey) {
    FacilityDashboardState.setTab(tabKey);
    this._rerender();
  },

  /**
   * Handle sub-tab click
   * @param {string} mainTab
   * @param {string} subTabKey
   */
  _handleSubTabClick(mainTab, subTabKey) {
    FacilityDashboardState.setSubTab(mainTab, subTabKey);
    this._rerender();
  },

  /**
   * Handle filter change (for "All" tab)
   * @param {string} filter
   */
  async _handleFilterChange(filter) {
    if (FacilityDashboardState.filter === filter) return;

    const container = document.getElementById('super-menu-content');
    if (container) {
      container.innerHTML = this._renderLoading();
    }

    await FacilityDashboardState.setFilter(filter);

    if (window.SuperMenu) {
      window.SuperMenu.renderFacilityDashboard();
    }
  },

  /**
   * Handle content item click
   * @param {string} type - query | mds | assessment
   * @param {Object} data
   */
  _handleItemClick(type, data) {
    switch (type) {
      case 'query':
        this._handleQueryClick(data);
        break;
      case 'mds':
        this._handleMDSClick(data);
        break;
      case 'assessment':
        this._handleAssessmentClick(data.assessmentId, data.patientId);
        break;
    }
  },

  /**
   * Handle query item click
   * @param {Object} data
   */
  async _handleQueryClick(data) {
    const { subTab, queryId, patientId, assessmentId } = data;

    // For to-send queries, navigate to patient page
    if (subTab === 'toSend' && patientId) {
      this._navigateToPatient(patientId);
      return;
    }

    // For all other queries (awaiting and signed), show the query modal
    if (queryId && window.QueryDetailModal) {
      const cardKeyMap = {
        toSend: 'queriesToSend',
        awaiting: 'awaitingSignatures',
        signed: 'recentlySigned'
      };
      const cardKey = cardKeyMap[subTab];
      const card = FacilityDashboardState.getCard(cardKey);
      let query = card.items?.find(q => q.id === queryId);

      // If query data is incomplete (e.g., from recentlySigned), fetch full details
      if (query && (!query.facilityName || !query.status)) {
        try {
          const fullQuery = await window.QueryAPI.getQuery(queryId);
          query = { ...query, ...fullQuery };
        } catch (err) {
          console.warn('Failed to fetch full query details:', err);
        }
      }

      if (query) {
        const result = {
          recommendation: query.aiGeneratedNote || query.nurseEditedNote || '',
          icd10Code: query.selectedIcd10Code,
          icd10Description: query.selectedIcd10Description
        };
        window.QueryDetailModal.show(query, result, { fromDashboard: true });
      }
    }
  },

  /**
   * Handle MDS item click
   * @param {Object} data
   */
  _handleMDSClick(data) {
    if (data.assessmentId) {
      this._handleAssessmentClick(data.assessmentId, data.patientId);
    }
  },

  /**
   * Handle assessment click - drill down to MDS detail
   * @param {string} assessmentId
   * @param {string} patientId
   */
  _handleAssessmentClick(assessmentId, patientId) {
    console.log('Assessment clicked:', { assessmentId, patientId });

    const assessment = FacilityDashboardState.getAssessmentById(assessmentId);

    if (typeof MDSViewState !== 'undefined') {
      MDSViewState.manualContext = {
        scope: 'mds',
        assessmentId: assessmentId,
        patientId: patientId,
        patientName: assessment?.patientName || null
      };
      MDSViewState.context = MDSViewState.manualContext;
      MDSViewState.data = null;
      MDSViewState.cameFromDashboard = true;
    }

    if (typeof switchView === 'function') {
      switchView('mds');
    } else if (window.SuperMenu?.switchView) {
      window.SuperMenu.switchView('mds');
    }
  },

  /**
   * Navigate to PCC patient page
   * @param {string} patientId
   */
  _navigateToPatient(patientId) {
    if (!patientId) return;

    const currentUrl = new URL(window.location.href);
    const origin = currentUrl.origin;
    const patientUrl = `${origin}/admin/client/cp_residentdashboard.jsp?ESOLrow=1&ESOLclientid=${patientId}`;

    window.location.href = patientUrl;
  },

  /**
   * Re-render the dashboard
   */
  _rerender() {
    const container = document.getElementById('super-menu-content');
    if (container) {
      container.innerHTML = this.render();
      this.setupListeners(container);
    }
  }
};

// Make available globally
window.FacilityDashboardView = FacilityDashboardView;
