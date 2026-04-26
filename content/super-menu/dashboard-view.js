// Dashboard View Component for Super Menu
// Renders the global queries dashboard UI

const DashboardView = {
  /**
   * Render the complete dashboard
   * @returns {string} HTML string
   */
  render() {
    if (DashboardState.loading && !DashboardState.data) {
      return this._renderLoading();
    }

    if (DashboardState.error && !DashboardState.data) {
      return this._renderError();
    }

    return `
      <div class="super-menu-dashboard">
        ${this._renderStats()}
        ${this._renderQueryList()}
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
        <div class="super-menu-loading__text">Loading queries...</div>
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
        <div class="super-menu-error__text">${this._escapeHtml(DashboardState.error)}</div>
        <!-- NO_TRACK: vestigial — dashboard panel removed (overlay architecture) -->
        <button class="super-menu-error__retry" id="super-menu-retry">Try Again</button>
      </div>
    `;
  },

  /**
   * Render stats cards
   * @returns {string} HTML string
   */
  _renderStats() {
    const counts = DashboardState.data?.counts || { pending: 0, outstanding: 0, recentlySigned: 0 };

    return `
      <div class="super-menu-dashboard__stats">
        <div class="super-menu-stat super-menu-stat--pending">
          <div class="super-menu-stat__value">${counts.pending}</div>
          <div class="super-menu-stat__label">Pending</div>
        </div>
        <div class="super-menu-stat super-menu-stat--outstanding">
          <div class="super-menu-stat__value">${counts.outstanding}</div>
          <div class="super-menu-stat__label">Awaiting Sig</div>
        </div>
        <div class="super-menu-stat super-menu-stat--signed">
          <div class="super-menu-stat__value">${counts.recentlySigned}</div>
          <div class="super-menu-stat__label">Signed (24h)</div>
        </div>
      </div>
    `;
  },

  /**
   * Render the query list grouped by status
   * @returns {string} HTML string
   */
  _renderQueryList() {
    const groups = DashboardState.getQueriesGrouped();

    if (groups.length === 0) {
      return this._renderEmpty();
    }

    return `
      <div class="super-menu-queries">
        ${groups.map(group => this._renderQueryGroup(group)).join('')}
      </div>
    `;
  },

  /**
   * Render empty state
   * @returns {string} HTML string
   */
  _renderEmpty() {
    return `
      <div class="super-menu-empty">
        <div class="super-menu-empty__icon">&#10024;</div>
        <div class="super-menu-empty__text">No queries to show</div>
        <div class="super-menu-empty__subtext">Queries will appear here when created</div>
      </div>
    `;
  },

  /**
   * Render a group of queries
   * @param {Object} group - { status, label, queries }
   * @returns {string} HTML string
   */
  _renderQueryGroup(group) {
    return `
      <div class="super-menu-queries__group">
        <div class="super-menu-queries__group-title">${group.label} (${group.queries.length})</div>
        ${group.queries.map(query => this._renderQueryItem(query, group.status)).join('')}
      </div>
    `;
  },

  /**
   * Render a single query item
   * @param {Object} query - Query object
   * @param {string} status - Group status
   * @returns {string} HTML string
   */
  _renderQueryItem(query, status) {
    const patientName = query.patientName || 'Unknown Patient';
    const facilityName = query.locationName || query.facilityName || 'Unknown Facility';
    const mdsItem = query.mdsItem || '';
    const timeAgo = this._formatTimeAgo(query.sentAt || query.createdAt);

    // Determine available actions based on status
    const actions = this._getQueryActions(query, status);

    return `
      <div class="super-menu-query" data-query-id="${query.id}">
        <div class="super-menu-query__info">
          <div class="super-menu-query__patient">${this._escapeHtml(patientName)}</div>
          <div class="super-menu-query__meta">
            <span class="super-menu-query__facility">${this._escapeHtml(facilityName)}</span>
            ${mdsItem ? `<span class="super-menu-query__mds">${this._escapeHtml(mdsItem)}</span>` : ''}
          </div>
        </div>
        <div class="super-menu-query__right">
          <div class="super-menu-query__status super-menu-query__status--${status}">
            ${this._getStatusIcon(status)}
            <span>${this._getStatusLabel(status)}</span>
          </div>
          ${actions.length > 0 ? `
            <div class="super-menu-query__actions">
              ${actions.map(action => `
                <!-- NO_TRACK: vestigial — dashboard panel removed (overlay architecture) -->
                <button class="super-menu-query__action" data-action="${action.action}" data-query-id="${query.id}" title="${action.label}">
                  ${action.icon}
                </button>
              `).join('')}
            </div>
          ` : ''}
          <div class="super-menu-query__time">${timeAgo}</div>
        </div>
      </div>
    `;
  },

  /**
   * Get available actions for a query based on status
   * @param {Object} query
   * @param {string} status
   * @returns {Array<{action: string, label: string, icon: string}>}
   */
  _getQueryActions(query, status) {
    const actions = [];

    // Outstanding/sent queries can be resent
    if (status === 'outstanding' || query.status === 'sent') {
      actions.push({
        action: 'resend',
        label: 'Resend SMS',
        icon: '&#8635;' // ↻
      });
    }

    // Signed queries can view PDF (URL fetched dynamically)
    if (status === 'signed' || query.status === 'signed') {
      actions.push({
        action: 'pdf',
        label: 'View PDF',
        icon: '&#128196;' // 📄
      });
    }

    return actions;
  },

  /**
   * Get status icon
   * @param {string} status
   * @returns {string}
   */
  _getStatusIcon(status) {
    switch (status) {
      case 'pending': return '<span class="status-icon">&#9998;</span>'; // ✎
      case 'outstanding': return '<span class="status-icon">&#9203;</span>'; // ⏳
      case 'signed': return '<span class="status-icon">&#10003;</span>'; // ✓
      default: return '';
    }
  },

  /**
   * Get status label
   * @param {string} status
   * @returns {string}
   */
  _getStatusLabel(status) {
    switch (status) {
      case 'pending': return 'Draft';
      case 'outstanding': return 'Sent';
      case 'signed': return 'Signed';
      default: return status;
    }
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

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
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
    const retryBtn = container.querySelector('#super-menu-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => this._handleRetry());
    }

    // Query item clicks (for viewing details)
    container.querySelectorAll('.super-menu-query').forEach(item => {
      item.addEventListener('click', (e) => {
        // Don't trigger if clicking an action button
        if (e.target.closest('.super-menu-query__action')) return;

        const queryId = item.dataset.queryId;
        if (queryId) this._handleQueryClick(queryId);
      });
    });

    // Action buttons
    container.querySelectorAll('.super-menu-query__action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        const queryId = btn.dataset.queryId;

        if (action === 'resend') {
          this._handleResend(queryId, btn);
        } else if (action === 'pdf') {
          this._handleViewPdf(queryId);
        }
      });
    });
  },

  /**
   * Handle retry button click
   */
  async _handleRetry() {
    if (window.SuperMenu) {
      window.SuperMenu.renderDashboard();
    }
  },

  /**
   * Handle query item click - open detail modal
   * @param {string} queryId
   */
  _handleQueryClick(queryId) {
    const query = DashboardState.getQueryById(queryId);
    if (!query) {
      console.error('Super Menu: Query not found:', queryId);
      return;
    }

    // Use the existing QueryDetailModal if available
    if (window.QueryDetailModal) {
      // Build a result object that the modal expects
      const result = {
        recommendation: query.aiGeneratedNote || query.nurseEditedNote || '',
        icd10Code: query.selectedIcd10Code,
        icd10Description: query.selectedIcd10Description
      };
      window.QueryDetailModal.show(query, result);
    } else {
      console.warn('Super Menu: QueryDetailModal not available');
    }
  },

  /**
   * Handle resend SMS action
   * @param {string} queryId
   * @param {HTMLElement} btn - Button element for loading state
   */
  async _handleResend(queryId, btn) {
    if (btn.disabled) return;

    const originalContent = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '&#8987;'; // ⏱

    try {
      await QueryAPI.resendQuery(queryId);

      if (window.SuperToast) {
        window.SuperToast.show('SMS resent successfully', 'success');
      }

      // Refresh dashboard data
      await DashboardState.refresh();
      if (window.SuperMenu) {
        window.SuperMenu.renderDashboard();
      }
    } catch (err) {
      console.error('Super Menu: Failed to resend query:', err);
      if (window.SuperToast) {
        window.SuperToast.show(err.message || 'Failed to resend SMS', 'error');
      }
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalContent;
    }
  },

  /**
   * Handle view PDF action
   * @param {string} queryId
   */
  async _handleViewPdf(queryId) {
    try {
      const result = await QueryAPI.getQueryPdf(queryId);

      if (result.pdfUrl) {
        window.open(result.pdfUrl, '_blank');
      } else {
        throw new Error('No PDF URL returned');
      }
    } catch (err) {
      console.error('Super Menu: Failed to get PDF:', err);
      if (window.SuperToast) {
        window.SuperToast.show(err.message || 'Failed to load PDF', 'error');
      }
    }
  }
};

// Make available globally
window.DashboardView = DashboardView;
