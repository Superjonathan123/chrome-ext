// content/modules/care-plan-stamp/__tests__/pcc-verify.test.js
//
// Read-back verification of what PCC ACTUALLY attached to a care plan.
//
// Every assertion here runs against `demo/clinical-care-plan-detail.html` — a real
// captured PCC care-plan detail page — so the parser is pinned to PCC's true markup
// rather than to our idea of it. The page's own row-action JS is the contract:
//
//   editNeed(genneedid, needid)                              ← a focus
//   editGoal(goalid, stdneedid, genneedid, ...)              ← 3rd arg = parent focus
//   editIntervention(interid, stdinterid, stdneedid, genneedid, ...)  ← 4th arg = parent focus
//
// A focus whose genneedid EQUALS its needid was added custom; when they differ it came
// from the library (PCC re-keys library focuses on save). That distinction is PCC's own,
// which is why we read it back instead of trusting our routing.
import { describe, it, expect, vi, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parsePlanPage, countsByFocus, findFocusByText, scanCarePlan, verifyStampedFocus } from '../pcc-verify.js';

// vitest runs from the repo root; jsdom's import.meta.url isn't a file: URL.
const CAPTURE = readFileSync(
  resolve(process.cwd(), 'demo/clinical-care-plan-detail.html'),
  'utf8',
);

describe('parsePlanPage', () => {
  it('reads every focus with its committed id, need id and library/custom kind', () => {
    const { focuses } = parsePlanPage(CAPTURE);
    const byId = Object.fromEntries(focuses.map((f) => [f.genNeedId, f]));

    expect(Object.keys(byId).sort()).toEqual(
      ['595385', '595387', '595423', '595543', '853610'],
    );
    // Library adds get re-keyed by PCC on save, so gen !== need. Custom adds don't.
    expect(byId['595385']).toMatchObject({ needId: '591321', kind: 'library' });
    expect(byId['595423']).toMatchObject({ needId: '591311', kind: 'library' });
    expect(byId['595543']).toMatchObject({ needId: '591302', kind: 'library' });
    expect(byId['595387']).toMatchObject({ needId: '595387', kind: 'custom' });
    expect(byId['853610']).toMatchObject({ needId: '853610', kind: 'custom' });
  });
});

describe('countsByFocus', () => {
  it('counts the goals and interventions actually hanging off each focus', () => {
    const counts = countsByFocus(parsePlanPage(CAPTURE));

    expect(counts).toEqual({
      '595385': { goals: 3, interventions: 10 },
      '595387': { goals: 1, interventions: 1 },
      '595423': { goals: 2, interventions: 7 },
      '595543': { goals: 2, interventions: 6 },
      '853610': { goals: 1, interventions: 15 },
    });
  });

  it('attributes every goal and intervention on the page to some focus', () => {
    const parsed = parsePlanPage(CAPTURE);
    const counts = countsByFocus(parsed);
    const summed = Object.values(counts).reduce(
      (a, c) => ({ goals: a.goals + c.goals, interventions: a.interventions + c.interventions }),
      { goals: 0, interventions: 0 },
    );

    // No orphans: if PCC ever changes an argument position, these diverge and
    // the counter starts under-reporting — which would silently read as data loss.
    expect(summed.goals).toBe(parsed.goals.length);
    expect(summed.interventions).toBe(parsed.interventions.length);
    expect(parsed.goals.length).toBe(9);
    expect(parsed.interventions.length).toBe(39);
  });
});

