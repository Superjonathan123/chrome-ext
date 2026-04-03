/**
 * DemoApp — shell component that provides FAB launcher buttons for each
 * Preact module. Renders the actual production components with mock data.
 */
import { useState, useEffect } from 'preact/hooks';
import { MDSCommandCenter } from '../../content/modules/mds-command-center/MDSCommandCenter.jsx';
import { PDPMAnalyzer } from '../../content/modules/pdpm-analyzer/PDPMAnalyzer.jsx';
import { QueryItemsPage } from '../../content/modules/query-items/QueryItemsPage.jsx';
import { DemoChatOverlay } from './DemoChatOverlay.jsx';

const FACILITY_NAME = 'SUNNY MEADOWS DEMO FACILITY';
const ORG_SLUG = 'demo-org';

// Demo context for each overlay
const DEMO_CONTEXTS = {
  commandCenter: {
    facilityName: FACILITY_NAME,
    orgSlug: ORG_SLUG
  },
  pdpmMds: {
    context: { scope: 'mds', assessmentId: '4860265', facilityName: FACILITY_NAME },
  },
  pdpmPatient: {
    context: { scope: 'patient', patientId: '2657226', patientName: 'Doe, Jane', facilityName: FACILITY_NAME },
  },
  queryItems: {
    patientId: '2657226',
    patientName: 'Doe, Jane',
    facilityName: FACILITY_NAME,
    orgSlug: ORG_SLUG,
    assessmentId: '4860265'
  },
  chat: {
    patientId: '2657226',
  }
};

// FAB button definitions
const FAB_BUTTONS = [
  { id: 'commandCenter', label: 'Command Center', icon: '\u{1F4CB}', color: '#6366f1' },
  { id: 'pdpmMds', label: 'PDPM (MDS)', icon: '\u{1F4CA}', color: '#22c55e' },
  { id: 'pdpmPatient', label: 'PDPM (Patient)', icon: '\u{1F9D1}', color: '#f97316' },
  { id: 'queryItems', label: 'Query Items', icon: '\u{1F4DD}', color: '#3b82f6' },
  { id: 'chat', label: 'AI Chat', icon: '\u{1F4AC}', color: '#8b5cf6' },
];

