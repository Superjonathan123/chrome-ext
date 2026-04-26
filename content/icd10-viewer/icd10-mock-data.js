/**
 * Mock Data for ICD-10 Viewer Development
 * This provides realistic test data for the ICD-10 coding viewer
 */

const ICD10MockData = {
  // Sample patient info
  patient: {
    id: 'patient-123',
    name: 'Doe, Jane',
    mrn: '00000000',
    dob: '1945-01-01'
  },

  // Sample approved diagnoses (already coded in PCC)
  approvedDiagnoses: [
    { icd10Code: 'I10', description: 'Essential (primary) hypertension', onsetDate: '2024-01-15' },
    { icd10Code: 'E11.9', description: 'Type 2 diabetes mellitus without complications', onsetDate: '2024-02-01' },
    { icd10Code: 'J44.9', description: 'Chronic obstructive pulmonary disease, unspecified', onsetDate: '2024-03-10' }
  ],

  // New API response shape with topRanked groups and speculative
  apiResponse: {
    admitDate: '2025-01-10',
    annotations: {
      topRanked: [
        {
          groupId: 'grp-I69',
          groupCode: 'I69',
          groupName: 'Sequelae of cerebrovascular disease',
          rank: 1,
          isTopFive: true,
          evidenceStrength: 'strong',
          rationale: 'Multiple clinical documents confirm post-stroke deficits with high-confidence evidence across SLP and PT evaluations.',
          annotationCount: 3,
          documentCount: 2,
          pdpmCategory: 'SLP',
          annotations: [
            {
              id: 'ann-001',
              icd10Code: 'I69.320',
              description: 'Aphasia following cerebral infarction',
              category: 'slp',
              confidence: 0.92,
              rank: 1,
              evidenceStrength: 'strong',
              quoteText: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia following stroke on 12/15/2024.',
              documentId: 'doc-001',
              documentName: 'SLP_Evaluation_1_20',
              pageNumber: 2,
              wordBlocks: [
                { x: 0.12, y: 0.35, w: 0.76, h: 0.025, p: 2 }
              ],
              options: [
                { code: 'I69.320', description: 'Aphasia following cerebral infarction', confidence: 0.92 },
                { code: 'I69.328', description: 'Other speech and language deficits following cerebral infarction', confidence: 0.74, category: 'slp' }
              ]
            },
            {
              id: 'ann-002',
              icd10Code: 'I69.354',
              description: 'Hemiplegia and hemiparesis following cerebral infarction affecting left non-dominant side',
              category: 'slp',
              confidence: 0.88,
              rank: 2,
              evidenceStrength: 'strong',
              quoteText: 'Left-sided weakness noted with 3/5 strength in upper extremity and 2/5 in lower extremity. Patient requires max assist for transfers.',
              documentId: 'doc-002',
              documentName: 'PT_Progress_Note_1_18',
              pageNumber: 1,
              wordBlocks: [
                { x: 0.10, y: 0.45, w: 0.80, h: 0.05, p: 1 }
              ]
            },
            {
              id: 'ann-014',
              icd10Code: 'I69.391',
              description: 'Dysphagia following cerebral infarction',
              category: 'slp',
              confidence: 0.85,
              rank: 3,
              evidenceStrength: 'moderate',
              quoteText: 'Patient failed bedside swallow evaluation following CVA. Delayed oral transit time noted.',
              documentId: 'doc-001',
              documentName: 'SLP_Evaluation_1_20',
              pageNumber: 4,
              wordBlocks: [
                { x: 0.10, y: 0.55, w: 0.80, h: 0.06, p: 4 }
              ]
            }
          ]
        },
        {
          groupId: 'grp-G30',
          groupCode: 'G30',
          groupName: "Alzheimer's disease",
          rank: 2,
          isTopFive: true,
          evidenceStrength: 'moderate',
          rationale: 'Family-reported diagnosis with supporting cognitive assessment findings, though formal neuropsych testing not available.',
          annotationCount: 2,
          documentCount: 2,
          pdpmCategory: null,
          annotations: [
            {
              id: 'ann-003',
              icd10Code: 'G30.9',
              description: "Alzheimer's disease, unspecified",
              category: 'other',
              confidence: 0.75,
              rank: 1,
              evidenceStrength: 'moderate',
              quoteText: 'Documented progressive cognitive decline with impaired short-term memory, disorientation to time and place, consistent with dementia. Family reports diagnosis of Alzheimers.',
              documentId: 'doc-003',
              documentName: 'MD_Progress_Note_1_22',
              pageNumber: 3,
              wordBlocks: [
                { x: 0.08, y: 0.62, w: 0.84, h: 0.035, p: 3 }
              ],
              options: [
                { code: 'G30.9', description: "Alzheimer's disease, unspecified", confidence: 0.75 },
                { code: 'G30.1', description: "Alzheimer's disease with late onset", confidence: 0.68, category: 'other' },
                { code: 'F02.80', description: 'Dementia in other diseases classified elsewhere without behavioral disturbance', confidence: 0.52, category: 'other' }
              ]
            },
            {
              id: 'ann-007',
              icd10Code: 'F03.90',
              description: 'Unspecified dementia without behavioral disturbance',
              category: 'other',
              confidence: 0.68,
              rank: 2,
              evidenceStrength: 'moderate',
              quoteText: 'Cognitive-linguistic assessment reveals deficits in attention, memory, and executive function. SLUMS score: 14/30 indicating dementia.',
              documentId: 'doc-005',
              documentName: 'SLP_Cognitive_Eval_1_21',
              pageNumber: 2,
              wordBlocks: [
                { x: 0.08, y: 0.38, w: 0.84, h: 0.055, p: 2 }
              ]
            }
          ]
        },
        {
          groupId: 'grp-R13',
          groupCode: 'R13',
          groupName: 'Dysphagia',
          rank: 3,
          isTopFive: true,
          evidenceStrength: 'strong',
          rationale: 'Failed bedside swallow with documented aspiration risk. MBSS recommended.',
          annotationCount: 1,
          documentCount: 1,
          pdpmCategory: 'SLP',
          annotations: [
            {
              id: 'ann-005',
              icd10Code: 'R13.10',
              description: 'Dysphagia, unspecified',
              category: 'slp',
              confidence: 0.95,
              rank: 1,
              evidenceStrength: 'strong',
              quoteText: 'Patient failed bedside swallow evaluation. Demonstrates delayed oral transit time and reduced laryngeal elevation. NPO recommended pending MBSS.',
              documentId: 'doc-001',
              documentName: 'SLP_Evaluation_1_20',
              pageNumber: 4,
              wordBlocks: [
                { x: 0.10, y: 0.55, w: 0.80, h: 0.06, p: 4 }
              ],
              options: [
                { code: 'R13.10', description: 'Dysphagia, unspecified', confidence: 0.95 },
                { code: 'R13.19', description: 'Other dysphagia', confidence: 0.72, category: 'slp' }
              ]
            }
          ]
        },
        {
          groupId: 'grp-N18',
          groupCode: 'N18',
          groupName: 'Chronic kidney disease',
          rank: 4,
          isTopFive: true,
          evidenceStrength: 'strong',
          rationale: 'Lab-confirmed CKD Stage 3 with eGFR 42 and elevated creatinine.',
          annotationCount: 1,
          documentCount: 1,
          pdpmCategory: null,
          annotations: [
            {
              id: 'ann-008',
              icd10Code: 'N18.3',
              description: 'Chronic kidney disease, stage 3 (moderate)',
              category: 'other',
              confidence: 0.90,
              rank: 1,
              evidenceStrength: 'strong',
              quoteText: 'Labs from 1/18: GFR 42, Creatinine 1.8. Patient has known CKD Stage 3.',
              documentId: 'doc-006',
              documentName: 'Lab_Results_1_18',
              pageNumber: 1,
              wordBlocks: [
                { x: 0.20, y: 0.15, w: 0.60, h: 0.03, p: 1 }
              ]
            }
          ]
        },
        {
          groupId: 'grp-R47',
          groupCode: 'R47',
          groupName: 'Speech disturbances',
          rank: 5,
          isTopFive: true,
          evidenceStrength: 'moderate',
          rationale: 'Documented dysarthria consistent with CVA sequelae.',
          annotationCount: 1,
          documentCount: 1,
          pdpmCategory: 'SLP',
          annotations: [
            {
              id: 'ann-006',
              icd10Code: 'R47.02',
              description: 'Dysarthria',
              category: 'slp',
              confidence: 0.82,
              rank: 1,
              evidenceStrength: 'moderate',
              quoteText: 'Speech characterized by imprecise consonants, monopitch, and reduced loudness. Consistent with hypokinetic dysarthria secondary to CVA.',
              documentId: 'doc-001',
              documentName: 'SLP_Evaluation_1_20',
              pageNumber: 3,
              wordBlocks: [
                { x: 0.12, y: 0.72, w: 0.76, h: 0.045, p: 3 }
              ]
            }
          ]
        }
      ],

      // Remaining flat annotations by category
      nta: [
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
        }
      ],

      slp: [],

      other: [
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

      speculative: [
        {
          id: 'ann-015',
          icd10Code: 'Z87.11',
          description: 'Personal history of peptic ulcer disease',
          category: 'speculative',
          confidence: 0.45,
          rank: 1,
          evidenceStrength: 'weak',
          quoteText: 'PMH includes: HTN, DM2, COPD, h/o peptic ulcer disease (2018)',
          documentId: 'doc-007',
          documentName: 'H&P_Admission_1_10',
          pageNumber: 2,
          wordBlocks: [
            { x: 0.12, y: 0.25, w: 0.50, h: 0.025, p: 2 }
          ],
          flagReason: 'Historical condition - may not be actively relevant to current care plan.'
        },
        {
          id: 'ann-016',
          icd10Code: 'E66.01',
          description: 'Morbid (severe) obesity due to excess calories',
          category: 'speculative',
          confidence: 0.38,
          rank: 2,
          evidenceStrength: 'weak',
          quoteText: 'BMI noted as 34.2 on admission vitals.',
          documentId: 'doc-007',
          documentName: 'H&P_Admission_1_10',
          pageNumber: 1,
          wordBlocks: [
            { x: 0.15, y: 0.40, w: 0.50, h: 0.025, p: 1 }
          ],
          flagReason: 'BMI 34.2 suggests obesity but morbid obesity (E66.01) requires BMI >= 40. Consider E66.09 instead.'
        }
      ]
    },

    counts: {
      total: 15,
      topRankedAnnotations: 8,
      topRankedGroups: 5,
      nta: 1,
      slp: 0,
      other: 4,
      speculative: 2
    }
  },

  // Fake document content for demo mode (with highlighted text)
  documentContent: {
    'doc-001': {
      title: 'Speech-Language Pathology Evaluation',
      pages: [
        {
          pageNum: 1,
          content: [
            { text: 'SPEECH-LANGUAGE PATHOLOGY EVALUATION', style: 'title' },
            { text: '' },
            { text: 'Patient: Doe, Jane', style: 'bold' },
            { text: 'DOB: 01/01/1945   MRN: 00000000' },
            { text: 'Date of Service: 01/20/2025' },
            { text: 'Therapist: Demo Therapist, MS, CCC-SLP' },
            { text: '' },
            { text: 'REASON FOR REFERRAL:', style: 'section' },
            { text: 'Patient referred for speech-language evaluation following acute CVA on 12/15/2024.' },
            { text: '' },
            { text: 'MEDICAL HISTORY:', style: 'section' },
            { text: 'HTN, Type 2 DM, hyperlipidemia, CVA (12/15/2024)' },
          ]
        },
        {
          pageNum: 2,
          content: [
            { text: 'SPEECH-LANGUAGE ASSESSMENT', style: 'title' },
            { text: '' },
            { text: 'ORAL-MOTOR EXAMINATION:', style: 'section' },
            { text: 'Facial symmetry: Mild left-sided weakness noted at rest' },
            { text: 'Lip closure: Adequate for speech, reduced strength' },
            { text: 'Tongue ROM: WFL, mild weakness on lateral protrusion' },
            { text: '' },
            { text: 'LANGUAGE ASSESSMENT:', style: 'section' },
            { text: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia following stroke on 12/15/2024.', highlight: true },
            { text: '' },
            { text: 'Auditory comprehension: Intact for simple commands, breaks down with complex multi-step instructions' },
            { text: 'Verbal expression: Limited to 2-3 word phrases with significant pauses' },
            { text: 'Repetition: Impaired for sentences > 4 words' },
          ]
        },
        {
          pageNum: 3,
          content: [
            { text: 'SPEECH ASSESSMENT (continued)', style: 'title' },
            { text: '' },
            { text: 'MOTOR SPEECH:', style: 'section' },
            { text: 'Speech characterized by imprecise consonants, monopitch, and reduced loudness. Consistent with hypokinetic dysarthria secondary to CVA.', highlight: true },
            { text: '' },
            { text: 'Articulation: Mild imprecision, intelligibility 85% in known context' },
            { text: 'Rate: Reduced, approximately 100 wpm' },
            { text: 'Prosody: Flat affect, limited pitch variation' },
          ]
        },
        {
          pageNum: 4,
          content: [
            { text: 'SWALLOWING EVALUATION', style: 'title' },
            { text: '' },
            { text: 'CLINICAL SWALLOW EVALUATION:', style: 'section' },
            { text: 'Patient failed bedside swallow evaluation. Demonstrates delayed oral transit time and reduced laryngeal elevation. NPO recommended pending MBSS.', highlight: true },
            { text: '' },
            { text: 'Thin liquids: Coughing noted, delayed swallow initiation' },
            { text: 'Nectar thick: Mild throat clear, improved swallow' },
            { text: 'Pudding: No overt signs/symptoms of aspiration' },
            { text: '' },
            { text: 'RECOMMENDATION: Modified barium swallow study (MBSS) recommended' },
          ]
        },
        {
          pageNum: 5,
          content: [
            { text: 'TREATMENT PLAN', style: 'title' },
            { text: '' },
            { text: 'GOALS:', style: 'section' },
            { text: '1. Patient will follow 2-step commands with 90% accuracy' },
            { text: '2. Patient will produce 5-word sentences with minimal cueing' },
            { text: '3. Patient will safely swallow modified diet per MBSS results' },
            { text: '' },
            { text: 'FREQUENCY: 5x/week for 4 weeks, then reassess' },
            { text: '' },
            { text: '_________________________________' },
            { text: 'Demo Therapist, MS, CCC-SLP' },
            { text: 'Date: 01/20/2025' },
          ]
        }
      ]
    },
    'doc-002': {
      title: 'Physical Therapy Progress Note',
      pages: [
        {
          pageNum: 1,
          content: [
            { text: 'PHYSICAL THERAPY PROGRESS NOTE', style: 'title' },
            { text: '' },
            { text: 'Patient: Doe, Jane', style: 'bold' },
            { text: 'Date of Service: 01/18/2025' },
            { text: 'Therapist: Demo PT, PT, DPT' },
            { text: '' },
            { text: 'DIAGNOSIS: CVA with left hemiparesis' },
            { text: '' },
            { text: 'SUBJECTIVE:', style: 'section' },
            { text: 'Patient reports feeling weak on left side. Motivated for therapy.' },
            { text: '' },
            { text: 'OBJECTIVE:', style: 'section' },
            { text: 'Left-sided weakness noted with 3/5 strength in upper extremity and 2/5 in lower extremity. Patient requires max assist for transfers.', highlight: true },
            { text: '' },
            { text: 'MMT - Left UE: Shoulder 3/5, Elbow 3/5, Wrist 2+/5' },
            { text: 'MMT - Left LE: Hip 2/5, Knee 2/5, Ankle 2/5' },
            { text: '' },
            { text: 'PLAN: Continue PT 5x/week. Focus on weight bearing and transfer training.' },
          ]
        }
      ]
    },
    'doc-003': {
      title: 'MD Progress Note',
      pages: [
        {
          pageNum: 1,
          content: [
            { text: 'PHYSICIAN PROGRESS NOTE', style: 'title' },
            { text: '' },
            { text: 'Patient: Doe, Jane', style: 'bold' },
            { text: 'Date: 01/22/2025' },
            { text: 'Provider: Dr. Demo Provider, MD' },
            { text: '' },
            { text: 'CC: Follow-up post-CVA, pain management' },
            { text: '' },
            { text: 'HPI:', style: 'section' },
            { text: 'Patient is 79 y/o male s/p CVA on 12/15/2024 currently in SNF for rehabilitation.' },
            { text: '' },
            { text: 'Patient reports chronic low back pain, worse with activity. Pain level 6/10. Taking Tylenol PRN with partial relief.', highlight: true },
          ]
        },
        {
          pageNum: 2,
          content: [
            { text: 'PHYSICIAN PROGRESS NOTE (continued)', style: 'title' },
            { text: '' },
            { text: 'MEDICATIONS:', style: 'section' },
            { text: 'Aspirin 81mg daily, Atorvastatin 40mg daily, Lisinopril 10mg daily' },
            { text: 'Metformin 500mg BID, Omeprazole 20mg daily' },
            { text: '' },
            { text: 'GI:', style: 'section' },
            { text: 'Taking omeprazole 20mg daily for GERD. Reports occasional heartburn controlled with medication.', highlight: true },
          ]
        },
        {
          pageNum: 3,
          content: [
            { text: 'COGNITIVE ASSESSMENT', style: 'title' },
            { text: '' },
            { text: 'MENTAL STATUS:', style: 'section' },
            { text: 'Documented progressive cognitive decline with impaired short-term memory, disorientation to time and place, consistent with dementia. Family reports diagnosis of Alzheimers.', highlight: true },
            { text: '' },
            { text: 'A&O x 2 (person, place). BIMS score: 8/15' },
            { text: 'Long-term memory: Intact for remote events' },
            { text: 'Short-term memory: Impaired, cannot recall 3 objects after 5 minutes' },
          ]
        }
      ]
    },
    'doc-006': {
      title: 'Laboratory Results',
      pages: [
        {
          pageNum: 1,
          content: [
            { text: 'LABORATORY RESULTS', style: 'title' },
            { text: '' },
            { text: 'Patient: Doe, Jane', style: 'bold' },
            { text: 'Date Collected: 01/18/2025' },
            { text: 'Ordering Physician: Dr. Demo Provider' },
            { text: '' },
            { text: 'RENAL PANEL:', style: 'section' },
            { text: 'Labs from 1/18: GFR 42, Creatinine 1.8. Patient has known CKD Stage 3.', highlight: true },
            { text: '' },
            { text: 'BUN: 28 mg/dL (H)    [7-20]' },
            { text: 'Creatinine: 1.8 mg/dL (H)    [0.7-1.3]' },
            { text: 'eGFR: 42 mL/min/1.73m² (L)    [>60]' },
            { text: '' },
            { text: 'LIPID PANEL:', style: 'section' },
            { text: 'Lipid panel: Total cholesterol 245, LDL 165, HDL 38, Triglycerides 210. Continue statin therapy.', highlight: true },
            { text: '' },
            { text: 'Total Cholesterol: 245 mg/dL (H)    [<200]' },
            { text: 'LDL: 165 mg/dL (H)    [<100]' },
            { text: 'HDL: 38 mg/dL (L)    [>40]' },
            { text: 'Triglycerides: 210 mg/dL (H)    [<150]' },
          ]
        }
      ]
    },
    'doc-007': {
      title: 'History & Physical - Admission',
      pages: [
        {
          pageNum: 1,
          content: [
            { text: 'HISTORY AND PHYSICAL', style: 'title' },
            { text: '' },
            { text: 'Patient: Doe, Jane', style: 'bold' },
            { text: 'Admission Date: 01/10/2025' },
            { text: 'Attending: Dr. Demo Provider, MD' },
            { text: '' },
            { text: 'CHIEF COMPLAINT:', style: 'section' },
            { text: 'Transfer from acute care for SNF rehabilitation following CVA' },
          ]
        },
        {
          pageNum: 2,
          content: [
            { text: 'PAST MEDICAL HISTORY', style: 'title' },
            { text: '' },
            { text: 'PMH includes: HTN, DM2, COPD, h/o peptic ulcer disease (2018)', highlight: true },
            { text: '' },
            { text: '- Hypertension x 20 years, controlled' },
            { text: '- Type 2 Diabetes x 15 years, on oral agents' },
            { text: '- COPD, uses home O2 PRN' },
            { text: '- Peptic ulcer disease, resolved 2018' },
            { text: '- CVA 12/15/2024' },
          ]
        },
        {
          pageNum: 3,
          content: [
            { text: 'SLEEP/RESPIRATORY', style: 'title' },
            { text: '' },
            { text: 'Patient uses CPAP nightly for diagnosed OSA. Compliance per family is good.', highlight: true },
            { text: '' },
            { text: 'Settings: CPAP 10 cm H2O' },
            { text: 'Mask: Full face' },
            { text: 'Usage: 7+ hours/night per family report' },
          ]
        }
      ]
    }
  },

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
