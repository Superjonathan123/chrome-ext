import { h } from 'preact';
import { useState, useEffect, useRef, useCallback } from 'preact/hooks';

const ZOOM_LEVELS = [50, 75, 100, 125, 150, 200];
const DEFAULT_ZOOM = 100;

export function PDFViewer({
  url,
  wordBlocks = [],
  targetPage = 1,
  title = 'Document',
  documentType,
  effectiveDate,
  fileSize,
  onClose,
  openInNewTabUrl,
}) {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [currentPage, setCurrentPage] = useState(targetPage);
  const [totalPages, setTotalPages] = useState(1);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [manualRotation, setManualRotation] = useState(0);
  const [loading, setLoading] = useState(true);
  const [rendering, setRendering] = useState(false);
  const [error, setError] = useState(null);
  const [pageInputValue, setPageInputValue] = useState(String(targetPage));

  const canvasRef = useRef(null);
  const highlightCanvasRef = useRef(null);
  const scrollRef = useRef(null);
  const rotationCacheRef = useRef({});
  const rootRef = useRef(null);
  const renderIdRef = useRef(0); // prevents stale renders

  const fileSizeStr = fileSize
    ? fileSize / 1024 > 1024
      ? `${(fileSize / 1024 / 1024).toFixed(1)} MB`
      : `${(fileSize / 1024).toFixed(0)} KB`
    : '';

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
      });
    } catch { return dateStr; }
  };

  // ---- Load PDF ----
  useEffect(() => {
    if (!url) {
      setError('No document URL available');
      setLoading(false);
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        if (typeof pdfjsLib === 'undefined') throw new Error('PDF.js library not loaded');
        if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL('lib/pdf.worker.min.js');
        }

        const doc = await pdfjsLib.getDocument(url).promise;
        if (cancelled) return;

        const initPage = Math.min(targetPage, doc.numPages);
        setPdfDoc(doc);
        setTotalPages(doc.numPages);
        setCurrentPage(initPage);
        setPageInputValue(String(initPage));
        setLoading(false);
      } catch (err) {
        if (!cancelled) {
          console.error('[PDFViewer] Load failed:', err);
          setError(`Failed to load PDF: ${err.message}`);
          setLoading(false);
        }
      }
    })();

    return () => { cancelled = true; };
  }, [url]);

  // ---- Render page ----
  const renderPage = useCallback(async (pageNum) => {
    if (!pdfDoc) return;

    const canvas = canvasRef.current;
    const hlCanvas = highlightCanvasRef.current;
    const scrollEl = scrollRef.current;
    if (!canvas || !hlCanvas || !scrollEl) return;

    const myId = ++renderIdRef.current;
    const validPage = Math.max(1, Math.min(pageNum, totalPages));

    setRendering(true);

    try {
      const page = await pdfDoc.getPage(validPage);
      if (renderIdRef.current !== myId) return; // superseded

      const rotation = await detectRotation(page, validPage, rotationCacheRef, manualRotation);

      // Fit to width at 100% zoom. Scale proportionally for other zoom levels.
      const scrollWidth = scrollEl.clientWidth;
      const containerWidth = Math.max(scrollWidth - 16, 200); // 8px padding each side
      const baseViewport = page.getViewport({ scale: 1, rotation });
      const fitScale = containerWidth / baseViewport.width;
      const scale = fitScale * (zoom / 100);
      const viewport = page.getViewport({ scale, rotation });

      const ctx = canvas.getContext('2d');
      const hCtx = hlCanvas.getContext('2d');

      canvas.width = viewport.width;
      canvas.height = viewport.height;
      hlCanvas.width = viewport.width;
      hlCanvas.height = viewport.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hCtx.clearRect(0, 0, hlCanvas.width, hlCanvas.height);

      await page.render({ canvasContext: ctx, viewport }).promise;
      if (renderIdRef.current !== myId) return;

      // Draw highlights
      const pageHL = (wordBlocks || []).filter(h => h.p === validPage);
      if (pageHL.length > 0) {
        const rects = drawHighlights(hCtx, pageHL, viewport, rotation);
        if (rects.length > 0) {
          scrollToHighlight(rects, scrollEl);
        }
      }
    } catch (err) {
      console.error('[PDFViewer] Render failed:', err);
    } finally {
      if (renderIdRef.current === myId) setRendering(false);
    }
  }, [pdfDoc, totalPages, zoom, manualRotation, wordBlocks]);

  // Re-render on state changes
  useEffect(() => {
    if (pdfDoc) renderPage(currentPage);
  }, [pdfDoc, currentPage, zoom, manualRotation, renderPage]);

  // ---- Navigation ----
  const goToPage = useCallback((n) => {
    const p = Math.max(1, Math.min(n, totalPages));
    setCurrentPage(p);
    setPageInputValue(String(p));
  }, [totalPages]);

  const changeZoom = useCallback((dir) => {
    setZoom(prev => {
      const idx = ZOOM_LEVELS.indexOf(prev);
      if (idx === -1) {
        // Find nearest level
        const nearest = ZOOM_LEVELS.reduce((a, b) => Math.abs(b - prev) < Math.abs(a - prev) ? b : a);
        const ni = ZOOM_LEVELS.indexOf(nearest);
        return ZOOM_LEVELS[Math.max(0, Math.min(ni + dir, ZOOM_LEVELS.length - 1))];
      }
      return ZOOM_LEVELS[Math.max(0, Math.min(idx + dir, ZOOM_LEVELS.length - 1))];
    });
  }, []);

  const rotate = useCallback(() => {
    setManualRotation(prev => (prev + 90) % 360);
    rotationCacheRef.current = {};
  }, []);

  // ---- Keyboard shortcuts ----
  useEffect(() => {
    const handler = (e) => {
      if (!rootRef.current) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      // Only respond if modal is open
      if (!rootRef.current.closest('.super-pdf-modal')) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          setCurrentPage(p => { const n = Math.max(1, p - 1); setPageInputValue(String(n)); return n; });
          break;
        case 'ArrowRight':
          e.preventDefault();
          setCurrentPage(p => { const n = Math.min(totalPages, p + 1); setPageInputValue(String(n)); return n; });
          break;
        case '+': case '=':
          e.preventDefault();
          changeZoom(1);
          break;
        case '-':
          e.preventDefault();
          changeZoom(-1);
          break;
        case 'r': case 'R':
          e.preventDefault();
          rotate();
          break;
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [totalPages, changeZoom, rotate]);

  // ---- Page input ----
  const commitPageInput = () => {
    const n = parseInt(pageInputValue, 10);
    if (!isNaN(n) && n >= 1 && n <= totalPages) {
      goToPage(n);
    } else {
      setPageInputValue(String(currentPage));
    }
  };

  // ---- Render ----
  if (loading) {
    return (
      <div class="super-pdfv super-pdfv--center" ref={rootRef}>
        <div class="super-pdfv__loader">
          <div class="super-pdfv__loader-ring" />
          <span>Loading document...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div class="super-pdfv super-pdfv--center" ref={rootRef}>
        <div class="super-pdfv__empty-state">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div class="super-pdfv" ref={rootRef}>
      {/* ---- Unified header: title + controls in one row ---- */}
      <div class="super-pdfv__header">
        <div class="super-pdfv__header-left">
          <svg class="super-pdfv__header-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span class="super-pdfv__header-title">{title}</span>
          {effectiveDate && <span class="super-pdfv__header-date">{formatDate(effectiveDate)}</span>}
        </div>
        <div class="super-pdfv__header-right">
          {/* Page nav */}
          <div class="super-pdfv__group">
            <button class="super-pdfv__tb-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1} title="Previous page">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div class="super-pdfv__page-pill">
              <input
                class="super-pdfv__page-input"
                type="text"
                value={pageInputValue}
                onInput={(e) => setPageInputValue(e.target.value)}
                onBlur={commitPageInput}
                onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                style={{ width: `${Math.max(2, String(totalPages).length + 0.5)}ch` }}
              />
              <span class="super-pdfv__page-of">of {totalPages}</span>
            </div>
            <button class="super-pdfv__tb-btn" onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages} title="Next page">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>

          <div class="super-pdfv__tb-sep" />

          {/* Zoom */}
          <div class="super-pdfv__group">
            <button class="super-pdfv__tb-btn" onClick={() => changeZoom(-1)} disabled={zoom <= ZOOM_LEVELS[0]} title="Zoom out">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button>
            <span class="super-pdfv__zoom-label">{zoom}%</span>
            <button class="super-pdfv__tb-btn" onClick={() => changeZoom(1)} disabled={zoom >= ZOOM_LEVELS[ZOOM_LEVELS.length - 1]} title="Zoom in">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button>
          </div>

          <div class="super-pdfv__tb-sep" />

          {/* Rotate */}
          <button class="super-pdfv__tb-btn" onClick={rotate} title="Rotate 90°">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </button>

          {openInNewTabUrl && (
            <a href={openInNewTabUrl} target="_blank" rel="noopener noreferrer" class="super-pdfv__open-btn" title="Open in new tab">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* ---- Canvas area ---- */}
      <div class="super-pdfv__scroll" ref={scrollRef}>
        <div class="super-pdfv__canvas-wrap">
          <canvas class="super-pdfv__canvas" ref={canvasRef} />
          <canvas class="super-pdfv__highlight" ref={highlightCanvasRef} />
        </div>
        {rendering && (
          <div class="super-pdfv__page-loading">
            <div class="super-pdfv__loader-ring super-pdfv__loader-ring--sm" />
          </div>
        )}
      </div>
    </div>
  );
}

// =============================================================================
// ROTATION DETECTION (ported from ICD-10 viewer)
// =============================================================================

async function detectRotation(page, pageNum, cacheRef, manualRotation) {
  if (cacheRef.current[pageNum] !== undefined) {
    return (cacheRef.current[pageNum] + manualRotation) % 360;
  }

  const rawView = page.view;
  const rawW = rawView[2] - rawView[0];
  const rawH = rawView[3] - rawView[1];
  let autoFix = 0;
  let textItemCount = 0;

  // Strategy 1: Text transform analysis
  try {
    const tc = await page.getTextContent();
    const items = tc.items.filter(i => i.str && i.str.trim().length > 0);
    textItemCount = items.length;
    if (items.length >= 3) {
      const counts = { 0: 0, 90: 0, 180: 0, 270: 0 };
      for (const item of items) {
        const [a, b] = item.transform;
        const absA = Math.abs(a), absB = Math.abs(b);
        if (absA < 0.01 && absB < 0.01) continue;
        if (absA > absB) counts[a > 0 ? 0 : 180]++;
        else counts[b > 0 ? 90 : 270]++;
      }
      let maxCount = 0, dominant = 0;
      for (const [angle, count] of Object.entries(counts)) {
        if (count > maxCount) { maxCount = count; dominant = parseInt(angle); }
      }
      if (dominant !== 0) autoFix = dominant;
    }
  } catch (e) { /* ignore */ }

  // Strategy 2: Image transform analysis (scanned docs)
  if (autoFix === 0 && textItemCount < 3) {
    try {
      const ops = await page.getOperatorList();
      let lastT = [1, 0, 0, 1, 0, 0];
      for (let i = 0; i < ops.fnArray.length; i++) {
        if (ops.fnArray[i] === 12) lastT = ops.argsArray[i];
        if (ops.fnArray[i] === 85 || ops.fnArray[i] === 82) {
          const [a, b] = lastT;
          if (Math.abs(b) > Math.abs(a) * 5 && Math.abs(lastT[2]) > Math.abs(lastT[3]) * 5) {
            autoFix = b > 0 ? 270 : 90;
          }
          break;
        }
      }
    } catch (e) { /* ignore */ }
  }

  // Strategy 3: Landscape fallback
  if (autoFix === 0 && rawW > rawH * 1.05) autoFix = 90;

  cacheRef.current[pageNum] = autoFix;
  return (autoFix + manualRotation) % 360;
}

// =============================================================================
// HIGHLIGHT RENDERING
// =============================================================================

/**
 * Transform a highlight from normalised coords to pixel coords,
 * accounting for viewport rotation.
 */
function hlToPixel(hl, vw, vh, rotation) {
  const { x: ox, y: oy, w: ow, h: oh } = hl;
  const r = rotation % 360;
  if (r === 0)        return { x: ox * vw, y: oy * vh, w: ow * vw, h: oh * vh };
  if (r === 90)       return { x: (1 - oy - oh) * vw, y: ox * vh, w: oh * vw, h: ow * vh };
  if (r === 180)      return { x: (1 - ox - ow) * vw, y: (1 - oy - oh) * vh, w: ow * vw, h: oh * vh };
  /* 270 */           return { x: oy * vw, y: (1 - ox - ow) * vh, w: oh * vw, h: ow * vh };
}

/**
 * Merge pixel rects that sit on roughly the same line or are close
 * vertically into contiguous regions, so the highlight looks like a
 * text-marker stripe instead of per-word boxes.
 */
function mergeRects(rects) {
  if (rects.length <= 1) return rects;

  // Sort by Y then X
  const sorted = [...rects].sort((a, b) => a.y - b.y || a.x - b.x);
  const merged = [];
  let cur = { ...sorted[0] };

  for (let i = 1; i < sorted.length; i++) {
    const r = sorted[i];
    // Same row: vertical centres within half a line-height of each other
    const lineH = Math.max(cur.h, r.h);
    const sameLine = Math.abs((cur.y + cur.h / 2) - (r.y + r.h / 2)) < lineH * 0.6;
    // Adjacent or overlapping horizontally (small gap ok)
    const gap = r.x - (cur.x + cur.w);
    const close = gap < lineH * 0.5;

    if (sameLine && close) {
      // Extend current rect to cover both
      const right = Math.max(cur.x + cur.w, r.x + r.w);
      const top = Math.min(cur.y, r.y);
      const bottom = Math.max(cur.y + cur.h, r.y + r.h);
      cur.x = Math.min(cur.x, r.x);
      cur.y = top;
      cur.w = right - cur.x;
      cur.h = bottom - top;
    } else {
      merged.push(cur);
      cur = { ...r };
    }
  }
  merged.push(cur);
  return merged;
}

function drawHighlights(ctx, highlights, viewport, rotation) {
  const vw = viewport.width;
  const vh = viewport.height;

  // Convert to pixel coords, then merge adjacent blocks
  const pixelRects = highlights.map(hl => hlToPixel(hl, vw, vh, rotation));
  const merged = mergeRects(pixelRects);

  // Subtle yellow marker — no stroke
  ctx.fillStyle = 'rgba(250, 204, 21, 0.28)';

  merged.forEach(rect => {
    const pad = 2;
    const rad = 3;
    const x = rect.x - pad;
    const y = rect.y - pad;
    const w = rect.w + pad * 2;
    const h = rect.h + pad * 2;

    ctx.beginPath();
    ctx.moveTo(x + rad, y);
    ctx.lineTo(x + w - rad, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + rad);
    ctx.lineTo(x + w, y + h - rad);
    ctx.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
    ctx.lineTo(x + rad, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - rad);
    ctx.lineTo(x, y + rad);
    ctx.quadraticCurveTo(x, y, x + rad, y);
    ctx.closePath();
    ctx.fill();
  });

  return merged.map((r, i) => ({ ...r, isActive: i === 0 }));
}

// =============================================================================
// AUTO-SCROLL
// =============================================================================

function scrollToHighlight(rects, scrollEl) {
  if (!rects.length || !scrollEl) return;
  const active = rects.find(r => r.isActive) || rects[0];
  const wrap = scrollEl.querySelector('.super-pdfv__canvas-wrap');
  if (!wrap) return;

  requestAnimationFrame(() => {
    const sr = scrollEl.getBoundingClientRect();
    const wr = wrap.getBoundingClientRect();
    const offX = wr.left - sr.left + scrollEl.scrollLeft;
    const offY = wr.top - sr.top + scrollEl.scrollTop;

    scrollEl.scrollTo({
      left: Math.max(0, offX + active.x + active.w / 2 - scrollEl.clientWidth / 2),
      top: Math.max(0, offY + active.y + active.h / 2 - scrollEl.clientHeight / 2),
      behavior: 'smooth',
    });
  });
}
