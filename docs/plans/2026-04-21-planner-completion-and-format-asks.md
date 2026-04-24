# Planner Completion Visibility & Description Format — Backend Asks (v4)

**Date:** 2026-04-21
**Owner:** Andrew (product) + backend team
**Status:** Ready for backend implementation
**Follow-up to:** `2026-04-22-planner-data-hygiene-asks.md` (v3, shipped PR 325)

---

## Why this exists

First real-data review after v3 shipped surfaced two data-quality issues that block forward progress on the UI. Neither is a UI bug — both are backend contract issues that need to be fixed before the frontend can decide what to render.

Ordered by impact:

1. 🔴 **Description format is rendering backend internals** (`"Annual - None PPS /"`)
2. 🔴 **Every queue hides completed items entirely** — coordinator loses proof-of-work
3. 🟡 **Count semantics ambiguous** — `count` field mixes "distinct patients" and "rows"

---

## Ask 1 — Clean up `description` / `mdsDescription` format

**Priority:** 🔴 Blocker
**Impact:** Every MDS row (Coding + Interviews + Calendar) renders raw concatenator output with `None` placeholders and trailing separators. Three real examples from today's prod payload:

- `"Annual - None PPS /"` — Annual OBRA, no PPS
- `"Medicare - 5 Day /"` — 5-Day PPS standalone (OBRA column shows the census type)
- `"Entry /"` — Entry tracking record, nothing else
- `"Admission - None PPS /"` — Admission OBRA, no PPS

The pattern `<obraReason> - <ppsReason> /<optional third>` is clearly a server-side join over a 3-slot array where empty slots are filled with the literal string `"None PPS"` / `"None OBRA"` instead of being omitted, and the trailing `/` is the separator with nothing after it.

### Desired output

Return a clean, display-ready string. Backend should own the formatting; frontend just renders it.

| Input (today) | Output (requested) |
|---|---|
| `"Annual - None PPS /"` | `"Annual"` |
| `"Quarterly - None PPS /"` | `"Quarterly"` |
| `"Admission - None PPS /"` | `"Admission"` |
| `"Medicare - 5 Day /"` | `"5-Day PPS"` |
| `"Entry /"` | `"Entry"` |
| `"Annual - 5 Day /"` *(combined)* | `"Annual + 5-Day PPS"` |
| `"Admission - 5 Day /"` *(combined)* | `"Admission + 5-Day PPS"` |
| `"Significant Change - None PPS /"` | `"Significant Change"` |

### Rules

1. Drop trailing `/` and any trailing whitespace
2. Drop `- None PPS` and `- None OBRA` segments (empty-slot placeholders)
3. If `obraReason == "Medicare"` and a PPS reason is present, drop `"Medicare - "` (census leak — implied by presence of PPS)
4. Join remaining segments with ` + ` (not ` - `) so combined assessments read clearly
5. Normalize `"5 Day"` → `"5-Day PPS"` (the PPS clarifier matters — distinguishes from OBRA)

### Alternative (if string formatting is painful)

Emit the raw parts and let frontend format:

```ts
description: {
  obraReason: "Annual" | null,
  ppsReason: "5-Day" | null,
  censusType: "Medicare" | "OBRA" | null,  // optional
  // OR just:
  parts: string[]  // non-empty segments only, no "None" placeholders
}
```

Either shape is fine. Frontend strongly prefers the flat string (less branching), but either gets us out of the current artifact hell.

### Affected fields

- `summary.mdsCoding.patients[].description`
- `summary.interviewsOwed.patients[].mdsDescription`
- Event meta on `/week-events` `mds_ard`, `mds_due`, `next_mds_ard`, `cp_completion_due` (whichever carry description)

---

## Ask 2 — Add `completedRecently` slice to every queue

**Priority:** 🔴 Blocker for "is Anna going to trust this tool"
**Impact:** Right now, the moment Anna locks an MDS, finishes an interview, or signs a cert, the row disappears from her queue. There's no visible confirmation that the work landed. She described wanting to "see that things are green" — proof-of-work matters psychologically (and operationally for handoffs).

### Definition

