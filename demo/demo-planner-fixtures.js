/**
 * Demo fixtures for the MDS Planner.
 *
 * Events are generated relative to the requested week so the demo looks
 * populated no matter when it's viewed. Patient names intentionally mirror
 * the ones in demo/mds-planner-mock.html for visual consistency.
 */

const ROSTER = [
  { patientId: 'pat_hagerich', patientExternalId: '2657001', patientName: 'Hagerich, Laurel' },
  { patientId: 'pat_clark',    patientExternalId: '2657002', patientName: 'Clark, Terrence' },
  { patientId: 'pat_saffle',   patientExternalId: '2657003', patientName: 'Saffle, Elinor' },
  { patientId: 'pat_coble',    patientExternalId: '2657004', patientName: 'Coble, Gary' },
  { patientId: 'pat_packoski', patientExternalId: '2657005', patientName: 'Packoski, Diane' },
  { patientId: 'pat_stamper',  patientExternalId: '2657006', patientName: 'Stamper, Bill' },
  { patientId: 'pat_schmalz',  patientExternalId: '2657007', patientName: 'Schmalzriedt, Rolf' },
  { patientId: 'pat_nugent',   patientExternalId: '2657008', patientName: 'Nugent, Carol' },
  { patientId: 'pat_bruton',   patientExternalId: '2657009', patientName: 'Bruton, Angela' },
  { patientId: 'pat_henstreet',patientExternalId: '2657010', patientName: 'Henstreet, Ray' },
  { patientId: 'pat_watkins',  patientExternalId: '2657011', patientName: 'Watkins, Marva' },
  { patientId: 'pat_mccants',  patientExternalId: '2657012', patientName: 'McCants, Gloria' },
  { patientId: 'pat_clappor',  patientExternalId: '2657013', patientName: 'Clappor, Bruno' },
  { patientId: 'pat_ashley',   patientExternalId: '2657014', patientName: 'Ashley, Jamie' },
  { patientId: 'pat_hoffie',   patientExternalId: '2657015', patientName: 'Hoffie, Shirley' },
  { patientId: 'pat_rogers',   patientExternalId: '2657016', patientName: 'Rogers, Warren' },
  { patientId: 'pat_smith',    patientExternalId: '2657017', patientName: 'Smith, Bertha' },
  { patientId: 'pat_clasper',  patientExternalId: '2657018', patientName: 'Clasper, Ronald' },
];

function byName(last) {
  return ROSTER.find(p => p.patientName.startsWith(last));
}

function addDays(iso, n) {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + n);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
}

function ev(date, type, patient, { urgency = 'ok', meta = {} } = {}) {
  return {
    date,
    type,
    patientId: patient.patientId,
    patientExternalId: patient.patientExternalId,
    patientName: patient.patientName,
    urgency,
    meta,
  };
}

/**
 * Generate a plausible set of events distributed across the given week.
 */
