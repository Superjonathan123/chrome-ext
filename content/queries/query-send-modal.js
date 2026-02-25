// Two-Step Query Send Modal for Super LTC Chrome Extension
// Step 1: Review query details, Step 2: Select practitioner and send

const QuerySendModal = {
  // Current state
  _state: {
    step: 1,
    result: null,
    existingQuery: null,
    context: null,
    noteData: null,
    practitioners: [],
    selectedPractitionerId: null,
    noteText: ''
  },

  /**
   * Show the send modal
   * @param {Object} result - MDS result object
   * @param {Object} existingQuery - Existing query to send (optional, for drafts)
   */
  async show(result, existingQuery = null) {
    // Reset state
    this._state = {
      step: 1,
      result,
      existingQuery,
      context: null,
      noteData: null,
      practitioners: [],
      selectedPractitionerId: null,
      noteText: ''
    };

    // Show modal with loading state
    SuperModal.show({
      title: 'Send Diagnosis Query',
      icon: '?',
      badge: result?.mdsItem || existingQuery?.mdsItem,
      content: this._buildLoadingContent(),
      actions: [],
      size: 'large',
      className: 'super-query-send-modal'
    });

    // Load data
    await this._loadData();
  },

  /**
   * Load required data (context, practitioners, AI note)
   */
  async _loadData() {
    try {
      // Get context from page
      this._state.context = await this._getQueryContext();

      // Fetch practitioners
      this._state.practitioners = await QueryAPI.fetchPractitioners(
        this._state.context.facilityName,
        this._state.context.orgSlug
      );

      // If we have a result (not existing query), generate AI note
      if (this._state.result && !this._state.existingQuery) {
        try {
          this._state.noteData = await QueryAPI.generateNote(
            this._state.result.mdsItem,
            this._state.result.aiAnswer
          );
          this._state.noteText = this._state.noteData.note;
        } catch (error) {
          console.error('Super LTC: Failed to generate note', error);
          this._state.noteText = this._generateFallbackNote();
        }
      } else if (this._state.existingQuery) {
        // Use existing query's note
        this._state.noteText = this._state.existingQuery.nurseEditedNote ||
                               this._state.existingQuery.aiGeneratedNote || '';
      }

      // Render step 1
      this._renderStep1();

    } catch (error) {
      console.error('Super LTC: Failed to load send modal data', error);
      SuperModal.showError(`Failed to load: ${error.message}`);
      SuperModal.updateActions([{
        label: 'Close',
        variant: 'secondary',
        action: () => SuperModal.close()
      }]);
    }
  },

  /**
   * Render Step 1: Review query details
   */
  _renderStep1() {
    this._state.step = 1;
    const content = this._buildStep1Content();
    SuperModal.updateContent(content);
    SuperModal.updateActions([
      {
        label: 'Cancel',
        variant: 'secondary',
        action: () => SuperModal.close()
      },
      {
        label: 'Next',
        variant: 'primary',
        action: () => this._goToStep2()
      }
    ]);

    // Setup note textarea listener
    setTimeout(() => {
      const textarea = document.querySelector('#super-query-note-input');
      if (textarea) {
        textarea.addEventListener('input', (e) => {
          this._state.noteText = e.target.value;
        });
      }
    }, 50);
  },

  /**
   * Go to Step 2: Select practitioner
   */
  _goToStep2() {
    this._state.step = 2;
    const content = this._buildStep2Content();
    SuperModal.updateContent(content);
    SuperModal.updateActions([
      {
        label: 'Back',
        variant: 'secondary',
        action: () => this._renderStep1()
      },
      {
        label: 'Send Query',
        variant: 'primary',
        disabled: true,
        action: (btn) => this._handleSend(btn)
      }
    ]);

    // Setup practitioner dropdown
    setTimeout(() => {
      const dropdownContainer = document.querySelector('#super-practitioner-dropdown');
      if (dropdownContainer) {
        const items = this._state.practitioners.map(p => ({
          id: p.id,
          label: this._formatPractitionerName(p),
          subtitle: p.title || p.specialty || ''
        }));

        SuperDropdown.create(dropdownContainer, {
          items,
          placeholder: 'Select a practitioner...',
          searchPlaceholder: 'Search practitioners...',
          onSelect: (item) => {
            this._state.selectedPractitionerId = item.id;
            // Enable send button
            const sendBtn = SuperModal.getButton('Send Query');
            if (sendBtn) sendBtn.disabled = false;
          }
        });
      }
    }, 50);
  },

  /**
   * Handle send button click
   * @param {HTMLElement} btn - Button element
   */
  async _handleSend(btn) {
    if (!this._state.selectedPractitionerId) {
      SuperToast.warning('Please select a practitioner');
      return;
    }

    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      let queryId = this._state.existingQuery?.id;

      // If no existing query, create one first
      if (!queryId) {
        const ai = this._state.result.aiAnswer;
        const selectedIcd10 = this._state.noteData?.preferredIcd10?.code ||
                              (this._state.noteData?.icd10Options?.[0]?.code);

        const createData = {
          patientId: this._state.context.patientId,
          facilityName: this._state.context.facilityName,
          orgSlug: this._state.context.orgSlug,
          mdsAssessmentId: this._state.context.assessmentId,
          mdsItem: this._state.result.mdsItem,
          mdsItemName: ai.mdsItemName || this._state.result.description,
          queryReason: ai.rationale || ai.queryReason || '',
          keyFindings: ai.keyFindings || [],
          queryEvidence: ai.evidence || ai.queryEvidence || [],
          recommendedIcd10: selectedIcd10 ? [{ code: selectedIcd10 }] : [],
          aiGeneratedNote: this._state.noteText
        };

        const { query } = await QueryAPI.createQuery(createData);
        queryId = query.id;

        // Add to local state
        QueryState.addQuery(query);
      }

      // Send the query
      await QueryAPI.sendQuery(
        queryId,
        [this._state.selectedPractitionerId],
        this._state.noteText
      );

      // Close modal and show success
      SuperModal.close();
      this._showSuccessAnimation();

      // Re-fetch queries from API to get full data (patientName, locationName, etc.)
      const ctx = this._state.context;
      await QueryState.loadQueries(ctx.assessmentId, ctx.facilityName, ctx.orgSlug);

      // Refresh badges and panel with fresh data
      QueryBadges.updateAllBadges();
      QueryPanel.updatePanel();

    } catch (error) {
      console.error('Super LTC: Failed to send query', error);
      SuperToast.error(`Failed to send: ${error.message}`);
      btn.textContent = originalText;
      btn.disabled = false;
    }
  },

  /**
   * Build loading content HTML
   * @returns {string}
   */
  _buildLoadingContent() {
    return `
      <div class="super-query-send__loading">
        <div class="super-modal__spinner"></div>
        <span>Loading query details...</span>
      </div>
    `;
  },

  /**
   * Build Step 1 content HTML
   * @returns {string}
   */
  _buildStep1Content() {
    const result = this._state.result;
    const existingQuery = this._state.existingQuery;
    const context = this._state.context;
    const ai = result?.aiAnswer || {};

    const diagnosisName = existingQuery?.mdsItemName || ai.mdsItemName || result?.description || 'Unknown';
    const mdsItem = existingQuery?.mdsItem || result?.mdsItem || '';

    // ICD-10 options
    const icd10Options = this._state.noteData?.icd10Options || [];
    const preferredIcd10 = this._state.noteData?.preferredIcd10;
    let icd10HTML = '';
    if (icd10Options.length > 0) {
      const optionsHTML = icd10Options.map(opt => {
        const code = typeof opt === 'object' ? opt.code : opt;
        const desc = typeof opt === 'object' ? opt.description : '';
        const isPreferred = preferredIcd10?.code === code;
        return `<option value="${code}" ${isPreferred ? 'selected' : ''}>${code}${desc ? ` - ${desc}` : ''}</option>`;
      }).join('');
      icd10HTML = `
        <div class="super-query-send__field">
          <label class="super-query-send__label">ICD-10 Code</label>
          <select class="super-query-send__select" id="super-query-icd10-select">
            ${optionsHTML}
          </select>
        </div>
      `;
    }

    return `
      <div class="super-query-send super-query-send--step1">
        <!-- Progress indicator -->
        <div class="super-query-send__progress">
          <div class="super-query-send__step super-query-send__step--active">
            <span class="super-query-send__step-num">1</span>
            <span class="super-query-send__step-label">Review</span>
          </div>
          <div class="super-query-send__step-line"></div>
          <div class="super-query-send__step">
            <span class="super-query-send__step-num">2</span>
            <span class="super-query-send__step-label">Send</span>
          </div>
        </div>

        <!-- Patient & Diagnosis combined -->
        <div class="super-query-send__header-card">
          <div class="super-query-send__patient-row">
            <span class="super-query-send__patient-name">${this._escapeHTML(context?.patientName || 'Patient')}</span>
            <span class="super-query-send__patient-facility">${this._escapeHTML(context?.facilityName || '')}</span>
          </div>
          <div class="super-query-send__diagnosis-row">
            <span class="super-query-send__diagnosis-code">${mdsItem}</span>
            <span class="super-query-send__diagnosis-name">${this._escapeHTML(diagnosisName)}</span>
          </div>
        </div>

        <!-- ICD-10 -->
        ${icd10HTML}

        <!-- Note -->
        <div class="super-query-send__field">
          <label class="super-query-send__label">Note for Physician</label>
          <textarea
            class="super-query-send__textarea"
            id="super-query-note-input"
            rows="4"
            placeholder="Enter note for physician..."
          >${this._escapeHTML(this._state.noteText)}</textarea>
        </div>
      </div>
    `;
  },

  /**
   * Build Step 2 content HTML
   * @returns {string}
   */
  _buildStep2Content() {
    const context = this._state.context;
    const diagnosisName = this._state.result?.aiAnswer?.mdsItemName || this._state.result?.description || '';
    const mdsItem = this._state.result?.mdsItem || '';

    return `
      <div class="super-query-send super-query-send--step2">
        <!-- Progress indicator -->
        <div class="super-query-send__progress">
          <div class="super-query-send__step super-query-send__step--completed">
            <span class="super-query-send__step-num">&#10003;</span>
            <span class="super-query-send__step-label">Review</span>
          </div>
          <div class="super-query-send__step-line super-query-send__step-line--active"></div>
          <div class="super-query-send__step super-query-send__step--active">
            <span class="super-query-send__step-num">2</span>
            <span class="super-query-send__step-label">Send</span>
          </div>
        </div>

        <!-- Header card showing what we're sending -->
        <div class="super-query-send__header-card">
          <div class="super-query-send__patient-row">
            <span class="super-query-send__patient-name">${this._escapeHTML(context?.patientName || 'Patient')}</span>
            <span class="super-query-send__patient-facility">${this._escapeHTML(context?.facilityName || '')}</span>
          </div>
          <div class="super-query-send__diagnosis-row">
            <span class="super-query-send__diagnosis-code">${mdsItem}</span>
            <span class="super-query-send__diagnosis-name">${this._escapeHTML(diagnosisName)}</span>
          </div>
        </div>

        <!-- Practitioner selection -->
        <div class="super-query-send__field">
          <label class="super-query-send__label">Send to Physician</label>
          <div id="super-practitioner-dropdown" class="super-query-send__dropdown-container"></div>
          <div class="super-query-send__hint">They will be notified via SMS</div>
        </div>
      </div>
    `;
  },

  /**
   * Show success animation after sending
   */
  _showSuccessAnimation() {
    const successEl = document.createElement('div');
    successEl.className = 'super-query-success';
    successEl.innerHTML = `
      <div class="super-query-success__content">
        <div class="super-query-success__icon">&#10003;</div>
        <div class="super-query-success__text">Query Sent!</div>
      </div>
    `;
    document.body.appendChild(successEl);

    requestAnimationFrame(() => {
      successEl.classList.add('super-query-success--visible');
    });

    setTimeout(() => {
      successEl.classList.remove('super-query-success--visible');
      setTimeout(() => successEl.remove(), 300);
    }, 1500);
  },

  /**
   * Get query context from page
   * @returns {Promise<Object>}
   */
  async _getQueryContext() {
    // Use the same approach as content.js getQueryContext() for consistency
    const url = new URL(window.location.href);
    const mdsState = window.MDSViewState || {};
    const assessmentId = url.searchParams.get('ESOLassessid') ||
                         mdsState.manualContext?.assessmentId || mdsState.context?.assessmentId ||
                         window.SuperOverlay?.assessmentId || '';

    // Use stored patientId from API response (preferred), fallback to URL param
    const patientId = window.SuperOverlay?.patientId ||
                      mdsState.context?.patientId ||
                      url.searchParams.get('ESOLclientid') || '';

    // Get org from cookie via background script
    const orgResponse = await chrome.runtime.sendMessage({ type: 'GET_ORG' });
    const orgSlug = orgResponse?.org || '';

    // Get facility from DOM — try multiple sources
    const facilityInfo = typeof getFacilityInfo === 'function' ? getFacilityInfo() : null;
    const chatFacility = typeof getChatFacilityInfo === 'function' ? getChatFacilityInfo() : null;
    const facilityName = facilityInfo?.facility || chatFacility || window.SuperOverlay?.facilityName || '';

    // Get patient name from DOM or MDS data
    const patientNameEl = document.querySelector('.patient-name, #patientName, .patientName, [class*="patient-name"]');
    const patientName = patientNameEl?.textContent?.trim() || mdsState.data?.patientName || 'Patient';

    const dobEl = document.querySelector('.patient-dob, #patientDOB, [class*="patient-dob"]');
    const patientDOB = dobEl?.textContent?.trim() || '';

    return {
      patientId,
      patientName,
      patientDOB,
      facilityName,
      orgSlug,
      assessmentId
    };
  },

  /**
   * Generate fallback note text
   * @returns {string}
   */
  _generateFallbackNote() {
    const ai = this._state.result?.aiAnswer;
    const diagnosisName = ai?.mdsItemName || this._state.result?.description || 'this diagnosis';
    return `Please review the clinical evidence for potential ${diagnosisName}. See supporting documentation below.`;
  },

  /**
   * Format practitioner name for display
   * @param {Object} p - Practitioner object
   * @returns {string}
   */
  _formatPractitionerName(p) {
    if (p.firstName && p.lastName) {
      return `${p.firstName} ${p.lastName}${p.title ? `, ${p.title}` : ''}`;
    }
    return p.name || 'Unknown';
  },

  /**
   * Escape HTML
   * @param {string} str
   * @returns {string}
   */
  _escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};

// Make available globally
window.QuerySendModal = QuerySendModal;
