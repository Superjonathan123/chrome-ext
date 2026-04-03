# Demo AI Chat & Evidence Viewer Polish

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a working AI chat to the demo with scripted responses, fake PDF rendering with highlighted evidence, and better cross-feature linking.

**Architecture:** Reuse the production Preact AIChatOverlay components (MessageList, UserMessage, AssistantMessage, ToolStep, AnswerCard, ChatInput, EmptyState) but replace `useChat` with a `useDemoChat` hook that returns scripted responses with simulated streaming delays. Add a `FakeDocumentViewer` component that renders HTML styled to look like clinical PDFs with highlighted evidence text. Wire the chat's source citations to open the fake document viewer.

**Tech Stack:** Preact, existing ai-chat CSS, vanilla JS demo scaffolding

---

## Task 1: Create `useDemoChat` Hook

**Files:**
- Create: `demo/hooks/useDemoChat.js`

This hook mirrors the `useChat` interface but returns scripted responses with simulated delays instead of hitting a real API.

**Step 1: Create the hook file**

```javascript
// demo/hooks/useDemoChat.js
import { useState, useRef, useCallback } from 'preact/hooks';

/**
 * Mock chat hook that simulates the real useChat interface.
 * Returns scripted responses with tool steps and streaming delays.
 */

// Scripted scenarios keyed by trigger phrases
const SCENARIOS = {
  aphasia: {
    triggers: ['aphasia', 'speech', 'language', 'communication'],
    response: buildAphasiaResponse,
  },
  pdpm: {
    triggers: ['pdpm', 'hipps', 'opportunities', 'reimbursement', 'revenue'],
    response: buildPDPMResponse,
  },
  ivFluids: {
    triggers: ['iv fluid', 'iv ', 'intravenous', 'fluids', 'hospital doc'],
    response: buildIVFluidsResponse,
  },
  medications: {
    triggers: ['medication', 'med ', 'meds', 'drug', 'prescription', 'taking'],
    response: buildMedicationsResponse,
  },
};

function matchScenario(text) {
  const lower = text.toLowerCase();
  for (const [key, scenario] of Object.entries(SCENARIOS)) {
    if (scenario.triggers.some(t => lower.includes(t))) {
      return scenario;
    }
  }
  return null;
}

// ---- Response Builders ----
// Each returns an array of "steps" that get revealed sequentially.
// A step is either:
//   { type: 'tool', name, input, output, delayMs }
//   { type: 'text', content, delayMs }

function buildAphasiaResponse() {
  return [
    {
      type: 'tool',
      name: 'searchClinicalNotes',
      input: { keyword: 'aphasia', noteType: 'SLP' },
      output: [
        { id: 'doc-001', title: 'SLP Evaluation - 01/20/2026', snippet: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia.' },
        { id: 'doc-003', title: 'MD Progress Note - 01/22/2026', snippet: 'Progressive cognitive decline with communication difficulties. Speech therapy addressing expressive language deficits.' },
      ],
      delayMs: 1200,
    },
    {
      type: 'tool',
      name: 'readDocument',
      input: { documentId: 'doc-001', title: 'SLP Evaluation' },
      output: { id: 'doc-001', title: 'SLP Evaluation - 01/20/2026', pages: 5, relevantPage: 2, excerpt: 'Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia. Recommend continued language therapy 3x/week targeting verbal expression and word-finding strategies.' },
      delayMs: 800,
    },
    {
      type: 'text',
      content: `**Yes, there is strong evidence of aphasia for this patient.**

Based on my review of the clinical documentation:

**SLP Evaluation (01/20/2026, Page 2):**
> "Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia."

The SLP recommends continued language therapy 3x/week targeting verbal expression and word-finding strategies.

**MD Progress Note (01/22/2026):**
> "Progressive cognitive decline with communication difficulties. Speech therapy addressing expressive language deficits."

### MDS Impact
- **Item I5600 (Aphasia)** should be coded based on this evidence
- This would change the **SLP component** from SA to SB
- **HIPPS impact:** KAQD -> KBQE (+$41.86/day)

[View SLP Evaluation (Page 2)](#doc:doc-001:2) | [View MD Progress Note](#doc:doc-003:1)`,
      delayMs: 600,
    },
  ];
}

function buildPDPMResponse() {
  return [
    {
      type: 'tool',
      name: 'getPatientContext',
      input: { query: 'active diagnoses and MDS assessment' },
      output: { patientName: 'Doe, Jane', currentHipps: 'KAQD', assessmentType: 'Quarterly', ardDate: '2026-01-13', diagnoses: 12 },
      delayMs: 600,
    },
    {
      type: 'tool',
      name: 'searchSemantically',
      input: { query: 'PDPM opportunities undocumented conditions NTA' },
      output: [
        { item: 'I5600', name: 'Aphasia', confidence: 0.92, impact: 'SLP: SA->SB' },
        { item: 'I4300', name: 'Diabetes with PVD', confidence: 0.85, impact: 'NTA: ND->NE' },
        { item: 'O0400A3', name: 'IV Medications', confidence: 0.88, impact: 'NTA: +2 points' },
      ],
      delayMs: 1400,
    },
    {
      type: 'text',
      content: `**3 PDPM opportunities identified** for Doe, Jane's Quarterly assessment (ARD: 01/13/2026).

Current HIPPS: **KAQD** ($567.32/day)
Potential HIPPS: **KBQE** ($609.18/day)
**Potential increase: +$41.86/day**

| # | MDS Item | Condition | Confidence | Component Impact |
|---|----------|-----------|------------|-----------------|
| 1 | I5600 | Aphasia | 92% | SLP: SA -> SB |
| 2 | I4300 | Diabetes w/ PVD | 85% | NTA: ND -> NE |
| 3 | O0400A3 | IV Medications | 88% | NTA: +2 points |

### Key Findings:
1. **Aphasia (I5600)** - SLP evaluation documents expressive aphasia but no ICD-10 code on problem list. [View Evidence](#doc:doc-001:2)
2. **Diabetes with PVD (I4300)** - HbA1c 8.2% with bilateral LE edema and diminished pedal pulses. [View Lab Results](#doc:doc-081:1)
3. **IV Medications (O0400A3)** - Hospital discharge summary shows IV Lasix administered during recent admission. [View Hospital Records](#doc:doc-090:3)

Would you like me to look deeper into any of these opportunities?`,
      delayMs: 800,
    },
  ];
}

