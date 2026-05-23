# Arsenal Code + Skills — Claude Code do Zero ao Operacional
**Pira Labs — Uso Pessoal do Celso**
**Versão 3.0 · Março 2026**
**Sistema: Windows · Testado e verificado em sessão ao vivo**

---

## Para que serve este documento

O Claude Code opera diferente do Claude.ai. No Claude.ai você conversa. No Claude
Code você manda o Claude trabalhar em arquivos reais: criar, editar, rodar, analisar.
Ele age no seu computador, não só na tela de chat.

A diferença prática: no Claude.ai você gera um texto e copia. No Code você diz
"crie este documento e salve nesta pasta", e ele faz. Para auditoria da KZ, análise
de dados de cliente e material de workshop, isso muda o que é possível fazer.

**Nota importante:** existe o Claude Code integrado ao Claude.ai (aba "Código" no
navegador) e o Claude Code standalone (roda no terminal do seu computador). Este
tutorial cobre o standalone, que acessa arquivos locais, instala skills permanentes
e usa CLAUDE.md com contexto fixo.

---

## ÍNDICE

1. Instalação do Node.js + ambiente
2. Instalação do Claude Code standalone
3. CLAUDE.md — configuração da Pira Labs
4. Skills — instalação e lista completa instalada
5. tasks/lessons.md na prática
6. Comandos nativos do Code
7. Workflows reais da Pira Labs

---

## 1. INSTALAÇÃO DO NODE.JS

### Por que o Node.js é necessário

O Claude Code standalone precisa do Node.js para rodar. O VS Code é editor de texto,
não motor de execução. São coisas diferentes: VS Code é o Word, Node.js é o Windows.

### Passo a passo

**Passo 1 — Baixar**
1. Acesse **nodejs.org**
2. Clique em **LTS** (versão estável)
3. Baixe o instalador `.msi`

**Passo 2 — Instalar**
1. Abra o arquivo `.msi`
2. Clique em **Next** em todas as telas
3. Clique em **Install** e aguarde 2-3 minutos
4. Clique em **Finish**

**Passo 3 — Verificar**

Pressione **Windows + R**, digite `cmd`, pressione Enter. No terminal:
```
node --version
```
Deve aparecer algo como `v25.8.1`. Se aparecer o número, está instalado.

```
npm --version
```
Deve aparecer um número também. Se ambos aparecerem, tudo certo.

---

## 2. INSTALAÇÃO DO CLAUDE CODE STANDALONE

No Prompt de Comando:
```
npm install -g @anthropic-ai/claude-code
```

Aguarde 2-3 minutos. Quando o cursor voltar para `C:\Users\[nome]>`, terminou.

**Verificar:**
```
claude --version
```
Deve aparecer algo como `2.1.6 (Claude Code)`.

**Primeira abertura:**
```
claude
```
Vai pedir login. Faça com sua conta Anthropic. Após autenticar, mostra
"Welcome back [nome]".

---

## 3. CLAUDE.MD — CONFIGURAÇÃO DA PIRA LABS

### O que é o CLAUDE.md

O CLAUDE.md é o arquivo de instruções permanentes do Claude Code. É lido
automaticamente toda vez que você abre o Code em uma pasta. Diferente do
my-rules.md do Claude.ai, que vai no projeto do navegador, o CLAUDE.md fica
no seu computador.

### Estrutura de pastas da Pira Labs

Setup já feito na sessão de instalação:
```
C:\Users\Lenovo\PiraLabs\
├── CLAUDE.md                          (contexto global da Pira Labs)
└── auditoria-kz\
    ├── dados-cliente\
    ├── analises\
    ├── entregaveis\
    └── tasks\
        └── lessons.md
```

### Como abrir o Claude Code na pasta certa

Sempre abrir o Claude Code dentro da pasta do projeto, não na pasta do usuário:

```
cd C:\Users\Lenovo\PiraLabs
claude
```

