# Estado Técnico — piralabs.com.br
**Data de referência:** 17 mai 2026
**Fonte:** leitura direta dos arquivos do repositório em `C:\Users\Lenovo\PiraLabs\piralabs-site`
**Wireframe de referência:** `docs/wireframe-completo-site-pira-labs-v3_5.md`
**Regra:** descreve o que existe, não o que deveria existir. Divergências marcadas com ⚠️. Ausências com ❌.

---

## SEÇÃO A — O que está no ar (confirmado)

### A1. Páginas em produção

Todas as rotas abaixo têm arquivo `.tsx` confirmado em `app/`. O site está deployado em www.piralabs.com.br.

| URL | Rota | Schemas JSON-LD implementados |
|---|---|---|
| `https://piralabs.com.br/` | `app/page.tsx` | Organization + WebSite |
| `https://piralabs.com.br/sobre` | `app/sobre/page.tsx` | BreadcrumbList + Person (Gabriela) + Person (Celso) |
| `https://piralabs.com.br/inspira` | `app/inspira/page.tsx` | BreadcrumbList + Service + FAQPage |
| `https://piralabs.com.br/inspira/oxigenio` | `app/inspira/oxigenio/page.tsx` | BreadcrumbList + Service + Offer + FAQPage |
| `https://piralabs.com.br/inspira/juridico` | `app/inspira/juridico/page.tsx` | BreadcrumbList + Service + FAQPage |
| `https://piralabs.com.br/transpira` | `app/transpira/page.tsx` | BreadcrumbList + Service + FAQPage |
| `https://piralabs.com.br/transpira/juridico` | `app/transpira/juridico/page.tsx` | BreadcrumbList + Service + FAQPage |
| `https://piralabs.com.br/faisca` | `app/faisca/page.tsx` | BreadcrumbList |
| `https://piralabs.com.br/faisca/juridica` | `app/faisca/juridica/page.tsx` | BreadcrumbList + FAQPage |
| `https://piralabs.com.br/creative-business-turnaround` | `app/creative-business-turnaround/page.tsx` | BreadcrumbList + DefinedTerm + WebPage + FAQPage |
| `https://piralabs.com.br/antes-da-crise` | `app/antes-da-crise/page.tsx` | BreadcrumbList |
| `https://piralabs.com.br/contato` | `app/contato/page.tsx` | BreadcrumbList |
| `https://piralabs.com.br/politica-privacidade` | `app/politica-privacidade/page.tsx` | BreadcrumbList |
| `https://piralabs.com.br/termos` | `app/termos/page.tsx` | BreadcrumbList |
| `https://piralabs.com.br/cookies` | `app/cookies/page.tsx` | [VERIFICAR — arquivo existe, schema não lido] |
| 404 (qualquer URL não mapeada) | `app/not-found.tsx` | noindex — sem schema |

**Total de rotas indexáveis no sitemap:** 15 (conforme `app/sitemap.ts`).
**Rotas técnicas adicionais:** `app/global-error.tsx` (error boundary global).

Schemas Organization e WebSite confirmados diretamente em `app/page.tsx` — únicos que devem aparecer na home.

---

### A2. Arquivos técnicos — conteúdo real

#### `app/robots.ts` (dinâmico — este é o servido pelo Next.js)

25 crawlers nomeados explicitamente + wildcard `*`:

| Grupo | Crawlers |
|---|---|
| Redes sociais / preview | facebookexternalhit, Twitterbot, LinkedInBot, Slackbot |
| OpenAI | GPTBot, ChatGPT-User, OAI-SearchBot |
| Anthropic | ClaudeBot, Claude-Web, anthropic-ai |
| Google | Google-Extended |
| Perplexity | PerplexityBot, Perplexity-User |
| Common Crawl | CCBot |
| Apple | Applebot-Extended |
| Meta / LLaMA | FacebookBot, Meta-ExternalAgent |
| ByteDance | Bytespider |
| Cohere | Cohere-AI |
| Amazon | Amazonbot |
| Diffbot | Diffbot |
| Outros | PiplBot, DuckDuckBot, Bingbot, YandexBot |

Sitemap declarado: `https://piralabs.com.br/sitemap.xml`

