@echo off
git add -A
git commit -m "%~1"
git push origin rebuild-v2
curl -k -X POST "https://api.vercel.com/v1/integrations/deploy/prj_mgjKQvouKBWcQamPG4hfN6tjnscL/m1UmpvPuui"