function buildIVFluidsResponse() {
  return [
    {
      type: 'tool',
      name: 'searchDocuments',
      input: { keyword: 'IV fluids intravenous', query: 'hospital discharge' },
      output: [
        { id: 'doc-090', title: 'Hospital Discharge Summary - 12/28/2025', snippet: 'Patient received IV normal saline and IV Lasix during 5-day admission.' },
        { id: 'doc-091', title: 'Hospital H&P - 12/23/2025', snippet: 'Admit orders: NS 0.9% at 125mL/hr, IV Lasix 40mg BID.' },
      ],
      delayMs: 1000,
    },
    {
      type: 'tool',
      name: 'readDocument',
      input: { documentId: 'doc-090', title: 'Hospital Discharge Summary' },
      output: { id: 'doc-090', title: 'Hospital Discharge Summary - 12/28/2025', pages: 4, relevantPage: 3, excerpt: 'During admission, patient received IV Normal Saline 0.9% at 125mL/hr for hydration and IV Furosemide (Lasix) 40mg BID for fluid overload management. IV access maintained via 20g peripheral IV in left forearm. IV fluids discontinued on day 4, transitioned to oral intake.' },
      delayMs: 900,
    },
    {
      type: 'tool',
      name: 'searchClinicalNotes',
      input: { keyword: 'IV administration', noteType: 'nursing' },
      output: [
        { id: 'doc-092', title: 'Nursing Transfer Note - 12/28/2025', snippet: 'Patient transferred from General Hospital. IV discontinued prior to transfer. Was receiving IV NS and IV Lasix during stay.' },
      ],
      delayMs: 700,
    },
    {
      type: 'text',
      content: `**IV fluid administration confirmed** in recent hospital records.

**Hospital Discharge Summary (12/28/2025, Page 3):**
> "Patient received IV Normal Saline 0.9% at 125mL/hr for hydration and IV Furosemide (Lasix) 40mg BID for fluid overload management. IV access maintained via 20g peripheral IV in left forearm."

**Hospital H&P (12/23/2025):**
> "Admit orders: NS 0.9% at 125mL/hr, IV Lasix 40mg BID."

**Nursing Transfer Note (12/28/2025):**
> "Patient transferred from General Hospital. IV discontinued prior to transfer."

### MDS Impact
- **Item O0400A3 (IV Medications)** - Should be coded based on IV Lasix administration during the look-back period
- This adds **2 NTA points** to the PDPM calculation
- Combined with other opportunities: NTA component ND -> NE
- **HIPPS impact:** Contributes to KAQD -> KBQE (+$41.86/day)

### Important Note
The IV medications were administered during the hospital stay within the look-back period. Even though the patient is no longer receiving IV meds at the facility, the hospital administration counts for MDS coding purposes.

[View Discharge Summary (Page 3)](#doc:doc-090:3) | [View Hospital H&P](#doc:doc-091:1) | [View Transfer Note](#doc:doc-092:1)`,
      delayMs: 800,
    },
  ];
}

function buildMedicationsResponse() {
  return [
    {
      type: 'tool',
      name: 'searchMedications',
      input: { query: 'current active medications' },
      output: [
        { name: 'Lisinopril 10mg', route: 'PO', schedule: 'Daily', indication: 'Hypertension' },
        { name: 'Metformin 500mg', route: 'PO', schedule: 'BID', indication: 'Diabetes' },
        { name: 'Omeprazole 20mg', route: 'PO', schedule: 'Daily', indication: 'GERD' },
        { name: 'Atorvastatin 40mg', route: 'PO', schedule: 'QHS', indication: 'Hyperlipidemia' },
        { name: 'Albuterol Nebulizer', route: 'INH', schedule: 'Q4H PRN', indication: 'COPD/Asthma' },
        { name: 'Acetaminophen 650mg', route: 'PO', schedule: 'Q6H PRN', indication: 'Pain' },
      ],
      delayMs: 800,
    },
    {
      type: 'tool',
      name: 'searchAdministrationRecords',
      input: { query: 'medication administration today' },
      output: { today: '01/27/2026', administered: 4, pending: 2, prn: 1 },
      delayMs: 600,
    },
    {
      type: 'text',
      content: `**Doe, Jane** is currently on **6 medications** (4 scheduled, 2 PRN):

### Scheduled Medications
| Medication | Dose/Route | Schedule | Indication | Last Given |
|-----------|-----------|----------|------------|------------|
| Lisinopril | 10mg PO | Daily (0800) | Hypertension | 01/27 08:05 |
| Metformin | 500mg PO | BID (0800/1800) | Diabetes | 01/27 08:05 |
| Omeprazole | 20mg PO | Daily (0800) | GERD | 01/27 08:05 |
| Atorvastatin | 40mg PO | QHS (2100) | Hyperlipidemia | 01/26 21:00 |

### PRN Medications
| Medication | Dose/Route | Schedule | Indication | Last Given |
|-----------|-----------|----------|------------|------------|
| Albuterol | Nebulizer INH | Q4H PRN | COPD/Asthma | 01/27 06:30 |
| Acetaminophen | 650mg PO | Q6H PRN | Pain | 01/26 22:15 |

### Today's Administration Status
- **4 of 6** scheduled doses given
- **Next due:** Metformin 500mg at 18:00, Atorvastatin 40mg at 21:00
- **1 PRN** administered today (Albuterol at 06:30)

[View Full MAR](#viewer:mar) | [View Orders](#viewer:orders)`,
      delayMs: 600,
    },
  ];
}

function buildFallbackResponse(text) {
  return [
    {
      type: 'tool',
      name: 'think',
      input: { thought: `The user asked: "${text}". Let me search for relevant clinical information.` },
      output: 'Considering available clinical data...',
      delayMs: 500,
    },
    {
      type: 'tool',
      name: 'searchSemantically',
      input: { query: text },
      output: [
        { title: 'No specific results', snippet: 'General patient context available.' },
      ],
      delayMs: 800,
    },
    {
      type: 'text',
      content: `I searched the available clinical documentation but didn't find specific information matching your query. Here are some things I can help with:

- **"Does this patient have aphasia?"** - I'll search SLP evaluations and clinical notes
- **"What are the PDPM opportunities?"** - I'll analyze MDS coding gaps and revenue impact
- **"Look for IV fluids in hospital docs"** - I'll search hospital discharge records for IV administration
- **"What medications is this patient on?"** - I'll pull the current MAR

Try one of these, or ask me about any specific diagnosis, treatment, or MDS item.`,
      delayMs: 400,
    },
  ];
}

