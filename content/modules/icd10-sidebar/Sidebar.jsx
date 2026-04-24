import { h } from 'preact';
import { useState, useEffect, useMemo, useRef } from 'preact/hooks';

const BASE_CODE_DESCRIPTIONS = {
  'I69': 'Sequelae of cerebrovascular disease',
  'G30': "Alzheimer's disease",
  'R13': 'Dysphagia',
  'R47': 'Speech disturbances',
  'F03': 'Dementia',
  'F09': 'Mental disorder (physiological)',
  'N18': 'Chronic kidney disease',
  'N40': 'Benign prostatic hyperplasia',
  'M54': 'Dorsalgia',
  'M62': 'Muscle disorders',
  'M46': 'Inflammatory spondylopathies',
  'Z87': 'Personal history',
  'Z94': 'Transplanted organ status',
  'E78': 'Disorders of lipoprotein metabolism',
  'E11': 'Type 2 diabetes mellitus',
  'E66': 'Overweight and obesity',
  'G47': 'Sleep disorders',
  'K21': 'Gastro-esophageal reflux disease',
  'I10': 'Essential hypertension',
  'I49': 'Cardiac arrhythmias',
  'J44': 'COPD',
  'J96': 'Respiratory failure',
  'R93': 'Abnormal diagnostic imaging',
  'R26': 'Gait and mobility abnormalities',
  'R27': 'Coordination disorders',
  'R29': 'Nervous/musculoskeletal symptoms',
  'R33': 'Retention of urine',
  'R41': 'Cognitive symptoms',
  'S12': 'Cervical vertebra fracture',
  'H91': 'Hearing loss'
};