Ou para a auditoria KZ:
```
cd C:\Users\Lenovo\PiraLabs\auditoria-kz
claude
```

### Conteúdo do CLAUDE.md da Pira Labs

```markdown
# CLAUDE.md — Pira Labs · Configuração Global

## Contexto

Celso Gama, co-fundador da Pira Labs — Propulsão de Negócios.
Pira Labs é boutique de Creative Business Turnaround.
Trabalho com auditoria, diagnóstico e execução em empresas de serviços
de alto valor agregado.

Sócios: Celso Gama (operações/TRANSPIRA) e Gabriela Aguiar (CEO/INSPIRA).
Sistema operacional: Windows.

## Regras de operação

SEMPRE verifique a documentação mais recente antes de qualquer implementação.
Só execute código se tiver certeza de que vai funcionar.
Antes de criar arquivo, verifique se já existe um com mesmo nome na pasta.
Antes de editar arquivo, mostre o que vai mudar e aguarde confirmação.
Nunca delete arquivo sem confirmação explícita.

Após qualquer correção ou ajuste, registre o aprendizado em tasks/lessons.md.

## Tom e voz

NUNCA usar travessão em posição alguma.
Vocabulário proibido: "em paralelo", "neste contexto", "além disso", "por fim",
"o objetivo é", "é importante destacar", "vale ressaltar", "certamente".
Escreva como humano pensando, não como relatório.
Prefira verbos a substantivos abstratos.
Português brasileiro.

## Anti-alucinação

Se não souber a resposta com certeza, diga explicitamente.
Não invente dados, números ou referências.
Se precisar de informação que não tem, peça.

## Estrutura padrão de output

Para documentos: Markdown (.md)
Para planilhas: CSV ou solicite confirmação antes de criar .xlsx
Para análises: estruture como contexto, dados, interpretação, próximo passo.
```

### CLAUDE.md por projeto (quando necessário)

Para projetos com contexto específico, crie um CLAUDE.md dentro da pasta:

```markdown
# CLAUDE.md — Projeto KZ · Auditoria Piloto

## Contexto do projeto

Piloto de auditoria INSPIRA para a KZ.
Objetivo: diagnosticar gargalos operacionais e de decisão.
Entregável final: relatório de diagnóstico + mapa de oportunidades.

## Arquivos relevantes nesta pasta

- dados-cliente/ — dados brutos enviados pelo cliente
- analises/ — outputs de análise gerados pelo Code
- entregaveis/ — versões finais para o cliente

## Regras específicas

Nunca envie dados do cliente para fora desta pasta.
Ao criar análise, salve em analises/ com data no nome (ex: analise-2026-03-21.md).
Todo entregável precisa de revisão antes de ser movido para entregaveis/.
```

---

## 4. SKILLS — INSTALAÇÃO E INVENTÁRIO

### Como as skills funcionam

Skills são conjuntos de instruções que o Claude Code carrega automaticamente
quando a tarefa é relevante. Cada skill usa ~100 tokens para verificar relevância
e só carrega completa quando ativada. Você não precisa pedir explicitamente,
mas pode mencionar o nome para garantir o uso.

### Comando de instalação (padrão)

```
npx skills add [URL_DO_REPOSITÓRIO] --skill [NOME_DA_SKILL]
```

### Skills instaladas — inventário completo

**Repositório oficial Anthropic** (`github.com/anthropics/skills`)

| Skill | Para que serve | Quando usar |
|---|---|---|
| `docx` | Criar e editar documentos Word | Relatórios, propostas, entregáveis |
| `pptx` | Criar apresentações PowerPoint | Decks de cliente, material de workshop |
| `xlsx` | Planilhas e análise de dados | Dados de cliente, orçamentos |
| `pdf` | Criar e extrair PDFs | Entregáveis finais, leitura de documentos |
| `theme-factory` | Temas visuais para decks | Apresentações com identidade consistente |
| `brand-guidelines` | Aplicar identidade visual | Material da Pira Labs, clientes com brand |
| `internal-comms` | Comunicados, relatórios, newsletters | Entregáveis KZ, comunicação interna |
| `doc-coauthoring` | Coautoria com revisão e comentários | Revisão de propostas, documentos colaborativos |
| `canvas-design` | Design visual de artefatos | Material de workshop, peças visuais |
| `skill-creator` | Criar e otimizar novas skills | Quando precisar de skill customizada |