// ---- Hook Implementation ----

export function useDemoChat(patientId) {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('ready');
  const [error, setError] = useState(null);
  const [sessionId] = useState(() => 'demo-' + Math.random().toString(36).slice(2, 10));
  const cancelRef = useRef(false);

  const send = useCallback(async (text) => {
    if (!text.trim() || status !== 'ready') return;
    cancelRef.current = false;

    // Add user message
    const userMsg = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setStatus('submitted');

    // Match scenario
    const scenario = matchScenario(text);
    const steps = scenario ? scenario.response() : buildFallbackResponse(text);

    // Build assistant message progressively
    const assistantMsg = { role: 'assistant', content: '', parts: [] };
    setMessages(prev => [...prev, assistantMsg]);

    // Simulate typing delay
    await delay(600);
    if (cancelRef.current) return;
    setStatus('streaming');

    for (const step of steps) {
      if (cancelRef.current) break;

      if (step.type === 'tool') {
        // Add tool step as "running"
        const toolPart = {
          type: `tool-${step.name}`,
          toolCallId: 'tc-' + Math.random().toString(36).slice(2, 8),
          status: 'running',
          input: step.input,
          output: null,
        };
        assistantMsg.parts.push(toolPart);
        setMessages(prev => [...prev.slice(0, -1), { ...assistantMsg, parts: [...assistantMsg.parts] }]);

        // Wait then mark as done
        await delay(step.delayMs);
        if (cancelRef.current) break;

        toolPart.status = 'done';
        toolPart.output = step.output;
        setMessages(prev => [...prev.slice(0, -1), { ...assistantMsg, parts: [...assistantMsg.parts] }]);
      } else if (step.type === 'text') {
        await delay(step.delayMs);
        if (cancelRef.current) break;

        assistantMsg.parts.push({ type: 'text', content: step.content });
        assistantMsg.content = step.content;
        setMessages(prev => [...prev.slice(0, -1), { ...assistantMsg, parts: [...assistantMsg.parts] }]);
      }
    }

    setStatus('ready');
  }, [status]);

  const clear = useCallback(() => {
    cancelRef.current = true;
    setMessages([]);
    setStatus('ready');
    setError(null);
  }, []);

  const stop = useCallback(() => {
    cancelRef.current = true;
    setStatus('ready');
  }, []);

  const loadSession = useCallback((sid, msgs) => {
    setMessages(msgs);
  }, []);

  return { messages, status, error, sessionId, send, clear, stop, setMessages, loadSession };
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

**Step 2: Verify the hook exports match the real useChat interface**

The hook returns: `{ messages, status, error, sessionId, send, clear, stop, setMessages, loadSession }` — matching the production hook exactly.

---

## Task 2: Create `FakeDocumentViewer` Component

**Files:**
- Create: `demo/components/FakeDocumentViewer.jsx`

Renders HTML pages styled to look like clinical PDFs on a dark background with highlighted evidence text.

**Step 1: Create the component**

```jsx
// demo/components/FakeDocumentViewer.jsx
import { useState } from 'preact/hooks';

/**
 * Renders HTML content styled to look like a clinical PDF document
 * on a dark background with evidence highlights.
 */

// Fake document content keyed by sourceId
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
            <div class="fake-doc__facility-name">SUNNY MEADOWS REHABILITATION CENTER</div>
            <div class="fake-doc__facility-addr">123 Demo Street, Anytown, ST 00000 | Phone: (555) 000-0000</div>
          </div>
          <div class="fake-doc__title">SPEECH-LANGUAGE PATHOLOGY EVALUATION</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> 23630</div>
            <div><strong>Date of Eval:</strong> 01/20/2026</div>
            <div><strong>Physician:</strong> Dr. Demo Provider</div>
            <div><strong>Room:</strong> 308-B</div>
          </div>
          <div class="fake-doc__section-title">REASON FOR REFERRAL</div>
          <p>Patient referred for speech-language evaluation due to reported communication difficulties following cerebral infarction (12/2024). Nursing staff report increasing word-finding difficulties and frustration during conversations.</p>
          <div class="fake-doc__section-title">MEDICAL HISTORY</div>
          <p>Hx of CVA (12/2024), HTN, T2DM, COPD, Alzheimer's disease. Patient has been receiving skilled nursing care since admission on 06/12/2020. Prior SLP services discontinued 03/2025.</p>
          <div class="fake-doc__section-title">ORAL MOTOR EXAMINATION</div>
          <p>Lips: Symmetrical at rest, adequate range of motion. Tongue: Mild weakness on lateral movements, adequate protrusion. Palate: Elevates symmetrically. Dentition: Upper and lower dentures, well-fitting. No signs of dysphagia observed during bedside evaluation.</p>
        `,
      },
      {
        pageNum: 2,
        content: `
          <div class="fake-doc__section-title">LANGUAGE ASSESSMENT</div>
          <p><strong>Receptive Language:</strong> Patient follows 2-step commands with 80% accuracy. Demonstrates adequate auditory comprehension for simple conversational speech. Occasional difficulty with complex or multi-part instructions.</p>
          <p><strong>Expressive Language:</strong></p>
          <p class="fake-doc__highlight">Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia. Spontaneous speech is characterized by frequent pauses, circumlocution, and occasional phonemic paraphasias. Verbal output is limited to short phrases of 3-5 words. Naming accuracy on Boston Naming Test: 38/60 (impaired).</p>
          <p><strong>Reading:</strong> Reads single words and short sentences with 70% accuracy. Paragraph-level reading comprehension is moderately impaired.</p>
          <p><strong>Writing:</strong> Able to write name independently. Written expression limited to single words with frequent spelling errors.</p>
          <div class="fake-doc__section-title">COGNITIVE-LINGUISTIC ASSESSMENT</div>
          <p>Orientation: Oriented to person and place, intermittently oriented to time. Short-term memory: Mildly impaired. Attention: Adequate for 15-minute structured therapy sessions.</p>
          <div class="fake-doc__section-title">CLINICAL IMPRESSIONS</div>
          <p class="fake-doc__highlight">Assessment findings are consistent with moderate expressive aphasia secondary to CVA, with concomitant mild cognitive-linguistic deficits likely related to underlying Alzheimer's disease. Recommend continued language therapy 3x/week targeting verbal expression and word-finding strategies.</p>
        `,
      },
      {
        pageNum: 3,
        content: `
          <div class="fake-doc__section-title">GOALS (90-DAY)</div>
          <ol>
            <li>Patient will name common objects with 60% accuracy (currently 38/60) given minimal phonemic cues.</li>
            <li>Patient will produce 5-word utterances to express needs with 70% accuracy in structured tasks.</li>
            <li>Patient will follow 3-step commands with 80% accuracy.</li>
            <li>Patient will utilize compensatory strategies (communication board) with minimal cueing.</li>
          </ol>
          <div class="fake-doc__section-title">TREATMENT PLAN</div>
          <p>Skilled SLP therapy 3x/week, 30-minute sessions:</p>
          <ul>
            <li>Confrontation naming drills with semantic and phonemic cueing hierarchy</li>
            <li>Sentence completion and carrier phrase activities</li>
            <li>Functional communication training for ADL-related requests</li>
            <li>Caregiver education on communication strategies</li>
          </ul>
          <div class="fake-doc__signature-block">
            <div class="fake-doc__signature-line">
              <div class="fake-doc__sig-name">Sarah Thompson, M.S., CCC-SLP</div>
              <div class="fake-doc__sig-title">Speech-Language Pathologist</div>
              <div class="fake-doc__sig-license">License #SLP-2024-1847</div>
            </div>
            <div class="fake-doc__signature-date">
              <div>Date: 01/20/2026</div>
            </div>
          </div>
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
            <div class="fake-doc__facility-name">SUNNY MEADOWS REHABILITATION CENTER</div>
            <div class="fake-doc__facility-addr">123 Demo Street, Anytown, ST 00000</div>
          </div>
          <div class="fake-doc__title">PHYSICIAN PROGRESS NOTE</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>Date:</strong> 01/22/2026</div>
            <div><strong>Provider:</strong> Dr. Demo Provider, MD</div>
          </div>
          <div class="fake-doc__section-title">SUBJECTIVE</div>
          <p>Patient seen for monthly review. Nursing reports increased confusion and word-finding difficulties over the past month. Patient unable to clearly articulate complaints but appears comfortable. No acute distress.</p>
          <div class="fake-doc__section-title">OBJECTIVE</div>
          <p>VS: BP 147/80, HR 53, T 98.3, RR 18, O2 97% on RA. Weight: 187 lbs (stable).</p>
          <p>General: Alert, cooperative. HEENT: NCAT, PERRL. CV: Bradycardic, regular rhythm, no murmurs. Lungs: Scattered rhonchi bilaterally, no wheezing. Ext: 1+ bilateral LE edema, diminished pedal pulses.</p>
          <div class="fake-doc__section-title">ASSESSMENT</div>
          <p class="fake-doc__highlight">Progressive cognitive decline with communication difficulties. Speech therapy addressing expressive language deficits. SLP evaluation completed 01/20/2026 consistent with moderate expressive aphasia.</p>
          <p>Continue current medication regimen. Monitor BP - remains elevated despite Lisinopril 10mg daily, consider dose adjustment at next visit. Diabetes: Last HbA1c 8.2% (01/18/2026) - suboptimal control, continue Metformin 500mg BID.</p>
          <div class="fake-doc__section-title">PLAN</div>
          <ol>
            <li>Continue SLP therapy 3x/week per evaluation recommendations</li>
            <li>Continue current medications, monitor BP trend</li>
            <li>Repeat HbA1c in 3 months</li>
            <li>Follow up in 30 days or PRN</li>
          </ol>
          <div class="fake-doc__signature-block">
            <div class="fake-doc__signature-line">
              <div class="fake-doc__sig-name">Dr. Demo Provider, MD</div>
              <div class="fake-doc__sig-title">Attending Physician</div>
            </div>
            <div class="fake-doc__signature-date">
              <div>Electronically signed: 01/22/2026 14:30</div>
            </div>
          </div>
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
            <div class="fake-doc__facility-name">QUEST DIAGNOSTICS</div>
            <div class="fake-doc__facility-addr">Laboratory Report</div>
          </div>
          <div class="fake-doc__title">LABORATORY RESULTS</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>Collection Date:</strong> 01/18/2026</div>
            <div><strong>Ordering Provider:</strong> Dr. Demo Provider</div>
            <div><strong>Account#:</strong> 23630</div>
            <div><strong>Specimen:</strong> Blood</div>
          </div>
          <table class="fake-doc__lab-table">
            <thead>
              <tr><th>Test</th><th>Result</th><th>Flag</th><th>Reference Range</th><th>Units</th></tr>
            </thead>
            <tbody>
              <tr class="fake-doc__lab-row--abnormal"><td>HbA1c</td><td class="fake-doc__highlight-inline">8.2</td><td>H</td><td>4.0-5.6</td><td>%</td></tr>
              <tr><td>Glucose, Fasting</td><td>186</td><td>H</td><td>70-100</td><td>mg/dL</td></tr>
              <tr><td>BUN</td><td>28</td><td>H</td><td>7-20</td><td>mg/dL</td></tr>
              <tr class="fake-doc__lab-row--abnormal"><td>Creatinine</td><td class="fake-doc__highlight-inline">1.8</td><td>H</td><td>0.6-1.2</td><td>mg/dL</td></tr>
              <tr class="fake-doc__lab-row--abnormal"><td>eGFR</td><td class="fake-doc__highlight-inline">42</td><td>L</td><td>>60</td><td>mL/min</td></tr>
              <tr><td>Sodium</td><td>138</td><td></td><td>136-145</td><td>mEq/L</td></tr>
              <tr><td>Potassium</td><td>4.2</td><td></td><td>3.5-5.0</td><td>mEq/L</td></tr>
              <tr><td>Total Cholesterol</td><td>198</td><td></td><td><200</td><td>mg/dL</td></tr>
              <tr><td>LDL</td><td>112</td><td>H</td><td><100</td><td>mg/dL</td></tr>
              <tr><td>HDL</td><td>42</td><td>L</td><td>>40</td><td>mg/dL</td></tr>
              <tr><td>WBC</td><td>7.2</td><td></td><td>4.5-11.0</td><td>K/uL</td></tr>
              <tr><td>Hemoglobin</td><td>11.8</td><td>L</td><td>12.0-16.0</td><td>g/dL</td></tr>
            </tbody>
          </table>
          <div class="fake-doc__footer-note">
            <p><strong>H</strong> = Above normal range | <strong>L</strong> = Below normal range</p>
            <p>Results reported to Dr. Demo Provider on 01/18/2026.</p>
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
            <div class="fake-doc__facility-name">GENERAL HOSPITAL MEDICAL CENTER</div>
            <div class="fake-doc__facility-addr">456 Hospital Blvd, Anytown, ST 00000 | (555) 111-2222</div>
          </div>
          <div class="fake-doc__title">DISCHARGE SUMMARY</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>Admission Date:</strong> 12/23/2025</div>
            <div><strong>Discharge Date:</strong> 12/28/2025</div>
            <div><strong>Attending:</strong> Dr. J. Williams, MD</div>
            <div><strong>MRN:</strong> GH-882741</div>
          </div>
          <div class="fake-doc__section-title">ADMITTING DIAGNOSIS</div>
          <p>Acute exacerbation of CHF with fluid overload</p>
          <div class="fake-doc__section-title">DISCHARGE DIAGNOSES</div>
          <ol>
            <li>Acute on chronic systolic heart failure, improved</li>
            <li>Fluid overload, resolved</li>
            <li>Hypertension</li>
            <li>Type 2 Diabetes Mellitus</li>
            <li>COPD</li>
            <li>Chronic kidney disease, stage 3</li>
          </ol>
        `,
      },
      {
        pageNum: 2,
        content: `
          <div class="fake-doc__section-title">HOSPITAL COURSE</div>
          <p>72-year-old female admitted from Sunny Meadows Rehabilitation Center with 3-day history of progressive dyspnea, bilateral LE edema, and 8-lb weight gain. Chest X-ray showed bilateral pleural effusions and pulmonary congestion. BNP elevated at 1,240 pg/mL.</p>
          <p>Patient was placed on telemetry monitoring and started on aggressive diuresis protocol.</p>
          <div class="fake-doc__section-title">TREATMENT PROVIDED</div>
          <p><strong>Day 1-2 (12/23-12/24):</strong></p>
          <ul>
            <li>IV Normal Saline 0.9% at 125 mL/hr - for medication administration</li>
            <li>IV Furosemide (Lasix) 40mg q12h</li>
            <li>Strict I&O monitoring</li>
            <li>Daily weights</li>
            <li>Sodium-restricted diet</li>
          </ul>
          <p><strong>Day 3-4 (12/25-12/26):</strong></p>
          <ul>
            <li>IV Lasix increased to 60mg q12h due to inadequate response</li>
            <li>Net negative fluid balance achieved: -1.2L/day</li>
            <li>Supplemental O2 via nasal cannula 2L/min</li>
          </ul>
        `,
      },
      {
        pageNum: 3,
        content: `
          <div class="fake-doc__section-title">IV MEDICATIONS ADMINISTERED</div>
          <p class="fake-doc__highlight">During admission, patient received IV Normal Saline 0.9% at 125mL/hr for hydration and IV Furosemide (Lasix) 40mg BID for fluid overload management. IV access maintained via 20g peripheral IV in left forearm. IV fluids discontinued on day 4, transitioned to oral intake.</p>
          <table class="fake-doc__med-table">
            <thead>
              <tr><th>Date</th><th>Medication</th><th>Route</th><th>Dose</th><th>Frequency</th></tr>
            </thead>
            <tbody>
              <tr><td>12/23</td><td>Normal Saline 0.9%</td><td class="fake-doc__highlight-inline">IV</td><td>125 mL/hr</td><td>Continuous</td></tr>
              <tr><td>12/23-12/26</td><td>Furosemide (Lasix)</td><td class="fake-doc__highlight-inline">IV</td><td>40mg -> 60mg</td><td>q12h</td></tr>
              <tr><td>12/23-12/28</td><td>Heparin</td><td>SubQ</td><td>5000 units</td><td>q8h</td></tr>
              <tr><td>12/27</td><td>Furosemide (Lasix)</td><td>PO</td><td>40mg</td><td>Daily</td></tr>
            </tbody>
          </table>
          <div class="fake-doc__section-title">DAY 5 (12/27) - TRANSITION</div>
          <p>Patient showing significant improvement. IV access discontinued. Transitioned to oral Lasix 40mg daily. Able to tolerate oral intake without difficulty. O2 supplementation weaned to room air.</p>
        `,
      },
      {
        pageNum: 4,
        content: `
          <div class="fake-doc__section-title">DISCHARGE CONDITION</div>
          <p>Improved. Weight down 7 lbs from admission. LE edema reduced to trace bilaterally. Breathing comfortably on room air. Ambulatory with rolling walker.</p>
          <div class="fake-doc__section-title">DISCHARGE MEDICATIONS</div>
          <ol>
            <li>Furosemide (Lasix) 40mg PO daily [NEW]</li>
            <li>Lisinopril 10mg PO daily [CONTINUED]</li>
            <li>Metformin 500mg PO BID [CONTINUED]</li>
            <li>Atorvastatin 40mg PO QHS [CONTINUED]</li>
            <li>Omeprazole 20mg PO daily [CONTINUED]</li>
            <li>Albuterol nebulizer Q4H PRN [CONTINUED]</li>
          </ol>
          <div class="fake-doc__section-title">DISCHARGE INSTRUCTIONS</div>
          <p>Return to Sunny Meadows Rehabilitation Center for continued skilled nursing care. Daily weights, sodium-restricted diet, strict I&O. Follow up with PCP within 7 days. Return to ED for worsening dyspnea, weight gain >3 lbs in 24 hours, or chest pain.</p>
          <div class="fake-doc__signature-block">
            <div class="fake-doc__signature-line">
              <div class="fake-doc__sig-name">Dr. J. Williams, MD</div>
              <div class="fake-doc__sig-title">Hospitalist, General Hospital</div>
            </div>
            <div class="fake-doc__signature-date">
              <div>Electronically signed: 12/28/2025 11:45</div>
            </div>
          </div>
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
            <div class="fake-doc__facility-name">GENERAL HOSPITAL MEDICAL CENTER</div>
            <div class="fake-doc__facility-addr">456 Hospital Blvd, Anytown, ST 00000</div>
          </div>
          <div class="fake-doc__title">HISTORY AND PHYSICAL</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>Date:</strong> 12/23/2025</div>
            <div><strong>Attending:</strong> Dr. J. Williams, MD</div>
          </div>
          <div class="fake-doc__section-title">CHIEF COMPLAINT</div>
          <p>Progressive shortness of breath and bilateral leg swelling x 3 days.</p>
          <div class="fake-doc__section-title">HPI</div>
          <p>72-year-old female transferred from SNF with worsening dyspnea, orthopnea (using 3 pillows), and bilateral LE edema. Weight up 8 lbs over past week per facility records. No chest pain, fever, or cough. History of CHF with last echo showing EF 35%.</p>
          <div class="fake-doc__section-title">ADMIT ORDERS</div>
          <p class="fake-doc__highlight">Admit orders: NS 0.9% at 125mL/hr, IV Lasix 40mg BID. Telemetry monitoring. BMP, CBC, BNP, chest X-ray. Strict I&O, daily weights. Sodium-restricted diet. DVT prophylaxis with Heparin 5000u SubQ q8h.</p>
          <div class="fake-doc__section-title">ASSESSMENT & PLAN</div>
          <p>Acute on chronic systolic heart failure with fluid overload. Will initiate aggressive diuresis with IV Lasix, monitor daily weights and I&O. Target net negative 1-2L/day. Anticipate 4-5 day hospital course.</p>
          <div class="fake-doc__signature-block">
            <div class="fake-doc__signature-line">
              <div class="fake-doc__sig-name">Dr. J. Williams, MD</div>
            </div>
            <div class="fake-doc__signature-date">
              <div>12/23/2025 16:20</div>
            </div>
          </div>
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
            <div class="fake-doc__facility-name">SUNNY MEADOWS REHABILITATION CENTER</div>
            <div class="fake-doc__facility-addr">Nursing Documentation</div>
          </div>
          <div class="fake-doc__title">TRANSFER/READMISSION NURSING NOTE</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>Date:</strong> 12/28/2025</div>
            <div><strong>Nurse:</strong> RN M. Johnson</div>
          </div>
          <div class="fake-doc__section-title">TRANSFER INFORMATION</div>
          <p class="fake-doc__highlight">Patient transferred from General Hospital. IV discontinued prior to transfer. Was receiving IV NS and IV Lasix during stay. Discharge summary and medication reconciliation received.</p>
          <p><strong>Hospital Stay:</strong> 12/23/2025 - 12/28/2025 (5 days)</p>
          <p><strong>Reason for Hospitalization:</strong> Acute CHF exacerbation with fluid overload</p>
          <div class="fake-doc__section-title">ASSESSMENT ON RETURN</div>
          <p>Patient alert, oriented x2 (person, place). VS: BP 132/74, HR 62, T 98.1, RR 16, O2 98% on RA. Weight: 180 lbs (down from 188 pre-hospital). Trace bilateral LE edema. Lungs clear. Ambulating with rolling walker.</p>
          <div class="fake-doc__section-title">NEW ORDERS RECEIVED</div>
          <ul>
            <li>Furosemide (Lasix) 40mg PO daily - NEW medication</li>
            <li>Daily weights - continue</li>
            <li>Sodium-restricted diet - continue</li>
            <li>Strict I&O monitoring x 72 hours</li>
            <li>Follow up with PCP within 7 days</li>
          </ul>
          <div class="fake-doc__signature-block">
            <div class="fake-doc__signature-line">
              <div class="fake-doc__sig-name">M. Johnson, RN</div>
            </div>
            <div class="fake-doc__signature-date">
              <div>12/28/2025 14:15</div>
            </div>
          </div>
        `,
      },
    ],
  },
};

