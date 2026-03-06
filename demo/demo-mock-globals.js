/**
 * Mock window globals that components reference at runtime.
 *
 * These are normally set up by the extension's content script or background page,
 * but in the demo environment we install stubs and mocks.
 */

// Import mock data so CertAPI methods can access cert list
import { DEMO_API_RESPONSES } from './demo-mock-data.js';

export function installGlobalMocks() {
  // Make cert data available to CertAPI mock methods
  window.__DEMO_CERT_DATA = DEMO_API_RESPONSES.certifications || [];
  // ── Org / Auth info ──
  localStorage.setItem('CORE.org_code', 'demo-org');
  window.getOrg = () => ({ org: 'demo-org' });

  // ── Facility info ──
  window.getChatFacilityInfo = () => 'SUNNY MEADOWS DEMO FACILITY';
  window.getChatPatientId = () => '2657226';
  window.getPatientNameFromPage = () => 'Allen, Leonard';

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
      const itemName = item.pdpmCategoryName || item.mdsItemName || mdsItem;
      return {
        note: `Dear Doctor,\n\nI am writing to request your clinical assessment regarding ${itemName} (${mdsItem}) for this patient's current MDS assessment.\n\nBased on our review of the clinical documentation, there appears to be evidence supporting this diagnosis/condition that may warrant coding on the MDS. Your confirmation would help ensure accurate assessment completion.\n\nThank you for your prompt attention to this matter.`,
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
    container.innerHTML = `
      <div style="padding:16px;font-family:system-ui,-apple-system,sans-serif;font-size:13px;color:#1e293b;line-height:1.6;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #e2e8f0;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:8px;height:8px;border-radius:50%;background:#6366f1;"></div>
            <span style="font-weight:600;font-size:14px;">Progress Note</span>
          </div>
          <span style="font-size:11px;color:#94a3b8;">01/22/2026 — Dr. Demo Provider, MD</span>
        </div>
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#6366f1;margin-bottom:6px;">Subjective</div>
          <p style="margin:0;color:#334155;">Patient reports mild intermittent chest discomfort, not activity related. Denies shortness of breath at rest. Reports compliance with medication regimen. Mild bilateral lower extremity edema noted, stable from prior visit. Blood glucose readings per patient log range 140-220 mg/dL.</p>
        </div>
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#6366f1;margin-bottom:6px;">Objective</div>
          <p style="margin:0;color:#334155;">VS: BP 138/82, HR 72 reg, RR 18, SpO2 97% RA, Temp 98.4F<br/>
          General: Alert, oriented x3, in no acute distress<br/>
          CV: RRR, no murmurs/rubs/gallops. +1 bilateral LE edema<br/>
          Resp: CTAB, no wheezes or crackles<br/>
          Neuro: Grossly intact, PERRL, no focal deficits</p>
        </div>
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#6366f1;margin-bottom:6px;">Assessment</div>
          <ol style="margin:0;padding-left:20px;color:#334155;">
            <li>HTN — stable on current regimen, BP at target</li>
            <li>CAD s/p PCI — chronic stable angina, well controlled</li>
            <li>Type 2 DM — suboptimal control, HbA1c 8.2%</li>
            <li>CKD Stage 3 — stable, GFR 42</li>
          </ol>
        </div>
        <div>
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#6366f1;margin-bottom:6px;">Plan</div>
          <ul style="margin:0;padding-left:20px;color:#334155;">
            <li>Continue lisinopril 20mg, amlodipine 5mg for HTN</li>
            <li>Continue aspirin 81mg, atorvastatin 40mg, metoprolol for CAD</li>
            <li>Increase metformin to 1000mg BID, recheck HbA1c in 3 months</li>
            <li>Monitor renal function, repeat BMP in 4 weeks</li>
            <li>Dietary counseling for sodium and carbohydrate restriction</li>
          </ul>
        </div>
        <div style="margin-top:16px;padding:10px;background:#f8fafc;border-radius:6px;border-left:3px solid #6366f1;">
          <div style="font-size:11px;color:#64748b;">Electronically signed by <strong>Dr. Demo Provider, MD</strong> on 01/22/2026 at 14:32</div>
        </div>
      </div>`;
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
