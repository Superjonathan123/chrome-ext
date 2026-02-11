/**
 * Demo MDS Overlay - Shows Super LTC UI on MDS Section I
 * Injects badges, popovers, evidence modals, and dashboard views
 */

(function() {
  'use strict';

  // ============================================
  // MOCK DATA
  // ============================================
  const MOCK_MDS_DATA = {
    assessment: {
      id: '4860265',
      patientName: 'Doe, Jane',
      patientId: '23650',
      type: '5-Day PPS',
      ardDate: '2026-01-20',
      status: 'open'
    },
    hipps: {
      current: 'HB2A1',
      potential: 'HC2B2',
      currentReimbursement: '$542.18',
      potentialReimbursement: '$598.45',
      dailyDifference: '+$56.27'
    },
    compliance: {
      bims: { status: 'passed', message: '1 BIMS assessment(s) found locked in required timeframe' },
      phq9: { status: 'passed', message: '1 PHQ-9 assessment(s) found locked in required timeframe' },
      gg: { status: 'failed', message: 'No GG functional assessment found with locked date in re...' },
      orders: { status: 'failed', message: '89 of 96 orders are unsigned', count: 89 },
      therapyDocs: { status: 'failed', message: '2 of 116 therapy documents are unsigned', count: 2 }
    },
    items: [
      {
        code: 'I2900',
        name: 'Diabetes mellitus (DM)',
        pccAnswer: 1,
        aiAnswer: 1,
        confidence: 'high',
        status: 'match',
        wouldChangeHipps: false,
        rationale: 'Patient has documented Type 2 Diabetes with daily insulin administration and recent A1C of 8.2%. Correctly coded as Yes.',
        evidence: [
          {
            type: 'mar',
            title: 'Humalog Insulin',
            quote: 'Humalog 10 units with meals TID',
            date: '01/15/2026',
            documentId: 'doc-001',
            marData: {
              medication: 'Humalog Insulin 100 UNIT/ML',
              route: 'SUBCUTANEOUS',
              instructions: 'Inject 10 units subcutaneously with meals three times daily for blood glucose control',
              frequency: 'TID with meals',
              dateRange: { start: '2026-01-15', end: '2026-01-21' },
              administrations: [
                { date: '2026-01-15', time: 'Breakfast', status: 'given' },
                { date: '2026-01-15', time: 'Lunch', status: 'given' },
                { date: '2026-01-15', time: 'Dinner', status: 'given' },
                { date: '2026-01-16', time: 'Breakfast', status: 'given' },
                { date: '2026-01-16', time: 'Lunch', status: 'given' },
                { date: '2026-01-16', time: 'Dinner', status: 'refused' },
                { date: '2026-01-17', time: 'Breakfast', status: 'given' },
                { date: '2026-01-17', time: 'Lunch', status: 'given' },
                { date: '2026-01-17', time: 'Dinner', status: 'given' }
              ]
            }
          },
          {
            type: 'lab-result',
            title: 'A1C Result',
            quote: 'Hemoglobin A1C: 8.2% (High)',
            date: '01/10/2026',
            documentId: 'doc-002',
            pdfData: {
              filename: 'LAB_01_10_38001234.PDF',
              title: 'Laboratory Results - Hemoglobin A1C',
              pages: 1,
              content: [
                { text: 'LABORATORY REPORT', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date of Collection: 01/10/2026', highlight: false },
                { text: 'Ordering Physician: Dr. Demo Provider', highlight: false },
                { text: '', highlight: false },
                { text: 'TEST RESULTS:', highlight: false },
                { text: 'Hemoglobin A1C: 8.2% (High)', highlight: true },
                { text: 'Reference Range: 4.0 - 5.6%', highlight: false },
                { text: '', highlight: false },
                { text: 'Interpretation: Elevated A1C indicates suboptimal glycemic control', highlight: false },
                { text: 'consistent with diabetes mellitus diagnosis.', highlight: false }
              ]
            }
          }
        ]
      },
      {
        code: 'I0200',
        name: 'Anemia',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        wouldChangeHipps: false,
        impact: {
          nta: { currentLevel: 'A', newLevel: 'B', wouldChangeLevel: true }
        },
        rationale: 'Patient has documented iron deficiency anemia with low hemoglobin and on ferrous sulfate. Should be coded Yes.',
        evidence: [
          {
            type: 'lab-result',
            title: 'CBC Result',
            quote: 'Hemoglobin: 9.8 g/dL (Low), Hematocrit: 30.2% (Low)',
            date: '01/12/2026',
            documentId: 'doc-010'
          },
          {
            type: 'order',
            title: 'Iron Supplement',
            quote: 'Ferrous sulfate 325mg PO daily',
            date: '01/05/2026',
            documentId: 'doc-011'
          }
        ]
      },
      {
        code: 'I0600',
        name: 'Heart failure',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        wouldChangeHipps: false,
        impact: {
          nta: { currentLevel: 'B', newLevel: 'C', wouldChangeLevel: true }
        },
        rationale: 'Patient has documented CHF with daily diuretic therapy and fluid restrictions. Nursing notes document daily weight monitoring.',
        evidence: [
          {
            type: 'mar',
            title: 'Furosemide (Lasix)',
            quote: 'Furosemide 40mg PO daily',
            date: '01/08/2026',
            documentId: 'doc-012',
            marData: {
              medication: 'Furosemide 40 MG Tablet',
              route: 'ORAL',
              instructions: 'Give 40mg by mouth once daily in the morning for CHF/fluid management',
              frequency: 'Daily AM',
              dateRange: { start: '2026-01-20', end: '2026-01-26' },
              administrations: [
                { date: '2026-01-20', time: '8:00 AM', status: 'given' },
                { date: '2026-01-21', time: '8:00 AM', status: 'given' },
                { date: '2026-01-22', time: '8:00 AM', status: 'given' },
                { date: '2026-01-23', time: '8:00 AM', status: 'hold' },
                { date: '2026-01-24', time: '8:00 AM', status: 'given' },
                { date: '2026-01-25', time: '8:00 AM', status: 'given' },
                { date: '2026-01-26', time: '8:00 AM', status: 'given' }
              ]
            }
          },
          {
            type: 'nursing-note',
            title: 'Nursing Assessment',
            quote: 'Patient on 1500mL fluid restriction. Daily weights stable. No peripheral edema noted.',
            date: '01/22/2026',
            documentId: 'doc-013',
            pdfData: {
              filename: 'NURSING_01_22_38001567.PDF',
              title: 'Nursing Assessment Note',
              pages: 2,
              currentPage: 1,
              content: [
                { text: 'NURSING ASSESSMENT', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/22/2026 - 07:32 AM', highlight: false },
                { text: 'Nurse: Demo Nurse, RN', highlight: false },
                { text: '', highlight: false },
                { text: 'CARDIOVASCULAR:', highlight: false },
                { text: 'Heart failure management ongoing.', highlight: false },
                { text: 'Patient on 1500mL fluid restriction.', highlight: true },
                { text: 'Daily weights stable - today 168.2 lbs (yesterday 168.0 lbs).', highlight: true },
                { text: 'No peripheral edema noted on bilateral lower extremities.', highlight: true },
                { text: '', highlight: false },
                { text: 'I/O for previous 24 hours:', highlight: false },
                { text: 'Intake: 1420mL | Output: 1650mL', highlight: false },
                { text: '', highlight: false },
                { text: 'Furosemide 40mg given at 0800 as ordered.', highlight: false }
              ]
            }
          }
        ]
      },
      {
        code: 'I4200',
        name: "Alzheimer's disease",
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        wouldChangeHipps: false,
        impact: {
          nta: { currentLevel: 'B', newLevel: 'C', wouldChangeLevel: true }
        },
        rationale: "Patient has documented Alzheimer's disease with ongoing cognitive decline. Neurology notes confirm diagnosis with MMSE scores consistent with moderate dementia.",
        evidence: [
          {
            type: 'progress-note',
            title: 'Neurology Consult',
            quote: "Alzheimer's disease, moderate stage with progressive memory impairment and executive dysfunction",
            date: '01/12/2026',
            documentId: 'doc-alz-001',
            evidenceType: 'keyword',
            pdfData: {
              filename: 'NEURO_CONSULT_01_12_38001890.PDF',
              title: 'Neurology Consultation Note',
              pages: 3,
              currentPage: 1,
              pageContent: {
                1: [
                  { text: 'NEUROLOGY CONSULTATION', highlight: false },
                  { text: 'Patient: Doe, Jane', highlight: false },
                  { text: 'Date: 01/12/2026', highlight: false },
                  { text: 'Consulting Physician: Dr. Demo Neurologist, Neurology', highlight: false },
                  { text: '', highlight: false },
                  { text: 'REASON FOR CONSULTATION:', highlight: false },
                  { text: 'Evaluation of progressive cognitive decline and memory impairment.', highlight: false },
                  { text: '', highlight: false },
                  { text: 'HISTORY OF PRESENT ILLNESS:', highlight: false },
                  { text: "78-year-old female with known Alzheimer's disease, moderate stage", highlight: 'keyword' },
                  { text: 'with progressive memory impairment and executive dysfunction.', highlight: 'keyword' },
                  { text: 'Family reports increased difficulty with ADLs over past 6 months.', highlight: false },
                  { text: '', highlight: false },
                  { text: 'COGNITIVE ASSESSMENT:', highlight: false },
                  { text: 'MMSE Score: 18/30 (previous 22/30 in July 2025)', highlight: 'keyword' },
                  { text: 'Significant decline in short-term memory and orientation.', highlight: false }
                ],
                2: [
                  { text: 'NEUROLOGICAL EXAMINATION:', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Mental Status: Alert but disoriented to time and place.', highlight: false },
                  { text: 'Unable to recall 3 objects after 5 minutes.', highlight: false },
                  { text: 'Difficulty with serial 7s and spelling WORLD backwards.', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Cranial Nerves: II-XII intact', highlight: false },
                  { text: 'Motor: 5/5 strength bilateral upper and lower extremities', highlight: false },
                  { text: 'Sensory: Intact to light touch', highlight: false },
                  { text: 'Gait: Mildly unsteady, uses rolling walker', highlight: false },
                  { text: '', highlight: false },
                  { text: 'MRI Brain (reviewed from 12/2025):', highlight: false },
                  { text: 'Bilateral hippocampal atrophy consistent with AD.', highlight: 'keyword' },
                  { text: 'No acute infarct or hemorrhage.', highlight: false }
                ],
                3: [
                  { text: 'ASSESSMENT AND PLAN:', highlight: false },
                  { text: '', highlight: false },
                  { text: "1. Alzheimer's disease, moderate stage - progressive", highlight: 'keyword' },
                  { text: '   - Continue Donepezil 10mg daily', highlight: false },
                  { text: '   - Add Memantine 5mg daily, titrate to 10mg BID', highlight: false },
                  { text: '   - Fall precautions given cognitive impairment', highlight: false },
                  { text: '', highlight: false },
                  { text: '2. Caregiver education provided to family regarding:', highlight: false },
                  { text: '   - Disease progression expectations', highlight: false },
                  { text: '   - Safety considerations', highlight: false },
                  { text: '   - Community resources and support groups', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Follow-up in 3 months or sooner if needed.', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Dr. Demo Neurologist, MD, Neurology', highlight: false }
                ]
              },
              content: [
                { text: 'NEUROLOGY CONSULTATION', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/12/2026', highlight: false },
                { text: 'Consulting Physician: Dr. Demo Neurologist, Neurology', highlight: false },
                { text: '', highlight: false },
                { text: 'REASON FOR CONSULTATION:', highlight: false },
                { text: 'Evaluation of progressive cognitive decline and memory impairment.', highlight: false },
                { text: '', highlight: false },
                { text: 'HISTORY OF PRESENT ILLNESS:', highlight: false },
                { text: "78-year-old female with known Alzheimer's disease, moderate stage", highlight: true },
                { text: 'with progressive memory impairment and executive dysfunction.', highlight: true },
                { text: 'Family reports increased difficulty with ADLs over past 6 months.', highlight: false },
                { text: '', highlight: false },
                { text: 'COGNITIVE ASSESSMENT:', highlight: false },
                { text: 'MMSE Score: 18/30 (previous 22/30 in July 2025)', highlight: true },
                { text: 'Significant decline in short-term memory and orientation.', highlight: false }
              ]
            }
          },
          {
            type: 'mar',
            title: 'Donepezil (Aricept)',
            quote: 'Donepezil 10mg PO daily for cognitive support',
            date: '01/20/2026',
            documentId: 'doc-alz-002',
            evidenceType: 'keyword',
            marData: {
              medication: 'Donepezil 10 MG Tablet',
              route: 'ORAL',
              instructions: 'Give 10mg by mouth once daily at bedtime for cognitive support in Alzheimer disease',
              frequency: 'Daily HS',
              dateRange: { start: '2026-01-15', end: '2026-01-21' },
              administrations: [
                { date: '2026-01-15', time: '9:00 PM', status: 'given' },
                { date: '2026-01-16', time: '9:00 PM', status: 'given' },
                { date: '2026-01-17', time: '9:00 PM', status: 'given' },
                { date: '2026-01-18', time: '9:00 PM', status: 'given' },
                { date: '2026-01-19', time: '9:00 PM', status: 'given' },
                { date: '2026-01-20', time: '9:00 PM', status: 'given' },
                { date: '2026-01-21', time: '9:00 PM', status: 'given' }
              ]
            }
          },
          {
            type: 'nursing-note',
            title: 'Nursing Assessment',
            quote: 'Patient confused, asking for deceased spouse repeatedly. Reorientation provided.',
            date: '01/20/2026',
            documentId: 'doc-alz-003',
            evidenceType: 'contextual',
            description: 'Nursing observation documents behavioral symptoms consistent with dementia, though Alzheimer diagnosis not explicitly mentioned.'
          }
        ]
      },
      {
        code: 'I4300',
        name: 'Aphasia',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'medium',
        status: 'review',
        wouldChangeHipps: false,
        impact: {
          slp: { currentGroup: 'SF', newGroup: 'SI', wouldChangeGroup: true }
        },
        rationale: 'Speech therapy notes document expressive aphasia following recent stroke. Recommend confirming active diagnosis.',
        evidence: [
          {
            type: 'therapy-doc',
            title: 'ST Eval 01-16-26',
            quote: 'Patient demonstrates moderate expressive aphasia with word-finding difficulties',
            date: '01/16/2026',
            documentId: 'doc-009',
            evidenceType: 'keyword',
            pdfData: {
              filename: 'ST_EVAL_01_16_38001641.PDF',
              title: 'ST Eval 01-16-26',
              pages: 5,
              currentPage: 1,
              pageContent: {
                1: [
                  { text: 'SPEECH THERAPY EVALUATION', highlight: false },
                  { text: 'Patient: Doe, Jane', highlight: false },
                  { text: 'Date of Service: 01/16/2026', highlight: false },
                  { text: 'Therapist: Demo SLP, MS, CCC-SLP', highlight: false },
                  { text: '', highlight: false },
                  { text: 'REASON FOR REFERRAL:', highlight: false },
                  { text: 'Patient referred for speech-language evaluation following recent CVA.', highlight: false },
                  { text: '', highlight: false },
                  { text: 'CLINICAL OBSERVATIONS:', highlight: false },
                  { text: 'Patient demonstrates moderate expressive aphasia with word-finding difficulties.', highlight: 'keyword' },
                  { text: 'Comprehension appears functional for simple commands but breaks down', highlight: false },
                  { text: 'with complex multi-step instructions.', highlight: false }
                ],
                2: [
                  { text: 'LANGUAGE ASSESSMENT:', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Auditory Comprehension:', highlight: false },
                  { text: '- Single words: Good', highlight: false },
                  { text: '- Simple sentences: Good', highlight: false },
                  { text: '- Complex sentences: Fair to Poor', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Verbal Expression:', highlight: false },
                  { text: '- Automatic speech: Good (counting, days of week)', highlight: false },
                  { text: '- Naming: Poor - frequent word-finding pauses', highlight: 'keyword' },
                  { text: '- Repetition: Fair', highlight: false },
                  { text: '- Spontaneous speech: Non-fluent, telegraphic', highlight: 'keyword' },
                  { text: '', highlight: false },
                  { text: 'Reading: Fair for single words, poor for sentences', highlight: false },
                  { text: 'Writing: Severely impaired', highlight: false }
                ],
                3: [
                  { text: 'SWALLOWING ASSESSMENT:', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Oral Motor Examination:', highlight: false },
                  { text: '- Lip closure: Adequate', highlight: false },
                  { text: '- Tongue ROM: WFL', highlight: false },
                  { text: '- Jaw strength: Adequate', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Clinical Swallow Evaluation:', highlight: false },
                  { text: '- Thin liquids: Trace coughing observed', highlight: 'contextual' },
                  { text: '- Puree: No signs of aspiration', highlight: false },
                  { text: '- Mechanical soft: Safe with supervision', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Recommendation: Nectar-thick liquids, mechanical soft diet', highlight: false },
                  { text: 'MBSS recommended if coughing persists', highlight: false }
                ],
                4: [
                  { text: 'SHORT-TERM GOALS', highlight: false, badge: 'section-header' },
                  { text: '', highlight: false },
                  { text: 'STG #1', highlight: false, badge: 'NEW GOAL' },
                  { text: 'Pt will follow 1 step commands x 95% w/ Minimal verbal/visual cues.', highlight: false },
                  { text: 'Target: Jan 30, 2026', highlight: false },
                  { text: '', highlight: false },
                  { text: 'STG #2', highlight: false, badge: 'NEW GOAL' },
                  { text: 'Pt will name common objects x 80% w/ phonemic cues.', highlight: false },
                  { text: 'Target: Jan 30, 2026', highlight: false },
                  { text: '', highlight: false },
                  { text: 'STG #3', highlight: false, badge: 'NEW GOAL' },
                  { text: 'Pt will use AAC device to communicate basic needs x 3 trials.', highlight: false },
                  { text: 'Target: Feb 05, 2026', highlight: false },
                  { text: '', highlight: false },
                  { text: 'STG #4', highlight: false, badge: 'NEW GOAL' },
                  { text: 'Pt will demonstrate adequate ability to safely swallow therapeutic', highlight: 'keyword' },
                  { text: 'trials w/ SLP only x 95% w/ Minimal verbal/visual cues.', highlight: false },
                  { text: 'Target: Jan 28, 2026', highlight: false }
                ],
                5: [
                  { text: 'LONG-TERM GOALS', highlight: false, badge: 'section-header' },
                  { text: '', highlight: false },
                  { text: 'LTG #1: Patient will communicate functional needs using verbal', highlight: false },
                  { text: 'speech and/or AAC device with 80% accuracy.', highlight: false },
                  { text: 'Target: Feb 28, 2026', highlight: false },
                  { text: '', highlight: false },
                  { text: 'LTG #2: Patient will safely consume mechanical soft diet with', highlight: false },
                  { text: 'nectar-thick liquids with supervision only.', highlight: false },
                  { text: 'Target: Feb 15, 2026', highlight: false },
                  { text: '', highlight: false },
                  { text: 'TREATMENT FREQUENCY:', highlight: false },
                  { text: 'Speech therapy 5x/week for 45-minute sessions', highlight: false },
                  { text: '', highlight: false },
                  { text: '________________________________', highlight: false },
                  { text: 'Demo SLP, MS, CCC-SLP', highlight: false },
                  { text: 'License #: DEMO-00000', highlight: false }
                ]
              },
              content: [
                { text: 'SPEECH THERAPY EVALUATION', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date of Service: 01/16/2026', highlight: false },
                { text: 'Therapist: Demo SLP, MS, CCC-SLP', highlight: false },
                { text: '', highlight: false },
                { text: 'REASON FOR REFERRAL:', highlight: false },
                { text: 'Patient referred for speech-language evaluation following recent CVA.', highlight: false },
                { text: '', highlight: false },
                { text: 'CLINICAL OBSERVATIONS:', highlight: false },
                { text: 'Patient demonstrates moderate expressive aphasia with word-finding difficulties.', highlight: true },
                { text: 'Comprehension appears functional for simple commands but breaks down', highlight: false },
                { text: 'with complex multi-step instructions.', highlight: false },
                { text: '', highlight: false },
                { text: 'Short-Term Goals', highlight: false },
                { text: '', highlight: false },
                { text: 'STG #1 - New Goal', highlight: false },
                { text: 'Pt will follow 1 step commands x 95% w/ Minimal verbal/visual cues.', highlight: false },
                { text: 'Target: Jan 30, 2026', highlight: false },
                { text: '', highlight: false },
                { text: 'STG #2 - New Goal', highlight: false },
                { text: 'Pt will elicit 1 word utterances in Spanish x 95% w/ Minimal verbal/visual cues.', highlight: false },
                { text: 'Target: Jan 30, 2026', highlight: false },
                { text: '', highlight: false },
                { text: 'STG #3 - New Goal', highlight: false },
                { text: 'Pt will demonstrate adequate ability to safely swallow therapeutic trials w/ SLP only x 95% w/ Minimal verbal/visual cues.', highlight: true },
                { text: 'Target: Jan 28, 2026', highlight: false }
              ]
            }
          },
          {
            type: 'progress-note',
            title: 'H&P - Demo MD',
            quote: 'Code Status Discussion - patient cannot discuss due to communication deficits, confirming active aphasia diagnosis',
            date: '01/14/2026',
            documentId: 'doc-010',
            evidenceType: 'contextual',
            description: 'Physician note documents inability to communicate, supporting aphasia without explicit keyword match.',
            pdfData: {
              filename: 'HP_01_14_38001234.PDF',
              title: 'History & Physical - Dr. Demo MD',
              pages: 3,
              currentPage: 1,
              pageContent: {
                1: [
                  { text: 'HISTORY AND PHYSICAL', highlight: false },
                  { text: 'Patient: Doe, Jane', highlight: false },
                  { text: 'Date: 01/14/2026', highlight: false },
                  { text: 'Physician: Demo MD, MD', highlight: false },
                  { text: '', highlight: false },
                  { text: 'CHIEF COMPLAINT:', highlight: false },
                  { text: 'Admission for rehabilitation following CVA.', highlight: false },
                  { text: '', highlight: false },
                  { text: 'HISTORY OF PRESENT ILLNESS:', highlight: false },
                  { text: '78-year-old female admitted from Memorial Hospital after suffering', highlight: false },
                  { text: 'a left MCA stroke on 01/10/2026. Patient presented with sudden onset', highlight: false },
                  { text: 'right-sided weakness and speech difficulties.', highlight: 'contextual' }
                ],
                2: [
                  { text: 'REVIEW OF SYSTEMS:', highlight: false },
                  { text: 'Constitutional: No fever, weight stable', highlight: false },
                  { text: 'Cardiovascular: History of AFib, HTN', highlight: false },
                  { text: 'Respiratory: No SOB, no cough', highlight: false },
                  { text: 'Neurological: Right hemiparesis, speech impairment', highlight: 'contextual' },
                  { text: '', highlight: false },
                  { text: 'PHYSICAL EXAMINATION:', highlight: false },
                  { text: 'Vitals: BP 142/88, HR 76 irregular, Temp 98.4, SpO2 96% RA', highlight: false },
                  { text: 'General: Alert, frustrated with communication attempts', highlight: 'contextual' },
                  { text: 'HEENT: Normocephalic, PERRL', highlight: false },
                  { text: 'Cardiac: Irregularly irregular rhythm, no murmurs', highlight: false },
                  { text: 'Neuro: Right facial droop, 3/5 strength RUE, 4/5 RLE', highlight: false }
                ],
                3: [
                  { text: 'Code Status Discussion:', highlight: false },
                  { text: 'Attempted to discuss code status and advance directives with patient.', highlight: false },
                  { text: 'Patient cannot discuss due to communication deficits secondary to', highlight: 'contextual' },
                  { text: 'expressive aphasia following recent cerebrovascular accident.', highlight: 'contextual' },
                  { text: '', highlight: false },
                  { text: 'Plan: Will coordinate with speech therapy for AAC device trial', highlight: false },
                  { text: 'and attempt discussion with family present.', highlight: false },
                  { text: '', highlight: false },
                  { text: 'ASSESSMENT AND PLAN:', highlight: false },
                  { text: '1. CVA - Continue aspirin, statin, PT/OT/ST', highlight: false },
                  { text: '2. AFib - Continue anticoagulation per cardiology', highlight: false },
                  { text: '3. HTN - Adjust medications as needed for BP control', highlight: false },
                  { text: '', highlight: false },
                  { text: 'Demo MD, MD', highlight: false }
                ]
              },
              content: [
                { text: 'HISTORY AND PHYSICAL', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/14/2026', highlight: false },
                { text: 'Physician: Demo MD, MD', highlight: false },
                { text: '', highlight: false },
                { text: 'Code Status Discussion:', highlight: false },
                { text: 'Attempted to discuss code status and advance directives with patient.', highlight: false },
                { text: 'Patient cannot discuss due to communication deficits secondary to', highlight: true },
                { text: 'expressive aphasia following recent cerebrovascular accident.', highlight: true },
                { text: '', highlight: false },
                { text: 'Plan: Will coordinate with speech therapy for AAC device trial', highlight: false },
                { text: 'and attempt discussion with family present.', highlight: false }
              ]
            }
          },
          {
            type: 'nursing-note',
            title: 'Communication Log',
            quote: 'Patient using gestures and pointing to communicate needs. Unable to verbalize wants clearly.',
            date: '01/18/2026',
            documentId: 'doc-011',
            evidenceType: 'contextual',
            description: 'Nursing observation supports functional communication impairment consistent with aphasia diagnosis.'
          }
        ]
      },
      {
        code: 'I5400',
        name: 'Seizure disorder or epilepsy',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        wouldChangeHipps: false,
        impact: {
          nta: { currentLevel: 'C', newLevel: 'D', wouldChangeLevel: true }
        },
        rationale: 'Patient has documented seizure disorder with daily anticonvulsant therapy. Neurology notes confirm epilepsy diagnosis with breakthrough seizure noted this month.',
        evidence: [
          {
            type: 'mar',
            title: 'Levetiracetam (Keppra)',
            quote: 'Levetiracetam 500mg PO BID for seizure prophylaxis',
            date: '01/20/2026',
            documentId: 'doc-seiz-001',
            evidenceType: 'keyword',
            marData: {
              medication: 'Levetiracetam 500 MG Tablet',
              route: 'ORAL',
              instructions: 'Give 500mg by mouth twice daily for seizure disorder',
              frequency: 'BID (8AM, 8PM)',
              dateRange: { start: '2026-01-15', end: '2026-01-21' },
              administrations: [
                { date: '2026-01-15', time: '8:00 AM', status: 'given' },
                { date: '2026-01-15', time: '8:00 PM', status: 'given' },
                { date: '2026-01-16', time: '8:00 AM', status: 'given' },
                { date: '2026-01-16', time: '8:00 PM', status: 'given' },
                { date: '2026-01-17', time: '8:00 AM', status: 'given' },
                { date: '2026-01-17', time: '8:00 PM', status: 'given' },
                { date: '2026-01-18', time: '8:00 AM', status: 'given' },
                { date: '2026-01-18', time: '8:00 PM', status: 'given' },
                { date: '2026-01-19', time: '8:00 AM', status: 'given' },
                { date: '2026-01-19', time: '8:00 PM', status: 'given' },
                { date: '2026-01-20', time: '8:00 AM', status: 'given' },
                { date: '2026-01-20', time: '8:00 PM', status: 'given' },
                { date: '2026-01-21', time: '8:00 AM', status: 'given' },
                { date: '2026-01-21', time: '8:00 PM', status: 'given' }
              ]
            }
          },
          {
            type: 'nursing-note',
            title: 'Seizure Event Note',
            quote: 'Patient experienced tonic-clonic seizure at 0342. Duration approximately 90 seconds. Physician notified.',
            date: '01/17/2026',
            documentId: 'doc-seiz-002',
            evidenceType: 'keyword',
            pdfData: {
              filename: 'NURSING_SEIZURE_01_17_38001456.PDF',
              title: 'Seizure Event Documentation',
              pages: 1,
              content: [
                { text: 'NURSING EVENT DOCUMENTATION', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date/Time: 01/17/2026 at 03:42', highlight: false },
                { text: 'Nurse: K. Martinez, RN', highlight: false },
                { text: '', highlight: false },
                { text: 'EVENT TYPE: Seizure Activity', highlight: 'keyword' },
                { text: '', highlight: false },
                { text: 'DESCRIPTION:', highlight: false },
                { text: 'Patient found in bed having tonic-clonic seizure.', highlight: 'keyword' },
                { text: 'Duration approximately 90 seconds. Side rails padded,', highlight: false },
                { text: 'patient positioned on side. No apparent injury.', highlight: false },
                { text: '', highlight: false },
                { text: 'POST-ICTAL STATE:', highlight: false },
                { text: 'Patient drowsy and confused for approximately 20 minutes.', highlight: 'contextual' },
                { text: 'Gradually returned to baseline mental status.', highlight: false },
                { text: '', highlight: false },
                { text: 'INTERVENTIONS:', highlight: false },
                { text: '- Seizure precautions maintained', highlight: false },
                { text: '- Vital signs monitored q15min x4, then q1h', highlight: false },
                { text: '- Dr. Demo notified at 0355', highlight: false },
                { text: '- Keppra level ordered for AM labs', highlight: false }
              ]
            }
          },
          {
            type: 'lab-result',
            title: 'Keppra Level',
            quote: 'Levetiracetam level: 18.5 mcg/mL (therapeutic range: 12-46)',
            date: '01/17/2026',
            documentId: 'doc-seiz-003',
            evidenceType: 'keyword'
          }
        ]
      },
      {
        code: 'I5500',
        name: 'Traumatic brain injury',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'medium',
        status: 'review',
        wouldChangeHipps: false,
        impact: {
          nta: { currentLevel: 'C', newLevel: 'D', wouldChangeLevel: true }
        },
        rationale: 'History documents traumatic brain injury from fall 3 years ago with ongoing cognitive and behavioral sequelae requiring current rehabilitation interventions.',
        evidence: [
          {
            type: 'progress-note',
            title: 'Rehab Medicine Consult',
            quote: 'History of TBI from fall in 2023 with residual executive dysfunction and impulse control deficits',
            date: '01/15/2026',
            documentId: 'doc-tbi-001',
            evidenceType: 'keyword',
            pdfData: {
              filename: 'REHAB_CONSULT_01_15_38001567.PDF',
              title: 'Rehabilitation Medicine Consultation',
              pages: 2,
              content: [
                { text: 'REHABILITATION MEDICINE CONSULTATION', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/15/2026', highlight: false },
                { text: 'Physician: Dr. Demo Rehab, PM&R', highlight: false },
                { text: '', highlight: false },
                { text: 'PAST MEDICAL HISTORY includes:', highlight: false },
                { text: '- Traumatic brain injury from fall in 2023', highlight: 'keyword' },
                { text: '- Residual executive dysfunction', highlight: 'keyword' },
                { text: '- Impulse control deficits', highlight: false },
                { text: '- Recent CVA with right hemiparesis', highlight: false },
                { text: '', highlight: false },
                { text: 'The combination of prior TBI and recent stroke presents', highlight: 'contextual' },
                { text: 'complex rehabilitation challenges requiring coordinated', highlight: false },
                { text: 'cognitive and physical therapy interventions.', highlight: false }
              ]
            }
          },
          {
            type: 'therapy-doc',
            title: 'OT Cognitive Assessment',
            quote: 'Impaired attention and problem-solving consistent with history of TBI and new CVA',
            date: '01/16/2026',
            documentId: 'doc-tbi-002',
            evidenceType: 'contextual',
            description: 'Occupational therapy documents cognitive deficits consistent with TBI history.'
          }
        ]
      },
      {
        code: 'I5600',
        name: 'Malnutrition',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        wouldChangeHipps: true,
        impact: {
          nta: { currentLevel: 'C', newLevel: 'D', wouldChangeLevel: true }
        },
        rationale: 'Patient has documented malnutrition with significant weight loss (12.6% in 3 months), low albumin/prealbumin labs, PO intake <50%, dysphagia requiring modified diet, and nutritional supplementation orders.',
        evidence: [
          {
            type: 'progress-note',
            title: 'NUTRITION_10_22_36001641.PDF',
            quote: 'Ongoing PO Intake: < 50% meals/est. needs (10/22/25 10:28:00)',
            date: '01/22/2026',
            documentId: 'doc-nutr-001',
            evidenceType: 'keyword',
            description: 'Hospital nutrition progress note documents PO intake <50% of estimated needs and documents provision of fortified pudding and diet adjustments.',
            pdfData: {
              filename: 'NUTRITION_01_22_36001641.PDF',
              title: 'Nutrition Progress Note',
              pages: 2,
              pageContent: {
                1: [
                  { text: 'NUTRITION PROGRESS NOTE', highlight: false },
                  { text: 'Patient: Doe, Jane', highlight: false },
                  { text: 'Date: 01/22/2026', highlight: false },
                  { text: 'Dietitian: Sarah Kim, RD, LD', highlight: false },
                  { text: '', highlight: false },
                  { text: 'NUTRITIONAL STATUS:', highlight: false },
                  { text: 'Current Weight: 118 lbs (53.5 kg)', highlight: false },
                  { text: 'Usual Body Weight: 135 lbs (61.2 kg)', highlight: false },
                  { text: 'Weight Loss: 17 lbs (12.6%) in past 3 months', highlight: 'keyword' },
                  { text: '', highlight: false },
                  { text: 'DIETARY INTAKE:', highlight: false },
                  { text: 'Ongoing PO Intake: < 50% meals/est. needs', highlight: 'keyword' },
                  { text: 'Patient reports decreased appetite and early satiety.', highlight: false },
                  { text: 'Difficulty with textures due to dysphagia.', highlight: 'contextual' }
                ],
                2: [
                  { text: 'LABORATORY VALUES:', highlight: false },
                  { text: 'Albumin: 2.9 g/dL (Low)', highlight: 'keyword' },
                  { text: 'Prealbumin: 12 mg/dL (Low)', highlight: 'keyword' },
                  { text: 'Total Protein: 5.8 g/dL (Low)', highlight: false },
                  { text: '', highlight: false },
                  { text: 'MALNUTRITION DIAGNOSIS:', highlight: false },
                  { text: 'Moderate protein-calorie malnutrition based on:', highlight: 'keyword' },
                  { text: '- Significant unintentional weight loss (>10% in 3 months)', highlight: false },
                  { text: '- Inadequate oral intake (<50% estimated needs)', highlight: false },
                  { text: '- Low albumin and prealbumin', highlight: false },
                  { text: '', highlight: false },
                  { text: 'RECOMMENDATIONS:', highlight: false },
                  { text: '1. Fortified foods - pudding, cereal, milk', highlight: false },
                  { text: '2. Ensure Plus BID with meals', highlight: false },
                  { text: '3. Liberalized diet texture per SLP recommendations', highlight: false },
                  { text: '4. Weekly weights', highlight: false },
                  { text: '5. Re-evaluate in 1 week', highlight: false }
                ]
              },
              content: [
                { text: 'NUTRITION PROGRESS NOTE', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/22/2026', highlight: false },
                { text: 'Dietitian: Sarah Kim, RD, LD', highlight: false },
                { text: '', highlight: false },
                { text: 'NUTRITIONAL STATUS:', highlight: false },
                { text: 'Current Weight: 118 lbs (53.5 kg)', highlight: false },
                { text: 'Usual Body Weight: 135 lbs (61.2 kg)', highlight: false },
                { text: 'Weight Loss: 17 lbs (12.6%) in past 3 months', highlight: true },
                { text: '', highlight: false },
                { text: 'DIETARY INTAKE:', highlight: false },
                { text: 'Ongoing PO Intake: < 50% meals/est. needs', highlight: true },
                { text: 'Patient reports decreased appetite and early satiety.', highlight: false }
              ]
            }
          },
          {
            type: 'lab-result',
            title: 'NUTRITION_10_22_36001641.PDF',
            quote: 'Albumin Level: 2.9 g/dL Low',
            date: '01/20/2026',
            documentId: 'doc-nutr-002',
            evidenceType: 'keyword',
            description: 'Hospital lab results and nutrition monitoring show low albumin and relevant labs, supporting clinical concern for malnutrition risk and inflammation.',
            pdfData: {
              filename: 'LAB_NUTRITION_01_20_38001789.PDF',
              title: 'Nutrition Panel Results',
              pages: 1,
              content: [
                { text: 'LABORATORY REPORT', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date Collected: 01/20/2026 06:15', highlight: false },
                { text: '', highlight: false },
                { text: 'NUTRITION PANEL:', highlight: false },
                { text: '', highlight: false },
                { text: 'Albumin: 2.9 g/dL                    (L) Ref: 3.5-5.0', highlight: 'keyword' },
                { text: 'Prealbumin: 12 mg/dL                 (L) Ref: 18-38', highlight: 'keyword' },
                { text: 'Total Protein: 5.8 g/dL              (L) Ref: 6.0-8.3', highlight: false },
                { text: 'Transferrin: 165 mg/dL               (L) Ref: 200-360', highlight: false },
                { text: '', highlight: false },
                { text: 'Note: Low albumin and prealbumin suggest malnutrition', highlight: 'keyword' },
                { text: 'and/or inflammatory state. Clinical correlation advised.', highlight: false }
              ]
            }
          },
          {
            type: 'order',
            title: 'FORTIFIED CEREAL',
            quote: 'Fortified Cereal - one time a day 6 oz QD',
            date: '01/22/2026',
            documentId: 'doc-nutr-003',
            evidenceType: 'contextual',
            description: 'Physician order for fortified cereal (6 oz QD) is a nutrition intervention intended to increase calorie/protein intake.',
            marData: {
              medication: 'Fortified Cereal 6 OZ',
              route: 'ORAL',
              instructions: 'Give 6 oz fortified cereal by mouth once daily to increase caloric and protein intake for malnutrition',
              frequency: 'Daily with breakfast',
              dateRange: { start: '2026-01-22', end: '2026-01-28' },
              administrations: [
                { date: '2026-01-22', time: 'Breakfast', status: 'given' },
                { date: '2026-01-23', time: 'Breakfast', status: 'given' },
                { date: '2026-01-24', time: 'Breakfast', status: 'given' },
                { date: '2026-01-25', time: 'Breakfast', status: 'refused' },
                { date: '2026-01-26', time: 'Breakfast', status: 'given' },
                { date: '2026-01-27', time: 'Breakfast', status: 'given' },
                { date: '2026-01-28', time: 'Breakfast', status: 'given' }
              ]
            }
          },
          {
            type: 'order',
            title: 'Ensure Plus',
            quote: 'Ensure Plus 8oz BID with meals for nutritional supplementation',
            date: '01/22/2026',
            documentId: 'doc-nutr-004',
            evidenceType: 'contextual',
            description: 'Oral nutrition supplement order supports malnutrition diagnosis.',
            marData: {
              medication: 'Ensure Plus 8 OZ Oral Liquid',
              route: 'ORAL',
              instructions: 'Give 8 oz Ensure Plus by mouth twice daily with lunch and dinner for nutritional supplementation and malnutrition treatment',
              frequency: 'BID with meals',
              dateRange: { start: '2026-01-22', end: '2026-01-28' },
              administrations: [
                { date: '2026-01-22', time: 'Lunch', status: 'given' },
                { date: '2026-01-22', time: 'Dinner', status: 'given' },
                { date: '2026-01-23', time: 'Lunch', status: 'given' },
                { date: '2026-01-23', time: 'Dinner', status: 'refused' },
                { date: '2026-01-24', time: 'Lunch', status: 'given' },
                { date: '2026-01-24', time: 'Dinner', status: 'given' },
                { date: '2026-01-25', time: 'Lunch', status: 'given' },
                { date: '2026-01-25', time: 'Dinner', status: 'given' },
                { date: '2026-01-26', time: 'Lunch', status: 'given' },
                { date: '2026-01-26', time: 'Dinner', status: 'refused' },
                { date: '2026-01-27', time: 'Lunch', status: 'given' },
                { date: '2026-01-27', time: 'Dinner', status: 'given' },
                { date: '2026-01-28', time: 'Lunch', status: 'given' },
                { date: '2026-01-28', time: 'Dinner', status: 'given' }
              ]
            }
          },
          {
            type: 'st-eval',
            title: 'Speech Therapy Dysphagia Evaluation',
            quote: 'Moderate oropharyngeal dysphagia. Recommend pureed diet with nectar thick liquids.',
            date: '01/18/2026',
            documentId: 'doc-nutr-005',
            evidenceType: 'keyword',
            description: 'Speech therapy evaluation documents dysphagia contributing to poor oral intake and malnutrition risk.',
            pdfData: {
              filename: 'ST_EVAL_01_18_38001923.PDF',
              title: 'Speech Therapy Dysphagia Evaluation',
              pages: 3,
              currentPage: 1,
              content: [
                { text: 'SPEECH THERAPY EVALUATION - SWALLOWING', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/18/2026', highlight: false },
                { text: 'SLP: Rachel Anderson, MS, CCC-SLP', highlight: false },
                { text: '', highlight: false },
                { text: 'REASON FOR REFERRAL:', highlight: false },
                { text: 'Evaluate swallowing function due to reported coughing with meals', highlight: false },
                { text: 'and decreased oral intake.', highlight: false },
                { text: '', highlight: false },
                { text: 'CLINICAL SWALLOW EVALUATION:', highlight: false },
                { text: 'Moderate oropharyngeal dysphagia observed', highlight: 'keyword' },
                { text: 'Oral phase: Prolonged oral transit, decreased bolus control', highlight: false },
                { text: 'Pharyngeal phase: Delayed swallow initiation, coughing with thin liquids', highlight: 'keyword' },
                { text: '', highlight: false },
                { text: 'ASPIRATION RISK: Moderate - Silent aspiration suspected', highlight: 'keyword' },
                { text: '', highlight: false },
                { text: 'DIET RECOMMENDATIONS:', highlight: false },
                { text: '- Pureed diet consistency', highlight: 'keyword' },
                { text: '- Nectar thick liquids', highlight: 'keyword' },
                { text: '- Small bites, slow pace', highlight: false },
                { text: '- Upright positioning during and 30 min after meals', highlight: false },
                { text: '', highlight: false },
                { text: 'IMPACT: Dysphagia is significantly limiting oral intake', highlight: 'contextual' },
                { text: 'and contributing to weight loss and malnutrition risk.', highlight: 'contextual' }
              ]
            }
          },
          {
            type: 'nursing-note',
            title: 'Weekly Weight Monitoring',
            quote: 'Weight trend: 135 lbs (3 months ago) → 128 lbs (1 month ago) → 118 lbs (current). Total loss: 17 lbs (12.6%)',
            date: '01/22/2026',
            documentId: 'doc-nutr-006',
            evidenceType: 'keyword',
            description: 'Nursing documentation shows significant progressive weight loss over 3 months, meeting criteria for malnutrition.',
            pdfData: {
              filename: 'NURSING_WEIGHTS_01_22_38001945.PDF',
              title: 'Weight Monitoring Flow Sheet',
              pages: 1,
              content: [
                { text: 'WEIGHT MONITORING - 3 MONTH TREND', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/22/2026', highlight: false },
                { text: '', highlight: false },
                { text: 'WEIGHT HISTORY:', highlight: false },
                { text: '10/22/2025: 135.0 lbs (Usual body weight)', highlight: false },
                { text: '11/15/2025: 132.5 lbs (-2.5 lbs)', highlight: false },
                { text: '12/20/2025: 128.0 lbs (-7.0 lbs from usual)', highlight: 'keyword' },
                { text: '01/15/2026: 120.5 lbs (-14.5 lbs from usual)', highlight: 'keyword' },
                { text: '01/22/2026: 118.0 lbs (-17.0 lbs from usual)', highlight: 'keyword' },
                { text: '', highlight: false },
                { text: 'WEIGHT LOSS PERCENTAGE:', highlight: false },
                { text: 'Total Loss: 17 lbs over 3 months', highlight: 'keyword' },
                { text: 'Percentage: 12.6% of usual body weight', highlight: 'keyword' },
                { text: '', highlight: false },
                { text: 'SIGNIFICANCE:', highlight: false },
                { text: '>10% weight loss in 3 months = SEVERE weight loss', highlight: 'keyword' },
                { text: 'Meets criteria for malnutrition diagnosis', highlight: 'keyword' },
                { text: '', highlight: false },
                { text: 'INTERVENTIONS INITIATED:', highlight: false },
                { text: '- Dietary consult completed', highlight: false },
                { text: '- Nutritional supplements ordered', highlight: false },
                { text: '- Weekly weight monitoring ongoing', highlight: false }
              ]
            }
          }
        ]
      },
      {
        code: 'I5700',
        name: 'Anxiety disorder',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        wouldChangeHipps: false,
        rationale: 'Patient has documented generalized anxiety disorder with current anxiolytic medication and psychiatric notes documenting ongoing symptoms.',
        evidence: [
          {
            type: 'mar',
            title: 'Lorazepam (Ativan)',
            quote: 'Lorazepam 0.5mg PO PRN for anxiety',
            date: '01/20/2026',
            documentId: 'doc-anx-001',
            evidenceType: 'keyword',
            marData: {
              medication: 'Lorazepam 0.5 MG Tablet',
              route: 'ORAL',
              instructions: 'Give 0.5mg by mouth every 6 hours as needed for anxiety',
              frequency: 'PRN Q6H',
              dateRange: { start: '2026-01-15', end: '2026-01-21' },
              administrations: [
                { date: '2026-01-16', time: '2:00 PM', status: 'given' },
                { date: '2026-01-17', time: '10:00 PM', status: 'given' },
                { date: '2026-01-18', time: '6:00 AM', status: 'given' },
                { date: '2026-01-18', time: '2:00 PM', status: 'given' },
                { date: '2026-01-19', time: '10:00 PM', status: 'given' },
                { date: '2026-01-20', time: '6:00 AM', status: 'given' },
                { date: '2026-01-21', time: '2:00 PM', status: 'given' }
              ]
            }
          },
          {
            type: 'progress-note',
            title: 'Psychiatry Consult',
            quote: 'Generalized anxiety disorder with acute exacerbation in context of recent stroke and rehabilitation',
            date: '01/18/2026',
            documentId: 'doc-anx-002',
            evidenceType: 'keyword',
            pdfData: {
              filename: 'PSYCH_CONSULT_01_18_38001890.PDF',
              title: 'Psychiatry Consultation Note',
              pages: 2,
              content: [
                { text: 'PSYCHIATRY CONSULTATION', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/18/2026', highlight: false },
                { text: 'Psychiatrist: Dr. Demo Psych', highlight: false },
                { text: '', highlight: false },
                { text: 'REASON FOR CONSULTATION:', highlight: false },
                { text: 'Evaluation of anxiety symptoms in setting of recent CVA.', highlight: false },
                { text: '', highlight: false },
                { text: 'PSYCHIATRIC HISTORY:', highlight: false },
                { text: 'Patient has documented Generalized Anxiety Disorder (GAD)', highlight: 'keyword' },
                { text: 'diagnosed approximately 10 years ago. Previously well-controlled', highlight: false },
                { text: 'on Sertraline, now experiencing acute exacerbation in', highlight: 'keyword' },
                { text: 'context of recent stroke and rehabilitation stay.', highlight: false },
                { text: '', highlight: false },
                { text: 'CURRENT SYMPTOMS:', highlight: false },
                { text: '- Excessive worry about recovery and future independence', highlight: 'contextual' },
                { text: '- Sleep disturbance with difficulty falling asleep', highlight: 'contextual' },
                { text: '- Restlessness and irritability', highlight: false },
                { text: '- Physical symptoms: muscle tension, fatigue', highlight: false }
              ]
            }
          },
          {
            type: 'nursing-note',
            title: 'Behavioral Observation',
            quote: 'Patient appears anxious, wringing hands, asking repetitive questions about discharge.',
            date: '01/19/2026',
            documentId: 'doc-anx-003',
            evidenceType: 'contextual',
            description: 'Nursing observation documents behavioral signs consistent with anxiety.'
          }
        ]
      },
      {
        code: 'I5800',
        name: 'Depression',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        wouldChangeHipps: false,
        rationale: 'Patient has documented major depressive disorder with current antidepressant therapy and elevated PHQ-9 score indicating active symptoms.',
        evidence: [
          {
            type: 'mar',
            title: 'Sertraline (Zoloft)',
            quote: 'Sertraline 100mg PO daily for depression',
            date: '01/20/2026',
            documentId: 'doc-dep-001',
            evidenceType: 'keyword',
            marData: {
              medication: 'Sertraline 100 MG Tablet',
              route: 'ORAL',
              instructions: 'Give 100mg by mouth once daily in the morning for depression',
              frequency: 'Daily AM',
              dateRange: { start: '2026-01-15', end: '2026-01-21' },
              administrations: [
                { date: '2026-01-15', time: '8:00 AM', status: 'given' },
                { date: '2026-01-16', time: '8:00 AM', status: 'given' },
                { date: '2026-01-17', time: '8:00 AM', status: 'given' },
                { date: '2026-01-18', time: '8:00 AM', status: 'given' },
                { date: '2026-01-19', time: '8:00 AM', status: 'given' },
                { date: '2026-01-20', time: '8:00 AM', status: 'given' },
                { date: '2026-01-21', time: '8:00 AM', status: 'given' }
              ]
            }
          },
          {
            type: 'progress-note',
            title: 'PHQ-9 Assessment',
            quote: 'PHQ-9 Score: 14 (Moderate depression). Patient endorses depressed mood, anhedonia, sleep disturbance.',
            date: '01/19/2026',
            documentId: 'doc-dep-002',
            evidenceType: 'keyword',
            pdfData: {
              filename: 'PHQ9_01_19_38001234.PDF',
              title: 'PHQ-9 Depression Screening',
              pages: 1,
              content: [
                { text: 'PHQ-9 DEPRESSION SCREENING', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/19/2026', highlight: false },
                { text: 'Administered by: Social Work', highlight: false },
                { text: '', highlight: false },
                { text: 'TOTAL SCORE: 14 (Moderate Depression)', highlight: 'keyword' },
                { text: '', highlight: false },
                { text: 'Item Scores:', highlight: false },
                { text: '1. Little interest or pleasure: 2', highlight: 'keyword' },
                { text: '2. Feeling down, depressed, hopeless: 3', highlight: 'keyword' },
                { text: '3. Trouble sleeping: 2', highlight: false },
                { text: '4. Feeling tired: 2', highlight: false },
                { text: '5. Poor appetite: 1', highlight: false },
                { text: '6. Feeling bad about self: 2', highlight: false },
                { text: '7. Trouble concentrating: 1', highlight: false },
                { text: '8. Moving/speaking slowly: 1', highlight: false },
                { text: '9. Thoughts of self-harm: 0', highlight: false },
                { text: '', highlight: false },
                { text: 'INTERPRETATION: Moderate depressive symptoms.', highlight: 'keyword' },
                { text: 'Continue current SSRI, monitor closely.', highlight: false },
                { text: 'Consider psychiatry referral if symptoms worsen.', highlight: false }
              ]
            }
          },
          {
            type: 'nursing-note',
            title: 'Mood Assessment',
            quote: 'Patient tearful during care, states "I just feel so hopeless about everything."',
            date: '01/20/2026',
            documentId: 'doc-dep-003',
            evidenceType: 'contextual',
            description: 'Nursing observation documents verbalizations consistent with depressive symptoms.'
          }
        ]
      },
      {
        code: 'I0900',
        name: 'Peripheral vascular disease (PVD) or PAD',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        wouldChangeHipps: false,
        rationale: 'Documented PVD with compression therapy orders and wound care. Should be coded Yes.',
        evidence: [
          {
            type: 'order',
            title: 'Compression Order',
            quote: 'Compression stockings bilateral lower extremities',
            date: '01/05/2026',
            documentId: 'doc-008'
          }
        ]
      }
    ],
    queries: {
      pending: [
        {
          id: 'q-001',
          mdsItem: 'I0800',
          mdsItemName: 'Immune Disorder',
          status: 'sent',
          sentAt: '2026-01-26T09:15:00Z',
          practitioner: 'Dr. Demo Provider',
          wouldChangeHipps: false
        }
      ],
      signed: [
        {
          id: 'q-002',
          mdsItem: 'I0500',
          mdsItemName: 'COPD or Chronic Lung Disease',
          status: 'signed',
          signedAt: '2026-01-27T11:45:00Z',
          signedBy: 'Dr. Demo Provider',
          mdsItemCoded: true,
          pdfPath: '/Users/andrewburns/Downloads/query_jutxlrwthshb_45_NTA (3).pdf'
        }
      ]
    }
  };

  // Global View mock data - facility dashboard
  const MOCK_FACILITY_DATA = {
    counts: { queries: 1, mds: 40, all: 53 },
    assessments: [
      { patientName: 'Mayfield, James', type: 'Admission', pps: 'None PPS', ardDate: '2026-01-18', hipps: 'KAXF', issues: 3 },
      { patientName: 'Turk, Kathleen', type: 'Annual', pps: 'None PPS', ardDate: '2026-01-19', hipps: 'IALE', issues: 3 },
      { patientName: 'Bajek, Andrew', type: 'Annual', pps: 'None PPS', ardDate: '2026-01-19', hipps: 'IAEE', issues: 4 },
      { patientName: 'Cox, Daniel', type: 'Discharge Return Anticipated', pps: '', ardDate: '2026-01-24', hipps: '', issues: 3 },
      { patientName: 'Tillery, Adornato', type: 'Annual', pps: 'None PPS', ardDate: '2026-01-25', hipps: '', issues: 3 },
      { patientName: 'Frost, Terry', type: 'Quarterly', pps: 'None PPS', ardDate: '2026-01-26', hipps: '', issues: 3 }
    ]
  };

  // ============================================
  // INITIALIZATION
  // ============================================
  function init() {
    console.log('[Demo MDS Overlay] Initializing...');

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setup);
    } else {
      setup();
    }
  }

  function setup() {
    injectStyles();
    injectBadges();
    updateSuperMenuDashboard();
    console.log('[Demo MDS Overlay] Setup complete');
  }

  // ============================================
  // BADGE INJECTION
  // ============================================
  function injectBadges() {
    const questions = document.querySelectorAll('.question[data-questiontype]');

    questions.forEach(questionEl => {
      const questionId = questionEl.id;
      if (!questionId) return;

      const itemCode = questionId.replace('_row', '').replace('_question', '');
      const itemData = MOCK_MDS_DATA.items.find(item => item.code === itemCode);
      if (!itemData) return;

      injectBadge(questionEl, itemData);
    });

    // Also try to find items by scanning for specific codes in the HTML
    MOCK_MDS_DATA.items.forEach(item => {
      const selectors = [
        `#${item.code}_row`,
        `#${item.code}_question`,
        `[data-questionid="${item.code}"]`,
        `.question:has([id*="${item.code}"])`
      ];

      for (const selector of selectors) {
        try {
          const el = document.querySelector(selector);
          if (el && !el.querySelector('.super-badge')) {
            injectBadge(el, item);
            break;
          }
        } catch (e) {
          // Selector not supported
        }
      }
    });

    // Fallback: inject by text
    injectBadgesByText();
  }

  function injectBadgesByText() {
    MOCK_MDS_DATA.items.forEach(item => {
      const codeRegex = new RegExp(item.code.replace(/(\d)/g, '\\s*$1'), 'i');

      document.querySelectorAll('.question-text, .description, label, td').forEach(el => {
        if (el.textContent.match(codeRegex) && !el.closest('.super-badge')) {
          const row = el.closest('tr, .question, .mds-row');
          if (row && !row.querySelector('.super-badge')) {
            injectBadge(row, item);
          }
        }
      });
    });
  }

  function injectBadge(questionEl, itemData) {
    if (questionEl.querySelector('.super-badge')) return;

    const badge = document.createElement('div');
    badge.className = 'super-badge';
    badge.setAttribute('data-item-code', itemData.code);

    const answerText = itemData.aiAnswer === 1 ? 'Yes' : 'No';

    switch (itemData.status) {
      case 'match':
        badge.classList.add('super-badge--match');
        badge.innerHTML = `<span class="super-badge__icon">\u2713</span> Super: ${answerText}`;
        break;
      case 'mismatch':
        badge.classList.add('super-badge--mismatch');
        badge.innerHTML = `<span class="super-badge__icon">\u2717</span> Super: ${answerText}`;
        break;
      case 'review':
        badge.classList.add('super-badge--review');
        badge.innerHTML = `<span class="super-badge__icon">\u26A0</span> Super: ${answerText}?`;
        break;
    }

    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      showPopover(badge, itemData);
    });

    const responsesArea = questionEl.querySelector('.responses, .response-area, td:last-child');
    if (responsesArea) {
      responsesArea.appendChild(badge);
    } else {
      questionEl.appendChild(badge);
    }
  }

  // ============================================
  // POPOVER
  // ============================================
  function showPopover(anchorEl, itemData) {
    closePopover();

    const backdrop = document.createElement('div');
    backdrop.className = 'super-popover-backdrop';
    backdrop.addEventListener('click', closePopover);
    document.body.appendChild(backdrop);

    const popover = document.createElement('div');
    popover.className = 'super-popover';
    popover.innerHTML = buildPopoverContent(itemData);
    document.body.appendChild(popover);

    positionPopover(popover, anchorEl);

    popover.querySelector('.super-popover-close').addEventListener('click', closePopover);

    popover.querySelectorAll('.super-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.dataset.action;
        handlePopoverAction(action, itemData);
      });
    });

    popover.querySelectorAll('.super-evidence-card').forEach(card => {
      card.addEventListener('click', () => {
        const evidenceIdx = parseInt(card.dataset.evidenceIdx);
        const evidence = itemData.evidence[evidenceIdx];

        // Open appropriate viewer based on evidence type (keep popover open)
        if (evidence.marData) {
          showMARViewer(evidence, itemData);
        } else if (evidence.pdfData) {
          showDocumentViewer(evidence, itemData);
        } else {
          showEvidenceModal(itemData);
        }
      });
    });
  }

  function buildPopoverContent(itemData) {
    const answerText = itemData.aiAnswer === 1 ? 'Yes' : 'No';
    const answerClass = itemData.aiAnswer === 1 ? 'super-answer__value--yes' : 'super-answer__value--no';

    const confidenceLevel = itemData.confidence === 'high' ? 3 : itemData.confidence === 'medium' ? 2 : 1;
    const confidenceClass = itemData.confidence === 'high' ? 'high' : itemData.confidence === 'medium' ? 'medium' : 'low';
    const dots = [1, 2, 3].map(i =>
      `<span class="super-confidence__dot ${i <= confidenceLevel ? `super-confidence__dot--filled ${confidenceClass}` : ''}"></span>`
    ).join('');

    // Build evidence type badge
    const getEvidenceTypeBadge = (ev) => {
      if (ev.evidenceType === 'keyword') {
        return '<span class="super-evidence-card__evidence-type super-evidence-card__evidence-type--keyword">Keyword</span>';
      } else if (ev.evidenceType === 'contextual') {
        return '<span class="super-evidence-card__evidence-type super-evidence-card__evidence-type--contextual">Contextual</span>';
      }
      return '';
    };

    const evidenceCards = itemData.evidence.map((ev, idx) => `
      <div class="super-evidence-card" data-doc-id="${ev.documentId}" data-evidence-idx="${idx}">
        <div class="super-evidence-card__header">
          <div class="super-evidence-card__badges">
            <span class="super-evidence-card__type super-evidence-card__type--${ev.type}">${formatEvidenceType(ev.type)}</span>
            ${ev.pdfData ? `<span class="super-evidence-card__filename">${ev.pdfData.filename || ev.title}</span>` : ''}
          </div>
          <span class="super-evidence-card__date">${ev.date}</span>
        </div>
        <div class="super-evidence-card__quote">"${ev.quote}"</div>
        ${ev.description ? `<div class="super-evidence-card__description">${ev.description}</div>` : ''}
        ${ev.pdfData ? '<div class="super-evidence-card__link">View PDF \u2192</div>' : ''}
        ${ev.marData ? '<div class="super-evidence-card__link">View Administrations \u2192</div>' : ''}
        ${ev.tarData ? '<div class="super-evidence-card__link">View Treatments \u2192</div>' : ''}
      </div>
    `).join('');

    let impactHtml = '';
    if (itemData.wouldChangeHipps && itemData.impact) {
      const impactParts = [];
      if (itemData.impact.nta?.wouldChangeLevel) {
        impactParts.push(`NTA: ${itemData.impact.nta.currentLevel} \u2192 ${itemData.impact.nta.newLevel}`);
      }
      if (itemData.impact.slp?.wouldChangeGroup) {
        impactParts.push(`SLP: ${itemData.impact.slp.currentGroup} \u2192 ${itemData.impact.slp.newGroup}`);
      }
      impactHtml = `
        <div class="super-impact-section">
          <span class="super-impact-badge">${impactParts.join(', ')}</span>
        </div>
      `;
    }

    return `
      <div class="super-popover-header">
        <div>
          <div class="super-popover-header__title">${itemData.code} - ${itemData.name}</div>
          <div class="super-popover-header__subtitle">AI Recommendation</div>
        </div>
        <button class="super-popover-close">\u00D7</button>
      </div>
      <div class="super-popover-body">
        <div class="super-answer-row">
          <div class="super-answer">
            <span class="super-answer__label">Recommended:</span>
            <span class="super-answer__value ${answerClass}">${answerText}</span>
          </div>
          <div class="super-confidence">
            <span class="super-confidence__label">Confidence</span>
            <div class="super-confidence__dots">${dots}</div>
          </div>
        </div>
        ${impactHtml}
        <div class="super-rationale">
          <div class="super-rationale__label">RATIONALE</div>
          <div class="super-rationale__text">${itemData.rationale}</div>
        </div>
        <div class="super-evidence-section">
          <div class="super-evidence-section__label">SUPPORTING EVIDENCE (${itemData.evidence.length})</div>
          <div class="super-evidence-list">${evidenceCards}</div>
        </div>
      </div>
      <div class="super-popover-actions">
        <button class="super-btn super-btn--agree" data-action="agree">\u2713 Agree</button>
        <button class="super-btn super-btn--disagree" data-action="disagree">\u2717 Disagree</button>
        <button class="super-btn super-btn--query" data-action="query">? Query</button>
      </div>
    `;
  }

  function positionPopover(popover, anchorEl) {
    const anchorRect = anchorEl.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();

    let top = anchorRect.bottom + 8;
    let left = anchorRect.left;

    if (left + popoverRect.width > window.innerWidth - 16) {
      left = window.innerWidth - popoverRect.width - 16;
    }
    if (top + popoverRect.height > window.innerHeight - 16) {
      top = anchorRect.top - popoverRect.height - 8;
    }

    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
  }

  function closePopover() {
    const backdrop = document.querySelector('.super-popover-backdrop');
    const popover = document.querySelector('.super-popover');
    if (backdrop) backdrop.remove();
    if (popover) popover.remove();
  }

  function handlePopoverAction(action, itemData) {
    closePopover();

    switch (action) {
      case 'agree':
        showToast('success', `Agreed with recommendation for ${itemData.code}`);
        break;
      case 'disagree':
        showToast('info', `Dismissed recommendation for ${itemData.code}`);
        break;
      case 'query':
        showQueryModal(itemData);
        break;
    }
  }

  // ============================================
  // EVIDENCE MODAL
  // ============================================
  function showEvidenceModal(itemData) {
    const modal = document.createElement('div');
    modal.className = 'super-modal super-modal--visible super-evidence-modal';
    modal.innerHTML = buildEvidenceModalContent(itemData);
    document.body.appendChild(modal);

    modal.querySelector('.super-modal__backdrop').addEventListener('click', () => modal.remove());
    modal.querySelector('.super-modal__close').addEventListener('click', () => modal.remove());
    modal.querySelectorAll('.super-modal__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modal.remove();
        if (btn.dataset.action === 'code') {
          showToast('success', `${itemData.code} marked for coding`);
        }
      });
    });

    // Add click handlers to evidence cards to open document viewer
    modal.querySelectorAll('.super-evidence-card').forEach((card, index) => {
      const evidence = itemData.evidence[index];
      if (evidence && (evidence.pdfData || evidence.marData)) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
          // Keep modal open when opening document viewer
          if (evidence.marData) {
            showMARViewer(evidence, itemData);
          } else if (evidence.pdfData) {
            showDocumentViewer(evidence, itemData);
          }
        });
      }
    });
  }

  function buildEvidenceModalContent(itemData) {
    const answerText = itemData.aiAnswer === 1 ? 'Yes' : 'No';

    let impactHtml = '';
    if (itemData.wouldChangeHipps && itemData.impact) {
      const impactParts = [];
      if (itemData.impact.nta?.wouldChangeLevel) {
        impactParts.push(`
          <div class="super-evidence__impact-badge">
            <span class="super-evidence__impact-label">NTA</span>
            <span class="super-evidence__impact-change">${itemData.impact.nta.currentLevel} \u2192 ${itemData.impact.nta.newLevel}</span>
          </div>
        `);
      }
      if (itemData.impact.slp?.wouldChangeGroup) {
        impactParts.push(`
          <div class="super-evidence__impact-badge">
            <span class="super-evidence__impact-label">SLP</span>
            <span class="super-evidence__impact-change">${itemData.impact.slp.currentGroup} \u2192 ${itemData.impact.slp.newGroup}</span>
          </div>
        `);
      }
      impactHtml = `<div class="super-evidence__impact-row">${impactParts.join('')}</div>`;
    }

    const evidenceList = itemData.evidence.map(ev => `
      <div class="super-evidence-card">
        <div class="super-evidence-card__header">
          <span class="super-evidence-card__type super-evidence-card__type--${ev.type}">${formatEvidenceType(ev.type)}</span>
          <span style="font-size: 11px; color: #6b7280;">${ev.date}</span>
        </div>
        <div class="super-evidence-card__quote">"${ev.quote}"</div>
      </div>
    `).join('');

    const confidenceLevel = itemData.confidence === 'high' ? 3 : itemData.confidence === 'medium' ? 2 : 1;
    const dots = [1, 2, 3].map(i =>
      `<span class="super-evidence__dot ${i <= confidenceLevel ? 'super-evidence__dot--filled' : ''}"></span>`
    ).join('');

    return `
      <div class="super-modal__backdrop"></div>
      <div class="super-modal__container" style="width: 520px;">
        <div class="super-modal__header">
          <div class="super-modal__title-row">
            <div class="super-modal__icon">\uD83D\uDCCB</div>
            <span class="super-modal__title">${itemData.code} - ${itemData.name}</span>
          </div>
          <button class="super-modal__close">\u00D7</button>
        </div>
        <div class="super-modal__body">
          <div class="super-evidence">
            ${impactHtml}
            <div class="super-evidence__section">
              <div class="super-evidence__section-title">AI RECOMMENDATION</div>
              <div class="super-evidence__recommendation">
                <div class="super-evidence__answer-row">
                  <span class="super-evidence__answer-label">Recommended Answer:</span>
                  <span class="super-evidence__answer-value">${answerText}</span>
                  <div class="super-evidence__confidence">${dots}</div>
                </div>
                <div class="super-evidence__rationale">${itemData.rationale}</div>
              </div>
            </div>
            <div class="super-evidence__section">
              <div class="super-evidence__section-title">SUPPORTING EVIDENCE</div>
              <div class="super-evidence-list">${evidenceList}</div>
            </div>
          </div>
        </div>
        <div class="super-modal__footer">
          <button class="super-modal__btn super-modal__btn--secondary">Close</button>
          ${itemData.status === 'mismatch' ? '<button class="super-modal__btn super-modal__btn--primary" data-action="code">Code This Item</button>' : ''}
        </div>
      </div>
    `;
  }

  // ============================================
  // DOCUMENT VIEWER MODAL
  // ============================================
  function showDocumentViewer(evidence, itemData) {
    const pdfData = evidence.pdfData;
    if (!pdfData) {
      showToast('info', 'Document preview not available');
      return;
    }

    const modal = document.createElement('div');
    modal.className = 'super-modal super-modal--visible super-doc-viewer-modal';
    modal.innerHTML = buildDocumentViewerContent(evidence, itemData, pdfData);
    document.body.appendChild(modal);

    // State
    let currentEvidence = evidence;
    let currentPdfData = pdfData;
    let currentPage = 1;
    let zoom = 100;

    // Helper to render page content
    function renderPageContent(pageNum) {
      const content = modal.querySelector('.super-doc-viewer__content');
      let pageData;

      // Check if we have multi-page content
      if (currentPdfData.pageContent && currentPdfData.pageContent[pageNum]) {
        pageData = currentPdfData.pageContent[pageNum];
      } else {
        // Fall back to single content array
        pageData = currentPdfData.content;
      }

      const contentLines = pageData.map(line => {
        let classes = 'super-doc-viewer__line';
        let extraHtml = '';

        // Handle different highlight types
        if (line.highlight === 'keyword' || line.highlight === true) {
          classes += ' super-doc-viewer__line--highlight-keyword';
        } else if (line.highlight === 'contextual') {
          classes += ' super-doc-viewer__line--highlight-contextual';
        }

        // Handle badges (like "NEW GOAL")
        if (line.badge) {
          if (line.badge === 'NEW GOAL') {
            extraHtml = '<span class="super-doc-viewer__goal-badge">NEW GOAL</span> ';
          } else if (line.badge === 'section-header') {
            classes += ' super-doc-viewer__line--section-header';
          }
        }

        return `<div class="${classes}">${extraHtml}${line.text || '&nbsp;'}</div>`;
      }).join('');

      content.innerHTML = contentLines;
      modal.querySelector('.super-doc-viewer__page-num').textContent = `${pageNum} of ${currentPdfData.pages || 1}`;
    }

    // Helper to switch evidence item
    function switchEvidence(ev) {
      if (!ev.pdfData) {
        modal.remove();
        if (ev.marData) {
          showMARViewer(ev, itemData);
        } else {
          showToast('info', 'Document preview not available');
        }
        return;
      }

      currentEvidence = ev;
      currentPdfData = ev.pdfData;
      currentPage = 1;

      // Update header
      modal.querySelector('.super-doc-viewer__title').textContent = currentPdfData.title;

      // Update active state in sidebar
      modal.querySelectorAll('.super-doc-viewer__evidence-item').forEach((item, idx) => {
        item.classList.toggle('super-doc-viewer__evidence-item--active',
          itemData.evidence[idx].documentId === ev.documentId);
      });

      // Render first page
      renderPageContent(1);
    }

    // Event listeners
    modal.querySelector('.super-modal__backdrop').addEventListener('click', () => modal.remove());
    modal.querySelector('.super-doc-viewer__close').addEventListener('click', () => modal.remove());
    modal.querySelector('.super-doc-viewer__btn--close')?.addEventListener('click', () => modal.remove());

    // Query Physician button
    modal.querySelector('.super-doc-viewer__btn--query')?.addEventListener('click', () => {
      modal.remove();
      showQueryModal(itemData);
    });

    // Zoom controls
    const content = modal.querySelector('.super-doc-viewer__content');
    modal.querySelector('.super-doc-viewer__zoom-in')?.addEventListener('click', () => {
      zoom = Math.min(zoom + 25, 200);
      content.style.fontSize = `${zoom}%`;
      modal.querySelector('.super-doc-viewer__zoom-level').textContent = `${zoom}%`;
    });
    modal.querySelector('.super-doc-viewer__zoom-out')?.addEventListener('click', () => {
      zoom = Math.max(zoom - 25, 50);
      content.style.fontSize = `${zoom}%`;
      modal.querySelector('.super-doc-viewer__zoom-level').textContent = `${zoom}%`;
    });

    // Pagination with actual page content changes
    const totalPages = pdfData.pages || 1;
    modal.querySelector('.super-doc-viewer__prev')?.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPageContent(currentPage);
      }
    });
    modal.querySelector('.super-doc-viewer__next')?.addEventListener('click', () => {
      if (currentPage < (currentPdfData.pages || 1)) {
        currentPage++;
        renderPageContent(currentPage);
      }
    });

    // Sidebar evidence item click handlers
    modal.querySelectorAll('.super-doc-viewer__evidence-item').forEach((item, idx) => {
      item.addEventListener('click', () => {
        switchEvidence(itemData.evidence[idx]);
      });
    });

    // Render initial content
    renderPageContent(1);
  }

  function buildDocumentViewerContent(evidence, itemData, pdfData) {
    // Build evidence type badge for sidebar
    const getEvidenceTypeBadge = (ev) => {
      if (ev.evidenceType === 'keyword') {
        return '<span class="super-doc-viewer__evidence-type-badge super-doc-viewer__evidence-type-badge--keyword">Keyword</span>';
      } else if (ev.evidenceType === 'contextual') {
        return '<span class="super-doc-viewer__evidence-type-badge super-doc-viewer__evidence-type-badge--contextual">Contextual</span>';
      }
      return '';
    };

    return `
      <div class="super-modal__backdrop"></div>
      <div class="super-doc-viewer">
        <div class="super-doc-viewer__header">
          <div class="super-doc-viewer__header-left">
            <div class="super-doc-viewer__item-badge">${itemData.code} - ${itemData.name}</div>
            <div class="super-doc-viewer__title">${pdfData.title}</div>
          </div>
          <div class="super-doc-viewer__controls">
            <button class="super-doc-viewer__zoom-out">\u2212</button>
            <span class="super-doc-viewer__zoom-level">100%</span>
            <button class="super-doc-viewer__zoom-in">+</button>
          </div>
          <button class="super-doc-viewer__close">\u00D7</button>
        </div>
        <div class="super-doc-viewer__body">
          <div class="super-doc-viewer__sidebar">
            <div class="super-doc-viewer__evidence-label">EVIDENCE (${itemData.evidence.length})</div>
            ${itemData.evidence.map((ev, idx) => `
              <div class="super-doc-viewer__evidence-item ${ev.documentId === evidence.documentId ? 'super-doc-viewer__evidence-item--active' : ''}" data-idx="${idx}">
                <div class="super-doc-viewer__evidence-item-header">
                  <div class="super-doc-viewer__evidence-tag super-doc-viewer__evidence-tag--${ev.type}">${formatEvidenceType(ev.type)}</div>
                  ${getEvidenceTypeBadge(ev)}
                </div>
                <div class="super-doc-viewer__evidence-quote">"${ev.quote.substring(0, 60)}${ev.quote.length > 60 ? '...' : ''}"</div>
                <div class="super-doc-viewer__evidence-desc">${ev.title}</div>
                ${ev.description ? `<div class="super-doc-viewer__evidence-why">${ev.description.substring(0, 80)}${ev.description.length > 80 ? '...' : ''}</div>` : ''}
                ${ev.pdfData ? '<div class="super-doc-viewer__evidence-link">View PDF \u2192</div>' : ''}
                ${ev.marData ? '<div class="super-doc-viewer__evidence-link">View Administrations \u2192</div>' : ''}
              </div>
            `).join('')}
          </div>
          <div class="super-doc-viewer__document">
            <div class="super-doc-viewer__legend">
              <span class="super-doc-viewer__legend-item super-doc-viewer__legend-item--keyword">\u2588 Keyword Match</span>
              <span class="super-doc-viewer__legend-item super-doc-viewer__legend-item--contextual">\u2588 Contextual Match</span>
            </div>
            <div class="super-doc-viewer__content">
              <!-- Content rendered by JavaScript -->
            </div>
          </div>
        </div>
        <div class="super-doc-viewer__footer">
          <div class="super-doc-viewer__pagination">
            <button class="super-doc-viewer__prev">\u2039</button>
            <span class="super-doc-viewer__page-num">1 of ${pdfData.pages || 1}</span>
            <button class="super-doc-viewer__next">\u203A</button>
          </div>
          <div class="super-doc-viewer__footer-actions">
            <button class="super-doc-viewer__btn--query">? Query Physician</button>
            <button class="super-doc-viewer__btn--close">Close</button>
          </div>
        </div>
      </div>
    `;
  }

  // ============================================
  // MAR VIEWER MODAL
  // ============================================
  function showMARViewer(evidence, itemData) {
    const marData = evidence.marData;
    if (!marData) {
      showToast('info', 'MAR data not available');
      return;
    }

    const modal = document.createElement('div');
    modal.className = 'super-modal super-modal--visible super-mar-viewer-modal';
    modal.innerHTML = buildMARViewerContent(evidence, itemData, marData);
    document.body.appendChild(modal);

    modal.querySelector('.super-modal__backdrop').addEventListener('click', () => modal.remove());
    modal.querySelector('.super-mar-viewer__close').addEventListener('click', () => modal.remove());
  }

  function buildMARViewerContent(evidence, itemData, marData) {
    // Generate date range
    const startDate = new Date(marData.dateRange.start);
    const endDate = new Date(marData.dateRange.end);
    const days = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      days.push({
        date: currentDate.toISOString().split('T')[0],
        dayName: currentDate.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Count statuses
    const counts = { given: 0, refused: 0, loa: 0, hold: 0 };
    marData.administrations.forEach(a => {
      if (counts[a.status] !== undefined) counts[a.status]++;
    });
    const totalEvents = marData.administrations.length;

    // Build calendar grid
    const calendarHeader = days.map(d => `
      <th class="super-mar__day-header">
        <div class="super-mar__day-name">${d.dayName}</div>
        <div class="super-mar__day-num">${d.dayNum}</div>
      </th>
    `).join('');

    // Get unique times
    const times = [...new Set(marData.administrations.map(a => a.time))];

    const calendarRows = times.map(time => {
      const cells = days.map(day => {
        const admin = marData.administrations.find(a => a.date === day.date && a.time === time);
        if (!admin) return '<td class="super-mar__cell">-</td>';

        const statusClass = `super-mar__status--${admin.status}`;
        const statusIcon = {
          given: '\u2713',
          refused: 'R',
          loa: 'L',
          hold: 'H'
        }[admin.status] || '-';

        return `<td class="super-mar__cell ${statusClass}">${statusIcon}</td>`;
      }).join('');

      return `
        <tr>
          <td class="super-mar__time-cell">${time}</td>
          ${cells}
        </tr>
      `;
    }).join('');

    const dateRangeStr = `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    return `
      <div class="super-modal__backdrop"></div>
      <div class="super-mar-viewer">
        <div class="super-mar-viewer__header">
          <div class="super-mar-viewer__med-info">
            <span class="super-mar-viewer__med-icon">\uD83D\uDC8A</span>
            <span class="super-mar-viewer__med-name">${marData.medication}</span>
            <span class="super-mar-viewer__badge">MAR</span>
          </div>
          <button class="super-mar-viewer__close">\u00D7</button>
        </div>
        <div class="super-mar-viewer__instructions">
          ${marData.instructions}
          <div class="super-mar-viewer__frequency">${marData.frequency}</div>
        </div>
        <div class="super-mar-viewer__body">
          <div class="super-mar-viewer__date-nav">
            <button class="super-mar__date-prev">\u2039</button>
            <span class="super-mar__date-icon">\uD83D\uDCC5</span>
            <span class="super-mar__date-range">${dateRangeStr}</span>
            <button class="super-mar__date-next">\u203A</button>
          </div>
          <table class="super-mar__calendar">
            <thead>
              <tr>
                <th class="super-mar__time-header">Time</th>
                ${calendarHeader}
              </tr>
            </thead>
            <tbody>
              ${calendarRows}
            </tbody>
          </table>
          <div class="super-mar__summary">
            <span class="super-mar__event-count">${totalEvents} events</span>
            <div class="super-mar__legend">
              <span class="super-mar__legend-item super-mar__legend-item--given">\u2713 Given</span>
              ${counts.refused > 0 ? `<span class="super-mar__legend-item super-mar__legend-item--refused">${counts.refused} Refused</span>` : ''}
              ${counts.loa > 0 ? `<span class="super-mar__legend-item super-mar__legend-item--loa">${counts.loa} LOA</span>` : ''}
              ${counts.hold > 0 ? `<span class="super-mar__legend-item super-mar__legend-item--hold">${counts.hold} Hold</span>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ============================================
  // TAR (TREATMENT ADMINISTRATION RECORD) VIEWER
  // ============================================
  function showTARViewer(evidence, itemData) {
    const tarData = evidence.tarData;
    if (!tarData) {
      showToast('info', 'TAR data not available');
      return;
    }

    const modal = document.createElement('div');
    modal.className = 'super-modal super-modal--visible super-tar-viewer-modal';
    modal.innerHTML = buildTARViewerContent(evidence, itemData, tarData);
    document.body.appendChild(modal);

    modal.querySelector('.super-modal__backdrop').addEventListener('click', () => modal.remove());
    modal.querySelector('.super-tar-viewer__close').addEventListener('click', () => modal.remove());
  }

  function buildTARViewerContent(evidence, itemData, tarData) {
    // Generate date range
    const startDate = new Date(tarData.dateRange.start);
    const endDate = new Date(tarData.dateRange.end);
    const days = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      days.push({
        date: currentDate.toISOString().split('T')[0],
        dayName: currentDate.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Count statuses
    const counts = { performed: 0, missed: 0, na: 0, refused: 0 };
    tarData.administrations.forEach(a => {
      if (counts[a.status] !== undefined) counts[a.status]++;
    });
    const totalEvents = tarData.administrations.length;

    // Build calendar grid
    const calendarHeader = days.map(d => `
      <th class="super-tar__day-header">
        <div class="super-tar__day-name">${d.dayName}</div>
        <div class="super-tar__day-num">${d.dayNum}</div>
      </th>
    `).join('');

    // Get unique times
    const times = [...new Set(tarData.administrations.map(a => a.time))];

    const calendarRows = times.map(time => {
      const cells = days.map(day => {
        const admin = tarData.administrations.find(a => a.date === day.date && a.time === time);
        if (!admin) return '<td class="super-tar__cell">-</td>';

        const statusClass = `super-tar__status--${admin.status}`;
        const statusIcon = {
          performed: '\u2713',
          missed: 'M',
          na: 'N/A',
          refused: 'R'
        }[admin.status] || '-';

        return `<td class="super-tar__cell ${statusClass}">${statusIcon}</td>`;
      }).join('');

      return `
        <tr>
          <td class="super-tar__time-cell">${time}</td>
          ${cells}
        </tr>
      `;
    }).join('');

    const dateRangeStr = `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    return `
      <div class="super-modal__backdrop"></div>
      <div class="super-tar-viewer">
        <div class="super-tar-viewer__header">
          <div class="super-tar-viewer__treatment-info">
            <span class="super-tar-viewer__treatment-icon">\uD83D\uDC89</span>
            <span class="super-tar-viewer__treatment-name">${tarData.treatment}</span>
            <span class="super-tar-viewer__badge">TAR</span>
          </div>
          <button class="super-tar-viewer__close">\u00D7</button>
        </div>
        <div class="super-tar-viewer__instructions">
          ${tarData.instructions}
          <div class="super-tar-viewer__frequency">${tarData.frequency}</div>
        </div>
        <div class="super-tar-viewer__body">
          <div class="super-tar-viewer__date-nav">
            <button class="super-tar__date-prev">\u2039</button>
            <span class="super-tar__date-icon">\uD83D\uDCC5</span>
            <span class="super-tar__date-range">${dateRangeStr}</span>
            <button class="super-tar__date-next">\u203A</button>
          </div>
          <table class="super-tar__calendar">
            <thead>
              <tr>
                <th class="super-tar__time-header">Time</th>
                ${calendarHeader}
              </tr>
            </thead>
            <tbody>
              ${calendarRows}
            </tbody>
          </table>
          <div class="super-tar__summary">
            <span class="super-tar__event-count">${totalEvents} events</span>
            <div class="super-tar__legend">
              <span class="super-tar__legend-item super-tar__legend-item--performed">\u2713 Performed</span>
              ${counts.missed > 0 ? `<span class="super-tar__legend-item super-tar__legend-item--missed">${counts.missed} Missed</span>` : ''}
              ${counts.na > 0 ? `<span class="super-tar__legend-item super-tar__legend-item--na">${counts.na} N/A</span>` : ''}
              ${counts.refused > 0 ? `<span class="super-tar__legend-item super-tar__legend-item--refused">${counts.refused} Refused</span>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ============================================
  // QUERY MODAL
  // ============================================
  function showQueryModal(itemData) {
    // Build evidence summary for query text
    const evidenceSummary = itemData.evidence.map(ev => `- ${ev.title}: "${ev.quote}"`).join('\n');

    // Build evidence attachment checkboxes
    const evidenceCheckboxes = itemData.evidence.map((ev, idx) => `
      <label class="super-query__attachment">
        <input type="checkbox" name="evidence" value="${idx}" checked>
        <span class="super-query__attachment-type">${formatEvidenceType(ev.type)}</span>
        <span class="super-query__attachment-title">${ev.title}</span>
      </label>
    `).join('');

    const modal = document.createElement('div');
    modal.className = 'super-modal super-modal--visible';
    modal.innerHTML = `
      <div class="super-modal__backdrop"></div>
      <div class="super-modal__container" style="width: 520px;">
        <div class="super-modal__header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
          <div class="super-modal__title-row">
            <div class="super-modal__icon">?</div>
            <span class="super-modal__title">Query Physician</span>
          </div>
          <button class="super-modal__close">\u00D7</button>
        </div>
        <div class="super-modal__body">
          <div style="margin-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 8px;">MDS Item</div>
            <div style="font-weight: 600; display: flex; align-items: center; gap: 8px;">
              ${itemData.code} - ${itemData.name}
              ${itemData.wouldChangeHipps ? '<span style="background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 600;">Would Change HIPPS</span>' : ''}
            </div>
          </div>
          <div style="margin-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 8px;">Query Note</div>
            <textarea class="super-query__textarea" style="width: 100%; height: 120px; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-family: inherit; font-size: 13px; resize: vertical; line-height: 1.5;">Based on documentation review, patient appears to have an active diagnosis of ${itemData.name.toLowerCase()}.

Evidence found includes:
${evidenceSummary}

Please clarify if this diagnosis should be coded as active for this assessment period.</textarea>
          </div>
          <div style="margin-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 8px;">Include Evidence Attachments</div>
            <div class="super-query__attachments">
              ${evidenceCheckboxes}
            </div>
          </div>
          <div>
            <div style="font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 8px;">Select Practitioner</div>
            <select class="super-query__select" style="width: 100%; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px;">
              <option value="">Select a practitioner...</option>
              <option value="dr-mitchell" selected>Dr. Demo Provider (Attending)</option>
              <option value="dr-johnson">Dr. Demo Consult (Consulting)</option>
              <option value="np-wilson">NP Demo NP</option>
              <option value="dr-bernal">Dr. Demo MD</option>
            </select>
          </div>
        </div>
        <div class="super-modal__footer">
          <button class="super-modal__btn super-modal__btn--secondary" data-action="cancel">Cancel</button>
          <button class="super-modal__btn super-modal__btn--primary super-query__send-btn" data-action="send" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
            <span class="super-query__send-icon">\u2708</span> Send Query
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.super-modal__backdrop').addEventListener('click', () => modal.remove());
    modal.querySelector('.super-modal__close').addEventListener('click', () => modal.remove());

    modal.querySelectorAll('.super-modal__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.action === 'send') {
          const practitioner = modal.querySelector('.super-query__select').value;
          if (!practitioner) {
            showToast('error', 'Please select a practitioner');
            return;
          }

          // Get selected attachments count
          const attachments = modal.querySelectorAll('input[name="evidence"]:checked').length;

          // Show success toast
          showToast('success', `Query sent for ${itemData.code} with ${attachments} attachment(s)`);

          // Update badge to show query state
          updateBadgeToQueryState(itemData.code);

          // Add to pending queries (would update MOCK_MDS_DATA in real implementation)
          addToPendingQueries(itemData, practitioner);

          modal.remove();
        } else {
          modal.remove();
        }
      });
    });
  }

  // Helper function to update badge to query state
  function updateBadgeToQueryState(itemCode) {
    const badge = document.querySelector(`.super-badge[data-item-code="${itemCode}"]`);
    if (badge) {
      badge.className = 'super-badge super-badge--query';
      badge.innerHTML = `<span class="super-badge__icon">?</span> Query Sent`;
    }
  }

  // Helper function to add to pending queries
  function addToPendingQueries(itemData, practitioner) {
    const practitionerNames = {
      'dr-mitchell': 'Dr. Demo Provider',
      'dr-johnson': 'Dr. Demo Consult',
      'np-wilson': 'NP Demo NP',
      'dr-bernal': 'Dr. Demo MD'
    };

    MOCK_MDS_DATA.queries.pending.push({
      id: `q-${Date.now()}`,
      mdsItem: itemData.code,
      mdsItemName: itemData.name,
      status: 'sent',
      sentAt: new Date().toISOString(),
      practitioner: practitionerNames[practitioner] || practitioner,
      wouldChangeHipps: itemData.wouldChangeHipps
    });
  }

  // ============================================
  // SUPER MENU DASHBOARD UPDATE
  // ============================================
  function updateSuperMenuDashboard() {
    setTimeout(() => {
      // Update the dashboard content with our views
      const menuContent = document.getElementById('super-menu-content');
      if (!menuContent) return;

      // Replace with demo dashboard
      const demoDashboard = document.createElement('div');
      demoDashboard.className = 'demo-dashboard';
      demoDashboard.innerHTML = buildDemoDashboard();

      menuContent.innerHTML = '';
      menuContent.appendChild(demoDashboard);

      attachDashboardListeners(menuContent);
    }, 500);
  }

  function buildDemoDashboard() {
    const data = MOCK_MDS_DATA;
    const hippsChangingItems = data.items.filter(i => i.wouldChangeHipps && (i.status === 'mismatch' || i.status === 'review'));
    const compliancePassed = Object.values(data.compliance).filter(c => c.status === 'passed').length;
    const complianceTotal = Object.keys(data.compliance).length;

    return `
      <!-- HIPPS Display -->
      <div class="super-hipps-display">
        <div class="super-hipps-section">
          <div class="super-hipps-label">CURRENT HIPPS</div>
          <div class="super-hipps-code">${data.hipps.current}</div>
          <div class="super-hipps-amount">${data.hipps.currentReimbursement}/day</div>
        </div>
        <div class="super-hipps-arrow">\u2192</div>
        <div class="super-hipps-section super-hipps-section--potential">
          <div class="super-hipps-label">POTENTIAL HIPPS</div>
          <div class="super-hipps-code">${data.hipps.potential}</div>
          <div class="super-hipps-amount super-hipps-amount--positive">${data.hipps.dailyDifference}</div>
        </div>
      </div>

      <!-- Would Change HIPPS Card -->
      ${hippsChangingItems.length > 0 ? `
      <div class="super-card super-card--green">
        <div class="super-card__header">
          <span class="super-card__icon">\u26A1</span>
          <span class="super-card__title">${hippsChangingItems.length} Would Change HIPPS</span>
        </div>
        <div class="super-card__content">
          ${hippsChangingItems.map(item => {
            let impactStr = '';
            if (item.impact?.nta?.wouldChangeLevel) {
              impactStr = `NTA: ${item.impact.nta.currentLevel} \u2192 ${item.impact.nta.newLevel}`;
            } else if (item.impact?.slp?.wouldChangeGroup) {
              impactStr = `SLP: ${item.impact.slp.currentGroup} \u2192 ${item.impact.slp.newGroup}`;
            }
            return `
              <div class="super-card__item" data-item="${item.code}">
                <span class="super-card__item-code">${item.code}</span>
                <span class="super-card__item-name">${item.name}</span>
                <span class="super-card__item-impact">${impactStr}</span>
              </div>
            `;
          }).join('')}
          <div class="super-card__hint">Click item to code or send query</div>
        </div>
      </div>
      ` : ''}

      <!-- Pending Queries Card -->
      ${data.queries.pending.length > 0 ? `
      <div class="super-card super-card--yellow">
        <div class="super-card__header">
          <span class="super-card__icon">\u23F1</span>
          <span class="super-card__title">Pending Queries (${data.queries.pending.length})</span>
        </div>
        <div class="super-card__content">
          ${data.queries.pending.map(q => `
            <div class="super-card__item">
              <span class="super-card__item-code">${q.mdsItem}</span>
              <span class="super-card__item-name">${q.mdsItemName}</span>
              <span class="super-card__item-status super-card__item-status--sent">\u2708 sent</span>
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}

      <!-- Recently Signed Card -->
      ${data.queries.signed.length > 0 ? `
      <div class="super-card super-card--blue">
        <div class="super-card__header">
          <span class="super-card__icon">\u2713</span>
          <span class="super-card__title">Recently Signed (${data.queries.signed.length})</span>
        </div>
        <div class="super-card__content">
          ${data.queries.signed.map(q => `
            <div class="super-card__item super-card__item--clickable" data-query-id="${q.id}" data-pdf-path="${q.pdfPath || ''}" style="cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='#eff6ff'; this.style.transform='translateX(2px)'" onmouseout="this.style.background=''; this.style.transform=''">
              <span class="super-card__item-code">${q.mdsItem}</span>
              <span class="super-card__item-name">${q.mdsItemName}${q.pdfPath ? ' <span style="color: #3b82f6; font-size: 10px; margin-left: 4px;">📄 Click to view PDF</span>' : ''}</span>
              <span class="super-card__item-status super-card__item-status--signed">\u2713 signed</span>
              ${!q.mdsItemCoded ? '<span class="super-card__item-badge">Needs Coding</span>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}

      <!-- Compliance Card -->
      <div class="super-card ${compliancePassed === complianceTotal ? 'super-card--success' : ''}">
        <div class="super-card__header">
          <span class="super-card__title">Compliance</span>
          <span class="super-card__badge ${compliancePassed === complianceTotal ? 'super-card__badge--success' : 'super-card__badge--warning'}">${compliancePassed}/${complianceTotal} \u2713</span>
        </div>
        <div class="super-card__content">
          ${Object.entries(data.compliance).map(([key, check]) => {
            const isPassed = check.status === 'passed';
            const labels = { bims: 'BIMS', phq9: 'PHQ-9', gg: 'GG', orders: 'Orders', therapyDocs: 'Therapy' };
            return `
              <div class="super-compliance-item ${isPassed ? 'super-compliance-item--passed' : 'super-compliance-item--failed'}">
                <span class="super-compliance-item__icon">${isPassed ? '\u2713' : '\u2717'}</span>
                <span class="super-compliance-item__label">${labels[key]}</span>
                <span class="super-compliance-item__message">${check.message}</span>
                ${!isPassed && check.count ? '<button class="super-compliance-item__btn">View</button>' : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function attachDashboardListeners(container) {
    container.querySelectorAll('.super-card__item[data-item]').forEach(item => {
      item.addEventListener('click', () => {
        const code = item.dataset.item;
        const itemData = MOCK_MDS_DATA.items.find(i => i.code === code);
        if (itemData) {
          showEvidenceModal(itemData);
        }
      });
    });
    
    // Handle recently signed queries with PDFs
    container.querySelectorAll('.super-card__item--clickable[data-pdf-path]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const pdfPath = item.dataset.pdfPath;
        const queryId = item.dataset.queryId;
        console.log('[PDF Viewer] Click detected:', { queryId, pdfPath });
        if (pdfPath && pdfPath !== '') {
          // Show modal with option to open PDF
          showSignedQueryPDF(pdfPath, queryId);
        } else {
          console.warn('[PDF Viewer] No PDF path found for query:', queryId);
        }
      });
    });
  }
  
  function showSignedQueryPDF(pdfPath, queryId) {
    console.log('[PDF Viewer] Opening PDF:', { pdfPath, queryId });
    
    // Get query info from MOCK_MDS_DATA
    const signedQuery = MOCK_MDS_DATA.queries.signed.find(q => q.id === queryId);
    const queryInfo = signedQuery ? `${signedQuery.mdsItem} - ${signedQuery.mdsItemName}` : 'Signed Query Document';
    
    console.log('[PDF Viewer] Query info:', { signedQuery, queryInfo });
    
    // Simply open the PDF in a new tab/window - this is the most reliable method for local files
    const pdfUrl = `file://${pdfPath}`;
    console.log('[PDF Viewer] Opening URL:', pdfUrl);
    
    const newWindow = window.open(pdfUrl, '_blank');
    
    if (!newWindow) {
      console.error('[PDF Viewer] Popup blocked or failed to open');
      // Show a fallback message
      alert(`Please allow popups to view the signed query PDF.\n\nFile: ${pdfPath.split('/').pop()}\nQuery: ${queryInfo}`);
    } else {
      console.log('[PDF Viewer] PDF opened in new window');
      showToast('success', `Opened signed query: ${queryInfo}`);
    }
  }

  // ============================================
  // UTILITIES
  // ============================================
  function formatEvidenceType(type) {
    const labels = {
      'order': 'ORDER',
      'lab-result': 'LAB',
      'progress-note': 'NOTE',
      'nursing-note': 'NURSING',
      'therapy-doc': 'THERAPY',
      'vital-signs': 'VITALS',
      'mar': 'MAR'
    };
    return labels[type] || type.toUpperCase();
  }

  function showToast(type, message) {
    const toast = document.createElement('div');
    toast.className = `super-toast super-toast--${type} super-toast--visible`;
    toast.innerHTML = `
      <span class="super-toast__icon">${type === 'success' ? '\u2713' : type === 'error' ? '\u2717' : '\u2139'}</span>
      <span class="super-toast__message">${message}</span>
      <button class="super-toast__close">\u00D7</button>
    `;

    let container = document.querySelector('.super-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'super-toast-container';
      document.body.appendChild(container);
    }

    container.appendChild(toast);
    toast.querySelector('.super-toast__close').addEventListener('click', () => toast.remove());

    setTimeout(() => {
      toast.classList.add('super-toast--dismissing');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // ============================================
  // STYLES
  // ============================================
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Badge Styles */
      .super-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 3px 8px;
        margin-left: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 11px;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.15s;
        vertical-align: middle;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        border: 1px solid transparent;
      }
      .super-badge:hover { transform: translateY(-1px); box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
      .super-badge--match { background: #dcfce7; color: #166534; border-color: #86efac; }
      .super-badge--match:hover { background: #bbf7d0; }
      .super-badge--mismatch { background: #fee2e2; color: #991b1b; border-color: #fca5a5; }
      .super-badge--mismatch:hover { background: #fecaca; }
      .super-badge--review { background: #fef3c7; color: #92400e; border-color: #fcd34d; }
      .super-badge--review:hover { background: #fde68a; }
      .super-badge__icon { font-size: 10px; }

      /* Popover Backdrop */
      .super-popover-backdrop {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.3);
        z-index: 99999;
      }

      /* Popover */
      .super-popover {
        position: fixed;
        z-index: 100000;
        width: 380px;
        max-width: calc(100vw - 32px);
        background: white;
        border-radius: 12px;
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        overflow: hidden;
        animation: popoverIn 0.2s ease-out;
      }
      @keyframes popoverIn {
        from { opacity: 0; transform: scale(0.95) translateY(-4px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }
      .super-popover-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: linear-gradient(135deg, #6366f1, #4f46e5);
        color: white;
      }
      .super-popover-header__title { font-size: 13px; font-weight: 600; }
      .super-popover-header__subtitle { font-size: 11px; opacity: 0.85; margin-top: 2px; }
      .super-popover-close {
        width: 24px; height: 24px;
        display: flex; align-items: center; justify-content: center;
        background: rgba(255,255,255,0.2);
        border: none; border-radius: 50%;
        color: white; font-size: 16px;
        cursor: pointer;
      }
      .super-popover-close:hover { background: rgba(255,255,255,0.3); }
      .super-popover-body { padding: 16px; max-height: 400px; overflow-y: auto; }

      /* Answer & Confidence */
      .super-answer-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 12px;
        margin-bottom: 12px;
        border-bottom: 1px solid #e5e7eb;
      }
      .super-answer { display: flex; align-items: center; gap: 8px; }
      .super-answer__label { font-size: 12px; color: #6b7280; }
      .super-answer__value { font-size: 14px; font-weight: 700; text-transform: uppercase; }
      .super-answer__value--yes { color: #059669; }
      .super-answer__value--no { color: #dc2626; }
      .super-confidence { display: flex; align-items: center; gap: 6px; }
      .super-confidence__label { font-size: 11px; color: #6b7280; }
      .super-confidence__dots { display: flex; gap: 3px; }
      .super-confidence__dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: #e5e7eb;
      }
      .super-confidence__dot--filled { background: #6366f1; }
      .super-confidence__dot--filled.high { background: #059669; }
      .super-confidence__dot--filled.medium { background: #f59e0b; }
      .super-confidence__dot--filled.low { background: #dc2626; }

      /* Impact Section */
      .super-impact-section {
        background: linear-gradient(135deg, #dcfce7, #d1fae5);
        border: 1px solid #86efac;
        border-radius: 8px;
        padding: 8px 12px;
        margin-bottom: 12px;
      }
      .super-impact-badge {
        font-size: 12px;
        font-weight: 600;
        color: #15803d;
      }

      /* Rationale */
      .super-rationale { margin-bottom: 16px; }
      .super-rationale__label {
        font-size: 11px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 6px;
      }
      .super-rationale__text { font-size: 13px; line-height: 1.5; color: #374151; }

      /* Evidence Section */
      .super-evidence-section { margin-bottom: 16px; }
      .super-evidence-section__label {
        font-size: 11px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
      }
      .super-evidence-list { display: flex; flex-direction: column; gap: 8px; }
      .super-evidence-card {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 10px 12px;
        cursor: pointer;
        transition: all 0.15s;
      }
      .super-evidence-card:hover { border-color: #6366f1; background: white; }
      .super-evidence-card__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6px;
      }
      .super-evidence-card__type {
        display: inline-flex;
        padding: 2px 6px;
        font-size: 9px;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 4px;
        background: #6366f1;
        color: white;
      }
      .super-evidence-card__type--order { background: #8b5cf6; }
      .super-evidence-card__type--lab-result { background: #ec4899; }
      .super-evidence-card__type--progress-note { background: #10b981; }
      .super-evidence-card__type--nursing-note { background: #f59e0b; }
      .super-evidence-card__type--therapy-doc { background: #3b82f6; }
      .super-evidence-card__badges {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .super-evidence-card__filename {
        font-size: 9px;
        color: #6b7280;
        background: #f3f4f6;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'SF Mono', Monaco, Consolas, monospace;
      }
      .super-evidence-card__evidence-type {
        font-size: 8px;
        font-weight: 600;
        padding: 2px 5px;
        border-radius: 3px;
        text-transform: uppercase;
      }
      .super-evidence-card__evidence-type--keyword {
        background: #fef3c7;
        color: #92400e;
      }
      .super-evidence-card__evidence-type--contextual {
        background: #dbeafe;
        color: #1e40af;
      }
      .super-evidence-card__date { font-size: 11px; color: #6b7280; }
      .super-evidence-card__quote {
        font-size: 12px;
        line-height: 1.5;
        color: #4b5563;
        font-style: italic;
      }
      .super-evidence-card__description {
        font-size: 11px;
        line-height: 1.4;
        color: #6b7280;
        margin-top: 6px;
        padding-top: 6px;
        border-top: 1px dashed #e5e7eb;
      }
      .super-evidence-card__link {
        margin-top: 8px;
        font-size: 11px;
        font-weight: 600;
        color: #6366f1;
        cursor: pointer;
      }
      .super-evidence-card__link:hover { color: #4f46e5; text-decoration: underline; }

      /* Actions */
      .super-popover-actions {
        display: flex;
        gap: 8px;
        padding: 12px 16px;
        background: #f9fafb;
        border-top: 1px solid #e5e7eb;
      }
      .super-btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 8px 12px;
        font-family: inherit;
        font-size: 12px;
        font-weight: 600;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        background: white;
        color: #374151;
        cursor: pointer;
        transition: all 0.15s;
      }
      .super-btn:hover { background: #f3f4f6; }
      .super-btn--agree { border-color: #86efac; color: #166534; }
      .super-btn--agree:hover { background: #dcfce7; }
      .super-btn--disagree { border-color: #fca5a5; color: #991b1b; }
      .super-btn--disagree:hover { background: #fee2e2; }
      .super-btn--query { border-color: #fcd34d; color: #92400e; }
      .super-btn--query:hover { background: #fef3c7; }

      /* Modal Styles */
      .super-modal {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: 100000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.2s;
      }
      .super-modal--visible { opacity: 1; }
      .super-modal__backdrop {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(2px);
      }
      .super-modal__container {
        position: relative;
        background: white;
        border-radius: 12px;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .super-modal__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        background: linear-gradient(135deg, #059669, #047857);
        color: white;
      }
      .super-modal__title-row { display: flex; align-items: center; gap: 10px; }
      .super-modal__icon {
        width: 28px; height: 28px;
        display: flex; align-items: center; justify-content: center;
        background: rgba(255,255,255,0.2);
        border-radius: 6px;
        font-size: 14px;
      }
      .super-modal__title { font-size: 15px; font-weight: 600; }
      .super-modal__close {
        width: 32px; height: 32px;
        display: flex; align-items: center; justify-content: center;
        background: transparent;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        border-radius: 6px;
      }
      .super-modal__close:hover { background: rgba(255,255,255,0.2); }
      .super-modal__body {
        padding: 20px;
        overflow-y: auto;
        flex: 1;
      }
      .super-modal__footer {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        padding: 16px 20px;
        border-top: 1px solid #e5e7eb;
        background: #f9fafb;
      }
      .super-modal__btn {
        padding: 10px 20px;
        font-size: 13px;
        font-weight: 600;
        border-radius: 6px;
        cursor: pointer;
        font-family: inherit;
        border: none;
        transition: all 0.15s;
      }
      .super-modal__btn--primary { background: #059669; color: white; }
      .super-modal__btn--primary:hover { background: #047857; }
      .super-modal__btn--secondary { background: white; color: #374151; border: 1px solid #d1d5db; }
      .super-modal__btn--secondary:hover { background: #f3f4f6; }

      /* Evidence Modal */
      .super-evidence { display: flex; flex-direction: column; gap: 16px; }
      .super-evidence__section { background: #f9fafb; border-radius: 8px; padding: 16px; }
      .super-evidence__section-title {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        margin-bottom: 12px;
        letter-spacing: 0.05em;
      }
      .super-evidence__recommendation {
        background: white;
        border-radius: 6px;
        padding: 14px;
        border: 1px solid #e5e7eb;
      }
      .super-evidence__answer-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .super-evidence__answer-label { font-size: 12px; color: #6b7280; }
      .super-evidence__answer-value {
        font-size: 16px;
        font-weight: 700;
        color: #059669;
        background: #dcfce7;
        padding: 4px 10px;
        border-radius: 4px;
      }
      .super-evidence__confidence { display: flex; gap: 3px; margin-left: auto; }
      .super-evidence__dot { width: 6px; height: 6px; border-radius: 50%; background: #d1d5db; }
      .super-evidence__dot--filled { background: #059669; }
      .super-evidence__rationale {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid #e5e7eb;
        font-size: 13px;
        line-height: 1.5;
        color: #374151;
      }
      .super-evidence__impact-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
      .super-evidence__impact-badge {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        background: linear-gradient(135deg, #dcfce7, #d1fae5);
        border: 1px solid #86efac;
        border-radius: 6px;
      }
      .super-evidence__impact-label { font-size: 11px; font-weight: 600; color: #166534; text-transform: uppercase; }
      .super-evidence__impact-change { font-size: 12px; font-weight: 600; color: #15803d; font-family: monospace; }

      /* Toast */
      .super-toast-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 100001;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .super-toast {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 16px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 13px;
        transform: translateX(120%);
        transition: transform 0.3s;
        max-width: 360px;
      }
      .super-toast--visible { transform: translateX(0); }
      .super-toast--dismissing { transform: translateX(120%); }
      .super-toast--success { border-left: 4px solid #059669; }
      .super-toast--success .super-toast__icon { color: #059669; }
      .super-toast--error { border-left: 4px solid #dc2626; }
      .super-toast--error .super-toast__icon { color: #dc2626; }
      .super-toast--info { border-left: 4px solid #6366f1; }
      .super-toast--info .super-toast__icon { color: #6366f1; }
      .super-toast__icon { font-size: 18px; }
      .super-toast__message { flex: 1; color: #1f2937; }
      .super-toast__close {
        width: 24px; height: 24px;
        display: flex; align-items: center; justify-content: center;
        background: transparent;
        border: none;
        color: #9ca3af;
        font-size: 18px;
        cursor: pointer;
        border-radius: 4px;
      }
      .super-toast__close:hover { background: #f3f4f6; color: #374151; }

      /* Demo Dashboard Styles */
      .demo-dashboard { padding: 0; }

      /* HIPPS Display */
      .super-hipps-display {
        background: linear-gradient(135deg, #1e3a5f, #2d4a6f);
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        color: white;
      }
      .super-hipps-section { text-align: center; }
      .super-hipps-label {
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.8;
        margin-bottom: 4px;
      }
      .super-hipps-section--potential .super-hipps-label { color: #86efac; }
      .super-hipps-code {
        font-size: 32px;
        font-weight: 700;
        font-family: 'SF Mono', Monaco, Consolas, monospace;
        letter-spacing: 0.05em;
      }
      .super-hipps-section--potential .super-hipps-code { color: #86efac; }
      .super-hipps-amount {
        font-size: 12px;
        opacity: 0.8;
        margin-top: 4px;
      }
      .super-hipps-amount--positive { color: #86efac; font-weight: 600; }
      .super-hipps-arrow {
        font-size: 24px;
        opacity: 0.6;
      }

      /* Cards */
      .super-card {
        background: white;
        margin: 12px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }
      .super-card__header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 14px;
        font-size: 13px;
        font-weight: 600;
        border-bottom: 1px solid #e5e7eb;
      }
      .super-card--green .super-card__header { background: #dcfce7; color: #166534; }
      .super-card--yellow .super-card__header { background: #fef3c7; color: #92400e; }
      .super-card--blue .super-card__header { background: #dbeafe; color: #1e40af; }
      .super-card__icon { font-size: 14px; }
      .super-card__title { flex: 1; }
      .super-card__badge {
        font-size: 11px;
        padding: 2px 8px;
        border-radius: 10px;
        background: rgba(0,0,0,0.1);
      }
      .super-card__badge--success { background: #dcfce7; color: #166534; }
      .super-card__badge--warning { background: #fef3c7; color: #92400e; }
      .super-card__content { padding: 8px 0; }
      .super-card__hint {
        padding: 8px 14px;
        font-size: 11px;
        color: #6b7280;
        font-style: italic;
      }

      /* Card Items */
      .super-card__item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        cursor: pointer;
        transition: background 0.15s;
      }
      .super-card__item:hover { background: #f9fafb; }
      .super-card__item-code {
        font-family: 'SF Mono', Monaco, Consolas, monospace;
        font-weight: 600;
        font-size: 12px;
        color: #374151;
        min-width: 50px;
      }
      .super-card__item-name {
        flex: 1;
        font-size: 12px;
        color: #6b7280;
      }
      .super-card__item-impact {
        font-size: 11px;
        color: #059669;
        font-weight: 500;
      }
      .super-card__item-status {
        font-size: 11px;
        padding: 2px 6px;
        border-radius: 4px;
      }
      .super-card__item-status--sent { background: #fef3c7; color: #92400e; }
      .super-card__item-status--signed { background: #dcfce7; color: #166534; }
      .super-card__item-badge {
        font-size: 10px;
        padding: 2px 6px;
        background: #fef3c7;
        color: #92400e;
        border-radius: 4px;
        font-weight: 600;
      }

      /* Compliance Items */
      .super-compliance-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        font-size: 12px;
      }
      .super-compliance-item--passed .super-compliance-item__icon { color: #059669; }
      .super-compliance-item--failed .super-compliance-item__icon { color: #dc2626; }
      .super-compliance-item__label { font-weight: 600; min-width: 60px; }
      .super-compliance-item__message { flex: 1; color: #6b7280; font-size: 11px; }
      .super-compliance-item__btn {
        padding: 4px 10px;
        font-size: 11px;
        font-weight: 500;
        background: white;
        border: 1px solid #d1d5db;
        border-radius: 4px;
        color: #6366f1;
        cursor: pointer;
      }
      .super-compliance-item__btn:hover { background: #f3f4f6; }

      /* Document Viewer Modal */
      .super-doc-viewer {
        position: relative;
        width: 900px;
        max-width: 95vw;
        max-height: 90vh;
        background: white;
        border-radius: 12px;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .super-doc-viewer__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: linear-gradient(135deg, #7c3aed, #6d28d9);
        color: white;
      }
      .super-doc-viewer__header-left { display: flex; flex-direction: column; gap: 4px; }
      .super-doc-viewer__item-badge {
        font-size: 11px;
        font-weight: 600;
        opacity: 0.9;
      }
      .super-doc-viewer__title {
        font-size: 15px;
        font-weight: 600;
      }
      .super-doc-viewer__controls {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255,255,255,0.15);
        padding: 4px 10px;
        border-radius: 6px;
      }
      .super-doc-viewer__zoom-out,
      .super-doc-viewer__zoom-in {
        width: 24px; height: 24px;
        display: flex; align-items: center; justify-content: center;
        background: transparent;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
      }
      .super-doc-viewer__zoom-out:hover,
      .super-doc-viewer__zoom-in:hover { background: rgba(255,255,255,0.2); }
      .super-doc-viewer__zoom-level {
        font-size: 12px;
        min-width: 40px;
        text-align: center;
      }
      .super-doc-viewer__close {
        width: 32px; height: 32px;
        display: flex; align-items: center; justify-content: center;
        background: transparent;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        border-radius: 6px;
      }
      .super-doc-viewer__close:hover { background: rgba(255,255,255,0.2); }
      .super-doc-viewer__body {
        display: flex;
        flex: 1;
        overflow: hidden;
      }
      .super-doc-viewer__sidebar {
        width: 280px;
        background: #f3f4f6;
        padding: 16px;
        overflow-y: auto;
        border-right: 1px solid #e5e7eb;
      }
      .super-doc-viewer__evidence-label {
        font-size: 11px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 12px;
      }
      .super-doc-viewer__evidence-item {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: all 0.15s;
      }
      .super-doc-viewer__evidence-item:hover { border-color: #7c3aed; }
      .super-doc-viewer__evidence-item--active {
        border-color: #7c3aed;
        background: #f5f3ff;
      }
      .super-doc-viewer__evidence-tag {
        display: inline-block;
        padding: 2px 6px;
        font-size: 9px;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 4px;
        margin-bottom: 6px;
        background: #10b981;
        color: white;
      }
      .super-doc-viewer__evidence-tag--therapy-doc { background: #3b82f6; }
      .super-doc-viewer__evidence-tag--progress-note { background: #10b981; }
      .super-doc-viewer__evidence-tag--nursing-note { background: #f59e0b; }
      .super-doc-viewer__evidence-tag--lab-result { background: #ec4899; }
      .super-doc-viewer__evidence-tag--order { background: #8b5cf6; }
      .super-doc-viewer__evidence-tag--mar { background: #7c3aed; }
      .super-doc-viewer__evidence-quote {
        font-size: 11px;
        font-style: italic;
        color: #4b5563;
        line-height: 1.4;
        margin-bottom: 6px;
      }
      .super-doc-viewer__evidence-desc {
        font-size: 11px;
        color: #6b7280;
      }
      .super-doc-viewer__evidence-link {
        font-size: 11px;
        color: #7c3aed;
        font-weight: 600;
        margin-top: 6px;
      }
      .super-doc-viewer__document {
        flex: 1;
        background: #fafafa;
        padding: 30px 40px;
        overflow-y: auto;
      }
      .super-doc-viewer__content {
        background: white;
        padding: 40px 50px;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        min-height: 400px;
        font-size: 13px;
        line-height: 1.7;
        color: #1f2937;
      }
      .super-doc-viewer__line {
        margin-bottom: 4px;
      }
      .super-doc-viewer__line--highlight {
        background: linear-gradient(120deg, #fef08a 0%, #fde047 100%);
        padding: 2px 4px;
        margin: 2px -4px;
        border-radius: 2px;
      }
      .super-doc-viewer__line--highlight-keyword {
        background: linear-gradient(120deg, #fef08a 0%, #fde047 100%);
        padding: 2px 4px;
        margin: 2px -4px;
        border-radius: 2px;
      }
      .super-doc-viewer__line--highlight-contextual {
        background: linear-gradient(120deg, #bfdbfe 0%, #93c5fd 100%);
        padding: 2px 4px;
        margin: 2px -4px;
        border-radius: 2px;
      }
      .super-doc-viewer__line--section-header {
        font-weight: 700;
        font-size: 14px;
        margin-top: 16px;
        margin-bottom: 8px;
        color: #1f2937;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 4px;
      }
      .super-doc-viewer__goal-badge {
        display: inline-block;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        font-size: 9px;
        font-weight: 700;
        padding: 2px 6px;
        border-radius: 3px;
        margin-right: 6px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .super-doc-viewer__legend {
        display: flex;
        gap: 16px;
        margin-bottom: 12px;
        padding: 8px 12px;
        background: #f9fafb;
        border-radius: 6px;
        font-size: 11px;
      }
      .super-doc-viewer__legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #6b7280;
      }
      .super-doc-viewer__legend-item--keyword {
        color: #92400e;
      }
      .super-doc-viewer__legend-item--contextual {
        color: #1e40af;
      }
      .super-doc-viewer__evidence-item-header {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
        margin-bottom: 6px;
      }
      .super-doc-viewer__evidence-type-badge {
        font-size: 8px;
        font-weight: 600;
        padding: 2px 5px;
        border-radius: 3px;
        text-transform: uppercase;
      }
      .super-doc-viewer__evidence-type-badge--keyword {
        background: #fef3c7;
        color: #92400e;
      }
      .super-doc-viewer__evidence-type-badge--contextual {
        background: #dbeafe;
        color: #1e40af;
      }
      .super-doc-viewer__evidence-why {
        font-size: 10px;
        color: #6b7280;
        margin-top: 6px;
        padding-top: 6px;
        border-top: 1px dashed #e5e7eb;
        line-height: 1.4;
      }
      .super-doc-viewer__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        background: #f9fafb;
        border-top: 1px solid #e5e7eb;
      }
      .super-doc-viewer__footer-actions {
        display: flex;
        gap: 10px;
      }
      .super-doc-viewer__pagination {
        display: flex;
        align-items: center;
        gap: 12px;
        background: #1f2937;
        padding: 6px 12px;
        border-radius: 6px;
        color: white;
      }
      .super-doc-viewer__prev,
      .super-doc-viewer__next {
        width: 28px; height: 28px;
        display: flex; align-items: center; justify-content: center;
        background: rgba(255,255,255,0.1);
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        border-radius: 4px;
      }
      .super-doc-viewer__prev:hover,
      .super-doc-viewer__next:hover { background: rgba(255,255,255,0.2); }
      .super-doc-viewer__page-num { font-size: 13px; }
      .super-doc-viewer__btn--close {
        padding: 10px 24px;
        background: white;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        font-family: inherit;
      }
      .super-doc-viewer__btn--close:hover { background: #f3f4f6; }
      .super-doc-viewer__btn--query {
        padding: 10px 20px;
        background: linear-gradient(135deg, #f59e0b, #d97706);
        border: none;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 600;
        color: white;
        cursor: pointer;
        font-family: inherit;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .super-doc-viewer__btn--query:hover {
        background: linear-gradient(135deg, #d97706, #b45309);
      }

      /* MAR Viewer Modal */
      .super-mar-viewer {
        position: relative;
        width: 700px;
        max-width: 95vw;
        background: white;
        border-radius: 12px;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        overflow: hidden;
      }
      .super-mar-viewer__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 18px;
        background: linear-gradient(135deg, #a855f7, #9333ea);
        color: white;
      }
      .super-mar-viewer__med-info {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .super-mar-viewer__med-icon { font-size: 18px; }
      .super-mar-viewer__med-name {
        font-size: 15px;
        font-weight: 600;
      }
      .super-mar-viewer__badge {
        background: rgba(255,255,255,0.25);
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
      }
      .super-mar-viewer__close {
        width: 32px; height: 32px;
        display: flex; align-items: center; justify-content: center;
        background: transparent;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        border-radius: 6px;
      }
      .super-mar-viewer__close:hover { background: rgba(255,255,255,0.2); }
      .super-mar-viewer__instructions {
        background: linear-gradient(135deg, #c084fc, #a855f7);
        color: white;
        padding: 14px 18px;
        font-size: 13px;
        line-height: 1.5;
      }
      .super-mar-viewer__frequency {
        margin-top: 4px;
        font-size: 11px;
        opacity: 0.85;
      }
      .super-mar-viewer__body {
        padding: 20px;
      }
      .super-mar-viewer__date-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin-bottom: 20px;
      }
      .super-mar__date-prev,
      .super-mar__date-next {
        width: 32px; height: 32px;
        display: flex; align-items: center; justify-content: center;
        background: #f3f4f6;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        font-size: 18px;
        cursor: pointer;
        color: #374151;
      }
      .super-mar__date-prev:hover,
      .super-mar__date-next:hover { background: #e5e7eb; }
      .super-mar__date-icon { font-size: 16px; }
      .super-mar__date-range {
        font-size: 14px;
        font-weight: 500;
        color: #1f2937;
      }
      .super-mar__calendar {
        width: 100%;
        border-collapse: collapse;
        font-size: 12px;
      }
      .super-mar__calendar th,
      .super-mar__calendar td {
        text-align: center;
        padding: 10px 6px;
        border: 1px solid #e5e7eb;
      }
      .super-mar__time-header,
      .super-mar__time-cell {
        background: #f9fafb;
        font-weight: 500;
        text-align: left !important;
        padding-left: 12px !important;
        width: 100px;
      }
      .super-mar__day-header {
        background: #f3f4f6;
      }
      .super-mar__day-name {
        font-weight: 600;
        color: #374151;
      }
      .super-mar__day-num {
        font-size: 11px;
        color: #6b7280;
        margin-top: 2px;
      }
      .super-mar__cell {
        min-width: 50px;
        height: 40px;
        color: #9ca3af;
      }
      .super-mar__status--given {
        background: #dcfce7;
        color: #166534;
        font-weight: 600;
      }
      .super-mar__status--refused {
        background: #fee2e2;
        color: #991b1b;
        font-weight: 600;
      }
      .super-mar__status--loa {
        background: #fef3c7;
        color: #92400e;
        font-weight: 600;
      }
      .super-mar__status--hold {
        background: #e0e7ff;
        color: #3730a3;
        font-weight: 600;
      }
      .super-mar__summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid #e5e7eb;
      }
      .super-mar__event-count {
        font-size: 13px;
        color: #6b7280;
      }
      .super-mar__legend {
        display: flex;
        gap: 16px;
      }
      .super-mar__legend-item {
        font-size: 11px;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 4px;
      }
      .super-mar__legend-item--given { background: #dcfce7; color: #166534; }
      .super-mar__legend-item--refused { background: #fee2e2; color: #991b1b; }
      .super-mar__legend-item--loa { background: #fef3c7; color: #92400e; }
      .super-mar__legend-item--hold { background: #e0e7ff; color: #3730a3; }

      /* TAR Viewer Modal - mirrors MAR styling */
      .super-tar-viewer {
        position: relative;
        width: 700px;
        max-width: 95vw;
        background: white;
        border-radius: 12px;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        overflow: hidden;
      }
      .super-tar-viewer__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 18px;
        background: linear-gradient(135deg, #14b8a6, #0d9488);
        color: white;
      }
      .super-tar-viewer__treatment-info {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .super-tar-viewer__treatment-icon { font-size: 18px; }
      .super-tar-viewer__treatment-name {
        font-size: 15px;
        font-weight: 600;
      }
      .super-tar-viewer__badge {
        background: rgba(255,255,255,0.25);
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
      }
      .super-tar-viewer__close {
        width: 32px; height: 32px;
        display: flex; align-items: center; justify-content: center;
        background: transparent;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        border-radius: 6px;
      }
      .super-tar-viewer__close:hover { background: rgba(255,255,255,0.2); }
      .super-tar-viewer__instructions {
        background: linear-gradient(135deg, #2dd4bf, #14b8a6);
        color: white;
        padding: 14px 18px;
        font-size: 13px;
        line-height: 1.5;
      }
      .super-tar-viewer__frequency {
        margin-top: 4px;
        font-size: 11px;
        opacity: 0.85;
      }
      .super-tar-viewer__body { padding: 20px; }
      .super-tar-viewer__date-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin-bottom: 20px;
      }
      .super-tar__date-prev,
      .super-tar__date-next {
        width: 32px; height: 32px;
        display: flex; align-items: center; justify-content: center;
        background: #f3f4f6;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        font-size: 18px;
        cursor: pointer;
        color: #374151;
      }
      .super-tar__date-prev:hover,
      .super-tar__date-next:hover { background: #e5e7eb; }
      .super-tar__date-icon { font-size: 16px; }
      .super-tar__date-range {
        font-size: 14px;
        font-weight: 500;
        color: #1f2937;
      }
      .super-tar__calendar {
        width: 100%;
        border-collapse: collapse;
        font-size: 12px;
      }
      .super-tar__calendar th,
      .super-tar__calendar td {
        text-align: center;
        padding: 10px 6px;
        border: 1px solid #e5e7eb;
      }
      .super-tar__time-header,
      .super-tar__time-cell {
        background: #f9fafb;
        font-weight: 500;
        text-align: left !important;
        padding-left: 12px !important;
        width: 100px;
      }
      .super-tar__day-header { background: #f3f4f6; }
      .super-tar__day-name {
        font-weight: 600;
        color: #374151;
      }
      .super-tar__day-num {
        font-size: 11px;
        color: #6b7280;
        margin-top: 2px;
      }
      .super-tar__cell {
        min-width: 50px;
        height: 40px;
        color: #9ca3af;
      }
      .super-tar__status--performed {
        background: #dcfce7;
        color: #166534;
        font-weight: 600;
      }
      .super-tar__status--missed {
        background: #fee2e2;
        color: #991b1b;
        font-weight: 600;
      }
      .super-tar__status--na {
        background: #f3f4f6;
        color: #6b7280;
        font-weight: 500;
      }
      .super-tar__status--refused {
        background: #fef3c7;
        color: #92400e;
        font-weight: 600;
      }
      .super-tar__summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid #e5e7eb;
      }
      .super-tar__event-count {
        font-size: 13px;
        color: #6b7280;
      }
      .super-tar__legend {
        display: flex;
        gap: 16px;
      }
      .super-tar__legend-item {
        font-size: 11px;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 4px;
      }
      .super-tar__legend-item--performed { background: #dcfce7; color: #166534; }
      .super-tar__legend-item--missed { background: #fee2e2; color: #991b1b; }
      .super-tar__legend-item--na { background: #f3f4f6; color: #6b7280; }
      .super-tar__legend-item--refused { background: #fef3c7; color: #92400e; }

      /* Query Modal Enhancements */
      .super-query__attachments {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: 150px;
        overflow-y: auto;
        padding: 12px;
        background: #f9fafb;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
      }
      .super-query__attachment {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        cursor: pointer;
      }
      .super-query__attachment input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: #f59e0b;
      }
      .super-query__attachment-type {
        display: inline-block;
        padding: 2px 6px;
        font-size: 9px;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 4px;
        background: #6366f1;
        color: white;
      }
      .super-query__attachment-title {
        flex: 1;
        color: #374151;
      }
      .super-query__send-btn {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .super-query__send-icon {
        font-size: 14px;
      }

      /* Badge Query State */
      .super-badge--query {
        background: #fef3c7;
        color: #92400e;
        border-color: #fcd34d;
      }
      .super-badge--query:hover {
        background: #fde68a;
      }

      /* ===== ENHANCED CLICK INDICATORS ===== */

      /* Subtle pulse animation on badges to draw attention */
      @keyframes badgePulse {
        0%, 100% { box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        50% { box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3); }
      }
      .super-badge {
        animation: badgePulse 2s ease-in-out infinite;
        position: relative;
      }
      .super-badge::after {
        content: 'Click to review';
        position: absolute;
        bottom: -24px;
        left: 50%;
        transform: translateX(-50%) scale(0);
        background: #1f2937;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 10px;
        font-weight: 500;
        white-space: nowrap;
        opacity: 0;
        transition: all 0.2s;
        pointer-events: none;
        z-index: 1000;
      }
      .super-badge:hover::after {
        transform: translateX(-50%) scale(1);
        opacity: 1;
      }
      .super-badge:hover {
        animation: none;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
      }

      /* Enhanced evidence card click indicator */
      .super-evidence-card {
        position: relative;
        overflow: visible;
      }
      .super-evidence-card::before {
        content: '\u2192';
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%) translateX(0);
        font-size: 14px;
        color: #9ca3af;
        transition: all 0.2s;
        opacity: 0.5;
      }
      .super-evidence-card:hover::before {
        color: #6366f1;
        transform: translateY(-50%) translateX(4px);
        opacity: 1;
      }
      .super-evidence-card:hover {
        transform: translateX(2px);
        border-color: #6366f1;
        box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
      }

      /* Enhanced link styling */
      .super-evidence-card__link {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 6px 12px;
        background: linear-gradient(135deg, #eef2ff, #e0e7ff);
        border-radius: 6px;
        font-weight: 600;
        transition: all 0.2s;
        border: 1px solid #c7d2fe;
      }
      .super-evidence-card__link:hover {
        background: linear-gradient(135deg, #6366f1, #4f46e5);
        color: white;
        text-decoration: none;
        transform: translateX(2px);
        border-color: #4f46e5;
        box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
      }

      /* Action buttons enhanced */
      .super-btn {
        position: relative;
        overflow: hidden;
      }
      .super-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transition: left 0.5s;
      }
      .super-btn:hover::before {
        left: 100%;
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize
  init();
})();