export function getDocument(docId) {
  return DOCUMENTS[docId] || null;
}

export function FakeDocumentViewer({ docId, page, highlightText, onClose }) {
  const doc = DOCUMENTS[docId];
  const [currentPage, setCurrentPage] = useState(page || 1);

  if (!doc) {
    return (
      <div class="fake-viewer">
        <div class="fake-viewer__header">
          <span>Document not found</span>
          <button class="fake-viewer__close" onClick={onClose}>&times;</button>
        </div>
        <div class="fake-viewer__empty">
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>&#128196;</div>
          <div>Document not available in demo</div>
        </div>
      </div>
    );
  }

  const totalPages = doc.pages.length;
  const pageData = doc.pages.find(p => p.pageNum === currentPage) || doc.pages[0];

  return (
    <div class="fake-viewer__backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div class="fake-viewer">
        {/* Header */}
        <div class="fake-viewer__header">
          <div class="fake-viewer__header-left">
            <button class="fake-viewer__back" onClick={onClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              Back
            </button>
            <div class="fake-viewer__doc-info">
              <span class="fake-viewer__doc-title">{doc.title}</span>
              <span class="fake-viewer__doc-date">{doc.date}</span>
            </div>
          </div>
          <div class="fake-viewer__header-right">
            <span class="fake-viewer__doc-type">{doc.type}</span>
            <button class="fake-viewer__close" onClick={onClose}>&times;</button>
          </div>
        </div>

        {/* Toolbar */}
        <div class="fake-viewer__toolbar">
          <div class="fake-viewer__page-nav">
            <button
              class="fake-viewer__page-btn"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <span class="fake-viewer__page-info">Page {currentPage} of {totalPages}</span>
            <button
              class="fake-viewer__page-btn"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          {highlightText && (
            <div class="fake-viewer__highlight-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>
              Evidence highlighted
            </div>
          )}
        </div>

        {/* Document canvas */}
        <div class="fake-viewer__canvas">
          <div class="fake-viewer__page" dangerouslySetInnerHTML={{ __html: pageData.content }} />
        </div>
      </div>
    </div>
  );
}
```

---

## Task 3: Create Fake Document Viewer CSS

**Files:**
- Create: `demo/demo-document-viewer.css`

**Step 1: Create the CSS file**

```css
/* demo/demo-document-viewer.css */

/* ============================================
   Fake Document Viewer - looks like a PDF viewer
   ============================================ */

.fake-viewer__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 200000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.fake-viewer {
  width: 100%;
  max-width: 900px;
  height: 90vh;
  background: #404040;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

/* Header */
.fake-viewer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #2d2d2d;
  border-bottom: 1px solid #555;
  color: white;
  flex-shrink: 0;
}

.fake-viewer__header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.fake-viewer__back {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}

.fake-viewer__back:hover {
  background: rgba(255,255,255,0.2);
}

.fake-viewer__doc-info {
  display: flex;
  flex-direction: column;
}

.fake-viewer__doc-title {
  font-weight: 600;
  font-size: 14px;
}

.fake-viewer__doc-date {
  font-size: 11px;
  opacity: 0.7;
}

.fake-viewer__header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.fake-viewer__doc-type {
  font-size: 11px;
  background: rgba(255,255,255,0.15);
  padding: 3px 10px;
  border-radius: 4px;
}

.fake-viewer__close {
  background: transparent;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
  padding: 0 4px;
  opacity: 0.7;
  line-height: 1;
}

.fake-viewer__close:hover {
  opacity: 1;
}

/* Toolbar */
.fake-viewer__toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #363636;
  border-bottom: 1px solid #555;
  flex-shrink: 0;
}

