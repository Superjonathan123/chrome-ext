/**
 * Comprehensive API response mocks for the demo environment.
 *
 * Each key maps to the shape expected by the corresponding hook:
 *   - dashboard       → useCommandCenter
 *   - docRisks        → useDocRisks
 *   - pdpmPotential   → usePDPMAnalyzer (keyed by assessmentId)
 *   - patientAssessments → usePDPMAnalyzer patient scope (keyed by patientId)
 *   - itemDetail      → useItemDetail (keyed by MDS code)
 *   - queryableItems  → useQueryItems
 *   - practitioners   → useBatchQuery
 */

export const DEMO_API_RESPONSES = {
  // ════════════════════════════════════════════
  // DASHBOARD (useCommandCenter)
  // ════════════════════════════════════════════
  dashboard: {
    assessments: [
      {
        id: '4860265',
        externalAssessmentId: '4860265',
        patientId: '2657226',
        patientName: 'Doe, Jane',
        assessmentType: 'Quarterly',
        ardDate: '2026-01-13',
        status: 'open',
        payerType: 'medicaid',
        assessmentClass: 'obra',
        isHippsOpportunityPrimary: true,
        deadlines: {
          urgency: 'urgent',
          ardDaysRemaining: 3,
          transmissionDue: '2026-01-27'
        },
        udaSummary: {
          bims: 'complete',
          phq9: 'missing',
          gg: 'complete'
        },
        pdpm: {
          hasImprovements: true,
          currentHipps: 'KAQD',
          potentialHipps: 'KBQE',
          payment: {
            currentDaily: 482.50,
            potentialDaily: 538.20,
            remainingDays: 14
          }
        },
        compliance: {
          summary: { passed: 4, total: 5 },
          checks: {
            bims: { status: 'passed' },
            phq9: { status: 'failed', message: 'PHQ-9 not found in lookback period' },
            gg: { status: 'passed' },
            orders: { status: 'passed' },
            therapyDocs: { status: 'passed' }
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
        id: '4862100',
        externalAssessmentId: '4862100',
        patientId: '2657300',
        patientName: 'Smith, Robert',
        assessmentType: '5-Day PPS',
        ardDate: '2026-01-10',
        status: 'open',
        payerType: 'medicare',
        assessmentClass: 'pps',
        isHippsOpportunityPrimary: true,
        deadlines: {
          urgency: 'overdue',
          ardDaysRemaining: -4,
          transmissionDue: '2026-01-24'
        },
        udaSummary: {
          bims: 'complete',
          phq9: 'complete',
          gg: 'in_progress'
        },
        pdpm: {
          hasImprovements: true,
          currentHipps: 'CBQJ',
          potentialHipps: 'CBQL',
          payment: {
            currentDaily: 610.80,
            potentialDaily: 645.30,
            remainingDays: 26
          }
        },
        compliance: {
          summary: { passed: 5, total: 5 },
          checks: {
            bims: { status: 'passed' },
            phq9: { status: 'passed' },
            gg: { status: 'passed' },
            orders: { status: 'passed' },
            therapyDocs: { status: 'passed' }
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
        id: '4863500',
        externalAssessmentId: '4863500',
        patientId: '2657450',
        patientName: 'Johnson, Mary',
        assessmentType: '5-Day PPS',
        ardDate: '2026-01-20',
        status: 'open',
        payerType: 'medicare',
        assessmentClass: 'pps',
        isHippsOpportunityPrimary: false,
        deadlines: {
          urgency: 'approaching',
          ardDaysRemaining: 7,
          transmissionDue: '2026-02-03'
        },
        udaSummary: {
          bims: 'complete',
          phq9: 'complete',
          gg: 'complete'
        },
        pdpm: {
          hasImprovements: false,
          currentHipps: 'LAQF',
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 5, total: 5 },
          checks: {
            bims: { status: 'passed' },
            phq9: { status: 'passed' },
            gg: { status: 'passed' },
            orders: { status: 'passed' },
            therapyDocs: { status: 'passed' }
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
        id: '4864001',
        externalAssessmentId: '4864001',
        patientId: '2657501',
        patientName: 'Wilson, James',
        assessmentType: 'Annual',
        ardDate: '2026-01-25',
        status: 'open',
        payerType: 'medicaid',
        assessmentClass: 'obra',
        isHippsOpportunityPrimary: false,
        deadlines: {
          urgency: 'on_track',
          ardDaysRemaining: 12,
          transmissionDue: '2026-02-08'
        },
        udaSummary: {
          bims: 'complete',
          phq9: 'complete',
          gg: 'missing'
        },
        pdpm: {
          hasImprovements: false,
          currentHipps: 'KAQD',
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 4, total: 5 },
          checks: {
            bims: { status: 'passed' },
            phq9: { status: 'passed' },
            gg: { status: 'failed', message: 'GG assessment not locked' },
            orders: { status: 'passed' },
            therapyDocs: { status: 'passed' }
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
        id: '4855102',
        externalAssessmentId: '4855102',
        patientId: '2657226',
        patientName: 'Doe, Jane',
        assessmentType: 'Annual',
        ardDate: '2025-12-15',
        status: 'locked',
        payerType: 'medicaid',
        assessmentClass: 'obra',
        isHippsOpportunityPrimary: false,
        deadlines: {
          urgency: 'completed',
          ardDaysRemaining: -30,
          transmissionDue: '2025-12-29'
        },
        udaSummary: {
          bims: 'locked_in_range',
          phq9: 'locked_in_range',
          gg: 'locked_in_range'
        },
        pdpm: {
          hasImprovements: false,
          currentHipps: 'KAQD',
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 5, total: 5 },
          checks: {
            bims: { status: 'passed' },
            phq9: { status: 'passed' },
            gg: { status: 'passed' },
            orders: { status: 'passed' },
            therapyDocs: { status: 'passed' }
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
        id: '4865200',
        externalAssessmentId: '4865200',
        patientId: '2657300',
        patientName: 'Smith, Robert',
        assessmentType: 'Interim Payment',
        ardDate: '2026-01-24',
        status: 'open',
        payerType: 'medicare',
        assessmentClass: 'pps',
        isHippsOpportunityPrimary: false,
        deadlines: {
          urgency: 'approaching',
          ardDaysRemaining: 10,
          transmissionDue: '2026-02-07'
        },
        udaSummary: {
          bims: 'near_miss',
          phq9: 'complete',
          gg: 'complete'
        },
        pdpm: {
          hasImprovements: false,
          currentHipps: 'CBQJ',
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 4, total: 5 },
          checks: {
            bims: { status: 'failed', message: 'BIMS near miss — locked outside lookback' },
            phq9: { status: 'passed' },
            gg: { status: 'passed' },
            orders: { status: 'passed' },
            therapyDocs: { status: 'passed' }
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
      totalRevenueOpportunity: '$780/day'
    },

    outstandingQueries: [
      {
        id: 'q-003',
        mdsAssessmentId: '4860265',
        patientName: 'Doe, Jane',
        mdsItem: 'I4900',
        mdsItemName: 'Schizophrenia',
        status: 'sent',
        sentAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        ardDaysRemaining: 3,
        assessmentPayment: { currentDaily: 482.50, potentialDaily: 538.20, remainingDays: 14 },
        sentTo: [{ firstName: 'Demo', lastName: 'Provider', title: 'MD' }]
      },
      {
        id: 'q-004',
        mdsAssessmentId: '4862100',
        patientName: 'Smith, Robert',
        mdsItem: 'I5100',
        mdsItemName: 'Quadriplegia',
        status: 'sent',
        sentAt: new Date(Date.now() - 5 * 86400000).toISOString(),
        ardDaysRemaining: -4,
        assessmentPayment: { currentDaily: 610.80, potentialDaily: 645.30, remainingDays: 26 },
        sentTo: [{ firstName: 'Sample', lastName: 'Doctor', title: 'DO' }]
      },
      {
        id: 'q-001',
        mdsAssessmentId: '4860265',
        patientName: 'Doe, Jane',
        mdsItem: 'I5600',
        mdsItemName: 'Aphasia',
        status: 'pending',
        ardDaysRemaining: 3,
        assessmentPayment: { currentDaily: 482.50, potentialDaily: 538.20, remainingDays: 14 }
      }
    ],

    recentlySigned: [
      {
        id: 'q-005',
        mdsAssessmentId: '4860265',
        patientName: 'Doe, Jane',
        mdsItem: 'I6200',
        mdsItemName: 'Diabetes Mellitus',
        status: 'signed',
        signedAt: new Date(Date.now() - 86400000).toISOString(),
        mdsItemCoded: false,
        hasPdf: true,
        practitioner: { firstName: 'Demo', lastName: 'Provider', title: 'MD' },
        selectedIcd10Code: 'E11.9'
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
        patientName: 'Doe, Jane',
        assessmentType: 'Quarterly',
        mdsItem: 'I5600',
        itemName: 'Aphasia',
        missingDiagnosis: true,
        missingTreatment: false,
        rationale: 'SLP evaluation documents word-finding difficulties, but no ICD-10 code for aphasia on Med Diag.'
      },
      {
        patientName: 'Smith, Robert',
        assessmentType: '5-Day PPS',
        mdsItem: 'I4300',
        itemName: 'Diabetes with PVD',
        missingDiagnosis: true,
        missingTreatment: false,
        rationale: 'Lab results and medication list support diabetes diagnosis, but no PVD code documented.'
      },
      {
        patientName: 'Smith, Robert',
        assessmentType: '5-Day PPS',
        mdsItem: 'O0400A3',
        itemName: 'IV Medications',
        missingDiagnosis: false,
        missingTreatment: true,
        rationale: 'MAR shows IV antibiotic course, but treatment not reflected on active treatment plan.'
      }
    ]
  },

  // ════════════════════════════════════════════
  // PDPM POTENTIAL (usePDPMAnalyzer - keyed by assessmentId)
  // ════════════════════════════════════════════
  pdpmPotential: {
    '4860265': {
      patientName: 'Doe, Jane',
      assessment: {
        id: '4860265',
        externalAssessmentId: '4860265',
        externalPatientId: '2657226',
        patientId: '2657226',
        description: 'Quarterly',
        ardDate: '2026-01-13',
        status: 'open'
      },
      summary: {
        currentHipps: 'KAQD',
        potentialHippsIfCoded: 'KBQE',
        hasImprovements: true,
        totalActionableItems: 3
      },
      calculation: {
        hippsCode: 'KAQD',
        ptot: 'TK',
        slp: 'SA',
        nursing: 'CA1',
        nta: 'ND'
      },
      payment: {
        currentDaily: 482.50,
        potentialDaily: 538.20,
        remainingDays: 14
      },
      enhancedDetections: [
        {
          mdsItem: 'I5600',
          itemName: 'Aphasia',
          section: 'I',
          wouldChangeHipps: true,
          solverStatus: 'detected',
          confidence: 0.92,
          rationale: 'SLP evaluation documents significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia.',
          evidence: [
            { sourceType: 'clinical_note', quote: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia.', documentName: 'SLP Evaluation' }
          ],
          impact: {
            slp: { wouldChangeGroup: true, currentGroup: 'SA', newGroup: 'SB' }
          }
        },
        {
          mdsItem: 'I4300',
          itemName: 'Diabetes with Peripheral Vascular Disease',
          section: 'I',
          wouldChangeHipps: true,
          solverStatus: 'detected',
          confidence: 0.85,
          rationale: 'Lab results show elevated HbA1c and medication list includes diabetic medications. Progress note documents PVD symptoms.',
          evidence: [
            { sourceType: 'lab_result', quote: 'HbA1c: 8.2%, GFR 42, Creatinine 1.8', documentName: 'Lab Results 1/18' },
            { sourceType: 'clinical_note', quote: 'Bilateral lower extremity edema with diminished pedal pulses noted.', documentName: 'MD Progress Note' }
          ],
          impact: {
            nta: { wouldChangeLevel: true, currentLevel: 'ND', newLevel: 'NE' }
          }
        },
        {
          mdsItem: 'O0400A3',
          itemName: 'IV Medications',
          section: 'O',
          wouldChangeHipps: true,
          solverStatus: 'detected',
          confidence: 0.95,
          rationale: 'MAR shows active IV antibiotic course (Vancomycin) during lookback period.',
          evidence: [
            { sourceType: 'mar', quote: 'Vancomycin 1g IV Q12H - administered 1/12, 1/13', documentName: 'MAR' }
          ],
          impact: {
            nursing: { wouldChangeGroup: true, currentPaymentGroup: 'CA1', newPaymentGroup: 'CB1' }
          }
        },
        {
          mdsItem: 'I2900',
          itemName: 'Drug/Medication induced depression',
          section: 'I',
          wouldChangeHipps: false,
          solverStatus: 'detected',
          confidence: 0.72,
          rationale: 'PHQ-9 assessment missing. Multiple medications on profile associated with depressive side effects.',
          evidence: [
            { sourceType: 'clinical_note', quote: 'Patient reports feeling down and having little interest in activities.', documentName: 'Nursing Assessment' }
          ]
        }
      ],
      outstandingQueries: [
        {
          id: 'q-003',
          mdsItem: 'I4900',
          mdsItemName: 'Schizophrenia',
          status: 'sent',
          sentAt: new Date(Date.now() - 2 * 86400000).toISOString(),
          pdpmImpact: { wouldChangeHipps: false }
        }
      ],
      recentlySigned: [
        {
          id: 'q-005',
          mdsItem: 'I6200',
          mdsItemName: 'Diabetes Mellitus',
          status: 'signed',
          signedAt: new Date(Date.now() - 86400000).toISOString(),
          mdsItemCoded: false
        }
      ],
      compliance: {
        summary: { passed: 4, total: 5 },
        checks: {
          bims: { status: 'passed', message: 'BIMS completed', foundUda: { description: 'BIMS Assessment', date: '2026-01-12', lockedDate: '2026-01-12' } },
          phq9: { status: 'failed', message: 'PHQ-9 not found in lookback period' },
          gg: { status: 'passed', message: 'GG completed', foundUda: { description: 'GG Functional Assessment', date: '2026-01-11', lockedDate: '2026-01-12' } },
          orders: { status: 'passed', message: 'All orders signed' },
          therapyDocs: { status: 'passed', message: 'Therapy documentation complete' }
        }
      }
    },

    '4862100': {
      patientName: 'Smith, Robert',
      assessment: {
        id: '4862100',
        externalAssessmentId: '4862100',
        externalPatientId: '2657300',
        patientId: '2657300',
        description: '5-Day PPS',
        ardDate: '2026-01-10',
        status: 'open'
      },
      summary: {
        currentHipps: 'CBQJ',
        potentialHippsIfCoded: 'CBQL',
        hasImprovements: true,
        totalActionableItems: 5
      },
      calculation: {
        hippsCode: 'CBQJ',
        ptot: 'TL',
        slp: 'SB',
        nursing: 'CB2',
        nta: 'NF'
      },
      payment: {
        currentDaily: 610.80,
        potentialDaily: 645.30,
        remainingDays: 26
      },
      enhancedDetections: [
        {
          mdsItem: 'I5100',
          itemName: 'Hemiplegia/Hemiparesis',
          section: 'I',
          wouldChangeHipps: true,
          solverStatus: 'detected',
          confidence: 0.96,
          rationale: 'Post-CVA left hemiparesis well documented in PT/OT evaluations.',
          evidence: [
            { sourceType: 'clinical_note', quote: 'Left-sided hemiparesis with 2/5 strength in left upper and lower extremities.', documentName: 'PT Evaluation' }
          ],
          impact: {
            ptot: { wouldChangeGroup: true, currentGroup: 'TL', newGroup: 'TM' }
          }
        },
        {
          mdsItem: 'K0510A',
          itemName: 'Parenteral/IV Feeding',
          section: 'K',
          wouldChangeHipps: true,
          solverStatus: 'detected',
          confidence: 0.88,
          rationale: 'IV fluids administered during lookback period per MAR records.',
          evidence: [
            { sourceType: 'mar', quote: 'D5 1/2NS 1000ml IV at 75ml/hr - running', documentName: 'MAR' }
          ],
          impact: {
            nta: { wouldChangeLevel: true, currentLevel: 'NF', newLevel: 'NG' }
          }
        }
      ],
      outstandingQueries: [
        {
          id: 'q-004',
          mdsItem: 'I5100',
          mdsItemName: 'Quadriplegia',
          status: 'sent',
          sentAt: new Date(Date.now() - 5 * 86400000).toISOString(),
          pdpmImpact: { wouldChangeHipps: false }
        }
      ],
      recentlySigned: [],
      compliance: {
        summary: { passed: 5, total: 5 },
        checks: {
          bims: { status: 'passed', message: 'BIMS completed' },
          phq9: { status: 'passed', message: 'PHQ-9 completed' },
          gg: { status: 'passed', message: 'GG completed' },
          orders: { status: 'passed', message: 'All orders signed' },
          therapyDocs: { status: 'passed', message: 'Therapy documentation complete' }
        }
      }
    }
  },

  // ════════════════════════════════════════════
  // PATIENT ASSESSMENTS (usePDPMAnalyzer patient scope)
  // ════════════════════════════════════════════
  patientAssessments: {
    '2657226': {
      patientName: 'Doe, Jane',
      assessments: [
        {
          id: '4860265',
          externalAssessmentId: '4860265',
          type: 'Quarterly',
          assessmentType: 'Quarterly',
          ardDate: '2026-01-13',
          status: 'open',
          currentHipps: 'KAQD',
          hipps: 'KAQD'
        },
        {
          id: '4855102',
          externalAssessmentId: '4855102',
          type: 'Annual',
          assessmentType: 'Annual',
          ardDate: '2025-12-15',
          status: 'locked',
          currentHipps: 'KAQD',
          hipps: 'KAQD'
        }
      ]
    },
    '2657300': {
      patientName: 'Smith, Robert',
      assessments: [
        {
          id: '4862100',
          externalAssessmentId: '4862100',
          type: '5-Day PPS',
          assessmentType: '5-Day PPS',
          ardDate: '2026-01-10',
          status: 'open',
          currentHipps: 'CBQJ',
          hipps: 'CBQJ'
        }
      ]
    }
  },

  // ════════════════════════════════════════════
  // ITEM DETAIL (useItemDetail - keyed by MDS code)
  // ════════════════════════════════════════════
  itemDetail: {
    'I5600': {
      item: {
        mdsItem: 'I5600',
        itemName: 'Aphasia',
        section: 'I',
        description: 'Aphasia — impairment of language, spoken or written, including inability to produce or comprehend speech.'
      },
      diagnosisSummary: {
        hasDocumentation: true,
        summary: 'SLP evaluation from 1/20 documents word-finding difficulties and reduced verbal fluency consistent with expressive aphasia. No aphasia ICD-10 code on active problem list.',
        recommendedIcd10: [
          { code: 'I69.320', description: 'Aphasia following cerebral infarction' },
          { code: 'R47.01', description: 'Aphasia' }
        ]
      },
      treatmentSummary: {
        hasActiveTreatment: true,
        summary: 'Patient receiving SLP therapy 3x/week targeting verbal expression and word-finding strategies.'
      },
      evidence: [
        {
          sourceType: 'clinical_note',
          sourceId: 'doc-001',
          documentName: 'SLP Evaluation',
          effectiveDate: '2026-01-20',
          quote: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia. Recommend continued language therapy.',
          rationale: 'Direct clinical assessment documenting aphasia symptoms.',
          pageNumber: 2
        },
        {
          sourceType: 'clinical_note',
          sourceId: 'doc-003',
          documentName: 'MD Progress Note',
          effectiveDate: '2026-01-22',
          quote: 'Progressive cognitive decline with communication difficulties. Speech therapy addressing expressive language deficits.',
          rationale: 'Physician documentation corroborating communication impairment.',
          pageNumber: 1
        }
      ]
    },

    'I4300': {
      item: {
        mdsItem: 'I4300',
        itemName: 'Diabetes Mellitus with Peripheral Vascular Disease',
        section: 'I',
        description: 'Active diagnosis of Diabetes Mellitus combined with Peripheral Vascular Disease.'
      },
      diagnosisSummary: {
        hasDocumentation: true,
        summary: 'Diabetes well documented with medications and lab monitoring. PVD symptoms noted in progress notes but no specific ICD-10 code on problem list.',
        recommendedIcd10: [
          { code: 'E11.51', description: 'Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene' },
          { code: 'I73.9', description: 'Peripheral vascular disease, unspecified' }
        ]
      },
      treatmentSummary: {
        hasActiveTreatment: true,
        summary: 'Metformin 500mg BID, blood glucose monitoring AC & HS, vascular checks per protocol.'
      },
      evidence: [
        {
          sourceType: 'lab_result',
          sourceId: 'doc-006',
          documentName: 'Lab Results',
          effectiveDate: '2026-01-18',
          quote: 'HbA1c: 8.2%, Fasting glucose: 186 mg/dL, GFR: 42, Creatinine: 1.8',
          rationale: 'Lab values confirming uncontrolled diabetes with renal involvement.'
        },
        {
          sourceType: 'clinical_note',
          sourceId: 'doc-003',
          documentName: 'MD Progress Note',
          effectiveDate: '2026-01-22',
          quote: 'Bilateral lower extremity edema with diminished pedal pulses noted. Continue diabetic foot care protocol. Compression stockings ordered.',
          rationale: 'Physician documentation of peripheral vascular disease symptoms.'
        },
        {
          sourceType: 'mar',
          sourceId: 'mar-001',
          documentName: 'MAR',
          effectiveDate: '2026-01-27',
          quote: 'Metformin 500mg PO BID — administered 0800, 1800',
          rationale: 'Active diabetes medication administration.'
        }
      ]
    },

    'O0400A3': {
      item: {
        mdsItem: 'O0400A3',
        itemName: 'IV Medications',
        section: 'O',
        description: 'IV Medications — received any type of IV medications during the lookback period.'
      },
      diagnosisSummary: null,
      treatmentSummary: {
        hasActiveTreatment: true,
        summary: 'Vancomycin 1g IV Q12H administered during lookback period for suspected infection.'
      },
      evidence: [
        {
          sourceType: 'mar',
          sourceId: 'mar-002',
          documentName: 'MAR',
          effectiveDate: '2026-01-13',
          quote: 'Vancomycin 1g IV Q12H — administered 1/12 2200, 1/13 1000, 1/13 2200',
          rationale: 'IV medication administration documented in MAR during lookback period.'
        },
        {
          sourceType: 'clinical_note',
          sourceId: 'doc-003',
          documentName: 'MD Progress Note',
          effectiveDate: '2026-01-12',
          quote: 'Started Vancomycin IV for suspected cellulitis. Monitor labs and clinical response.',
          rationale: 'Physician order for IV antibiotic corroborating MAR records.'
        }
      ]
    },

    'I2900': {
      item: {
        mdsItem: 'I2900',
        itemName: 'Drug/Medication Induced Depression',
        section: 'I',
        description: 'Drug or medication-induced depression — depression caused by or associated with medication side effects.'
      },
      diagnosisSummary: {
        hasDocumentation: false,
        summary: 'PHQ-9 not completed during lookback period. Multiple medications on profile (beta-blockers, opioids) associated with depressive side effects. Nursing notes mention low mood.',
        recommendedIcd10: [
          { code: 'F32.9', description: 'Major depressive disorder, single episode, unspecified' }
        ]
      },
      treatmentSummary: {
        hasActiveTreatment: false,
        summary: 'No active antidepressant therapy. No mental health referral on file.'
      },
      evidence: [
        {
          sourceType: 'clinical_note',
          sourceId: 'doc-007',
          documentName: 'Nursing Assessment',
          effectiveDate: '2026-01-25',
          quote: 'Patient reports feeling down and having little interest in activities. Declined recreational therapy today. States she "just wants to rest."',
          rationale: 'Nursing documentation of depressive symptoms.'
        }
      ]
    },

    'I5100': {
      item: {
        mdsItem: 'I5100',
        itemName: 'Hemiplegia/Hemiparesis',
        section: 'I',
        description: 'Hemiplegia or hemiparesis — paralysis or weakness affecting one side of the body.'
      },
      diagnosisSummary: {
        hasDocumentation: true,
        summary: 'Left hemiparesis following CVA well documented across PT, OT, and physician notes.',
        recommendedIcd10: [
          { code: 'I69.354', description: 'Hemiplegia and hemiparesis following cerebral infarction affecting left non-dominant side' }
        ]
      },
      treatmentSummary: {
        hasActiveTreatment: true,
        summary: 'Receiving PT 5x/week and OT 5x/week for functional mobility and ADL training.'
      },
      evidence: [
        {
          sourceType: 'clinical_note',
          sourceId: 'doc-010',
          documentName: 'PT Evaluation',
          effectiveDate: '2026-01-06',
          quote: 'Left-sided hemiparesis with 2/5 strength in left upper and lower extremities. Requires max assist for transfers and ambulation.',
          rationale: 'PT evaluation documenting hemiparesis severity and functional impact.'
        }
      ]
    },

    'K0510A': {
      item: {
        mdsItem: 'K0510A',
        itemName: 'Parenteral/IV Feeding',
        section: 'K',
        description: 'Parenteral or IV feeding received during the lookback period.'
      },
      diagnosisSummary: null,
      treatmentSummary: {
        hasActiveTreatment: true,
        summary: 'IV fluids (D5 1/2NS) administered during lookback period for hydration management.'
      },
      evidence: [
        {
          sourceType: 'mar',
          sourceId: 'mar-003',
          documentName: 'MAR',
          effectiveDate: '2026-01-08',
          quote: 'D5 1/2NS 1000ml IV at 75ml/hr — running continuously',
          rationale: 'Active IV fluid administration documented in MAR.'
        }
      ]
    }
  },

  // ════════════════════════════════════════════
  // QUERYABLE ITEMS (useQueryItems)
  // ════════════════════════════════════════════
  queryableItems: {
    assessment: {
      id: '4860265',
      externalAssessmentId: '4860265',
      patientId: '2657226',
      patientName: 'Doe, Jane',
      description: 'Quarterly',
      ardDate: '2026-01-13'
    },
    summary: {
      totalItems: 6,
      queryRecommended: 3,
      alreadyCoded: 1,
      recommendCoding: 2
    },
    items: [
      {
        mdsItem: 'I5600',
        mdsItemName: 'Aphasia',
        pdpmCategoryName: 'Aphasia',
        section: 'I',
        solverStatus: 'needs_physician_query',
        confidence: 0.92,
        rationale: 'SLP evaluation documents word-finding difficulties consistent with expressive aphasia. No ICD-10 code on active problem list — physician confirmation needed.',
        keyFindings: [
          'Word-finding difficulties documented in SLP evaluation',
          'Reduced verbal fluency noted',
          'No aphasia diagnosis on active problem list'
        ],
        evidence: [
          { sourceType: 'clinical_note', quote: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency.', documentName: 'SLP Evaluation' }
        ],
        queryEvidence: [
          { sourceType: 'clinical_note', quote: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia.', documentName: 'SLP Evaluation', effectiveDate: '2026-01-20' }
        ],
        recommendedIcd10: [
          { code: 'I69.320', description: 'Aphasia following cerebral infarction' },
          { code: 'R47.01', description: 'Aphasia' }
        ],
        existingQuery: null
      },
      {
        mdsItem: 'I4300',
        mdsItemName: 'Diabetes with PVD',
        pdpmCategoryName: 'Diabetes with Peripheral Vascular Disease',
        section: 'I',
        solverStatus: 'needs_physician_query',
        confidence: 0.85,
        rationale: 'Lab results confirm diabetes. PVD symptoms documented but no specific PVD ICD-10 code. Physician query needed to confirm combination diagnosis.',
        keyFindings: [
          'HbA1c 8.2% — uncontrolled diabetes',
          'Diminished pedal pulses documented',
          'No PVD diagnosis on problem list'
        ],
        evidence: [
          { sourceType: 'lab_result', quote: 'HbA1c: 8.2%, GFR: 42', documentName: 'Lab Results' },
          { sourceType: 'clinical_note', quote: 'Bilateral lower extremity edema with diminished pedal pulses.', documentName: 'MD Progress Note' }
        ],
        queryEvidence: [
          { sourceType: 'lab_result', quote: 'HbA1c: 8.2%, Fasting glucose: 186 mg/dL', documentName: 'Lab Results', effectiveDate: '2026-01-18' },
          { sourceType: 'clinical_note', quote: 'Bilateral lower extremity edema with diminished pedal pulses noted.', documentName: 'MD Progress Note', effectiveDate: '2026-01-22' }
        ],
        recommendedIcd10: [
          { code: 'E11.51', description: 'Type 2 DM with diabetic peripheral angiopathy' }
        ],
        existingQuery: null
      },
      {
        mdsItem: 'I2900',
        mdsItemName: 'Drug/Medication Induced Depression',
        pdpmCategoryName: 'Drug/Medication Induced Depression',
        section: 'I',
        solverStatus: 'needs_physician_query',
        confidence: 0.72,
        rationale: 'PHQ-9 missing. Nursing notes document depressive symptoms. Multiple medications with depressive side-effect profiles on MAR.',
        keyFindings: [
          'PHQ-9 assessment not completed',
          'Patient reports feeling down',
          'Multiple medications with depression side effects'
        ],
        evidence: [
          { sourceType: 'clinical_note', quote: 'Patient reports feeling down and having little interest in activities.', documentName: 'Nursing Assessment' }
        ],
        queryEvidence: [
          { sourceType: 'clinical_note', quote: 'Patient reports feeling down and having little interest in activities. Declined recreational therapy.', documentName: 'Nursing Assessment', effectiveDate: '2026-01-25' }
        ],
        recommendedIcd10: [
          { code: 'F32.9', description: 'Major depressive disorder, single episode, unspecified' }
        ],
        existingQuery: null
      },
      {
        mdsItem: 'O0400A3',
        mdsItemName: 'IV Medications',
        pdpmCategoryName: 'IV Medications',
        section: 'O',
        solverStatus: 'recommend_coding',
        confidence: 0.95,
        rationale: 'MAR confirms IV antibiotic administration during lookback period. This is a treatment item — can be coded based on documentation without physician query.',
        keyFindings: [
          'Vancomycin IV administered during lookback',
          'Physician order on file',
          'Can be coded without query'
        ],
        evidence: [
          { sourceType: 'mar', quote: 'Vancomycin 1g IV Q12H — administered 1/12, 1/13', documentName: 'MAR' }
        ],
        queryEvidence: [],
        recommendedIcd10: [],
        existingQuery: null
      },
      {
        mdsItem: 'I4900',
        mdsItemName: 'Schizophrenia',
        pdpmCategoryName: 'Schizophrenia',
        section: 'I',
        solverStatus: 'needs_physician_query',
        confidence: 0.45,
        rationale: 'Historical mention in old discharge summary. No recent documentation supporting active diagnosis.',
        keyFindings: [
          'Historical mention only',
          'No active symptoms documented',
          'Query already sent'
        ],
        evidence: [],
        queryEvidence: [],
        recommendedIcd10: [
          { code: 'F20.9', description: 'Schizophrenia, unspecified' }
        ],
        existingQuery: {
          id: 'q-003',
          status: 'sent',
          sentAt: new Date(Date.now() - 2 * 86400000).toISOString()
        }
      },
      {
        mdsItem: 'E11.9',
        mdsItemName: 'Type 2 Diabetes Mellitus',
        pdpmCategoryName: 'Diabetes Mellitus',
        section: 'I',
        solverStatus: 'already_coded',
        confidence: 0.98,
        rationale: 'E11.9 is on active problem list and well documented in clinical records.',
        keyFindings: [
          'ICD-10 E11.9 on problem list',
          'Active medications (Metformin)',
          'Lab monitoring in place'
        ],
        evidence: [
          { sourceType: 'diagnosis_list', quote: 'E11.9 - Type 2 Diabetes Mellitus without complications', documentName: 'Active Problem List' }
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
      id: 'pract-001',
      firstName: 'Demo',
      lastName: 'Provider',
      title: 'MD',
      name: 'Dr. Demo Provider',
      phone: '555-0101'
    },
    {
      id: 'pract-002',
      firstName: 'Sample',
      lastName: 'Doctor',
      title: 'DO',
      name: 'Dr. Sample Doctor',
      phone: '555-0102'
    },
    {
      id: 'pract-003',
      firstName: 'Jane',
      lastName: 'Specialist',
      title: 'NP',
      name: 'Jane Specialist, NP',
      phone: '555-0103'
    }
  ]
};