export function DemoApp() {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [fabExpanded, setFabExpanded] = useState(false);

  // Listen for PDPMAnalyzerLauncher.open events from MDSCommandCenter
  useEffect(() => {
    function handleOpenPdpm(e) {
      const opts = e.detail;
      if (opts?.scope === 'mds' && opts?.assessmentId) {
        setActiveOverlay('pdpmMds');
      }
    }
    window.addEventListener('demo:open-pdpm', handleOpenPdpm);
    return () => window.removeEventListener('demo:open-pdpm', handleOpenPdpm);
  }, []);

  // Listen for vanilla Super Menu "AI Chat" nav button
  useEffect(() => {
    function handleOpenChat() {
      setActiveOverlay('chat');
    }
    window.addEventListener('demo:open-chat', handleOpenChat);
    return () => window.removeEventListener('demo:open-chat', handleOpenChat);
  }, []);

  function handleClose() {
    setActiveOverlay(null);
  }

  function handleCommandCenterClose(opts) {
    // If { hide: true }, the command center is being hidden to show PDPM
    if (opts?.hide) return;
    setActiveOverlay(null);
  }

  return (
    <>
      {/* ── Rendered Overlays ── */}
      {activeOverlay === 'commandCenter' && (
        <MDSCommandCenter
          facilityName={DEMO_CONTEXTS.commandCenter.facilityName}
          orgSlug={DEMO_CONTEXTS.commandCenter.orgSlug}
          onClose={handleCommandCenterClose}
        />
      )}

      {activeOverlay === 'pdpmMds' && (
        <div class="demo-pdpm-wrapper" style={overlayWrapperStyle}>
          <div class="demo-pdpm-header" style={overlayHeaderStyle}>
            <span style={{ fontWeight: 600 }}>PDPM Analyzer (MDS Scope)</span>
            <button onClick={handleClose} style={closeButtonStyle}>&times;</button>
          </div>
          <div style={{ flex: 1, overflow: 'auto' }}>
            <PDPMAnalyzer
              context={DEMO_CONTEXTS.pdpmMds.context}
              onClose={handleClose}
            />
          </div>
        </div>
      )}

      {activeOverlay === 'pdpmPatient' && (
        <div class="demo-pdpm-wrapper" style={overlayWrapperStyle}>
          <div class="demo-pdpm-header" style={overlayHeaderStyle}>
            <span style={{ fontWeight: 600 }}>PDPM Analyzer (Patient Scope)</span>
            <button onClick={handleClose} style={closeButtonStyle}>&times;</button>
          </div>
          <div style={{ flex: 1, overflow: 'auto' }}>
            <PDPMAnalyzer
              context={DEMO_CONTEXTS.pdpmPatient.context}
              onClose={handleClose}
            />
          </div>
        </div>
      )}

      {activeOverlay === 'queryItems' && (
        <div class="demo-query-wrapper" style={overlayWrapperStyle}>
          <div class="demo-query-header" style={overlayHeaderStyle}>
            <span style={{ fontWeight: 600 }}>Query Items Page</span>
            <button onClick={handleClose} style={closeButtonStyle}>&times;</button>
          </div>
          <div style={{ flex: 1, overflow: 'auto' }}>
            <QueryItemsPage
              patientId={DEMO_CONTEXTS.queryItems.patientId}
              patientName={DEMO_CONTEXTS.queryItems.patientName}
              facilityName={DEMO_CONTEXTS.queryItems.facilityName}
              orgSlug={DEMO_CONTEXTS.queryItems.orgSlug}
              assessmentId={DEMO_CONTEXTS.queryItems.assessmentId}
              onClose={handleClose}
              onBack={handleClose}
            />
          </div>
        </div>
      )}

      {activeOverlay === 'chat' && (
        <DemoChatOverlay
          patientId={DEMO_CONTEXTS.chat.patientId}
          onClose={handleClose}
        />
      )}

      {/* ── FAB Launcher Group ── */}
      <div style={fabContainerStyle}>
        {/* Expanded buttons */}
        {fabExpanded && (
          <div style={fabMenuStyle}>
            {FAB_BUTTONS.map((btn) => (
              <button
                key={btn.id}
                onClick={() => {
                  setActiveOverlay(btn.id);
                  setFabExpanded(false);
                }}
                style={{
                  ...fabItemStyle,
                  background: btn.color,
                }}
                title={btn.label}
              >
                <span style={{ fontSize: '16px', marginRight: '8px' }}>{btn.icon}</span>
                <span style={{ fontSize: '12px', fontWeight: 500 }}>{btn.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Main FAB toggle */}
        <button
          onClick={() => setFabExpanded(!fabExpanded)}
          style={{
            ...mainFabStyle,
            transform: fabExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          title="Open Preact Demo Modules"
        >
          +
        </button>
      </div>
    </>
  );
}

// ── Styles ──

const fabContainerStyle = {
  position: 'fixed',
  bottom: '24px',
  left: '24px',
  zIndex: 99999,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
};

const mainFabStyle = {
  width: '52px',
  height: '52px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '28px',
  fontWeight: 300,
  transition: 'transform 0.2s ease',
  lineHeight: 1,
};

const fabMenuStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  marginBottom: '4px',
};

const fabItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '8px 14px',
  borderRadius: '8px',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  whiteSpace: 'nowrap',
  transition: 'opacity 0.15s',
};

const overlayWrapperStyle = {
  position: 'fixed',
  inset: '20px',
  zIndex: 100000,
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const overlayHeaderStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid #e5e7eb',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#f9fafb',
  flexShrink: 0,
};

const closeButtonStyle = {
  background: 'transparent',
  border: 'none',
  fontSize: '22px',
  cursor: 'pointer',
  color: '#6b7280',
  padding: '0 4px',
  lineHeight: 1,
};
