# Planner Data Hygiene & Dedup — Backend Asks (v3)

**Date:** 2026-04-22
**Owner:** Andrew (product) + backend team
**Status:** Ready for backend implementation
**Follow-up to:** `2026-04-21-planner-backend-spec.md` + `2026-04-21-planner-summary-v2-asks.md`

---

## Why this exists

First production-data audit of the planner surfaced one patient (Jasso, Pedro) generating **199 of 204 "overdue" focus items**, with interviews dating back **3,600+ days** (nearly a decade). Separately, every MDS Coding row returned `sectionsCompleted = 0`, and the frontend has no assessment-type context on rosters (so an interview row can't say "GG · 5-Day PPS" — just "GG").

None of this is a UI bug. Six fixes, all additive or scope-narrowing on existing endpoints.

Ordered by coordinator impact:

1. 🔴 **Time-window cap on `interviewsOwed`** — 30-day lookback
2. 🔴 **Interview dedup for combined assessments** — same ARD ⇒ one row
3. 🟡 **Assessment description on `mdsCoding.patients[]`**
4. 🟡 **Assessment description on `interviewsOwed.patients[]`**
5. 🟡 **Verify `sectionsCompleted` calculation**
6. 🟢 **Time-window cap on `/week-events`** — same 30-day rule

---

## Ask 1 — 30-day time-window cap on `interviewsOwed`

**Priority:** 🔴 Blocker
**Impact:** Without this, zombie MDSs from years ago flood the Today's Focus list. One patient generates 199 focus items. UI is unusable at scale.

### Definition

Only include interviews owed for MDSs whose `ardDate` is within the **last 30 days** (inclusive) from today.

```sql
WHERE mds_assessments.ardDate >= (today - 30 days)
```

Anything older = abandoned MDS. Either the facility never locked it or it was effectively dropped from the workflow. We don't want to resurface these — coordinators can't fix work from 2016.

### Why 30 days (not 60 or 90)

Confirmed with product: active MDS coding windows are ARD → ARD+14. Stragglers legitimately get locked up to ~30 days post-ARD. Anything beyond that is definitionally stale data.

---

## Ask 2 — Dedup interviews for combined assessments

**Priority:** 🔴 Blocker
**Impact:** Patients with combined assessments (Admission + 5-Day PPS, 5-Day + OBRA Quarterly, etc.) currently emit **duplicate interview rows** — one per MDS — even though the same BIMS/PHQ/GG collection satisfies both. Anna sees "BIMS owed · patient X" twice and doesn't know which to act on. This compounds with Ask 1 to produce the 199-row disaster.

### Dedup rule

> **Group key: `(patientId, dueType, ardDate)`**
>
> Two MDSs with the **same ARD date** are treated as the same combined assessment. Emit **one** interview row that covers both.

If ARD dates differ → they're genuinely different assessments → emit separate rows (current behavior).

### Implementation sketch

```ts
// Group owed interviews by (patientId, dueType, ardDate) before emitting roster.
// Pick a deterministic primary assessmentId for deep-linking (earliest by id, or
// earliest by createdAt — either works, just be consistent).
const grouped = new Map<string, InterviewOwed>();
for (const row of rawOwedInterviews) {
  const key = `${row.patientId}|${row.dueType}|${row.ardDate}`;
  if (!grouped.has(key)) {
    grouped.set(key, row);
  }
  // Second hit at same key = combined assessment; skip (primary kept).
}
```

### Optional (nice-to-have, not required)

Add `assessmentIds: string[]` to each roster entry listing all MDSs in the combined group. Lets frontend show "5-Day + Quarterly" as the label if both are present. Skip if it complicates the query — not v1 essential.

---

## Ask 3 — Assessment description on `mdsCoding.patients[]`

**Priority:** 🟡
**Impact:** Coordinator looks at MDS Coding row "Stamper, Bill · Apr 18 · 12/18 · 12d left" and can't tell if it's a 5-Day (PPS billing impact, high priority) vs a Quarterly (routine OBRA) without clicking in. Would save meaningful clicks.

### Definition

Add `description: string` to each entry in `summary.mdsCoding.patients[]`.

```ts
summary.mdsCoding.patients[i]: {
  // ... existing fields ...
  description: string;  // e.g., "Admission / 5-Day", "Quarterly", "Annual", "Significant Change"
}
```

Source: `mds_assessments.description` — same field already emitted on `/week-events` `mds_ard` event meta. Pure passthrough.

---

## Ask 4 — Assessment description on `interviewsOwed.patients[]`

**Priority:** 🟡
**Impact:** Interview row says "Jasso, Pedro · GG" — but Anna needs to know *which* assessment it's for. "GG · 5-Day" is a billing-impact interview; "GG · Quarterly" is routine. She prioritizes differently.

### Definition

Add `mdsDescription: string` to each entry in `summary.interviewsOwed.patients[]`.

```ts
summary.interviewsOwed.patients[i]: {
  // ... existing fields ...
  mdsDescription: string;  // from the parent (or primary, if deduped) MDS
}
```

After Ask 2 dedup: this is the description of the primary MDS in the combined group. If `assessmentIds[]` ships (Ask 2 optional), frontend could join descriptions, but `mdsDescription: string` is sufficient for v1.

---

## Ask 5 — Verify `sectionsCompleted` calculation

**Priority:** 🟡 (could be 🔴 if confirmed bug)
**Impact:** Live facility query returned:
- Gomez, Ernestina · 0/17
- Roy, Aime · 0/17
- Mock, Jeremy · 0/16
- London, Shirley · 0/1

Either (a) every MDS in the facility is genuinely untouched (unlikely at 4-for-4 across patients mid-window), or (b) the backend's section-counting logic is broken.

### Investigate

- Pull one of the above MDSs directly (`SELECT answers FROM mds_assessments WHERE id = ...`)
- Inspect `answers.sectionStatuses` structure
- Confirm the count logic matches the shape (maybe the key changed, or the signed/completed filter is too strict)
- Special attention to **London, Shirley · 0/1** — a `sectionsTotal` of `1` suggests the query is returning just one section entry rather than all ~18.

If confirmed broken: fix and snapshot-test so this doesn't regress.

---

## Ask 6 — Time-window cap on `/week-events`

**Priority:** 🟢
**Impact:** Same zombie-data hygiene, applied to the calendar. In the screenshot, LONDON SHIRLEY had two separate `mds_ard` events in the same week — likely two old MDSs still showing up as active.

### Definition

Apply the same 30-day lookback as Ask 1:

```sql
-- For all event types derived from MDS data (mds_ard, mds_due, next_mds_ard, cp_completion_due):
WHERE mds_assessments.ardDate >= (today - 30 days)
```

Census events (admit, discharge, readmit), care plan events, query events, cert events — these already have their own date gating per the original spec, so leave them alone.

---

## Summary — what the frontend will do once shipped

| Field | After backend | Frontend use |
|---|---|---|
| `mdsCoding.patients[].description` | e.g. "Admission / 5-Day" | Render as secondary label in MDS Coding row, sub-line or chip |
| `interviewsOwed.patients[].mdsDescription` | e.g. "5-Day PPS" | "GG interview · 5-Day PPS" on row and in Focus |
| 30-day cap (Asks 1+6) | Zombie entries disappear | Focus list drops from 200+ to realistic number |
| Interview dedup (Ask 2) | Combined-assessment duplicates removed | One row per real interview-collection, not per MDS |
| `sectionsCompleted` fix (Ask 5) | Real values | Paced progress bar finally tells the truth |

---

## Verification

```bash
# Ask 1+2 together: interview count should drop from ~200 to single-digits for a typical facility
curl -s "https://$HOST/api/extension/planner/summary?facilityName=$FAC&orgSlug=$ORG" \
  -H "Authorization: Bearer $EXT_TOKEN" | jq '.summary.interviewsOwed.count'

# Ask 3: description on MDS Coding
curl -s "$URL" -H "$AUTH" | jq '.summary.mdsCoding.patients[0].description'
# expect: "Quarterly" / "Admission / 5-Day" / etc.

# Ask 4: mdsDescription on interviews
curl -s "$URL" -H "$AUTH" | jq '.summary.interviewsOwed.patients[0].mdsDescription'

# Ask 5: sanity-check a facility's coding progress
curl -s "$URL" -H "$AUTH" \
  | jq '.summary.mdsCoding.patients | map({ name: .patientName, pct: (.sectionsCompleted / .sectionsTotal) })'
# expect: some non-zero values

# Ask 6: week-events count should similarly drop on facilities with stale data
curl -s "https://$HOST/api/extension/planner/week-events?facilityName=$FAC&orgSlug=$ORG&startDate=2026-04-20&endDate=2026-04-26" \
  -H "$AUTH" | jq '[.events[] | select(.type == "mds_ard")] | length'
```

---

## Out of scope (frontend handles)

- Focus mode button placement (moving out of Today's Focus header)
- Row expansion UI for detail
- Rendering `description` in calendar event labels (`"5-Day ARD"` instead of `"mds ard"`)
- Visual weight on calendar for MDS ARD + admit events
- Per-patient stacking guard in Today's Focus (belt-and-suspenders even after Ask 1)

These are all pure UI; they don't need backend changes.

---

## Care plan review URL — not an ask, just a note

Frontend will point CP review click to the **care plan detail page** (`careplandetail_rev.jsp?ESOLcareplanid={pccCarePlanId}&ESOLclientid={patientExternalId}`). Coordinator lands on the care plan and can navigate to the review from there. Already have `pccCarePlanId` on the summary roster as of v2-asks — no additional backend work needed for this.

---

## Not in scope for this round

- Interview status beyond `not_open | in_progress` — leave current contract
- Moving any logic from `/week-events` to `/summary` or vice versa — current split is fine
- New endpoints — still zero new endpoints
- Schema migrations — still zero
