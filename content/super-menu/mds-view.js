// Super Menu MDS View - Dashboard Style v2

// ============================================================================
// MAIN VIEW FUNCTIONS
// ============================================================================

async function renderMDSView(forceRefresh = false) {
  const container = document.getElementById('super-menu-content');
  if (!container) return;

  // Priority: manualContext (in-menu nav) > existing context > URL context
  let context;
  if (MDSViewState.manualContext) {
    context = MDSViewState.manualContext;
  } else if (MDSViewState.context && MDSViewState.data && !forceRefresh) {
    // Reuse existing context if we have data and not forcing refresh
    context = MDSViewState.context;
  } else {
    // Default: read from URL
    context = getMDSContext();
  }

  const contextHasChanged = contextChanged(context);
  SuperMenu.mdsContext = context;
  MDSViewState.context = context;

  const needsLoad = !MDSViewState.data || forceRefresh || contextHasChanged;

  if (needsLoad) {
    MDSViewState.loading = true;
    MDSViewState.error = null;
    container.innerHTML = renderMDSLoading(context);

    try {
      await loadMDSData(context, forceRefresh);
    } catch (err) {
      console.error('Super Menu: Failed to load MDS data:', err);
      MDSViewState.error = err.message || 'Failed to load MDS data';
    }
    MDSViewState.loading = false;
  }

  if (MDSViewState.error) {
    container.innerHTML = renderMDSError(MDSViewState.error, context);
  } else if (MDSViewState.data) {
    container.innerHTML = renderMDSContent(MDSViewState.data, context);
    setupMDSListeners(container);
  } else {
    container.innerHTML = renderMDSEmpty(context);
  }
}

function contextChanged(newContext) {
  const old = MDSViewState.context;
  if (!old) return true;
  return old.scope !== newContext.scope ||
         old.assessmentId !== newContext.assessmentId ||
         old.patientId !== newContext.patientId;
}

async function loadMDSData(context, forceRefresh = false) {
  const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
  if (!authState.authenticated) {
    throw new Error('Please log in to view MDS data');
  }

  const orgResponse = await chrome.runtime.sendMessage({ type: 'GET_ORG' });
  const orgSlug = orgResponse?.org;
  const facilityName = getChatFacilityInfo();

  if (!orgSlug || !facilityName) {
    throw new Error('Could not determine organization or facility');
  }

  if (context.scope === 'mds' && context.assessmentId) {
    const params = new URLSearchParams({
      externalAssessmentId: context.assessmentId,
      facilityName,
      orgSlug
    });

    const result = await chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint: `/api/extension/mds/pdpm-potential?${params}`,
      options: { method: 'GET' }
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to load MDS data');
    }

    // The pdpm-potential endpoint includes queries in outstandingQueries
    MDSViewState.data = result.data;
  } else if (context.scope === 'patient' && context.patientId) {
    // Fetch patient MDSs from new endpoint
    const params = new URLSearchParams({
      facilityName,
      orgSlug
    });

    const result = await chrome.runtime.sendMessage({
      type: 'API_REQUEST',
      endpoint: `/api/extension/patients/${context.patientId}/assessments?${params}`,
      options: { method: 'GET' }
    });

    console.log('Super Menu: Patient API response:', result);

    if (!result.success) {
      throw new Error(result.error || 'Failed to load patient data');
    }

    // Handle double-wrapped response: result.data.data or result.data
    const responseData = result.data?.data || result.data || result;
    const patientName = responseData.patientName || context.patientName || 'Patient';
    const assessments = responseData.assessments || [];

    console.log('Super Menu: Parsed patient data:', { patientName, assessmentsCount: assessments.length });

    MDSViewState.data = {
      scope: 'patient',
      patientId: context.patientId,
      patientName,
      assessments
    };

    // Cache the patient name for breadcrumbs
    if (patientName && typeof setCachedPatientName === 'function') {
      setCachedPatientName(context.patientId, patientName);
    }
  } else {
    MDSViewState.data = { scope: 'global', assessments: [] };
  }
}

