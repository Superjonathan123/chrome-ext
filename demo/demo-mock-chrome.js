/**
 * Mock chrome.runtime.sendMessage for demo environment.
 *
 * Supports both Promise and callback patterns:
 *   - await chrome.runtime.sendMessage(msg)        → returns Promise
 *   - chrome.runtime.sendMessage(msg, callback)    → calls callback(response)
 *
 * Routes API_REQUEST messages to demo mock data.
 */
import { DEMO_API_RESPONSES } from './demo-mock-data.js';
import { buildPlannerWeekEvents, buildPlannerSummary } from './demo-planner-fixtures.js';

/**
 * Demo UDA fixture — mirrors the structure the extension UDA viewer expects
 * (see handoff: chrome-ext-uda-viewer-handoff.md). The Nutrition Assessment
 * example matches the web popover screenshot so the highlight + scroll UX
 * can be reviewed end-to-end without a live backend.
 */
const DEMO_UDA_FIXTURES = {
  'demo-nutrition-v3': {
    id: 'demo-nutrition-v3',
    description: 'Nutrition Assessment - V 3',
    date: '2026-02-27',
    type: 'Admission',
    category: 'Nutrition',
    createdBy: 'skim.rd',
    lockedDate: '2026-02-27',
    answers: {
      assessmentId: 'demo-nutrition-v3',
      title: 'Nutrition Assessment - V 3',
      metadata: {
        resident: 'Doe, Jane',
        description: 'Nutrition Assessment - V 3',
        date: '2026-02-27',
      },
      sections: [
        {
          sectionCode: 'NUTR',
          description: 'Nutrition Assessment - V 3',
          signedBy: 'Sarah Kim, RD, LD',
          signedDate: '2026-02-27',
          content: [
            {
              sectionNumber: '1',
              sectionTitle: 'Relevant Medications & Diagnoses',
              questions: [
                {
                  questionId: 'q1',
                  questionText: 'Existing diagnosis of Protein/Calorie Malnutrition? (NTA point)',
                  answerType: 'radio',
                  options: [
                    { value: 'yes', text: 'Yes', selected: true },
                    { value: 'no', text: 'No', selected: false },
                  ],
                },
              ],
            },
            {
              sectionNumber: '2',
              sectionTitle: 'Identification of Risk Indicators',
              questions: [
                {
                  questionId: 'q2',
                  questionText: 'Are there current lab values (<60 days)?',
                  answerType: 'radio',
                  options: [
                    { value: 'yes', text: 'Yes', selected: true },
                    { value: 'no', text: 'No', selected: false },
                  ],
                },
                {
                  questionId: 'q2b',
                  questionText: 'Albumin (most recent)',
                  answerType: 'text',
                  value: '2.9 g/dL (Low)',
                },
                {
                  questionId: 'q2c',
                  questionText: 'Prealbumin (most recent)',
                  answerType: 'text',
                  value: '12 mg/dL (Low)',
                },
              ],
            },
            {
              sectionNumber: '3',
              sectionTitle: 'Enteral Feeding/IV Fluids',
              questions: [
                {
                  questionId: 'q3',
                  questionText: 'Did the resident have IV Hydration in Lookback period? (MDS Section K)',
                  answerType: 'radio',
                  options: [
                    { value: 'yes', text: 'Yes', selected: true },
                    { value: 'no', text: 'No', selected: false },
                  ],
                },
              ],
            },
            {
              sectionNumber: '4',
              sectionTitle: 'Nutrient Needs',
              questions: [
                {
                  questionId: 'q4',
                  questionText: 'Nutrition Needs Computed?',
                  answerType: 'radio',
                  options: [
                    { value: 'yes', text: 'Yes', selected: true },
                    { value: 'no', text: 'No', selected: false },
                  ],
                },
                {
                  questionId: 'q4b',
                  questionText: 'Estimated caloric needs',
                  answerType: 'text',
                  value: '1600–1800 kcal/day',
                },
                {
                  questionId: 'q4c',
                  questionText: 'Estimated protein needs',
                  answerType: 'text',
                  value: '65–80 g/day',
                },
              ],
            },
            {
              sectionNumber: '5',
              sectionTitle: 'Dietitian Recommendations',
              questions: [
                {
                  questionId: 'q5',
                  questionText: 'Recommended interventions',
                  answerType: 'textarea',
                  value: 'Fortified foods, Ensure Plus BID with meals, weekly weights, re-evaluate in 1 week.',
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

/**
 * Simple match-keys builder — if the quote appears in an option text or value,
 * return the index-path keys so the viewer can highlight the row.
 */
function buildDemoMatchKeys(uda, quote) {
  if (!quote || !uda?.answers) return [];
  const keys = [];
  const needle = quote.toLowerCase();
  uda.answers.sections.forEach((section, s) => {
    section.content.forEach((content, c) => {
      content.questions.forEach((question, q) => {
        const qKey = `${s}:${c}:${q}`;
        const label = question.questionText?.toLowerCase() || '';
        if (question.value && needle.includes(question.value.toLowerCase())) {
          keys.push(qKey);
          return;
        }
        if (label && needle.includes(label)) {
          // Whole-question label match — highlight via value key
          keys.push(qKey);
          return;
        }
        question.options?.forEach((option, o) => {
          if (option.selected && needle.includes(option.text.toLowerCase())) {
            keys.push(`${qKey}:${o}`);
          }
        });
      });
    });
  });
  return keys;
}

function buildUdaResponse(udaId, quote) {
  const uda = DEMO_UDA_FIXTURES[udaId];
  if (!uda) {
    return { success: false, error: `Demo: no UDA fixture for ${udaId}` };
  }
  // For the canned nutrition demo, hard-code the 4 matching rows the screenshot
  // shows so the highlight + scroll UX lands cleanly.
  const hardcodedMatchKeys =
    udaId === 'demo-nutrition-v3' ? ['0:0:0:0', '0:1:0:0', '0:2:0:0', '0:3:0:0'] : [];
  const matchKeys = quote ? (hardcodedMatchKeys.length ? hardcodedMatchKeys : buildDemoMatchKeys(uda, quote)) : [];
  return {
    success: true,
    data: {
      uda,
      matchKeys,
    },
  };
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomDelay() {
  return delay(50 + Math.random() * 150);
}

/**
 * Route an API_REQUEST to the appropriate mock data
 */
function routeApiRequest(endpoint) {
  // Strip query string for pattern matching, keep params for keyed lookups
  const [path, queryString] = endpoint.split('?');
  const params = new URLSearchParams(queryString || '');

  // /api/extension/mds/dashboard
  if (path === '/api/extension/mds/dashboard') {
    return { success: true, data: DEMO_API_RESPONSES.dashboard };
  }

  // /api/extension/mds/doc-risks
  if (path === '/api/extension/mds/doc-risks') {
    return { success: true, data: DEMO_API_RESPONSES.docRisks };
  }

  // /api/extension/mds/ard-recommendation
  if (path === '/api/extension/mds/ard-recommendation') {
    return { success: true, data: DEMO_API_RESPONSES.ardRecommendation };
  }

  // /api/extension/mds/pdpm-potential
  if (path === '/api/extension/mds/pdpm-potential') {
    const assessmentId = params.get('externalAssessmentId');
    const data = DEMO_API_RESPONSES.pdpmPotential[assessmentId];
    if (data) return { success: true, data };
    return { success: false, error: `No PDPM data for assessment ${assessmentId}` };
  }

  // /api/extension/patients/{patientId}/assessments
  const patientAssessmentsMatch = path.match(/\/api\/extension\/patients\/([^/]+)\/assessments/);
  if (patientAssessmentsMatch) {
    const patientId = patientAssessmentsMatch[1];
    const data = DEMO_API_RESPONSES.patientAssessments[patientId];
    if (data) return { success: true, data };
    return { success: false, error: `No assessments for patient ${patientId}` };
  }

  // /api/extension/mds/items/{code}
  const itemDetailMatch = path.match(/\/api\/extension\/mds\/items\/([^/]+)/);
  if (itemDetailMatch) {
    const code = decodeURIComponent(itemDetailMatch[1]);
    const data = DEMO_API_RESPONSES.itemDetail[code];
    if (data) return { success: true, data };
    // Return a generic response for unknown items
    return {
      success: true,
      data: {
        item: { mdsItem: code, itemName: code, description: `MDS Item ${code}`, status: 'dont_code', evidence: [] },
        diagnosisSummary: null,
        treatmentSummary: null
      }
    };
  }

  // /api/extension/mds/queryable-items
  if (path === '/api/extension/mds/queryable-items') {
    return { success: true, data: DEMO_API_RESPONSES.queryableItems };
  }

  // /api/extension/mds/queryable-items/batch-generate (POST)
  if (path === '/api/extension/mds/queryable-items/batch-generate') {
    return { success: true, data: { generated: true } };
  }

  // /api/extension/practitioners
  if (path === '/api/extension/practitioners') {
    return { success: true, data: DEMO_API_RESPONSES.practitioners };
  }

  // ── Certification routes ──

  // /api/extension/certifications/dashboard
  if (path === '/api/extension/certifications/dashboard') {
    return { success: true, data: DEMO_API_RESPONSES.certDashboard };
  }

  // /api/extension/certifications/practitioners
  if (path === '/api/extension/certifications/practitioners') {
    return { success: true, data: DEMO_API_RESPONSES.practitioners };
  }

  // /api/extension/certifications/by-patient
  if (path === '/api/extension/certifications/by-patient') {
    const patientId = params.get('patientId');
    const all = DEMO_API_RESPONSES.certifications || [];
    const filtered = patientId ? all.filter(c => c.patientId === patientId) : all;
    return { success: true, data: { certifications: filtered } };
  }

  // /api/extension/certifications/:id/sends
  const certSendsMatch = path.match(/\/api\/extension\/certifications\/([^/]+)\/sends/);
  if (certSendsMatch) {
    return {
      success: true,
      data: [{
        id: 'send-1',
        certId: certSendsMatch[1],
        sentAt: new Date(Date.now() - 3 * 86400000).toISOString(),
        practitioner: { name: 'Dr. Demo Provider' },
        method: 'fax'
      }]
    };
  }

  // /api/extension/certifications/:id/(send|skip|delay|edit-reason|unskip)
  const certActionMatch = path.match(/\/api\/extension\/certifications\/([^/]+)\/(send|skip|delay|edit-reason|unskip)/);
  if (certActionMatch) {
    return { success: true, data: { certId: certActionMatch[1], action: certActionMatch[2] } };
  }

  // /api/extension/certifications (list)
  if (path === '/api/extension/certifications') {
    const status = params.get('status');
    const all = DEMO_API_RESPONSES.certifications || [];
    const filtered = status ? all.filter(c => c.status === status) : all;
    return { success: true, data: { certifications: filtered } };
  }

  // ── Planner routes ──

  if (path === '/api/extension/planner/week-events') {
    const startDate = params.get('startDate');
    const endDate = params.get('endDate');
    if (!startDate || !endDate) {
      return { success: false, error: 'Missing required param: startDate or endDate' };
    }
    return {
      success: true,
      data: {
        events: buildPlannerWeekEvents(startDate),
        meta: {
          facilityName: params.get('facilityName') || 'Demo Facility',
          startDate,
          endDate,
          generatedAt: new Date().toISOString(),
        },
      },
    };
  }

  if (path === '/api/extension/planner/summary') {
    return {
      success: true,
      data: {
        summary: buildPlannerSummary(),
        meta: { generatedAt: new Date().toISOString() },
      },
    };
  }

  // /api/extension/documents/:id (PDF prefetch for ItemPopover)
  const docMatch = path.match(/\/api\/extension\/documents\/([^/]+)/);
  if (docMatch) {
    return {
      success: true,
      data: {
        document: {
          id: docMatch[1],
          title: 'Clinical Document',
          documentType: 'Progress Note',
          effectiveDate: '2026-01-22',
          fileSize: 245760,
          signedUrl: null // No real PDF in demo — viewer will show empty state
        }
      }
    };
  }

  // /api/extension/patients/:patientId/uda/:udaId
  const udaMatch = path.match(/\/api\/extension\/patients\/([^/]+)\/uda\/([^/]+)/);
  if (udaMatch) {
    const udaId = udaMatch[2];
    const quote = params.get('quote') || null;
    return buildUdaResponse(udaId, quote);
  }

  console.warn('[DemoMock] Unhandled API endpoint:', path);
  return { success: false, error: `Demo: unhandled endpoint ${path}` };
}

/**
 * Handle a message from chrome.runtime.sendMessage
 */
async function handleMessage(msg) {
  await randomDelay();

  switch (msg.type) {
    case 'GET_ORG':
      return { org: 'demo-org' };

    case 'GET_AUTH_STATE':
      return { authenticated: true };

    case 'API_REQUEST':
      return routeApiRequest(msg.endpoint);

    default:
      console.log('[DemoMock] Unhandled message type:', msg.type);
      return {};
  }
}

/**
 * Install the mock chrome API
 */
export function createMockChrome() {
  if (typeof window.chrome === 'undefined') {
    window.chrome = {};
  }
  if (!window.chrome.runtime) {
    window.chrome.runtime = {};
  }

  // Mock sendMessage — supports both Promise and callback patterns
  window.chrome.runtime.sendMessage = function (msg, callback) {
    const promise = handleMessage(msg);

    if (typeof callback === 'function') {
      // Callback pattern (used by useItemDetail)
      promise.then(callback).catch(err => {
        console.error('[DemoMock] Error in callback handler:', err);
        callback({ success: false, error: err.message });
      });
      return undefined;
    }

    // Promise pattern (used by most hooks)
    return promise;
  };

  // Mock getURL — return relative paths for lib files
  window.chrome.runtime.getURL = function (path) {
    // Map extension paths to demo-relative paths
    if (path.startsWith('lib/')) return `./${path}`;
    return path;
  };

  // Mock chrome.runtime.id (some code checks for extension context)
  window.chrome.runtime.id = 'demo-mock-extension-id';

  console.log('[DemoMock] Chrome API mocks installed');
}
