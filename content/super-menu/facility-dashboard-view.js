// Facility Dashboard View Component for Super Menu
// Renders the facility-level dashboard UI with action cards and open assessments

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
        ${this._renderCards()}
        ${this._renderFilter()}
        ${this._renderAssessmentsList()}
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
        <button class="super-menu-error__retry" id="super-facility-retry">Try Again</button>
      </div>
    `;
  },

  /**
   * Render the 4 action cards in a 2x2 grid
   * @returns {string} HTML string
   */
  _renderCards() {
    const cards = [
      {
        key: 'queriesToSend',
        icon: '&#9993;',  // ✉
        label: 'Queries to Send',
        color: 'yellow'
      },
      {
        key: 'awaitingSignatures',
        icon: '&#9998;',  // ✎
        label: 'Awaiting Signatures',
        color: 'orange'
      },
      {
        key: 'hippsOpportunities',
        icon: '&#9889;',  // ⚡
        label: 'HIPPS Opportunities',
        color: 'green'
      },
      {
        key: 'complianceRisks',
        icon: '&#9888;',  // ⚠
        label: 'Compliance Risks',
        color: 'red'
      }
    ];

    const cardHtml = cards.map(card => this._renderCard(card)).join('');

    return `
      <div class="super-facility-cards">
        ${cardHtml}
      </div>
    `;
  },

  /**
   * Render a single action card
   * @param {Object} card - { key, icon, label, color }
   * @returns {string} HTML string
   */
  _renderCard(card) {
    const data = FacilityDashboardState.getCard(card.key);
    const isExpanded = FacilityDashboardState.expandedCard === card.key;
    const hasItems = data.items && data.items.length > 0;
    console.log(`Rendering card ${card.key}: count=${data.count}, hasItems=${hasItems}, isExpanded=${isExpanded}, itemsLength=${data.items?.length}`);

    return `
      <div class="super-facility-card super-facility-card--${card.color} ${isExpanded ? 'super-facility-card--expanded' : ''}"
           data-card="${card.key}">
        <div class="super-facility-card__header">
          <span class="super-facility-card__icon">${card.icon}</span>
          <span class="super-facility-card__count">${data.count}</span>
          <span class="super-facility-card__label">${card.label}</span>
          ${hasItems ? `<span class="super-facility-card__toggle">${isExpanded ? '&#9650;' : '&#9660;'}</span>` : ''}
        </div>
        ${isExpanded && hasItems ? this._renderCardItems(card.key, data.items) : ''}
      </div>
    `;
  },

  /**
   * Render expanded card items
   * @param {string} cardKey
   * @param {Array} items
   * @returns {string} HTML string
   */
  _renderCardItems(cardKey, items) {
    const itemsHtml = items.map(item => this._renderCardItem(cardKey, item)).join('');

    return `
      <div class="super-facility-card__items">
        ${itemsHtml}
      </div>
    `;
  },

  /**
   * Render a single card item based on card type
   * @param {string} cardKey
   * @param {Object} item
   * @returns {string} HTML string
   */
  _renderCardItem(cardKey, item) {
    switch (cardKey) {
      case 'queriesToSend':
        return `
          <div class="super-facility-card__item" data-card="${cardKey}" data-query-id="${item.id}" data-patient-id="${item.patientId || ''}">
            <span class="super-facility-card__item-name">${this._escapeHtml(item.patientName)}</span>
            <span class="super-facility-card__item-detail">${this._escapeHtml(item.mdsItem)} - ${this._escapeHtml(item.mdsItemName || '')}</span>
          </div>
        `;

      case 'awaitingSignatures':
        return `
          <div class="super-facility-card__item" data-card="${cardKey}" data-query-id="${item.id}">
            <span class="super-facility-card__item-name">${this._escapeHtml(item.patientName)}</span>
            <span class="super-facility-card__item-detail">${this._escapeHtml(item.mdsItem)} - sent ${this._formatTimeAgo(item.sentAt)}</span>
          </div>
        `;

      case 'hippsOpportunities':
        return `
          <div class="super-facility-card__item" data-card="${cardKey}" data-assessment-id="${item.externalAssessmentId}">
            <span class="super-facility-card__item-name">${this._escapeHtml(item.patientName)}</span>
            <span class="super-facility-card__item-detail">${item.currentHipps || '?????'} &#8594; ${item.potentialHipps || '?????'} (${item.hippsChangingCount} items)</span>
          </div>
        `;

      case 'complianceRisks':
        return `
          <div class="super-facility-card__item" data-card="${cardKey}" data-assessment-id="${item.externalAssessmentId}">
            <span class="super-facility-card__item-name">${this._escapeHtml(item.patientName)}</span>
            <span class="super-facility-card__item-detail">${item.complianceIssues?.join(', ') || 'Issues detected'}</span>
          </div>
        `;

      default:
        return '';
    }
  },

  /**
   * Render filter toggle
   * @returns {string} HTML string
   */
  _renderFilter() {
    const currentFilter = FacilityDashboardState.filter;

    return `
      <div class="super-facility-filter">
        <button class="super-facility-filter__btn ${currentFilter === 'needs_attention' ? 'super-facility-filter__btn--active' : ''}"
                data-filter="needs_attention">
          Needs Attention
        </button>
        <button class="super-facility-filter__btn ${currentFilter === 'all' ? 'super-facility-filter__btn--active' : ''}"
                data-filter="all">
          All Open
        </button>
      </div>
    `;
  },

  /**
   * Render open assessments list
   * @returns {string} HTML string
   */
  _renderAssessmentsList() {
    const assessments = FacilityDashboardState.getFilteredAssessments();

    // Sort by ARD date ascending (oldest/soonest due first)
    const sortedAssessments = [...assessments].sort((a, b) => {
      return new Date(a.ardDate) - new Date(b.ardDate);
    });

    const totalCount = sortedAssessments.length;

    if (totalCount === 0) {
      return `
        <div class="super-facility-assessments">
          <div class="super-facility-assessments__header">
            <span class="super-facility-assessments__title">OPEN ASSESSMENTS</span>
            <span class="super-facility-assessments__count">(0)</span>
          </div>
          <div class="super-facility-empty">
            <div class="super-facility-empty__icon">&#10024;</div>
            <div class="super-facility-empty__text">
              ${FacilityDashboardState.filter === 'needs_attention'
                ? 'No assessments need attention'
                : 'No open assessments'}
            </div>
          </div>
        </div>
      `;
    }

    const itemsHtml = sortedAssessments.map(a => this._renderAssessmentItem(a)).join('');

    return `
      <div class="super-facility-assessments">
        <div class="super-facility-assessments__header">
          <span class="super-facility-assessments__title">OPEN ASSESSMENTS</span>
          <span class="super-facility-assessments__count">(${totalCount})</span>
        </div>
        <div class="super-facility-assessments__list">
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
      badges.push(`<span class="super-facility-badge super-facility-badge--hipps">HIPPS</span>`);
    }
    if (assessment.pendingQueryCount > 0) {
      badges.push(`<span class="super-facility-badge super-facility-badge--query">${assessment.pendingQueryCount} ${assessment.pendingQueryCount === 1 ? 'query' : 'queries'}</span>`);
    }
    if (assessment.complianceStatus === 'failed' || assessment.complianceStatus === 'warning') {
      badges.push(`<span class="super-facility-badge super-facility-badge--compliance">${assessment.complianceIssues?.length || ''} issues</span>`);
    }

    const badgesHtml = badges.length > 0
      ? badges.join('')
      : '<span class="super-facility-badge super-facility-badge--ok">No issues</span>';

    return `
      <div class="super-facility-assessment" data-assessment-id="${assessment.externalAssessmentId}" data-patient-id="${assessment.patientId}">
        <div class="super-facility-assessment__main">
          <div class="super-facility-assessment__name">${this._escapeHtml(assessment.patientName)}</div>
          <div class="super-facility-assessment__meta">
            ${this._escapeHtml(assessment.mdsType)} &middot; ${this._formatDate(assessment.ardDate)}
          </div>
        </div>
        <div class="super-facility-assessment__right">
          ${hippsDisplay ? `<div class="super-facility-assessment__hipps">${hippsDisplay}</div>` : ''}
          <div class="super-facility-assessment__badges">${badgesHtml}</div>
        </div>
        <div class="super-facility-assessment__chevron">&#10095;</div>
      </div>
    `;
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

    // Card header clicks (toggle expand)
    const cardHeaders = container.querySelectorAll('.super-facility-card__header');
    console.log('Setting up card header listeners, found:', cardHeaders.length);
    cardHeaders.forEach(header => {
      header.addEventListener('click', (e) => {
        console.log('Card header clicked');
        const card = header.closest('.super-facility-card');
        const cardKey = card?.dataset.card;
        console.log('Card key:', cardKey);
        if (cardKey) {
          this._handleCardToggle(cardKey);
        }
      });
    });

    // Card item clicks
    container.querySelectorAll('.super-facility-card__item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardKey = item.dataset.card;
        const queryId = item.dataset.queryId;
        const assessmentId = item.dataset.assessmentId;
        const patientId = item.dataset.patientId;

        this._handleCardItemClick(cardKey, { queryId, assessmentId, patientId });
      });
    });

    // Filter buttons
    container.querySelectorAll('.super-facility-filter__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (filter) {
          this._handleFilterChange(filter);
        }
      });
    });

    // Assessment row clicks
    const assessmentRows = container.querySelectorAll('.super-facility-assessment');
    console.log('Setting up assessment row listeners, found:', assessmentRows.length);
    assessmentRows.forEach(row => {
      row.addEventListener('click', () => {
        console.log('Assessment row clicked');
        const assessmentId = row.dataset.assessmentId;
        const patientId = row.dataset.patientId;
        console.log('Row data:', { assessmentId, patientId });
        if (assessmentId) {
          this._handleAssessmentClick(assessmentId, patientId);
        }
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
   * Handle card toggle (expand/collapse)
   * @param {string} cardKey
   */
  _handleCardToggle(cardKey) {
    console.log('Card toggle clicked:', cardKey);
    FacilityDashboardState.toggleExpandedCard(cardKey);
    console.log('Expanded card is now:', FacilityDashboardState.expandedCard);
    // Re-render to show expanded state - call render directly to avoid async issues
    const container = document.getElementById('super-menu-content');
    if (container) {
      container.innerHTML = this.render();
      this.setupListeners(container);
    }
  },

  /**
   * Handle card item click
   * @param {string} cardKey
   * @param {Object} data - { queryId, assessmentId, patientId }
   */
  _handleCardItemClick(cardKey, data) {
    switch (cardKey) {
      case 'queriesToSend':
        // Navigate to PCC patient page
        // Note: queriesToSend items may not have patientId from API
        // Fall back to showing query detail modal if no patientId
        if (data.patientId) {
          this._navigateToPatient(data.patientId);
        } else if (data.queryId && window.QueryDetailModal) {
          // Show query detail as fallback
          const card = FacilityDashboardState.getCard('queriesToSend');
          const query = card.items?.find(q => q.id === data.queryId);
          if (query) {
            const result = {
              recommendation: query.aiGeneratedNote || query.nurseEditedNote || '',
              icd10Code: query.selectedIcd10Code,
              icd10Description: query.selectedIcd10Description
            };
            window.QueryDetailModal.show(query, result);
          }
        }
        break;

      case 'awaitingSignatures':
        // Show query detail modal
        if (data.queryId && window.QueryDetailModal) {
          // Find query in card items
          const card = FacilityDashboardState.getCard('awaitingSignatures');
          const query = card.items?.find(q => q.id === data.queryId);
          if (query) {
            const result = {
              recommendation: query.aiGeneratedNote || query.nurseEditedNote || '',
              icd10Code: query.selectedIcd10Code,
              icd10Description: query.selectedIcd10Description
            };
            window.QueryDetailModal.show(query, result);
          }
        }
        break;

      case 'hippsOpportunities':
      case 'complianceRisks':
        // Navigate to PCC MDS page
        if (data.assessmentId) {
          this._navigateToMDS(data.assessmentId);
        }
        break;
    }
  },

  /**
   * Handle filter change
   * @param {string} filter
   */
  async _handleFilterChange(filter) {
    if (FacilityDashboardState.filter === filter) return;

    // Show loading state
    const container = document.getElementById('super-menu-content');
    if (container) {
      container.innerHTML = this._renderLoading();
    }

    await FacilityDashboardState.setFilter(filter);

    // Re-render
    if (window.SuperMenu) {
      window.SuperMenu.renderFacilityDashboard();
    }
  },

  /**
   * Handle assessment row click - drill down to MDS detail in panel
   * @param {string} assessmentId
   * @param {string} patientId
   */
  _handleAssessmentClick(assessmentId, patientId) {
    console.log('Assessment clicked:', { assessmentId, patientId });

    // Get assessment data for patient name
    const assessment = FacilityDashboardState.getAssessmentById(assessmentId);
    console.log('Found assessment:', assessment);

    // Set up MDS view context for drill-down
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
      console.log('Set MDSViewState:', MDSViewState.manualContext);
    } else {
      console.error('MDSViewState is not defined!');
    }

    // Switch to MDS view
    if (typeof switchView === 'function') {
      console.log('Calling switchView("mds")');
      switchView('mds');
    } else if (window.SuperMenu?.switchView) {
      console.log('Calling window.SuperMenu.switchView("mds")');
      window.SuperMenu.switchView('mds');
    } else {
      console.error('switchView function not available!');
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
    const patientUrl = `${origin}/admin/patient.xhtml?ESOLclientid=${patientId}`;

    window.location.href = patientUrl;
  },

  /**
   * Navigate to PCC MDS section page
   * @param {string} assessmentId - External assessment ID
   */
  _navigateToMDS(assessmentId) {
    if (!assessmentId) return;

    const currentUrl = new URL(window.location.href);
    const origin = currentUrl.origin;
    const mdsUrl = `${origin}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${assessmentId}`;

    window.location.href = mdsUrl;
  }
};

// Make available globally
window.FacilityDashboardView = FacilityDashboardView;
