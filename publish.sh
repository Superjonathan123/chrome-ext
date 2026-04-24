#!/bin/bash
# Publish a new extension build as a GitHub release
# Usage: ./publish.sh [version message]

set -e

# Get version from manifest
VERSION=$(node -e "console.log(JSON.parse(require('fs').readFileSync('dist/manifest.json','utf8')).version)")
TAG="v${VERSION}"
MESSAGE="${1:-Build ${TAG}}"

echo "Building extension..."
npm run build:prod

echo "Creating zip from dist-prod/..."
cd dist-prod
rm -f ../super-ltc-extension.zip
zip -r ../super-ltc-extension.zip .
cd ..

echo "Publishing ${TAG} to GitHub..."

# Delete existing release with same tag if it exists
gh release delete "${TAG}" --yes 2>/dev/null || true
git tag -d "${TAG}" 2>/dev/null || true
git push origin ":refs/tags/${TAG}" 2>/dev/null || true

# Create new release
gh release create "${TAG}" super-ltc-extension.zip \
  --title "${TAG}" \
  --notes "${MESSAGE}"

rm super-ltc-extension.zip

echo ""
echo "Done! Published ${TAG}"
echo "Tell her to double-click update-super-ltc.bat (Windows) or update-super-ltc.command (Mac)"
