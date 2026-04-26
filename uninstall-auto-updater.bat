@echo off
setlocal

echo ============================================
echo   Super LTC — Disable Auto-Updates
echo ============================================
echo.
echo This removes the background update task and its files.
echo Your extension itself is NOT removed — only automatic
echo updates stop. You can still update manually with
echo update-super-ltc.bat.
echo.
pause

set "TASK_NAME=Super LTC Auto-Update"
set "APP_DIR=%LOCALAPPDATA%\SuperLTC"

echo Removing scheduled task...
schtasks /delete /tn "%TASK_NAME%" /f >nul 2>&1

echo Removing updater files...
if exist "%APP_DIR%" rmdir /s /q "%APP_DIR%"

echo.
echo Auto-update disabled.
echo.
pause
