/**
 * Super LTC Demo Data
 * Comprehensive mock data for full-featured demo environment
 */

const DemoData = {
  // ============================================
  // DEMO PATIENTS
  // ============================================
  patients: [
    {
      id: '2657226',
      externalId: '23630',
      name: 'Doe, Jane',
      room: '308-B',
      unit: 'Unit 3',
      dob: '04/12/1953',
      age: 72,
      gender: 'Female',
      physician: 'Dr. Demo Provider',
      payer: 'Medicaid Wisconsin',
      admitDate: '06/12/2020',
      status: 'Current',
      photo: null,
      allergies: 'No Known Allergies',
      codeStatus: 'DNR',
      vitals: {
        bp: { value: '147/80 mmHg', date: '1/27/2026 08:20', alert: true },
        temp: { value: '98.3 °F', date: '1/27/2026 08:20', alert: false },
        pulse: { value: '53 bpm', date: '1/27/2026 08:20', alert: true },
        weight: { value: '187 Lbs', date: '1/21/2026 20:37', alert: false },
        resp: { value: '18 Breaths/min', date: '1/27/2026 08:20', alert: false },
        bs: { value: '141 mg/dL', date: '1/27/2026 07:16', alert: false },
        o2: { value: '97 %', date: '1/27/2026 08:20', alert: false },
        pain: { value: '0', date: '1/27/2026 15:45', alert: false }
      }
    },
    {
      id: '2657300',
      externalId: '23645',
      name: 'Smith, Robert',
      room: '205-A',
      unit: 'Unit 2',
      dob: '08/22/1948',
      age: 77,
      gender: 'Male',
      physician: 'Dr. Sample Doctor',
      payer: 'Medicare Part A',
      admitDate: '01/05/2026',
      status: 'Current',
      allergies: 'Penicillin, Sulfa',
      codeStatus: 'Full Code',
      vitals: {
        bp: { value: '132/76 mmHg', date: '1/27/2026 09:15', alert: false },
        temp: { value: '98.6 °F', date: '1/27/2026 09:15', alert: false },
        pulse: { value: '72 bpm', date: '1/27/2026 09:15', alert: false },
        weight: { value: '165 Lbs', date: '1/26/2026 18:20', alert: false }
      }
    },
    {
      id: '2657450',
      externalId: '23672',
      name: 'Johnson, Mary',
      room: '112-B',
      unit: 'Unit 1',
      dob: '03/15/1940',
      age: 85,
      gender: 'Female',
      physician: 'Dr. Demo Provider',
      payer: 'Medicare Part A',
      admitDate: '01/15/2026',
      status: 'Current',
      allergies: 'Latex',
      codeStatus: 'DNR/DNI'
    },
    {
      id: '2657501',
      externalId: '23689',
      name: 'Wilson, James',
      room: '310-A',
      unit: 'Unit 3',
      dob: '11/08/1955',
      age: 70,
      gender: 'Male',
      physician: 'Dr. Sample Doctor',
      payer: 'Medicaid Wisconsin',
      admitDate: '12/20/2025',
      status: 'Current',
      allergies: 'No Known Allergies',
      codeStatus: 'Full Code'
    }
  ],

  // ============================================
  // DEMO DIAGNOSES (ICD-10)
  // ============================================
  diagnoses: {
    '2657226': [
      { code: 'J44.9', description: 'CHRONIC OBSTRUCTIVE PULMONARY DISEASE, UNSPECIFIED', pdpm: 'NTA (2 pts)', category: 'Pulmonary', date: '6/12/2020', rank: 'Principal DX', classification: 'Admitting Dx' },
      { code: 'J43.1', description: 'PANLOBULAR EMPHYSEMA', pdpm: 'NTA (2 pts)', category: 'Pulmonary', date: '6/12/2020', rank: 'Diagnosis A', classification: 'Admission' },
      { code: 'E66.01', description: 'MORBID (SEVERE) OBESITY DUE TO EXCESS CALORIES', pdpm: 'NTA (1 pts)', category: 'N/A', date: '6/12/2020', rank: 'Diagnosis B', classification: 'Admission' },
      { code: 'F10.239', description: 'ALCOHOL DEPENDENCE WITH WITHDRAWAL, UNSPECIFIED', pdpm: null, category: 'Medical Management', date: '6/12/2020', rank: 'Diagnosis C', classification: 'Admission' },
      { code: 'I10', description: 'ESSENTIAL (PRIMARY) HYPERTENSION', pdpm: null, category: 'N/A', date: '6/12/2020', rank: 'Diagnosis D', classification: 'Admission' },
      { code: 'G47.33', description: 'OBSTRUCTIVE SLEEP APNEA (ADULT) (PEDIATRIC)', pdpm: null, category: 'Medical Management', date: '6/12/2020', rank: 'Diagnosis E', classification: 'Admission' },
      { code: 'E11.9', description: 'TYPE 2 DIABETES MELLITUS WITHOUT COMPLICATIONS', pdpm: 'NTA (2 pts)', category: 'Medical Management', date: '10/2/2020', rank: 'Diagnosis F', classification: 'During Stay' },
      { code: 'I82.513', description: 'CHRONIC EMBOLISM AND THROMBOSIS OF FEMORAL VEIN, BILATERAL', pdpm: null, category: 'Cardiovascular and Coagulations', date: '6/12/2020', rank: 'Diagnosis G', classification: 'Admission' },
      { code: 'G47.00', description: 'INSOMNIA, UNSPECIFIED', pdpm: null, category: 'N/A', date: '7/24/2024', rank: 'Diagnosis H', classification: 'During Stay' }
    ],
    '2657300': [
      { code: 'I63.9', description: 'CEREBRAL INFARCTION, UNSPECIFIED', pdpm: null, category: 'Stroke', date: '1/5/2026', rank: 'Principal DX', classification: 'Admitting Dx' },
      { code: 'I69.354', description: 'HEMIPLEGIA AND HEMIPARESIS FOLLOWING CEREBRAL INFARCTION AFFECTING LEFT NON-DOMINANT SIDE', pdpm: 'NTA (4 pts)', category: 'Stroke', date: '1/5/2026', rank: 'Diagnosis A', classification: 'Admission' },
      { code: 'R13.10', description: 'DYSPHAGIA, UNSPECIFIED', pdpm: 'SLP (2 pts)', category: 'SLP', date: '1/6/2026', rank: 'Diagnosis B', classification: 'During Stay' },
      { code: 'I10', description: 'ESSENTIAL (PRIMARY) HYPERTENSION', pdpm: null, category: 'N/A', date: '1/5/2026', rank: 'Diagnosis C', classification: 'Admission' }
    ]
  },

  // ============================================
  // MDS ASSESSMENTS
  // ============================================
  assessments: {
    '2657226': [
      {
        id: '4860265',
        externalAssessmentId: '4860265',
        type: 'Quarterly',
        ardDate: '2026-01-13',
        status: 'open',
        obraReason: 'Quarterly',
        ppsReason: 'None of the above',
        currentHipps: 'KAQD',
        potentialHipps: 'KBQE',
        components: {
          ptot: { current: 'TK', potential: 'TL' },
          slp: { current: 'SA', potential: 'SB' },
          nursing: { current: 'CA1', potential: 'CB1' },
          nta: { current: 'ND', potential: 'NE' }
        },
        actionCount: 3,
        queryCount: 1
      },
      {
        id: '4855102',
        externalAssessmentId: '4855102',
        type: 'Annual',
        ardDate: '2025-12-15',
        status: 'locked',
        currentHipps: 'KAQD',
        actionCount: 0,
        queryCount: 0
      }
    ],
    '2657300': [
      {
        id: '4862100',
        externalAssessmentId: '4862100',
        type: '5-Day PPS',
        ardDate: '2026-01-10',
        status: 'open',
        currentHipps: 'CBQJ',
        potentialHipps: 'CBQL',
        actionCount: 5,
        queryCount: 2
      }
    ]
  },

  // ============================================
  // FACILITY DASHBOARD DATA
  // ============================================
  facilityDashboard: {
    facilityName: 'SUNNY MEADOWS DEMO FACILITY',
    facilityId: '34',
    census: 91,

    queriesToSend: [
      {
        id: 'q-001',
        patientId: '2657226',
        patientExternalId: '23630',
        patientName: 'Doe, Jane',
        mdsItem: 'I5600',
        mdsItemName: 'Aphasia',
        mdsExternalAssessmentId: '4860265',
        status: 'draft'
      },
      {
        id: 'q-002',
        patientId: '2657300',
        patientExternalId: '23645',
        patientName: 'Smith, Robert',
        mdsItem: 'K0510A',
        mdsItemName: 'Parenteral/IV Feeding',
        mdsExternalAssessmentId: '4862100',
        status: 'draft'
      }
    ],

    awaitingSignatures: [
      {
        id: 'q-003',
        patientId: '2657226',
        patientExternalId: '23630',
        patientName: 'Doe, Jane',
        mdsItem: 'I4900',
        mdsItemName: 'Schizophrenia',
        mdsExternalAssessmentId: '4860265',
        status: 'sent',
        sentAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        physicianName: 'Dr. Demo Provider'
      },
      {
        id: 'q-004',
        patientId: '2657300',
        patientExternalId: '23645',
        patientName: 'Smith, Robert',
        mdsItem: 'I5100',
        mdsItemName: 'Quadriplegia',
        mdsExternalAssessmentId: '4862100',
        status: 'sent',
        sentAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        physicianName: 'Dr. Sample Doctor'
      }
    ],

    recentlySigned: [
      {
        id: 'q-005',
        patientId: '2657226',
        patientExternalId: '23630',
        patientName: 'Doe, Jane',
        mdsItem: 'I6200',
        mdsItemName: 'Diabetes Mellitus',
        mdsExternalAssessmentId: '4860265',
        status: 'signed',
        signedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        mdsItemCoded: false,
        pdfPath: '/Users/andrewburns/Downloads/query_jutxlrwthshb_45_NTA (3).pdf'
      }
    ],

    hippsOpportunities: [
      {
        id: '4860265',
        externalAssessmentId: '4860265',
        patientId: '2657226',
        patientName: 'Doe, Jane',
        currentHipps: 'KAQD',
        potentialHipps: 'KBQE',
        hippsChangingCount: 3
      },
      {
        id: '4862100',
        externalAssessmentId: '4862100',
        patientId: '2657300',
        patientName: 'Smith, Robert',
        currentHipps: 'CBQJ',
        potentialHipps: 'CBQL',
        hippsChangingCount: 5
      }
    ],

    complianceRisks: [
      {
        id: '4860265',
        externalAssessmentId: '4860265',
        patientId: '2657226',
        patientName: 'Doe, Jane',
        complianceIssues: ['Missing PHQ-9', 'Unsigned Orders']
      }
    ],

    allAssessments: [
      {
        externalAssessmentId: '4860265',
        patientId: '2657226',
        patientName: 'Doe, Jane',
        mdsType: 'Quarterly',
        ardDate: '2026-01-13',
        status: 'open',
        currentHipps: 'KAQD',
        potentialHipps: 'KBQE',
        hippsItemCount: 3,
        pendingQueryCount: 1,
        complianceStatus: 'warning',
        complianceIssues: ['Missing PHQ-9']
      },
      {
        externalAssessmentId: '4862100',
        patientId: '2657300',
        patientName: 'Smith, Robert',
        mdsType: '5-Day PPS',
        ardDate: '2026-01-10',
        status: 'open',
        currentHipps: 'CBQJ',
        potentialHipps: 'CBQL',
        hippsItemCount: 5,
        pendingQueryCount: 2,
        complianceStatus: 'passed'
      },
      {
        externalAssessmentId: '4863500',
        patientId: '2657450',
        patientName: 'Johnson, Mary',
        mdsType: '5-Day PPS',
        ardDate: '2026-01-20',
        status: 'open',
        currentHipps: 'LAQF',
        potentialHipps: null,
        hippsItemCount: 0,
        pendingQueryCount: 0,
        complianceStatus: 'passed'
      }
    ]
  },

  // ============================================
  // MDS PDPM POTENTIAL DATA (for single MDS view)
  // ============================================
  mdsPdpmPotential: {
    '4860265': {
      success: true,
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
      enhancedDetections: [
        {
          mdsItem: 'I5600',
          itemName: 'Aphasia',
          section: 'I',
          wouldChangeHipps: true,
          solverStatus: 'detected',
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
          impact: {
            nursing: { wouldChangeGroup: true, currentPaymentGroup: 'CA1', newPaymentGroup: 'CB1' }
          }
        },
        {
          mdsItem: 'I2900',
          itemName: 'Drug/Medication induced depression',
          section: 'I',
          wouldChangeHipps: false,
          solverStatus: 'detected'
        }
      ],
      outstandingQueries: [
        {
          id: 'q-003',
          mdsItem: 'I4900',
          mdsItemName: 'Schizophrenia',
          status: 'sent',
          sentAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          pdpmImpact: {
            wouldChangeHipps: false
          }
        }
      ],
      recentlySigned: [
        {
          id: 'q-005',
          mdsItem: 'I6200',
          mdsItemName: 'Diabetes Mellitus',
          status: 'signed',
          signedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          mdsItemCoded: false
        }
      ],
      compliance: {
        summary: { passed: 4, total: 5 },
        checks: {
          bims: { status: 'passed', message: 'BIMS completed', foundUda: { description: 'BIMS Assessment', date: '2026-01-12', lockedDate: '2026-01-12' }},
          phq9: { status: 'failed', message: 'PHQ-9 not found in lookback period' },
          gg: { status: 'passed', message: 'GG completed', foundUda: { description: 'GG Functional Assessment', date: '2026-01-11', lockedDate: '2026-01-12' }},
          orders: { status: 'passed', message: 'All orders signed' },
          therapyDocs: { status: 'passed', message: 'Therapy documentation complete' }
        }
      }
    }
  },

  // ============================================
  // ICD-10 CODING DATA
  // ============================================
  icd10Annotations: {
    '2657226': [
      {
        id: 'ann-001',
        icd10Code: 'I69.320',
        description: 'Aphasia following cerebral infarction',
        category: 'nta',
        confidence: 0.92,
        rank: 1,
        quoteText: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia.',
        documentId: 'doc-001',
        documentName: 'SLP_Evaluation_1_20',
        pageNumber: 2,
        wordBlockIndices: [45, 46, 47, 48, 49, 50]
      },
      {
        id: 'ann-002',
        icd10Code: 'G30.9',
        description: "Alzheimer's disease, unspecified",
        category: 'nta',
        confidence: 0.78,
        rank: 2,
        quoteText: 'Progressive cognitive decline with impaired short-term memory, disorientation to time and place, consistent with dementia.',
        documentId: 'doc-003',
        documentName: 'MD_Progress_Note_1_22',
        pageNumber: 1,
        wordBlockIndices: [120, 121, 122, 123, 124, 125]
      },
      {
        id: 'ann-003',
        icd10Code: 'R13.10',
        description: 'Dysphagia, unspecified',
        category: 'slp',
        confidence: 0.95,
        rank: 1,
        quoteText: 'Patient failed bedside swallow evaluation. Demonstrates delayed oral transit time and reduced laryngeal elevation.',
        documentId: 'doc-001',
        documentName: 'SLP_Evaluation_1_20',
        pageNumber: 4,
        wordBlockIndices: [200, 201, 202, 203, 204, 205]
      },
      {
        id: 'ann-004',
        icd10Code: 'N18.3',
        description: 'Chronic kidney disease, stage 3 (moderate)',
        category: 'other',
        confidence: 0.90,
        rank: 1,
        quoteText: 'Labs from 1/18: GFR 42, Creatinine 1.8. Patient has known CKD Stage 3.',
        documentId: 'doc-006',
        documentName: 'Lab_Results_1_18',
        pageNumber: 1,
        wordBlockIndices: [30, 31, 32, 33]
      }
    ]
  },

  // ============================================
  // DOCUMENTS (for PDF viewer)
  // ============================================
  documents: {
    'doc-001': {
      id: 'doc-001',
      title: 'SLP Evaluation',
      documentType: 'SLP_EVAL',
      effectiveDate: '2026-01-20',
      signedUrl: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf',
      pageCount: 5
    },
    'doc-003': {
      id: 'doc-003',
      title: 'MD Progress Note',
      documentType: 'MD_NOTE',
      effectiveDate: '2026-01-22',
      signedUrl: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf',
      pageCount: 3
    },
    'doc-006': {
      id: 'doc-006',
      title: 'Lab Results',
      documentType: 'LAB',
      effectiveDate: '2026-01-18',
      signedUrl: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf',
      pageCount: 1
    }
  },

  // ============================================
  // MAR/TAR DATA
  // ============================================
  marData: {
    '2657226': {
      medications: [
        { name: 'Lisinopril 10mg', schedule: 'Daily 0800', route: 'PO', status: 'active', lastAdmin: '1/27/2026 08:05' },
        { name: 'Metformin 500mg', schedule: 'BID 0800/1800', route: 'PO', status: 'active', lastAdmin: '1/27/2026 08:05' },
        { name: 'Omeprazole 20mg', schedule: 'Daily 0800', route: 'PO', status: 'active', lastAdmin: '1/27/2026 08:05' },
        { name: 'Atorvastatin 40mg', schedule: 'Daily 2100', route: 'PO', status: 'active', lastAdmin: '1/26/2026 21:00' },
        { name: 'Albuterol Nebulizer', schedule: 'Q4H PRN', route: 'INH', status: 'prn', lastAdmin: '1/27/2026 06:30' },
        { name: 'Acetaminophen 650mg', schedule: 'Q6H PRN', route: 'PO', status: 'prn', lastAdmin: '1/26/2026 22:15' }
      ]
    }
  },

  tarData: {
    '2657226': {
      treatments: [
        { name: 'Blood Pressure Check', schedule: 'TID', status: 'active', lastPerformed: '1/27/2026 08:20' },
        { name: 'Blood Glucose Check', schedule: 'AC & HS', status: 'active', lastPerformed: '1/27/2026 07:16' },
        { name: 'O2 Saturation Check', schedule: 'Q Shift', status: 'active', lastPerformed: '1/27/2026 08:20' },
        { name: 'CPAP - Nightly', schedule: 'HS', status: 'active', lastPerformed: '1/26/2026 21:30' },
        { name: 'Daily Weights', schedule: 'QD', status: 'active', lastPerformed: '1/21/2026 20:37' },
        { name: 'Fall Prevention Protocol', schedule: 'Ongoing', status: 'active', lastPerformed: 'Ongoing' }
      ]
    }
  },

  // ============================================
  // THERAPY MINUTES
  // ============================================
  therapyMinutes: {
    '2657226': {
      pt: { total: 450, goal: 720, sessions: 8 },
      ot: { total: 380, goal: 600, sessions: 7 },
      slp: { total: 180, goal: 300, sessions: 4 }
    },
    '2657300': {
      pt: { total: 120, goal: 720, sessions: 2 },
      ot: { total: 90, goal: 600, sessions: 2 },
      slp: { total: 60, goal: 300, sessions: 1 }
    }
  }
};

// Helper to get patient by ID
DemoData.getPatient = function(patientId) {
  return this.patients.find(p => p.id === patientId || p.externalId === patientId);
};

// Helper to get diagnoses for patient
DemoData.getDiagnoses = function(patientId) {
  return this.diagnoses[patientId] || [];
};

// Helper to get assessments for patient
DemoData.getAssessments = function(patientId) {
  return this.assessments[patientId] || [];
};

// Make available globally
window.DemoData = DemoData;
