/**
 * ICD-10 PDF Viewer Component
 * Right panel for viewing PDFs with highlight overlays
 */

const ICD10PDFViewer = {
  // State
  pdfDoc: null,
  currentPage: 1,
  totalPages: 1,
  currentZoom: 100,
  currentDocumentId: null,
  highlights: [],
  searchTerms: [],
  zoomLevels: [50, 75, 100, 125, 150, 200],

  /**
   * Initialize the PDF viewer
   * @param {HTMLElement} container - The viewer container element
   */
  init(container) {
    this.container = container;
    this.render();
  },

  /**
   * Load and display a document
   * @param {Object} document - Document object with signedUrl
   * @param {Array} wordBlocks - Word blocks for highlighting (optional)
   * @param {number} targetPage - Page to display (optional)
   * @param {string} searchText - Text to search and highlight (optional)
   */
  async loadDocument(document, wordBlocks = [], targetPage = 1, searchText = '') {
    console.log('[ICD10PDFViewer] loadDocument called');
    console.log('[ICD10PDFViewer] Document:', document?.id, 'URL:', document?.signedUrl?.substring(0, 50) + '...');
    console.log('[ICD10PDFViewer] Word blocks:', wordBlocks?.length, wordBlocks);
    console.log('[ICD10PDFViewer] Target page:', targetPage, 'Search text:', searchText?.substring(0, 50));

    if (!document || !document.signedUrl) {
      console.error('[ICD10PDFViewer] No document URL available');
      this._renderError('No document URL available');
      return;
    }

    // Parse search text into terms for text-based highlighting
    this.searchTerms = this._parseSearchTerms(searchText);
    console.log('[ICD10PDFViewer] Parsed search terms:', this.searchTerms);

    // If same document, just update highlights and page
    if (this.currentDocumentId === document.id && this.pdfDoc) {
      console.log('[ICD10PDFViewer] Same document, just updating highlights');
      this.highlights = wordBlocks;
      await this._renderPage(targetPage);
      return;
    }

    this.currentDocumentId = document.id;
    this.highlights = wordBlocks;
    this._renderLoading();

    try {
      // Configure PDF.js worker
      if (typeof pdfjsLib !== 'undefined') {
        const workerSrc = chrome.runtime.getURL('lib/pdf.worker.min.js');
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
      } else {
        throw new Error('PDF.js library not loaded');
      }

      // Load PDF document
      const loadingTask = pdfjsLib.getDocument(document.signedUrl);
      this.pdfDoc = await loadingTask.promise;
      this.totalPages = this.pdfDoc.numPages;
      this.currentPage = Math.min(targetPage, this.totalPages);

      // Render the PDF
      this._renderPDFContainer();
      await this._renderPage(this.currentPage);

    } catch (error) {
      console.error('ICD10PDFViewer: Failed to load PDF:', error);
      this._renderError(`Failed to load PDF: ${error.message}`);
    }
  },

  /**
   * Update highlights on current document
   * @param {Array} wordBlocks - New word blocks to highlight
   * @param {number} targetPage - Page to navigate to
   */
  async updateHighlights(wordBlocks, targetPage = null) {
    this.highlights = wordBlocks || [];

    if (this.pdfDoc) {
      const page = targetPage || (wordBlocks.length > 0 ? wordBlocks[0].p : this.currentPage);
      await this._renderPage(page);
    }
  },

  /**
   * Render loading state with skeleton
   */
  _renderLoading() {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="icd10-pdf-viewer__loading">
        <div class="icd10-pdf-viewer__loading-controls">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 32px; height: 32px; background: var(--super-gray-200); border-radius: 6px;"></div>
            <div style="width: 60px; height: 20px; background: var(--super-gray-200); border-radius: 4px;"></div>
            <div style="width: 32px; height: 32px; background: var(--super-gray-200); border-radius: 6px;"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 32px; height: 32px; background: var(--super-gray-200); border-radius: 6px;"></div>
            <div style="width: 50px; height: 20px; background: var(--super-gray-200); border-radius: 4px;"></div>
            <div style="width: 32px; height: 32px; background: var(--super-gray-200); border-radius: 6px;"></div>
          </div>
        </div>
        <div class="icd10-pdf-viewer__loading-skeleton">
          <div class="icd10-pdf-viewer__skeleton-shimmer"></div>
          <div class="icd10-pdf-viewer__skeleton-lines">
            <div class="icd10-pdf-viewer__skeleton-line"></div>
            <div class="icd10-pdf-viewer__skeleton-line"></div>
            <div class="icd10-pdf-viewer__skeleton-line"></div>
            <div class="icd10-pdf-viewer__skeleton-line"></div>
            <div class="icd10-pdf-viewer__skeleton-line"></div>
            <div class="icd10-pdf-viewer__skeleton-line"></div>
            <div class="icd10-pdf-viewer__skeleton-line"></div>
            <div class="icd10-pdf-viewer__skeleton-line"></div>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render error state
   * @param {string} message - Error message
   */
  _renderError(message) {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="icd10-pdf-viewer__error">
        <div class="icd10-pdf-viewer__error-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <p class="icd10-pdf-viewer__error-text">${this._escapeHtml(message)}</p>
      </div>
    `;
  },

  /**
   * Render empty state
   */
  render() {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="icd10-pdf-viewer__empty">
        <div class="icd10-pdf-viewer__empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
        </div>
        <p class="icd10-pdf-viewer__empty-text">Select an evidence card to view the source document</p>
      </div>
    `;
  },

  /**
   * Render PDF container with controls
   */
  _renderPDFContainer() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="icd10-pdf-viewer__controls">
        <div class="icd10-pdf-viewer__page-nav">
          <button class="icd10-pdf-viewer__nav-btn" data-action="prev" title="Previous page">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <span class="icd10-pdf-viewer__page-info">
            <span class="icd10-pdf-viewer__page-current">${this.currentPage}</span>
            /
            <span class="icd10-pdf-viewer__page-total">${this.totalPages}</span>
          </span>
          <button class="icd10-pdf-viewer__nav-btn" data-action="next" title="Next page">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <div class="icd10-pdf-viewer__zoom">
          <button class="icd10-pdf-viewer__zoom-btn" data-action="zoom-out" title="Zoom out">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
          <span class="icd10-pdf-viewer__zoom-level">${this.currentZoom}%</span>
          <button class="icd10-pdf-viewer__zoom-btn" data-action="zoom-in" title="Zoom in">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
        </div>
      </div>
      <div class="icd10-pdf-viewer__canvas-container">
        <div class="icd10-pdf-viewer__canvas-wrapper">
          <canvas class="icd10-pdf-viewer__canvas"></canvas>
          <canvas class="icd10-pdf-viewer__highlight-canvas"></canvas>
        </div>
      </div>
    `;

    this._attachControlListeners();
  },

  /**
   * Render a specific page
   * @param {number} pageNum - Page number to render
   */
  async _renderPage(pageNum) {
    console.log('[ICD10PDFViewer] _renderPage called for page:', pageNum);
    if (!this.pdfDoc) {
      console.warn('[ICD10PDFViewer] No pdfDoc loaded');
      return;
    }

    const validPageNum = Math.max(1, Math.min(pageNum, this.totalPages));
    this.currentPage = validPageNum;
    console.log('[ICD10PDFViewer] Rendering page:', validPageNum, 'of', this.totalPages);

    // Update page indicator
    const pageCurrentEl = this.container.querySelector('.icd10-pdf-viewer__page-current');
    if (pageCurrentEl) {
      pageCurrentEl.textContent = this.currentPage;
    }

    // Update nav button states
    const prevBtn = this.container.querySelector('[data-action="prev"]');
    const nextBtn = this.container.querySelector('[data-action="next"]');
    if (prevBtn) prevBtn.disabled = this.currentPage === 1;
    if (nextBtn) nextBtn.disabled = this.currentPage === this.totalPages;

    try {
      const page = await this.pdfDoc.getPage(this.currentPage);

      // Calculate viewport
      const container = this.container.querySelector('.icd10-pdf-viewer__canvas-container');
      const containerWidth = container.clientWidth - 40; // padding
      const baseViewport = page.getViewport({ scale: 1 });
      const baseScale = containerWidth / baseViewport.width;
      const scale = baseScale * (this.currentZoom / 100);
      const viewport = page.getViewport({ scale });

      // Get canvases
      const canvas = this.container.querySelector('.icd10-pdf-viewer__canvas');
      const highlightCanvas = this.container.querySelector('.icd10-pdf-viewer__highlight-canvas');

      if (!canvas || !highlightCanvas) return;

      const ctx = canvas.getContext('2d');
      const highlightCtx = highlightCanvas.getContext('2d');

      // Set canvas dimensions
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      highlightCanvas.width = viewport.width;
      highlightCanvas.height = viewport.height;

      // Clear canvases
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      highlightCtx.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height);

      // Render PDF page
      await page.render({
        canvasContext: ctx,
        viewport: viewport
      }).promise;

      // Draw highlights - either from word blocks or text search
      let highlightRects = [];

      if (this.highlights.length > 0) {
        // Use provided word blocks
        highlightRects = this._drawHighlights(highlightCtx, viewport.width, viewport.height);
      } else if (this.searchTerms && this.searchTerms.length > 0) {
        // Search for text in PDF and highlight matches
        highlightRects = await this._highlightTextMatches(page, highlightCtx, viewport);
      }

      // Auto-scroll to first highlight
      if (highlightRects.length > 0) {
        this._scrollToRect(highlightRects[0]);
      }

    } catch (error) {
      console.error('ICD10PDFViewer: Failed to render page:', error);
    }
  },

  /**
   * Draw highlight rectangles
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @returns {Array} - Array of highlight rectangles with pixel coordinates
   */
  _drawHighlights(ctx, width, height) {
    console.log('[ICD10PDFViewer] _drawHighlights called. Canvas:', width, 'x', height, 'Page:', this.currentPage);
    console.log('[ICD10PDFViewer] All highlights:', this.highlights);

    // Filter highlights for current page
    const pageHighlights = this.highlights.filter(h => h.p === this.currentPage);
    console.log('[ICD10PDFViewer] Highlights for page', this.currentPage, ':', pageHighlights.length);

    if (pageHighlights.length === 0) return [];

    const rects = [];

    pageHighlights.forEach((highlight, index) => {
      console.log('[ICD10PDFViewer] Drawing highlight', index, ':', highlight);

      // First highlight is "active" (selected evidence)
      const isActive = index === 0;

      // Set colors
      if (isActive) {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.35)'; // Blue for active
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
      } else {
        ctx.fillStyle = 'rgba(254, 240, 138, 0.4)'; // Yellow for others
        ctx.strokeStyle = 'rgba(234, 179, 8, 0.6)';
      }
      ctx.lineWidth = 2;

      // Calculate pixel coordinates from normalized (0-1) values
      const x = highlight.x * width;
      const y = highlight.y * height;
      const w = highlight.w * width;
      const h = highlight.h * height;

      console.log('[ICD10PDFViewer] Pixel coords: x=', x, 'y=', y, 'w=', w, 'h=', h);

      // Draw filled rectangle
      ctx.fillRect(x, y, w, h);

      // Draw border
      ctx.strokeRect(x, y, w, h);

      // Store rect for scrolling
      rects.push({ x, y, w, h, isActive });
    });

    return rects;
  },

  /**
   * Scroll container to show a highlight
   * @param {Object} highlight - Highlight object with x, y, w, h
   * @param {number} canvasWidth - Canvas width
   * @param {number} canvasHeight - Canvas height
   */
  _scrollToHighlight(highlight, canvasWidth, canvasHeight) {
    const container = this.container.querySelector('.icd10-pdf-viewer__canvas-container');
    if (!container) return;

    // Calculate highlight position in pixels
    const highlightY = highlight.y * canvasHeight;

    // Scroll to center the highlight
    const scrollTop = highlightY - (container.clientHeight / 3);

    container.scrollTo({
      top: Math.max(0, scrollTop),
      behavior: 'smooth'
    });
  },

  /**
   * Attach control event listeners
   */
  _attachControlListeners() {
    // Page navigation
    this.container.querySelector('[data-action="prev"]')?.addEventListener('click', () => {
      if (this.currentPage > 1) {
        this._renderPage(this.currentPage - 1);
      }
    });

    this.container.querySelector('[data-action="next"]')?.addEventListener('click', () => {
      if (this.currentPage < this.totalPages) {
        this._renderPage(this.currentPage + 1);
      }
    });

    // Zoom controls
    this.container.querySelector('[data-action="zoom-out"]')?.addEventListener('click', () => {
      this._changeZoom(-1);
    });

    this.container.querySelector('[data-action="zoom-in"]')?.addEventListener('click', () => {
      this._changeZoom(1);
    });
  },

  /**
   * Change zoom level
   * @param {number} direction - 1 for zoom in, -1 for zoom out
   */
  _changeZoom(direction) {
    const currentIndex = this.zoomLevels.indexOf(this.currentZoom);
    let newIndex = currentIndex + direction;

    // Clamp to valid range
    newIndex = Math.max(0, Math.min(newIndex, this.zoomLevels.length - 1));

    if (newIndex === currentIndex) return;

    this.currentZoom = this.zoomLevels[newIndex];

    // Update zoom display
    const zoomLevel = this.container.querySelector('.icd10-pdf-viewer__zoom-level');
    if (zoomLevel) {
      zoomLevel.textContent = `${this.currentZoom}%`;
    }

    // Re-render current page with new zoom
    this._renderPage(this.currentPage);
  },

  /**
   * Navigate to a specific page
   * @param {number} pageNum - Page number
   */
  goToPage(pageNum) {
    if (this.pdfDoc && pageNum >= 1 && pageNum <= this.totalPages) {
      this._renderPage(pageNum);
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
  },

  /**
   * Parse search text into terms for highlighting
   * @param {string} searchText - Raw text to search for
   * @returns {Array} - Array of search terms
   */
  _parseSearchTerms(searchText) {
    if (!searchText || typeof searchText !== 'string') return [];

    // Clean up the text
    const cleaned = searchText
      .replace(/[""]/g, '"')  // Normalize quotes
      .replace(/['']/g, "'")
      .trim();

    if (cleaned.length < 3) return [];

    // Extract meaningful phrases/words (at least 4 chars)
    const terms = [];

    // First, try the whole phrase if it's reasonable length
    if (cleaned.length >= 5 && cleaned.length <= 100) {
      terms.push(cleaned.toLowerCase());
    }

    // Also extract significant words (longer than 4 chars, not common words)
    const stopWords = new Set(['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'was', 'her', 'has', 'his', 'have', 'been', 'this', 'that', 'with', 'from', 'were', 'they', 'will', 'would', 'could', 'should', 'which', 'their', 'there', 'about']);

    const words = cleaned.toLowerCase().split(/\s+/);
    words.forEach(word => {
      // Clean punctuation from word
      const cleanWord = word.replace(/[.,;:!?'"()[\]{}]/g, '');
      if (cleanWord.length >= 4 && !stopWords.has(cleanWord)) {
        if (!terms.includes(cleanWord)) {
          terms.push(cleanWord);
        }
      }
    });

    return terms;
  },

  /**
   * Highlight text matches on PDF page using PDF.js text content
   * @param {Object} page - PDF.js page object
   * @param {CanvasRenderingContext2D} ctx - Highlight canvas context
   * @param {Object} viewport - PDF.js viewport
   * @returns {Array} - Array of highlight rectangles
   */
  async _highlightTextMatches(page, ctx, viewport) {
    console.log('[ICD10PDFViewer] _highlightTextMatches called, searchTerms:', this.searchTerms);
    if (!this.searchTerms || this.searchTerms.length === 0) return [];

    try {
      // Get text content from page
      const textContent = await page.getTextContent();
      const textItems = textContent.items;
      console.log('[ICD10PDFViewer] Text items on page:', textItems?.length);

      if (!textItems || textItems.length === 0) return [];

      const rects = [];
      const pageText = textItems.map(item => item.str).join(' ').toLowerCase();

      // Check if any search term exists on this page
      const matchingTerms = this.searchTerms.filter(term => pageText.includes(term));
      console.log('[ICD10PDFViewer] Matching terms found:', matchingTerms.length);
      if (matchingTerms.length === 0) return [];

      // Process each text item to find matches
      textItems.forEach((item, itemIndex) => {
        const text = item.str.toLowerCase();
        const transform = item.transform;

        // Get text position from transform matrix
        // transform = [scaleX, skewY, skewX, scaleY, translateX, translateY]
        const x = transform[4];
        const y = transform[5];
        const fontSize = Math.sqrt(transform[0] * transform[0] + transform[1] * transform[1]);

        // Approximate width based on text length and font size
        const width = item.width || (text.length * fontSize * 0.5);
        const height = item.height || fontSize * 1.2;

        // Check for matches in this text item
        matchingTerms.forEach((term, termIndex) => {
          if (text.includes(term)) {
            // Convert PDF coordinates to canvas coordinates
            const [canvasX, canvasY] = viewport.convertToViewportPoint(x, y);

            // Adjust coordinates - PDF y is from bottom, canvas y is from top
            const rect = {
              x: canvasX,
              y: canvasY - (height * viewport.scale),
              w: width * viewport.scale,
              h: height * viewport.scale,
              isActive: termIndex === 0 && rects.length === 0 // First match is active
            };

            console.log('[ICD10PDFViewer] Text match found:', term, 'in', item.str);
            console.log('[ICD10PDFViewer] PDF coords: x=', x, 'y=', y, 'fontSize=', fontSize);
            console.log('[ICD10PDFViewer] Canvas coords: x=', rect.x, 'y=', rect.y, 'w=', rect.w, 'h=', rect.h);

            // Draw highlight
            if (rect.isActive) {
              ctx.fillStyle = 'rgba(59, 130, 246, 0.35)'; // Blue for active
              ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
            } else {
              ctx.fillStyle = 'rgba(254, 240, 138, 0.4)'; // Yellow for others
              ctx.strokeStyle = 'rgba(234, 179, 8, 0.6)';
            }
            ctx.lineWidth = 2;

            // Draw filled rectangle with some padding
            const padding = 2;
            ctx.fillRect(rect.x - padding, rect.y - padding, rect.w + padding * 2, rect.h + padding * 2);
            ctx.strokeRect(rect.x - padding, rect.y - padding, rect.w + padding * 2, rect.h + padding * 2);

            rects.push(rect);
          }
        });
      });

      console.log('[ICD10PDFViewer] Total text highlights drawn:', rects.length);
      return rects;

    } catch (error) {
      console.error('[ICD10PDFViewer] Text highlight error:', error);
      return [];
    }
  },

  /**
   * Scroll to a specific rectangle
   * @param {Object} rect - Rectangle with x, y, w, h in pixel coordinates
   */
  _scrollToRect(rect) {
    if (!rect) return;

    const container = this.container.querySelector('.icd10-pdf-viewer__canvas-container');
    if (!container) return;

    // Account for container padding (20px) when calculating scroll position
    const paddingTop = 20;
    // Scroll to position the highlight in the upper third of the view
    const scrollTop = rect.y + paddingTop - (container.clientHeight / 3);

    console.log('[ICD10PDFViewer] Scrolling to rect:', rect.y, 'calculated scrollTop:', scrollTop);

    container.scrollTo({
      top: Math.max(0, scrollTop),
      behavior: 'smooth'
    });
  },

  /**
   * Clear the viewer
   */
  clear() {
    this.pdfDoc = null;
    this.currentDocumentId = null;
    this.highlights = [];
    this.searchTerms = [];
    this.currentPage = 1;
    this.totalPages = 1;
    this.render();
  }
};

// Expose globally
window.ICD10PDFViewer = ICD10PDFViewer;
