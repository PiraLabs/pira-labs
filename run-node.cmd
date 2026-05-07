@ECHO OFF
SET "NODE=C:\Program Files\nodejs\node.exe"
SET "WORKDIR=C:\Users\Lenovo\PiraLabs\piralabs-site"
CD /D "%WORKDIR%"
"%NODE%" scripts\capture-benchmarks.js
