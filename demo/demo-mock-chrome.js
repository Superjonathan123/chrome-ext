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
        item: { mdsItem: code, itemName: code, description: `MDS Item ${code}` },
        diagnosisSummary: null,
        treatmentSummary: null,
        evidence: []
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
