/**
 * Mock window globals that components reference at runtime.
 *
 * These are normally set up by the extension's content script or background page,
 * but in the demo environment we install stubs and mocks.
 */

// Import mock data so CertAPI methods can access cert list
import { DEMO_API_RESPONSES } from './demo-mock-data.js';
import { render, h } from 'preact';
import { UdaViewer } from '../content/modules/uda-viewer/UdaViewer.jsx';

async function fetchUdaViaMock(udaId, quote) {
  const patientId = window.SuperOverlay?.patientId || '2657226';
  const params = new URLSearchParams({
    facilityName: window.SuperOverlay?.facilityName || 'SUNNY MEADOWS DEMO FACILITY',
    orgSlug: 'demo-org',
  });
  if (quote) params.set('quote', quote);
  const endpoint = `/api/extension/patients/${patientId}/uda/${udaId}?${params.toString()}`;
  const response = await chrome.runtime.sendMessage({ type: 'API_REQUEST', endpoint });
  if (!response?.success) throw new Error(response?.error || 'Failed to load UDA');
  return response.data;
}

export function installGlobalMocks() {
  // Make cert data available to CertAPI mock methods
  window.__DEMO_CERT_DATA = DEMO_API_RESPONSES.certifications || [];
  // ── Org / Auth info ──
  localStorage.setItem('CORE.org_code', 'demo-org');
  window.getOrg = () => ({ org: 'demo-org' });

  // ── Facility info ──
  window.getChatFacilityInfo = () => 'SUNNY MEADOWS DEMO FACILITY';
  window.getChatPatientId = () => '2657226';
  window.getPatientNameFromPage = () => 'Doe, Jane';

  window.getCurrentParams = () => ({
    facilityName: 'SUNNY MEADOWS DEMO FACILITY',
    orgSlug: 'demo-org',
    assessmentId: '4860265'
  });

  // ── QueryAPI (used by useBatchQuery) ──
  window.QueryAPI = {
    async fetchPractitioners(_facilityName, _orgSlug) {
      // Simulate network delay
      await new Promise(r => setTimeout(r, 200));
      return [
        {
          id: 'pract-001',
          firstName: 'Demo',
          lastName: 'Provider',
          title: 'MD',
          name: 'Dr. Demo Provider',
          phone: '555-0101'
        },
        {
          id: 'pract-002',
          firstName: 'Sample',
          lastName: 'Doctor',
          title: 'DO',
          name: 'Dr. Sample Doctor',
          phone: '555-0102'
        },
        {
          id: 'pract-003',
          firstName: 'Jane',
          lastName: 'Specialist',
          title: 'NP',
          name: 'Jane Specialist, NP',
          phone: '555-0103'
        }
      ];
    },

    async generateNote(mdsItem, item) {
      await new Promise(r => setTimeout(r, 500 + Math.random() * 500));
      const itemName = item.pdpmCategoryName || item.mdsItemName || item.itemName || mdsItem;

      // Source-specific notes
      const notes = {
        'I5600': `Dear Doctor,\n\nI am writing to request your clinical assessment regarding malnutrition for this patient's current MDS assessment.\n\nOur review of the clinical documentation reveals the following evidence:\n\n• Weight loss of 17 lbs (12.6%) over the past 3 months (135 lbs → 118 lbs)\n• PO intake documented at <50% of estimated needs\n• Albumin: 2.9 g/dL (Low, ref: 3.5-5.0)\n• Prealbumin: 12 mg/dL (Low, ref: 18-38)\n• Dietitian has diagnosed moderate protein-calorie malnutrition\n• Current interventions: Ensure Plus 8oz BID, Fortified Cereal 6oz QD\n\nPlease confirm whether a malnutrition diagnosis (ICD-10: E44.0) is appropriate for this patient.\n\nThank you for your prompt attention to this matter.`,
      };

      const note = notes[mdsItem] || `Dear Doctor,\n\nI am writing to request your clinical assessment regarding ${itemName} (${mdsItem}) for this patient's current MDS assessment.\n\nBased on our review of the clinical documentation, there appears to be evidence supporting this diagnosis/condition that may warrant coding on the MDS. Your confirmation would help ensure accurate assessment completion.\n\nThank you for your prompt attention to this matter.`;

      return {
        note,
        preferredIcd10: item.recommendedIcd10?.[0] || { code: 'R69', description: 'Illness, unspecified' },
        icd10Options: item.recommendedIcd10 || [
          { code: 'R69', description: 'Illness, unspecified' }
        ]
      };
    },

    async createQuery(params) {
      await new Promise(r => setTimeout(r, 300));
      return {
        query: {
          id: `demo-query-${Date.now()}`,
          mdsItem: params.mdsItem,
          mdsItemName: params.mdsItemName,
          status: 'draft',
          createdAt: new Date().toISOString()
        }
      };
    },

    async sendQuery(queryId, practitionerIds, noteText) {
      await new Promise(r => setTimeout(r, 300));
      console.log(`[DemoMock] QueryAPI.sendQuery: ${queryId} → practitioners: ${practitionerIds.join(', ')}`);
      return { success: true, sentAt: new Date().toISOString() };
    },

    async resendQuery(queryId) {
      await new Promise(r => setTimeout(r, 200));
      console.log(`[DemoMock] QueryAPI.resendQuery: ${queryId}`);
      return { success: true };
    }
  };

  // ── SuperToast (dispatches demo:toast for PCCDemoApp to render) ──
  function dispatchToast(type, message) {
    console.log(`[DemoMock] SuperToast.${type}:`, message);
    window.dispatchEvent(new CustomEvent('demo:toast', { detail: { type, message } }));
  }
  window.SuperToast = {
    show(opts) { dispatchToast('info', opts.message || opts); },
    success(message) { dispatchToast('success', message); },
    error(message) { dispatchToast('error', message); },
    info(message) { dispatchToast('info', message); },
    warning(message) { dispatchToast('warning', message); }
  };

  // ── SuperOverlay context ──
  window.SuperOverlay = {
    facilityName: 'SUNNY MEADOWS DEMO FACILITY',
    patientId: '2657226',
    assessmentId: '4860265'
  };

  // ── Navigation stubs ──
  window.navigateToMDSItem = (item) => {
    console.log('[DemoMock] navigateToMDSItem:', item);
  };

  // ── PDPMAnalyzerLauncher (used by MDSCommandCenter to open PDPM) ──
  window.PDPMAnalyzerLauncher = {
    open(opts) {
      console.log('[DemoMock] PDPMAnalyzerLauncher.open:', opts);
      // The demo DemoApp component will handle this via a custom event
      window.dispatchEvent(new CustomEvent('demo:open-pdpm', { detail: opts }));
    }
  };

  // ── QueryDetailModal (used by PDPMAnalyzer) ──
  window.QueryDetailModal = {
    show(opts) {
      console.log('[DemoMock] QueryDetailModal.show:', opts);
    }
  };

  // ── Split-view evidence viewers (used by ItemPopover) ──
  window.renderSplitAdministrations = async (container, sourceId, _unused, params) => {
    await new Promise(r => setTimeout(r, 400));

    // Determine MAR vs TAR based on source ID
    const isMar = !sourceId?.includes('tar');
    const typeBadge = isMar ? 'MAR' : 'TAR';
    const typeBadgeClass = isMar ? 'super-admin-badge--mar' : 'super-admin-badge--tar';
    const typeIcon = isMar ? '💊' : '⚡';

    // Mock order data based on source ID
    const orders = {
      'mar-010': { name: 'Aspirin 81mg PO Daily', directions: 'Take by mouth once daily with food', startDate: '2025-12-20', endDate: null },
      'mar-012': { name: 'Lisinopril 20mg PO Daily', directions: 'Take by mouth once daily in the morning', startDate: '2025-12-15', endDate: null },
      'mar-001': { name: 'Metformin 500mg PO BID', directions: 'Take by mouth twice daily with meals', startDate: '2025-11-01', endDate: null },
      'doc-nutr-004': { name: 'Ensure Plus 8 OZ Oral Liquid', directions: 'Give 8 oz Ensure Plus by mouth twice daily with lunch and dinner for nutritional supplementation', startDate: '2026-01-22', endDate: null },
      'doc-nutr-003': { name: 'Fortified Cereal 6 OZ', directions: 'Give 6 oz fortified cereal by mouth once daily with breakfast to increase caloric and protein intake', startDate: '2026-01-22', endDate: null },
    };
    const order = orders[sourceId] || { name: 'Medication Order', directions: 'As directed', startDate: '2025-12-20', endDate: null };

    // Generate 7-day date range ending today
    const dates = [];
    const now = new Date(2026, 0, 27); // Jan 27, 2026
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      dates.push(d);
    }

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const formatRangeDate = (d) => `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    const dateRangeStr = `${formatRangeDate(dates[0])} - ${formatRangeDate(dates[dates.length - 1])}`;

    const formatOrderDate = (ds) => {
      if (!ds) return '';
      const d = new Date(ds);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    // Build date headers
    const dateHeaders = dates.map(d => `
      <th class="super-admin-grid__date-header">
        <div class="super-admin-grid__day">${dayNames[d.getDay()]}</div>
        <div class="super-admin-grid__date">${monthNames[d.getMonth()]} ${d.getDate()}</div>
      </th>
    `).join('');

    // Time slots and staff initials
    const isBID = order.name.includes('BID');
    const timeSlots = isBID ? ['0800', '1800'] : ['0800'];
    const staffPool = ['RN-JD', 'RN-KM', 'RN-TS', 'LPN-AB'];

    const formatTime = (t) => {
      const h = parseInt(t.substring(0, 2), 10);
      const m = t.substring(2);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h > 12 ? h - 12 : (h === 0 ? 12 : h);
      return `${h12}:${m} ${ampm}`;
    };

    // Build rows
    const rows = timeSlots.map(time => {
      const cells = dates.map((d, di) => {
        // Most cells are "given", occasionally a chart code
        const staffIdx = (di + (time === '1800' ? 2 : 0)) % staffPool.length;
        const initials = staffPool[staffIdx];

        return `<td class="super-admin-grid__cell super-admin-grid__cell--given">
          <span class="super-admin-grid__check">✓</span>
          <span class="super-admin-grid__initials">${initials}</span>
        </td>`;
      }).join('');

      return `<tr class="super-admin-grid__row">
        <td class="super-admin-grid__time">${formatTime(time)}</td>
        ${cells}
      </tr>`;
    }).join('');

    const eventCount = timeSlots.length * dates.length;

    container.innerHTML = `
      <div class="super-split__admin">
        <div class="super-admin-modal__header">
          <div class="super-admin-modal__title-row">
            <span class="super-admin-modal__icon">${typeIcon}</span>
            <div class="super-admin-modal__title">
              <span class="super-admin-modal__order-name">${order.name}</span>
              <span class="super-admin-badge ${typeBadgeClass}">${typeBadge}</span>
            </div>
          </div>
          ${order.directions ? `<div class="super-admin-modal__directions">${order.directions}</div>` : ''}
          <div class="super-admin-modal__meta">
            ${timeSlots.length} time slot${timeSlots.length !== 1 ? 's' : ''}
            <span class="super-admin-modal__dates">
              Start: ${formatOrderDate(order.startDate)}
              ${order.endDate ? ` · Stop: ${formatOrderDate(order.endDate)}` : ''}
            </span>
          </div>
        </div>
        <div class="super-admin-modal__date-bar">
          <button class="super-admin-modal__nav-btn" title="Previous week">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span class="super-admin-modal__date-range">📅 ${dateRangeStr}</span>
          <button class="super-admin-modal__nav-btn" title="Next week">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div class="super-admin-modal__body">
          <div class="super-admin-grid-wrapper">
            <table class="super-admin-grid">
              <thead>
                <tr>
                  <th class="super-admin-grid__time-header">Time</th>
                  ${dateHeaders}
                </tr>
              </thead>
              <tbody>
                ${rows}
              </tbody>
            </table>
          </div>
        </div>
        <div class="super-admin-modal__footer">
          <span class="super-admin-modal__event-count">${eventCount} events</span>
          <div class="super-admin-legend">
            <span class="super-admin-legend__item super-admin-legend__item--given">✓ Given</span>
            <span class="super-admin-legend__item super-admin-legend__item--refused">2 Refused</span>
            <span class="super-admin-legend__item super-admin-legend__item--loa">3 LOA</span>
            <span class="super-admin-legend__item super-admin-legend__item--hold">5 Hold</span>
          </div>
        </div>
      </div>
    `;
  };

  window.renderSplitNote = async (container, sourceId, params) => {
    await new Promise(r => setTimeout(r, 350));

    // PDF-like content with highlight lines — matches overlay's document viewer style
    const pdfDocuments = {
      'doc-nutr-001': {
        title: 'NUTRITION_01_22_36001641.PDF',
        pages: 2,
        pageContent: {
          1: [
            { text: 'NUTRITION PROGRESS NOTE', highlight: false, bold: true },
            { text: '', highlight: false },
            { text: 'Patient: Doe, Jane                    MRN: 000000', highlight: false },
            { text: 'Date: 01/22/2026                      Time: 10:28', highlight: false },
            { text: 'Dietitian: Sarah Kim, RD, LD', highlight: false },
            { text: '_______________________________________________', highlight: false },
            { text: '', highlight: false },
            { text: 'NUTRITIONAL STATUS:', highlight: false, bold: true },
            { text: 'Current Weight: 118 lbs (53.5 kg)', highlight: false },
            { text: 'Usual Body Weight: 135 lbs (61.2 kg)', highlight: false },
            { text: 'Weight Loss: 17 lbs (12.6%) in past 3 months', highlight: 'keyword' },
            { text: 'BMI: 20.2 (within normal range but declining)', highlight: false },
            { text: '', highlight: false },
            { text: 'DIETARY INTAKE:', highlight: false, bold: true },
            { text: 'Ongoing PO Intake: < 50% meals/est. needs', highlight: 'keyword' },
            { text: 'Patient reports decreased appetite and early satiety.', highlight: false },
            { text: 'Difficulty with textures due to dysphagia.', highlight: 'contextual' },
            { text: 'Meal observation: consumed ~40% of lunch, refused', highlight: false },
            { text: 'dessert and most of entree.', highlight: false },
          ],
          2: [
            { text: 'LABORATORY VALUES:', highlight: false, bold: true },
            { text: 'Albumin: 2.9 g/dL (Low)            Ref: 3.5-5.0', highlight: 'keyword' },
            { text: 'Prealbumin: 12 mg/dL (Low)          Ref: 18-38', highlight: 'keyword' },
            { text: 'Total Protein: 5.8 g/dL (Low)       Ref: 6.0-8.3', highlight: false },
            { text: 'Transferrin: 165 mg/dL (Low)         Ref: 200-360', highlight: false },
            { text: '', highlight: false },
            { text: 'MALNUTRITION DIAGNOSIS:', highlight: false, bold: true },
            { text: 'Moderate protein-calorie malnutrition based on:', highlight: 'keyword' },
            { text: '- Significant unintentional weight loss (>10% in 3 months)', highlight: false },
            { text: '- Inadequate oral intake (<50% estimated needs)', highlight: false },
            { text: '- Low albumin and prealbumin', highlight: false },
            { text: '', highlight: false },
            { text: 'RECOMMENDATIONS:', highlight: false, bold: true },
            { text: '1. Fortified foods - pudding, cereal, milk', highlight: false },
            { text: '2. Ensure Plus BID with meals', highlight: false },
            { text: '3. Liberalized diet texture per SLP recommendations', highlight: false },
            { text: '4. Weekly weights', highlight: false },
            { text: '5. Re-evaluate in 1 week', highlight: false },
            { text: '', highlight: false },
            { text: '_______________________________________________', highlight: false },
            { text: 'Electronically signed: Sarah Kim, RD, LD  01/22/2026', highlight: false },
          ]
        }
      },
      'doc-nutr-002': {
        title: 'LAB_NUTRITION_01_20_38001789.PDF',
        pages: 1,
        pageContent: {
          1: [
            { text: 'LABORATORY REPORT', highlight: false, bold: true },
            { text: '', highlight: false },
            { text: 'Patient: Doe, Jane                    MRN: 000000', highlight: false },
            { text: 'Date Collected: 01/20/2026 06:15', highlight: false },
            { text: 'Ordering Physician: Dr. Demo Provider, MD', highlight: false },
            { text: '_______________________________________________', highlight: false },
            { text: '', highlight: false },
            { text: 'NUTRITION PANEL:', highlight: false, bold: true },
            { text: '', highlight: false },
            { text: 'Test                  Result          Flag    Reference', highlight: false, bold: true },
            { text: '─────────────────────────────────────────────────────', highlight: false },
            { text: 'Albumin               2.9 g/dL        (L)     3.5-5.0', highlight: 'keyword' },
            { text: 'Prealbumin            12 mg/dL         (L)     18-38', highlight: 'keyword' },
            { text: 'Total Protein         5.8 g/dL         (L)     6.0-8.3', highlight: false },
            { text: 'Transferrin           165 mg/dL        (L)     200-360', highlight: false },
            { text: 'CRP                   18.5 mg/L        (H)     0.0-10.0', highlight: false },
            { text: '', highlight: false },
            { text: '─────────────────────────────────────────────────────', highlight: false },
            { text: 'Note: Low albumin and prealbumin suggest malnutrition', highlight: 'keyword' },
            { text: 'and/or inflammatory state. Clinical correlation advised.', highlight: false },
            { text: '', highlight: false },
            { text: 'Verified by: Lab Director  01/20/2026 07:30', highlight: false },
          ]
        }
      },
      'doc-nutr-006': {
        title: 'NURSING_WEIGHTS_01_22_38001945.PDF',
        pages: 1,
        pageContent: {
          1: [
            { text: 'WEIGHT MONITORING - 3 MONTH TREND', highlight: false, bold: true },
            { text: '', highlight: false },
            { text: 'Patient: Doe, Jane                    MRN: 000000', highlight: false },
            { text: 'Date: 01/22/2026', highlight: false },
            { text: '_______________________________________________', highlight: false },
            { text: '', highlight: false },
            { text: 'WEIGHT HISTORY:', highlight: false, bold: true },
            { text: 'Date          Weight        Change from Usual', highlight: false, bold: true },
            { text: '─────────────────────────────────────────────', highlight: false },
            { text: '10/22/2025    135.0 lbs     (Usual body weight)', highlight: false },
            { text: '11/15/2025    132.5 lbs     -2.5 lbs', highlight: false },
            { text: '12/20/2025    128.0 lbs     -7.0 lbs from usual', highlight: 'keyword' },
            { text: '01/15/2026    120.5 lbs     -14.5 lbs from usual', highlight: 'keyword' },
            { text: '01/22/2026    118.0 lbs     -17.0 lbs from usual', highlight: 'keyword' },
            { text: '', highlight: false },
            { text: 'WEIGHT LOSS PERCENTAGE:', highlight: false, bold: true },
            { text: 'Total Loss: 17 lbs over 3 months', highlight: 'keyword' },
            { text: 'Percentage: 12.6% of usual body weight', highlight: 'keyword' },
            { text: '', highlight: false },
            { text: 'SIGNIFICANCE:', highlight: false, bold: true },
            { text: '>10% weight loss in 3 months = SEVERE weight loss', highlight: 'keyword' },
            { text: 'Meets criteria for malnutrition diagnosis', highlight: 'keyword' },
            { text: '', highlight: false },
            { text: 'INTERVENTIONS INITIATED:', highlight: false, bold: true },
            { text: '- Dietary consult completed', highlight: false },
            { text: '- Nutritional supplements ordered', highlight: false },
            { text: '- Weekly weight monitoring ongoing', highlight: false },
            { text: '', highlight: false },
            { text: '_______________________________________________', highlight: false },
            { text: 'Documented by: RN-JD  01/22/2026 08:15', highlight: false },
          ]
        }
      }
    };

    const pdfDoc = pdfDocuments[sourceId];

    // Render PDF-like line content
    function renderPdfLines(lines) {
      return lines.map(line => {
        let classes = 'super-split-pdf__line';
        if (line.highlight === 'keyword' || line.highlight === true) {
          classes += ' super-split-pdf__line--keyword';
        } else if (line.highlight === 'contextual') {
          classes += ' super-split-pdf__line--contextual';
        }
        if (line.bold) classes += ' super-split-pdf__line--bold';
        return `<div class="${classes}">${line.text || '&nbsp;'}</div>`;
      }).join('');
    }

    if (pdfDoc) {
      const pageData = pdfDoc.pageContent[1];
      const totalPages = pdfDoc.pages;
      let currentPage = 1;

      container.innerHTML = `
        <style>
          .super-split-pdf { background: #525659; padding: 20px; min-height: 100%; display: flex; flex-direction: column; }
          .super-split-pdf__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; padding: 0 4px; }
          .super-split-pdf__filename { color: #cbd5e1; font-size: 11px; font-family: monospace; }
          .super-split-pdf__legend { display: flex; gap: 12px; }
          .super-split-pdf__legend-item { font-size: 10px; color: #94a3b8; display: flex; align-items: center; gap: 4px; }
          .super-split-pdf__legend-swatch { width: 12px; height: 10px; border-radius: 2px; }
          .super-split-pdf__legend-swatch--keyword { background: linear-gradient(120deg, #fef08a 0%, #fde047 100%); }
          .super-split-pdf__legend-swatch--contextual { background: linear-gradient(120deg, #bfdbfe 0%, #93c5fd 100%); }
          .super-split-pdf__paper { background: white; padding: 40px 48px; border-radius: 4px; box-shadow: 0 4px 16px rgba(0,0,0,0.3); flex: 1; min-height: 300px; }
          .super-split-pdf__line { font-family: 'Courier New', Courier, monospace; font-size: 12.5px; line-height: 1.8; color: #1f2937; margin-bottom: 1px; white-space: pre-wrap; }
          .super-split-pdf__line--keyword { background: linear-gradient(120deg, #fef08a 0%, #fde047 100%); padding: 1px 4px; margin: 1px -4px; border-radius: 2px; }
          .super-split-pdf__line--contextual { background: linear-gradient(120deg, #bfdbfe 0%, #93c5fd 100%); padding: 1px 4px; margin: 1px -4px; border-radius: 2px; }
          .super-split-pdf__line--bold { font-weight: 700; }
          .super-split-pdf__footer { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 10px; margin-top: 12px; }
          .super-split-pdf__page-btn { background: rgba(255,255,255,0.15); border: none; color: white; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center; }
          .super-split-pdf__page-btn:hover { background: rgba(255,255,255,0.25); }
          .super-split-pdf__page-btn:disabled { opacity: 0.3; cursor: default; }
          .super-split-pdf__page-num { color: #e2e8f0; font-size: 12px; }
        </style>
        <div class="super-split-pdf">
          <div class="super-split-pdf__header">
            <span class="super-split-pdf__filename">${pdfDoc.title}</span>
            <div class="super-split-pdf__legend">
              <span class="super-split-pdf__legend-item"><span class="super-split-pdf__legend-swatch super-split-pdf__legend-swatch--keyword"></span>Keyword Match</span>
              <span class="super-split-pdf__legend-item"><span class="super-split-pdf__legend-swatch super-split-pdf__legend-swatch--contextual"></span>Contextual</span>
            </div>
          </div>
          <div class="super-split-pdf__paper">
            ${renderPdfLines(pageData)}
          </div>
          ${totalPages > 1 ? `
          <div class="super-split-pdf__footer">
            <button class="super-split-pdf__page-btn super-split-pdf__prev" disabled>&#8249;</button>
            <span class="super-split-pdf__page-num">Page 1 of ${totalPages}</span>
            <button class="super-split-pdf__page-btn super-split-pdf__next">&#8250;</button>
          </div>` : `
          <div class="super-split-pdf__footer">
            <span class="super-split-pdf__page-num">Page 1 of 1</span>
          </div>`}
        </div>`;

      // Page navigation
      if (totalPages > 1) {
        const prevBtn = container.querySelector('.super-split-pdf__prev');
        const nextBtn = container.querySelector('.super-split-pdf__next');
        const pageNum = container.querySelector('.super-split-pdf__page-num');
        const paper = container.querySelector('.super-split-pdf__paper');

        function updatePage() {
          paper.innerHTML = renderPdfLines(pdfDoc.pageContent[currentPage]);
          pageNum.textContent = `Page ${currentPage} of ${totalPages}`;
          prevBtn.disabled = currentPage <= 1;
          nextBtn.disabled = currentPage >= totalPages;
        }

        prevBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--; updatePage(); } });
        nextBtn.addEventListener('click', () => { if (currentPage < totalPages) { currentPage++; updatePage(); } });
      }
    } else {
      // Default generic progress note — also PDF style
      const defaultLines = [
        { text: 'PROGRESS NOTE', highlight: false, bold: true },
        { text: '', highlight: false },
        { text: 'Patient: Doe, Jane                    MRN: 000000', highlight: false },
        { text: 'Date: 01/22/2026                      Time: 14:32', highlight: false },
        { text: 'Provider: Dr. Demo Provider, MD', highlight: false },
        { text: '_______________________________________________', highlight: false },
        { text: '', highlight: false },
        { text: 'SUBJECTIVE:', highlight: false, bold: true },
        { text: 'Patient reports mild intermittent chest discomfort,', highlight: false },
        { text: 'not activity related. Denies shortness of breath at', highlight: false },
        { text: 'rest. Reports compliance with medication regimen.', highlight: false },
        { text: '', highlight: false },
        { text: 'OBJECTIVE:', highlight: false, bold: true },
        { text: 'VS: BP 138/82, HR 72 reg, RR 18, SpO2 97% RA', highlight: false },
        { text: 'General: Alert, oriented x3, in no acute distress', highlight: false },
        { text: 'CV: RRR, no murmurs/rubs/gallops. +1 bilateral LE edema', highlight: false },
        { text: 'Resp: CTAB, no wheezes or crackles', highlight: false },
        { text: '', highlight: false },
        { text: 'ASSESSMENT:', highlight: false, bold: true },
        { text: '1. HTN — stable on current regimen', highlight: false },
        { text: '2. Type 2 DM — suboptimal control, HbA1c 8.2%', highlight: false },
        { text: '3. CKD Stage 3 — stable, GFR 42', highlight: false },
        { text: '', highlight: false },
        { text: 'PLAN:', highlight: false, bold: true },
        { text: '- Continue current medications', highlight: false },
        { text: '- Recheck HbA1c in 3 months', highlight: false },
        { text: '- Monitor renal function, repeat BMP in 4 weeks', highlight: false },
        { text: '', highlight: false },
        { text: '_______________________________________________', highlight: false },
        { text: 'Electronically signed: Dr. Demo Provider, MD  01/22/2026', highlight: false },
      ];
      container.innerHTML = `
        <style>
          .super-split-pdf { background: #525659; padding: 20px; min-height: 100%; display: flex; flex-direction: column; }
          .super-split-pdf__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; padding: 0 4px; }
          .super-split-pdf__filename { color: #cbd5e1; font-size: 11px; font-family: monospace; }
          .super-split-pdf__paper { background: white; padding: 40px 48px; border-radius: 4px; box-shadow: 0 4px 16px rgba(0,0,0,0.3); flex: 1; min-height: 300px; }
          .super-split-pdf__line { font-family: 'Courier New', Courier, monospace; font-size: 12.5px; line-height: 1.8; color: #1f2937; margin-bottom: 1px; white-space: pre-wrap; }
          .super-split-pdf__line--bold { font-weight: 700; }
          .super-split-pdf__footer { display: flex; align-items: center; justify-content: center; padding: 10px; margin-top: 12px; }
          .super-split-pdf__page-num { color: #e2e8f0; font-size: 12px; }
        </style>
        <div class="super-split-pdf">
          <div class="super-split-pdf__header">
            <span class="super-split-pdf__filename">PROGRESS_NOTE_01_22.PDF</span>
          </div>
          <div class="super-split-pdf__paper">
            ${renderPdfLines(defaultLines)}
          </div>
          <div class="super-split-pdf__footer">
            <span class="super-split-pdf__page-num">Page 1 of 1</span>
          </div>
        </div>`;
    }
  };

  window.renderSplitTherapy = async (container, sourceId, quote, params) => {
    await new Promise(r => setTimeout(r, 300));
    container.innerHTML = `
      <div style="padding:16px;font-family:system-ui,-apple-system,sans-serif;font-size:13px;color:#1e293b;line-height:1.6;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #e2e8f0;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:8px;height:8px;border-radius:50%;background:#f59e0b;"></div>
            <span style="font-weight:600;font-size:14px;">Therapy Documentation</span>
          </div>
          <span style="font-size:11px;color:#94a3b8;">01/20/2026 — Jane Specialist, PT, DPT</span>
        </div>
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#f59e0b;margin-bottom:6px;">Treatment Session</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;">
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Type:</strong> PT - Skilled</div>
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Duration:</strong> 45 min</div>
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Setting:</strong> Therapy gym</div>
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Supervision:</strong> Direct</div>
          </div>
        </div>
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#f59e0b;margin-bottom:6px;">Functional Status</div>
          <table style="width:100%;border-collapse:collapse;font-size:12px;">
            <tr><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;font-weight:500;">Transfers</td><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;">Mod A (FIM 3) → Min A (FIM 4)</td></tr>
            <tr><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;font-weight:500;">Ambulation</td><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;">Max A x1 50ft (FW) → Mod A x1 100ft</td></tr>
            <tr><td style="padding:6px 8px;font-weight:500;">Balance (Berg)</td><td style="padding:6px 8px;">18/56 → 24/56</td></tr>
          </table>
        </div>
        <div>
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#f59e0b;margin-bottom:6px;">Treatment Notes</div>
          <p style="margin:0;color:#334155;">Patient participated in therapeutic exercise program targeting LE strengthening, dynamic balance, and gait training. Left-sided hemiparesis continues to limit functional mobility. Patient required verbal cues for safety awareness during ambulation. Demonstrated improved weight shifting and stance phase on affected side compared to prior session.</p>
        </div>
        <div style="margin-top:16px;padding:10px;background:#fffbeb;border-radius:6px;border-left:3px solid #f59e0b;">
          <div style="font-size:11px;color:#92400e;">Documented by <strong>Jane Specialist, PT, DPT</strong> on 01/20/2026 at 11:15</div>
        </div>
      </div>`;
  };

  // ── UDA viewers — render the real UdaViewer inline using the mocked API ──
  window.renderSplitUda = async (container, udaId, quoteText) => {
    try {
      const { uda, matchKeys } = await fetchUdaViaMock(udaId, quoteText || null);
      container.innerHTML = '';
      const inner = document.createElement('div');
      inner.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;min-height:0;';
      container.appendChild(inner);
      render(
        h(UdaViewer, {
          uda,
          matchKeys: new Set(matchKeys || []),
          quoteText: quoteText || null,
        }),
        inner
      );
    } catch (err) {
      console.error('[DemoMock] renderSplitUda failed:', err);
      container.innerHTML = `<div class="cc-pop__viewer-loading"><span>Failed to load: ${err.message}</span></div>`;
    }
  };

  window.showUdaModal = async (udaId, quoteText) => {
    const modal = document.createElement('div');
    modal.className = 'super-uda-modal';
    modal.innerHTML = `
      <div class="super-uda-modal__backdrop"></div>
      <div class="super-uda-modal__container">
        <div class="super-uda-modal__loading">
          <div class="super-uda-modal__loading-spinner"></div>
          <span>Loading assessment...</span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    const container = modal.querySelector('.super-uda-modal__container');
    const onClose = () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', escHandler);
      modal.remove();
    };
    const escHandler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', escHandler);
    modal.querySelector('.super-uda-modal__backdrop').addEventListener('click', onClose);

    try {
      const { uda, matchKeys } = await fetchUdaViaMock(udaId, quoteText || null);
      container.innerHTML = '';
      render(
        h(UdaViewer, {
          uda,
          matchKeys: new Set(matchKeys || []),
          quoteText: quoteText || null,
          onClose,
        }),
        container
      );
    } catch (err) {
      container.innerHTML = `<div class="super-uda-modal__error">${err.message || 'Failed to load UDA'}</div>`;
    }
  };

  // ── QuerySendModal — stub; PCCDemoApp overrides this with Preact modal ──
  window.QuerySendModal = {
    show(opts) {
      console.log('[DemoMock] QuerySendModal.show (stub):', opts?.mdsItem);
    }
  };

  // ── CertAPI (used by certifications module) ──
  window.CertAPI = {
    async sendCert(certId, practitionerIds, delayReason) {
      await new Promise(r => setTimeout(r, 300));
      console.log('[DemoMock] CertAPI.sendCert:', certId);
      dispatchToast('success', 'Certification sent successfully');
      return { success: true };
    },
    async skipCert(certId, reason) {
      await new Promise(r => setTimeout(r, 200));
      console.log('[DemoMock] CertAPI.skipCert:', certId);
      dispatchToast('info', 'Certification skipped');
      return { success: true };
    },
    async delayCert(certId, reason) {
      await new Promise(r => setTimeout(r, 200));
      console.log('[DemoMock] CertAPI.delayCert:', certId);
      dispatchToast('info', 'Certification delayed');
      return { success: true };
    },
    async saveClinicalReason(certId, data) {
      await new Promise(r => setTimeout(r, 200));
      console.log('[DemoMock] CertAPI.saveClinicalReason:', certId, data);
      return { success: true };
    },
    async unskipCert(certId) {
      await new Promise(r => setTimeout(r, 200));
      console.log('[DemoMock] CertAPI.unskipCert:', certId);
      dispatchToast('info', 'Certification unskipped');
      return { success: true };
    },
    async fetchPractitioners(facilityName, orgSlug) {
      await new Promise(r => setTimeout(r, 200));
      return [
        { id: 'pract-001', firstName: 'Demo', lastName: 'Provider', title: 'MD', name: 'Dr. Demo Provider', phone: '555-0101', npi: '1234567890' },
        { id: 'pract-002', firstName: 'Sample', lastName: 'Doctor', title: 'DO', name: 'Dr. Sample Doctor', phone: '555-0102', npi: '0987654321' },
        { id: 'pract-003', firstName: 'Jane', lastName: 'Specialist', title: 'NP', name: 'Jane Specialist, NP', phone: '555-0103', npi: '1122334455' }
      ];
    },
    async fetchPractitionerWorkload(practitionerId) {
      await new Promise(r => setTimeout(r, 200));
      return {
        practitioner: { id: practitionerId, name: 'Dr. Demo Provider' },
        stats: { pending: 3, signed: 12, overdue: 1 },
        certs: []
      };
    },
    async fetchDashboard(facilityName, orgSlug) {
      await new Promise(r => setTimeout(r, 200));
      return { pending: 4, overdue: 1, dueSoon: 2, signedLast7Days: 3 };
    },
    async fetchCertifications(facilityName, orgSlug, filters) {
      await new Promise(r => setTimeout(r, 200));
      return window.__DEMO_CERT_DATA || [];
    },
    async fetchByPatient(facilityName, orgSlug, patientId) {
      await new Promise(r => setTimeout(r, 200));
      const all = window.__DEMO_CERT_DATA || [];
      return all.filter(c => c.patientId === patientId);
    },
    async fetchSendHistory(certId) {
      await new Promise(r => setTimeout(r, 200));
      return [
        { id: 'send-1', certId, sentAt: new Date(Date.now() - 3 * 86400000).toISOString(), practitioner: { name: 'Dr. Demo Provider' }, method: 'fax' }
      ];
    }
  };

  // ── CONFIG ──
  window.CONFIG = { DEV_MODE: true };

  console.log('[DemoMock] Global mocks installed');
}
