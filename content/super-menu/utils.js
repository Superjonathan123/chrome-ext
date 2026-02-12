// Super Menu Utility Functions

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatMarkdown(text) {
  if (!text) return '';

  // Basic markdown formatting
  return text
    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Line breaks
    .replace(/\n/g, '<br>')
    // Lists (basic)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    // Clean up multiple consecutive br tags
    .replace(/(<br>)+/g, '<br>');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

function formatToolName(name) {
  // Convert camelCase to Title Case with spaces
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

// Get appropriate icon for different tool types
function getToolIcon(toolName) {
  const icons = {
    'think': '&#128161;',           // Light bulb
    'searchVitals': '&#128147;',    // Heart
    'searchLabs': '&#129514;',      // Test tube
    'searchMedications': '&#128138;', // Pill
    'searchOrders': '&#128203;',    // Clipboard
    'searchClinicalNotes': '&#128221;', // Memo
    'searchDocuments': '&#128196;', // Document
    'getPatientContext': '&#128100;', // Person
    'readDocument': '&#128214;',    // Open book
    'searchSemantically': '&#128269;', // Magnifying glass
    'searchCarePlans': '&#128203;', // Clipboard
    'searchAdministrationRecords': '&#128137;' // Syringe
  };
  return icons[toolName] || '&#128269;'; // Default: magnifying glass
}

// Generate a friendly summary of what the tool is doing
function getToolSummary(toolName, input) {
  if (!input) return '';

  switch (toolName) {
    case 'searchVitals':
      return input.vitalType ? `"${input.vitalType}"` : '';
    case 'searchLabs':
      return input.keyword ? `"${input.keyword}"` : '';
    case 'searchMedications':
    case 'searchOrders':
      return input.keyword ? `"${input.keyword}"` : '';
    case 'searchClinicalNotes':
      return input.keyword ? `"${input.keyword}"` : (input.noteType ? input.noteType : '');
    case 'searchDocuments':
      return input.keyword ? `"${input.keyword}"` : '';
    case 'getPatientContext':
      return 'diagnoses';
    case 'readDocument':
      return input.documentId ? `doc #${input.documentId}` : '';
    case 'searchSemantically':
      return input.query ? `"${input.query.slice(0, 30)}..."` : '';
    default:
      // Try to find a keyword or query in the input
      if (input.keyword) return `"${input.keyword}"`;
      if (input.query) return `"${input.query.slice(0, 30)}..."`;
      return '';
  }
}

// Make available globally for cross-file access
window.escapeHtml = escapeHtml;
window.formatMarkdown = formatMarkdown;
window.formatDate = formatDate;
window.formatToolName = formatToolName;
window.getToolIcon = getToolIcon;
window.getToolSummary = getToolSummary;
