# Planner Summary v2 — Backend Asks

**Date:** 2026-04-21
**Owner:** Andrew (product) + backend team
**Status:** Ready for backend implementation
**Follow-up to:** `2026-04-21-planner-backend-spec.md` + `.context/mds-planner-frontend-handoff.md`

---

## Why this exists

Frontend landed the planner redesign around "Today's Focus" (cross-queue hot list) + row-level urgency + deep-link-to-action. In the audit, four gaps surfaced that block the planner from working fully on real data. All are additive changes to `GET /api/extension/planner/summary`. No new endpoints. No new tables. No migrations.

Ordered by impact:

1. 🔴 **Blocker** — `summary.mdsCoding` doesn't exist yet; the MDS Coding queue renders empty
2. 🟡 **Degrades deep-linking** — `patientExternalId` missing on summary roster entries; Focus click falls back to scroll-to-queue
3. 🟡 **Degrades CP review deep-linking** — `pccReviewId`/`pccCarePlanId` on summary CP review rows (already on week-events)
4. 🟢 **Nice-to-have** — `certs.overdueList[]` with patient names; Focus currently shows a nameless "1 overdue" rollup

---

## Ask 1 — Add `summary.mdsCoding`

**Priority:** 🔴 Blocker
**Impact:** Without this, the MDS Coding queue (the most-visited surface in the Planner) renders "No MDS in the coding window" even when assessments are actively being coded.

### Definition

Emit a per-patient roster of in-progress MDSs inside their coding window (ARD ≤ today ≤ ARD + 14). This is the same population that emits `mds_ard` and `mds_due` events on `/week-events`, just exposed as a summary roster.

### Shape

```ts
summary.mdsCoding: {
  count: number;
  patients: Array<{
    patientId: string;
    patientExternalId: string;   // for PCC deep-link
    patientName: string;          // "Last, First"
    status: string;               // e.g. 'In Progress'
    ardDate: string;              // YYYY-MM-DD
    sectionsCompleted: number;    // count of sections with signed/completed answers
    sectionsTotal: number;        // typically 18 for OBRA
    daysToCompleteBy: number;     // ARD + 14 - today; negative = past lock
    pccAssessmentId: string;      // for deep-link to the MDS section list
  }>;
}
```

### Source logic

Scope: `mds_assessments` rows where
- `status` ∈ {'In Progress', 'Open', 'Started', 'Not Started'} (i.e. NOT locked/finalized)
- `ardDate` ≤ today
- `ardDate + 14` ≥ today (still in coding window; `daysToCompleteBy >= -X` if we want to keep recently-lapsed ones around for visibility — UI filters overdues in rather than out)

Per patient, we want the **oldest-ARD in-progress MDS** (the one with the tightest lock deadline). If a patient somehow has two open MDSs, pick the one with the earliest ARD.

Derivations:
- `sectionsCompleted` / `sectionsTotal`: count from `answers.sectionStatuses` (already consumed in `mds-schedule.service.ts`).
- `daysToCompleteBy`: `(ardDate + 14 days) - today` in whole days.
- `pccAssessmentId` = `externalAssessmentId` (same field already emitted on week-events).

**Sort:** `daysToCompleteBy` ascending (most-overdue first, then most-at-risk).

### Why not derive it client-side from `/week-events`?

We already emit `mds_ard` events. But those events don't carry `sectionsCompleted` / `sectionsTotal` (they'd need to — and the week-events response would bloat). A dedicated summary roster is the right home for the pace data.

---

## Ask 2 — Add `patientExternalId` to summary roster entries

**Priority:** 🟡 Degrades deep-linking
**Impact:** Focus rows click through to PCC when we have `patientExternalId`. Without it, click falls back to scroll-to-queue. Everything still works, but coordinator pays two clicks instead of one.

### Rosters affected

Add `patientExternalId: string` to every entry in:

- `summary.carePlansToOpen.patients[]`
- `summary.carePlansToReview.patients[]`
- `summary.interviewsOwed.patients[]`
- `summary.mdsCoding.patients[]` (see Ask 1)
- `summary.skilledMCR.patients[]` (for future click-to-patient; not currently used)
- `summary.skilledManagedCare.patients[]` (same)

