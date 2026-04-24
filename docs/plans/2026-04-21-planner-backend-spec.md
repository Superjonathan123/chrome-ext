# MDS Planner — Backend Spec

**Date:** 2026-04-21
**Owner:** Andrew (product) + backend team
**Status:** Ready for backend implementation

---

## Context

The Chrome extension's **MDS Command Center** is pivoting from "better assessment list" to a **digital replica of an MDS coordinator's paper planner**. The pivot is based on first-hand research with Anna, an MDS coordinator, who brought her paper planner to the interview on 2026-04-21. Her planner has a weekly calendar + ~5 parallel queue tables + a to-do scratch. She thinks in *"what type of work do I need to do this week"* (queues), not *"where does each patient sit in the lifecycle"* (Kanban).

Frontend design is locked in via the mock at `chrome-ext/demo/mds-planner-mock.html`. The UI has two modes:

- **Compact (modal):** week calendar + to-do. This is the default tab in the Command Center modal.
- **Fullscreen:** adds 4 queue cards + admin strip.

This spec defines the two backend endpoints + the one optional schema addition needed to drive that UI.

**Net ask:** two new `GET` endpoints under `/api/extension/planner/`. Zero new tables. Zero required schema migrations. One optional column (`signed_at`) that unlocks a minority of events.

---

## What already exists (reuse, don't rebuild)

- `core/services/mds-schedule.service.ts` — **already computes next ARD per patient** using the CMS RAI 92-day rule. Uses `FINALIZED_STATUSES = {completed, accepted, modified, export ready}`. Use this directly; don't re-derive next-ARD.
- `core/schema/mds-assessments.sql.ts` — `ardDate`, `description`, `status`, `answers` jsonb (with `sectionStatuses` + per-answer `isLocked`), `updatedAt`.
- `core/schema/patient-census.sql.ts` — `effectiveDate`, `actionCode` (AA/DD/TO/TI/RL/PC/RM/L), `primaryPayer`, `status`, `location`.
- `core/schema/care-plans.sql.ts` — `dateInitiated`, `nextReviewDate`, `reviewHistory` jsonb (`{startDate, targetCompletionDate, completedDate, createdBy}` per entry).
- `core/schema/uda-assessments.sql.ts` — `lockedDate` for BIMS/PHQ/GG/Pain.
- Existing extension auth pattern: `validateExtensionRequest(request)` + `OrganizationService.getBySlug` + `LocationService.getByPccFacilityName` + `UserLocationService.userHasAccessToLocation`. Copy from `web/app/api/extension/mds/schedule/route.ts`.

---

## Endpoint 1 — `GET /api/extension/planner/week-events`

Drives the calendar (week view, month view, and click-into-day view).

### Request

```
GET /api/extension/planner/week-events
  ?facilityName={pcc_facility_name}
  &orgSlug={org_slug}
  &startDate=YYYY-MM-DD
  &endDate=YYYY-MM-DD
```

- `startDate`, `endDate`: inclusive range (ISO date). Max span 42 days (6 weeks / month grid).
- Auth: Bearer token, same pattern as other `/api/extension/*` routes.

### Response

```ts
{
  success: true,
  events: Array<{
    date: string;           // 'YYYY-MM-DD'
    type: EventType;        // see table below
    patientId: string;      // internal UUID
    patientExternalId: string; // PCC external id
    patientName: string;    // display name, "Last, First"
    urgency: 'ok' | 'approaching' | 'urgent' | 'overdue';
    meta: Record<string, any>; // type-specific details (below)
  }>;
  meta: {
    facilityName: string;
    startDate: string;
    endDate: string;
    generatedAt: string;    // ISO datetime
  }
}
```

### Event types

All derivable from existing tables. No schema change required for any event marked ✅.