.fake-viewer__page-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.fake-viewer__page-btn {
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fake-viewer__page-btn:hover:not(:disabled) {
  background: rgba(255,255,255,0.2);
}

.fake-viewer__page-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

.fake-viewer__page-info {
  color: rgba(255,255,255,0.8);
  font-size: 12px;
  min-width: 100px;
  text-align: center;
}

.fake-viewer__highlight-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 235, 59, 0.2);
  color: #ffeb3b;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
}

/* Document Canvas */
.fake-viewer__canvas {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  justify-content: center;
}

.fake-viewer__page {
  background: white;
  width: 100%;
  max-width: 750px;
  min-height: 900px;
  padding: 60px 72px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
  line-height: 1.6;
  color: #222;
}

/* Document Content Styles */
.fake-doc__letterhead {
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #333;
}

.fake-doc__facility-name {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.fake-doc__facility-addr {
  font-size: 11px;
  color: #555;
  margin-top: 4px;
}

.fake-doc__title {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 20px 0 16px;
}

.fake-doc__meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 24px;
  font-size: 11px;
  margin-bottom: 20px;
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
}

.fake-doc__section-title {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 18px 0 6px;
  padding-bottom: 2px;
  border-bottom: 1px solid #ccc;
  font-family: Arial, sans-serif;
}

