# MDS Command Center Redesign

**Date:** 2026-04-08
**Status:** Design — not yet implemented

---

## Problem Statement

The current MDS Command Center overlay is organized around data categories (Assessments, Queries, Certs, Compliance) rather than around what the MDS coordinator actually needs to do. This creates several problems:

- **Same patient appears multiple times** without context (e.g., Marilyn Roberts shows up 3 times for 3 different assessments, which is confusing)
- **Certs badge scoping bug** — badge shows facility-wide count but content filters to just the current patient when on a patient page
- **Tab overload** — 6 tabs (Overview, Assessments, Queries, Certs, Doc Risks, Compliance) require context-switching to understand one patient's full picture
- **Information without action** — the UI shows data (stats, badges, progress bars) when what the nurse wants is to quickly understand what's going on and what needs attention
- **Early user feedback** — "she didn't really get it; she was clicking on stuff" — the UI is not intuitive for the target user
- **No workflow alignment** — the tool doesn't map to how MDS coordinators actually organize their day

---

## User: The MDS Coordinator

An RN who manages and coordinates all MDS assessments for a skilled nursing facility. Typically responsible for 20-40+ residents, juggling multiple assessments at different stages simultaneously.

### Two modes of work

1. **"Doing the MDS"** — Deep work. One patient's assessment open in PCC, going section by section, coding items, reviewing the chart. 30-90 minutes per assessment (admissions can take 5+ hours). Heads-down, focused. **Served by the MDS Overlay (badges, popovers, evidence).**

2. **"Managing the work"** — Coordination. Bouncing between tasks: chase a BIMS, send a cert, check on a query, code a new admission. Air traffic control mode. **Served by the Command Center.**

### The three pillars of MDS oversight (per Mike D / No Stress MDS)

1. **Compliance** — meeting regulatory deadlines, accurate coding, proper RAI process
2. **Reimbursement** — capturing appropriate PDPM revenue, HIPPS optimization
3. **Resident care** — accurate assessments drive appropriate care plans

### Primary user: The MDS Coordinator (not the owner)

The Command Center is built for the coordinator's daily workflow. Revenue data is included because it helps the coordinator prioritize (higher-revenue assessments get attention first), not as a dashboard for owners. Owner/VP revenue dashboards are a separate product on the web app.

---

## The MDS Coordinator's Daily Workflow

Based on "No Stress MDS" (Mike D, RN, 12-year MDS coordinator) and research from AAPACN, AllNurses forums, and MDS Training Institute.

### The Daily Agenda (Mike D's framework)

Every morning, the MDS coordinator fills out a daily agenda worksheet before starting work. This serves as a "bookmark for their attention" — they set it up, work through it, get interrupted, glance at the worksheet, and jump back in.

**Morning routine, in order:**

| Step | Task | What they're checking |
|------|------|----------------------|
| 1 | **ADT Review** | Census changes: new admissions, discharges, payer changes, transfers |
| 2 | **Care Plan Reviews** | Which care plans are due for IDT review today |
| 3 | **Order Listing** | New physician orders that impact MDS (new IV → adjust ARD, new dx → sig change?) |
| 4 | **Physician Certs** | Any recerts due this week? Prep and send (typically batched on Mondays) |
| 5 | **Authorizations** | Managed care reviews due today: send, track sent/received status |
| 6 | **MDS In Progress** | Open assessments, which need locking, which sections waiting on IDT |
| 7 | **Scripted Interviews** | Pain interviews, BIMS, PHQ-9 due in next 7 days — order or check completion |

**For new admissions, a specific sub-checklist (abbreviations crossed off):**
- **Dx** — Input admission diagnosis
- **M** — Schedule MDS assessments (and entry tracking records)
- **Cp** — Create initial care plans (baseline care plan required within 48 hours)
- **C** — Prepare physician certification (if Medicare A or Medicare Advantage)
- **L** — Complete state Medicaid form
- **P** — Order pain interview / scripted interviews
- **A** — Update authorization calendar (if managed care requiring auth)