This is a pure passthrough — the data is already on the `patients` table row that each query joins.

---

## Ask 3 — Add PCC link IDs to `carePlansToReview.patients`

**Priority:** 🟡 Degrades deep-linking
**Impact:** When the coordinator clicks a CP Review item in Today's Focus, we want to deep-link to either the existing review (if in progress) or the new-review page. Today's Focus can't do that without these IDs.

### Fields to add

```ts
summary.carePlansToReview.patients[i]: {
  // ... existing fields ...
  pccReviewId: string | null;  // null if no review entry exists yet (use -1 fallback in URL)
  pccCarePlanId: string;       // for deep-link to the CP detail page
}
```

These are the same IDs already emitted on `cp_review_*` events in `/week-events` — they come from `care_plans.externalCarePlanId` and `review_history[].externalReviewId`.

---

## Ask 4 — Add `certs.overdueList[]` with patient names

**Priority:** 🟢 Nice-to-have
**Impact:** Today's Focus currently shows a rollup row ("Certs to send · 1 overdue") without a patient name. Feels slightly anomalous next to patient-named rows above. With this, each overdue cert becomes its own Focus row.

### Shape

```ts
summary.certs: {
  // ... existing fields ...
  overdueList: Array<{
    certId: string;
    patientId: string;
    patientExternalId: string;
    patientName: string;
    type: 'initial' | 'day_14_recert' | 'day_30_recert';
    bucket: 'needs_to_send' | 'awaiting_signature';
    dueDate: string;  // YYYY-MM-DD
    daysOverdue: number;
  }>;
}
```

Scope: certs where `dueDate < today` AND `status` ∉ {signed, skipped}. Same population that emits `cert_overdue` events on `/week-events`, just without the window-clamping.

Could also ship this as a separate `summary.certs.upcomingList[]` for approaching certs, but not needed for v1 — the existing `needsToSend.upcomingCount` is enough for the rollup chip.

---

## Summary — what the frontend will do once shipped

| Today on demo data | After backend | Delta |
|---|---|---|
| MDS Coding table populated, `1 overdue · 3 open` header, paced progress bars | Same — but with real data | MDS Coding queue works |
| Focus row "Saffle, Elinor · MDS coding · 2d past lock" | Same — clicks deep-link to the MDS section in PCC | One-click-to-action |
| Focus row "Clasper, Ronald · Care plan to open · 52h since admit" | Same — click deep-links to new-CP-review page | Same |
| Focus row "Hagerich · Care plan review · 2d past due" | Same — click deep-links to existing review | Same |
| Focus row "Certs to send · 1 overdue" (no patient name) | "Wilson, Betty · Initial cert · 3d overdue" (patient-named) | Ask 4 only |

---

## Testing

A sanity check after each ask ships:

```bash
curl -s "https://$HOST/api/extension/planner/summary?facilityName=$FAC&orgSlug=$ORG" \
  -H "Authorization: Bearer $EXT_TOKEN" | jq '.summary | keys'
```

After Ask 1: expect `mdsCoding` in the keys output.
After Ask 2: `jq '.summary.carePlansToOpen.patients[0]'` includes `patientExternalId`.
After Ask 3: `jq '.summary.carePlansToReview.patients[0]'` includes `pccReviewId` and `pccCarePlanId`.
After Ask 4: `jq '.summary.certs.overdueList | length'` > 0 (for a facility with any overdue cert).

---

## Not in scope

- Sort/pagination on `/summary` rosters — if any roster starts getting huge (>50 entries), we can cap to top-50 by urgency and the UI will continue to handle that (frontend already `.slice(0, 6)` per queue card). Skip for now.
- Real-time / websocket push. Event-driven refetch on `super:query-sent` / `super:cert-signed` / `super:care-plan-updated` is sufficient.
- Merging `interviewsOwed.patients` for same-patient-different-type. The UI correctly renders one row per type.
