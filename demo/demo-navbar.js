/**
 * Super LTC Demo Navigation Bar
 * Creates and manages the demo navigation bar
 */

(function() {
  'use strict';

  // Create and inject the navigation bar
  function createDemoNavBar() {
    const nav = document.createElement('div');
    nav.className = 'super-demo-nav';
    nav.innerHTML = `
      <div class="super-demo-nav__left">
        <div class="super-demo-nav__brand">
          <div class="super-demo-nav__brand-icon">S</div>
          <span>Super LTC Demo</span>
        </div>
        <div class="super-demo-nav__tabs">
          <button class="super-demo-nav__tab super-demo-nav__tab--active" data-page="medical-diagnosis">
            📋 Medical Diagnosis
          </button>
          <button class="super-demo-nav__tab" data-page="mds-summary">
            📊 MDS Summary
          </button>
          <button class="super-demo-nav__tab" data-page="mds-section">
            📝 MDS Section I
          </button>
          <button class="super-demo-nav__tab" data-page="simple-demo">
            ⚡ Simple Demo
          </button>
          <button class="super-demo-nav__tab" data-page="pcc-demo">
            🏥 PCC Demo
          </button>
        </div>
      </div>
      <div class="super-demo-nav__right">
        <button class="super-demo-nav__button super-demo-nav__button--primary" data-action="icd10">
          🎯 ICD-10
        </button>
        <button class="super-demo-nav__button" data-action="mar">
          💊 MAR
        </button>
        <button class="super-demo-nav__button" data-action="tar">
          📋 TAR
        </button>
        <button class="super-demo-nav__button" data-action="therapy">
          🏃 Therapy
        </button>
      </div>
    `;

    // Insert at the beginning of body
    document.body.insertBefore(nav, document.body.firstChild);

    // Set up event listeners
    setupNavListeners(nav);
  }

  function setupNavListeners(nav) {
    // Tab clicks
    nav.querySelectorAll('.super-demo-nav__tab').forEach(tab => {
      tab.addEventListener('click', function() {
        const page = this.dataset.page;
        handlePageChange(page);
        
        // Update active state
        nav.querySelectorAll('.super-demo-nav__tab').forEach(t => {
          t.classList.remove('super-demo-nav__tab--active');
        });
        this.classList.add('super-demo-nav__tab--active');
      });
    });

    // Action button clicks
    nav.querySelectorAll('.super-demo-nav__button').forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.dataset.action;
        handleAction(action);
      });
    });
  }

  function handlePageChange(page) {
    console.log('[Demo Nav] Changing to page:', page);
    
    const pageUrls = {
      'medical-diagnosis': './medical-diagnosis.html',
      'mds-summary': './mds-summary.html',
      'mds-section': './mds-section-i.html',
      'simple-demo': './simple-demo.html',
      'pcc-demo': './pcc-demo.html'
    };

    const url = pageUrls[page];
    if (url) {
      // Check if page exists, otherwise stay on current page
      console.log('[Demo Nav] Would navigate to:', url);
      // For now, just log - in production this would navigate
      // window.location.href = url;
    }
  }

  function handleAction(action) {
    console.log('[Demo Nav] Action clicked:', action);
    
    switch (action) {
      case 'icd10':
        if (window.ICD10Viewer) {
          window.ICD10Viewer.open();
        } else {
          alert('ICD-10 Viewer: This would open the ICD-10 diagnosis viewer');
        }
        break;
      case 'mar':
        alert('MAR: This would open the Medication Administration Record');
        break;
      case 'tar':
        alert('TAR: This would open the Treatment Administration Record');
        break;
      case 'therapy':
        alert('Therapy: This would open the Therapy module');
        break;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDemoNavBar);
  } else {
    createDemoNavBar();
  }

})();
