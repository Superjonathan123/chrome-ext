// Facility Dashboard State Management for Super Menu
// Handles facility-level dashboard data (action cards + open assessments)

const FacilityDashboardState = {
  data: null,                    // { cards, openAssessments }
  loading: false,
  error: null,
  lastFetched: null,
  filter: 'needs_attention',     // 'needs_attention' | 'all'
  expandedCard: null,            // Which card is expanded (null = none)

  // Cache duration in milliseconds (5 minutes)
  CACHE_DURATION: 5 * 60 * 1000,

  /**
   * Load facility dashboard data from API
   * @param {boolean} force - Force refresh even if cache is valid
   * @returns {Promise<Object>} Dashboard data
   */
  async loadDashboard(force = false) {
    // Return cached data if still valid and filter hasn't changed
    if (!force && this.data && !this.needsRefresh()) {
      return this.data;
    }

    this.loading = true;
    this.error = null;

    try {
      const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
      if (!authState.authenticated) {
        throw new Error('Please log in to view dashboard');
      }

      const orgResponse = await chrome.runtime.sendMessage({ type: 'GET_ORG' });
      const orgSlug = orgResponse?.org;
      const facilityName = getChatFacilityInfo();

      if (!orgSlug || !facilityName) {
        throw new Error('Could not determine organization or facility');
      }

      const params = new URLSearchParams({
        facilityName,
        orgSlug,
        filter: this.filter
      });

      const result = await chrome.runtime.sendMessage({
        type: 'API_REQUEST',
        endpoint: `/api/extension/facility-dashboard?${params}`,
        options: { method: 'GET' }
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to load dashboard');
      }

      const responseData = result.data?.data || result.data || result;

      this.data = {
        cards: responseData.cards || {
          queriesToSend: { count: 0, items: [] },
          awaitingSignatures: { count: 0, items: [] },
          hippsOpportunities: { count: 0, items: [] },
          complianceRisks: { count: 0, items: [] }
        },
        openAssessments: responseData.openAssessments || []
      };
      this.lastFetched = Date.now();
      this.error = null;

      return this.data;
    } catch (err) {
      console.error('Super Menu: Failed to load facility dashboard:', err);
      this.error = err.message || 'Failed to load dashboard';
      throw err;
    } finally {
      this.loading = false;
    }
  },

  /**
   * Force refresh dashboard data
   * @returns {Promise<Object>} Dashboard data
   */
  async refresh() {
    return this.loadDashboard(true);
  },

  /**
   * Check if data needs refresh
   * @returns {boolean}
   */
  needsRefresh() {
    if (!this.lastFetched) return true;
    return Date.now() - this.lastFetched > this.CACHE_DURATION;
  },

  /**
   * Set filter and reload data
   * @param {string} filter - 'needs_attention' | 'all'
   */
  async setFilter(filter) {
    if (this.filter === filter) return;

    this.filter = filter;
    this.lastFetched = null; // Invalidate cache
    await this.loadDashboard(true);
  },

  /**
   * Toggle expanded card
   * @param {string} cardKey - Card key to toggle (or null to collapse all)
   */
  toggleExpandedCard(cardKey) {
    if (this.expandedCard === cardKey) {
      this.expandedCard = null;
    } else {
      this.expandedCard = cardKey;
    }
  },

  /**
   * Get total actionable count (for FAB badge)
   * Returns count of assessments with hasIssues: true
   * @returns {number}
   */
  getTotalActionable() {
    if (!this.data?.openAssessments) return 0;
    return this.data.openAssessments.filter(a => a.hasIssues).length;
  },

  /**
   * Get card data by key
   * @param {string} cardKey - queriesToSend | awaitingSignatures | hippsOpportunities | complianceRisks
   * @returns {Object} { count, items }
   */
  getCard(cardKey) {
    return this.data?.cards?.[cardKey] || { count: 0, items: [] };
  },

  /**
   * Get filtered assessments based on current filter
   * @returns {Array}
   */
  getFilteredAssessments() {
    if (!this.data?.openAssessments) return [];

    // If filter is 'needs_attention', only show assessments with issues
    // Note: API should already filter, but double-check client-side
    if (this.filter === 'needs_attention') {
      return this.data.openAssessments.filter(a => a.hasIssues);
    }

    return this.data.openAssessments;
  },

  /**
   * Find an assessment by ID
   * @param {string} assessmentId
   * @returns {Object|null}
   */
  getAssessmentById(assessmentId) {
    if (!this.data?.openAssessments) return null;
    return this.data.openAssessments.find(a => a.id === assessmentId || a.externalAssessmentId === assessmentId) || null;
  },

  /**
   * Invalidate cache (mark data as stale)
   */
  invalidateCache() {
    this.lastFetched = null;
  },

  /**
   * Clear all data
   */
  clear() {
    this.data = null;
    this.loading = false;
    this.error = null;
    this.lastFetched = null;
    this.filter = 'needs_attention';
    this.expandedCard = null;
  }
};

// Make available globally
window.FacilityDashboardState = FacilityDashboardState;