**Separate tracking boxes:**
- **MDS To Be Locked** — specific assessments to complete and lock today (with type noted: ND, NQ, etc.)
- **Authorization Reviews** — table with resident, payer, sent status, received/processed status
- **Misc** — submissions to state, sig change evaluations, restorative evals
- **Meetings** — daily clinical meeting, weekly PDPM huddle, monthly QAPI and triple check

### Key insight: How the tool gets used

The Command Center gets opened at **three moments**:

1. **Morning planning** (~8 AM) — "Show me everything on my plate, sorted by what's most urgent." Quick scan, 1-2 minutes.
2. **Mid-task reference** (throughout day) — "Did the BIMS get done? What's the query status on this patient?" Pop open for 10 seconds, get the answer, close.
3. **End of day sanity check** (~4 PM) — "Did I miss anything? What's still pending?" Quick scan.

The tool is **opened, scanned, and closed. Repeatedly.** It is not left open all day. This means:
- Load time matters — useful info must appear immediately
- Scannability matters more than detail — they're glancing, not studying
- The first screen IS the product — if they have to click into things to understand their situation, we've failed

### Prioritization insight (MDS Training Institute)

> "Some people will say 'Always do your MDS assessments first.' But that's not always realistic. If I don't have any federally due assessments for the next 5 to 7 days, but I have five managed care reviews to submit, two nomnics to issue, and a care plan review due today, those are my priorities."

Time-sensitivity drives priority, not task type. The tool should make time-sensitivity instantly visible.

---

## Jobs To Be Done

### Job 0: Coding & Completing the MDS
Actually filling out the assessment — coding diagnoses, answering items, reviewing clinical documentation to support answers. This is the deep work and the biggest time sink. **Served by the MDS Overlay, not the Command Center.** But the Command Center needs a clean handoff into this work.

### Job 1: Assessment Lifecycle Management (core loop)
Know which assessments are open, where each stands (sections completed, UDAs done, queries pending), and whether they're on track or overdue relative to the ARD deadline.

Maps to Mike D's: "MDS In Progress" and "MDS To Be Locked" sections.

### Job 2: UDA Coordination ("go chase people down")
Track whether BIMS, PHQ-9, and GG are completed and locked within their required timing windows:
- BIMS: within ARD - 7 days through ARD (nursing or social services does this)
- PHQ-9: ideally day before or day of ARD (nursing does this)
- GG: within ARD - 2 days through ARD (therapy does this — tighter window)

When these aren't done, the nurse needs to track down the right person and follow up.

Maps to Mike D's: "Scripted Interviews" section + the implicit checking he does within "MDS In Progress."

### Job 3: Diagnosis Query Management
Identify coding opportunities, send queries to physicians, track whether they've responded, follow up on overdue queries before the ARD passes (a signed query after ARD = missed revenue), enter the signed ICD-10 code back into the MDS.

### Job 4: Certification Tracking
Know which patients need Medicare/Managed Care recertification and when it's due, prepare and send cert requests to physicians, chase overdue signatures, document delay reasons for compliance when certs are late.

Maps to Mike D's: "Physician Certs" section (weekly, typically Mondays).

### Job 5: Revenue Protection
Spot HIPPS improvement opportunities (current vs. potential coding), prioritize which assessments have the biggest revenue impact, ensure documentation supports the coded level (avoid recoupment/denial risk).

Revenue is a prioritization signal for the coordinator, not a dashboard for owners. The coordinator sees "+$42/day" and knows to prioritize that assessment.

### Job 6: Compliance & Care Plan Coverage
Ensure care plans cover active diagnoses, catch Section I items coded without supporting documentation (doc risks), monitor orders compliance, keep the facility audit-ready.

Maps to Mike D's: "Care Plan Reviews" section.

### Job 7: Interdisciplinary Coordination
Know which departments need to do what — therapy for GG, social services for BIMS, dietary for nutrition sections. The Command Center surfaces the *what*; the chasing happens in person or via other channels.