// ============================================================================
// LOADING / ERROR / EMPTY STATES
// ============================================================================

function renderMDSLoading(context) {
  const scopeLabel = {
    mds: 'Loading MDS analysis...',
    patient: 'Loading patient MDSs...',
    global: 'Loading all MDSs...'
  };

  return `
    <div class="super-mds-loading">
      <div class="super-mds-loading__spinner"></div>
      <div class="super-mds-loading__text">${scopeLabel[context.scope] || 'Loading...'}</div>
    </div>
  `;
}

function renderMDSError(error, context) {
  return `
    <div class="super-mds-error">
      <div class="super-mds-error__icon">&#9888;</div>
      <div class="super-mds-error__text">${escapeHtml(error)}</div>
      <button class="super-mds-error__retry" onclick="renderMDSView(true)">Retry</button>
    </div>
  `;
}

function renderMDSEmpty(context) {
  const messages = {
    mds: 'Navigate to an MDS section page to see analysis.',
    patient: 'No MDS assessments found for this patient.',
    global: 'No MDS assessments found.'
  };

  return `
    <div class="super-mds-empty">
      <div class="super-mds-empty__icon">&#128203;</div>
      <div class="super-mds-empty__text">${messages[context.scope] || 'No data available'}</div>
    </div>
  `;
}

// ============================================================================
// MAIN CONTENT RENDERING
// ============================================================================

function renderMDSContent(data, context) {
  const breadcrumb = renderMDSBreadcrumb(data, context);

  if (context.scope === 'mds' && data.success) {
    // Single MDS view with all the cards
    // Order: HIPPS display, Would Change HIPPS (top priority), Queries, Compliance
    return `
      <div class="super-mds-dashboard">
        ${breadcrumb}
        ${renderHippsDisplay(data)}
        ${renderWouldChangeHippsCard(data)}
        ${renderPendingQueriesCard(data)}
        ${renderRecentQueriesCard(data)}
        ${renderComplianceCard(data)}
        ${renderNoHippsChangeSection(data)}
      </div>
    `;
  } else if (context.scope === 'patient') {
    // Patient view with MDS list
    return `
      <div class="super-patient-view">
        ${breadcrumb}
        ${renderPatientMDSList(data)}
      </div>
    `;
  } else {
    return `
      ${breadcrumb}
      ${renderMDSList(data.assessments || [], 'global')}
    `;
  }
}

// ============================================================================
// BREADCRUMB / NAVIGATION HEADER
// ============================================================================

function renderMDSBreadcrumb(data, context) {
  // Simplified breadcrumb with back arrow

  if (context.scope === 'global') {
    // No breadcrumb needed at global level
    return '';
  }

  if (context.scope === 'patient') {
    // Patient view - show back to dashboard
    const patientName = data?.patientName || context.patientName || 'Patient';
    return `
      <div class="super-nav-header">
        <button class="super-nav-header__back" data-scope="global" title="Back to Dashboard">
          <span class="super-nav-header__back-arrow">&#8592;</span>
          <span class="super-nav-header__back-label">Dashboard</span>
        </button>
        <div class="super-nav-header__title">${escapeHtml(patientName)}</div>
      </div>
    `;
  }

  if (context.scope === 'mds') {
    // MDS view - show back to patient
    const patientId = context.patientId || data?.assessment?.patientId;
    const patientName = data?.patientName || context.patientName || 'Patient';
    const mdsLabel = data?.assessment ? `${data.assessment.description || 'MDS'}` : 'MDS';

    return `
      <div class="super-nav-header">
        <button class="super-nav-header__back" data-scope="patient" data-patient-id="${patientId || ''}" title="Back to ${escapeHtml(patientName)}">
          <span class="super-nav-header__back-arrow">&#8592;</span>
          <span class="super-nav-header__back-label">${escapeHtml(patientName)}</span>
        </button>
        <div class="super-nav-header__title">${escapeHtml(mdsLabel)}</div>
      </div>
    `;
  }

  return '';
}

