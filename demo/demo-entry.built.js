var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// demo/demo-mock-data.js
var DEMO_API_RESPONSES = {
  // ════════════════════════════════════════════
  // DASHBOARD (useCommandCenter)
  // ════════════════════════════════════════════
  dashboard: {
    assessments: [
      {
        id: "4860265",
        externalAssessmentId: "4860265",
        patientId: "2657226",
        patientName: "Doe, Jane",
        assessmentType: "Quarterly",
        ardDate: "2026-01-13",
        status: "open",
        payerType: "medicaid",
        assessmentClass: "obra",
        isHippsOpportunityPrimary: true,
        deadlines: {
          urgency: "urgent",
          ardDaysRemaining: 3,
          transmissionDue: "2026-01-27"
        },
        udaSummary: {
          bims: "complete",
          phq9: "missing",
          gg: "complete"
        },
        pdpm: {
          hasImprovements: true,
          currentHipps: "KAQD",
          potentialHipps: "KBQE",
          payment: {
            currentDaily: 482.5,
            potentialDaily: 538.2,
            remainingDays: 14
          }
        },
        compliance: {
          summary: { passed: 4, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "failed", message: "PHQ-9 not found in lookback period" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 14, total: 18 },
        detectionSummary: {
          total: 4,
          hippsChanging: 3,
          docRisks: { total: 1, diagnosisMissing: 1, treatmentMissing: 0 }
        }
      },
      {
        id: "4862100",
        externalAssessmentId: "4862100",
        patientId: "2657300",
        patientName: "Smith, Robert",
        assessmentType: "5-Day PPS",
        ardDate: "2026-01-10",
        status: "open",
        payerType: "medicare",
        assessmentClass: "pps",
        isHippsOpportunityPrimary: true,
        deadlines: {
          urgency: "overdue",
          ardDaysRemaining: -4,
          transmissionDue: "2026-01-24"
        },
        udaSummary: {
          bims: "complete",
          phq9: "complete",
          gg: "in_progress"
        },
        pdpm: {
          hasImprovements: true,
          currentHipps: "CBQJ",
          potentialHipps: "CBQL",
          payment: {
            currentDaily: 610.8,
            potentialDaily: 645.3,
            remainingDays: 26
          }
        },
        compliance: {
          summary: { passed: 5, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "passed" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 12, total: 18 },
        detectionSummary: {
          total: 5,
          hippsChanging: 2,
          docRisks: { total: 2, diagnosisMissing: 1, treatmentMissing: 1 }
        }
      },
      {
        id: "4863500",
        externalAssessmentId: "4863500",
        patientId: "2657450",
        patientName: "Johnson, Mary",
        assessmentType: "5-Day PPS",
        ardDate: "2026-01-20",
        status: "open",
        payerType: "medicare",
        assessmentClass: "pps",
        isHippsOpportunityPrimary: false,
        deadlines: {
          urgency: "approaching",
          ardDaysRemaining: 7,
          transmissionDue: "2026-02-03"
        },
        udaSummary: {
          bims: "complete",
          phq9: "complete",
          gg: "complete"
        },
        pdpm: {
          hasImprovements: false,
          currentHipps: "LAQF",
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 5, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "passed" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 16, total: 18 },
        detectionSummary: {
          total: 0,
          hippsChanging: 0,
          docRisks: { total: 0, diagnosisMissing: 0, treatmentMissing: 0 }
        }
      },
      {
        id: "4864001",
        externalAssessmentId: "4864001",
        patientId: "2657501",
        patientName: "Wilson, James",
        assessmentType: "Annual",
        ardDate: "2026-01-25",
        status: "open",
        payerType: "medicaid",
        assessmentClass: "obra",
        isHippsOpportunityPrimary: false,
        deadlines: {
          urgency: "on_track",
          ardDaysRemaining: 12,
          transmissionDue: "2026-02-08"
        },
        udaSummary: {
          bims: "complete",
          phq9: "complete",
          gg: "missing"
        },
        pdpm: {
          hasImprovements: false,
          currentHipps: "KAQD",
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 4, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "passed" },
            gg: { status: "failed", message: "GG assessment not locked" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 10, total: 18 },
        detectionSummary: {
          total: 1,
          hippsChanging: 0,
          docRisks: { total: 0, diagnosisMissing: 0, treatmentMissing: 0 }
        }
      },
      {
        id: "4855102",
        externalAssessmentId: "4855102",
        patientId: "2657226",
        patientName: "Doe, Jane",
        assessmentType: "Annual",
        ardDate: "2025-12-15",
        status: "locked",
        payerType: "medicaid",
        assessmentClass: "obra",
        isHippsOpportunityPrimary: false,
        deadlines: {
          urgency: "completed",
          ardDaysRemaining: -30,
          transmissionDue: "2025-12-29"
        },
        udaSummary: {
          bims: "locked_in_range",
          phq9: "locked_in_range",
          gg: "locked_in_range"
        },
        pdpm: {
          hasImprovements: false,
          currentHipps: "KAQD",
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 5, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "passed" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 18, total: 18 },
        detectionSummary: {
          total: 0,
          hippsChanging: 0,
          docRisks: { total: 0, diagnosisMissing: 0, treatmentMissing: 0 }
        }
      },
      {
        id: "4865200",
        externalAssessmentId: "4865200",
        patientId: "2657300",
        patientName: "Smith, Robert",
        assessmentType: "Interim Payment",
        ardDate: "2026-01-24",
        status: "open",
        payerType: "medicare",
        assessmentClass: "pps",
        isHippsOpportunityPrimary: false,
        deadlines: {
          urgency: "approaching",
          ardDaysRemaining: 10,
          transmissionDue: "2026-02-07"
        },
        udaSummary: {
          bims: "near_miss",
          phq9: "complete",
          gg: "complete"
        },
        pdpm: {
          hasImprovements: false,
          currentHipps: "CBQJ",
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 4, total: 5 },
          checks: {
            bims: { status: "failed", message: "BIMS near miss \u2014 locked outside lookback" },
            phq9: { status: "passed" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 8, total: 18 },
        detectionSummary: {
          total: 0,
          hippsChanging: 0,
          docRisks: { total: 0, diagnosisMissing: 0, treatmentMissing: 0 }
        }
      }
    ],
    summary: {
      totalAssessments: 6,
      openAssessments: 5,
      overdue: 1,
      urgent: 1,
      approaching: 2,
      onTrack: 1,
      hippsOpportunities: 2,
      totalRevenueOpportunity: "$780/day"
    },
    outstandingQueries: [
      {
        id: "q-003",
        mdsAssessmentId: "4860265",
        patientName: "Doe, Jane",
        mdsItem: "I4900",
        mdsItemName: "Schizophrenia",
        status: "sent",
        sentAt: new Date(Date.now() - 2 * 864e5).toISOString(),
        ardDaysRemaining: 3,
        assessmentPayment: { currentDaily: 482.5, potentialDaily: 538.2, remainingDays: 14 },
        sentTo: [{ firstName: "Demo", lastName: "Provider", title: "MD" }]
      },
      {
        id: "q-004",
        mdsAssessmentId: "4862100",
        patientName: "Smith, Robert",
        mdsItem: "I5100",
        mdsItemName: "Quadriplegia",
        status: "sent",
        sentAt: new Date(Date.now() - 5 * 864e5).toISOString(),
        ardDaysRemaining: -4,
        assessmentPayment: { currentDaily: 610.8, potentialDaily: 645.3, remainingDays: 26 },
        sentTo: [{ firstName: "Sample", lastName: "Doctor", title: "DO" }]
      },
      {
        id: "q-001",
        mdsAssessmentId: "4860265",
        patientName: "Doe, Jane",
        mdsItem: "I5600",
        mdsItemName: "Malnutrition",
        status: "pending",
        ardDaysRemaining: 3,
        assessmentPayment: { currentDaily: 482.5, potentialDaily: 538.2, remainingDays: 14 }
      }
    ],
    recentlySigned: [
      {
        id: "q-005",
        mdsAssessmentId: "4860265",
        patientName: "Doe, Jane",
        mdsItem: "I6200",
        mdsItemName: "Diabetes Mellitus",
        status: "signed",
        signedAt: new Date(Date.now() - 864e5).toISOString(),
        mdsItemCoded: false,
        hasPdf: true,
        practitioner: { firstName: "Demo", lastName: "Provider", title: "MD" },
        selectedIcd10Code: "E11.9"
      }
    ]
  },
  // ════════════════════════════════════════════
  // DOC RISKS (useDocRisks)
  // ════════════════════════════════════════════
  docRisks: {
    summary: { total: 3, diagnosisMissing: 2, treatmentMissing: 1 },
    items: [
      {
        patientName: "Doe, Jane",
        assessmentType: "Quarterly",
        mdsItem: "I5600",
        itemName: "Malnutrition",
        missingDiagnosis: true,
        missingTreatment: false,
        rationale: "Nutrition assessment documents significant weight loss (12.6%), low albumin/prealbumin, and PO intake <50%, but no ICD-10 code for malnutrition on Med Diag."
      },
      {
        patientName: "Smith, Robert",
        assessmentType: "5-Day PPS",
        mdsItem: "I4300",
        itemName: "Diabetes with PVD",
        missingDiagnosis: true,
        missingTreatment: false,
        rationale: "Lab results and medication list support diabetes diagnosis, but no PVD code documented."
      },
      {
        patientName: "Smith, Robert",
        assessmentType: "5-Day PPS",
        mdsItem: "O0400A3",
        itemName: "IV Medications",
        missingDiagnosis: false,
        missingTreatment: true,
        rationale: "MAR shows IV antibiotic course, but treatment not reflected on active treatment plan."
      }
    ]
  },
  // ════════════════════════════════════════════
  // PDPM POTENTIAL (usePDPMAnalyzer - keyed by assessmentId)
  // ════════════════════════════════════════════
  pdpmPotential: {
    "4860265": {
      patientName: "Doe, Jane",
      assessment: {
        id: "4860265",
        externalAssessmentId: "4860265",
        externalPatientId: "2657226",
        patientId: "2657226",
        description: "Quarterly",
        ardDate: "2026-01-13",
        status: "open"
      },
      summary: {
        currentHipps: "KAQD",
        potentialHippsIfCoded: "KBQE",
        hasImprovements: true,
        totalActionableItems: 3
      },
      calculation: {
        hippsCode: "KAQD",
        ptot: "TK",
        slp: "SA",
        nursing: "CA1",
        nta: "ND"
      },
      payment: {
        currentDaily: 482.5,
        potentialDaily: 538.2,
        remainingDays: 14
      },
      enhancedDetections: [
        {
          mdsItem: "I5600",
          itemName: "Malnutrition",
          section: "I",
          wouldChangeHipps: true,
          solverStatus: "detected",
          confidence: 0.95,
          rationale: "Nutrition assessment documents significant weight loss (12.6% in 3 months), low albumin (2.9) and prealbumin (12), PO intake <50%, with supplementation orders supporting malnutrition diagnosis.",
          evidence: [
            { sourceType: "progress-note", sourceId: "doc-nutr-001", quote: "Weight Loss: 17 lbs (12.6%) in past 3 months. PO Intake: < 50% meals/est. needs. Moderate protein-calorie malnutrition.", documentName: "Nutrition Progress Note" },
            { sourceType: "lab_result", sourceId: "doc-nutr-002", quote: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low)", documentName: "Nutrition Lab Panel" }
          ],
          impact: {
            nta: { wouldChangeGroup: true, currentGroup: "ND", newGroup: "NE" }
          }
        },
        {
          mdsItem: "I4300",
          itemName: "Diabetes with Peripheral Vascular Disease",
          section: "I",
          wouldChangeHipps: true,
          solverStatus: "detected",
          confidence: 0.85,
          rationale: "Lab results show elevated HbA1c and medication list includes diabetic medications. Progress note documents PVD symptoms.",
          evidence: [
            { sourceType: "lab_result", sourceId: "doc-081", quote: "HbA1c: 8.2%, GFR 42, Creatinine 1.8", documentName: "Lab Results 1/18" },
            { sourceType: "progress-note", sourceId: "doc-082", quote: "Bilateral lower extremity edema with diminished pedal pulses noted.", documentName: "MD Progress Note" }
          ],
          impact: {
            nta: { wouldChangeLevel: true, currentLevel: "ND", newLevel: "NE" }
          }
        },
        {
          mdsItem: "O0400A3",
          itemName: "IV Medications",
          section: "O",
          wouldChangeHipps: true,
          solverStatus: "detected",
          confidence: 0.95,
          rationale: "MAR shows active IV antibiotic course (Vancomycin) during lookback period.",
          evidence: [
            { sourceType: "order", sourceId: "order-080", quote: "Vancomycin 1g IV Q12H - administered 1/12, 1/13", documentName: "MAR" }
          ],
          impact: {
            nursing: { wouldChangeGroup: true, currentPaymentGroup: "CA1", newPaymentGroup: "CB1" }
          }
        },
        {
          mdsItem: "I2900",
          itemName: "Drug/Medication induced depression",
          section: "I",
          wouldChangeHipps: false,
          solverStatus: "detected",
          confidence: 0.72,
          rationale: "PHQ-9 assessment missing. Multiple medications on profile associated with depressive side effects.",
          evidence: [
            { sourceType: "progress-note", sourceId: "doc-083", quote: "Patient reports feeling down and having little interest in activities.", documentName: "Nursing Assessment" }
          ]
        }
      ],
      outstandingQueries: [
        {
          id: "q-003",
          mdsItem: "I4900",
          mdsItemName: "Schizophrenia",
          status: "sent",
          sentAt: new Date(Date.now() - 2 * 864e5).toISOString(),
          pdpmImpact: { wouldChangeHipps: false }
        }
      ],
      recentlySigned: [
        {
          id: "q-005",
          mdsItem: "I6200",
          mdsItemName: "Diabetes Mellitus",
          status: "signed",
          signedAt: new Date(Date.now() - 864e5).toISOString(),
          mdsItemCoded: false
        }
      ],
      compliance: {
        summary: { passed: 4, total: 5 },
        checks: {
          bims: { status: "passed", message: "BIMS completed", foundUda: { description: "BIMS Assessment", date: "2026-01-12", lockedDate: "2026-01-12" } },
          phq9: { status: "failed", message: "PHQ-9 not found in lookback period" },
          gg: { status: "passed", message: "GG completed", foundUda: { description: "GG Functional Assessment", date: "2026-01-11", lockedDate: "2026-01-12" } },
          orders: { status: "passed", message: "All orders signed" },
          therapyDocs: { status: "passed", message: "Therapy documentation complete" }
        }
      }
    },
    "4862100": {
      patientName: "Smith, Robert",
      assessment: {
        id: "4862100",
        externalAssessmentId: "4862100",
        externalPatientId: "2657300",
        patientId: "2657300",
        description: "5-Day PPS",
        ardDate: "2026-01-10",
        status: "open"
      },
      summary: {
        currentHipps: "CBQJ",
        potentialHippsIfCoded: "CBQL",
        hasImprovements: true,
        totalActionableItems: 5
      },
      calculation: {
        hippsCode: "CBQJ",
        ptot: "TL",
        slp: "SB",
        nursing: "CB2",
        nta: "NF"
      },
      payment: {
        currentDaily: 610.8,
        potentialDaily: 645.3,
        remainingDays: 26
      },
      enhancedDetections: [
        {
          mdsItem: "I5100",
          itemName: "Hemiplegia/Hemiparesis",
          section: "I",
          wouldChangeHipps: true,
          solverStatus: "detected",
          confidence: 0.96,
          rationale: "Post-CVA left hemiparesis well documented in PT/OT evaluations.",
          evidence: [
            { sourceType: "progress-note", sourceId: "doc-084", quote: "Left-sided hemiparesis with 2/5 strength in left upper and lower extremities.", documentName: "PT Evaluation" }
          ],
          impact: {
            ptot: { wouldChangeGroup: true, currentGroup: "TL", newGroup: "TM" }
          }
        },
        {
          mdsItem: "K0510A",
          itemName: "Parenteral/IV Feeding",
          section: "K",
          wouldChangeHipps: true,
          solverStatus: "detected",
          confidence: 0.88,
          rationale: "IV fluids administered during lookback period per MAR records.",
          evidence: [
            { sourceType: "order", sourceId: "order-081", quote: "D5 1/2NS 1000ml IV at 75ml/hr - running", documentName: "MAR" }
          ],
          impact: {
            nta: { wouldChangeLevel: true, currentLevel: "NF", newLevel: "NG" }
          }
        }
      ],
      outstandingQueries: [
        {
          id: "q-004",
          mdsItem: "I5100",
          mdsItemName: "Quadriplegia",
          status: "sent",
          sentAt: new Date(Date.now() - 5 * 864e5).toISOString(),
          pdpmImpact: { wouldChangeHipps: false }
        }
      ],
      recentlySigned: [],
      compliance: {
        summary: { passed: 5, total: 5 },
        checks: {
          bims: { status: "passed", message: "BIMS completed" },
          phq9: { status: "passed", message: "PHQ-9 completed" },
          gg: { status: "passed", message: "GG completed" },
          orders: { status: "passed", message: "All orders signed" },
          therapyDocs: { status: "passed", message: "Therapy documentation complete" }
        }
      }
    }
  },
  // ════════════════════════════════════════════
  // PATIENT ASSESSMENTS (usePDPMAnalyzer patient scope)
  // ════════════════════════════════════════════
  patientAssessments: {
    "2657226": {
      patientName: "Doe, Jane",
      assessments: [
        {
          id: "4860265",
          externalAssessmentId: "4860265",
          type: "Quarterly",
          assessmentType: "Quarterly",
          ardDate: "2026-01-13",
          status: "open",
          currentHipps: "KAQD",
          hipps: "KAQD"
        },
        {
          id: "4855102",
          externalAssessmentId: "4855102",
          type: "Annual",
          assessmentType: "Annual",
          ardDate: "2025-12-15",
          status: "locked",
          currentHipps: "KAQD",
          hipps: "KAQD"
        }
      ]
    },
    "2657300": {
      patientName: "Smith, Robert",
      assessments: [
        {
          id: "4862100",
          externalAssessmentId: "4862100",
          type: "5-Day PPS",
          assessmentType: "5-Day PPS",
          ardDate: "2026-01-10",
          status: "open",
          currentHipps: "CBQJ",
          hipps: "CBQJ"
        }
      ]
    }
  },
  // ════════════════════════════════════════════
  // CERTIFICATION DASHBOARD (useCertDashboard)
  // ════════════════════════════════════════════
  certDashboard: {
    pending: 4,
    overdue: 1,
    dueSoon: 2,
    signedLast7Days: 3
  },
  // ════════════════════════════════════════════
  // CERTIFICATIONS LIST (useCertifications)
  // ════════════════════════════════════════════
  certifications: [
    // ── Stay 001: Doe, Jane (Medicare Part A) ──
    {
      id: "cert-001",
      patientId: "2657226",
      patientName: "Doe, Jane",
      status: "pending",
      type: "initial",
      sequenceNumber: 0,
      payerType: "medicare",
      partAStayId: "stay-001",
      partAStartDate: "2025-12-20",
      currentMedicareDay: 45,
      admitDate: "2025-12-20",
      certPeriodStart: "2025-12-20",
      certPeriodEnd: "2026-01-19",
      dueDate: new Date(Date.now() + 2 * 864e5).toISOString().split("T")[0],
      clinicalReason: "Requires skilled nursing for IV antibiotic therapy and wound management following surgical debridement of sacral pressure ulcer. Patient also requires daily PT/OT for functional mobility restoration.",
      estimatedDays: 30,
      planForDischarge: "home_with_services",
      assignedPractitioner: { id: "pract-001", name: "Dr. Demo Provider", title: "MD" },
      sends: [],
      certChain: [
        { type: "initial", status: "pending", dueDate: new Date(Date.now() + 2 * 864e5).toISOString().split("T")[0] }
      ]
    },
    {
      id: "cert-004",
      patientId: "2657226",
      patientName: "Doe, Jane",
      status: "signed",
      type: "day_14_recert",
      sequenceNumber: 1,
      payerType: "medicare",
      partAStayId: "stay-001",
      partAStartDate: "2025-12-20",
      currentMedicareDay: 45,
      admitDate: "2025-12-20",
      certPeriodStart: "2025-12-20",
      certPeriodEnd: "2026-01-19",
      dueDate: "2026-01-10",
      clinicalReason: "Continued skilled nursing for wound care and IV medications. Wound showing slow but steady improvement with granulation tissue forming.",
      estimatedDays: 30,
      planForDischarge: "home_with_services",
      signedAt: new Date(Date.now() - 4 * 864e5).toISOString(),
      signedByName: "Dr. Demo Provider",
      signedByTitle: "MD",
      signedByPractitionerId: "pract-001",
      sends: [
        { sentAt: new Date(Date.now() - 6 * 864e5).toISOString(), practitionerName: "Dr. Demo Provider", practitionerTitle: "MD", smsStatus: "delivered" }
      ],
      certChain: [
        { type: "initial", status: "signed", dueDate: "2025-12-30" },
        { type: "day_14_recert", status: "signed", dueDate: "2026-01-10" }
      ]
    },
    // ── Stay 002: Smith, Robert (Medicare Part A) ──
    {
      id: "cert-006",
      patientId: "2657300",
      patientName: "Smith, Robert",
      status: "pending",
      type: "initial",
      sequenceNumber: 0,
      payerType: "medicare",
      partAStayId: "stay-002",
      partAStartDate: "2025-11-15",
      currentMedicareDay: 78,
      admitDate: "2025-11-15",
      certPeriodStart: "2025-11-15",
      certPeriodEnd: "2025-12-15",
      dueDate: new Date(Date.now() + 4 * 864e5).toISOString().split("T")[0],
      clinicalReason: "",
      estimatedDays: null,
      planForDischarge: null,
      assignedPractitioner: null,
      sends: [],
      certChain: [
        { type: "initial", status: "pending", dueDate: new Date(Date.now() + 4 * 864e5).toISOString().split("T")[0] },
        { type: "day_14_recert", status: "pending", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().split("T")[0] }
      ]
    },
    {
      id: "cert-002",
      patientId: "2657300",
      patientName: "Smith, Robert",
      status: "pending",
      type: "day_14_recert",
      sequenceNumber: 1,
      payerType: "medicare",
      partAStayId: "stay-002",
      partAStartDate: "2025-11-15",
      currentMedicareDay: 78,
      admitDate: "2025-11-15",
      certPeriodStart: "2026-01-15",
      certPeriodEnd: "2026-02-14",
      dueDate: new Date(Date.now() - 1 * 864e5).toISOString().split("T")[0],
      clinicalReason: "Post-CVA rehabilitation requiring daily PT/OT/SLP. Patient demonstrating slow but measurable functional gains. Left hemiparesis persists \u2014 requires max assist for transfers.",
      estimatedDays: 30,
      planForDischarge: "home_with_services",
      assignedPractitioner: { id: "pract-002", name: "Dr. Sample Doctor", title: "DO" },
      sends: [],
      certChain: [
        { type: "initial", status: "signed", dueDate: "2025-12-15" },
        { type: "day_14_recert", status: "pending", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().split("T")[0] }
      ]
    },
    // ── Johnson, Mary (Managed Care) ──
    {
      id: "cert-003",
      patientId: "2657450",
      patientName: "Johnson, Mary",
      status: "sent",
      type: "initial",
      sequenceNumber: 0,
      payerType: "managed_care",
      partAStayId: null,
      partAStartDate: null,
      currentMedicareDay: null,
      admitDate: "2026-01-05",
      certPeriodStart: "2026-01-05",
      certPeriodEnd: "2026-02-04",
      dueDate: new Date(Date.now() + 5 * 864e5).toISOString().split("T")[0],
      clinicalReason: "Skilled nursing for medication management and fall prevention program. Patient with complex polypharmacy requiring daily nursing assessment.",
      estimatedDays: 30,
      planForDischarge: "long_term_care",
      assignedPractitioner: { id: "pract-001", name: "Dr. Demo Provider", title: "MD" },
      sends: [
        { sentAt: new Date(Date.now() - 2 * 864e5).toISOString(), practitionerName: "Dr. Demo Provider", practitionerTitle: "MD", smsStatus: "delivered" }
      ],
      certChain: [
        { type: "initial", status: "sent", dueDate: new Date(Date.now() + 5 * 864e5).toISOString().split("T")[0] }
      ]
    },
    // ── Wilson, James (Managed Care — Skipped) ──
    {
      id: "cert-005",
      patientId: "2657501",
      patientName: "Wilson, James",
      status: "skipped",
      type: "initial",
      sequenceNumber: 0,
      payerType: "managed_care",
      partAStayId: null,
      partAStartDate: null,
      currentMedicareDay: null,
      admitDate: "2026-01-02",
      certPeriodStart: "2026-01-02",
      certPeriodEnd: "2026-02-01",
      dueDate: "2026-01-12",
      skipReason: "Payer does not require certification for this stay type.",
      sends: [],
      certChain: [
        { type: "initial", status: "skipped", dueDate: "2026-01-12" }
      ]
    },
    // ── Anderson, Patricia (Medicare Part A — Day 30 recert delayed) ──
    {
      id: "cert-007",
      patientId: "2657600",
      patientName: "Anderson, Patricia",
      status: "pending",
      type: "day_30_recert",
      sequenceNumber: 2,
      isDelayed: true,
      payerType: "medicare",
      partAStayId: "stay-003",
      partAStartDate: "2025-11-01",
      currentMedicareDay: 92,
      admitDate: "2025-11-01",
      certPeriodStart: "2026-01-01",
      certPeriodEnd: "2026-01-31",
      dueDate: new Date(Date.now() + 1 * 864e5).toISOString().split("T")[0],
      clinicalReason: "Continued skilled nursing for tracheostomy care, ventilator weaning protocol, and respiratory therapy. Patient on gradual weaning schedule.",
      estimatedDays: 30,
      planForDischarge: "long_term_care",
      assignedPractitioner: { id: "pract-003", name: "Jane Specialist, NP", title: "NP" },
      sends: [],
      certChain: [
        { type: "initial", status: "signed", dueDate: "2025-11-20" },
        { type: "day_14_recert", status: "signed", dueDate: "2025-12-15" },
        { type: "day_30_recert", status: "pending", dueDate: new Date(Date.now() + 1 * 864e5).toISOString().split("T")[0] }
      ]
    }
  ],
  // ════════════════════════════════════════════
  // ITEM DETAIL (useItemDetail - keyed by MDS code)
  // ════════════════════════════════════════════
  itemDetail: {
    "I0400": {
      item: {
        mdsItem: "I0400",
        itemName: "Coronary Artery Disease (CAD)",
        section: "I",
        description: "I0400 \u2014 Has the resident been diagnosed with coronary artery disease (CAD)?",
        status: "needs_physician_query",
        validation: {
          diagnosisCheck: { passed: false },
          treatmentCheck: { passed: true }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-020",
            documentName: "Cardiology Consult",
            displayName: "Cardiology Consult \u2014 12/18/2025",
            effectiveDate: "2025-12-18",
            quote: "History of coronary artery disease s/p PCI with drug-eluting stent to LAD in 2022. Chronic stable angina well controlled on current regimen.",
            rationale: "Specialist documentation of established CAD diagnosis with interventional history.",
            pageNumber: 1
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-021",
            documentName: "H&P \u2014 Admission",
            displayName: "H&P \u2014 Admission \u2014 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "PMH: CAD s/p stent, HTN, DM type 2, CKD stage 3. Continue home medications.",
            rationale: "Admission history documenting CAD as part of past medical history.",
            pageNumber: 1
          },
          {
            sourceType: "order",
            sourceId: "mar-010",
            documentName: "MAR",
            displayName: "MAR \u2014 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Aspirin 81mg PO daily \u2014 administered 0800. Atorvastatin 40mg PO QHS \u2014 administered 2100. Metoprolol succinate 25mg PO BID \u2014 administered 0800, 2000.",
            rationale: "Active medications consistent with CAD treatment regimen."
          }
        ],
        keyFindings: [
          "Cardiology consult documents CAD s/p PCI with DES to LAD (2022)",
          "No ICD-10 code for CAD on current problem list",
          "Active CAD medications: aspirin, atorvastatin, metoprolol"
        ]
      },
      diagnosisSummary: 'PCC response is "No" but clinical documentation suggests possible CAD. Cardiology consult from 12/2025 references chronic stable angina and coronary stenting history. No ICD-10 code for CAD on current problem list.',
      treatmentSummary: "Patient on aspirin 81mg daily, atorvastatin 40mg daily, and metoprolol 25mg BID \u2014 consistent with CAD management."
    },
    "I0700": {
      item: {
        mdsItem: "I0700",
        itemName: "Hypertension (HTN)",
        section: "I",
        description: "I0700 \u2014 Has the resident been diagnosed with hypertension?",
        status: "code",
        validation: {
          diagnosisCheck: { passed: true },
          treatmentCheck: { passed: true }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-025",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "HTN stable on current regimen. BP today 138/82. Continue lisinopril and amlodipine. Recheck BP in 2 weeks.",
            rationale: "Physician documentation confirming active hypertension management.",
            pageNumber: 1
          },
          {
            sourceType: "order",
            sourceId: "mar-012",
            documentName: "MAR",
            displayName: "MAR \u2014 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Lisinopril 20mg PO daily \u2014 administered 0800. Amlodipine 5mg PO daily \u2014 administered 0800.",
            rationale: "Active antihypertensive medications on MAR."
          }
        ],
        keyFindings: [
          "Active ICD-10 code I10 on problem list",
          "BP 138/82 on latest vitals \u2014 within target range",
          "Lisinopril 20mg + amlodipine 5mg daily regimen"
        ]
      },
      diagnosisSummary: "Hypertension well documented with active ICD-10 code I10 on problem list. Vital signs and medication regimen confirm active management.",
      treatmentSummary: "Lisinopril 20mg daily, amlodipine 5mg daily. BP monitoring per protocol with parameters documented."
    },
    "I0900": {
      item: {
        mdsItem: "I0900",
        itemName: "Peripheral Vascular Disease (PVD) or Peripheral Arterial Disease (PAD)",
        section: "I",
        description: "I0900 \u2014 Has the resident been diagnosed with peripheral vascular disease (PVD) or peripheral arterial disease (PAD)?",
        status: "needs_physician_query",
        validation: {
          diagnosisCheck: { passed: false },
          treatmentCheck: { passed: true }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-003",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Bilateral lower extremity edema with diminished pedal pulses noted. Continue compression stockings. Monitor for skin breakdown.",
            rationale: "Physical findings consistent with PVD but not definitively diagnosed.",
            pageNumber: 1
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-030",
            documentName: "Nursing Assessment",
            displayName: "Nursing Assessment \u2014 01/25/2026",
            effectiveDate: "2026-01-25",
            quote: "Bilateral pedal edema 2+, feet cool to touch, diminished DP pulses bilaterally. Skin intact, no ulcerations. Compression stockings applied.",
            rationale: "Nursing assessment documenting vascular symptoms needing clinical correlation.",
            pageNumber: 1
          }
        ],
        keyFindings: [
          "Bilateral LE edema with diminished pedal pulses",
          "Symptoms overlap with diabetic neuropathy \u2014 clarification needed",
          "No PVD/PAD ICD-10 code on problem list",
          "Compression stockings ordered but no specific PVD treatment plan"
        ]
      },
      diagnosisSummary: "Documentation is ambiguous. Progress notes describe bilateral lower extremity edema and diminished pedal pulses, but these symptoms could also indicate diabetic neuropathy or venous insufficiency. No definitive PVD/PAD diagnosis on problem list.",
      treatmentSummary: "Compression stockings ordered. Diabetic foot care protocol in place. Vascular checks BID \u2014 but no specific PVD treatment plan."
    },
    "I2000": {
      item: {
        mdsItem: "I2000",
        itemName: "Diabetes Mellitus (DM)",
        section: "I",
        description: "I2000 \u2014 Has the resident been diagnosed with diabetes mellitus (DM)?",
        status: "code",
        validation: {
          diagnosisCheck: { passed: true },
          treatmentCheck: { passed: true }
        },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-006",
            documentName: "Lab Results",
            displayName: "Lab Results \u2014 01/18/2026",
            effectiveDate: "2026-01-18",
            quote: "HbA1c: 8.2%, Fasting glucose: 186 mg/dL. Diabetes management suboptimal \u2014 consider medication adjustment.",
            rationale: "Lab values confirming active diabetes with suboptimal control."
          },
          {
            sourceType: "order",
            sourceId: "mar-001",
            documentName: "MAR",
            displayName: "MAR \u2014 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Metformin 500mg PO BID \u2014 administered 0800, 1800. Blood glucose AC: 0730=168, 1130=142, 1730=195. HS: 2100=156.",
            rationale: "Active diabetic medication and glucose monitoring."
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-025",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "DM type 2 \u2014 HbA1c elevated at 8.2%. Will increase metformin and add sliding scale insulin for glucose >200.",
            rationale: "Physician management of diabetes with medication adjustment.",
            pageNumber: 1
          }
        ],
        keyFindings: [
          "ICD-10 E11.9 on active problem list",
          "HbA1c 8.2% \u2014 suboptimal glycemic control",
          "Metformin 500mg BID + glucose monitoring AC & HS",
          "Physician adjusting regimen \u2014 adding sliding scale insulin"
        ]
      },
      diagnosisSummary: "Type 2 diabetes well documented. ICD-10 E11.9 on active problem list. Lab monitoring and multiple diabetic medications confirm active diagnosis.",
      treatmentSummary: "Metformin 500mg BID, blood glucose monitoring AC & HS, diabetic diet, podiatry consult Q3 months."
    },
    "I5600": {
      item: {
        mdsItem: "I5600",
        itemName: "Malnutrition",
        section: "I",
        description: "I5600 \u2014 Malnutrition (protein or calorie) or at risk for malnutrition.",
        status: "recommend_coding",
        validation: {
          diagnosisCheck: { passed: true },
          treatmentCheck: { passed: true }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-nutr-001",
            documentName: "Nutrition Progress Note",
            displayName: "Nutrition Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Weight Loss: 17 lbs (12.6%) in past 3 months. PO Intake: < 50% meals/est. needs. Moderate protein-calorie malnutrition diagnosed.",
            rationale: "Dietitian assessment documenting malnutrition with objective weight loss and intake data.",
            pageNumber: 2,
            pdfData: {
              filename: "NUTRITION_01_22_36001641.PDF",
              title: "Nutrition Progress Note",
              pages: 2,
              pageContent: {
                1: [
                  { text: "NUTRITION PROGRESS NOTE", highlight: false },
                  { text: "Patient: Doe, Jane", highlight: false },
                  { text: "Date: 01/22/2026", highlight: false },
                  { text: "Dietitian: Sarah Kim, RD, LD", highlight: false },
                  { text: "", highlight: false },
                  { text: "NUTRITIONAL STATUS:", highlight: false },
                  { text: "Current Weight: 118 lbs (53.5 kg)", highlight: false },
                  { text: "Usual Body Weight: 135 lbs (61.2 kg)", highlight: false },
                  { text: "Weight Loss: 17 lbs (12.6%) in past 3 months", highlight: "keyword" },
                  { text: "", highlight: false },
                  { text: "DIETARY INTAKE:", highlight: false },
                  { text: "Ongoing PO Intake: < 50% meals/est. needs", highlight: "keyword" },
                  { text: "Patient reports decreased appetite and early satiety.", highlight: false },
                  { text: "Difficulty with textures due to dysphagia.", highlight: "contextual" }
                ],
                2: [
                  { text: "LABORATORY VALUES:", highlight: false },
                  { text: "Albumin: 2.9 g/dL (Low)", highlight: "keyword" },
                  { text: "Prealbumin: 12 mg/dL (Low)", highlight: "keyword" },
                  { text: "Total Protein: 5.8 g/dL (Low)", highlight: false },
                  { text: "", highlight: false },
                  { text: "MALNUTRITION DIAGNOSIS:", highlight: false },
                  { text: "Moderate protein-calorie malnutrition based on:", highlight: "keyword" },
                  { text: "- Significant unintentional weight loss (>10% in 3 months)", highlight: false },
                  { text: "- Inadequate oral intake (<50% estimated needs)", highlight: false },
                  { text: "- Low albumin and prealbumin", highlight: false },
                  { text: "", highlight: false },
                  { text: "RECOMMENDATIONS:", highlight: false },
                  { text: "1. Fortified foods - pudding, cereal, milk", highlight: false },
                  { text: "2. Ensure Plus BID with meals", highlight: false },
                  { text: "3. Liberalized diet texture per SLP recommendations", highlight: false },
                  { text: "4. Weekly weights", highlight: false },
                  { text: "5. Re-evaluate in 1 week", highlight: false }
                ]
              }
            }
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-nutr-002",
            documentName: "Nutrition Lab Panel",
            displayName: "Nutrition Lab Panel \u2014 01/20/2026",
            effectiveDate: "2026-01-20",
            quote: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low). Low values suggest malnutrition and/or inflammatory state.",
            rationale: "Lab values confirming malnutrition with low albumin and prealbumin.",
            pdfData: {
              filename: "LAB_NUTRITION_01_20_38001789.PDF",
              title: "Nutrition Panel Results",
              pages: 1,
              content: [
                { text: "LABORATORY REPORT", highlight: false },
                { text: "Patient: Doe, Jane", highlight: false },
                { text: "Date Collected: 01/20/2026 06:15", highlight: false },
                { text: "", highlight: false },
                { text: "NUTRITION PANEL:", highlight: false },
                { text: "", highlight: false },
                { text: "Albumin: 2.9 g/dL                    (L) Ref: 3.5-5.0", highlight: "keyword" },
                { text: "Prealbumin: 12 mg/dL                 (L) Ref: 18-38", highlight: "keyword" },
                { text: "Total Protein: 5.8 g/dL              (L) Ref: 6.0-8.3", highlight: false },
                { text: "Transferrin: 165 mg/dL               (L) Ref: 200-360", highlight: false },
                { text: "", highlight: false },
                { text: "Note: Low albumin and prealbumin suggest malnutrition", highlight: "keyword" },
                { text: "and/or inflammatory state. Clinical correlation advised.", highlight: false }
              ]
            }
          },
          {
            sourceType: "order",
            sourceId: "doc-nutr-004",
            documentName: "MAR - Ensure Plus",
            displayName: "MAR \u2014 Ensure Plus 8oz BID \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Ensure Plus 8oz BID with meals for nutritional supplementation",
            rationale: "Oral nutrition supplement order supports malnutrition diagnosis and active treatment.",
            marData: {
              medication: "Ensure Plus 8 OZ Oral Liquid",
              route: "ORAL",
              instructions: "Give 8 oz Ensure Plus by mouth twice daily with lunch and dinner for nutritional supplementation and malnutrition treatment",
              frequency: "BID with meals",
              dateRange: { start: "2026-01-22", end: "2026-01-28" },
              administrations: [
                { date: "2026-01-22", time: "Lunch", status: "given" },
                { date: "2026-01-22", time: "Dinner", status: "given" },
                { date: "2026-01-23", time: "Lunch", status: "given" },
                { date: "2026-01-23", time: "Dinner", status: "refused" },
                { date: "2026-01-24", time: "Lunch", status: "given" },
                { date: "2026-01-24", time: "Dinner", status: "given" },
                { date: "2026-01-25", time: "Lunch", status: "given" },
                { date: "2026-01-25", time: "Dinner", status: "given" },
                { date: "2026-01-26", time: "Lunch", status: "given" },
                { date: "2026-01-26", time: "Dinner", status: "refused" },
                { date: "2026-01-27", time: "Lunch", status: "given" },
                { date: "2026-01-27", time: "Dinner", status: "given" },
                { date: "2026-01-28", time: "Lunch", status: "given" },
                { date: "2026-01-28", time: "Dinner", status: "given" }
              ]
            }
          },
          {
            sourceType: "order",
            sourceId: "doc-nutr-003",
            documentName: "MAR - Fortified Cereal",
            displayName: "MAR \u2014 Fortified Cereal 6oz QD \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Fortified Cereal 6 oz QD to increase caloric and protein intake",
            rationale: "Nutrition intervention order for fortified foods supports malnutrition treatment.",
            marData: {
              medication: "Fortified Cereal 6 OZ",
              route: "ORAL",
              instructions: "Give 6 oz fortified cereal by mouth once daily to increase caloric and protein intake for malnutrition",
              frequency: "Daily with breakfast",
              dateRange: { start: "2026-01-22", end: "2026-01-28" },
              administrations: [
                { date: "2026-01-22", time: "Breakfast", status: "given" },
                { date: "2026-01-23", time: "Breakfast", status: "given" },
                { date: "2026-01-24", time: "Breakfast", status: "given" },
                { date: "2026-01-25", time: "Breakfast", status: "refused" },
                { date: "2026-01-26", time: "Breakfast", status: "given" },
                { date: "2026-01-27", time: "Breakfast", status: "given" },
                { date: "2026-01-28", time: "Breakfast", status: "given" }
              ]
            }
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-nutr-006",
            documentName: "Weight Monitoring Flow Sheet",
            displayName: "Weight Monitoring \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Weight trend: 135 lbs \u2192 128 lbs \u2192 118 lbs. Total loss: 17 lbs (12.6%). >10% in 3 months = SEVERE weight loss.",
            rationale: "Nursing documentation of progressive weight loss meeting malnutrition criteria.",
            pdfData: {
              filename: "NURSING_WEIGHTS_01_22_38001945.PDF",
              title: "Weight Monitoring Flow Sheet",
              pages: 1,
              content: [
                { text: "WEIGHT MONITORING - 3 MONTH TREND", highlight: false },
                { text: "Patient: Doe, Jane", highlight: false },
                { text: "Date: 01/22/2026", highlight: false },
                { text: "", highlight: false },
                { text: "WEIGHT HISTORY:", highlight: false },
                { text: "10/22/2025: 135.0 lbs (Usual body weight)", highlight: false },
                { text: "11/15/2025: 132.5 lbs (-2.5 lbs)", highlight: false },
                { text: "12/20/2025: 128.0 lbs (-7.0 lbs from usual)", highlight: "keyword" },
                { text: "01/15/2026: 120.5 lbs (-14.5 lbs from usual)", highlight: "keyword" },
                { text: "01/22/2026: 118.0 lbs (-17.0 lbs from usual)", highlight: "keyword" },
                { text: "", highlight: false },
                { text: "WEIGHT LOSS PERCENTAGE:", highlight: false },
                { text: "Total Loss: 17 lbs over 3 months", highlight: "keyword" },
                { text: "Percentage: 12.6% of usual body weight", highlight: "keyword" },
                { text: "", highlight: false },
                { text: "SIGNIFICANCE:", highlight: false },
                { text: ">10% weight loss in 3 months = SEVERE weight loss", highlight: "keyword" },
                { text: "Meets criteria for malnutrition diagnosis", highlight: "keyword" },
                { text: "", highlight: false },
                { text: "INTERVENTIONS INITIATED:", highlight: false },
                { text: "- Dietary consult completed", highlight: false },
                { text: "- Nutritional supplements ordered", highlight: false },
                { text: "- Weekly weight monitoring ongoing", highlight: false }
              ]
            }
          }
        ],
        keyFindings: [
          "Weight loss 12.6% (17 lbs) in 3 months \u2014 meets severe weight loss criteria",
          "Albumin 2.9 g/dL and Prealbumin 12 mg/dL \u2014 both below normal",
          "PO intake <50% of estimated needs documented by dietitian",
          "Ensure Plus BID and fortified cereal QD ordered as interventions",
          "No malnutrition ICD-10 code on active problem list"
        ],
        recommendedIcd10: [
          { code: "E44.0", description: "Moderate protein-calorie malnutrition" },
          { code: "E46", description: "Unspecified protein-calorie malnutrition" }
        ]
      },
      diagnosisSummary: "Nutrition assessment from 1/22 documents moderate protein-calorie malnutrition: 12.6% weight loss in 3 months, PO intake <50%, albumin 2.9, prealbumin 12. No malnutrition ICD-10 code on active problem list.",
      treatmentSummary: "Ensure Plus 8oz BID, fortified cereal 6oz QD, pureed diet with nectar thick liquids, weekly weights, dietitian follow-up."
    },
    "I4300": {
      item: {
        mdsItem: "I4300",
        itemName: "Diabetes Mellitus with Peripheral Vascular Disease",
        section: "I",
        description: "Active diagnosis of Diabetes Mellitus combined with Peripheral Vascular Disease.",
        status: "needs_physician_query",
        validation: {
          diagnosisCheck: { passed: true },
          treatmentCheck: { passed: true }
        },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-006",
            documentName: "Lab Results",
            displayName: "Lab Results \u2014 01/18/2026",
            effectiveDate: "2026-01-18",
            quote: "HbA1c: 8.2%, Fasting glucose: 186 mg/dL, GFR: 42, Creatinine: 1.8",
            rationale: "Lab values confirming uncontrolled diabetes with renal involvement."
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-003",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Bilateral lower extremity edema with diminished pedal pulses noted. Continue diabetic foot care protocol. Compression stockings ordered.",
            rationale: "Physician documentation of peripheral vascular disease symptoms.",
            pageNumber: 1
          },
          {
            sourceType: "order",
            sourceId: "mar-001",
            documentName: "MAR",
            displayName: "MAR \u2014 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Metformin 500mg PO BID \u2014 administered 0800, 1800",
            rationale: "Active diabetes medication administration."
          }
        ],
        keyFindings: [
          "DM well documented with HbA1c 8.2%",
          "PVD symptoms noted but no specific ICD-10 on problem list",
          "Metformin 500mg BID + vascular checks per protocol"
        ]
      },
      diagnosisSummary: "Diabetes well documented with medications and lab monitoring. PVD symptoms noted in progress notes but no specific ICD-10 code on problem list.",
      treatmentSummary: "Metformin 500mg BID, blood glucose monitoring AC & HS, vascular checks per protocol."
    },
    "O0400A3": {
      item: {
        mdsItem: "O0400A3",
        itemName: "IV Medications",
        section: "O",
        description: "IV Medications \u2014 received any type of IV medications during the lookback period.",
        status: "code",
        rationale: "Vancomycin 1g IV Q12H administered during lookback period for suspected cellulitis.",
        evidence: [
          {
            sourceType: "order",
            sourceId: "mar-002",
            documentName: "MAR",
            displayName: "MAR \u2014 01/13/2026",
            effectiveDate: "2026-01-13",
            quote: "Vancomycin 1g IV Q12H \u2014 administered 1/12 2200, 1/13 1000, 1/13 2200",
            rationale: "IV medication administration documented in MAR during lookback period."
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-003",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/12/2026",
            effectiveDate: "2026-01-12",
            quote: "Started Vancomycin IV for suspected cellulitis. Monitor labs and clinical response.",
            rationale: "Physician order for IV antibiotic corroborating MAR records.",
            pageNumber: 1
          }
        ]
      },
      diagnosisSummary: null,
      treatmentSummary: "Vancomycin 1g IV Q12H administered during lookback period for suspected infection."
    },
    "I2900": {
      item: {
        mdsItem: "I2900",
        itemName: "Drug/Medication Induced Depression",
        section: "I",
        description: "Drug or medication-induced depression \u2014 depression caused by or associated with medication side effects.",
        status: "dont_code",
        validation: {
          diagnosisCheck: { passed: false },
          treatmentCheck: { passed: false }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-007",
            documentName: "Nursing Assessment",
            displayName: "Nursing Assessment \u2014 01/25/2026",
            effectiveDate: "2026-01-25",
            quote: 'Patient reports feeling down and having little interest in activities. Declined recreational therapy today. States she "just wants to rest."',
            rationale: "Nursing documentation of depressive symptoms.",
            pageNumber: 1
          }
        ],
        keyFindings: [
          "PHQ-9 not completed during lookback period",
          "Beta-blockers and opioids on profile \u2014 depressive side effects possible",
          "Nursing notes mention low mood and decreased activity"
        ]
      },
      diagnosisSummary: "PHQ-9 not completed during lookback period. Multiple medications on profile (beta-blockers, opioids) associated with depressive side effects. Nursing notes mention low mood.",
      treatmentSummary: "No active antidepressant therapy. No mental health referral on file."
    },
    "I5100": {
      item: {
        mdsItem: "I5100",
        itemName: "Hemiplegia/Hemiparesis",
        section: "I",
        description: "Hemiplegia or hemiparesis \u2014 paralysis or weakness affecting one side of the body.",
        status: "code",
        validation: {
          diagnosisCheck: { passed: true },
          treatmentCheck: { passed: true }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-010",
            documentName: "PT Evaluation",
            displayName: "PT Evaluation \u2014 01/06/2026",
            effectiveDate: "2026-01-06",
            quote: "Left-sided hemiparesis with 2/5 strength in left upper and lower extremities. Requires max assist for transfers and ambulation.",
            rationale: "PT evaluation documenting hemiparesis severity and functional impact.",
            pageNumber: 1
          }
        ],
        keyFindings: [
          "Left hemiparesis following CVA \u2014 well documented",
          "2/5 strength left UE and LE",
          "PT 5x/week + OT 5x/week for functional mobility"
        ]
      },
      diagnosisSummary: "Left hemiparesis following CVA well documented across PT, OT, and physician notes.",
      treatmentSummary: "Receiving PT 5x/week and OT 5x/week for functional mobility and ADL training."
    },
    "K0510A": {
      item: {
        mdsItem: "K0510A",
        itemName: "Parenteral/IV Feeding",
        section: "K",
        description: "Parenteral or IV feeding received during the lookback period.",
        status: "code",
        rationale: "IV fluids (D5 1/2NS) administered during lookback period for hydration management.",
        evidence: [
          {
            sourceType: "order",
            sourceId: "mar-003",
            documentName: "MAR",
            displayName: "MAR \u2014 01/08/2026",
            effectiveDate: "2026-01-08",
            quote: "D5 1/2NS 1000ml IV at 75ml/hr \u2014 running continuously",
            rationale: "Active IV fluid administration documented in MAR."
          }
        ]
      },
      diagnosisSummary: null,
      treatmentSummary: "IV fluids (D5 1/2NS) administered during lookback period for hydration management."
    },
    // ── Section I items with no existing detail (populated for demo) ──
    "I0100": {
      item: {
        mdsItem: "I0100",
        itemName: "Cancer",
        section: "I",
        description: "I0100 \u2014 Does the resident have a current or active diagnosis of cancer?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-040",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "No active cancer diagnosis. History of basal cell carcinoma excised 2019, no recurrence. Last dermatology follow-up 6/2025 \u2014 clear.",
            rationale: "Physician documentation confirming no active cancer.",
            pageNumber: 1
          }
        ],
        keyFindings: ["History of BCC excised 2019 \u2014 no recurrence", "Dermatology follow-up clear 06/2025"]
      },
      diagnosisSummary: "No active cancer diagnosis found. History of basal cell carcinoma excised in 2019 with no recurrence documented.",
      treatmentSummary: "No active cancer treatment. Routine dermatology follow-up only."
    },
    "I0200": {
      item: {
        mdsItem: "I0200",
        itemName: "Anemia",
        section: "I",
        description: "I0200 \u2014 Does the resident have a current diagnosis of anemia (e.g., iron deficiency, B12, folate)?",
        status: "code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-041",
            documentName: "Lab Results",
            displayName: "Lab Results \u2014 01/15/2026",
            effectiveDate: "2026-01-15",
            quote: "Hemoglobin: 9.8 g/dL (L), Hematocrit: 29.4% (L), MCV: 76 fL (L), Ferritin: 12 ng/mL (L). Iron deficiency anemia.",
            rationale: "Lab values consistent with iron deficiency anemia."
          },
          {
            sourceType: "order",
            sourceId: "mar-041",
            documentName: "MAR",
            displayName: "MAR \u2014 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Ferrous sulfate 325mg PO TID \u2014 administered 0800, 1200, 1800.",
            rationale: "Active iron supplementation for anemia treatment."
          }
        ],
        keyFindings: ["Hgb 9.8, Hct 29.4%, Ferritin 12 \u2014 iron deficiency anemia", "Ferrous sulfate 325mg TID active on MAR"]
      },
      diagnosisSummary: "Iron deficiency anemia documented with ICD-10 D50.9. Lab values confirm: Hgb 9.8, Ferritin 12.",
      treatmentSummary: "Ferrous sulfate 325mg TID. Follow-up labs ordered in 4 weeks."
    },
    "I0300": {
      item: {
        mdsItem: "I0300",
        itemName: "Atrial Fibrillation or Other Dysrhythmias",
        section: "I",
        description: "I0300 \u2014 Does the resident have atrial fibrillation or other dysrhythmias?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-042",
            documentName: "Cardiology Consult",
            displayName: "Cardiology Consult \u2014 12/18/2025",
            effectiveDate: "2025-12-18",
            quote: "Normal sinus rhythm on 12-lead ECG. No history of atrial fibrillation or other dysrhythmias. Holter monitor 2025 showed no significant arrhythmias.",
            rationale: "Cardiology documentation confirming no dysrhythmia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Normal sinus rhythm on ECG", "Holter monitor 2025 \u2014 no arrhythmias"]
      },
      diagnosisSummary: "No atrial fibrillation or dysrhythmia documented. ECG shows normal sinus rhythm. Holter monitor negative.",
      treatmentSummary: "No antiarrhythmic therapy required."
    },
    "I0500": {
      item: {
        mdsItem: "I0500",
        itemName: "Deep Venous Thrombosis (DVT)",
        section: "I",
        description: "I0500 \u2014 Does the resident have a current diagnosis of deep venous thrombosis (DVT)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-043",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "No history of DVT or PE. Lower extremity edema attributed to venous insufficiency, not thrombotic. Duplex ultrasound 11/2025 negative for DVT.",
            rationale: "Physician documentation ruling out DVT.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Duplex US 11/2025 negative for DVT", "LE edema attributed to venous insufficiency"]
      },
      diagnosisSummary: "No DVT documented. Duplex ultrasound 11/2025 negative. Lower extremity edema from venous insufficiency.",
      treatmentSummary: "No anticoagulation for DVT. Compression stockings for venous insufficiency only."
    },
    "I0600": {
      item: {
        mdsItem: "I0600",
        itemName: "Heart Failure",
        section: "I",
        description: "I0600 \u2014 Does the resident have heart failure (e.g., CHF, pulmonary edema)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-044",
            documentName: "Cardiology Consult",
            displayName: "Cardiology Consult \u2014 12/18/2025",
            effectiveDate: "2025-12-18",
            quote: "Echocardiogram 12/2025: LVEF 58%, no wall motion abnormalities, no valvular disease. No clinical evidence of heart failure.",
            rationale: "Cardiology evaluation ruling out heart failure.",
            pageNumber: 2
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-045",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "No signs of fluid overload. Lungs clear bilaterally. No peripheral edema concerning for CHF. BNP 45 pg/mL (normal).",
            rationale: "Physical exam and labs ruling out heart failure.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Echo LVEF 58% \u2014 normal", "BNP 45 pg/mL \u2014 normal", "No signs of fluid overload"]
      },
      diagnosisSummary: "No heart failure documented. Echo shows preserved EF at 58%. BNP within normal limits.",
      treatmentSummary: "No heart failure therapy. Current cardiac medications for HTN/CAD only."
    },
    "I0800": {
      item: {
        mdsItem: "I0800",
        itemName: "Orthostatic Hypotension",
        section: "I",
        description: "I0800 \u2014 Does the resident have orthostatic hypotension?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-046",
            documentName: "Nursing Assessment",
            displayName: "Nursing Assessment \u2014 01/25/2026",
            effectiveDate: "2026-01-25",
            quote: "Orthostatic vitals: Supine 134/80, Standing 128/76 (1 min), 130/78 (3 min). No dizziness or lightheadedness reported. Negative orthostatic screen.",
            rationale: "Nursing assessment with negative orthostatic vitals.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Orthostatic vitals negative \u2014 no significant BP drop", "No symptoms of dizziness on standing"]
      },
      diagnosisSummary: "No orthostatic hypotension documented. Orthostatic vital signs within normal parameters.",
      treatmentSummary: "No specific orthostatic hypotension treatment. Fall precautions in place for general safety."
    },
    "I1100": {
      item: {
        mdsItem: "I1100",
        itemName: "Cirrhosis",
        section: "I",
        description: "I1100 \u2014 Does the resident have cirrhosis?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-047",
            documentName: "Lab Results",
            displayName: "Lab Results \u2014 01/15/2026",
            effectiveDate: "2026-01-15",
            quote: "LFTs: AST 28 U/L (normal), ALT 22 U/L (normal), Albumin 3.8 g/dL (normal), Total bilirubin 0.9 mg/dL (normal). No evidence of hepatic dysfunction.",
            rationale: "Normal liver function tests ruling out cirrhosis."
          }
        ],
        keyFindings: ["LFTs all within normal limits", "No hepatic dysfunction documented"]
      },
      diagnosisSummary: "No cirrhosis documented. Liver function tests all within normal range.",
      treatmentSummary: "No hepatic disease management required."
    },
    "I1200": {
      item: {
        mdsItem: "I1200",
        itemName: "GERD",
        section: "I",
        description: "I1200 \u2014 Does the resident have gastroesophageal reflux disease (GERD)?",
        status: "code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-048",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "GERD well controlled on current PPI. No breakthrough symptoms. Continue omeprazole 20mg daily.",
            rationale: "Physician documentation of active GERD with treatment.",
            pageNumber: 1
          },
          {
            sourceType: "order",
            sourceId: "mar-048",
            documentName: "MAR",
            displayName: "MAR \u2014 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Omeprazole 20mg PO daily \u2014 administered 0730 (30 min before breakfast).",
            rationale: "Active PPI therapy for GERD."
          }
        ],
        keyFindings: ["GERD on active problem list with ICD-10 K21.0", "Omeprazole 20mg daily \u2014 well controlled"]
      },
      diagnosisSummary: "GERD well documented on problem list. Active PPI therapy with good symptom control.",
      treatmentSummary: "Omeprazole 20mg daily. Dietary modifications \u2014 elevated HOB, no late meals."
    },
    "I2100": {
      item: {
        mdsItem: "I2100",
        itemName: "Thyroid Disorder",
        section: "I",
        description: "I2100 \u2014 Does the resident have a thyroid disorder (e.g., hypothyroidism, hyperthyroidism)?",
        status: "code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-049",
            documentName: "Lab Results",
            displayName: "Lab Results \u2014 01/15/2026",
            effectiveDate: "2026-01-15",
            quote: "TSH: 6.8 mIU/L (H), Free T4: 0.7 ng/dL (L-normal). Subclinical hypothyroidism on levothyroxine therapy.",
            rationale: "Lab values confirming hypothyroidism under treatment."
          },
          {
            sourceType: "order",
            sourceId: "mar-049",
            documentName: "MAR",
            displayName: "MAR \u2014 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Levothyroxine 75mcg PO daily \u2014 administered 0630 (on empty stomach, 30 min before food).",
            rationale: "Active thyroid replacement therapy."
          }
        ],
        keyFindings: ["TSH 6.8 \u2014 suboptimally controlled hypothyroidism", "Levothyroxine 75mcg daily active on MAR"]
      },
      diagnosisSummary: "Hypothyroidism documented with ICD-10 E03.9. TSH 6.8 on latest labs \u2014 dose adjustment may be needed.",
      treatmentSummary: "Levothyroxine 75mcg daily. TSH recheck ordered in 6 weeks."
    },
    "I2300": {
      item: {
        mdsItem: "I2300",
        itemName: "Hyperglycemia",
        section: "I",
        description: "I2300 \u2014 Does the resident have hyperglycemia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-050",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Blood glucose elevations are attributed to known diabetes mellitus (I2000), not a separate hyperglycemia diagnosis. Covered under DM management plan.",
            rationale: "Glucose elevations accounted for under DM diagnosis.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Glucose elevations managed under DM (I2000)", "No separate hyperglycemia diagnosis"]
      },
      diagnosisSummary: "No separate hyperglycemia diagnosis. Blood glucose elevations managed under diabetes mellitus (I2000).",
      treatmentSummary: "Glucose management covered under DM treatment plan \u2014 metformin, sliding scale, monitoring."
    },
    "I4200": {
      item: {
        mdsItem: "I4200",
        itemName: "Multi-Drug Resistant Organism (MDRO)",
        section: "I",
        description: "I4200 \u2014 Does the resident have an infection with a multi-drug resistant organism (MDRO)?",
        status: "code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-051",
            documentName: "Microbiology Report",
            displayName: "Microbiology Report \u2014 01/10/2026",
            effectiveDate: "2026-01-10",
            quote: "Urine culture: E. coli >100,000 CFU/mL. ESBL-producing. Resistant to ampicillin, ciprofloxacin, TMP-SMX. Sensitive to meropenem, nitrofurantoin.",
            rationale: "Culture confirming ESBL-producing E. coli \u2014 qualifies as MDRO."
          },
          {
            sourceType: "order",
            sourceId: "mar-051",
            documentName: "MAR",
            displayName: "MAR \u2014 01/12/2026",
            effectiveDate: "2026-01-12",
            quote: "Nitrofurantoin 100mg PO BID x 7 days \u2014 started 01/12. Contact precautions initiated per infection control protocol.",
            rationale: "Active antibiotic treatment for MDRO infection."
          }
        ],
        keyFindings: ["ESBL-producing E. coli in urine culture", "Contact precautions initiated", "Treated with nitrofurantoin 100mg BID"]
      },
      diagnosisSummary: "MDRO infection documented: ESBL-producing E. coli UTI confirmed by culture 01/10/2026.",
      treatmentSummary: "Nitrofurantoin 100mg BID x 7 days. Contact precautions per infection control protocol."
    },
    "I4400": {
      item: {
        mdsItem: "I4400",
        itemName: "Pneumonia",
        section: "I",
        description: "I4400 \u2014 Does the resident have pneumonia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-052",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Lungs clear to auscultation bilaterally. No cough, fever, or respiratory distress. Chest X-ray 01/05 \u2014 no infiltrates. No active pneumonia.",
            rationale: "Clinical exam and imaging ruling out pneumonia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Lungs CTA bilaterally", "CXR 01/05 \u2014 no infiltrates", "No respiratory symptoms"]
      },
      diagnosisSummary: "No pneumonia documented. Chest X-ray clear, lungs clear on exam, no respiratory symptoms.",
      treatmentSummary: "No pneumonia treatment. Pneumococcal and influenza vaccines up to date."
    },
    "I4500": {
      item: {
        mdsItem: "I4500",
        itemName: "Septicemia",
        section: "I",
        description: "I4500 \u2014 Does the resident have septicemia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-053",
            documentName: "Lab Results",
            displayName: "Lab Results \u2014 01/15/2026",
            effectiveDate: "2026-01-15",
            quote: "WBC: 7.2 (normal), Lactate: 1.1 mmol/L (normal), Procalcitonin: 0.04 ng/mL (normal). Blood cultures 01/10 \u2014 no growth at 5 days.",
            rationale: "Labs and cultures ruling out septicemia."
          }
        ],
        keyFindings: ["Blood cultures negative at 5 days", "WBC, lactate, procalcitonin all normal"]
      },
      diagnosisSummary: "No septicemia documented. Blood cultures negative, inflammatory markers normal.",
      treatmentSummary: "No sepsis treatment. UTI treated with targeted antibiotics only."
    },
    "I4900": {
      item: {
        mdsItem: "I4900",
        itemName: "Schizophrenia",
        section: "I",
        description: "I4900 \u2014 Does the resident have schizophrenia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-054",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation \u2014 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "No history of schizophrenia or psychotic disorders. Psychiatric review of systems negative for hallucinations, delusions, or disorganized thinking.",
            rationale: "Psychiatric evaluation confirming no schizophrenia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Psychiatric evaluation negative for psychotic disorders", "No antipsychotic medications on profile"]
      },
      diagnosisSummary: "No schizophrenia documented. Psychiatric evaluation negative for psychotic symptoms.",
      treatmentSummary: "No antipsychotic medications prescribed."
    },
    "I5200": {
      item: {
        mdsItem: "I5200",
        itemName: "Paraplegia",
        section: "I",
        description: "I5200 \u2014 Does the resident have paraplegia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-055",
            documentName: "PT Evaluation",
            displayName: "PT Evaluation \u2014 01/06/2026",
            effectiveDate: "2026-01-06",
            quote: "Left hemiparesis noted (see I5100) but bilateral lower extremity function preserved. Patient ambulates with rolling walker and min assist. No paraplegia.",
            rationale: "PT evaluation confirming no paraplegia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Bilateral LE function preserved", "Ambulates with walker and min assist"]
      },
      diagnosisSummary: "No paraplegia documented. Left hemiparesis (I5100) but both lower extremities functional.",
      treatmentSummary: "PT 5x/week for mobility. No paraplegia-specific treatment needed."
    },
    "I5250": {
      item: {
        mdsItem: "I5250",
        itemName: "Quadriplegia",
        section: "I",
        description: "I5250 \u2014 Does the resident have quadriplegia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-056",
            documentName: "PT Evaluation",
            displayName: "PT Evaluation \u2014 01/06/2026",
            effectiveDate: "2026-01-06",
            quote: "Right upper and lower extremities with full strength 5/5. Left-sided weakness 2-3/5 from CVA. No quadriplegia \u2014 functional use of right side.",
            rationale: "PT documentation ruling out quadriplegia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Right side full strength 5/5", "Left side weakness from CVA only \u2014 not quadriplegia"]
      },
      diagnosisSummary: "No quadriplegia documented. Right-sided extremities with full strength. Left hemiparesis only.",
      treatmentSummary: "No quadriplegia-specific interventions. PT/OT for left-sided weakness."
    },
    "I5300": {
      item: {
        mdsItem: "I5300",
        itemName: "Aphasia",
        section: "I",
        description: "I5300 \u2014 Does the resident have aphasia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-057",
            documentName: "SLP Evaluation",
            displayName: "SLP Evaluation \u2014 01/20/2026",
            effectiveDate: "2026-01-20",
            quote: "No aphasia documented. Communication intact. Swallowing evaluation only \u2014 dysphagia noted but language function preserved.",
            rationale: "SLP evaluation found no aphasia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["No aphasia documented in clinical records", "Communication abilities intact per SLP evaluation"]
      },
      diagnosisSummary: "No aphasia documented. SLP evaluation focused on swallowing/dysphagia only.",
      treatmentSummary: "No aphasia-specific therapy. SLP treating dysphagia only."
    },
    "I5350": {
      item: {
        mdsItem: "I5350",
        itemName: "Non-Alzheimer Dementia",
        section: "I",
        description: "I5350 \u2014 Does the resident have non-Alzheimer dementia (e.g., vascular, Lewy body)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-058",
            documentName: "Neurology Consult",
            displayName: "Neurology Consult \u2014 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "MMSE 22/30 \u2014 mild cognitive impairment likely related to CVA sequelae. Does not meet criteria for dementia diagnosis at this time. Monitor and reassess in 3 months.",
            rationale: "Neurology evaluation \u2014 cognitive impairment from CVA but not dementia.",
            pageNumber: 2
          }
        ],
        keyFindings: ["MMSE 22/30 \u2014 mild cognitive impairment", "CVA-related, not dementia per neurology", "Reassess in 3 months"]
      },
      diagnosisSummary: "No non-Alzheimer dementia documented. Mild cognitive impairment from CVA \u2014 does not meet dementia criteria per neurology.",
      treatmentSummary: "Cognitive stimulation activities. Neurology follow-up in 3 months for reassessment."
    },
    "I5400": {
      item: {
        mdsItem: "I5400",
        itemName: "Alzheimer Disease",
        section: "I",
        description: "I5400 \u2014 Does the resident have Alzheimer disease?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-059",
            documentName: "Neurology Consult",
            displayName: "Neurology Consult \u2014 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "No clinical features suggestive of Alzheimer disease. Cognitive changes are acute post-CVA, not progressive degenerative pattern. No cholinesterase inhibitors indicated.",
            rationale: "Neurology ruling out Alzheimer disease.",
            pageNumber: 2
          }
        ],
        keyFindings: ["Cognitive changes acute post-CVA, not progressive", "No Alzheimer features per neurology"]
      },
      diagnosisSummary: "No Alzheimer disease documented. Cognitive impairment attributed to CVA, not neurodegenerative disease.",
      treatmentSummary: "No Alzheimer-specific medications. No cholinesterase inhibitors or memantine."
    },
    "I5500": {
      item: {
        mdsItem: "I5500",
        itemName: "Multiple Sclerosis",
        section: "I",
        description: "I5500 \u2014 Does the resident have multiple sclerosis (MS)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-060",
            documentName: "Neurology Consult",
            displayName: "Neurology Consult \u2014 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "No history of multiple sclerosis. Left-sided weakness is consistent with ischemic stroke, not demyelinating disease. MRI brain shows old infarct, no white matter lesions.",
            rationale: "Neurology ruling out MS \u2014 findings consistent with stroke.",
            pageNumber: 3
          }
        ],
        keyFindings: ["MRI \u2014 old infarct, no MS-type white matter lesions", "Weakness from stroke, not demyelination"]
      },
      diagnosisSummary: "No multiple sclerosis documented. MRI shows old infarct only, no demyelinating lesions.",
      treatmentSummary: "No MS disease-modifying therapy. Neurological deficits managed as CVA sequelae."
    },
    "I5700": {
      item: {
        mdsItem: "I5700",
        itemName: "Schizophrenia (Section I)",
        section: "I",
        description: "I5700 \u2014 Does the resident have schizophrenia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-061",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation \u2014 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "No history or symptoms of schizophrenia. See I4900 evaluation. Mental status exam: oriented x3, no psychotic features, thought process linear and goal-directed.",
            rationale: "Psychiatric evaluation negative for schizophrenia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["No psychotic features on mental status exam", "Thought process linear and goal-directed"]
      },
      diagnosisSummary: "No schizophrenia. Psychiatric evaluation negative \u2014 no psychotic symptoms.",
      treatmentSummary: "No antipsychotic medications. No psychiatric treatment for psychosis."
    },
    "I5800": {
      item: {
        mdsItem: "I5800",
        itemName: "Anxiety Disorder",
        section: "I",
        description: "I5800 \u2014 Does the resident have an anxiety disorder?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-062",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation \u2014 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "GAD-7 score: 4 (minimal anxiety). Patient reports occasional worry about health but no panic attacks, avoidance behaviors, or functional impairment from anxiety.",
            rationale: "Psychiatric screening negative for anxiety disorder.",
            pageNumber: 1
          }
        ],
        keyFindings: ["GAD-7 score 4 \u2014 minimal anxiety", "No panic attacks or avoidance behaviors"]
      },
      diagnosisSummary: "No anxiety disorder documented. GAD-7 score 4 \u2014 minimal, subclinical anxiety only.",
      treatmentSummary: "No anxiolytic medications. Supportive counseling available PRN."
    },
    "I5900": {
      item: {
        mdsItem: "I5900",
        itemName: "PTSD",
        section: "I",
        description: "I5900 \u2014 Does the resident have post-traumatic stress disorder (PTSD)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-063",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation \u2014 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "No history of PTSD. Patient denies traumatic experiences, nightmares, flashbacks, or hypervigilance. PC-PTSD-5 screen negative.",
            rationale: "PTSD screening negative.",
            pageNumber: 2
          }
        ],
        keyFindings: ["PC-PTSD-5 screen negative", "No trauma history, nightmares, or flashbacks"]
      },
      diagnosisSummary: "No PTSD documented. Screening negative \u2014 no traumatic stress symptoms.",
      treatmentSummary: "No PTSD-specific treatment or trauma-focused therapy."
    },
    "I5950": {
      item: {
        mdsItem: "I5950",
        itemName: "Psychotic Disorder",
        section: "I",
        description: "I5950 \u2014 Does the resident have a psychotic disorder (other than schizophrenia)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-064",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation \u2014 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "No psychotic features identified. No hallucinations (auditory or visual), no delusions, no disorganized speech. Reality testing intact.",
            rationale: "Psychiatric evaluation ruling out psychotic disorder.",
            pageNumber: 1
          }
        ],
        keyFindings: ["No hallucinations or delusions", "Reality testing intact"]
      },
      diagnosisSummary: "No psychotic disorder documented. Psychiatric evaluation \u2014 no hallucinations, delusions, or disorganized thinking.",
      treatmentSummary: "No antipsychotic medications. No psychosis treatment."
    },
    "I6000": {
      item: {
        mdsItem: "I6000",
        itemName: "Asthma / COPD / Chronic Lung Disease",
        section: "I",
        description: "I6000 \u2014 Does the resident have asthma, COPD, or chronic lung disease?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-065",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Lungs clear to auscultation bilaterally. No wheezing, rhonchi, or prolonged expiratory phase. No history of asthma, COPD, or chronic lung disease. SpO2 97% on room air.",
            rationale: "Clinical exam negative for chronic lung disease.",
            pageNumber: 1
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-066",
            documentName: "Chest X-Ray Report",
            displayName: "Chest X-Ray \u2014 01/05/2026",
            effectiveDate: "2026-01-05",
            quote: "Lungs clear bilaterally. No hyperinflation. Normal cardiac silhouette. No pleural effusion.",
            rationale: "Chest imaging with no evidence of chronic lung disease."
          }
        ],
        keyFindings: ["Lungs CTA \u2014 no wheezing or rhonchi", "SpO2 97% on room air", "CXR \u2014 no hyperinflation or chronic changes"]
      },
      diagnosisSummary: "No asthma, COPD, or chronic lung disease documented. Lungs clear, SpO2 97%, imaging normal.",
      treatmentSummary: "No bronchodilators or inhaled corticosteroids. No supplemental oxygen."
    },
    "I6100": {
      item: {
        mdsItem: "I6100",
        itemName: "Respiratory Failure",
        section: "I",
        description: "I6100 \u2014 Does the resident have respiratory failure?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-067",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Respiratory status stable. SpO2 97% on room air. No supplemental oxygen required. ABG not indicated \u2014 no clinical concern for respiratory failure.",
            rationale: "Clinical assessment ruling out respiratory failure.",
            pageNumber: 1
          }
        ],
        keyFindings: ["SpO2 97% on room air \u2014 no supplemental O2", "No respiratory distress or failure"]
      },
      diagnosisSummary: "No respiratory failure documented. Oxygenation adequate on room air.",
      treatmentSummary: "No supplemental oxygen. No respiratory support devices."
    },
    "I6200": {
      item: {
        mdsItem: "I6200",
        itemName: "None of the Above (Respiratory)",
        section: "I",
        description: "I6200 \u2014 None of the above respiratory conditions.",
        status: "dont_code",
        evidence: [],
        rationale: "No respiratory conditions identified in I6000-I6100. This is a confirmation item."
      },
      diagnosisSummary: null,
      treatmentSummary: null
    },
    "I6300": {
      item: {
        mdsItem: "I6300",
        itemName: "None of the Above (Additional)",
        section: "I",
        description: "I6300 \u2014 None of the above additional conditions.",
        status: "dont_code",
        evidence: [],
        rationale: "Confirmation item \u2014 no additional conditions in this category."
      },
      diagnosisSummary: null,
      treatmentSummary: null
    },
    "I6500": {
      item: {
        mdsItem: "I6500",
        itemName: "Seizure Disorder / Epilepsy",
        section: "I",
        description: "I6500 \u2014 Does the resident have a seizure disorder or epilepsy?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: true }, treatmentCheck: { passed: true } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-068",
            documentName: "Neurology Consult",
            displayName: "Neurology Consult \u2014 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "No seizure history. Post-CVA prophylactic seizure medication not indicated per current guidelines. EEG not required. No witnessed seizure activity.",
            rationale: "Neurology evaluation confirming no seizure disorder.",
            pageNumber: 3
          }
        ],
        keyFindings: ["No seizure history", "No prophylactic anticonvulsants indicated post-CVA", "No witnessed seizure activity"]
      },
      diagnosisSummary: "No seizure disorder or epilepsy documented. Neurology evaluation negative.",
      treatmentSummary: "No anticonvulsant medications. No seizure precautions beyond standard post-CVA monitoring."
    },
    "I7900": {
      item: {
        mdsItem: "I7900",
        itemName: "None of the Above (Neurological)",
        section: "I",
        description: "I7900 \u2014 None of the above neurological conditions (besides those already coded).",
        status: "dont_code",
        evidence: [],
        rationale: "Hemiparesis (I5100) and Malnutrition (I5600) are coded. No additional neurological conditions apply."
      },
      diagnosisSummary: null,
      treatmentSummary: null
    },
    "I8000": {
      item: {
        mdsItem: "I8000",
        itemName: "Additional Active Diagnoses",
        section: "I",
        description: "I8000 \u2014 Does the resident have additional active diagnoses not captured above?",
        status: "dont_code",
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-069",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note \u2014 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Active problem list reviewed. All active diagnoses captured in Sections I0100-I7900. CKD Stage 3, Obesity, and Chronic pain documented in problem list but not MDS-reportable in Section I.",
            rationale: "Physician review confirming all Section I diagnoses captured.",
            pageNumber: 1
          }
        ],
        keyFindings: ["All Section I diagnoses captured above", "CKD Stage 3, Obesity, Chronic pain on problem list \u2014 not Section I items"]
      },
      diagnosisSummary: "No additional Section I diagnoses to capture. Other active conditions (CKD, obesity, chronic pain) not reportable here.",
      treatmentSummary: "All active treatments documented under their respective Section I items."
    }
  },
  // ════════════════════════════════════════════
  // QUERYABLE ITEMS (useQueryItems)
  // ════════════════════════════════════════════
  queryableItems: {
    assessment: {
      id: "4860265",
      externalAssessmentId: "4860265",
      patientId: "2657226",
      patientName: "Doe, Jane",
      description: "Quarterly",
      ardDate: "2026-01-13"
    },
    summary: {
      totalItems: 6,
      queryRecommended: 3,
      alreadyCoded: 1,
      recommendCoding: 2
    },
    items: [
      {
        mdsItem: "I5600",
        mdsItemName: "Malnutrition",
        pdpmCategoryName: "Malnutrition",
        section: "I",
        solverStatus: "needs_physician_query",
        confidence: 0.95,
        rationale: "Nutrition assessment documents significant weight loss (12.6%), low albumin (2.9) and prealbumin (12), PO intake <50%. No malnutrition ICD-10 code on active problem list \u2014 physician confirmation needed.",
        keyFindings: [
          "Weight loss 12.6% (17 lbs) in 3 months \u2014 severe",
          "Albumin 2.9 g/dL, Prealbumin 12 mg/dL \u2014 both low",
          "PO intake <50% of estimated needs",
          "Ensure Plus BID and fortified cereal ordered",
          "No malnutrition ICD-10 on problem list"
        ],
        evidence: [
          { sourceType: "progress-note", sourceId: "doc-nutr-001", quote: "Weight Loss: 17 lbs (12.6%) in past 3 months. PO Intake < 50%. Moderate protein-calorie malnutrition.", documentName: "Nutrition Progress Note" },
          { sourceType: "lab_result", sourceId: "doc-nutr-002", quote: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low)", documentName: "Nutrition Lab Panel" }
        ],
        queryEvidence: [
          { sourceType: "progress-note", sourceId: "doc-nutr-001", quote: "Weight Loss: 17 lbs (12.6%) in past 3 months. Moderate protein-calorie malnutrition diagnosed based on significant unintentional weight loss, inadequate oral intake, and low albumin/prealbumin.", documentName: "Nutrition Progress Note", effectiveDate: "2026-01-22" },
          { sourceType: "lab_result", sourceId: "doc-nutr-002", quote: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low). Low values suggest malnutrition.", documentName: "Nutrition Lab Panel", effectiveDate: "2026-01-20" },
          { sourceType: "order", sourceId: "doc-nutr-004", quote: "Ensure Plus 8oz BID with meals for nutritional supplementation", documentName: "MAR - Ensure Plus", effectiveDate: "2026-01-22" }
        ],
        recommendedIcd10: [
          { code: "E44.0", description: "Moderate protein-calorie malnutrition" },
          { code: "E46", description: "Unspecified protein-calorie malnutrition" }
        ],
        existingQuery: null
      },
      {
        mdsItem: "I4300",
        mdsItemName: "Diabetes with PVD",
        pdpmCategoryName: "Diabetes with Peripheral Vascular Disease",
        section: "I",
        solverStatus: "needs_physician_query",
        confidence: 0.85,
        rationale: "Lab results confirm diabetes. PVD symptoms documented but no specific PVD ICD-10 code. Physician query needed to confirm combination diagnosis.",
        keyFindings: [
          "HbA1c 8.2% \u2014 uncontrolled diabetes",
          "Diminished pedal pulses documented",
          "No PVD diagnosis on problem list"
        ],
        evidence: [
          { sourceType: "lab_result", sourceId: "doc-081", quote: "HbA1c: 8.2%, GFR: 42", documentName: "Lab Results" },
          { sourceType: "progress-note", sourceId: "doc-082", quote: "Bilateral lower extremity edema with diminished pedal pulses.", documentName: "MD Progress Note" }
        ],
        queryEvidence: [
          { sourceType: "lab_result", sourceId: "doc-081", quote: "HbA1c: 8.2%, Fasting glucose: 186 mg/dL", documentName: "Lab Results", effectiveDate: "2026-01-18" },
          { sourceType: "progress-note", sourceId: "doc-082", quote: "Bilateral lower extremity edema with diminished pedal pulses noted.", documentName: "MD Progress Note", effectiveDate: "2026-01-22" }
        ],
        recommendedIcd10: [
          { code: "E11.51", description: "Type 2 DM with diabetic peripheral angiopathy" }
        ],
        existingQuery: null
      },
      {
        mdsItem: "I2900",
        mdsItemName: "Drug/Medication Induced Depression",
        pdpmCategoryName: "Drug/Medication Induced Depression",
        section: "I",
        solverStatus: "needs_physician_query",
        confidence: 0.72,
        rationale: "PHQ-9 missing. Nursing notes document depressive symptoms. Multiple medications with depressive side-effect profiles on MAR.",
        keyFindings: [
          "PHQ-9 assessment not completed",
          "Patient reports feeling down",
          "Multiple medications with depression side effects"
        ],
        evidence: [
          { sourceType: "progress-note", sourceId: "doc-083", quote: "Patient reports feeling down and having little interest in activities.", documentName: "Nursing Assessment" }
        ],
        queryEvidence: [
          { sourceType: "progress-note", sourceId: "doc-083", quote: "Patient reports feeling down and having little interest in activities. Declined recreational therapy.", documentName: "Nursing Assessment", effectiveDate: "2026-01-25" }
        ],
        recommendedIcd10: [
          { code: "F32.9", description: "Major depressive disorder, single episode, unspecified" }
        ],
        existingQuery: null
      },
      {
        mdsItem: "O0400A3",
        mdsItemName: "IV Medications",
        pdpmCategoryName: "IV Medications",
        section: "O",
        solverStatus: "recommend_coding",
        confidence: 0.95,
        rationale: "MAR confirms IV antibiotic administration during lookback period. This is a treatment item \u2014 can be coded based on documentation without physician query.",
        keyFindings: [
          "Vancomycin IV administered during lookback",
          "Physician order on file",
          "Can be coded without query"
        ],
        evidence: [
          { sourceType: "order", sourceId: "order-080", quote: "Vancomycin 1g IV Q12H \u2014 administered 1/12, 1/13", documentName: "MAR" }
        ],
        queryEvidence: [],
        recommendedIcd10: [],
        existingQuery: null
      },
      {
        mdsItem: "I4900",
        mdsItemName: "Schizophrenia",
        pdpmCategoryName: "Schizophrenia",
        section: "I",
        solverStatus: "needs_physician_query",
        confidence: 0.45,
        rationale: "Historical mention in old discharge summary. No recent documentation supporting active diagnosis.",
        keyFindings: [
          "Historical mention only",
          "No active symptoms documented",
          "Query already sent"
        ],
        evidence: [],
        queryEvidence: [],
        recommendedIcd10: [
          { code: "F20.9", description: "Schizophrenia, unspecified" }
        ],
        existingQuery: {
          id: "q-003",
          status: "sent",
          sentAt: new Date(Date.now() - 2 * 864e5).toISOString()
        }
      },
      {
        mdsItem: "E11.9",
        mdsItemName: "Type 2 Diabetes Mellitus",
        pdpmCategoryName: "Diabetes Mellitus",
        section: "I",
        solverStatus: "already_coded",
        confidence: 0.98,
        rationale: "E11.9 is on active problem list and well documented in clinical records.",
        keyFindings: [
          "ICD-10 E11.9 on problem list",
          "Active medications (Metformin)",
          "Lab monitoring in place"
        ],
        evidence: [
          { sourceType: "diagnosis_list", quote: "E11.9 - Type 2 Diabetes Mellitus without complications", documentName: "Active Problem List" }
        ],
        queryEvidence: [],
        recommendedIcd10: [],
        existingQuery: null
      }
    ]
  },
  // ════════════════════════════════════════════
  // PRACTITIONERS (useBatchQuery)
  // ════════════════════════════════════════════
  practitioners: [
    {
      id: "pract-001",
      firstName: "Demo",
      lastName: "Provider",
      title: "MD",
      name: "Dr. Demo Provider",
      phone: "555-0101"
    },
    {
      id: "pract-002",
      firstName: "Sample",
      lastName: "Doctor",
      title: "DO",
      name: "Dr. Sample Doctor",
      phone: "555-0102"
    },
    {
      id: "pract-003",
      firstName: "Jane",
      lastName: "Specialist",
      title: "NP",
      name: "Jane Specialist, NP",
      phone: "555-0103"
    }
  ]
};

// demo/demo-mock-chrome.js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function randomDelay() {
  return delay(50 + Math.random() * 150);
}
function routeApiRequest(endpoint) {
  const [path, queryString] = endpoint.split("?");
  const params = new URLSearchParams(queryString || "");
  if (path === "/api/extension/mds/dashboard") {
    return { success: true, data: DEMO_API_RESPONSES.dashboard };
  }
  if (path === "/api/extension/mds/doc-risks") {
    return { success: true, data: DEMO_API_RESPONSES.docRisks };
  }
  if (path === "/api/extension/mds/pdpm-potential") {
    const assessmentId = params.get("externalAssessmentId");
    const data = DEMO_API_RESPONSES.pdpmPotential[assessmentId];
    if (data) return { success: true, data };
    return { success: false, error: `No PDPM data for assessment ${assessmentId}` };
  }
  const patientAssessmentsMatch = path.match(/\/api\/extension\/patients\/([^/]+)\/assessments/);
  if (patientAssessmentsMatch) {
    const patientId = patientAssessmentsMatch[1];
    const data = DEMO_API_RESPONSES.patientAssessments[patientId];
    if (data) return { success: true, data };
    return { success: false, error: `No assessments for patient ${patientId}` };
  }
  const itemDetailMatch = path.match(/\/api\/extension\/mds\/items\/([^/]+)/);
  if (itemDetailMatch) {
    const code = decodeURIComponent(itemDetailMatch[1]);
    const data = DEMO_API_RESPONSES.itemDetail[code];
    if (data) return { success: true, data };
    return {
      success: true,
      data: {
        item: { mdsItem: code, itemName: code, description: `MDS Item ${code}`, status: "dont_code", evidence: [] },
        diagnosisSummary: null,
        treatmentSummary: null
      }
    };
  }
  if (path === "/api/extension/mds/queryable-items") {
    return { success: true, data: DEMO_API_RESPONSES.queryableItems };
  }
  if (path === "/api/extension/mds/queryable-items/batch-generate") {
    return { success: true, data: { generated: true } };
  }
  if (path === "/api/extension/practitioners") {
    return { success: true, data: DEMO_API_RESPONSES.practitioners };
  }
  if (path === "/api/extension/certifications/dashboard") {
    return { success: true, data: DEMO_API_RESPONSES.certDashboard };
  }
  if (path === "/api/extension/certifications/practitioners") {
    return { success: true, data: DEMO_API_RESPONSES.practitioners };
  }
  if (path === "/api/extension/certifications/by-patient") {
    const patientId = params.get("patientId");
    const all = DEMO_API_RESPONSES.certifications || [];
    const filtered = patientId ? all.filter((c3) => c3.patientId === patientId) : all;
    return { success: true, data: { certifications: filtered } };
  }
  const certSendsMatch = path.match(/\/api\/extension\/certifications\/([^/]+)\/sends/);
  if (certSendsMatch) {
    return {
      success: true,
      data: [{
        id: "send-1",
        certId: certSendsMatch[1],
        sentAt: new Date(Date.now() - 3 * 864e5).toISOString(),
        practitioner: { name: "Dr. Demo Provider" },
        method: "fax"
      }]
    };
  }
  const certActionMatch = path.match(/\/api\/extension\/certifications\/([^/]+)\/(send|skip|delay|edit-reason|unskip)/);
  if (certActionMatch) {
    return { success: true, data: { certId: certActionMatch[1], action: certActionMatch[2] } };
  }
  if (path === "/api/extension/certifications") {
    const status = params.get("status");
    const all = DEMO_API_RESPONSES.certifications || [];
    const filtered = status ? all.filter((c3) => c3.status === status) : all;
    return { success: true, data: { certifications: filtered } };
  }
  const docMatch = path.match(/\/api\/extension\/documents\/([^/]+)/);
  if (docMatch) {
    return {
      success: true,
      data: {
        document: {
          id: docMatch[1],
          title: "Clinical Document",
          documentType: "Progress Note",
          effectiveDate: "2026-01-22",
          fileSize: 245760,
          signedUrl: null
          // No real PDF in demo — viewer will show empty state
        }
      }
    };
  }
  console.warn("[DemoMock] Unhandled API endpoint:", path);
  return { success: false, error: `Demo: unhandled endpoint ${path}` };
}
async function handleMessage(msg) {
  await randomDelay();
  switch (msg.type) {
    case "GET_ORG":
      return { org: "demo-org" };
    case "GET_AUTH_STATE":
      return { authenticated: true };
    case "API_REQUEST":
      return routeApiRequest(msg.endpoint);
    default:
      console.log("[DemoMock] Unhandled message type:", msg.type);
      return {};
  }
}
function createMockChrome() {
  if (typeof window.chrome === "undefined") {
    window.chrome = {};
  }
  if (!window.chrome.runtime) {
    window.chrome.runtime = {};
  }
  window.chrome.runtime.sendMessage = function(msg, callback) {
    const promise = handleMessage(msg);
    if (typeof callback === "function") {
      promise.then(callback).catch((err) => {
        console.error("[DemoMock] Error in callback handler:", err);
        callback({ success: false, error: err.message });
      });
      return void 0;
    }
    return promise;
  };
  window.chrome.runtime.getURL = function(path) {
    if (path.startsWith("lib/")) return `./${path}`;
    return path;
  };
  window.chrome.runtime.id = "demo-mock-extension-id";
  console.log("[DemoMock] Chrome API mocks installed");
}

// demo/demo-mock-globals.js
function installGlobalMocks() {
  window.__DEMO_CERT_DATA = DEMO_API_RESPONSES.certifications || [];
  localStorage.setItem("CORE.org_code", "demo-org");
  window.getOrg = () => ({ org: "demo-org" });
  window.getChatFacilityInfo = () => "SUNNY MEADOWS DEMO FACILITY";
  window.getChatPatientId = () => "2657226";
  window.getPatientNameFromPage = () => "Doe, Jane";
  window.getCurrentParams = () => ({
    facilityName: "SUNNY MEADOWS DEMO FACILITY",
    orgSlug: "demo-org",
    assessmentId: "4860265"
  });
  window.QueryAPI = {
    async fetchPractitioners(_facilityName, _orgSlug) {
      await new Promise((r3) => setTimeout(r3, 200));
      return [
        {
          id: "pract-001",
          firstName: "Demo",
          lastName: "Provider",
          title: "MD",
          name: "Dr. Demo Provider",
          phone: "555-0101"
        },
        {
          id: "pract-002",
          firstName: "Sample",
          lastName: "Doctor",
          title: "DO",
          name: "Dr. Sample Doctor",
          phone: "555-0102"
        },
        {
          id: "pract-003",
          firstName: "Jane",
          lastName: "Specialist",
          title: "NP",
          name: "Jane Specialist, NP",
          phone: "555-0103"
        }
      ];
    },
    async generateNote(mdsItem, item) {
      await new Promise((r3) => setTimeout(r3, 500 + Math.random() * 500));
      const itemName = item.pdpmCategoryName || item.mdsItemName || item.itemName || mdsItem;
      const notes = {
        "I5600": `Dear Doctor,

I am writing to request your clinical assessment regarding malnutrition for this patient's current MDS assessment.

Our review of the clinical documentation reveals the following evidence:

\u2022 Weight loss of 17 lbs (12.6%) over the past 3 months (135 lbs \u2192 118 lbs)
\u2022 PO intake documented at <50% of estimated needs
\u2022 Albumin: 2.9 g/dL (Low, ref: 3.5-5.0)
\u2022 Prealbumin: 12 mg/dL (Low, ref: 18-38)
\u2022 Dietitian has diagnosed moderate protein-calorie malnutrition
\u2022 Current interventions: Ensure Plus 8oz BID, Fortified Cereal 6oz QD

Please confirm whether a malnutrition diagnosis (ICD-10: E44.0) is appropriate for this patient.

Thank you for your prompt attention to this matter.`
      };
      const note = notes[mdsItem] || `Dear Doctor,

I am writing to request your clinical assessment regarding ${itemName} (${mdsItem}) for this patient's current MDS assessment.

Based on our review of the clinical documentation, there appears to be evidence supporting this diagnosis/condition that may warrant coding on the MDS. Your confirmation would help ensure accurate assessment completion.

Thank you for your prompt attention to this matter.`;
      return {
        note,
        preferredIcd10: item.recommendedIcd10?.[0] || { code: "R69", description: "Illness, unspecified" },
        icd10Options: item.recommendedIcd10 || [
          { code: "R69", description: "Illness, unspecified" }
        ]
      };
    },
    async createQuery(params) {
      await new Promise((r3) => setTimeout(r3, 300));
      return {
        query: {
          id: `demo-query-${Date.now()}`,
          mdsItem: params.mdsItem,
          mdsItemName: params.mdsItemName,
          status: "draft",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
    },
    async sendQuery(queryId, practitionerIds, noteText) {
      await new Promise((r3) => setTimeout(r3, 300));
      console.log(`[DemoMock] QueryAPI.sendQuery: ${queryId} \u2192 practitioners: ${practitionerIds.join(", ")}`);
      return { success: true, sentAt: (/* @__PURE__ */ new Date()).toISOString() };
    },
    async resendQuery(queryId) {
      await new Promise((r3) => setTimeout(r3, 200));
      console.log(`[DemoMock] QueryAPI.resendQuery: ${queryId}`);
      return { success: true };
    }
  };
  function dispatchToast(type, message) {
    console.log(`[DemoMock] SuperToast.${type}:`, message);
    window.dispatchEvent(new CustomEvent("demo:toast", { detail: { type, message } }));
  }
  window.SuperToast = {
    show(opts) {
      dispatchToast("info", opts.message || opts);
    },
    success(message) {
      dispatchToast("success", message);
    },
    error(message) {
      dispatchToast("error", message);
    },
    info(message) {
      dispatchToast("info", message);
    },
    warning(message) {
      dispatchToast("warning", message);
    }
  };
  window.SuperOverlay = {
    facilityName: "SUNNY MEADOWS DEMO FACILITY",
    patientId: "2657226",
    assessmentId: "4860265"
  };
  window.navigateToMDSItem = (item) => {
    console.log("[DemoMock] navigateToMDSItem:", item);
  };
  window.PDPMAnalyzerLauncher = {
    open(opts) {
      console.log("[DemoMock] PDPMAnalyzerLauncher.open:", opts);
      window.dispatchEvent(new CustomEvent("demo:open-pdpm", { detail: opts }));
    }
  };
  window.QueryDetailModal = {
    show(opts) {
      console.log("[DemoMock] QueryDetailModal.show:", opts);
    }
  };
  window.renderSplitAdministrations = async (container, sourceId, _unused, params) => {
    await new Promise((r3) => setTimeout(r3, 400));
    const isMar = !sourceId?.includes("tar");
    const typeBadge = isMar ? "MAR" : "TAR";
    const typeBadgeClass = isMar ? "super-admin-badge--mar" : "super-admin-badge--tar";
    const typeIcon = isMar ? "\u{1F48A}" : "\u26A1";
    const orders = {
      "mar-010": { name: "Aspirin 81mg PO Daily", directions: "Take by mouth once daily with food", startDate: "2025-12-20", endDate: null },
      "mar-012": { name: "Lisinopril 20mg PO Daily", directions: "Take by mouth once daily in the morning", startDate: "2025-12-15", endDate: null },
      "mar-001": { name: "Metformin 500mg PO BID", directions: "Take by mouth twice daily with meals", startDate: "2025-11-01", endDate: null },
      "doc-nutr-004": { name: "Ensure Plus 8 OZ Oral Liquid", directions: "Give 8 oz Ensure Plus by mouth twice daily with lunch and dinner for nutritional supplementation", startDate: "2026-01-22", endDate: null },
      "doc-nutr-003": { name: "Fortified Cereal 6 OZ", directions: "Give 6 oz fortified cereal by mouth once daily with breakfast to increase caloric and protein intake", startDate: "2026-01-22", endDate: null }
    };
    const order = orders[sourceId] || { name: "Medication Order", directions: "As directed", startDate: "2025-12-20", endDate: null };
    const dates = [];
    const now = new Date(2026, 0, 27);
    for (let i3 = 6; i3 >= 0; i3--) {
      const d3 = new Date(now);
      d3.setDate(d3.getDate() - i3);
      dates.push(d3);
    }
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formatRangeDate = (d3) => `${monthNames[d3.getMonth()]} ${d3.getDate()}, ${d3.getFullYear()}`;
    const dateRangeStr = `${formatRangeDate(dates[0])} - ${formatRangeDate(dates[dates.length - 1])}`;
    const formatOrderDate = (ds) => {
      if (!ds) return "";
      const d3 = new Date(ds);
      return d3.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };
    const dateHeaders = dates.map((d3) => `
      <th class="super-admin-grid__date-header">
        <div class="super-admin-grid__day">${dayNames[d3.getDay()]}</div>
        <div class="super-admin-grid__date">${monthNames[d3.getMonth()]} ${d3.getDate()}</div>
      </th>
    `).join("");
    const isBID = order.name.includes("BID");
    const timeSlots = isBID ? ["0800", "1800"] : ["0800"];
    const staffPool = ["RN-JD", "RN-KM", "RN-TS", "LPN-AB"];
    const formatTime = (t3) => {
      const h3 = parseInt(t3.substring(0, 2), 10);
      const m3 = t3.substring(2);
      const ampm = h3 >= 12 ? "PM" : "AM";
      const h12 = h3 > 12 ? h3 - 12 : h3 === 0 ? 12 : h3;
      return `${h12}:${m3} ${ampm}`;
    };
    const rows = timeSlots.map((time) => {
      const cells = dates.map((d3, di) => {
        const staffIdx = (di + (time === "1800" ? 2 : 0)) % staffPool.length;
        const initials = staffPool[staffIdx];
        return `<td class="super-admin-grid__cell super-admin-grid__cell--given">
          <span class="super-admin-grid__check">\u2713</span>
          <span class="super-admin-grid__initials">${initials}</span>
        </td>`;
      }).join("");
      return `<tr class="super-admin-grid__row">
        <td class="super-admin-grid__time">${formatTime(time)}</td>
        ${cells}
      </tr>`;
    }).join("");
    const eventCount = timeSlots.length * dates.length;
    container.innerHTML = `
      <div class="super-split__admin">
        <div class="super-admin-modal__header">
          <div class="super-admin-modal__title-row">
            <span class="super-admin-modal__icon">${typeIcon}</span>
            <div class="super-admin-modal__title">
              <span class="super-admin-modal__order-name">${order.name}</span>
              <span class="super-admin-badge ${typeBadgeClass}">${typeBadge}</span>
            </div>
          </div>
          ${order.directions ? `<div class="super-admin-modal__directions">${order.directions}</div>` : ""}
          <div class="super-admin-modal__meta">
            ${timeSlots.length} time slot${timeSlots.length !== 1 ? "s" : ""}
            <span class="super-admin-modal__dates">
              Start: ${formatOrderDate(order.startDate)}
              ${order.endDate ? ` \xB7 Stop: ${formatOrderDate(order.endDate)}` : ""}
            </span>
          </div>
        </div>
        <div class="super-admin-modal__date-bar">
          <button class="super-admin-modal__nav-btn" title="Previous week">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span class="super-admin-modal__date-range">\u{1F4C5} ${dateRangeStr}</span>
          <button class="super-admin-modal__nav-btn" title="Next week">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div class="super-admin-modal__body">
          <div class="super-admin-grid-wrapper">
            <table class="super-admin-grid">
              <thead>
                <tr>
                  <th class="super-admin-grid__time-header">Time</th>
                  ${dateHeaders}
                </tr>
              </thead>
              <tbody>
                ${rows}
              </tbody>
            </table>
          </div>
        </div>
        <div class="super-admin-modal__footer">
          <span class="super-admin-modal__event-count">${eventCount} events</span>
          <div class="super-admin-legend">
            <span class="super-admin-legend__item super-admin-legend__item--given">\u2713 Given</span>
            <span class="super-admin-legend__item super-admin-legend__item--refused">2 Refused</span>
            <span class="super-admin-legend__item super-admin-legend__item--loa">3 LOA</span>
            <span class="super-admin-legend__item super-admin-legend__item--hold">5 Hold</span>
          </div>
        </div>
      </div>
    `;
  };
  window.renderSplitNote = async (container, sourceId, params) => {
    await new Promise((r3) => setTimeout(r3, 350));
    const pdfDocuments = {
      "doc-nutr-001": {
        title: "NUTRITION_01_22_36001641.PDF",
        pages: 2,
        pageContent: {
          1: [
            { text: "NUTRITION PROGRESS NOTE", highlight: false, bold: true },
            { text: "", highlight: false },
            { text: "Patient: Doe, Jane                    MRN: 000000", highlight: false },
            { text: "Date: 01/22/2026                      Time: 10:28", highlight: false },
            { text: "Dietitian: Sarah Kim, RD, LD", highlight: false },
            { text: "_______________________________________________", highlight: false },
            { text: "", highlight: false },
            { text: "NUTRITIONAL STATUS:", highlight: false, bold: true },
            { text: "Current Weight: 118 lbs (53.5 kg)", highlight: false },
            { text: "Usual Body Weight: 135 lbs (61.2 kg)", highlight: false },
            { text: "Weight Loss: 17 lbs (12.6%) in past 3 months", highlight: "keyword" },
            { text: "BMI: 20.2 (within normal range but declining)", highlight: false },
            { text: "", highlight: false },
            { text: "DIETARY INTAKE:", highlight: false, bold: true },
            { text: "Ongoing PO Intake: < 50% meals/est. needs", highlight: "keyword" },
            { text: "Patient reports decreased appetite and early satiety.", highlight: false },
            { text: "Difficulty with textures due to dysphagia.", highlight: "contextual" },
            { text: "Meal observation: consumed ~40% of lunch, refused", highlight: false },
            { text: "dessert and most of entree.", highlight: false }
          ],
          2: [
            { text: "LABORATORY VALUES:", highlight: false, bold: true },
            { text: "Albumin: 2.9 g/dL (Low)            Ref: 3.5-5.0", highlight: "keyword" },
            { text: "Prealbumin: 12 mg/dL (Low)          Ref: 18-38", highlight: "keyword" },
            { text: "Total Protein: 5.8 g/dL (Low)       Ref: 6.0-8.3", highlight: false },
            { text: "Transferrin: 165 mg/dL (Low)         Ref: 200-360", highlight: false },
            { text: "", highlight: false },
            { text: "MALNUTRITION DIAGNOSIS:", highlight: false, bold: true },
            { text: "Moderate protein-calorie malnutrition based on:", highlight: "keyword" },
            { text: "- Significant unintentional weight loss (>10% in 3 months)", highlight: false },
            { text: "- Inadequate oral intake (<50% estimated needs)", highlight: false },
            { text: "- Low albumin and prealbumin", highlight: false },
            { text: "", highlight: false },
            { text: "RECOMMENDATIONS:", highlight: false, bold: true },
            { text: "1. Fortified foods - pudding, cereal, milk", highlight: false },
            { text: "2. Ensure Plus BID with meals", highlight: false },
            { text: "3. Liberalized diet texture per SLP recommendations", highlight: false },
            { text: "4. Weekly weights", highlight: false },
            { text: "5. Re-evaluate in 1 week", highlight: false },
            { text: "", highlight: false },
            { text: "_______________________________________________", highlight: false },
            { text: "Electronically signed: Sarah Kim, RD, LD  01/22/2026", highlight: false }
          ]
        }
      },
      "doc-nutr-002": {
        title: "LAB_NUTRITION_01_20_38001789.PDF",
        pages: 1,
        pageContent: {
          1: [
            { text: "LABORATORY REPORT", highlight: false, bold: true },
            { text: "", highlight: false },
            { text: "Patient: Doe, Jane                    MRN: 000000", highlight: false },
            { text: "Date Collected: 01/20/2026 06:15", highlight: false },
            { text: "Ordering Physician: Dr. Demo Provider, MD", highlight: false },
            { text: "_______________________________________________", highlight: false },
            { text: "", highlight: false },
            { text: "NUTRITION PANEL:", highlight: false, bold: true },
            { text: "", highlight: false },
            { text: "Test                  Result          Flag    Reference", highlight: false, bold: true },
            { text: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500", highlight: false },
            { text: "Albumin               2.9 g/dL        (L)     3.5-5.0", highlight: "keyword" },
            { text: "Prealbumin            12 mg/dL         (L)     18-38", highlight: "keyword" },
            { text: "Total Protein         5.8 g/dL         (L)     6.0-8.3", highlight: false },
            { text: "Transferrin           165 mg/dL        (L)     200-360", highlight: false },
            { text: "CRP                   18.5 mg/L        (H)     0.0-10.0", highlight: false },
            { text: "", highlight: false },
            { text: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500", highlight: false },
            { text: "Note: Low albumin and prealbumin suggest malnutrition", highlight: "keyword" },
            { text: "and/or inflammatory state. Clinical correlation advised.", highlight: false },
            { text: "", highlight: false },
            { text: "Verified by: Lab Director  01/20/2026 07:30", highlight: false }
          ]
        }
      },
      "doc-nutr-006": {
        title: "NURSING_WEIGHTS_01_22_38001945.PDF",
        pages: 1,
        pageContent: {
          1: [
            { text: "WEIGHT MONITORING - 3 MONTH TREND", highlight: false, bold: true },
            { text: "", highlight: false },
            { text: "Patient: Doe, Jane                    MRN: 000000", highlight: false },
            { text: "Date: 01/22/2026", highlight: false },
            { text: "_______________________________________________", highlight: false },
            { text: "", highlight: false },
            { text: "WEIGHT HISTORY:", highlight: false, bold: true },
            { text: "Date          Weight        Change from Usual", highlight: false, bold: true },
            { text: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500", highlight: false },
            { text: "10/22/2025    135.0 lbs     (Usual body weight)", highlight: false },
            { text: "11/15/2025    132.5 lbs     -2.5 lbs", highlight: false },
            { text: "12/20/2025    128.0 lbs     -7.0 lbs from usual", highlight: "keyword" },
            { text: "01/15/2026    120.5 lbs     -14.5 lbs from usual", highlight: "keyword" },
            { text: "01/22/2026    118.0 lbs     -17.0 lbs from usual", highlight: "keyword" },
            { text: "", highlight: false },
            { text: "WEIGHT LOSS PERCENTAGE:", highlight: false, bold: true },
            { text: "Total Loss: 17 lbs over 3 months", highlight: "keyword" },
            { text: "Percentage: 12.6% of usual body weight", highlight: "keyword" },
            { text: "", highlight: false },
            { text: "SIGNIFICANCE:", highlight: false, bold: true },
            { text: ">10% weight loss in 3 months = SEVERE weight loss", highlight: "keyword" },
            { text: "Meets criteria for malnutrition diagnosis", highlight: "keyword" },
            { text: "", highlight: false },
            { text: "INTERVENTIONS INITIATED:", highlight: false, bold: true },
            { text: "- Dietary consult completed", highlight: false },
            { text: "- Nutritional supplements ordered", highlight: false },
            { text: "- Weekly weight monitoring ongoing", highlight: false },
            { text: "", highlight: false },
            { text: "_______________________________________________", highlight: false },
            { text: "Documented by: RN-JD  01/22/2026 08:15", highlight: false }
          ]
        }
      }
    };
    const pdfDoc = pdfDocuments[sourceId];
    function renderPdfLines(lines) {
      return lines.map((line) => {
        let classes = "super-split-pdf__line";
        if (line.highlight === "keyword" || line.highlight === true) {
          classes += " super-split-pdf__line--keyword";
        } else if (line.highlight === "contextual") {
          classes += " super-split-pdf__line--contextual";
        }
        if (line.bold) classes += " super-split-pdf__line--bold";
        return `<div class="${classes}">${line.text || "&nbsp;"}</div>`;
      }).join("");
    }
    if (pdfDoc) {
      const pageData = pdfDoc.pageContent[1];
      const totalPages = pdfDoc.pages;
      let currentPage = 1;
      container.innerHTML = `
        <style>
          .super-split-pdf { background: #525659; padding: 20px; min-height: 100%; display: flex; flex-direction: column; }
          .super-split-pdf__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; padding: 0 4px; }
          .super-split-pdf__filename { color: #cbd5e1; font-size: 11px; font-family: monospace; }
          .super-split-pdf__legend { display: flex; gap: 12px; }
          .super-split-pdf__legend-item { font-size: 10px; color: #94a3b8; display: flex; align-items: center; gap: 4px; }
          .super-split-pdf__legend-swatch { width: 12px; height: 10px; border-radius: 2px; }
          .super-split-pdf__legend-swatch--keyword { background: linear-gradient(120deg, #fef08a 0%, #fde047 100%); }
          .super-split-pdf__legend-swatch--contextual { background: linear-gradient(120deg, #bfdbfe 0%, #93c5fd 100%); }
          .super-split-pdf__paper { background: white; padding: 40px 48px; border-radius: 4px; box-shadow: 0 4px 16px rgba(0,0,0,0.3); flex: 1; min-height: 300px; }
          .super-split-pdf__line { font-family: 'Courier New', Courier, monospace; font-size: 12.5px; line-height: 1.8; color: #1f2937; margin-bottom: 1px; white-space: pre-wrap; }
          .super-split-pdf__line--keyword { background: linear-gradient(120deg, #fef08a 0%, #fde047 100%); padding: 1px 4px; margin: 1px -4px; border-radius: 2px; }
          .super-split-pdf__line--contextual { background: linear-gradient(120deg, #bfdbfe 0%, #93c5fd 100%); padding: 1px 4px; margin: 1px -4px; border-radius: 2px; }
          .super-split-pdf__line--bold { font-weight: 700; }
          .super-split-pdf__footer { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 10px; margin-top: 12px; }
          .super-split-pdf__page-btn { background: rgba(255,255,255,0.15); border: none; color: white; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center; }
          .super-split-pdf__page-btn:hover { background: rgba(255,255,255,0.25); }
          .super-split-pdf__page-btn:disabled { opacity: 0.3; cursor: default; }
          .super-split-pdf__page-num { color: #e2e8f0; font-size: 12px; }
        </style>
        <div class="super-split-pdf">
          <div class="super-split-pdf__header">
            <span class="super-split-pdf__filename">${pdfDoc.title}</span>
            <div class="super-split-pdf__legend">
              <span class="super-split-pdf__legend-item"><span class="super-split-pdf__legend-swatch super-split-pdf__legend-swatch--keyword"></span>Keyword Match</span>
              <span class="super-split-pdf__legend-item"><span class="super-split-pdf__legend-swatch super-split-pdf__legend-swatch--contextual"></span>Contextual</span>
            </div>
          </div>
          <div class="super-split-pdf__paper">
            ${renderPdfLines(pageData)}
          </div>
          ${totalPages > 1 ? `
          <div class="super-split-pdf__footer">
            <button class="super-split-pdf__page-btn super-split-pdf__prev" disabled>&#8249;</button>
            <span class="super-split-pdf__page-num">Page 1 of ${totalPages}</span>
            <button class="super-split-pdf__page-btn super-split-pdf__next">&#8250;</button>
          </div>` : `
          <div class="super-split-pdf__footer">
            <span class="super-split-pdf__page-num">Page 1 of 1</span>
          </div>`}
        </div>`;
      if (totalPages > 1) {
        let updatePage = function() {
          paper.innerHTML = renderPdfLines(pdfDoc.pageContent[currentPage]);
          pageNum.textContent = `Page ${currentPage} of ${totalPages}`;
          prevBtn.disabled = currentPage <= 1;
          nextBtn.disabled = currentPage >= totalPages;
        };
        const prevBtn = container.querySelector(".super-split-pdf__prev");
        const nextBtn = container.querySelector(".super-split-pdf__next");
        const pageNum = container.querySelector(".super-split-pdf__page-num");
        const paper = container.querySelector(".super-split-pdf__paper");
        prevBtn.addEventListener("click", () => {
          if (currentPage > 1) {
            currentPage--;
            updatePage();
          }
        });
        nextBtn.addEventListener("click", () => {
          if (currentPage < totalPages) {
            currentPage++;
            updatePage();
          }
        });
      }
    } else {
      const defaultLines = [
        { text: "PROGRESS NOTE", highlight: false, bold: true },
        { text: "", highlight: false },
        { text: "Patient: Doe, Jane                    MRN: 000000", highlight: false },
        { text: "Date: 01/22/2026                      Time: 14:32", highlight: false },
        { text: "Provider: Dr. Demo Provider, MD", highlight: false },
        { text: "_______________________________________________", highlight: false },
        { text: "", highlight: false },
        { text: "SUBJECTIVE:", highlight: false, bold: true },
        { text: "Patient reports mild intermittent chest discomfort,", highlight: false },
        { text: "not activity related. Denies shortness of breath at", highlight: false },
        { text: "rest. Reports compliance with medication regimen.", highlight: false },
        { text: "", highlight: false },
        { text: "OBJECTIVE:", highlight: false, bold: true },
        { text: "VS: BP 138/82, HR 72 reg, RR 18, SpO2 97% RA", highlight: false },
        { text: "General: Alert, oriented x3, in no acute distress", highlight: false },
        { text: "CV: RRR, no murmurs/rubs/gallops. +1 bilateral LE edema", highlight: false },
        { text: "Resp: CTAB, no wheezes or crackles", highlight: false },
        { text: "", highlight: false },
        { text: "ASSESSMENT:", highlight: false, bold: true },
        { text: "1. HTN \u2014 stable on current regimen", highlight: false },
        { text: "2. Type 2 DM \u2014 suboptimal control, HbA1c 8.2%", highlight: false },
        { text: "3. CKD Stage 3 \u2014 stable, GFR 42", highlight: false },
        { text: "", highlight: false },
        { text: "PLAN:", highlight: false, bold: true },
        { text: "- Continue current medications", highlight: false },
        { text: "- Recheck HbA1c in 3 months", highlight: false },
        { text: "- Monitor renal function, repeat BMP in 4 weeks", highlight: false },
        { text: "", highlight: false },
        { text: "_______________________________________________", highlight: false },
        { text: "Electronically signed: Dr. Demo Provider, MD  01/22/2026", highlight: false }
      ];
      container.innerHTML = `
        <style>
          .super-split-pdf { background: #525659; padding: 20px; min-height: 100%; display: flex; flex-direction: column; }
          .super-split-pdf__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; padding: 0 4px; }
          .super-split-pdf__filename { color: #cbd5e1; font-size: 11px; font-family: monospace; }
          .super-split-pdf__paper { background: white; padding: 40px 48px; border-radius: 4px; box-shadow: 0 4px 16px rgba(0,0,0,0.3); flex: 1; min-height: 300px; }
          .super-split-pdf__line { font-family: 'Courier New', Courier, monospace; font-size: 12.5px; line-height: 1.8; color: #1f2937; margin-bottom: 1px; white-space: pre-wrap; }
          .super-split-pdf__line--bold { font-weight: 700; }
          .super-split-pdf__footer { display: flex; align-items: center; justify-content: center; padding: 10px; margin-top: 12px; }
          .super-split-pdf__page-num { color: #e2e8f0; font-size: 12px; }
        </style>
        <div class="super-split-pdf">
          <div class="super-split-pdf__header">
            <span class="super-split-pdf__filename">PROGRESS_NOTE_01_22.PDF</span>
          </div>
          <div class="super-split-pdf__paper">
            ${renderPdfLines(defaultLines)}
          </div>
          <div class="super-split-pdf__footer">
            <span class="super-split-pdf__page-num">Page 1 of 1</span>
          </div>
        </div>`;
    }
  };
  window.renderSplitTherapy = async (container, sourceId, quote, params) => {
    await new Promise((r3) => setTimeout(r3, 300));
    container.innerHTML = `
      <div style="padding:16px;font-family:system-ui,-apple-system,sans-serif;font-size:13px;color:#1e293b;line-height:1.6;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #e2e8f0;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:8px;height:8px;border-radius:50%;background:#f59e0b;"></div>
            <span style="font-weight:600;font-size:14px;">Therapy Documentation</span>
          </div>
          <span style="font-size:11px;color:#94a3b8;">01/20/2026 \u2014 Jane Specialist, PT, DPT</span>
        </div>
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#f59e0b;margin-bottom:6px;">Treatment Session</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;">
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Type:</strong> PT - Skilled</div>
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Duration:</strong> 45 min</div>
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Setting:</strong> Therapy gym</div>
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Supervision:</strong> Direct</div>
          </div>
        </div>
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#f59e0b;margin-bottom:6px;">Functional Status</div>
          <table style="width:100%;border-collapse:collapse;font-size:12px;">
            <tr><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;font-weight:500;">Transfers</td><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;">Mod A (FIM 3) \u2192 Min A (FIM 4)</td></tr>
            <tr><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;font-weight:500;">Ambulation</td><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;">Max A x1 50ft (FW) \u2192 Mod A x1 100ft</td></tr>
            <tr><td style="padding:6px 8px;font-weight:500;">Balance (Berg)</td><td style="padding:6px 8px;">18/56 \u2192 24/56</td></tr>
          </table>
        </div>
        <div>
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#f59e0b;margin-bottom:6px;">Treatment Notes</div>
          <p style="margin:0;color:#334155;">Patient participated in therapeutic exercise program targeting LE strengthening, dynamic balance, and gait training. Left-sided hemiparesis continues to limit functional mobility. Patient required verbal cues for safety awareness during ambulation. Demonstrated improved weight shifting and stance phase on affected side compared to prior session.</p>
        </div>
        <div style="margin-top:16px;padding:10px;background:#fffbeb;border-radius:6px;border-left:3px solid #f59e0b;">
          <div style="font-size:11px;color:#92400e;">Documented by <strong>Jane Specialist, PT, DPT</strong> on 01/20/2026 at 11:15</div>
        </div>
      </div>`;
  };
  window.QuerySendModal = {
    show(opts) {
      console.log("[DemoMock] QuerySendModal.show (stub):", opts?.mdsItem);
    }
  };
  window.CertAPI = {
    async sendCert(certId, practitionerIds, delayReason) {
      await new Promise((r3) => setTimeout(r3, 300));
      console.log("[DemoMock] CertAPI.sendCert:", certId);
      dispatchToast("success", "Certification sent successfully");
      return { success: true };
    },
    async skipCert(certId, reason) {
      await new Promise((r3) => setTimeout(r3, 200));
      console.log("[DemoMock] CertAPI.skipCert:", certId);
      dispatchToast("info", "Certification skipped");
      return { success: true };
    },
    async delayCert(certId, reason) {
      await new Promise((r3) => setTimeout(r3, 200));
      console.log("[DemoMock] CertAPI.delayCert:", certId);
      dispatchToast("info", "Certification delayed");
      return { success: true };
    },
    async saveClinicalReason(certId, data) {
      await new Promise((r3) => setTimeout(r3, 200));
      console.log("[DemoMock] CertAPI.saveClinicalReason:", certId, data);
      return { success: true };
    },
    async unskipCert(certId) {
      await new Promise((r3) => setTimeout(r3, 200));
      console.log("[DemoMock] CertAPI.unskipCert:", certId);
      dispatchToast("info", "Certification unskipped");
      return { success: true };
    },
    async fetchPractitioners(facilityName, orgSlug) {
      await new Promise((r3) => setTimeout(r3, 200));
      return [
        { id: "pract-001", firstName: "Demo", lastName: "Provider", title: "MD", name: "Dr. Demo Provider", phone: "555-0101", npi: "1234567890" },
        { id: "pract-002", firstName: "Sample", lastName: "Doctor", title: "DO", name: "Dr. Sample Doctor", phone: "555-0102", npi: "0987654321" },
        { id: "pract-003", firstName: "Jane", lastName: "Specialist", title: "NP", name: "Jane Specialist, NP", phone: "555-0103", npi: "1122334455" }
      ];
    },
    async fetchPractitionerWorkload(practitionerId) {
      await new Promise((r3) => setTimeout(r3, 200));
      return {
        practitioner: { id: practitionerId, name: "Dr. Demo Provider" },
        stats: { pending: 3, signed: 12, overdue: 1 },
        certs: []
      };
    },
    async fetchDashboard(facilityName, orgSlug) {
      await new Promise((r3) => setTimeout(r3, 200));
      return { pending: 4, overdue: 1, dueSoon: 2, signedLast7Days: 3 };
    },
    async fetchCertifications(facilityName, orgSlug, filters) {
      await new Promise((r3) => setTimeout(r3, 200));
      return window.__DEMO_CERT_DATA || [];
    },
    async fetchByPatient(facilityName, orgSlug, patientId) {
      await new Promise((r3) => setTimeout(r3, 200));
      const all = window.__DEMO_CERT_DATA || [];
      return all.filter((c3) => c3.patientId === patientId);
    },
    async fetchSendHistory(certId) {
      await new Promise((r3) => setTimeout(r3, 200));
      return [
        { id: "send-1", certId, sentAt: new Date(Date.now() - 3 * 864e5).toISOString(), practitioner: { name: "Dr. Demo Provider" }, method: "fax" }
      ];
    }
  };
  window.CONFIG = { DEV_MODE: true };
  console.log("[DemoMock] Global mocks installed");
}

// node_modules/preact/dist/preact.module.js
var preact_module_exports = {};
__export(preact_module_exports, {
  Component: () => x,
  Fragment: () => k,
  cloneElement: () => K,
  createContext: () => Q,
  createElement: () => _,
  createRef: () => b,
  h: () => _,
  hydrate: () => J,
  isValidElement: () => t,
  options: () => l,
  render: () => G,
  toChildArray: () => H
});
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d = Array.isArray;
function w(n2, l3) {
  for (var u4 in l3) n2[u4] = l3[u4];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l3, u4, t3) {
  var i3, o3, r3, e3 = {};
  for (r3 in u4) "key" == r3 ? i3 = u4[r3] : "ref" == r3 ? o3 = u4[r3] : e3[r3] = u4[r3];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (r3 in l3.defaultProps) void 0 === e3[r3] && (e3[r3] = l3.defaultProps[r3]);
  return m(l3, e3, i3, o3, null);
}
function m(n2, t3, i3, o3, r3) {
  var e3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
  return null == r3 && null != l.vnode && l.vnode(e3), e3;
}
function b() {
  return { current: null };
}
function k(n2) {
  return n2.children;
}
function x(n2, l3) {
  this.props = n2, this.context = l3;
}
function S(n2, l3) {
  if (null == l3) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C(n2) {
  var l3, u4;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) {
      n2.__e = n2.__c.base = u4.__e;
      break;
    }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || o != l.debounceRendering) && ((o = l.debounceRendering) || r)($);
}
function $() {
  for (var n2, u4, t3, o3, r3, f4, c3, s3 = 1; i.length; ) i.length > s3 && i.sort(e), n2 = i.shift(), s3 = i.length, n2.__d && (t3 = void 0, o3 = void 0, r3 = (o3 = (u4 = n2).__v).__e, f4 = [], c3 = [], u4.__P && ((t3 = w({}, o3)).__v = o3.__v + 1, l.vnode && l.vnode(t3), O(u4.__P, t3, o3, u4.__n, u4.__P.namespaceURI, 32 & o3.__u ? [r3] : null, f4, null == r3 ? S(o3) : r3, !!(32 & o3.__u), c3), t3.__v = o3.__v, t3.__.__k[t3.__i] = t3, N(f4, t3, c3), o3.__e = o3.__ = null, t3.__e != r3 && C(t3)));
  $.__r = 0;
}
function I(n2, l3, u4, t3, i3, o3, r3, e3, f4, c3, s3) {
  var a3, h3, y3, d3, w3, g2, _2, m3 = t3 && t3.__k || v, b2 = l3.length;
  for (f4 = P(u4, l3, m3, f4, b2), a3 = 0; a3 < b2; a3++) null != (y3 = u4.__k[a3]) && (h3 = -1 == y3.__i ? p : m3[y3.__i] || p, y3.__i = a3, g2 = O(n2, y3, h3, i3, o3, r3, e3, f4, c3, s3), d3 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && B(h3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), (_2 = !!(4 & y3.__u)) || h3.__k === y3.__k ? f4 = A(y3, f4, n2, _2) : "function" == typeof y3.type && void 0 !== g2 ? f4 = g2 : d3 && (f4 = d3.nextSibling), y3.__u &= -7);
  return u4.__e = w3, f4;
}
function P(n2, l3, u4, t3, i3) {
  var o3, r3, e3, f4, c3, s3 = u4.length, a3 = s3, h3 = 0;
  for (n2.__k = new Array(i3), o3 = 0; o3 < i3; o3++) null != (r3 = l3[o3]) && "boolean" != typeof r3 && "function" != typeof r3 ? ("string" == typeof r3 || "number" == typeof r3 || "bigint" == typeof r3 || r3.constructor == String ? r3 = n2.__k[o3] = m(null, r3, null, null, null) : d(r3) ? r3 = n2.__k[o3] = m(k, { children: r3 }, null, null, null) : void 0 === r3.constructor && r3.__b > 0 ? r3 = n2.__k[o3] = m(r3.type, r3.props, r3.key, r3.ref ? r3.ref : null, r3.__v) : n2.__k[o3] = r3, f4 = o3 + h3, r3.__ = n2, r3.__b = n2.__b + 1, e3 = null, -1 != (c3 = r3.__i = L(r3, u4, f4, a3)) && (a3--, (e3 = u4[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof r3.type && (r3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, r3.__u |= 4))) : n2.__k[o3] = null;
  if (a3) for (o3 = 0; o3 < s3; o3++) null != (e3 = u4[o3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = S(e3)), D(e3, e3));
  return t3;
}
function A(n2, l3, u4, t3) {
  var i3, o3;
  if ("function" == typeof n2.type) {
    for (i3 = n2.__k, o3 = 0; i3 && o3 < i3.length; o3++) i3[o3] && (i3[o3].__ = n2, l3 = A(i3[o3], l3, u4, t3));
    return l3;
  }
  n2.__e != l3 && (t3 && (l3 && n2.type && !l3.parentNode && (l3 = S(n2)), u4.insertBefore(n2.__e, l3 || null)), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function H(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (d(n2) ? n2.some(function(n3) {
    H(n3, l3);
  }) : l3.push(n2)), l3;
}
function L(n2, l3, u4, t3) {
  var i3, o3, r3, e3 = n2.key, f4 = n2.type, c3 = l3[u4], s3 = null != c3 && 0 == (2 & c3.__u);
  if (null === c3 && null == e3 || s3 && e3 == c3.key && f4 == c3.type) return u4;
  if (t3 > (s3 ? 1 : 0)) {
    for (i3 = u4 - 1, o3 = u4 + 1; i3 >= 0 || o3 < l3.length; ) if (null != (c3 = l3[r3 = i3 >= 0 ? i3-- : o3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f4 == c3.type) return r3;
  }
  return -1;
}
function T(n2, l3, u4) {
  "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || y.test(l3) ? u4 : u4 + "px";
}
function j(n2, l3, u4, t3, i3) {
  var o3, r3;
  n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
  else {
    if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || T(n2.style, l3, "");
    if (u4) for (l3 in u4) t3 && u4[l3] == t3[l3] || T(n2.style, l3, u4[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) o3 = l3 != (l3 = l3.replace(f, "$1")), r3 = l3.toLowerCase(), l3 = r3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? r3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = c, n2.addEventListener(l3, o3 ? a : s, o3)) : n2.removeEventListener(l3, o3 ? a : s, o3);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u4 ? "" : u4;
      break n;
    } catch (n3) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
  }
}
function F(n2) {
  return function(u4) {
    if (this.l) {
      var t3 = this.l[u4.type + n2];
      if (null == u4.t) u4.t = c++;
      else if (u4.t < t3.u) return;
      return t3(l.event ? l.event(u4) : u4);
    }
  };
}
function O(n2, u4, t3, i3, o3, r3, e3, f4, c3, s3) {
  var a3, h3, p3, v3, y3, _2, m3, b2, S2, C3, M2, $2, P2, A3, H2, L2, T3, j3 = u4.type;
  if (void 0 !== u4.constructor) return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [f4 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
  n: if ("function" == typeof j3) try {
    if (b2 = u4.props, S2 = "prototype" in j3 && j3.prototype.render, C3 = (a3 = j3.contextType) && i3[a3.__c], M2 = a3 ? C3 ? C3.props.value : a3.__ : i3, t3.__c ? m3 = (h3 = u4.__c = t3.__c).__ = h3.__E : (S2 ? u4.__c = h3 = new j3(b2, M2) : (u4.__c = h3 = new x(b2, M2), h3.constructor = j3, h3.render = E), C3 && C3.sub(h3), h3.state || (h3.state = {}), h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, j3.getDerivedStateFromProps(b2, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u4, p3) S2 && null == j3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (S2 && null == j3.getDerivedStateFromProps && b2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b2, M2), u4.__v == t3.__v || !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b2, h3.__s, M2)) {
        for (u4.__v != t3.__v && (h3.props = b2, h3.state = h3.__s, h3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
          n3 && (n3.__ = u4);
        }), $2 = 0; $2 < h3._sb.length; $2++) h3.__h.push(h3._sb[$2]);
        h3._sb = [], h3.__h.length && e3.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(b2, h3.__s, M2), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(v3, y3, _2);
      });
    }
    if (h3.context = M2, h3.props = b2, h3.__P = n2, h3.__e = false, P2 = l.__r, A3 = 0, S2) {
      for (h3.state = h3.__s, h3.__d = false, P2 && P2(u4), a3 = h3.render(h3.props, h3.state, h3.context), H2 = 0; H2 < h3._sb.length; H2++) h3.__h.push(h3._sb[H2]);
      h3._sb = [];
    } else do {
      h3.__d = false, P2 && P2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A3 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i3 = w(w({}, i3), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(v3, y3)), L2 = a3, null != a3 && a3.type === k && null == a3.key && (L2 = V(a3.props.children)), f4 = I(n2, d(L2) ? L2 : [L2], u4, t3, i3, o3, r3, e3, f4, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u4.__v = null, c3 || null != r3) if (n3.then) {
      for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
      r3[r3.indexOf(f4)] = null, u4.__e = f4;
    } else {
      for (T3 = r3.length; T3--; ) g(r3[T3]);
      z(u4);
    }
    else u4.__e = t3.__e, u4.__k = t3.__k, n3.then || z(u4);
    l.__e(n3, u4, t3);
  }
  else null == r3 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = q(t3.__e, u4, t3, i3, o3, r3, e3, c3, s3);
  return (a3 = l.diffed) && a3(u4), 128 & u4.__u ? void 0 : f4;
}
function z(n2) {
  n2 && n2.__c && (n2.__c.__e = true), n2 && n2.__k && n2.__k.forEach(z);
}
function N(n2, u4, t3) {
  for (var i3 = 0; i3 < t3.length; i3++) B(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u4, n2), n2.some(function(u5) {
    try {
      n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
        n3.call(u5);
      });
    } catch (n3) {
      l.__e(n3, u5.__v);
    }
  });
}
function V(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : d(n2) ? n2.map(V) : w({}, n2);
}
function q(u4, t3, i3, o3, r3, e3, f4, c3, s3) {
  var a3, h3, v3, y3, w3, _2, m3, b2 = i3.props || p, k3 = t3.props, x2 = t3.type;
  if ("svg" == x2 ? r3 = "http://www.w3.org/2000/svg" : "math" == x2 ? r3 = "http://www.w3.org/1998/Math/MathML" : r3 || (r3 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (a3 = 0; a3 < e3.length; a3++) if ((w3 = e3[a3]) && "setAttribute" in w3 == !!x2 && (x2 ? w3.localName == x2 : 3 == w3.nodeType)) {
      u4 = w3, e3[a3] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x2) return document.createTextNode(k3);
    u4 = document.createElementNS(r3, x2, k3.is && k3), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
  }
  if (null == x2) b2 === k3 || c3 && u4.data == k3 || (u4.data = k3);
  else {
    if (e3 = e3 && n.call(u4.childNodes), !c3 && null != e3) for (b2 = {}, a3 = 0; a3 < u4.attributes.length; a3++) b2[(w3 = u4.attributes[a3]).name] = w3.value;
    for (a3 in b2) if (w3 = b2[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) v3 = w3;
    else if (!(a3 in k3)) {
      if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
      j(u4, a3, null, w3, r3);
    }
    for (a3 in k3) w3 = k3[a3], "children" == a3 ? y3 = w3 : "dangerouslySetInnerHTML" == a3 ? h3 = w3 : "value" == a3 ? _2 = w3 : "checked" == a3 ? m3 = w3 : c3 && "function" != typeof w3 || b2[a3] === w3 || j(u4, a3, w3, b2[a3], r3);
    if (h3) c3 || v3 && (h3.__html == v3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
    else if (v3 && (u4.innerHTML = ""), I("template" == t3.type ? u4.content : u4, d(y3) ? y3 : [y3], t3, i3, o3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : r3, e3, f4, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
    c3 || (a3 = "value", "progress" == x2 && null == _2 ? u4.removeAttribute("value") : null != _2 && (_2 !== u4[a3] || "progress" == x2 && !_2 || "option" == x2 && _2 != b2[a3]) && j(u4, a3, _2, b2[a3], r3), a3 = "checked", null != m3 && m3 != u4[a3] && j(u4, a3, m3, b2[a3], r3));
  }
  return u4;
}
function B(n2, u4, t3) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u4 || (n2.__u = n2(u4));
    } else n2.current = u4;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function D(n2, u4, t3) {
  var i3, o3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || B(i3, null, u4)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u4);
    }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k) for (o3 = 0; o3 < i3.length; o3++) i3[o3] && D(i3[o3], u4, t3 || "function" != typeof n2.type);
  t3 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function E(n2, l3, u4) {
  return this.constructor(n2, u4);
}
function G(u4, t3, i3) {
  var o3, r3, e3, f4;
  t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f4 = [], O(t3, u4 = (!o3 && i3 || t3).__k = _(k, null, [u4]), r3 || p, p, t3.namespaceURI, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, f4), N(e3, u4, f4);
}
function J(n2, l3) {
  G(n2, l3, J);
}
function K(l3, u4, t3) {
  var i3, o3, r3, e3, f4 = w({}, l3.props);
  for (r3 in l3.type && l3.type.defaultProps && (e3 = l3.type.defaultProps), u4) "key" == r3 ? i3 = u4[r3] : "ref" == r3 ? o3 = u4[r3] : f4[r3] = void 0 === u4[r3] && null != e3 ? e3[r3] : u4[r3];
  return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), m(l3.type, f4, i3 || l3.key, o3 || l3.ref, null);
}
function Q(n2) {
  function l3(n3) {
    var u4, t3;
    return this.getChildContext || (u4 = /* @__PURE__ */ new Set(), (t3 = {})[l3.__c] = this, this.getChildContext = function() {
      return t3;
    }, this.componentWillUnmount = function() {
      u4 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value != n4.value && u4.forEach(function(n5) {
        n5.__e = true, M(n5);
      });
    }, this.sub = function(n4) {
      u4.add(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4 && u4.delete(n4), l4 && l4.call(n4);
      };
    }), n3.children;
  }
  return l3.__c = "__cC" + h++, l3.__ = n2, l3.Provider = l3.__l = (l3.Consumer = function(n3, l4) {
    return n3.children(l4);
  }).contextType = l3, l3;
}
n = v.slice, l = { __e: function(n2, l3, u4, t3) {
  for (var i3, o3, r3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
    if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3) return i3.__E = i3;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, x.prototype.setState = function(n2, l3) {
  var u4;
  u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, u4), this.props)), n2 && w(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
}
function d2(n2) {
  return o2 = 1, h2(D2, n2);
}
function h2(n2, u4, i3) {
  var o3 = p2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u4) : D2(void 0, u4), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f4 = function(n3, t3, r3) {
      if (!o3.__c.__H) return true;
      var u5 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u5.every(function(n4) {
        return !n4.__N;
      })) return !c3 || c3.call(this, n3, t3, r3);
      var i4 = o3.__c.props !== n3;
      return u5.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), c3 && c3.call(this, n3, t3, r3) || i4;
    };
    r2.__f = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u5 = c3;
        c3 = void 0, f4(n3, t3, r3), c3 = u5;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f4;
  }
  return o3.__N || o3.__;
}
function y2(n2, u4) {
  var i3 = p2(t2++, 3);
  !c2.__s && C2(i3.__H, u4) && (i3.__ = n2, i3.u = u4, r2.__H.__h.push(i3));
}
function A2(n2) {
  return o2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function T2(n2, r3) {
  var u4 = p2(t2++, 7);
  return C2(u4.__H, r3) && (u4.__ = n2(), u4.__H = r3, u4.__h = n2), u4.__;
}
function q2(n2, t3) {
  return o2 = 8, T2(function() {
    return n2;
  }, t3);
}
function j2() {
  for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
  } catch (t3) {
    n2.__H.__h = [], c2.__e(t3, n2.__v);
  }
}
c2.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
  })), u2 = r2 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r3) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r3, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m2 && m2(n2);
  var t3, r3 = n2.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u4 = setTimeout(r3, 35);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u4 = n2.__c;
  "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function D2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// content/modules/mds-command-center/hooks/useCommandCenter.js
function useCommandCenter({ facilityName, orgSlug }) {
  const [data, setData] = d2(null);
  const [loading, setLoading] = d2(true);
  const [error, setError] = d2(null);
  const fetchData = q2(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        facilityName,
        orgSlug,
        windowDays: "30"
      });
      const result = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/dashboard?${params}`,
        options: { method: "GET" }
      });
      if (!result.success) {
        throw new Error(result.error || "Failed to load MDS dashboard data");
      }
      setData(result.data);
    } catch (err) {
      console.error("[MDSCommandCenter] Failed to fetch dashboard:", err);
      setError(err.message || "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug]);
  y2(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error, retry: fetchData };
}

// content/modules/mds-command-center/hooks/useDocRisks.js
function useDocRisks({ facilityName, orgSlug, windowDays = 30, enabled = false }) {
  const [data, setData] = d2(null);
  const [loading, setLoading] = d2(false);
  const [error, setError] = d2(null);
  y2(() => {
    if (!enabled || !facilityName) {
      setData(null);
      setError(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    async function fetchDocRisks() {
      try {
        const authState = await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" });
        if (!authState.authenticated) {
          throw new Error("Please log in to view documentation risks");
        }
        const orgResponse = getOrg();
        const resolvedOrg = orgSlug || orgResponse?.org;
        const params = new URLSearchParams({
          facilityName,
          orgSlug: resolvedOrg,
          windowDays: String(windowDays)
        });
        const result = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/doc-risks?${params}`,
          options: { method: "GET" }
        });
        if (!result.success) {
          throw new Error(result.error || "Failed to load documentation risks");
        }
        if (!cancelled) setData(result.data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load documentation risks");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchDocRisks();
    return () => {
      cancelled = true;
    };
  }, [facilityName, orgSlug, windowDays, enabled]);
  return { data, loading, error };
}

// content/modules/certifications/hooks/useCertDashboard.js
function useCertDashboard({ facilityName, orgSlug, enabled = false }) {
  const [data, setData] = d2(null);
  const [loading, setLoading] = d2(false);
  const [error, setError] = d2(null);
  const fetchData = q2(async () => {
    if (!enabled || !facilityName || !orgSlug) return;
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ facilityName, orgSlug });
      const result = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/certifications/dashboard?${params}`,
        options: { method: "GET" }
      });
      if (!result.success) {
        setData(null);
        return;
      }
      setData(result.data || null);
    } catch (err) {
      console.warn("[Certifications] Dashboard unavailable:", err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug, enabled]);
  y2(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error, retry: fetchData };
}

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f3 = 0;
function u3(e3, t3, n2, o3, i3, u4) {
  t3 || (t3 = {});
  var a3, c3, p3 = t3;
  if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
  var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i3, __self: u4 };
  if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
  return l.vnode && l.vnode(l3), l3;
}

// content/components/Selector.jsx
function Selector({
  options = [],
  value,
  onChange,
  placeholder = "Select\u2026",
  size = "default",
  searchable = false,
  searchPlaceholder = "Search\u2026",
  className = "",
  ariaLabel,
  align = "left"
}) {
  const [open, setOpen] = d2(false);
  const [query, setQuery] = d2("");
  const [hlIdx, setHlIdx] = d2(-1);
  const rootRef = A2(null);
  const searchRef = A2(null);
  const listRef = A2(null);
  const selected = options.find((o3) => o3.value === value) || null;
  y2(() => {
    if (!open) return;
    const handler = (e3) => {
      if (rootRef.current && !rootRef.current.contains(e3.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler, true);
    return () => document.removeEventListener("mousedown", handler, true);
  }, [open]);
  y2(() => {
    if (open) {
      setQuery("");
      setHlIdx(-1);
      if (searchable && searchRef.current) {
        requestAnimationFrame(() => searchRef.current?.focus({ preventScroll: true }));
      }
    }
  }, [open, searchable]);
  const lowerQ = query.toLowerCase();
  const filtered = query ? options.filter(
    (o3) => o3.label.toLowerCase().includes(lowerQ) || o3.subtitle && o3.subtitle.toLowerCase().includes(lowerQ) || o3.badge && o3.badge.toLowerCase().includes(lowerQ)
  ) : options;
  const onKeyDown = q2((e3) => {
    if (!open && (e3.key === "Enter" || e3.key === " " || e3.key === "ArrowDown")) {
      e3.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;
    switch (e3.key) {
      case "ArrowDown":
        e3.preventDefault();
        setHlIdx((i3) => Math.min(i3 + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        e3.preventDefault();
        setHlIdx((i3) => Math.max(i3 - 1, 0));
        break;
      case "Enter":
        e3.preventDefault();
        if (hlIdx >= 0 && filtered[hlIdx]) {
          onChange(filtered[hlIdx].value);
          setOpen(false);
        }
        break;
      case "Escape":
        e3.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }, [open, hlIdx, filtered, onChange]);
  y2(() => {
    if (hlIdx < 0 || !listRef.current) return;
    const items = listRef.current.children;
    items[hlIdx]?.scrollIntoView({ block: "nearest" });
  }, [hlIdx]);
  const isCompact = size === "compact";
  return /* @__PURE__ */ u3(
    "div",
    {
      class: `ss__root${isCompact ? " ss__root--compact" : ""} ${className}`,
      ref: rootRef,
      onKeyDown,
      children: [
        /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            class: `ss__trigger${open ? " ss__trigger--open" : ""}`,
            onClick: () => setOpen(!open),
            "aria-haspopup": "listbox",
            "aria-expanded": open,
            "aria-label": ariaLabel,
            children: [
              /* @__PURE__ */ u3("span", { class: "ss__trigger-text", children: selected ? selected.label : /* @__PURE__ */ u3("span", { class: "ss__placeholder", children: placeholder }) }),
              /* @__PURE__ */ u3("svg", { class: `ss__chevron${open ? " ss__chevron--open" : ""}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
            ]
          }
        ),
        open && /* @__PURE__ */ u3("div", { class: `ss__dropdown${align === "right" ? " ss__dropdown--right" : ""}`, role: "listbox", children: [
          searchable && /* @__PURE__ */ u3("div", { class: "ss__search-wrap", children: [
            /* @__PURE__ */ u3("svg", { class: "ss__search-icon", width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
              /* @__PURE__ */ u3("circle", { cx: "11", cy: "11", r: "8" }),
              /* @__PURE__ */ u3("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
            ] }),
            /* @__PURE__ */ u3(
              "input",
              {
                ref: searchRef,
                class: "ss__search",
                type: "text",
                placeholder: searchPlaceholder,
                value: query,
                onInput: (e3) => {
                  setQuery(e3.target.value);
                  setHlIdx(-1);
                },
                autocomplete: "off"
              }
            )
          ] }),
          /* @__PURE__ */ u3("div", { class: "ss__list", ref: listRef, children: [
            filtered.map((opt, i3) => {
              const isActive = opt.value === value;
              const isHl = i3 === hlIdx;
              return /* @__PURE__ */ u3(
                "button",
                {
                  type: "button",
                  class: `ss__option${isActive ? " ss__option--active" : ""}${isHl ? " ss__option--hl" : ""}`,
                  role: "option",
                  "aria-selected": isActive,
                  onClick: () => {
                    onChange(opt.value);
                    setOpen(false);
                  },
                  onMouseEnter: () => setHlIdx(i3),
                  children: [
                    /* @__PURE__ */ u3("div", { class: "ss__option-body", children: [
                      /* @__PURE__ */ u3("span", { class: "ss__option-label", children: opt.label }),
                      opt.subtitle && /* @__PURE__ */ u3("span", { class: "ss__option-sub", children: opt.subtitle })
                    ] }),
                    opt.badge && /* @__PURE__ */ u3("span", { class: "ss__option-badge", children: opt.badge }),
                    isActive && /* @__PURE__ */ u3("svg", { class: "ss__check", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 7L6 10L11 4", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                  ]
                },
                opt.value
              );
            }),
            filtered.length === 0 && /* @__PURE__ */ u3("div", { class: "ss__empty", children: "No matches" })
          ] })
        ] })
      ]
    }
  );
}

// content/modules/mds-command-center/CommandCenterHeader.jsx
var URGENCY_PILLS = [
  { value: "all", label: "All", color: null },
  { value: "overdue", label: "Overdue", color: "#ef4444" },
  { value: "urgent", label: "Urgent", color: "#f97316" },
  { value: "approaching", label: "Approaching", color: "#eab308" },
  { value: "on_track", label: "On Track", color: "#22c55e" }
];
function StatPill({ value, label, highlight }) {
  return /* @__PURE__ */ u3("span", { class: `mds-cc__stat${highlight ? " mds-cc__stat--highlight" : ""}`, children: [
    /* @__PURE__ */ u3("strong", { children: value }),
    " ",
    label
  ] });
}
function CommandCenterHeader({
  summary,
  facilityName,
  onClose,
  activeView,
  onViewChange,
  queryCount,
  certCount,
  certsEnabled,
  docRiskCount,
  payerFilter,
  onPayerFilterChange,
  classFilter,
  onClassFilterChange,
  focusFilter,
  onFocusFilterChange,
  urgencyFilter,
  onUrgencyFilterChange
}) {
  const total = summary?.total ?? 0;
  const urgentCount = summary?.urgent ?? 0;
  const hippsCount = summary?.hippsImprovements ?? summary?.withHippsImprovements ?? 0;
  const pendingQueryCount = summary?.pendingQueries ?? summary?.pendingQueriesCount ?? 0;
  const revenuePerDay = summary?.totalRevenueOpportunityPerDay ?? 0;
  return /* @__PURE__ */ u3("div", { class: "mds-cc__header", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__title-row", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__title-group", children: [
        /* @__PURE__ */ u3("span", { class: "mds-cc__title", children: "MDS Command Center" }),
        facilityName && /* @__PURE__ */ u3("span", { class: "mds-cc__facility-name", children: facilityName })
      ] }),
      /* @__PURE__ */ u3("button", { class: "mds-cc__close-btn", onClick: onClose, "aria-label": "Close", children: /* @__PURE__ */ u3("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
        /* @__PURE__ */ u3("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ u3("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ] }) })
    ] }),
    /* @__PURE__ */ u3("div", { class: "mds-cc__stats-strip", children: [
      /* @__PURE__ */ u3(StatPill, { value: total, label: "assessments" }),
      /* @__PURE__ */ u3("span", { class: "mds-cc__stats-sep", children: "|" }),
      /* @__PURE__ */ u3(StatPill, { value: urgentCount, label: "urgent", highlight: urgentCount > 0 }),
      revenuePerDay > 0 && /* @__PURE__ */ u3(k, { children: [
        /* @__PURE__ */ u3("span", { class: "mds-cc__stats-sep", children: "|" }),
        /* @__PURE__ */ u3("span", { class: "mds-cc__stat mds-cc__stat--revenue", children: [
          /* @__PURE__ */ u3("strong", { children: [
            "$",
            Math.round(revenuePerDay),
            "/day available"
          ] }),
          hippsCount > 0 && /* @__PURE__ */ u3("span", { class: "mds-cc__stat-sub", children: [
            " across ",
            hippsCount,
            " improvements"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u3("span", { class: "mds-cc__stats-sep", children: "|" }),
      /* @__PURE__ */ u3(StatPill, { value: pendingQueryCount, label: "pending queries", highlight: pendingQueryCount > 0 }),
      docRiskCount > 0 && /* @__PURE__ */ u3(k, { children: [
        /* @__PURE__ */ u3("span", { class: "mds-cc__stats-sep", children: "|" }),
        /* @__PURE__ */ u3("span", { class: "mds-cc__stat mds-cc__stat--amber", children: [
          "\u26A0",
          " ",
          /* @__PURE__ */ u3("strong", { children: docRiskCount }),
          " doc risk",
          docRiskCount !== 1 ? "s" : ""
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: "mds-cc__view-switcher", children: [
      /* @__PURE__ */ u3(
        "button",
        {
          class: `mds-cc__view-tab${activeView === "overview" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => onViewChange("overview"),
          children: "Overview"
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          class: `mds-cc__view-tab${activeView === "assessments" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => onViewChange("assessments"),
          children: "Assessments"
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          class: `mds-cc__view-tab${activeView === "queries" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => onViewChange("queries"),
          children: [
            "Queries",
            queryCount > 0 && /* @__PURE__ */ u3("span", { class: "mds-cc__view-tab-badge", children: queryCount })
          ]
        }
      ),
      certsEnabled && /* @__PURE__ */ u3(
        "button",
        {
          class: `mds-cc__view-tab${activeView === "certs" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => onViewChange("certs"),
          children: [
            "Certs",
            certCount > 0 && /* @__PURE__ */ u3("span", { class: "mds-cc__view-tab-badge", children: certCount })
          ]
        }
      ),
      docRiskCount > 0 && /* @__PURE__ */ u3(
        "button",
        {
          class: `mds-cc__view-tab${activeView === "docRisks" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => onViewChange("docRisks"),
          children: [
            "Doc Risks",
            /* @__PURE__ */ u3("span", { class: "mds-cc__view-tab-badge mds-cc__view-tab-badge--amber", children: docRiskCount })
          ]
        }
      )
    ] }),
    activeView === "assessments" && /* @__PURE__ */ u3("div", { class: "mds-cc__filter-row", children: [
      /* @__PURE__ */ u3(
        Selector,
        {
          size: "compact",
          options: [
            { value: "all", label: "All Classes" },
            { value: "pps_payment", label: "PPS / Payment" },
            { value: "obra_cmi", label: "OBRA / CMI" },
            { value: "end_of_stay", label: "End of Stay" }
          ],
          value: classFilter,
          onChange: onClassFilterChange,
          ariaLabel: "Assessment class filter"
        }
      ),
      /* @__PURE__ */ u3(
        Selector,
        {
          size: "compact",
          options: [
            { value: "all", label: "All Payers" },
            { value: "medicare_a", label: "Medicare A" },
            { value: "medicaid", label: "Medicaid" },
            { value: "managed_care", label: "Managed Care" }
          ],
          value: payerFilter,
          onChange: onPayerFilterChange,
          ariaLabel: "Payer filter"
        }
      ),
      /* @__PURE__ */ u3(
        Selector,
        {
          size: "compact",
          options: [
            { value: "all", label: "All Assessments" },
            { value: "revenue", label: "Revenue Opportunities" },
            { value: "issues", label: "Has Issues" }
          ],
          value: focusFilter,
          onChange: onFocusFilterChange,
          ariaLabel: "Focus filter"
        }
      )
    ] }),
    activeView === "assessments" && onUrgencyFilterChange && /* @__PURE__ */ u3("div", { class: "mds-cc__urgency-pills", children: [
      URGENCY_PILLS.map((pill) => {
        const isActive = urgencyFilter === pill.value;
        return /* @__PURE__ */ u3(
          "button",
          {
            class: `mds-cc__urgency-pill${isActive ? " mds-cc__urgency-pill--active" : ""}`,
            style: isActive && pill.color ? { background: pill.color, borderColor: pill.color, color: "#fff" } : void 0,
            onClick: () => onUrgencyFilterChange(pill.value),
            children: [
              pill.color && /* @__PURE__ */ u3("span", { class: "mds-cc__urgency-pill-dot", style: { background: isActive ? "#fff" : pill.color } }),
              pill.label
            ]
          },
          pill.value
        );
      }),
      onFocusFilterChange && /* @__PURE__ */ u3(
        "button",
        {
          class: `mds-cc__urgency-pill mds-cc__revenue-pill${focusFilter === "revenue" ? " mds-cc__revenue-pill--active" : ""}`,
          onClick: () => onFocusFilterChange(focusFilter === "revenue" ? "all" : "revenue"),
          title: "Show only assessments with revenue opportunities",
          children: [
            /* @__PURE__ */ u3("span", { class: "mds-cc__revenue-pill-icon", children: "$" }),
            "Revenue"
          ]
        }
      )
    ] })
  ] });
}

// content/modules/certifications/hooks/useCertifications.js
function useCertifications({ facilityName, orgSlug, status, patientId }) {
  const [certs, setCerts] = d2([]);
  const [loading, setLoading] = d2(true);
  const [error, setError] = d2(null);
  const fetchData = q2(async () => {
    if (!facilityName || !orgSlug) return;
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ facilityName, orgSlug });
      if (status) params.set("status", status);
      if (patientId) params.set("patientId", patientId);
      const result = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/certifications?${params}`,
        options: { method: "GET" }
      });
      if (!result.success) {
        throw new Error(result.error || "Failed to load certifications");
      }
      setCerts(result.data?.certifications || []);
    } catch (err) {
      console.error("[Certifications] Failed to fetch certifications:", err);
      setError(err.message || "Failed to load certifications");
    } finally {
      setLoading(false);
    }
  }, [facilityName, orgSlug, status, patientId]);
  y2(() => {
    fetchData();
  }, [fetchData]);
  return { certs, loading, error, refetch: fetchData };
}

// content/modules/certifications/components/CertTypeBadge.jsx
var TYPE_CONFIG = {
  initial: { label: "Initial", cls: "cert__type-badge--initial" },
  day_14_recert: { label: "Day 14", cls: "cert__type-badge--recert" },
  day_30_recert: { label: "Day 30", cls: "cert__type-badge--recert" }
};
function CertTypeBadge({ type }) {
  const config = TYPE_CONFIG[type];
  if (!config) return null;
  return /* @__PURE__ */ u3("span", { class: `cert__type-badge ${config.cls}`, children: config.label });
}

// content/modules/certifications/components/CertStatusBadge.jsx
function getDaysUntil(dateStr) {
  if (!dateStr) return null;
  const due = new Date(dateStr);
  const now = /* @__PURE__ */ new Date();
  due.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return Math.floor((due - now) / 864e5);
}
function formatShortDate(dateStr) {
  if (!dateStr) return "";
  const d3 = new Date(dateStr);
  if (isNaN(d3)) return dateStr;
  return d3.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function CertStatusBadge({ status, isDelayed, dueDate, signedAt }) {
  const daysUntil = getDaysUntil(dueDate);
  const isOverdue = daysUntil !== null && daysUntil < 0;
  const isDueSoon = daysUntil !== null && daysUntil >= 0 && daysUntil <= 3;
  if ((isDelayed || status === "delayed") && isOverdue) {
    const daysOver = Math.abs(daysUntil);
    return /* @__PURE__ */ u3("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      daysOver,
      " DAY",
      daysOver !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (isOverdue && (status === "pending" || status === "sent")) {
    const daysOver = Math.abs(daysUntil);
    return /* @__PURE__ */ u3("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      daysOver,
      " DAY",
      daysOver !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (isDueSoon && status !== "signed" && status !== "skipped") {
    const label = daysUntil === 0 ? "DUE TODAY" : `DUE IN ${daysUntil} DAY${daysUntil !== 1 ? "S" : ""}`;
    return /* @__PURE__ */ u3("span", { class: "cert__status-badge cert__status-badge--due-soon", children: label });
  }
  if (status === "sent") {
    return /* @__PURE__ */ u3("span", { class: "cert__status-badge cert__status-badge--awaiting", children: "AWAITING SIGNATURE" });
  }
  if (status === "signed") {
    return /* @__PURE__ */ u3("span", { class: "cert__status-badge cert__status-badge--signed", children: [
      "Signed ",
      formatShortDate(signedAt)
    ] });
  }
  if (status === "delayed" || isDelayed) {
    return /* @__PURE__ */ u3("span", { class: "cert__status-badge cert__status-badge--delayed", children: "DELAYED" });
  }
  if (status === "skipped") {
    return /* @__PURE__ */ u3("span", { class: "cert__status-badge cert__status-badge--skipped", children: "SKIPPED" });
  }
  return /* @__PURE__ */ u3("span", { class: "cert__status-badge cert__status-badge--pending", children: "PENDING" });
}

// content/modules/certifications/components/MAPayerBadge.jsx
function MAPayerBadge({ payerType }) {
  if (payerType !== "managed_care") return null;
  return /* @__PURE__ */ u3("span", { class: "cert__ma-badge", children: "MA" });
}

// content/modules/certifications/components/CertListRow.jsx
function formatShortDate2(dateStr) {
  if (!dateStr) return "";
  const d3 = new Date(dateStr);
  if (isNaN(d3)) return dateStr;
  return d3.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function formatDateTime(dateStr) {
  if (!dateStr) return "";
  const d3 = new Date(dateStr);
  if (isNaN(d3)) return dateStr;
  return d3.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
function getDaysUntil2(dateStr) {
  if (!dateStr) return null;
  const due = new Date(dateStr);
  const now = /* @__PURE__ */ new Date();
  due.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return Math.floor((due - now) / 864e5);
}
function getPrimaryAction(cert) {
  const daysUntil = getDaysUntil2(cert.dueDate);
  const isOverdue = daysUntil !== null && daysUntil < 0;
  const hasSends = cert.sends?.length > 0;
  if (cert.status === "skipped") {
    return { label: "Unskip", variant: "ghost", action: "unskip" };
  }
  if (cert.status === "signed") {
    return null;
  }
  if (isOverdue) {
    return { label: hasSends ? "Resend" : "Send", variant: "destructive", action: "send" };
  }
  if (cert.status === "delayed") {
    return { label: hasSends ? "Resend" : "Send", variant: "destructive", action: "send" };
  }
  if (hasSends) {
    return { label: "Resend", variant: "outline", action: "send" };
  }
  return { label: "Send", variant: "primary", action: "send" };
}
function SendHistorySummary({ sends }) {
  if (!sends || sends.length === 0) return null;
  const label = sends.length === 1 ? `Sent to ${sends[0].practitionerName}` : `Sent ${sends.length} times`;
  return /* @__PURE__ */ u3("span", { class: "cert__row-meta cert__row-meta--link cert__sends-summary", children: label });
}
function SendHistoryExpanded({ sends }) {
  return /* @__PURE__ */ u3("div", { class: "cert__sends-detail", children: sends.map((s3, i3) => /* @__PURE__ */ u3("div", { class: "cert__sends-detail-row", children: [
    /* @__PURE__ */ u3("span", { class: "cert__sends-detail-name", children: [
      s3.practitionerName,
      s3.practitionerTitle ? `, ${s3.practitionerTitle}` : ""
    ] }),
    /* @__PURE__ */ u3("span", { class: "cert__sends-detail-date", children: formatDateTime(s3.sentAt) }),
    s3.smsStatus && /* @__PURE__ */ u3("span", { class: `cert__sends-detail-status cert__sends-detail-status--${s3.smsStatus}`, children: s3.smsStatus })
  ] }, i3)) });
}
function CertListRow({ cert, compact, onSend, onSkip, onUnskip, onDelay, onEditReason, onViewPractitioner }) {
  const [menuOpen, setMenuOpen] = d2(false);
  const [sendsExpanded, setSendsExpanded] = d2(false);
  const menuRef = A2(null);
  y2(() => {
    if (!menuOpen) return;
    const handleClick = (e3) => {
      if (menuRef.current && !menuRef.current.contains(e3.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [menuOpen]);
  const primaryAction = getPrimaryAction(cert);
  const isRecert = cert.type === "day_14_recert" || cert.type === "day_30_recert";
  const showSkip = cert.status !== "skipped" && cert.status !== "signed";
  const showDelay = cert.status === "pending" && !cert.isDelayed && cert.status !== "signed";
  const showEditReason = isRecert && cert.status !== "signed";
  const hasSends = cert.sends?.length > 0;
  const daysUntil = getDaysUntil2(cert.dueDate);
  const isOverdue = daysUntil !== null && daysUntil < 0;
  const isDueSoon = daysUntil !== null && daysUntil >= 0 && daysUntil <= 3;
  let urgencyClass = "";
  if (cert.status === "signed") urgencyClass = " cert__row--signed";
  else if (cert.status === "skipped") urgencyClass = " cert__row--skipped";
  else if (isOverdue || cert.isDelayed) urgencyClass = " cert__row--overdue";
  else if (isDueSoon) urgencyClass = " cert__row--due-soon";
  function handlePrimaryClick(e3) {
    e3.stopPropagation();
    if (!primaryAction) return;
    if (primaryAction.action === "send") onSend?.(cert);
    if (primaryAction.action === "unskip") onUnskip?.(cert);
  }
  function handleMenuAction(action) {
    setMenuOpen(false);
    if (action === "skip") onSkip?.(cert);
    if (action === "delay") onDelay?.(cert);
    if (action === "editReason") onEditReason?.(cert);
  }
  return /* @__PURE__ */ u3("div", { class: `cert__row${urgencyClass}`, children: [
    /* @__PURE__ */ u3("div", { class: "cert__row-top", children: [
      /* @__PURE__ */ u3("div", { class: "cert__row-left", children: [
        /* @__PURE__ */ u3(CertTypeBadge, { type: cert.type }),
        !compact && /* @__PURE__ */ u3("span", { class: "cert__row-patient", children: cert.patientName }),
        !compact && /* @__PURE__ */ u3(MAPayerBadge, { payerType: cert.payerType })
      ] }),
      /* @__PURE__ */ u3("div", { class: "cert__row-right", children: [
        /* @__PURE__ */ u3(
          CertStatusBadge,
          {
            status: cert.status,
            isDelayed: cert.isDelayed,
            dueDate: cert.dueDate,
            signedAt: cert.signedAt
          }
        ),
        primaryAction && /* @__PURE__ */ u3(
          "button",
          {
            class: `cert__row-action cert__row-action--${primaryAction.variant}`,
            onClick: handlePrimaryClick,
            children: primaryAction.label
          }
        ),
        (showSkip || showDelay || showEditReason) && /* @__PURE__ */ u3("div", { class: "cert__row-menu-container", ref: menuRef, children: [
          /* @__PURE__ */ u3(
            "button",
            {
              class: "cert__row-menu-btn",
              onClick: (e3) => {
                e3.stopPropagation();
                setMenuOpen(!menuOpen);
              },
              "aria-label": "More actions",
              children: /* @__PURE__ */ u3("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: [
                /* @__PURE__ */ u3("circle", { cx: "8", cy: "3", r: "1.5" }),
                /* @__PURE__ */ u3("circle", { cx: "8", cy: "8", r: "1.5" }),
                /* @__PURE__ */ u3("circle", { cx: "8", cy: "13", r: "1.5" })
              ] })
            }
          ),
          menuOpen && /* @__PURE__ */ u3("div", { class: "cert__row-menu", children: [
            showSkip && /* @__PURE__ */ u3("button", { class: "cert__row-menu-item", onClick: () => handleMenuAction("skip"), children: "Skip Certification" }),
            showDelay && /* @__PURE__ */ u3("button", { class: "cert__row-menu-item", onClick: () => handleMenuAction("delay"), children: "Mark as Delayed" }),
            showEditReason && /* @__PURE__ */ u3("button", { class: "cert__row-menu-item", onClick: () => handleMenuAction("editReason"), children: "Edit Clinical Reason" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: "cert__row-bottom", children: [
      cert.dueDate && /* @__PURE__ */ u3("span", { class: "cert__row-meta", children: [
        "Due ",
        formatShortDate2(cert.dueDate)
      ] }),
      !compact && cert.currentMedicareDay != null && /* @__PURE__ */ u3("span", { class: "cert__row-meta", children: [
        "Medicare Day ",
        cert.currentMedicareDay
      ] }),
      hasSends && /* @__PURE__ */ u3("span", { onClick: (e3) => {
        e3.stopPropagation();
        setSendsExpanded(!sendsExpanded);
      }, children: /* @__PURE__ */ u3(SendHistorySummary, { sends: cert.sends }) }),
      cert.signedByName && /* @__PURE__ */ u3(
        "span",
        {
          class: `cert__row-meta${cert.signedByPractitionerId && onViewPractitioner ? " cert__row-meta--link" : ""}`,
          onClick: cert.signedByPractitionerId && onViewPractitioner ? (e3) => {
            e3.stopPropagation();
            onViewPractitioner(cert.signedByPractitionerId);
          } : void 0,
          children: [
            cert.signedByName,
            cert.signedByTitle ? `, ${cert.signedByTitle}` : ""
          ]
        }
      )
    ] }),
    sendsExpanded && hasSends && /* @__PURE__ */ u3(SendHistoryExpanded, { sends: cert.sends })
  ] });
}

// content/modules/certifications/components/StayTypeBadge.jsx
function StayTypeBadge({ payerType }) {
  const isManaged = payerType === "managed_care";
  return /* @__PURE__ */ u3("span", { class: `cert__stay-type-badge${isManaged ? " cert__stay-type-badge--managed" : ""}`, children: isManaged ? "Managed" : "Med A" });
}

// content/modules/certifications/components/StayGroupCard.jsx
function formatShortDate3(dateStr) {
  if (!dateStr) return "";
  const d3 = new Date(dateStr);
  if (isNaN(d3)) return dateStr;
  return d3.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function getDaysUntil3(dateStr) {
  if (!dateStr) return null;
  const due = new Date(dateStr);
  const now = /* @__PURE__ */ new Date();
  due.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return Math.floor((due - now) / 864e5);
}
var CHAIN_TYPES = ["initial", "day_14_recert", "day_30_recert"];
var CHAIN_LABELS = { initial: "I", day_14_recert: "14", day_30_recert: "30" };
function getChainDotVariant(cert) {
  if (!cert) return "empty";
  const days = getDaysUntil3(cert.dueDate);
  const isOverdue = days !== null && days < 0;
  if (cert.status === "signed") return "signed";
  if (cert.status === "skipped") return "skipped";
  if (isOverdue || cert.isDelayed) return "overdue";
  if (cert.status === "sent") return "sent";
  if (days !== null && days >= 0 && days <= 3) return "due-soon";
  return "pending";
}
function ChainIndicator({ allCerts }) {
  const certByType = {};
  for (const cert of allCerts) {
    certByType[cert.type] = cert;
  }
  return /* @__PURE__ */ u3("div", { class: "cert__chain-indicator", children: CHAIN_TYPES.map((type, i3) => {
    const cert = certByType[type];
    const variant = getChainDotVariant(cert);
    return /* @__PURE__ */ u3("span", { class: "cert__chain-item", children: [
      i3 > 0 && /* @__PURE__ */ u3("span", { class: "cert__chain-line" }),
      /* @__PURE__ */ u3("span", { class: `cert__chain-dot cert__chain-dot--${variant}` }),
      /* @__PURE__ */ u3("span", { class: `cert__chain-label cert__chain-label--${variant}`, children: CHAIN_LABELS[type] })
    ] }, type);
  }) });
}
function StayGroupCard({
  stayId,
  displayCerts,
  historyCerts,
  allCerts,
  onSend,
  onSkip,
  onDelay,
  onUnskip,
  onEditReason,
  onViewPractitioner
}) {
  const [historyOpen, setHistoryOpen] = d2(false);
  const first = allCerts[0];
  const patientName = first.patientName;
  const payerType = first.payerType;
  const currentMedicareDay = first.currentMedicareDay;
  const partAStartDate = first.partAStartDate;
  const hasOverdue = displayCerts.some((cert) => {
    const days = getDaysUntil3(cert.dueDate);
    return days !== null && days < 0 || cert.isDelayed;
  });
  const hasDueSoon = !hasOverdue && displayCerts.some((cert) => {
    const days = getDaysUntil3(cert.dueDate);
    return days !== null && days >= 0 && days <= 3;
  });
  let cardUrgency = "";
  if (hasOverdue) cardUrgency = " cert__stay-card--overdue";
  else if (hasDueSoon) cardUrgency = " cert__stay-card--due-soon";
  return /* @__PURE__ */ u3("div", { class: `cert__stay-card${cardUrgency}`, children: [
    /* @__PURE__ */ u3("div", { class: "cert__stay-header", children: [
      /* @__PURE__ */ u3("div", { class: "cert__stay-header-left", children: [
        /* @__PURE__ */ u3("span", { class: "cert__stay-patient", children: patientName }),
        /* @__PURE__ */ u3(StayTypeBadge, { payerType }),
        /* @__PURE__ */ u3(ChainIndicator, { allCerts })
      ] }),
      /* @__PURE__ */ u3("div", { class: "cert__stay-header-right", children: [
        currentMedicareDay != null && /* @__PURE__ */ u3("span", { class: "cert__stay-meta", children: [
          "Day ",
          currentMedicareDay
        ] }),
        partAStartDate && /* @__PURE__ */ u3("span", { class: "cert__stay-meta", children: formatShortDate3(partAStartDate) })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: "cert__stay-certs", children: displayCerts.map((cert) => /* @__PURE__ */ u3(
      CertListRow,
      {
        cert,
        compact: true,
        onSend,
        onSkip,
        onDelay,
        onUnskip,
        onEditReason,
        onViewPractitioner
      },
      cert.id
    )) }),
    historyCerts.length > 0 && /* @__PURE__ */ u3("div", { class: "cert__stay-history", children: [
      /* @__PURE__ */ u3(
        "button",
        {
          class: "cert__stay-history-toggle",
          onClick: () => setHistoryOpen(!historyOpen),
          children: [
            /* @__PURE__ */ u3("span", { class: "cert__stay-history-icon", children: historyOpen ? "\u25BC" : "\u25B6" }),
            historyCerts.length,
            " previous certification",
            historyCerts.length !== 1 ? "s" : ""
          ]
        }
      ),
      historyOpen && /* @__PURE__ */ u3("div", { class: "cert__stay-history-list", children: historyCerts.map((cert) => /* @__PURE__ */ u3(
        CertListRow,
        {
          cert,
          compact: true,
          onSend,
          onSkip,
          onDelay,
          onUnskip,
          onEditReason,
          onViewPractitioner
        },
        cert.id
      )) })
    ] })
  ] });
}

// content/modules/certifications/components/CertModal.jsx
function CertModal({ isOpen, onClose, title, subtitle, children, actions = [] }) {
  const overlayRef = A2(null);
  y2(() => {
    if (!isOpen) return;
    const handleKey = (e3) => {
      if (e3.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return /* @__PURE__ */ u3(
    "div",
    {
      class: "cm-overlay",
      ref: overlayRef,
      onClick: (e3) => {
        if (e3.target === overlayRef.current) onClose();
      },
      children: /* @__PURE__ */ u3("div", { class: "cm", children: [
        /* @__PURE__ */ u3("div", { class: "cm__header", children: [
          /* @__PURE__ */ u3("div", { class: "cm__header-text", children: [
            /* @__PURE__ */ u3("h2", { class: "cm__title", children: title }),
            subtitle && /* @__PURE__ */ u3("span", { class: "cm__subtitle", children: subtitle })
          ] }),
          /* @__PURE__ */ u3("button", { class: "cm__close", onClick: onClose, "aria-label": "Close", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", children: /* @__PURE__ */ u3("path", { d: "M1 1l12 12M13 1L1 13" }) }) })
        ] }),
        /* @__PURE__ */ u3("div", { class: "cm__body", children }),
        actions.length > 0 && /* @__PURE__ */ u3("div", { class: "cm__footer", children: actions.map((action, i3) => /* @__PURE__ */ u3(
          "button",
          {
            class: `cm__btn cm__btn--${action.variant || "secondary"}`,
            onClick: action.onClick,
            disabled: action.disabled,
            children: action.label
          },
          i3
        )) })
      ] })
    }
  );
}

// content/modules/certifications/components/DischargePlanPicker.jsx
var DISCHARGE_OPTIONS = [
  { value: "home_health", label: "Home Health Agency" },
  { value: "facility_care", label: "Facility Care" },
  { value: "other", label: "Other" }
];
function parseDischargePlan(str) {
  if (!str) return { option: "", otherText: "" };
  if (str === "Home Health Agency") return { option: "home_health", otherText: "" };
  if (str === "Facility Care") return { option: "facility_care", otherText: "" };
  if (str.startsWith("Other: ")) return { option: "other", otherText: str.slice(7) };
  return { option: "other", otherText: str };
}
function composeDischargePlan(option, otherText) {
  if (option === "home_health") return "Home Health Agency";
  if (option === "facility_care") return "Facility Care";
  if (option === "other") return `Other: ${otherText}`;
  return "";
}
function isDischargePlanValid(option, otherText) {
  if (!option) return false;
  if (option === "other") return otherText.trim().length > 0;
  return true;
}
function DischargePlanPicker({ option, otherText, onOptionChange, onOtherTextChange }) {
  return /* @__PURE__ */ u3("div", { class: "cm-discharge", children: [
    DISCHARGE_OPTIONS.map((opt) => /* @__PURE__ */ u3(
      "label",
      {
        class: `cm-discharge__option${option === opt.value ? " cm-discharge__option--selected" : ""}`,
        children: [
          /* @__PURE__ */ u3(
            "input",
            {
              type: "radio",
              class: "cm-discharge__radio",
              name: "dischargePlan",
              value: opt.value,
              checked: option === opt.value,
              onChange: () => onOptionChange(opt.value)
            }
          ),
          /* @__PURE__ */ u3("span", { class: "cm-discharge__dot" }),
          /* @__PURE__ */ u3("span", { class: "cm-discharge__label", children: opt.label })
        ]
      },
      opt.value
    )),
    option === "other" && /* @__PURE__ */ u3(
      "input",
      {
        class: "cm-input cm-discharge__other-input",
        type: "text",
        value: otherText,
        onInput: (e3) => onOtherTextChange(e3.target.value),
        placeholder: "e.g., Assisted living, long-term care, hospice...",
        autoFocus: true
      }
    )
  ] });
}

// content/modules/certifications/components/SendCertModal.jsx
function SendCertModal({ isOpen, onClose, cert, facilityName, orgSlug, onSent }) {
  const [clinicalReason, setClinicalReason] = d2("");
  const [estimatedDays, setEstimatedDays] = d2(30);
  const [dischargeOption, setDischargeOption] = d2("");
  const [dischargeOtherText, setDischargeOtherText] = d2("");
  const [delayReason, setDelayReason] = d2("");
  const [practitioners, setPractitioners] = d2([]);
  const [practitionersLoading, setPractitionersLoading] = d2(false);
  const [selectedPractitioners, setSelectedPractitioners] = d2(/* @__PURE__ */ new Set());
  const [sending, setSending] = d2(false);
  const isRecert = cert?.type === "day_14_recert" || cert?.type === "day_30_recert";
  const isDelayed = cert?.isDelayed;
  const certTypeLabel = cert?.type === "initial" ? "Initial" : cert?.type === "day_14_recert" ? "Day 14 Recert" : "Day 30 Recert";
  y2(() => {
    if (!isOpen || !cert) return;
    setClinicalReason(cert.clinicalReason || "");
    setEstimatedDays(cert.estimatedDays || 30);
    const parsed = parseDischargePlan(cert.planForDischarge);
    setDischargeOption(parsed.option);
    setDischargeOtherText(parsed.otherText);
    setDelayReason(cert.delayReason || "");
    setSelectedPractitioners(/* @__PURE__ */ new Set());
    setPractitionersLoading(true);
    window.CertAPI.fetchPractitioners(facilityName, orgSlug).then((practs) => setPractitioners(practs)).catch((err) => console.error("[Certifications] Failed to load practitioners:", err)).finally(() => setPractitionersLoading(false));
  }, [isOpen, cert?.id]);
  function handleSend() {
    if (selectedPractitioners.size === 0) return;
    if (isRecert && !clinicalReason.trim()) return;
    if (isRecert && !isDischargePlanValid(dischargeOption, dischargeOtherText)) return;
    if (isDelayed && !delayReason.trim()) return;
    setSending(true);
    const planForDischarge = composeDischargePlan(dischargeOption, dischargeOtherText);
    const saveReason = isRecert ? window.CertAPI.saveClinicalReason(cert.id, { clinicalReason, estimatedDays, planForDischarge }) : Promise.resolve();
    saveReason.then(() => window.CertAPI.sendCert(cert.id, [...selectedPractitioners], isDelayed ? delayReason : void 0)).then(() => {
      const names = practitioners.filter((p3) => selectedPractitioners.has(p3.id)).map((p3) => `${p3.firstName} ${p3.lastName}`);
      const recipientStr = names.length <= 2 ? names.join(" & ") : `${names.length} practitioners`;
      window.SuperToast?.success?.(`${certTypeLabel} for ${cert.patientName} sent to ${recipientStr}`);
      onSent?.();
      onClose();
    }).catch((err) => {
      console.error("[Certifications] Failed to send:", err);
      window.SuperToast?.error?.("Failed to send certification");
    }).finally(() => setSending(false));
  }
  function togglePractitioner(id) {
    setSelectedPractitioners((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
  function toggleAll() {
    setSelectedPractitioners(
      (prev) => prev.size === practitioners.length ? /* @__PURE__ */ new Set() : new Set(practitioners.map((p3) => p3.id))
    );
  }
  if (!cert) return null;
  const canSend = selectedPractitioners.size > 0 && (!isRecert || clinicalReason.trim()) && (!isRecert || isDischargePlanValid(dischargeOption, dischargeOtherText)) && (!isDelayed || delayReason.trim()) && !sending;
  return /* @__PURE__ */ u3(
    CertModal,
    {
      isOpen,
      onClose,
      title: "Send Certification",
      subtitle: `${cert.patientName} \xB7 ${certTypeLabel}`,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: onClose },
        {
          label: sending ? "Sending..." : `Send to ${selectedPractitioners.size} practitioner${selectedPractitioners.size !== 1 ? "s" : ""}`,
          variant: "primary",
          onClick: handleSend,
          disabled: !canSend
        }
      ],
      children: [
        isRecert && /* @__PURE__ */ u3("div", { class: "cm-section", children: [
          /* @__PURE__ */ u3("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ u3("span", { class: "cm-section__icon", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ u3("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
              /* @__PURE__ */ u3("polyline", { points: "14 2 14 8 20 8" }),
              /* @__PURE__ */ u3("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
              /* @__PURE__ */ u3("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
            ] }) }),
            /* @__PURE__ */ u3("span", { class: "cm-section__label", children: "Clinical Reason" })
          ] }),
          /* @__PURE__ */ u3(
            "textarea",
            {
              class: "cm-input cm-input--textarea",
              rows: 2,
              value: clinicalReason,
              onInput: (e3) => setClinicalReason(e3.target.value),
              placeholder: "Reason for continued skilled nursing care..."
            }
          ),
          /* @__PURE__ */ u3("div", { class: "cm-section__row", children: [
            /* @__PURE__ */ u3("span", { class: "cm-section__meta", children: "Estimated stay" }),
            /* @__PURE__ */ u3("div", { class: "cm-input--days-wrap", children: [
              /* @__PURE__ */ u3(
                "input",
                {
                  class: "cm-input cm-input--days",
                  type: "number",
                  min: 1,
                  value: estimatedDays,
                  onInput: (e3) => setEstimatedDays(parseInt(e3.target.value) || 30)
                }
              ),
              /* @__PURE__ */ u3("span", { class: "cm-input--days-unit", children: "days" })
            ] })
          ] }),
          /* @__PURE__ */ u3("div", { class: "cm-section__divider" }),
          /* @__PURE__ */ u3("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ u3("span", { class: "cm-section__icon", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ u3("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
              /* @__PURE__ */ u3("polyline", { points: "9 22 9 12 15 12 15 22" })
            ] }) }),
            /* @__PURE__ */ u3("span", { class: "cm-section__label", children: "Plan for Discharge" })
          ] }),
          /* @__PURE__ */ u3(
            DischargePlanPicker,
            {
              option: dischargeOption,
              otherText: dischargeOtherText,
              onOptionChange: setDischargeOption,
              onOtherTextChange: setDischargeOtherText
            }
          )
        ] }),
        isDelayed && /* @__PURE__ */ u3("div", { class: "cm-section cm-section--warn", children: [
          /* @__PURE__ */ u3("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ u3("span", { class: "cm-section__icon cm-section__icon--warn", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ u3("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
              /* @__PURE__ */ u3("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
            ] }) }),
            /* @__PURE__ */ u3("span", { class: "cm-section__label", children: "Delay Reason" }),
            /* @__PURE__ */ u3("span", { class: "cm-section__badge cm-section__badge--warn", children: "Required" })
          ] }),
          /* @__PURE__ */ u3("p", { class: "cm-section__hint", children: "This certification is overdue. Document the reason for compliance." }),
          /* @__PURE__ */ u3(
            "textarea",
            {
              class: "cm-input cm-input--textarea",
              rows: 2,
              value: delayReason,
              onInput: (e3) => setDelayReason(e3.target.value),
              placeholder: "Why was this certification delayed..."
            }
          )
        ] }),
        cert.sends?.length > 0 && /* @__PURE__ */ u3("div", { class: "cm-notice", children: [
          /* @__PURE__ */ u3("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ u3("path", { d: "M12 16v-4M12 8h.01" })
          ] }),
          "Previously sent to ",
          cert.sends.map((s3) => s3.practitionerName).join(", ")
        ] }),
        /* @__PURE__ */ u3("div", { class: "cm-section", children: [
          /* @__PURE__ */ u3("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ u3("span", { class: "cm-section__icon", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ u3("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
              /* @__PURE__ */ u3("circle", { cx: "9", cy: "7", r: "4" }),
              /* @__PURE__ */ u3("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
            ] }) }),
            /* @__PURE__ */ u3("span", { class: "cm-section__label", children: "Send to" }),
            /* @__PURE__ */ u3("span", { class: "cm-section__count", children: [
              selectedPractitioners.size,
              " of ",
              practitioners.length
            ] })
          ] }),
          practitionersLoading ? /* @__PURE__ */ u3("div", { class: "cm-loading", children: [
            /* @__PURE__ */ u3("div", { class: "cm-loading__spinner" }),
            "Loading practitioners..."
          ] }) : /* @__PURE__ */ u3("div", { class: "cm-practitioners", children: [
            /* @__PURE__ */ u3("label", { class: "cm-pract cm-pract--all", children: [
              /* @__PURE__ */ u3(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: selectedPractitioners.size === practitioners.length && practitioners.length > 0,
                  onChange: toggleAll
                }
              ),
              /* @__PURE__ */ u3("span", { class: "cm-check-box" }),
              /* @__PURE__ */ u3("span", { class: "cm-pract__label", children: "Select all" })
            ] }),
            practitioners.map((p3) => /* @__PURE__ */ u3("label", { class: `cm-pract${selectedPractitioners.has(p3.id) ? " cm-pract--selected" : ""}`, children: [
              /* @__PURE__ */ u3(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: selectedPractitioners.has(p3.id),
                  onChange: () => togglePractitioner(p3.id)
                }
              ),
              /* @__PURE__ */ u3("span", { class: "cm-check-box" }),
              /* @__PURE__ */ u3("span", { class: "cm-pract__label", children: [
                p3.firstName,
                " ",
                p3.lastName,
                p3.title && /* @__PURE__ */ u3("span", { class: "cm-pract__title", children: p3.title })
              ] })
            ] }, p3.id))
          ] })
        ] })
      ]
    }
  );
}

// content/modules/certifications/components/SkipCertModal.jsx
function SkipCertModal({ isOpen, onClose, cert, onSkipped }) {
  const [reason, setReason] = d2("");
  const [submitting, setSubmitting] = d2(false);
  function handleSkip() {
    if (!reason.trim()) return;
    setSubmitting(true);
    onSkipped(reason).then(() => {
      setReason("");
      onClose();
    }).catch(() => setSubmitting(false));
  }
  return /* @__PURE__ */ u3(
    CertModal,
    {
      isOpen,
      onClose,
      title: "Skip Certification",
      subtitle: cert?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: onClose },
        { label: submitting ? "Skipping..." : "Skip", variant: "primary", onClick: handleSkip, disabled: !reason.trim() || submitting }
      ],
      children: /* @__PURE__ */ u3("div", { class: "cm-section", children: [
        /* @__PURE__ */ u3("div", { class: "cm-section__head", children: /* @__PURE__ */ u3("span", { class: "cm-section__label", children: "Reason for Skipping" }) }),
        /* @__PURE__ */ u3(
          "textarea",
          {
            class: "cm-input cm-input--textarea",
            rows: 3,
            value: reason,
            onInput: (e3) => setReason(e3.target.value),
            placeholder: "Why is this certification being skipped?"
          }
        )
      ] })
    }
  );
}

// content/modules/certifications/components/EditClinicalReasonModal.jsx
function EditClinicalReasonModal({ isOpen, onClose, cert, onSaved }) {
  const [clinicalReason, setClinicalReason] = d2("");
  const [estimatedDays, setEstimatedDays] = d2(30);
  const [dischargeOption, setDischargeOption] = d2("");
  const [dischargeOtherText, setDischargeOtherText] = d2("");
  const [submitting, setSubmitting] = d2(false);
  y2(() => {
    if (isOpen && cert) {
      setClinicalReason(cert.clinicalReason || "");
      setEstimatedDays(cert.estimatedDays || 30);
      const parsed = parseDischargePlan(cert.planForDischarge);
      setDischargeOption(parsed.option);
      setDischargeOtherText(parsed.otherText);
    }
  }, [isOpen, cert?.id]);
  const canSave = clinicalReason.trim() && isDischargePlanValid(dischargeOption, dischargeOtherText) && !submitting;
  function handleSave() {
    if (!canSave) return;
    setSubmitting(true);
    const planForDischarge = composeDischargePlan(dischargeOption, dischargeOtherText);
    onSaved({ clinicalReason, estimatedDays, planForDischarge }).then(() => onClose()).catch(() => setSubmitting(false));
  }
  return /* @__PURE__ */ u3(
    CertModal,
    {
      isOpen,
      onClose,
      title: "Edit Clinical Reason",
      subtitle: cert?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: onClose },
        { label: submitting ? "Saving..." : "Save", variant: "primary", onClick: handleSave, disabled: !canSave }
      ],
      children: /* @__PURE__ */ u3("div", { class: "cm-section", children: [
        /* @__PURE__ */ u3("div", { class: "cm-section__head", children: [
          /* @__PURE__ */ u3("span", { class: "cm-section__icon", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u3("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
            /* @__PURE__ */ u3("polyline", { points: "14 2 14 8 20 8" }),
            /* @__PURE__ */ u3("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
            /* @__PURE__ */ u3("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
          ] }) }),
          /* @__PURE__ */ u3("span", { class: "cm-section__label", children: "Clinical Reason" })
        ] }),
        /* @__PURE__ */ u3(
          "textarea",
          {
            class: "cm-input cm-input--textarea",
            rows: 3,
            value: clinicalReason,
            onInput: (e3) => setClinicalReason(e3.target.value),
            placeholder: "Describe the clinical reason for continued skilled nursing care..."
          }
        ),
        /* @__PURE__ */ u3("div", { class: "cm-section__row", children: [
          /* @__PURE__ */ u3("span", { class: "cm-section__meta", children: "Estimated stay" }),
          /* @__PURE__ */ u3("div", { class: "cm-input--days-wrap", children: [
            /* @__PURE__ */ u3(
              "input",
              {
                class: "cm-input cm-input--days",
                type: "number",
                min: 1,
                value: estimatedDays,
                onInput: (e3) => setEstimatedDays(parseInt(e3.target.value) || 30)
              }
            ),
            /* @__PURE__ */ u3("span", { class: "cm-input--days-unit", children: "days" })
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { class: "cm-section__divider" }),
        /* @__PURE__ */ u3("div", { class: "cm-section__head", children: [
          /* @__PURE__ */ u3("span", { class: "cm-section__icon", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u3("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
            /* @__PURE__ */ u3("polyline", { points: "9 22 9 12 15 12 15 22" })
          ] }) }),
          /* @__PURE__ */ u3("span", { class: "cm-section__label", children: "Plan for Discharge" })
        ] }),
        /* @__PURE__ */ u3(
          DischargePlanPicker,
          {
            option: dischargeOption,
            otherText: dischargeOtherText,
            onOptionChange: setDischargeOption,
            onOtherTextChange: setDischargeOtherText
          }
        )
      ] })
    }
  );
}

// content/modules/certifications/components/DelayCertModal.jsx
function DelayCertModal({ isOpen, onClose, cert, onDelayed }) {
  const [reason, setReason] = d2("");
  const [submitting, setSubmitting] = d2(false);
  function handleDelay() {
    if (!reason.trim()) return;
    setSubmitting(true);
    onDelayed(reason).then(() => {
      setReason("");
      onClose();
    }).catch(() => setSubmitting(false));
  }
  return /* @__PURE__ */ u3(
    CertModal,
    {
      isOpen,
      onClose,
      title: "Mark as Delayed",
      subtitle: cert?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: onClose },
        { label: submitting ? "Saving..." : "Mark Delayed", variant: "primary", onClick: handleDelay, disabled: !reason.trim() || submitting }
      ],
      children: /* @__PURE__ */ u3("div", { class: "cm-section cm-section--warn", children: [
        /* @__PURE__ */ u3("div", { class: "cm-section__head", children: [
          /* @__PURE__ */ u3("span", { class: "cm-section__icon cm-section__icon--warn", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ u3("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
            /* @__PURE__ */ u3("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
          ] }) }),
          /* @__PURE__ */ u3("span", { class: "cm-section__label", children: "Delay Reason" }),
          /* @__PURE__ */ u3("span", { class: "cm-section__badge cm-section__badge--warn", children: "Required" })
        ] }),
        /* @__PURE__ */ u3("p", { class: "cm-section__hint", children: "This will log a delay reason for compliance. The cert remains unsent." }),
        /* @__PURE__ */ u3(
          "textarea",
          {
            class: "cm-input cm-input--textarea",
            rows: 3,
            value: reason,
            onInput: (e3) => setReason(e3.target.value),
            placeholder: "Why is this certification being delayed?"
          }
        )
      ] })
    }
  );
}

// content/modules/certifications/hooks/usePractitionerWorkload.js
function usePractitionerWorkload(practitionerId) {
  const [data, setData] = d2(null);
  const [loading, setLoading] = d2(false);
  const [error, setError] = d2(null);
  const [fetchCount, setFetchCount] = d2(0);
  const retry = q2(() => {
    setFetchCount((n2) => n2 + 1);
  }, []);
  y2(() => {
    if (!practitionerId || !window.CertAPI) {
      setData(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    window.CertAPI.fetchPractitionerWorkload(practitionerId).then((result) => {
      if (!cancelled) setData(result);
    }).catch((err) => {
      if (!cancelled) setError(err.message || "Failed to load practitioner data");
    }).finally(() => {
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [practitionerId, fetchCount]);
  return { data, loading, error, retry };
}

// content/modules/certifications/components/PractitionerWorkloadView.jsx
function formatShortDate4(dateStr) {
  if (!dateStr) return "";
  const d3 = new Date(dateStr);
  if (isNaN(d3)) return dateStr;
  return d3.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function QueueRow({ item }) {
  const isCert = !!item.type && (item.type === "initial" || item.type.includes("recert"));
  return /* @__PURE__ */ u3("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ u3("div", { class: "cert__workload-row-top", children: isCert ? /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3(CertTypeBadge, { type: item.type }),
      /* @__PURE__ */ u3("span", { class: "cert__workload-patient", children: item.patientName }),
      /* @__PURE__ */ u3(
        CertStatusBadge,
        {
          status: item.status,
          isDelayed: item.isDelayed,
          dueDate: item.dueDate,
          signedAt: item.signedAt
        }
      )
    ] }) : /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3("span", { class: "cert__workload-query-badge", children: "Query" }),
      /* @__PURE__ */ u3("span", { class: "cert__workload-patient", children: item.patientName }),
      item.mdsItem && /* @__PURE__ */ u3("span", { class: "cert__workload-meta", children: [
        item.mdsItem,
        item.mdsItemName ? ` \u2014 ${item.mdsItemName}` : ""
      ] })
    ] }) }),
    /* @__PURE__ */ u3("div", { class: "cert__workload-row-bottom", children: [
      isCert && item.dueDate && /* @__PURE__ */ u3("span", { class: "cert__row-meta", children: [
        "Due ",
        formatShortDate4(item.dueDate)
      ] }),
      !isCert && item.sentAt && /* @__PURE__ */ u3("span", { class: "cert__row-meta", children: [
        "Sent ",
        formatShortDate4(item.sentAt)
      ] })
    ] })
  ] });
}
function SignedRow({ item }) {
  const isCert = !!item.type && (item.type === "initial" || item.type.includes("recert"));
  return /* @__PURE__ */ u3("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ u3("div", { class: "cert__workload-row-top", children: isCert ? /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3(CertTypeBadge, { type: item.type }),
      /* @__PURE__ */ u3("span", { class: "cert__workload-patient", children: item.patientName })
    ] }) : /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3("span", { class: "cert__workload-query-badge", children: "Query" }),
      /* @__PURE__ */ u3("span", { class: "cert__workload-patient", children: item.patientName }),
      item.mdsItem && /* @__PURE__ */ u3("span", { class: "cert__workload-meta", children: item.mdsItem })
    ] }) }),
    /* @__PURE__ */ u3("div", { class: "cert__workload-row-bottom", children: [
      item.signedAt && /* @__PURE__ */ u3("span", { class: "cert__row-meta", children: [
        "Signed ",
        formatShortDate4(item.signedAt)
      ] }),
      !isCert && item.selectedIcd10Code && /* @__PURE__ */ u3("span", { class: "cert__row-meta", children: [
        "ICD-10: ",
        item.selectedIcd10Code
      ] })
    ] })
  ] });
}
function PractitionerWorkloadView({ practitionerId, onBack }) {
  const { data, loading, error, retry } = usePractitionerWorkload(practitionerId);
  if (loading) {
    return /* @__PURE__ */ u3("div", { class: "cert__workload", children: [
      /* @__PURE__ */ u3("div", { class: "cert__workload-header", children: /* @__PURE__ */ u3("button", { class: "cert__workload-back", onClick: onBack, children: [
        "\u2190",
        " Back to Certs"
      ] }) }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__spinner" }),
        /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: "Loading practitioner..." })
      ] })
    ] });
  }
  if (error) {
    return /* @__PURE__ */ u3("div", { class: "cert__workload", children: [
      /* @__PURE__ */ u3("div", { class: "cert__workload-header", children: /* @__PURE__ */ u3("button", { class: "cert__workload-back", onClick: onBack, children: [
        "\u2190",
        " Back to Certs"
      ] }) }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__state-icon", children: "\u26A0" }),
        /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: error }),
        /* @__PURE__ */ u3("button", { class: "mds-cc__retry-btn", onClick: retry, children: "Retry" })
      ] })
    ] });
  }
  if (!data) return null;
  const { practitioner, queue = [], recentlySigned = [] } = data;
  return /* @__PURE__ */ u3("div", { class: "cert__workload", children: [
    /* @__PURE__ */ u3("div", { class: "cert__workload-header", children: /* @__PURE__ */ u3("button", { class: "cert__workload-back", onClick: onBack, children: [
      "\u2190",
      " Back to Certs"
    ] }) }),
    /* @__PURE__ */ u3("div", { class: "cert__workload-info", children: [
      /* @__PURE__ */ u3("div", { class: "cert__workload-name", children: [
        practitioner?.firstName,
        " ",
        practitioner?.lastName,
        practitioner?.title && /* @__PURE__ */ u3("span", { class: "cert__workload-title", children: [
          ", ",
          practitioner.title
        ] })
      ] }),
      practitioner?.phone && /* @__PURE__ */ u3("div", { class: "cert__workload-phone", children: practitioner.phone })
    ] }),
    /* @__PURE__ */ u3("div", { class: "cert__workload-section", children: [
      /* @__PURE__ */ u3("div", { class: "cert__workload-section-header", children: [
        "In Queue",
        queue.length > 0 && /* @__PURE__ */ u3("span", { class: "cert__workload-section-count", children: queue.length })
      ] }),
      queue.length === 0 ? /* @__PURE__ */ u3("div", { class: "cert__workload-empty", children: "No items in queue" }) : queue.map((item, i3) => /* @__PURE__ */ u3(QueueRow, { item }, i3))
    ] }),
    /* @__PURE__ */ u3("div", { class: "cert__workload-section", children: [
      /* @__PURE__ */ u3("div", { class: "cert__workload-section-header", children: [
        "Recently Signed",
        recentlySigned.length > 0 && /* @__PURE__ */ u3("span", { class: "cert__workload-section-count", children: recentlySigned.length })
      ] }),
      recentlySigned.length === 0 ? /* @__PURE__ */ u3("div", { class: "cert__workload-empty", children: "No recent signatures" }) : recentlySigned.map((item, i3) => /* @__PURE__ */ u3(SignedRow, { item }, i3))
    ] })
  ] });
}

// content/modules/certifications/CertsView.jsx
var SUB_TABS = [
  { id: "action", label: "Action Needed" },
  { id: "awaiting", label: "Awaiting Signature" },
  { id: "overdue", label: "Overdue" },
  { id: "dueSoon", label: "Due Soon" },
  { id: "signed", label: "Signed" }
];
function getDaysUntil4(dateStr) {
  if (!dateStr) return null;
  const due = new Date(dateStr);
  const now = /* @__PURE__ */ new Date();
  due.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return Math.floor((due - now) / 864e5);
}
function getCertUrgency(cert) {
  const days = getDaysUntil4(cert.dueDate);
  if (days !== null && days < 0) return days;
  if (cert.isDelayed) return -0.5;
  return days ?? Infinity;
}
var STAY_TYPES = [
  { id: "all", label: "All" },
  { id: "medicare", label: "Med A" },
  { id: "managed", label: "Managed" }
];
function matchesStayType(cert, filter) {
  if (filter === "all") return true;
  if (filter === "managed") return cert.payerType === "managed_care";
  return cert.payerType !== "managed_care";
}
function CertsView({ facilityName, orgSlug, patientId, patientName }) {
  const [activeSubTab, setActiveSubTab] = d2("action");
  const [stayTypeFilter, setStayTypeFilter] = d2("all");
  const [workloadPractitionerId, setWorkloadPractitionerId] = d2(null);
  const [sendCert, setSendCert] = d2(null);
  const [skipCert, setSkipCert] = d2(null);
  const [delayCert, setDelayCert] = d2(null);
  const [editCert, setEditCert] = d2(null);
  const { certs: activeCerts, loading: activeLoading, error: activeError, refetch: refetchActive } = useCertifications({
    facilityName,
    orgSlug,
    patientId
  });
  const { certs: signedCerts, loading: signedLoading, refetch: refetchSigned } = useCertifications({
    facilityName,
    orgSlug,
    patientId,
    status: "signed"
  });
  const refetchAll = q2(() => {
    refetchActive();
    refetchSigned();
  }, [refetchActive, refetchSigned]);
  const filteredActive = T2(
    () => activeCerts.filter((c3) => matchesStayType(c3, stayTypeFilter)),
    [activeCerts, stayTypeFilter]
  );
  const filteredSigned = T2(
    () => signedCerts.filter((c3) => matchesStayType(c3, stayTypeFilter)),
    [signedCerts, stayTypeFilter]
  );
  const stayTypeCounts = T2(() => {
    const all = activeCerts.length + signedCerts.length;
    let medicare = 0, managed = 0;
    for (const cert of [...activeCerts, ...signedCerts]) {
      if (cert.payerType === "managed_care") managed++;
      else medicare++;
    }
    return { all, medicare, managed };
  }, [activeCerts, signedCerts]);
  const counts = T2(() => {
    let overdue = 0, dueSoon = 0, awaiting = 0;
    for (const cert of filteredActive) {
      const daysUntil = getDaysUntil4(cert.dueDate);
      if (daysUntil !== null && daysUntil < 0) overdue++;
      else if (cert.isDelayed) overdue++;
      else if (daysUntil !== null && daysUntil >= 0 && daysUntil <= 3) dueSoon++;
      if (cert.status === "sent") awaiting++;
    }
    return {
      action: filteredActive.length,
      awaiting,
      overdue,
      dueSoon,
      signed: filteredSigned.length
    };
  }, [filteredActive, filteredSigned]);
  const stayGroups = T2(() => {
    let displaySource;
    if (activeSubTab === "signed") {
      displaySource = filteredSigned;
    } else {
      displaySource = filteredActive.filter((cert) => {
        const daysUntil = getDaysUntil4(cert.dueDate);
        const isOverdue = daysUntil !== null && daysUntil < 0;
        const isDueSoon = daysUntil !== null && daysUntil >= 0 && daysUntil <= 3;
        if (activeSubTab === "awaiting") return cert.status === "sent";
        if (activeSubTab === "overdue") return isOverdue || cert.isDelayed;
        if (activeSubTab === "dueSoon") return isDueSoon && !isOverdue;
        return true;
      });
    }
    if (displaySource.length === 0) return [];
    const groupMap = {};
    for (const cert of displaySource) {
      const key = cert.partAStayId || cert.id;
      if (!groupMap[key]) groupMap[key] = { stayId: key, displayCerts: [], historyCerts: [] };
      groupMap[key].displayCerts.push(cert);
    }
    if (activeSubTab !== "signed") {
      for (const cert of filteredSigned) {
        const key = cert.partAStayId;
        if (key && groupMap[key]) {
          groupMap[key].historyCerts.push(cert);
        }
      }
    }
    const groups = Object.values(groupMap);
    for (const group of groups) {
      group.displayCerts.sort((a3, b2) => (a3.sequenceNumber || 0) - (b2.sequenceNumber || 0));
      group.historyCerts.sort((a3, b2) => (a3.sequenceNumber || 0) - (b2.sequenceNumber || 0));
      const seen = /* @__PURE__ */ new Set();
      group.allCerts = [];
      for (const cert of [...group.displayCerts, ...group.historyCerts]) {
        if (!seen.has(cert.id)) {
          seen.add(cert.id);
          group.allCerts.push(cert);
        }
      }
      group.allCerts.sort((a3, b2) => (a3.sequenceNumber || 0) - (b2.sequenceNumber || 0));
    }
    groups.sort((a3, b2) => {
      const aMin = Math.min(...a3.displayCerts.map(getCertUrgency));
      const bMin = Math.min(...b2.displayCerts.map(getCertUrgency));
      return aMin - bMin;
    });
    return groups;
  }, [filteredActive, filteredSigned, activeSubTab]);
  async function handleSkipCert(reason) {
    await window.CertAPI.skipCert(skipCert.id, reason);
    window.SuperToast?.success?.("Certification skipped");
    refetchAll();
  }
  async function handleDelayCert(reason) {
    await window.CertAPI.delayCert(delayCert.id, reason);
    window.SuperToast?.success?.("Certification marked as delayed");
    refetchAll();
  }
  async function handleEditReason({ clinicalReason, estimatedDays, planForDischarge }) {
    await window.CertAPI.saveClinicalReason(editCert.id, { clinicalReason, estimatedDays, planForDischarge });
    window.SuperToast?.success?.(`Clinical details updated for ${editCert.patientName}`);
    refetchAll();
  }
  async function handleUnskip(cert) {
    try {
      await window.CertAPI.unskipCert(cert.id);
      window.SuperToast?.success?.("Certification restored");
      refetchAll();
    } catch (err) {
      console.error("[Certifications] Failed to unskip:", err);
      window.SuperToast?.error?.("Failed to restore certification");
    }
  }
  const loading = activeSubTab === "signed" ? signedLoading : activeLoading;
  if (workloadPractitionerId) {
    return /* @__PURE__ */ u3("div", { class: "cert__view", children: /* @__PURE__ */ u3(
      PractitionerWorkloadView,
      {
        practitionerId: workloadPractitionerId,
        onBack: () => setWorkloadPractitionerId(null)
      }
    ) });
  }
  return /* @__PURE__ */ u3("div", { class: "cert__view", children: [
    patientId && patientName && /* @__PURE__ */ u3("div", { class: "cert__patient-banner", children: [
      "Showing certs for ",
      /* @__PURE__ */ u3("strong", { children: patientName })
    ] }),
    /* @__PURE__ */ u3("div", { class: "cert__filters", children: [
      /* @__PURE__ */ u3("div", { class: "cert__stay-type-filter", children: STAY_TYPES.map((t3) => /* @__PURE__ */ u3(
        "button",
        {
          class: `cert__stay-type-pill${stayTypeFilter === t3.id ? " cert__stay-type-pill--active" : ""}`,
          onClick: () => setStayTypeFilter(t3.id),
          children: [
            t3.label,
            stayTypeCounts[t3.id] > 0 && /* @__PURE__ */ u3("span", { class: "cert__stay-type-pill-count", children: stayTypeCounts[t3.id] })
          ]
        },
        t3.id
      )) }),
      /* @__PURE__ */ u3("div", { class: "cert__sub-tabs", children: SUB_TABS.map((tab) => /* @__PURE__ */ u3(
        "button",
        {
          class: `cert__sub-tab${activeSubTab === tab.id ? " cert__sub-tab--active" : ""}`,
          onClick: () => setActiveSubTab(tab.id),
          children: [
            tab.label,
            counts[tab.id] > 0 && /* @__PURE__ */ u3("span", { class: "cert__sub-tab-count", children: counts[tab.id] })
          ]
        },
        tab.id
      )) })
    ] }),
    /* @__PURE__ */ u3("div", { class: "cert__list", children: [
      loading && /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__spinner" }),
        /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: "Loading certifications..." })
      ] }),
      !loading && activeError && /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__state-icon", children: "\u26A0" }),
        /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: activeError }),
        /* @__PURE__ */ u3("button", { class: "mds-cc__retry-btn", onClick: refetchAll, children: "Retry" })
      ] }),
      !loading && !activeError && stayGroups.length === 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__state-icon", children: activeSubTab === "overdue" ? "\u2705" : "\u{1F4CB}" }),
        /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: [
          activeSubTab === "action" && "All certifications are up to date",
          activeSubTab === "awaiting" && "No certifications awaiting signature",
          activeSubTab === "overdue" && "No overdue certifications",
          activeSubTab === "dueSoon" && "No certifications due soon",
          activeSubTab === "signed" && "No certifications signed in the last 7 days"
        ] })
      ] }),
      !loading && !activeError && stayGroups.map((group) => /* @__PURE__ */ u3(
        StayGroupCard,
        {
          stayId: group.stayId,
          displayCerts: group.displayCerts,
          historyCerts: group.historyCerts,
          allCerts: group.allCerts,
          onSend: (c3) => setSendCert(c3),
          onSkip: (c3) => setSkipCert(c3),
          onDelay: (c3) => setDelayCert(c3),
          onUnskip: handleUnskip,
          onEditReason: (c3) => setEditCert(c3),
          onViewPractitioner: (practId) => setWorkloadPractitionerId(practId)
        },
        group.stayId
      ))
    ] }),
    /* @__PURE__ */ u3(
      SendCertModal,
      {
        isOpen: !!sendCert,
        onClose: () => setSendCert(null),
        cert: sendCert,
        facilityName,
        orgSlug,
        onSent: refetchAll
      }
    ),
    /* @__PURE__ */ u3(
      SkipCertModal,
      {
        isOpen: !!skipCert,
        onClose: () => setSkipCert(null),
        cert: skipCert,
        onSkipped: handleSkipCert
      }
    ),
    /* @__PURE__ */ u3(
      DelayCertModal,
      {
        isOpen: !!delayCert,
        onClose: () => setDelayCert(null),
        cert: delayCert,
        onDelayed: handleDelayCert
      }
    ),
    /* @__PURE__ */ u3(
      EditClinicalReasonModal,
      {
        isOpen: !!editCert,
        onClose: () => setEditCert(null),
        cert: editCert,
        onSaved: handleEditReason
      }
    )
  ] });
}

// content/utils/payment.js
function isPaymentApplicable(payment) {
  if (!payment) return false;
  if (payment.mode === "not_applicable") return false;
  if ("isApplicable" in payment) return !!payment.isApplicable;
  return true;
}
function getPaymentModeLabel(payment) {
  if (!payment) return "";
  switch (payment.mode) {
    case "medicare":
      return "Medicare";
    case "state_rate":
      return payment.stateName || "State Rate";
    case "cmi":
      return "CMI";
    default:
      return "";
  }
}
function getPaymentDeltaNumeric(payment) {
  if (!isPaymentApplicable(payment)) return 0;
  return payment.delta > 0 ? payment.delta : 0;
}
function formatPaymentDelta(payment, format = "long") {
  if (!isPaymentApplicable(payment)) return null;
  if (!(payment.delta > 0)) return null;
  const suffix = format === "short" ? "/d" : "/day";
  switch (payment.mode) {
    case "medicare":
      return `+$${Math.round(payment.delta)}${suffix}`;
    case "state_rate":
      return `+$${Math.round(payment.delta)}${suffix}`;
    case "cmi":
      return `+${payment.delta.toFixed(2)} CMI`;
    default:
      return null;
  }
}
function cleanGroupCode(code) {
  return code ? code.replace(/_/g, "") : null;
}
function formatPaymentRates(payment) {
  if (!isPaymentApplicable(payment)) return null;
  if (!(payment.delta > 0)) return null;
  const label = getPaymentModeLabel(payment);
  const isEstimated = !!payment.isEstimated;
  switch (payment.mode) {
    case "medicare": {
      const cur = payment.current?.total;
      const pot = payment.potential?.total;
      if (cur == null && pot == null) return null;
      return {
        current: cur != null ? `$${Math.round(cur).toLocaleString()}/day` : null,
        potential: pot != null ? `$${Math.round(pot).toLocaleString()}/day` : null,
        delta: `+$${Math.round(payment.delta).toLocaleString()}/day`,
        label,
        isEstimated
      };
    }
    case "state_rate": {
      const cur = payment.current?.rate;
      const pot = payment.potential?.rate;
      if (cur == null && pot == null) return null;
      return {
        current: cur != null ? `$${Math.round(cur).toLocaleString()}/day` : null,
        potential: pot != null ? `$${Math.round(pot).toLocaleString()}/day` : null,
        delta: `+$${Math.round(payment.delta).toLocaleString()}/day`,
        label,
        isEstimated,
        currentGroupCode: cleanGroupCode(payment.current?.groupCode),
        potentialGroupCode: cleanGroupCode(payment.potential?.groupCode)
      };
    }
    case "cmi": {
      const cur = payment.current?.total;
      const pot = payment.potential?.total;
      if (cur == null && pot == null) return null;
      return {
        current: cur != null ? `${cur.toFixed(3)} CMI` : null,
        potential: pot != null ? `${pot.toFixed(3)} CMI` : null,
        delta: `+${payment.delta.toFixed(3)} CMI`,
        label,
        isEstimated
      };
    }
    default:
      return null;
  }
}

// content/modules/mds-command-center/AssessmentRow.jsx
var URGENCY_ACCENT = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280"
};
var UDA_STATUS = {
  complete: { icon: "\u2713", cls: "done", tip: "Locked in range" },
  locked_in_range: { icon: "\u2713", cls: "done", tip: "Locked in range" },
  in_progress: { icon: "\u25D0", cls: "wip", tip: "In progress" },
  near_miss: { icon: "!", cls: "warn", tip: "Outside date range" },
  out_of_range: { icon: "!", cls: "warn", tip: "Outside date range" },
  missing: { icon: "\u2717", cls: "miss", tip: "Not created" },
  not_created: { icon: "\u2717", cls: "miss", tip: "Not created" },
  not_required: null
  // hidden entirely
};
function UdaBadge({ label, status }) {
  const cfg = UDA_STATUS[status];
  if (!cfg) return null;
  return /* @__PURE__ */ u3("span", { class: `mds-cc__uda-badge mds-cc__uda-badge--${cfg.cls}`, title: cfg.tip, children: [
    label,
    " ",
    cfg.icon
  ] });
}
function cleanAssessmentType(type) {
  if (!type) return "";
  return type.replace(/^(Medicare|Medicaid|Managed\s*Care)\s*[-\u2013\u2014]\s*/i, "").replace(/\s*\/\s*/g, " ").replace(/\s*-\s*None\s*PPS\s*/i, "").replace(/\s{2,}/g, " ").trim() || type;
}
function computeArdContext(ardDate, deadlines) {
  if (!ardDate) return { dateText: "", deadlineText: "", cls: "na" };
  const d3 = new Date(ardDate);
  if (isNaN(d3)) return { dateText: "", deadlineText: "", cls: "na" };
  const dateText = d3.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const urgency = deadlines?.urgency || "on_track";
  if (urgency === "completed") {
    return { dateText, deadlineText: "", cls: "done" };
  }
  const daysLeft = deadlines?.completionDaysRemaining;
  if (daysLeft != null) {
    if (daysLeft < 0) return { dateText, deadlineText: `${Math.abs(daysLeft)}d overdue`, cls: "overdue" };
    if (daysLeft === 0) return { dateText, deadlineText: "Due today", cls: "urgent" };
    if (daysLeft <= 3) return { dateText, deadlineText: `${daysLeft}d left`, cls: "urgent" };
    if (daysLeft <= 7) return { dateText, deadlineText: `${daysLeft}d left`, cls: "approaching" };
    return { dateText, deadlineText: `${daysLeft}d left`, cls: "ok" };
  }
  const now = /* @__PURE__ */ new Date();
  now.setHours(0, 0, 0, 0);
  const completionDate = new Date(d3);
  completionDate.setDate(completionDate.getDate() + 14);
  const diffDays = Math.round((completionDate - now) / 864e5);
  if (diffDays < 0) return { dateText, deadlineText: `${Math.abs(diffDays)}d overdue`, cls: "overdue" };
  if (diffDays === 0) return { dateText, deadlineText: "Due today", cls: "urgent" };
  if (diffDays <= 3) return { dateText, deadlineText: `${diffDays}d left`, cls: "urgent" };
  if (diffDays <= 7) return { dateText, deadlineText: `${diffDays}d left`, cls: "approaching" };
  return { dateText, deadlineText: `${diffDays}d left`, cls: "ok" };
}
function AssessmentRow({ assessment, isExpanded, onToggle, onOpenAnalyzer }) {
  const {
    patientName,
    assessmentType,
    ardDate,
    pdpm,
    assessmentClass,
    sectionProgress,
    udaSummary,
    querySummary
  } = assessment;
  const deadlines = assessment.deadlines;
  const urgency = deadlines?.urgency || "on_track";
  const hideRevenue = assessmentClass === "end_of_stay";
  const delta = hideRevenue ? null : formatPaymentDelta(pdpm?.payment, "short");
  const ard = computeArdContext(ardDate, deadlines);
  const sectionsDone = sectionProgress?.total > 0 && sectionProgress.completed === sectionProgress.total;
  const pendingQueries = (querySummary?.pending || 0) + (querySummary?.sent || 0);
  return /* @__PURE__ */ u3(
    "div",
    {
      class: `mds-cc__card${isExpanded ? " mds-cc__card--expanded" : ""}`,
      style: { borderLeftColor: URGENCY_ACCENT[urgency] || "#9ca3af" },
      onClick: onToggle,
      role: "button",
      tabIndex: 0,
      onKeyDown: (e3) => {
        if (e3.key === "Enter" || e3.key === " ") {
          e3.preventDefault();
          onToggle();
        }
      },
      children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__card-line1", children: [
          /* @__PURE__ */ u3("span", { class: "mds-cc__card-name", children: patientName || "Unknown" }),
          /* @__PURE__ */ u3("span", { class: "mds-cc__card-badges", children: [
            /* @__PURE__ */ u3(UdaBadge, { label: "BIM", status: udaSummary?.bims }),
            /* @__PURE__ */ u3(UdaBadge, { label: "GG", status: udaSummary?.gg }),
            /* @__PURE__ */ u3(UdaBadge, { label: "PHQ", status: udaSummary?.phq9 }),
            sectionProgress?.total > 0 && /* @__PURE__ */ u3("span", { class: `mds-cc__card-progress${sectionsDone ? " mds-cc__card-progress--done" : ""}`, children: [
              /* @__PURE__ */ u3("span", { class: "mds-cc__card-progress-bar", children: /* @__PURE__ */ u3(
                "span",
                {
                  class: "mds-cc__card-progress-fill",
                  style: { width: `${Math.round(sectionProgress.completed / sectionProgress.total * 100)}%` }
                }
              ) }),
              /* @__PURE__ */ u3("span", { class: "mds-cc__card-progress-text", children: [
                sectionProgress.completed,
                "/",
                sectionProgress.total
              ] })
            ] }),
            delta && /* @__PURE__ */ u3(
              "span",
              {
                class: `mds-cc__card-revenue${onOpenAnalyzer ? " mds-cc__card-revenue--clickable" : ""}`,
                onClick: onOpenAnalyzer ? (e3) => {
                  e3.stopPropagation();
                  onOpenAnalyzer();
                } : void 0,
                title: onOpenAnalyzer ? "Open PDPM Analyzer" : void 0,
                role: onOpenAnalyzer ? "button" : void 0,
                children: delta
              }
            ),
            pendingQueries > 0 && /* @__PURE__ */ u3("span", { class: "mds-cc__card-queries", children: [
              pendingQueries,
              "Q"
            ] }),
            /* @__PURE__ */ u3("span", { class: `mds-cc__chevron${isExpanded ? " mds-cc__chevron--open" : ""}`, children: "\u203A" })
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__card-line2", children: [
          /* @__PURE__ */ u3("span", { class: "mds-cc__card-type", children: cleanAssessmentType(assessmentType) }),
          ard.dateText && /* @__PURE__ */ u3(k, { children: [
            /* @__PURE__ */ u3("span", { class: "mds-cc__card-meta-sep", children: "\xB7" }),
            /* @__PURE__ */ u3("span", { class: "mds-cc__card-ard-date", children: [
              "ARD ",
              ard.dateText
            ] })
          ] }),
          ard.deadlineText && /* @__PURE__ */ u3(k, { children: [
            /* @__PURE__ */ u3("span", { class: "mds-cc__card-meta-sep", children: "\xB7" }),
            /* @__PURE__ */ u3("span", { class: `mds-cc__card-ard mds-cc__card-ard--${ard.cls}`, children: ard.deadlineText })
          ] })
        ] })
      ]
    }
  );
}

// content/modules/mds-command-center/hooks/useAssessmentDetail.js
function useAssessmentDetail(externalAssessmentId) {
  const [detailData, setDetailData] = d2(null);
  const [loading, setLoading] = d2(false);
  const [error, setError] = d2(null);
  y2(() => {
    if (!externalAssessmentId) {
      setDetailData(null);
      setError(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    async function fetchDetail() {
      try {
        const authState = await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" });
        if (!authState.authenticated) {
          throw new Error("Please log in to view detail");
        }
        const orgResponse = getOrg();
        const orgSlug = orgResponse?.org;
        const facilityName = window.getChatFacilityInfo?.() || "";
        const params = new URLSearchParams({
          externalAssessmentId,
          facilityName,
          orgSlug
        });
        const result = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${params}`,
          options: { method: "GET" }
        });
        if (!result.success) {
          throw new Error(result.error || "Failed to load assessment detail");
        }
        if (!cancelled) setDetailData(result.data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load detail");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchDetail();
    return () => {
      cancelled = true;
    };
  }, [externalAssessmentId]);
  return { detailData, loading, error };
}

// content/modules/mds-command-center/AssessmentPreview.jsx
function ntaLevelToTier(level, payment) {
  if (!payment?.meta?.ntaTiers) return null;
  for (const t3 of payment.meta.ntaTiers) {
    if ((t3.levels || []).includes(level)) return t3.tier;
  }
  return null;
}
function formatNtaImpact(nta, payment) {
  if (payment?.mode === "state_rate") {
    const curTier = ntaLevelToTier(nta.currentLevel, payment);
    const newTier = ntaLevelToTier(nta.newLevel, payment);
    if (curTier != null && newTier != null) return `NTA: Tier ${curTier}\u2009\u2192\u2009Tier ${newTier}`;
    return "NTA: tier upgrade";
  }
  return `NTA: ${nta.currentLevel}\u2009\u2192\u2009${nta.newLevel}`;
}
function buildImpacts(d3, payment) {
  const impacts = [];
  if (d3.impact?.slp?.wouldChangeGroup)
    impacts.push(`SLP: ${d3.impact.slp.currentGroup}\u2009\u2192\u2009${d3.impact.slp.newGroup}`);
  if (d3.impact?.nta?.wouldChangeLevel)
    impacts.push(formatNtaImpact(d3.impact.nta, payment));
  if (d3.impact?.nursing?.wouldChangeGroup)
    impacts.push(`Nursing: ${d3.impact.nursing.currentPaymentGroup}\u2009\u2192\u2009${d3.impact.nursing.newPaymentGroup}`);
  if (d3.impact?.ptot?.wouldChangeGroup)
    impacts.push(`PT/OT: ${d3.impact.ptot.currentGroup}\u2009\u2192\u2009${d3.impact.ptot.newGroup}`);
  return impacts;
}
function buildQueryImpacts(q3, payment) {
  const ci = q3.pdpmImpact?.componentImpacts;
  if (!ci) return [];
  const impacts = [];
  if (ci.slp?.wouldChangeGroup)
    impacts.push(`SLP: ${ci.slp.currentGroup}\u2009\u2192\u2009${ci.slp.newGroup}`);
  if (ci.nta?.wouldChangeLevel)
    impacts.push(formatNtaImpact(ci.nta, payment));
  if (ci.nursing?.wouldChangeGroup)
    impacts.push(`Nursing: ${ci.nursing.currentPaymentGroup}\u2009\u2192\u2009${ci.nursing.newPaymentGroup}`);
  if (ci.ptot?.wouldChangeGroup)
    impacts.push(`PT/OT: ${ci.ptot.currentGroup}\u2009\u2192\u2009${ci.ptot.newGroup}`);
  return impacts;
}
function relativeDate(sentAt) {
  if (!sentAt) return "not yet sent";
  const days = Math.floor((Date.now() - new Date(sentAt)) / 864e5);
  return days === 0 ? "sent today" : `sent ${days}d ago`;
}
function getFailedChecks(compliance) {
  if (!compliance?.checks) {
    if (compliance?.status === "failed" && compliance.issues?.length > 0) {
      return compliance.issues.map((i3) => i3.message || i3);
    }
    return [];
  }
  const labels = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" };
  const failed = [];
  for (const [key, check] of Object.entries(compliance.checks)) {
    if (check.status === "failed") {
      failed.push(check.message || `${labels[key] || key} incomplete`);
    }
  }
  return failed;
}
function SummaryStrip({ pdpm, detailData, payment, sectionProgress, compliance, isEndOfStay }) {
  const parts = [];
  const currentHipps = detailData?.currentHipps || pdpm?.currentHipps;
  const potentialHipps = detailData?.potentialHipps || pdpm?.potentialHipps;
  const hasChange = potentialHipps && potentialHipps !== currentHipps && !isEndOfStay;
  const hasDelta = isPaymentApplicable(payment) && payment.delta > 0;
  const delta = hasDelta ? formatPaymentDelta(payment, "short") : null;
  if (hasChange && delta) {
    parts.push(/* @__PURE__ */ u3("span", { class: "mds-cc__ss-part mds-cc__ss-part--revenue", children: [
      delta,
      " opportunity"
    ] }));
  } else if (hasChange) {
    parts.push(/* @__PURE__ */ u3("span", { class: "mds-cc__ss-part", children: [
      "HIPPS ",
      currentHipps,
      " ",
      "\u2192",
      " ",
      potentialHipps
    ] }));
  }
  if (sectionProgress?.percentComplete != null) {
    parts.push(/* @__PURE__ */ u3("span", { class: "mds-cc__ss-part", children: [
      "Sections ",
      sectionProgress.percentComplete,
      "%"
    ] }));
  }
  const failedChecks = getFailedChecks(compliance);
  const docRiskCount = detailData?.enhancedDetections?.filter(
    (d3) => d3.solverStatus === "dont_code" && (d3.diagnosisPassed === false || d3.activeStatusPassed === false)
  ).length || 0;
  const issueCount = failedChecks.length + docRiskCount;
  if (issueCount > 0) {
    parts.push(/* @__PURE__ */ u3("span", { class: "mds-cc__ss-part mds-cc__ss-part--issues", children: [
      "\u26A0",
      " ",
      issueCount,
      " ",
      issueCount === 1 ? "issue" : "issues"
    ] }));
  }
  if (parts.length === 0) return null;
  return /* @__PURE__ */ u3("div", { class: "mds-cc__ss", children: parts.map((p3, i3) => /* @__PURE__ */ u3(k, { children: [
    i3 > 0 && /* @__PURE__ */ u3("span", { class: "mds-cc__ss-sep" }),
    p3
  ] })) });
}
function RevenueSection({ detailData, onSelectItem }) {
  const detections = detailData?.enhancedDetections || [];
  const payment = detailData?.payment;
  const drivers = detections.filter(
    (d3) => d3.wouldChangeHipps && d3.solverStatus !== "query_sent" && d3.solverStatus !== "awaiting_response" && d3.solverStatus !== "dont_code"
  );
  if (drivers.length === 0) return null;
  const currentHipps = detailData?.currentHipps;
  const potentialHipps = detailData?.potentialHipps;
  const hippsNote = potentialHipps && potentialHipps !== currentHipps ? ` (${currentHipps} \u2192 ${potentialHipps})` : "";
  return /* @__PURE__ */ u3("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__ps-header", children: [
      drivers.length,
      " ",
      drivers.length === 1 ? "item" : "items",
      " would change HIPPS",
      hippsNote
    ] }),
    /* @__PURE__ */ u3("div", { class: "mds-cc__ps-items", children: drivers.map((d3, i3) => {
      const code = d3.mdsItem?.startsWith("I8000:") ? "I8000" : d3.mdsItem;
      const impacts = buildImpacts(d3, payment);
      return /* @__PURE__ */ u3(
        "div",
        {
          class: "mds-cc__ps-item mds-cc__ps-item--clickable",
          onClick: () => onSelectItem(d3),
          role: "button",
          title: "View evidence",
          children: [
            /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item-top", children: [
              /* @__PURE__ */ u3("span", { class: "mds-cc__ps-item-name", children: d3.itemName }),
              /* @__PURE__ */ u3("span", { class: "mds-cc__ps-item-code", children: code })
            ] }),
            impacts.length > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item-detail", children: [
              "Would change ",
              impacts.join(", ")
            ] })
          ]
        },
        i3
      );
    }) })
  ] });
}
function DocRisksSection({ detailData }) {
  const detections = detailData?.enhancedDetections || [];
  const allRisks = detections.filter(
    (d3) => d3.solverStatus === "dont_code" && (d3.diagnosisPassed === false || d3.activeStatusPassed === false)
  );
  if (allRisks.length === 0) return null;
  return /* @__PURE__ */ u3("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__ps-header mds-cc__ps-header--amber", children: [
      allRisks.length,
      " documentation ",
      allRisks.length === 1 ? "risk" : "risks"
    ] }),
    /* @__PURE__ */ u3("div", { class: "mds-cc__ps-items", children: allRisks.map((d3, i3) => {
      const code = d3.mdsItem?.startsWith("I8000:") ? "I8000" : d3.mdsItem;
      const reasons = [];
      if (d3.diagnosisPassed === false) reasons.push("No physician diagnosis");
      if (d3.activeStatusPassed === false) reasons.push("No active treatment order");
      return /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item", children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item-top", children: [
          /* @__PURE__ */ u3("span", { class: "mds-cc__ps-item-name", children: d3.itemName }),
          /* @__PURE__ */ u3("span", { class: "mds-cc__ps-item-code", children: code })
        ] }),
        reasons.length > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item-detail", children: reasons.join(" \xB7 ") })
      ] }, i3);
    }) })
  ] });
}
function QueriesSection({ detailData, querySummary, assessmentClass }) {
  const queries = detailData?.outstandingQueries || [];
  const payment = detailData?.payment;
  const pending = queries.filter(
    (q3) => q3.status === "sent" || q3.status === "pending" || q3.status === "awaiting_response"
  );
  if (pending.length > 0) {
    return /* @__PURE__ */ u3("div", { class: "mds-cc__ps", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__ps-header", children: [
        pending.length,
        " pending ",
        pending.length === 1 ? "query" : "queries"
      ] }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__ps-items", children: pending.map((q3, i3) => {
        const impacts = buildQueryImpacts(q3, payment);
        return /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item", children: [
          /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item-top", children: [
            /* @__PURE__ */ u3("span", { class: "mds-cc__ps-item-name", children: q3.mdsItemName }),
            q3.mdsItem && /* @__PURE__ */ u3("span", { class: "mds-cc__ps-item-code", children: q3.mdsItem }),
            /* @__PURE__ */ u3("span", { class: "mds-cc__ps-item-meta", children: relativeDate(q3.sentAt) })
          ] }),
          impacts.length > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item-detail", children: [
            "Would change ",
            impacts.join(", ")
          ] })
        ] }, i3);
      }) })
    ] });
  }
  if (assessmentClass !== "pps_payment" || !querySummary) return null;
  const { pending: pendCount = 0, sent = 0 } = querySummary;
  if (pendCount === 0 && sent === 0) return null;
  const parts = [];
  if (pendCount > 0) parts.push(`${pendCount} pending`);
  if (sent > 0) parts.push(`${sent} sent, awaiting response`);
  return /* @__PURE__ */ u3("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__ps-header", children: "Outstanding queries" }),
    /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item-detail", style: { paddingLeft: "0" }, children: parts.join(" \xB7 ") })
  ] });
}
function ComplianceIssues({ compliance }) {
  const failed = getFailedChecks(compliance);
  if (failed.length === 0) return null;
  return /* @__PURE__ */ u3("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__ps-header mds-cc__ps-header--amber", children: [
      failed.length,
      " compliance ",
      failed.length === 1 ? "issue" : "issues"
    ] }),
    /* @__PURE__ */ u3("div", { class: "mds-cc__ps-item-detail", style: { paddingLeft: "0" }, children: failed.join(" \xB7 ") })
  ] });
}
function DetailLoading() {
  return /* @__PURE__ */ u3("div", { class: "mds-cc__prev-detail-loading", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
    /* @__PURE__ */ u3("span", { children: "Loading assessment detail..." })
  ] });
}
function DetailError({ message }) {
  return /* @__PURE__ */ u3("div", { class: "mds-cc__prev-detail-error", children: /* @__PURE__ */ u3("span", { children: [
    "\u26A0",
    " ",
    message
  ] }) });
}
function AssessmentPreview({ assessment, onOpenAnalyzer, onSelectItem }) {
  const { pdpm, sectionProgress, compliance, querySummary } = assessment;
  const assessmentId = assessment.externalAssessmentId || assessment.assessmentId;
  const isEndOfStay = assessment.assessmentClass === "end_of_stay";
  const { detailData, loading: detailLoading, error: detailError } = useAssessmentDetail(assessmentId);
  const detailPayment = detailData?.payment || pdpm?.payment;
  return /* @__PURE__ */ u3("div", { class: "mds-cc__preview", onClick: (e3) => e3.stopPropagation(), children: [
    /* @__PURE__ */ u3(
      SummaryStrip,
      {
        pdpm,
        detailData,
        payment: detailPayment,
        sectionProgress,
        compliance,
        isEndOfStay
      }
    ),
    detailLoading && /* @__PURE__ */ u3(DetailLoading, {}),
    !detailLoading && detailError && /* @__PURE__ */ u3(DetailError, { message: detailError }),
    !detailLoading && detailData && /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3(RevenueSection, { detailData, onSelectItem }),
      /* @__PURE__ */ u3(DocRisksSection, { detailData })
    ] }),
    /* @__PURE__ */ u3(
      QueriesSection,
      {
        detailData: detailLoading ? null : detailData,
        querySummary,
        assessmentClass: assessment.assessmentClass
      }
    ),
    /* @__PURE__ */ u3(ComplianceIssues, { compliance }),
    /* @__PURE__ */ u3("div", { class: "mds-cc__prev-actions", children: [
      /* @__PURE__ */ u3("button", { class: "mds-cc__action-btn mds-cc__action-btn--primary", onClick: onOpenAnalyzer, children: "Open Full Analyzer" }),
      assessmentId && /* @__PURE__ */ u3(
        "button",
        {
          class: "mds-cc__action-btn mds-cc__action-btn--secondary",
          onClick: () => {
            try {
              sessionStorage.setItem("super_cc_restore", JSON.stringify({
                expandedId: assessmentId,
                openAnalyzer: true,
                analyzerMode: "panel",
                timestamp: Date.now()
              }));
            } catch (_2) {
            }
            location.href = `${location.origin}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${assessmentId}`;
          },
          children: [
            "Go to MDS ",
            "\u2197"
          ]
        }
      )
    ] })
  ] });
}

// content/modules/pdpm-analyzer/hooks/useItemDetail.js
function useItemDetail(mdsItem, categoryKey, context) {
  const [data, setData] = d2(null);
  const [loading, setLoading] = d2(false);
  const [error, setError] = d2(null);
  y2(() => {
    if (!mdsItem || !context?.assessmentId) return;
    let cancelled = false;
    setData(null);
    setError(null);
    setLoading(true);
    async function fetchDetail() {
      try {
        const orgResponse = getOrg();
        const orgSlug = orgResponse?.org;
        const facilityName = window.getChatFacilityInfo?.() || "";
        if (!orgSlug || !facilityName) {
          throw new Error("Could not determine organization or facility");
        }
        const apiCode = mdsItem.includes(":") ? mdsItem.split(":")[0] : mdsItem;
        let endpoint = `/api/extension/mds/items/${encodeURIComponent(apiCode)}?externalAssessmentId=${context.assessmentId}&facilityName=${encodeURIComponent(facilityName)}&orgSlug=${encodeURIComponent(orgSlug)}`;
        if (categoryKey) endpoint += `&categoryKey=${encodeURIComponent(categoryKey)}`;
        chrome.runtime.sendMessage({ type: "API_REQUEST", endpoint }, (resp) => {
          if (cancelled) return;
          if (resp?.success) setData(resp.data);
          else setError(resp?.error || "Failed to load item detail");
          setLoading(false);
        });
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Failed to load item detail");
          setLoading(false);
        }
      }
    }
    fetchDetail();
    return () => {
      cancelled = true;
    };
  }, [mdsItem, categoryKey, context?.assessmentId]);
  return { data, loading, error };
}

// content/utils/evidence-helpers.js
function inferSourceType(displayName, evidenceId) {
  if (evidenceId) {
    if (evidenceId.startsWith("order-")) return "order";
    if (evidenceId.startsWith("mar-")) return "mar";
    if (evidenceId.startsWith("lab-")) return "lab-result";
  }
  if (!displayName) return "document";
  const lower = displayName.toLowerCase();
  if (lower.includes("dc_summary") || lower.includes("discharge")) return "progress-note";
  if (lower.includes("lab")) return "lab-result";
  if (lower.includes("order")) return "order";
  if (lower.includes("mar")) return "mar";
  if (lower.includes("vital")) return "vital-signs";
  if (lower.includes("nursing")) return "nursing-note";
  if (lower.includes("history") || lower.includes("h&p") || lower.includes("physical")) return "progress-note";
  if (lower.includes("eval") || lower.includes("st ") || lower.includes("slp")) return "progress-note";
  return "document";
}
var SOURCE_LABELS = {
  "order": "Order",
  "mar": "MAR",
  "lab-result": "Lab",
  "progress-note": "Progress Note",
  "nursing-note": "Nursing Note",
  "vital-signs": "Vitals",
  "therapy-doc": "Therapy Doc",
  "document": "Document"
};
function parseViewer(ev) {
  const sourceType = ev.sourceType || "";
  const sourceId = ev.sourceId || ev.id || "";
  const evType = ev.type || "";
  const evidenceId = ev.evidenceId || sourceId;
  if (sourceType === "progress-note" && sourceId) return { viewerType: "clinical-note", id: sourceId };
  if (sourceType === "therapy-doc" && sourceId) return { viewerType: "therapy-document", id: sourceId };
  if (sourceType === "document" && sourceId) return { viewerType: "document", id: sourceId };
  if (evType === "clinical_note" && sourceId) {
    return { viewerType: "clinical-note", id: sourceId.replace(/^pcc-prognote-/, "").replace(/^patient-practnote-/, "") };
  }
  if (evType === "therapy_document" && sourceId) {
    return { viewerType: "therapy-document", id: sourceId.replace(/^therapy-doc-/, "") };
  }
  if (evType === "document" && sourceId) return { viewerType: "document", id: sourceId };
  if (evidenceId) {
    if (evidenceId.startsWith("therapy-doc-")) return { viewerType: "therapy-document", id: evidenceId.replace("therapy-doc-", "") };
    if (evidenceId.startsWith("pcc-prognote-")) return { viewerType: "clinical-note", id: evidenceId.replace("pcc-prognote-", "") };
    if (evidenceId.startsWith("patient-practnote-")) return { viewerType: "clinical-note", id: evidenceId.replace("patient-practnote-", "") };
    if (evidenceId.includes("-chunk-")) return { viewerType: "document", id: evidenceId.split("-chunk-")[0] };
  }
  return { viewerType: null, id: null };
}
function openEvidence(ev) {
  const viewer = parseViewer(ev);
  const quote = ev.quoteText || ev.quote || ev.snippet || "";
  if (viewer.viewerType === "clinical-note" && viewer.id) {
    return window.showClinicalNoteModal?.(viewer.id);
  }
  if (viewer.viewerType === "therapy-document" && viewer.id) {
    return window.showTherapyDocModal?.(viewer.id, quote);
  }
  if (viewer.viewerType === "document" && viewer.id) {
    return window.showDocumentModal?.(viewer.id, ev.wordBlocks || []);
  }
  const orderId = ev.sourceId || ev.evidenceId || "";
  if ((ev.sourceType === "order" || orderId.startsWith("order-")) && window.showAdministrationModal) {
    return window.showAdministrationModal(orderId.replace(/^order-/, ""));
  }
  window.SuperDocViewer?.open(ev);
}
function getActionText(ev) {
  const viewer = parseViewer(ev);
  if (ev.sourceType === "order" || (ev.evidenceId || "").startsWith("order-")) return "View Administrations";
  if (viewer.viewerType === "therapy-document") return "View Document";
  if (viewer.viewerType === "clinical-note") return "View Note";
  if (viewer.viewerType === "document") return "View PDF";
  return null;
}

// content/components/ItemDetail.jsx
var CheckIcon = () => /* @__PURE__ */ u3("svg", { class: "sid__step-icon sid__step-icon--pass", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ u3("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule": "evenodd" }) });
var XIcon = () => /* @__PURE__ */ u3("svg", { class: "sid__step-icon sid__step-icon--fail", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ u3("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clip-rule": "evenodd" }) });
var ArrowIcon = () => /* @__PURE__ */ u3("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ u3("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
function EvidenceCard({ ev, index, onViewSource }) {
  const quote = ev.quoteText || ev.orderDescription || ev.quote || ev.snippet || ev.text || "";
  if (!quote && !ev.rationale) return null;
  const sourceType = ev.sourceType || inferSourceType(ev.displayName, ev.evidenceId);
  const typeLabel = ev.displayName || SOURCE_LABELS[sourceType] || sourceType;
  const actionText = getActionText(ev);
  const isClickable = !!actionText;
  const handleClick = isClickable ? () => {
    if (onViewSource) {
      const viewer = parseViewer(ev);
      const isOrder = ev.sourceType === "order" || (ev.evidenceId || "").startsWith("order-");
      const vt = viewer.viewerType;
      if (vt === "document" || vt === "clinical-note" || vt === "therapy-document" || isOrder) {
        onViewSource(ev, index);
        return;
      }
    }
    openEvidence(ev);
  } : void 0;
  return /* @__PURE__ */ u3(
    "div",
    {
      class: `sid__ev-card${isClickable ? " sid__ev-card--clickable" : ""}`,
      onClick: handleClick,
      role: isClickable ? "button" : void 0,
      children: [
        /* @__PURE__ */ u3("div", { class: "sid__ev-header", children: /* @__PURE__ */ u3("span", { class: `sid__ev-type sid__ev-type--${sourceType}`, children: typeLabel }) }),
        quote && /* @__PURE__ */ u3("div", { class: "sid__ev-quote", children: quote }),
        ev.rationale && /* @__PURE__ */ u3("div", { class: "sid__ev-rationale", children: ev.rationale }),
        isClickable && /* @__PURE__ */ u3("div", { class: "sid__ev-action", children: [
          /* @__PURE__ */ u3("span", { children: actionText }),
          /* @__PURE__ */ u3(ArrowIcon, {})
        ] })
      ]
    }
  );
}
function ImpactChip({ label, impact }) {
  if (!impact) return null;
  if (!impact.wouldChangeGroup && !impact.wouldChangeLevel) return null;
  const from = impact.currentGroup || impact.currentLevel || impact.currentPaymentGroup;
  const to = impact.newGroup || impact.newLevel || impact.newPaymentGroup;
  return /* @__PURE__ */ u3("span", { class: "sid__impact", children: [
    label,
    " ",
    /* @__PURE__ */ u3("span", { class: "sid__impact-from", children: from }),
    " \u2192 ",
    /* @__PURE__ */ u3("span", { class: "sid__impact-to", children: to })
  ] });
}
function ValidationSteps({ diagnosisSummary, treatmentSummary, validation }) {
  const diagPassed = validation?.diagnosisCheck?.passed ?? validation?.diagnosisPassed;
  const treatPassed = validation?.treatmentCheck?.passed ?? validation?.activeStatusPassed;
  return /* @__PURE__ */ u3("div", { class: "sid__steps", children: [
    /* @__PURE__ */ u3("div", { class: `sid__step ${diagPassed ? "sid__step--pass" : "sid__step--fail"}`, children: [
      diagPassed ? /* @__PURE__ */ u3(CheckIcon, {}) : /* @__PURE__ */ u3(XIcon, {}),
      /* @__PURE__ */ u3("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ u3("div", { class: "sid__step-label", children: "Diagnosis" }),
        diagnosisSummary && /* @__PURE__ */ u3("div", { class: "sid__step-summary", children: diagnosisSummary })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: `sid__step ${treatPassed ? "sid__step--pass" : "sid__step--fail"}`, children: [
      treatPassed ? /* @__PURE__ */ u3(CheckIcon, {}) : /* @__PURE__ */ u3(XIcon, {}),
      /* @__PURE__ */ u3("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ u3("div", { class: "sid__step-label", children: "Treatment" }),
        treatmentSummary && /* @__PURE__ */ u3("div", { class: "sid__step-summary", children: treatmentSummary })
      ] })
    ] })
  ] });
}
function RationaleBlock({ rationale }) {
  if (!rationale) return null;
  return /* @__PURE__ */ u3("div", { class: "sid__rationale", children: [
    /* @__PURE__ */ u3("div", { class: "sid__rationale-label", children: "Rationale" }),
    rationale
  ] });
}
function ItemDetail({ variant = "compact", data, detectionItem, mdsItem, onViewSource, onDismiss, dismissing, assessmentId }) {
  const isFull = variant === "full";
  const apiItem = data?.item;
  const isColumnBased = !!apiItem?.columns;
  const isDiag = apiItem && !isColumnBased;
  const hasSectionISteps = !!(data?.diagnosisSummary || data?.treatmentSummary);
  let status = apiItem?.status;
  if (!status && isColumnBased) {
    const hasYes = Object.values(apiItem.columns || {}).some((c3) => c3?.answer?.toLowerCase() === "yes");
    status = hasYes ? "code" : "dont_code";
  }
  const needsQuery = status === "needs_physician_query";
  const shouldCode = status === "code" || status === "recommend_coding";
  const verdictDotClass = needsQuery ? "sid__verdict-dot--query" : shouldCode ? "sid__verdict-dot--code" : "sid__verdict-dot--no-code";
  const verdictLabel = needsQuery ? "Needs Query" : shouldCode ? "Recommend Coding" : status?.replace(/_/g, " ") || "Don't Code";
  const diagEvidence = apiItem?.evidence || apiItem?.queryEvidence || [];
  const colEvidence = [];
  if (isColumnBased) {
    const seen = /* @__PURE__ */ new Set();
    for (const col of Object.values(apiItem.columns || {})) {
      if (col?.evidence) col.evidence.forEach((ev) => {
        const k3 = ev.sourceId || ev.quote || JSON.stringify(ev);
        if (!seen.has(k3)) {
          seen.add(k3);
          colEvidence.push(ev);
        }
      });
    }
  }
  const evidence = isDiag ? diagEvidence : colEvidence;
  const [showAllEv, setShowAllEv] = d2(false);
  const visibleEvidence = showAllEv ? evidence : evidence.slice(0, 4);
  const keyFindings = apiItem?.keyFindings || [];
  const [findingsOpen, setFindingsOpen] = d2(isFull);
  const impact = detectionItem?.impact;
  const hasImpact = impact && (impact.slp || impact.nta || impact.nursing || impact.ptot);
  const columns = apiItem?.columns || {};
  const colKeys = Object.keys(columns);
  const [activeCol, setActiveCol] = d2(colKeys[0] || "A");
  const activeColData = columns[activeCol];
  const subItems = apiItem?.subItems || [];
  const [dismissMode, setDismissMode] = d2(false);
  const [dismissReason, setDismissReason] = d2("");
  const displayCode = mdsItem?.startsWith("I8000:") ? "I8000" : mdsItem;
  return /* @__PURE__ */ u3(k, { children: [
    /* @__PURE__ */ u3("div", { class: "sid__verdict", children: [
      /* @__PURE__ */ u3("span", { class: `sid__verdict-dot ${verdictDotClass}` }),
      /* @__PURE__ */ u3("span", { class: "sid__verdict-text", children: verdictLabel })
    ] }),
    hasSectionISteps && /* @__PURE__ */ u3(
      ValidationSteps,
      {
        diagnosisSummary: data.diagnosisSummary,
        treatmentSummary: data.treatmentSummary,
        validation: apiItem?.validation
      }
    ),
    !hasSectionISteps && isColumnBased && activeColData && /* @__PURE__ */ u3("div", { class: "sid__rationale", children: [
      /* @__PURE__ */ u3("div", { class: "sid__col-answer", children: [
        /* @__PURE__ */ u3("span", { class: "sid__col-label", children: [
          "Column ",
          activeCol,
          ":"
        ] }),
        /* @__PURE__ */ u3("span", { class: `sid__col-badge ${activeColData.answer?.toLowerCase() === "yes" ? "sid__col-badge--yes" : "sid__col-badge--no"}`, children: activeColData.answer?.toUpperCase() }),
        (activeColData.firstAdministered || activeColData.lastAdministered) && /* @__PURE__ */ u3("span", { class: "sid__col-dates", children: [
          activeColData.firstAdministered,
          activeColData.firstAdministered && activeColData.lastAdministered && " \u2013 ",
          activeColData.lastAdministered
        ] })
      ] }),
      activeColData.rationale && /* @__PURE__ */ u3("div", { children: activeColData.rationale })
    ] }),
    !hasSectionISteps && !isColumnBased && /* @__PURE__ */ u3(RationaleBlock, { rationale: apiItem?.rationale }),
    isColumnBased && colKeys.length > 1 && /* @__PURE__ */ u3("div", { class: "sid__coltabs", children: colKeys.map((k3) => {
      const c3 = columns[k3];
      const yes = c3?.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          class: `sid__coltab ${activeCol === k3 ? "sid__coltab--on" : ""}`,
          onClick: () => setActiveCol(k3),
          children: [
            "Col ",
            k3,
            /* @__PURE__ */ u3("span", { class: `sid__coltab-dot ${yes ? "sid__coltab-dot--yes" : ""}` })
          ]
        },
        k3
      );
    }) }),
    subItems.length > 0 && /* @__PURE__ */ u3("div", { class: "sid__subs", children: subItems.map((sub, i3) => {
      const a3 = sub.columns?.A;
      if (!a3) return null;
      const yes = a3.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ u3("div", { class: `sid__sub ${yes ? "sid__sub--on" : ""}`, children: [
        /* @__PURE__ */ u3("span", { class: `sid__sub-dot ${yes ? "sid__sub-dot--yes" : ""}`, children: yes ? "\u2713" : "\u2013" }),
        /* @__PURE__ */ u3("span", { class: "sid__sub-name", children: sub.description })
      ] }, sub.mdsItem || i3);
    }) }),
    isFull && hasImpact && /* @__PURE__ */ u3("div", { class: "sid__impacts", children: [
      /* @__PURE__ */ u3(ImpactChip, { label: "NTA", impact: impact.nta }),
      /* @__PURE__ */ u3(ImpactChip, { label: "Nursing", impact: impact.nursing }),
      /* @__PURE__ */ u3(ImpactChip, { label: "SLP", impact: impact.slp }),
      /* @__PURE__ */ u3(ImpactChip, { label: "PT/OT", impact: impact.ptot })
    ] }),
    evidence.length > 0 && /* @__PURE__ */ u3("div", { class: "sid__evidence", children: [
      /* @__PURE__ */ u3("div", { class: "sid__ev-label", children: [
        "Evidence (",
        evidence.length,
        ")"
      ] }),
      /* @__PURE__ */ u3("div", { class: "sid__ev-list", children: visibleEvidence.map((ev, i3) => /* @__PURE__ */ u3(EvidenceCard, { ev, index: i3, onViewSource }, i3)) }),
      evidence.length > 4 && !showAllEv && /* @__PURE__ */ u3("button", { class: "sid__ev-show-more", type: "button", onClick: () => setShowAllEv(true), children: [
        "Show all ",
        evidence.length,
        " \u2193"
      ] })
    ] }),
    keyFindings.length > 0 && /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3("button", { class: "sid__findings-toggle", type: "button", onClick: () => setFindingsOpen(!findingsOpen), children: [
        /* @__PURE__ */ u3("span", { class: `sid__findings-arrow ${findingsOpen ? "sid__findings-arrow--open" : ""}`, children: "\u25B6" }),
        "Key Findings (",
        keyFindings.length,
        ")"
      ] }),
      findingsOpen && /* @__PURE__ */ u3("ul", { class: "sid__findings", children: keyFindings.map((f4, i3) => /* @__PURE__ */ u3("li", { children: f4 }, i3)) })
    ] }),
    dismissMode && onDismiss ? /* @__PURE__ */ u3("div", { class: "sid__dismiss-form", children: [
      /* @__PURE__ */ u3("label", { children: "Why do you disagree? (optional)" }),
      /* @__PURE__ */ u3(
        "textarea",
        {
          value: dismissReason,
          onInput: (e3) => setDismissReason(e3.target.value),
          placeholder: "Enter reason...",
          disabled: dismissing
        }
      ),
      /* @__PURE__ */ u3("div", { class: "sid__dismiss-form-btns", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            class: "sid__btn sid__btn--secondary",
            type: "button",
            disabled: dismissing,
            onClick: () => {
              setDismissMode(false);
              setDismissReason("");
            },
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            class: "sid__btn sid__btn--primary",
            type: "button",
            disabled: dismissing,
            onClick: () => onDismiss(dismissReason),
            children: dismissing ? "Submitting..." : "Submit"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ u3("div", { class: "sid__actions", children: [
      onDismiss && /* @__PURE__ */ u3("button", { class: "sid__btn sid__btn--dismiss", type: "button", onClick: () => setDismissMode(true), children: "Dismiss" }),
      /* @__PURE__ */ u3("div", { class: "sid__actions-right", children: [
        /* @__PURE__ */ u3("button", { class: "sid__btn sid__btn--primary", onClick: () => {
          const queryData = {
            mdsItem: apiItem?.mdsItem || mdsItem,
            description: apiItem?.description || detectionItem?.itemName,
            aiAnswer: apiItem
          };
          window.QuerySendModal?.show(queryData);
        }, type: "button", children: "Query Physician" }),
        mdsItem && /* @__PURE__ */ u3("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(mdsItem, assessmentId), type: "button", children: [
          "Go to ",
          displayCode,
          " \u2197"
        ] })
      ] })
    ] })
  ] });
}

// content/components/PDFViewer.jsx
var ZOOM_LEVELS = [50, 75, 100, 125, 150, 200];
var DEFAULT_ZOOM = 100;
function PDFViewer({
  url,
  wordBlocks = [],
  targetPage = 1,
  title = "Document",
  documentType,
  effectiveDate,
  fileSize,
  onClose,
  openInNewTabUrl
}) {
  const [pdfDoc, setPdfDoc] = d2(null);
  const [currentPage, setCurrentPage] = d2(targetPage);
  const [totalPages, setTotalPages] = d2(1);
  const [zoom, setZoom] = d2(DEFAULT_ZOOM);
  const [manualRotation, setManualRotation] = d2(0);
  const [loading, setLoading] = d2(true);
  const [rendering, setRendering] = d2(false);
  const [error, setError] = d2(null);
  const [pageInputValue, setPageInputValue] = d2(String(targetPage));
  const canvasRef = A2(null);
  const highlightCanvasRef = A2(null);
  const scrollRef = A2(null);
  const rotationCacheRef = A2({});
  const rootRef = A2(null);
  const renderIdRef = A2(0);
  const fileSizeStr = fileSize ? fileSize / 1024 > 1024 ? `${(fileSize / 1024 / 1024).toFixed(1)} MB` : `${(fileSize / 1024).toFixed(0)} KB` : "";
  const formatDate2 = (dateStr) => {
    if (!dateStr) return "";
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    } catch {
      return dateStr;
    }
  };
  y2(() => {
    if (!url) {
      setError("No document URL available");
      setLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        if (typeof pdfjsLib === "undefined") throw new Error("PDF.js library not loaded");
        if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL("lib/pdf.worker.min.js");
        }
        const doc = await pdfjsLib.getDocument(url).promise;
        if (cancelled) return;
        const initPage = Math.min(targetPage, doc.numPages);
        setPdfDoc(doc);
        setTotalPages(doc.numPages);
        setCurrentPage(initPage);
        setPageInputValue(String(initPage));
        setLoading(false);
      } catch (err) {
        if (!cancelled) {
          console.error("[PDFViewer] Load failed:", err);
          setError(`Failed to load PDF: ${err.message}`);
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [url]);
  const renderPage = q2(async (pageNum) => {
    if (!pdfDoc) return;
    const canvas = canvasRef.current;
    const hlCanvas = highlightCanvasRef.current;
    const scrollEl = scrollRef.current;
    if (!canvas || !hlCanvas || !scrollEl) return;
    const myId = ++renderIdRef.current;
    const validPage = Math.max(1, Math.min(pageNum, totalPages));
    setRendering(true);
    try {
      const page = await pdfDoc.getPage(validPage);
      if (renderIdRef.current !== myId) return;
      const rotation = await detectRotation(page, validPage, rotationCacheRef, manualRotation);
      const scrollWidth = scrollEl.clientWidth;
      const containerWidth = Math.max(scrollWidth - 48, 200);
      const baseViewport = page.getViewport({ scale: 1, rotation });
      const fitScale = containerWidth / baseViewport.width;
      const scale = fitScale * (zoom / 100);
      const viewport = page.getViewport({ scale, rotation });
      const ctx = canvas.getContext("2d");
      const hCtx = hlCanvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      hlCanvas.width = viewport.width;
      hlCanvas.height = viewport.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hCtx.clearRect(0, 0, hlCanvas.width, hlCanvas.height);
      await page.render({ canvasContext: ctx, viewport }).promise;
      if (renderIdRef.current !== myId) return;
      const pageHL = (wordBlocks || []).filter((h3) => h3.p === validPage);
      if (pageHL.length > 0) {
        const rects = drawHighlights(hCtx, pageHL, viewport, rotation);
        if (rects.length > 0) {
          scrollToHighlight(rects, scrollEl);
        }
      }
    } catch (err) {
      console.error("[PDFViewer] Render failed:", err);
    } finally {
      if (renderIdRef.current === myId) setRendering(false);
    }
  }, [pdfDoc, totalPages, zoom, manualRotation, wordBlocks]);
  y2(() => {
    if (pdfDoc) renderPage(currentPage);
  }, [pdfDoc, currentPage, zoom, manualRotation, renderPage]);
  const goToPage = q2((n2) => {
    const p3 = Math.max(1, Math.min(n2, totalPages));
    setCurrentPage(p3);
    setPageInputValue(String(p3));
  }, [totalPages]);
  const changeZoom = q2((dir) => {
    setZoom((prev) => {
      const idx = ZOOM_LEVELS.indexOf(prev);
      if (idx === -1) {
        const nearest = ZOOM_LEVELS.reduce((a3, b2) => Math.abs(b2 - prev) < Math.abs(a3 - prev) ? b2 : a3);
        const ni = ZOOM_LEVELS.indexOf(nearest);
        return ZOOM_LEVELS[Math.max(0, Math.min(ni + dir, ZOOM_LEVELS.length - 1))];
      }
      return ZOOM_LEVELS[Math.max(0, Math.min(idx + dir, ZOOM_LEVELS.length - 1))];
    });
  }, []);
  const rotate = q2(() => {
    setManualRotation((prev) => (prev + 90) % 360);
    rotationCacheRef.current = {};
  }, []);
  y2(() => {
    const handler = (e3) => {
      if (!rootRef.current) return;
      if (e3.target.tagName === "INPUT" || e3.target.tagName === "TEXTAREA") return;
      if (!rootRef.current.closest(".super-pdf-modal")) return;
      switch (e3.key) {
        case "ArrowLeft":
          e3.preventDefault();
          setCurrentPage((p3) => {
            const n2 = Math.max(1, p3 - 1);
            setPageInputValue(String(n2));
            return n2;
          });
          break;
        case "ArrowRight":
          e3.preventDefault();
          setCurrentPage((p3) => {
            const n2 = Math.min(totalPages, p3 + 1);
            setPageInputValue(String(n2));
            return n2;
          });
          break;
        case "+":
        case "=":
          e3.preventDefault();
          changeZoom(1);
          break;
        case "-":
          e3.preventDefault();
          changeZoom(-1);
          break;
        case "r":
        case "R":
          e3.preventDefault();
          rotate();
          break;
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [totalPages, changeZoom, rotate]);
  const commitPageInput = () => {
    const n2 = parseInt(pageInputValue, 10);
    if (!isNaN(n2) && n2 >= 1 && n2 <= totalPages) {
      goToPage(n2);
    } else {
      setPageInputValue(String(currentPage));
    }
  };
  if (loading) {
    return /* @__PURE__ */ u3("div", { class: "super-pdfv super-pdfv--center", ref: rootRef, children: /* @__PURE__ */ u3("div", { class: "super-pdfv__loader", children: [
      /* @__PURE__ */ u3("div", { class: "super-pdfv__loader-ring" }),
      /* @__PURE__ */ u3("span", { children: "Loading document..." })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ u3("div", { class: "super-pdfv super-pdfv--center", ref: rootRef, children: /* @__PURE__ */ u3("div", { class: "super-pdfv__empty-state", children: [
      /* @__PURE__ */ u3("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "#9ca3af", "stroke-width": "1.5", children: [
        /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ u3("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        /* @__PURE__ */ u3("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
      ] }),
      /* @__PURE__ */ u3("p", { children: error })
    ] }) });
  }
  return /* @__PURE__ */ u3("div", { class: "super-pdfv", ref: rootRef, children: [
    /* @__PURE__ */ u3("div", { class: "super-pdfv__header", children: [
      /* @__PURE__ */ u3("div", { class: "super-pdfv__header-left", children: [
        /* @__PURE__ */ u3("svg", { class: "super-pdfv__header-icon", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ u3("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
          /* @__PURE__ */ u3("polyline", { points: "14 2 14 8 20 8" })
        ] }),
        /* @__PURE__ */ u3("span", { class: "super-pdfv__header-title", children: title })
      ] }),
      /* @__PURE__ */ u3("div", { class: "super-pdfv__header-right", children: [
        effectiveDate && /* @__PURE__ */ u3("span", { class: "super-pdfv__header-date", children: formatDate2(effectiveDate) }),
        fileSizeStr && /* @__PURE__ */ u3("span", { class: "super-pdfv__header-meta", children: fileSizeStr }),
        openInNewTabUrl && /* @__PURE__ */ u3("a", { href: openInNewTabUrl, target: "_blank", rel: "noopener noreferrer", class: "super-pdfv__open-btn", title: "Open in new tab", children: /* @__PURE__ */ u3("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ u3("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          /* @__PURE__ */ u3("polyline", { points: "15 3 21 3 21 9" }),
          /* @__PURE__ */ u3("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: "super-pdfv__toolbar", children: [
      /* @__PURE__ */ u3("div", { class: "super-pdfv__group", children: [
        /* @__PURE__ */ u3("button", { class: "super-pdfv__tb-btn", onClick: () => goToPage(currentPage - 1), disabled: currentPage <= 1, title: "Previous page (Left arrow)", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ u3("polyline", { points: "15 18 9 12 15 6" }) }) }),
        /* @__PURE__ */ u3("div", { class: "super-pdfv__page-pill", children: [
          /* @__PURE__ */ u3(
            "input",
            {
              class: "super-pdfv__page-input",
              type: "text",
              value: pageInputValue,
              onInput: (e3) => setPageInputValue(e3.target.value),
              onBlur: commitPageInput,
              onKeyDown: (e3) => e3.key === "Enter" && e3.target.blur(),
              style: { width: `${Math.max(2, String(totalPages).length + 0.5)}ch` }
            }
          ),
          /* @__PURE__ */ u3("span", { class: "super-pdfv__page-of", children: [
            "of ",
            totalPages
          ] })
        ] }),
        /* @__PURE__ */ u3("button", { class: "super-pdfv__tb-btn", onClick: () => goToPage(currentPage + 1), disabled: currentPage >= totalPages, title: "Next page (Right arrow)", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ u3("polyline", { points: "9 18 15 12 9 6" }) }) })
      ] }),
      /* @__PURE__ */ u3("div", { class: "super-pdfv__tb-sep" }),
      /* @__PURE__ */ u3("div", { class: "super-pdfv__group", children: [
        /* @__PURE__ */ u3("button", { class: "super-pdfv__tb-btn", onClick: () => changeZoom(-1), disabled: zoom <= ZOOM_LEVELS[0], title: "Zoom out (-)", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ u3("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) }) }),
        /* @__PURE__ */ u3("span", { class: "super-pdfv__zoom-label", children: [
          zoom,
          "%"
        ] }),
        /* @__PURE__ */ u3("button", { class: "super-pdfv__tb-btn", onClick: () => changeZoom(1), disabled: zoom >= ZOOM_LEVELS[ZOOM_LEVELS.length - 1], title: "Zoom in (+)", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ u3("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
          /* @__PURE__ */ u3("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
        ] }) })
      ] }),
      /* @__PURE__ */ u3("div", { class: "super-pdfv__tb-sep" }),
      /* @__PURE__ */ u3("button", { class: "super-pdfv__tb-btn", onClick: rotate, title: "Rotate 90\xB0 (R)", children: /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
        /* @__PURE__ */ u3("polyline", { points: "1 4 1 10 7 10" }),
        /* @__PURE__ */ u3("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
      ] }) })
    ] }),
    /* @__PURE__ */ u3("div", { class: "super-pdfv__scroll", ref: scrollRef, children: [
      /* @__PURE__ */ u3("div", { class: "super-pdfv__canvas-wrap", children: [
        /* @__PURE__ */ u3("canvas", { class: "super-pdfv__canvas", ref: canvasRef }),
        /* @__PURE__ */ u3("canvas", { class: "super-pdfv__highlight", ref: highlightCanvasRef })
      ] }),
      rendering && /* @__PURE__ */ u3("div", { class: "super-pdfv__page-loading", children: /* @__PURE__ */ u3("div", { class: "super-pdfv__loader-ring super-pdfv__loader-ring--sm" }) })
    ] })
  ] });
}
async function detectRotation(page, pageNum, cacheRef, manualRotation) {
  if (cacheRef.current[pageNum] !== void 0) {
    return (cacheRef.current[pageNum] + manualRotation) % 360;
  }
  const rawView = page.view;
  const rawW = rawView[2] - rawView[0];
  const rawH = rawView[3] - rawView[1];
  let autoFix = 0;
  let textItemCount = 0;
  try {
    const tc = await page.getTextContent();
    const items = tc.items.filter((i3) => i3.str && i3.str.trim().length > 0);
    textItemCount = items.length;
    if (items.length >= 3) {
      const counts = { 0: 0, 90: 0, 180: 0, 270: 0 };
      for (const item of items) {
        const [a3, b2] = item.transform;
        const absA = Math.abs(a3), absB = Math.abs(b2);
        if (absA < 0.01 && absB < 0.01) continue;
        if (absA > absB) counts[a3 > 0 ? 0 : 180]++;
        else counts[b2 > 0 ? 90 : 270]++;
      }
      let maxCount = 0, dominant = 0;
      for (const [angle, count] of Object.entries(counts)) {
        if (count > maxCount) {
          maxCount = count;
          dominant = parseInt(angle);
        }
      }
      if (dominant !== 0) autoFix = dominant;
    }
  } catch (e3) {
  }
  if (autoFix === 0 && textItemCount < 3) {
    try {
      const ops = await page.getOperatorList();
      let lastT = [1, 0, 0, 1, 0, 0];
      for (let i3 = 0; i3 < ops.fnArray.length; i3++) {
        if (ops.fnArray[i3] === 12) lastT = ops.argsArray[i3];
        if (ops.fnArray[i3] === 85 || ops.fnArray[i3] === 82) {
          const [a3, b2] = lastT;
          if (Math.abs(b2) > Math.abs(a3) * 5 && Math.abs(lastT[2]) > Math.abs(lastT[3]) * 5) {
            autoFix = b2 > 0 ? 270 : 90;
          }
          break;
        }
      }
    } catch (e3) {
    }
  }
  if (autoFix === 0 && rawW > rawH * 1.05) autoFix = 90;
  cacheRef.current[pageNum] = autoFix;
  return (autoFix + manualRotation) % 360;
}
function drawHighlights(ctx, highlights, viewport, rotation) {
  const rects = [];
  const vw = viewport.width;
  const vh = viewport.height;
  highlights.forEach((hl, i3) => {
    const isActive = i3 === 0;
    ctx.fillStyle = isActive ? "rgba(59, 130, 246, 0.30)" : "rgba(254, 240, 138, 0.35)";
    ctx.strokeStyle = isActive ? "rgba(59, 130, 246, 0.75)" : "rgba(234, 179, 8, 0.55)";
    ctx.lineWidth = isActive ? 2 : 1.5;
    const { x: ox, y: oy, w: ow, h: oh } = hl;
    let x2, y3, w3, h3;
    const r3 = rotation % 360;
    if (r3 === 0) {
      x2 = ox * vw;
      y3 = oy * vh;
      w3 = ow * vw;
      h3 = oh * vh;
    } else if (r3 === 90) {
      x2 = (1 - oy - oh) * vw;
      y3 = ox * vh;
      w3 = oh * vw;
      h3 = ow * vh;
    } else if (r3 === 180) {
      x2 = (1 - ox - ow) * vw;
      y3 = (1 - oy - oh) * vh;
      w3 = ow * vw;
      h3 = oh * vh;
    } else if (r3 === 270) {
      x2 = oy * vw;
      y3 = (1 - ox - ow) * vh;
      w3 = oh * vw;
      h3 = ow * vh;
    }
    const rad = 3;
    ctx.beginPath();
    ctx.moveTo(x2 + rad, y3);
    ctx.lineTo(x2 + w3 - rad, y3);
    ctx.quadraticCurveTo(x2 + w3, y3, x2 + w3, y3 + rad);
    ctx.lineTo(x2 + w3, y3 + h3 - rad);
    ctx.quadraticCurveTo(x2 + w3, y3 + h3, x2 + w3 - rad, y3 + h3);
    ctx.lineTo(x2 + rad, y3 + h3);
    ctx.quadraticCurveTo(x2, y3 + h3, x2, y3 + h3 - rad);
    ctx.lineTo(x2, y3 + rad);
    ctx.quadraticCurveTo(x2, y3, x2 + rad, y3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    rects.push({ x: x2, y: y3, w: w3, h: h3, isActive });
  });
  return rects;
}
function scrollToHighlight(rects, scrollEl) {
  if (!rects.length || !scrollEl) return;
  const active = rects.find((r3) => r3.isActive) || rects[0];
  const wrap = scrollEl.querySelector(".super-pdfv__canvas-wrap");
  if (!wrap) return;
  requestAnimationFrame(() => {
    const sr = scrollEl.getBoundingClientRect();
    const wr = wrap.getBoundingClientRect();
    const offX = wr.left - sr.left + scrollEl.scrollLeft;
    const offY = wr.top - sr.top + scrollEl.scrollTop;
    scrollEl.scrollTo({
      left: Math.max(0, offX + active.x + active.w / 2 - scrollEl.clientWidth / 2),
      top: Math.max(0, offY + active.y + active.h / 2 - scrollEl.clientHeight / 2),
      behavior: "smooth"
    });
  });
}

// content/evidence-viewers.js
function parseEvidenceForViewer(ev) {
  const { sourceType, evidenceId } = ev;
  const sourceId = ev.sourceId || ev.id || "";
  const evType = ev.type;
  if (sourceType === "progress-note" && sourceId) {
    return { viewerType: "clinical-note", id: sourceId };
  }
  if (sourceType === "therapy-doc" && sourceId) {
    return { viewerType: "therapy-document", id: sourceId };
  }
  if (sourceType === "document" && sourceId) {
    return { viewerType: "document", id: sourceId };
  }
  if (evType === "clinical_note" && sourceId) {
    const noteId = sourceId.replace(/^pcc-prognote-/, "").replace(/^patient-practnote-/, "");
    return { viewerType: "clinical-note", id: noteId };
  }
  if (evType === "therapy_document" && sourceId) {
    const docId = sourceId.replace(/^therapy-doc-/, "");
    return { viewerType: "therapy-document", id: docId };
  }
  if (evType === "document" && sourceId) {
    return { viewerType: "document", id: sourceId };
  }
  const eid = evidenceId || sourceId;
  if (eid) {
    if (eid.startsWith("therapy-doc-")) {
      return { viewerType: "therapy-document", id: eid.replace("therapy-doc-", "") };
    }
    if (eid.startsWith("pcc-prognote-")) {
      return { viewerType: "clinical-note", id: eid.replace("pcc-prognote-", "") };
    }
    if (eid.startsWith("patient-practnote-")) {
      return { viewerType: "clinical-note", id: eid.replace("patient-practnote-", "") };
    }
    if (eid.includes("-chunk-")) {
      return { viewerType: "document", id: eid.split("-chunk-")[0] };
    }
  }
  return { viewerType: null, id: null };
}
function getModalMountPoint() {
  const icd10Container = document.querySelector(".icd10-viewer-modal__container");
  if (icd10Container) return icd10Container;
  return document.body;
}
async function fetchClinicalNote(noteId, params) {
  const endpoint = `/api/extension/clinical-notes/${noteId}?facilityName=${encodeURIComponent(params.facilityName)}&orgSlug=${params.orgSlug}`;
  const response = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint
  });
  if (!response.success) throw new Error(response.error);
  return response.data;
}
async function fetchTherapyDocument(therapyDocId, params) {
  const endpoint = `/api/extension/therapy-documents/${therapyDocId}?facilityName=${encodeURIComponent(params.facilityName)}&orgSlug=${params.orgSlug}`;
  const response = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint
  });
  if (!response.success) throw new Error(response.error);
  return response.data;
}
async function fetchDocument(documentId, params) {
  const endpoint = `/api/extension/documents/${documentId}?facilityName=${encodeURIComponent(params.facilityName)}&orgSlug=${params.orgSlug}`;
  const response = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint
  });
  if (!response.success) throw new Error(response.error);
  return response.data;
}
function escapeHTMLViewer(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function formatDateDisplay(dateStr) {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  } catch {
    return dateStr;
  }
}
function formatDateTimeDisplay(dateStr) {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  } catch {
    return dateStr;
  }
}
var HIGHLIGHT_DATA_ATTR = "data-evidence-highlight";
function normalizeText(text) {
  if (!text) return "";
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}
function textMatchesQuote(fieldText, quoteText) {
  if (!fieldText || !quoteText) return false;
  const normalizedField = normalizeText(fieldText);
  const normalizedQuote = normalizeText(quoteText);
  if (normalizedField.length < 10 || normalizedQuote.length < 10) return false;
  return normalizedField.includes(normalizedQuote) || normalizedQuote.includes(normalizedField);
}
function textHasWordOverlap(fieldText, quoteText, minWordLength = 4) {
  if (!fieldText || !quoteText) return false;
  const normalizedField = normalizeText(fieldText);
  const normalizedQuote = normalizeText(quoteText);
  const quoteWords = normalizedQuote.split(/\s+/).filter((word) => word.length >= minWordLength);
  const matchingWords = quoteWords.filter((word) => normalizedField.includes(word));
  return matchingWords.length >= 2;
}
function isTextHighlighted(highlightQuote, fieldText) {
  return textMatchesQuote(fieldText, highlightQuote) || textHasWordOverlap(fieldText, highlightQuote);
}
function anyTextMatchesQuote(texts, quoteText) {
  return texts.some((text) => textMatchesQuote(text, quoteText) || textHasWordOverlap(text, quoteText));
}
function formatSignatureDateTime(dateString) {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  } catch {
    return dateString;
  }
}
function setupModalCloseHandlers(modal, modalClass) {
  const isOnBody = !document.querySelector(".icd10-viewer-modal__container");
  if (isOnBody) document.body.style.overflow = "hidden";
  const closeModal = () => {
    if (isOnBody) document.body.style.overflow = "";
    modal.remove();
  };
  modal.querySelector(`.${modalClass}__close`).addEventListener("click", closeModal);
  modal.querySelector(`.${modalClass}__backdrop`).addEventListener("click", closeModal);
  const escHandler = (e3) => {
    if (e3.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", escHandler);
    }
  };
  document.addEventListener("keydown", escHandler);
}
function renderModalError(modal, errorMessage, modalClass) {
  const body = modal.querySelector(`.${modalClass}__body`);
  body.innerHTML = `
    <div class="super-viewer-error">
      <div class="super-viewer-error__icon">\u26A0\uFE0F</div>
      <div class="super-viewer-error__message">${escapeHTMLViewer(errorMessage)}</div>
    </div>
  `;
}
async function showClinicalNoteModal(noteId) {
  const params = await window.getCurrentParams();
  const modal = createNoteModalShell();
  getModalMountPoint().appendChild(modal);
  try {
    const data = await fetchClinicalNote(noteId, params);
    renderNoteModalContent(modal, data.note);
  } catch (error) {
    renderModalError(modal, error.message, "super-note-modal");
  }
}
function createNoteModalShell() {
  const modal = document.createElement("div");
  modal.className = "super-note-modal";
  modal.innerHTML = `
    <div class="super-note-modal__backdrop"></div>
    <div class="super-note-modal__container">
      <div class="super-note-modal__header">
        <div class="super-note-modal__title">
          <span class="super-note-modal__name">Loading...</span>
        </div>
        <button class="super-note-modal__close">&times;</button>
      </div>
      <div class="super-note-modal__body">
        <div class="super-viewer-loading">
          <div class="super-viewer-loading__spinner"></div>
          <span>Loading note...</span>
        </div>
      </div>
    </div>
  `;
  setupModalCloseHandlers(modal, "super-note-modal");
  return modal;
}
function renderNoteModalContent(modal, note) {
  const container = modal.querySelector(".super-note-modal__container");
  const noteTypeLabel = note.noteType === "practitioner" ? "Practitioner Note" : "Progress Note";
  const noteTypeBadgeClass = note.noteType === "practitioner" ? "super-note-badge--practitioner" : "super-note-badge--progress";
  container.innerHTML = `
    <div class="super-note-modal__header">
      <div class="super-note-modal__title-row">
        <span class="super-note-modal__icon">\u{1F4DD}</span>
        <div class="super-note-modal__title">
          <span class="super-note-modal__name">${escapeHTMLViewer(note.department || noteTypeLabel)}</span>
          <span class="super-note-badge ${noteTypeBadgeClass}">${noteTypeLabel}</span>
        </div>
        <button class="super-note-modal__close">&times;</button>
      </div>
      ${note.provider ? `<div class="super-note-modal__provider">${escapeHTMLViewer(note.provider)}</div>` : ""}
      <div class="super-note-modal__meta">
        ${note.effectiveDate ? `<span>${formatDateDisplay(note.effectiveDate)}</span>` : ""}
        ${note.visitType ? `<span class="super-note-modal__visit-type">${escapeHTMLViewer(note.visitType)}</span>` : ""}
        ${note.task ? `<span class="super-note-modal__task">${escapeHTMLViewer(note.task)}</span>` : ""}
      </div>
    </div>

    <div class="super-note-modal__body">
      <div class="super-note-modal__text">${escapeHTMLViewer(note.noteText || "No note content available.")}</div>
    </div>

    <div class="super-note-modal__footer">
      ${note.signedDate ? `<span class="super-note-modal__signed">Signed: ${formatDateTimeDisplay(note.signedDate)}</span>` : ""}
      ${note.hasAddendum ? `<span class="super-note-modal__addendum">Has Addendum</span>` : ""}
    </div>
  `;
  setupModalCloseHandlers(modal, "super-note-modal");
}
async function showTherapyDocModal(therapyDocId, highlightQuote = null) {
  const params = await window.getCurrentParams();
  const modal = createTherapyModalShell();
  getModalMountPoint().appendChild(modal);
  try {
    const data = await fetchTherapyDocument(therapyDocId, params);
    renderTherapyModalContent(modal, data.therapyDocument, highlightQuote);
  } catch (error) {
    renderModalError(modal, error.message, "super-therapy-modal");
  }
}
function createTherapyModalShell() {
  const modal = document.createElement("div");
  modal.className = "super-therapy-modal";
  modal.dataset.zoom = "100";
  modal.innerHTML = `
    <div class="super-therapy-modal__backdrop"></div>
    <div class="super-therapy-modal__container">
      <div class="super-therapy-modal__toolbar">
        <div class="super-therapy-modal__toolbar-title">Loading...</div>
        <div class="super-therapy-modal__toolbar-controls">
          <div class="super-therapy-modal__zoom">
            <button class="super-therapy-modal__zoom-btn" data-zoom-action="out" title="Zoom Out">\u2212</button>
            <span class="super-therapy-modal__zoom-level">100%</span>
            <button class="super-therapy-modal__zoom-btn" data-zoom-action="in" title="Zoom In">+</button>
          </div>
          <button class="super-therapy-modal__close">&times;</button>
        </div>
      </div>
      <div class="super-therapy-modal__body">
        <div class="super-viewer-loading">
          <div class="super-viewer-loading__spinner"></div>
          <span>Loading therapy document...</span>
        </div>
      </div>
      <div class="super-therapy-modal__footer">
        <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
      </div>
    </div>
  `;
  setupModalCloseHandlers(modal, "super-therapy-modal");
  setupTherapyZoomHandlers(modal);
  modal.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "";
    modal.remove();
  });
  return modal;
}
function setupTherapyZoomHandlers(modal) {
  const zoomLevels = [50, 75, 100, 125, 150];
  modal.querySelectorAll(".super-therapy-modal__zoom-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.zoomAction;
      const currentZoom = parseInt(modal.dataset.zoom) || 100;
      const currentIndex = zoomLevels.indexOf(currentZoom);
      let newZoom = currentZoom;
      if (action === "in" && currentIndex < zoomLevels.length - 1) {
        newZoom = zoomLevels[currentIndex + 1];
      } else if (action === "out" && currentIndex > 0) {
        newZoom = zoomLevels[currentIndex - 1];
      }
      modal.dataset.zoom = newZoom;
      const zoomDisplay = modal.querySelector(".super-therapy-modal__zoom-level");
      if (zoomDisplay) zoomDisplay.textContent = `${newZoom}%`;
      const doc = modal.querySelector(".super-therapy-doc");
      if (doc) {
        doc.style.transform = `scale(${newZoom / 100})`;
        doc.style.transformOrigin = "top center";
      }
    });
  });
}
function renderTherapyModalContent(modal, doc, highlightQuote = null) {
  const { documentType } = doc;
  switch (documentType) {
    case "EVAL":
      renderEvalDocument(modal, doc, highlightQuote);
      break;
    case "TEN":
      renderTENDocument(modal, doc, highlightQuote);
      break;
    case "PR":
      renderProgressReport(modal, doc, highlightQuote);
      break;
    case "RECERT":
      renderRecertDocument(modal, doc, highlightQuote);
      break;
    case "DISCH":
      renderDischargeDocument(modal, doc, highlightQuote);
      break;
    default:
      renderGenericTherapyDoc(modal, doc, highlightQuote);
  }
  if (highlightQuote) {
    setTimeout(() => {
      setupHighlightNavigation(modal);
    }, 100);
  }
}
function setupHighlightNavigation(modal) {
  const highlights = modal.querySelectorAll(`[${HIGHLIGHT_DATA_ATTR}="true"]`);
  if (highlights.length === 0) return;
  highlights[0].scrollIntoView({ behavior: "smooth", block: "center" });
  if (highlights.length === 1) return;
  const nav = document.createElement("div");
  nav.className = "super-therapy-highlight-nav";
  nav.innerHTML = `
    <button class="super-therapy-highlight-nav__btn" data-action="prev" title="Previous highlight">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <span class="super-therapy-highlight-nav__count">1 of ${highlights.length}</span>
    <button class="super-therapy-highlight-nav__btn" data-action="next" title="Next highlight">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  `;
  const modalBody = modal.querySelector(".super-therapy-modal__body");
  if (modalBody) {
    modalBody.appendChild(nav);
  }
  let currentIndex = 0;
  const goToHighlight = (index) => {
    highlights.forEach((h3) => h3.classList.remove("super-therapy-highlight--active"));
    highlights[index].classList.add("super-therapy-highlight--active");
    highlights[index].scrollIntoView({ behavior: "smooth", block: "center" });
    nav.querySelector(".super-therapy-highlight-nav__count").textContent = `${index + 1} of ${highlights.length}`;
  };
  nav.querySelectorAll(".super-therapy-highlight-nav__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;
      if (action === "prev") {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : highlights.length - 1;
      } else {
        currentIndex = currentIndex < highlights.length - 1 ? currentIndex + 1 : 0;
      }
      goToHighlight(currentIndex);
    });
  });
  highlights[0].classList.add("super-therapy-highlight--active");
}
var DISCIPLINE_NAMES = {
  "PT": "Physical Therapy",
  "OT": "Occupational Therapy",
  "ST": "Speech Therapy"
};
var DOC_TYPE_TITLES = {
  "EVAL": "Initial Evaluation",
  "TEN": "Treatment Encounter Note(s)",
  "PR": "Progress Report",
  "RECERT": "Recertification",
  "DISCH": "Discharge Summary"
};
function getField(data, ...keys) {
  for (const key of keys) {
    if (data[key] !== void 0) return data[key];
    const pascal = key.charAt(0).toUpperCase() + key.slice(1);
    if (data[pascal] !== void 0) return data[pascal];
  }
  return null;
}
function renderDocumentHeader(doc) {
  const json = doc.jsonData || {};
  const params = json.Parameters || json.parameters || {};
  const discipline = doc.discipline || "";
  const disciplineName = DISCIPLINE_NAMES[discipline] || discipline || "Therapy";
  const docType = doc.documentType || "";
  const docTitle = DOC_TYPE_TITLES[docType] || json.BodyDocumentName || json.bodyDocumentName || docType;
  const providerName = doc.providerName || getField(params, "ProviderName", "providerName") || getField(json, "HeaderProviderName", "headerProviderName") || "";
  const patientName = getField(params, "PatientName", "patientName") || getField(json, "HeaderPatientName", "headerPatientName") || getField(json, "BodyPatientName", "bodyPatientName") || "";
  return `
    <div class="super-therapy-doc__header">
      <div class="super-therapy-doc__discipline">${escapeHTMLViewer(disciplineName)}</div>
      <div class="super-therapy-doc__title">${escapeHTMLViewer(docTitle)}</div>
    </div>
    <div class="super-therapy-doc__info-row">
      <div class="super-therapy-doc__provider">
        <span class="super-therapy-doc__provider-label">Provider: </span>${escapeHTMLViewer(providerName)}
      </div>
      <div class="super-therapy-doc__patient">${escapeHTMLViewer(patientName)}</div>
    </div>
  `;
}
function renderIdentificationTable(doc) {
  const json = doc.jsonData || {};
  const params = json.Parameters || json.parameters || {};
  const patientName = getField(params, "PatientName", "patientName") || getField(json, "BodyPatientName", "bodyPatientName") || "";
  const mrn = getField(params, "MedicalRecordNumber", "medicalRecordNumber") || getField(json, "BodyMRN", "bodyMRN") || "";
  const dob = getField(params, "DateOfBirth", "dateOfBirth") || getField(json, "BodyDOB", "bodyDOB") || "";
  const payer = getField(params, "PayerName", "payerName") || "";
  const startOfCare = getField(params, "StartOfCare", "startOfCare") || "";
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Identification Information</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-id-table">
          <tr>
            <td class="super-therapy-id-table__label">Patient:</td>
            <td class="super-therapy-id-table__value">${escapeHTMLViewer(patientName)}</td>
            ${dob ? `<td class="super-therapy-id-table__label">DOB:</td><td class="super-therapy-id-table__value">${escapeHTMLViewer(dob)}</td>` : ""}
            ${startOfCare ? `<td class="super-therapy-id-table__label">Start of Care:</td><td class="super-therapy-id-table__value">${escapeHTMLViewer(startOfCare)}</td>` : ""}
          </tr>
          <tr>
            ${payer ? `<td class="super-therapy-id-table__label">Payer:</td><td class="super-therapy-id-table__value">${escapeHTMLViewer(payer)}</td>` : ""}
            <td class="super-therapy-id-table__label">MRN:</td>
            <td class="super-therapy-id-table__value" ${payer ? "" : 'colspan="3"'}>${escapeHTMLViewer(mrn)}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
}
function renderDiagnosesTable(diagnoses) {
  if (!diagnoses || diagnoses.length === 0) return "";
  const medicalDx = diagnoses.filter((d3) => d3.IsMedicalDx || d3.isMedicalDx);
  const treatmentDx = diagnoses.filter((d3) => d3.IsTreatmentDx || d3.isTreatmentDx);
  if (medicalDx.length === 0 && treatmentDx.length === 0) return "";
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Diagnoses</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-dx-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Code</th>
              <th>Description</th>
              <th>Onset</th>
            </tr>
          </thead>
          <tbody>
            ${medicalDx.map((d3) => `
              <tr>
                <td>Medical</td>
                <td class="super-therapy-dx-table__code">${escapeHTMLViewer(d3.Code || d3.code || "")}</td>
                <td>${escapeHTMLViewer(d3.Description || d3.description || "")}</td>
                <td>${formatDateDisplay(d3.OnsetDate || d3.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
            ${treatmentDx.map((d3) => `
              <tr>
                <td>Treatment</td>
                <td class="super-therapy-dx-table__code">${escapeHTMLViewer(d3.Code || d3.code || "")}</td>
                <td>${escapeHTMLViewer(d3.Description || d3.description || "")}</td>
                <td>${formatDateDisplay(d3.OnsetDate || d3.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function renderGoalCard(goal, isLongTerm = false, highlightQuote = null) {
  const goalType = isLongTerm ? "LTG" : "STG";
  const goalNum = goal.GoalNum || goal.goalNum || "?";
  const status = goal.GoalStatus || goal.goalStatus || "Continue";
  const statusClass = `super-therapy-goal__status--${status.toLowerCase().replace(/\s+/g, "")}`;
  const goalText = goal.GoalText || goal.goalText || "";
  const targetDate = goal.TargetDate || goal.targetDate || "";
  const plofText = goal.GoalPlofText || goal.goalPlofText || "";
  const baselineText = goal.BaselineValueText || goal.baselineValueText || "";
  const priorText = goal.PriorValueText || goal.priorValueText || "";
  const currentText = goal.CurrentValueText || goal.currentValueText || "";
  const comments = goal.Comments || goal.comments || "";
  const measurementCaption = goal.MeasurementCaption || goal.measurementCaption || "";
  const allTexts = [goalText, comments, baselineText, priorText, currentText, plofText];
  const hasMatch = anyTextMatchesQuote(allTexts, highlightQuote);
  const highlightAttr = hasMatch ? `${HIGHLIGHT_DATA_ATTR}="true"` : "";
  const goalTextHighlight = isTextHighlighted(highlightQuote, goalText) ? "super-therapy-highlight" : "";
  const commentsHighlight = isTextHighlighted(highlightQuote, comments) ? "super-therapy-highlight" : "";
  return `
    <div class="super-therapy-goal" ${highlightAttr}>
      <div class="super-therapy-goal__header">
        <div class="super-therapy-goal__title">${goalType} #${goalNum} - ${status}</div>
        <span class="super-therapy-goal__status ${statusClass}">${status}</span>
      </div>
      <div class="super-therapy-goal__body">
        <p class="super-therapy-goal__text ${goalTextHighlight}">${escapeHTMLViewer(goalText)}</p>
        ${targetDate ? `<p class="super-therapy-goal__target">Target: ${formatDateDisplay(targetDate)}</p>` : ""}
      </div>
      <div class="super-therapy-goal__progress">
        <div>
          <div class="super-therapy-goal__progress-item">
            <div class="super-therapy-goal__progress-label">PLOF</div>
            <div class="super-therapy-goal__progress-value">${escapeHTMLViewer(plofText || "Not specified")}</div>
          </div>
          ${baselineText ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Baseline${measurementCaption ? ` <span class="super-therapy-goal__progress-sublabel">(${escapeHTMLViewer(measurementCaption)})</span>` : ""}</div>
              <div class="super-therapy-goal__progress-value">${escapeHTMLViewer(baselineText)}</div>
            </div>
          ` : ""}
        </div>
        <div>
          ${priorText ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Previous</div>
              <div class="super-therapy-goal__progress-value">${escapeHTMLViewer(priorText)}</div>
            </div>
          ` : ""}
          ${currentText ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Current</div>
              <div class="super-therapy-goal__progress-value">${escapeHTMLViewer(currentText)}</div>
            </div>
          ` : ""}
        </div>
      </div>
      ${comments ? `
        <div class="super-therapy-goal__comments">
          <span class="super-therapy-goal__comments-label">Comments: </span>
          <span class="${commentsHighlight}">${escapeHTMLViewer(comments)}</span>
        </div>
      ` : ""}
    </div>
  `;
}
function renderGoalsSection(goals, highlightQuote = null) {
  if (!goals || goals.length === 0) return "";
  const stGoals = goals.filter((g2) => !g2.IsLongTerm && !g2.isLongTerm);
  const ltGoals = goals.filter((g2) => g2.IsLongTerm || g2.isLongTerm);
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Goals</div>
      <div class="super-therapy-section__body">
        ${ltGoals.length > 0 ? `
          <div class="super-therapy-goals-title">Long-Term Goals</div>
          ${ltGoals.map((g2) => renderGoalCard(g2, true, highlightQuote)).join("")}
        ` : ""}
        ${stGoals.length > 0 ? `
          <div class="super-therapy-goals-title">Short-Term Goals</div>
          ${stGoals.map((g2) => renderGoalCard(g2, false, highlightQuote)).join("")}
        ` : ""}
      </div>
    </div>
  `;
}
function renderInterventionsSection(approaches) {
  if (!approaches || approaches.length === 0) return "";
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Plan of Treatment - Interventions</div>
      <div class="super-therapy-section__body">
        ${approaches.map((a3) => `
          <div class="super-therapy-intervention">
            <span class="super-therapy-intervention__code">${escapeHTMLViewer(a3.Code || a3.code || "")}</span>
            - ${escapeHTMLViewer(a3.Description || a3.description || "")}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
function renderAssessmentSections(assessmentLayout, highlightQuote = null) {
  if (!assessmentLayout || assessmentLayout.length === 0) return "";
  const sections = {};
  assessmentLayout.forEach((item) => {
    const sectionName = item.PrintSectionName || item.printSectionName || item.SectionName || item.sectionName || "Assessment";
    const groupName = item.PrintGroupName || item.printGroupName || item.GroupName || item.groupName || "";
    const values = item.GroupValues || item.groupValues || "";
    if (!sections[sectionName]) {
      sections[sectionName] = [];
    }
    sections[sectionName].push({ groupName, values });
  });
  return Object.entries(sections).map(([sectionName, items]) => `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">${escapeHTMLViewer(sectionName)}</div>
      <div class="super-therapy-section__body">
        ${items.map((item) => {
    const isHighlighted = isTextHighlighted(highlightQuote, item.values);
    const highlightAttr = isHighlighted ? `${HIGHLIGHT_DATA_ATTR}="true"` : "";
    const highlightClass = isHighlighted ? "super-therapy-highlight" : "";
    return `
            <div class="super-therapy-detail-item" ${highlightAttr}>
              ${item.groupName ? `<div class="super-therapy-detail-item__name">${escapeHTMLViewer(item.groupName)}</div>` : ""}
              <div class="super-therapy-detail-item__value ${highlightClass}">${escapeHTMLViewer(item.values)}</div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `).join("");
}
function renderServiceMatrix(serviceMatrixData) {
  if (!serviceMatrixData) return "";
  const dates = serviceMatrixData.Dates || serviceMatrixData.dates || [];
  const rows = serviceMatrixData.ServiceRows || serviceMatrixData.serviceRows || [];
  if (dates.length === 0 || rows.length === 0) return "";
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Service Matrix</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-matrix">
          <thead>
            <tr>
              <th class="super-therapy-matrix__service-col">Service</th>
              ${dates.map((d3) => `<th>${escapeHTMLViewer(d3)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows.map((row) => `
              <tr>
                <td class="super-therapy-matrix__service-col">${escapeHTMLViewer(row.ServiceCodeAndAbbrev || "")}</td>
                ${dates.map((d3) => {
    const mins = row.DurationsByDate?.[d3] || "";
    return `<td>${mins ? mins + "m" : "-"}</td>`;
  }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
        ${serviceMatrixData.TotalUniqueDays ? `<div style="margin-top: 8px; font-size: 12px; color: #6b7280;">Total Treatment Days: ${serviceMatrixData.TotalUniqueDays}</div>` : ""}
      </div>
    </div>
  `;
}
function renderSignatureSection(signatures) {
  if (!signatures) return "";
  const origSig = signatures.OriginalSignatureText || signatures.originalSignatureText;
  const origDate = signatures.OriginalSignatureDate || signatures.originalSignatureDate;
  const coSig = signatures.OriginalCoSignatureText || signatures.originalCoSignatureText;
  const coDate = signatures.OriginalCosignatureDate || signatures.originalCosignatureDate;
  if (!origSig && !coSig) return "";
  return `
    <div class="super-therapy-signatures">
      ${origSig ? `
        <div class="super-therapy-signature">
          <div class="super-therapy-signature__line">
            <div class="super-therapy-signature__name-area">
              <div class="super-therapy-signature__name">${escapeHTMLViewer(origSig)}</div>
              <div class="super-therapy-signature__label">Original Signature:</div>
            </div>
            ${origDate ? `
              <div class="super-therapy-signature__date-area">
                <div class="super-therapy-signature__date">${formatSignatureDateTime(origDate)}</div>
                <div class="super-therapy-signature__date-label">Date</div>
              </div>
            ` : ""}
          </div>
        </div>
      ` : ""}
      ${coSig ? `
        <div class="super-therapy-signature">
          <div class="super-therapy-signature__line">
            <div class="super-therapy-signature__name-area">
              <div class="super-therapy-signature__name">${escapeHTMLViewer(coSig)}</div>
              <div class="super-therapy-signature__label">Cosignature:</div>
            </div>
            ${coDate ? `
              <div class="super-therapy-signature__date-area">
                <div class="super-therapy-signature__date">${formatSignatureDateTime(coDate)}</div>
                <div class="super-therapy-signature__date-label">Date</div>
              </div>
            ` : ""}
          </div>
        </div>
      ` : ""}
      <div class="super-therapy-page-num">Page 1 of 1</div>
    </div>
  `;
}
function renderTherapyToolbar(title, currentZoom = 100) {
  return `
    <div class="super-therapy-modal__toolbar">
      <div class="super-therapy-modal__toolbar-title">${escapeHTMLViewer(title)}</div>
      <div class="super-therapy-modal__toolbar-controls">
        <div class="super-therapy-modal__zoom">
          <button class="super-therapy-modal__zoom-btn" data-zoom-action="out" title="Zoom Out">\u2212</button>
          <span class="super-therapy-modal__zoom-level">${currentZoom}%</span>
          <button class="super-therapy-modal__zoom-btn" data-zoom-action="in" title="Zoom In">+</button>
        </div>
        <button class="super-therapy-modal__close">&times;</button>
      </div>
    </div>
  `;
}
function renderTENDocument(modal, doc, highlightQuote = null) {
  const container = modal.querySelector(".super-therapy-modal__container");
  const json = doc.jsonData || {};
  const currentZoom = parseInt(modal.dataset.zoom) || 100;
  const title = doc.displayName || `${doc.discipline} TEN - Treatment Note`;
  const sections = json.Sections || json.sections || [];
  const completedDate = getField(json, "CompletedDateFormatted", "completedDateFormatted") || "";
  const assessmentDate = getField(json, "AssessmentDateFormatted", "assessmentDateFormatted") || completedDate;
  const signatures = {
    OriginalSignatureText: json.OriginalSignatureText || json.originalSignatureText,
    OriginalSignatureDate: json.OriginalSignatureDate || json.originalSignatureDate,
    OriginalCoSignatureText: json.OriginalCoSignatureText || json.originalCoSignatureText,
    OriginalCosignatureDate: json.OriginalCosignatureDate || json.originalCosignatureDate
  };
  const treatmentDetails = [];
  const dailyServicesSections = sections[0];
  if (dailyServicesSections) {
    const details = dailyServicesSections.Details || dailyServicesSections.details || [];
    details.forEach((detail) => {
      treatmentDetails.push({
        name: detail.PrintGroupName || detail.printGroupName || "",
        value: detail.GroupValues || detail.groupValues || ""
      });
    });
  }
  container.innerHTML = `
    ${renderTherapyToolbar(title, currentZoom)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${renderDocumentHeader(doc)}
        ${renderIdentificationTable(doc)}

        <!-- Date of Service box -->
        <div class="super-therapy-dates-box">
          <div class="super-therapy-dates-box__item">Date of Service: ${escapeHTMLViewer(assessmentDate)}</div>
          <div class="super-therapy-dates-box__item">Completed Date: ${escapeHTMLViewer(completedDate)}</div>
        </div>

        <!-- Summary of Daily Skilled Services -->
        ${treatmentDetails.length > 0 ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Summary of Daily Skilled Services</div>
            <div class="super-therapy-section__body">
              ${treatmentDetails.map((td) => {
    const isCode = /^\d{5}/.test(td.name);
    const isHighlighted = isTextHighlighted(highlightQuote, td.value);
    const highlightAttr = isHighlighted ? `${HIGHLIGHT_DATA_ATTR}="true"` : "";
    const highlightClass = isHighlighted ? "super-therapy-highlight" : "";
    return `
                  <div class="super-therapy-detail-item" ${highlightAttr}>
                    <div class="super-therapy-detail-item__name ${isCode ? "super-therapy-detail-item__name--code" : ""}">${escapeHTMLViewer(td.name)}</div>
                    <div class="super-therapy-detail-item__value ${highlightClass}">${escapeHTMLViewer(td.value)}</div>
                  </div>
                `;
  }).join("")}
            </div>
          </div>
        ` : ""}

        ${renderSignatureSection(signatures)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `;
  setupModalCloseHandlers(modal, "super-therapy-modal");
  setupTherapyZoomHandlers(modal);
  modal.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "";
    modal.remove();
  });
}
function renderEvalDocument(modal, doc, highlightQuote = null) {
  const container = modal.querySelector(".super-therapy-modal__container");
  const json = doc.jsonData || {};
  const currentZoom = parseInt(modal.dataset.zoom) || 100;
  const title = doc.displayName || `${doc.discipline} Eval - Initial Evaluation`;
  const identifierInfo = json.IdentifierInfo || json.identifierInfo || {};
  const diagnoses = json.Diagnoses || json.diagnoses || [];
  const goals = json.GoalTargets || json.goalTargets || [];
  const approaches = json.Approaches || json.approaches || [];
  const assessment = json.AssessmentLayout || json.assessmentLayout || [];
  const signatures = json.ESignatures || json.eSignatures || {};
  const frequency = getField(identifierInfo, "Frequency", "frequency") || "";
  const duration = getField(identifierInfo, "Duration", "duration") || "";
  const intensity = getField(identifierInfo, "Intensity", "intensity") || "";
  const dateRange = getField(identifierInfo, "DateRange", "dateRange") || "";
  const physicianName = getField(identifierInfo, "PhysicianFullName", "physicianFullName") || "";
  const physicianNPI = getField(identifierInfo, "NPI", "npi") || "";
  container.innerHTML = `
    ${renderTherapyToolbar(title, currentZoom)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${renderDocumentHeader(doc)}
        ${renderIdentificationTable(doc)}

        <!-- Treatment Plan Info -->
        ${frequency || duration || intensity || dateRange ? `
          <div class="super-therapy-plan-info">
            ${dateRange ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Certification Period: </span>${escapeHTMLViewer(dateRange)}</div>` : ""}
            ${frequency ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Frequency: </span>${escapeHTMLViewer(frequency)}</div>` : ""}
            ${duration ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Duration: </span>${escapeHTMLViewer(duration)}</div>` : ""}
            ${intensity ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Intensity: </span>${escapeHTMLViewer(intensity)}</div>` : ""}
          </div>
        ` : ""}

        <!-- Physician Certification -->
        ${physicianName ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Physician Certification</div>
            <div class="super-therapy-section__body">
              <div><strong>Physician:</strong> ${escapeHTMLViewer(physicianName)}</div>
              ${physicianNPI ? `<div><strong>NPI:</strong> ${escapeHTMLViewer(physicianNPI)}</div>` : ""}
            </div>
          </div>
        ` : ""}

        ${renderDiagnosesTable(diagnoses)}
        ${renderGoalsSection(goals, highlightQuote)}
        ${renderInterventionsSection(approaches)}
        ${renderAssessmentSections(assessment, highlightQuote)}
        ${renderSignatureSection(signatures)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `;
  setupModalCloseHandlers(modal, "super-therapy-modal");
  setupTherapyZoomHandlers(modal);
  modal.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "";
    modal.remove();
  });
}
function renderProgressReport(modal, doc, highlightQuote = null) {
  const container = modal.querySelector(".super-therapy-modal__container");
  const json = doc.jsonData || {};
  const currentZoom = parseInt(modal.dataset.zoom) || 100;
  const title = doc.displayName || `${doc.discipline} PR - Progress Report`;
  const diagnoses = json.Diagnoses || json.diagnoses || [];
  const stGoals = json.AllActiveShortTermGoals || json.allActiveShortTermGoals || [];
  const ltGoals = json.AllActiveLongTermGoals || json.allActiveLongTermGoals || [];
  const allGoals = [...stGoals.map((g2) => ({ ...g2, IsLongTerm: false })), ...ltGoals.map((g2) => ({ ...g2, IsLongTerm: true }))];
  const approaches = json.Approaches || json.approaches || [];
  const assessment = json.AssessmentLayout || json.assessmentLayout || [];
  const serviceMatrix = json.ServiceMatrixData || json.serviceMatrixData || {};
  const signatures = json.ESignatures || json.eSignatures || {};
  container.innerHTML = `
    ${renderTherapyToolbar(title, currentZoom)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${renderDocumentHeader(doc)}
        ${renderIdentificationTable(doc)}
        ${renderDiagnosesTable(diagnoses)}
        ${renderGoalsSection(allGoals, highlightQuote)}
        ${renderServiceMatrix(serviceMatrix)}
        ${renderInterventionsSection(approaches)}
        ${renderAssessmentSections(assessment, highlightQuote)}
        ${renderSignatureSection(signatures)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `;
  setupModalCloseHandlers(modal, "super-therapy-modal");
  setupTherapyZoomHandlers(modal);
  modal.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "";
    modal.remove();
  });
}
function renderRecertDocument(modal, doc, highlightQuote = null) {
  const container = modal.querySelector(".super-therapy-modal__container");
  const json = doc.jsonData || {};
  const currentZoom = parseInt(modal.dataset.zoom) || 100;
  const title = doc.displayName || `${doc.discipline} Recert - Recertification`;
  const diagnoses = json.Diagnoses || json.diagnoses || [];
  const goals = json.ProgressGoalTargets || json.progressGoalTargets || [];
  const approaches = json.Approaches || json.approaches || [];
  const assessment = json.AssessmentLayout || json.assessmentLayout || [];
  const serviceMatrix = json.ServiceMatrixData || json.serviceMatrixData || {};
  const signatures = json.ESignatures || json.eSignatures || {};
  container.innerHTML = `
    ${renderTherapyToolbar(title, currentZoom)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${renderDocumentHeader(doc)}
        ${renderIdentificationTable(doc)}
        ${renderDiagnosesTable(diagnoses)}
        ${renderGoalsSection(goals, highlightQuote)}
        ${renderServiceMatrix(serviceMatrix)}
        ${renderInterventionsSection(approaches)}
        ${renderAssessmentSections(assessment, highlightQuote)}
        ${renderSignatureSection(signatures)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `;
  setupModalCloseHandlers(modal, "super-therapy-modal");
  setupTherapyZoomHandlers(modal);
  modal.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "";
    modal.remove();
  });
}
function renderDischargeDocument(modal, doc, highlightQuote = null) {
  const container = modal.querySelector(".super-therapy-modal__container");
  const json = doc.jsonData || {};
  const currentZoom = parseInt(modal.dataset.zoom) || 100;
  const title = doc.displayName || `${doc.discipline} Disch - Discharge Summary`;
  const diagnoses = json.Diagnoses || json.diagnoses || [];
  const assessment = json.AssessmentLayout || json.assessmentLayout || [];
  const signatures = json.ESignatures || json.eSignatures || {};
  container.innerHTML = `
    ${renderTherapyToolbar(title, currentZoom)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${renderDocumentHeader(doc)}
        ${renderIdentificationTable(doc)}
        ${renderDiagnosesTable(diagnoses)}
        ${renderAssessmentSections(assessment, highlightQuote)}
        ${renderSignatureSection(signatures)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `;
  setupModalCloseHandlers(modal, "super-therapy-modal");
  setupTherapyZoomHandlers(modal);
  modal.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "";
    modal.remove();
  });
}
function renderGenericTherapyDoc(modal, doc, highlightQuote = null) {
  const container = modal.querySelector(".super-therapy-modal__container");
  const json = doc.jsonData || {};
  const currentZoom = parseInt(modal.dataset.zoom) || 100;
  const title = doc.displayName || "Therapy Document";
  container.innerHTML = `
    ${renderTherapyToolbar(title, currentZoom)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${renderDocumentHeader(doc)}
        ${renderIdentificationTable(doc)}
        <div class="super-therapy-section">
          <div class="super-therapy-section-header">Document Content</div>
          <div class="super-therapy-section__body">
            <pre class="super-therapy-raw-content">${escapeHTMLViewer(JSON.stringify(json, null, 2))}</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `;
  setupModalCloseHandlers(modal, "super-therapy-modal");
  setupTherapyZoomHandlers(modal);
  modal.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "";
    modal.remove();
  });
}
async function showDocumentModal(documentId, wordBlocks = null) {
  const params = await window.getCurrentParams();
  const modal = createPdfModalShell();
  getModalMountPoint().appendChild(modal);
  try {
    const data = await fetchDocument(documentId, params);
    renderPdfModalContent(modal, data.document, wordBlocks);
  } catch (error) {
    renderModalError(modal, error.message, "super-pdf-modal");
  }
}
function createPdfModalShell() {
  const modal = document.createElement("div");
  modal.className = "super-pdf-modal";
  modal.innerHTML = `
    <div class="super-pdf-modal__backdrop"></div>
    <div class="super-pdf-modal__container">
      <div class="super-pdf-modal__header">
        <div class="super-pdf-modal__title">
          <span class="super-pdf-modal__name">Loading...</span>
        </div>
        <button class="super-pdf-modal__close">&times;</button>
      </div>
      <div class="super-pdf-modal__body">
        <div class="super-viewer-loading">
          <div class="super-viewer-loading__spinner"></div>
          <span>Loading document...</span>
        </div>
      </div>
    </div>
  `;
  setupModalCloseHandlers(modal, "super-pdf-modal");
  return modal;
}
function renderPdfModalContent(modal, doc, wordBlocks = null) {
  const container = modal.querySelector(".super-pdf-modal__container");
  const targetPage = wordBlocks && wordBlocks.length > 0 && wordBlocks[0].p ? wordBlocks[0].p : 1;
  const onClose = () => {
    document.body.style.overflow = "";
    modal.remove();
  };
  container.innerHTML = `
    <div class="super-pdf-modal__header">
      <div class="super-pdf-modal__title-row">
        <span class="super-pdf-modal__icon">\u{1F4C4}</span>
        <div class="super-pdf-modal__title">
          <span class="super-pdf-modal__name">${escapeHTMLViewer(doc.title || "Document")}</span>
          ${doc.documentType ? `<span class="super-pdf-badge">${escapeHTMLViewer(doc.documentType)}</span>` : ""}
        </div>
        <button class="super-pdf-modal__close">&times;</button>
      </div>
    </div>
    <div class="super-pdf-modal__body"></div>
  `;
  setupModalCloseHandlers(modal, "super-pdf-modal");
  const body = modal.querySelector(".super-pdf-modal__body");
  G(
    _(PDFViewer, {
      url: doc.signedUrl || null,
      wordBlocks: wordBlocks || [],
      targetPage,
      title: doc.title || "Document",
      documentType: doc.documentType,
      effectiveDate: doc.effectiveDate,
      fileSize: doc.fileSize,
      onClose,
      expiresAt: true,
      openInNewTabUrl: doc.signedUrl || null
    }),
    body
  );
}
window.showClinicalNoteModal = showClinicalNoteModal;
window.showTherapyDocModal = showTherapyDocModal;
window.showDocumentModal = showDocumentModal;
window.parseEvidenceForViewer = parseEvidenceForViewer;
window.SuperDocViewer = {
  open(evidence) {
    if (!evidence) return;
    const type = evidence.sourceType || evidence.type || "";
    if (type === "clinical_note" || type === "progress_note" || type === "practitioner_note") {
      const id = evidence.viewerId || evidence.sourceId || evidence.id;
      window.showClinicalNoteModal(id);
    } else if (type === "therapy_doc" || type === "therapy") {
      const id = evidence.viewerId || evidence.sourceId || evidence.id;
      window.showTherapyDocModal(id, evidence.quote);
    } else if (type === "pdf" || type === "document") {
      const id = evidence.viewerId || evidence.sourceId || evidence.id;
      window.showDocumentModal(id, evidence.wordBlocks || []);
    }
  }
};

// content/modules/mds-command-center/ItemPopover.jsx
function isOrderEvidence(ev) {
  return ev.sourceType === "order" || (ev.evidenceId || "").startsWith("order-");
}
function getOrderId(ev) {
  const id = ev.sourceId || ev.evidenceId || "";
  return id.replace(/^order-/, "");
}
function isViewableEvidence(ev) {
  const vt = parseViewer(ev).viewerType;
  return vt === "document" || vt === "clinical-note" || vt === "therapy-document" || isOrderEvidence(ev);
}
function ItemPopover({ item, context, onClose }) {
  const mdsItem = item?.mdsItem;
  const categoryKey = item?.categoryKey;
  const { data, loading, error } = useItemDetail(mdsItem, categoryKey, context);
  const displayCode = mdsItem?.startsWith("I8000:") ? "I8000" : mdsItem;
  const [viewingSource, setViewingSource] = d2(null);
  const docCacheRef = A2(/* @__PURE__ */ new Map());
  const adminContainerRef = A2(null);
  const noteContainerRef = A2(null);
  const allEvidence = getEvidence(data);
  const viewableEvidence = allEvidence.filter(isViewableEvidence);
  const viewingOrder = viewingSource && isOrderEvidence(viewingSource.ev);
  const viewingViewerType = viewingSource ? parseViewer(viewingSource.ev).viewerType : null;
  const viewingNote = viewingViewerType === "clinical-note";
  const viewingTherapy = viewingViewerType === "therapy-document";
  const viewingDoc = viewingSource && !viewingOrder && !viewingNote && !viewingTherapy;
  const docEvidence = viewableEvidence.filter((ev) => {
    if (isOrderEvidence(ev)) return false;
    return parseViewer(ev).viewerType === "document";
  });
  y2(() => {
    if (!data || docEvidence.length === 0) return;
    const prefetch = async () => {
      let params;
      try {
        params = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const ev of docEvidence) {
        const viewer = parseViewer(ev);
        if (!viewer.id || docCacheRef.current.has(viewer.id)) continue;
        const promise = fetchDocument(viewer.id, params).then((result) => {
          const entry = docCacheRef.current.get(viewer.id);
          if (entry) entry.document = result.document;
          return result.document;
        }).catch((err) => {
          console.warn("[ItemPopover] Prefetch failed for", viewer.id, err);
          return null;
        });
        docCacheRef.current.set(viewer.id, { document: null, promise });
      }
    };
    prefetch();
  }, [data]);
  const [currentDoc, setCurrentDoc] = d2(null);
  const [docLoading, setDocLoading] = d2(false);
  y2(() => {
    if (!viewingSource || viewingOrder || viewingNote || viewingTherapy) {
      setCurrentDoc(null);
      setDocLoading(false);
      return;
    }
    const viewer = parseViewer(viewingSource.ev);
    if (!viewer.id) return;
    const cached = docCacheRef.current.get(viewer.id);
    if (cached?.document) {
      setCurrentDoc(cached.document);
      setDocLoading(false);
      return;
    }
    setDocLoading(true);
    const loadDoc = async () => {
      try {
        let doc;
        if (cached?.promise) {
          doc = await cached.promise;
        } else {
          const params = await window.getCurrentParams();
          const result = await fetchDocument(viewer.id, params);
          doc = result.document;
          docCacheRef.current.set(viewer.id, { document: doc, promise: Promise.resolve(doc) });
        }
        setCurrentDoc(doc);
      } catch (err) {
        console.error("[ItemPopover] Failed to load document:", err);
        setCurrentDoc(null);
      } finally {
        setDocLoading(false);
      }
    };
    loadDoc();
  }, [viewingSource, viewingOrder, viewingNote, viewingTherapy]);
  y2(() => {
    if (!viewingOrder || !adminContainerRef.current) return;
    const el = adminContainerRef.current;
    const orderId = getOrderId(viewingSource.ev);
    el.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading administrations...</span></div>';
    if (window.renderSplitAdministrations) {
      const resolveAndRender = async () => {
        const orgResponse = getOrg();
        const orgSlug = orgResponse?.org;
        const facilityName = window.getChatFacilityInfo?.() || "";
        const params = { assessmentId: context?.assessmentId, orgSlug, facilityName };
        await window.renderSplitAdministrations(el, orderId, void 0, params);
      };
      resolveAndRender().catch((err) => {
        console.error("[ItemPopover] Failed to load administrations:", err);
        el.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load administrations</span></div>';
      });
    } else {
      el.innerHTML = '<div class="cc-pop__viewer-loading"><span>Administration viewer not available</span></div>';
    }
  }, [viewingSource, viewingOrder]);
  y2(() => {
    if (!viewingNote && !viewingTherapy || !noteContainerRef.current) return;
    const el = noteContainerRef.current;
    const viewer = parseViewer(viewingSource.ev);
    const quote = viewingSource.ev.quoteText || viewingSource.ev.quote || viewingSource.ev.snippet || "";
    el.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading...</span></div>';
    const resolveAndRender = async () => {
      const orgResponse = getOrg();
      const orgSlug = orgResponse?.org;
      const facilityName = window.getChatFacilityInfo?.() || "";
      const params = { assessmentId: context?.assessmentId, orgSlug, facilityName };
      if (viewingNote && window.renderSplitNote) {
        await window.renderSplitNote(el, viewer.id, params);
      } else if (viewingTherapy && window.renderSplitTherapy) {
        await window.renderSplitTherapy(el, viewer.id, quote, params);
      } else {
        el.innerHTML = '<div class="cc-pop__viewer-loading"><span>Viewer not available</span></div>';
      }
    };
    resolveAndRender().catch((err) => {
      console.error("[ItemPopover] Failed to load source:", err);
      el.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load</span></div>';
    });
  }, [viewingSource, viewingNote, viewingTherapy]);
  const handleViewSource = q2((ev, index) => {
    setViewingSource({ ev, index });
  }, []);
  const handleBack = q2(() => {
    setViewingSource(null);
  }, []);
  const isSplit = viewingSource !== null;
  return /* @__PURE__ */ u3("div", { class: "cc-pop__backdrop", onClick: (e3) => {
    if (e3.target === e3.currentTarget) onClose();
  }, children: /* @__PURE__ */ u3("div", { class: `cc-pop${isSplit ? " cc-pop--split" : ""}`, onClick: (e3) => e3.stopPropagation(), children: [
    /* @__PURE__ */ u3("div", { class: "cc-pop__header", children: /* @__PURE__ */ u3("div", { class: "cc-pop__header-top", children: [
      /* @__PURE__ */ u3("div", { class: "cc-pop__header-left", children: [
        isSplit && /* @__PURE__ */ u3("button", { class: "cc-pop__back-btn", onClick: handleBack, type: "button", children: [
          /* @__PURE__ */ u3("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ u3("polyline", { points: "15 18 9 12 15 6" }) }),
          "Back"
        ] }),
        /* @__PURE__ */ u3("span", { class: "cc-pop__code", children: displayCode }),
        /* @__PURE__ */ u3("span", { class: "cc-pop__name", children: item?.itemName || data?.item?.description || "Item Detail" })
      ] }),
      /* @__PURE__ */ u3("button", { class: "cc-pop__close", onClick: onClose, type: "button", children: "\xD7" })
    ] }) }),
    !isSplit ? /* @__PURE__ */ u3("div", { class: "cc-pop__body", children: [
      loading && /* @__PURE__ */ u3("div", { class: "cc-pop__loading", children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
        /* @__PURE__ */ u3("span", { children: "Loading..." })
      ] }),
      error && /* @__PURE__ */ u3("div", { class: "cc-pop__error", children: error }),
      !loading && !error && data && /* @__PURE__ */ u3(
        ItemDetail,
        {
          variant: "compact",
          data,
          detectionItem: item,
          mdsItem,
          onViewSource: handleViewSource
        }
      )
    ] }) : /* @__PURE__ */ u3("div", { class: "cc-pop__split-body", children: [
      /* @__PURE__ */ u3("div", { class: "cc-pop__sources", children: [
        /* @__PURE__ */ u3("div", { class: "cc-pop__sources-label", children: [
          "Sources (",
          viewableEvidence.length,
          ")"
        ] }),
        viewableEvidence.map((ev, i3) => {
          const isOrder = isOrderEvidence(ev);
          const sourceType = ev.sourceType || inferSourceType(ev.displayName, ev.evidenceId);
          const typeLabel = ev.displayName || SOURCE_LABELS[sourceType] || (isOrder ? "Orders" : "Document");
          const snippet = ev.quoteText || ev.orderDescription || ev.quote || ev.snippet || ev.text || "";
          const page = ev.wordBlocks?.[0]?.p;
          const isActive = viewingSource.ev === ev;
          return /* @__PURE__ */ u3(
            "div",
            {
              class: `cc-pop__source-card${isActive ? " cc-pop__source-card--active" : ""}`,
              onClick: () => setViewingSource({ ev, index: i3 }),
              role: "button",
              children: [
                /* @__PURE__ */ u3("div", { class: `cc-pop__source-badge${isOrder ? " cc-pop__source-badge--order" : ""}`, children: typeLabel }),
                snippet && /* @__PURE__ */ u3("div", { class: "cc-pop__source-snippet", children: snippet }),
                !isOrder && page && /* @__PURE__ */ u3("div", { class: "cc-pop__source-page", children: [
                  "Page ",
                  page
                ] })
              ]
            },
            i3
          );
        })
      ] }),
      /* @__PURE__ */ u3("div", { class: "cc-pop__viewer", children: [
        viewingDoc && docLoading && /* @__PURE__ */ u3("div", { class: "cc-pop__viewer-loading", children: [
          /* @__PURE__ */ u3("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
          /* @__PURE__ */ u3("span", { children: "Loading document..." })
        ] }),
        viewingDoc && !docLoading && currentDoc && /* @__PURE__ */ u3(
          PDFViewer,
          {
            url: currentDoc.signedUrl || null,
            wordBlocks: viewingSource.ev.wordBlocks || [],
            targetPage: viewingSource.ev.wordBlocks?.[0]?.p || 1,
            title: currentDoc.title || "Document",
            documentType: currentDoc.documentType,
            effectiveDate: currentDoc.effectiveDate,
            fileSize: currentDoc.fileSize,
            expiresAt: true,
            openInNewTabUrl: currentDoc.signedUrl || null
          }
        ),
        viewingDoc && !docLoading && !currentDoc && /* @__PURE__ */ u3("div", { class: "cc-pop__viewer-loading", children: /* @__PURE__ */ u3("span", { children: "Failed to load document" }) }),
        viewingOrder && /* @__PURE__ */ u3("div", { ref: adminContainerRef, class: "cc-pop__admin-viewer" }),
        (viewingNote || viewingTherapy) && /* @__PURE__ */ u3("div", { ref: noteContainerRef, class: "cc-pop__note-viewer" })
      ] })
    ] }),
    isSplit && !loading && !error && data && /* @__PURE__ */ u3("div", { style: { padding: "0 16px 12px", flexShrink: 0, borderTop: "1px solid #e5e7eb" }, children: /* @__PURE__ */ u3("div", { class: "sid__actions", children: [
      /* @__PURE__ */ u3("button", { class: "sid__btn sid__btn--primary", onClick: () => window.QuerySendModal?.show(data.item || data), type: "button", children: "Query Physician" }),
      mdsItem && /* @__PURE__ */ u3("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(mdsItem), type: "button", children: [
        "Go to ",
        displayCode,
        " \u2197"
      ] })
    ] }) })
  ] }) });
}
function getEvidence(data) {
  const apiItem = data?.item;
  if (!apiItem) return [];
  const isColumnBased = !!apiItem.columns;
  if (!isColumnBased) return apiItem.evidence || apiItem.queryEvidence || [];
  const colEvidence = [];
  const seen = /* @__PURE__ */ new Set();
  for (const col of Object.values(apiItem.columns || {})) {
    if (col?.evidence) col.evidence.forEach((ev) => {
      const k3 = ev.sourceId || ev.quote || JSON.stringify(ev);
      if (!seen.has(k3)) {
        seen.add(k3);
        colEvidence.push(ev);
      }
    });
  }
  return colEvidence;
}

// content/modules/mds-command-center/MDSCommandCenter.jsx
function getUrgency(assessment) {
  return assessment.deadlines?.urgency || assessment.urgency || "on_track";
}
function filterAssessments(assessments, payerFilter, classFilter, focusFilter) {
  let result = assessments;
  if (payerFilter !== "all") result = result.filter((a3) => a3.payerType === payerFilter);
  if (classFilter !== "all") result = result.filter((a3) => a3.assessmentClass === classFilter);
  if (focusFilter === "revenue") result = result.filter((a3) => a3.pdpm?.hasImprovements);
  if (focusFilter === "issues") result = result.filter((a3) => {
    const u4 = a3.udaSummary;
    const hasUda = u4 && (u4.bims === "missing" || u4.bims === "near_miss" || u4.bims === "in_progress" || u4.phq9 === "missing" || u4.phq9 === "near_miss" || u4.phq9 === "in_progress" || u4.gg === "missing" || u4.gg === "near_miss" || u4.gg === "in_progress");
    const hasOrder = a3.compliance?.checks?.orders ? a3.compliance.checks.orders.status !== "passed" : false;
    return hasUda || hasOrder;
  });
  return result;
}
var URGENCY_ORDER = ["overdue", "urgent", "approaching", "on_track", "completed"];
var URGENCY_META = {
  overdue: { label: "OVERDUE", color: "#ef4444" },
  urgent: { label: "URGENT", color: "#f97316" },
  approaching: { label: "APPROACHING", color: "#eab308" },
  on_track: { label: "ON TRACK", color: "#22c55e" },
  completed: { label: "COMPLETED", color: "#6b7280" }
};
function groupByUrgency(assessments) {
  const groups = {};
  for (const key of URGENCY_ORDER) groups[key] = [];
  for (const a3 of assessments) {
    const u4 = getUrgency(a3);
    if (groups[u4]) groups[u4].push(a3);
    else groups.on_track.push(a3);
  }
  for (const key of URGENCY_ORDER) {
    groups[key].sort((a3, b2) => {
      const dA = a3.ardDate ? new Date(a3.ardDate) : /* @__PURE__ */ new Date(0);
      const dB = b2.ardDate ? new Date(b2.ardDate) : /* @__PURE__ */ new Date(0);
      return dA - dB;
    });
  }
  return groups;
}
function getGroupSummary(items) {
  let udasComplete = 0;
  let revenueOpp = 0;
  for (const a3 of items) {
    const u4 = a3.udaSummary;
    if (u4) {
      if (u4.bims === "complete" || u4.bims === "locked_in_range") udasComplete++;
      if (u4.gg === "complete" || u4.gg === "locked_in_range") udasComplete++;
      if (u4.phq9 === "complete" || u4.phq9 === "locked_in_range") udasComplete++;
    }
    if (a3.pdpm?.hasImprovements) revenueOpp++;
  }
  const parts = [];
  if (udasComplete > 0) parts.push(`${udasComplete} UDAs complete`);
  if (revenueOpp > 0) parts.push(`${revenueOpp} revenue opp.`);
  return parts.join(" \xB7 ") || `${items.length} assessment${items.length !== 1 ? "s" : ""}`;
}
function priorityScore(a3) {
  let score = 0;
  const u4 = getUrgency(a3);
  if (u4 === "overdue") score += 4;
  else if (u4 === "urgent") score += 3;
  else if (u4 === "approaching") score += 2;
  const delta = getPaymentDeltaNumeric(a3.pdpm?.payment);
  if (delta > 0) score += 3;
  if (a3.udaSummary) {
    if (a3.udaSummary.bims === "missing") score += 1;
    if (a3.udaSummary.phq9 === "missing") score += 1;
    if (a3.udaSummary.gg === "missing") score += 1;
  }
  return score;
}
var URGENCY_DOT_COLORS = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280"
};
function buildIssueSummary(a3) {
  const parts = [];
  if (a3.sectionProgress?.total > 0) {
    parts.push(`${a3.sectionProgress.completed}/${a3.sectionProgress.total} sections`);
  }
  if (a3.udaSummary) {
    const missing = [];
    if (a3.udaSummary.bims === "missing") missing.push("BIMS");
    if (a3.udaSummary.phq9 === "missing") missing.push("PHQ-9");
    if (a3.udaSummary.gg === "missing") missing.push("GG");
    if (missing.length > 0) parts.push(`${missing.join(", ")} missing`);
  }
  return parts.join(" \xB7 ");
}
function OverviewView({ assessments, outstandingQueries, onViewChange, onOpenAssessment }) {
  const counts = T2(() => {
    let overdue = 0, urgent = 0, hipps = 0;
    let docRiskTotal = 0, docRiskDx = 0, docRiskTx = 0;
    for (const a3 of assessments) {
      const u4 = getUrgency(a3);
      if (u4 === "overdue") overdue++;
      if (u4 === "urgent" || u4 === "approaching") urgent++;
      if (a3.isHippsOpportunityPrimary) hipps++;
      const dr = a3.detectionSummary?.docRisks;
      if (dr) {
        docRiskTotal += dr.total || 0;
        docRiskDx += dr.diagnosisMissing || 0;
        docRiskTx += dr.treatmentMissing || 0;
      }
    }
    return { overdue, urgent, hipps, queries: (outstandingQueries || []).length, docRiskTotal, docRiskDx, docRiskTx };
  }, [assessments, outstandingQueries]);
  const priorities = T2(() => {
    return [...assessments].filter((a3) => {
      const u4 = getUrgency(a3);
      return u4 === "overdue" || u4 === "urgent" || u4 === "approaching";
    }).sort((a3, b2) => priorityScore(b2) - priorityScore(a3)).slice(0, 8);
  }, [assessments]);
  const hippsItems = T2(() => {
    return assessments.filter((a3) => a3.isHippsOpportunityPrimary).slice(0, 5);
  }, [assessments]);
  return /* @__PURE__ */ u3("div", { class: "mds-cc__overview", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__ov-cards", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card mds-cc__ov-card--red", onClick: () => onViewChange("assessments"), children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ u3("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#ef4444", "stroke-width": "2", children: [
          /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ u3("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
          /* @__PURE__ */ u3("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
        ] }) }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-body", children: [
          /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-num", children: counts.overdue }),
          /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-label", children: "Overdue" })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card mds-cc__ov-card--orange", onClick: () => onViewChange("assessments"), children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ u3("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#f97316", "stroke-width": "2", children: [
          /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ u3("polyline", { points: "12 6 12 12 16 14" })
        ] }) }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-body", children: [
          /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-num", children: counts.urgent }),
          /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-label", children: "Urgent" })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card mds-cc__ov-card--green", onClick: () => onViewChange("assessments"), children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ u3("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#22c55e", "stroke-width": "2", children: [
          /* @__PURE__ */ u3("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
          /* @__PURE__ */ u3("polyline", { points: "22 4 12 14.01 9 11.01" })
        ] }) }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-body", children: [
          /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-num", children: counts.hipps }),
          /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-label", children: "HIPPS Opportunities" })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card mds-cc__ov-card--blue", onClick: () => onViewChange("queries"), children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ u3("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#6366f1", "stroke-width": "2", children: [
          /* @__PURE__ */ u3("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
          /* @__PURE__ */ u3("polyline", { points: "14 2 14 8 20 8" }),
          /* @__PURE__ */ u3("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
          /* @__PURE__ */ u3("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
        ] }) }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-body", children: [
          /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-num", children: counts.queries }),
          /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-label", children: "Outstanding Queries" })
        ] })
      ] })
    ] }),
    counts.docRiskTotal > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card mds-cc__ov-card--amber mds-cc__ov-card--full", onClick: () => onViewChange("docRisks"), children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ u3("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#d97706", "stroke-width": "2", children: [
        /* @__PURE__ */ u3("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
        /* @__PURE__ */ u3("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
        /* @__PURE__ */ u3("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
      ] }) }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-body", children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-num", children: counts.docRiskTotal }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-label", children: "Documentation Risks" }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__ov-card-sublabel", children: [
          counts.docRiskDx > 0 && /* @__PURE__ */ u3("span", { children: [
            counts.docRiskDx,
            " missing diagnosis"
          ] }),
          counts.docRiskDx > 0 && counts.docRiskTx > 0 && /* @__PURE__ */ u3("span", { children: " \xB7 " }),
          counts.docRiskTx > 0 && /* @__PURE__ */ u3("span", { children: [
            counts.docRiskTx,
            " missing treatment"
          ] })
        ] })
      ] })
    ] }),
    priorities.length > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__ov-section", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__ov-section-header", children: "Needs Attention" }),
      priorities.map((a3) => {
        const id = a3.id || a3.assessmentId || a3.externalAssessmentId;
        const u4 = getUrgency(a3);
        const delta = formatPaymentDelta(a3.pdpm?.payment);
        const issues = buildIssueSummary(a3);
        const type = cleanAssessmentType(a3.assessmentType);
        return /* @__PURE__ */ u3("div", { class: "mds-cc__ov-priority", onClick: () => onOpenAssessment(a3), children: [
          /* @__PURE__ */ u3("span", { class: "mds-cc__urgency-dot", style: { background: URGENCY_DOT_COLORS[u4] || "#9ca3af" } }),
          /* @__PURE__ */ u3("span", { class: "mds-cc__ov-priority-name", children: a3.patientName }),
          type && /* @__PURE__ */ u3("span", { class: "mds-cc__ov-priority-type", children: type }),
          a3.pdpm?.currentHipps && /* @__PURE__ */ u3("span", { class: "mds-cc__ov-hipps-code", children: a3.pdpm.currentHipps }),
          /* @__PURE__ */ u3("span", { class: "mds-cc__ov-priority-issues", children: issues }),
          delta && /* @__PURE__ */ u3("span", { class: "mds-cc__card-badge--revenue", children: delta })
        ] }, id);
      })
    ] }),
    hippsItems.length > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__ov-section", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__ov-section-header", children: "HIPPS Opportunities" }),
      hippsItems.map((a3) => {
        const id = a3.id || a3.assessmentId || a3.externalAssessmentId;
        const delta = formatPaymentDelta(a3.pdpm?.payment);
        const type = cleanAssessmentType(a3.assessmentType);
        return /* @__PURE__ */ u3("div", { class: "mds-cc__ov-hipps-row", onClick: () => onOpenAssessment(a3), children: [
          /* @__PURE__ */ u3("span", { class: "mds-cc__ov-hipps-name", children: a3.patientName }),
          type && /* @__PURE__ */ u3("span", { class: "mds-cc__ov-priority-type", children: type }),
          /* @__PURE__ */ u3("span", { class: "mds-cc__ov-hipps-codes", children: [
            a3.pdpm?.currentHipps && /* @__PURE__ */ u3("span", { class: "mds-cc__ov-hipps-code", children: a3.pdpm.currentHipps }),
            a3.pdpm?.potentialHipps && a3.pdpm.potentialHipps !== a3.pdpm.currentHipps && /* @__PURE__ */ u3(k, { children: [
              /* @__PURE__ */ u3("span", { class: "mds-cc__ov-hipps-arrow", children: "\u2192" }),
              /* @__PURE__ */ u3("span", { class: "mds-cc__ov-hipps-code mds-cc__ov-hipps-code--improved", children: a3.pdpm.potentialHipps })
            ] })
          ] }),
          delta && /* @__PURE__ */ u3("span", { class: "mds-cc__card-badge--revenue", children: delta })
        ] }, id);
      })
    ] })
  ] });
}
function LoadingState() {
  return /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__spinner" }),
    /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: "Loading assessments..." })
  ] });
}
function ErrorState({ message, onRetry }) {
  return /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__state-icon", children: "\u26A0" }),
    /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: message }),
    /* @__PURE__ */ u3("button", { class: "mds-cc__retry-btn", onClick: onRetry, children: "Retry" })
  ] });
}
function EmptyState() {
  return /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__state-icon", children: "\u{1F4CB}" }),
    /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: "No assessments found." })
  ] });
}
function formatRelative(dateStr) {
  if (!dateStr) return "";
  const days = Math.floor((Date.now() - new Date(dateStr)) / 864e5);
  if (days === 0) return "today";
  if (days === 1) return "1d ago";
  return `${days}d ago`;
}
function cleanType(type) {
  if (!type) return "";
  return type.replace(/\s*\/\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function ardBadge(q3) {
  const d3 = q3.ardDaysRemaining;
  if (d3 == null) return null;
  let label, cls;
  if (d3 < 0) {
    label = `ARD passed ${Math.abs(d3)}d ago`;
    cls = "mds-cc__ard--critical";
  } else if (d3 === 0) {
    label = "ARD today";
    cls = "mds-cc__ard--critical";
  } else if (d3 <= 3) {
    label = `ARD in ${d3}d`;
    cls = "mds-cc__ard--warn";
  } else {
    label = `ARD in ${d3}d`;
    cls = "mds-cc__ard--neutral";
  }
  return /* @__PURE__ */ u3("span", { class: `mds-cc__ard ${cls}`, children: label });
}
function sortByArd(queries) {
  return [...queries].sort((a3, b2) => {
    const aVal = a3.ardDaysRemaining ?? Infinity;
    const bVal = b2.ardDaysRemaining ?? Infinity;
    return aVal - bVal;
  });
}
function QueryCard({ q: q3, expanded, onToggle, onOpenAssessment, assessmentCtx, isPending }) {
  const delta = formatPaymentDelta(q3.assessmentPayment);
  const sentTo = q3.sentTo?.[0] || q3.practitioner;
  const practName = sentTo ? `${sentTo.firstName || ""} ${sentTo.lastName || ""}`.trim() : null;
  const practTitle = sentTo?.title;
  return /* @__PURE__ */ u3("div", { class: `mds-cc__qcard${expanded ? " mds-cc__qcard--open" : ""}`, children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-header", onClick: onToggle, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-left", children: [
        /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-patient", children: q3.patientName }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-diag", children: [
          /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-code", children: q3.mdsItem }),
          /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-name", children: q3.mdsItemName })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-right", children: [
        ardBadge(q3),
        delta && /* @__PURE__ */ u3("span", { class: `mds-cc__qcard-delta${isPending ? " mds-cc__qcard-delta--pending" : ""}`, children: delta }),
        /* @__PURE__ */ u3("svg", { class: `mds-cc__qcard-chevron${expanded ? " mds-cc__qcard-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-meta", children: [
      assessmentCtx && /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-ctx", children: assessmentCtx }),
      /* @__PURE__ */ u3("span", { class: `mds-cc__qcard-status mds-cc__qcard-status--${isPending ? "pending" : "sent"}`, children: isPending ? "Not yet sent" : `Sent ${formatRelative(q3.sentAt)}` }),
      practName && /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-practitioner", children: [
        "to ",
        practName,
        practTitle ? `, ${practTitle}` : ""
      ] })
    ] }),
    expanded && /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-actions", children: [
      /* @__PURE__ */ u3("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (e3) => {
        e3.stopPropagation();
        onOpenAssessment();
      }, children: "Open in PDPM Analyzer" }),
      !isPending && /* @__PURE__ */ u3("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--secondary", onClick: (e3) => {
        e3.stopPropagation();
        const btn = e3.currentTarget;
        btn.textContent = "Sending...";
        btn.disabled = true;
        try {
          window.QueryAPI.resendQuery(q3.id).then(() => {
            window.SuperToast?.success?.("SMS resent");
            btn.textContent = "Sent!";
          }).catch((err) => {
            console.error("[Super] Resend failed:", err);
            window.SuperToast?.error?.("Failed to resend");
            btn.textContent = "Resend SMS";
            btn.disabled = false;
          });
        } catch (err) {
          console.error("[Super] Resend error:", err);
          btn.textContent = "Resend SMS";
          btn.disabled = false;
        }
      }, children: "Resend SMS" })
    ] }) })
  ] });
}
function QueriesView({ outstandingQueries, recentlySigned, assessments, onOpenAssessment }) {
  const [expandedId, setExpandedId] = d2(null);
  const pending = sortByArd((outstandingQueries || []).filter((q3) => q3.status === "pending"));
  const sent = sortByArd((outstandingQueries || []).filter((q3) => q3.status === "sent" || q3.status === "awaiting_response"));
  function findAssessmentId(q3) {
    const match = (assessments || []).find((a3) => a3.id === q3.mdsAssessmentId);
    return match?.externalAssessmentId || match?.assessmentId || match?.id || q3.mdsAssessmentId;
  }
  function findAssessmentContext(q3) {
    const match = (assessments || []).find((a3) => a3.id === q3.mdsAssessmentId);
    if (!match) return null;
    return cleanType(match.assessmentType) || null;
  }
  async function handleViewPdf(queryId) {
    try {
      const resp = await fetch(`/api/extension/diagnosis-queries/${queryId}/pdf`);
      const { pdfUrl } = await resp.json();
      if (pdfUrl) window.open(pdfUrl, "_blank");
    } catch (e3) {
      console.warn("[Super] PDF fetch failed", e3);
    }
  }
  const totalOutstanding = pending.length + sent.length;
  return /* @__PURE__ */ u3("div", { class: "mds-cc__queries-view", children: [
    sent.length > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ u3("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--sent" }),
        "Awaiting Doctor",
        /* @__PURE__ */ u3("span", { class: "mds-cc__queries-group-count", children: sent.length })
      ] }),
      sent.map((q3) => /* @__PURE__ */ u3(
        QueryCard,
        {
          q: q3,
          expanded: expandedId === q3.id,
          onToggle: () => setExpandedId(expandedId === q3.id ? null : q3.id),
          onOpenAssessment: () => onOpenAssessment?.(findAssessmentId(q3)),
          assessmentCtx: findAssessmentContext(q3),
          isPending: false
        },
        q3.id
      ))
    ] }),
    pending.length > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ u3("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--pending" }),
        "Needs to be Sent",
        /* @__PURE__ */ u3("span", { class: "mds-cc__queries-group-count", children: pending.length })
      ] }),
      pending.map((q3) => /* @__PURE__ */ u3(
        QueryCard,
        {
          q: q3,
          expanded: expandedId === q3.id,
          onToggle: () => setExpandedId(expandedId === q3.id ? null : q3.id),
          onOpenAssessment: () => onOpenAssessment?.(findAssessmentId(q3)),
          assessmentCtx: findAssessmentContext(q3),
          isPending: true
        },
        q3.id
      ))
    ] }),
    recentlySigned && recentlySigned.length > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ u3("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--signed" }),
        "Recently Signed",
        /* @__PURE__ */ u3("span", { class: "mds-cc__queries-group-count", children: recentlySigned.length })
      ] }),
      recentlySigned.map((q3) => {
        const isSigned = q3.status === "signed";
        const isRejected = q3.status === "rejected";
        const practitioner = q3.practitioner || q3.sentTo?.[0];
        return /* @__PURE__ */ u3("div", { class: `mds-cc__qcard mds-cc__qcard--signed${isRejected ? " mds-cc__qcard--rejected" : ""}`, children: [
          /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-header", onClick: () => setExpandedId(expandedId === q3.id ? null : q3.id), role: "button", tabIndex: 0, children: [
            /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-left", children: [
              /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-patient", children: q3.patientName }),
              /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-diag", children: [
                /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-code", children: q3.mdsItem }),
                /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-name", children: q3.mdsItemName })
              ] })
            ] }),
            /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-right", children: [
              /* @__PURE__ */ u3("span", { class: `mds-cc__qcard-status-badge mds-cc__qcard-status-badge--${q3.status}`, children: isSigned ? "Signed" : "Rejected" }),
              /* @__PURE__ */ u3("svg", { class: `mds-cc__qcard-chevron${expandedId === q3.id ? " mds-cc__qcard-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
            ] })
          ] }),
          /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-meta", children: [
            practitioner && /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-practitioner", children: [
              practitioner.firstName,
              " ",
              practitioner.lastName,
              practitioner.title ? `, ${practitioner.title}` : ""
            ] }),
            isSigned && q3.selectedIcd10Code && /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-icd", children: q3.selectedIcd10Code }),
            isRejected && q3.rejectionReason && /* @__PURE__ */ u3("span", { class: "mds-cc__qcard-rejection", children: [
              "\u201C",
              q3.rejectionReason,
              "\u201D"
            ] })
          ] }),
          expandedId === q3.id && /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ u3("div", { class: "mds-cc__qcard-actions", children: [
            /* @__PURE__ */ u3("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (e3) => {
              e3.stopPropagation();
              onOpenAssessment?.(findAssessmentId(q3));
            }, children: "Open in PDPM Analyzer" }),
            q3.hasPdf && /* @__PURE__ */ u3("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--secondary", onClick: (e3) => {
              e3.stopPropagation();
              handleViewPdf(q3.id);
            }, children: "View Signed PDF" })
          ] }) })
        ] }, q3.id || q3.mdsItem);
      })
    ] }),
    totalOutstanding === 0 && (!recentlySigned || recentlySigned.length === 0) && /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__state-icon", children: "\u2709" }),
      /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: "No outstanding queries." })
    ] })
  ] });
}
function DocRisksView({ facilityName, orgSlug }) {
  const { data, loading, error } = useDocRisks({ facilityName, orgSlug, enabled: true });
  if (loading) return /* @__PURE__ */ u3(LoadingState, {});
  if (error) return /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__state-icon", children: "\u26A0" }),
    /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: error })
  ] });
  const items = data?.items || [];
  const summary = data?.summary || {};
  if (items.length === 0) {
    return /* @__PURE__ */ u3("div", { class: "mds-cc__state-container", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__state-icon", children: "\u2705" }),
      /* @__PURE__ */ u3("p", { class: "mds-cc__state-text", children: "No documentation risks found." })
    ] });
  }
  return /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risks-view", children: [
    /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risks-summary", children: [
      /* @__PURE__ */ u3("span", { class: "mds-cc__doc-risks-summary-icon", children: "\u26A0" }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risks-summary-body", children: [
        /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risks-summary-title", children: [
          summary.total || items.length,
          " Documentation Risk",
          (summary.total || items.length) !== 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risks-summary-detail", children: [
          "Diagnoses lacking chart documentation support",
          (summary.diagnosisMissing > 0 || summary.treatmentMissing > 0) && /* @__PURE__ */ u3("span", { children: [
            " \xB7 ",
            summary.diagnosisMissing > 0 && `${summary.diagnosisMissing} missing diagnosis`,
            summary.diagnosisMissing > 0 && summary.treatmentMissing > 0 && " \xB7 ",
            summary.treatmentMissing > 0 && `${summary.treatmentMissing} missing treatment`
          ] })
        ] })
      ] })
    ] }),
    items.map((item, i3) => /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risk-row", children: [
      /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risk-row-top", children: [
        /* @__PURE__ */ u3("span", { class: "mds-cc__query-patient", children: item.patientName }),
        item.assessmentType && /* @__PURE__ */ u3("span", { class: "mds-cc__ov-priority-type", children: cleanType(item.assessmentType) })
      ] }),
      /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risk-row-item", children: [
        /* @__PURE__ */ u3("span", { class: "mds-cc__query-item-code", children: item.mdsItem }),
        /* @__PURE__ */ u3("span", { class: "mds-cc__query-item-name", children: [
          "\xB7 ",
          item.itemName
        ] }),
        /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risk-pills", children: [
          item.missingDiagnosis && /* @__PURE__ */ u3("span", { class: "mds-cc__doc-risk-pill", children: "Diagnosis" }),
          item.missingTreatment && /* @__PURE__ */ u3("span", { class: "mds-cc__doc-risk-pill", children: "Active Treatment" })
        ] })
      ] }),
      item.rationale && /* @__PURE__ */ u3("div", { class: "mds-cc__doc-risk-rationale", children: item.rationale })
    ] }, i3))
  ] });
}
function UrgencyGroup({ urgencyKey, items, isCollapsed, onToggleCollapse, expandedId, onToggleCard, onOpenAnalyzer, onSelectItem }) {
  const meta = URGENCY_META[urgencyKey];
  if (!items || items.length === 0) return null;
  return /* @__PURE__ */ u3("div", { class: "mds-cc__urgency-group", children: [
    /* @__PURE__ */ u3(
      "div",
      {
        class: "mds-cc__urgency-group-header",
        onClick: () => onToggleCollapse(urgencyKey),
        role: "button",
        tabIndex: 0,
        onKeyDown: (e3) => {
          if (e3.key === "Enter" || e3.key === " ") {
            e3.preventDefault();
            onToggleCollapse(urgencyKey);
          }
        },
        children: [
          /* @__PURE__ */ u3("span", { class: `mds-cc__urgency-group-arrow${isCollapsed ? "" : " mds-cc__urgency-group-arrow--open"}`, children: "\u203A" }),
          /* @__PURE__ */ u3("span", { class: "mds-cc__urgency-group-dot", style: { background: meta.color } }),
          /* @__PURE__ */ u3("span", { class: "mds-cc__urgency-group-label", style: { color: meta.color }, children: meta.label }),
          /* @__PURE__ */ u3("span", { class: "mds-cc__urgency-group-count", children: [
            "(",
            items.length,
            ")"
          ] }),
          isCollapsed && /* @__PURE__ */ u3("span", { class: "mds-cc__urgency-group-summary", children: getGroupSummary(items) })
        ]
      }
    ),
    !isCollapsed && /* @__PURE__ */ u3("div", { class: "mds-cc__urgency-group-body", children: items.map((assessment) => {
      const id = assessment.id || assessment.assessmentId || assessment.externalAssessmentId;
      const isExpanded = expandedId === id;
      return /* @__PURE__ */ u3("div", { class: "mds-cc__card-wrapper", "data-assessment-id": id, children: [
        /* @__PURE__ */ u3(
          AssessmentRow,
          {
            assessment,
            isExpanded,
            onToggle: () => onToggleCard(id),
            onOpenAnalyzer: () => onOpenAnalyzer(assessment)
          }
        ),
        isExpanded && /* @__PURE__ */ u3(
          AssessmentPreview,
          {
            assessment,
            onOpenAnalyzer: () => onOpenAnalyzer(assessment),
            onSelectItem: onSelectItem ? (item) => onSelectItem(item, assessment) : void 0
          }
        )
      ] }, id);
    }) })
  ] });
}
function MDSCommandCenter({ facilityName, orgSlug, onClose, initialExpandedId }) {
  const [activeView, setActiveView] = d2(initialExpandedId ? "assessments" : "overview");
  const [payerFilter, setPayerFilter] = d2("all");
  const [classFilter, setClassFilter] = d2("all");
  const [focusFilter, setFocusFilter] = d2("all");
  const [urgencyFilter, setUrgencyFilter] = d2("all");
  const [collapsedGroups, setCollapsedGroups] = d2(/* @__PURE__ */ new Set(["completed"]));
  const [expandedId, setExpandedId] = d2(initialExpandedId || null);
  const [selectedItem, setSelectedItem] = d2(null);
  const { data, loading, error, retry } = useCommandCenter({ facilityName, orgSlug });
  const { data: certDashboard } = useCertDashboard({ facilityName, orgSlug, enabled: true });
  const certsEnabled = certDashboard !== null;
  const certCount = certsEnabled ? (certDashboard?.pending || 0) + (certDashboard?.overdue || 0) : 0;
  const patientId = typeof window.getChatPatientId === "function" ? window.getChatPatientId() : null;
  const patientName = typeof window.getPatientNameFromPage === "function" ? window.getPatientNameFromPage() : null;
  const assessments = data?.assessments || [];
  const summary = data?.summary || {};
  const docRiskCount = T2(() => {
    let total = 0;
    for (const a3 of assessments) {
      const dr = a3.detectionSummary?.docRisks;
      if (dr) total += dr.total || 0;
    }
    return total;
  }, [assessments]);
  const urgencyGroups = T2(() => {
    const filtered = filterAssessments(assessments, payerFilter, classFilter, focusFilter);
    return groupByUrgency(filtered);
  }, [assessments, payerFilter, classFilter, focusFilter]);
  T2(() => {
    const activeCount = (urgencyGroups.overdue?.length || 0) + (urgencyGroups.urgent?.length || 0) + (urgencyGroups.approaching?.length || 0) + (urgencyGroups.on_track?.length || 0);
    if (activeCount > 20 && !collapsedGroups.has("on_track")) {
      setCollapsedGroups((prev) => /* @__PURE__ */ new Set([...prev, "on_track"]));
    }
  }, [urgencyGroups]);
  const didRestoreScroll = A2(false);
  y2(() => {
    if (!initialExpandedId || !assessments.length || didRestoreScroll.current) return;
    didRestoreScroll.current = true;
    const match = assessments.find(
      (a3) => (a3.externalAssessmentId || a3.assessmentId || a3.id) === initialExpandedId
    );
    if (match) {
      const u4 = getUrgency(match);
      setCollapsedGroups((prev) => {
        if (!prev.has(u4)) return prev;
        const next = new Set(prev);
        next.delete(u4);
        return next;
      });
      requestAnimationFrame(() => {
        const el = listRef.current?.querySelector(`[data-assessment-id="${initialExpandedId}"]`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }, [assessments, initialExpandedId]);
  const visibleGroupKeys = T2(() => {
    if (urgencyFilter === "all") return URGENCY_ORDER;
    return [urgencyFilter];
  }, [urgencyFilter]);
  const totalFiltered = T2(() => {
    return URGENCY_ORDER.reduce((sum, key) => sum + (urgencyGroups[key]?.length || 0), 0);
  }, [urgencyGroups]);
  function handleToggleCollapse(key) {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }
  function handleToggleCard(id) {
    setExpandedId((prev) => {
      const next = prev === id ? null : id;
      if (next) {
        requestAnimationFrame(() => {
          const el = listRef.current?.querySelector(`[data-assessment-id="${next}"]`);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }
      return next;
    });
  }
  const scrollTargetRef = A2(null);
  const listRef = A2(null);
  y2(() => {
    if (activeView === "assessments" && scrollTargetRef.current) {
      const targetId = scrollTargetRef.current;
      scrollTargetRef.current = null;
      requestAnimationFrame(() => {
        const el = listRef.current?.querySelector(`[data-assessment-id="${targetId}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("mds-cc__card-wrapper--highlight");
          setTimeout(() => el.classList.remove("mds-cc__card-wrapper--highlight"), 1500);
        }
      });
    }
  }, [activeView, expandedId]);
  function navigateToAssessment(assessment) {
    const id = assessment.id || assessment.assessmentId || assessment.externalAssessmentId;
    const urgency = getUrgency(assessment);
    setCollapsedGroups((prev) => {
      if (!prev.has(urgency)) return prev;
      const next = new Set(prev);
      next.delete(urgency);
      return next;
    });
    setExpandedId(id);
    scrollTargetRef.current = id;
    setActiveView("assessments");
  }
  function handleOpenAnalyzer(assessment) {
    const assessmentId = assessment.externalAssessmentId || assessment.assessmentId || assessment.id;
    onClose({ hide: true });
    window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId });
  }
  function handleOpenAssessmentById(assessmentId) {
    onClose({ hide: true });
    window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId });
  }
  function handleBackdropClick(e3) {
    if (e3.target === e3.currentTarget) onClose();
  }
  return /* @__PURE__ */ u3("div", { class: "mds-cc__overlay", onClick: handleBackdropClick, children: /* @__PURE__ */ u3("div", { class: "mds-cc__modal", role: "dialog", "aria-modal": "true", "aria-label": "MDS Command Center", children: [
    selectedItem && /* @__PURE__ */ u3(
      ItemPopover,
      {
        item: selectedItem.item,
        context: { assessmentId: selectedItem.assessmentId },
        onClose: () => setSelectedItem(null)
      }
    ),
    /* @__PURE__ */ u3(
      CommandCenterHeader,
      {
        summary,
        facilityName,
        onClose,
        activeView,
        onViewChange: setActiveView,
        queryCount: (data?.outstandingQueries || []).length,
        certCount,
        certsEnabled,
        docRiskCount,
        payerFilter,
        onPayerFilterChange: setPayerFilter,
        classFilter,
        onClassFilterChange: setClassFilter,
        focusFilter,
        onFocusFilterChange: setFocusFilter,
        urgencyFilter,
        onUrgencyFilterChange: setUrgencyFilter
      }
    ),
    /* @__PURE__ */ u3("div", { class: "mds-cc__list", ref: listRef, children: [
      loading && /* @__PURE__ */ u3(LoadingState, {}),
      !loading && error && /* @__PURE__ */ u3(ErrorState, { message: error, onRetry: retry }),
      !loading && !error && activeView === "overview" && /* @__PURE__ */ u3(
        OverviewView,
        {
          assessments,
          outstandingQueries: data?.outstandingQueries || [],
          onViewChange: setActiveView,
          onOpenAssessment: navigateToAssessment
        }
      ),
      !loading && !error && activeView === "assessments" && /* @__PURE__ */ u3(k, { children: [
        totalFiltered === 0 && /* @__PURE__ */ u3(EmptyState, {}),
        totalFiltered > 0 && /* @__PURE__ */ u3("div", { class: "mds-cc__assessments", children: visibleGroupKeys.map((key) => /* @__PURE__ */ u3(
          UrgencyGroup,
          {
            urgencyKey: key,
            items: urgencyGroups[key],
            isCollapsed: collapsedGroups.has(key),
            onToggleCollapse: handleToggleCollapse,
            expandedId,
            onToggleCard: handleToggleCard,
            onOpenAnalyzer: handleOpenAnalyzer,
            onSelectItem: (item, assessment) => {
              const aid = assessment.externalAssessmentId || assessment.assessmentId || assessment.id;
              setSelectedItem({ item, assessmentId: aid });
            }
          },
          key
        )) })
      ] }),
      !loading && !error && activeView === "queries" && /* @__PURE__ */ u3(
        QueriesView,
        {
          outstandingQueries: data?.outstandingQueries || [],
          recentlySigned: data?.recentlySigned || [],
          assessments,
          onOpenAssessment: handleOpenAssessmentById
        }
      ),
      !loading && !error && activeView === "docRisks" && /* @__PURE__ */ u3(DocRisksView, { facilityName, orgSlug }),
      activeView === "certs" && /* @__PURE__ */ u3(
        CertsView,
        {
          facilityName,
          orgSlug,
          patientId,
          patientName
        }
      )
    ] })
  ] }) });
}

// content/modules/pdpm-analyzer/hooks/usePDPMAnalyzer.js
function usePDPMAnalyzer(context, selectedAssessmentId) {
  const [assessments, setAssessments] = d2([]);
  const [detail, setDetail] = d2(null);
  const [patientName, setPatientName] = d2("");
  const [loading, setLoading] = d2(false);
  const [detailLoading, setDetailLoading] = d2(false);
  const [error, setError] = d2(null);
  const [listFetchCount, setListFetchCount] = d2(0);
  const [detailFetchCount, setDetailFetchCount] = d2(0);
  const retry = q2(() => {
    setListFetchCount((n2) => n2 + 1);
  }, []);
  const retryDetail = q2(() => {
    setDetailFetchCount((n2) => n2 + 1);
  }, []);
  async function getApiContext() {
    const authState = await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" });
    if (!authState.authenticated) throw new Error("Please log in to view MDS data");
    const orgResponse = getOrg();
    const orgSlug = orgResponse?.org;
    const facilityName = window.getChatFacilityInfo?.() || "";
    if (!orgSlug || !facilityName) throw new Error("Could not determine organization or facility");
    return { orgSlug, facilityName };
  }
  y2(() => {
    if (!context) return;
    let cancelled = false;
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const { orgSlug, facilityName } = await getApiContext();
        if (context.scope === "mds" && context.assessmentId) {
          const params = new URLSearchParams({ externalAssessmentId: context.assessmentId, facilityName, orgSlug });
          const result = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/mds/pdpm-potential?${params}`,
            options: { method: "GET" }
          });
          if (!result.success) throw new Error(result.error || "Failed to load MDS data");
          if (!cancelled) {
            setDetail(result.data);
            setPatientName(result.data?.patientName || context.patientName || "");
            setAssessments([]);
          }
        } else if (context.scope === "patient" && context.patientId) {
          const params = new URLSearchParams({ facilityName, orgSlug });
          const result = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/patients/${context.patientId}/assessments?${params}`,
            options: { method: "GET" }
          });
          if (!result.success) throw new Error(result.error || "Failed to load patient data");
          const responseData = result.data?.data || result.data || result;
          if (!cancelled) {
            setAssessments(responseData.assessments || []);
            setPatientName(responseData.patientName || context.patientName || "Patient");
            setDetail(null);
          }
        } else {
          if (!cancelled) {
            setAssessments([]);
            setDetail(null);
          }
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load data");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => {
      cancelled = true;
    };
  }, [context?.scope, context?.assessmentId, context?.patientId, listFetchCount]);
  y2(() => {
    if (context?.scope !== "patient" || !selectedAssessmentId) return;
    let cancelled = false;
    async function fetchDetail() {
      setDetailLoading(true);
      setDetail(null);
      try {
        const { orgSlug, facilityName } = await getApiContext();
        const params = new URLSearchParams({ externalAssessmentId: selectedAssessmentId, facilityName, orgSlug });
        const result = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${params}`,
          options: { method: "GET" }
        });
        if (!result.success) throw new Error(result.error || "Failed to load assessment data");
        if (!cancelled) setDetail(result.data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load assessment detail");
      } finally {
        if (!cancelled) setDetailLoading(false);
      }
    }
    fetchDetail();
    return () => {
      cancelled = true;
    };
  }, [context?.scope, selectedAssessmentId, detailFetchCount]);
  y2(() => {
    function onItemDecision() {
      setDetailFetchCount((n2) => n2 + 1);
    }
    window.addEventListener("super:item-decision", onItemDecision);
    return () => window.removeEventListener("super:item-decision", onItemDecision);
  }, []);
  return { assessments, detail, patientName, loading, detailLoading, error, retry, retryDetail };
}

// content/modules/pdpm-analyzer/components/ComplianceCard.jsx
var CHECK_ORDER = ["bims", "phq9", "gg", "orders", "therapyDocs"];
var CHECK_LABELS = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" };
var MAX_ORDERS_SHOWN = 6;
function fmtDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function truncateOrder(name) {
  if (!name) return "";
  const line = name.split("\n")[0].trim();
  return line.length > 80 ? line.slice(0, 77) + "\u2026" : line;
}
function isInWindow(dateStr, range) {
  if (!dateStr || !range?.start || !range?.end) return null;
  const d3 = new Date(dateStr).getTime();
  return d3 >= new Date(range.start).getTime() && d3 <= new Date(range.end).getTime();
}
function UdaDetail({ check }) {
  const uda = check?.foundUda;
  if (!uda) return null;
  const locked = !!uda.lockedDate;
  const inWindow = isInWindow(uda.lockedDate || uda.date, check.searchedDateRange);
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-detail", children: /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-uda-grid", children: [
    /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-uda-key", children: "Assessment" }),
    /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-uda-val", children: uda.description }),
    uda.date && /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-uda-key", children: "Completed" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-uda-val", children: fmtDate(uda.date) })
    ] }),
    /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-uda-key", children: "Lock" }),
    /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-uda-val", children: locked ? /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--yes", children: [
      /* @__PURE__ */ u3("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ u3("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ u3("path", { d: "M4 5V3.5a2 2 0 014 0V5", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      fmtDate(uda.lockedDate)
    ] }) : /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--no", children: [
      /* @__PURE__ */ u3("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ u3("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ u3("path", { d: "M4 5V3.5a2 2 0 014 0", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      "Unlocked"
    ] }) }),
    check.searchedDateRange && /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-uda-key", children: "Window" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-uda-val", children: [
        fmtDate(check.searchedDateRange.start),
        " ",
        "\u2013",
        " ",
        fmtDate(check.searchedDateRange.end),
        inWindow === true && /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--in", children: "In range" }),
        inWindow === false && /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--out", children: "Outside range" })
      ] })
    ] })
  ] }) });
}
function OrdersDetail({ check }) {
  const orders = check?.unsignedOrders;
  if (!orders || orders.length === 0) return null;
  const showing = orders.slice(0, MAX_ORDERS_SHOWN);
  const remaining = orders.length - MAX_ORDERS_SHOWN;
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-detail", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-detail-summary", children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-detail-stat pdpm-an__cc-detail-stat--fail", children: [
        check.unsignedCount,
        " unsigned"
      ] }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-detail-stat", children: [
        check.totalOrders,
        " total"
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-orders", children: [
      showing.map((o3, i3) => /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-order", children: [
        /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-order-name", children: truncateOrder(o3.orderName) }),
        /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-order-meta", children: [
          o3.category !== "Other" && /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-order-cat", children: o3.category }),
          o3.startDate && /* @__PURE__ */ u3("span", { children: fmtDate(o3.startDate) })
        ] })
      ] }, i3)),
      remaining > 0 && /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-orders-more", children: [
        "+",
        remaining,
        " more unsigned"
      ] })
    ] })
  ] });
}
function TherapyDetail({ check }) {
  if (!check) return null;
  const unsigned = check.unsignedDocs || [];
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-detail", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-detail-summary", children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-detail-stat pdpm-an__cc-detail-stat--pass", children: [
        check.signedDocs,
        " signed"
      ] }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-detail-stat", children: [
        check.totalDocs,
        " total"
      ] })
    ] }),
    unsigned.length > 0 && /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-orders", children: unsigned.slice(0, MAX_ORDERS_SHOWN).map((d3, i3) => /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-order", children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-order-name", children: d3.description || d3.name || `Document ${i3 + 1}` }),
      d3.date && /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-order-meta", children: fmtDate(d3.date) })
    ] }, i3)) })
  ] });
}
function CheckDetail({ checkKey, check }) {
  if (checkKey === "orders") return /* @__PURE__ */ u3(OrdersDetail, { check });
  if (checkKey === "therapyDocs") return /* @__PURE__ */ u3(TherapyDetail, { check });
  return /* @__PURE__ */ u3(UdaDetail, { check });
}
function ComplianceCard({ data, collapsed, onToggleCollapse }) {
  const [expandedKey, setExpandedKey] = d2(null);
  const compliance = data?.compliance || {};
  const checks = compliance.checks || {};
  const passed = compliance.summary?.passed ?? 0;
  const total = compliance.summary?.total ?? CHECK_ORDER.length;
  const na = compliance.summary?.notApplicable ?? 0;
  const effectiveTotal = total - na;
  const toggleChip = (key) => setExpandedKey(expandedKey === key ? null : key);
  return /* @__PURE__ */ u3("div", { class: `pdpm-an__card${passed === effectiveTotal ? " pdpm-an__card--success" : " pdpm-an__card--warning"}`, children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: onToggleCollapse, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-icon", children: "\u2713" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-title", children: "Compliance" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-badge", children: [
        passed,
        "/",
        effectiveTotal
      ] }),
      /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${collapsed ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !collapsed && /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-body", children: [
      /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-chips", children: CHECK_ORDER.map((key) => {
        const check = checks[key];
        if (!check || check.status === "not_applicable") return null;
        const isPassed = check.status === "passed";
        const hasDetail = check.foundUda || key === "orders" || key === "therapyDocs";
        const isActive = expandedKey === key;
        return /* @__PURE__ */ u3(
          "button",
          {
            class: `pdpm-an__cc-chip${isPassed ? " pdpm-an__cc-chip--pass" : " pdpm-an__cc-chip--fail"}${isActive ? " pdpm-an__cc-chip--active" : ""}`,
            onClick: hasDetail ? () => toggleChip(key) : void 0,
            title: check.message || "",
            children: [
              /* @__PURE__ */ u3("span", { class: "pdpm-an__cc-chip-icon", children: isPassed ? "\u2713" : "\u2717" }),
              CHECK_LABELS[key] || key
            ]
          },
          key
        );
      }) }),
      expandedKey && checks[expandedKey] && checks[expandedKey].status !== "not_applicable" && /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-expanded", children: [
        /* @__PURE__ */ u3("div", { class: "pdpm-an__cc-expanded-label", children: [
          CHECK_LABELS[expandedKey],
          ": ",
          checks[expandedKey].message
        ] }),
        /* @__PURE__ */ u3(CheckDetail, { checkKey: expandedKey, check: checks[expandedKey] })
      ] })
    ] })
  ] });
}

// content/modules/pdpm-analyzer/components/ItemDetailView.jsx
function isOrderEvidence2(ev) {
  return ev.sourceType === "order" || (ev.evidenceId || "").startsWith("order-");
}
function getOrderId2(ev) {
  const id = ev.sourceId || ev.evidenceId || "";
  return id.replace(/^order-/, "");
}
function isViewableEvidence2(ev) {
  const vt = parseViewer(ev).viewerType;
  return vt === "document" || vt === "clinical-note" || vt === "therapy-document" || isOrderEvidence2(ev);
}
function ItemDetailView({ item, context, onBack, onSplitChange, onDismiss: onDismissComplete }) {
  const mdsItem = item?.mdsItem;
  const categoryKey = item?.categoryKey;
  const { data, loading, error } = useItemDetail(mdsItem, categoryKey, context);
  const displayCode = mdsItem?.startsWith("I8000:") ? "I8000" : mdsItem;
  const apiItem = data?.item;
  const needsQuery = apiItem?.status === "needs_physician_query";
  const [dismissing, setDismissing] = d2(false);
  const userDecision = apiItem?.userDecision?.decision;
  const canDismiss = userDecision !== "disagree" && userDecision !== "agree";
  const handleDismiss = q2(async (reason) => {
    setDismissing(true);
    try {
      const orgResponse = getOrg();
      const orgSlug = orgResponse?.org;
      const facilityName = window.getChatFacilityInfo?.() || "";
      const apiCode = mdsItem?.includes(":") ? mdsItem.split(":")[0] : mdsItem;
      const mdsColumn = item?.column || "";
      const response = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/items/${encodeURIComponent(apiCode)}/decision`,
        options: {
          method: "POST",
          body: JSON.stringify({
            externalAssessmentId: context?.assessmentId,
            facilityName,
            orgSlug,
            decision: "disagree",
            note: reason || "",
            mdsColumn
          })
        }
      });
      if (!response?.success) throw new Error(response?.error || "Failed to save decision");
      const key = `${apiCode}-${mdsColumn}`;
      if (window.SuperOverlay?.dismissedItems) {
        window.SuperOverlay.dismissedItems.add(key);
        chrome.storage.local.set({ superDismissedItems: Array.from(window.SuperOverlay.dismissedItems) });
      }
      window.dispatchEvent(new CustomEvent("super:item-decision", {
        detail: { mdsItem: apiCode, column: mdsColumn, decision: "disagree" }
      }));
      window.SuperToast?.success?.("Item dismissed");
      onDismissComplete?.();
    } catch (err) {
      console.error("[ItemDetailView] Dismiss failed:", err);
      window.SuperToast?.error?.(err.message || "Failed to dismiss");
      setDismissing(false);
    }
  }, [mdsItem, item, context, onDismissComplete]);
  const [viewingSource, setViewingSource] = d2(null);
  const docCacheRef = A2(/* @__PURE__ */ new Map());
  const [currentDoc, setCurrentDoc] = d2(null);
  const [docLoading, setDocLoading] = d2(false);
  const adminContainerRef = A2(null);
  const allEvidence = getEvidence2(data);
  const viewableEvidence = allEvidence.filter(isViewableEvidence2);
  const isSplit = viewingSource !== null;
  const viewingOrder = viewingSource && isOrderEvidence2(viewingSource.ev);
  const viewingViewerType = viewingSource ? parseViewer(viewingSource.ev).viewerType : null;
  const viewingNote = viewingViewerType === "clinical-note";
  const viewingTherapy = viewingViewerType === "therapy-document";
  const viewingDoc = viewingSource && !viewingOrder && !viewingNote && !viewingTherapy;
  const noteContainerRef = A2(null);
  y2(() => {
    onSplitChange?.(isSplit);
  }, [isSplit]);
  const docEvidence = viewableEvidence.filter((ev) => {
    if (isOrderEvidence2(ev)) return false;
    const vt = parseViewer(ev).viewerType;
    return vt === "document";
  });
  y2(() => {
    if (!data || docEvidence.length === 0) return;
    const prefetch = async () => {
      let params;
      try {
        params = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const ev of docEvidence) {
        const viewer = parseViewer(ev);
        if (!viewer.id || docCacheRef.current.has(viewer.id)) continue;
        const promise = fetchDocument(viewer.id, params).then((result) => {
          const entry = docCacheRef.current.get(viewer.id);
          if (entry) entry.document = result.document;
          return result.document;
        }).catch((err) => {
          console.warn("[ItemDetailView] Prefetch failed for", viewer.id, err);
          return null;
        });
        docCacheRef.current.set(viewer.id, { document: null, promise });
      }
    };
    prefetch();
  }, [data]);
  y2(() => {
    if (!viewingSource || viewingOrder || viewingNote || viewingTherapy) {
      setCurrentDoc(null);
      setDocLoading(false);
      return;
    }
    const viewer = parseViewer(viewingSource.ev);
    if (!viewer.id) return;
    const cached = docCacheRef.current.get(viewer.id);
    if (cached?.document) {
      setCurrentDoc(cached.document);
      setDocLoading(false);
      return;
    }
    setDocLoading(true);
    const loadDoc = async () => {
      try {
        let doc;
        if (cached?.promise) {
          doc = await cached.promise;
        } else {
          const params = await window.getCurrentParams();
          const result = await fetchDocument(viewer.id, params);
          doc = result.document;
          docCacheRef.current.set(viewer.id, { document: doc, promise: Promise.resolve(doc) });
        }
        setCurrentDoc(doc);
      } catch (err) {
        console.error("[ItemDetailView] Failed to load document:", err);
        setCurrentDoc(null);
      } finally {
        setDocLoading(false);
      }
    };
    loadDoc();
  }, [viewingSource, viewingOrder]);
  y2(() => {
    if (!viewingOrder || !adminContainerRef.current) return;
    const el = adminContainerRef.current;
    const orderId = getOrderId2(viewingSource.ev);
    el.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading administrations...</span></div>';
    if (window.renderSplitAdministrations) {
      const resolveAndRender = async () => {
        const orgResponse = getOrg();
        const orgSlug = orgResponse?.org;
        const facilityName = window.getChatFacilityInfo?.() || "";
        const params = { assessmentId: context?.assessmentId, orgSlug, facilityName };
        await window.renderSplitAdministrations(el, orderId, void 0, params);
      };
      resolveAndRender().catch((err) => {
        console.error("[ItemDetailView] Failed to load administrations:", err);
        el.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load administrations</span></div>';
      });
    } else {
      el.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Administration viewer not available</span></div>';
    }
  }, [viewingSource, viewingOrder]);
  y2(() => {
    if (!viewingNote && !viewingTherapy || !noteContainerRef.current) return;
    const el = noteContainerRef.current;
    const viewer = parseViewer(viewingSource.ev);
    const quote = viewingSource.ev.quoteText || viewingSource.ev.quote || viewingSource.ev.snippet || "";
    el.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading...</span></div>';
    const resolveAndRender = async () => {
      const orgResponse = getOrg();
      const orgSlug = orgResponse?.org;
      const facilityName = window.getChatFacilityInfo?.() || "";
      const params = { assessmentId: context?.assessmentId, orgSlug, facilityName };
      if (viewingNote && window.renderSplitNote) {
        await window.renderSplitNote(el, viewer.id, params);
      } else if (viewingTherapy && window.renderSplitTherapy) {
        await window.renderSplitTherapy(el, viewer.id, quote, params);
      } else {
        el.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Viewer not available</span></div>';
      }
    };
    resolveAndRender().catch((err) => {
      console.error("[ItemDetailView] Failed to load source:", err);
      el.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load</span></div>';
    });
  }, [viewingSource, viewingNote, viewingTherapy]);
  const handleViewSource = q2((ev, index) => {
    setViewingSource({ ev, index });
  }, []);
  const handleBackFromSplit = q2(() => {
    setViewingSource(null);
  }, []);
  return /* @__PURE__ */ u3("div", { class: `idv${isSplit ? " idv--split" : ""}`, children: [
    /* @__PURE__ */ u3("div", { class: "idv__head", children: [
      /* @__PURE__ */ u3("button", { class: "idv__back", onClick: isSplit ? handleBackFromSplit : onBack, type: "button", children: [
        /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M9 11L5 7l4-4", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
        "Back"
      ] }),
      /* @__PURE__ */ u3("span", { class: "idv__code", children: displayCode }),
      /* @__PURE__ */ u3("h2", { class: "idv__name", children: apiItem?.description || apiItem?.kbCategory?.categoryName || item?.itemName || "Item Detail" }),
      needsQuery && /* @__PURE__ */ u3("span", { class: "idv__badge idv__badge--amber", children: "Needs Query" })
    ] }),
    loading && /* @__PURE__ */ u3("div", { class: "pdpm-an__state", children: [
      /* @__PURE__ */ u3("div", { class: "pdpm-an__spinner" }),
      /* @__PURE__ */ u3("p", { children: "Loading..." })
    ] }),
    error && /* @__PURE__ */ u3("div", { class: "pdpm-an__state", children: /* @__PURE__ */ u3("p", { children: error }) }),
    !loading && !error && data && !isSplit && /* @__PURE__ */ u3("div", { class: "idv__body", children: /* @__PURE__ */ u3(
      ItemDetail,
      {
        variant: "full",
        data,
        detectionItem: item,
        mdsItem,
        onViewSource: handleViewSource,
        onDismiss: canDismiss ? handleDismiss : void 0,
        dismissing,
        assessmentId: context?.assessmentId
      }
    ) }),
    !loading && !error && data && isSplit && /* @__PURE__ */ u3("div", { class: "idv__split-body", children: [
      /* @__PURE__ */ u3("div", { class: "idv__sources", children: [
        /* @__PURE__ */ u3("div", { class: "idv__sources-label", children: [
          "Sources (",
          viewableEvidence.length,
          ")"
        ] }),
        viewableEvidence.map((ev, i3) => {
          const isOrder = isOrderEvidence2(ev);
          const sourceType = ev.sourceType || inferSourceType(ev.displayName, ev.evidenceId);
          const typeLabel = ev.displayName || SOURCE_LABELS[sourceType] || (isOrder ? "Orders" : "Document");
          const snippet = ev.quoteText || ev.orderDescription || ev.quote || ev.snippet || ev.text || "";
          const page = ev.wordBlocks?.[0]?.p;
          const isActive = viewingSource.ev === ev;
          return /* @__PURE__ */ u3(
            "div",
            {
              class: `idv__source-card${isActive ? " idv__source-card--active" : ""}`,
              onClick: () => setViewingSource({ ev, index: i3 }),
              role: "button",
              children: [
                /* @__PURE__ */ u3("div", { class: `idv__source-badge${isOrder ? " idv__source-badge--order" : ""}`, children: typeLabel }),
                snippet && /* @__PURE__ */ u3("div", { class: "idv__source-snippet", children: snippet }),
                !isOrder && page && /* @__PURE__ */ u3("div", { class: "idv__source-page", children: [
                  "Page ",
                  page
                ] })
              ]
            },
            i3
          );
        })
      ] }),
      /* @__PURE__ */ u3("div", { class: "idv__viewer", children: [
        viewingDoc && docLoading && /* @__PURE__ */ u3("div", { class: "idv__viewer-loading", children: [
          /* @__PURE__ */ u3("div", { class: "pdpm-an__spinner" }),
          /* @__PURE__ */ u3("span", { children: "Loading document..." })
        ] }),
        viewingDoc && !docLoading && currentDoc && /* @__PURE__ */ u3(
          PDFViewer,
          {
            url: currentDoc.signedUrl || null,
            wordBlocks: viewingSource.ev.wordBlocks || [],
            targetPage: viewingSource.ev.wordBlocks?.[0]?.p || 1,
            title: currentDoc.title || "Document",
            documentType: currentDoc.documentType,
            effectiveDate: currentDoc.effectiveDate,
            fileSize: currentDoc.fileSize,
            expiresAt: true,
            openInNewTabUrl: currentDoc.signedUrl || null
          }
        ),
        viewingDoc && !docLoading && !currentDoc && /* @__PURE__ */ u3("div", { class: "idv__viewer-loading", children: /* @__PURE__ */ u3("span", { children: "Failed to load document" }) }),
        viewingOrder && /* @__PURE__ */ u3("div", { ref: adminContainerRef, class: "idv__admin-viewer" }),
        (viewingNote || viewingTherapy) && /* @__PURE__ */ u3("div", { ref: noteContainerRef, class: "idv__note-viewer" })
      ] })
    ] })
  ] });
}
function getEvidence2(data) {
  const apiItem = data?.item;
  if (!apiItem) return [];
  const isColumnBased = !!apiItem.columns;
  if (!isColumnBased) return apiItem.evidence || apiItem.queryEvidence || [];
  const colEvidence = [];
  const seen = /* @__PURE__ */ new Set();
  for (const col of Object.values(apiItem.columns || {})) {
    if (col?.evidence) col.evidence.forEach((ev) => {
      const k3 = ev.sourceId || ev.quote || JSON.stringify(ev);
      if (!seen.has(k3)) {
        seen.add(k3);
        colEvidence.push(ev);
      }
    });
  }
  return colEvidence;
}

// content/modules/certifications/hooks/useCertsByPatient.js
function useCertsByPatient(patientId) {
  const [certs, setCerts] = d2([]);
  const [loading, setLoading] = d2(false);
  const [error, setError] = d2(null);
  const [fetchCount, setFetchCount] = d2(0);
  const refresh = q2(() => {
    setFetchCount((n2) => n2 + 1);
  }, []);
  y2(() => {
    if (!patientId || !window.CertAPI) {
      setCerts([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const orgResponse = getOrg();
        const orgSlug = orgResponse?.org;
        const facilityName = window.getChatFacilityInfo?.() || "";
        if (!orgSlug || !facilityName) {
          if (!cancelled) {
            setCerts([]);
            setLoading(false);
          }
          return;
        }
        const data = await window.CertAPI.fetchByPatient(facilityName, orgSlug, patientId);
        if (!cancelled) {
          setCerts(data || []);
        }
      } catch (err) {
        if (!cancelled) {
          setCerts([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [patientId, fetchCount]);
  return { certs, loading, error, refresh };
}

// content/modules/certifications/components/CertChainTimeline.jsx
var SLOT_ORDER = ["initial", "day_14_recert", "day_30_recert"];
var SLOT_LABELS = {
  initial: "Initial",
  day_14_recert: "Day 14",
  day_30_recert: "Day 30"
};
function getDaysUntil5(dateStr) {
  if (!dateStr) return null;
  const due = new Date(dateStr);
  const now = /* @__PURE__ */ new Date();
  due.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return Math.floor((due - now) / 864e5);
}
function formatShortDate5(dateStr) {
  if (!dateStr) return "";
  const d3 = new Date(dateStr);
  if (isNaN(d3)) return dateStr;
  return d3.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function getSlotState(cert) {
  if (!cert) return { variant: "empty", label: "\u2014" };
  const daysUntil = getDaysUntil5(cert.dueDate);
  const isOverdue = daysUntil !== null && daysUntil < 0;
  if (cert.status === "signed") {
    return {
      variant: "signed",
      label: "Signed",
      detail: formatShortDate5(cert.signedAt),
      subDetail: cert.signedByName || ""
    };
  }
  if (cert.status === "skipped") {
    return { variant: "skipped", label: "Skipped", showUnskip: true };
  }
  if ((cert.isDelayed || cert.status === "delayed") && isOverdue) {
    const daysOver = Math.abs(daysUntil);
    return {
      variant: "overdue",
      label: `${daysOver}d overdue`,
      showSend: true
    };
  }
  if (isOverdue) {
    const daysOver = Math.abs(daysUntil);
    return {
      variant: "overdue",
      label: `${daysOver}d overdue`,
      showSend: true
    };
  }
  if (cert.status === "sent") {
    return {
      variant: "sent",
      label: "Awaiting",
      detail: formatShortDate5(cert.sentAt)
    };
  }
  return {
    variant: "pending",
    label: "Pending",
    detail: cert.dueDate ? `Due ${formatShortDate5(cert.dueDate)}` : "",
    showSend: true
  };
}
function SlotCard({ type, cert, onAction }) {
  const state = getSlotState(cert);
  return /* @__PURE__ */ u3("div", { class: `cert-chain__slot cert-chain__slot--${state.variant}`, children: [
    /* @__PURE__ */ u3("div", { class: "cert-chain__slot-header", children: /* @__PURE__ */ u3("span", { class: "cert-chain__slot-type", children: SLOT_LABELS[type] }) }),
    /* @__PURE__ */ u3("div", { class: "cert-chain__slot-status", children: state.label }),
    state.detail && /* @__PURE__ */ u3("div", { class: "cert-chain__slot-detail", children: state.detail }),
    state.subDetail && /* @__PURE__ */ u3("div", { class: "cert-chain__slot-sub", children: state.subDetail }),
    state.showSend && cert && /* @__PURE__ */ u3(
      "button",
      {
        class: `cert-chain__slot-btn cert-chain__slot-btn--${state.variant === "overdue" ? "destructive" : "primary"}`,
        onClick: (e3) => {
          e3.stopPropagation();
          onAction(cert, "send");
        },
        children: "Send"
      }
    ),
    state.showUnskip && cert && /* @__PURE__ */ u3(
      "button",
      {
        class: "cert-chain__slot-btn cert-chain__slot-btn--ghost",
        onClick: (e3) => {
          e3.stopPropagation();
          onAction(cert, "unskip");
        },
        children: "Unskip"
      }
    )
  ] });
}
function StayRow({ certs, onAction }) {
  const slotMap = {};
  for (const cert of certs) {
    slotMap[cert.type] = cert;
  }
  return /* @__PURE__ */ u3("div", { class: "cert-chain__stay", children: SLOT_ORDER.map((type, i3) => /* @__PURE__ */ u3("div", { class: "cert-chain__step-wrapper", children: [
    i3 > 0 && /* @__PURE__ */ u3("div", { class: "cert-chain__connector" }),
    /* @__PURE__ */ u3(SlotCard, { type, cert: slotMap[type] || null, onAction })
  ] }, type)) });
}
function CertChainTimeline({ certs, onAction }) {
  const stays = T2(() => {
    if (!certs || certs.length === 0) return [];
    const groups = {};
    for (const cert of certs) {
      const key = cert.partAStayId || "unknown";
      if (!groups[key]) groups[key] = [];
      groups[key].push(cert);
    }
    const entries = Object.entries(groups);
    for (const [, group] of entries) {
      group.sort((a3, b2) => (a3.sequenceNumber || 0) - (b2.sequenceNumber || 0));
    }
    entries.sort((a3, b2) => {
      const aMax = Math.max(...a3[1].map((c3) => c3.sequenceNumber || 0));
      const bMax = Math.max(...b2[1].map((c3) => c3.sequenceNumber || 0));
      return bMax - aMax;
    });
    return entries;
  }, [certs]);
  if (stays.length === 0) return null;
  return /* @__PURE__ */ u3("div", { class: "cert-chain", children: stays.map(([stayId, group]) => /* @__PURE__ */ u3(StayRow, { certs: group, onAction }, stayId)) });
}

// content/modules/certifications/components/CertSection.jsx
function CertSection({ patientId, collapsed, onToggleCollapse }) {
  const { certs, loading, refresh } = useCertsByPatient(patientId);
  const [sendCert, setSendCert] = d2(null);
  const [skipCert, setSkipCert] = d2(null);
  const [delayCert, setDelayCert] = d2(null);
  const [facilityCtx, setFacilityCtx] = d2({ facilityName: "", orgSlug: "" });
  const ensureFacilityCtx = q2(async () => {
    if (facilityCtx.facilityName && facilityCtx.orgSlug) return facilityCtx;
    const orgResponse = getOrg();
    const orgSlug = orgResponse?.org || "";
    const facilityName = window.getChatFacilityInfo?.() || "";
    const ctx = { facilityName, orgSlug };
    setFacilityCtx(ctx);
    return ctx;
  }, [facilityCtx]);
  const handleAction = q2(async (cert, action) => {
    if (action === "send") {
      await ensureFacilityCtx();
      setSendCert(cert);
    } else if (action === "skip") {
      setSkipCert(cert);
    } else if (action === "delay") {
      setDelayCert(cert);
    } else if (action === "unskip") {
      try {
        await window.CertAPI.unskipCert(cert.id);
        window.SuperToast?.success?.("Certification restored");
        refresh();
      } catch (err) {
        console.error("[CertSection] Failed to unskip:", err);
        window.SuperToast?.error?.("Failed to restore certification");
      }
    }
  }, [ensureFacilityCtx, refresh]);
  async function handleSkipCert(reason) {
    await window.CertAPI.skipCert(skipCert.id, reason);
    window.SuperToast?.success?.("Certification skipped");
    refresh();
  }
  async function handleDelayCert(reason) {
    await window.CertAPI.delayCert(delayCert.id, reason);
    window.SuperToast?.success?.("Certification marked as delayed");
    refresh();
  }
  if (loading) {
    return /* @__PURE__ */ u3("div", { class: "pdpm-an__card", children: [
      /* @__PURE__ */ u3("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: onToggleCollapse, role: "button", tabIndex: 0, children: [
        /* @__PURE__ */ u3("span", { class: "pdpm-an__card-title", children: "Certifications" }),
        /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${collapsed ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] }),
      !collapsed && /* @__PURE__ */ u3("div", { class: "pdpm-an__card-body", style: "padding: 16px; text-align: center; color: #6b7280; font-size: 13px;", children: "Loading certifications..." })
    ] });
  }
  if (!certs || certs.length === 0) return null;
  return /* @__PURE__ */ u3(k, { children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__card", children: [
      /* @__PURE__ */ u3("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: onToggleCollapse, role: "button", tabIndex: 0, children: [
        /* @__PURE__ */ u3("span", { class: "pdpm-an__card-title", children: "Certifications" }),
        /* @__PURE__ */ u3("span", { class: "pdpm-an__card-badge", children: certs.length }),
        /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${collapsed ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] }),
      !collapsed && /* @__PURE__ */ u3("div", { class: "pdpm-an__card-body", style: "padding: 8px 12px;", children: /* @__PURE__ */ u3(CertChainTimeline, { certs, onAction: handleAction }) })
    ] }),
    /* @__PURE__ */ u3(
      SendCertModal,
      {
        isOpen: !!sendCert,
        onClose: () => setSendCert(null),
        cert: sendCert,
        facilityName: facilityCtx.facilityName,
        orgSlug: facilityCtx.orgSlug,
        onSent: refresh
      }
    ),
    /* @__PURE__ */ u3(
      SkipCertModal,
      {
        isOpen: !!skipCert,
        onClose: () => setSkipCert(null),
        cert: skipCert,
        onSkipped: handleSkipCert
      }
    ),
    /* @__PURE__ */ u3(
      DelayCertModal,
      {
        isOpen: !!delayCert,
        onClose: () => setDelayCert(null),
        cert: delayCert,
        onDelayed: handleDelayCert
      }
    )
  ] });
}

// content/modules/pdpm-analyzer/PDPMAnalyzer.jsx
function formatArdDate(ardDate) {
  if (!ardDate) return "";
  return new Date(ardDate).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function cleanAssessmentType2(raw) {
  if (!raw) return null;
  return raw.replace(/[\s/]+$/, "").trim() || null;
}
function AssessmentSelector({ assessments, selectedId, onChange }) {
  if (!assessments || assessments.length <= 1) return null;
  const options = assessments.map((a3) => ({
    value: a3.id,
    label: cleanAssessmentType2(a3.type) || cleanAssessmentType2(a3.assessmentType) || "Assessment",
    subtitle: a3.ardDate ? `ARD ${formatArdDate(a3.ardDate)}` : void 0,
    badge: a3.currentHipps || a3.hipps || void 0
  }));
  return /* @__PURE__ */ u3(
    Selector,
    {
      options,
      value: selectedId,
      onChange,
      align: "right",
      ariaLabel: "Select assessment"
    }
  );
}
var MDS_ITEM_LABELS = {
  "K0100": "Swallowing Disorder",
  "K0200": "Height & Weight",
  "K0520A": "Nutritional Approach \u2014 Parenteral/IV",
  "K0520B": "Nutritional Approach \u2014 Feeding Tube",
  "K0520C": "Nutritional Approach \u2014 Mechanically Altered Diet",
  "K0710": "Percent Intake by Artificial Route",
  "B0100": "Comatose",
  "B0700": "Makes Self Understood",
  "B0800": "Ability to Understand Others",
  "C0100": "Should Brief Interview for Mental Status Be Conducted",
  "C0200": "Repetition of Three Words",
  "C0300": "Temporal Orientation",
  "C0400": "Recall",
  "C0500": "BIMS Summary Score",
  "C0700": "Short-term Memory OK",
  "C0800": "Long-term Memory OK",
  "C0900": "Memory/Recall Ability",
  "C1000": "Cognitive Skills for Daily Decision Making",
  "D0100": "Should Resident Mood Interview Be Conducted",
  "D0200": "Resident Mood Interview (PHQ-2)",
  "D0300": "PHQ-9 Total Severity Score",
  "D0350": "Safety Notification \u2014 PHQ",
  "D0600": "Staff Assessment of Resident Mood (PHQ-9-OV)",
  "E0100": "Psychosis",
  "E0200": "Behavioral Symptoms \u2014 Presence & Frequency",
  "E0800": "Rejection of Care",
  "E0900": "Wandering",
  "G0110": "ADL Self-Performance",
  "G0120": "ADL Support Provided \u2014 Bathing",
  "G0300": "Balance During Transitions and Walking",
  "G0400": "Functional Limitation in Range of Motion",
  "GG0130": "Self-Care \u2014 Admission Performance",
  "GG0170": "Mobility \u2014 Admission Performance",
  "H0100": "Appliances \u2014 Indwelling Catheter",
  "H0200": "Urinary Toileting Program",
  "H0300": "Urinary Continence",
  "H0400": "Bowel Continence",
  "H0500": "Bowel Toileting Program",
  "H0600": "Appliances \u2014 Ostomy",
  "I0020": "Indicate Conditions or Diseases \u2014 Cancer",
  "I0100": "Active Diagnoses \u2014 Cancer",
  "I0200": "Active Diagnoses \u2014 Anemia",
  "I0300": "Active Diagnoses \u2014 Atrial Fibrillation",
  "I0400": "Active Diagnoses \u2014 Coronary Artery Disease",
  "I0500": "Active Diagnoses \u2014 Deep Venous Thrombosis",
  "I0600": "Active Diagnoses \u2014 Heart Failure",
  "I0700": "Active Diagnoses \u2014 Hypertension",
  "I0900": "Active Diagnoses \u2014 Peripheral Vascular Disease",
  "I2000": "Active Diagnoses \u2014 Pneumonia",
  "I2100": "Active Diagnoses \u2014 Septicemia",
  "I2300": "Active Diagnoses \u2014 Urinary Tract Infection",
  "I2500": "Active Diagnoses \u2014 Cerebrovascular Accident (CVA)",
  "I2900": "Active Diagnoses \u2014 Hemiplegia/Hemiparesis",
  "I3700": "Active Diagnoses \u2014 Anxiety Disorder",
  "I3800": "Active Diagnoses \u2014 Depression",
  "I3900": "Active Diagnoses \u2014 Schizophrenia",
  "I4000": "Active Diagnoses \u2014 Psychotic Disorder",
  "I4200": "Active Diagnoses \u2014 PTSD",
  "I4300": "Active Diagnoses \u2014 Tourette Syndrome",
  "I4400": "Active Diagnoses \u2014 Aphasia",
  "I4500": "Active Diagnoses \u2014 Cerebral Palsy",
  "I4900": "Active Diagnoses \u2014 Multi-Drug Resistant Organism",
  "I5100": "Active Diagnoses \u2014 Quadriplegia",
  "I5200": "Active Diagnoses \u2014 Additional Diagnosis",
  "I5250": "Active Diagnoses \u2014 Additional Diagnosis (cont.)",
  "I5300": "Active Diagnoses \u2014 Additional Diagnosis (cont.)",
  "I5350": "Active Diagnoses \u2014 Additional Diagnosis (cont.)",
  "I5400": "Active Diagnoses \u2014 Additional Diagnosis (cont.)",
  "I5500": "Active Diagnoses \u2014 Additional Diagnosis (cont.)",
  "I5550": "Active Diagnoses \u2014 Additional Diagnosis (cont.)",
  "I5600": "Active Diagnoses \u2014 Additional Diagnosis (cont.)",
  "I5700": "Active Diagnoses \u2014 Additional Diagnosis (cont.)",
  "I8000": "Active Diagnoses \u2014 Additional Active Diagnosis",
  "J0100": "Pain Management \u2014 Pain Screening",
  "J0200": "Pain \u2014 Should Pain Assessment Be Conducted",
  "J0300": "Pain Presence",
  "J0400": "Pain Frequency",
  "J0500": "Pain Effect on Function",
  "J0600": "Pain Intensity \u2014 Numeric Rating Scale",
  "J0850": "Pain Intensity \u2014 Verbal Descriptor Scale",
  "M0100": "Determination of Skin Treatments",
  "M0150": "Risk of Developing Pressure Ulcers",
  "M0210": "Unhealed Pressure Ulcer(s)",
  "M0300": "Current Number of Unhealed Pressure Ulcers",
  "M0610": "Dimensions of Unhealed Stage 3 or 4 Pressure Ulcers",
  "M0700": "Most Severe Tissue Type for Any Pressure Ulcer",
  "M0800": "Worsening in Pressure Ulcer Status Since Prior Assessment",
  "M0900": "Healed Pressure Ulcers",
  "M1030": "Number of Venous and Arterial Ulcers",
  "M1040": "Other Skin Ulcer or Open Lesion",
  "M1200": "Skin & Ulcer Treatments",
  "N0415": "High-Risk Drug Classes \u2014 Use & Indication",
  "O0100": "Special Treatments, Procedures, and Programs",
  "O0250": "Influenza Vaccine",
  "O0300": "Pneumococcal Vaccine",
  "O0400": "Therapies",
  "O0500": "Restorative Nursing Programs",
  "O0600": "Physician Examinations",
  "O0700": "Physician Orders"
};
function resolveItemName(name, code) {
  const baseCode = code?.replace(/\[.*\]$/, "") || "";
  const baseName = name?.replace(/\[.*\]$/, "") || "";
  if (name && /^[A-Z]{1,2}\d+[A-Z]?(\[.*\])?$/.test(name)) {
    return MDS_ITEM_LABELS[baseName] || MDS_ITEM_LABELS[baseCode] || name;
  }
  if (name && baseName !== baseCode) return name;
  return MDS_ITEM_LABELS[baseCode] || MDS_ITEM_LABELS[baseName] || name || code;
}
function ntaLevelToTier2(level, payment) {
  if (!payment?.meta?.ntaTiers) return null;
  for (const t3 of payment.meta.ntaTiers) {
    if ((t3.levels || []).includes(level)) return t3.tier;
  }
  return null;
}
function formatNtaImpact2(nta, payment) {
  if (payment?.mode === "state_rate") {
    const curTier = ntaLevelToTier2(nta.currentLevel, payment);
    const newTier = ntaLevelToTier2(nta.newLevel, payment);
    if (curTier != null && newTier != null) return `NTA: Tier ${curTier} \u2192 Tier ${newTier}`;
    return "NTA: tier upgrade";
  }
  return `NTA: ${nta.currentLevel} \u2192 ${nta.newLevel}`;
}
function ImpactChips({ impact, payment, variant }) {
  const chips = [];
  if (impact?.nta?.wouldChangeLevel)
    chips.push({ label: "NTA", text: formatNtaImpact2(impact.nta, payment) });
  if (impact?.nursing?.wouldChangeGroup)
    chips.push({ label: "Nursing", from: impact.nursing.currentPaymentGroup, to: impact.nursing.newPaymentGroup });
  if (impact?.slp?.wouldChangeGroup)
    chips.push({ label: "SLP", from: impact.slp.currentGroup, to: impact.slp.newGroup });
  if (impact?.ptot?.wouldChangeGroup)
    chips.push({ label: "PT/OT", from: impact.ptot.currentGroup, to: impact.ptot.newGroup });
  if (chips.length === 0) return null;
  const cls = variant === "pending" ? "pdpm-an__impact-chips pdpm-an__impact-chips--pending" : "pdpm-an__impact-chips";
  return /* @__PURE__ */ u3("div", { class: cls, children: chips.map((c3, i3) => /* @__PURE__ */ u3("span", { class: "pdpm-an__impact-chip", children: [
    /* @__PURE__ */ u3("span", { class: "pdpm-an__impact-chip-k", children: c3.label }),
    /* @__PURE__ */ u3("span", { class: "pdpm-an__impact-chip-v", children: c3.text || `${c3.from} \u2192 ${c3.to}` })
  ] }, i3)) });
}
function OpportunityCallout({ data, onItemClick }) {
  const enhancedDetections = data?.enhancedDetections || [];
  const payment = data?.payment;
  const drivers = enhancedDetections.filter(
    (d3) => d3.wouldChangeHipps && d3.solverStatus !== "query_sent" && d3.solverStatus !== "awaiting_response" && d3.solverStatus !== "dont_code" && d3.userDecision?.decision !== "disagree"
  );
  if (drivers.length === 0) return null;
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__opps", children: drivers.map((d3, i3) => {
    const displayCode = d3.mdsItem?.startsWith("I8000:") ? "I8000" : d3.mdsItem;
    return /* @__PURE__ */ u3(
      "div",
      {
        class: "pdpm-an__opp-row",
        onClick: () => onItemClick && onItemClick(d3),
        role: "button",
        tabIndex: 0,
        onKeyDown: (e3) => {
          if (e3.key === "Enter" || e3.key === " ") {
            e3.preventDefault();
            onItemClick?.(d3);
          }
        },
        children: [
          /* @__PURE__ */ u3("span", { class: "pdpm-an__opp-icon", children: "\u26A1" }),
          /* @__PURE__ */ u3("span", { class: "pdpm-an__opp-code", children: displayCode }),
          /* @__PURE__ */ u3("span", { class: "pdpm-an__opp-name", children: resolveItemName(d3.itemName, d3.mdsItem) }),
          /* @__PURE__ */ u3(ImpactChips, { impact: d3.impact, payment }),
          /* @__PURE__ */ u3("svg", { class: "pdpm-an__opp-go", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M5 3l4 4-4 4", stroke: "currentColor", "stroke-width": "1.3", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ]
      },
      i3
    );
  }) });
}
function DocRisksSection2({ data, onItemClick, collapsed, onToggleCollapse }) {
  const enhancedDetections = data?.enhancedDetections || [];
  const risks = enhancedDetections.filter(
    (d3) => d3.solverStatus === "dont_code" && (d3.diagnosisPassed === false || d3.activeStatusPassed === false) && d3.userDecision?.decision !== "disagree"
  );
  if (risks.length === 0) return null;
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__card pdpm-an__card--doc-risk", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: onToggleCollapse, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-icon", children: "\u26A0" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-title", children: "Documentation Risks" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--amber", children: risks.length }),
      /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${collapsed ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !collapsed && /* @__PURE__ */ u3("div", { class: "pdpm-an__doc-risk-list", children: risks.map((d3, i3) => {
      const displayCode = d3.mdsItem?.startsWith("I8000:") ? "I8000" : d3.mdsItem;
      const badges = [];
      if (d3.diagnosisPassed === false) badges.push("No physician diagnosis found");
      if (d3.activeStatusPassed === false) badges.push("No active treatment order found");
      return /* @__PURE__ */ u3(
        "div",
        {
          class: "pdpm-an__doc-risk-item",
          onClick: () => onItemClick && onItemClick(d3),
          role: "button",
          tabIndex: 0,
          onKeyDown: (e3) => {
            if (e3.key === "Enter" || e3.key === " ") {
              e3.preventDefault();
              onItemClick && onItemClick(d3);
            }
          },
          children: [
            /* @__PURE__ */ u3("div", { class: "pdpm-an__doc-risk-top", children: [
              /* @__PURE__ */ u3("span", { class: "pdpm-an__driver-section", children: displayCode }),
              /* @__PURE__ */ u3("span", { class: "pdpm-an__driver-text", children: resolveItemName(d3.itemName, d3.mdsItem) })
            ] }),
            /* @__PURE__ */ u3("div", { class: "pdpm-an__doc-risk-badges", children: badges.map((b2, j3) => /* @__PURE__ */ u3("span", { class: "pdpm-an__doc-risk-badge", children: b2 }, j3)) }),
            d3.rationale && /* @__PURE__ */ u3("div", { class: "pdpm-an__doc-risk-rationale", children: d3.rationale })
          ]
        },
        i3
      );
    }) })
  ] });
}
function relativeDate2(sentAt) {
  if (!sentAt) return "not yet sent";
  const days = Math.floor((Date.now() - new Date(sentAt)) / 864e5);
  return days === 0 ? "sent today" : `sent ${days}d ago`;
}
function PendingQueriesSection({ data, onQueryClick, collapsed, onToggleCollapse }) {
  const queries = data?.outstandingQueries || [];
  const payment = data?.payment;
  const pending = queries.filter(
    (q3) => q3.status === "sent" || q3.status === "pending" || q3.status === "awaiting_response"
  );
  if (pending.length === 0) return null;
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__card pdpm-an__card--queries", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: onToggleCollapse, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-icon", children: "\u2709" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-title", children: "Pending Queries" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--pending", children: pending.length }),
      /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${collapsed ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !collapsed && /* @__PURE__ */ u3("ul", { class: "pdpm-an__query-list", children: pending.map((q3, i3) => {
      const ci = q3.pdpmImpact?.componentImpacts;
      const impact = ci ? { slp: ci.slp, nta: ci.nta, nursing: ci.nursing, ptot: ci.ptot } : null;
      const isSent = q3.status === "sent" || q3.status === "awaiting_response";
      return /* @__PURE__ */ u3(
        "li",
        {
          class: "pdpm-an__query-item pdpm-an__query-item--clickable",
          onClick: () => onQueryClick && onQueryClick(q3),
          role: "button",
          tabIndex: 0,
          children: [
            /* @__PURE__ */ u3("div", { class: "pdpm-an__query-top", children: [
              /* @__PURE__ */ u3("div", { class: "pdpm-an__query-main", children: [
                q3.mdsItem && /* @__PURE__ */ u3("span", { class: "pdpm-an__query-code", children: q3.mdsItem }),
                /* @__PURE__ */ u3("span", { class: "pdpm-an__query-text", children: resolveItemName(q3.mdsItemName, q3.mdsItem) })
              ] }),
              /* @__PURE__ */ u3("span", { class: `pdpm-an__query-status-pill${isSent ? "" : " pdpm-an__query-status-pill--draft"}`, children: isSent ? relativeDate2(q3.sentAt) : "draft" })
            ] }),
            impact && /* @__PURE__ */ u3(ImpactChips, { impact, payment, variant: "pending" })
          ]
        },
        i3
      );
    }) })
  ] });
}
function signedRelDate(dateStr) {
  if (!dateStr) return "";
  const days = Math.floor((Date.now() - new Date(dateStr)) / 864e5);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  return `${days}d ago`;
}
function RecentlySignedSection({ data, onQueryClick, collapsed, onToggleCollapse }) {
  const recentlySigned = data?.recentlySigned || data?.signedQueries || data?.completedQueries || [];
  const signed = recentlySigned.filter(
    (q3) => q3.status === "signed" || q3.status === "completed" || q3.status === "resolved" || q3.signedAt
  );
  if (signed.length === 0) return null;
  const needsCodingCount = signed.filter((q3) => q3.mdsItemCoded === false).length;
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__card pdpm-an__card--signed", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: onToggleCollapse, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-icon", children: "\u2713" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-title", children: "Recently Signed" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-badge", children: signed.length }),
      needsCodingCount > 0 && /* @__PURE__ */ u3("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--coding", children: [
        needsCodingCount,
        " need coding"
      ] }),
      /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${collapsed ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !collapsed && /* @__PURE__ */ u3("ul", { class: "pdpm-an__query-list", children: signed.map((q3, i3) => {
      const needsCoding = q3.mdsItemCoded === false;
      const coded = q3.mdsItemCoded === true;
      const dateStr = signedRelDate(q3.signedAt || q3.completedAt);
      return /* @__PURE__ */ u3(
        "li",
        {
          class: `pdpm-an__signed-item${needsCoding ? " pdpm-an__signed-item--needs-coding" : ""} pdpm-an__signed-item--clickable`,
          onClick: () => onQueryClick && onQueryClick(q3),
          role: "button",
          tabIndex: 0,
          children: [
            q3.mdsItem && /* @__PURE__ */ u3("span", { class: "pdpm-an__query-code pdpm-an__query-code--signed", children: q3.mdsItem }),
            /* @__PURE__ */ u3("span", { class: "pdpm-an__query-text", children: resolveItemName(q3.mdsItemName, q3.mdsItem) }),
            /* @__PURE__ */ u3("div", { class: "pdpm-an__signed-badges", children: [
              needsCoding && /* @__PURE__ */ u3("span", { class: "pdpm-an__signed-badge pdpm-an__signed-badge--coding", children: "Needs Coding" }),
              coded && /* @__PURE__ */ u3("span", { class: "pdpm-an__signed-badge pdpm-an__signed-badge--coded", children: "Coded" }),
              dateStr && /* @__PURE__ */ u3("span", { class: "pdpm-an__query-date", children: dateStr })
            ] })
          ]
        },
        i3
      );
    }) })
  ] });
}
function NtaLevelTrack({ nta, potentialLevel, payment }) {
  if (!nta) return null;
  if (payment?.mode === "state_rate") {
    if (nta.currentPoints == null || nta.pointsNeeded == null) return null;
    const currentTier = payment.current?.ntaTier?.tier;
    const nextTier = currentTier != null ? currentTier - 1 : null;
    const targetLabel = nextTier != null && nextTier >= 1 ? `Tier ${nextTier}` : null;
    if (!targetLabel && nta.pointsNeeded <= 0) return null;
    const total = nta.currentPoints + nta.pointsNeeded;
    const pct = total > 0 ? Math.round(nta.currentPoints / total * 100) : 0;
    return /* @__PURE__ */ u3("div", { class: "pdpm-an__nta-inline", children: [
      /* @__PURE__ */ u3("div", { class: "pdpm-an__nta-sbar", children: /* @__PURE__ */ u3("div", { class: "pdpm-an__nta-sfill", style: { width: `${pct}%` } }) }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__nta-slbl", children: [
        nta.pointsNeeded === 1 ? "1 pt" : `${nta.pointsNeeded} pts`,
        " away",
        targetLabel ? ` from ${targetLabel}` : ""
      ] })
    ] });
  }
  const levels = nta.levels;
  if (!levels || levels.length < 2 || !nta.currentLevel) return null;
  const currentIdx = levels.findIndex((l3) => l3.code === nta.currentLevel);
  if (currentIdx === -1) return null;
  const targetLevel = potentialLevel || nta.nextLevel;
  const targetIdx = targetLevel ? levels.findIndex((l3) => l3.code === targetLevel) : -1;
  if (targetIdx <= currentIdx) return null;
  const lvlPct = (i3) => i3 / (levels.length - 1) * 100;
  const curPct = Math.max(lvlPct(currentIdx), 4);
  const tgtPct = lvlPct(targetIdx);
  const gainPct = tgtPct - curPct;
  const away = nta.pointsNeeded;
  const nextLabel = nta.nextLevel;
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__nta-track", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__nta-bar", children: [
      /* @__PURE__ */ u3("div", { class: "pdpm-an__nta-bar-cur", style: { width: `${curPct}%` } }),
      /* @__PURE__ */ u3("div", { class: "pdpm-an__nta-bar-gain", style: { left: `${curPct}%`, width: `${gainPct}%` } })
    ] }),
    /* @__PURE__ */ u3("div", { class: "pdpm-an__nta-lvls", children: levels.map((l3, i3) => /* @__PURE__ */ u3("span", { class: `pdpm-an__nta-lvl${i3 === currentIdx ? " pdpm-an__nta-lvl--cur" : ""}${i3 === targetIdx ? " pdpm-an__nta-lvl--tgt" : ""}`, children: l3.code }, l3.code)) }),
    away != null && away > 0 && nextLabel && /* @__PURE__ */ u3("span", { class: "pdpm-an__nta-away", children: [
      away === 1 ? "1 pt" : `${away} pts`,
      " ",
      "\u2192",
      " ",
      nextLabel
    ] })
  ] });
}
function SlpTierIndicator({ gap }) {
  const s3 = gap?.slp;
  if (!s3 || s3.tier1Met == null && s3.tier2Met == null) return null;
  const tier2Total = (s3.tier2Met ?? 0) + (s3.tier2Needed ?? 0);
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__tier-row", children: [
    s3.tier1Met != null && /* @__PURE__ */ u3("span", { class: "pdpm-an__tier-segment", children: [
      "Tier 1: ",
      Array.from({ length: s3.tier1Met }, (_2, i3) => /* @__PURE__ */ u3("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--filled", children: "\u25CF" }, i3)),
      " ",
      s3.tier1Met,
      " met"
    ] }),
    (s3.tier2Met != null || s3.tier2Needed != null) && /* @__PURE__ */ u3("span", { class: "pdpm-an__tier-segment", children: [
      s3.tier1Met != null && /* @__PURE__ */ u3("span", { class: "pdpm-an__tier-sep", children: "\xB7" }),
      "Tier 2: ",
      Array.from({ length: s3.tier2Met ?? 0 }, (_2, i3) => /* @__PURE__ */ u3("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--filled", children: "\u25CF" }, `f${i3}`)),
      Array.from({ length: s3.tier2Needed ?? 0 }, (_2, i3) => /* @__PURE__ */ u3("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--empty", children: "\u25CB" }, `e${i3}`)),
      " ",
      s3.tier2Met ?? 0,
      "/",
      tier2Total
    ] })
  ] });
}
function buildCapturedFromCalculation(calc) {
  const result = { ptot: [], slp: [], nursing: [], nta: [] };
  if (!calc) return result;
  if (calc.nta?.contributingConditions) {
    result.nta = calc.nta.contributingConditions.map((c3) => ({
      mdsItem: c3.mdsItem,
      itemName: c3.categoryName,
      helpText: `+${c3.points} pts (${c3.categoryName})`,
      pointsAdded: c3.points
    }));
  }
  if (calc.slp) {
    const slpItems = [];
    if (calc.slp.tier2?.hasSwallowingDisorder) {
      slpItems.push({ mdsItem: "K0100A", itemName: "Swallowing Disorder", helpText: "Tier 2: swallowing" });
    }
    if (calc.slp.tier2?.hasMechanicallyAlteredDiet) {
      slpItems.push({ mdsItem: "K0520C1", itemName: "Mechanically Altered Diet", helpText: "Tier 2: mechanically altered diet" });
    }
    if (calc.slp.comorbidities) {
      for (const c3 of calc.slp.comorbidities) {
        if (c3.isPresent && c3.comorbidityNumber <= 100) {
          slpItems.push({ mdsItem: c3.mdsItem, itemName: c3.name, helpText: `Tier 1 comorbidity: ${c3.name}` });
        }
      }
    }
    if (calc.slp.tier1?.hasCognitiveImpairment) {
      slpItems.push({ mdsItem: "C0500", itemName: "Cognitive Impairment", helpText: "Tier 1: cognitive impairment" });
    }
    if (calc.slp.tier1?.hasAcuteNeuro) {
      slpItems.push({ mdsItem: "I4500", itemName: "Acute Neurological", helpText: "Tier 1: acute neurological condition" });
    }
    result.slp = slpItems;
  }
  if (calc.nursing?.conditionsEvaluated) {
    const CAT_LABELS = { ES: "Extensive Services", SCH: "Special Care High", SCL: "Special Care Low", CC: "Clinically Complex" };
    result.nursing = calc.nursing.conditionsEvaluated.filter((c3) => c3.isMet).map((c3) => ({
      mdsItem: c3.triggeringItems?.[0] || "",
      itemName: c3.subcategoryName,
      helpText: `${CAT_LABELS[c3.mainCategory] || c3.mainCategory}: ${c3.subcategoryName}`
    }));
  }
  return result;
}
function ComponentBreakdown({ data, payment, onItemClick, collapsed, onToggleCollapse }) {
  const [expandedKey, setExpandedKey] = d2(null);
  const gap = data?.gapAnalysis || {};
  const decoded = data?.hippsDecoded || {};
  const potentialDecoded = data?.potentialHippsDecoded || {};
  const allDetections = data?.enhancedDetections || [];
  const captured = buildCapturedFromCalculation(data?.calculation);
  const components = [
    {
      label: "PT/OT",
      key: "ptot",
      currentCode: decoded.ptot?.code,
      potential: potentialDecoded.ptot?.code,
      name: decoded.ptot?.name,
      detail: gap.ptot?.clinicalCategoryName,
      items: gap.ptot?.detectionsToHelp || [],
      captured: captured.ptot
    },
    {
      label: "SLP",
      key: "slp",
      currentCode: decoded.slp?.code,
      potential: potentialDecoded.slp?.code,
      name: decoded.slp?.name,
      detail: gap.slp?.clinicalCategoryName,
      items: gap.slp?.detectionsToHelp || [],
      captured: captured.slp
    },
    {
      label: "Nursing",
      key: "nursing",
      currentCode: decoded.nursing?.code,
      potential: potentialDecoded.nursing?.code,
      name: decoded.nursing?.name,
      detail: gap.nursing?.qualifyingSubcategoryName,
      items: gap.nursing?.detectionsToHelp || [],
      captured: captured.nursing
    },
    {
      label: "NTA",
      key: "nta",
      currentCode: payment?.mode === "state_rate" ? payment.current?.ntaTier?.tier != null ? `Tier ${payment.current.ntaTier.tier}` : decoded.nta?.code : decoded.nta?.code,
      potential: payment?.mode === "state_rate" ? payment.potential?.ntaTier?.tier != null && payment.potential.ntaTier.tier !== payment.current?.ntaTier?.tier ? `Tier ${payment.potential.ntaTier.tier}` : null : potentialDecoded.nta?.code,
      name: payment?.mode === "state_rate" ? payment.current?.ntaTier?.label || decoded.nta?.name : decoded.nta?.name,
      detail: payment?.mode === "state_rate" ? payment.current?.ntaTier?.pointRange || gap.nta?.clinicalCategoryName : gap.nta?.clinicalCategoryName,
      items: gap.nta?.detectionsToHelp || [],
      captured: captured.nta,
      ntaProgress: gap.nta
    }
  ];
  const hasAny = components.some((c3) => c3.currentCode || c3.potential);
  if (!hasAny) return null;
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: onToggleCollapse, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-icon", children: "\u2630" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-title", children: "PDPM Components" }),
      /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${collapsed ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !collapsed && /* @__PURE__ */ u3("div", { class: "pdpm-an__components", children: components.map((comp) => {
      if (!comp.currentCode && !comp.potential) return null;
      const improved = comp.potential && comp.currentCode && comp.potential !== comp.currentCode;
      const hasItems = comp.items.length > 0;
      const hasCaptured = comp.captured.length > 0;
      const isExpanded = expandedKey === comp.key;
      const toggleExpand = () => {
        if (hasItems || hasCaptured || comp.detail) setExpandedKey(isExpanded ? null : comp.key);
      };
      const isClickable = hasItems || hasCaptured || comp.detail;
      return /* @__PURE__ */ u3(
        "div",
        {
          class: `pdpm-an__comp-row${improved ? " pdpm-an__comp-row--improved" : ""}${isExpanded ? " pdpm-an__comp-row--expanded" : ""}`,
          children: [
            /* @__PURE__ */ u3(
              "div",
              {
                class: `pdpm-an__comp-header${isClickable ? " pdpm-an__comp-header--clickable" : ""}`,
                onClick: isClickable ? toggleExpand : void 0,
                role: isClickable ? "button" : void 0,
                tabIndex: isClickable ? 0 : void 0,
                onKeyDown: isClickable ? (e3) => {
                  if (e3.key === "Enter" || e3.key === " ") {
                    e3.preventDefault();
                    toggleExpand();
                  }
                } : void 0,
                children: [
                  /* @__PURE__ */ u3("span", { class: "pdpm-an__comp-label", children: comp.label }),
                  /* @__PURE__ */ u3("span", { class: "pdpm-an__comp-name", children: comp.name || "\u2014" }),
                  comp.currentCode && /* @__PURE__ */ u3("span", { class: "pdpm-an__comp-code", children: comp.currentCode }),
                  improved && /* @__PURE__ */ u3("span", { class: "pdpm-an__comp-change", children: [
                    "\u2192",
                    " ",
                    comp.potential
                  ] }),
                  isClickable && /* @__PURE__ */ u3("svg", { class: `pdpm-an__comp-chevron${isExpanded ? " pdpm-an__comp-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M4 5.5L7 8.5L10 5.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                ]
              }
            ),
            comp.ntaProgress && /* @__PURE__ */ u3(NtaLevelTrack, { nta: comp.ntaProgress, potentialLevel: comp.potential, payment }),
            isExpanded && /* @__PURE__ */ u3("div", { class: "pdpm-an__comp-detail", children: [
              comp.detail && /* @__PURE__ */ u3("div", { class: "pdpm-an__comp-qualifier", children: comp.detail }),
              comp.key === "slp" && /* @__PURE__ */ u3(SlpTierIndicator, { gap }),
              hasItems && /* @__PURE__ */ u3(k, { children: [
                hasCaptured && /* @__PURE__ */ u3("div", { class: "pdpm-an__captured-label pdpm-an__captured-label--opps", children: "Opportunities" }),
                /* @__PURE__ */ u3("div", { class: "pdpm-an__ci-list", children: comp.items.map((d3, i3) => {
                  const code = d3.mdsItem?.startsWith("I8000:") ? "I8000" : d3.mdsItem;
                  const handleClick = (e3) => {
                    e3.stopPropagation();
                    if (!onItemClick) return;
                    const match = allDetections.find((ed) => ed.mdsItem === d3.mdsItem);
                    if (match) onItemClick(match);
                  };
                  return /* @__PURE__ */ u3(
                    "div",
                    {
                      class: "pdpm-an__ci-row",
                      onClick: handleClick,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (e3) => {
                        if (e3.key === "Enter" || e3.key === " ") {
                          e3.preventDefault();
                          handleClick(e3);
                        }
                      },
                      children: [
                        /* @__PURE__ */ u3("span", { class: "pdpm-an__ci-code", children: code }),
                        /* @__PURE__ */ u3("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ u3("span", { class: "pdpm-an__ci-name", children: resolveItemName(d3.itemName, d3.mdsItem) }),
                          d3.helpText && /* @__PURE__ */ u3("span", { class: "pdpm-an__ci-help", children: d3.helpText })
                        ] }),
                        d3.pointsAdded != null && /* @__PURE__ */ u3("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          d3.pointsAdded,
                          " pts"
                        ] })
                      ]
                    },
                    i3
                  );
                }) })
              ] }),
              hasCaptured && /* @__PURE__ */ u3("div", { class: "pdpm-an__captured", children: [
                (hasItems || comp.detail) && /* @__PURE__ */ u3("div", { class: "pdpm-an__captured-label", children: "Currently captured" }),
                /* @__PURE__ */ u3("div", { class: "pdpm-an__ci-list", children: comp.captured.map((d3, i3) => {
                  const code = d3.mdsItem?.startsWith("I8000:") ? "I8000" : d3.mdsItem;
                  const handleClick = (e3) => {
                    e3.stopPropagation();
                    if (!onItemClick) return;
                    const match = allDetections.find((ed) => ed.mdsItem === d3.mdsItem);
                    if (match) onItemClick(match);
                  };
                  return /* @__PURE__ */ u3(
                    "div",
                    {
                      class: "pdpm-an__ci-row pdpm-an__ci-row--captured",
                      onClick: handleClick,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (e3) => {
                        if (e3.key === "Enter" || e3.key === " ") {
                          e3.preventDefault();
                          handleClick(e3);
                        }
                      },
                      children: [
                        /* @__PURE__ */ u3("span", { class: "pdpm-an__ci-check", children: "\u2713" }),
                        /* @__PURE__ */ u3("span", { class: "pdpm-an__ci-code", children: code }),
                        /* @__PURE__ */ u3("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ u3("span", { class: "pdpm-an__ci-name", children: resolveItemName(d3.itemName, d3.mdsItem) }),
                          d3.helpText && /* @__PURE__ */ u3("span", { class: "pdpm-an__ci-help", children: d3.helpText })
                        ] }),
                        d3.pointsAdded != null && /* @__PURE__ */ u3("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          d3.pointsAdded,
                          " pts"
                        ] })
                      ]
                    },
                    `cap-${i3}`
                  );
                }) })
              ] })
            ] })
          ]
        },
        comp.key
      );
    }) })
  ] });
}
var SEVERITY_COLORS = {
  // BIMS — lower = worse
  "Intact": "#059669",
  "Mildly Impaired": "#d97706",
  "Moderately/Severely Impaired": "#ef4444",
  // PHQ-9 — higher = worse
  "None/Minimal": "#059669",
  "Mild": "#84cc16",
  "Moderate": "#d97706",
  "Moderately Severe": "#ea580c",
  "Severe": "#ef4444",
  // NFS
  "Low Needs": "#059669",
  "Medium Needs": "#d97706",
  "High Needs": "#ef4444",
  // PT/OT
  "Fully Independent": "#059669",
  "Moderate/Independent": "#84cc16",
  "Dependent": "#d97706",
  "Most Dependent": "#ef4444"
};
function ScoreCard({ value, max, label, severity, impact, extra }) {
  const color = SEVERITY_COLORS[severity] || "#9ca3af";
  const pct = value != null && max > 0 ? Math.round(value / max * 100) : 0;
  const r3 = 20, circ = 2 * Math.PI * r3;
  const offset = circ - pct / 100 * circ;
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__sc", title: impact || "", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__sc-ring", children: [
      /* @__PURE__ */ u3("svg", { width: "52", height: "52", viewBox: "0 0 52 52", children: [
        /* @__PURE__ */ u3("circle", { cx: "26", cy: "26", r: r3, fill: "none", stroke: "#f1f5f9", "stroke-width": "4" }),
        value != null && /* @__PURE__ */ u3(
          "circle",
          {
            cx: "26",
            cy: "26",
            r: r3,
            fill: "none",
            stroke: color,
            "stroke-width": "4",
            "stroke-dasharray": circ,
            "stroke-dashoffset": offset,
            "stroke-linecap": "round",
            transform: "rotate(-90 26 26)"
          }
        )
      ] }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__sc-val", children: value != null ? value : "\u2014" })
    ] }),
    /* @__PURE__ */ u3("span", { class: "pdpm-an__sc-label", children: label }),
    severity && /* @__PURE__ */ u3("span", { class: "pdpm-an__sc-severity", style: { color }, children: severity }),
    extra && /* @__PURE__ */ u3("span", { class: "pdpm-an__sc-extra", children: extra })
  ] });
}
var GG_ITEMS = [
  { key: "eating", label: "Eating", code: "GG0130A", scope: "both" },
  { key: "oralHygiene", label: "Oral Hygiene", code: "GG0130B", scope: "ptot" },
  { key: "toiletingHygiene", label: "Toileting Hygiene", code: "GG0130C", scope: "both" },
  { key: "sittingToLying", label: "Sitting to Lying", code: "GG0170B", scope: "both" },
  { key: "lyingToSitting", label: "Lying to Sitting", code: "GG0170C", scope: "both" },
  { key: "sitToStand", label: "Sit to Stand", code: "GG0170D", scope: "both" },
  { key: "transfer", label: "Transfer", code: "GG0170E", scope: "both" },
  { key: "toiletTransfer", label: "Toilet Transfer", code: "GG0170F", scope: "both" },
  { key: "walking50", label: "Walking 50ft", code: "GG0170J", scope: "ptot" },
  { key: "walking150", label: "Walking 150ft", code: "GG0170K", scope: "ptot" }
];
function GGBreakdown({ breakdown }) {
  if (!breakdown) return null;
  const sc = breakdown.selfCare || {};
  const mob = breakdown.mobility || {};
  const all = { ...sc, ...mob };
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__gg", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__gg-header", children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__gg-title", children: "GG Functional Items" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__gg-total", children: [
        "Total: ",
        breakdown.total,
        "/24"
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: "pdpm-an__gg-grid", children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__gg-th", children: "Item" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__gg-th", children: "Score" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__gg-th", children: "Used In" }),
      GG_ITEMS.map((item) => {
        const val = all[item.key];
        return /* @__PURE__ */ u3(k, { children: [
          /* @__PURE__ */ u3("span", { class: "pdpm-an__gg-cell", children: item.label }),
          /* @__PURE__ */ u3("span", { class: "pdpm-an__gg-cell pdpm-an__gg-cell--score", children: val != null ? val : "\u2014" }),
          /* @__PURE__ */ u3("span", { class: `pdpm-an__gg-cell pdpm-an__gg-scope${item.scope === "ptot" ? " pdpm-an__gg-scope--ptot" : ""}`, children: item.scope === "ptot" ? "PT/OT only" : "Nursing + PT/OT" })
        ] });
      })
    ] }),
    /* @__PURE__ */ u3("div", { class: "pdpm-an__gg-avgs", children: [
      mob.bedMobilityAverage != null && /* @__PURE__ */ u3("span", { children: [
        "Bed Mobility Avg: ",
        mob.bedMobilityAverage
      ] }),
      mob.transferAverage != null && /* @__PURE__ */ u3("span", { children: [
        "Transfer Avg: ",
        mob.transferAverage
      ] }),
      mob.walkingAverage != null && /* @__PURE__ */ u3("span", { children: [
        "Walking Avg: ",
        mob.walkingAverage
      ] })
    ] })
  ] });
}
function SectionProgressCard({ data, collapsed, onToggleCollapse }) {
  const sp = data?.sectionProgress;
  if (!sp || !sp.total) return null;
  const { sections = {} } = sp;
  const entries = Object.entries(sections);
  let done = 0, inProgress = 0, notStarted = 0;
  for (const [, status] of entries) {
    if (status === "Complete" || status === "Completed" || status === "Locked") done++;
    else if (status === "In Progress") inProgress++;
    else notStarted++;
  }
  const total = entries.length || sp.total || 0;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: onToggleCollapse, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-icon", children: "\u{1F4CB}" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-title", children: "MDS Sections" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-badge", children: [
        pct,
        "%"
      ] }),
      /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${collapsed ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !collapsed && /* @__PURE__ */ u3("div", { class: "pdpm-an__sp-body", children: [
      /* @__PURE__ */ u3("div", { class: "pdpm-an__sp-bar-row", children: [
        /* @__PURE__ */ u3("div", { class: "pdpm-an__sp-bar", children: /* @__PURE__ */ u3("div", { class: "pdpm-an__sp-fill", style: { width: `${pct}%` } }) }),
        /* @__PURE__ */ u3("div", { class: "pdpm-an__sp-counts", children: [
          done > 0 && /* @__PURE__ */ u3("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--done", children: [
            done,
            " done"
          ] }),
          inProgress > 0 && /* @__PURE__ */ u3("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--wip", children: [
            inProgress,
            " in progress"
          ] }),
          notStarted > 0 && /* @__PURE__ */ u3("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--todo", children: [
            notStarted,
            " not started"
          ] })
        ] })
      ] }),
      entries.length > 0 && /* @__PURE__ */ u3("div", { class: "pdpm-an__sp-tags", children: entries.map(([code, status]) => {
        const isDone = status === "Complete" || status === "Completed";
        const isLocked = status === "Locked";
        const isWip = status === "In Progress";
        const cls = isDone || isLocked ? "pdpm-an__sp-tag--done" : isWip ? "pdpm-an__sp-tag--wip" : "pdpm-an__sp-tag--todo";
        return /* @__PURE__ */ u3("span", { class: `pdpm-an__sp-tag ${cls}`, title: status, children: [
          (isDone || isLocked) && /* @__PURE__ */ u3("span", { class: "pdpm-an__sp-tag-check", children: "\u2713" }),
          code
        ] }, code);
      }) })
    ] })
  ] });
}
function ClinicalScores({ data, collapsed, onToggleCollapse }) {
  const [showGG, setShowGG] = d2(false);
  const scores = data?.scores;
  if (!scores) return null;
  const bims = scores.bims;
  const phq = scores.phq9;
  const nfs = scores.nursingFunctionalScore;
  const ptot = scores.ptotFunctionalScore;
  const gg = scores.functionalScoreBreakdown;
  if (!bims && !phq && !nfs && !ptot) return null;
  const phqVal = phq?.score != null && phq.score !== 99 ? phq.score : phq?.staffAssessmentScore;
  const phqExtra = (phq?.score == null || phq?.score === 99) && phq?.staffAssessmentScore != null ? "(Staff assessment)" : null;
  const thresholds = [];
  if (bims?.meetsImpairmentThreshold) thresholds.push({ color: "#d97706", text: bims.pdpmImpact || "Cognitive impairment detected \u2014 affects SLP and Nursing classification" });
  if (phq?.meetsDepressionThreshold) thresholds.push({ color: "#ea580c", text: phq.pdpmImpact || "Depression threshold met \u2014 upgrades Nursing payment group" });
  if (nfs?.meetsBSCPThreshold) thresholds.push({ color: "#6366f1", text: nfs.bscpNote || "NFS \u2265 11 \u2014 BSCP category eligible" });
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: onToggleCollapse, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-icon", children: "\u{1F9E0}" }),
      /* @__PURE__ */ u3("span", { class: "pdpm-an__card-title", children: "Clinical Scores" }),
      /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${collapsed ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !collapsed && /* @__PURE__ */ u3("div", { class: "pdpm-an__scores-body", children: [
      /* @__PURE__ */ u3("div", { class: "pdpm-an__scores-row", children: [
        bims && /* @__PURE__ */ u3(ScoreCard, { value: bims.score, max: 15, label: "BIMS", severity: bims.severity, impact: bims.pdpmImpact }),
        phq && /* @__PURE__ */ u3(ScoreCard, { value: phqVal, max: 27, label: "PHQ-9", severity: phq.severity, impact: phq.pdpmImpact, extra: phqExtra }),
        nfs && /* @__PURE__ */ u3(ScoreCard, { value: nfs.score, max: 16, label: "NFS", severity: nfs.severity, impact: nfs.pdpmImpact }),
        ptot && /* @__PURE__ */ u3(ScoreCard, { value: ptot.score, max: 24, label: "PT/OT Func", severity: ptot.severity, impact: ptot.pdpmImpact })
      ] }),
      thresholds.length > 0 && /* @__PURE__ */ u3("div", { class: "pdpm-an__thresholds", children: thresholds.map((t3, i3) => /* @__PURE__ */ u3("div", { class: "pdpm-an__threshold", style: { borderLeftColor: t3.color }, children: t3.text }, i3)) }),
      gg && /* @__PURE__ */ u3("div", { class: "pdpm-an__gg-toggle-wrap", children: [
        /* @__PURE__ */ u3("button", { class: "pdpm-an__gg-toggle", onClick: () => setShowGG(!showGG), children: [
          showGG ? "Hide" : "Show",
          " GG Item Breakdown",
          /* @__PURE__ */ u3("svg", { class: `pdpm-an__card-chevron${showGG ? " pdpm-an__card-chevron--open" : ""}`, width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ] }),
        showGG && /* @__PURE__ */ u3(GGBreakdown, { breakdown: gg })
      ] })
    ] })
  ] });
}
function SummaryStrip2({ data }) {
  if (!data) return null;
  const summary = data.summary || {};
  const calculation = data.calculation || {};
  const payment = data.payment;
  const cmsHipps = summary.currentHipps || calculation.hippsCode || "?????";
  const cmsPotential = summary.potentialHippsIfCoded;
  const isStateRate = payment?.mode === "state_rate";
  const cleanGroup = (c3) => c3 ? c3.replace(/_/g, "") : null;
  const currentCode = isStateRate ? cleanGroup(payment.current?.groupCode) || cmsHipps : cmsHipps;
  const potentialCode = isStateRate ? cleanGroup(payment.potential?.groupCode) ?? currentCode : cmsPotential;
  const hasImprovement = isStateRate ? potentialCode && potentialCode !== currentCode : summary.hasImprovements && cmsPotential && cmsPotential !== cmsHipps;
  const rates = formatPaymentRates(payment);
  const comp = data.compliance?.summary || {};
  const compPassed = comp.passed ?? 0;
  const compNa = comp.notApplicable ?? 0;
  const compTotal = (comp.total ?? 0) - compNa;
  const sp = data.sectionProgress;
  let spDone = 0, spTotal = 0;
  if (sp?.sections) {
    for (const status of Object.values(sp.sections)) {
      spTotal++;
      if (status === "Complete" || status === "Completed" || status === "Locked") spDone++;
    }
  }
  if (!spTotal) spTotal = sp?.total ?? 0;
  const spPct = spTotal > 0 ? Math.round(spDone / spTotal * 100) : 0;
  const drivers = (data.enhancedDetections || []).filter(
    (d3) => d3.wouldChangeHipps && d3.solverStatus !== "query_sent" && d3.solverStatus !== "awaiting_response" && d3.solverStatus !== "dont_code" && d3.userDecision?.decision !== "disagree"
  ).length;
  const hasDelta = rates && rates.delta && rates.delta !== "+$0/day" && rates.delta !== "+0";
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__summary", children: [
    hasDelta && /* @__PURE__ */ u3("div", { class: "pdpm-an__summary-delta", children: rates.delta }),
    /* @__PURE__ */ u3("div", { class: "pdpm-an__summary-codes", children: [
      /* @__PURE__ */ u3("span", { class: "pdpm-an__summary-code", children: currentCode }),
      hasImprovement && /* @__PURE__ */ u3(k, { children: [
        /* @__PURE__ */ u3("span", { class: "pdpm-an__summary-arrow", children: "\u2192" }),
        /* @__PURE__ */ u3("span", { class: "pdpm-an__summary-code pdpm-an__summary-code--green", children: potentialCode })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: "pdpm-an__summary-stats", children: [
      spTotal > 0 && /* @__PURE__ */ u3("span", { class: "pdpm-an__summary-stat", children: [
        spPct,
        "% MDS"
      ] }),
      compTotal > 0 && /* @__PURE__ */ u3("span", { class: "pdpm-an__summary-stat", children: [
        compPassed,
        "/",
        compTotal,
        " Compliance"
      ] }),
      drivers > 0 && /* @__PURE__ */ u3("span", { class: "pdpm-an__summary-stat pdpm-an__summary-stat--green", children: [
        drivers,
        " Opp",
        drivers !== 1 ? "s" : ""
      ] })
    ] })
  ] });
}
function LoadingState2() {
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__spinner" }),
    /* @__PURE__ */ u3("p", { children: "Loading assessment data\u2026" })
  ] });
}
function ErrorState2({ message, onRetry }) {
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__state-icon", children: "\u26A0" }),
    /* @__PURE__ */ u3("p", { children: message }),
    /* @__PURE__ */ u3("button", { class: "pdpm-an__retry-btn", onClick: onRetry, children: "Retry" })
  ] });
}
function AssessmentView({ assessmentData, onItemClick, onQueryClick, patientId }) {
  const [collapsed, setCollapsed] = d2({});
  const toggle = (key) => setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  if (!assessmentData) {
    return /* @__PURE__ */ u3("div", { class: "pdpm-an__state", children: /* @__PURE__ */ u3("p", { children: "No assessment data available." }) });
  }
  return /* @__PURE__ */ u3("div", { class: "pdpm-an__content", children: [
    /* @__PURE__ */ u3(SummaryStrip2, { data: assessmentData }),
    /* @__PURE__ */ u3(OpportunityCallout, { data: assessmentData, onItemClick }),
    /* @__PURE__ */ u3(PendingQueriesSection, { data: assessmentData, onQueryClick, collapsed: collapsed.queries, onToggleCollapse: () => toggle("queries") }),
    /* @__PURE__ */ u3(RecentlySignedSection, { data: assessmentData, onQueryClick, collapsed: collapsed.signed, onToggleCollapse: () => toggle("signed") }),
    /* @__PURE__ */ u3(ComponentBreakdown, { data: assessmentData, payment: assessmentData?.payment, onItemClick, collapsed: collapsed.components, onToggleCollapse: () => toggle("components") }),
    /* @__PURE__ */ u3(SectionProgressCard, { data: assessmentData, collapsed: collapsed.sections, onToggleCollapse: () => toggle("sections") }),
    /* @__PURE__ */ u3(DocRisksSection2, { data: assessmentData, onItemClick, collapsed: collapsed.docRisks, onToggleCollapse: () => toggle("docRisks") }),
    /* @__PURE__ */ u3(ClinicalScores, { data: assessmentData, collapsed: collapsed.scores, onToggleCollapse: () => toggle("scores") }),
    /* @__PURE__ */ u3(ComplianceCard, { data: assessmentData, collapsed: collapsed.compliance, onToggleCollapse: () => toggle("compliance") }),
    patientId && /* @__PURE__ */ u3(CertSection, { patientId, collapsed: collapsed.certs, onToggleCollapse: () => toggle("certs") })
  ] });
}
function ModeToggleButton({ mode, onToggle }) {
  const title = mode === "panel" ? "Expand to modal" : "Dock as side panel";
  return /* @__PURE__ */ u3("button", { class: "pdpm-an__mode-toggle", onClick: onToggle, title, "aria-label": title, children: mode === "panel" ? (
    // Expand icon (arrows pointing outward)
    /* @__PURE__ */ u3("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ u3("path", { d: "M5.5 2H3a1 1 0 00-1 1v2.5M10.5 2H13a1 1 0 011 1v2.5M10.5 14H13a1 1 0 001-1v-2.5M5.5 14H3a1 1 0 01-1-1v-2.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
  ) : (
    // Sidebar/panel icon (panel docked right)
    /* @__PURE__ */ u3("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ u3("rect", { x: "2", y: "2", width: "12", height: "12", rx: "1.5", stroke: "currentColor", "stroke-width": "1.5" }),
      /* @__PURE__ */ u3("line", { x1: "10", y1: "2", x2: "10", y2: "14", stroke: "currentColor", "stroke-width": "1.5" })
    ] })
  ) });
}
function PDPMAnalyzer({ context, onClose, initialMode = "modal" }) {
  const [selectedAssessmentId, setSelectedAssessmentId] = d2(null);
  const [detailItem, setDetailItem] = d2(null);
  const [mode, setMode] = d2(initialMode);
  const [isSplitView, setIsSplitView] = d2(false);
  const {
    assessments,
    detail,
    patientName: hookPatientName,
    loading,
    detailLoading,
    error,
    retry,
    retryDetail
  } = usePDPMAnalyzer(context, selectedAssessmentId);
  const firstId = assessments?.[0]?.id;
  if (context?.scope === "patient" && firstId && !selectedAssessmentId) {
    setSelectedAssessmentId(firstId);
  }
  const isPanel = mode === "panel";
  function handleBackdropClick(e3) {
    if (isPanel) return;
    if (e3.target === e3.currentTarget) onClose();
  }
  function openCommandCenter() {
    onClose();
    if (typeof MDSCommandCenterLauncher !== "undefined") {
      MDSCommandCenterLauncher.open();
    }
  }
  function toggleMode() {
    setMode((prev) => prev === "modal" ? "panel" : "modal");
  }
  const patientName = hookPatientName || context?.patientName || "";
  const assessmentData = detail || null;
  const selectedSummary = assessments.find((a3) => a3.id === selectedAssessmentId);
  const assessmentLabel = cleanAssessmentType2(
    assessmentData?.assessmentType || assessmentData?.type || selectedSummary?.type
  ) || "";
  const ardDate = assessmentData?.ardDate || selectedSummary?.ardDate ? formatArdDate(assessmentData?.ardDate || selectedSummary?.ardDate) : "";
  const isLoading = loading || detailLoading;
  const backdropClass = isPanel ? "pdpm-an__panel-backdrop" : "pdpm-an__overlay";
  const containerClass = (isPanel ? "pdpm-an__panel" : "pdpm-an__modal") + (isSplitView ? " pdpm-an--split" : "");
  return /* @__PURE__ */ u3("div", { class: backdropClass, onClick: handleBackdropClick, children: /* @__PURE__ */ u3("div", { class: containerClass, role: "dialog", "aria-modal": isPanel ? "false" : "true", "aria-label": "PDPM Analyzer", children: [
    /* @__PURE__ */ u3("div", { class: "pdpm-an__header", children: [
      /* @__PURE__ */ u3("div", { class: "pdpm-an__header-left", children: [
        /* @__PURE__ */ u3("button", { class: "pdpm-an__back-btn", onClick: openCommandCenter, children: [
          "\u2190",
          " Command Center"
        ] }),
        /* @__PURE__ */ u3("div", { class: "pdpm-an__patient-info", children: [
          patientName && /* @__PURE__ */ u3("span", { class: "pdpm-an__patient-name", children: patientName }),
          assessmentLabel && /* @__PURE__ */ u3("span", { class: "pdpm-an__assessment-label", children: assessmentLabel }),
          ardDate && /* @__PURE__ */ u3("span", { class: "pdpm-an__ard-date", children: [
            "ARD ",
            ardDate
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "pdpm-an__header-right", children: [
        /* @__PURE__ */ u3(
          AssessmentSelector,
          {
            assessments,
            selectedId: selectedAssessmentId,
            onChange: (id) => {
              setSelectedAssessmentId(id);
              setDetailItem(null);
            }
          }
        ),
        /* @__PURE__ */ u3(ModeToggleButton, { mode, onToggle: toggleMode }),
        /* @__PURE__ */ u3("button", { class: "pdpm-an__close-btn", onClick: onClose, "aria-label": "Close", children: "\u2715" })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { class: "pdpm-an__body", children: [
      isLoading && /* @__PURE__ */ u3(LoadingState2, {}),
      !isLoading && error && /* @__PURE__ */ u3(ErrorState2, { message: error, onRetry: detail ? retryDetail : retry }),
      !isLoading && !error && (detailItem ? /* @__PURE__ */ u3(
        ItemDetailView,
        {
          item: detailItem.item,
          context: { ...context, assessmentId: selectedAssessmentId || context?.assessmentId, patientName },
          onBack: () => {
            setDetailItem(null);
            setIsSplitView(false);
          },
          onSplitChange: setIsSplitView,
          onDismiss: () => {
            setDetailItem(null);
            setIsSplitView(false);
          }
        }
      ) : /* @__PURE__ */ u3(
        AssessmentView,
        {
          assessmentData,
          patientId: context?.patientId,
          onItemClick: (d3) => setDetailItem({ type: "detection", item: d3 }),
          onQueryClick: (q3) => {
            const enriched = {
              ...q3,
              patientName: q3.patientName || patientName,
              locationName: q3.locationName || context?.facilityName || ""
            };
            window.QueryDetailModal?.show(enriched, null, { showPdfButton: q3.hasPdf ?? false });
          }
        }
      ))
    ] })
  ] }) });
}

// content/modules/query-items/hooks/useQueryItems.js
function useQueryItems({ patientId, facilityName, orgSlug, assessmentId }) {
  const [items, setItems] = d2([]);
  const [assessment, setAssessment] = d2(null);
  const [summary, setSummary] = d2(null);
  const [pdpmData, setPdpmData] = d2(null);
  const [loading, setLoading] = d2(true);
  const [error, setError] = d2(null);
  const fetchData = q2(async () => {
    setLoading(true);
    setError(null);
    try {
      const qiParams = new URLSearchParams({
        patientId,
        facilityName,
        orgSlug
      });
      if (assessmentId) qiParams.set("externalAssessmentId", assessmentId);
      const qiResponse = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/queryable-items?${qiParams}`
      });
      if (!qiResponse.success) {
        throw new Error(qiResponse.error || "Failed to fetch queryable items");
      }
      const qiData = qiResponse.data || {};
      const resolvedAssessmentId = assessmentId || qiData.assessment?.externalAssessmentId || null;
      let pdpm = {};
      if (resolvedAssessmentId) {
        const pdpmParams = new URLSearchParams({
          facilityName,
          orgSlug,
          externalAssessmentId: resolvedAssessmentId
        });
        const pdpmResponse = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${pdpmParams}`
        });
        pdpm = pdpmResponse.success ? pdpmResponse.data || {} : {};
      }
      const pdpmImpactMap = {};
      if (pdpm.enhancedDetections) {
        for (const det of pdpm.enhancedDetections) {
          pdpmImpactMap[det.mdsItem] = {
            wouldChangeHipps: det.wouldChangeHipps,
            impact: det.impact
          };
        }
      }
      if (pdpm.outstandingQueries) {
        for (const q3 of pdpm.outstandingQueries) {
          if (q3.pdpmImpact) {
            pdpmImpactMap[q3.mdsItem] = {
              wouldChangeHipps: q3.pdpmImpact.wouldChangeHipps,
              impact: q3.pdpmImpact.componentImpacts || q3.pdpmImpact
            };
          }
        }
      }
      const rawItems = qiData.items || [];
      const mergedItems = rawItems.map((item) => ({
        ...item,
        pdpmImpact: pdpmImpactMap[item.mdsItem] || null
      }));
      setItems(mergedItems);
      setAssessment(qiData.assessment || pdpm.assessment || null);
      setSummary(qiData.summary || null);
      setPdpmData({
        currentHipps: pdpm.summary?.currentHipps || pdpm.calculation?.hippsCode || null,
        potentialHipps: pdpm.summary?.potentialHippsIfCoded || null,
        hasImprovements: pdpm.summary?.hasImprovements || false,
        calculation: pdpm.calculation || null,
        enhancedDetections: pdpm.enhancedDetections || []
      });
    } catch (err) {
      console.error("[QueryItems] Failed to fetch data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [patientId, facilityName, orgSlug, assessmentId]);
  y2(() => {
    if (patientId && facilityName && orgSlug) {
      fetchData();
    } else {
      setLoading(false);
      setError("Missing required context (patient, facility, or organization).");
    }
  }, [fetchData]);
  return {
    items,
    setItems,
    assessment,
    summary,
    pdpmData,
    loading,
    error,
    retry: fetchData
  };
}

// content/modules/query-items/hooks/useBatchSelection.js
function useBatchSelection(items, dismissedItems) {
  const [selectedIds, setSelectedIds] = d2(/* @__PURE__ */ new Set());
  const selectableItems = T2(() => {
    return items.filter(
      (item) => !item.existingQuery && !dismissedItems.has(item.mdsItem)
    );
  }, [items, dismissedItems]);
  const toggle = q2((mdsItem) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(mdsItem)) {
        next.delete(mdsItem);
      } else {
        next.add(mdsItem);
      }
      return next;
    });
  }, []);
  const selectAllQueryable = q2(() => {
    const queryableIds = selectableItems.filter((item) => item.solverStatus === "needs_physician_query").map((item) => item.mdsItem);
    setSelectedIds(new Set(queryableIds));
  }, [selectableItems]);
  const deselectAll = q2(() => {
    setSelectedIds(/* @__PURE__ */ new Set());
  }, []);
  const isSelected = q2((mdsItem) => {
    return selectedIds.has(mdsItem);
  }, [selectedIds]);
  const selectedItems = T2(() => {
    return items.filter((item) => selectedIds.has(item.mdsItem));
  }, [items, selectedIds]);
  return {
    selectedIds,
    selectedItems,
    selectedCount: selectedIds.size,
    selectableCount: selectableItems.length,
    toggle,
    selectAllQueryable,
    deselectAll,
    isSelected
  };
}

// content/modules/query-items/hooks/useBatchQuery.js
function useBatchQuery({ patientId, facilityName, orgSlug, assessmentId, onComplete }) {
  const [state, setState] = d2("idle");
  const [generatedQueries, setGeneratedQueries] = d2([]);
  const [practitioners, setPractitioners] = d2([]);
  const [selectedPractitionerId, setSelectedPractitionerId] = d2(null);
  const [progress, setProgress] = d2({ current: 0, total: 0 });
  const [error, setError] = d2(null);
  const abortRef = A2(false);
  const generate = q2(async (selectedItems) => {
    if (selectedItems.length === 0) return;
    setState("generating");
    setError(null);
    setProgress({ current: 0, total: selectedItems.length });
    abortRef.current = false;
    const results = [];
    try {
      const practitionersPromise = window.QueryAPI.fetchPractitioners(facilityName, orgSlug);
      for (let i3 = 0; i3 < selectedItems.length; i3++) {
        if (abortRef.current) break;
        const item = selectedItems[i3];
        const itemName = item.pdpmCategoryName || item.mdsItemName || item.mdsItem;
        setProgress({ current: i3, total: selectedItems.length, currentItemName: itemName });
        try {
          const noteData = await window.QueryAPI.generateNote(
            item.mdsItem,
            item
          );
          results.push({
            item,
            noteText: noteData.note,
            preferredIcd10: noteData.preferredIcd10,
            icd10Options: noteData.icd10Options
          });
        } catch (err) {
          console.error(`[BatchQuery] Failed to generate note for ${item.mdsItem}:`, err);
          results.push({
            item,
            noteText: "",
            error: err.message
          });
        }
      }
      setProgress({ current: selectedItems.length, total: selectedItems.length });
      try {
        const practList = await practitionersPromise;
        setPractitioners(practList);
      } catch (err) {
        console.error("[BatchQuery] Failed to fetch practitioners:", err);
        setPractitioners([]);
      }
      const successfulResults = results.filter((r3) => r3.noteText);
      setGeneratedQueries(successfulResults);
      if (successfulResults.length === 0) {
        setError("Failed to generate any notes. Please try again.");
        setState("idle");
      } else {
        setState("reviewing");
      }
    } catch (err) {
      console.error("[BatchQuery] Generation failed:", err);
      setError(err.message);
      setState("idle");
    }
  }, [patientId, facilityName, orgSlug, assessmentId]);
  const updateNote = q2((mdsItem, newNote) => {
    setGeneratedQueries(
      (prev) => prev.map(
        (gq) => gq.item.mdsItem === mdsItem ? { ...gq, noteText: newNote } : gq
      )
    );
  }, []);
  const updateIcd10 = q2((mdsItem, icd10Code) => {
    setGeneratedQueries(
      (prev) => prev.map(
        (gq) => gq.item.mdsItem === mdsItem ? { ...gq, selectedIcd10: icd10Code } : gq
      )
    );
  }, []);
  const sendAll = q2(async () => {
    if (!selectedPractitionerId || generatedQueries.length === 0) return;
    setState("sending");
    setError(null);
    setProgress({ current: 0, total: generatedQueries.length });
    abortRef.current = false;
    const sentQueries = [];
    try {
      for (let i3 = 0; i3 < generatedQueries.length; i3++) {
        if (abortRef.current) break;
        const { item, noteText, selectedIcd10, preferredIcd10 } = generatedQueries[i3];
        setProgress({ current: i3, total: generatedQueries.length });
        const icd10Code = selectedIcd10 || preferredIcd10?.code || null;
        const recommendedIcd10 = icd10Code ? [{ code: icd10Code }] : item.recommendedIcd10 || [];
        try {
          const { query } = await window.QueryAPI.createQuery({
            patientId,
            facilityName,
            orgSlug,
            mdsAssessmentId: assessmentId,
            mdsItem: item.mdsItem,
            mdsItemName: item.pdpmCategoryName || item.mdsItemName || item.mdsItem,
            queryReason: item.rationale || "",
            keyFindings: item.keyFindings || [],
            queryEvidence: item.queryEvidence || item.evidence || [],
            recommendedIcd10,
            aiGeneratedNote: noteText
          });
          await window.QueryAPI.sendQuery(
            query.id,
            [selectedPractitionerId],
            noteText
          );
          sentQueries.push({ ...query, mdsItem: item.mdsItem });
        } catch (err) {
          console.error(`[BatchQuery] Failed to create/send query for ${item.mdsItem}:`, err);
        }
      }
      setProgress({ current: generatedQueries.length, total: generatedQueries.length });
      setState("complete");
      if (onComplete) {
        const practitioner = practitioners.find((p3) => p3.id === selectedPractitionerId);
        const practitionerName = practitioner ? practitioner.firstName && practitioner.lastName ? `${practitioner.firstName} ${practitioner.lastName}${practitioner.title ? `, ${practitioner.title}` : ""}` : practitioner.name || "Provider" : "Provider";
        onComplete(sentQueries, practitionerName);
      }
    } catch (err) {
      console.error("[BatchQuery] Send failed:", err);
      setError(err.message);
      setState("reviewing");
    }
  }, [patientId, facilityName, orgSlug, assessmentId, generatedQueries, selectedPractitionerId, practitioners, onComplete]);
  const backToSelection = q2(() => {
    setState("idle");
    setGeneratedQueries([]);
    setProgress({ current: 0, total: 0 });
  }, []);
  const reset = q2(() => {
    setState("idle");
    setGeneratedQueries([]);
    setPractitioners([]);
    setSelectedPractitionerId(null);
    setProgress({ current: 0, total: 0 });
    setError(null);
    abortRef.current = false;
  }, []);
  const abort = q2(() => {
    abortRef.current = true;
  }, []);
  return {
    state,
    generatedQueries,
    practitioners,
    selectedPractitionerId,
    setSelectedPractitionerId,
    progress,
    error,
    generate,
    updateNote,
    updateIcd10,
    sendAll,
    backToSelection,
    reset,
    abort
  };
}

// content/modules/query-items/components/QueryItemsHeader.jsx
var QueryItemsHeader = ({ assessment, summary, pdpmData }) => {
  const calc = pdpmData?.calculation;
  const hasImprovement = pdpmData?.hasImprovements && pdpmData.potentialHipps && pdpmData.potentialHipps !== pdpmData.currentHipps;
  const componentChanges = buildComponentChanges(pdpmData);
  return /* @__PURE__ */ u3("div", { className: "query-items__header", children: [
    /* @__PURE__ */ u3("div", { className: "query-items__header-top", children: [
      /* @__PURE__ */ u3("div", { className: "query-items__assessment-info", children: assessment && /* @__PURE__ */ u3(k, { children: [
        /* @__PURE__ */ u3("strong", { children: assessment.description || "Assessment" }),
        assessment.ardDate && /* @__PURE__ */ u3("span", { children: [
          " \xB7 ARD: ",
          formatDate(assessment.ardDate)
        ] })
      ] }) }),
      pdpmData && pdpmData.currentHipps && /* @__PURE__ */ u3("div", { className: "query-items__hipps", children: [
        /* @__PURE__ */ u3("span", { className: "query-items__hipps-current", children: pdpmData.currentHipps }),
        hasImprovement ? /* @__PURE__ */ u3(k, { children: [
          /* @__PURE__ */ u3("span", { className: "query-items__hipps-arrow", children: "\u2192" }),
          /* @__PURE__ */ u3("span", { className: "query-items__hipps-potential", children: pdpmData.potentialHipps })
        ] }) : /* @__PURE__ */ u3("span", { className: "query-items__hipps-same", children: "No change" })
      ] })
    ] }),
    calc && /* @__PURE__ */ u3("div", { className: "query-items__components", children: [
      /* @__PURE__ */ u3(ComponentPill, { label: "PT/OT", current: calc.ptot, change: componentChanges.ptot }),
      /* @__PURE__ */ u3(ComponentPill, { label: "SLP", current: calc.slp, change: componentChanges.slp }),
      /* @__PURE__ */ u3(ComponentPill, { label: "Nursing", current: calc.nursing, change: componentChanges.nursing }),
      /* @__PURE__ */ u3(ComponentPill, { label: "NTA", current: calc.nta, change: componentChanges.nta })
    ] }),
    summary && /* @__PURE__ */ u3("div", { className: "query-items__summary", children: [
      /* @__PURE__ */ u3("div", { className: "query-items__summary-stat", children: [
        /* @__PURE__ */ u3("span", { className: "query-items__summary-count query-items__summary-count--query", children: summary.needsPhysicianQuery || 0 }),
        /* @__PURE__ */ u3("span", { children: "Query Recommended" })
      ] }),
      /* @__PURE__ */ u3("div", { className: "query-items__summary-stat", children: [
        /* @__PURE__ */ u3("span", { className: "query-items__summary-count query-items__summary-count--coded", children: summary.coded || 0 }),
        /* @__PURE__ */ u3("span", { children: "Coded" })
      ] }),
      /* @__PURE__ */ u3("div", { className: "query-items__summary-stat", children: [
        /* @__PURE__ */ u3("span", { className: "query-items__summary-count query-items__summary-count--review", children: summary.needsReview || 0 }),
        /* @__PURE__ */ u3("span", { children: "Needs Review" })
      ] })
    ] })
  ] });
};
var ComponentPill = ({ label, current, change }) => {
  if (!current) return null;
  const hasChange = change && change.to && change.to !== current;
  return /* @__PURE__ */ u3("div", { className: `query-items__component${hasChange ? " query-items__component--has-change" : ""}`, children: [
    /* @__PURE__ */ u3("span", { className: "query-items__component-label", children: label }),
    /* @__PURE__ */ u3("span", { className: "query-items__component-value", children: current }),
    hasChange && /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3("span", { className: "query-items__component-arrow", children: "\u2192" }),
      /* @__PURE__ */ u3("span", { className: "query-items__component-new", children: change.to })
    ] })
  ] });
};
function buildComponentChanges(pdpmData) {
  const changes = { ptot: null, slp: null, nursing: null, nta: null };
  if (!pdpmData?.enhancedDetections) return changes;
  for (const det of pdpmData.enhancedDetections) {
    if (!det.impact) continue;
    if (det.impact.ptot?.wouldChangeGroup && !changes.ptot) {
      changes.ptot = { to: det.impact.ptot.newGroup };
    }
    if (det.impact.slp?.wouldChangeGroup && !changes.slp) {
      changes.slp = { to: det.impact.slp.newGroup };
    }
    if (det.impact.nursing?.wouldChangeGroup && !changes.nursing) {
      changes.nursing = { to: det.impact.nursing.newPaymentGroup };
    }
    if (det.impact.nta?.wouldChangeLevel && !changes.nta) {
      changes.nta = { to: det.impact.nta.newLevel };
    }
  }
  return changes;
}
function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const d3 = new Date(dateStr);
    return `${d3.getMonth() + 1}/${d3.getDate()}/${d3.getFullYear()}`;
  } catch {
    return dateStr;
  }
}

// content/modules/query-items/components/ItemSidebar.jsx
var SidebarItem = ({ item, isActive, isChecked, onSelect, onToggleCheck }) => {
  const name = item.pdpmCategoryName || item.mdsItemName || item.mdsItem;
  const isQueryRecommended = item.solverStatus === "needs_physician_query";
  const hasExistingQuery = !!item.existingQuery;
  const handleCheck = (e3) => {
    e3.stopPropagation();
    if (!hasExistingQuery) {
      onToggleCheck(item.mdsItem);
    }
  };
  return /* @__PURE__ */ u3(
    "div",
    {
      className: `qi-sidebar__item${isActive ? " qi-sidebar__item--active" : ""}${isQueryRecommended ? " qi-sidebar__item--query" : ""}`,
      onClick: () => onSelect(item.mdsItem),
      children: [
        /* @__PURE__ */ u3("div", { className: "qi-sidebar__item-check", onClick: handleCheck, children: /* @__PURE__ */ u3(
          "input",
          {
            type: "checkbox",
            checked: isChecked,
            disabled: hasExistingQuery,
            readOnly: true
          }
        ) }),
        /* @__PURE__ */ u3("div", { className: "qi-sidebar__item-info", children: [
          /* @__PURE__ */ u3("div", { className: "qi-sidebar__item-name", children: name }),
          /* @__PURE__ */ u3("div", { className: "qi-sidebar__item-meta", children: [
            /* @__PURE__ */ u3("span", { className: "qi-sidebar__item-code", children: item.mdsItem }),
            item.pdpmComponent && /* @__PURE__ */ u3("span", { className: "qi-sidebar__item-component", children: item.pdpmComponent })
          ] }),
          /* @__PURE__ */ u3("div", { className: "qi-sidebar__item-steps", children: [
            item.diagnosisSummary !== void 0 && /* @__PURE__ */ u3("span", { className: `qi-sidebar__step qi-sidebar__step--${item.diagnosisPassed ? "pass" : "fail"}`, children: [
              item.diagnosisPassed ? "\u2713" : "\u2717",
              " Dx"
            ] }),
            item.treatmentSummary !== void 0 && /* @__PURE__ */ u3("span", { className: `qi-sidebar__step qi-sidebar__step--${item.activeStatusPassed ? "pass" : "fail"}`, children: [
              item.activeStatusPassed ? "\u2713" : "\u2717",
              " Tx"
            ] }),
            item.existingQuery && /* @__PURE__ */ u3("span", { className: `qi-sidebar__query-pill qi-sidebar__query-pill--${item.existingQuery.status}`, children: item.existingQuery.status })
          ] })
        ] })
      ]
    }
  );
};
var ItemSidebar = ({ items, activeItem, onSelect, isChecked, onToggleCheck, dismissedItems }) => {
  const { queryItems, onMdsItems, canCodeItems, reviewItems } = T2(() => {
    const query = [];
    const onMds = [];
    const canCode = [];
    const review = [];
    for (const item of items) {
      if (dismissedItems.has(item.mdsItem)) continue;
      if (item.solverStatus === "needs_physician_query") {
        query.push(item);
      } else if (item.solverStatus === "needs_review") {
        review.push(item);
      } else if (item.codedOnMds) {
        onMds.push(item);
      } else {
        canCode.push(item);
      }
    }
    return { queryItems: query, onMdsItems: onMds, canCodeItems: canCode, reviewItems: review };
  }, [items, dismissedItems]);
  return /* @__PURE__ */ u3("div", { className: "qi-sidebar", children: [
    queryItems.length > 0 && /* @__PURE__ */ u3("div", { className: "qi-sidebar__group", children: [
      /* @__PURE__ */ u3("div", { className: "qi-sidebar__group-header qi-sidebar__group-header--query", children: [
        /* @__PURE__ */ u3("span", { children: "Needs Query" }),
        /* @__PURE__ */ u3("span", { className: "qi-sidebar__group-count", children: queryItems.length })
      ] }),
      queryItems.map((item) => /* @__PURE__ */ u3(
        SidebarItem,
        {
          item,
          isActive: activeItem === item.mdsItem,
          isChecked: isChecked(item.mdsItem),
          onSelect,
          onToggleCheck
        },
        item.mdsItem
      ))
    ] }),
    canCodeItems.length > 0 && /* @__PURE__ */ u3("div", { className: "qi-sidebar__group", children: [
      /* @__PURE__ */ u3("div", { className: "qi-sidebar__group-header qi-sidebar__group-header--can-code", children: [
        /* @__PURE__ */ u3("span", { children: "Can Code" }),
        /* @__PURE__ */ u3("span", { className: "qi-sidebar__group-count", children: canCodeItems.length })
      ] }),
      canCodeItems.map((item) => /* @__PURE__ */ u3(
        SidebarItem,
        {
          item,
          isActive: activeItem === item.mdsItem,
          isChecked: isChecked(item.mdsItem),
          onSelect,
          onToggleCheck
        },
        item.mdsItem
      ))
    ] }),
    reviewItems.length > 0 && /* @__PURE__ */ u3("div", { className: "qi-sidebar__group", children: [
      /* @__PURE__ */ u3("div", { className: "qi-sidebar__group-header qi-sidebar__group-header--review", children: [
        /* @__PURE__ */ u3("span", { children: "Needs Review" }),
        /* @__PURE__ */ u3("span", { className: "qi-sidebar__group-count", children: reviewItems.length })
      ] }),
      reviewItems.map((item) => /* @__PURE__ */ u3(
        SidebarItem,
        {
          item,
          isActive: activeItem === item.mdsItem,
          isChecked: isChecked(item.mdsItem),
          onSelect,
          onToggleCheck
        },
        item.mdsItem
      ))
    ] }),
    onMdsItems.length > 0 && /* @__PURE__ */ u3("div", { className: "qi-sidebar__group", children: [
      /* @__PURE__ */ u3("div", { className: "qi-sidebar__group-header qi-sidebar__group-header--on-mds", children: [
        /* @__PURE__ */ u3("span", { children: "On MDS" }),
        /* @__PURE__ */ u3("span", { className: "qi-sidebar__group-count", children: onMdsItems.length })
      ] }),
      onMdsItems.map((item) => /* @__PURE__ */ u3(
        SidebarItem,
        {
          item,
          isActive: activeItem === item.mdsItem,
          isChecked: isChecked(item.mdsItem),
          onSelect,
          onToggleCheck
        },
        item.mdsItem
      ))
    ] })
  ] });
};

// content/modules/query-items/components/StatusBadge.jsx
var StatusBadge = ({ status }) => {
  const labels = {
    code: "Can Code",
    coded: "Can Code",
    needs_physician_query: "Query Recommended",
    needs_review: "Needs Review"
  };
  const label = labels[status] || status;
  return /* @__PURE__ */ u3("span", { className: `query-items__status-badge query-items__status-badge--${status}`, children: label });
};

// content/modules/query-items/components/PdpmImpactBadge.jsx
var PdpmImpactBadge = ({ pdpmImpact }) => {
  if (!pdpmImpact || !pdpmImpact.impact) return null;
  const { impact } = pdpmImpact;
  const changes = [];
  if (impact.nta?.wouldChangeLevel) {
    changes.push({ label: "NTA", from: impact.nta.currentLevel, to: impact.nta.newLevel });
  }
  if (impact.slp?.wouldChangeGroup) {
    changes.push({ label: "SLP", from: impact.slp.currentGroup, to: impact.slp.newGroup });
  }
  if (impact.nursing?.wouldChangeGroup) {
    changes.push({ label: "Nursing", from: impact.nursing.currentPaymentGroup, to: impact.nursing.newPaymentGroup });
  }
  if (impact.ptot?.wouldChangeGroup) {
    changes.push({ label: "PT/OT", from: impact.ptot.currentGroup, to: impact.ptot.newGroup });
  }
  if (changes.length === 0) return null;
  return /* @__PURE__ */ u3(k, { children: changes.map((change, i3) => /* @__PURE__ */ u3("span", { className: "query-items__pdpm-badge", children: [
    change.label,
    ": ",
    change.from || "?",
    /* @__PURE__ */ u3("span", { className: "query-items__pdpm-arrow", children: "\u2192" }),
    /* @__PURE__ */ u3("span", { className: "query-items__pdpm-new", children: change.to || "?" })
  ] }, i3)) });
};

// content/modules/query-items/components/EvidenceDetailPanel.jsx
function getQuoteText(ev) {
  return ev.quoteText || ev.quote || ev.orderDescription || ev.findingText || ev.text || "";
}
function inferSourceType2(ev) {
  if (ev.sourceType) return ev.sourceType;
  const eid = ev.evidenceId || "";
  if (eid.startsWith("therapy-doc-")) return "therapy-doc";
  if (eid.startsWith("pcc-prognote-") || eid.startsWith("patient-practnote-")) return "progress-note";
  if (eid.startsWith("order-")) return "order";
  if (eid.startsWith("lab-")) return "lab-result";
  if (eid.startsWith("mar-")) return "mar";
  const evType = ev.type || "";
  if (evType === "clinical_note") return "progress-note";
  if (evType === "therapy_document") return "therapy-doc";
  if (evType === "order") return "order";
  if (evType === "lab_result") return "lab-result";
  if (evType === "document") return "document";
  const name = (ev.displayName || "").toLowerCase();
  if (name.includes("therapy") || name.includes("eval")) return "therapy-doc";
  if (name.includes("lab")) return "lab-result";
  if (name.includes("order")) return "order";
  return "document";
}
var SOURCE_TYPE_LABELS = {
  "progress-note": "Progress Note",
  "therapy-doc": "Therapy Doc",
  "order": "Order",
  "lab-result": "Lab Result",
  "nursing-note": "Nursing Note",
  "vital-signs": "Vitals",
  "mar": "MAR",
  "document": "Document"
};
function isViewable(ev) {
  if (typeof window.parseEvidenceForViewer === "function") {
    const { viewerType } = window.parseEvidenceForViewer(ev);
    return !!viewerType;
  }
  return false;
}
function openEvidenceViewer(ev) {
  if (typeof window.parseEvidenceForViewer !== "function") return;
  const { viewerType, id } = window.parseEvidenceForViewer(ev);
  if (!viewerType || !id) return;
  const quote = getQuoteText(ev);
  const wordBlocks = ev.wordBlocks || null;
  if (viewerType === "clinical-note" && typeof window.showClinicalNoteModal === "function") {
    window.showClinicalNoteModal(id);
  } else if (viewerType === "therapy-document" && typeof window.showTherapyDocModal === "function") {
    window.showTherapyDocModal(id, quote);
  } else if (viewerType === "document" && typeof window.showDocumentModal === "function") {
    window.showDocumentModal(id, wordBlocks);
  }
}
var EvidenceCard2 = ({ ev }) => {
  const sourceType = inferSourceType2(ev);
  const label = ev.displayName || SOURCE_TYPE_LABELS[sourceType] || "Evidence";
  const quote = getQuoteText(ev);
  const viewable = isViewable(ev);
  const date = ev.date || ev.serviceDate || "";
  return /* @__PURE__ */ u3(
    "div",
    {
      className: `qi-detail__evidence-card${viewable ? " qi-detail__evidence-card--viewable" : ""}`,
      onClick: viewable ? () => openEvidenceViewer(ev) : void 0,
      children: [
        /* @__PURE__ */ u3("div", { className: "qi-detail__evidence-card-header", children: [
          /* @__PURE__ */ u3("span", { className: `qi-detail__evidence-type qi-detail__evidence-type--${sourceType}`, children: label }),
          date && /* @__PURE__ */ u3("span", { className: "qi-detail__evidence-date", children: date }),
          viewable && /* @__PURE__ */ u3("span", { className: "qi-detail__evidence-view-link", children: [
            "View",
            /* @__PURE__ */ u3("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ u3("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
              /* @__PURE__ */ u3("polyline", { points: "15 3 21 3 21 9" }),
              /* @__PURE__ */ u3("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
            ] })
          ] })
        ] }),
        quote && /* @__PURE__ */ u3("div", { className: "qi-detail__evidence-quote", children: quote }),
        ev.rationale && /* @__PURE__ */ u3("div", { className: "qi-detail__evidence-rationale", children: ev.rationale })
      ]
    }
  );
};
var EvidenceDetailPanel = ({ item }) => {
  if (!item) {
    return /* @__PURE__ */ u3("div", { className: "qi-detail qi-detail--empty", children: [
      /* @__PURE__ */ u3("div", { className: "qi-detail__empty-icon", children: /* @__PURE__ */ u3("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ u3("path", { d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" }) }) }),
      /* @__PURE__ */ u3("div", { className: "qi-detail__empty-text", children: "Select an item to view evidence" })
    ] });
  }
  const name = item.pdpmCategoryName || item.mdsItemName || item.mdsItem;
  const isQueryRecommended = item.solverStatus === "needs_physician_query";
  const queryEvidence = item.queryEvidence || [];
  const generalEvidence = item.evidence || [];
  const evidenceByRole = {};
  for (const ev of generalEvidence) {
    const role = ev.evidenceRole || "supporting";
    if (!evidenceByRole[role]) evidenceByRole[role] = [];
    evidenceByRole[role].push(ev);
  }
  const roleLabels = {
    diagnosis: "Step 1: Diagnosis",
    active_treatment: "Step 2: Active Treatment",
    supporting: "Supporting Evidence"
  };
  const roleOrder = ["diagnosis", "active_treatment", "supporting"];
  return /* @__PURE__ */ u3("div", { className: "qi-detail", children: [
    /* @__PURE__ */ u3("div", { className: "qi-detail__header", children: [
      /* @__PURE__ */ u3("div", { className: "qi-detail__header-top", children: [
        /* @__PURE__ */ u3("h2", { className: "qi-detail__name", children: name }),
        /* @__PURE__ */ u3(StatusBadge, { status: item.solverStatus })
      ] }),
      /* @__PURE__ */ u3("div", { className: "qi-detail__header-meta", children: [
        /* @__PURE__ */ u3("span", { className: "qi-detail__code", children: item.mdsItem }),
        item.pdpmComponent && /* @__PURE__ */ u3("span", { className: "qi-detail__component", children: item.pdpmComponent }),
        /* @__PURE__ */ u3(PdpmImpactBadge, { pdpmImpact: item.pdpmImpact }),
        item.codedOnMds && /* @__PURE__ */ u3("span", { className: "qi-detail__coded-badge", children: "On MDS" })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "qi-detail__content", children: [
      (item.diagnosisSummary || item.treatmentSummary) && /* @__PURE__ */ u3("div", { className: "qi-detail__steps", children: [
        item.diagnosisSummary && /* @__PURE__ */ u3("div", { className: `qi-detail__step qi-detail__step--${item.diagnosisPassed ? "pass" : "fail"}`, children: [
          /* @__PURE__ */ u3("span", { className: "qi-detail__step-icon", children: item.diagnosisPassed ? "\u2713" : "\u2717" }),
          /* @__PURE__ */ u3("div", { className: "qi-detail__step-body", children: [
            /* @__PURE__ */ u3("div", { className: "qi-detail__step-label", children: "Step 1: Diagnosis" }),
            /* @__PURE__ */ u3("div", { className: "qi-detail__step-text", children: item.diagnosisSummary })
          ] })
        ] }),
        item.treatmentSummary && /* @__PURE__ */ u3("div", { className: `qi-detail__step qi-detail__step--${item.activeStatusPassed ? "pass" : "fail"}`, children: [
          /* @__PURE__ */ u3("span", { className: "qi-detail__step-icon", children: item.activeStatusPassed ? "\u2713" : "\u2717" }),
          /* @__PURE__ */ u3("div", { className: "qi-detail__step-body", children: [
            /* @__PURE__ */ u3("div", { className: "qi-detail__step-label", children: "Step 2: Active Treatment" }),
            /* @__PURE__ */ u3("div", { className: "qi-detail__step-text", children: item.treatmentSummary })
          ] })
        ] })
      ] }),
      isQueryRecommended && !item.diagnosisSummary && item.rationale && /* @__PURE__ */ u3("div", { className: "qi-detail__rationale", children: [
        /* @__PURE__ */ u3("div", { className: "qi-detail__section-label", children: "Rationale" }),
        /* @__PURE__ */ u3("p", { children: item.rationale })
      ] }),
      item.keyFindings && item.keyFindings.length > 0 && /* @__PURE__ */ u3("div", { className: "qi-detail__findings", children: [
        /* @__PURE__ */ u3("div", { className: "qi-detail__section-label", children: "Key Findings" }),
        /* @__PURE__ */ u3("ul", { className: "qi-detail__findings-list", children: item.keyFindings.map((finding, i3) => /* @__PURE__ */ u3("li", { children: typeof finding === "string" ? finding : finding.text || finding.finding || JSON.stringify(finding) }, i3)) })
      ] }),
      queryEvidence.length > 0 && /* @__PURE__ */ u3("div", { className: "qi-detail__evidence-section", children: [
        /* @__PURE__ */ u3("div", { className: "qi-detail__section-label", children: [
          "Query Evidence",
          /* @__PURE__ */ u3("span", { className: "qi-detail__section-count", children: queryEvidence.length })
        ] }),
        queryEvidence.map((ev, i3) => /* @__PURE__ */ u3(EvidenceCard2, { ev }, i3))
      ] }),
      generalEvidence.length > 0 && /* @__PURE__ */ u3("div", { className: "qi-detail__evidence-section", children: [
        roleOrder.map((role) => {
          const evs = evidenceByRole[role];
          if (!evs || evs.length === 0) return null;
          return /* @__PURE__ */ u3("div", { className: "qi-detail__evidence-group", children: [
            /* @__PURE__ */ u3("div", { className: "qi-detail__section-label", children: [
              roleLabels[role] || role,
              /* @__PURE__ */ u3("span", { className: "qi-detail__section-count", children: evs.length })
            ] }),
            evs.map((ev, i3) => /* @__PURE__ */ u3(EvidenceCard2, { ev }, i3))
          ] }, role);
        }),
        Object.keys(evidenceByRole).filter((r3) => !roleOrder.includes(r3)).map((role) => /* @__PURE__ */ u3("div", { className: "qi-detail__evidence-group", children: [
          /* @__PURE__ */ u3("div", { className: "qi-detail__section-label", children: role }),
          evidenceByRole[role].map((ev, i3) => /* @__PURE__ */ u3(EvidenceCard2, { ev }, i3))
        ] }, role))
      ] }),
      item.recommendedIcd10 && item.recommendedIcd10.length > 0 && /* @__PURE__ */ u3("div", { className: "qi-detail__icd10-section", children: [
        /* @__PURE__ */ u3("div", { className: "qi-detail__section-label", children: "Suggested ICD-10 Codes" }),
        /* @__PURE__ */ u3("div", { className: "qi-detail__icd10-codes", children: item.recommendedIcd10.map((code, i3) => /* @__PURE__ */ u3("span", { className: "qi-detail__icd10-code", title: code.description || "", children: [
          code.code || code,
          code.description && /* @__PURE__ */ u3("span", { className: "qi-detail__icd10-desc", children: code.description })
        ] }, i3)) })
      ] })
    ] })
  ] });
};

// content/modules/query-items/components/BatchActionBar.jsx
var BatchActionBar = ({
  selectedCount,
  selectableCount,
  batchState,
  progress,
  onSelectAll,
  onDeselectAll,
  onGenerate
}) => {
  const isIdle = batchState === "idle";
  const isGenerating = batchState === "generating";
  const isSending = batchState === "sending";
  const isWorking = isGenerating || isSending;
  if (selectableCount === 0 && isIdle) {
    return /* @__PURE__ */ u3("div", { className: "query-items__batch-bar query-items__batch-bar--hidden" });
  }
  return /* @__PURE__ */ u3("div", { className: "query-items__batch-bar", children: [
    /* @__PURE__ */ u3("div", { className: "query-items__batch-left", children: [
      isIdle && /* @__PURE__ */ u3(k, { children: [
        /* @__PURE__ */ u3("span", { className: "query-items__batch-count", children: [
          /* @__PURE__ */ u3("span", { children: selectedCount }),
          " of ",
          selectableCount,
          " items selected"
        ] }),
        selectedCount > 0 ? /* @__PURE__ */ u3("button", { className: "query-items__select-all-btn", onClick: onDeselectAll, children: "Deselect all" }) : /* @__PURE__ */ u3("button", { className: "query-items__select-all-btn", onClick: onSelectAll, children: "Select all queryable" })
      ] }),
      isWorking && /* @__PURE__ */ u3("div", { className: "query-items__progress", children: [
        /* @__PURE__ */ u3("div", { className: "query-items__progress-bar", children: /* @__PURE__ */ u3(
          "div",
          {
            className: "query-items__progress-fill",
            style: { width: `${progress.total > 0 ? progress.current / progress.total * 100 : 0}%` }
          }
        ) }),
        /* @__PURE__ */ u3("span", { className: "query-items__progress-text", children: [
          isGenerating ? "Generating" : "Sending",
          " ",
          progress.current,
          "/",
          progress.total,
          "..."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "query-items__batch-right", children: isIdle && /* @__PURE__ */ u3(
      "button",
      {
        className: "query-items__generate-btn",
        disabled: selectedCount === 0,
        onClick: onGenerate,
        children: [
          /* @__PURE__ */ u3("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ u3("path", { d: "M22 2L11 13" }),
            /* @__PURE__ */ u3("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
          ] }),
          "Generate Queries"
        ]
      }
    ) })
  ] });
};

// content/modules/query-items/components/BatchReviewModal.jsx
var BatchReviewPage = ({
  generatedQueries,
  practitioners,
  selectedPractitionerId,
  onSelectPractitioner,
  onUpdateNote,
  onUpdateIcd10,
  onSend,
  onBack,
  isSending,
  progress
}) => {
  const dropdownRef = A2(null);
  const dropdownMounted = A2(false);
  y2(() => {
    if (!dropdownRef.current || practitioners.length === 0 || dropdownMounted.current) return;
    dropdownRef.current.innerHTML = "";
    const items = practitioners.map((p3) => ({
      id: p3.id,
      label: formatPractitionerName(p3),
      subtitle: p3.title || p3.specialty || ""
    }));
    if (typeof window.SuperDropdown?.create === "function") {
      window.SuperDropdown.create(dropdownRef.current, {
        items,
        placeholder: "Select a practitioner...",
        searchPlaceholder: "Search practitioners...",
        onSelect: (item) => {
          onSelectPractitioner(item.id);
        }
      });
      dropdownMounted.current = true;
    } else {
      const select = document.createElement("select");
      select.className = "qr__physician-select-fallback";
      select.style.cssText = "width:100%;padding:10px 12px;border:1px solid #d0d5dd;border-radius:8px;font-size:14px;color:#344054;background:#fff;cursor:pointer;";
      const defaultOpt = document.createElement("option");
      defaultOpt.value = "";
      defaultOpt.textContent = "Select a practitioner...";
      defaultOpt.disabled = true;
      defaultOpt.selected = true;
      select.appendChild(defaultOpt);
      items.forEach((item) => {
        const opt = document.createElement("option");
        opt.value = item.id;
        opt.textContent = item.label + (item.subtitle ? ` \u2014 ${item.subtitle}` : "");
        select.appendChild(opt);
      });
      select.addEventListener("change", (e3) => {
        onSelectPractitioner(e3.target.value);
      });
      dropdownRef.current.appendChild(select);
      dropdownMounted.current = true;
    }
    return () => {
      dropdownMounted.current = false;
    };
  }, [practitioners, onSelectPractitioner]);
  const canSend = selectedPractitionerId && generatedQueries.length > 0 && !isSending;
  return /* @__PURE__ */ u3("div", { className: "qr", children: [
    /* @__PURE__ */ u3("div", { className: "qr__header", children: [
      /* @__PURE__ */ u3("button", { className: "qr__back-btn", onClick: onBack, disabled: isSending, children: [
        /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ u3("polyline", { points: "15 18 9 12 15 6" }) }),
        "Back"
      ] }),
      /* @__PURE__ */ u3("div", { className: "qr__header-center", children: [
        /* @__PURE__ */ u3("h2", { className: "qr__title", children: "Review & Send" }),
        /* @__PURE__ */ u3("span", { className: "qr__badge", children: [
          generatedQueries.length,
          " ",
          generatedQueries.length === 1 ? "Query" : "Queries"
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { className: "qr__header-right", children: [
        isSending && /* @__PURE__ */ u3("div", { className: "qr__sending-status", children: [
          /* @__PURE__ */ u3("div", { className: "qr__sending-spinner" }),
          "Sending ",
          progress.current + 1,
          "/",
          progress.total
        ] }),
        /* @__PURE__ */ u3(
          "button",
          {
            className: "qr__send-btn",
            disabled: !canSend,
            onClick: onSend,
            children: [
              /* @__PURE__ */ u3("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
                /* @__PURE__ */ u3("path", { d: "M22 2L11 13" }),
                /* @__PURE__ */ u3("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
              ] }),
              isSending ? "Sending..." : "Send All"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "qr__physician-bar", children: [
      /* @__PURE__ */ u3("div", { className: "qr__field-label", children: [
        /* @__PURE__ */ u3("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ u3("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
          /* @__PURE__ */ u3("circle", { cx: "12", cy: "7", r: "4" })
        ] }),
        "Physician"
      ] }),
      /* @__PURE__ */ u3("div", { className: "qr__physician-dropdown", ref: dropdownRef })
    ] }),
    /* @__PURE__ */ u3("div", { className: "qr__body", children: generatedQueries.map((gq, idx) => /* @__PURE__ */ u3(
      ReviewCard,
      {
        gq,
        index: idx,
        total: generatedQueries.length,
        onUpdateNote,
        onUpdateIcd10,
        disabled: isSending
      },
      gq.item.mdsItem
    )) })
  ] });
};
var ReviewCard = ({ gq, index, total, onUpdateNote, onUpdateIcd10, disabled }) => {
  const itemName = gq.item.pdpmCategoryName || gq.item.mdsItemName || gq.item.mdsItem;
  const icd10Options = T2(() => {
    const seen = /* @__PURE__ */ new Set();
    const options = [];
    const addOption = (code, description, source) => {
      if (!code || seen.has(code)) return;
      seen.add(code);
      options.push({ code, description: description || "", source });
    };
    if (gq.preferredIcd10) {
      addOption(gq.preferredIcd10.code, gq.preferredIcd10.description, "recommended");
    }
    if (gq.icd10Options) {
      for (const opt of gq.icd10Options) {
        addOption(opt.code, opt.description, "ai");
      }
    }
    if (gq.item.recommendedIcd10) {
      for (const opt of gq.item.recommendedIcd10) {
        addOption(opt.code, opt.description, "item");
      }
    }
    return options;
  }, [gq]);
  const selectedCode = gq.selectedIcd10 || gq.preferredIcd10?.code || "";
  return /* @__PURE__ */ u3("div", { className: "qr__card", children: [
    /* @__PURE__ */ u3("div", { className: "qr__card-header", children: [
      /* @__PURE__ */ u3("span", { className: "qr__card-number", children: index + 1 }),
      /* @__PURE__ */ u3("h3", { className: "qr__card-name", children: itemName }),
      /* @__PURE__ */ u3("span", { className: "qr__card-mds", children: gq.item.mdsItem })
    ] }),
    /* @__PURE__ */ u3("div", { className: "qr__card-body", children: [
      icd10Options.length > 0 && /* @__PURE__ */ u3("div", { className: "qr__field", children: [
        /* @__PURE__ */ u3("div", { className: "qr__field-label", children: [
          /* @__PURE__ */ u3("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ u3("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
            /* @__PURE__ */ u3("polyline", { points: "14 2 14 8 20 8" })
          ] }),
          "ICD-10 Code"
        ] }),
        /* @__PURE__ */ u3(
          "select",
          {
            className: "qr__icd10-select",
            value: selectedCode,
            onChange: (e3) => onUpdateIcd10(gq.item.mdsItem, e3.target.value),
            disabled,
            children: icd10Options.map((opt) => /* @__PURE__ */ u3("option", { value: opt.code, children: [
              opt.code,
              opt.description ? ` \u2014 ${opt.description}` : ""
            ] }, opt.code))
          }
        )
      ] }),
      /* @__PURE__ */ u3("div", { className: "qr__field", children: [
        /* @__PURE__ */ u3("div", { className: "qr__field-label", children: [
          /* @__PURE__ */ u3("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ u3("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
            /* @__PURE__ */ u3("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
          ] }),
          "Query Note"
        ] }),
        /* @__PURE__ */ u3(
          "textarea",
          {
            className: "qr__note-textarea",
            value: gq.noteText,
            onInput: (e3) => onUpdateNote(gq.item.mdsItem, e3.target.value),
            disabled,
            rows: 5
          }
        )
      ] })
    ] }),
    gq.error && /* @__PURE__ */ u3("div", { className: "qr__card-error", children: gq.error })
  ] });
};
function formatPractitionerName(p3) {
  if (p3.firstName && p3.lastName) {
    return `${p3.firstName} ${p3.lastName}${p3.title ? `, ${p3.title}` : ""}`;
  }
  return p3.name || "Unknown";
}

// content/modules/query-items/QueryItemsPage.jsx
var QueryItemsPage = ({
  patientId,
  patientName,
  facilityName,
  orgSlug,
  assessmentId,
  onBack,
  onClose
}) => {
  const [dismissedItems, setDismissedItems] = d2(/* @__PURE__ */ new Set());
  const [activeItem, setActiveItem] = d2(null);
  const [successInfo, setSuccessInfo] = d2(null);
  const {
    items,
    setItems,
    assessment,
    summary,
    pdpmData,
    loading,
    error,
    retry
  } = useQueryItems({ patientId, facilityName, orgSlug, assessmentId });
  const {
    selectedCount,
    selectedItems,
    selectableCount,
    toggle,
    selectAllQueryable,
    deselectAll,
    isSelected
  } = useBatchSelection(items, dismissedItems);
  const batch = useBatchQuery({
    patientId,
    facilityName,
    orgSlug,
    assessmentId,
    onComplete: (sentQueries, practitionerName) => {
      const sentMdsItems = new Set(sentQueries.map((q3) => q3.mdsItem));
      setItems((prev) => prev.map((item) => {
        if (sentMdsItems.has(item.mdsItem)) {
          return {
            ...item,
            existingQuery: { status: "sent", sentAt: (/* @__PURE__ */ new Date()).toISOString() }
          };
        }
        return item;
      }));
      deselectAll();
      setSuccessInfo({ count: sentQueries.length, practitionerName });
      setTimeout(() => setSuccessInfo(null), 3e3);
    }
  });
  y2(() => {
    if (!loading && items.length > 0 && !activeItem) {
      const firstQuery = items.find((i3) => i3.solverStatus === "needs_physician_query");
      setActiveItem(firstQuery ? firstQuery.mdsItem : items[0].mdsItem);
    }
  }, [loading, items]);
  const activeItemData = T2(() => {
    if (!activeItem) return null;
    return items.find((i3) => i3.mdsItem === activeItem) || null;
  }, [activeItem, items]);
  const handleGenerate = q2(() => {
    batch.generate(selectedItems);
  }, [batch, selectedItems]);
  if (loading) {
    return /* @__PURE__ */ u3("div", { className: "query-items", children: /* @__PURE__ */ u3("div", { className: "query-items__skeleton", children: [
      /* @__PURE__ */ u3("div", { className: "query-items__skeleton-header" }),
      /* @__PURE__ */ u3("div", { className: "query-items__skeleton-card" }),
      /* @__PURE__ */ u3("div", { className: "query-items__skeleton-card" }),
      /* @__PURE__ */ u3("div", { className: "query-items__skeleton-card" })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ u3("div", { className: "query-items", children: /* @__PURE__ */ u3("div", { className: "query-items__error", children: [
      /* @__PURE__ */ u3("div", { className: "query-items__error-icon", children: /* @__PURE__ */ u3("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ u3("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        /* @__PURE__ */ u3("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
      ] }) }),
      /* @__PURE__ */ u3("p", { className: "query-items__error-text", children: error }),
      /* @__PURE__ */ u3("button", { className: "query-items__error-retry", onClick: retry, children: "Retry" })
    ] }) });
  }
  if (items.length === 0) {
    return /* @__PURE__ */ u3("div", { className: "query-items", children: /* @__PURE__ */ u3("div", { className: "query-items__empty", children: [
      /* @__PURE__ */ u3("div", { className: "query-items__empty-icon", children: /* @__PURE__ */ u3("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ u3("path", { d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" }),
        /* @__PURE__ */ u3("rect", { x: "9", y: "3", width: "6", height: "4", rx: "2" }),
        /* @__PURE__ */ u3("path", { d: "M9 14l2 2 4-4" })
      ] }) }),
      /* @__PURE__ */ u3("div", { className: "query-items__empty-title", children: "No Queryable Items" }),
      /* @__PURE__ */ u3("p", { className: "query-items__empty-text", children: "All MDS items are either properly coded or don't require physician queries at this time." })
    ] }) });
  }
  const isReviewing = batch.state === "reviewing" || batch.state === "sending";
  return /* @__PURE__ */ u3("div", { className: "query-items", style: { position: "relative" }, children: [
    isReviewing ? (
      /* ── Review & Send page ── */
      /* @__PURE__ */ u3(
        BatchReviewPage,
        {
          generatedQueries: batch.generatedQueries,
          practitioners: batch.practitioners,
          selectedPractitionerId: batch.selectedPractitionerId,
          onSelectPractitioner: batch.setSelectedPractitionerId,
          onUpdateNote: batch.updateNote,
          onUpdateIcd10: batch.updateIcd10,
          onSend: batch.sendAll,
          onBack: batch.backToSelection,
          isSending: batch.state === "sending",
          progress: batch.progress
        }
      )
    ) : (
      /* ── Selection page (split layout) ── */
      /* @__PURE__ */ u3(k, { children: [
        /* @__PURE__ */ u3(
          QueryItemsHeader,
          {
            assessment,
            summary,
            pdpmData
          }
        ),
        /* @__PURE__ */ u3("div", { className: "query-items__split", children: [
          /* @__PURE__ */ u3(
            ItemSidebar,
            {
              items,
              activeItem,
              onSelect: setActiveItem,
              isChecked: isSelected,
              onToggleCheck: toggle,
              dismissedItems
            }
          ),
          /* @__PURE__ */ u3(EvidenceDetailPanel, { item: activeItemData })
        ] }),
        batch.error && /* @__PURE__ */ u3("div", { className: "query-items__batch-error", children: [
          /* @__PURE__ */ u3("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ u3("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
            /* @__PURE__ */ u3("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
          ] }),
          /* @__PURE__ */ u3("span", { children: batch.error }),
          /* @__PURE__ */ u3("button", { onClick: batch.reset, className: "query-items__batch-error-dismiss", children: "\xD7" })
        ] }),
        /* @__PURE__ */ u3(
          BatchActionBar,
          {
            selectedCount,
            selectableCount,
            batchState: batch.state,
            progress: batch.progress,
            onSelectAll: selectAllQueryable,
            onDeselectAll: deselectAll,
            onGenerate: handleGenerate
          }
        ),
        batch.state === "generating" && /* @__PURE__ */ u3("div", { className: "query-items__generating-overlay", children: [
          /* @__PURE__ */ u3("div", { className: "query-items__generating-spinner" }),
          /* @__PURE__ */ u3("div", { className: "query-items__generating-title", children: "Generating Queries..." }),
          /* @__PURE__ */ u3("div", { className: "query-items__generating-progress-text", children: [
            batch.progress.current + 1,
            " of ",
            batch.progress.total
          ] }),
          /* @__PURE__ */ u3("div", { className: "query-items__generating-bar", children: /* @__PURE__ */ u3(
            "div",
            {
              className: "query-items__generating-bar-fill",
              style: { width: `${(batch.progress.current + 1) / batch.progress.total * 100}%` }
            }
          ) }),
          batch.progress.currentItemName && /* @__PURE__ */ u3("div", { className: "query-items__generating-item-name", children: batch.progress.currentItemName })
        ] })
      ] })
    ),
    successInfo && /* @__PURE__ */ u3("div", { className: "query-items__success-overlay", children: [
      /* @__PURE__ */ u3("div", { className: "query-items__success-icon", children: /* @__PURE__ */ u3("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ u3("polyline", { points: "20 6 9 17 4 12" }) }) }),
      /* @__PURE__ */ u3("div", { className: "query-items__success-text", children: [
        successInfo.count,
        " ",
        successInfo.count === 1 ? "Query" : "Queries",
        " Sent"
      ] }),
      /* @__PURE__ */ u3("div", { className: "query-items__success-subtitle", children: [
        "to ",
        successInfo.practitionerName
      ] })
    ] })
  ] });
};

// demo/hooks/useDemoChat.js
var toolCallCounter = 0;
function nextToolCallId() {
  return `demo-tc-${++toolCallCounter}-${Date.now().toString(36)}`;
}
function delay2(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function matchesAny(text, keywords) {
  const lower = text.toLowerCase();
  return keywords.some((kw) => lower.includes(kw));
}
function getScenario(text) {
  if (matchesAny(text, ["malnutrition", "nutrition", "weight loss", "albumin", "aphasia"])) {
    return buildMalnutritionScenario();
  }
  if (matchesAny(text, ["pdpm", "hipps", "opportunities", "reimbursement", "revenue"])) {
    return buildPdpmScenario();
  }
  if (matchesAny(text, ["iv fluid", "iv ", "intravenous", "fluids", "hospital doc"])) {
    return buildIvFluidsScenario();
  }
  if (matchesAny(text, ["medication", "med ", "meds", "drug", "prescription", "taking"])) {
    return buildMedicationsScenario();
  }
  return buildFallbackScenario();
}
function buildMalnutritionScenario() {
  return [
    {
      type: "tool",
      toolName: "searchClinicalNotes",
      input: { keyword: "malnutrition weight loss albumin", noteType: "Nutrition" },
      output: [
        { documentId: "doc-nutr-001", title: "Nutrition Progress Note", date: "2026-01-22", author: "Sarah Kim, RD, LD", snippet: "Moderate protein-calorie malnutrition. Weight loss 12.6% in 3 months. PO intake <50%..." },
        { documentId: "doc-nutr-002", title: "Nutrition Lab Panel", date: "2026-01-20", author: "Lab", snippet: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low)..." },
        { documentId: "doc-nutr-006", title: "Weight Monitoring Flow Sheet", date: "2026-01-22", author: "Nursing", snippet: "Weight trend: 135 \u2192 118 lbs. Total loss: 17 lbs (12.6%)..." }
      ],
      delayMs: 800
    },
    {
      type: "tool",
      toolName: "readDocument",
      input: { documentId: "doc-nutr-001", title: "Nutrition Progress Note" },
      output: {
        documentId: "doc-nutr-001",
        title: "Nutrition Progress Note",
        date: "2026-01-22",
        author: "Sarah Kim, RD, LD",
        excerpt: "Weight Loss: 17 lbs (12.6%) in past 3 months. PO Intake: < 50% meals/est. needs. Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low). Moderate protein-calorie malnutrition diagnosed based on significant unintentional weight loss, inadequate oral intake, and low albumin/prealbumin. Recommend fortified foods, Ensure Plus BID, weekly weights.",
        page: 2
      },
      delayMs: 1e3
    },
    {
      type: "tool",
      toolName: "readMAR",
      input: { medication: "Ensure Plus", patientId: "2657226" },
      output: {
        medication: "Ensure Plus 8 OZ Oral Liquid",
        route: "ORAL",
        frequency: "BID with meals",
        recentAdministrations: [
          { date: "01/22", lunch: "Given", dinner: "Given" },
          { date: "01/23", lunch: "Given", dinner: "Refused" },
          { date: "01/24", lunch: "Given", dinner: "Given" },
          { date: "01/25", lunch: "Given", dinner: "Given" },
          { date: "01/26", lunch: "Given", dinner: "Refused" },
          { date: "01/27", lunch: "Given", dinner: "Given" }
        ],
        complianceRate: "83%"
      },
      delayMs: 800
    },
    {
      type: "text",
      content: "## Malnutrition Documentation Found\n\nYes \u2014 there is **strong documented evidence of malnutrition** for this resident.\n\n### Clinical Evidence\n\nFrom the Nutrition Progress Note (1/22/2026):\n\n> **Weight Loss: 17 lbs (12.6%)** in past 3 months. PO Intake: **< 50%** meals/est. needs. Moderate protein-calorie malnutrition diagnosed.\n\nLab values confirm:\n- **Albumin: 2.9 g/dL** (Low \u2014 ref: 3.5-5.0)\n- **Prealbumin: 12 mg/dL** (Low \u2014 ref: 18-38)\n\nActive treatment via MAR:\n- **Ensure Plus 8oz BID** \u2014 83% compliance over past week\n- **Fortified Cereal 6oz QD** \u2014 administered daily\n\n### MDS Impact\n\n| Item | Current | Suggested | Rationale |\n|------|---------|-----------|----------|\n| **I5600** (Malnutrition) | Not coded | **1 \u2014 Yes** | Dietitian documents moderate protein-calorie malnutrition |\n| **NTA Score** | NC | **ND** | Malnutrition activates NTA comorbidity tier |\n| **HIPPS** | KAQD | **KBQE** | **+$41.86/day** |\n\n### Sources\n\n- [View Nutrition Progress Note (Page 2)](#doc:doc-nutr-001:2)\n- [View Nutrition Lab Panel](#doc:doc-nutr-002:1)\n- [View Weight Monitoring Flow Sheet](#doc:doc-nutr-006:1)\n- [View MAR \u2014 Ensure Plus](#mar:doc-nutr-004)\n- [View MAR \u2014 Fortified Cereal](#mar:doc-nutr-003)\n",
      delayMs: 600
    }
  ];
}
function buildPdpmScenario() {
  return [
    {
      type: "tool",
      toolName: "getPatientContext",
      input: {},
      output: {
        patientName: "Margaret Thompson",
        age: 78,
        admissionDate: "2026-02-15",
        payerType: "Medicare Part A",
        currentHipps: "KAQD",
        currentPerDiem: "$412.18",
        assessmentType: "5-Day PPS",
        ard: "2026-02-20"
      },
      delayMs: 600
    },
    {
      type: "tool",
      toolName: "searchSemantically",
      input: { query: "PDPM optimization opportunities clinical documentation" },
      output: [
        {
          item: "I5600",
          label: "Malnutrition",
          confidence: 0.95,
          currentValue: null,
          suggestedValue: "1",
          source: "Nutrition Progress Note (doc-nutr-001)",
          hippsImpact: "KAQD \u2192 KBQE (+$41.86/day)"
        },
        {
          item: "I4300",
          label: "Diabetes with PVD",
          confidence: 0.85,
          currentValue: null,
          suggestedValue: "1",
          source: "MD H&P (doc-005)",
          hippsImpact: "KBQE \u2192 KCQE (+$28.14/day)"
        },
        {
          item: "O0400A3",
          label: "IV Medications (while a resident)",
          confidence: 0.88,
          currentValue: "0",
          suggestedValue: "3",
          source: "Hospital Discharge Summary (doc-090)",
          hippsImpact: "+2 NTA points (+$18.42/day)"
        }
      ],
      delayMs: 1400
    },
    {
      type: "text",
      content: "## PDPM Optimization Opportunities\n\nBased on clinical documentation analysis for **Margaret Thompson**, I found **3 potential opportunities** to improve PDPM accuracy:\n\n| # | MDS Item | Description | Confidence | HIPPS Impact | Source |\n|---|----------|-------------|-----------|--------------|--------|\n| 1 | **I5600** | Malnutrition | 95% | KAQD \u2192 KBQE (**+$41.86/day**) | [Nutrition Progress Note](#doc:doc-nutr-001:2) |\n| 2 | **I4300** | Diabetes w/ PVD | 85% | KBQE \u2192 KCQE (**+$28.14/day**) | [MD H&P](#doc:doc-005:1) |\n| 3 | **O0400A3** | IV Medications | 88% | +2 NTA pts (**+$18.42/day**) | [Discharge Summary](#doc:doc-090:3) |\n\n### Total Potential Impact\n\n**+$88.42/day** (combined) \u2014 from current HIPPS **KAQD** ($412.18/day) to optimized **KCQE** ($500.60/day)\n\n> These are opportunities where clinical documentation supports a coding change but the MDS may not yet reflect it. Each should be reviewed by the MDS coordinator.\n\nWould you like me to dive deeper into any of these opportunities?\n",
      delayMs: 600
    }
  ];
}
function buildIvFluidsScenario() {
  return [
    {
      type: "tool",
      toolName: "searchDocuments",
      input: { query: "IV fluids intravenous administration", dateRange: "lookback" },
      output: [
        { documentId: "doc-090", title: "Hospital Discharge Summary", date: "2026-02-14", author: "Dr. James Patel", relevance: 0.95 },
        { documentId: "doc-091", title: "Hospital H&P", date: "2026-02-13", author: "Dr. James Patel", relevance: 0.87 }
      ],
      delayMs: 800
    },
    {
      type: "tool",
      toolName: "readDocument",
      input: { documentId: "doc-090", title: "Hospital Discharge Summary" },
      output: {
        documentId: "doc-090",
        title: "Hospital Discharge Summary",
        date: "2026-02-14",
        author: "Dr. James Patel",
        excerpt: "Hospital Course: Patient admitted for CHF exacerbation. Received IV Normal Saline 1L bolus on admission, then maintained on IV NS at 75mL/hr for 48 hours. IV Lasix 40mg BID administered on days 2-4. Transitioned to oral Lasix 20mg on day 5 prior to discharge to SNF.",
        page: 3
      },
      delayMs: 1e3
    },
    {
      type: "tool",
      toolName: "searchClinicalNotes",
      input: { keyword: "IV", noteType: "Nursing" },
      output: [
        { documentId: "doc-092", title: "Nursing Transfer Note", date: "2026-02-15", author: "RN Maria Lopez", snippet: "Patient transferred from Regional Medical Center. IV site left forearm \u2014 discontinued on arrival. Was receiving IV NS at 75mL/hr..." }
      ],
      delayMs: 800
    },
    {
      type: "text",
      content: "## IV Fluid Administration Evidence\n\nYes \u2014 there is **documented evidence of IV fluid and IV medication administration** during the qualifying hospital stay.\n\n### Hospital Documentation\n\nFrom the Discharge Summary (2/14/2026):\n\n> Patient admitted for CHF exacerbation. Received **IV Normal Saline 1L bolus** on admission, then maintained on **IV NS at 75mL/hr for 48 hours**. **IV Lasix 40mg BID** administered on days 2-4.\n\nThe Nursing Transfer Note (2/15/2026) corroborates:\n\n> IV site left forearm \u2014 discontinued on arrival. Was receiving IV NS at 75mL/hr.\n\n### MDS Impact\n\n| Item | Current | Suggested | Rationale |\n|------|---------|-----------|----------|\n| **O0400A3** | 0 \u2014 Not coded | **3 \u2014 IV while a resident** | Hospital discharge docs confirm IV admin within look-back |\n| **NTA Points** | Current | **+2 points** | IV medications add NTA comorbidity points |\n\n> **Note:** The look-back period for O0400A3 includes the qualifying hospital stay per CMS guidance. Both IV NS and IV Lasix qualify as IV medications for PDPM NTA scoring.\n\n### Sources\n\n- [View Hospital Discharge Summary (Page 3)](#doc:doc-090:3)\n- [View Hospital H&P](#doc:doc-091:1)\n- [View Nursing Transfer Note](#doc:doc-092:1)\n",
      delayMs: 600
    }
  ];
}
function buildMedicationsScenario() {
  return [
    {
      type: "tool",
      toolName: "searchMedications",
      input: { patientId: "current", status: "active" },
      output: [
        { name: "Lisinopril 10mg", route: "PO", frequency: "Daily", type: "scheduled", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" },
        { name: "Metformin 500mg", route: "PO", frequency: "BID", type: "scheduled", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" },
        { name: "Omeprazole 20mg", route: "PO", frequency: "Daily (AC breakfast)", type: "scheduled", prescriber: "Dr. Sarah Kim", startDate: "2026-02-16" },
        { name: "Atorvastatin 40mg", route: "PO", frequency: "QHS", type: "scheduled", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" },
        { name: "Albuterol 2.5mg/3mL", route: "INH (nebulizer)", frequency: "Q4H PRN", type: "prn", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" },
        { name: "Acetaminophen 650mg", route: "PO", frequency: "Q6H PRN", type: "prn", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" }
      ],
      delayMs: 800
    },
    {
      type: "tool",
      toolName: "searchAdministrationRecords",
      input: { date: "today" },
      output: {
        date: "2026-03-06",
        scheduled: [
          { name: "Lisinopril 10mg", time: "08:00", status: "given", givenBy: "RN Maria Lopez" },
          { name: "Metformin 500mg", time: "08:00", status: "given", givenBy: "RN Maria Lopez" },
          { name: "Metformin 500mg", time: "17:00", status: "scheduled", givenBy: null },
          { name: "Omeprazole 20mg", time: "07:30", status: "given", givenBy: "RN Maria Lopez" },
          { name: "Atorvastatin 40mg", time: "21:00", status: "scheduled", givenBy: null }
        ],
        prn: [
          { name: "Acetaminophen 650mg", time: "06:15", status: "given", givenBy: "RN Maria Lopez", reason: "Headache" }
        ]
      },
      delayMs: 1e3
    },
    {
      type: "text",
      content: "## Current Medications\n\nHere are the active medications for this resident:\n\n### Scheduled Medications\n\n| Medication | Route | Frequency | Today's Status |\n|-----------|-------|-----------|----------------|\n| Lisinopril 10mg | PO | Daily | Given 08:00 |\n| Metformin 500mg | PO | BID | Given 08:00 \u2014 17:00 pending |\n| Omeprazole 20mg | PO | Daily (AC breakfast) | Given 07:30 |\n| Atorvastatin 40mg | PO | QHS | 21:00 pending |\n\n### PRN Medications\n\n| Medication | Route | Frequency | Last Given |\n|-----------|-------|-----------|------------|\n| Albuterol 2.5mg/3mL | INH (nebulizer) | Q4H PRN | Not given today |\n| Acetaminophen 650mg | PO | Q6H PRN | 06:15 (headache) |\n\nAll medications were prescribed by **Dr. Sarah Kim** starting around the admission date (2/15/2026). Morning medications have been administered. Evening doses are still pending.\n",
      delayMs: 600
    }
  ];
}
function buildFallbackScenario() {
  return [
    {
      type: "tool",
      toolName: "think",
      input: { thought: "The user's query doesn't match a specific clinical topic. I'll search broadly and offer guidance." },
      output: { status: "considered" },
      delayMs: 600
    },
    {
      type: "tool",
      toolName: "searchSemantically",
      input: { query: "general clinical documentation review" },
      output: { results: [], message: "No specific results for this query in demo mode." },
      delayMs: 800
    },
    {
      type: "text",
      content: `I don't have a specific scripted answer for that question in demo mode, but here are some things you can try:

- **"Does this patient have malnutrition?"** \u2014 Clinical documentation search with MDS impact
- **"What are the PDPM opportunities?"** \u2014 Reimbursement optimization analysis
- **"Were IV fluids given in the hospital?"** \u2014 Hospital document review with NTA impact
- **"What medications is this patient taking?"** \u2014 Active medication list with today's MAR

Try one of these to see the full demo experience!
`,
      delayMs: 600
    }
  ];
}
function useDemoChat(patientId) {
  const [messages, setMessages] = d2([]);
  const [status, setStatus] = d2("ready");
  const [error, setError] = d2(null);
  const [sessionId, setSessionId] = d2(
    () => typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `demo-${Date.now()}`
  );
  const cancelRef = A2(false);
  const runningRef = A2(false);
  y2(() => {
    clear();
  }, [patientId]);
  const send = q2(
    async (text) => {
      if (status !== "ready" || runningRef.current || !text.trim()) return;
      cancelRef.current = false;
      runningRef.current = true;
      setError(null);
      const userMsg = { role: "user", content: text };
      const assistantMsg = { role: "assistant", content: "", parts: [] };
      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setStatus("submitted");
      await delay2(600);
      if (cancelRef.current) {
        runningRef.current = false;
        return;
      }
      setStatus("streaming");
      const steps = getScenario(text);
      for (const step of steps) {
        if (cancelRef.current) break;
        if (step.type === "tool") {
          const toolCallId = nextToolCallId();
          const toolPart = {
            type: `tool-${step.toolName}`,
            toolCallId,
            status: "running",
            input: step.input,
            output: void 0
          };
          assistantMsg.parts.push(toolPart);
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...assistantMsg, parts: [...assistantMsg.parts] };
            return updated;
          });
          await delay2(step.delayMs || 800);
          if (cancelRef.current) break;
          toolPart.status = "done";
          toolPart.output = step.output;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...assistantMsg, parts: [...assistantMsg.parts] };
            return updated;
          });
        } else if (step.type === "text") {
          await delay2(step.delayMs || 600);
          if (cancelRef.current) break;
          const textPart = { type: "text", content: step.content };
          assistantMsg.parts.push(textPart);
          assistantMsg.content = step.content;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...assistantMsg, parts: [...assistantMsg.parts] };
            return updated;
          });
        }
      }
      setStatus("ready");
      runningRef.current = false;
    },
    [status]
  );
  const clear = q2(() => {
    cancelRef.current = true;
    runningRef.current = false;
    setMessages([]);
    setStatus("ready");
    setError(null);
    setSessionId(
      typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `demo-${Date.now()}`
    );
  }, []);
  const stop = q2(() => {
    cancelRef.current = true;
    runningRef.current = false;
    setStatus("ready");
  }, []);
  const loadSession = q2((savedSessionId, savedMessages) => {
    cancelRef.current = true;
    runningRef.current = false;
    setSessionId(savedSessionId);
    setMessages(savedMessages || []);
    setStatus("ready");
    setError(null);
  }, []);
  return { messages, status, error, sessionId, send, clear, stop, setMessages, loadSession };
}

// demo/components/FakeDocumentViewer.jsx
var DOCUMENTS = {
  "doc-001": {
    title: "SLP Evaluation",
    date: "01/20/2026",
    type: "Speech-Language Pathology",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">Sunny Meadows Rehabilitation Center</div>
            <div class="fake-doc__facility-addr">1200 Meadow Lane, Suite 100 &bull; Springfield, IL 62704 &bull; (217) 555-0142</div>
          </div>
          <div class="fake-doc__title">Speech-Language Pathology Evaluation</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> 23630</div>
            <div><strong>Date:</strong> 01/20/2026</div>
            <div><strong>Physician:</strong> Dr. Demo Provider</div>
            <div><strong>Room:</strong> 308-B</div>
          </div>

          <div class="fake-doc__section-title">Reason for Referral</div>
          <p>Patient referred to Speech-Language Pathology for evaluation of communication difficulties following a left-hemisphere cerebrovascular accident (CVA) sustained on 12/22/2025. Nursing staff report the patient has difficulty expressing her needs and becomes frustrated during conversations. The referring physician requests evaluation of speech-language function and recommendations for treatment.</p>

          <div class="fake-doc__section-title">Medical History</div>
          <p>Significant medical history includes hypertension, Type 2 diabetes mellitus, hyperlipidemia, and congestive heart failure. The patient was admitted to General Hospital on 12/23/2025 following acute onset of right-sided weakness and slurred speech. CT scan confirmed left MCA ischemic stroke. She was transferred to Sunny Meadows Rehabilitation Center on 12/28/2025 for skilled nursing and rehabilitation services.</p>

          <div class="fake-doc__section-title">Oral Motor Examination</div>
          <p>Oral motor examination reveals mild right-sided facial weakness with reduced lip seal on the right. Tongue range of motion is functional with mild weakness on lateral movements to the right. Velopharyngeal function appears adequate during sustained phonation. Dentition is intact with upper and lower dentures in place and well-fitting. No signs of oral apraxia noted during volitional and automatic oral movements.</p>
        `
      },
      {
        pageNum: 2,
        content: `
          <div class="fake-doc__section-title">Language Assessment</div>
          <p>Receptive language skills were assessed using informal measures and subtests from the Boston Diagnostic Aphasia Examination (BDAE). The patient demonstrates adequate auditory comprehension for simple commands and yes/no questions. Comprehension breaks down with multi-step commands and complex syntactic structures.</p>
          <div class="fake-doc__highlight">
            <p>Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia. Spontaneous speech is effortful and limited to 2-3 word phrases. Naming accuracy is approximately 40% for common objects with frequent semantic paraphasias. Repetition of single words is moderately preserved but breaks down at the phrase level.</p>
          </div>

          <div class="fake-doc__section-title">Reading &amp; Writing Assessment</div>
          <p>Reading comprehension at the single word level is functional. Paragraph-level reading comprehension is reduced to approximately 60% accuracy. Writing is limited to signature and single words with assistance. The patient demonstrates difficulty with graphomotor planning in addition to linguistic formulation deficits.</p>

          <div class="fake-doc__section-title">Cognitive-Linguistic Assessment</div>
          <p>Attention to task is adequate for structured activities up to 15 minutes. Short-term auditory memory is reduced, retaining 2 of 4 unrelated words after a brief delay. Problem-solving and reasoning skills are difficult to assess fully given expressive language limitations, though the patient demonstrates functional judgment for basic safety scenarios.</p>

          <div class="fake-doc__section-title">Clinical Impressions</div>
          <div class="fake-doc__highlight">
            <p>Based on this evaluation, the patient presents with moderate expressive aphasia characterized by significant word-finding deficits, reduced verbal fluency, and impaired written expression. Receptive language skills are relatively preserved at the conversational level. Prognosis for improvement is fair given the patient's motivation, family support, and relatively recent onset of deficits. The patient would benefit from intensive speech-language pathology intervention.</p>
          </div>
        `
      },
      {
        pageNum: 3,
        content: `
          <div class="fake-doc__section-title">Goals (90-Day)</div>
          <ol>
            <li>Patient will name common objects with 70% accuracy given minimal phonemic cues in structured tasks.</li>
            <li>Patient will produce 4-5 word phrases to express basic needs and wants with 60% independence.</li>
            <li>Patient will follow 2-step commands with 80% accuracy.</li>
            <li>Patient will utilize a communication board as a compensatory strategy with minimal cueing.</li>
            <li>Patient will write simple sentences of 3-4 words with moderate assistance.</li>
          </ol>

          <div class="fake-doc__section-title">Treatment Plan</div>
          <p>Speech-language pathology services recommended at a frequency of <strong>3 times per week for 45-minute sessions</strong>. Treatment will target:</p>
          <ul>
            <li>Naming and word retrieval through semantic feature analysis and phonological component analysis</li>
            <li>Verbal expression through script training and sentence completion tasks</li>
            <li>Functional communication through multimodal strategies (verbal, gestural, written, communication board)</li>
            <li>Reading and writing skills at the functional level</li>
            <li>Cognitive-linguistic skills including attention and memory as they relate to communication</li>
          </ul>
          <p>Plan of care will be reviewed and updated after 30 days or as clinically indicated.</p>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Sarah Thompson</div>
              <div class="fake-doc__sig-title">Speech-Language Pathologist</div>
              <div class="fake-doc__sig-license">M.S., CCC-SLP &bull; License #SLP-2019-04827</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 01/20/2026</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">Sunny Meadows Rehabilitation Center &bull; Speech-Language Pathology Department &bull; Page 3 of 3</div>
        `
      }
    ]
  },
  "doc-003": {
    title: "MD Progress Note",
    date: "01/22/2026",
    type: "Physician Progress Note",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">Sunny Meadows Rehabilitation Center</div>
            <div class="fake-doc__facility-addr">1200 Meadow Lane, Suite 100 &bull; Springfield, IL 62704 &bull; (217) 555-0142</div>
          </div>
          <div class="fake-doc__title">Physician Progress Note</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> 23630</div>
            <div><strong>Date:</strong> 01/22/2026</div>
            <div><strong>Physician:</strong> Dr. Demo Provider</div>
            <div><strong>Room:</strong> 308-B</div>
          </div>

          <div class="fake-doc__section-title">Subjective</div>
          <p>Patient reports feeling "a little better" today. She continues to have difficulty expressing herself and becomes frustrated during conversations. Denies pain, nausea, or shortness of breath. Reports sleeping well. Nursing staff note the patient is cooperative with therapy sessions and ADL care.</p>

          <div class="fake-doc__section-title">Objective</div>
          <p><strong>Vitals:</strong> BP 134/78, HR 72, RR 16, Temp 98.4&deg;F, SpO2 97% on RA</p>
          <p><strong>General:</strong> Alert, oriented x3. Appears well-nourished. Mild right-sided facial droop noted.</p>
          <p><strong>Cardiovascular:</strong> Regular rate and rhythm, no murmurs, gallops, or rubs. Bilateral lower extremity edema trace to 1+, improved from admission.</p>
          <p><strong>Respiratory:</strong> Lungs clear to auscultation bilaterally. No wheezes, rhonchi, or crackles.</p>
          <p><strong>Neurological:</strong> Right upper extremity strength 3/5, right lower extremity 3+/5. Left-sided strength intact. Speech is non-fluent with word-finding pauses.</p>

          <div class="fake-doc__section-title">Assessment</div>
          <div class="fake-doc__highlight">
            <p>Progressive cognitive decline with communication difficulties. Speech therapy addressing expressive language deficits. Patient demonstrates moderate expressive aphasia with relatively preserved comprehension. Current rehabilitation trajectory is appropriate. CHF stable on current medication regimen. Diabetes management requires ongoing monitoring given recent HbA1c of 8.2%.</p>
          </div>

          <div class="fake-doc__section-title">Plan</div>
          <ol>
            <li>Continue current medication regimen. Monitor blood pressure and heart failure symptoms closely.</li>
            <li>Continue SLP therapy 3x/week per evaluation recommendations. Encourage use of communication board on the unit.</li>
            <li>PT/OT to continue per current plan of care for right-sided weakness and functional mobility.</li>
            <li>Adjust diabetic diet and consider insulin adjustment if fasting glucose remains elevated. Recheck HbA1c in 8 weeks.</li>
          </ol>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Dr. Demo Provider</div>
              <div class="fake-doc__sig-title">Attending Physician</div>
              <div class="fake-doc__sig-license">MD &bull; NPI: 1234567890</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 01/22/2026</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">Sunny Meadows Rehabilitation Center &bull; Medical Records &bull; Page 1 of 1</div>
        `
      }
    ]
  },
  "doc-081": {
    title: "Lab Results",
    date: "01/18/2026",
    type: "Laboratory Report",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">Quest Diagnostics</div>
            <div class="fake-doc__facility-addr">500 Plaza Drive &bull; Secaucus, NJ 07094 &bull; (800) 222-0446 &bull; www.questdiagnostics.com</div>
          </div>
          <div class="fake-doc__title">Laboratory Report</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> 23630</div>
            <div><strong>Collection Date:</strong> 01/18/2026</div>
            <div><strong>Ordering Physician:</strong> Dr. Demo Provider</div>
            <div><strong>Report Date:</strong> 01/19/2026</div>
          </div>

          <div class="fake-doc__section-title">Comprehensive Metabolic Panel &amp; CBC</div>
          <table class="fake-doc__lab-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Result</th>
                <th>Flag</th>
                <th>Reference Range</th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>
              <tr class="fake-doc__lab-row--abnormal">
                <td>Hemoglobin A1c</td>
                <td><span class="fake-doc__highlight-inline">8.2</span></td>
                <td><strong>H</strong></td>
                <td>4.0 - 5.6</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Glucose, Fasting</td>
                <td>186</td>
                <td><strong>H</strong></td>
                <td>70 - 100</td>
                <td>mg/dL</td>
              </tr>
              <tr>
                <td>BUN</td>
                <td>28</td>
                <td><strong>H</strong></td>
                <td>7 - 20</td>
                <td>mg/dL</td>
              </tr>
              <tr class="fake-doc__lab-row--abnormal">
                <td>Creatinine</td>
                <td><span class="fake-doc__highlight-inline">1.8</span></td>
                <td><strong>H</strong></td>
                <td>0.6 - 1.2</td>
                <td>mg/dL</td>
              </tr>
              <tr class="fake-doc__lab-row--abnormal">
                <td>eGFR</td>
                <td><span class="fake-doc__highlight-inline">42</span></td>
                <td><strong>L</strong></td>
                <td>&gt;60</td>
                <td>mL/min/1.73m&sup2;</td>
              </tr>
              <tr>
                <td>Sodium</td>
                <td>138</td>
                <td></td>
                <td>136 - 145</td>
                <td>mEq/L</td>
              </tr>
              <tr>
                <td>Potassium</td>
                <td>4.2</td>
                <td></td>
                <td>3.5 - 5.0</td>
                <td>mEq/L</td>
              </tr>
              <tr>
                <td>Total Cholesterol</td>
                <td>198</td>
                <td></td>
                <td>&lt;200</td>
                <td>mg/dL</td>
              </tr>
              <tr>
                <td>LDL Cholesterol</td>
                <td>112</td>
                <td><strong>H</strong></td>
                <td>&lt;100</td>
                <td>mg/dL</td>
              </tr>
              <tr>
                <td>HDL Cholesterol</td>
                <td>42</td>
                <td><strong>L</strong></td>
                <td>&gt;50</td>
                <td>mg/dL</td>
              </tr>
              <tr>
                <td>WBC</td>
                <td>7.2</td>
                <td></td>
                <td>4.5 - 11.0</td>
                <td>x10&sup3;/&mu;L</td>
              </tr>
              <tr>
                <td>Hemoglobin</td>
                <td>11.8</td>
                <td><strong>L</strong></td>
                <td>12.0 - 16.0</td>
                <td>g/dL</td>
              </tr>
            </tbody>
          </table>

          <div class="fake-doc__footer-note">
            <p><strong>H</strong> = Above normal range &nbsp;&nbsp; <strong>L</strong> = Below normal range</p>
            <p>Quest Diagnostics &bull; CLIA# 22D0928956 &bull; Lab Director: Robert Chen, MD, PhD</p>
          </div>
        `
      }
    ]
  },
  "doc-090": {
    title: "Hospital Discharge Summary",
    date: "12/28/2025",
    type: "Discharge Summary",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">General Hospital Medical Center</div>
            <div class="fake-doc__facility-addr">750 University Boulevard &bull; Springfield, IL 62702 &bull; (217) 555-8000</div>
          </div>
          <div class="fake-doc__title">Discharge Summary</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> H-87452</div>
            <div><strong>Admission Date:</strong> 12/23/2025</div>
            <div><strong>Discharge Date:</strong> 12/28/2025</div>
            <div><strong>Attending:</strong> Dr. J. Williams, MD</div>
          </div>

          <div class="fake-doc__section-title">Admitting Diagnosis</div>
          <p>Acute congestive heart failure exacerbation</p>

          <div class="fake-doc__section-title">Discharge Diagnoses</div>
          <ol>
            <li>Acute on chronic systolic congestive heart failure (HFrEF), EF 35%</li>
            <li>Left middle cerebral artery ischemic stroke (12/22/2025)</li>
            <li>Expressive aphasia secondary to CVA</li>
            <li>Type 2 diabetes mellitus, uncontrolled</li>
            <li>Hypertension</li>
            <li>Hyperlipidemia</li>
            <li>Chronic kidney disease, Stage IIIb (eGFR 42)</li>
            <li>Right-sided hemiparesis</li>
          </ol>
        `
      },
      {
        pageNum: 2,
        content: `
          <div class="fake-doc__section-title">Hospital Course</div>
          <p>This is a 72-year-old female who resides at Sunny Meadows Skilled Nursing Facility and presented to the Emergency Department on 12/23/2025 with progressive dyspnea, bilateral lower extremity edema, and 8-pound weight gain over one week. The patient's family also reported acute onset of right-sided weakness and speech difficulties that began the previous evening (12/22/2025).</p>

          <p>Upon arrival, the patient was in moderate respiratory distress. Initial vital signs showed BP 178/96, HR 102, RR 24, SpO2 91% on room air. Chest X-ray demonstrated bilateral pulmonary congestion with small bilateral pleural effusions. BNP was markedly elevated at 2,840 pg/mL. CT head without contrast revealed a left MCA territory infarct.</p>

          <div class="fake-doc__section-title">Treatment Provided</div>
          <p><strong>Day 1 (12/23):</strong> Patient was started on supplemental oxygen via nasal cannula at 3L/min. IV access was established and fluid resuscitation was initiated cautiously given heart failure. Cardiology and Neurology consults were placed. Continuous telemetry monitoring was initiated.</p>

          <p><strong>Day 2 (12/24):</strong> Echocardiogram showed EF 35% with global hypokinesis, worse in the anterior and apical segments. No significant valvular disease. Neurology recommended against tPA given the patient was outside the treatment window. MRI brain confirmed left MCA ischemic infarct. IV diuresis was initiated.</p>

          <p><strong>Day 3-4 (12/25-26):</strong> Patient responded well to IV diuretic therapy with significant improvement in respiratory status and reduction of peripheral edema. Oxygen was weaned to room air by Day 4. Speech-language pathology performed bedside swallow evaluation and noted moderate expressive aphasia. Diet was advanced to regular texture with thin liquids.</p>

          <p><strong>Day 5 (12/27):</strong> Patient continued to improve. Transitioned from IV to oral diuretics. Physical therapy and occupational therapy evaluated the patient and recommended continued rehabilitation at SNF level of care.</p>
        `
      },
      {
        pageNum: 3,
        content: `
          <div class="fake-doc__section-title">IV Medications Administered</div>
          <div class="fake-doc__highlight">
            <p>During the hospital stay, the patient received IV Normal Saline 0.9% at 125 mL/hr for hydration and medication delivery (12/23 - 12/27). IV Lasix (furosemide) 40 mg BID was administered from 12/24 through 12/27 for diuresis with excellent response. Total IV Lasix administered was 320 mg over the 4-day course.</p>
          </div>

          <div class="fake-doc__section-title">Medication Administration Record (Selected)</div>
          <table class="fake-doc__med-table">
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dose</th>
                <th>Route</th>
                <th>Frequency</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Normal Saline 0.9%</td>
                <td>125 mL/hr</td>
                <td><span class="fake-doc__highlight-inline">IV</span></td>
                <td>Continuous</td>
                <td>12/23 - 12/27</td>
              </tr>
              <tr>
                <td>Furosemide (Lasix)</td>
                <td>40 mg</td>
                <td><span class="fake-doc__highlight-inline">IV</span></td>
                <td>BID</td>
                <td>12/24 - 12/27</td>
              </tr>
              <tr>
                <td>Heparin</td>
                <td>5000 units</td>
                <td>SubQ</td>
                <td>Q12H</td>
                <td>12/23 - 12/27</td>
              </tr>
              <tr>
                <td>Metoprolol</td>
                <td>25 mg</td>
                <td>PO</td>
                <td>BID</td>
                <td>12/23 - 12/28</td>
              </tr>
              <tr>
                <td>Lisinopril</td>
                <td>10 mg</td>
                <td>PO</td>
                <td>Daily</td>
                <td>12/24 - 12/28</td>
              </tr>
              <tr>
                <td>Aspirin</td>
                <td>81 mg</td>
                <td>PO</td>
                <td>Daily</td>
                <td>12/23 - 12/28</td>
              </tr>
            </tbody>
          </table>

          <div class="fake-doc__section-title">Transition Notes</div>
          <p>IV access was discontinued on 12/27 after successful transition to oral medications. The patient tolerated the transition well with no recurrence of symptoms. All IV medications were converted to oral equivalents prior to discharge.</p>
        `
      },
      {
        pageNum: 4,
        content: `
          <div class="fake-doc__section-title">Discharge Condition</div>
          <p>Improved. Patient is hemodynamically stable with oxygen saturation &gt;95% on room air. Peripheral edema has decreased from 3+ to trace bilaterally. Weight decreased by 6.2 pounds from admission. Patient is tolerating oral diet and medications. Right-sided weakness persists but the patient is able to transfer with moderate assistance. Expressive aphasia is present but the patient is able to communicate basic needs.</p>

          <div class="fake-doc__section-title">Discharge Medications</div>
          <ol>
            <li>Furosemide (Lasix) 40 mg PO daily</li>
            <li>Metoprolol succinate 25 mg PO BID</li>
            <li>Lisinopril 10 mg PO daily</li>
            <li>Aspirin 81 mg PO daily</li>
            <li>Atorvastatin 40 mg PO at bedtime</li>
            <li>Metformin 500 mg PO BID (hold if eGFR &lt;30)</li>
            <li>Insulin glargine 18 units SubQ at bedtime</li>
            <li>Potassium chloride 20 mEq PO daily</li>
          </ol>

          <div class="fake-doc__section-title">Discharge Instructions</div>
          <ul>
            <li>Discharge to Sunny Meadows Skilled Nursing Facility for continued rehabilitation</li>
            <li>Daily weights; notify physician for weight gain &gt;2 lbs in 24 hours or &gt;5 lbs in 1 week</li>
            <li>Low-sodium, carbohydrate-controlled diet</li>
            <li>Fluid restriction 1500 mL/day</li>
            <li>Physical therapy, occupational therapy, and speech-language pathology to evaluate and treat</li>
            <li>Follow-up with Cardiology in 2 weeks</li>
            <li>Follow-up with Neurology in 4 weeks</li>
            <li>Follow-up with PCP in 1 week</li>
          </ul>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Dr. J. Williams</div>
              <div class="fake-doc__sig-title">Attending Physician</div>
              <div class="fake-doc__sig-license">MD &bull; NPI: 9876543210</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 12/28/2025</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">General Hospital Medical Center &bull; Medical Records &bull; Page 4 of 4</div>
        `
      }
    ]
  },
  "doc-091": {
    title: "Hospital H&P",
    date: "12/23/2025",
    type: "History & Physical",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">General Hospital Medical Center</div>
            <div class="fake-doc__facility-addr">750 University Boulevard &bull; Springfield, IL 62702 &bull; (217) 555-8000</div>
          </div>
          <div class="fake-doc__title">History &amp; Physical</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> H-87452</div>
            <div><strong>Date of Admission:</strong> 12/23/2025</div>
            <div><strong>Attending:</strong> Dr. J. Williams, MD</div>
            <div><strong>Source:</strong> Patient (limited), SNF records, family</div>
          </div>

          <div class="fake-doc__section-title">History of Present Illness</div>
          <p>This is a 72-year-old female resident of Sunny Meadows Skilled Nursing Facility who presents to the Emergency Department with acute onset of progressive dyspnea, bilateral lower extremity edema, and reported weight gain of approximately 8 pounds over the past week. The patient's daughter reports that on the evening of 12/22/2025, the patient developed sudden right-sided weakness and difficulty speaking. The SNF staff noted these changes during evening rounds and contacted the family.</p>
          <p>The patient has a known history of congestive heart failure (HFrEF, last known EF 38% in 06/2025), hypertension, Type 2 diabetes mellitus, and hyperlipidemia. She has been a resident at Sunny Meadows for the past 14 months. Current medications at the SNF include furosemide 20 mg PO daily, metoprolol succinate 25 mg PO BID, lisinopril 5 mg PO daily, metformin 500 mg PO BID, aspirin 81 mg PO daily, and atorvastatin 20 mg PO at bedtime.</p>

          <div class="fake-doc__section-title">Admit Orders</div>
          <div class="fake-doc__highlight">
            <p>Admit to telemetry unit. IV access x2 established. Start NS 0.9% at 125 mL/hr for hydration and medication delivery. IV Lasix 40 mg BID to begin in AM pending initial assessment and labs. Continuous cardiac monitoring. Strict I&amp;Os. Daily weights. Neurology and Cardiology consults. CT head without contrast STAT. Chest X-ray. Labs: CBC, CMP, BNP, troponin x3 q8h, PT/INR, lipid panel, HbA1c, urinalysis.</p>
          </div>

          <div class="fake-doc__section-title">Assessment &amp; Plan</div>
          <p>72-year-old female with acute on chronic heart failure exacerbation and suspected acute ischemic stroke. The combination of progressive volume overload and new neurological deficits necessitates concurrent management of both conditions. Will pursue aggressive diuresis while monitoring neurological status closely. Anticoagulation decisions will be deferred pending stroke team evaluation given the competing risks of hemorrhagic transformation and DVT prophylaxis needs.</p>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Dr. J. Williams</div>
              <div class="fake-doc__sig-title">Attending Physician</div>
              <div class="fake-doc__sig-license">MD &bull; NPI: 9876543210</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 12/23/2025</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">General Hospital Medical Center &bull; Medical Records &bull; Page 1 of 1</div>
        `
      }
    ]
  },
  "doc-092": {
    title: "Nursing Transfer Note",
    date: "12/28/2025",
    type: "Nursing Note",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">Sunny Meadows Rehabilitation Center</div>
            <div class="fake-doc__facility-addr">1200 Meadow Lane, Suite 100 &bull; Springfield, IL 62704 &bull; (217) 555-0142</div>
          </div>
          <div class="fake-doc__title">Nursing Transfer / Re-Admission Note</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> 23630</div>
            <div><strong>Date:</strong> 12/28/2025</div>
            <div><strong>Time:</strong> 14:30</div>
            <div><strong>Room:</strong> 308-B</div>
          </div>

          <div class="fake-doc__section-title">Transfer Summary</div>
          <div class="fake-doc__highlight">
            <p>Patient transferred from General Hospital Medical Center following a 5-day inpatient stay for acute CHF exacerbation and left MCA ischemic stroke. IV access was discontinued prior to transfer. Patient was receiving IV Normal Saline 0.9% at 125 mL/hr and IV Lasix (furosemide) 40 mg BID during the hospital stay. All IV medications have been converted to oral equivalents. No IV fluids or IV medications are to be continued at this time.</p>
          </div>

          <div class="fake-doc__section-title">Assessment on Return</div>
          <p><strong>Vitals on arrival:</strong> BP 128/74, HR 68, RR 16, Temp 98.2&deg;F, SpO2 96% on RA, Weight 158.4 lbs</p>
          <p><strong>Neurological:</strong> Alert, oriented x3. Expressive aphasia noted &mdash; patient able to communicate basic needs with 2-3 word phrases and gestures. Right-sided facial droop present. Right upper extremity weakness (3/5), right lower extremity weakness (3+/5). Left side strength intact.</p>
          <p><strong>Cardiovascular:</strong> Heart sounds regular, no murmurs. Bilateral LE edema trace to 1+, significantly improved per hospital discharge summary. Pedal pulses palpable bilaterally.</p>
          <p><strong>Respiratory:</strong> Lungs clear bilaterally. No respiratory distress. Room air.</p>
          <p><strong>Skin:</strong> Intact. No pressure injuries noted. IV site on left forearm &mdash; clean, dry, no signs of infection. Bandage applied.</p>
          <p><strong>Functional:</strong> Requires moderate assistance for transfers and ambulation. Bed mobility with minimal assistance. Tolerating regular diet with thin liquids.</p>

          <div class="fake-doc__section-title">New Orders Received</div>
          <ul>
            <li>Resume all discharge medications per hospital discharge summary</li>
            <li>Daily weights &mdash; report gain &gt;2 lbs/day or &gt;5 lbs/week to physician</li>
            <li>Low-sodium, carbohydrate-controlled diet</li>
            <li>Fluid restriction 1500 mL/day</li>
            <li>Strict intake and output monitoring</li>
            <li>PT, OT, and SLP to evaluate and treat</li>
            <li>Blood glucose monitoring AC and HS</li>
            <li>Fall precautions</li>
            <li>Cardiology follow-up in 2 weeks, Neurology in 4 weeks</li>
          </ul>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Maria Rodriguez, RN</div>
              <div class="fake-doc__sig-title">Charge Nurse, Unit 3</div>
              <div class="fake-doc__sig-license">BSN, RN &bull; License #RN-2015-38741</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 12/28/2025 &bull; Time: 15:15</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">Sunny Meadows Rehabilitation Center &bull; Nursing Documentation &bull; Page 1 of 1</div>
        `
      }
    ]
  }
};
function FakeDocumentViewer({ docId, page = 1, highlightText = false, onClose }) {
  const doc = DOCUMENTS[docId];
  const [currentPage, setCurrentPage] = d2(page);
  y2(() => {
    setCurrentPage(page);
  }, [page]);
  const handleKeyDown = q2(
    (e3) => {
      if (e3.key === "Escape") {
        onClose?.();
      }
    },
    [onClose]
  );
  y2(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  if (!doc) {
    return /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__backdrop", onClick: onClose, children: /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__panel", onClick: (e3) => e3.stopPropagation(), children: [
      /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__header", children: [
        /* @__PURE__ */ u3("button", { className: "fake-doc-viewer__back-btn", onClick: onClose, children: "\u2190 Back" }),
        /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__header-title", children: /* @__PURE__ */ u3("span", { className: "fake-doc-viewer__title", children: "Document Not Found" }) }),
        /* @__PURE__ */ u3("button", { className: "fake-doc-viewer__close-btn", onClick: onClose, children: "\u2715" })
      ] }),
      /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__canvas", children: /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__page", children: /* @__PURE__ */ u3("p", { children: [
        "The requested document (ID: ",
        docId,
        ") could not be found."
      ] }) }) })
    ] }) });
  }
  const totalPages = doc.pages.length;
  const clampedPage = Math.max(1, Math.min(currentPage, totalPages));
  const pageData = doc.pages.find((p3) => p3.pageNum === clampedPage) || doc.pages[0];
  const goToPrev = () => setCurrentPage((p3) => Math.max(1, p3 - 1));
  const goToNext = () => setCurrentPage((p3) => Math.min(totalPages, p3 + 1));
  return /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__backdrop", onClick: onClose, children: /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__panel", onClick: (e3) => e3.stopPropagation(), children: [
    /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__header", children: [
      /* @__PURE__ */ u3("button", { className: "fake-doc-viewer__back-btn", onClick: onClose, children: "\u2190 Back" }),
      /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__header-title", children: [
        /* @__PURE__ */ u3("span", { className: "fake-doc-viewer__title", children: doc.title }),
        /* @__PURE__ */ u3("span", { className: "fake-doc-viewer__date", children: doc.date })
      ] }),
      /* @__PURE__ */ u3("span", { className: "fake-doc-viewer__type-badge", children: doc.type }),
      /* @__PURE__ */ u3("button", { className: "fake-doc-viewer__close-btn", onClick: onClose, children: "\u2715" })
    ] }),
    /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__toolbar", children: [
      /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__page-nav", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            className: "fake-doc-viewer__nav-btn",
            onClick: goToPrev,
            disabled: clampedPage <= 1,
            children: "\u2039 Prev"
          }
        ),
        /* @__PURE__ */ u3("span", { className: "fake-doc-viewer__page-indicator", children: [
          "Page ",
          clampedPage,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ u3(
          "button",
          {
            className: "fake-doc-viewer__nav-btn",
            onClick: goToNext,
            disabled: clampedPage >= totalPages,
            children: "Next \u203A"
          }
        )
      ] }),
      highlightText && /* @__PURE__ */ u3("span", { className: "fake-doc-viewer__highlight-badge", children: "Evidence highlighted" })
    ] }),
    /* @__PURE__ */ u3("div", { className: "fake-doc-viewer__canvas", children: /* @__PURE__ */ u3(
      "div",
      {
        className: "fake-doc-viewer__page",
        dangerouslySetInnerHTML: { __html: pageData.content }
      }
    ) })
  ] }) });
}

// content/modules/ai-chat/lib/format-markdown.js
function formatMarkdown(text) {
  if (!text) return "";
  let html = text;
  const codeBlocks = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_2, lang, code) => {
    const idx = codeBlocks.length;
    codeBlocks.push(`<pre><code>${escapeHtml(code.trimEnd())}</code></pre>`);
    return `\0CODEBLOCK${idx}\0`;
  });
  const inlineCodes = [];
  html = html.replace(/`([^`]+)`/g, (_2, code) => {
    const idx = inlineCodes.length;
    inlineCodes.push(`<code>${escapeHtml(code)}</code>`);
    return `\0INLINE${idx}\0`;
  });
  const lines = html.split("\n");
  const output = [];
  let i3 = 0;
  while (i3 < lines.length) {
    const line = lines[i3];
    if (i3 + 1 < lines.length && isTableSeparator(lines[i3 + 1]) && line.includes("|")) {
      const tableLines = [line, lines[i3 + 1]];
      i3 += 2;
      while (i3 < lines.length && lines[i3].trim().startsWith("|")) {
        tableLines.push(lines[i3]);
        i3++;
      }
      output.push(renderTable(tableLines));
      continue;
    }
    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      output.push(`<h${level}>${formatInline(headingMatch[2])}</h${level}>`);
      i3++;
      continue;
    }
    if (/^[\s]*[-*]\s+/.test(line)) {
      const listItems = [];
      while (i3 < lines.length && /^[\s]*[-*]\s+/.test(lines[i3])) {
        listItems.push(lines[i3].replace(/^[\s]*[-*]\s+/, ""));
        i3++;
      }
      output.push("<ul>" + listItems.map((li) => `<li>${formatInline(li)}</li>`).join("") + "</ul>");
      continue;
    }
    if (/^[\s]*\d+[.)]\s+/.test(line)) {
      const listItems = [];
      while (i3 < lines.length && /^[\s]*\d+[.)]\s+/.test(lines[i3])) {
        listItems.push(lines[i3].replace(/^[\s]*\d+[.)]\s+/, ""));
        i3++;
      }
      output.push("<ol>" + listItems.map((li) => `<li>${formatInline(li)}</li>`).join("") + "</ol>");
      continue;
    }
    if (line.trim() === "") {
      output.push("<br>");
      i3++;
      continue;
    }
    output.push(formatInline(line));
    i3++;
  }
  html = output.join("\n");
  html = html.replace(/\x00CODEBLOCK(\d+)\x00/g, (_2, idx) => codeBlocks[idx]);
  html = html.replace(/\x00INLINE(\d+)\x00/g, (_2, idx) => inlineCodes[idx]);
  html = html.replace(/(<br>\s*){3,}/g, "<br><br>");
  return html;
}
function formatInline(text) {
  return text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}
function isTableSeparator(line) {
  if (!line) return false;
  return /^\|?[\s-:|]+\|[\s-:|]*$/.test(line.trim());
}
function renderTable(lines) {
  const headerCells = parseTableRow(lines[0]);
  const bodyRows = lines.slice(2);
  let html = '<div class="super-chat-table-wrap"><table class="super-chat-table">';
  html += "<thead><tr>";
  for (const cell of headerCells) {
    html += `<th>${formatInline(cell)}</th>`;
  }
  html += "</tr></thead>";
  if (bodyRows.length > 0) {
    html += "<tbody>";
    for (const row of bodyRows) {
      const cells = parseTableRow(row);
      html += "<tr>";
      for (let j3 = 0; j3 < headerCells.length; j3++) {
        html += `<td>${formatInline(cells[j3] || "")}</td>`;
      }
      html += "</tr>";
    }
    html += "</tbody>";
  }
  html += "</table></div>";
  return html;
}
function parseTableRow(line) {
  let trimmed = line.trim();
  if (trimmed.startsWith("|")) trimmed = trimmed.slice(1);
  if (trimmed.endsWith("|")) trimmed = trimmed.slice(0, -1);
  return trimmed.split("|").map((c3) => c3.trim());
}
function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// content/modules/ai-chat/components/UserMessage.jsx
function UserMessage({ content }) {
  return /* @__PURE__ */ u3("div", { class: "super-chat-message super-chat-message--user", children: /* @__PURE__ */ u3(
    "div",
    {
      class: "super-chat-message__content",
      dangerouslySetInnerHTML: { __html: escapeHtml(content) }
    }
  ) });
}

// content/modules/ai-chat/lib/tool-helpers.js
var TOOL_DISPLAY_NAMES = {
  think: "Reasoning",
  searchVitals: "Searching Vitals",
  searchLabs: "Searching Labs",
  searchMedications: "Searching Medications",
  searchOrders: "Searching Orders",
  searchClinicalNotes: "Searching Clinical Notes",
  searchDocuments: "Searching Documents",
  getPatientContext: "Getting Patient Context",
  readDocument: "Reading Document",
  searchSemantically: "Semantic Search",
  searchCarePlans: "Searching Care Plans",
  searchAdministrationRecords: "Searching Administration Records"
};
var TOOL_ICONS = {
  think: "\u{1F4AD}",
  // thought balloon
  searchVitals: "\u{1F493}",
  // heart
  searchLabs: "\u{1F9EA}",
  // test tube
  searchMedications: "\u{1F48A}",
  // pill
  searchOrders: "\u{1F4CB}",
  // clipboard
  searchClinicalNotes: "\u{1F4DD}",
  // memo
  searchDocuments: "\u{1F4C4}",
  // document
  getPatientContext: "\u{1F464}",
  // person
  readDocument: "\u{1F4D6}",
  // open book
  searchSemantically: "\u{1F50D}",
  // magnifying glass
  searchCarePlans: "\u{1F4CB}",
  // clipboard
  searchAdministrationRecords: "\u{1F489}"
  // syringe
};
function getFriendlyToolName(toolName) {
  return TOOL_DISPLAY_NAMES[toolName] || formatToolNameFallback(toolName);
}
function getToolIcon(toolName) {
  return TOOL_ICONS[toolName] || "\u{1F50D}";
}
function formatToolNameFallback(name) {
  return name.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).trim();
}
function getSearchParamsDescription(toolName, input) {
  if (!input) return "";
  switch (toolName) {
    case "searchVitals":
      return input.vitalType ? `"${input.vitalType}"` : "";
    case "searchLabs":
    case "searchMedications":
    case "searchOrders":
    case "searchDocuments":
      return input.keyword ? `"${input.keyword}"` : "";
    case "searchClinicalNotes":
      return input.keyword ? `"${input.keyword}"` : input.noteType || "";
    case "getPatientContext":
      return "diagnoses";
    case "readDocument":
      return input.documentId ? `doc #${input.documentId}` : "";
    case "searchSemantically":
      return input.query ? `"${input.query.slice(0, 30)}${input.query.length > 30 ? "..." : ""}"` : "";
    default:
      if (input.keyword) return `"${input.keyword}"`;
      if (input.query) return `"${input.query.slice(0, 30)}${input.query.length > 30 ? "..." : ""}"`;
      return "";
  }
}
function getResultSummary(toolName, output) {
  if (!output) return "";
  if (typeof output === "string") {
    try {
      const parsed = JSON.parse(output);
      if (Array.isArray(parsed)) return `${parsed.length} results`;
      if (parsed.results && Array.isArray(parsed.results)) return `${parsed.results.length} results`;
    } catch {
      if (output.length > 100) return "Results received";
    }
  }
  if (Array.isArray(output)) return `${output.length} results`;
  if (output.results && Array.isArray(output.results)) return `${output.results.length} results`;
  return "Complete";
}

// content/modules/ai-chat/components/ToolStep.jsx
function ToolStep({ part }) {
  const [expanded, setExpanded] = d2(false);
  const toolName = part.type.replace("tool-", "");
  const isThinking = toolName === "think";
  const hasResult = part.output !== void 0 && part.output !== null;
  const isRunning = part.status === "running" && !hasResult;
  const displayName = getFriendlyToolName(toolName);
  const icon = getToolIcon(toolName);
  const summary = getSearchParamsDescription(toolName, part.input);
  const resultSummary = hasResult ? getResultSummary(toolName, part.output) : "";
  const statusClass = hasResult ? "super-chat-tool__status--done" : "super-chat-tool__status--loading";
  return /* @__PURE__ */ u3("div", { class: `super-chat-tool ${isThinking ? "super-chat-tool--thinking" : ""} ${isRunning ? "super-chat-tool--running" : ""} ${expanded ? "super-chat-tool--expanded" : ""}`, children: [
    /* @__PURE__ */ u3(
      "div",
      {
        class: "super-chat-tool__header",
        onClick: () => setExpanded(!expanded),
        children: [
          /* @__PURE__ */ u3("span", { class: "super-chat-tool__icon", children: icon }),
          /* @__PURE__ */ u3("span", { class: "super-chat-tool__name", children: displayName }),
          summary && /* @__PURE__ */ u3("span", { class: "super-chat-tool__summary", children: summary }),
          resultSummary && !isRunning && /* @__PURE__ */ u3("span", { class: "super-chat-tool__result-summary", children: resultSummary }),
          /* @__PURE__ */ u3("span", { class: `super-chat-tool__status ${statusClass}`, children: hasResult ? "\u2713" : isRunning ? /* @__PURE__ */ u3("span", { class: "super-chat-tool__spinner" }) : "\u23F7" }),
          /* @__PURE__ */ u3("span", { class: "super-chat-tool__toggle", children: expanded ? "\u25B4" : "\u25BE" })
        ]
      }
    ),
    expanded && /* @__PURE__ */ u3("div", { class: "super-chat-tool__body", children: [
      part.input && /* @__PURE__ */ u3("div", { class: "super-chat-tool__section", children: [
        /* @__PURE__ */ u3("div", { class: "super-chat-tool__section-label", children: isThinking && part.input.thought ? "Thought Process" : "Parameters" }),
        /* @__PURE__ */ u3("pre", { children: isThinking && part.input.thought ? escapeHtml(part.input.thought) : escapeHtml(JSON.stringify(part.input, null, 2)) })
      ] }),
      hasResult && !isThinking && /* @__PURE__ */ u3("div", { class: "super-chat-tool__section", children: [
        /* @__PURE__ */ u3("div", { class: "super-chat-tool__section-label", children: "Results" }),
        /* @__PURE__ */ u3("pre", { children: escapeHtml(
          typeof part.output === "string" ? part.output : JSON.stringify(part.output, null, 2)
        ) })
      ] })
    ] })
  ] });
}

// content/modules/ai-chat/components/AnswerCard.jsx
function AnswerCard({ content }) {
  if (!content?.trim()) return null;
  return /* @__PURE__ */ u3(
    "div",
    {
      class: "super-chat-message__content",
      dangerouslySetInnerHTML: { __html: formatMarkdown(content) }
    }
  );
}

// content/modules/ai-chat/components/AssistantMessage.jsx
function AssistantMessage({ message }) {
  const parts = message.parts || [];
  const toolParts = parts.filter((p3) => p3.type?.startsWith("tool-"));
  const textParts = parts.filter((p3) => p3.type === "text");
  const hasRunningTools = toolParts.some((p3) => p3.status === "running");
  const textContent = textParts.length > 0 ? textParts.map((p3) => p3.content).join("") : message.content || "";
  const hasContent = toolParts.length > 0 || textContent.trim();
  return /* @__PURE__ */ u3("div", { class: "super-chat-message super-chat-message--assistant", children: [
    toolParts.length > 0 && /* @__PURE__ */ u3("div", { class: "super-chat-tools-container", children: [
      toolParts.map((part) => /* @__PURE__ */ u3(ToolStep, { part }, part.toolCallId)),
      hasRunningTools && /* @__PURE__ */ u3("div", { class: "super-chat-tools-progress", children: [
        /* @__PURE__ */ u3("span", { class: "super-chat-tools-progress__spinner" }),
        /* @__PURE__ */ u3("span", { children: "Working..." })
      ] })
    ] }),
    textContent.trim() && /* @__PURE__ */ u3(AnswerCard, { content: textContent }),
    !hasContent && /* @__PURE__ */ u3("div", { class: "super-chat-message__content super-chat-message__loading", children: /* @__PURE__ */ u3("span", { class: "super-chat-inline-loader", children: [
      /* @__PURE__ */ u3("span", {}),
      /* @__PURE__ */ u3("span", {}),
      /* @__PURE__ */ u3("span", {})
    ] }) })
  ] });
}

// content/modules/ai-chat/components/ChatInput.jsx
function ChatInput({ onSend, status }) {
  const [text, setText] = d2("");
  const textareaRef = A2(null);
  const isReady = status === "ready";
  y2(() => {
    if (isReady && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isReady]);
  const handleSubmit = () => {
    if (!text.trim() || !isReady) return;
    onSend(text.trim());
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };
  const handleKeyDown = (e3) => {
    if (e3.key === "Enter" && !e3.shiftKey) {
      e3.preventDefault();
      handleSubmit();
    }
  };
  const handleInput = (e3) => {
    setText(e3.target.value);
    const textarea = e3.target;
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
  };
  const placeholder = isReady ? "Ask me anything about this patient..." : status === "submitted" ? "Searching patient records..." : "Generating response...";
  return /* @__PURE__ */ u3("div", { class: "super-chat-input-container", children: [
    /* @__PURE__ */ u3(
      "textarea",
      {
        ref: textareaRef,
        class: "super-chat-input",
        value: text,
        onInput: handleInput,
        onKeyDown: handleKeyDown,
        placeholder,
        disabled: !isReady,
        rows: 1
      }
    ),
    /* @__PURE__ */ u3(
      "button",
      {
        class: "super-chat-send",
        onClick: handleSubmit,
        disabled: !isReady || !text.trim(),
        title: "Send message",
        children: status !== "ready" ? /* @__PURE__ */ u3("span", { class: "super-chat-send__spinner" }) : /* @__PURE__ */ u3("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ u3("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
          /* @__PURE__ */ u3("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
        ] })
      }
    )
  ] });
}

// demo/components/DemoChatOverlay.jsx
var DEMO_SUGGESTIONS = [
  "Does this patient have malnutrition?",
  "What are the PDPM opportunities?",
  "Look for IV fluids in hospital docs",
  "What medications is this patient on?"
];
function DemoChatOverlay({ patientId, onClose }) {
  const { messages, status, send, clear } = useDemoChat(patientId);
  const [viewingDoc, setViewingDoc] = d2(null);
  const messagesRef = A2(null);
  y2(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);
  const handleContentClick = q2((e3) => {
    const link = e3.target.closest('a[href^="#doc:"]');
    if (link) {
      e3.preventDefault();
      const parts = link.getAttribute("href").replace("#doc:", "").split(":");
      setViewingDoc({ docId: parts[0], page: parseInt(parts[1], 10) || 1 });
      return;
    }
    const viewerLink = e3.target.closest('a[href^="#viewer:"]');
    if (viewerLink) {
      e3.preventDefault();
    }
  }, []);
  const handleSuggestionClick = q2((text) => {
    send(text);
  }, [send]);
  return /* @__PURE__ */ u3(k, { children: [
    /* @__PURE__ */ u3("div", { class: "super-chat-overlay", onClick: (e3) => {
      if (e3.target.classList.contains("super-chat-overlay")) onClose();
    }, children: /* @__PURE__ */ u3("div", { class: "super-chat-overlay__panel", children: [
      /* @__PURE__ */ u3("div", { class: "super-chat-header", children: [
        /* @__PURE__ */ u3("div", { class: "super-chat-header__left", children: [
          /* @__PURE__ */ u3("div", { class: "super-chat-header__sparkle", children: /* @__PURE__ */ u3("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ u3("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" }) }) }),
          /* @__PURE__ */ u3("span", { class: "super-chat-header__title", children: "AI Assistant" }),
          /* @__PURE__ */ u3("span", { class: "super-chat-header__patient", children: "Doe, Jane" })
        ] }),
        /* @__PURE__ */ u3("div", { class: "super-chat-header__actions-right", children: [
          /* @__PURE__ */ u3("button", { class: "super-chat-header__btn", onClick: clear, title: "New Chat", children: /* @__PURE__ */ u3("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
            /* @__PURE__ */ u3("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            /* @__PURE__ */ u3("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          ] }) }),
          /* @__PURE__ */ u3("button", { class: "super-chat-header__btn", onClick: onClose, title: "Close", children: /* @__PURE__ */ u3("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
            /* @__PURE__ */ u3("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            /* @__PURE__ */ u3("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { class: "super-chat-messages", ref: messagesRef, onClick: handleContentClick, children: messages.length === 0 ? (
        // Custom demo empty state with our specific suggestions
        /* @__PURE__ */ u3("div", { class: "super-chat-empty", children: [
          /* @__PURE__ */ u3("div", { class: "super-chat-empty__icon", children: "\u2728" }),
          /* @__PURE__ */ u3("div", { class: "super-chat-empty__title", children: "Hi, I'm your AI assistant" }),
          /* @__PURE__ */ u3("div", { class: "super-chat-empty__text", children: "I can search clinical notes, hospital records, labs, medications, and help analyze MDS coding opportunities." }),
          /* @__PURE__ */ u3("div", { class: "super-chat-empty__suggestions", children: DEMO_SUGGESTIONS.map((s3) => /* @__PURE__ */ u3(
            "button",
            {
              class: "super-chat-empty__suggestion",
              onClick: () => handleSuggestionClick(s3),
              children: s3
            },
            s3
          )) })
        ] })
      ) : /* @__PURE__ */ u3(k, { children: [
        messages.map((msg, idx) => msg.role === "user" ? /* @__PURE__ */ u3(UserMessage, { content: msg.content }, idx) : /* @__PURE__ */ u3(AssistantMessage, { message: msg }, idx)),
        status === "submitted" && /* @__PURE__ */ u3("div", { class: "super-chat-message super-chat-message--assistant", children: /* @__PURE__ */ u3("div", { class: "super-chat-typing", children: [
          /* @__PURE__ */ u3("div", { class: "super-chat-typing__dots", children: [
            /* @__PURE__ */ u3("div", { class: "super-chat-typing__dot" }),
            /* @__PURE__ */ u3("div", { class: "super-chat-typing__dot" }),
            /* @__PURE__ */ u3("div", { class: "super-chat-typing__dot" })
          ] }),
          /* @__PURE__ */ u3("span", { children: "Analyzing patient data..." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ u3(ChatInput, { onSend: send, status })
    ] }) }),
    viewingDoc && /* @__PURE__ */ u3(
      FakeDocumentViewer,
      {
        docId: viewingDoc.docId,
        page: viewingDoc.page,
        highlightText: true,
        onClose: () => setViewingDoc(null)
      }
    )
  ] });
}

// demo/components/DemoApp.jsx
var FACILITY_NAME = "SUNNY MEADOWS DEMO FACILITY";
var ORG_SLUG = "demo-org";
var DEMO_CONTEXTS = {
  commandCenter: {
    facilityName: FACILITY_NAME,
    orgSlug: ORG_SLUG
  },
  pdpmMds: {
    context: { scope: "mds", assessmentId: "4860265", facilityName: FACILITY_NAME }
  },
  pdpmPatient: {
    context: { scope: "patient", patientId: "2657226", patientName: "Doe, Jane", facilityName: FACILITY_NAME }
  },
  queryItems: {
    patientId: "2657226",
    patientName: "Doe, Jane",
    facilityName: FACILITY_NAME,
    orgSlug: ORG_SLUG,
    assessmentId: "4860265"
  },
  chat: {
    patientId: "2657226"
  }
};
var FAB_BUTTONS = [
  { id: "commandCenter", label: "Command Center", icon: "\u{1F4CB}", color: "#6366f1" },
  { id: "pdpmMds", label: "PDPM (MDS)", icon: "\u{1F4CA}", color: "#22c55e" },
  { id: "pdpmPatient", label: "PDPM (Patient)", icon: "\u{1F9D1}", color: "#f97316" },
  { id: "queryItems", label: "Query Items", icon: "\u{1F4DD}", color: "#3b82f6" },
  { id: "chat", label: "AI Chat", icon: "\u{1F4AC}", color: "#8b5cf6" }
];
function DemoApp() {
  const [activeOverlay, setActiveOverlay] = d2(null);
  const [fabExpanded, setFabExpanded] = d2(false);
  y2(() => {
    function handleOpenPdpm(e3) {
      const opts = e3.detail;
      if (opts?.scope === "mds" && opts?.assessmentId) {
        setActiveOverlay("pdpmMds");
      }
    }
    window.addEventListener("demo:open-pdpm", handleOpenPdpm);
    return () => window.removeEventListener("demo:open-pdpm", handleOpenPdpm);
  }, []);
  y2(() => {
    function handleOpenChat() {
      setActiveOverlay("chat");
    }
    window.addEventListener("demo:open-chat", handleOpenChat);
    return () => window.removeEventListener("demo:open-chat", handleOpenChat);
  }, []);
  function handleClose() {
    setActiveOverlay(null);
  }
  function handleCommandCenterClose(opts) {
    if (opts?.hide) return;
    setActiveOverlay(null);
  }
  return /* @__PURE__ */ u3(k, { children: [
    activeOverlay === "commandCenter" && /* @__PURE__ */ u3(
      MDSCommandCenter,
      {
        facilityName: DEMO_CONTEXTS.commandCenter.facilityName,
        orgSlug: DEMO_CONTEXTS.commandCenter.orgSlug,
        onClose: handleCommandCenterClose
      }
    ),
    activeOverlay === "pdpmMds" && /* @__PURE__ */ u3("div", { class: "demo-pdpm-wrapper", style: overlayWrapperStyle, children: [
      /* @__PURE__ */ u3("div", { class: "demo-pdpm-header", style: overlayHeaderStyle, children: [
        /* @__PURE__ */ u3("span", { style: { fontWeight: 600 }, children: "PDPM Analyzer (MDS Scope)" }),
        /* @__PURE__ */ u3("button", { onClick: handleClose, style: closeButtonStyle, children: "\xD7" })
      ] }),
      /* @__PURE__ */ u3("div", { style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ u3(
        PDPMAnalyzer,
        {
          context: DEMO_CONTEXTS.pdpmMds.context,
          onClose: handleClose
        }
      ) })
    ] }),
    activeOverlay === "pdpmPatient" && /* @__PURE__ */ u3("div", { class: "demo-pdpm-wrapper", style: overlayWrapperStyle, children: [
      /* @__PURE__ */ u3("div", { class: "demo-pdpm-header", style: overlayHeaderStyle, children: [
        /* @__PURE__ */ u3("span", { style: { fontWeight: 600 }, children: "PDPM Analyzer (Patient Scope)" }),
        /* @__PURE__ */ u3("button", { onClick: handleClose, style: closeButtonStyle, children: "\xD7" })
      ] }),
      /* @__PURE__ */ u3("div", { style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ u3(
        PDPMAnalyzer,
        {
          context: DEMO_CONTEXTS.pdpmPatient.context,
          onClose: handleClose
        }
      ) })
    ] }),
    activeOverlay === "queryItems" && /* @__PURE__ */ u3("div", { class: "demo-query-wrapper", style: overlayWrapperStyle, children: [
      /* @__PURE__ */ u3("div", { class: "demo-query-header", style: overlayHeaderStyle, children: [
        /* @__PURE__ */ u3("span", { style: { fontWeight: 600 }, children: "Query Items Page" }),
        /* @__PURE__ */ u3("button", { onClick: handleClose, style: closeButtonStyle, children: "\xD7" })
      ] }),
      /* @__PURE__ */ u3("div", { style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ u3(
        QueryItemsPage,
        {
          patientId: DEMO_CONTEXTS.queryItems.patientId,
          patientName: DEMO_CONTEXTS.queryItems.patientName,
          facilityName: DEMO_CONTEXTS.queryItems.facilityName,
          orgSlug: DEMO_CONTEXTS.queryItems.orgSlug,
          assessmentId: DEMO_CONTEXTS.queryItems.assessmentId,
          onClose: handleClose,
          onBack: handleClose
        }
      ) })
    ] }),
    activeOverlay === "chat" && /* @__PURE__ */ u3(
      DemoChatOverlay,
      {
        patientId: DEMO_CONTEXTS.chat.patientId,
        onClose: handleClose
      }
    ),
    /* @__PURE__ */ u3("div", { style: fabContainerStyle, children: [
      fabExpanded && /* @__PURE__ */ u3("div", { style: fabMenuStyle, children: FAB_BUTTONS.map((btn) => /* @__PURE__ */ u3(
        "button",
        {
          onClick: () => {
            setActiveOverlay(btn.id);
            setFabExpanded(false);
          },
          style: {
            ...fabItemStyle,
            background: btn.color
          },
          title: btn.label,
          children: [
            /* @__PURE__ */ u3("span", { style: { fontSize: "16px", marginRight: "8px" }, children: btn.icon }),
            /* @__PURE__ */ u3("span", { style: { fontSize: "12px", fontWeight: 500 }, children: btn.label })
          ]
        },
        btn.id
      )) }),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: () => setFabExpanded(!fabExpanded),
          style: {
            ...mainFabStyle,
            transform: fabExpanded ? "rotate(45deg)" : "rotate(0deg)"
          },
          title: "Open Preact Demo Modules",
          children: "+"
        }
      )
    ] })
  ] });
}
var fabContainerStyle = {
  position: "fixed",
  bottom: "24px",
  left: "24px",
  zIndex: 99999,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px"
};
var mainFabStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
  fontWeight: 300,
  transition: "transform 0.2s ease",
  lineHeight: 1
};
var fabMenuStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  marginBottom: "4px"
};
var fabItemStyle = {
  display: "flex",
  alignItems: "center",
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  color: "white",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  whiteSpace: "nowrap",
  transition: "opacity 0.15s"
};
var overlayWrapperStyle = {
  position: "fixed",
  inset: "20px",
  zIndex: 1e5,
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
};
var overlayHeaderStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f9fafb",
  flexShrink: 0
};
var closeButtonStyle = {
  background: "transparent",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
  color: "#6b7280",
  padding: "0 4px",
  lineHeight: 1
};

// demo/demo-entry.jsx
createMockChrome();
installGlobalMocks();
window.__DEMO_MODE = true;
window.__preact = preact_module_exports;
window.__QueryItemsPage = QueryItemsPage;
function boot() {
  let root = document.getElementById("super-demo-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "super-demo-root";
    document.body.appendChild(root);
  }
  G(/* @__PURE__ */ u3(DemoApp, {}), root);
  console.log("[Demo] DemoApp mounted");
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
