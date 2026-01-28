/**
 * ICD-10 Viewer Sidebar Component
 * Left panel showing diagnosis groups organized by category
 */

const ICD10Sidebar = {
  // State
  selectedCategory: 'nta',
  selectedBaseCode: null,
  expandedCategories: new Set(['nta']),

  // Category definitions
  categories: [
    { id: 'approved', label: 'Approved', icon: 'check' },
    { id: 'nta', label: 'NTA', icon: 'clipboard' },
    { id: 'slp', label: 'SLP', icon: 'message' },
    { id: 'other', label: 'Other', icon: 'folder' }
  ],

  /**
   * Initialize the sidebar with data
   * @param {HTMLElement} container - The sidebar container element
   * @param {Object} data - { annotations, approvedDiagnoses }
   * @param {Function} onSelectionChange - Callback when selection changes
   */
  init(container, data, onSelectionChange) {
    console.log('[ICD10Sidebar] init called, annotations:', data.annotations?.length, 'approved:', data.approvedDiagnoses?.length);
    this.container = container;
    this.annotations = data.annotations || [];
    this.approvedDiagnoses = data.approvedDiagnoses || [];
    this.onSelectionChange = onSelectionChange;

    // Reset selection state from any previous opening
    this.selectedCategory = 'nta';
    this.selectedBaseCode = null;
    this.expandedCategories = new Set(['nta']);

    // Group annotations by category and base code
    this.groupedData = this._groupAnnotations();
    console.log('[ICD10Sidebar] Grouped data:', Object.keys(this.groupedData).map(k => `${k}:${this.groupedData[k].total}`));

    // Render initial state
    this.render();

    // Auto-select first category with items
    this._autoSelectInitial();
  },

  /**
   * Group annotations by category and then by base code (first 3 chars of ICD-10)
   * @returns {Object}
   */
  _groupAnnotations() {
    const grouped = {
      approved: { total: 0, baseCodes: {} },
      nta: { total: 0, baseCodes: {} },
      slp: { total: 0, baseCodes: {} },
      other: { total: 0, baseCodes: {} }
    };

    // Group approved diagnoses
    this.approvedDiagnoses.forEach(dx => {
      const baseCode = dx.icd10Code.substring(0, 3);
      if (!grouped.approved.baseCodes[baseCode]) {
        grouped.approved.baseCodes[baseCode] = {
          baseCode,
          items: [],
          count: 0,
          description: this._getBaseCodeDescription(baseCode, dx.description)
        };
      }
      grouped.approved.baseCodes[baseCode].items.push({
        ...dx,
        isApproved: true
      });
      grouped.approved.baseCodes[baseCode].count++;
      grouped.approved.total++;
    });

    // Group annotations by their category
    this.annotations.forEach(ann => {
      const category = ann.category || 'other';
      if (!grouped[category]) {
        grouped[category] = { total: 0, baseCodes: {} };
      }

      const baseCode = ann.icd10Code.substring(0, 3);
      if (!grouped[category].baseCodes[baseCode]) {
        grouped[category].baseCodes[baseCode] = {
          baseCode,
          items: [],
          count: 0,
          description: this._getBaseCodeDescription(baseCode, ann.description)
        };
      }

      // Check if this base code is in approved diagnoses
      const isApproved = this.approvedDiagnoses.some(
        dx => dx.icd10Code.substring(0, 3) === baseCode
      );

      grouped[category].baseCodes[baseCode].items.push({
        ...ann,
        baseCodeApproved: isApproved
      });
      grouped[category].baseCodes[baseCode].count++;
      grouped[category].baseCodes[baseCode].hasApproved = isApproved;
      grouped[category].total++;
    });

    return grouped;
  },

  /**
   * Get a short description for a base code
   * @param {string} baseCode - First 3 chars of ICD-10
   * @param {string} fullDescription - Full description of one code
   * @returns {string}
   */
  _getBaseCodeDescription(baseCode, fullDescription) {
    // Common base code descriptions
    const baseCodeDescriptions = {
      'I69': 'Sequelae of cerebrovascular disease',
      'G30': "Alzheimer's disease",
      'R13': 'Dysphagia',
      'R47': 'Speech disturbances',
      'F03': 'Dementia',
      'F09': 'Mental disorder (physiological)',
      'N18': 'Chronic kidney disease',
      'N40': 'Benign prostatic hyperplasia',
      'M54': 'Dorsalgia',
      'M62': 'Muscle disorders',
      'M46': 'Inflammatory spondylopathies',
      'Z87': 'Personal history',
      'Z94': 'Transplanted organ status',
      'E78': 'Disorders of lipoprotein metabolism',
      'E11': 'Type 2 diabetes mellitus',
      'E66': 'Overweight and obesity',
      'G47': 'Sleep disorders',
      'K21': 'Gastro-esophageal reflux disease',
      'I10': 'Essential hypertension',
      'I49': 'Cardiac arrhythmias',
      'J44': 'COPD',
      'J96': 'Respiratory failure',
      'R93': 'Abnormal diagnostic imaging',
      'R26': 'Gait and mobility abnormalities',
      'R27': 'Coordination disorders',
      'R29': 'Nervous/musculoskeletal symptoms',
      'R33': 'Retention of urine',
      'R41': 'Cognitive symptoms',
      'S12': 'Cervical vertebra fracture',
      'H91': 'Hearing loss'
    };

    // Get from lookup or derive from full description
    let desc = baseCodeDescriptions[baseCode];

    if (!desc && fullDescription) {
      // Take first part before comma or parenthesis, truncate if needed
      desc = fullDescription
        .split(/[,(]/)[0]
        .trim()
        .substring(0, 40);
      if (fullDescription.length > 40) desc += '...';
    }

    return desc || baseCode;
  },

  /**
   * Render the sidebar
   */
  render() {
    if (!this.container) return;

    const html = `
      <div class="icd10-sidebar__content">
        ${this.categories.map(cat => this._renderCategory(cat)).join('')}
      </div>
    `;

    this.container.innerHTML = html;
    this._attachEventListeners();
  },

  /**
   * Render a category section
   * @param {Object} category - Category definition
   * @returns {string} - HTML string
   */
  _renderCategory(category) {
    const data = this.groupedData[category.id];
    const count = data?.total || 0;
    const isExpanded = this.expandedCategories.has(category.id);
    const isSelected = this.selectedCategory === category.id;
    const hasItems = count > 0;

    const baseCodes = data?.baseCodes ? Object.values(data.baseCodes) : [];
    // Sort by count (descending) then alphabetically
    baseCodes.sort((a, b) => b.count - a.count || a.baseCode.localeCompare(b.baseCode));

    return `
      <div class="icd10-sidebar__category ${isSelected ? 'icd10-sidebar__category--selected' : ''}"
           data-category="${category.id}">
        <div class="icd10-sidebar__category-header ${!hasItems ? 'icd10-sidebar__category-header--empty' : ''}"
             data-category-toggle="${category.id}">
          <span class="icd10-sidebar__category-icon">${this._getCategoryIcon(category.icon)}</span>
          <span class="icd10-sidebar__category-label">${category.label}</span>
          <span class="icd10-sidebar__category-count">${count}</span>
          ${hasItems ? `
            <span class="icd10-sidebar__category-chevron ${isExpanded ? 'icd10-sidebar__category-chevron--expanded' : ''}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          ` : ''}
        </div>
        ${hasItems && isExpanded ? `
          <div class="icd10-sidebar__base-codes">
            ${baseCodes.map(bc => this._renderBaseCode(bc, category.id)).join('')}
          </div>
        ` : ''}
      </div>
    `;
  },

  /**
   * Render a base code item
   * @param {Object} baseCodeData - Base code group data
   * @param {string} categoryId - Parent category ID
   * @returns {string} - HTML string
   */
  _renderBaseCode(baseCodeData, categoryId) {
    const isSelected = this.selectedCategory === categoryId &&
                       this.selectedBaseCode === baseCodeData.baseCode;

    return `
      <div class="icd10-sidebar__base-code ${isSelected ? 'icd10-sidebar__base-code--selected' : ''}"
           data-category="${categoryId}"
           data-base-code="${baseCodeData.baseCode}">
        <div class="icd10-sidebar__base-code-main">
          <span class="icd10-sidebar__base-code-value">${baseCodeData.baseCode}</span>
          <span class="icd10-sidebar__base-code-count">${baseCodeData.count}</span>
        </div>
        <div class="icd10-sidebar__base-code-desc">${baseCodeData.description}</div>
        ${baseCodeData.hasApproved ? `
          <span class="icd10-sidebar__approved-badge" title="Base code already approved">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        ` : ''}
      </div>
    `;
  },

  /**
   * Get SVG icon for category
   * @param {string} iconName - Icon name
   * @returns {string} - SVG string
   */
  _getCategoryIcon(iconName) {
    const icons = {
      check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>',
      clipboard: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
      message: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
      folder: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>'
    };
    return icons[iconName] || '';
  },

  /**
   * Attach event listeners
   */
  _attachEventListeners() {
    // Category toggle click
    this.container.querySelectorAll('[data-category-toggle]').forEach(el => {
      el.addEventListener('click', (e) => {
        const categoryId = e.currentTarget.dataset.categoryToggle;
        this._toggleCategory(categoryId);
      });
    });

    // Base code click
    this.container.querySelectorAll('.icd10-sidebar__base-code').forEach(el => {
      el.addEventListener('click', (e) => {
        const categoryId = e.currentTarget.dataset.category;
        const baseCode = e.currentTarget.dataset.baseCode;
        this._selectBaseCode(categoryId, baseCode);
      });
    });
  },

  /**
   * Toggle category expansion
   * @param {string} categoryId - Category ID
   */
  _toggleCategory(categoryId) {
    const data = this.groupedData[categoryId];
    if (!data || data.total === 0) return;

    if (this.expandedCategories.has(categoryId)) {
      this.expandedCategories.delete(categoryId);
    } else {
      this.expandedCategories.add(categoryId);
    }

    this.render();
  },

  /**
   * Select a base code
   * @param {string} categoryId - Category ID
   * @param {string} baseCode - Base code
   */
  _selectBaseCode(categoryId, baseCode) {
    console.log('[ICD10Sidebar] _selectBaseCode:', categoryId, baseCode);
    this.selectedCategory = categoryId;
    this.selectedBaseCode = baseCode;

    // Ensure category is expanded
    this.expandedCategories.add(categoryId);

    // Get the items for this selection
    const categoryData = this.groupedData[categoryId];
    const baseCodeData = categoryData?.baseCodes?.[baseCode];
    const items = baseCodeData?.items || [];
    console.log('[ICD10Sidebar] Items for selection:', items.length, 'has callback:', !!this.onSelectionChange);

    // Re-render and notify
    this.render();

    if (this.onSelectionChange) {
      console.log('[ICD10Sidebar] Calling onSelectionChange with', items.length, 'items');
      this.onSelectionChange({
        category: categoryId,
        baseCode: baseCode,
        items: items
      });
    }
  },

  /**
   * Auto-select the first category with items
   */
  _autoSelectInitial() {
    console.log('[ICD10Sidebar] _autoSelectInitial called');
    // Find first category with items (prefer NTA)
    const preferredOrder = ['nta', 'slp', 'other', 'approved'];

    for (const catId of preferredOrder) {
      const data = this.groupedData[catId];
      console.log('[ICD10Sidebar] Checking category:', catId, 'total:', data?.total);
      if (data && data.total > 0) {
        // Get first base code
        const baseCodes = Object.keys(data.baseCodes);
        if (baseCodes.length > 0) {
          console.log('[ICD10Sidebar] Auto-selecting:', catId, baseCodes[0]);
          this._selectBaseCode(catId, baseCodes[0]);
          return;
        }
      }
    }
    console.log('[ICD10Sidebar] No category with items found');
  },

  /**
   * Update data (e.g., after approval)
   * @param {Object} data - { annotations, approvedDiagnoses }
   */
  updateData(data) {
    this.annotations = data.annotations || [];
    this.approvedDiagnoses = data.approvedDiagnoses || [];
    this.groupedData = this._groupAnnotations();
    this.render();
  },

  /**
   * Get current selection
   * @returns {Object}
   */
  getSelection() {
    return {
      category: this.selectedCategory,
      baseCode: this.selectedBaseCode
    };
  },

  /**
   * Get all annotations for a specific base code across all categories
   * @param {string} baseCode - Base code
   * @returns {Array}
   */
  getAnnotationsForBaseCode(baseCode) {
    const results = [];
    for (const [categoryId, categoryData] of Object.entries(this.groupedData)) {
      const bcData = categoryData.baseCodes?.[baseCode];
      if (bcData) {
        results.push(...bcData.items);
      }
    }
    return results;
  }
};

// Expose globally
window.ICD10Sidebar = ICD10Sidebar;