**Repositório ComposioHQ** (`github.com/ComposioHQ/awesome-claude-skills`)

| Skill | Para que serve | Quando usar |
|---|---|---|
| `lead-research-assistant` | Pesquisa e qualificação de leads B2B | Antes de reunião com prospect |
| `competitive-ads-extractor` | Análise de anúncios de concorrentes | Diagnóstico de clientes de publicidade |

**Repositório coreyhaines31** (`github.com/coreyhaines31/marketingskills`)

Nota: instalar `product-marketing-context` primeiro — todas as outras skills leem
este arquivo antes de agir. É a fundação do stack de marketing.

| Skill | Para que serve | Quando usar |
|---|---|---|
| `product-marketing-context` | Contexto de produto, audiência e posicionamento — lido por todas as outras skills | SEMPRE instalar primeiro |
| `copywriting` | Copy de conversão com frameworks AIDA, PAS, BAB | Textos do site, propostas, LinkedIn |
| `marketing-psychology` | Cialdini + Kahneman aplicados | Argumentação em propostas e conteúdo |
| `cold-email` | Sequências de email B2B que convertem | Prospecção ativa do ICP da Pira Labs |
| `content-strategy` | Estratégia e calendário de conteúdo | Planejamento LinkedIn Celso e Gabriela |
| `launch-strategy` | Playbook completo de lançamento | Lançamento público da Pira Labs |
| `ai-seo` | Otimização para aparecer em respostas de IAs | Plano GEO — site da Pira Labs |

**Total instalado: 19 skills**

### Comandos de instalação verificados

```
# Anthropic — documentos
npx skills add https://github.com/anthropics/skills --skill docx
npx skills add https://github.com/anthropics/skills --skill pptx
npx skills add https://github.com/anthropics/skills --skill xlsx
npx skills add https://github.com/anthropics/skills --skill pdf

# Anthropic — design e apresentações
npx skills add https://github.com/anthropics/skills --skill theme-factory
npx skills add https://github.com/anthropics/skills --skill brand-guidelines
npx skills add https://github.com/anthropics/skills --skill canvas-design

# Anthropic — comunicação e escrita
npx skills add https://github.com/anthropics/skills --skill internal-comms
npx skills add https://github.com/anthropics/skills --skill doc-coauthoring

# Anthropic — meta
npx skills add https://github.com/anthropics/skills --skill skill-creator

# ComposioHQ — pesquisa e inteligência
npx skills add https://github.com/ComposioHQ/awesome-claude-skills --skill lead-research-assistant
npx skills add https://github.com/ComposioHQ/awesome-claude-skills --skill competitive-ads-extractor

# coreyhaines31 — marketing (instalar nesta ordem)
npx skills add coreyhaines31/marketingskills --skill product-marketing-context
npx skills add coreyhaines31/marketingskills --skill copywriting
npx skills add coreyhaines31/marketingskills --skill marketing-psychology
npx skills add coreyhaines31/marketingskills --skill cold-email
npx skills add coreyhaines31/marketingskills --skill content-strategy
npx skills add coreyhaines31/marketingskills --skill launch-strategy
npx skills add coreyhaines31/marketingskills --skill ai-seo
```

### Skills disponíveis para instalar quando necessário

