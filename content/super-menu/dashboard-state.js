// Dashboard State Management for Super Menu
// Handles global query dashboard data across all facilities

const DashboardState = {
  data: null,           // { pending, outstanding, recentlySigned, counts }
  loading: false,
  error: null,
  lastFetched: null,

  // Cache duration in milliseconds (5 minutes)
  CACHE_DURATION: 5 * 60 * 1000,

  /**
   * Load dashboard data from API
   * @param {boolean} force - Force refresh even if cache is valid
   * @returns {Promise<Object>} Dashboard data
   */
  async loadDashboard(force = false) {
    // Return cached data if still valid
    if (!force && this.data && !this.needsRefresh()) {
      return this.data;
    }

    this.loading = true;
    this.error = null;

    try {
      const result = await QueryAPI.fetchDashboardQueries();

      this.data = {
        pending: result.pending || [],
        outstanding: result.outstanding || [],
        recentlySigned: result.recentlySigned || [],
        counts: result.counts || { pending: 0, outstanding: 0, recentlySigned: 0 }
      };
      this.lastFetched = Date.now();
      this.error = null;

      return this.data;
    } catch (err) {
      console.error('Super Menu: Failed to load dashboard:', err);
      this.error = err.message || 'Failed to load queries';
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
   * Get total actionable query count (for badge)
   * Pending + Outstanding = things that need attention
   * @returns {number}
   */
  getTotalActionable() {
    if (!this.data?.counts) return 0;
    return (this.data.counts.pending || 0) + (this.data.counts.outstanding || 0);
  },

  /**
   * Get all queries grouped by status
   * Returns in priority order: pending, outstanding, recentlySigned
   * @returns {Array<{status: string, label: string, queries: Array}>}
   */
  getQueriesGrouped() {
    if (!this.data) return [];

    const groups = [];

    if (this.data.pending?.length > 0) {
      groups.push({
        status: 'pending',
        label: 'Pending',
        queries: this.data.pending
      });
    }

    if (this.data.outstanding?.length > 0) {
      groups.push({
        status: 'outstanding',
        label: 'Awaiting Signature',
        queries: this.data.outstanding
      });
    }

    if (this.data.recentlySigned?.length > 0) {
      groups.push({
        status: 'signed',
        label: 'Recently Signed',
        queries: this.data.recentlySigned
      });
    }

    return groups;
  },

  /**
   * Find a query by ID across all groups
   * @param {string} queryId
   * @returns {Object|null}
   */
  getQueryById(queryId) {
    if (!this.data) return null;

    const allQueries = [
      ...(this.data.pending || []),
      ...(this.data.outstanding || []),
      ...(this.data.recentlySigned || [])
    ];

    return allQueries.find(q => q.id === queryId) || null;
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
  }
};

// Make available globally
window.DashboardState = DashboardState;
