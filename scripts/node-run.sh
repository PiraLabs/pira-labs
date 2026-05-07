#!/bin/sh
# Wrapper to run node.exe with full Windows path via MSYS2/Git bash
# In MSYS2/Git bash, Windows paths are converted: C:\ = /c/

WINNODE="C:/Program Files/nodejs/node.exe"

# Try different path forms
if [ -f "$WINNODE" ]; then
    exec "$WINNODE" "$@"
fi

# Fallback: try PATH as set by profile (when invoked as login shell)
exec node "$@"
