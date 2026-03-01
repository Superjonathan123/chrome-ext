/**
 * Mock window globals that components reference at runtime.
 *
 * These are normally set up by the extension's content script or background page,
 * but in the demo environment we install stubs and mocks.
 */

export function installGlobalMocks() {
  // ── Facility info ──
  window.getChatFacilityInfo = () => 'SUNNY MEADOWS DEMO FACILITY';

  window.getCurrentParams = () => ({
    facilityName: 'SUNNY MEADOWS DEMO FACILITY',
    orgSlug: 'demo-org'
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

  // ── SuperToast (notification stubs) ──
  window.SuperToast = {
    show(opts) { console.log('[DemoMock] SuperToast.show:', opts); },
    success(message) { console.log('[DemoMock] SuperToast.success:', message); },
    error(message) { console.log('[DemoMock] SuperToast.error:', message); },
    info(message) { console.log('[DemoMock] SuperToast.info:', message); },
    warning(message) { console.log('[DemoMock] SuperToast.warning:', message); }
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

  // ── CONFIG ──
  window.CONFIG = { DEV_MODE: true };

  console.log('[DemoMock] Global mocks installed');
}
