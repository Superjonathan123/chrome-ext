import { describe, it, expect } from 'vitest';
import {
  parseDateOnly, formatShortDate, formatMDY, addDays, todayDateOnly, daysBetween,
} from '../date-only.js';

/**
 * vitest.config.js pins TZ to America/Los_Angeles. Under UTC these assertions
 * pass with or without the local-midnight parse, so the guard only has teeth
 * west of Greenwich — which is where every customer runs.
 */
describe('parseDateOnly', () => {
  it('lands a YYYY-MM-DD string on its own calendar day', () => {
    const d = parseDateOnly('2026-08-09');
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(7); // August
    expect(d.getDate()).toBe(9);
    expect(d.getHours()).toBe(0);
  });

  it('takes the calendar day from a UTC-midnight timestamp', () => {
    expect(parseDateOnly('2026-08-09T00:00:00.000Z').getDate()).toBe(9);
  });

  it('normalizes a Date to local midnight without moving the day', () => {
    const d = parseDateOnly(new Date(2026, 7, 9, 23, 30));
    expect(d.getDate()).toBe(9);
    expect(d.getHours()).toBe(0);
  });

  it('returns null for empty and unparseable values', () => {
    expect(parseDateOnly(null)).toBeNull();
    expect(parseDateOnly('')).toBeNull();
    expect(parseDateOnly('not-a-date')).toBeNull();
  });
});

describe('formatShortDate / formatMDY', () => {
  it('formats the same calendar day the string names', () => {
    expect(formatShortDate('2026-08-09')).toBe('Aug 9');
    expect(formatShortDate('2026-01-01')).toBe('Jan 1');
    expect(formatMDY('2026-08-09')).toBe('8/9/2026');
  });

  it('passes unparseable strings through rather than printing garbage', () => {
    expect(formatShortDate('unknown')).toBe('unknown');
    expect(formatMDY('unknown')).toBe('unknown');
    expect(formatShortDate(null)).toBe('');
  });
});

describe('addDays', () => {
  it('adds whole calendar days across a DST boundary', () => {
    // DST ends 2026-11-01 in the US — a naive +14*86400000 would land Nov 14.
    const out = addDays(parseDateOnly('2026-11-01'), 14);
    expect(out.getMonth()).toBe(10); // November
    expect(out.getDate()).toBe(15);
  });

  it('rolls over month and year boundaries', () => {
    expect(addDays(parseDateOnly('2026-12-28'), 14).getFullYear()).toBe(2027);
    expect(addDays(parseDateOnly('2026-12-28'), 14).getDate()).toBe(11);
  });
});

describe('todayDateOnly / daysBetween', () => {
  it('returns today at local midnight', () => {
    const t = todayDateOnly();
    expect(t.getHours()).toBe(0);
    expect(t.getDate()).toBe(new Date().getDate());
  });

  it('counts whole days between two date-only values', () => {
    expect(daysBetween('2026-08-09', '2026-08-23')).toBe(14);
    expect(daysBetween('2026-08-23', '2026-08-09')).toBe(-14);
    expect(daysBetween('2026-08-09', '2026-08-09')).toBe(0);
    expect(daysBetween(null, '2026-08-09')).toBeNull();
  });
});
