import { describe, it, expect, beforeEach, vi } from 'vitest';

/**
 * Payload-key contract between the extension and the backend cert routes.
 *
 * Skip was dead in production from the day it shipped: the extension posted
 * { reason } while web/app/api/extension/certifications/[id]/skip/route.ts
 * destructures { skipReason }, so every click 400'd with "skipReason is
 * required". Delay had the identical mismatch. Revoke happened to be right,
 * which is exactly why nobody spotted the pattern — 2 of 3 were broken and
 * the working one made it look intentional.
 *
 * The backend names are the shared contract, not arbitrary: the WEB app's own
 * skip dialog posts skipReason too. So this side is the one that must match,
 * and these tests pin the wire format rather than the implementation.
 *
 * Mutation-checked:
 *   - revert skipCert to { reason }  -> "skip sends skipReason" fails
 *   - revert delayCert to { reason } -> "delay sends delayReason" fails
 *   - rename revoke's key            -> "revoke sends reason" fails
 */

let sent;

beforeEach(() => {
  sent = [];
  global.chrome = {
    runtime: {
      sendMessage: vi.fn(async (msg) => {
        sent.push(msg);
        return { success: true, data: {} };
      }),
    },
  };
});

const { default: _ } = { default: null };
await import('../cert-api.js');
const CertAPI = globalThis.window?.CertAPI ?? global.window?.CertAPI;

const bodyOf = (msg) => JSON.parse(msg.options.body);

describe('cert action payload keys match what the routes destructure', () => {
  it('skip sends skipReason (route 400s on anything else)', async () => {
    await CertAPI.skipCert('cert-1', 'no longer Part A');

    expect(sent).toHaveLength(1);
    expect(sent[0].endpoint).toBe('/api/extension/certifications/cert-1/skip');
    expect(bodyOf(sent[0])).toEqual({ skipReason: 'no longer Part A' });
  });

  it('delay sends delayReason', async () => {
    await CertAPI.delayCert('cert-2', 'physician on leave');

    expect(sent[0].endpoint).toBe('/api/extension/certifications/cert-2/delay');
    expect(bodyOf(sent[0])).toEqual({ delayReason: 'physician on leave' });
  });

  it('revoke sends plain reason — the one endpoint that really does want it', async () => {
    await CertAPI.revokeCert('cert-3', 'created in error');

    expect(sent[0].endpoint).toBe('/api/extension/certifications/cert-3/revoke');
    expect(bodyOf(sent[0])).toEqual({ reason: 'created in error' });
  });

  it('surfaces the server error message rather than swallowing it', async () => {
    global.chrome.runtime.sendMessage = vi.fn(async () => ({
      success: false,
      error: 'skipReason is required',
    }));

    await expect(CertAPI.skipCert('cert-1', 'x')).rejects.toThrow('skipReason is required');
  });
});
