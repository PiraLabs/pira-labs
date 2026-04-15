# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## O que é este repositório

Arsenal Pira Labs é a base de conhecimento operacional da Pira Labs. Não contém código — contém prompts, frameworks, metodologias e documentação de ferramentas usados no trabalho diário com IAs.

As regras gerais de operação estão no CLAUDE.md da pasta pai (`C:\Users\Lenovo\PiraLabs\CLAUDE.md`), que é lido automaticamente. Este arquivo cobre o que é específico ao Arsenal.

---

## Estrutura

```
Arsenal/
├── Playbook/     — prompts prontos, frameworks e metodologias de uso da IA
└── Ferramentas/  — documentação de ferramentas externas e conectores
```

**Playbook** cobre: formatos de conteúdo (01–07), engenharia de prompt, anti-alucinação, frameworks de apresentação, posicionamento de marca, workflows de pesquisa, gestão de conhecimento.

**Ferramentas** cobre: conectores Claude.ai (Drive, Gmail, Calendar), Perplexity, NotebookLM, Gamma, Canva MCP, skills do Claude Code.

---

## Schema de frontmatter

Todo arquivo do Arsenal usa este formato no topo:

```yaml
---
tipo: prompt | framework | workflow | configuração | referência
tags: [lista, de, tags]
uso: [operacional-celso, posicionamento-pira, pesquisa-prospect, ...]
destino: A  # A = Arsenal | B = skill para upload no Claude Code
---
```

### Valores canônicos do campo `uso`

| Valor | Quando carregar |
|---|---|
| `operacional-celso` | Rotina diária, ferramentas, configuração de ambiente |
| `posicionamento-pira` | Posicionamento da Pira Labs, pitch, marca |
| `pesquisa-prospect` | Diagnóstico pré-reunião, varredura de prospect |
| `proposta` | Construção e revisão de proposta comercial |
| `conteúdo-linkedin` | Criação de posts, carrosséis, roteiros para LinkedIn/Reels |
| `análise-setor` | Pesquisa de mercado, extração de anúncios, triangulação |
| `workshop` | Materiais e dinâmicas de workshop |
| `produtividade` | Engenharia de prompt, anti-alucinação, gestão de contexto |
| `gestão-conhecimento` | Estrutura de projects, wiki, memória persistente |

Seguido pelos campos do corpo:

| Campo | Significado |
|---|---|
| `T` | Título do prompt/framework |
| `F` | Arquivo de origem (ex: playbook-a-v5.md) |
| `TP` | Tipo: prompt, framework, workflow, configuração |
| `FN` | Função — o que faz e quando usar |
| `PERSONA` | Papel/persona a ser assumida pelo modelo |
| `ETAPAS` | Passos de execução |
| `REGRAS` | Restrições e comportamentos obrigatórios |
| `SC` | Situação de criação/atualização |
| `OF` | Output format |
| `CP` | Context parameters — o que precisa ter em mãos antes de usar |
| `OT` | Output target — qual ferramenta/modelo executa |
| `SP` | Subprompts — variações ou ramificações |

Ao criar ou editar um arquivo, mantenha todos os campos. Use `—` para campos sem conteúdo.

---

## Convenções

- Nomes de arquivo em português, sem underscores, com espaços normais.
- Arquivos numerados (01–07 em Playbook) são os formatos de conteúdo — a sequência importa.
- Não duplique prompts. Antes de criar, verifique se já existe equivalente no Playbook.
- Arquivos com nomes repetidos em versões diferentes: manter apenas a versão mais recente salvo instrução contrária.
- O campo `uso` é o filtro principal para saber em qual contexto de projeto carregar o arquivo.