.fake-doc__page p {
  margin: 8px 0;
}

.fake-doc__page ol,
.fake-doc__page ul {
  margin: 8px 0 8px 20px;
}

.fake-doc__page li {
  margin: 4px 0;
}

/* Evidence Highlight */
.fake-doc__highlight {
  background: rgba(255, 235, 59, 0.35);
  border-left: 3px solid #f9a825;
  padding: 8px 12px;
  margin: 8px 0;
  border-radius: 2px;
}

.fake-doc__highlight-inline {
  background: rgba(255, 235, 59, 0.4);
  padding: 1px 4px;
  border-radius: 2px;
  font-weight: bold;
}

/* Lab Table */
.fake-doc__lab-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
  margin: 12px 0;
  font-family: Arial, sans-serif;
}

.fake-doc__lab-table th {
  background: #e8e8e8;
  border: 1px solid #ccc;
  padding: 6px 8px;
  text-align: left;
  font-weight: bold;
}

.fake-doc__lab-table td {
  border: 1px solid #ddd;
  padding: 5px 8px;
}

.fake-doc__lab-row--abnormal {
  background: #fff8e1;
}

/* Medication Table */
.fake-doc__med-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
  margin: 12px 0;
  font-family: Arial, sans-serif;
}

.fake-doc__med-table th {
  background: #e8e8e8;
  border: 1px solid #ccc;
  padding: 6px 8px;
  text-align: left;
}

