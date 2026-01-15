// Query State Management for Super LTC Chrome Extension
// Manages the state of queries for the current MDS assessment

const QueryState = {
  // Array of all queries for current assessment
  queries: [],

  // Map of mdsItem -> query for quick lookup
  queryByItem: {},

  // Loading state
  loading: false,

  // Error state
  error: null,

  // Associated MDS assessment info
  mdsAssessment: null,

  /**
   * Initialize/load queries for an assessment
   * @param {string} mdsAssessmentId - PCC assessment ID
   * @param {string} facilityName - Facility name
   * @param {string} orgSlug - Organization slug
   */
  async loadQueries(mdsAssessmentId, facilityName, orgSlug) {
    this.loading = true;
    this.error = null;

    try {
      const result = await QueryAPI.fetchAssessmentQueries(
        mdsAssessmentId,
        facilityName,
        orgSlug
      );

      this.queries = result.queries || [];
      this.mdsAssessment = result.mdsAssessment;

      // Build lookup map by MDS item
      this.queryByItem = {};
      this.queries.forEach(query => {
        // Use mdsItem as key (e.g., "I2100")
        if (query.mdsItem) {
          this.queryByItem[query.mdsItem] = query;
        }
      });

      console.log('Super LTC: Loaded', this.queries.length, 'queries for assessment');
    } catch (error) {
      console.error('Super LTC: Failed to load queries', error);
      this.error = error.message;
      // Don't throw - queries are supplementary
    } finally {
      this.loading = false;
    }
  },

  /**
   * Get query for a specific MDS item
   * @param {string} mdsItem - MDS item code (e.g., "I2100")
   * @returns {Object|null}
   */
  getQueryForItem(mdsItem) {
    return this.queryByItem[mdsItem] || null;
  },

  /**
   * Check if an MDS item has any query
   * @param {string} mdsItem - MDS item code
   * @returns {boolean}
   */
  hasQuery(mdsItem) {
    return !!this.queryByItem[mdsItem];
  },

  /**
   * Get all queries sorted by status priority
   * Draft/Pending first, then sent, then signed/rejected
   * @returns {Array}
   */
  getQueriesSorted() {
    const statusOrder = {
      'pending': 0,  // Draft - needs to be sent
      'sent': 1,     // Awaiting signature
      'signed': 2,   // Completed
      'rejected': 3  // Rejected
    };

    return [...this.queries].sort((a, b) => {
      const orderA = statusOrder[a.status] ?? 99;
      const orderB = statusOrder[b.status] ?? 99;
      return orderA - orderB;
    });
  },

  /**
   * Get count of queries by status
   * @returns {{pending: number, sent: number, signed: number, rejected: number, total: number}}
   */
  getCounts() {
    const counts = {
      pending: 0,   // Draft
      sent: 0,      // Pending signature
      signed: 0,
      rejected: 0,
      total: this.queries.length
    };

    this.queries.forEach(q => {
      if (counts.hasOwnProperty(q.status)) {
        counts[q.status]++;
      }
    });

    return counts;
  },

  /**
   * Get queries that need attention (draft or awaiting response)
   * @returns {Array}
   */
  getActionableQueries() {
    return this.queries.filter(q => q.status === 'pending' || q.status === 'sent');
  },

  /**
   * Update a query in the local state
   * @param {string} queryId - Query ID
   * @param {Object} updates - Fields to update
   */
  updateQuery(queryId, updates) {
    const index = this.queries.findIndex(q => q.id === queryId);
    if (index !== -1) {
      this.queries[index] = { ...this.queries[index], ...updates };

      // Update lookup map if mdsItem present
      const query = this.queries[index];
      if (query.mdsItem) {
        this.queryByItem[query.mdsItem] = query;
      }
    }
  },

  /**
   * Add a new query to the local state
   * @param {Object} query - Query object
   */
  addQuery(query) {
    this.queries.push(query);
    if (query.mdsItem) {
      this.queryByItem[query.mdsItem] = query;
    }
  },

  /**
   * Clear all query state
   */
  clear() {
    this.queries = [];
    this.queryByItem = {};
    this.loading = false;
    this.error = null;
    this.mdsAssessment = null;
  },

  /**
   * Get status display info
   * @param {string} status - Query status
   * @returns {{label: string, icon: string, className: string}}
   */
  getStatusDisplay(status) {
    const displays = {
      'pending': {
        label: 'Draft',
        icon: '&#9888;',  // Warning triangle
        className: 'super-query-status--draft'
      },
      'sent': {
        label: 'Pending',
        icon: '&#8987;',  // Hourglass
        className: 'super-query-status--pending'
      },
      'signed': {
        label: 'Signed',
        icon: '&#10003;', // Check
        className: 'super-query-status--signed'
      },
      'rejected': {
        label: 'Rejected',
        icon: '&#10007;', // X
        className: 'super-query-status--rejected'
      }
    };

    return displays[status] || { label: status, icon: '?', className: '' };
  }
};

// Make available globally
window.QueryState = QueryState;
