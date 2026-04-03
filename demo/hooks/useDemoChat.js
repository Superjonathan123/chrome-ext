// Demo chat hook — mirrors the production useChat interface but returns
// scripted responses with simulated streaming delays. No network calls.
import { useState, useRef, useCallback, useEffect } from 'preact/hooks';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

let toolCallCounter = 0;
function nextToolCallId() {
  return `demo-tc-${++toolCallCounter}-${Date.now().toString(36)}`;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function lowerIncludes(text, keyword) {
  return text.toLowerCase().includes(keyword);
}

function matchesAny(text, keywords) {
  const lower = text.toLowerCase();
  return keywords.some((kw) => lower.includes(kw));
}

// ---------------------------------------------------------------------------
// Scenario definitions
// ---------------------------------------------------------------------------

function getScenario(text) {
  if (matchesAny(text, ['malnutrition', 'nutrition', 'weight loss', 'albumin', 'aphasia'])) {
    return buildMalnutritionScenario();
  }
  if (matchesAny(text, ['pdpm', 'hipps', 'opportunities', 'reimbursement', 'revenue'])) {
    return buildPdpmScenario();
  }
  if (matchesAny(text, ['iv fluid', 'iv ', 'intravenous', 'fluids', 'hospital doc'])) {
    return buildIvFluidsScenario();
  }
  if (matchesAny(text, ['medication', 'med ', 'meds', 'drug', 'prescription', 'taking'])) {
    return buildMedicationsScenario();
  }
  return buildFallbackScenario();
}

// --- Malnutrition ---

function buildMalnutritionScenario() {
  return [
    {
      type: 'tool',
      toolName: 'searchClinicalNotes',
      input: { keyword: 'malnutrition weight loss albumin', noteType: 'Nutrition' },
      output: [
        { documentId: 'doc-nutr-001', title: 'Nutrition Progress Note', date: '2026-01-22', author: 'Sarah Kim, RD, LD', snippet: 'Moderate protein-calorie malnutrition. Weight loss 12.6% in 3 months. PO intake <50%...' },
        { documentId: 'doc-nutr-002', title: 'Nutrition Lab Panel', date: '2026-01-20', author: 'Lab', snippet: 'Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low)...' },
        { documentId: 'doc-nutr-006', title: 'Weight Monitoring Flow Sheet', date: '2026-01-22', author: 'Nursing', snippet: 'Weight trend: 135 → 118 lbs. Total loss: 17 lbs (12.6%)...' },
      ],
      delayMs: 800,
    },
    {
      type: 'tool',
      toolName: 'readDocument',
      input: { documentId: 'doc-nutr-001', title: 'Nutrition Progress Note' },
      output: {
        documentId: 'doc-nutr-001',
        title: 'Nutrition Progress Note',
        date: '2026-01-22',
        author: 'Sarah Kim, RD, LD',
        excerpt:
          'Weight Loss: 17 lbs (12.6%) in past 3 months. PO Intake: < 50% meals/est. needs. ' +
          'Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low). ' +
          'Moderate protein-calorie malnutrition diagnosed based on significant unintentional weight loss, ' +
          'inadequate oral intake, and low albumin/prealbumin. Recommend fortified foods, Ensure Plus BID, weekly weights.',
        page: 2,
      },
      delayMs: 1000,
    },
    {
      type: 'tool',
      toolName: 'readMAR',
      input: { medication: 'Ensure Plus', patientId: '2657226' },
      output: {
        medication: 'Ensure Plus 8 OZ Oral Liquid',
        route: 'ORAL',
        frequency: 'BID with meals',
        recentAdministrations: [
          { date: '01/22', lunch: 'Given', dinner: 'Given' },
          { date: '01/23', lunch: 'Given', dinner: 'Refused' },
          { date: '01/24', lunch: 'Given', dinner: 'Given' },
          { date: '01/25', lunch: 'Given', dinner: 'Given' },
          { date: '01/26', lunch: 'Given', dinner: 'Refused' },
          { date: '01/27', lunch: 'Given', dinner: 'Given' },
        ],
        complianceRate: '83%',
      },
      delayMs: 800,
    },
    {
      type: 'text',
      content:
        '## Malnutrition Documentation Found\n\n' +
        'Yes — there is **strong documented evidence of malnutrition** for this resident.\n\n' +
        '### Clinical Evidence\n\n' +
        'From the Nutrition Progress Note (1/22/2026):\n\n' +
        '> **Weight Loss: 17 lbs (12.6%)** in past 3 months. PO Intake: **< 50%** meals/est. needs. ' +
        'Moderate protein-calorie malnutrition diagnosed.\n\n' +
        'Lab values confirm:\n' +
        '- **Albumin: 2.9 g/dL** (Low — ref: 3.5-5.0)\n' +
        '- **Prealbumin: 12 mg/dL** (Low — ref: 18-38)\n\n' +
        'Active treatment via MAR:\n' +
        '- **Ensure Plus 8oz BID** — 83% compliance over past week\n' +
        '- **Fortified Cereal 6oz QD** — administered daily\n\n' +
        '### MDS Impact\n\n' +
        '| Item | Current | Suggested | Rationale |\n' +
        '|------|---------|-----------|----------|\n' +
        '| **I5600** (Malnutrition) | Not coded | **1 — Yes** | Dietitian documents moderate protein-calorie malnutrition |\n' +
        '| **NTA Score** | NC | **ND** | Malnutrition activates NTA comorbidity tier |\n' +
        '| **HIPPS** | KAQD | **KBQE** | **+$41.86/day** |\n\n' +
        '### Sources\n\n' +
        '- [View Nutrition Progress Note (Page 2)](#doc:doc-nutr-001:2)\n' +
        '- [View Nutrition Lab Panel](#doc:doc-nutr-002:1)\n' +
        '- [View Weight Monitoring Flow Sheet](#doc:doc-nutr-006:1)\n' +
        '- [View MAR — Ensure Plus](#mar:doc-nutr-004)\n' +
        '- [View MAR — Fortified Cereal](#mar:doc-nutr-003)\n',
      delayMs: 600,
    },
  ];
}

// --- PDPM Opportunities ---

function buildPdpmScenario() {
  return [
    {
      type: 'tool',
      toolName: 'getPatientContext',
      input: {},
      output: {
        patientName: 'Margaret Thompson',
        age: 78,
        admissionDate: '2026-02-15',
        payerType: 'Medicare Part A',
        currentHipps: 'KAQD',
        currentPerDiem: '$412.18',
        assessmentType: '5-Day PPS',
        ard: '2026-02-20',
      },
      delayMs: 600,
    },
    {
      type: 'tool',
      toolName: 'searchSemantically',
      input: { query: 'PDPM optimization opportunities clinical documentation' },
      output: [
        {
          item: 'I5600',
          label: 'Malnutrition',
          confidence: 0.95,
          currentValue: null,
          suggestedValue: '1',
          source: 'Nutrition Progress Note (doc-nutr-001)',
          hippsImpact: 'KAQD → KBQE (+$41.86/day)',
        },
        {
          item: 'I4300',
          label: 'Diabetes with PVD',
          confidence: 0.85,
          currentValue: null,
          suggestedValue: '1',
          source: 'MD H&P (doc-005)',
          hippsImpact: 'KBQE → KCQE (+$28.14/day)',
        },
        {
          item: 'O0400A3',
          label: 'IV Medications (while a resident)',
          confidence: 0.88,
          currentValue: '0',
          suggestedValue: '3',
          source: 'Hospital Discharge Summary (doc-090)',
          hippsImpact: '+2 NTA points (+$18.42/day)',
        },
      ],
      delayMs: 1400,
    },
    {
      type: 'text',
      content:
        '## PDPM Optimization Opportunities\n\n' +
        'Based on clinical documentation analysis for **Margaret Thompson**, I found **3 potential opportunities** ' +
        'to improve PDPM accuracy:\n\n' +
        '| # | MDS Item | Description | Confidence | HIPPS Impact | Source |\n' +
        '|---|----------|-------------|-----------|--------------|--------|\n' +
        '| 1 | **I5600** | Malnutrition | 95% | KAQD → KBQE (**+$41.86/day**) | [Nutrition Progress Note](#doc:doc-nutr-001:2) |\n' +
        '| 2 | **I4300** | Diabetes w/ PVD | 85% | KBQE → KCQE (**+$28.14/day**) | [MD H&P](#doc:doc-005:1) |\n' +
        '| 3 | **O0400A3** | IV Medications | 88% | +2 NTA pts (**+$18.42/day**) | [Discharge Summary](#doc:doc-090:3) |\n\n' +
        '### Total Potential Impact\n\n' +
        '**+$88.42/day** (combined) — from current HIPPS **KAQD** ($412.18/day) to optimized **KCQE** ($500.60/day)\n\n' +
        '> These are opportunities where clinical documentation supports a coding change but the MDS may not yet reflect it. ' +
        'Each should be reviewed by the MDS coordinator.\n\n' +
        'Would you like me to dive deeper into any of these opportunities?\n',
      delayMs: 600,
    },
  ];
}

// --- IV Fluids ---

function buildIvFluidsScenario() {
  return [
    {
      type: 'tool',
      toolName: 'searchDocuments',
      input: { query: 'IV fluids intravenous administration', dateRange: 'lookback' },
      output: [
        { documentId: 'doc-090', title: 'Hospital Discharge Summary', date: '2026-02-14', author: 'Dr. James Patel', relevance: 0.95 },
        { documentId: 'doc-091', title: 'Hospital H&P', date: '2026-02-13', author: 'Dr. James Patel', relevance: 0.87 },
      ],
      delayMs: 800,
    },
    {
      type: 'tool',
      toolName: 'readDocument',
      input: { documentId: 'doc-090', title: 'Hospital Discharge Summary' },
      output: {
        documentId: 'doc-090',
        title: 'Hospital Discharge Summary',
        date: '2026-02-14',
        author: 'Dr. James Patel',
        excerpt:
          'Hospital Course: Patient admitted for CHF exacerbation. Received IV Normal Saline 1L bolus on ' +
          'admission, then maintained on IV NS at 75mL/hr for 48 hours. IV Lasix 40mg BID administered on ' +
          'days 2-4. Transitioned to oral Lasix 20mg on day 5 prior to discharge to SNF.',
        page: 3,
      },
      delayMs: 1000,
    },
    {
      type: 'tool',
      toolName: 'searchClinicalNotes',
      input: { keyword: 'IV', noteType: 'Nursing' },
      output: [
        { documentId: 'doc-092', title: 'Nursing Transfer Note', date: '2026-02-15', author: 'RN Maria Lopez', snippet: 'Patient transferred from Regional Medical Center. IV site left forearm — discontinued on arrival. Was receiving IV NS at 75mL/hr...' },
      ],
      delayMs: 800,
    },
    {
      type: 'text',
      content:
        '## IV Fluid Administration Evidence\n\n' +
        'Yes — there is **documented evidence of IV fluid and IV medication administration** during the qualifying hospital stay.\n\n' +
        '### Hospital Documentation\n\n' +
        'From the Discharge Summary (2/14/2026):\n\n' +
        '> Patient admitted for CHF exacerbation. Received **IV Normal Saline 1L bolus** on admission, then maintained on ' +
        '**IV NS at 75mL/hr for 48 hours**. **IV Lasix 40mg BID** administered on days 2-4.\n\n' +
        'The Nursing Transfer Note (2/15/2026) corroborates:\n\n' +
        '> IV site left forearm — discontinued on arrival. Was receiving IV NS at 75mL/hr.\n\n' +
        '### MDS Impact\n\n' +
        '| Item | Current | Suggested | Rationale |\n' +
        '|------|---------|-----------|----------|\n' +
        '| **O0400A3** | 0 — Not coded | **3 — IV while a resident** | Hospital discharge docs confirm IV admin within look-back |\n' +
        '| **NTA Points** | Current | **+2 points** | IV medications add NTA comorbidity points |\n\n' +
        '> **Note:** The look-back period for O0400A3 includes the qualifying hospital stay per CMS guidance. ' +
        'Both IV NS and IV Lasix qualify as IV medications for PDPM NTA scoring.\n\n' +
        '### Sources\n\n' +
        '- [View Hospital Discharge Summary (Page 3)](#doc:doc-090:3)\n' +
        '- [View Hospital H&P](#doc:doc-091:1)\n' +
        '- [View Nursing Transfer Note](#doc:doc-092:1)\n',
      delayMs: 600,
    },
  ];
}

// --- Medications ---

function buildMedicationsScenario() {
  return [
    {
      type: 'tool',
      toolName: 'searchMedications',
      input: { patientId: 'current', status: 'active' },
      output: [
        { name: 'Lisinopril 10mg', route: 'PO', frequency: 'Daily', type: 'scheduled', prescriber: 'Dr. Sarah Kim', startDate: '2026-02-15' },
        { name: 'Metformin 500mg', route: 'PO', frequency: 'BID', type: 'scheduled', prescriber: 'Dr. Sarah Kim', startDate: '2026-02-15' },
        { name: 'Omeprazole 20mg', route: 'PO', frequency: 'Daily (AC breakfast)', type: 'scheduled', prescriber: 'Dr. Sarah Kim', startDate: '2026-02-16' },
        { name: 'Atorvastatin 40mg', route: 'PO', frequency: 'QHS', type: 'scheduled', prescriber: 'Dr. Sarah Kim', startDate: '2026-02-15' },
        { name: 'Albuterol 2.5mg/3mL', route: 'INH (nebulizer)', frequency: 'Q4H PRN', type: 'prn', prescriber: 'Dr. Sarah Kim', startDate: '2026-02-15' },
        { name: 'Acetaminophen 650mg', route: 'PO', frequency: 'Q6H PRN', type: 'prn', prescriber: 'Dr. Sarah Kim', startDate: '2026-02-15' },
      ],
      delayMs: 800,
    },
    {
      type: 'tool',
      toolName: 'searchAdministrationRecords',
      input: { date: 'today' },
      output: {
        date: '2026-03-06',
        scheduled: [
          { name: 'Lisinopril 10mg', time: '08:00', status: 'given', givenBy: 'RN Maria Lopez' },
          { name: 'Metformin 500mg', time: '08:00', status: 'given', givenBy: 'RN Maria Lopez' },
          { name: 'Metformin 500mg', time: '17:00', status: 'scheduled', givenBy: null },
          { name: 'Omeprazole 20mg', time: '07:30', status: 'given', givenBy: 'RN Maria Lopez' },
          { name: 'Atorvastatin 40mg', time: '21:00', status: 'scheduled', givenBy: null },
        ],
        prn: [
          { name: 'Acetaminophen 650mg', time: '06:15', status: 'given', givenBy: 'RN Maria Lopez', reason: 'Headache' },
        ],
      },
      delayMs: 1000,
    },
    {
      type: 'text',
      content:
        '## Current Medications\n\n' +
        'Here are the active medications for this resident:\n\n' +
        '### Scheduled Medications\n\n' +
        '| Medication | Route | Frequency | Today\'s Status |\n' +
        '|-----------|-------|-----------|----------------|\n' +
        '| Lisinopril 10mg | PO | Daily | Given 08:00 |\n' +
        '| Metformin 500mg | PO | BID | Given 08:00 — 17:00 pending |\n' +
        '| Omeprazole 20mg | PO | Daily (AC breakfast) | Given 07:30 |\n' +
        '| Atorvastatin 40mg | PO | QHS | 21:00 pending |\n\n' +
        '### PRN Medications\n\n' +
        '| Medication | Route | Frequency | Last Given |\n' +
        '|-----------|-------|-----------|------------|\n' +
        '| Albuterol 2.5mg/3mL | INH (nebulizer) | Q4H PRN | Not given today |\n' +
        '| Acetaminophen 650mg | PO | Q6H PRN | 06:15 (headache) |\n\n' +
        'All medications were prescribed by **Dr. Sarah Kim** starting around the admission date (2/15/2026). ' +
        'Morning medications have been administered. Evening doses are still pending.\n',
      delayMs: 600,
    },
  ];
}

// --- Fallback ---

function buildFallbackScenario() {
  return [
    {
      type: 'tool',
      toolName: 'think',
      input: { thought: 'The user\'s query doesn\'t match a specific clinical topic. I\'ll search broadly and offer guidance.' },
      output: { status: 'considered' },
      delayMs: 600,
    },
    {
      type: 'tool',
      toolName: 'searchSemantically',
      input: { query: 'general clinical documentation review' },
      output: { results: [], message: 'No specific results for this query in demo mode.' },
      delayMs: 800,
    },
    {
      type: 'text',
      content:
        'I don\'t have a specific scripted answer for that question in demo mode, but here are some things you can try:\n\n' +
        '- **"Does this patient have malnutrition?"** — Clinical documentation search with MDS impact\n' +
        '- **"What are the PDPM opportunities?"** — Reimbursement optimization analysis\n' +
        '- **"Were IV fluids given in the hospital?"** — Hospital document review with NTA impact\n' +
        '- **"What medications is this patient taking?"** — Active medication list with today\'s MAR\n\n' +
        'Try one of these to see the full demo experience!\n',
      delayMs: 600,
    },
  ];
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useDemoChat(patientId) {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('ready');
  const [error, setError] = useState(null);
  const [sessionId, setSessionId] = useState(() =>
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `demo-${Date.now()}`
  );

  const cancelRef = useRef(false);
  const runningRef = useRef(false);

  // Reset when patient changes
  useEffect(() => {
    clear();
  }, [patientId]);

  // ------ send ------

  const send = useCallback(
    async (text) => {
      if (status !== 'ready' || runningRef.current || !text.trim()) return;

      cancelRef.current = false;
      runningRef.current = true;
      setError(null);

      // Add user message + empty assistant placeholder
      const userMsg = { role: 'user', content: text };
      const assistantMsg = { role: 'assistant', content: '', parts: [] };

      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setStatus('submitted');

      // Initial thinking delay
      await delay(600);
      if (cancelRef.current) { runningRef.current = false; return; }

      setStatus('streaming');

      const steps = getScenario(text);

      for (const step of steps) {
        if (cancelRef.current) break;

        if (step.type === 'tool') {
          // Add tool part with running status
          const toolCallId = nextToolCallId();
          const toolPart = {
            type: `tool-${step.toolName}`,
            toolCallId,
            status: 'running',
            input: step.input,
            output: undefined,
          };

          assistantMsg.parts.push(toolPart);
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...assistantMsg, parts: [...assistantMsg.parts] };
            return updated;
          });

          // Wait for simulated processing
          await delay(step.delayMs || 800);
          if (cancelRef.current) break;

          // Mark tool as done with output
          toolPart.status = 'done';
          toolPart.output = step.output;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...assistantMsg, parts: [...assistantMsg.parts] };
            return updated;
          });
        } else if (step.type === 'text') {
          await delay(step.delayMs || 600);
          if (cancelRef.current) break;

          const textPart = { type: 'text', content: step.content };
          assistantMsg.parts.push(textPart);
          assistantMsg.content = step.content; // fallback content
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...assistantMsg, parts: [...assistantMsg.parts] };
            return updated;
          });
        }
      }

      setStatus('ready');
      runningRef.current = false;
    },
    [status]
  );

  // ------ clear ------

  const clear = useCallback(() => {
    cancelRef.current = true;
    runningRef.current = false;
    setMessages([]);
    setStatus('ready');
    setError(null);
    setSessionId(
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `demo-${Date.now()}`
    );
  }, []);

  // ------ stop ------

  const stop = useCallback(() => {
    cancelRef.current = true;
    runningRef.current = false;
    setStatus('ready');
  }, []);

  // ------ loadSession ------

  const loadSession = useCallback((savedSessionId, savedMessages) => {
    cancelRef.current = true;
    runningRef.current = false;
    setSessionId(savedSessionId);
    setMessages(savedMessages || []);
    setStatus('ready');
    setError(null);
  }, []);

  return { messages, status, error, sessionId, send, clear, stop, setMessages, loadSession };
}