### Job 8: Scheduling & Planning
Know what's coming up — quarterlies due, annuals approaching, new admissions that need assessments opened. Eventually: proactive alerts for IPAs, significant changes, ARD date optimization.

Maps to Mike D's: "ADT Review" + the tracking spreadsheet/calendar he maintains separately.

---

## Design Principles

### 1. MDS Tracker, not a daily agenda
We can't replace their entire daily workflow — too many pieces live in PCC or other systems (order listing, Medicaid forms, meetings). Focus on being the best possible MDS assessment tracker. If we nail this, we replace the "MDS In Progress" and "MDS To Be Locked" sections of their worksheet, which is the biggest and most complex part of their day.

### 2. Status board, not task manager
The tool should make the situation so clear that the nurse immediately knows what to do — not tell them what to do. Show status, don't prescribe actions. The difference: "BIMS not completed, window expired" (status) vs. "Go complete the BIMS now" (task). One is empowering, the other is patronizing.

### 3. Scannable at a glance
The nurse opens this for 10 seconds to 2 minutes. In that time they need to know: which assessments are fine, which need attention, and what specifically is blocking. Visual hierarchy must clearly separate "on fire" from "on track." A green row you can skip. A red row you look at. They're pattern-matching, not reading.

### 4. Facility satellite view + assessment drill-in
The nurse needs the big picture ("how's my facility doing overall?") AND the details ("what's going on with this specific assessment?"). The home screen provides the satellite view; clicking in provides the detail. They should never lose the big picture context.

### 5. Play to our data strengths
We have strong data on: section progress, UDA status, query status, cert status, PDPM/HIPPS analysis, AI detection findings, care plan compliance. We don't have: baseline care plan status, CAA completion, transmission status, care plan meeting dates, order listing. Design around what we know.

### 6. Clean handoff to PCC
The Command Center is a launchpad, not a workspace. Every assessment should have a clear path to "open this in PCC" where the actual work happens. The MDS Overlay takes over from there.

---

## Information Architecture

### Header (always visible, compact)
Facility-level snapshot — the numbers that answer "how are things overall?"

```
MDS Command Center · Harmony Care at Stamford
14 overdue · 4 urgent · $108/day available · 7 certs · 1 query
```

This stays pinned regardless of which tab is active.

### Tabs

| Tab | Purpose | Job served |
|-----|---------|------------|
| **Assessments** (default) | All open assessments sorted by urgency | Jobs 1, 2, 5, 7 |
| **Certs** | Certification tracking — focused view for batching cert work | Job 4 |
| **Queries** | Diagnosis queries — focused view for batching query follow-up | Job 3 |
| **Care Plan** | Compliance and coverage gaps | Job 6 |

**Removed from current design:** Overview tab (stats move to header), Doc Risks tab (folds into assessment detail).

**Why tabs instead of filters:** Certs and Queries are distinct workflows the nurse batches separately. When the nurse thinks "let me deal with all my certs" (Mike D does this on Mondays), they want a focused view. Badge counts on tabs show items needing attention.

### Assessment List (Assessments tab)

Each row represents one assessment. Sorted by urgency — time-sensitivity is the primary sort:
- **Overdue** (past ARD + completion deadline) — red accent
- **Urgent** (ARD approaching, blockers present) — orange accent
- **Approaching** (ARD within a few days, mostly on track) — yellow accent
- **On Track** (proceeding normally) — green/neutral accent

**Each row shows:**
- Patient name + room number
- Assessment type (Admission, 5-Day, Quarterly, Sig Change, etc.)
- ARD date + days remaining or days overdue
- UDA status chips (BIMS/PHQ-9/GG — check, X, or dash for not required)
- Section progress (fraction, e.g., 16/17)
- Revenue opportunity if present (e.g., +$42/day)

**Same-patient collapsing:** When a patient has multiple assessments in the window, visually group them so it's clear they belong to the same person without repeating the patient name on every row.

