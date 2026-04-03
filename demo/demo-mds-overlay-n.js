/**
 * Demo MDS Overlay - Section N (Medications)
 * Injects badges, popovers, and evidence viewers on captured MDS Section N HTML
 * Follows the same pattern as demo-mds-overlay.js (Section I)
 */

(function() {
  'use strict';

  // ============================================
  // MOCK DATA
  // ============================================
  const MOCK_MDS_DATA = {
    assessment: {
      id: '2266385',
      patientName: 'Doe, Jane',
      patientId: '000000',
      type: 'Annual',
      ardDate: '2026-02-15',
      status: 'open'
    },
    items: [
      // N0300 - Injections (answer = 0 = No)
      {
        code: 'N0300',
        name: 'Injections - Number of days',
        pccAnswer: 0,
        aiAnswer: 0,
        confidence: 'high',
        status: 'match',
        rationale: 'MAR review confirms no injectable medications administered during the look-back period. Patient receives only oral and topical medications.',
        evidence: [
          {
            type: 'mar',
            title: 'Full MAR Review',
            quote: 'No injectable medications found in MAR for look-back period',
            date: '02/08/2026 - 02/14/2026',
            documentId: 'doc-n-001',
            marData: {
              medication: 'Complete MAR Review - Injectables',
              route: 'ALL ROUTES',
              instructions: 'Reviewed all medications for injectable routes (IM, SubQ, IV). No injectables found.',
              frequency: 'Look-back period',
              dateRange: { start: '2026-02-08', end: '2026-02-14' },
              administrations: [
                { date: '2026-02-08', time: 'AM', status: 'na' },
                { date: '2026-02-09', time: 'AM', status: 'na' },
                { date: '2026-02-10', time: 'AM', status: 'na' },
                { date: '2026-02-11', time: 'AM', status: 'na' },
                { date: '2026-02-12', time: 'AM', status: 'na' },
                { date: '2026-02-13', time: 'AM', status: 'na' },
                { date: '2026-02-14', time: 'AM', status: 'na' }
              ]
            }
          }
        ]
      },
      // N0415A1 - Antipsychotic (answer = unchecked = No)
      {
        code: 'N0415A1',
        name: 'Antipsychotic - Received',
        pccAnswer: 0,
        aiAnswer: 0,
        confidence: 'high',
        status: 'match',
        rationale: 'No antipsychotic medications found on MAR or active orders. Pharmacy review confirms no current or PRN antipsychotic orders.',
        evidence: [
          {
            type: 'order',
            title: 'Pharmacy Review - Antipsychotics',
            quote: 'No antipsychotic medications on active order list',
            date: '02/14/2026',
            documentId: 'doc-n-002',
            pdfData: {
              filename: 'PHARMACY_REVIEW_02142026.PDF',
              title: 'Pharmacy Medication Review',
              pages: 1,
              content: [
                { text: 'PHARMACY MEDICATION REVIEW', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 02/14/2026', highlight: false },
                { text: 'Pharmacist: Demo PharmD, RPh', highlight: false },
                { text: '', highlight: false },
                { text: 'HIGH-RISK DRUG CLASS SCREENING:', highlight: false },
                { text: '', highlight: false },
                { text: 'ANTIPSYCHOTICS:', highlight: false },
                { text: 'No antipsychotic medications found on active medication list.', highlight: true },
                { text: 'No PRN antipsychotic orders found.', highlight: true },
                { text: '', highlight: false },
                { text: 'ANTIDEPRESSANTS:', highlight: false },
                { text: 'Sertraline (Zoloft) 50mg PO daily - ACTIVE', highlight: 'keyword' },
                { text: 'Indication: Major Depressive Disorder (F32.1)', highlight: false },
                { text: '', highlight: false },
                { text: 'ANTIBIOTICS:', highlight: false },
                { text: 'Levofloxacin 500mg PO daily x 7 days - ACTIVE (started 02/10)', highlight: 'keyword' },
                { text: 'Indication: Urinary Tract Infection', highlight: false },
                { text: '', highlight: false },
                { text: 'Reviewed by: Demo PharmD, RPh', highlight: false }
              ]
            }
          }
        ]
      },
      // N0415B1 - Antianxiety (answer = unchecked = No)
      {
        code: 'N0415B1',
        name: 'Antianxiety - Received',
        pccAnswer: 0,
        aiAnswer: 0,
        confidence: 'high',
        status: 'match',
        rationale: 'No benzodiazepines or other anxiolytic medications found on MAR during the look-back period.',
        evidence: [
          {
            type: 'order',
            title: 'Active Medication List',
            quote: 'No anxiolytic/antianxiety medications on active orders',
            date: '02/14/2026',
            documentId: 'doc-n-002'
          }
        ]
      },
      // N0415C1 - Antidepressant (answer = checked = Yes)
      {
        code: 'N0415C1',
        name: 'Antidepressant - Received',
        pccAnswer: 1,
        aiAnswer: 1,
        confidence: 'high',
        status: 'match',
        rationale: 'Sertraline (Zoloft) 50mg daily confirmed on MAR with consistent administration throughout the look-back period.',
        evidence: [
          {
            type: 'mar',
            title: 'Sertraline (Zoloft) 50mg',
            quote: 'Sertraline 50mg PO daily - administered consistently',
            date: '02/08/2026 - 02/14/2026',
            documentId: 'doc-n-003',
            marData: {
              medication: 'Sertraline (Zoloft) 50 MG Tablet',
              route: 'ORAL',
              instructions: 'Give 1 tablet by mouth once daily in the morning for depression',
              frequency: 'QAM',
              dateRange: { start: '2026-02-08', end: '2026-02-14' },
              administrations: [
                { date: '2026-02-08', time: 'Breakfast', status: 'given' },
                { date: '2026-02-09', time: 'Breakfast', status: 'given' },
                { date: '2026-02-10', time: 'Breakfast', status: 'given' },
                { date: '2026-02-11', time: 'Breakfast', status: 'given' },
                { date: '2026-02-12', time: 'Breakfast', status: 'given' },
                { date: '2026-02-13', time: 'Breakfast', status: 'given' },
                { date: '2026-02-14', time: 'Breakfast', status: 'given' }
              ]
            }
          },
          {
            type: 'order',
            title: 'Physician Order - Sertraline',
            quote: 'Sertraline 50mg PO daily for Major Depressive Disorder',
            date: '01/15/2026',
            documentId: 'doc-n-004',
            pdfData: {
              filename: 'ORDER_SERTRALINE_01152026.PDF',
              title: 'Physician Order - Sertraline',
              pages: 1,
              content: [
                { text: 'PHYSICIAN ORDER', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 01/15/2026', highlight: false },
                { text: 'Ordering Physician: Dr. Demo Provider', highlight: false },
                { text: '', highlight: false },
                { text: 'ORDER:', highlight: false },
                { text: 'Sertraline (Zoloft) 50mg tablet', highlight: true },
                { text: 'Route: Oral', highlight: false },
                { text: 'Frequency: Once daily in AM', highlight: false },
                { text: 'Diagnosis: Major Depressive Disorder (F32.1)', highlight: true },
                { text: '', highlight: false },
                { text: 'Duration: Ongoing', highlight: false },
                { text: '', highlight: false },
                { text: '________________________________', highlight: false },
                { text: 'Dr. Demo Provider, MD', highlight: false }
              ]
            }
          }
        ]
      },
      // N0415C2 - Antidepressant Indication (answer = checked = Yes)
      {
        code: 'N0415C2',
        name: 'Antidepressant - Indication noted',
        pccAnswer: 1,
        aiAnswer: 1,
        confidence: 'high',
        status: 'match',
        rationale: 'Physician order documents indication as Major Depressive Disorder (F32.1). Diagnosis confirmed in care plan and H&P.',
        evidence: [
          {
            type: 'progress-note',
            title: 'Psychiatric Evaluation',
            quote: 'Diagnosis: Major Depressive Disorder, recurrent, moderate (F33.1). Continue Sertraline 50mg daily.',
            date: '02/01/2026',
            documentId: 'doc-n-005',
            pdfData: {
              filename: 'PSYCH_EVAL_02012026.PDF',
              title: 'Psychiatric Evaluation',
              pages: 1,
              content: [
                { text: 'PSYCHIATRIC EVALUATION', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 02/01/2026', highlight: false },
                { text: 'Provider: Demo Psychiatrist, MD', highlight: false },
                { text: '', highlight: false },
                { text: 'HISTORY OF PRESENT ILLNESS:', highlight: false },
                { text: 'Patient with known history of Major Depressive Disorder,', highlight: 'contextual' },
                { text: 'recurrent episodes, currently on Sertraline 50mg daily.', highlight: 'contextual' },
                { text: 'Reports improved mood and sleep since medication adjustment.', highlight: false },
                { text: '', highlight: false },
                { text: 'MENTAL STATUS EXAM:', highlight: false },
                { text: 'Mood: "Better than before"', highlight: false },
                { text: 'Affect: Appropriate, mildly restricted range', highlight: false },
                { text: 'Sleep: 6-7 hours, improved', highlight: false },
                { text: 'Appetite: Fair', highlight: false },
                { text: '', highlight: false },
                { text: 'ASSESSMENT:', highlight: false },
                { text: 'Diagnosis: Major Depressive Disorder, recurrent, moderate (F33.1)', highlight: true },
                { text: '', highlight: false },
                { text: 'PLAN:', highlight: false },
                { text: 'Continue Sertraline 50mg daily. Follow up in 30 days.', highlight: true },
                { text: '', highlight: false },
                { text: 'Demo Psychiatrist, MD', highlight: false }
              ]
            }
          }
        ]
      },
      // N0415D1 - Hypnotic (answer = unchecked = No)
      {
        code: 'N0415D1',
        name: 'Hypnotic - Received',
        pccAnswer: 0,
        aiAnswer: 0,
        confidence: 'high',
        status: 'match',
        rationale: 'No hypnotic or sedative medications found on active medication list or MAR.',
        evidence: [
          {
            type: 'order',
            title: 'Medication List Review',
            quote: 'No sedative/hypnotic medications on active orders',
            date: '02/14/2026',
            documentId: 'doc-n-002'
          }
        ]
      },
      // N0415E1 - Anticoagulant (answer = unchecked = No) - MISMATCH: should be Yes
      {
        code: 'N0415E1',
        name: 'Anticoagulant - Received',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        rationale: 'Warfarin 5mg daily found on active MAR with consistent administration. This is an anticoagulant and should be checked Yes.',
        evidence: [
          {
            type: 'mar',
            title: 'Warfarin (Coumadin) 5mg',
            quote: 'Warfarin 5mg PO daily - administered consistently during look-back',
            date: '02/08/2026 - 02/14/2026',
            documentId: 'doc-n-006',
            marData: {
              medication: 'Warfarin (Coumadin) 5 MG Tablet',
              route: 'ORAL',
              instructions: 'Give 1 tablet by mouth once daily in the evening for anticoagulation (AFib)',
              frequency: 'QPM',
              dateRange: { start: '2026-02-08', end: '2026-02-14' },
              administrations: [
                { date: '2026-02-08', time: 'Dinner', status: 'given' },
                { date: '2026-02-09', time: 'Dinner', status: 'given' },
                { date: '2026-02-10', time: 'Dinner', status: 'given' },
                { date: '2026-02-11', time: 'Dinner', status: 'given' },
                { date: '2026-02-12', time: 'Dinner', status: 'given' },
                { date: '2026-02-13', time: 'Dinner', status: 'given' },
                { date: '2026-02-14', time: 'Dinner', status: 'given' }
              ]
            }
          },
          {
            type: 'lab-result',
            title: 'INR Result',
            quote: 'INR: 2.4 (Therapeutic range 2.0-3.0)',
            date: '02/12/2026',
            documentId: 'doc-n-007',
            pdfData: {
              filename: 'LAB_INR_02122026.PDF',
              title: 'Laboratory Results - Coagulation',
              pages: 1,
              content: [
                { text: 'LABORATORY REPORT', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date of Collection: 02/12/2026', highlight: false },
                { text: 'Ordering Physician: Dr. Demo Provider', highlight: false },
                { text: '', highlight: false },
                { text: 'COAGULATION STUDIES:', highlight: false },
                { text: 'PT: 27.5 seconds', highlight: false },
                { text: 'INR: 2.4 (Therapeutic range for AFib: 2.0-3.0)', highlight: true },
                { text: '', highlight: false },
                { text: 'Status: THERAPEUTIC', highlight: true },
                { text: '', highlight: false },
                { text: 'Current Warfarin dose: 5mg daily', highlight: 'keyword' },
                { text: 'Indication: Atrial Fibrillation', highlight: false },
                { text: 'Next INR due: 02/19/2026', highlight: false }
              ]
            }
          }
        ]
      },
      // N0415F1 - Antibiotic (answer = unchecked = No) - MISMATCH: should be Yes
      {
        code: 'N0415F1',
        name: 'Antibiotic - Received',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        rationale: 'Levofloxacin 500mg daily (7-day course started 02/10) found on active MAR. This is an antibiotic and should be checked Yes.',
        evidence: [
          {
            type: 'mar',
            title: 'Levofloxacin 500mg',
            quote: 'Levofloxacin 500mg PO daily x 7 days for UTI',
            date: '02/10/2026 - 02/14/2026',
            documentId: 'doc-n-008',
            marData: {
              medication: 'Levofloxacin (Levaquin) 500 MG Tablet',
              route: 'ORAL',
              instructions: 'Give 1 tablet by mouth once daily for urinary tract infection. Course: 7 days (02/10 - 02/16)',
              frequency: 'QD',
              dateRange: { start: '2026-02-08', end: '2026-02-14' },
              administrations: [
                { date: '2026-02-08', time: 'AM', status: 'na' },
                { date: '2026-02-09', time: 'AM', status: 'na' },
                { date: '2026-02-10', time: 'Breakfast', status: 'given' },
                { date: '2026-02-11', time: 'Breakfast', status: 'given' },
                { date: '2026-02-12', time: 'Breakfast', status: 'given' },
                { date: '2026-02-13', time: 'Breakfast', status: 'given' },
                { date: '2026-02-14', time: 'Breakfast', status: 'given' }
              ]
            }
          },
          {
            type: 'order',
            title: 'Physician Order - Levofloxacin',
            quote: 'Levofloxacin 500mg PO daily x 7 days for UTI',
            date: '02/10/2026',
            documentId: 'doc-n-009',
            pdfData: {
              filename: 'ORDER_LEVOFLOXACIN_02102026.PDF',
              title: 'Physician Order - Antibiotic',
              pages: 1,
              content: [
                { text: 'PHYSICIAN ORDER', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 02/10/2026', highlight: false },
                { text: 'Ordering Physician: Dr. Demo Provider', highlight: false },
                { text: '', highlight: false },
                { text: 'ORDER:', highlight: false },
                { text: 'Levofloxacin (Levaquin) 500mg tablet', highlight: true },
                { text: 'Route: Oral', highlight: false },
                { text: 'Frequency: Once daily', highlight: false },
                { text: 'Duration: 7 days (02/10/2026 - 02/16/2026)', highlight: false },
                { text: '', highlight: false },
                { text: 'Diagnosis: Urinary Tract Infection (N39.0)', highlight: true },
                { text: 'UA: positive leukocyte esterase, nitrites, >100K CFU E. coli', highlight: 'keyword' },
                { text: '', highlight: false },
                { text: '________________________________', highlight: false },
                { text: 'Dr. Demo Provider, MD', highlight: false }
              ]
            }
          }
        ]
      },
      // N0415F2 - Antibiotic Indication (should be Yes since F1 should be Yes)
      {
        code: 'N0415F2',
        name: 'Antibiotic - Indication noted',
        pccAnswer: 0,
        aiAnswer: 1,
        confidence: 'high',
        status: 'mismatch',
        rationale: 'Physician order documents indication as Urinary Tract Infection (N39.0) with supporting UA results.',
        evidence: [
          {
            type: 'lab-result',
            title: 'Urinalysis Results',
            quote: 'Positive leukocyte esterase, nitrites positive, >100K CFU E. coli',
            date: '02/09/2026',
            documentId: 'doc-n-010',
            pdfData: {
              filename: 'LAB_UA_02092026.PDF',
              title: 'Laboratory Results - Urinalysis',
              pages: 1,
              content: [
                { text: 'LABORATORY REPORT', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date of Collection: 02/09/2026', highlight: false },
                { text: 'Ordering Physician: Dr. Demo Provider', highlight: false },
                { text: '', highlight: false },
                { text: 'URINALYSIS:', highlight: false },
                { text: 'Color: Yellow, Cloudy', highlight: false },
                { text: 'Specific Gravity: 1.025', highlight: false },
                { text: 'pH: 7.5', highlight: false },
                { text: 'Leukocyte Esterase: POSITIVE (Large)', highlight: true },
                { text: 'Nitrites: POSITIVE', highlight: true },
                { text: 'WBC: >50/HPF', highlight: true },
                { text: 'Bacteria: Many', highlight: false },
                { text: '', highlight: false },
                { text: 'CULTURE & SENSITIVITY:', highlight: false },
                { text: 'Organism: Escherichia coli', highlight: 'keyword' },
                { text: 'Colony Count: >100,000 CFU/mL', highlight: true },
                { text: 'Sensitive to: Levofloxacin, Nitrofurantoin, TMP/SMX', highlight: 'keyword' },
                { text: 'Resistant to: Ampicillin', highlight: false }
              ]
            }
          }
        ]
      },
      // N0415G1 - Diuretic (answer = unchecked = No)
      {
        code: 'N0415G1',
        name: 'Diuretic - Received',
        pccAnswer: 0,
        aiAnswer: 0,
        confidence: 'high',
        status: 'match',
        rationale: 'No diuretic medications found on active medication list or MAR during the look-back period.',
        evidence: [
          {
            type: 'order',
            title: 'Medication List Review',
            quote: 'No diuretic medications on active orders',
            date: '02/14/2026',
            documentId: 'doc-n-002'
          }
        ]
      },
      // N0415H1 - Opioid (answer = unchecked = No) - REVIEW: PRN Tylenol #3 found but not given
      {
        code: 'N0415H1',
        name: 'Opioid - Received',
        pccAnswer: 0,
        aiAnswer: 0,
        confidence: 'medium',
        status: 'review',
        rationale: 'Tylenol #3 (acetaminophen/codeine) is on the active order list as PRN, but MAR shows no administrations during the look-back period. Coded correctly as No since medication was not received.',
        evidence: [
          {
            type: 'mar',
            title: 'Tylenol #3 (PRN)',
            quote: 'Acetaminophen/Codeine 300-30mg - PRN - No administrations in look-back period',
            date: '02/08/2026 - 02/14/2026',
            documentId: 'doc-n-011',
            marData: {
              medication: 'Acetaminophen/Codeine (Tylenol #3) 300-30 MG Tablet',
              route: 'ORAL',
              instructions: 'Give 1 tablet by mouth every 6 hours as needed for moderate pain. PRN order - NOT routinely administered.',
              frequency: 'Q6H PRN',
              dateRange: { start: '2026-02-08', end: '2026-02-14' },
              administrations: [
                { date: '2026-02-08', time: 'PRN', status: 'na' },
                { date: '2026-02-09', time: 'PRN', status: 'na' },
                { date: '2026-02-10', time: 'PRN', status: 'na' },
                { date: '2026-02-11', time: 'PRN', status: 'na' },
                { date: '2026-02-12', time: 'PRN', status: 'na' },
                { date: '2026-02-13', time: 'PRN', status: 'na' },
                { date: '2026-02-14', time: 'PRN', status: 'na' }
              ]
            }
          }
        ]
      },
      // N0415Z1 - None of the above (answer = unchecked = No)
      {
        code: 'N0415Z1',
        name: 'None of the above',
        pccAnswer: 0,
        aiAnswer: 0,
        confidence: 'high',
        status: 'match',
        rationale: 'Correctly unchecked since antidepressant (Sertraline) is marked as received in N0415C1.',
        evidence: [
          {
            type: 'order',
            title: 'Active Medication Summary',
            quote: 'Sertraline 50mg (antidepressant), Warfarin 5mg (anticoagulant), Levofloxacin 500mg (antibiotic) are active',
            date: '02/14/2026',
            documentId: 'doc-n-002'
          }
        ]
      },
      // N0450A - Antipsychotic review (answer = 0 = No antipsychotics)
      {
        code: 'N0450A',
        name: 'Antipsychotic Use',
        pccAnswer: 0,
        aiAnswer: 0,
        confidence: 'high',
        status: 'match',
        rationale: 'No antipsychotic medications found on active orders, PRN orders, or MAR during the look-back period. N0450B-E correctly disabled.',
        evidence: [
          {
            type: 'order',
            title: 'Pharmacy Review - Antipsychotics',
            quote: 'No antipsychotic medications on active or PRN order list',
            date: '02/14/2026',
            documentId: 'doc-n-002'
          },
          {
            type: 'progress-note',
            title: 'Consultant Pharmacist Review',
            quote: 'Monthly medication review completed. No antipsychotic medications prescribed. No GDR required.',
            date: '02/05/2026',
            documentId: 'doc-n-012',
            pdfData: {
              filename: 'PHARM_REVIEW_02052026.PDF',
              title: 'Consultant Pharmacist Medication Review',
              pages: 1,
              content: [
                { text: 'CONSULTANT PHARMACIST MEDICATION REVIEW', highlight: false },
                { text: 'Patient: Doe, Jane', highlight: false },
                { text: 'Date: 02/05/2026', highlight: false },
                { text: 'Pharmacist: Demo Consultant PharmD', highlight: false },
                { text: '', highlight: false },
                { text: 'PSYCHOTROPIC MEDICATION REVIEW:', highlight: false },
                { text: '', highlight: false },
                { text: 'Current Psychotropic Medications:', highlight: false },
                { text: '1. Sertraline 50mg daily - Antidepressant', highlight: false },
                { text: '   Indication: Major Depressive Disorder (documented)', highlight: false },
                { text: '   Duration: > 6 months', highlight: false },
                { text: '   GDR Status: Attempted 09/2025, symptoms worsened, resumed', highlight: 'contextual' },
                { text: '', highlight: false },
                { text: 'Antipsychotic Medications: NONE', highlight: true },
                { text: 'No antipsychotic medications prescribed.', highlight: true },
                { text: 'Gradual Dose Reduction: Not applicable - no antipsychotics', highlight: false },
                { text: '', highlight: false },
                { text: 'RECOMMENDATIONS:', highlight: false },
                { text: 'Continue current regimen. No changes recommended.', highlight: false },
                { text: '', highlight: false },
                { text: 'Demo Consultant PharmD, RPh, BCGP', highlight: false }
              ]
            }
          }
        ]
      }
    ]
  };

  // ============================================
  // INITIALIZATION
  // ============================================
  function init() {
    console.log('[Demo MDS Overlay N] Initializing...');
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => scheduleSetup());
    } else {
      scheduleSetup();
    }
  }

  function scheduleSetup() {
    injectStyles();
    // Defer badge injection to run after PCC's jQuery $(document).ready() callbacks
    // which may re-render question wrappers
    setTimeout(() => {
      injectBadges();
      const count = document.querySelectorAll('.super-badge').length;
      console.log('[Demo MDS Overlay N] Setup complete -', count, 'badges injected');
      // Retry once if nothing was injected (jQuery may still be running)
      if (count === 0) {
        setTimeout(() => {
          injectBadges();
          console.log('[Demo MDS Overlay N] Retry -', document.querySelectorAll('.super-badge').length, 'badges injected');
        }, 1000);
      }
    }, 500);
  }

  // ============================================
  // BADGE INJECTION
  // ============================================
  function injectBadges() {
    MOCK_MDS_DATA.items.forEach(item => {
      const wrapper = document.getElementById(item.code + '_wrapper');
      if (wrapper && !wrapper.querySelector('.super-badge')) {
        injectBadge(wrapper, item);
        return;
      }

      // Fallback: text scan
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
        badge.innerHTML = '<span class="super-badge__icon">\u2713</span> Super: ' + answerText;
        break;
      case 'mismatch':
        badge.classList.add('super-badge--mismatch');
        badge.innerHTML = '<span class="super-badge__icon">\u2717</span> Super: ' + answerText;
        break;
      case 'review':
        badge.classList.add('super-badge--review');
        badge.innerHTML = '<span class="super-badge__icon">\u26A0</span> Super: ' + answerText + '?';
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

    popover.querySelectorAll('.super-evidence-card').forEach(card => {
      card.addEventListener('click', () => {
        const evidenceIdx = parseInt(card.dataset.evidenceIdx);
        const evidence = itemData.evidence[evidenceIdx];
        if (evidence.marData) {
          showMARViewer(evidence, itemData);
        } else if (evidence.pdfData) {
          showDocumentViewer(evidence, itemData);
        }
      });
    });
  }

  function buildPopoverContent(itemData) {
    const answerText = itemData.aiAnswer === 1 ? 'Yes' : 'No';
    const answerClass = itemData.aiAnswer === 1 ? 'super-answer__value--yes' : 'super-answer__value--no';

    const confidenceLevel = itemData.confidence === 'high' ? 3 : itemData.confidence === 'medium' ? 2 : 1;
    const confidenceClass = itemData.confidence;
    const dots = [1, 2, 3].map(i =>
      '<span class="super-confidence__dot ' + (i <= confidenceLevel ? 'super-confidence__dot--filled ' + confidenceClass : '') + '"></span>'
    ).join('');

    const getEvidenceTypeBadge = (ev) => {
      if (ev.evidenceType === 'keyword') {
        return '<span class="super-evidence-card__evidence-type super-evidence-card__evidence-type--keyword">Keyword</span>';
      } else if (ev.evidenceType === 'contextual') {
        return '<span class="super-evidence-card__evidence-type super-evidence-card__evidence-type--contextual">Contextual</span>';
      }
      return '';
    };

    const evidenceCards = (itemData.evidence || []).map((ev, idx) => {
      const typeLabel = formatEvidenceType(ev.type);
      const viewerLabel = ev.marData ? 'View MAR' : ev.pdfData ? 'View Document' : '';
      return `
        <div class="super-evidence-card" data-evidence-idx="${idx}" style="cursor: ${viewerLabel ? 'pointer' : 'default'}">
          <div class="super-evidence-card__header">
            <span class="super-evidence-card__type">${typeLabel}</span>
            ${getEvidenceTypeBadge(ev)}
            <span class="super-evidence-card__date">${ev.date}</span>
          </div>
          <div class="super-evidence-card__title">${ev.title}</div>
          <div class="super-evidence-card__quote">"${ev.quote}"</div>
          ${viewerLabel ? `<div class="super-evidence-card__action">${viewerLabel} \u2192</div>` : ''}
        </div>
      `;
    }).join('');

    const statusLabel = itemData.status === 'match' ? 'Agrees with PCC'
      : itemData.status === 'mismatch' ? 'Disagrees with PCC'
      : 'Needs Review';
    const statusClass = 'super-status--' + itemData.status;

    return `
      <div class="super-popover-header">
        <div class="super-popover-title">
          <span class="super-popover-code">${itemData.code}</span>
          ${itemData.name}
        </div>
        <button class="super-popover-close">\u00D7</button>
      </div>
      <div class="super-popover-body">
        <div class="super-answer">
          <div class="super-answer__row">
            <span class="super-answer__label">Super AI Answer:</span>
            <span class="super-answer__value ${answerClass}">${answerText}</span>
          </div>
          <div class="super-answer__row">
            <span class="super-answer__label">Confidence:</span>
            <span class="super-confidence">${dots} <span class="super-confidence__label">${itemData.confidence}</span></span>
          </div>
          <div class="super-answer__row">
            <span class="super-answer__label">Status:</span>
            <span class="${statusClass}">${statusLabel}</span>
          </div>
        </div>
        <div class="super-rationale">
          <div class="super-rationale__label">Rationale</div>
          <div class="super-rationale__text">${itemData.rationale}</div>
        </div>
        <div class="super-evidence">
          <div class="super-evidence__label">Evidence (${(itemData.evidence || []).length})</div>
          ${evidenceCards}
        </div>
      </div>
    `;
  }

  function positionPopover(popover, anchor) {
    const anchorRect = anchor.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();

    let top = anchorRect.bottom + 8;
    let left = anchorRect.left;

    if (top + popoverRect.height > window.innerHeight - 20) {
      top = anchorRect.top - popoverRect.height - 8;
    }
    if (left + popoverRect.width > window.innerWidth - 20) {
      left = window.innerWidth - popoverRect.width - 20;
    }
    if (left < 20) left = 20;
    if (top < 20) top = 20;

    popover.style.position = 'fixed';
    popover.style.top = top + 'px';
    popover.style.left = left + 'px';
  }

  function closePopover() {
    document.querySelectorAll('.super-popover, .super-popover-backdrop').forEach(el => el.remove());
  }

  // ============================================
  // DOCUMENT VIEWER (PDF-style)
  // ============================================
  function showDocumentViewer(evidence, itemData) {
    const overlay = document.createElement('div');
    overlay.className = 'super-doc-viewer-overlay';
    overlay.id = 'super-doc-viewer';

    const pdf = evidence.pdfData;
    const currentPage = pdf.currentPage || 1;
    const totalPages = pdf.pages || 1;
    const lines = pdf.pageContent ? pdf.pageContent[currentPage] : pdf.content;

    overlay.innerHTML = `
      <div class="super-doc-viewer">
        <div class="super-doc-viewer__header">
          <div class="super-doc-viewer__title">
            <span class="super-doc-viewer__icon">\uD83D\uDCC4</span>
            ${pdf.title || pdf.filename}
          </div>
          <div class="super-doc-viewer__nav">
            ${totalPages > 1 ? `
              <button class="super-doc-viewer__nav-btn" data-dir="prev" ${currentPage <= 1 ? 'disabled' : ''}>\u2190</button>
              <span class="super-doc-viewer__page">Page ${currentPage} of ${totalPages}</span>
              <button class="super-doc-viewer__nav-btn" data-dir="next" ${currentPage >= totalPages ? 'disabled' : ''}>\u2192</button>
            ` : `<span class="super-doc-viewer__page">Page 1 of 1</span>`}
          </div>
          <button class="super-doc-viewer__close">\u00D7</button>
        </div>
        <div class="super-doc-viewer__body">
          <div class="super-doc-viewer__page-content">
            ${renderDocumentLines(lines)}
          </div>
        </div>
        <div class="super-doc-viewer__footer">
          <span class="super-doc-viewer__source">${evidence.title} - ${evidence.date}</span>
          <span class="super-doc-viewer__item">${itemData.code}: ${itemData.name}</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('.super-doc-viewer__close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

    // Page navigation
    if (totalPages > 1) {
      let page = currentPage;
      overlay.querySelectorAll('.super-doc-viewer__nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          page += btn.dataset.dir === 'prev' ? -1 : 1;
          if (page < 1) page = 1;
          if (page > totalPages) page = totalPages;
          const newLines = pdf.pageContent ? pdf.pageContent[page] : pdf.content;
          overlay.querySelector('.super-doc-viewer__page-content').innerHTML = renderDocumentLines(newLines);
          overlay.querySelector('.super-doc-viewer__page').textContent = 'Page ' + page + ' of ' + totalPages;
          overlay.querySelectorAll('.super-doc-viewer__nav-btn').forEach(b => b.disabled = false);
          if (page <= 1) overlay.querySelector('[data-dir="prev"]').disabled = true;
          if (page >= totalPages) overlay.querySelector('[data-dir="next"]').disabled = true;
        });
      });
    }
  }

  function renderDocumentLines(lines) {
    if (!lines) return '<div class="super-doc-line">No content available</div>';
    return lines.map(line => {
      if (!line.text) return '<div class="super-doc-line super-doc-line--empty">&nbsp;</div>';

      let cls = 'super-doc-line';
      if (line.highlight === true) cls += ' super-doc-line--highlight';
      else if (line.highlight === 'keyword') cls += ' super-doc-line--highlight-keyword';
      else if (line.highlight === 'contextual') cls += ' super-doc-line--highlight-contextual';

      return '<div class="' + cls + '">' + line.text + '</div>';
    }).join('');
  }

  // ============================================
  // MAR VIEWER
  // ============================================
  function showMARViewer(evidence, itemData) {
    const overlay = document.createElement('div');
    overlay.className = 'super-doc-viewer-overlay';
    overlay.id = 'super-mar-viewer';

    const mar = evidence.marData;
    const dates = getDatesInRange(mar.dateRange.start, mar.dateRange.end);

    overlay.innerHTML = `
      <div class="super-doc-viewer">
        <div class="super-doc-viewer__header">
          <div class="super-doc-viewer__title">
            <span class="super-doc-viewer__icon">\uD83D\uDCC5</span>
            MAR: ${mar.medication}
          </div>
          <button class="super-doc-viewer__close">\u00D7</button>
        </div>
        <div class="super-doc-viewer__body">
          <div class="super-mar">
            <div class="super-mar__info">
              <div class="super-mar__row"><strong>Route:</strong> ${mar.route}</div>
              <div class="super-mar__row"><strong>Frequency:</strong> ${mar.frequency}</div>
              <div class="super-mar__row"><strong>Instructions:</strong> ${mar.instructions}</div>
            </div>
            <div class="super-mar__calendar">
              <table class="super-tar">
                <thead>
                  <tr>
                    <th class="super-tar__header">Time</th>
                    ${dates.map(d => '<th class="super-tar__header">' + formatShortDate(d) + '</th>').join('')}
                  </tr>
                </thead>
                <tbody>
                  ${buildMARRows(mar.administrations, dates)}
                </tbody>
              </table>
            </div>
            <div class="super-tar__summary">
              <span class="super-tar__event-count">${mar.administrations.filter(a => a.status === 'given').length} administrations recorded</span>
              <div class="super-tar__legend">
                <span class="super-tar__legend-item super-tar__legend-item--performed">Given</span>
                <span class="super-tar__legend-item super-tar__legend-item--refused">Refused</span>
                <span class="super-tar__legend-item super-tar__legend-item--na">N/A</span>
              </div>
            </div>
          </div>
        </div>
        <div class="super-doc-viewer__footer">
          <span class="super-doc-viewer__source">${evidence.title} - ${evidence.date}</span>
          <span class="super-doc-viewer__item">${itemData.code}: ${itemData.name}</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('.super-doc-viewer__close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  }

  function buildMARRows(administrations, dates) {
    // Group by time slot
    const timeSlots = {};
    administrations.forEach(a => {
      if (!timeSlots[a.time]) timeSlots[a.time] = {};
      timeSlots[a.time][a.date] = a.status;
    });

    return Object.entries(timeSlots).map(([time, dateMap]) => {
      const cells = dates.map(d => {
        const status = dateMap[d] || '';
        const statusClass = status ? 'super-tar__status--' + (status === 'given' ? 'performed' : status) : '';
        const label = status === 'given' ? '\u2713' : status === 'refused' ? 'R' : status === 'na' ? '\u2014' : '';
        return '<td class="super-tar__cell ' + statusClass + '">' + label + '</td>';
      }).join('');
      return '<tr><td class="super-tar__cell" style="font-weight:600;text-align:left;padding-left:8px;">' + time + '</td>' + cells + '</tr>';
    }).join('');
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

  function getDatesInRange(startStr, endStr) {
    const dates = [];
    const start = new Date(startStr);
    const end = new Date(endStr);
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      dates.push(d.toISOString().split('T')[0]);
    }
    return dates;
  }

  function formatShortDate(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    return (d.getMonth() + 1) + '/' + d.getDate();
  }

  // ============================================
  // STYLES
  // ============================================
  function injectStyles() {
    if (document.getElementById('super-mds-overlay-n-styles')) return;
    const style = document.createElement('style');
    style.id = 'super-mds-overlay-n-styles';
    style.textContent = `
      /* ── Badges ── */
      .super-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s ease;
        margin-left: 8px;
        user-select: none;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        position: relative;
        z-index: 10;
      }
      .super-badge:hover {
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(0,0,0,0.15);
      }
      .super-badge__icon { font-size: 13px; }
      .super-badge--match {
        background: linear-gradient(135deg, #dcfce7, #bbf7d0);
        color: #166534;
        border: 1px solid #86efac;
      }
      .super-badge--mismatch {
        background: linear-gradient(135deg, #fee2e2, #fecaca);
        color: #991b1b;
        border: 1px solid #fca5a5;
      }
      .super-badge--review {
        background: linear-gradient(135deg, #fef3c7, #fde68a);
        color: #92400e;
        border: 1px solid #fcd34d;
      }

      /* ── Popover ── */
      .super-popover-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.2);
        z-index: 99998;
      }
      .super-popover {
        position: fixed;
        z-index: 99999;
        width: 420px;
        max-height: 80vh;
        background: white;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        animation: superPopIn 0.2s ease;
      }
      @keyframes superPopIn {
        from { opacity: 0; transform: translateY(4px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .super-popover-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        border-bottom: 1px solid #e5e7eb;
        background: #f9fafb;
      }
      .super-popover-title {
        font-size: 14px;
        font-weight: 600;
        color: #111827;
      }
      .super-popover-code {
        display: inline-block;
        padding: 2px 6px;
        background: #e0e7ff;
        color: #4338ca;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 700;
        margin-right: 6px;
        font-family: monospace;
      }
      .super-popover-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #9ca3af;
        padding: 0 4px;
        line-height: 1;
      }
      .super-popover-close:hover { color: #374151; }
      .super-popover-body {
        padding: 16px;
        overflow-y: auto;
        flex: 1;
      }

      /* Answer section */
      .super-answer {
        background: #f9fafb;
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 14px;
        border: 1px solid #e5e7eb;
      }
      .super-answer__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 0;
      }
      .super-answer__label {
        font-size: 12px;
        color: #6b7280;
        font-weight: 500;
      }
      .super-answer__value {
        font-size: 13px;
        font-weight: 700;
        padding: 2px 8px;
        border-radius: 4px;
      }
      .super-answer__value--yes { color: #166534; background: #dcfce7; }
      .super-answer__value--no { color: #991b1b; background: #fee2e2; }

      /* Confidence */
      .super-confidence {
        display: flex;
        align-items: center;
        gap: 3px;
      }
      .super-confidence__dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #e5e7eb;
      }
      .super-confidence__dot--filled.high { background: #22c55e; }
      .super-confidence__dot--filled.medium { background: #f59e0b; }
      .super-confidence__dot--filled.low { background: #ef4444; }
      .super-confidence__label {
        font-size: 11px;
        color: #6b7280;
        margin-left: 4px;
        text-transform: capitalize;
      }

      /* Status */
      .super-status--match { color: #166534; font-size: 12px; font-weight: 600; }
      .super-status--mismatch { color: #991b1b; font-size: 12px; font-weight: 600; }
      .super-status--review { color: #92400e; font-size: 12px; font-weight: 600; }

      /* Rationale */
      .super-rationale {
        margin-bottom: 14px;
      }
      .super-rationale__label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        color: #9ca3af;
        letter-spacing: 0.05em;
        margin-bottom: 6px;
      }
      .super-rationale__text {
        font-size: 13px;
        color: #374151;
        line-height: 1.5;
      }

      /* Evidence */
      .super-evidence__label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        color: #9ca3af;
        letter-spacing: 0.05em;
        margin-bottom: 8px;
      }
      .super-evidence-card {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 10px 12px;
        margin-bottom: 8px;
        transition: all 0.15s;
      }
      .super-evidence-card:hover {
        border-color: #6366f1;
        box-shadow: 0 2px 8px rgba(99,102,241,0.1);
      }
      .super-evidence-card__header {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 4px;
      }
      .super-evidence-card__type {
        display: inline-block;
        padding: 2px 6px;
        font-size: 9px;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 4px;
        background: #6366f1;
        color: white;
        letter-spacing: 0.05em;
      }
      .super-evidence-card__evidence-type {
        font-size: 9px;
        font-weight: 600;
        padding: 1px 5px;
        border-radius: 3px;
      }
      .super-evidence-card__evidence-type--keyword {
        background: #dbeafe;
        color: #1e40af;
      }
      .super-evidence-card__evidence-type--contextual {
        background: #fef3c7;
        color: #92400e;
      }
      .super-evidence-card__date {
        font-size: 11px;
        color: #9ca3af;
        margin-left: auto;
      }
      .super-evidence-card__title {
        font-size: 13px;
        font-weight: 600;
        color: #111827;
        margin-bottom: 4px;
      }
      .super-evidence-card__quote {
        font-size: 12px;
        color: #6b7280;
        font-style: italic;
        line-height: 1.4;
      }
      .super-evidence-card__action {
        font-size: 11px;
        color: #6366f1;
        font-weight: 600;
        margin-top: 6px;
      }

      /* ── Document Viewer ── */
      .super-doc-viewer-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.6);
        z-index: 100000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: superFadeIn 0.2s ease;
      }
      @keyframes superFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .super-doc-viewer {
        width: 700px;
        max-width: 90vw;
        height: 85vh;
        min-height: 600px;
        max-height: 90vh;
        background: #1a1a2e;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 25px 80px rgba(0,0,0,0.4);
      }
      .super-doc-viewer__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: #16213e;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        flex-shrink: 0;
      }
      .super-doc-viewer__title {
        font-size: 14px;
        font-weight: 600;
        color: #e5e7eb;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .super-doc-viewer__icon { font-size: 18px; }
      .super-doc-viewer__nav {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .super-doc-viewer__nav-btn {
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .super-doc-viewer__nav-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
      .super-doc-viewer__nav-btn:hover:not(:disabled) {
        background: rgba(255,255,255,0.2);
      }
      .super-doc-viewer__page {
        font-size: 12px;
        color: #9ca3af;
      }
      .super-doc-viewer__close {
        background: none;
        border: none;
        color: #9ca3af;
        font-size: 22px;
        cursor: pointer;
        padding: 0 4px;
        line-height: 1;
      }
      .super-doc-viewer__close:hover { color: white; }
      .super-doc-viewer__body {
        flex: 1;
        overflow-y: auto;
        padding: 24px;
        display: flex;
        justify-content: center;
      }
      .super-doc-viewer__page-content {
        background: white;
        padding: 40px 48px;
        border-radius: 4px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        width: 100%;
        max-width: 600px;
        font-family: 'Times New Roman', serif;
        font-size: 13px;
        line-height: 1.6;
        color: #1a1a1a;
      }
      .super-doc-viewer__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 16px;
        background: #16213e;
        border-top: 1px solid rgba(255,255,255,0.1);
        flex-shrink: 0;
      }
      .super-doc-viewer__source {
        font-size: 11px;
        color: #9ca3af;
      }
      .super-doc-viewer__item {
        font-size: 11px;
        color: #6366f1;
        font-weight: 600;
      }

      /* Document lines */
      .super-doc-line {
        padding: 2px 0;
      }
      .super-doc-line--empty {
        height: 12px;
      }
      .super-doc-line--highlight {
        background: #fef08a;
        padding: 2px 4px;
        border-left: 3px solid #eab308;
        margin-left: -7px;
        border-radius: 2px;
      }
      .super-doc-line--highlight-keyword {
        background: #dbeafe;
        padding: 2px 4px;
        border-left: 3px solid #3b82f6;
        margin-left: -7px;
        border-radius: 2px;
      }
      .super-doc-line--highlight-contextual {
        background: #fef3c7;
        padding: 2px 4px;
        border-left: 3px solid #f59e0b;
        margin-left: -7px;
        border-radius: 2px;
      }

      /* ── MAR Viewer ── */
      .super-mar {
        width: 100%;
      }
      .super-mar__info {
        background: white;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }
      .super-mar__row {
        font-size: 13px;
        color: #374151;
        padding: 3px 0;
      }
      .super-mar__calendar {
        background: white;
        border-radius: 8px;
        overflow: hidden;
      }
      .super-tar {
        width: 100%;
        border-collapse: collapse;
        font-size: 12px;
      }
      .super-tar__header {
        padding: 8px 12px;
        background: #f3f4f6;
        font-weight: 600;
        color: #374151;
        text-align: center;
        border-bottom: 2px solid #e5e7eb;
        font-size: 11px;
      }
      .super-tar__cell {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #f3f4f6;
        min-width: 50px;
        height: 40px;
        color: #9ca3af;
      }
      .super-tar__status--performed {
        background: #dcfce7;
        color: #166534;
        font-weight: 600;
      }
      .super-tar__status--refused {
        background: #fee2e2;
        color: #991b1b;
        font-weight: 600;
      }
      .super-tar__status--na {
        background: #f3f4f6;
        color: #6b7280;
        font-weight: 500;
      }
      .super-tar__summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        padding: 12px 16px;
        background: white;
        border-radius: 8px;
      }
      .super-tar__event-count {
        font-size: 13px;
        color: #6b7280;
      }
      .super-tar__legend {
        display: flex;
        gap: 12px;
      }
      .super-tar__legend-item {
        font-size: 11px;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 4px;
      }
      .super-tar__legend-item--performed { background: #dcfce7; color: #166534; }
      .super-tar__legend-item--refused { background: #fee2e2; color: #991b1b; }
      .super-tar__legend-item--na { background: #f3f4f6; color: #6b7280; }
    `;
    document.head.appendChild(style);
  }

  // Initialize
  init();
})();