.fake-doc__med-table td {
  border: 1px solid #ddd;
  padding: 5px 8px;
}

/* Signature Block */
.fake-doc__signature-block {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 16px;
}

.fake-doc__signature-line {
  border-top: 1px solid #333;
  padding-top: 4px;
  min-width: 250px;
}

.fake-doc__sig-name {
  font-weight: bold;
  font-size: 12px;
}

.fake-doc__sig-title {
  font-size: 10px;
  color: #555;
}

.fake-doc__sig-license {
  font-size: 10px;
  color: #777;
}

.fake-doc__signature-date {
  text-align: right;
  font-size: 11px;
  align-self: flex-end;
}

.fake-doc__footer-note {
  margin-top: 16px;
  padding-top: 8px;
  border-top: 1px solid #ddd;
  font-size: 10px;
  color: #666;
  font-family: Arial, sans-serif;
}

/* Empty state */
.fake-viewer__empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.6);
}
```

---

## Task 4: Create `DemoChatOverlay` Component

**Files:**
- Create: `demo/components/DemoChatOverlay.jsx`

This wraps the production chat UI components with the demo hook and wires up document link clicks.

**Step 1: Create the component**

```jsx
// demo/components/DemoChatOverlay.jsx
import { useState, useCallback } from 'preact/hooks';
import { useDemoChat } from '../hooks/useDemoChat.js';
import { FakeDocumentViewer } from './FakeDocumentViewer.jsx';

// Import production UI components
import { MessageList } from '../../content/modules/ai-chat/components/MessageList.jsx';
import { ChatInput } from '../../content/modules/ai-chat/components/ChatInput.jsx';

const DEMO_SUGGESTIONS = [
  'Does this patient have aphasia?',
  'What are the PDPM opportunities?',
  'Look for IV fluids in hospital docs',
  'What medications is this patient on?',
];

