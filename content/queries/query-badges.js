// Query Badge Rendering for Super LTC Chrome Extension
// Handles displaying query status badges on MDS items

const QueryBadges = {
  /**
   * Create a query badge for an MDS item
   * Checks if query exists and shows appropriate status badge
   * @param {string} mdsItem - MDS item code (e.g., "I2100")
   * @param {Object} result - The MDS result object (for creating new queries)
   * @returns {HTMLElement|null}
   */
  createBadge(mdsItem, result) {
    const existingQuery = QueryState.getQueryForItem(mdsItem);

    if (existingQuery) {
      return this._createStatusBadge(existingQuery, result);
    } else {
      return this._createNewQueryBadge(mdsItem, result);
    }
  },

  /**
   * Create a status badge for an existing query
   * @param {Object} query - Query object
   * @param {Object} result - MDS result object
   * @returns {HTMLElement}
   */
  _createStatusBadge(query, result) {
    const statusDisplay = QueryState.getStatusDisplay(query.status);
    const badge = document.createElement('div');
    badge.className = `super-badge super-badge--query-status ${statusDisplay.className}`;
    badge.setAttribute('data-mds-item', query.mdsItem);
    badge.setAttribute('data-query-id', query.id);

    badge.innerHTML = `
      <span class="super-badge__icon">${statusDisplay.icon}</span>
      <span class="super-badge__text">${statusDisplay.label}</span>
    `;

    // Click handler - open query detail modal
    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      QueryDetailModal.show(query, result);
    });

    return badge;
  },

  /**
   * Create a badge for creating a new query
   * @param {string} mdsItem - MDS item code
   * @param {Object} result - MDS result object
   * @returns {HTMLElement}
   */
  _createNewQueryBadge(mdsItem, result) {
    const badge = document.createElement('div');
    badge.className = 'super-badge super-badge--query';
    badge.setAttribute('data-mds-item', mdsItem);

    badge.innerHTML = `
      <svg class="super-badge__svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="5" r="3"/><path d="M3 21v-2a6 6 0 0 1 6-6 6 6 0 0 1 3 .8"/><rect x="15" y="11" width="7" height="10" rx="1.5"/><path d="M17.5 11V9.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1V11"/><line x1="17" y1="14.5" x2="20" y2="14.5"/><line x1="17" y1="16.5" x2="20" y2="16.5"/><line x1="17" y1="18.5" x2="19" y2="18.5"/></svg>
    `;
    badge.title = 'Send Query';

    // Click handler - open send modal (step 1)
    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      QuerySendModal.show(result);
    });

    return badge;
  },

  /**
   * Inject or update query badge for a question element
   * Called from injectBadge() in content.js
   * @param {HTMLElement} questionEl - Question wrapper element
   * @param {Object} result - MDS result object
   * @param {HTMLElement} mainBadge - The main status badge element
   */
  injectQueryBadge(questionEl, result, mainBadge) {
    // Only for Section I items
    if (!result.mdsItem || !result.mdsItem.startsWith('I')) {
      return;
    }

    // Remove existing query badge if any
    const existingQueryBadge = questionEl.querySelector('.super-badge--query, .super-badge--query-status');
    if (existingQueryBadge) {
      existingQueryBadge.remove();
    }

    // Create new badge
    const badge = this.createBadge(result.mdsItem, result);
    if (!badge) return;

    // Insert after main badge
    if (mainBadge && mainBadge.parentElement) {
      mainBadge.parentElement.appendChild(badge);
    }
  },

  /**
   * Update all query badges on the page
   * Called after queries are loaded or updated
   */
  updateAllBadges() {
    console.log('Super LTC: updateAllBadges called, queries:', QueryState.queries.length);

    // For each query, find and update its badge
    QueryState.queries.forEach(query => {
      const mdsItem = query.mdsItem;
      if (!mdsItem) return;

      console.log('Super LTC: Updating badge for query', mdsItem, 'status:', query.status);

      // Find existing query badge for this item
      const existingBadge = document.querySelector(
        `[data-mds-item="${mdsItem}"].super-badge--query, [data-mds-item="${mdsItem}"].super-badge--query-status`
      );

      if (existingBadge) {
        // Replace existing badge with updated one
        const parent = existingBadge.parentElement;
        if (parent) {
          existingBadge.remove();
          const newBadge = this._createStatusBadge(query, null);
          parent.appendChild(newBadge);
          console.log('Super LTC: Updated existing badge for', mdsItem);
        }
      } else {
        // No badge exists, find main badge and add query badge after it
        const mainBadge = document.querySelector(`[data-mds-item="${mdsItem}"].super-badge`);
        if (mainBadge && mainBadge.parentElement) {
          const newBadge = this._createStatusBadge(query, null);
          mainBadge.parentElement.appendChild(newBadge);
          console.log('Super LTC: Added new badge for', mdsItem);
        } else {
          console.log('Super LTC: No main badge found for', mdsItem);
        }
      }
    });
  },

  /**
   * Refresh badge for a specific MDS item
   * @param {string} mdsItem - MDS item code
   */
  refreshBadge(mdsItem) {
    const badge = document.querySelector(`[data-mds-item="${mdsItem}"].super-badge--query, [data-mds-item="${mdsItem}"].super-badge--query-status`);
    if (!badge) return;

    const result = window.SuperOverlay?.results?.find(r => r.mdsItem === mdsItem);
    if (!result) return;

    const parent = badge.parentElement;
    if (!parent) return;

    badge.remove();
    const newBadge = this.createBadge(mdsItem, result);
    if (newBadge) {
      parent.appendChild(newBadge);
    }
  }
};

// Make available globally
window.QueryBadges = QueryBadges;
