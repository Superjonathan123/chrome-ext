/**
 * Super LTC Demo Initialization
 * Sets up the demo environment and wires up all features
 */

(function() {
  'use strict';

  // Current state
  let currentPatientId = '2657226';
  let currentPage = 'meddiag';

  // ============================================
  // INITIALIZATION
  // ============================================

  document.addEventListener('DOMContentLoaded', function() {
    // Set up URL params for extension detection
    const url = new URL(window.location.href);
    url.searchParams.set('ESOLclientid', currentPatientId);
    window.history.replaceState({}, '', url);

    // Initialize page
    loadPatientData(currentPatientId);
    setupEventListeners();
    setupSuperMenuMock();

    console.log('[Demo] Initialized with patient:', currentPatientId);
  });

  // ============================================
  // PATIENT DATA LOADING
  // ============================================

  function loadPatientData(patientId) {
    const patient = DemoData.getPatient(patientId);
    if (!patient) {
      console.error('[Demo] Patient not found:', patientId);
      return;
    }

    // Update patient banner
    document.getElementById('patientName').textContent = `${patient.name} (${patient.externalId})`;
    document.getElementById('patientStatus').textContent = patient.status;
    document.getElementById('patientLocation').textContent = `${patient.unit} ${patient.room}`;
    document.getElementById('patientGender').textContent = patient.gender;
    document.getElementById('patientDob').textContent = patient.dob;
    document.getElementById('patientAge').textContent = patient.age;
    document.getElementById('patientPhysician').textContent = patient.physician;
    document.getElementById('allergies').textContent = patient.allergies;
    document.getElementById('codeStatus').textContent = patient.codeStatus;

    // Update vitals
    if (patient.vitals) {
      loadVitals(patient.vitals);
    }

    // Load diagnoses
    loadDiagnoses(patientId);
  }

  function loadVitals(vitals) {
    const grid = document.getElementById('vitalsGrid');
    const vitalsHtml = [];

    const vitalsConfig = [
      { key: 'bp', label: 'BP' },
      { key: 'temp', label: 'Temp' },
      { key: 'pulse', label: 'Pulse' },
      { key: 'weight', label: 'Weight' },
      { key: 'resp', label: 'Resp' },
      { key: 'bs', label: 'BS' },
      { key: 'o2', label: 'O2' },
      { key: 'pain', label: 'Pain' }
    ];

    vitalsConfig.forEach(v => {
      const data = vitals[v.key];
      if (data) {
        const alertClass = data.alert ? 'pcc-vital-value--alert' : '';
        vitalsHtml.push(`
          <div class="pcc-vital-item">
            <span class="pcc-vital-value ${alertClass}">${v.label}: ${data.value}</span>
            <span class="pcc-vital-date">${data.date}</span>
          </div>
        `);
      }
    });

    grid.innerHTML = vitalsHtml.join('');
  }

  function loadDiagnoses(patientId) {
    const diagnoses = DemoData.getDiagnoses(patientId);
    const tbody = document.getElementById('diagnosisTableBody');

    const rows = diagnoses.map(dx => {
      const pdpmBadge = dx.pdpm ? `<span class="pcc-pdpm-badge">${dx.pdpm}</span>` : '';
      return `
        <tr>
          <td><a class="view-link" href="#">view</a></td>
          <td class="pcc-code-cell">${dx.code}</td>
          <td>${dx.description}</td>
          <td>${pdpmBadge}</td>
          <td>${dx.category || ''}</td>
          <td>${dx.date}</td>
          <td>${dx.rank}</td>
          <td>${dx.classification}</td>
        </tr>
      `;
    }).join('');

    tbody.innerHTML = rows;
  }

  // ============================================
  // EVENT LISTENERS
  // ============================================

  function setupEventListeners() {
    // Patient tabs
    document.querySelectorAll('.pcc-patient-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        const page = this.dataset.page;
        switchPage(page);
      });
    });

    // AI Code Patient button
    document.getElementById('aiCodePatientBtn')?.addEventListener('click', function() {
      openICD10Viewer();
    });
  }

  function switchPage(page) {
    // Update active tab
    document.querySelectorAll('.pcc-patient-tab').forEach(tab => {
      tab.classList.remove('pcc-patient-tab--active');
      if (tab.dataset.page === page) {
        tab.classList.add('pcc-patient-tab--active');
      }
    });

    currentPage = page;

    // Update URL
    const url = new URL(window.location.href);
    if (page === 'mds') {
      url.pathname = '/clinical/mds3/sectionlisting.xhtml';
      url.searchParams.set('ESOLassessid', '4860265');
    } else if (page === 'meddiag') {
      url.pathname = '/clinical/meddiag/medDiagChart.xhtml';
    }
    window.history.pushState({}, '', url);

    // Load page content (would switch views in full implementation)
    console.log('[Demo] Switched to page:', page);
  }

  // ============================================
  // ICD-10 VIEWER
  // ============================================

  function openICD10Viewer() {
    if (window.ICD10Viewer) {
      window.ICD10Viewer.open();
    } else {
      console.log('[Demo] ICD10Viewer not loaded, showing mock modal');
      showMockICD10Modal();
    }
  }

  function showMockICD10Modal() {
    const modal = document.createElement('div');
    modal.id = 'demo-icd10-modal';
    modal.innerHTML = `
      <div style="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:10000;display:flex;align-items:center;justify-content:center;">
        <div style="background:white;width:95%;height:90%;border-radius:8px;display:flex;flex-direction:column;overflow:hidden;">
          <div style="padding:16px;border-bottom:1px solid #ddd;display:flex;justify-content:space-between;align-items:center;background:#f5f5f5;">
            <div style="display:flex;align-items:center;gap:12px;">
              <button onclick="document.getElementById('demo-icd10-modal').remove()" style="padding:6px 12px;cursor:pointer;">← Back</button>
              <span style="font-weight:bold;font-size:16px;">ICD-10 Viewer</span>
              <span style="color:#666;">Doe, Jane</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <span>12 annotations</span>
              <button onclick="document.getElementById('demo-icd10-modal').remove()" style="padding:6px 12px;cursor:pointer;">×</button>
            </div>
          </div>
          <div style="flex:1;display:flex;overflow:hidden;">
            <!-- Sidebar -->
            <div style="width:280px;border-right:1px solid #ddd;overflow-y:auto;background:#fafafa;">
              <div style="padding:12px;border-bottom:1px solid #ddd;">
                <div style="display:flex;gap:8px;">
                  <button style="flex:1;padding:8px;background:#69923a;color:white;border:none;border-radius:4px;cursor:pointer;">NTA (4)</button>
                  <button style="flex:1;padding:8px;background:#fff;border:1px solid #ddd;border-radius:4px;cursor:pointer;">SLP (3)</button>
                  <button style="flex:1;padding:8px;background:#fff;border:1px solid #ddd;border-radius:4px;cursor:pointer;">Other (5)</button>
                </div>
              </div>
              <div style="padding:8px;">
                ${renderMockSidebarItems()}
              </div>
            </div>
            <!-- Evidence Panel -->
            <div style="width:400px;border-right:1px solid #ddd;overflow-y:auto;padding:16px;">
              <h3 style="margin:0 0 16px 0;font-size:14px;">Evidence for I69.320</h3>
              <div style="background:#f0f7ff;border-left:3px solid #0066cc;padding:12px;margin-bottom:12px;">
                <div style="font-size:11px;color:#666;margin-bottom:4px;">SLP_Evaluation_1_20 - Page 2</div>
                <div style="font-style:italic;">"Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia."</div>
              </div>
              <div style="display:flex;gap:8px;margin-top:16px;">
                <button style="flex:1;padding:10px;background:#69923a;color:white;border:none;border-radius:4px;cursor:pointer;">Approve Diagnosis</button>
                <button style="padding:10px 16px;background:#fff;border:1px solid #ddd;border-radius:4px;cursor:pointer;">Skip</button>
              </div>
            </div>
            <!-- PDF Viewer -->
            <div style="flex:1;background:#525659;display:flex;align-items:center;justify-content:center;color:white;">
              <div style="text-align:center;">
                <div style="font-size:48px;margin-bottom:16px;">📄</div>
                <div>PDF Viewer</div>
                <div style="font-size:12px;opacity:0.7;margin-top:8px;">SLP_Evaluation_1_20.pdf</div>
                <div style="font-size:11px;opacity:0.5;margin-top:4px;">Page 2 of 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function renderMockSidebarItems() {
    const items = [
      { code: 'I69.320', desc: 'Aphasia following cerebral infarction', conf: 92 },
      { code: 'G30.9', desc: "Alzheimer's disease, unspecified", conf: 78 },
      { code: 'I69.354', desc: 'Hemiplegia following cerebral infarction', conf: 88 },
      { code: 'N18.3', desc: 'Chronic kidney disease, stage 3', conf: 90 }
    ];

    return items.map((item, i) => `
      <div style="padding:12px;background:${i === 0 ? '#e8f4e8' : 'white'};border:1px solid ${i === 0 ? '#69923a' : '#ddd'};border-radius:6px;margin-bottom:8px;cursor:pointer;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
          <span style="font-weight:bold;color:#0066cc;">${item.code}</span>
          <span style="font-size:10px;background:#e8e8e8;padding:2px 6px;border-radius:10px;">${item.conf}%</span>
        </div>
        <div style="font-size:11px;color:#333;">${item.desc}</div>
      </div>
    `).join('');
  }

  // ============================================
  // SUPER MENU MOCK
  // ============================================

  function setupSuperMenuMock() {
    // Remove any existing FABs (including extension FAB on left side)
    const existingFabs = document.querySelectorAll('.super-chat-fab, #super-chat-button, #super-menu-fab');
    existingFabs.forEach(fab => {
      console.log('[Demo Init] Removing existing FAB:', fab.id || fab.className);
      fab.remove();
    });

    // Create FAB
    const fab = document.createElement('button');
    fab.id = 'super-menu-fab';
    fab.innerHTML = `
      <span style="font-weight:bold;font-size:18px;">S</span>
    `;
    fab.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
    `;
    fab.addEventListener('mouseenter', () => fab.style.transform = 'scale(1.1)');
    fab.addEventListener('mouseleave', () => fab.style.transform = 'scale(1)');
    fab.addEventListener('click', toggleSuperMenu);
    document.body.appendChild(fab);

    // Create panel (hidden initially)
    const panel = document.createElement('div');
    panel.id = 'super-menu-panel';
    panel.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 420px;
      height: 600px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      z-index: 9998;
      display: none;
      flex-direction: column;
      overflow: hidden;
    `;
    panel.innerHTML = renderSuperMenuContent();
    document.body.appendChild(panel);
  }

  function toggleSuperMenu() {
    const panel = document.getElementById('super-menu-panel');
    const fab = document.getElementById('super-menu-fab');

    if (panel.style.display === 'none') {
      panel.style.display = 'flex';
      fab.style.display = 'none';
      setupSuperMenuListeners();
    } else {
      panel.style.display = 'none';
      fab.style.display = 'flex';
    }
  }

  function renderSuperMenuContent() {
    const dashboard = DemoData.facilityDashboard;

    return `
      <div style="padding:12px 16px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-weight:bold;font-size:16px;">S</span>
          <span style="font-size:13px;">Super LTC</span>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="super-menu-nav-btn" data-view="dashboard" style="padding:6px 12px;background:rgba(255,255,255,0.2);border:none;border-radius:4px;color:white;cursor:pointer;font-size:11px;">Dashboard</button>
          <button class="super-menu-nav-btn" data-view="mds" style="padding:6px 12px;background:transparent;border:none;border-radius:4px;color:white;cursor:pointer;font-size:11px;">MDS</button>
          <button class="super-menu-nav-btn" data-view="chat" style="padding:6px 12px;background:transparent;border:none;border-radius:4px;color:white;cursor:pointer;font-size:11px;">AI Chat</button>
        </div>
        <button onclick="toggleSuperMenu()" style="background:transparent;border:none;color:white;cursor:pointer;font-size:18px;">×</button>
      </div>

      <div id="super-menu-content" style="flex:1;overflow-y:auto;padding:16px;">
        ${renderDashboardView(dashboard)}
      </div>
    `;
  }

  function renderDashboardView(dashboard) {
    return `
      <!-- Tabs -->
      <div style="display:flex;gap:8px;margin-bottom:16px;">
        <button class="dash-tab dash-tab--active" data-tab="queries" style="flex:1;padding:10px;border:none;border-radius:6px;cursor:pointer;font-size:12px;">
          Queries <span style="background:#ff6b35;color:white;padding:2px 6px;border-radius:10px;font-size:10px;margin-left:4px;">${dashboard.queriesToSend.length + dashboard.awaitingSignatures.length}</span>
        </button>
        <button class="dash-tab" data-tab="mds" style="flex:1;padding:10px;border:1px solid #ddd;border-radius:6px;cursor:pointer;background:white;font-size:12px;">
          MDS <span style="background:#69923a;color:white;padding:2px 6px;border-radius:10px;font-size:10px;margin-left:4px;">${dashboard.hippsOpportunities.length}</span>
        </button>
        <button class="dash-tab" data-tab="all" style="flex:1;padding:10px;border:1px solid #ddd;border-radius:6px;cursor:pointer;background:white;font-size:12px;">
          All <span style="background:#666;color:white;padding:2px 6px;border-radius:10px;font-size:10px;margin-left:4px;">${dashboard.allAssessments.length}</span>
        </button>
      </div>

      <!-- Sub-tabs -->
      <div style="display:flex;gap:4px;margin-bottom:16px;">
        <button class="dash-subtab dash-subtab--active" data-subtab="toSend" style="padding:6px 12px;border:none;background:#667eea;color:white;border-radius:4px;cursor:pointer;font-size:11px;">To Send (${dashboard.queriesToSend.length})</button>
        <button class="dash-subtab" data-subtab="awaiting" style="padding:6px 12px;border:1px solid #ddd;background:white;border-radius:4px;cursor:pointer;font-size:11px;">Awaiting (${dashboard.awaitingSignatures.length})</button>
        <button class="dash-subtab" data-subtab="signed" style="padding:6px 12px;border:1px solid #ddd;background:white;border-radius:4px;cursor:pointer;font-size:11px;">Signed (${dashboard.recentlySigned.length})</button>
      </div>

      <!-- Content -->
      <div id="dash-content">
        ${renderQueriesList(dashboard.queriesToSend, 'toSend')}
      </div>
    `;
  }

  function renderQueriesList(queries, type) {
    if (queries.length === 0) {
      return `
        <div style="text-align:center;padding:40px;color:#666;">
          <div style="font-size:32px;margin-bottom:8px;">✨</div>
          <div>No queries ${type === 'toSend' ? 'to send' : type === 'awaiting' ? 'awaiting' : 'signed recently'}</div>
        </div>
      `;
    }

    return queries.map(q => `
      <div class="demo-query-card" data-query-id="${q.id}" data-query-type="${type}" ${type === 'signed' && q.pdfPath ? `data-pdf-path="${q.pdfPath}"` : ''} style="padding:12px;border:1px solid #eee;border-radius:8px;margin-bottom:8px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#f9f9f9'" onmouseout="this.style.background='white'">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <div style="font-weight:600;color:#333;">${q.patientName}</div>
            <div style="font-size:11px;color:#666;margin-top:2px;">${q.mdsItem} - ${q.mdsItemName}</div>
            ${type === 'signed' && q.pdfPath ? '<div style="font-size:10px;color:#0066cc;margin-top:4px;">📄 Click to view signed PDF</div>' : ''}
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            ${type === 'toSend' ? '<span style="background:#ffeaa7;color:#856404;padding:2px 8px;border-radius:4px;font-size:10px;">To Send</span>' : ''}
            ${type === 'awaiting' ? '<span style="background:#fdcb6e;color:#856404;padding:2px 8px;border-radius:4px;font-size:10px;">Awaiting</span>' : ''}
            ${type === 'signed' ? '<span style="background:#d4edda;color:#155724;padding:2px 8px;border-radius:4px;font-size:10px;">Signed</span>' : ''}
            <span style="color:#999;">›</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderMDSList(items) {
    return items.map(item => `
      <div style="padding:12px;border:1px solid #eee;border-radius:8px;margin-bottom:8px;cursor:pointer;" onmouseover="this.style.background='#f9f9f9'" onmouseout="this.style.background='white'">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-weight:600;color:#333;">${item.patientName}</div>
            <div style="font-size:11px;color:#666;margin-top:2px;">${item.currentHipps} → ${item.potentialHipps}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="background:#d4edda;color:#155724;padding:2px 8px;border-radius:4px;font-size:10px;">${item.hippsChangingCount} items</span>
            <span style="color:#999;">›</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function setupSuperMenuListeners() {
    const dashboard = DemoData.facilityDashboard;

    // Tab clicks
    document.querySelectorAll('.dash-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.dash-tab').forEach(t => {
          t.classList.remove('dash-tab--active');
          t.style.background = 'white';
          t.style.border = '1px solid #ddd';
        });
        this.classList.add('dash-tab--active');
        this.style.background = '#667eea';
        this.style.color = 'white';
        this.style.border = 'none';

        const tabType = this.dataset.tab;
        const content = document.getElementById('dash-content');

        if (tabType === 'mds') {
          content.innerHTML = renderMDSList(dashboard.hippsOpportunities);
        } else if (tabType === 'all') {
          content.innerHTML = renderAllAssessments(dashboard.allAssessments);
        } else {
          content.innerHTML = renderQueriesList(dashboard.queriesToSend, 'toSend');
        }
      });
    });

    // Sub-tab clicks
    document.querySelectorAll('.dash-subtab').forEach(subtab => {
      subtab.addEventListener('click', function() {
        document.querySelectorAll('.dash-subtab').forEach(t => {
          t.classList.remove('dash-subtab--active');
          t.style.background = 'white';
          t.style.color = '#333';
          t.style.border = '1px solid #ddd';
        });
        this.classList.add('dash-subtab--active');
        this.style.background = '#667eea';
        this.style.color = 'white';
        this.style.border = 'none';

        const subType = this.dataset.subtab;
        const content = document.getElementById('dash-content');

        if (subType === 'awaiting') {
          content.innerHTML = renderQueriesList(dashboard.awaitingSignatures, 'awaiting');
        } else if (subType === 'signed') {
          content.innerHTML = renderQueriesList(dashboard.recentlySigned, 'signed');
        } else {
          content.innerHTML = renderQueriesList(dashboard.queriesToSend, 'toSend');
        }
        
        // Reattach click listeners after updating content
        setupQueryCardListeners();
      });
    });
    
    // Initial setup of query card listeners
    setupQueryCardListeners();
  }
  
  function setupQueryCardListeners() {
    // Add click listeners to all query cards
    document.querySelectorAll('.demo-query-card').forEach(card => {
      card.addEventListener('click', function() {
        const queryType = this.dataset.queryType;
        const pdfPath = this.dataset.pdfPath;
        const queryId = this.dataset.queryId;
        
        if (queryType === 'signed' && pdfPath) {
          openPDFViewer(pdfPath, queryId);
        }
      });
    });
  }
  
  function openPDFViewer(pdfPath, queryId) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'pdf-viewer-modal';
    modal.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      z-index: 100000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    `;
    
    // Get query info
    const dashboard = DemoData.facilityDashboard;
    const query = dashboard.recentlySigned.find(q => q.id === queryId);
    const queryInfo = query ? `${query.patientName} - ${query.mdsItem} (${query.mdsItemName})` : 'Signed Query Document';
    
    modal.innerHTML = `
      <div style="background:white;width:100%;max-width:1200px;height:90vh;border-radius:12px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
        <!-- Header -->
        <div style="padding:16px 20px;border-bottom:1px solid #e0e0e0;display:flex;justify-content:space-between;align-items:center;background:#f8f9fa;">
          <div>
            <h3 style="margin:0;font-size:16px;font-weight:600;color:#333;">Signed Query Document</h3>
            <p style="margin:4px 0 0 0;font-size:13px;color:#666;">${queryInfo}</p>
          </div>
          <button id="close-pdf-viewer" style="background:transparent;border:none;font-size:24px;cursor:pointer;color:#666;padding:0;width:32px;height:32px;border-radius:4px;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='#e0e0e0'" onmouseout="this.style.background='transparent'">
            ×
          </button>
        </div>
        
        <!-- PDF Content -->
        <div style="flex:1;overflow:hidden;background:#525252;display:flex;align-items:center;justify-content:center;">
          <embed src="file://${pdfPath}" type="application/pdf" width="100%" height="100%" style="border:none;" />
        </div>
        
        <!-- Footer -->
        <div style="padding:12px 20px;border-top:1px solid #e0e0e0;background:#f8f9fa;display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:12px;color:#666;">
            <strong>File:</strong> ${pdfPath.split('/').pop()}
          </div>
          <div style="display:flex;gap:8px;">
            <button style="padding:8px 16px;background:#fff;border:1px solid #ddd;border-radius:6px;cursor:pointer;font-size:13px;" onclick="window.open('file://${pdfPath}', '_blank')">
              Open in New Tab
            </button>
            <button id="close-pdf-btn" style="padding:8px 16px;background:#667eea;color:white;border:none;border-radius:6px;cursor:pointer;font-size:13px;">
              Close
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close handlers
    document.getElementById('close-pdf-viewer').addEventListener('click', () => modal.remove());
    document.getElementById('close-pdf-btn').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  }

  function renderAllAssessments(assessments) {
    return assessments.map(a => `
      <div style="padding:12px;border:1px solid #eee;border-radius:8px;margin-bottom:8px;cursor:pointer;" onmouseover="this.style.background='#f9f9f9'" onmouseout="this.style.background='white'">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <div style="font-weight:600;color:#333;">${a.patientName}</div>
            <div style="font-size:11px;color:#666;margin-top:2px;">${a.mdsType} · ${formatDate(a.ardDate)}</div>
          </div>
          <div style="text-align:right;">
            ${a.potentialHipps ? `<div style="font-size:11px;color:#666;">${a.currentHipps} → ${a.potentialHipps}</div>` : ''}
            <div style="display:flex;gap:4px;margin-top:4px;justify-content:flex-end;">
              ${a.hippsItemCount > 0 ? '<span style="background:#d4edda;color:#155724;padding:2px 6px;border-radius:4px;font-size:9px;">HIPPS</span>' : ''}
              ${a.pendingQueryCount > 0 ? `<span style="background:#fdcb6e;color:#856404;padding:2px 6px;border-radius:4px;font-size:9px;">${a.pendingQueryCount} queries</span>` : ''}
              ${a.complianceStatus === 'warning' ? '<span style="background:#f8d7da;color:#721c24;padding:2px 6px;border-radius:4px;font-size:9px;">Issues</span>' : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  // Expose for onclick handlers
  window.toggleSuperMenu = toggleSuperMenu;

})();