#### `public/robots.txt` (estático — NÃO é o arquivo servido)

⚠️ Arquivo presente mas dessincronizado. Contém 15 crawlers nomeados e difere do dinâmico em conteúdo e cobertura. O Next.js serve o `app/robots.ts` e ignora este. Ver Seção B.

#### `app/sitemap.ts`

15 URLs indexáveis geradas dinamicamente em build. Prioridades:

| URL | changeFrequency | priority |
|---|---|---|
| `/` | weekly | 1.0 |
| `/inspira/oxigenio` | weekly | 0.9 |
| `/sobre`, `/inspira`, `/transpira`, `/creative-business-turnaround` | monthly | 0.8 |
| `/transpira/juridico`, `/inspira/juridico`, `/faisca`, `/faisca/juridica` | monthly | 0.7 |
| `/antes-da-crise` | weekly | 0.6 |
| `/contato` | yearly | 0.5 |
| `/cookies`, `/politica-privacidade`, `/termos` | yearly | 0.3 |

#### `public/llms.txt`

Arquivo presente. Versão 2, `@last-updated: 2026-05-10`. Contém: descrição da empresa, fundadores (Gabriela e Celso com Wikidata), produtos (INSPIRA, Oxigênio, INSPIRA Jurídico, TRANSPIRA, TRANSPIRA Jurídico, FAÍSCA, FAÍSCA Jurídica), resultados verificados, posicionamento competitivo, FAQs e aviso jurídico.

#### `public/llms-full.txt`

Arquivo presente. Versão 2.0, Maio 2026. Conteúdo EEAT completo: identidade, fundadores com sameAs (LinkedIn + Wikidata + Crunchbase), método (INSPIRA/TRANSPIRA/RESPIRA), todos os produtos com URL e precificação, resultados verificados, posicionamento, categoria Creative Business Turnaround, atributos, FAQs, política editorial e ética, lista de páginas com schemas, contato e redes. CNPJ real: 46.954.891/0001-16.

#### `public/.well-known/ai-agents.json`

Arquivo presente. Versão 0.1. Campos declarados:

- `service`: PIRA LABS
- `url`: https://piralabs.com.br
- `contact`: email + URL /contato
- `founders`: 2 (Gabriela e Celso, com LinkedIn, Wikidata e Crunchbase)
- `sameAs`: 5 links (LinkedIn empresa, Wikidata, Substack, GitHub, Crunchbase)
- `legal`: CNPJ 46.954.891/0001-16, país BR, cidade São Paulo
- `capabilities`: 5 (diagnostic, operational-redesign, ai-search-diagnostic, speaking-engagement, mentorship)
- `topics`: 11 strings
- `llms_txt` e `llms_full_txt`: declarados com URLs absolutas

---

### A3. Redirects 301 configurados em `next.config.js`

22 redirects permanentes confirmados, todos com `permanent: true`.

**Campanha (5):**

| De | Para |
|---|---|
| `/oxigenio` | `/inspira/oxigenio` |
| `/oxigenio-ia-search` | `/inspira/oxigenio` |
| `/faisca/ia-search` | `/inspira/oxigenio` |
| `/turnaround` | `/creative-business-turnaround` |
| `/cbt` | `/creative-business-turnaround` |

**Legado PT do site provisório (4):**

| De | Para |
|---|---|
| `/index.html` | `/` |
| `/home` | `/` |
| `/servicos` | `/inspira` |
| `/cases` | `/#provas` |

**Legado EN (5):**

| De | Para |
|---|---|
| `/en` | `/` |
| `/en/services` | `/inspira` |
| `/en/about` | `/sobre` |
| `/en/cases` | `/#provas` |
| `/en/contact` | `/contato` |

**Legado ES (5):**

| De | Para |
|---|---|
| `/es` | `/` |
| `/es/sobre` | `/sobre` |
| `/es/servicos` | `/inspira` |
| `/es/cases` | `/#provas` |
| `/es/contato` | `/contato` |

**Editorial (3):**

| De | Para |
|---|---|
| `/blog` | `/antes-da-crise` |
| `/news` | `/antes-da-crise` |
| `/antesdacrise` | `/antes-da-crise` |

---

### A4. Headers de segurança

