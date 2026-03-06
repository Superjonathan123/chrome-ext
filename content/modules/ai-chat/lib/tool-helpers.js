// Tool helper functions — pure functions for tool call display
// Ported from superapp ai-chat-panel.tsx + existing utils.js

const TOOL_DISPLAY_NAMES = {
  think: 'Reasoning',
  searchVitals: 'Searching Vitals',
  searchLabs: 'Searching Labs',
  searchMedications: 'Searching Medications',
  searchOrders: 'Searching Orders',
  searchClinicalNotes: 'Searching Clinical Notes',
  searchDocuments: 'Searching Documents',
  getPatientContext: 'Getting Patient Context',
  readDocument: 'Reading Document',
  searchSemantically: 'Semantic Search',
  searchCarePlans: 'Searching Care Plans',
  searchAdministrationRecords: 'Searching Administration Records'
};

const TOOL_ICONS = {
  think: '\u{1F4AD}',              // thought balloon
  searchVitals: '\u{1F493}',       // heart
  searchLabs: '\u{1F9EA}',         // test tube
  searchMedications: '\u{1F48A}',  // pill
  searchOrders: '\u{1F4CB}',       // clipboard
  searchClinicalNotes: '\u{1F4DD}', // memo
  searchDocuments: '\u{1F4C4}',    // document
  getPatientContext: '\u{1F464}',  // person
  readDocument: '\u{1F4D6}',       // open book
  searchSemantically: '\u{1F50D}', // magnifying glass
  searchCarePlans: '\u{1F4CB}',    // clipboard
  searchAdministrationRecords: '\u{1F489}' // syringe
};

export function getFriendlyToolName(toolName) {
  return TOOL_DISPLAY_NAMES[toolName] || formatToolNameFallback(toolName);
}

export function getToolIcon(toolName) {
  return TOOL_ICONS[toolName] || '\u{1F50D}';
}

function formatToolNameFallback(name) {
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

export function getSearchParamsDescription(toolName, input) {
  if (!input) return '';

  switch (toolName) {
    case 'searchVitals':
      return input.vitalType ? `"${input.vitalType}"` : '';
    case 'searchLabs':
    case 'searchMedications':
    case 'searchOrders':
    case 'searchDocuments':
      return input.keyword ? `"${input.keyword}"` : '';
    case 'searchClinicalNotes':
      return input.keyword ? `"${input.keyword}"` : (input.noteType || '');
    case 'getPatientContext':
      return 'diagnoses';
    case 'readDocument':
      return input.documentId ? `doc #${input.documentId}` : '';
    case 'searchSemantically':
      return input.query ? `"${input.query.slice(0, 30)}${input.query.length > 30 ? '...' : ''}"` : '';
    default:
      if (input.keyword) return `"${input.keyword}"`;
      if (input.query) return `"${input.query.slice(0, 30)}${input.query.length > 30 ? '...' : ''}"`;
      return '';
  }
}

export function getResultSummary(toolName, output) {
  if (!output) return '';
  if (typeof output === 'string') {
    // Try to parse count from common response patterns
    try {
      const parsed = JSON.parse(output);
      if (Array.isArray(parsed)) return `${parsed.length} results`;
      if (parsed.results && Array.isArray(parsed.results)) return `${parsed.results.length} results`;
    } catch {
      // Not JSON, check string length
      if (output.length > 100) return 'Results received';
    }
  }
  if (Array.isArray(output)) return `${output.length} results`;
  if (output.results && Array.isArray(output.results)) return `${output.results.length} results`;
  return 'Complete';
}
