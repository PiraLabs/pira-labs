#!/bin/bash
git add -A
git commit -m "$1"
git push origin rebuild-v2
npx vercel --prod --yes
curl -s -L -X POST -o /dev/null -w "IndexNow: %{http_code}\n" \
  "https://piralabs.com.br/api/indexnow"
