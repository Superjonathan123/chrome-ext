// Query Panel Section for Super LTC Chrome Extension
// Adds query information to the summary panel

const QueryPanel = {
  /**
   * Build HTML for query count in the summary bar
   * @returns {string} HTML string
   */
  buildSummaryCountHTML() {
    const counts = QueryState.getCounts();
    if (counts.total === 0) return '';

    // Check if any need attention
    const needsAttention = counts.pending + counts.sent > 0;

    return `
      <div class="super-panel-stat super-panel-stat--queries ${needsAttention ? 'super-panel-stat--attention' : ''}">
        <span class="super-panel-stat__icon">&#128203;</span>
        <span class="super-panel-stat__value">${counts.total}</span>
        <span class="super-panel-stat__label">queries</span>
        ${needsAttention ? `<span class="super-panel-stat__badge">${counts.pending + counts.sent}</span>` : ''}
      </div>
    `;
  },

  /**
   * Build HTML for queries section in panel details
   * @returns {string} HTML string
   */
  buildDetailsSectionHTML() {
    const queries = QueryState.getQueriesSorted();
    if (queries.length === 0) return '';

    const counts = QueryState.getCounts();
    const needsAttention = counts.pending + counts.sent;

    const itemsHTML = queries.map(query => {
      const statusDisplay = QueryState.getStatusDisplay(query.status);
      const itemName = query.mdsItemName || query.mdsItem;

      return `
        <div class="super-panel-item super-panel-item--query" data-query-id="${query.id}" data-mds-item="${query.mdsItem}">
          <div class="super-panel-item__content">
            <span class="super-panel-item__code">${query.mdsItem}</span>
            <span class="super-panel-item__name">${escapeHTML(itemName)}</span>
          </div>
          <div class="super-panel-item__status ${statusDisplay.className}">
            <span class="super-panel-item__status-icon">${statusDisplay.icon}</span>
            <span class="super-panel-item__status-text">${statusDisplay.label}</span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="super-panel-section super-panel-section--queries">
        <div class="super-panel-section__header" data-toggle="queries">
          <span class="super-panel-section__title">
            Queries
            <span class="super-panel-section__count">(${queries.length})</span>
            ${needsAttention > 0 ? `<span class="super-panel-section__badge">${needsAttention}</span>` : ''}
          </span>
          <span class="super-panel-section__toggle">&#9660;</span>
        </div>
        <div class="super-panel-section__content" data-section="queries">
          ${itemsHTML}
        </div>
      </div>
    `;
  },

  /**
   * Setup click handlers for query items in the panel
   * @param {HTMLElement} panel - Panel element
   */
  setupClickHandlers(panel) {
    panel.querySelectorAll('.super-panel-item--query').forEach(item => {
      item.addEventListener('click', () => {
        const queryId = item.getAttribute('data-query-id');
        const mdsItem = item.getAttribute('data-mds-item');

        // Find the query
        const query = QueryState.queries.find(q => q.id === queryId);
        if (!query) return;

        // Find the result for this MDS item
        const result = window.SuperOverlay?.results?.find(r => r.mdsItem === mdsItem);

        // Scroll to the MDS item on page
        this.scrollToItem(mdsItem);

        // Open the query detail modal
        QueryDetailModal.show(query, result);
      });
    });

    // Setup section toggle
    const sectionHeader = panel.querySelector('[data-toggle="queries"]');
    if (sectionHeader) {
      sectionHeader.addEventListener('click', () => {
        const content = panel.querySelector('[data-section="queries"]');
        const toggle = sectionHeader.querySelector('.super-panel-section__toggle');
        if (content) {
          const isExpanded = content.style.display !== 'none';
          content.style.display = isExpanded ? 'none' : '';
          if (toggle) {
            toggle.innerHTML = isExpanded ? '&#9654;' : '&#9660;';
          }
        }
      });
    }
  },

  /**
   * Scroll to an MDS item on the page and highlight it
   * @param {string} mdsItem - MDS item code
   */
  scrollToItem(mdsItem) {
    // Find the element - try different patterns
    const elementId = `${mdsItem}A_wrapper`;
    let element = document.getElementById(elementId);

    if (!element) {
      // Try without column suffix
      element = document.querySelector(`[id^="${mdsItem}"]`);
    }

    if (!element) {
      // Try finding by data attribute
      element = document.querySelector(`[data-mds-item="${mdsItem}"]`)?.closest('[id$="_wrapper"]');
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Add highlight animation
      element.classList.add('super-highlight');
      setTimeout(() => {
        element.classList.remove('super-highlight');
      }, 2000);
    }
  },

  /**
   * Update the panel with query information
   * Called after queries are loaded
   */
  updatePanel() {
    const panel = document.querySelector('.super-panel');
    if (!panel) return;

    // Update summary bar
    const summaryBar = panel.querySelector('.super-panel-summary');
    if (summaryBar) {
      // Remove existing query stat
      const existingQueryStat = summaryBar.querySelector('.super-panel-stat--queries');
      if (existingQueryStat) {
        existingQueryStat.remove();
      }

      // Add new query stat
      const queryCountHTML = this.buildSummaryCountHTML();
      if (queryCountHTML) {
        summaryBar.insertAdjacentHTML('beforeend', queryCountHTML);

        // Add click handler to query stat
        const queryStatEl = summaryBar.querySelector('.super-panel-stat--queries');
        if (queryStatEl) {
          queryStatEl.addEventListener('click', () => {
            this.showQueriesSection(panel);
          });
        }
      }
    }

    // Update details section
    const detailsContainer = panel.querySelector('.super-panel-details');
    if (detailsContainer) {
      // Remove existing queries section
      const existingSection = detailsContainer.querySelector('.super-panel-section--queries');
      if (existingSection) {
        existingSection.remove();
      }

      // Add new queries section
      const sectionHTML = this.buildDetailsSectionHTML();
      if (sectionHTML) {
        detailsContainer.insertAdjacentHTML('beforeend', sectionHTML);
        this.setupClickHandlers(panel);
      }
    }
  },

  /**
   * Show queries when clicking on query stat
   * @param {HTMLElement} panel - Panel element
   */
  showQueriesSection(panel) {
    const queries = QueryState.queries;

    if (queries.length === 0) {
      return;
    }

    // If single query, open it directly
    if (queries.length === 1) {
      const query = queries[0];
      const result = window.SuperOverlay?.results?.find(r => r.mdsItem === query.mdsItem);
      QueryDetailModal.show(query, result);
      return;
    }

    // Multiple queries - show a list modal
    this.showQueriesListModal();
  },

  /**
   * Show a modal with list of all queries
   */
  showQueriesListModal() {
    const queries = QueryState.getQueriesSorted();

    const itemsHTML = queries.map(query => {
      const statusDisplay = QueryState.getStatusDisplay(query.status);
      return `
        <div class="super-queries-list__item" data-query-id="${query.id}">
          <div class="super-queries-list__item-info">
            <div class="super-queries-list__item-name">${escapeHTML(query.mdsItemName || query.mdsItem)}</div>
            <div class="super-queries-list__item-code">${query.mdsItem}</div>
          </div>
          <div class="super-queries-list__item-status ${statusDisplay.className}">
            <span>${statusDisplay.icon}</span>
            <span>${statusDisplay.label}</span>
          </div>
        </div>
      `;
    }).join('');

    SuperModal.show({
      title: 'Diagnosis Queries',
      icon: '&#128203;',
      content: `<div class="super-queries-list">${itemsHTML}</div>`,
      actions: [{
        label: 'Close',
        variant: 'secondary',
        action: () => SuperModal.close()
      }],
      size: 'medium',
      className: 'super-queries-list-modal'
    });

    // Setup click handlers for list items
    setTimeout(() => {
      document.querySelectorAll('.super-queries-list__item').forEach(item => {
        item.addEventListener('click', () => {
          const queryId = item.getAttribute('data-query-id');
          const query = QueryState.queries.find(q => q.id === queryId);
          if (query) {
            SuperModal.close();
            setTimeout(() => {
              const result = window.SuperOverlay?.results?.find(r => r.mdsItem === query.mdsItem);
              QueryDetailModal.show(query, result);
            }, 200);
          }
        });
      });
    }, 50);
  }
};

// Helper function if not already defined
function escapeHTML(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Make available globally
window.QueryPanel = QueryPanel;
