@ECHO OFF
SET NODE_EXE=C:\Program Files\nodejs\node.exe
SET SCRIPT=%~dp0capture-benchmarks.js
SET WORKDIR=%~dp0..

CD /D "%WORKDIR%"
"%NODE_EXE%" "%SCRIPT%" > "%WORKDIR%\benchmark-run.log" 2>&1