Every queue gains a sibling `completedRecently` object alongside its existing roster. Default window: **7 days** (matches the planner's week view).

```ts
type CompletedRecently<T> = {
  count: number;
  windowDays: number;       // 7 for v1
  patients: T[];            // same entity shape as the primary roster
};
```

### Per-queue "completed" definition

Each queue has its own definition of "done." Please confirm these match backend state machines:

| Queue | "Completed" means | Timestamp field |
|---|---|---|
| `mdsCoding` | Assessment `isLocked == true` | `lockedAt` |
| `carePlansToOpen` | Admission now has an open care plan | `carePlanOpenedAt` |
| `carePlansToReview` | Review finalized (`review.isComplete` or equivalent) | `reviewCompletedAt` |
| `interviewsOwed` | Interview section locked for the MDS it belongs to | `lockedAt` (per MDS) |
| `queriesOpen` | Query signed by physician | `signedAt` |
| `certs` | Cert signed | `signedAt` |

**Gray zone to resolve**: for MDS Coding, should "all sections green but not yet locked" count as done? Anna's paper planner treats green-but-unlocked as done; the data model's discrete event is the lock. **Recommendation**: use lock for v1 (unambiguous event). If coordinators complain that the "done" count lags behind their experience, revisit.

### Shape examples

```json
"mdsCoding": {
  "count": 6,
  "patients": [/* open rosters, unchanged */],
  "completedRecently": {
    "count": 4,
    "windowDays": 7,
    "patients": [
      {
        "patientId": "...",
        "patientName": "Gomez, Ernestina",
        "description": "Annual",
        "ardDate": "2026-04-09",
        "lockedAt": "2026-04-18T16:32:11Z",
        "pccAssessmentId": "1526728",
        "assessmentId": "rmtkct302h3x"
      }
    ]
  }
}
```

```json
"interviewsOwed": {
  "count": 8,
  "byType": { "bims": 1, "gg": 10, "phq": 0, "pain": 0 },
  "patients": [/* owed, unchanged */],
  "completedRecently": {
    "count": 5,
    "windowDays": 7,
    "patients": [
      {
        "patientId": "...",
        "patientName": "Roy, Aime",
        "dueType": "gg",
        "mdsDescription": "Annual",
        "completedAt": "2026-04-17T14:02:00Z",
        "pccAssessmentId": "1526739",
        "assessmentId": "xxa6hdnq1v5g"
      }
    ]
  }
}
```

```json
"carePlansToReview": {
  "count": 9,
  "patients": [/* open, unchanged */],
  "completedRecently": {
    "count": 3,
    "windowDays": 7,
    "patients": [
      {
        "patientId": "...",
        "patientName": "...",
        "reviewCompletedAt": "2026-04-19T...",
        "pccCarePlanId": "...",
        "pccReviewId": "..."
      }
    ]
  }
}
```

### Count caps

Cap each `completedRecently.patients` array at **20 entries** per queue. If more than 20 completed in the window, return the 20 most-recent (highest `completedAt`). The `count` field carries the true total for display ("12 done this week" even if we only ship 20).

### Same 30-day hygiene rule

Apply the same 30-day ARD cap from v3 Ask 1 to the completed slice — we don't want ancient locked MDSs showing up as "recently completed" just because someone touched them today.

---

## Ask 3 — Clarify `count` semantics

**Priority:** 🟡
**Impact:** Today's `interviewsOwed.count = 8` but the `patients` array has 11 entries. Digging in, `count` appears to be "distinct patients who owe interviews" while `patients` is row-per-interview-type (one patient can have BIMS + GG on the same MDS = 2 rows, same `pccAssessmentId`). This caused a frontend math bug where "open count" was computed as `count - overdueRows` = nonsense.

### Proposed contract

For every queue, `count` is unambiguously **the number of rows in the roster array**. Add a sibling `distinctPatientCount` if that metric is needed separately.

```ts
interviewsOwed: {
  count: number;               // = patients.length
  distinctPatientCount: number; // distinct patientId values
  byType: { ... };
  patients: [ ... ];
}
```

Same rule for `mdsCoding`, `carePlansToReview`, `carePlansToOpen`, `certs`.

If this is a bigger refactor than it looks, just document current behavior in the response schema — the frontend can adjust its header math either way as long as we know which is which.

---

## Summary — what unlocks once shipped

| Ask | Shipped | Frontend gets to |
|---|---|---|
| 1 | Clean description strings | Drop the artifact-cleaning regex workaround; calendar labels read "Entry ARD" not "entry /" |
| 2 | `completedRecently` per queue | Add "✓ 4 done this week" footer to each queue; header count becomes "6 to do · 4 done"; Today's Focus can show "5 done today" closure line |
| 3 | Unambiguous `count` | Correct "X overdue · Y open" header math |

---

## Verification

```bash
# Ask 1: description should be clean
curl -s "$URL" -H "$AUTH" \
  | jq '.summary.mdsCoding.patients | map(.description)'
# expect: ["Annual", "Quarterly", "5-Day PPS", "Entry", "Admission + 5-Day PPS", ...]
# no "None PPS", no trailing "/"

# Ask 2: completedRecently present on every queue
curl -s "$URL" -H "$AUTH" | jq '{
  coding:      .summary.mdsCoding.completedRecently.count,
  cpOpen:      .summary.carePlansToOpen.completedRecently.count,
  cpReview:    .summary.carePlansToReview.completedRecently.count,
  interviews:  .summary.interviewsOwed.completedRecently.count,
  queries:     .summary.queriesOpen.completedRecently.count,
  certs:       .summary.certs.completedRecently.count
}'
# expect: numbers (may be 0, but field must exist)

# Ask 3: count matches array length
curl -s "$URL" -H "$AUTH" | jq '{
  declared: .summary.interviewsOwed.count,
  actual:   (.summary.interviewsOwed.patients | length)
}'
# expect: equal
```

---

## Out of scope for this round

- Any new endpoints (still zero)
- Schema migrations
- Changing `interviewsOwed` dueType contract
- Adding historical completion (beyond 7 days) — if we want a month view later, that's v5

---

## Open questions for backend

1. For MDS Coding completion: lock event (`lockedAt`) or "all sections complete" state? Recommendation: lock.
2. For care plan review completion: what's the discrete event / field that marks a review done?
3. Is `count` vs `distinctPatientCount` worth the contract change, or should frontend just read `patients.length`?

Ping Andrew on Slack with answers before starting — small clarifications now save a round-trip.
