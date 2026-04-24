import { useState, useEffect, useCallback } from 'preact/hooks';

const STORAGE_KEY = 'super:planner:todos';
const SEED_KEY = 'super:planner:todos:seeded';

// Prefer chrome.storage.sync (cross-device); fall back to localStorage so the
// demo and non-extension contexts still work. Writes emit a synthetic storage
// event so in-page subscribers update.
const useChromeSync = typeof chrome !== 'undefined' && !!chrome?.storage?.sync;

// Demo seed — only applied once in localStorage-fallback context (the demo).
// In the real extension (chrome.storage.sync), nothing is seeded.
function todayIso() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function tomorrowIso() {
  const d = new Date(); d.setDate(d.getDate() + 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function demoSeed() {
  const t = todayIso();
  const tm = tomorrowIso();
  const now = new Date().toISOString();
  return [
    { id: 'seed_1', text: 'Call Dr. Nguyen re: Clark T setup in-house',   dueDate: t,  urgent: true,  completedAt: null, createdAt: now },
    { id: 'seed_2', text: 'Coble cert — call Dr. Patel (32d overdue)',     dueDate: t,  urgent: true,  completedAt: null, createdAt: now },
    { id: 'seed_3', text: 'Order pain interview for today’s infusion',     dueDate: t,  urgent: false, completedAt: null, createdAt: now },
    { id: 'seed_4', text: 'Stamp Hagerich care plan w/ DON',               dueDate: t,  urgent: false, completedAt: null, createdAt: now },
    { id: 'seed_5', text: 'Check GG for Simmons before ARD passes',        dueDate: tm, urgent: true,  completedAt: null, createdAt: now },
    { id: 'seed_6', text: 'Email Section Q discharge planning — Watkins',  dueDate: null, urgent: false, completedAt: null, createdAt: now },
  ];
}

function maybeSeed() {
  if (useChromeSync) return false;
  try {
    if (localStorage.getItem(SEED_KEY)) return false;
    if (localStorage.getItem(STORAGE_KEY)) { localStorage.setItem(SEED_KEY, '1'); return false; }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoSeed()));
    localStorage.setItem(SEED_KEY, '1');
    return true;
  } catch {
    return false;
  }
}

function genId() {
  return `todo_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function readAll() {
  if (useChromeSync) {
    return new Promise((resolve) => {
      chrome.storage.sync.get([STORAGE_KEY], (res) => {
        resolve(Array.isArray(res[STORAGE_KEY]) ? res[STORAGE_KEY] : []);
      });
    });
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Promise.resolve(Array.isArray(parsed) ? parsed : []);
  } catch {
    return Promise.resolve([]);
  }
}

function writeAll(todos) {
  if (useChromeSync) {
    return new Promise((resolve) => {
      chrome.storage.sync.set({ [STORAGE_KEY]: todos }, resolve);
    });
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    window.dispatchEvent(new CustomEvent('super:todos-changed', { detail: todos }));
  } catch {
    // Quota or serialization issue — silently drop.
  }
  return Promise.resolve();
}

/**
 * useTodos — chrome.storage.sync-backed planner to-do list.
 *
 * Schema: { id, text, dueDate (YYYY-MM-DD | null), urgent (bool), completedAt (ISO | null), createdAt (ISO) }
 */
export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    maybeSeed();
    readAll().then((list) => {
      if (!cancelled) {
        setTodos(list);
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, []);

  // React to changes made elsewhere (other extension tabs/popup, or same-window
  // writes when using the localStorage fallback).
  useEffect(() => {
    if (useChromeSync) {
      const handler = (changes, area) => {
        if (area !== 'sync' || !changes[STORAGE_KEY]) return;
        const next = changes[STORAGE_KEY].newValue;
        setTodos(Array.isArray(next) ? next : []);
      };
      chrome.storage.onChanged.addListener(handler);
      return () => chrome.storage.onChanged.removeListener(handler);
    }
    const handler = (e) => {
      if (e.detail && Array.isArray(e.detail)) setTodos(e.detail);
    };
    window.addEventListener('super:todos-changed', handler);
    return () => window.removeEventListener('super:todos-changed', handler);
  }, []);

  const persist = useCallback(async (next) => {
    setTodos(next);
    await writeAll(next);
  }, []);

  const addTodo = useCallback(async ({ text, dueDate = null, urgent = false }) => {
    if (!text?.trim()) return;
    const t = {
      id: genId(),
      text: text.trim(),
      dueDate,
      urgent,
      completedAt: null,
      createdAt: new Date().toISOString(),
    };
    await persist([t, ...todos]);
  }, [todos, persist]);

  const toggleTodo = useCallback(async (id) => {
    const next = todos.map(t =>
      t.id === id
        ? { ...t, completedAt: t.completedAt ? null : new Date().toISOString() }
        : t
    );
    await persist(next);
  }, [todos, persist]);

  const editTodo = useCallback(async (id, patch) => {
    const next = todos.map(t => t.id === id ? { ...t, ...patch } : t);
    await persist(next);
  }, [todos, persist]);

  const deleteTodo = useCallback(async (id) => {
    await persist(todos.filter(t => t.id !== id));
  }, [todos, persist]);

  return { todos, loading, addTodo, toggleTodo, editTodo, deleteTodo };
}

// Grouping helpers (exported for testing + reuse in TodoList)

function toIsoDate(d) {
  const yr = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const dy = String(d.getDate()).padStart(2, '0');
  return `${yr}-${mo}-${dy}`;
}

export function groupTodos(todos) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
  const endOfWeek = new Date(today); endOfWeek.setDate(today.getDate() + 7);

  const todayIso = toIsoDate(today);
  const tomorrowIso = toIsoDate(tomorrow);
  const endIso = toIsoDate(endOfWeek);

  const groups = {
    today: [],
    tomorrow: [],
    later: [],
    done: [],
  };

  const recentlyDoneCutoff = new Date();
  recentlyDoneCutoff.setDate(recentlyDoneCutoff.getDate() - 3);

  for (const t of todos) {
    if (t.completedAt) {
      if (new Date(t.completedAt) >= recentlyDoneCutoff) groups.done.push(t);
      continue;
    }
    const due = t.dueDate;
    if (!due || due <= todayIso) groups.today.push(t);
    else if (due === tomorrowIso) groups.tomorrow.push(t);
    else if (due <= endIso) groups.later.push(t);
    else groups.later.push(t); // future-dated: stash with "later"
  }

  return groups;
}
