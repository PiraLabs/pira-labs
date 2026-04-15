---
tipo: prompt
tags: [estrutura-prompt, prompt-engineering, framework, workshop]
uso: [operacional-celso, workshop]
destino: A
---

T: Escalonamento de Contexto — Cinco Situações
F: [Arsenal Pira Labs — fonte não recuperada]
TP: framework
FN: Mostra como elevar prompts genéricos para prompts executáveis em cinco situações recorrentes. Use para ensinar, revisar ou depurar prompts antes da execução.
PERSONA: —
ETAPAS:
- Campos que transformam um prompt genérico em executável: Role/POV, Audience, Voice, Goal/Structure, Length, Framework, Stage, ICP, Constraints, Output format.
- Situação 1 — LinkedIn post:
  ```text
  Bad:    "Write a LinkedIn post for me"
  Good:   "Write a LinkedIn post about how AI is changing hiring. Professional, 200 words."
  Great:  "Write a LinkedIn post from the POV of a 10-year HR veteran who just saw a résumé
          screened by AI in seconds. Hook that challenges convention, 3 punchy insights,
          end with a question to drive comments. Audience: mid-level HR managers.
          Voice: candid, slightly contrarian. 180-220 words."
  ```
- Situação 2 — Validação de ideia de negócio:
  ```text
  Bad:    "Is my business idea good?"
  Good:   "I want to build an app that helps freelancers track invoices. Is this a good idea?
          What are the risks?"
  Great:  "Validate using the Mom Test framework: a Notion CRM for solo B2B consultants
          at $2k+/mo. I'm pre-revenue, technical, with 5 LinkedIn connections in this niche.
          Give me: pain score (1-10), 3 riskiest assumptions, 3 validation experiments
          in 2 weeks, 2 competing alternatives."
  ```
- Situação 3 — Estratégia de marketing:
  ```text
  Bad:    "Give me a marketing strategy."
  Good:   "Create a marketing strategy for my SaaS targeting small businesses.
          Focus on social media and content marketing."
  Great:  "Build a 90-day GTM plan for a B2B SaaS (agency PM tool, $99/mo).
          Budget: $0 organic only. ICP: 2-10 person creative agencies.
          Goal: 50 free trial signups. Include: week-by-week content calendar,
          top 3 channels with rationale, 1 viral hook strategy, KPIs per channel."
  ```
- Situação 4 — Prospecção outbound:
  ```text
  Bad:    "Help me generate leads."
  Good:   "Give me 5 ways to generate leads for my consulting business on LinkedIn."
  Great:  "I'm a solo fractional CFO targeting bootstrapped SaaS founders at $500k-$2M ARR.
          Write a 5-touch LinkedIn DM sequence: icebreaker based on their content,
          problem-agitation for their stage, soft CTA for 15-min call,
          follow-up for non-responders. Tone: peer-to-peer, no buzzwords."
  ```
- Situação 5 — Análise competitiva:
  ```text
  Bad:    "Analyze my competitors."
  Good:   "Compare Notion and Coda as project management tools. Pros and cons of each."
  Great:  "I'm building a lightweight PM tool for solo freelancers. Teardown Notion, Coda,
          Basecamp: pricing model, top 3 UX complaints from G2/Trustpilot, messaging angle,
          and the gap they're NOT solving for solopreneurs.
          Output: comparison table + whitespace opportunity section for my pitch deck."
  ```
REGRAS: Referência de ensino: aplicável em workshop FAÍSCA.
SC: —
OF: Bad → Good → Great.
CP: role/POV, audience, voice, goal/structure, length, framework, stage, ICP, constraints, output format.
OT: —
SP: —