export function buildPlannerWeekEvents(startDate /* YYYY-MM-DD, Monday */) {
  const mon = startDate;
  const tue = addDays(mon, 1);
  const wed = addDays(mon, 2);
  const thu = addDays(mon, 3);
  const fri = addDays(mon, 4);
  const sat = addDays(mon, 5);
  const sun = addDays(mon, 6);

  const events = [
    // Monday — urgent opener
    ev(mon, 'cert_overdue', byName('Coble'), {
      urgency: 'overdue',
      meta: { certId: 'cert_coble_01', type: 'day_14_recert', status: 'pending', bucket: 'needs_to_send', daysOverdue: 32 },
    }),
    ev(mon, 'cp_review_due', byName('Hagerich'), {
      urgency: 'warning',
      meta: { nextReviewDate: mon, pccReviewId: null, pccCarePlanId: 'cp_hagerich_01' },
    }),
    ev(mon, 'query_due', byName('Saffle'), {
      urgency: 'warning',
      meta: { queryId: 'q_saffle_01', itemCode: 'I5100', status: 'sent', linkedArdDate: thu },
    }),

    // Tuesday — admit + sig + cp review
    ev(tue, 'admit', byName('Clark'), {
      meta: { payer: 'Medicare A', location: '4-South' },
    }),
    ev(tue, 'mds_ard', byName('Clasper'), {
      meta: { assessmentId: 'mds_clasper_01', pccAssessmentId: '4860311', description: 'Admission + 5-Day PPS', status: 'In Progress', ardDate: tue },
    }),
    ev(tue, 'cp_review_expected', byName('Packoski'), {
      urgency: 'warning',
      meta: { relatedArdDate: addDays(tue, 2), expectedType: 'quarterly' },
    }),

    // Wednesday — sig change MDS + queries in flight
    ev(wed, 'mds_ard', byName('Stamper'), {
      urgency: 'warning',
      meta: { assessmentId: 'mds_stamper_01', pccAssessmentId: '4860312', description: 'Significant Change', status: 'In Progress', ardDate: wed },
    }),
    ev(wed, 'query_due', byName('Schmalzriedt'), {
      meta: { queryId: 'q_schmalz_01', itemCode: 'I2900', status: 'sent', linkedArdDate: addDays(wed, 5) },
    }),
    ev(wed, 'query_due', byName('Nugent'), {
      meta: { queryId: 'q_nugent_01', itemCode: 'J1550', status: 'sent', linkedArdDate: addDays(wed, 6) },
    }),

    // Thursday — query due + cp review
    ev(thu, 'query_due', byName('Bruton'), {
      urgency: 'warning',
      meta: { queryId: 'q_bruton_01', itemCode: 'I1100', status: 'pending', linkedArdDate: addDays(thu, 2) },
    }),
    ev(thu, 'cp_review_in_progress', byName('Henstreet'), {
      meta: { startDate: addDays(thu, -1), targetCompletionDate: addDays(thu, 3), pccReviewId: 'rev_henstreet_01', pccCarePlanId: 'cp_henstreet_01' },
    }),

    // Friday — discharge, cp review, cert
    ev(fri, 'discharge', byName('Watkins'), {
      meta: { actionCode: 'DD' },
    }),
    ev(fri, 'cp_review_due', byName('McCants'), {
      meta: { nextReviewDate: fri, pccReviewId: null, pccCarePlanId: 'cp_mccants_01' },
    }),
    ev(fri, 'cert_due', byName('Clappor'), {
      urgency: 'warning',
      meta: { certId: 'cert_clappor_01', type: 'day_14_recert', status: 'pending', bucket: 'needs_to_send', sentAt: null },
    }),

    // Saturday — query-heavy day
    ev(sat, 'query_due', byName('Ashley'), {
      meta: { queryId: 'q_ashley_01', itemCode: 'I5100', status: 'sent', linkedArdDate: addDays(sat, 4) },
    }),
    ev(sat, 'query_due', byName('Hoffie'), {
      meta: { queryId: 'q_hoffie_01', itemCode: 'I2900', status: 'sent', linkedArdDate: addDays(sat, 3) },
    }),
    ev(sat, 'query_due', byName('Rogers'), {
      meta: { queryId: 'q_rogers_01', itemCode: 'J1550', status: 'sent', linkedArdDate: addDays(sat, 5) },
    }),
    ev(sat, 'query_due', byName('Smith'), {
      meta: { queryId: 'q_smith_01', itemCode: 'O0100', status: 'pending', linkedArdDate: addDays(sat, 6) },
    }),

    // Sunday — quiet, one cert
    ev(sun, 'cert_due', byName('Saffle'), {
      meta: { certId: 'cert_saffle_01', type: 'day_14_recert', status: 'pending', bucket: 'needs_to_send', sentAt: null },
    }),
  ];

  return events;
}

