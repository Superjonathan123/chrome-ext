/**
 * ICD-10 Viewer - Main Module
 * Full-screen modal with three-panel ICD-10 coding interface
 */

const ICD10Viewer = {
  // State
  isOpen: false,
  patientId: null,
  patientName: null,
  facilityName: null,
  orgSlug: null,
  annotations: [],
  approvedDiagnoses: [],

  // DOM elements
  modal: null,
  sidebar: null,
  evidencePanel: null,
  pdfViewer: null,

  /**
   * Open the ICD-10 viewer modal
   */
  async open() {
    if (this.isOpen) return;

    // Gather context from current page
    const context = await this._gatherContext();
    if (!context.patientId) {
      console.error('ICD10Viewer: Could not determine patient ID');
      this._showError('Could not determine patient information');
      return;
    }

    this.patientId = context.patientId;
    this.patientName = context.patientName;
    this.facilityName = context.facilityName;
    this.orgSlug = context.orgSlug;

    // Create and show modal
    this._createModal();
    this.isOpen = true;

    // Load data
    await this._loadData();
  },

  /**
   * Close the viewer modal
   */
  close() {
    if (!this.isOpen || !this.modal) return;

    // Animate out
    this.modal.classList.remove('icd10-viewer-modal--visible');
    this.modal.classList.add('icd10-viewer-modal--closing');

    setTimeout(() => {
      this.modal.remove();
      this.modal = null;
      this.isOpen = false;
      document.body.style.overflow = '';

      // Clear component state
      ICD10Sidebar.selectedCategory = 'nta';
      ICD10Sidebar.selectedBaseCode = null;
      ICD10EvidencePanel.clear();
      ICD10PDFViewer.clear();
    }, 200);
  },

  /**
   * Gather context from the current page
   * @returns {Object}
   */
  async _gatherContext() {
    // Get patient ID from URL or page
    // PCC uses various parameter names: ESOLclientid, clientId, patientId, residentId
    const urlParams = new URLSearchParams(window.location.search);
    let patientId = urlParams.get('ESOLclientid') ||
                    urlParams.get('clientId') ||
                    urlParams.get('patientId') ||
                    urlParams.get('residentId');

    // Try to get from page elements if not in URL
    if (!patientId) {
      // Look for patient ID in common PCC locations
      const patientLink = document.querySelector('[id*="patientId"], [data-patient-id]');
      if (patientLink) {
        patientId = patientLink.getAttribute('data-patient-id') ||
                    patientLink.textContent?.match(/\d+/)?.[0];
      }

      // Try to get from SuperOverlay if available
      if (!patientId && window.SuperOverlay?.patientId) {
        patientId = window.SuperOverlay.patientId;
      }
    }

    // Get patient name from page - PCC uses various selectors
    let patientName = 'Unknown Patient';
    const patientNameSelectors = [
      '#patientNameDisplay',
      '.patientBanner .name',
      '#patientName',
      '.patient-name',
      '[class*="patientName"]',
      '[class*="patient-name"]',
      '.demographicBanner .name',
      '#pccPatientName',
      '.header-patient-name',
      // Try to find in header area
      '#headerPatientInfo',
      '.patientHeader .name'
    ];

    for (const selector of patientNameSelectors) {
      const el = document.querySelector(selector);
      if (el && el.textContent?.trim()) {
        patientName = el.textContent.trim();
        break;
      }
    }

    // Also try to get from page title or URL if still unknown
    if (patientName === 'Unknown Patient') {
      // Some PCC pages have patient name in title
      const titleMatch = document.title?.match(/^([^-|]+)/);
      if (titleMatch && titleMatch[1].trim().length > 3) {
        patientName = titleMatch[1].trim();
      }
    }

    // Get facility and org from API params helper
    let facilityName = null;
    let orgSlug = null;

    if (typeof window.getCurrentParams === 'function') {
      try {
        const params = await window.getCurrentParams();
        facilityName = params.facilityName;
        orgSlug = params.orgSlug;
      } catch (e) {
        console.warn('ICD10Viewer: Could not get API params:', e);
      }
    }

    // Fallback facility detection
    if (!facilityName) {
      const facLink = document.getElementById('pccFacLink');
      facilityName = facLink?.title || facLink?.textContent?.trim();
    }

    return {
      patientId,
      patientName,
      facilityName,
      orgSlug
    };
  },

  /**
   * Create the modal DOM structure
   */
  _createModal() {
    this.modal = document.createElement('div');
    this.modal.className = 'icd10-viewer-modal';
    this.modal.innerHTML = `
      <div class="icd10-viewer-modal__backdrop"></div>
      <div class="icd10-viewer-modal__container">
        <div class="icd10-viewer__header">
          <button class="icd10-viewer__back-btn" title="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </button>
          <div class="icd10-viewer__title">
            <span class="icd10-viewer__title-text">ICD-10 Viewer</span>
            <span class="icd10-viewer__patient-info">${this._escapeHtml(this.patientName)}</span>
          </div>
          <div class="icd10-viewer__header-actions">
            <span class="icd10-viewer__annotation-count">
              <span class="icd10-viewer__annotation-count-num">0</span> annotations
            </span>
            <button class="icd10-viewer__close-btn" title="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="icd10-viewer__body">
          <div class="icd10-viewer__sidebar"></div>
          <div class="icd10-viewer__evidence-panel"></div>
          <div class="icd10-viewer__pdf-viewer"></div>
        </div>
      </div>
    `;

    // Store panel references
    this.sidebar = this.modal.querySelector('.icd10-viewer__sidebar');
    this.evidencePanel = this.modal.querySelector('.icd10-viewer__evidence-panel');
    this.pdfViewer = this.modal.querySelector('.icd10-viewer__pdf-viewer');

    // Attach event listeners
    this._attachEventListeners();

    // Add to DOM
    document.body.appendChild(this.modal);
    document.body.style.overflow = 'hidden';

    // Trigger animation
    requestAnimationFrame(() => {
      this.modal.classList.add('icd10-viewer-modal--visible');
    });

    // Show loading state
    this._showLoading();
  },

  /**
   * Attach modal event listeners
   */
  _attachEventListeners() {
    // Close button
    this.modal.querySelector('.icd10-viewer__close-btn').addEventListener('click', () => {
      this.close();
    });

    // Back button
    this.modal.querySelector('.icd10-viewer__back-btn').addEventListener('click', () => {
      this.close();
    });

    // Backdrop click
    this.modal.querySelector('.icd10-viewer-modal__backdrop').addEventListener('click', () => {
      this.close();
    });

    // Escape key
    this._escapeHandler = (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
        document.removeEventListener('keydown', this._escapeHandler);
      }
    };
    document.addEventListener('keydown', this._escapeHandler);
  },

  /**
   * Show loading state in all panels
   */
  _showLoading() {
    const loadingHTML = `
      <div class="icd10-viewer__loading">
        <div class="icd10-viewer__spinner"></div>
        <span>Loading...</span>
      </div>
    `;

    this.sidebar.innerHTML = loadingHTML;
    this.evidencePanel.innerHTML = loadingHTML;
    this.pdfViewer.innerHTML = loadingHTML;
  },

  /**
   * Load annotations and diagnoses data
   */
  async _loadData() {
    try {
      // Fetch data in parallel
      const [annotations, approvedDiagnoses] = await Promise.all([
        ICD10API.getAnnotations(this.patientId, this.facilityName, this.orgSlug),
        ICD10API.getApprovedDiagnoses(this.patientId, this.facilityName, this.orgSlug)
      ]);

      this.annotations = annotations || [];
      this.approvedDiagnoses = approvedDiagnoses || [];

      // Update annotation count
      const countEl = this.modal.querySelector('.icd10-viewer__annotation-count-num');
      if (countEl) {
        countEl.textContent = this.annotations.length;
      }

      // Initialize components
      this._initializeComponents();

    } catch (error) {
      console.error('ICD10Viewer: Failed to load data:', error);
      this._showError(`Failed to load ICD-10 data: ${error.message}`);
    }
  },

  /**
   * Initialize the three panel components
   */
  _initializeComponents() {
    console.log('[ICD10Viewer] _initializeComponents: annotations=', this.annotations?.length, 'approved=', this.approvedDiagnoses?.length);

    // Initialize evidence panel FIRST so callback is ready when sidebar auto-selects
    console.log('[ICD10Viewer] Initializing evidence panel...');
    ICD10EvidencePanel.init(
      this.evidencePanel,
      (item) => this._handleEvidenceSelect(item),
      (item) => this._handleApprove(item)
    );

    // Initialize PDF viewer
    console.log('[ICD10Viewer] Initializing PDF viewer...');
    ICD10PDFViewer.init(this.pdfViewer);

    // Initialize sidebar LAST - it will auto-select and trigger the chain
    console.log('[ICD10Viewer] Initializing sidebar...');
    ICD10Sidebar.init(
      this.sidebar,
      {
        annotations: this.annotations,
        approvedDiagnoses: this.approvedDiagnoses
      },
      (selection) => this._handleSidebarSelection(selection)
    );

    console.log('[ICD10Viewer] All components initialized');
  },

  /**
   * Handle sidebar selection change
   * @param {Object} selection - { category, baseCode, items }
   */
  _handleSidebarSelection(selection) {
    console.log('[ICD10Viewer] _handleSidebarSelection:', selection.category, selection.baseCode, selection.items?.length, 'items');
    // Update evidence panel with selected items
    ICD10EvidencePanel.updateItems(selection.items, true);
  },

  /**
   * Handle evidence card selection
   * @param {Object} item - Selected annotation item (normalized by evidence panel)
   */
  async _handleEvidenceSelect(item) {
    console.log('[ICD10Viewer] _handleEvidenceSelect called with item:', item?.id, item?.documentId);

    if (!item || !item.documentId) {
      console.log('[ICD10Viewer] No item or documentId, showing empty state');
      ICD10PDFViewer.render(); // Show empty state
      return;
    }

    // Show loading state
    ICD10PDFViewer._renderLoading();

    try {
      // Fetch document and word blocks in parallel
      console.log('[ICD10Viewer] Fetching document and word blocks for:', item.documentId);
      const [document, allWordBlocks] = await Promise.all([
        ICD10API.getDocument(item.documentId, this.facilityName, this.orgSlug),
        ICD10API.getWordBlocks(item.documentId, this.facilityName, this.orgSlug)
      ]);

      console.log('[ICD10Viewer] Document fetched:', document?.id);
      console.log('[ICD10Viewer] Word blocks fetched:', allWordBlocks?.length, 'blocks');
      console.log('[ICD10Viewer] Item wordBlockIndices:', item.wordBlockIndices);

      // Resolve wordBlockIndices to actual word block coordinates
      let wordBlocks = [];
      if (item.wordBlockIndices && Array.isArray(item.wordBlockIndices) && allWordBlocks.length > 0) {
        // Map indices to actual word block objects
        wordBlocks = item.wordBlockIndices
          .map(index => allWordBlocks.find(wb => wb.index === index))
          .filter(Boolean)
          .map(wb => ({
            // Normalize field names for PDF viewer: API uses width/height/page, viewer expects w/h/p
            x: wb.x,
            y: wb.y,
            w: wb.width,
            h: wb.height,
            p: wb.page,
            text: wb.text
          }));
        console.log('[ICD10Viewer] Resolved word blocks:', wordBlocks.length, 'highlights');
      } else if (item.wordBlocks && Array.isArray(item.wordBlocks)) {
        // Fallback: use wordBlocks directly if present (mock data format)
        wordBlocks = item.wordBlocks;
        console.log('[ICD10Viewer] Using direct wordBlocks:', wordBlocks.length);
      }

      // Determine target page
      const targetPage = item.pageNumber || (wordBlocks.length > 0 ? wordBlocks[0].p : 1) || 1;
      console.log('[ICD10Viewer] Target page:', targetPage);

      // Get search text for text-based highlighting (fallback when no word blocks)
      const searchText = item.quoteText || item.description || '';

      // Load document in PDF viewer
      await ICD10PDFViewer.loadDocument(document, wordBlocks, targetPage, searchText);
      console.log('[ICD10Viewer] PDF loaded successfully');

    } catch (error) {
      console.error('[ICD10Viewer] Failed to load document:', error);
      ICD10PDFViewer._renderError('Failed to load document: ' + error.message);
    }
  },

  /**
   * Handle approve button click
   * @param {Object} item - Annotation item to approve
   */
  async _handleApprove(item) {
    try {
      await ICD10API.approveDiagnosis(
        this.patientId,
        item,
        this.facilityName,
        this.orgSlug
      );

      // Add to approved diagnoses locally
      const approvedDx = {
        icd10Code: item.icd10Code,
        description: item.description,
        onsetDate: new Date().toISOString().split('T')[0],
        category: item.category
      };
      this.approvedDiagnoses.push(approvedDx);

      // Remove from annotations (move to approved)
      const index = this.annotations.findIndex(a => a.id === item.id);
      if (index > -1) {
        this.annotations.splice(index, 1);
      }

      // Update sidebar with new data
      ICD10Sidebar.updateData({
        annotations: this.annotations,
        approvedDiagnoses: this.approvedDiagnoses
      });

      // Mark as approved in evidence panel
      ICD10EvidencePanel.markApproved(item.id);

      // Add to demo page table if it exists
      this._addToPageTable(approvedDx);

      console.log('ICD10Viewer: Approved diagnosis:', item.icd10Code);

    } catch (error) {
      console.error('ICD10Viewer: Failed to approve:', error);
      throw error; // Re-throw so evidence panel shows error state
    }
  },

  /**
   * Add approved diagnosis to the page table (for demo page)
   * @param {Object} diagnosis - Approved diagnosis object
   */
  _addToPageTable(diagnosis) {
    // Look for the medical diagnosis listing table
    const table = document.querySelector('#meddiaglisting tbody');
    if (!table) {
      console.log('ICD10Viewer: Medical diagnosis table not found, skipping page update');
      return;
    }

    // Format the date
    const date = new Date(diagnosis.onsetDate);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const currentDate = new Date();
    const createdDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

    // Get category display name and NTA points if applicable
    let categoryDisplay = '';
    let ntaPoints = '';
    if (diagnosis.category === 'nta') {
      categoryDisplay = 'Pulmonary'; // Default, could be more sophisticated
      ntaPoints = 'NTA (2 pts)';
    } else if (diagnosis.category === 'slp') {
      categoryDisplay = 'Speech/Language';
    } else {
      categoryDisplay = 'Medical Management';
    }

    // Create the new row
    const newRow = document.createElement('tr');
    newRow.className = 'primaryDiagRank';
    newRow.style.backgroundColor = '#e8f5e9'; // Light green to highlight new addition
    newRow.setAttribute('valign', 'top');
    newRow.innerHTML = `
      <td>
        <a href="javascript:void(0)">view</a>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>${this._escapeHtml(diagnosis.icd10Code)}</td>
      <td></td>
      <td>${this._escapeHtml(diagnosis.description)}</td>
      <td>${this._escapeHtml(ntaPoints)}</td>
      <td>${this._escapeHtml(categoryDisplay)}</td>
      <td>${formattedDate}</td>
      <td>Diagnosis A</td>
      <td>Admission</td>
      <td>${createdDate}</td>
      <td>super-ai</td>
    `;

    // Insert at the beginning of the table
    table.insertBefore(newRow, table.firstChild);

    // Fade out the highlight after a delay
    setTimeout(() => {
      newRow.style.transition = 'background-color 1s ease-in-out';
      newRow.style.backgroundColor = '';
    }, 2000);

    console.log('ICD10Viewer: Added diagnosis to page table:', diagnosis.icd10Code);
  },

  /**
   * Show error message in modal
   * @param {string} message - Error message
   */
  _showError(message) {
    if (!this.modal) {
      // Show toast if modal not open
      if (typeof window.showToast === 'function') {
        window.showToast(message, 'error');
      } else {
        alert(message);
      }
      return;
    }

    const errorHTML = `
      <div class="icd10-viewer__error">
        <div class="icd10-viewer__error-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <p class="icd10-viewer__error-text">${this._escapeHtml(message)}</p>
        <button class="icd10-viewer__error-retry" onclick="ICD10Viewer._loadData()">
          Retry
        </button>
      </div>
    `;

    const body = this.modal.querySelector('.icd10-viewer__body');
    if (body) {
      body.innerHTML = errorHTML;
    }
  },

  /**
   * Escape HTML
   * @param {string} str - String to escape
   * @returns {string}
   */
  _escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};

// Expose globally
window.ICD10Viewer = ICD10Viewer;
