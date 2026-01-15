// Query Detail Modal for Super LTC Chrome Extension
// Shows query details and actions (resend, view PDF)

const QueryDetailModal = {
  /**
   * Show the query detail modal
   * @param {Object} query - Query object
   * @param {Object} result - MDS result object (optional, for context)
   */
  show(query, result = null) {
    const statusDisplay = QueryState.getStatusDisplay(query.status);
    const content = this._buildContent(query);
    const actions = this._buildActions(query, result);

    SuperModal.show({
      title: 'Diagnosis Query',
      icon: statusDisplay.icon,
      badge: query.mdsItem,
      content,
      actions,
      size: 'medium',
      className: 'super-query-detail-modal'
    });
  },

  /**
   * Build modal content HTML
   * @param {Object} query - Query object
   * @returns {string}
   */
  _buildContent(query) {
    const statusDisplay = QueryState.getStatusDisplay(query.status);

    // Format dates
    const sentAt = query.sentAt ? this._formatDate(query.sentAt) : null;
    const signedAt = query.signedAt ? this._formatDate(query.signedAt) : null;

    // Build ICD-10 display
    const icd10Display = query.selectedIcd10Code
      ? `${query.selectedIcd10Code}${query.selectedIcd10Description ? ` - ${query.selectedIcd10Description}` : ''}`
      : null;

    return `
      <div class="super-query-detail">
        <!-- Status Header -->
        <div class="super-query-detail__status ${statusDisplay.className}">
          <span class="super-query-detail__status-icon">${statusDisplay.icon}</span>
          <span class="super-query-detail__status-label">${statusDisplay.label}</span>
          ${query.status === 'signed' && signedAt ? `<span class="super-query-detail__status-date">${signedAt}</span>` : ''}
          ${query.status === 'sent' && sentAt ? `<span class="super-query-detail__status-date">${sentAt}</span>` : ''}
        </div>

        <!-- Patient Info -->
        <div class="super-query-detail__patient">
          <div class="super-query-detail__patient-name">${this._escapeHTML(query.patientName || 'Unknown Patient')}</div>
          <div class="super-query-detail__patient-meta">
            <span>${this._escapeHTML(query.locationName || 'Unknown Facility')}</span>
          </div>
        </div>

        <!-- Diagnosis & ICD-10 Combined -->
        <div class="super-query-detail__diagnosis-card">
          <div class="super-query-detail__diagnosis-name">
            ${this._escapeHTML(query.mdsItemName || query.mdsItem)}
          </div>
          ${icd10Display ? `
            <div class="super-query-detail__diagnosis-code">${this._escapeHTML(icd10Display)}</div>
          ` : ''}
        </div>

        <!-- Signed Info -->
        ${query.status === 'signed' && query.signedByName ? `
          <div class="super-query-detail__signed-card">
            <span class="super-query-detail__signed-icon">&#10003;</span>
            <div class="super-query-detail__signed-info">
              <div class="super-query-detail__signed-label">Signed by</div>
              <div class="super-query-detail__signed-name">
                ${this._escapeHTML(query.signedByName)}${query.signedByTitle ? `, ${this._escapeHTML(query.signedByTitle)}` : ''}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Sent Info (for pending queries) -->
        ${query.status === 'sent' ? `
          <div class="super-query-detail__sent-card">
            <span class="super-query-detail__sent-icon">&#8987;</span>
            <div class="super-query-detail__sent-info">
              <div class="super-query-detail__sent-label">Awaiting signature</div>
              <div class="super-query-detail__sent-text">SMS was sent to the physician</div>
            </div>
          </div>
        ` : ''}

        <!-- Rejected Info -->
        ${query.status === 'rejected' ? `
          <div class="super-query-detail__rejected-card">
            <span class="super-query-detail__rejected-icon">&#10007;</span>
            <div class="super-query-detail__rejected-info">
              <div class="super-query-detail__rejected-label">Rejected</div>
              <div class="super-query-detail__rejected-text">The physician did not sign this query</div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  /**
   * Build action buttons based on query status
   * @param {Object} query - Query object
   * @param {Object} result - MDS result (optional)
   * @returns {Array}
   */
  _buildActions(query, result) {
    const actions = [];

    switch (query.status) {
      case 'pending':
        // Draft - can send
        actions.push({
          label: 'Send Query',
          variant: 'primary',
          action: () => {
            SuperModal.close();
            QuerySendModal.show(result, query);
          }
        });
        break;

      case 'sent':
        // Awaiting signature - can resend
        actions.push({
          label: 'Resend SMS',
          variant: 'primary',
          action: (btn) => this._handleResend(query, btn)
        });
        break;

      case 'signed':
        // Signed - can view PDF
        actions.push({
          label: 'View Signed PDF',
          variant: 'primary',
          action: (btn) => this._handleViewPdf(query, btn)
        });
        break;

      case 'rejected':
        // Rejected - could create new query
        if (result) {
          actions.push({
            label: 'Create New Query',
            variant: 'primary',
            action: () => {
              SuperModal.close();
              QuerySendModal.show(result);
            }
          });
        }
        break;
    }

    // Always have a close button
    actions.unshift({
      label: 'Close',
      variant: 'secondary',
      action: () => SuperModal.close()
    });

    return actions;
  },

  /**
   * Handle resend SMS action
   * @param {Object} query - Query object
   * @param {HTMLElement} btn - Button element
   */
  async _handleResend(query, btn) {
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const result = await QueryAPI.resendQuery(query.id);
      SuperModal.close();

      // Show success toast
      const names = result.results?.map(r => r.practitionerName).join(', ') || 'practitioners';
      SuperToast.success(`SMS resent to ${names}`);

    } catch (error) {
      console.error('Super LTC: Failed to resend query', error);
      SuperToast.error(`Failed to resend: ${error.message}`);
      btn.textContent = originalText;
      btn.disabled = false;
    }
  },

  /**
   * Handle view PDF action
   * @param {Object} query - Query object
   * @param {HTMLElement} btn - Button element
   */
  async _handleViewPdf(query, btn) {
    const originalText = btn.textContent;
    btn.textContent = 'Loading...';
    btn.disabled = true;

    try {
      const { pdfUrl } = await QueryAPI.getQueryPdf(query.id);

      if (pdfUrl) {
        window.open(pdfUrl, '_blank');
        SuperModal.close();
      } else {
        throw new Error('No PDF URL returned');
      }

    } catch (error) {
      console.error('Super LTC: Failed to get PDF', error);
      SuperToast.error(`Failed to load PDF: ${error.message}`);
      btn.textContent = originalText;
      btn.disabled = false;
    }
  },

  /**
   * Format a date string for display
   * @param {string} dateStr - ISO date string
   * @returns {string}
   */
  _formatDate(dateStr) {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      });
    } catch {
      return dateStr;
    }
  },

  /**
   * Escape HTML special characters
   * @param {string} str - String to escape
   * @returns {string}
   */
  _escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};

// Make available globally
window.QueryDetailModal = QueryDetailModal;