Aplicados a `/:path*` (todas as rotas). Confirmados em `next.config.js`:

| Header | Valor |
|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | camera, microphone, geolocation e interest-cohort bloqueados |
| `Content-Security-Policy` | `default-src 'self'` + allowlist para Vercel Analytics, Fillout, Google Tag Manager, Google Analytics, YouTube |

---

## SEÇÃO B — O que diverge da especificação (wireframe v3.5)

### B1. `public/robots.txt` dessincronizado do `app/robots.ts`

⚠️ Dois arquivos de robots coexistem no repositório com conteúdos diferentes.

O Next.js serve o `app/robots.ts` (dinâmico). O `public/robots.txt` (estático) nunca chega ao visitante, mas permanece no repositório causando confusão. O estático tem 15 crawlers com nomenclatura divergente (ex: `cohere-ai` vs `Cohere-AI`, `ia_archiver` e `Omgilibot` e `YouBot` que não existem no dinâmico, `Applebot` vs `Applebot-Extended`).

**Ação pendente de decisão:** deletar ou atualizar `public/robots.txt` para espelhar o dinâmico.

---

### B2. `/feed.xml` — RSS não implementado

❌ O wireframe v3.5 declara `/feed.xml` como rota técnica ("RSS feed do conteúdo, para sindicalização"). O arquivo não existe. Nenhum gerador de feed encontrado no repositório.

---

### B3. Redirects "proteção extra" ausentes

⚠️ O wireframe prevê três redirects para URLs em inglês fora da estrutura `/en/*`:

| De | Para | Status |
|---|---|---|
| `/services` | `/inspira` | ❌ ausente no `next.config.js` |
| `/about` | `/sobre` | ❌ ausente no `next.config.js` |
| `/contact` | `/contato` | ❌ ausente no `next.config.js` |

Motivo declarado no wireframe: "caso alguém tenha linkado sem prefixo `/en`". As URLs retornam 404 atualmente.

---

### B4. Conteúdo em `.tsx`, não em `.mdx`

⚠️ O wireframe especifica "CMS: Nenhum no primeiro deploy. Conteúdo em arquivos `.mdx`". O site foi implementado inteiramente em `.tsx`. Não existe nenhum arquivo `.mdx` no repositório. Decisão deliberada, registrada como escolha técnica. Não impacta funcionamento.

---

### B5. Branch de deploy divergente

⚠️ O wireframe especifica branch `feature/site-base-v09` como ponto de partida. O deploy acontece em `master`. O branch `feature/site-base-v09` pode não existir mais ou nunca ter sido criado no repositório atual.

---

### B6. Sistema de origens: 13 implementadas, 11 no wireframe

⚠️ O wireframe v3.5 define 11 origens. O `lib/constants.ts` implementa 13. As duas origens acrescidas além da spec:

| Origem | Uso |
|---|---|
| `header_global` | CTA do header em todas as páginas |
| `404` | CTA na página not-found |

Expansão intencional e coerente. Não é erro.

---

### B7. `lib/i18n.ts` — arquivo legado presente sem uso

⚠️ O arquivo `lib/i18n.ts` contém dicionário trilíngue (PT/EN/ES) e mapeamento de rotas do site provisório anterior. O v3.5 é monolíngue PT. O arquivo está marcado como legado no `CLAUDE.md` mas ainda existe no repositório.

---

### B8. Foto na home — `/nos.png` no lugar de fotos individuais

⚠️ O wireframe não especifica explicitamente a foto da home, apenas prevê fotos dos fundadores em `/sobre`. O `app/page.tsx` usa `/nos.png` (foto conjunta). O arquivo `public/nos.png` existe. As fotos individuais `public/celso-gama.jpg` e `public/gabriela-aguiar.jpg` também existem e são usadas em `/sobre`. Não é erro, mas a escolha não estava documentada no wireframe.

---

### B9. `og:image` na home com URL relativa

⚠️ `app/page.tsx` declara `og:image` com URL relativa (`/og-image.png`). O `CLAUDE.md` registra: "sempre usar URL absoluta, nunca relativa." A URL relativa funciona se `metadataBase` está configurado em `app/layout.tsx`, mas diverge da decisão técnica registrada. [VERIFICAR se `app/layout.tsx` tem `metadataBase` declarado]

