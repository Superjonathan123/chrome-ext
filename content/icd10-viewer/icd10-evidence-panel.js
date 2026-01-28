/**
 * ICD-10 Evidence Panel Component
 * Middle panel showing evidence cards for selected diagnoses
 */

const ICD10EvidencePanel = {
  // State
  selectedCardId: null,
  items: [],
  approveLoadingIds: new Set(),
  approvedIds: new Set(),

  /**
   * Initialize the evidence panel
   * @param {HTMLElement} container - The panel container element
   * @param {Function} onCardSelect - Callback when a card is selected
   * @param {Function} onApprove - Callback when approve is clicked
   */
  init(container, onCardSelect, onApprove) {
    console.log('[ICD10EvidencePanel] init called, has callbacks:', !!onCardSelect, !!onApprove);
    this.container = container;
    this.onCardSelect = onCardSelect;
    this.onApprove = onApprove;
    // Reset all state from any previous opening
    this.selectedCardId = null;
    this.items = [];
    this.approveLoadingIds.clear();
    this.approvedIds.clear();
    this.render();
  },

  /**
   * Update items to display
   * @param {Array} items - Array of annotation items to display
   * @param {boolean} autoSelect - Whether to auto-select the first item
   */
  updateItems(items, autoSelect = true) {
    console.log('[ICD10EvidencePanel] updateItems called with', items?.length, 'items, autoSelect:', autoSelect);
    // Normalize items to have consistent field names
    this.items = this._sortItems(items).map(item => this._normalizeItem(item));
    this.render();

    // Auto-select first item if requested and items exist
    if (autoSelect && this.items.length > 0) {
      console.log('[ICD10EvidencePanel] Auto-selecting first item:', this.items[0].id);
      this._selectCard(this.items[0].id);
    } else {
      console.log('[ICD10EvidencePanel] Not auto-selecting: autoSelect=', autoSelect, 'items.length=', this.items.length);
    }
  },

  /**
   * Normalize item fields to consistent names
   * @param {Object} item - Raw annotation item
   * @returns {Object} - Normalized item
   */
  _normalizeItem(item) {
    const normalized = {
      ...item,
      // Normalize document ID
      documentId: item.documentId || item.docId || item.sourceDocumentId || item.document?.id || null,
      // Normalize quote text
      quoteText: item.quoteText || item.quote || item.text || item.evidenceText ||
                 item.snippet || item.excerpt || '',
      // Normalize document name
      documentName: item.documentName || item.docName || item.documentTitle ||
                    item.sourceName || item.document?.name || item.document?.title || 'Document',
      // Normalize page number
      pageNumber: item.pageNumber || item.page || item.pageNum ||
                  item.document?.page || item.location?.page || 1,
      // Keep wordBlockIndices for API-based resolution (array of integers)
      wordBlockIndices: item.wordBlockIndices || item.wordBlockIds || item.highlightIndices || [],
      // Also keep direct wordBlocks for mock data compatibility
      wordBlocks: item.wordBlocks || item.highlights || item.boundingBoxes ||
                  item.location?.wordBlocks || item.positions || []
    };
    console.log('[ICD10EvidencePanel] Normalized item:', normalized.id, 'wordBlockIndices:', normalized.wordBlockIndices?.length, 'wordBlocks:', normalized.wordBlocks?.length);
    return normalized;
  },

  /**
   * Sort items by rank (ascending) then confidence (descending)
   * @param {Array} items - Items to sort
   * @returns {Array} - Sorted items
   */
  _sortItems(items) {
    return [...items].sort((a, b) => {
      // First sort by rank (lower is better)
      if (a.rank !== b.rank) {
        return (a.rank || 999) - (b.rank || 999);
      }
      // Then by confidence (higher is better)
      return (b.confidence || 0) - (a.confidence || 0);
    });
  },

  /**
   * Render the evidence panel
   */
  render() {
    if (!this.container) return;

    if (this.items.length === 0) {
      this.container.innerHTML = `
        <div class="icd10-evidence-panel__empty">
          <div class="icd10-evidence-panel__empty-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <p class="icd10-evidence-panel__empty-text">Select a diagnosis code from the sidebar to view evidence</p>
        </div>
      `;
      return;
    }

    const html = `
      <div class="icd10-evidence-panel__header">
        <span class="icd10-evidence-panel__count">${this.items.length} suggestion${this.items.length !== 1 ? 's' : ''}</span>
      </div>
      <div class="icd10-evidence-panel__list">
        ${this.items.map(item => this._renderCard(item)).join('')}
      </div>
    `;

    this.container.innerHTML = html;
    this._attachEventListeners();
  },

  /**
   * Render a single evidence card
   * @param {Object} item - Annotation item (already normalized)
   * @returns {string} - HTML string
   */
  _renderCard(item) {
    const isSelected = this.selectedCardId === item.id;
    const isLoading = this.approveLoadingIds.has(item.id);
    const isApproved = this.approvedIds.has(item.id) || item.isApproved;

    // Handle confidence - API may return as decimal (0.84) or percentage (84)
    let confidencePercent = item.confidence || item.score || 0;
    if (confidencePercent <= 1) {
      confidencePercent = Math.round(confidencePercent * 100);
    } else {
      confidencePercent = Math.round(confidencePercent);
    }
    const confidenceClass = this._getConfidenceClass(confidencePercent / 100);

    // Truncate description if too long
    const maxDescLength = 60;
    const description = item.description || '';
    const truncatedDesc = description.length > maxDescLength
      ? description.substring(0, maxDescLength) + '...'
      : description;

    // Truncate quote if too long (already normalized)
    const quote = item.quoteText || '';
    const maxQuoteLength = 150;
    const truncatedQuote = quote.length > maxQuoteLength
      ? quote.substring(0, maxQuoteLength) + '...'
      : quote;

    // Format document name (already normalized)
    const docName = this._formatDocumentName(item.documentName);
    const pageNum = item.pageNumber;

    // Only show quote section if there's actual quote text
    const quoteHtml = truncatedQuote
      ? `<div class="icd10-evidence-card__quote">"${this._escapeHtml(truncatedQuote)}"</div>`
      : '';

    return `
      <div class="icd10-evidence-card ${isSelected ? 'icd10-evidence-card--selected' : ''} ${isApproved ? 'icd10-evidence-card--approved' : ''}"
           data-card-id="${item.id}">
        <div class="icd10-evidence-card__header">
          <span class="icd10-evidence-card__code">${item.icd10Code}</span>
          <span class="icd10-evidence-card__confidence ${confidenceClass}">${confidencePercent}%</span>
        </div>
        <div class="icd10-evidence-card__description" title="${this._escapeHtml(description)}">${this._escapeHtml(truncatedDesc)}</div>
        ${quoteHtml}
        <div class="icd10-evidence-card__footer">
          <div class="icd10-evidence-card__source">
            <span class="icd10-evidence-card__doc-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </span>
            <span class="icd10-evidence-card__doc-name">${this._escapeHtml(docName)}</span>
            ${pageNum ? `<span class="icd10-evidence-card__page">Page ${pageNum}</span>` : ''}
          </div>
          ${this._renderApproveButton(item, isLoading, isApproved)}
        </div>
      </div>
    `;
  },

  /**
   * Render the approve button in appropriate state
   * @param {Object} item - Annotation item
   * @param {boolean} isLoading - Whether approval is in progress
   * @param {boolean} isApproved - Whether already approved
   * @returns {string} - HTML string
   */
  _renderApproveButton(item, isLoading, isApproved) {
    if (isApproved) {
      return `
        <button class="icd10-evidence-card__approve icd10-evidence-card__approve--approved" disabled>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Approved
        </button>
      `;
    }

    if (isLoading) {
      return `
        <button class="icd10-evidence-card__approve icd10-evidence-card__approve--loading" disabled>
          <span class="icd10-evidence-card__spinner"></span>
          Approving...
        </button>
      `;
    }

    return `
      <button class="icd10-evidence-card__approve" data-approve-id="${item.id}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Approve
      </button>
    `;
  },

  /**
   * Get confidence class based on value
   * @param {number} confidence - Confidence value (0-1)
   * @returns {string} - CSS class
   */
  _getConfidenceClass(confidence) {
    if (confidence >= 0.85) return 'icd10-evidence-card__confidence--high';
    if (confidence >= 0.65) return 'icd10-evidence-card__confidence--medium';
    return 'icd10-evidence-card__confidence--low';
  },

  /**
   * Format document name for display
   * @param {string} name - Raw document name
   * @returns {string} - Formatted name
   */
  _formatDocumentName(name) {
    if (!name) return 'Document';
    // Replace underscores with spaces and clean up
    return name.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  },

  /**
   * Escape HTML special characters
   * @param {string} str - String to escape
   * @returns {string} - Escaped string
   */
  _escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  /**
   * Attach event listeners
   */
  _attachEventListeners() {
    // Card selection
    this.container.querySelectorAll('.icd10-evidence-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // Don't select if clicking approve button
        if (e.target.closest('.icd10-evidence-card__approve')) return;

        const cardId = card.dataset.cardId;
        this._selectCard(cardId);
      });
    });

    // Approve button clicks
    this.container.querySelectorAll('[data-approve-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const itemId = btn.dataset.approveId;
        this._handleApprove(itemId);
      });
    });
  },

  /**
   * Select a card
   * @param {string} cardId - Card ID to select
   */
  _selectCard(cardId) {
    console.log('[ICD10EvidencePanel] _selectCard called:', cardId, 'current:', this.selectedCardId);
    if (this.selectedCardId === cardId) {
      console.log('[ICD10EvidencePanel] Card already selected, skipping');
      return;
    }

    this.selectedCardId = cardId;
    this.render();

    // Find the item and notify
    const item = this.items.find(i => i.id === cardId);
    console.log('[ICD10EvidencePanel] Found item:', item?.id, 'has callback:', !!this.onCardSelect);
    if (item && this.onCardSelect) {
      console.log('[ICD10EvidencePanel] Calling onCardSelect for item:', item.id);
      this.onCardSelect(item);
    }
  },

  /**
   * Handle approve button click
   * @param {string} itemId - Item ID to approve
   */
  async _handleApprove(itemId) {
    if (this.approveLoadingIds.has(itemId)) return;

    this.approveLoadingIds.add(itemId);
    this.render();

    try {
      const item = this.items.find(i => i.id === itemId);
      if (item && this.onApprove) {
        await this.onApprove(item);
        this.approvedIds.add(itemId);
      }
    } catch (error) {
      console.error('ICD10EvidencePanel: Approve failed:', error);
      // Could show error toast here
    } finally {
      this.approveLoadingIds.delete(itemId);
      this.render();
    }
  },

  /**
   * Mark an item as approved (external call)
   * @param {string} itemId - Item ID that was approved
   */
  markApproved(itemId) {
    this.approvedIds.add(itemId);
    this.render();
  },

  /**
   * Get currently selected item
   * @returns {Object|null}
   */
  getSelectedItem() {
    if (!this.selectedCardId) return null;
    return this.items.find(i => i.id === this.selectedCardId) || null;
  },

  /**
   * Clear selection and items
   */
  clear() {
    this.selectedCardId = null;
    this.items = [];
    this.approveLoadingIds.clear();
    this.render();
  }
};

// Expose globally
window.ICD10EvidencePanel = ICD10EvidencePanel;
