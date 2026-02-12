# Development Workflow

## Initial Setup
```bash
npm install
```

## Development (watch mode)
```bash
npm run dev
```
Rebuilds on file changes. After rebuild:
1. Go to chrome://extensions
2. Click "Reload" button on Super LTC extension
3. Refresh PointClickCare page to test changes

## Production Build
```bash
npm run build
```

## Loading Extension in Chrome
1. Open chrome://extensions
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select `dist/` folder (NOT root folder)

## Debugging
- Content script logs: Page DevTools console
- Background script logs: chrome://extensions → Service Worker "Inspect"
- React DevTools: Works with Preact

## Project Structure
```
chrome-ext/
├── src/                    # Source code (TODO: migrate files here)
├── content/               # Content scripts (legacy location)
├── background/            # Background service worker
├── popup/                 # Extension popup
├── dist/                  # Build output (generated, git-ignored)
├── manifest.json          # Extension manifest (source)
├── vite.config.js         # Vite build configuration
└── package.json           # Dependencies and scripts
```

## Common Issues

### Extension doesn't update after rebuild
- Click the "Reload" button in chrome://extensions
- If that doesn't work, remove and re-add the extension

### Build fails
- Check that all dependencies are installed: `npm install`
- Clear dist folder: `rm -rf dist && npm run build`

### Console errors about missing modules
- Ensure package.json has `"type": "module"`
- Check that vite.config.js uses ES module syntax
