@echo off
git add -A
git commit -m "%~1"
git push origin rebuild-v2
curl -X POST "https://api.vercel.com/v1/integrations/deploy/prj_mgjKQvouKBWcQamPG4hfN6tjnscL/NvxfOzpBKB"