**coreyhaines31/marketingskills** — lista completa verificada:
`ab-test-setup`, `ad-creative`, `analytics-tracking`, `churn-prevention`,
`competitor-alternatives`, `copy-editing`, `email-sequence`, `form-cro`,
`free-tool-strategy`, `lead-magnets`, `marketing-ideas`, `onboarding-cro`,
`page-cro`, `paid-ads`, `paywall-upgrade-cro`, `popup-cro`, `pricing-strategy`,
`programmatic-seo`, `referral-program`, `revops`, `sales-enablement`,
`schema-markup`, `seo-audit`, `signup-flow-cro`, `site-architecture`, `social-content`

Instalar quando o site estiver em construção: `schema-markup`, `seo-audit`, `site-architecture`
Instalar quando começar ads: `ad-creative`, `paid-ads`
Instalar para LinkedIn avançado: `social-content`, `email-sequence`

### Verificar skills instaladas

No Claude Code:
```
/skills
```

### Instalar todos os plugins do repositório Anthropic de uma vez

Alternativa ao comando por skill:
```
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

---

## 5. TASKS/LESSONS.MD NA PRÁTICA

### O que é

Arquivo de aprendizado contínuo. Cada vez que o Code comete erro, descobre algo
novo ou resolve problema inesperado, você registra ali. Na próxima sessão, o Code
lê esse arquivo e não repete os erros.

Princípio 3 dos 9 da equipe Anthropic: Self-Improvement Loop.

### Localização

```
C:\Users\Lenovo\PiraLabs\auditoria-kz\tasks\lessons.md
```

### Estrutura do arquivo

```markdown
# Lessons Learned — [PROJETO]

## [DATA] — [CONTEXTO]

### O que aconteceu
[Descreva o problema ou situação]

### O que funcionou
[A solução que resolveu]

### Regra derivada
[Instrução para evitar o mesmo problema no futuro]

---
```

### Como instruir o Code a usar o lessons.md

No início de cada sessão:
```
Leia o arquivo tasks/lessons.md antes de começar.
Aplique todas as regras derivadas listadas lá.
```

Ao final, se algo novo aconteceu:
```
Registre este aprendizado no tasks/lessons.md:
O que aconteceu: [DESCREVA]
O que funcionou: [DESCREVA]
Regra derivada: [ESCREVA A REGRA]
```

---

## 6. COMANDOS NATIVOS DO CODE

### Referência rápida

| Comando | O que faz | Quando usar |
|---|---|---|
| `/init` | Inicializa o Code na pasta, lê contexto | Sempre que abrir pasta nova pela primeira vez |
| `/plan` | Modo planejamento — descreve antes de executar | Qualquer tarefa não trivial |
| `/insights` | Análise do estado atual do projeto | Início de sessão, visão geral rápida |
| `/schedule` | Plano de execução com etapas e dependências | Tarefas complexas com múltiplas etapas |
| `/btw` | Instrução lateral para o restante da sessão | Quando lembrar de algo no meio do trabalho |
| `/clear` | Limpa contexto da sessão | Sessão longa, Code perdendo foco |
| `/memory` | Exibe o que o Code está lembrando | Checar se o contexto está correto |
| `/compact` | Comprime histórico sem perder informações | Alternativa ao /clear |
| `/skills` | Lista skills disponíveis | Verificar o que está instalado |

### Detalhamento dos mais importantes

**`/init`**
Use sempre que abrir uma pasta nova. O Code mapeia o que existe e se prepara.
```
/init
```

**`/plan`**
Regra da equipe Anthropic: entrar em plan mode para qualquer tarefa não trivial.
O Code descreve o que vai fazer e aguarda sua confirmação antes de executar.
```
/plan

Quero criar o relatório de diagnóstico da auditoria KZ com base nos dados
da pasta dados-cliente/.
```

**`/btw`**
Adiciona contexto sem interromper o fluxo.
```
/btw O cliente prefere números sempre acompanhados de contexto. Nunca cite
percentual sem dizer o que representa.
```

---

## 7. WORKFLOWS REAIS DA PIRA LABS

### WORKFLOW 7.1 — Início de sessão padrão

Use este bloco para abrir qualquer sessão de trabalho:

```
/init
Leia o CLAUDE.md deste projeto e o arquivo tasks/lessons.md.
Aqui está o que preciso fazer hoje: [TAREFA]
```

---

### WORKFLOW 7.2 — Auditoria Piloto KZ (INSPIRA)

**Inputs:** Documentos da empresa (planilhas, PDFs, textos)
**Output:** Relatório de diagnóstico + mapa de oportunidades

**Etapa 1 — Mapear os dados do cliente**
```
/plan

