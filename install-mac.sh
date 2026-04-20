#!/bin/bash
set -e

echo "============================================"
echo "  Super LTC Extension Updater"
echo "============================================"
echo ""

INSTALL_DIR="$HOME/Desktop/super-ltc-extension"
ZIP_URL="https://github.com/Superjonathan123/chrome-ext/releases/latest/download/super-ltc-extension.zip"
ZIP_FILE="/tmp/super-ltc-extension.zip"

echo "Downloading latest version..."
curl -fsSL -o "$ZIP_FILE" "$ZIP_URL"

echo "Clearing old files..."
rm -rf "$INSTALL_DIR"
mkdir -p "$INSTALL_DIR"

echo "Extracting new version..."
unzip -o -q "$ZIP_FILE" -d "$INSTALL_DIR"

rm "$ZIP_FILE"

xattr -dr com.apple.quarantine "$INSTALL_DIR" 2>/dev/null || true

echo ""
echo "============================================"
echo "  Update complete!"
echo "============================================"
echo ""
echo "Extension files are in: $INSTALL_DIR"
echo ""
echo "NOW DO THIS:"
echo "  1. Open Chrome"
echo "  2. Go to chrome://extensions"
echo "  3. Click the reload button (circular arrow)"
echo "  4. Refresh your PCC page"
echo ""
echo "If this is your FIRST TIME:"
echo "  1. Open Chrome"
echo "  2. Go to chrome://extensions"
echo "  3. Turn on \"Developer mode\" (top right)"
echo "  4. Click \"Load unpacked\""
echo "  5. Select: $INSTALL_DIR"
echo ""