| `type` | Date source | SQL | Meta payload | Status |
|---|---|---|---|---|
| `admit` | `patient_census_records.effectiveDate` | `action_code='AA'` in range | `{ payer, location }` | ✅ |
| `discharge` | `effectiveDate` | `action_code IN ('DD','TO')` | `{ destination?, reason? }` | ✅ |
| `readmit` | `effectiveDate` | `action_code IN ('TI','RL')` | `{ priorDischargeDate? }` | ✅ |
| `mds_ard` | `mds_assessments.ardDate` | status in-progress & ardDate in range | `{ assessmentId, description, status, ardDate }` | ✅ |
| `mds_due` | `ardDate + 14` | same rows as mds_ard | `{ assessmentId, ardDate, status }` | ✅ |
| `next_mds_ard` | `MdsScheduleService` output | for each patient where current MDS status is finalized | `{ expectedType, ardDate, source: 'schedule-service' }` | ✅ |
| `cp_open_needed` | `effectiveDate` of the admit | `action_code='AA'` LEFT JOIN `care_plans` WHERE `dateInitiated IS NULL` (urgency escalates at +1d per 24hr rule) | `{ admitDate, hoursSinceAdmit }` | ✅ |
| `cp_review_expected` | `next_ard - 2 days` | for each next_mds_ard, subtract 2 | `{ relatedArdDate, assessmentDescription }` | ✅ |
| `cp_review_in_progress` | `reviewHistory[].startDate` | jsonb entries with `startDate` and no `completedDate` | `{ startDate, targetCompletionDate }` | ✅ |
| `cp_review_due` | `care_plans.nextReviewDate` | nextReviewDate in range | `{ nextReviewDate }` | ✅ |
| `cp_completion_due` | MDS signoff + 7 days | requires `signed_at` (see optional column below) | `{ signedAt, assessmentId }` | ⚠️ blocked by gap |
| `query_due` | `queries.sentAt` + TTL | existing queries table | `{ queryId, itemCode }` | ✅ |
| `cert_due` | cert schedule | existing certs tables | `{ certId, type }` | ✅ |
| `cert_overdue` | cert schedule < today, unsigned | existing certs tables | `{ certId, daysOverdue }` | ✅ |

### Urgency rule

Computed server-side per event using event-specific thresholds:

- `cp_open_needed`: `ok` at 0h, `urgent` at 24h, `overdue` at 48h.
- `cp_review_due`, `cp_review_expected`: `urgent` within 2 days, `overdue` past due.
- `mds_due`: `urgent` within 3 days of (ARD+14), `overdue` past.
- `cert_overdue`: always `overdue` (name implies it).
- Everything else: `ok` by default.

### Visibility rule for `next_mds_ard`

Mirror PCC's behavior — only emit `next_mds_ard` events for a patient whose **current** MDS has already reached a finalized status (`completed`, `accepted`, `modified`, `export ready`). While an MDS is still in progress, don't plot the *next* one. `MdsScheduleService` handles this logic; respect its output.

---

## Endpoint 2 — `GET /api/extension/planner/summary`

Drives the queue cards in fullscreen mode.

### Request

```
GET /api/extension/planner/summary
  ?facilityName=...
  &orgSlug=...
```

### Response

```ts
{
  success: true,
  summary: {
    carePlansToOpen: {
      count: number;
      patients: Array<{ patientId, patientName, admitDate, hoursSinceAdmit }>;
    };
    carePlansToReview: {
      count: number;
      patients: Array<{ patientId, patientName, expectedDate, state: 'expected' | 'in_progress' | 'overdue' }>;
    };
    queriesOpen: {
      count: number;
      pending: number;
      sent: number;
    };
    certsDue: {
      count: number;
      overdueCount: number;
    };
    interviewsOwed: {
      count: number;
      byType: { bims: number; phq: number; gg: number; pain: number };
    };
    skilledMCR: {
      count: number;
      patients: Array<{ patientId, patientName }>;
    };
    skilledManagedCare: {
      count: number;
      patients: Array<{ patientId, patientName }>;
    };
  };
  meta: { generatedAt: string; }
}
```

### Source SQL notes

- **carePlansToOpen:** active census `AA` admits (latest census row per patient = 'AA') LEFT JOIN `care_plans` where `dateInitiated IS NULL`.
- **carePlansToReview:** union of (a) `reviewHistory` entries with `startDate` and no `completedDate`, (b) `next_mds_ard - 2` in the next 14 days.
- **queriesOpen:** existing queries table, status in (pending, sent).
- **interviewsOwed:** across all in-progress MDS assessments, count patients where BIMS / PHQ / GG / Pain is missing or out of 7-day lookback. Use `udaSummary` logic the extension already computes — move it server-side.
- **skilledMCR / skilledManagedCare:** active census rows where `primary_payer` matches Medicare / Managed Care respectively.

---

## Optional schema addition — `signed_at` on `mds_assessments`

**Recommendation: skip for MVP.** Ship without it, use pessimistic `ARD + 21` proxy for `cp_completion_due`.

**If you do add it:**

```sql
ALTER TABLE mds_assessments
  ADD COLUMN signed_at TIMESTAMPTZ;
```

