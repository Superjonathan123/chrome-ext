# ICD-10 Sidebar Redesign — Flat List with Inline Badges

**Status:** Design (pre-implementation)
**Date:** 2026-04-23
**Scope:** Left sidebar of the ICD-10 coding page (`content/icd10-viewer/icd10-sidebar.js`)

---

## Problem

The current sidebar forces the user through folders (`NTA`, `SLP`, `Other`, `Speculative`) to see codes. Only `Top Ranked` is visible without a click. `NTA` and `SLP` are payment-category tags that the backend stamps onto each annotation — they don't need to be navigation destinations. Result: users open and close the same folders repeatedly to scan what's available, and miss codes in `Other` because it's opaque.

## Goal

One continuous, scannable list of diagnosis codes. No folders to expand. NTA/SLP become inline badges on the rows they apply to, not separate sections. Approved and Speculative remain as collapsible buckets (approved because they're "done"; speculative because they're low-signal).

## Design

### Sidebar layout (top → bottom)

```
┌────────────────────────────────┐
│ ≡ Back                         │
├────────────────────────────────┤
│ ✓ Approved (3)              ▸  │  ← collapsible, collapsed by default
├────────────────────────────────┤
│ ★ Top picks                    │  ← section label only, no chevron
│   #1  I69  Sequelae…    [NTA]  │
│   #2  G30  Alzheimer's         │
│   #3  R13  Dysphagia    [SLP]  │
│   #4  N18  Chronic kidney [NTA]│
│   #5  R47  Speech dist. [SLP]  │
├────────────────────────────────┤
│   Other suggestions            │  ← section label only
│       J44  COPD         [NTA]  │
│       E11  Type 2 diab.        │
│       …                        │
├────────────────────────────────┤
│ ⚠ Speculative (2)           ▸  │  ← collapsible, collapsed by default
└────────────────────────────────┘
```

### Section rules

| Section | Collapsible? | Default | Shows when |
|---|---|---|---|
| Approved | yes | collapsed | ≥1 approved code exists |
| Top picks | no (always expanded) | visible | always; shows empty-state row if ranking not ready |
| Other suggestions | no (always expanded) | visible | ≥1 non-top, non-speculative code exists |
| Speculative | yes | collapsed | ≥1 speculative code exists |

Only `Approved` and `Speculative` have chevrons. `Top picks` and `Other suggestions` are just labels — the rows under them are always present. If `Other suggestions` has 0 codes, hide the label entirely.

### Row anatomy

```
 #1  I69  Sequelae of cerebrovas…   [NTA] [SLP]
 └─┬─┘ └┬┘ └──────────┬──────────┘  └─────┬─────┘
 rank  code  description             badges
```

- **Rank chip** (`#1`…`#5`) — only on rows inside `Top picks`. Cream background, same as today.
- **Code** — purple, bold, monospace. Unchanged.
- **Description** — single line, ellipsis on overflow.
- **Badges** — small outlined pills; purple for `NTA`, teal for `SLP`. A row can have 0, 1, or 2 badges. Derived from the annotation's `category` field; if a code has both NTA and SLP evidence across its variants, show both.
- **No inline chevron.** Variants (e.g. `I69.351` vs `I69.352`) are not expanded in the left list. Selecting a base code surfaces its variants on the right panel, via the existing `I69 ▼` picker.

### Selection & interaction

- Clicking a row selects that base code; right panel updates.
- Selected row: left accent bar + tinted background (same visual affordance as today).
- No hover-expand, no nested disclosure. One click = select.
- Keyboard: arrow up/down cycles rows across sections (approved/speculative are skipped when collapsed).

### Empty states

- **Approved = 0** → section hidden entirely.
- **Speculative = 0** → section hidden entirely.
- **Top picks = 0** → show a single muted "No suggestions yet" row so the label doesn't sit alone.
- **Other suggestions = 0** → section label hidden.
- **Everything = 0** → existing empty state (unchanged).

## Data model

No backend changes. The annotation `category` field (`nta` | `slp` | `other` | `speculative`) is the source of both badge rendering and bucket assignment.

Client-side derivation:

1. Start with flat annotations list.
2. Group by `baseCode` (first 3 chars of ICD-10).
3. For each base code:
   - `isApproved` → goes to **Approved** bucket.
   - else if any variant `category === 'speculative'` and none are `nta`/`slp`/`other` → **Speculative**.
   - else if `rank` ≤ 5 → **Top picks**.
   - else → **Other suggestions**.
4. Compute `badges`: `{ nta: variants.some(v => v.category === 'nta'), slp: variants.some(v => v.category === 'slp') }`.

The existing `_groupAnnotations` method produces most of this; the rewrite is in how the buckets are assembled and rendered, not in the grouping itself.

## Implementation approach

Per the project's hybrid philosophy (`CLAUDE.md`): this rewrite changes the structure of `_groupAnnotations`, `_renderCategory`, and `_renderCategoryContent` — well over 30% of `icd10-sidebar.js`. That's the trigger to migrate the sidebar to Preact.

**New module:** `content/modules/icd10-sidebar/Sidebar.jsx`

**Component tree:**

```
<Sidebar annotations approvedCodes selectedBaseCode onSelect>
  <ApprovedSection codes />            // collapsible
  <TopPicksSection codes />            // flat
  <OtherSection codes />               // flat
  <SpeculativeSection codes />         // collapsible
    └─ <CodeRow code description rank badges selected onClick />
```

**Integration:** `content/icd10-viewer/icd10-viewer.js` keeps owning the page shell and right-panel. It stops instantiating the vanilla `ICD10Sidebar` class and instead mounts the Preact `<Sidebar>` into the left slot via `render()`. Same inputs (annotations, approved codes), same outputs (selection callback). Right panel and PDF viewer untouched.

**CSS:** new file `content/css/icd10-sidebar.css` with `icd10-sb__` BEM prefix. Do not touch the existing `icd10-sidebar__*` classes — the old sidebar file stays in place until the new one is wired in, then deletes in one commit.

## Non-goals

- No changes to the right panel (evidence view, variant picker, PDF viewer).
- No changes to the ICD-10 API or backend data contract.
- No changes to approval workflow.
- No search/filter input in the sidebar (can be added later if the flat list gets unwieldy).
- No drag-to-reorder or manual ranking edits.

## Open questions

- Badge color for NTA vs SLP — current design proposes purple/teal outlines. Final color picks should match the app's existing badge palette; verify against `content/css/` tokens during implementation.
- Whether `Top picks` should stay exactly 5 or flex 3–7 based on signal strength. Defer — today's behavior (top 5 by rank) carries over unchanged.