Tenho os seguintes arquivos na pasta dados-cliente/:
[LISTE OS ARQUIVOS]

Quero:
1. Entender o que cada arquivo contém
2. Identificar quais são relevantes para diagnóstico operacional
3. Identificar lacunas — o que está faltando para diagnóstico completo

Antes de processar qualquer arquivo, liste a estrutura de cada um.
Aguarde confirmação antes de prosseguir.
```

**Etapa 2 — Diagnóstico**
```
Com base nos dados mapeados, faça o diagnóstico:

1. Estado atual: o que os dados mostram sobre operação, receita, margem, estrutura
2. Gargalos: onde o processo trava, onde a decisão não acontece
3. Potencial represado: o que poderia melhorar sem mudança estrutural radical
4. Prioridades: os 3 pontos com maior impacto por menor esforço

Salve em: analises/diagnostico-[DATA].md
Não escreva o relatório final ainda — só o diagnóstico bruto.
```

**Etapa 3 — Mapa de oportunidades**
```
Com base no diagnóstico em analises/diagnostico-[DATA].md, crie o mapa
de oportunidades.

Para cada oportunidade: descrição, impacto estimado, esforço, prazo provável.
Critério: priorize por impacto sobre margem, não sobre receita.

Salve em: analises/mapa-oportunidades-[DATA].md
```

**Etapa 4 — Relatório final**
```
Com base no diagnóstico e no mapa de oportunidades, crie o relatório
para o cliente.

Estrutura:
1. Contexto da análise
2. O que encontramos (linguagem executiva, sem jargão)
3. As três oportunidades prioritárias
4. Próximos passos propostos

Tom: direto, sem jargão de consultoria, como quem já fez e pode provar
com número.

Salve em: entregaveis/relatorio-diagnostico-kz-v1.md
Antes de salvar, mostre as primeiras 3 seções para revisão.
```

**Etapa 5 — Stress test**
```
Leia o relatório em entregaveis/relatorio-diagnostico-kz-v1.md e verifique:

1. Tem alguma afirmação sem evidência nos dados analisados?
2. Tem jargão de consultoria que deveria ser substituído?
3. O tom está direto ou ainda soa como relatório genérico?

Não reescreva ainda. Só diagnostique o que precisa mudar.
```

---

### WORKFLOW 7.3 — Análise de Dados de Cliente

**Etapa 1 — Inspecionar antes de processar**
```
/plan

Tenho o arquivo [NOME] na pasta [PASTA].

Antes de qualquer análise:
1. Liste as colunas e os primeiros 5 valores de cada uma
2. Identifique tipos de dado
3. Identifique valores nulos ou inconsistentes
4. Me diga quais colunas são relevantes para análise de [FOCO]

Aguarde confirmação antes de prosseguir.
```

**Etapa 2 — Análise focada**
```
Com base na estrutura mapeada, faça a análise de [FOCO].

Para cada resposta:
- Qual é o número
- O que ele significa na prática
- O que ele sugere como próximo passo

Salve em: analises/analise-[EMPRESA]-[DATA].md
```

**Etapa 3 — Verificação**
```
Na análise gerada, verifique:

1. Algum número parece inconsistente com os outros?
2. Alguma conclusão foi além do que os dados suportam?
3. Algum dado relevante foi ignorado?

Corrija o arquivo com as correções necessárias.
```

---

### WORKFLOW 7.4 — Material de Workshop KZ

**Etapa 1 — Carregar contexto**
```
/init