describe('rows this extension wrote itself', () => {
  // The captured page above contains only rows PCC's own UI created, so every
  // std id in it is a real number. Our custom-add path sends ESOLstdneedid,
  // ESOLstdgoalid and ESOLstdinterid as '-1' (pcc-stamp.js) because there IS no
  // library item behind a custom row — and PCC echoes that back into the row
  // action. A parser that demands digits in those slots cannot see any row this
  // extension wrote, reports 0 attached, and the caller "repairs" a stamp that
  // in fact landed — duplicating the nurse's whole focus.
  //
  // Only the ids we actually consume (the row id and its parent focus) are ours
  // to require; the std slots are positional padding we must step over, whatever
  // sentinel PCC puts there.
  const wrap = (rows) => `<html><body><table>${rows}</table></body></html>`;
  const customPlan = wrap(
    '<tr><td><a href="javascript:editNeed(620074,620074)">edit</a></td>' +
    '<td><span class="text1">Falls risk r/t weakness</span></td></tr>' +
    '<tr><td><a href="javascript:editGoal(1455180,-1,620074,969700,-1)">g</a></td></tr>' +
    '<tr><td><a href="javascript:editIntervention(2612345,-1,-1,620074,2612345)">i</a></td></tr>' +
    '<tr><td><a href="javascript:editIntervention(2612346,-1,-1,620074,2612346)">i</a></td></tr>',
  );

  it('counts a custom goal and intervention whose std ids are the -1 sentinel', () => {
    const counts = countsByFocus(parsePlanPage(customPlan));

    expect(counts).toEqual({ '620074': { goals: 1, interventions: 2 } });
  });

  it('still attributes them to the right focus when a plan mixes custom and library rows', () => {
    const mixed = wrap(
      '<tr><td><a href="javascript:editNeed(620074,620074)">e</a></td>' +
      '<td><span class="text1">Falls risk</span></td></tr>' +
      '<tr><td><a href="javascript:editNeed(595423,591311)">e</a></td>' +
      '<td><span class="text1">Self-care deficit</span></td></tr>' +
      '<tr><td><a href="javascript:editGoal(1455180,-1,620074,969700,-1)">g</a></td></tr>' +
      '<tr><td><a href="javascript:editGoal(1455170,1781,595423,969686,3561)">g</a></td></tr>' +
      '<tr><td><a href="javascript:editIntervention(2612345,-1,-1,620074,2612345)">i</a></td></tr>' +
      '<tr><td><a href="javascript:editIntervention(2520751,18454,1791,595423,2520751)">i</a></td></tr>',
    );

    expect(countsByFocus(parsePlanPage(mixed))).toEqual({
      '620074': { goals: 1, interventions: 1 },
      '595423': { goals: 1, interventions: 1 },
    });
  });

  it('reports a stamp that landed as complete, so nothing gets re-sent', async () => {
    global.fetch = vi.fn(async (url) => ({
      ok: true, status: 200, url: String(url),
      text: async () => (Number(String(url).match(/ESOLrow=(\d+)/)[1]) === 1 ? customPlan : ''),
    }));

    const v = await verifyStampedFocus({
      patientId: '840072',
      focusText: 'Falls risk r/t weakness',
      requested: { goals: 1, interventions: 2 },
    });
    delete global.fetch;

    expect(v).toMatchObject({
      found: true, goalsAttached: 1, interventionsAttached: 2, complete: true,
    });
  });

  it('flags itself blind when the page renders rows it could not attribute', () => {
    // The shape that caused the incident: a row the parser can't read at all.
    // Whatever PCC changes next, an unattributed row means a count of zero is
    // the parser's failure, not the chart's.
    const unreadable = wrap(
      '<tr><td><a href="javascript:editNeed(620074,620074)">e</a></td>' +
      '<td><span class="text1">Falls risk</span></td></tr>' +
      '<tr><td><a href="javascript:editGoal(SOMETHING_NEW,-1,620074)">g</a></td></tr>',
    );
    const parsed = parsePlanPage(unreadable);

    expect(parsed.goals).toHaveLength(0);
    expect(parsed.unparsed.goals).toBe(1);
    expect(parsed.blind).toBe(true);
  });

  it('is not blind on the real captured page, or on rows we wrote', () => {
    // Guard on the guard: if this ever trips on legible markup, verification
    // goes quiet everywhere and the read-back stops being worth anything.
    expect(parsePlanPage(CAPTURE).blind).toBe(false);
    expect(parsePlanPage(customPlan).blind).toBe(false);
  });

  it('does not mistake the page\'s own function declarations for rows', () => {
    const decls = wrap(
      '<script>function editGoal(goalid, stdneedid, genneedid, pngoalid, stdgoalid) {}' +
      'function editIntervention(interid, stdinterid, stdneedid, genneedid, x) {}</script>',
    );
    const parsed = parsePlanPage(decls);

    expect(parsed.goals).toEqual([]);
    expect(parsed.interventions).toEqual([]);
  });
});

describe('findFocusByText', () => {
  // PCC's save response hands back an id that isn't always the one holding the
  // focus on the plan (pcc-discover.js:314 calls it a phantom). The text we just
  // wrote IS reliable, so it's the key we look up by.
  it('resolves the committed focus id from the focus statement we wrote', () => {
    const { focuses } = parsePlanPage(CAPTURE);

    const hit = findFocusByText(
      focuses,
      "Self-care deficit r/t weakness, morbid obesity, Alzheimer's dementia, depression.",
    );

    expect(hit).toMatchObject({ genNeedId: '595423', needId: '591311' });
  });

  it('ignores whitespace and case differences in the statement', () => {
    const { focuses } = parsePlanPage(CAPTURE);

    const hit = findFocusByText(focuses, '  self-care DEFICIT r/t weakness,   morbid obesity, ' +
      "Alzheimer's dementia, depression.  ");

    expect(hit?.genNeedId).toBe('595423');
  });

  it('returns null when no focus on the plan carries that text', () => {
    const { focuses } = parsePlanPage(CAPTURE);

    expect(findFocusByText(focuses, 'Nutrition deficit r/t poor intake')).toBeNull();
  });
});