export function DemoChatOverlay({ patientId, onClose }) {
  const { messages, status, send, clear } = useDemoChat(patientId);
  const [viewingDoc, setViewingDoc] = useState(null);

  // Intercept link clicks in the message area to open fake doc viewer
  const handleContentClick = useCallback((e) => {
    const link = e.target.closest('a[href^="#doc:"]');
    if (link) {
      e.preventDefault();
      // Parse #doc:doc-001:2 format
      const parts = link.getAttribute('href').replace('#doc:', '').split(':');
      const docId = parts[0];
      const page = parseInt(parts[1], 10) || 1;
      setViewingDoc({ docId, page });
      return;
    }

    // Handle viewer links like #viewer:mar
    const viewerLink = e.target.closest('a[href^="#viewer:"]');
    if (viewerLink) {
      e.preventDefault();
      // Could open MAR/Orders viewer - for now just show a toast
    }
  }, []);

  const handleSuggestionClick = useCallback((text) => {
    send(text);
  }, [send]);

  return (
    <>
      <div class="super-chat-overlay" onClick={(e) => { if (e.target.classList.contains('super-chat-overlay')) onClose(); }}>
        <div class="super-chat-overlay__panel demo-chat-panel">
          {/* Header */}
          <div class="super-chat-header">
            <div class="super-chat-header__left">
              <div class="super-chat-header__sparkle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <span class="super-chat-header__title">AI Assistant</span>
              <span class="super-chat-header__patient">Doe, Jane</span>
            </div>
            <div class="super-chat-header__actions-right">
              <button class="super-chat-header__btn" onClick={clear} title="New Chat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
              <button class="super-chat-header__btn" onClick={onClose} title="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div class="super-chat-messages" onClick={handleContentClick}>
            <MessageList
              messages={messages}
              status={status}
              onSuggestionClick={handleSuggestionClick}
            />
          </div>

          {/* Custom Empty State with demo suggestions */}
          {messages.length === 0 && status === 'ready' && (
            <div class="demo-chat-suggestions">
              <div class="demo-chat-suggestions__title">Try asking:</div>
              {DEMO_SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  class="demo-chat-suggestion-btn"
                  onClick={() => handleSuggestionClick(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <ChatInput onSend={send} status={status} />
        </div>
      </div>

      {/* Document Viewer Overlay */}
      {viewingDoc && (
        <FakeDocumentViewer
          docId={viewingDoc.docId}
          page={viewingDoc.page}
          highlightText={true}
          onClose={() => setViewingDoc(null)}
        />
      )}
    </>
  );
}
```

---

## Task 5: Add Demo Chat Suggestion Styles

**Files:**
- Create: `demo/demo-chat.css`

```css
/* demo/demo-chat.css */

/* Demo chat panel adjustments */
.demo-chat-panel {
  width: 440px !important;
  max-height: 720px !important;
}

/* Custom suggestion buttons for demo */
.demo-chat-suggestions {
  position: absolute;
  bottom: 72px;
  left: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.demo-chat-suggestions__title {
  font-size: 12px;
  color: #888;
  margin-bottom: 2px;
}

.demo-chat-suggestion-btn {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #333;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease;
}

.demo-chat-suggestion-btn:hover {
  background: #f5f3ff;
  border-color: #667eea;
  color: #667eea;
}

/* Clickable source links in chat messages */
.super-chat-messages a[href^="#doc:"],
.super-chat-messages a[href^="#viewer:"] {
  color: #667eea;
  text-decoration: none;
  border-bottom: 1px dashed #667eea;
  cursor: pointer;
}

.super-chat-messages a[href^="#doc:"]:hover,
.super-chat-messages a[href^="#viewer:"]:hover {
  color: #5a3ed8;
  border-bottom-style: solid;
}
```

---

## Task 6: Wire Up DemoChatOverlay in DemoApp

**Files:**
- Modify: `demo/components/DemoApp.jsx`

**Step 1: Add chat overlay to DemoApp**

Add `DemoChatOverlay` as a new overlay option in the FAB menu and also make the "AI Chat" button in the vanilla Super Menu open it.

Add to FAB_BUTTONS array:
```javascript
{ id: 'chat', label: 'AI Chat', icon: '\u{1F4AC}', color: '#8b5cf6' },
```

Add to DEMO_CONTEXTS:
```javascript
chat: { patientId: '2657226' },
```

Add the overlay render in the component JSX (alongside the existing overlays):
```jsx
{activeOverlay === 'chat' && (
  <DemoChatOverlay
    patientId={DEMO_CONTEXTS.chat.patientId}
    onClose={handleClose}
  />
)}
```

Import at top:
```javascript
import { DemoChatOverlay } from './DemoChatOverlay.jsx';
```

**Step 2: Wire vanilla "AI Chat" nav button to open Preact overlay**

In `demo-super-menu.js`, in the `switchView('chat')` case, dispatch a custom event instead of showing the vanilla chat HTML:

```javascript
case 'chat':
  // Close vanilla panel and open Preact chat overlay
  closePanel();
  window.dispatchEvent(new CustomEvent('demo:open-chat'));
  return;
```

In `DemoApp.jsx`, add a listener for this event:
```javascript
useEffect(() => {
  function handleOpenChat() {
    setActiveOverlay('chat');
  }
  window.addEventListener('demo:open-chat', handleOpenChat);
  return () => window.removeEventListener('demo:open-chat', handleOpenChat);
}, []);
```

---

## Task 7: Add CSS Imports to Demo Entry

**Files:**
- Modify: `demo/demo-entry.jsx`

Add these imports after the existing CSS imports:

```javascript
import './demo-chat.css';
import './demo-document-viewer.css';
import '../content/css/ai-chat.css';
```

---

## Task 8: Build and Test

**Step 1: Build**
```bash
cd /Users/andrewburns/Desktop/Programming/super/chrome-ext
npm run build
```

**Step 2: Test in browser**
Open `demo/index.html` (or use a local server). Verify:
1. FAB menu shows "AI Chat" button
2. Clicking it opens the chat overlay
3. Quick suggestion buttons appear on empty state
4. Clicking a suggestion triggers scripted response with animated tool steps
5. Source links in responses open the fake document viewer
6. Document viewer shows realistic clinical documents with yellow highlights
7. Page navigation works in multi-page documents
8. Close buttons work on both chat overlay and document viewer
9. The "AI Chat" button in the vanilla Super Menu panel also opens the Preact chat

---

## Task 9: Commit

```bash
git add demo/hooks/useDemoChat.js demo/components/DemoChatOverlay.jsx demo/components/FakeDocumentViewer.jsx demo/demo-chat.css demo/demo-document-viewer.css
git add demo/components/DemoApp.jsx demo/demo-entry.jsx demo/demo-super-menu.js
git commit -m "feat(demo): add AI chat with scripted responses and fake PDF viewer

- DemoChatOverlay uses production MessageList/ChatInput/ToolStep components
- useDemoChat hook with 4 scripted scenarios + fallback
- FakeDocumentViewer renders HTML clinical docs styled as PDFs
- Source links in chat responses open document viewer with highlights
- Quick suggestion buttons on empty state
- Wired into both FAB menu and vanilla Super Menu nav"
```