Leia o arquivo projeto-kz-estrutura-workshops.md.
Me dê um resumo de onde o material está e o que falta.
```

**Etapa 2 — Desenvolver módulo**
```
/plan

Vou desenvolver o Módulo [N] do workshop KZ.

Tema: [TEMA]
Audiência: [PERFIL]
Duração: [HORAS]
Formato: [APOSTILA / SLIDES / ROTEIRO]

Estrutura de cada seção:
- Conceito central (sem jargão)
- Por que isso importa para este público
- Exemplo concreto do setor
- Atividade ou exercício aplicado

Antes de desenvolver, mostre a estrutura de seções e aguarde aprovação.
Salve em: kz-modulo-[N]-[TEMA].md
```

**Etapa 3 — Transformar em deck**
```
Use a skill theme-factory.

Com base no material em kz-modulo-[N]-[TEMA].md, crie a estrutura de slides:
- Slide de abertura
- Um slide por seção principal (máximo 4 pontos por slide)
- Slides de exercício com espaço para preenchimento
- Slide de síntese final

Tom: direto, sem jargão, visual limpo.
Salve em: kz-modulo-[N]-deck-estrutura.md
```

---

### WORKFLOW 7.5 — Pesquisa de Prospect (lead-research-assistant)

**Antes de reunião com prospect:**
```
Use a skill lead-research-assistant.

Empresa: [NOME DA EMPRESA]
Decisor: [NOME SE SOUBER]
Setor: [SETOR]

Quero saber:
1. O que a empresa faz e para quem
2. Sinais públicos de crescimento, problema ou mudança recente
3. Perfil do decisor se disponível
4. Qual das três portas de entrada da Pira Labs provavelmente se aplica:
   gargalo de decisão, crescimento sem estrutura, dados que não viram decisão
```

---

### WORKFLOW 7.6 — Análise de Concorrentes de Cliente (competitive-ads-extractor)

**Para diagnóstico de clientes do setor de publicidade:**
```
Use a skill competitive-ads-extractor.

Empresa do cliente: [NOME]
Concorrentes a analisar: [LISTA]

Quero saber:
1. Que mensagens cada concorrente está usando
2. Que formatos e canais estão priorizando
3. O que nenhum está fazendo que poderia ser oportunidade
```

---

## REFERÊNCIA RÁPIDA — SETUP COMPLETO

### O que está instalado e onde

```
Node.js v25.8.1
Claude Code v2.1.6 standalone

Pasta principal:
C:\Users\Lenovo\PiraLabs\

Skills instaladas:
C:\Users\Lenovo\.claude\skills\
├── docx
├── pptx
├── xlsx
├── pdf
├── theme-factory
├── brand-guidelines
├── internal-comms
├── doc-coauthoring
├── canvas-design
├── skill-creator
├── lead-research-assistant
└── competitive-ads-extractor
```

### Início de sessão padrão

```
cd C:\Users\Lenovo\PiraLabs
claude
/init
Leia o CLAUDE.md e o tasks/lessons.md.
O que preciso fazer hoje: [TAREFA]
```

### Quando o Code travar ou perder o fio

```
/clear
/init
Contexto: [RESUME EM 3 LINHAS]
Continue a partir daqui.
```

### Princípios operacionais (equipe Anthropic)

1. `/plan` antes de qualquer tarefa não trivial
2. Nunca marcar tarefa como completa sem provar que funciona
3. Após qualquer correção: registrar no tasks/lessons.md
4. Pedir solução elegante depois de fix rápido
5. Usar "use subagents" em pedidos que merecem mais computação

---

**Versão 3.0 — Março 2026**
**Testado ao vivo em sessões de instalação. 19 skills instaladas e verificadas.**
**Atualizar quando: nova skill instalada e testada, novo workflow validado,
lessons.md acumular padrão novo relevante.**

**Pira Labs · Propulsão de Negócios · Uso pessoal do Celso**
