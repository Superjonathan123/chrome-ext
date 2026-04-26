// Fullscreen region-selector overlay used by the Feedback modal.
// Resolves with { x, y, width, height } in CSS pixels (viewport coords),
// or null if the user pressed Escape.

export function selectRegion() {
  return new Promise((resolve) => {
    const root = document.createElement('div');
    root.className = 'super-region-selector';
    root.innerHTML = `
      <div class="super-region-selector__hint">Drag to select an area · Esc to cancel</div>
      <div class="super-region-selector__rect" style="display:none;"></div>
    `;
    document.body.appendChild(root);

    const rect = root.querySelector('.super-region-selector__rect');
    let startX = 0, startY = 0, dragging = false;
    let finalRect = null;

    const cleanup = (result) => {
      window.removeEventListener('keydown', onKey, true);
      root.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      root.remove();
      resolve(result);
    };

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        e.preventDefault();
        cleanup(null);
      }
    };

    const onDown = (e) => {
      if (e.button !== 0) return;
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      rect.style.display = 'block';
      rect.style.left = startX + 'px';
      rect.style.top = startY + 'px';
      rect.style.width = '0px';
      rect.style.height = '0px';
    };

    const onMove = (e) => {
      if (!dragging) return;
      const x = Math.min(startX, e.clientX);
      const y = Math.min(startY, e.clientY);
      const w = Math.abs(e.clientX - startX);
      const h = Math.abs(e.clientY - startY);
      rect.style.left = x + 'px';
      rect.style.top = y + 'px';
      rect.style.width = w + 'px';
      rect.style.height = h + 'px';
    };

    const onUp = (e) => {
      if (!dragging) return;
      dragging = false;
      const x = Math.min(startX, e.clientX);
      const y = Math.min(startY, e.clientY);
      const w = Math.abs(e.clientX - startX);
      const h = Math.abs(e.clientY - startY);
      // Reject tiny drags (treat as misclick)
      if (w < 10 || h < 10) {
        cleanup(null);
        return;
      }
      finalRect = { x, y, width: w, height: h };
      cleanup(finalRect);
    };

    window.addEventListener('keydown', onKey, true);
    root.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  });
}

// Draw a colored rectangle outline on top of a dataUrl at the given viewport rect.
// Returns a new dataUrl with the highlight baked in.
export function drawHighlightOnDataUrl(dataUrl, regionCss, color = '#ef4444') {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const dpr = window.devicePixelRatio || 1;
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(2, Math.round(3 * dpr));
      ctx.strokeRect(
        Math.round(regionCss.x * dpr),
        Math.round(regionCss.y * dpr),
        Math.round(regionCss.width * dpr),
        Math.round(regionCss.height * dpr)
      );
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = dataUrl;
  });
}

// Crop a base64 PNG dataUrl to the given viewport rect.
// devicePixelRatio matters: captureVisibleTab returns the image at DPR-scaled
// size, so we multiply the crop coords by DPR before drawing.
export function cropDataUrl(dataUrl, regionCss) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const dpr = window.devicePixelRatio || 1;
      const sx = Math.round(regionCss.x * dpr);
      const sy = Math.round(regionCss.y * dpr);
      const sw = Math.round(regionCss.width * dpr);
      const sh = Math.round(regionCss.height * dpr);
      const canvas = document.createElement('canvas');
      canvas.width = sw;
      canvas.height = sh;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => reject(new Error('Failed to load captured image'));
    img.src = dataUrl;
  });
}
