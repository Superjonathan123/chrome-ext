/**
 * ICD-10 Viewer API Module
 * Handles all API calls for ICD-10 annotations, diagnoses, documents, and word blocks
 */

const ICD10API = {
  // Cache for word blocks (keyed by document ID)
  wordBlocksCache: new Map(),

  // Cache for evidence summaries (keyed by base code)
  summaryCache: new Map(),

  // Cache for presigned URLs with expiry tracking
  urlCache: new Map(),

  // Minimum time before URL expiry to trigger refresh (2 minutes)
  URL_REFRESH_THRESHOLD: 2 * 60 * 1000,

  /**
   * Get ICD-10 annotations for a patient
   * @param {string} patientId - Patient ID
   * @param {string} facilityName - Facility name
   * @param {string} orgSlug - Organization slug
   * @returns {Promise<Object>} - { topRanked, flatAnnotations, counts }
   */
  async getAnnotations(patientId, facilityName, orgSlug) {
    // Use mock data in development
    if (this._useMockData()) {
      await this._simulateDelay();
      return this._processAnnotationResponse(ICD10MockData.apiResponse);
    }

    const endpoint = `/api/extension/icd10-annotations?` +
      `patientId=${encodeURIComponent(patientId)}` +
      `&facilityName=${encodeURIComponent(facilityName)}` +
      `&orgSlug=${encodeURIComponent(orgSlug)}`;

    const response = await chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint
    });

    if (!response.success) {
      throw new Error(response.error || 'Failed to fetch annotations');
    }

    const data = response.data || response;
    return this._processAnnotationResponse(data);
  },

  /**
   * Process the API annotation response into the shape the viewer expects
   * @param {Object} data - Raw API response
   * @returns {Object} - { topRanked, flatAnnotations, counts }
   */
  _processAnnotationResponse(data) {
    const annotations = data.annotations || {};
    const rawTopRanked = annotations.topRanked || [];

    // Normalize topRanked field names: API uses group/displayName, sidebar expects groupCode/groupName
    const topRanked = rawTopRanked.map(g => ({
      ...g,
      groupId: g.groupId || g.group || g.id,
      groupCode: g.groupCode || g.group,
      groupName: g.groupName || g.displayName,
      annotationCount: g.annotationCount ?? g.annotations?.length ?? 0,
      documentCount: g.documentCount ?? 0,
    }));

    // Build flat annotations from nta, slp, other, speculative categories
    const flatAnnotations = [];

    if (annotations.nta) {
      annotations.nta.forEach(ann => flatAnnotations.push({ ...ann, category: ann.category || 'nta' }));
    }
    if (annotations.slp) {
      annotations.slp.forEach(ann => flatAnnotations.push({ ...ann, category: ann.category || 'slp' }));
    }
    if (annotations.other) {
      annotations.other.forEach(ann => flatAnnotations.push({ ...ann, category: ann.category || 'other' }));
    }
    if (annotations.speculative) {
      annotations.speculative.forEach(ann => flatAnnotations.push({ ...ann, category: ann.category || 'speculative' }));
    }

    return {
      topRanked,
      flatAnnotations,
      counts: data.counts || {}
    };
  },

  /**
   * Get approved diagnoses for a patient (already coded in PCC)
   * @param {string} patientId - Patient ID
   * @param {string} facilityName - Facility name
   * @param {string} orgSlug - Organization slug
   * @returns {Promise<Array>} - Array of diagnosis objects
   */
  async getApprovedDiagnoses(patientId, facilityName, orgSlug) {
    // Use mock data in development
    if (this._useMockData()) {
      await this._simulateDelay();
      return ICD10MockData.approvedDiagnoses;
    }

    const endpoint = `/api/extension/patients/${encodeURIComponent(patientId)}/diagnoses?` +
      `facilityName=${encodeURIComponent(facilityName)}` +
      `&orgSlug=${encodeURIComponent(orgSlug)}`;

    const response = await chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint
    });

    if (!response.success) {
      throw new Error(response.error || 'Failed to fetch diagnoses');
    }

    const data = response.data || response;
    return data.diagnoses || [];
  },

  /**
   * Get document with presigned URL
   * @param {string} documentId - Document ID
   * @param {string} facilityName - Facility name
   * @param {string} orgSlug - Organization slug
   * @param {boolean} forceRefresh - Force refresh even if cached
   * @returns {Promise<Object>} - Document object with signedUrl
   */
  async getDocument(documentId, facilityName, orgSlug, forceRefresh = false) {
    // Check URL cache first
    if (!forceRefresh) {
      const cached = this.urlCache.get(documentId);
      if (cached && this._isUrlValid(cached)) {
        return cached;
      }
    }

    // Use mock data in development
    if (this._useMockData()) {
      await this._simulateDelay();
      const doc = ICD10MockData.documents[documentId];
      if (!doc) {
        throw new Error('Document not found');
      }
      // Refresh the expiry time
      doc.expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();
      this.urlCache.set(documentId, doc);
      return doc;
    }

    const endpoint = `/api/extension/documents/${encodeURIComponent(documentId)}?` +
      `facilityName=${encodeURIComponent(facilityName)}` +
      `&orgSlug=${encodeURIComponent(orgSlug)}`;

    const response = await chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint
    });

    if (!response.success) {
      throw new Error(response.error || 'Failed to fetch document');
    }

    // API may return document in various structures
    const data = response.data || response;
    const doc = data.document || data;

    // Ensure we have a signedUrl
    if (!doc.signedUrl && !doc.url && !doc.presignedUrl) {
      throw new Error('Document response missing URL');
    }

    // Normalize the URL field
    if (!doc.signedUrl) {
      doc.signedUrl = doc.url || doc.presignedUrl;
    }

    this.urlCache.set(documentId, doc);
    return doc;
  },

  /**
   * Get word blocks for a document (for PDF highlighting)
   * @param {string} documentId - Document ID
   * @param {string} facilityName - Facility name
   * @param {string} orgSlug - Organization slug
   * @returns {Promise<Array>} - Array of word block objects
   */
  async getWordBlocks(documentId, facilityName, orgSlug) {
    // Check cache first (word blocks don't change)
    if (this.wordBlocksCache.has(documentId)) {
      return this.wordBlocksCache.get(documentId);
    }

    // Use mock data in development
    if (this._useMockData()) {
      await this._simulateDelay(100);
      // Search through topRanked groups and flat categories for matching annotations
      const allAnnotations = this._getAllMockAnnotations();
      const annotation = allAnnotations.find(a => a.documentId === documentId);
      const wordBlocks = annotation?.wordBlocks || [];
      this.wordBlocksCache.set(documentId, wordBlocks);
      return wordBlocks;
    }

    const endpoint = `/api/extension/documents/${encodeURIComponent(documentId)}/word-blocks?` +
      `facilityName=${encodeURIComponent(facilityName)}` +
      `&orgSlug=${encodeURIComponent(orgSlug)}`;

    const response = await chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint
    });

    if (!response.success) {
      throw new Error(response.error || 'Failed to fetch word blocks');
    }

    const wordBlocks = response.data.wordBlocks || [];
    this.wordBlocksCache.set(documentId, wordBlocks);
    return wordBlocks;
  },

  /**
   * Get all annotations from mock data (searches topRanked groups + flat categories)
   * @returns {Array}
   */
  _getAllMockAnnotations() {
    const annotations = ICD10MockData.apiResponse?.annotations || {};
    const all = [];

    // Collect from topRanked groups
    if (annotations.topRanked) {
      annotations.topRanked.forEach(group => {
        if (group.annotations) {
          all.push(...group.annotations);
        }
      });
    }

    // Collect from flat categories
    ['nta', 'slp', 'other', 'speculative'].forEach(cat => {
      if (annotations[cat]) {
        all.push(...annotations[cat]);
      }
    });

    return all;
  },

  /**
   * Approve a diagnosis (add to PCC chart)
   * @param {string} patientId - Patient ID
   * @param {Object} annotation - The annotation to approve
   * @param {string} facilityName - Facility name
   * @param {string} orgSlug - Organization slug
   * @returns {Promise<Object>} - Result of approval
   */
  async approveDiagnosis(patientId, annotation, facilityName, orgSlug) {
    // Use mock behavior in development
    if (this._useMockData()) {
      await this._simulateDelay(800);
      return { success: true, message: 'Diagnosis approved (mock)' };
    }

    const endpoint = `/api/extension/patients/${encodeURIComponent(patientId)}/diagnoses`;

    const response = await chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint,
      options: {
        method: 'POST',
        body: JSON.stringify({
          icd10Code: annotation.icd10Code,
          description: annotation.description,
          annotationId: annotation.id,
          facilityName,
          orgSlug
        })
      }
    });

    if (!response.success) {
      throw new Error(response.error || 'Failed to approve diagnosis');
    }

    return response.data;
  },

  /**
   * Check if a cached URL is still valid (has at least 2 minutes remaining)
   * @param {Object} doc - Document object with expiresAt
   * @returns {boolean}
   */
  _isUrlValid(doc) {
    if (!doc || !doc.expiresAt) return false;
    const expiresAt = new Date(doc.expiresAt).getTime();
    const now = Date.now();
    return (expiresAt - now) > this.URL_REFRESH_THRESHOLD;
  },

  /**
   * Check if we should use mock data
   * @returns {boolean}
   */
  _useMockData() {
    // Use mock data if the mock data module is loaded and we're in development
    // or if there's a flag set
    return typeof ICD10MockData !== 'undefined' &&
           (window.location.hostname === 'localhost' ||
            window.location.protocol === 'file:' ||
            window.ICD10_USE_MOCK_DATA === true);
  },

  /**
   * Simulate API delay for mock data
   * @param {number} ms - Delay in milliseconds
   */
  async _simulateDelay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  /**
   * Get evidence summary for a base code
   * @param {string} patientId - Patient ID
   * @param {string} baseCode - Base ICD-10 code
   * @param {string} facilityName - Facility name
   * @param {string} orgSlug - Organization slug
   * @param {string} [mdsAssessmentId] - Optional MDS assessment ID
   * @returns {Promise<Object>} - { summary }
   */
  async getEvidenceSummary(patientId, baseCode, facilityName, orgSlug, mdsAssessmentId) {
    // Check cache first
    if (this.summaryCache.has(baseCode)) {
      return this.summaryCache.get(baseCode);
    }

    // Use mock data in development
    if (this._useMockData()) {
      await this._simulateDelay(600);
      const result = { summary: `Evidence for ${baseCode} includes multiple clinical documents supporting this diagnosis. Documentation strength is moderate with consistent findings across assessments.` };
      this.summaryCache.set(baseCode, result);
      return result;
    }

    const endpoint = `/api/extension/icd10-annotations/summary`;

    const body = {
      patientId,
      baseCode,
      facilityName,
      orgSlug
    };
    if (mdsAssessmentId) {
      body.mdsAssessmentId = mdsAssessmentId;
    }

    const response = await chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint,
      options: {
        method: 'POST',
        body: JSON.stringify(body)
      }
    });

    if (!response.success) {
      throw new Error(response.error || 'Failed to fetch evidence summary');
    }

    const data = response.data || response;
    const result = { summary: data.summary || '' };
    this.summaryCache.set(baseCode, result);
    return result;
  },

  /**
   * Clear all caches
   */
  clearCaches() {
    this.wordBlocksCache.clear();
    this.urlCache.clear();
    this.summaryCache.clear();
  }
};

// Expose globally
window.ICD10API = ICD10API;
