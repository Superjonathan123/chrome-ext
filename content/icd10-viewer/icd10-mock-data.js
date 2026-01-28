/**
 * Mock Data for ICD-10 Viewer Development
 * This provides realistic test data for the ICD-10 coding viewer
 */

const ICD10MockData = {
  // Sample patient info
  patient: {
    id: 'patient-123',
    name: 'Smith, John',
    mrn: '12345678',
    dob: '1945-03-15'
  },

  // Sample approved diagnoses (already coded in PCC)
  approvedDiagnoses: [
    { icd10Code: 'I10', description: 'Essential (primary) hypertension', onsetDate: '2024-01-15' },
    { icd10Code: 'E11.9', description: 'Type 2 diabetes mellitus without complications', onsetDate: '2024-02-01' },
    { icd10Code: 'J44.9', description: 'Chronic obstructive pulmonary disease, unspecified', onsetDate: '2024-03-10' }
  ],

  // Sample annotations with different categories
  annotations: [
    // NTA (Nursing, Therapy, Activities) Category
    {
      id: 'ann-001',
      icd10Code: 'I69.320',
      description: 'Aphasia following cerebral infarction',
      category: 'nta',
      confidence: 0.92,
      rank: 1,
      quoteText: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia following stroke on 12/15/2024.',
      documentId: 'doc-001',
      documentName: 'SLP_Evaluation_1_20',
      pageNumber: 2,
      wordBlocks: [
        { x: 0.12, y: 0.35, w: 0.76, h: 0.025, p: 2 }
      ]
    },
    {
      id: 'ann-002',
      icd10Code: 'I69.354',
      description: 'Hemiplegia and hemiparesis following cerebral infarction affecting left non-dominant side',
      category: 'nta',
      confidence: 0.88,
      rank: 2,
      quoteText: 'Left-sided weakness noted with 3/5 strength in upper extremity and 2/5 in lower extremity. Patient requires max assist for transfers.',
      documentId: 'doc-002',
      documentName: 'PT_Progress_Note_1_18',
      pageNumber: 1,
      wordBlocks: [
        { x: 0.10, y: 0.45, w: 0.80, h: 0.05, p: 1 }
      ]
    },
    {
      id: 'ann-003',
      icd10Code: 'G30.9',
      description: "Alzheimer's disease, unspecified",
      category: 'nta',
      confidence: 0.75,
      rank: 3,
      quoteText: 'Documented progressive cognitive decline with impaired short-term memory, disorientation to time and place, consistent with dementia. Family reports diagnosis of Alzheimers.',
      documentId: 'doc-003',
      documentName: 'MD_Progress_Note_1_22',
      pageNumber: 3,
      wordBlocks: [
        { x: 0.08, y: 0.62, w: 0.84, h: 0.035, p: 3 }
      ]
    },
    {
      id: 'ann-004',
      icd10Code: 'R93.422',
      description: 'Abnormal radiologic findings on diagnostic imaging of left kidney',
      category: 'nta',
      confidence: 0.85,
      rank: 4,
      quoteText: 'Left kidney: 10.5 cm long; increased parenchymal echogenicity with cortical thinning noted.',
      documentId: 'doc-004',
      documentName: 'Radiology_Report_1_15',
      pageNumber: 1,
      wordBlocks: [
        { x: 0.15, y: 0.28, w: 0.70, h: 0.04, p: 1 }
      ]
    },

    // SLP (Speech-Language Pathology) Category
    {
      id: 'ann-005',
      icd10Code: 'R13.10',
      description: 'Dysphagia, unspecified',
      category: 'slp',
      confidence: 0.95,
      rank: 1,
      quoteText: 'Patient failed bedside swallow evaluation. Demonstrates delayed oral transit time and reduced laryngeal elevation. NPO recommended pending MBSS.',
      documentId: 'doc-001',
      documentName: 'SLP_Evaluation_1_20',
      pageNumber: 4,
      wordBlocks: [
        { x: 0.10, y: 0.55, w: 0.80, h: 0.06, p: 4 }
      ]
    },
    {
      id: 'ann-006',
      icd10Code: 'R47.02',
      description: 'Dysarthria',
      category: 'slp',
      confidence: 0.82,
      rank: 2,
      quoteText: 'Speech characterized by imprecise consonants, monopitch, and reduced loudness. Consistent with hypokinetic dysarthria secondary to CVA.',
      documentId: 'doc-001',
      documentName: 'SLP_Evaluation_1_20',
      pageNumber: 3,
      wordBlocks: [
        { x: 0.12, y: 0.72, w: 0.76, h: 0.045, p: 3 }
      ]
    },
    {
      id: 'ann-007',
      icd10Code: 'F03.90',
      description: 'Unspecified dementia without behavioral disturbance',
      category: 'slp',
      confidence: 0.68,
      rank: 3,
      quoteText: 'Cognitive-linguistic assessment reveals deficits in attention, memory, and executive function. SLUMS score: 14/30 indicating dementia.',
      documentId: 'doc-005',
      documentName: 'SLP_Cognitive_Eval_1_21',
      pageNumber: 2,
      wordBlocks: [
        { x: 0.08, y: 0.38, w: 0.84, h: 0.055, p: 2 }
      ]
    },

    // Other Category
    {
      id: 'ann-008',
      icd10Code: 'N18.3',
      description: 'Chronic kidney disease, stage 3 (moderate)',
      category: 'other',
      confidence: 0.90,
      rank: 1,
      quoteText: 'Labs from 1/18: GFR 42, Creatinine 1.8. Patient has known CKD Stage 3.',
      documentId: 'doc-006',
      documentName: 'Lab_Results_1_18',
      pageNumber: 1,
      wordBlocks: [
        { x: 0.20, y: 0.15, w: 0.60, h: 0.03, p: 1 }
      ]
    },
    {
      id: 'ann-009',
      icd10Code: 'M54.5',
      description: 'Low back pain',
      category: 'other',
      confidence: 0.78,
      rank: 2,
      quoteText: 'Patient reports chronic low back pain, worse with activity. Pain level 6/10. Taking Tylenol PRN with partial relief.',
      documentId: 'doc-003',
      documentName: 'MD_Progress_Note_1_22',
      pageNumber: 1,
      wordBlocks: [
        { x: 0.10, y: 0.82, w: 0.80, h: 0.04, p: 1 }
      ]
    },
    {
      id: 'ann-010',
      icd10Code: 'Z87.11',
      description: 'Personal history of peptic ulcer disease',
      category: 'other',
      confidence: 0.65,
      rank: 3,
      quoteText: 'PMH includes: HTN, DM2, COPD, h/o peptic ulcer disease (2018)',
      documentId: 'doc-007',
      documentName: 'H&P_Admission_1_10',
      pageNumber: 2,
      wordBlocks: [
        { x: 0.12, y: 0.25, w: 0.50, h: 0.025, p: 2 }
      ]
    },
    {
      id: 'ann-011',
      icd10Code: 'E78.5',
      description: 'Hyperlipidemia, unspecified',
      category: 'other',
      confidence: 0.88,
      rank: 4,
      quoteText: 'Lipid panel: Total cholesterol 245, LDL 165, HDL 38, Triglycerides 210. Continue statin therapy.',
      documentId: 'doc-006',
      documentName: 'Lab_Results_1_18',
      pageNumber: 1,
      wordBlocks: [
        { x: 0.20, y: 0.45, w: 0.60, h: 0.035, p: 1 }
      ]
    },
    {
      id: 'ann-012',
      icd10Code: 'G47.33',
      description: 'Obstructive sleep apnea (adult) (pediatric)',
      category: 'other',
      confidence: 0.72,
      rank: 5,
      quoteText: 'Patient uses CPAP nightly for diagnosed OSA. Compliance per family is good.',
      documentId: 'doc-007',
      documentName: 'H&P_Admission_1_10',
      pageNumber: 3,
      wordBlocks: [
        { x: 0.10, y: 0.68, w: 0.65, h: 0.03, p: 3 }
      ]
    },
    {
      id: 'ann-013',
      icd10Code: 'K21.0',
      description: 'Gastro-esophageal reflux disease with esophagitis',
      category: 'other',
      confidence: 0.70,
      rank: 6,
      quoteText: 'Taking omeprazole 20mg daily for GERD. Reports occasional heartburn controlled with medication.',
      documentId: 'doc-003',
      documentName: 'MD_Progress_Note_1_22',
      pageNumber: 2,
      wordBlocks: [
        { x: 0.08, y: 0.52, w: 0.72, h: 0.035, p: 2 }
      ]
    }
  ],

  // Sample documents with presigned URLs
  documents: {
    'doc-001': {
      id: 'doc-001',
      title: 'SLP Evaluation',
      documentType: 'SLP_EVAL',
      effectiveDate: '2025-01-20',
      signedUrl: 'https://example.com/sample.pdf',
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      pageCount: 5
    },
    'doc-002': {
      id: 'doc-002',
      title: 'PT Progress Note',
      documentType: 'PT_NOTE',
      effectiveDate: '2025-01-18',
      signedUrl: 'https://example.com/sample.pdf',
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      pageCount: 2
    },
    'doc-003': {
      id: 'doc-003',
      title: 'MD Progress Note',
      documentType: 'MD_NOTE',
      effectiveDate: '2025-01-22',
      signedUrl: 'https://example.com/sample.pdf',
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      pageCount: 4
    },
    'doc-004': {
      id: 'doc-004',
      title: 'Radiology Report',
      documentType: 'RADIOLOGY',
      effectiveDate: '2025-01-15',
      signedUrl: 'https://example.com/sample.pdf',
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      pageCount: 2
    },
    'doc-005': {
      id: 'doc-005',
      title: 'SLP Cognitive Evaluation',
      documentType: 'SLP_EVAL',
      effectiveDate: '2025-01-21',
      signedUrl: 'https://example.com/sample.pdf',
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      pageCount: 3
    },
    'doc-006': {
      id: 'doc-006',
      title: 'Lab Results',
      documentType: 'LAB',
      effectiveDate: '2025-01-18',
      signedUrl: 'https://example.com/sample.pdf',
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      pageCount: 1
    },
    'doc-007': {
      id: 'doc-007',
      title: 'H&P Admission',
      documentType: 'H&P',
      effectiveDate: '2025-01-10',
      signedUrl: 'https://example.com/sample.pdf',
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      pageCount: 4
    }
  }
};

// Expose globally
window.ICD10MockData = ICD10MockData;