---

### B10. CNPJ no footer renderizado — não verificado

⚠️ O wireframe mostra "CNPJ XX.XXX.XXX/0001-XX" como placeholder na spec. O `llms-full.txt` e `ai-agents.json` têm o CNPJ real (46.954.891/0001-16). O componente `Footer` não foi lido nesta análise. [VERIFICAR se o footer renderizado exibe o CNPJ real]

---

## SEÇÃO C — Pendentes de decisão ou bloqueados

### C1. Formulário `/contato` não funcional em produção

**Bloqueador:** `NEXT_PUBLIC_FILLOUT_URL` não configurado no ambiente de produção da Vercel.
O `FilloutEmbed` renderiza mas não tem URL de destino. O formulário não recebe nem encaminha dados ao Notion.
**Depende de:** configurar a variável de ambiente no dashboard da Vercel com a URL real do Fillout.

---

### C2. Flags de feature no `/inspira/oxigenio` — todas desativadas

Três blocos da página `/inspira/oxigenio` estão condicionados a flags de ambiente, todas atualmente `false`:

| Flag | Bloco | Bloqueador |
|---|---|---|
| `NEXT_PUBLIC_FLAG_D4=false` | OXIGENIO-4 — vídeo de método da Gabriela | Vídeo não gravado (ativo externo) |
| `NEXT_PUBLIC_FLAG_D1=false` | OXIGENIO-8 — achados da auto-aplicação do Celso | Decisão do Celso |
| `NEXT_PUBLIC_FLAG_PULSO=false` | OXIGENIO-10 — bloco Pulso Pocket | Decisão do Celso |

Os três blocos existem no código mas não renderizam. A página funciona e está publicável no estado atual.

---

### C3. Vagas do Oxigênio — número hardcoded via env

`NEXT_PUBLIC_VAGAS_OXIGENIO=5` está configurado como variável de ambiente. O número não decrementa automaticamente. Quando vagas forem preenchidas, requer atualização manual da variável no dashboard da Vercel seguida de novo deploy.
**Depende de:** processo operacional definido pelo Celso.

---

### C4. Fase 7 — não iniciada

Três tarefas da Fase 7 pendentes sem data:

| Tarefa | Estado |
|---|---|
| Lighthouse ≥ 90 em todas as páginas | ❌ não executado |
| Testes mobile (viewport, toque, responsividade) | ❌ não executado |
| Teste das 13 origens (CTA → Fillout → Notion) | ❌ bloqueado pelo C1 (Fillout sem URL) |

---

### C5. `/feed.xml` — decisão pendente

❌ O wireframe prevê RSS feed. Não foi implementado. Não há registro de decisão de descartar.
**Depende de:** decisão do Celso sobre implementar ou remover formalmente da spec.

---

### C6. Redirects "proteção extra" — decisão pendente

⚠️ Três redirects previstos no wireframe ausentes no `next.config.js`: `/services`, `/about`, `/contact`.
**Depende de:** decisão de incluir ou descartar. Baixo risco de impacto SEO, mas baixo custo de implementar.

---

### C7. `public/robots.txt` — decisão pendente

⚠️ Arquivo estático dessincronizado do dinâmico. Nunca é servido pelo Next.js mas cria confusão no repositório.
**Decisão pendente:** deletar o estático ou atualizar para espelhar o dinâmico (para uso como referência de documentação).

---

### C8. Google Search Console — monitoramento pós-deploy

O wireframe recomenda: monitorar relatório "Coverage" do GSC por 30 dias pós-deploy para capturar URLs que retornem 404 e adicionar redirects pontuais. Não há registro de que esse monitoramento foi iniciado ou de qual é o estado atual do GSC.
**Depende de:** acesso e ação do Celso.

---

### C9. Identidade visual KZ — pendente

A paleta de cores atual (`ink`, `deep-teal`, `teal`, `orange`, `peach`, `off-white`) é provisória — extraída do slide 3 do `PiraLabs_ap_v4.pdf`, conforme declarado no wireframe. A identidade visual final vem da KZ.
**Estado:** não recebida. Ver Seção D para impacto e sequência de deploy.

---

