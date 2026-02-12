/**
 * ICD-10 Viewer Sidebar Component
 * Left panel showing diagnosis groups organized by category
 * Supports topRanked groups, flat categories, and speculative section
 */

const ICD10Sidebar = {
  // State
  selectedCategory: 'topRanked',
  selectedBaseCode: null,
  selectedGroupId: null,
  expandedCategories: new Set(['topRanked']),
  expandedGroups: new Set(),

  // Category definitions
  categories: [
    { id: 'topRanked', label: 'Top Ranked', icon: 'star' },
    { id: 'approved', label: 'Approved', icon: 'check' },
    { id: 'nta', label: 'NTA', icon: 'clipboard' },
    { id: 'slp', label: 'SLP', icon: 'message' },
    { id: 'other', label: 'Other', icon: 'folder' },
    { id: 'speculative', label: 'Speculative', icon: 'alert' }
  ],

  /**
   * Initialize the sidebar with data
   * @param {HTMLElement} container - The sidebar container element
   * @param {Object} data - { topRanked, annotations, approvedDiagnoses, counts }
   * @param {Function} onSelectionChange - Callback when selection changes
   */
  init(container, data, onSelectionChange) {
    console.log('[ICD10Sidebar] init called, topRanked:', data.topRanked?.length, 'annotations:', data.annotations?.length, 'approved:', data.approvedDiagnoses?.length);
    this.container = container;
    this.topRanked = data.topRanked || [];
    this.annotations = data.annotations || [];
    this.approvedDiagnoses = data.approvedDiagnoses || [];
    this.counts = data.counts || {};
    this.onSelectionChange = onSelectionChange;

    // Reset selection state from any previous opening
    this.selectedCategory = this.topRanked.length > 0 ? 'topRanked' : 'nta';
    this.selectedBaseCode = null;
    this.selectedGroupId = null;
    this.expandedCategories = new Set([this.selectedCategory]);
    this.expandedGroups = new Set();

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
      topRanked: { total: 0, groups: this.topRanked },
      approved: { total: 0, baseCodes: {} },
      nta: { total: 0, baseCodes: {} },
      slp: { total: 0, baseCodes: {} },
      other: { total: 0, baseCodes: {} },
      speculative: { total: 0, baseCodes: {} }
    };

    // Calculate topRanked total from group annotation counts
    grouped.topRanked.total = this.topRanked.reduce((sum, g) => sum + (g.annotationCount || g.annotations?.length || 0), 0);

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
    // Show number of code groups, not total annotations
    const count = category.id === 'topRanked'
      ? (data?.groups?.length || 0)
      : Object.keys(data?.baseCodes || {}).length;
    const isExpanded = this.expandedCategories.has(category.id);
    const isSelected = this.selectedCategory === category.id;
    const hasItems = count > 0;
    const isWarning = category.id === 'speculative';

    return `
      <div class="icd10-sidebar__category ${isSelected ? 'icd10-sidebar__category--selected' : ''} ${isWarning ? 'icd10-sidebar__category--warning' : ''}"
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
        ${hasItems && isExpanded ? this._renderCategoryContent(category.id) : ''}
      </div>
    `;
  },

  /**
   * Render the expanded content for a category
   * @param {string} categoryId - Category ID
   * @returns {string} - HTML string
   */
  _renderCategoryContent(categoryId) {
    if (categoryId === 'topRanked') {
      return this._renderTopRankedGroups();
    }

    // Standard base-code rendering for all other categories
    const data = this.groupedData[categoryId];
    const baseCodes = data?.baseCodes ? Object.values(data.baseCodes) : [];
    baseCodes.sort((a, b) => b.count - a.count || a.baseCode.localeCompare(b.baseCode));

    return `
      <div class="icd10-sidebar__base-codes">
        ${baseCodes.map(bc => this._renderBaseCode(bc, categoryId)).join('')}
      </div>
    `;
  },

  /**
   * Render the topRanked groups
   * @returns {string} - HTML string
   */
  _renderTopRankedGroups() {
    const groups = this.topRanked;
    if (!groups || groups.length === 0) return '';

    return `
      <div class="icd10-sidebar__groups">
        ${groups.map(group => this._renderTopRankedGroup(group)).join('')}
      </div>
    `;
  },

  /**
   * Render a single topRanked group card
   * @param {Object} group - TopRanked group object
   * @returns {string} - HTML string
   */
  _renderTopRankedGroup(group) {
    const isSelected = this.selectedCategory === 'topRanked' && this.selectedGroupId === group.groupId;
    const isExpanded = this.expandedGroups.has(group.groupId);
    const isTopFive = group.isTopFive;
    const strengthClass = group.evidenceStrength ? `icd10-sidebar__evidence-badge--${group.evidenceStrength}` : '';

    return `
      <div class="icd10-sidebar__group ${isSelected ? 'icd10-sidebar__group--selected' : ''} ${isTopFive ? 'icd10-sidebar__group--top-five' : ''}"
           data-group-id="${group.groupId}">
        <div class="icd10-sidebar__group-header" data-group-select="${group.groupId}">
          <div class="icd10-sidebar__group-rank">#${group.rank}</div>
          <div class="icd10-sidebar__group-info">
            <div class="icd10-sidebar__group-title">
              <span class="icd10-sidebar__group-code">${group.groupCode}</span>
              <span class="icd10-sidebar__group-name">${group.groupName}</span>
            </div>
            ${group.evidenceStrength ? `
              <span class="icd10-sidebar__evidence-badge ${strengthClass}">${group.evidenceStrength}</span>
            ` : ''}
            ${group.rationale ? `
              <div class="icd10-sidebar__group-rationale">${group.rationale}</div>
            ` : ''}
            <div class="icd10-sidebar__group-meta">
              <span>${group.annotationCount} annotation${group.annotationCount !== 1 ? 's' : ''} across ${group.documentCount} doc${group.documentCount !== 1 ? 's' : ''}</span>
              ${group.pdpmCategory ? `<span class="icd10-sidebar__pdpm-tag">${group.pdpmCategory}</span>` : ''}
            </div>
          </div>
          <span class="icd10-sidebar__group-chevron ${isExpanded ? 'icd10-sidebar__group-chevron--expanded' : ''}" data-group-toggle="${group.groupId}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        ${isExpanded && group.annotations ? `
          <div class="icd10-sidebar__group-annotations">
            ${group.annotations.map(ann => this._renderGroupAnnotation(ann, group.groupId)).join('')}
          </div>
        ` : ''}
      </div>
    `;
  },

  /**
   * Render a nested annotation within a topRanked group
   * @param {Object} annotation - Annotation object
   * @param {string} groupId - Parent group ID
   * @returns {string} - HTML string
   */
  _renderGroupAnnotation(annotation, groupId) {
    let confidencePercent = annotation.confidence || 0;
    if (confidencePercent <= 1) {
      confidencePercent = Math.round(confidencePercent * 100);
    }

    return `
      <div class="icd10-sidebar__group-annotation" data-annotation-select="${annotation.id}" data-group-id="${groupId}">
        <span class="icd10-sidebar__group-annotation-code">${annotation.icd10Code}</span>
        <span class="icd10-sidebar__group-annotation-confidence">${confidencePercent}%</span>
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
      star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
      check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>',
      clipboard: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
      message: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
      folder: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',
      alert: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
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

    // TopRanked group select (click on header)
    this.container.querySelectorAll('[data-group-select]').forEach(el => {
      el.addEventListener('click', (e) => {
        // Don't trigger if clicking the chevron toggle directly
        if (e.target.closest('[data-group-toggle]')) return;
        const groupId = e.currentTarget.dataset.groupSelect;
        this._selectGroup(groupId);
      });
    });

    // TopRanked group expand/collapse toggle
    this.container.querySelectorAll('[data-group-toggle]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const groupId = e.currentTarget.dataset.groupToggle;
        this._toggleGroup(groupId);
      });
    });

    // Individual annotation selection within expanded groups
    this.container.querySelectorAll('[data-annotation-select]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const annotationId = e.currentTarget.dataset.annotationSelect;
        const groupId = e.currentTarget.dataset.groupId;
        this._selectGroupAnnotation(groupId, annotationId);
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
   * Toggle a topRanked group expand/collapse
   * @param {string} groupId - Group ID
   */
  _toggleGroup(groupId) {
    if (this.expandedGroups.has(groupId)) {
      this.expandedGroups.delete(groupId);
    } else {
      this.expandedGroups.add(groupId);
    }
    this.render();
  },

  /**
   * Select a topRanked group
   * @param {string} groupId - Group ID
   */
  _selectGroup(groupId) {
    console.log('[ICD10Sidebar] _selectGroup:', groupId);
    const group = this.topRanked.find(g => g.groupId === groupId);
    if (!group) return;

    this.selectedCategory = 'topRanked';
    this.selectedBaseCode = null;
    this.selectedGroupId = groupId;

    // Ensure topRanked category is expanded
    this.expandedCategories.add('topRanked');

    const items = group.annotations || [];
    console.log('[ICD10Sidebar] Group items:', items.length, 'has callback:', !!this.onSelectionChange);

    this.render();

    if (this.onSelectionChange) {
      this.onSelectionChange({
        category: 'topRanked',
        groupId: groupId,
        baseCode: group.groupCode,
        items: items
      });
    }
  },

  /**
   * Select an individual annotation within a topRanked group
   * @param {string} groupId - Parent group ID
   * @param {string} annotationId - Annotation ID
   */
  _selectGroupAnnotation(groupId, annotationId) {
    const group = this.topRanked.find(g => g.groupId === groupId);
    if (!group) return;

    const annotation = group.annotations.find(a => a.id === annotationId);
    if (!annotation) return;

    this.selectedCategory = 'topRanked';
    this.selectedGroupId = groupId;
    this.selectedBaseCode = null;

    this.render();

    if (this.onSelectionChange) {
      this.onSelectionChange({
        category: 'topRanked',
        groupId: groupId,
        baseCode: group.groupCode,
        items: [annotation]
      });
    }
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
    this.selectedGroupId = null;

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
    const preferredOrder = ['topRanked', 'nta', 'slp', 'other', 'speculative', 'approved'];

    for (const catId of preferredOrder) {
      const data = this.groupedData[catId];
      console.log('[ICD10Sidebar] Checking category:', catId, 'total:', data?.total);
      if (data && data.total > 0) {
        if (catId === 'topRanked') {
          // Select first group
          if (this.topRanked.length > 0) {
            console.log('[ICD10Sidebar] Auto-selecting topRanked group:', this.topRanked[0].groupId);
            this._selectGroup(this.topRanked[0].groupId);
            return;
          }
        } else {
          // Get first base code
          const baseCodes = Object.keys(data.baseCodes);
          if (baseCodes.length > 0) {
            console.log('[ICD10Sidebar] Auto-selecting:', catId, baseCodes[0]);
            this._selectBaseCode(catId, baseCodes[0]);
            return;
          }
        }
      }
    }
    console.log('[ICD10Sidebar] No category with items found');
  },

  /**
   * Update data (e.g., after approval)
   * @param {Object} data - { topRanked, annotations, approvedDiagnoses }
   */
  updateData(data) {
    if (data.topRanked !== undefined) this.topRanked = data.topRanked;
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
      baseCode: this.selectedBaseCode,
      groupId: this.selectedGroupId
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
      if (categoryId === 'topRanked') {
        // Search through groups
        for (const group of (categoryData.groups || [])) {
          if (group.groupCode === baseCode) {
            results.push(...(group.annotations || []));
          }
        }
      } else {
        const bcData = categoryData.baseCodes?.[baseCode];
        if (bcData) {
          results.push(...bcData.items);
        }
      }
    }
    return results;
  }
};

// Expose globally
window.ICD10Sidebar = ICD10Sidebar;