describe('scanCarePlan', () => {
  const focusRow = (gen, need, text) =>
    `<tr><td><a href="javascript:editNeed(${gen},${need})">edit</a></td>` +
    `<td><span class="text1">${text}</span></td></tr>`;

  afterEach(() => { delete global.fetch; });

  it('walks every page and merges what it finds, stopping when PCC repeats itself', async () => {
    const wrap = (rows) => `<html><body><table>${rows}</table></body></html>`;
    const pages = {
      1: wrap(focusRow(100, 90, 'Falls risk') + '<tr><td><a href="javascript:editGoal(11,7,100,1,2)">g</a></td></tr>'),
      6: wrap(focusRow(200, 200, 'Pain') +
         '<tr><td><a href="javascript:editIntervention(21,8,7,200,21)">i</a>' +
         '<a href="javascript:editIntervention(22,8,7,200,22)">i</a></td></tr>'),
      // PCC clamps past the end and re-serves the last page — that's the stop signal.
      11: wrap(focusRow(200, 200, 'Pain')),
    };
    const urls = [];
    global.fetch = vi.fn(async (url) => {
      urls.push(String(url));
      const row = Number(String(url).match(/ESOLrow=(\d+)/)[1]);
      return { ok: true, status: 200, url: String(url), text: async () => pages[row] ?? '' };
    });

    const scan = await scanCarePlan('840072');

    expect(scan.counts).toEqual({
      '100': { goals: 1, interventions: 0 },
      '200': { goals: 0, interventions: 2 },
    });
    expect(scan.pages).toBe(3);
    expect(urls).toHaveLength(3);
    expect(urls[0]).toContain('ESOLclientid=840072');
    expect(urls[0]).toContain('showresolved=N');
  });

  it('surfaces an expired PCC session rather than reporting an empty plan', async () => {
    global.fetch = vi.fn(async (url) => ({
      ok: true, status: 200, url: String(url),
      text: async () => '<html><title>Login</title></html>',
    }));

    // An empty scan would read as "nothing attached" and wrongly accuse PCC of
    // dropping the nurse's work, so this has to fail loudly.
    await expect(scanCarePlan('840072')).rejects.toThrow(/session expired/i);
  });
});

describe('verifyStampedFocus', () => {
  // The <table> wrapper matters: the HTML parser discards a bare <tr>, and the
  // focus statement is read via the row it sits in.
  const plan = (rows) => `<html><body><table>${rows}</table></body></html>`;
  const focusRow = (gen, need, text) =>
    `<tr><td><a href="javascript:editNeed(${gen},${need})">edit</a></td>` +
    `<td><span class="text1">${text}</span></td></tr>`;

  function servePlan(html) {
    global.fetch = vi.fn(async (url) => {
      const row = Number(String(url).match(/ESOLrow=(\d+)/)[1]);
      return { ok: true, status: 200, url: String(url), text: async () => (row === 1 ? html : '') };
    });
  }

  afterEach(() => { delete global.fetch; });

  it('reports the shortfall when PCC kept the focus but dropped its goals', async () => {
    // The exact failure a nurse reported: focus on the chart, goals and
    // interventions missing, and the extension previously called this success.
    servePlan(plan(focusRow(620074, 620064, 'Falls risk r/t weakness')));

    const v = await verifyStampedFocus({
      patientId: '840072',
      focusText: 'Falls risk r/t weakness',
      requested: { goals: 2, interventions: 5 },
    });

    expect(v.found).toBe(true);
    expect(v.focusId).toBe('620074');
    expect(v.goalsAttached).toBe(0);
    expect(v.interventionsAttached).toBe(0);
    expect(v.complete).toBe(false);
  });

  it('reports complete when everything the nurse approved actually landed', async () => {
    servePlan(plan(
      focusRow(620074, 620064, 'Falls risk r/t weakness') +
      '<a href="javascript:editGoal(1,7,620074,1,2)">g</a>' +
      '<a href="javascript:editIntervention(9,8,7,620074,9)">i</a>',
    ));

    const v = await verifyStampedFocus({
      patientId: '840072',
      focusText: 'Falls risk r/t weakness',
      requested: { goals: 1, interventions: 1 },
    });

    expect(v).toMatchObject({
      found: true, complete: true, goalsAttached: 1, interventionsAttached: 1, route: 'library',
    });
  });

  it('prefers the id on the plan over the phantom id from the save response', async () => {
    servePlan(plan(focusRow(620074, 620064, 'Falls risk r/t weakness')));

    const v = await verifyStampedFocus({
      patientId: '840072',
      focusText: 'Falls risk r/t weakness',
      requested: { goals: 0, interventions: 0 },
      saveResponseFocusId: '620064', // the draft PCC retired on save
    });

    expect(v.focusId).toBe('620074');
    expect(v.idSource).toBe('plan_lookup');
    expect(v.idMatchedSaveResponse).toBe(false);
  });

  it('reports found:false when the focus never made it onto the plan', async () => {
    servePlan(plan(focusRow(1, 1, 'Some other focus')));

    const v = await verifyStampedFocus({
      patientId: '840072',
      focusText: 'Falls risk r/t weakness',
      requested: { goals: 1, interventions: 1 },
    });

    expect(v).toMatchObject({ found: false, focusId: null, complete: false });
  });
});
