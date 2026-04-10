@echo off
echo ============================================
echo   Super LTC Extension Updater
echo ============================================
echo.

for /f "delims=" %%i in ('powershell -Command "[Environment]::GetFolderPath('Desktop')"') do set DESKTOP=%%i
set INSTALL_DIR=%DESKTOP%\super-ltc-extension
set ZIP_URL=https://github.com/Superjonathan123/chrome-ext/releases/latest/download/super-ltc-extension.zip
set ZIP_FILE=%TEMP%\super-ltc-extension.zip

echo Downloading latest version...
powershell -Command "Invoke-WebRequest -Uri '%ZIP_URL%' -OutFile '%ZIP_FILE%'"

if not exist "%ZIP_FILE%" (
    echo.
    echo ERROR: Download failed. Check your internet connection.
    pause
    exit /b 1
)

echo Clearing old files...
if exist "%INSTALL_DIR%" rmdir /s /q "%INSTALL_DIR%"
mkdir "%INSTALL_DIR%"

echo Extracting new version...
powershell -Command "Expand-Archive -Path '%ZIP_FILE%' -DestinationPath '%INSTALL_DIR%' -Force"

del "%ZIP_FILE%"

echo.
echo ============================================
echo   Update complete!
echo ============================================
echo.
echo Extension files are in: %INSTALL_DIR%
echo.
echo NOW DO THIS:
echo   1. Open Chrome
echo   2. Go to chrome://extensions
echo   3. Click the reload button (circular arrow)
echo   4. Refresh your PCC page
echo.
echo If this is your FIRST TIME:
echo   1. Open Chrome
echo   2. Go to chrome://extensions
echo   3. Turn on "Developer mode" (top right)
echo   4. Click "Load unpacked"
echo   5. Select: %INSTALL_DIR%
echo.
pause