Populate on any upsert where `status` transitions to `'Accepted'` (the text status PCC sets when the MDS is locked). Backfill: leave `NULL` for historical rows, or one-shot backfill `signed_at = updated_at` for rows currently in `Accepted`.

**Ancillary investigation first (15 min):** check whether PCC's MDS API response already includes a signoff or lock timestamp we're silently discarding in the sync. If yes, capture it in the ingest and no transition logic is needed.

**What this unlocks:** the `cp_completion_due` event (= `signed_at + 7`), which Anna currently tracks on her paper planner as "post-MDS care plan work due." Not in the critical-path MVP feature set.

---

## Cache strategy

Each coordinator hits `week-events` 5-10×/day per facility. For a multi-coordinator facility this is ~50 hits/day per facility — cheap for raw queries.

**Recommendation: skip cache for MVP.** If the query ends up slow (>300ms p95) OR we scale past ~10 facilities, add:

- Redis cache keyed by `{facilityId}:{startDate}:{endDate}`, TTL 5 minutes.
- Invalidate on write to `mds_assessments`, `patient_census_records`, `care_plans`, `queries`, `certs` for that facility.

---

## The ARD−2 care plan review convention

**Origin:** Anna's own quote (2026-04-21): *"Next care plan review is within 2 days of next MDS due."*

**Visual confirmation:** her PCC screenshot — Next Review Date `6/15/2026`, Next Quarterly ARD `6/17/2026`, exactly 2 days apart.

**What it is:** her personal scheduling heuristic. When she opens a new MDS, she also opens a PCC "New Care Plan Review" and types the Target Completion Date ≈ next ARD − 2 days. PCC does *not* auto-populate these dates (it actually suggests nonsensical ones — one screenshot showed a target date in the past).

**What to do with it:** encode `cp_review_expected = next_ard - 2 days` as a derived event in the week-events endpoint. This lets us show her an "expected review" marker on the day she typically opens one, regardless of whether she's created it in PCC yet. When her `reviewHistory` picks up an entry for that patient, the event flips state from `expected` → `in_progress` → `completed`.

---

## Implementation checklist

- [ ] New route file: `web/app/api/extension/planner/week-events/route.ts`
- [ ] New route file: `web/app/api/extension/planner/summary/route.ts`
- [ ] New service: `core/services/planner.service.ts` — one method per event type, returning typed event objects. Keeps route thin.
- [ ] Use existing auth helpers (`validateExtensionRequest`, `OrganizationService.getBySlug`, `LocationService.getByPccFacilityName`, `UserLocationService.userHasAccessToLocation`).
- [ ] Call `MdsScheduleService.getSchedule` for `next_mds_ard` — don't re-derive.
- [ ] Cover with a unit test per event type (mock the DB, assert event shape + urgency classification).
- [ ] Integration test: seed one admit + one care plan + one open MDS + one sent query, hit the endpoint for this week, assert the 4 event types appear.

---

## Frontend decisions pending (don't block backend)

These are UI-side decisions the frontend team needs to lock before shipping the full Command Center pivot. Not blocking backend work.

1. **Default tab:** Planner first (landing) vs. Assessments first?
2. **To-do persistence:** `chrome.storage.sync` (ship fast, local-per-device) vs. new backend table (cross-device + audit trail).
3. **Click-into-day:** confirmed — Week view click on a day reveals Day view on that date. Day view shows all events + prev/next nav.
4. **Overflow:** Week cells show top 4 events + `+N more` link that deep-links to Day view.

---

## Explicit non-goals (do not build)

- Sig-change auto-detection (surface only existing sig-change assessments if they're in the table).
- Managed Care authorization tracking (no backend data; out of scope).
- Admin compliance reports (LTCMI / iQIES / QRS / QIPP / D/C PU) — different systems, not Anna's main pain.
- ADT real-time feed — she already gets it from the morning meeting.
- Any new tables or new ingest pipelines for MVP.

---

## References

- Interview research: `chrome-ext/.claude/memory/project_anna_coordinator_interview.md` (Anna, 2026-04-21).
- Design pivot rationale: `chrome-ext/.claude/memory/project_command_center_planner_pivot.md`.
- Backend readiness audit: `chrome-ext/.claude/memory/project_planner_backend_readiness.md`.
- Mock / shared design reference: `chrome-ext/demo/mds-planner-mock.html`.
- Existing schedule service: `superltc/core/services/mds-schedule.service.ts`.
- Existing extension auth pattern: `superltc/web/app/api/extension/mds/schedule/route.ts`.
