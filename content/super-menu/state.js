// Super Menu State Management

const SuperMenu = {
  isOpen: false,
  activeView: 'dashboard', // 'dashboard' | 'mds' | 'chat'
  initialized: false,
  // Chat state
  patientId: null,
  messages: [],
  status: 'ready', // ready | submitted | streaming
  streamingPort: null,
  currentAssistantMessage: null,
  // MDS context state
  mdsContext: null // { scope: 'mds' | 'patient' | 'global', assessmentId?, patientId? }
};

// Alias for backward compatibility with chat functions
const SuperChat = SuperMenu;

// MDS View State
const MDSViewState = {
  data: null,
  loading: false,
  error: null,
  context: null, // Current context being displayed
  manualContext: null, // Manual navigation override (cleared on URL change)
  cameFromDashboard: false, // Track if user drilled down from facility dashboard
  showAllAssessments: false, // Override auto-select to show full list
  autoSelectAttempt: null // Track auto-select attempts { patientId, patientName } to fallback on error
};

// FAB position storage key
const FAB_POSITION_KEY = 'super-menu-fab-position';
