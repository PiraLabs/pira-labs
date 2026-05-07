@ECHO OFF
TITLE Pira Labs Benchmark Capture
SET "NODE=C:\Program Files\nodejs\node.exe"
SET "SCRIPT=C:\Users\Lenovo\PiraLabs\piralabs-site\scripts\capture-benchmarks.js"

CD /D "C:\Users\Lenovo\PiraLabs\piralabs-site"

ECHO Starting benchmark screenshot capture...
"%NODE%" "%SCRIPT%"
ECHO Done. Exit code: %ERRORLEVEL%
