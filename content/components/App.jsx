// Super LTC Chrome Extension - Root Preact App Component
// This is a minimal placeholder for Week 1 proof-of-concept
// Will eventually house TopBar, ModuleRouter, and FAB integration

import { useState } from 'preact/hooks';
import { UpdateBanner } from './UpdateBanner.jsx';

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <UpdateBanner />

      {/* Placeholder: FAB integration will come later */}
      {/* For now, vanilla fab.js handles the floating button */}

      {/* Placeholder: Main panel (only when open) */}
      {menuOpen && (
        <div className="super-menu-panel">
          <div className="super-topbar-placeholder">
            <h2>Super LTC</h2>
            <button onClick={() => setMenuOpen(false)}>✕</button>
          </div>
          <div className="super-module-container">
            <p>Preact app mounted successfully! 🎉</p>
            <p>Module router will go here.</p>
          </div>
        </div>
      )}
    </>
  );
};