## SEÇÃO D — Impacto da entrada da identidade visual KZ

### D1. O que a identidade KZ toca

| Arquivo | O que muda |
|---|---|
| `tailwind.config.ts` | Tokens de cor (todos os valores hex da paleta atual são provisórios) |
| `app/globals.css` | CSS custom properties de cor (`--color-ink`, `--color-teal`, etc.) |
| `components/shared/Header.tsx` | Logomark SVG (versão atual é provisória) |
| `components/shared/Footer.tsx` | Logomark SVG |
| `public/og-image.png` | Imagem de preview social (1200x630) — precisa refletir paleta e logo finais |
| `public/nos.png` | Foto conjunta dos fundadores — pode precisar de novo tratamento visual conforme paleta |
| `public/celso-gama.jpg` | Foto individual — pode precisar de novo tratamento visual |
| `public/gabriela-aguiar.jpg` | Foto individual — pode precisar de novo tratamento visual |

Tipografia: Space Grotesk foi escolhida pelo wireframe com argumento explícito de que "permite ajuste fino de pesos e variantes sem refatorar o código quando a KZ entregar o sistema visual final." Se a KZ mantiver Space Grotesk, nenhum código muda. Se trocar, refatoração de fontes em `app/layout.tsx` e classes `font-body` / `font-display` em todos os componentes.

---

### D2. O que a identidade KZ não toca

Nada abaixo deve ser alterado como consequência da entrada da identidade KZ:

- Estrutura de rotas e URLs
- Qualquer redirect em `next.config.js`
- Schemas JSON-LD em qualquer página
- Copy de qualquer página — nenhuma palavra muda por causa de identidade visual
- Headers de segurança (`next.config.js`)
- `public/llms.txt` e `public/llms-full.txt`
- `public/.well-known/ai-agents.json`
- `app/sitemap.ts`
- `app/robots.ts`
- Feature flags e variáveis de ambiente
- Formulário Fillout e sistema de origens
- `lib/schemas/` (nenhum schema depende de cor ou logo)

---

### D3. Sequência recomendada de deploy pós-KZ

1. **Receber assets completos da KZ:** logo SVG (versão clara e escura se houver), paleta final com hex de todas as cores, especificação tipográfica se diferente do Space Grotesk atual.

2. **Atualizar tokens:** editar `tailwind.config.ts` com os novos hex. Editar `app/globals.css` se houver custom properties adicionais.

3. **Atualizar logomark:** substituir SVG/imagem no `Header` e `Footer`. Manter dimensões ou ajustar espaçamento conforme necessário.

4. **Verificar contraste WCAG AA:** checar as novas combinações de cor nos mesmos pares especificados no wireframe (texto sobre fundo nas 3 variantes de `Section`). Mínimo 4.5:1 para texto normal, 3:1 para texto grande.

5. **Gerar nova `public/og-image.png`:** 1200x630px, paleta final, logo final, foto dos fundadores. Substituir o arquivo atual. Não usar URL relativa no código se metadataBase não estiver configurado.

6. **Tratar fotos se necessário:** aplicar novo tratamento de cor ou recorte nas fotos dos fundadores conforme orientação da KZ.

7. **`npm run build`:** verificar se o build passa sem erro com os novos tokens.

8. **Lighthouse:** rodar em todas as páginas principais. Meta: ≥ 90 em Performance, Accessibility, Best Practices e SEO. Corrigir antes de publicar.

9. **Teste visual:** checar todas as 15 páginas indexáveis em desktop e mobile. Checar estados de hover, focus e menu mobile.

10. **Deploy na Vercel:** push para `master`. Verificar deploy sem erro no dashboard.

11. **Validar open graph:** usar LinkedIn Post Inspector e Facebook Sharing Debugger para confirmar que a nova `og-image.png` é carregada corretamente.

12. **Monitorar GSC por 7 dias** após deploy para capturar qualquer 404 novo gerado pela mudança.

---

*Documento gerado em 17 mai 2026 a partir de leitura direta dos arquivos do repositório.*
*Não contém estimativas, suposições ou dados não verificados nos arquivos lidos.*
*Lacunas marcadas com [VERIFICAR] indicam arquivos não lidos nesta análise.*