**Filters within the Assessments tab:**
- By urgency (Overdue / Urgent / Approaching / On Track)
- By payer (Med A / Medicaid / Managed Care)
- By assessment class (PPS Payment / OBRA / End of Stay)
- By issues (Has UDA blockers / Has revenue opportunity)

### Assessment Detail (click into a row)

Shows everything about one assessment. Focused on **what needs attention**.

**Sections:**

1. **Header** — Patient name, assessment type, ARD, payer, urgency status
2. **Blockers / Needs Attention** — Only items that are incomplete or problematic:
   - UDAs not completed (with timing window context and who to contact)
   - Pending/overdue queries (with practitioner and days waiting)
   - Missing sections (which specific sections are not started)
   - Cert issues (if applicable to this patient)
   - Doc risks / compliance gaps
3. **Section Progress** — Visual progress indicator + breakdown of which sections are complete/in-progress/not started/locked
4. **Revenue Analysis** — HIPPS current vs. potential, payment delta (only for applicable assessment types)
5. **Actions** — "Open in PCC" button to jump to the assessment

### Certs Tab

Existing CertsView module (20 files, mature implementation). Fix scoping bug, otherwise largely as-is:
- **Always shows facility-wide data** regardless of which PCC page the user is on
- Grouped by status: Action Needed, Awaiting Signature, Overdue, Due Soon, Signed
- Sub-filters: All, Med A, Managed
- Each cert row: patient name, cert type (Initial, Day 14, etc.), due date, days overdue, sent-to info
- Actions: Send, Resend, document delay reason
- Existing modals: SendCertModal, DelayCertModal, SkipCertModal, EditClinicalReasonModal

### Queries Tab

Existing QueriesView (currently inline in MDSCommandCenter.jsx, should be extracted). Largely as-is:
- Grouped by status: Pending (not yet sent), Awaiting Doctor, Recently Signed/Rejected
- Each query row: patient name, diagnosis code/name, sent date, practitioner, ARD context
- Actions: Send, Resend SMS, Open in PDPM Analyzer, View PDF (for signed)

### Care Plan Tab

Existing ComplianceView component. Rename tab from "Compliance" to "Care Plan."

---

## Known Bugs to Fix

### Certs badge scoping (P0)
**Current behavior:** When on a patient page in PCC, the Certs tab loads only that patient's certifications but displays the facility-wide badge count in the tab header. Shows "All certifications are up to date" while badge says 7.

**Root cause:** Line 730-731 in MDSCommandCenter.jsx passes `patientId` from `window.getChatPatientId()` to CertsView, which filters to just that patient.

**Fix:** The Command Center should always show facility-wide data. Remove the patient-scoped filtering. Badge count and content must match.

---

## What Changes from Current Implementation

### Remove
- **Overview tab** — stat cards move to compact header, "Needs Attention" list is redundant with sorted Assessments list, HIPPS Opportunities becomes a filter
- **Doc Risks tab** — fold doc risk flags into assessment detail view as blockers on the relevant assessment

### Simplify
- **Header** — current has 5 layers (title, stats strip, tabs, filter dropdowns, urgency pills). Reduce to 3 max: title + compact stats, tabs, filters (assessments tab only)
- **Assessment list** — current uses collapsible urgency group sections (OVERDUE, URGENT, etc.). Flatten to single sorted list with color accent per row indicating urgency. No group headers needed.

### Fix
- **Certs scoping** — always facility-wide
- **Same-patient grouping** — Roberts, Marilyn should visually group her 3 assessments

### Keep
- **CertsView** and its 15+ sub-components — mature, works well
- **ComplianceView** — works, just rename tab
- **useCommandCenter hook** — data fetching is solid
- **AssessmentRow** — needs tweaking but bones are good (UDA badges, ARD context, progress bar)
- **QueriesView** — mostly fine, extract to own file

### Redesign
- **AssessmentPreview** (detail view) — refocus on "what needs attention" instead of detection item list

---

## Future Features (not in initial redesign)

