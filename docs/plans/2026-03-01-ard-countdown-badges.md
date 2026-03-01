# ARD Countdown Badges on Query Cards

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Show ARD deadline urgency on outstanding diagnosis queries and sort by soonest deadline.

**Architecture:** Add an inline ARD pill badge to `QueryCard`, a sort helper for queries by `ardDaysRemaining`, and 3 CSS classes for urgency tiers (gray/orange/red).

**Tech Stack:** Preact (existing), CSS

---

### Task 1: Add ARD badge helper + sort function

**Files:**
- Modify: `content/modules/mds-command-center/MDSCommandCenter.jsx` (helpers section, ~line 315-335)

**Step 1: Add `ardBadge` helper function after `formatShortDate` (around line 335)**

```jsx
function ardBadge(q) {
  const d = q.ardDaysRemaining;
  if (d == null) return null;
  let label, cls;
  if (d < 0) {
    label = `ARD passed ${Math.abs(d)}d ago`;
    cls = 'mds-cc__ard--critical';
  } else if (d === 0) {
    label = 'ARD today';
    cls = 'mds-cc__ard--critical';
  } else if (d <= 3) {
    label = `ARD in ${d}d`;
    cls = 'mds-cc__ard--warn';
  } else {
    label = `ARD in ${d}d`;
    cls = 'mds-cc__ard--neutral';
  }
  return <span class={`mds-cc__ard ${cls}`}>{label}</span>;
}
```

**Step 2: Add `sortByArd` helper right after `ardBadge`**

```jsx
function sortByArd(queries) {
  return [...queries].sort((a, b) => {
    const aVal = a.ardDaysRemaining ?? Infinity;
    const bVal = b.ardDaysRemaining ?? Infinity;
    return aVal - bVal;
  });
}
```

**Step 3: Build and verify no errors**

Run: `npm run build`

**Step 4: Commit**

```
feat: add ARD badge helper and sort function for query cards
```

---

### Task 2: Wire ARD badge into QueryCard + sort queries

**Files:**
- Modify: `content/modules/mds-command-center/MDSCommandCenter.jsx` (QueryCard ~337, QueriesView ~399)

**Step 1: Add ARD badge to QueryCard meta row**

In `QueryCard` component, add the badge inside the `.mds-cc__qcard-meta` div, as the first child (before `assessmentCtx`). Change lines 360-366 from:

```jsx
      <div class="mds-cc__qcard-meta">
        {assessmentCtx && <span class="mds-cc__qcard-ctx">{assessmentCtx}</span>}
        <span class={`mds-cc__qcard-status mds-cc__qcard-status--${isPending ? 'pending' : 'sent'}`}>
          {isPending ? 'Not yet sent' : `Sent ${formatRelative(q.sentAt)}`}
        </span>
        {practName && <span class="mds-cc__qcard-practitioner">to {practName}{practTitle ? `, ${practTitle}` : ''}</span>}
      </div>
```

To:

```jsx
      <div class="mds-cc__qcard-meta">
        {ardBadge(q)}
        {assessmentCtx && <span class="mds-cc__qcard-ctx">{assessmentCtx}</span>}
        <span class={`mds-cc__qcard-status mds-cc__qcard-status--${isPending ? 'pending' : 'sent'}`}>
          {isPending ? 'Not yet sent' : `Sent ${formatRelative(q.sentAt)}`}
        </span>
        {practName && <span class="mds-cc__qcard-practitioner">to {practName}{practTitle ? `, ${practTitle}` : ''}</span>}
      </div>
```

**Step 2: Sort queries in QueriesView**

Change lines 401-402 from:

```jsx
  const pending = (outstandingQueries || []).filter(q => q.status === 'pending');
  const sent = (outstandingQueries || []).filter(q => q.status === 'sent' || q.status === 'awaiting_response');
```

To:

```jsx
  const pending = sortByArd((outstandingQueries || []).filter(q => q.status === 'pending'));
  const sent = sortByArd((outstandingQueries || []).filter(q => q.status === 'sent' || q.status === 'awaiting_response'));
```

**Step 3: Build and verify**

Run: `npm run build`

**Step 4: Commit**

```
feat: display ARD countdown badge on query cards and sort by urgency
```

---

### Task 3: Add CSS for ARD badge

**Files:**
- Modify: `content/css/mds-command-center.css` (after `.mds-cc__qcard-practitioner` block, ~line 1810)

**Step 1: Add ARD badge styles**

Insert after line 1810 (after `.mds-cc__qcard-practitioner`):

```css
/* ARD countdown badge */
.mds-cc__ard {
  font-size: 10px;
  font-weight: 700;
  font-family: var(--super-font, sans-serif);
  padding: 1px 7px;
  border-radius: 999px;
  white-space: nowrap;
  letter-spacing: 0.01em;
}
.mds-cc__ard::before {
  content: none;
}
.mds-cc__qcard-meta > .mds-cc__ard + span::before {
  content: '\00B7';
  margin-right: 6px;
}
.mds-cc__ard--neutral {
  color: #4b5563;
  background: #f3f4f6;
}
.mds-cc__ard--warn {
  color: #92400e;
  background: #fef3c7;
}
.mds-cc__ard--critical {
  color: #991b1b;
  background: #fee2e2;
}
```

Key design choices:
- The `::before { content: none }` override prevents the middot separator from the parent `.mds-cc__qcard-meta > span + span::before` rule from appearing before the ARD badge (since it's the first child)
- The `> .mds-cc__ard + span::before` rule ensures the middot still appears between the ARD badge and the next span
- Uses the same pill/badge pattern as existing `.mds-cc__qcard-delta` and `.mds-cc__qcard-status-badge`
- Colors match the project's existing palette (gray-100/amber/red-100 backgrounds)

**Step 2: Build and verify**

Run: `npm run build`

**Step 3: Commit**

```
style: add ARD countdown badge CSS with urgency color tiers
```
