# Super LTC Silent Updater
# Runs in the background (no UI) via Windows Scheduled Task every 4 hours.
# Checks GitHub Releases for a newer version, downloads, and swaps files
# atomically. The extension's in-browser banner prompts the user to reload
# Chrome when a new version lands on disk.
#
# Log: %LOCALAPPDATA%\SuperLTC\update.log

$ErrorActionPreference = 'Stop'

# --- Paths ----------------------------------------------------------------
$desktop    = [Environment]::GetFolderPath('Desktop')
$installDir = Join-Path $desktop 'super-ltc-extension'
$appDir     = Join-Path $env:LOCALAPPDATA 'SuperLTC'
$logFile    = Join-Path $appDir 'update.log'
$zipFile    = Join-Path $env:TEMP 'super-ltc-extension.zip'
$tempDir    = Join-Path $env:TEMP ("super-ltc-update-" + [guid]::NewGuid().ToString('N'))
$backupDir  = "$installDir.old"

# --- Logging --------------------------------------------------------------
if (-not (Test-Path $appDir)) { New-Item -ItemType Directory -Path $appDir -Force | Out-Null }

function Write-Log {
    param([string]$msg)
    $ts = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    try { Add-Content -Path $logFile -Value "[$ts] $msg" -ErrorAction SilentlyContinue } catch {}
}

function Cleanup {
    if (Test-Path $zipFile) { Remove-Item $zipFile -Force -ErrorAction SilentlyContinue }
    if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue }
}

try {
    Write-Log "===== update check starting ====="

    # --- 1. Confirm the extension is installed ---------------------------
    $manifestPath = Join-Path $installDir 'manifest.json'
    if (-not (Test-Path $manifestPath)) {
        Write-Log "No install at $installDir - nothing to update"
        exit 0
    }

    # --- 2. Read current (on-disk) version -------------------------------
    $currentManifest = Get-Content $manifestPath -Raw | ConvertFrom-Json
    $currentVersion  = [string]$currentManifest.version
    Write-Log "Installed version: $currentVersion"

    # --- 3. Query GitHub for latest ---------------------------------------
    $headers = @{
        'User-Agent' = 'SuperLTC-Updater'
        'Accept'     = 'application/vnd.github+json'
    }
    $release = Invoke-RestMethod -Uri 'https://api.github.com/repos/Superjonathan123/chrome-ext/releases/latest' -Headers $headers
    $latestVersion = ($release.tag_name -replace '^v', '').Trim()
    Write-Log "Latest release: $latestVersion"

    if ([string]::IsNullOrWhiteSpace($latestVersion)) {
        Write-Log "No valid tag in release payload"
        exit 0
    }

    # --- 4. Compare versions ---------------------------------------------
    try {
        $currentSem = [version]$currentVersion
        $latestSem  = [version]$latestVersion
    } catch {
        Write-Log "Version parse failed: $_"
        exit 0
    }

    if ($latestSem -le $currentSem) {
        Write-Log "Already up to date"
        exit 0
    }

    Write-Log "Update available: $currentVersion -> $latestVersion"

    # --- 5. Download zip asset -------------------------------------------
    $zipAsset = $release.assets | Where-Object { $_.name -like '*.zip' } | Select-Object -First 1
    if (-not $zipAsset) {
        Write-Log "ERROR: no .zip asset in release"
        exit 1
    }

    if (Test-Path $zipFile) { Remove-Item $zipFile -Force -ErrorAction SilentlyContinue }
    Write-Log "Downloading $($zipAsset.browser_download_url)"
    Invoke-WebRequest -Uri $zipAsset.browser_download_url -OutFile $zipFile -UseBasicParsing

    if (-not (Test-Path $zipFile) -or (Get-Item $zipFile).Length -lt 1024) {
        Write-Log "ERROR: download failed or file too small"
        Cleanup
        exit 1
    }

    # --- 6. Extract to temp ----------------------------------------------
    if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force }
    New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
    Expand-Archive -Path $zipFile -DestinationPath $tempDir -Force

    if (-not (Test-Path (Join-Path $tempDir 'manifest.json'))) {
        Write-Log "ERROR: extracted zip missing manifest.json"
        Cleanup
        exit 1
    }

    # --- 7. Atomic swap: rename old, move new into place -----------------
    if (Test-Path $backupDir) {
        Remove-Item $backupDir -Recurse -Force -ErrorAction SilentlyContinue
    }

    $renamed = $false
    for ($attempt = 1; $attempt -le 5; $attempt++) {
        try {
            Rename-Item -Path $installDir -NewName ([System.IO.Path]::GetFileName($backupDir)) -ErrorAction Stop
            $renamed = $true
            break
        } catch {
            Write-Log "Rename attempt $attempt failed: $_"
            Start-Sleep -Milliseconds 600
        }
    }

    if (-not $renamed) {
        Write-Log "ERROR: could not rename old folder (file locked?). Aborting."
        Cleanup
        exit 1
    }

    try {
        Move-Item -Path $tempDir -Destination $installDir -Force
    } catch {
        Write-Log "ERROR moving new files into place: $_. Rolling back."
        # Roll back: put old folder back
        if (Test-Path $backupDir) {
            Rename-Item -Path $backupDir -NewName ([System.IO.Path]::GetFileName($installDir)) -ErrorAction SilentlyContinue
        }
        Cleanup
        exit 1
    }

    # --- 8. Clean up -----------------------------------------------------
    Remove-Item $backupDir -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item $zipFile -Force -ErrorAction SilentlyContinue

    Write-Log "Update complete: now on $latestVersion"
    exit 0

} catch {
    Write-Log "UNHANDLED ERROR: $_"
    Cleanup
    exit 1
}