### V2: Daily Agenda / Digital Worksheet
Eventually replicate Mike D's daily agenda structure within the tool:
- New admissions section with per-patient checklist (Dx, M, Cp, C, L, P, A)
- "MDS To Be Locked" section (assessments the coordinator intends to complete today)
- Authorization tracking for managed care
- Integration with ADT feed for automatic new admission alerts

This requires more data (ADT feed, auth tracking) and would make the Command Center the coordinator's primary daily tool rather than a reference/tracker.

### Smart Alerts / Notifications
Proactive situational awareness:
- "Patient X has been here 14 days — IPA window opening"
- "Patient Y's IV fluids suggest setting ARD after day 7 for higher HIPPS"
- "Patient Z had a fall + significant weight loss — consider Sig Change assessment"
- "Quarterly due in 5 days for Patient W — assessment not opened yet"
- New physician orders that impact MDS (replicating the "Order Listing" review)

### PDPM Pre-Assessment Planner
For new Med A admissions:
- Estimated PDPM payment based on current diagnoses and clinical status
- Recommended ARD date (e.g., "set ARD after day 7 if IV fluids are active")
- Which diagnoses to look for / query for to maximize appropriate coding
- Connects to existing ICD-10 coding → query flow

### IPA Tracking
Track Interim Payment Assessment windows and opportunities. Currently not in the system.

### Assessment Calendar View
Calendar or timeline showing upcoming assessment due dates (quarterlies, annuals). Helps with scheduling/planning. Could be a view mode toggle within Assessments tab.

### MDS Overlay Integration
When inside an assessment using the MDS Overlay, a compact sidebar showing the assessment's Command Center status — "here's where this assessment stands overall" without leaving the coding workflow.

### Owner/VP Revenue Dashboard
Separate product on the web app (not the Chrome extension). Shows:
- Facility-level revenue capture and opportunities
- Cross-facility comparisons for regional VPs
- Trends over time
- HIPPS optimization performance

---

## Data Model Notes

The backend API (`/api/extension/mds/dashboard`) already returns all data needed for the initial redesign:

- **Assessments** with: patientId, patientName, ardDate, assessmentType, status, sectionProgress, deadlines (urgency, daysRemaining), udaSummary (BIMS/PHQ-9/GG status), pdpm (HIPPS, payment analysis), detectionSummary, querySummary, compliance, assessmentClass, payerType, isAdministrativeOnly, isHippsOpportunityPrimary
- **Outstanding Queries** with: patientId, patientName, mdsItem, status, sentAt, sentTo, ardDaysRemaining, assessmentPayment
- **Recently Signed Queries** with: practitioner, selectedIcd10Code, hasPdf
- **Certifications** via separate API (`/api/extension/certifications/`)
- **Care Plan Compliance** via separate API (useComplianceDashboard hook)

Patient grouping is feasible on the frontend — every entity has a patientId.

No API changes required for initial redesign. Future features (alerts, IPA tracking, PDPM planner, daily agenda) will need new backend endpoints.

---

## Reference Materials

