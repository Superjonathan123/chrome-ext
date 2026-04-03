import { useState, useEffect, useCallback } from 'preact/hooks';

// ---------------------------------------------------------------------------
// Document corpus
// ---------------------------------------------------------------------------

const DOCUMENTS = {
  'doc-001': {
    title: 'SLP Evaluation',
    date: '01/20/2026',
    type: 'Speech-Language Pathology',
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
        `,
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
        `,
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
        `,
      },
    ],
  },

  'doc-003': {
    title: 'MD Progress Note',
    date: '01/22/2026',
    type: 'Physician Progress Note',
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
        `,
      },
    ],
  },

  'doc-081': {
    title: 'Lab Results',
    date: '01/18/2026',
    type: 'Laboratory Report',
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
        `,
      },
    ],
  },

  'doc-090': {
    title: 'Hospital Discharge Summary',
    date: '12/28/2025',
    type: 'Discharge Summary',
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
        `,
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
        `,
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
        `,
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
        `,
      },
    ],
  },

  'doc-091': {
    title: 'Hospital H&P',
    date: '12/23/2025',
    type: 'History & Physical',
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
        `,
      },
    ],
  },

  'doc-092': {
    title: 'Nursing Transfer Note',
    date: '12/28/2025',
    type: 'Nursing Note',
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
        `,
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Public utility
// ---------------------------------------------------------------------------

/**
 * Check whether a document with the given ID exists in the corpus.
 * @param {string} docId
 * @returns {object|undefined} The document object, or undefined.
 */
export function getDocument(docId) {
  return DOCUMENTS[docId];
}

// ---------------------------------------------------------------------------
// FakeDocumentViewer component
// ---------------------------------------------------------------------------

export function FakeDocumentViewer({ docId, page = 1, highlightText = false, onClose }) {
  const doc = DOCUMENTS[docId];
  const [currentPage, setCurrentPage] = useState(page);

  // Sync if the page prop changes externally
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  // Keyboard shortcut: Escape to close
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!doc) {
    return (
      <div className="fake-doc-viewer__backdrop" onClick={onClose}>
        <div className="fake-doc-viewer__panel" onClick={(e) => e.stopPropagation()}>
          <div className="fake-doc-viewer__header">
            <button className="fake-doc-viewer__back-btn" onClick={onClose}>
              ← Back
            </button>
            <div className="fake-doc-viewer__header-title">
              <span className="fake-doc-viewer__title">Document Not Found</span>
            </div>
            <button className="fake-doc-viewer__close-btn" onClick={onClose}>
              ✕
            </button>
          </div>
          <div className="fake-doc-viewer__canvas">
            <div className="fake-doc-viewer__page">
              <p>The requested document (ID: {docId}) could not be found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const totalPages = doc.pages.length;
  const clampedPage = Math.max(1, Math.min(currentPage, totalPages));
  const pageData = doc.pages.find((p) => p.pageNum === clampedPage) || doc.pages[0];

  const goToPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goToNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="fake-doc-viewer__backdrop" onClick={onClose}>
      <div className="fake-doc-viewer__panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="fake-doc-viewer__header">
          <button className="fake-doc-viewer__back-btn" onClick={onClose}>
            ← Back
          </button>
          <div className="fake-doc-viewer__header-title">
            <span className="fake-doc-viewer__title">{doc.title}</span>
            <span className="fake-doc-viewer__date">{doc.date}</span>
          </div>
          <span className="fake-doc-viewer__type-badge">{doc.type}</span>
          <button className="fake-doc-viewer__close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Toolbar */}
        <div className="fake-doc-viewer__toolbar">
          <div className="fake-doc-viewer__page-nav">
            <button
              className="fake-doc-viewer__nav-btn"
              onClick={goToPrev}
              disabled={clampedPage <= 1}
            >
              ‹ Prev
            </button>
            <span className="fake-doc-viewer__page-indicator">
              Page {clampedPage} of {totalPages}
            </span>
            <button
              className="fake-doc-viewer__nav-btn"
              onClick={goToNext}
              disabled={clampedPage >= totalPages}
            >
              Next ›
            </button>
          </div>
          {highlightText && (
            <span className="fake-doc-viewer__highlight-badge">Evidence highlighted</span>
          )}
        </div>

        {/* Canvas / Document Page */}
        <div className="fake-doc-viewer__canvas">
          <div
            className="fake-doc-viewer__page"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        </div>
      </div>
    </div>
  );
}