export function buildPlannerSummary() {
  const daysAgoIso = (n) => new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);
  const hoursAgoIso = (n) => new Date(Date.now() - n * 3600000).toISOString();
  return {
    mdsCoding: {
      count: 4,
      patients: [
        { patientId: byName('Stamper').patientId,  patientExternalId: byName('Stamper').patientExternalId,  patientName: byName('Stamper').patientName,  status: 'In Progress', description: 'Significant Change',     ardDate: daysAgoIso(2),  sectionsCompleted: 12, sectionsTotal: 18, daysToCompleteBy: 12, pccAssessmentId: '4860312', assessmentId: 'mds_stamper_01' },
        { patientId: byName('Clasper').patientId,  patientExternalId: byName('Clasper').patientExternalId,  patientName: byName('Clasper').patientName,  status: 'In Progress', description: 'Admission + 5-Day PPS', ardDate: daysAgoIso(5),  sectionsCompleted: 16, sectionsTotal: 18, daysToCompleteBy: 9,  pccAssessmentId: '4860311', assessmentId: 'mds_clasper_01' },
        { patientId: byName('Hagerich').patientId, patientExternalId: byName('Hagerich').patientExternalId, patientName: byName('Hagerich').patientName, status: 'In Progress', description: 'Quarterly',              ardDate: daysAgoIso(12), sectionsCompleted: 15, sectionsTotal: 18, daysToCompleteBy: 2,  pccAssessmentId: '4860305', assessmentId: 'mds_hagerich_01' },
        { patientId: byName('Saffle').patientId,   patientExternalId: byName('Saffle').patientExternalId,   patientName: byName('Saffle').patientName,   status: 'In Progress', description: 'Annual + 5-Day PPS',    ardDate: daysAgoIso(16), sectionsCompleted: 10, sectionsTotal: 18, daysToCompleteBy: -2, pccAssessmentId: '4860320', assessmentId: 'mds_saffle_01' },
      ],
      completedRecently: {
        count: 3,
        windowDays: 7,
        patients: [
          { patientId: byName('Coble').patientId,   patientExternalId: byName('Coble').patientExternalId,   patientName: byName('Coble').patientName,   description: 'Quarterly',      ardDate: daysAgoIso(10), lockedAt: hoursAgoIso(18),  pccAssessmentId: '4860301', assessmentId: 'mds_coble_done' },
          { patientId: byName('Watkins').patientId, patientExternalId: byName('Watkins').patientExternalId, patientName: byName('Watkins').patientName, description: 'Entry',          ardDate: daysAgoIso(9),  lockedAt: hoursAgoIso(40),  pccAssessmentId: '4860302', assessmentId: 'mds_watkins_done' },
          { patientId: byName('Nugent').patientId,  patientExternalId: byName('Nugent').patientExternalId,  patientName: byName('Nugent').patientName,  description: 'Annual',         ardDate: daysAgoIso(13), lockedAt: hoursAgoIso(96),  pccAssessmentId: '4860303', assessmentId: 'mds_nugent_done' },
        ],
      },
    },
    carePlansToOpen: {
      count: 2,
      patients: [
        { patientId: byName('Clark').patientId,   patientExternalId: byName('Clark').patientExternalId,   patientName: byName('Clark').patientName,   admitDate: new Date().toISOString().slice(0, 10),                        hoursSinceAdmit: 8 },
        { patientId: byName('Clasper').patientId, patientExternalId: byName('Clasper').patientExternalId, patientName: byName('Clasper').patientName, admitDate: new Date(Date.now() - 2 * 86400000).toISOString().slice(0, 10), hoursSinceAdmit: 52 },
      ],
      completedRecently: {
        count: 2,
        windowDays: 7,
        patients: [
          { patientId: byName('Ashley').patientId,  patientExternalId: byName('Ashley').patientExternalId,  patientName: byName('Ashley').patientName,  admitDate: daysAgoIso(5), carePlanOpenedAt: hoursAgoIso(30),  pccCarePlanId: 'cp_ashley_01' },
          { patientId: byName('Hoffie').patientId,  patientExternalId: byName('Hoffie').patientExternalId,  patientName: byName('Hoffie').patientName,  admitDate: daysAgoIso(6), carePlanOpenedAt: hoursAgoIso(62),  pccCarePlanId: 'cp_hoffie_01' },
        ],
      },
    },
    carePlansToReview: {
      count: 5,
      patients: [
        { patientId: byName('Hagerich').patientId,  patientExternalId: byName('Hagerich').patientExternalId,  patientName: byName('Hagerich').patientName,  expectedDate: new Date(Date.now() - 86400000).toISOString().slice(0, 10),     state: 'overdue',     pccReviewId: null,                pccCarePlanId: 'cp_hagerich_01' },
        { patientId: byName('Packoski').patientId,  patientExternalId: byName('Packoski').patientExternalId,  patientName: byName('Packoski').patientName,  expectedDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10),     state: 'expected',    pccReviewId: null,                pccCarePlanId: 'cp_packoski_01' },
        { patientId: byName('Henstreet').patientId, patientExternalId: byName('Henstreet').patientExternalId, patientName: byName('Henstreet').patientName, expectedDate: new Date(Date.now() + 2 * 86400000).toISOString().slice(0, 10), state: 'in_progress', pccReviewId: 'rev_henstreet_01',  pccCarePlanId: 'cp_henstreet_01' },
        { patientId: byName('McCants').patientId,   patientExternalId: byName('McCants').patientExternalId,   patientName: byName('McCants').patientName,   expectedDate: new Date(Date.now() + 4 * 86400000).toISOString().slice(0, 10), state: 'expected',    pccReviewId: null,                pccCarePlanId: 'cp_mccants_01' },
        { patientId: byName('Stamper').patientId,   patientExternalId: byName('Stamper').patientExternalId,   patientName: byName('Stamper').patientName,   expectedDate: new Date(Date.now() + 5 * 86400000).toISOString().slice(0, 10), state: 'expected',    pccReviewId: null,                pccCarePlanId: 'cp_stamper_01' },
      ],
      completedRecently: {
        count: 4,
        windowDays: 7,
        patients: [
          { patientId: byName('Smith').patientId,    patientExternalId: byName('Smith').patientExternalId,    patientName: byName('Smith').patientName,    reviewCompletedAt: hoursAgoIso(22),  pccReviewId: 'rev_smith_01',    pccCarePlanId: 'cp_smith_01' },
          { patientId: byName('Bruton').patientId,   patientExternalId: byName('Bruton').patientExternalId,   patientName: byName('Bruton').patientName,   reviewCompletedAt: hoursAgoIso(54),  pccReviewId: 'rev_bruton_01',   pccCarePlanId: 'cp_bruton_01' },
          { patientId: byName('Rogers').patientId,   patientExternalId: byName('Rogers').patientExternalId,   patientName: byName('Rogers').patientName,   reviewCompletedAt: hoursAgoIso(76),  pccReviewId: 'rev_rogers_01',   pccCarePlanId: 'cp_rogers_01' },
          { patientId: byName('Schmalzriedt').patientId, patientExternalId: byName('Schmalzriedt').patientExternalId, patientName: byName('Schmalzriedt').patientName, reviewCompletedAt: hoursAgoIso(120), pccReviewId: 'rev_schmalz_01', pccCarePlanId: 'cp_schmalz_01' },
        ],
      },
    },
    queriesOpen: {
      count: 8,
      pending: 3,
      sent: 5,
      completedRecently: {
        count: 4,
        windowDays: 7,
        patients: [
          { patientId: byName('Nugent').patientId,    patientExternalId: byName('Nugent').patientExternalId,    patientName: byName('Nugent').patientName,    queryId: 'q_nugent_done_01', itemCode: 'I2100', signedAt: hoursAgoIso(28) },
          { patientId: byName('Bruton').patientId,    patientExternalId: byName('Bruton').patientExternalId,    patientName: byName('Bruton').patientName,    queryId: 'q_bruton_done_01', itemCode: 'I5100', signedAt: hoursAgoIso(50) },
          { patientId: byName('Smith').patientId,     patientExternalId: byName('Smith').patientExternalId,     patientName: byName('Smith').patientName,     queryId: 'q_smith_done_01',  itemCode: 'J1550', signedAt: hoursAgoIso(78) },
          { patientId: byName('Clappor').patientId,   patientExternalId: byName('Clappor').patientExternalId,   patientName: byName('Clappor').patientName,   queryId: 'q_clappor_done_01', itemCode: 'I0020', signedAt: hoursAgoIso(130) },
        ],
      },
    },
    certs: {
      count: 12,
      needsToSend: { count: 4, upcomingCount: 2, overdueCount: 1 },
      awaitingSignature: { count: 8, overdueCount: 2 },
      overdueList: [
        { certId: 'cert_ashley_01',  patientId: byName('Ashley').patientId,  patientExternalId: byName('Ashley').patientExternalId,  patientName: byName('Ashley').patientName,  type: 'day_14_recert', bucket: 'awaiting_signature', dueDate: new Date(Date.now() - 4 * 86400000).toISOString().slice(0, 10), daysOverdue: 4 },
        { certId: 'cert_hoffie_01',  patientId: byName('Hoffie').patientId,  patientExternalId: byName('Hoffie').patientExternalId,  patientName: byName('Hoffie').patientName,  type: 'initial',       bucket: 'awaiting_signature', dueDate: new Date(Date.now() - 2 * 86400000).toISOString().slice(0, 10), daysOverdue: 2 },
        { certId: 'cert_rogers_01',  patientId: byName('Rogers').patientId,  patientExternalId: byName('Rogers').patientExternalId,  patientName: byName('Rogers').patientName,  type: 'day_14_recert', bucket: 'needs_to_send',      dueDate: new Date(Date.now() - 1 * 86400000).toISOString().slice(0, 10), daysOverdue: 1 },
      ],
      completedRecently: {
        count: 5,
        windowDays: 7,
        patients: [
          { certId: 'cert_stamper_done_01',  patientId: byName('Stamper').patientId,  patientExternalId: byName('Stamper').patientExternalId,  patientName: byName('Stamper').patientName,  type: 'day_14_recert', signedAt: hoursAgoIso(12) },
          { certId: 'cert_mccants_done_01',  patientId: byName('McCants').patientId,  patientExternalId: byName('McCants').patientExternalId,  patientName: byName('McCants').patientName,  type: 'initial',       signedAt: hoursAgoIso(36) },
          { certId: 'cert_watkins_done_01',  patientId: byName('Watkins').patientId,  patientExternalId: byName('Watkins').patientExternalId,  patientName: byName('Watkins').patientName,  type: 'day_30_recert', signedAt: hoursAgoIso(60) },
          { certId: 'cert_clark_done_01',    patientId: byName('Clark').patientId,    patientExternalId: byName('Clark').patientExternalId,    patientName: byName('Clark').patientName,    type: 'initial',       signedAt: hoursAgoIso(96) },
          { certId: 'cert_packoski_done_01', patientId: byName('Packoski').patientId, patientExternalId: byName('Packoski').patientExternalId, patientName: byName('Packoski').patientName, type: 'day_14_recert', signedAt: hoursAgoIso(140) },
        ],
      },
    },
    interviewsOwed: {
      count: 6,
      distinctPatientCount: 5,
      byType: { bims: 3, phq: 2, gg: 5, pain: 0 },
      patients: [
        { patientId: byName('Stamper').patientId,  patientExternalId: byName('Stamper').patientExternalId,  patientName: byName('Stamper').patientName,  dueType: 'gg',   dueDate: new Date(Date.now() + 2 * 86400000).toISOString().slice(0, 10), status: 'in_progress', mdsDescription: 'Significant Change',     pccAssessmentId: '4860312', assessmentId: 'mds_stamper_01', assessmentIds: ['mds_stamper_01'] },
        { patientId: byName('Clasper').patientId,  patientExternalId: byName('Clasper').patientExternalId,  patientName: byName('Clasper').patientName,  dueType: 'gg',   dueDate: new Date(Date.now() + 1 * 86400000).toISOString().slice(0, 10), status: 'in_progress', mdsDescription: 'Admission + 5-Day PPS', pccAssessmentId: '4860311', assessmentId: 'mds_clasper_01', assessmentIds: ['mds_clasper_01', 'mds_clasper_02'] },
        { patientId: byName('Saffle').patientId,   patientExternalId: byName('Saffle').patientExternalId,   patientName: byName('Saffle').patientName,   dueType: 'gg',   dueDate: new Date(Date.now() - 1 * 86400000).toISOString().slice(0, 10), status: 'not_open',    mdsDescription: 'Annual + 5-Day PPS',    pccAssessmentId: '4860320', assessmentId: 'mds_saffle_01', assessmentIds: ['mds_saffle_01'] },
        { patientId: byName('Hagerich').patientId, patientExternalId: byName('Hagerich').patientExternalId, patientName: byName('Hagerich').patientName, dueType: 'bims', dueDate: new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10), status: 'not_open',    mdsDescription: 'Quarterly',              pccAssessmentId: '4860305', assessmentId: 'mds_hagerich_01', assessmentIds: ['mds_hagerich_01'] },
        { patientId: byName('Nugent').patientId,   patientExternalId: byName('Nugent').patientExternalId,   patientName: byName('Nugent').patientName,   dueType: 'phq',  dueDate: new Date(Date.now() + 4 * 86400000).toISOString().slice(0, 10), status: 'not_open',    mdsDescription: '5-Day PPS',              pccAssessmentId: '4860318', assessmentId: 'mds_nugent_01', assessmentIds: ['mds_nugent_01'] },
      ],
      completedRecently: {
        count: 7,
        windowDays: 7,
        patients: [
          { patientId: byName('Coble').patientId,   patientExternalId: byName('Coble').patientExternalId,   patientName: byName('Coble').patientName,   dueType: 'gg',   mdsDescription: 'Quarterly',  completedAt: hoursAgoIso(18),  pccAssessmentId: '4860301', assessmentId: 'mds_coble_done' },
          { patientId: byName('Coble').patientId,   patientExternalId: byName('Coble').patientExternalId,   patientName: byName('Coble').patientName,   dueType: 'bims', mdsDescription: 'Quarterly',  completedAt: hoursAgoIso(18),  pccAssessmentId: '4860301', assessmentId: 'mds_coble_done' },
          { patientId: byName('Nugent').patientId,  patientExternalId: byName('Nugent').patientExternalId,  patientName: byName('Nugent').patientName,  dueType: 'gg',   mdsDescription: 'Annual',     completedAt: hoursAgoIso(96),  pccAssessmentId: '4860303', assessmentId: 'mds_nugent_done' },
          { patientId: byName('Nugent').patientId,  patientExternalId: byName('Nugent').patientExternalId,  patientName: byName('Nugent').patientName,  dueType: 'phq',  mdsDescription: 'Annual',     completedAt: hoursAgoIso(96),  pccAssessmentId: '4860303', assessmentId: 'mds_nugent_done' },
          { patientId: byName('Watkins').patientId, patientExternalId: byName('Watkins').patientExternalId, patientName: byName('Watkins').patientName, dueType: 'gg',   mdsDescription: 'Entry',      completedAt: hoursAgoIso(40),  pccAssessmentId: '4860302', assessmentId: 'mds_watkins_done' },
          { patientId: byName('Ashley').patientId,  patientExternalId: byName('Ashley').patientExternalId,  patientName: byName('Ashley').patientName,  dueType: 'bims', mdsDescription: '5-Day PPS',  completedAt: hoursAgoIso(54),  pccAssessmentId: '4860304', assessmentId: 'mds_ashley_done' },
          { patientId: byName('Hoffie').patientId,  patientExternalId: byName('Hoffie').patientExternalId,  patientName: byName('Hoffie').patientName,  dueType: 'gg',   mdsDescription: 'Quarterly',  completedAt: hoursAgoIso(140), pccAssessmentId: '4860306', assessmentId: 'mds_hoffie_done' },
        ],
      },
    },
    skilledMCR: {
      count: 4,
      patients: [
        byName('Clark'),
        byName('Stamper'),
        byName('Saffle'),
        byName('Clappor'),
      ].map(p => ({ patientId: p.patientId, patientExternalId: p.patientExternalId, patientName: p.patientName })),
    },
    skilledManagedCare: {
      count: 3,
      patients: [
        byName('Packoski'),
        byName('Henstreet'),
        byName('Bruton'),
      ].map(p => ({ patientId: p.patientId, patientExternalId: p.patientExternalId, patientName: p.patientName })),
    },
  };
}