### Mike D / No Stress MDS
- [No Stress MDS website](https://www.nostressmds.com/)
- YouTube: "How I Organize My Day as an MDS Coordinator" — detailed walkthrough of daily agenda worksheet
- Daily Agenda Worksheet (free download on website) — the paper template our digital version should eventually replicate
- Key quote: "Having this worksheet filled out before I even start my day really helps me stay on track. When those inevitable interruptions happen, I can quickly glance at my worksheet and jump right back in without missing a beat."

### Industry Resources
- [AAPACN: Daily and Weekly Tasks of a Nurse Assessment Coordinator](https://www.aapacn.org/article/back-to-basics-daily-and-weekly-tasks-of-a-nurse-assessment-coordinator/)
- [MDS Training Institute: 4 Steps to Managing Time](https://www.mdstraininginstitute.org/SuccessWebsite/4-steps-managing-time-work-mds-nurse-managers/)
- [ADL Data Systems: MDS Reference Sheets](https://www.adldata.org/home/resources/mds-cheat-sheets/) — free scheduling and assessment cheat sheets
- [MDS Scheduler (Robintek)](https://mdsschedule.com/) — PPS scheduling calculator
- [AllNurses MDS Coordinator Forum](https://allnurses.com/mds-coordinator-information-c158/) — real coordinator discussions on organization
- [Triple Check Checklist (My MDS Expert)](https://www.mdsexpert.com/triple-check-checklist/) — monthly billing accuracy review
- [PMC: "Striving for excellence" — MDS coordinator perceptions](https://pmc.ncbi.nlm.nih.gov/articles/PMC4699170/)

### Assessment Lifecycle (from RAI Manual + Mike D)
1. **Setup** — Assessment triggered, opened in PCC, ARD set, PPS schedule created
2. **Admission tasks** (if new admit) — Dx coding, care plans, cert prep, Medicaid form, pain interview order, auth calendar
3. **Clinical data gathering** — BIMS, PHQ-9, GG within lookback windows, IDT section completion, CNA documentation review
4. **Coding & review** — Section I diagnoses, PDPM pre-estimate, AI findings review, diagnosis queries sent
5. **Completion** — All sections done, CAAs addressed, RN signs (completion date), care plan updated
6. **Finalize** — Transmit to state (within 14 days of completion), cert signed, delay reasons documented if overdue

---

## V1 Scope (Final)

After extensive discussion, V1 includes:

1. **Certs scoping bug fix** — always facility-wide (P0)
2. **Simplified header** — kill Overview tab, compact stat numbers inline
3. **Kill Doc Risks tab** — fold flags into assessment detail
4. **4 tabs:** Assessments, Certs, Queries, Care Plan
5. **Augmented assessment list** — "the PCC list but better"
   - Merges open assessments (dashboard API) + upcoming-urgent unopened (schedule API, next ~14 days)
   - Each row: patient, type, ARD/due date, urgency color, UDA chips, section progress, query/cert blockers, revenue delta
   - Sorted by urgency
   - Same-patient visual grouping
   - Unopened upcoming rows visually distinct (no section data, "Not opened" indicator)
6. **Calendar view toggle** — within Assessments tab
   - Month view (grid) showing assessments plotted by due date
   - Week view (detailed columns) for current week planning
   - Color-coded by type and urgency
   - Click a day/item to see details
7. **Focused assessment detail** — what's blocking, not a data dump
8. **Certs, Queries, Care Plan tabs** — existing components, minor cleanup

**Key philosophical decision:** Don't replace the coordinator's existing mental model ("list of assessments"). Augment it with richer data. They already know how to read an assessment list from PCC — we give them a better version of the same thing.

## Data Sources

Two APIs feed the Command Center:

1. **`/api/extension/mds/dashboard`** — Open assessments with full clinical data (section progress, UDAs, queries, PDPM, compliance)
2. **`/api/extension/mds/schedule`** — All active patients' upcoming OBRA assessments (quarterly, annual, admission) with due dates and "opened or not" status

These are merged on the frontend:
- Assessment in dashboard + schedule (opened) → rich row with full data
- Assessment in schedule only (not opened) → sparse row showing "Not opened, due X"
- Assessment in dashboard only (unusual types or outside schedule scope) → rich row from dashboard data

## Open Questions

1. **Calendar placement** — Top-level tab, or view toggle within Assessments tab? Leaning view toggle (consolidates the assessment mental model) but need to prototype.

2. **Same-patient visual grouping** — Nested under patient header? Indented? Adjacent with name shown once? Prototype to decide.

3. **Unopened upcoming window** — 14 days? 7 days? 30 days? Enough to be actionable, not so much that the list is cluttered. 14 days is a starting guess.

4. **Assessment detail depth** — Just blockers and actions? Or include section-by-section breakdown, per-section status grid, full PDPM analysis? Leaning focused for V1.

5. **Calendar item density** — How do we handle days with 5+ items? Dots with count? Stacked labels? Scrollable day cells?
