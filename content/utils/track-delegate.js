// Global capture-phase click listener. Any element (or ancestor) with
// data-track="event_name" fires that event. Properties come from
// data-track-prop-<key>="value" attributes (kebab-case → snake_case).
//
// Examples:
//   <button data-track="qm_tile_clicked"
//           data-track-prop-measure-code="N0410">…</button>
//
//   <button data-track="panel_tab_switched"
//           data-track-prop-from-tab="dashboard"
//           data-track-prop-to-tab="mds">…</button>

import { track } from './analytics.js';

function readProps(el) {
  const props = {};
  for (const attr of el.attributes) {
    if (!attr.name.startsWith('data-track-prop-')) continue;
    const key = attr.name.slice('data-track-prop-'.length).replace(/-/g, '_');
    props[key] = attr.value;
  }
  return props;
}

export function startTrackDelegate() {
  document.addEventListener('click', (e) => {
    const el = e.target?.closest?.('[data-track]');
    if (!el) return;
    const event = el.dataset.track;
    if (!event) return;
    track(event, readProps(el));
  }, true);
}