// ============================================================================
// HIPPS DISPLAY (Top Section)
// ============================================================================

function renderHippsDisplay(data) {
  const summary = data.summary || {};
  const calculation = data.calculation || {};

  const currentHipps = summary.currentHipps || calculation.hippsCode || '?????';
  const potentialHipps = summary.potentialHippsIfCoded;
  const hasImprovement = summary.hasImprovements && potentialHipps && potentialHipps !== currentHipps;

  return `
    <div class="super-mds-hipps-display">
      <div class="super-mds-hipps-main">
        <div class="super-mds-hipps-current">
          <div class="super-mds-hipps-label">Current HIPPS</div>
          <div class="super-mds-hipps-code">${currentHipps}</div>
        </div>
        ${hasImprovement ? `
          <div class="super-mds-hipps-arrow">&#10140;</div>
          <div class="super-mds-hipps-potential">
            <div class="super-mds-hipps-label super-mds-hipps-label--potential">Potential HIPPS</div>
            <div class="super-mds-hipps-code super-mds-hipps-code--potential">${potentialHipps}</div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// ============================================================================
// COMPLIANCE CARD (Shows ALL 5 checks)
// ============================================================================

function renderComplianceCard(data) {
  const compliance = data.compliance || {};
  const checks = compliance.checks || {};
  const passed = compliance.summary?.passed || 0;
  const total = compliance.summary?.total || 5;

  const checkOrder = ['bims', 'phq9', 'gg', 'orders', 'therapyDocs'];
  const checkLabels = {
    bims: 'BIMS',
    phq9: 'PHQ-9',
    gg: 'GG',
    orders: 'Orders',
    therapyDocs: 'Therapy'
  };

  const checkItems = checkOrder.map(key => {
    const check = checks[key] || { status: 'unknown', message: 'No data' };
    const isPassed = check.status === 'passed';
    const icon = isPassed ? '&#10003;' : '&#10007;';
    const statusClass = isPassed ? 'super-mds-compliance-item--passed' : 'super-mds-compliance-item--failed';

    // Extract specific assessment info from foundUda if available
    const foundUda = check.foundUda;
    let detailText = '';
    let dateText = '';

    if (isPassed && foundUda) {
      // Show the specific assessment name/description
      detailText = foundUda.description || check.message || '';
      // Show both date and locked date in one line
      const assessDate = foundUda.date ? formatDate(foundUda.date) : '';
      const lockedDate = foundUda.lockedDate ? formatDate(foundUda.lockedDate) : '';
      if (assessDate && lockedDate) {
        dateText = `${assessDate} · Locked ${lockedDate}`;
      } else if (lockedDate) {
        dateText = `Locked ${lockedDate}`;
      } else if (assessDate) {
        dateText = assessDate;
      }
    } else {
      // For failed or no foundUda, show the message
      detailText = check.message || '';
    }

    // For orders/therapy, show the count
    const showViewBtn = (key === 'orders' || key === 'therapyDocs') && !isPassed;

    return `
      <div class="super-mds-compliance-item ${statusClass}">
        <span class="super-mds-compliance-item__icon">${icon}</span>
        <span class="super-mds-compliance-item__label">${checkLabels[key]}</span>
        <span class="super-mds-compliance-item__detail">${escapeHtml(detailText)}</span>
        ${dateText ? `<span class="super-mds-compliance-item__date">${dateText}</span>` : ''}
        ${showViewBtn ? `<button class="super-mds-compliance-item__btn" data-action="view-${key}">View</button>` : ''}
      </div>
    `;
  }).join('');

  const statusClass = passed === total ? 'super-mds-card--success' : 'super-mds-card--warning';

  return `
    <div class="super-mds-card ${statusClass} super-mds-card--collapsible" data-section="compliance">
      <div class="super-mds-card__header super-mds-card__header--clickable">
        <span class="super-mds-card__toggle">&#9662;</span>
        <span class="super-mds-card__title">Compliance</span>
        <span class="super-mds-card__badge">${passed}/${total} &#10003;</span>
      </div>
      <div class="super-mds-card__content">
        ${checkItems}
      </div>
    </div>
  `;
}

// ============================================================================
// WOULD CHANGE HIPPS CARD (Green)
// ============================================================================

function renderWouldChangeHippsCard(data) {
  const enhancedDetections = data.enhancedDetections || [];

  // Get items that would change HIPPS and are NOT queries
  const hippsChangingItems = enhancedDetections.filter(d =>
    d.wouldChangeHipps &&
    d.solverStatus !== 'query_sent' &&
    d.solverStatus !== 'awaiting_response'
  );

  if (hippsChangingItems.length === 0) {
    return '';
  }

  const items = hippsChangingItems.map(d => {
    const impactParts = [];
    if (d.impact?.slp?.wouldChangeGroup) {
      impactParts.push(`SLP: ${d.impact.slp.currentGroup} &#8594; ${d.impact.slp.newGroup}`);
    }
    if (d.impact?.nta?.wouldChangeLevel) {
      impactParts.push(`NTA: ${d.impact.nta.currentLevel} &#8594; ${d.impact.nta.newLevel}`);
    }
    if (d.impact?.nursing?.wouldChangeGroup) {
      impactParts.push(`Nursing: ${d.impact.nursing.currentPaymentGroup} &#8594; ${d.impact.nursing.newPaymentGroup}`);
    }
    if (d.impact?.ptot?.wouldChangeGroup) {
      impactParts.push(`PT/OT: ${d.impact.ptot.currentGroup} &#8594; ${d.impact.ptot.newGroup}`);
    }
    const impactStr = impactParts.join(', ');

    return `
      <div class="super-mds-impact-item" data-item="${d.mdsItem}">
        <span class="super-mds-impact-item__code">${escapeHtml(d.mdsItem)}</span>
        <span class="super-mds-impact-item__name">${escapeHtml(d.itemName || '')}</span>
        <span class="super-mds-impact-item__change">${impactStr}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="super-mds-card super-mds-card--green super-mds-card--collapsible" data-section="would-change-hipps">
      <div class="super-mds-card__header super-mds-card__header--clickable">
        <span class="super-mds-card__toggle">&#9662;</span>
        <span class="super-mds-card__icon">&#9889;</span>
        <span class="super-mds-card__title">${hippsChangingItems.length} Would Change HIPPS</span>
      </div>
      <div class="super-mds-card__content">
        ${items}
        <div class="super-mds-card__hint">Click item to code or send query</div>
      </div>
    </div>
  `;
}

// ============================================================================
// PENDING QUERIES CARD (Yellow) - Uses data.outstandingQueries
// ============================================================================

function renderPendingQueriesCard(data) {
  // Outstanding queries are in data.outstandingQueries
  const queries = data.outstandingQueries || [];

  // Filter for pending/sent (though outstandingQueries should already be filtered)
  const pendingQueries = queries.filter(q =>
    q.status === 'sent' ||
    q.status === 'pending' ||
    q.status === 'awaiting_response'
  );

  if (pendingQueries.length === 0) {
    return '';
  }

  const items = pendingQueries.map(q => {
    const impact = q.pdpmImpact || {};
    const componentImpacts = impact.componentImpacts || {};
    const wouldChangeHipps = impact.wouldChangeHipps;

    // Build impact string from componentImpacts
    const impactParts = [];
    if (componentImpacts.slp?.wouldChangeGroup) {
      impactParts.push(`SLP: ${componentImpacts.slp.currentGroup} &#8594; ${componentImpacts.slp.newGroup}`);
    }
    if (componentImpacts.nta?.wouldChangeLevel) {
      impactParts.push(`NTA: ${componentImpacts.nta.currentLevel} &#8594; ${componentImpacts.nta.newLevel}`);
    }
    if (componentImpacts.nursing?.wouldChangeGroup) {
      impactParts.push(`Nursing: ${componentImpacts.nursing.currentPaymentGroup} &#8594; ${componentImpacts.nursing.newPaymentGroup}`);
    }
    if (componentImpacts.ptot?.wouldChangeGroup) {
      impactParts.push(`PT/OT: ${componentImpacts.ptot.currentGroup} &#8594; ${componentImpacts.ptot.newGroup}`);
    }
    const impactStr = impactParts.join(', ');

    const sentDate = q.sentAt ? formatRelativeDate(q.sentAt) : '';

    return `
      <div class="super-mds-query-item ${wouldChangeHipps ? 'super-mds-query-item--hipps-change' : ''}" data-item="${q.mdsItem}" data-query-id="${q.id || ''}">
        <span class="super-mds-query-item__code">${escapeHtml(q.mdsItem)}</span>
        <span class="super-mds-query-item__name">${escapeHtml(q.mdsItemName || '')}</span>
        <span class="super-mds-query-item__status">&#9992; sent${sentDate ? ` ${sentDate}` : ''}</span>
        ${impactStr ? `<span class="super-mds-query-item__change">${impactStr}</span>` : ''}
        <span class="super-mds-query-item__arrow">&#10095;</span>
      </div>
    `;
  }).join('');

  // Calculate potential HIPPS from the first query that would change HIPPS
  const hippsChangingQuery = pendingQueries.find(q => q.pdpmImpact?.wouldChangeHipps);
  const potentialHipps = hippsChangingQuery?.pdpmImpact?.newHipps;

  return `
    <div class="super-mds-card super-mds-card--yellow super-mds-card--collapsible" data-section="pending-queries">
      <div class="super-mds-card__header super-mds-card__header--clickable">
        <span class="super-mds-card__toggle">&#9662;</span>
        <span class="super-mds-card__icon">&#9201;</span>
        <span class="super-mds-card__title">Pending Queries (${pendingQueries.length})</span>
        ${potentialHipps ? `<span class="super-mds-card__potential">&#8594; ${potentialHipps}</span>` : ''}
      </div>
      <div class="super-mds-card__content">
        ${items}
        <div class="super-mds-card__hint">Click a query to view details</div>
      </div>
    </div>
  `;
}

// ============================================================================
// RECENT QUERIES CARD (Gray) - Uses data.signedQueries/completedQueries
// ============================================================================

function renderRecentQueriesCard(data) {
  // Check for signed/completed queries in various possible fields
  const signedQueries = data.signedQueries || data.completedQueries || data.recentQueries || [];

  // Also check outstandingQueries for any that are signed (shouldn't be there but just in case)
  const allQueries = [...signedQueries, ...(data.outstandingQueries || [])];

  // Get completed/signed queries
  const recentQueries = allQueries.filter(q =>
    q.status === 'signed' ||
    q.status === 'completed' ||
    q.status === 'resolved'
  );

  if (recentQueries.length === 0) {
    return '';
  }

  const items = recentQueries.map(q => {
    const signedDate = q.signedAt || q.completedAt;

    return `
      <div class="super-mds-query-item super-mds-query-item--signed" data-item="${q.mdsItem}" data-query-id="${q.id || ''}">
        <span class="super-mds-query-item__code">${escapeHtml(q.mdsItem)}</span>
        <span class="super-mds-query-item__name">${escapeHtml(q.mdsItemName || '')}</span>
        <span class="super-mds-query-item__status super-mds-query-item__status--signed">&#10003; signed</span>
        ${signedDate ? `<span class="super-mds-query-item__date">${formatDate(signedDate)}</span>` : ''}
        <span class="super-mds-query-item__arrow">&#10095;</span>
      </div>
    `;
  }).join('');

  return `
    <div class="super-mds-card super-mds-card--gray super-mds-card--collapsible super-mds-card--collapsed" data-section="recent-queries">
      <div class="super-mds-card__header super-mds-card__header--clickable">
        <span class="super-mds-card__toggle">&#9662;</span>
        <span class="super-mds-card__icon">&#10003;</span>
        <span class="super-mds-card__title">Recent Queries (${recentQueries.length})</span>
      </div>
      <div class="super-mds-card__content">
        ${items}
      </div>
    </div>
  `;
}

// ============================================================================
// NO HIPPS CHANGE SECTION (Collapsed)
// ============================================================================

function renderNoHippsChangeSection(data) {
  const enhancedDetections = data.enhancedDetections || [];

  // Get items that don't change HIPPS
  const noChangeItems = enhancedDetections.filter(d =>
    !d.wouldChangeHipps &&
    d.solverStatus !== 'query_sent' &&
    d.solverStatus !== 'awaiting_response' &&
    d.solverStatus !== 'query_signed' &&
    d.solverStatus !== 'coded_correctly'
  );

  if (noChangeItems.length === 0) {
    return '';
  }

  const items = noChangeItems.map(d => {
    return `
      <div class="super-mds-detection-item" data-item="${d.mdsItem}">
        <span class="super-mds-detection-item__code">${escapeHtml(d.mdsItem)}</span>
        <span class="super-mds-detection-item__name">${escapeHtml(d.itemName || '')}</span>
        <span class="super-mds-detection-item__section">Section ${escapeHtml(d.section || '?')}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="super-mds-section super-mds-section--collapsible super-mds-section--collapsed" data-section="no-hipps-change">
      <div class="super-mds-section__header">
        <span class="super-mds-section__toggle">&#9662;</span>
        <span class="super-mds-section__title">${noChangeItems.length} Detected (No HIPPS Change)</span>
      </div>
      <div class="super-mds-section__content">
        ${items}
      </div>
    </div>
  `;
}

// ============================================================================
// PATIENT VIEW - MDS LIST
// ============================================================================

function renderPatientMDSList(data) {
  const assessments = data.assessments || [];

  if (assessments.length === 0) {
    return `
      <div class="super-patient-empty">
        <div class="super-patient-empty__icon">&#128203;</div>
        <div class="super-patient-empty__text">No MDS assessments found</div>
        <div class="super-patient-empty__hint">This patient has no MDS assessments on file.</div>
      </div>
    `;
  }

  // Sort: open first, then by ARD date descending
  const sortedAssessments = [...assessments].sort((a, b) => {
    // Open status first
    if (a.status === 'open' && b.status !== 'open') return -1;
    if (b.status === 'open' && a.status !== 'open') return 1;
    // Then by ARD date descending
    return new Date(b.ardDate) - new Date(a.ardDate);
  });

  const mdsCards = sortedAssessments.map(a => {
    const statusClass = a.status === 'open' ? 'super-patient-mds--open' :
                        a.status === 'locked' ? 'super-patient-mds--locked' :
                        'super-patient-mds--completed';

    const statusLabel = a.status === 'open' ? 'OPEN' :
                        a.status === 'locked' ? 'LOCKED' :
                        'COMPLETE';

    // Build info badges
    const infoParts = [];
    if (a.actionCount > 0) {
      infoParts.push(`<span class="super-patient-mds__info super-patient-mds__info--action">${a.actionCount} items</span>`);
    }
    if (a.queryCount > 0) {
      infoParts.push(`<span class="super-patient-mds__info super-patient-mds__info--query">${a.queryCount} ${a.queryCount > 1 ? 'queries' : 'query'}</span>`);
    }

    const hippsDisplay = a.currentHipps || null;
    const hasChange = a.potentialHipps && a.potentialHipps !== a.currentHipps;

    return `
      <div class="super-patient-mds ${statusClass}" data-assessment-id="${a.id}">
        <div class="super-patient-mds__main">
          <div class="super-patient-mds__type">${escapeHtml(a.type || 'MDS')}</div>
          <div class="super-patient-mds__meta">
            <span class="super-patient-mds__status">${statusLabel}</span>
            <span class="super-patient-mds__date">${formatDate(a.ardDate)}</span>
          </div>
        </div>
        <div class="super-patient-mds__right">
          ${hippsDisplay ? `
            <div class="super-patient-mds__hipps">
              <span class="super-patient-mds__hipps-code">${hippsDisplay}</span>
              ${hasChange ? `<span class="super-patient-mds__hipps-arrow">&#8594; ${a.potentialHipps}</span>` : ''}
            </div>
          ` : ''}
          ${infoParts.length > 0 ? `<div class="super-patient-mds__infos">${infoParts.join('')}</div>` : ''}
        </div>
        <div class="super-patient-mds__chevron">&#10095;</div>
      </div>
    `;
  }).join('');

  return `
    <div class="super-patient-mds-section">
      <div class="super-patient-mds-section__title">MDS Assessments</div>
      <div class="super-patient-mds-section__list">
        ${mdsCards}
      </div>
    </div>
  `;
}

// ============================================================================
// LIST VIEW (Legacy/Global)
// ============================================================================

function renderMDSList(assessments, scope) {
  if (!assessments || assessments.length === 0) {
    return `
      <div class="super-mds-list-empty">
        <div class="super-mds-list-empty__text">
          ${scope === 'patient' ? 'No MDS assessments found for this patient.' : 'No MDS assessments available.'}
        </div>
        <div class="super-mds-list-empty__hint">
          ${scope === 'global' ? 'Navigate to a patient or MDS page to see data.' : ''}
        </div>
      </div>
    `;
  }

  const items = assessments.map(a => {
    const hippsDisplay = a.potentialHipps && a.potentialHipps !== a.currentHipps
      ? `${a.currentHipps || '?????'} &#8594; ${a.potentialHipps}`
      : a.currentHipps || '';

    return `
      <div class="super-mds-list-card" data-assessment-id="${a.id}">
        <div class="super-mds-list-card__header">
          <span class="super-mds-list-card__patient">${escapeHtml(a.patientName || 'Unknown')}</span>
          <span class="super-mds-list-card__type">${escapeHtml(a.description || 'MDS')} (${formatDate(a.ardDate)})</span>
        </div>
        ${hippsDisplay ? `<div class="super-mds-list-card__hipps">${hippsDisplay}</div>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="super-mds-list">
      <div class="super-mds-list__items">
        ${items}
      </div>
    </div>
  `;
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

function setupMDSListeners(container) {
  // Collapsible sections (legacy)
  container.querySelectorAll('.super-mds-section--collapsible .super-mds-section__header').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('super-mds-section--collapsed');
    });
  });

  // Collapsible cards
  container.querySelectorAll('.super-mds-card--collapsible .super-mds-card__header--clickable').forEach(header => {
    header.addEventListener('click', (e) => {
      // Don't toggle if clicking on a button inside the header
      if (e.target.closest('.super-mds-card__btn')) return;
      header.parentElement.classList.toggle('super-mds-card--collapsed');
    });
  });

  // Compliance view buttons
  container.querySelectorAll('.super-mds-compliance-item__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      if (action) {
        handleComplianceAction(action);
      }
    });
  });

  // Impact items (Would Change HIPPS)
  container.querySelectorAll('.super-mds-impact-item').forEach(item => {
    item.addEventListener('click', () => {
      const mdsItem = item.dataset.item;
      if (mdsItem) {
        handleImpactItemClick(mdsItem);
      }
    });
  });

  // Query items (Outstanding and Signed)
  container.querySelectorAll('.super-mds-query-item').forEach(item => {
    item.addEventListener('click', () => {
      const queryId = item.dataset.queryId;
      const mdsItem = item.dataset.item;
      handleQueryClick(queryId, mdsItem);
    });
  });

  // Detection items (No HIPPS Change)
  container.querySelectorAll('.super-mds-detection-item').forEach(item => {
    item.addEventListener('click', () => {
      const mdsItem = item.dataset.item;
      if (mdsItem) {
        navigateToMDSItem(mdsItem);
      }
    });
  });

  // Nav header back buttons (new simplified navigation)
  container.querySelectorAll('.super-nav-header__back').forEach(btn => {
    btn.addEventListener('click', () => {
      const scope = btn.dataset.scope;
      const patientId = btn.dataset.patientId;

      if (scope === 'global') {
        // Go back to dashboard view - clear manual context
        MDSViewState.manualContext = null;
        MDSViewState.context = null;
        MDSViewState.data = null;
        if (typeof switchView === 'function') {
          switchView('dashboard');
        }
      } else if (scope === 'patient' && patientId) {
        // Go back to patient view
        MDSViewState.manualContext = {
          scope: 'patient',
          assessmentId: null,
          patientId,
          patientName: MDSViewState.data?.patientName || null
        };
        MDSViewState.context = MDSViewState.manualContext;
        MDSViewState.data = null;
        renderMDSView();
      }
    });
  });

  // Legacy breadcrumb navigation (keep for compatibility)
  container.querySelectorAll('.super-mds-breadcrumb__item--link').forEach(item => {
    item.addEventListener('click', () => {
      const scope = item.dataset.scope;
      const patientId = item.dataset.patientId;

      if (scope === 'global') {
        MDSViewState.context = { scope: 'global', assessmentId: null, patientId: null };
      } else if (scope === 'patient' && patientId) {
        MDSViewState.context = { scope: 'patient', assessmentId: null, patientId };
      }
      MDSViewState.data = null;
      renderMDSView(true);
    });
  });

  // Patient MDS cards (new patient view)
  container.querySelectorAll('.super-patient-mds').forEach(card => {
    card.addEventListener('click', () => {
      const assessmentId = card.dataset.assessmentId;
      if (assessmentId) {
        const currentPatientId = MDSViewState.context?.patientId;
        const currentPatientName = MDSViewState.data?.patientName;
        // Set manual context for in-menu navigation
        MDSViewState.manualContext = {
          scope: 'mds',
          assessmentId,
          patientId: currentPatientId,
          patientName: currentPatientName
        };
        MDSViewState.context = MDSViewState.manualContext;
        MDSViewState.data = null;
        renderMDSView();
      }
    });
  });

  // Legacy list item clicks
  container.querySelectorAll('.super-mds-list-card').forEach(card => {
    card.addEventListener('click', () => {
      const assessmentId = card.dataset.assessmentId;
      if (assessmentId) {
        MDSViewState.context = { scope: 'mds', assessmentId, patientId: MDSViewState.context?.patientId };
        MDSViewState.data = null;
        renderMDSView(true);
      }
    });
  });
}

// ============================================================================
// ACTION HANDLERS
// ============================================================================

function handleComplianceAction(action) {
  console.log('Compliance action:', action);
  // TODO: Implement view unsigned orders/therapy docs
}

function handleImpactItemClick(mdsItem) {
  console.log('Impact item clicked:', mdsItem);
  // TODO: Navigate to MDS item or show code/query options
  navigateToMDSItem(mdsItem);
}

function handleQueryClick(queryId, mdsItem) {
  console.log('Query clicked:', queryId, mdsItem);

  // Find the query in the data
  const allQueries = [
    ...(MDSViewState.data?.outstandingQueries || []),
    ...(MDSViewState.data?.signedQueries || []),
    ...(MDSViewState.data?.completedQueries || [])
  ];

  const query = allQueries.find(q => q.id === queryId);
  if (!query) {
    console.error('Super Menu: Query not found:', queryId);
    return;
  }

  // Use the existing QueryDetailModal if available
  if (window.QueryDetailModal) {
    // Build a result object that the modal expects
    const result = {
      recommendation: query.aiGeneratedNote || query.nurseEditedNote || query.queryReason || '',
      icd10Code: query.selectedIcd10Code || query.recommendedIcd10?.[0]?.code,
      icd10Description: query.selectedIcd10Description || query.recommendedIcd10?.[0]?.description
    };
    window.QueryDetailModal.show(query, result);
  } else {
    console.warn('Super Menu: QueryDetailModal not available');
  }
}

function navigateToMDSItem(itemCode) {
  console.log('Navigate to MDS item:', itemCode);
  // TODO: Navigate to specific MDS item in PCC
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function formatRelativeDate(dateStr) {
  if (!dateStr) return '';

  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'today';
  if (diffDays === 1) return '1d ago';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return formatDate(dateStr);
}