function resolveBaseCodeDescription(baseCode, fallback) {
  if (BASE_CODE_DESCRIPTIONS[baseCode]) return BASE_CODE_DESCRIPTIONS[baseCode];
  if (!fallback) return baseCode;
  const first = fallback.split(/[,(]/)[0].trim();
  return first.length > 40 ? first.substring(0, 40) + '…' : first;
}

function badgesFromItems(items) {
  let nta = false;
  let slp = false;
  for (const i of items || []) {
    if (i.category === 'nta') nta = true;
    if (i.category === 'slp') slp = true;
    if (nta && slp) break;
  }
  return { nta, slp };
}

function buildSections({ topRanked, approved, annotations }) {
  const topPicks = (topRanked || []).map(g => ({
    kind: 'group',
    key: `t:${g.groupId}`,
    origin: 'topRanked',
    rank: g.rank,
    code: g.groupCode,
    description: g.groupName,
    badges: badgesFromItems(g.annotations || []),
    group: g,
  }));

  const approvedRows = (approved || []).map(g => ({
    kind: 'group',
    key: `a:${g.groupId}`,
    origin: 'approved',
    code: g.groupCode,
    description: g.groupName,
    badges: badgesFromItems(g.annotations || []),
    group: g,
  }));

  const buckets = { other: {}, speculative: {} };
  for (const ann of annotations || []) {
    const baseCode = (ann.icd10Code || '').substring(0, 3);
    if (!baseCode) continue;
    const bucket = ann.category === 'speculative' ? 'speculative' : 'other';
    if (!buckets[bucket][baseCode]) {
      buckets[bucket][baseCode] = { baseCode, items: [], description: '' };
    }
    buckets[bucket][baseCode].items.push(ann);
    if (!buckets[bucket][baseCode].description && ann.description) {
      buckets[bucket][baseCode].description = ann.description;
    }
  }

  const toRows = (bucketObj, prefix) =>
    Object.values(bucketObj)
      .map(g => ({
        kind: 'baseCode',
        key: `${prefix}:${g.baseCode}`,
        origin: prefix === 's' ? 'speculative' : 'other',
        code: g.baseCode,
        description: resolveBaseCodeDescription(g.baseCode, g.description),
        badges: badgesFromItems(g.items),
        count: g.items.length,
        baseCode: g.baseCode,
        items: g.items,
      }))
      .sort((a, b) => b.count - a.count || a.code.localeCompare(b.code));

  return {
    topPicks,
    approved: approvedRows,
    other: toRows(buckets.other, 'o'),
    speculative: toRows(buckets.speculative, 's'),
  };
}

function allRows(sections) {
  return [
    ...sections.topPicks,
    ...sections.other,
    ...sections.speculative,
    ...sections.approved,
  ];
}

function firstRowKey(sections) {
  if (sections.topPicks.length) return sections.topPicks[0].key;
  if (sections.other.length) return sections.other[0].key;
  if (sections.speculative.length) return sections.speculative[0].key;
  if (sections.approved.length) return sections.approved[0].key;
  return null;
}

function buildSelectionPayload(row) {
  if (!row) return null;
  if (row.kind === 'group') {
    const g = row.group;
    return {
      category: row.origin,
      groupId: g.groupId,
      baseCode: g.groupCode,
      groupName: g.groupName,
      evidenceStrength: g.evidenceStrength || null,
      rationale: g.rationale || null,
      items: g.annotations || [],
    };
  }
  return {
    category: row.origin,
    baseCode: row.baseCode,
    items: row.items,
  };
}

function Icon({ name }) {
  if (name === 'check') {
    return h('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 },
      h('polyline', { points: '20 6 9 17 4 12' }));
  }
  if (name === 'alert') {
    return h('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 },
      h('path', { d: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' }),
      h('line', { x1: 12, y1: 9, x2: 12, y2: 13 }),
      h('line', { x1: 12, y1: 17, x2: 12.01, y2: 17 }));
  }
  if (name === 'star') {
    return h('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 },
      h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' }));
  }
  if (name === 'chevron') {
    return h('svg', { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 },
      h('polyline', { points: '6 9 12 15 18 9' }));
  }
  return null;
}

function Row({ row, selected, onClick }) {
  const cls = ['icd10-sb__row'];
  if (selected) cls.push('icd10-sb__row--selected');
  if (row.rank != null) cls.push('icd10-sb__row--ranked');
  return h('div', {
    class: cls.join(' '),
    onClick: () => onClick(row.key),
  },
    row.rank != null && h('span', { class: 'icd10-sb__rank' }, `#${row.rank}`),
    h('span', { class: 'icd10-sb__code' }, row.code),
    h('span', { class: 'icd10-sb__desc', title: row.description }, row.description),
    (row.badges.nta || row.badges.slp) && h('span', { class: 'icd10-sb__badges' },
      row.badges.nta && h('span', { class: 'icd10-sb__badge icd10-sb__badge--nta' }, 'NTA'),
      row.badges.slp && h('span', { class: 'icd10-sb__badge icd10-sb__badge--slp' }, 'SLP')
    )
  );
}

function CollapsibleHeader({ label, count, icon, open, onToggle, variant }) {
  const cls = ['icd10-sb__section-hdr', 'icd10-sb__section-hdr--collapsible'];
  if (variant) cls.push(`icd10-sb__section-hdr--${variant}`);
  return h('button', {
    type: 'button',
    class: cls.join(' '),
    onClick: onToggle,
    'aria-expanded': open,
  },
    icon && h('span', { class: 'icd10-sb__section-icon' }, h(Icon, { name: icon })),
    h('span', { class: 'icd10-sb__section-label' }, label),
    h('span', { class: 'icd10-sb__section-count' }, count),
    h('span', { class: `icd10-sb__section-chevron ${open ? 'icd10-sb__section-chevron--open' : ''}` },
      h(Icon, { name: 'chevron' })
    )
  );
}

function StaticHeader({ label, icon }) {
  return h('div', { class: 'icd10-sb__section-hdr icd10-sb__section-hdr--static' },
    icon && h('span', { class: 'icd10-sb__section-icon' }, h(Icon, { name: icon })),
    h('span', { class: 'icd10-sb__section-label' }, label)
  );
}

export function Sidebar({ topRanked = [], approved = [], annotations = [], onSelect }) {
  const [approvedOpen, setApprovedOpen] = useState(false);
  const [speculativeOpen, setSpeculativeOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const autoSelectedForRef = useRef(null);

  const sections = useMemo(
    () => buildSections({ topRanked, approved, annotations }),
    [topRanked, approved, annotations]
  );

  const validKeys = useMemo(() => {
    const set = new Set();
    for (const r of allRows(sections)) set.add(r.key);
    return set;
  }, [sections]);

  useEffect(() => {
    const current = selectedKey && validKeys.has(selectedKey) ? selectedKey : null;
    if (current) return;
    const next = firstRowKey(sections);
    if (!next) return;
    // Only auto-select once per unique "first row" to avoid fighting user clicks
    if (autoSelectedForRef.current === next) return;
    autoSelectedForRef.current = next;
    setSelectedKey(next);
    const row = allRows(sections).find(r => r.key === next);
    if (row && onSelect) onSelect(buildSelectionPayload(row));
  }, [sections, selectedKey, validKeys, onSelect]);

  const handleClick = (key) => {
    setSelectedKey(key);
    const row = allRows(sections).find(r => r.key === key);
    if (row && onSelect) onSelect(buildSelectionPayload(row));
  };

  const showApproved = sections.approved.length > 0;
  const showOther = sections.other.length > 0;
  const showSpeculative = sections.speculative.length > 0;

  return h('div', { class: 'icd10-sb' },
    showApproved && h('section', { class: 'icd10-sb__section' },
      h(CollapsibleHeader, {
        label: 'Approved',
        count: sections.approved.length,
        icon: 'check',
        open: approvedOpen,
        onToggle: () => setApprovedOpen(v => !v),
      }),
      approvedOpen && h('div', { class: 'icd10-sb__section-body' },
        sections.approved.map(row =>
          h(Row, { key: row.key, row, selected: selectedKey === row.key, onClick: handleClick })
        )
      )
    ),

    h('section', { class: 'icd10-sb__section' },
      h(StaticHeader, { label: 'Top picks', icon: 'star' }),
      h('div', { class: 'icd10-sb__section-body' },
        sections.topPicks.length > 0
          ? sections.topPicks.map(row =>
              h(Row, { key: row.key, row, selected: selectedKey === row.key, onClick: handleClick })
            )
          : h('div', { class: 'icd10-sb__empty' }, 'No suggestions yet')
      )
    ),

    showOther && h('section', { class: 'icd10-sb__section' },
      h(StaticHeader, { label: 'Other suggestions' }),
      h('div', { class: 'icd10-sb__section-body' },
        sections.other.map(row =>
          h(Row, { key: row.key, row, selected: selectedKey === row.key, onClick: handleClick })
        )
      )
    ),

    showSpeculative && h('section', { class: 'icd10-sb__section' },
      h(CollapsibleHeader, {
        label: 'Speculative',
        count: sections.speculative.length,
        icon: 'alert',
        open: speculativeOpen,
        onToggle: () => setSpeculativeOpen(v => !v),
        variant: 'warning',
      }),
      speculativeOpen && h('div', { class: 'icd10-sb__section-body' },
        sections.speculative.map(row =>
          h(Row, { key: row.key, row, selected: selectedKey === row.key, onClick: handleClick })
        )
      )
    )
  );
}
