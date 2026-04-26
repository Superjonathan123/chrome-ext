// Build-time check: every <button> in content/ must have data-track="..."
// or be replaced with <TrackedButton track="...">. Same for clickable JSX.
//
// Exemption: a comment containing the marker NO_TRACK on the same line as
// the <button> opening tag, or on the line directly above it.
//
// Limitation: only matches single-line opening tags. Multi-line opens are
// rare in this codebase; accept the false negatives.

import { readdirSync, readFileSync, statSync } from 'fs';
import { join, extname } from 'path';

const ROOTS = ['content'];
const EXTS = new Set(['.js', '.jsx', '.html']);
const SKIP_DIRS = new Set(['node_modules', 'dist', 'dist-prod', '.worktrees']);

function walk(dir, files = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return files;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, files);
    else if (EXTS.has(extname(entry))) files.push(full);
  }
  return files;
}

const failures = [];

for (const root of ROOTS) {
  for (const file of walk(root)) {
    const text = readFileSync(file, 'utf8');
    const lines = text.split('\n');

    lines.forEach((line, idx) => {
      const isButtonOpen = /<button(\s|>)/.test(line);
      if (isButtonOpen) {
        const isTracked =
          /\bdata-track\s*=/.test(line) ||
          /<TrackedButton(\s|>)/.test(line);
        const sameLineMarker = line.includes('NO_TRACK');
        const aboveMarker = idx > 0 && lines[idx - 1].includes('NO_TRACK');
        if (!isTracked && !sameLineMarker && !aboveMarker) {
          failures.push(`${file}:${idx + 1}  ${line.trim().slice(0, 120)}`);
        }
      }

      const isWrapperOpen = /<TrackedButton(\s|>)/.test(line);
      if (isWrapperOpen) {
        const hasTrack = /\btrack\s*=/.test(line);
        if (!hasTrack) {
          failures.push(
            `${file}:${idx + 1}  TrackedButton without track= prop: ${line.trim().slice(0, 120)}`
          );
        }
      }
    });
  }
}

if (failures.length) {
  console.error(`\n[check-tracking] ${failures.length} un-tracked button(s):\n`);
  for (const f of failures) console.error('  ' + f);
  console.error(
    '\nFix by adding data-track="event_name" or replacing with <TrackedButton track="event_name">.\n' +
    'Use the // NO_TRACK marker (same line or line above) if a button is intentionally not tracked.\n'
  );
  process.exit(1);
}

console.log('[check-tracking] OK');
