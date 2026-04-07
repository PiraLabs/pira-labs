# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é este repositório

Vault Obsidian da Pira Labs chamado **biblioteca-conceitual**. Serve como base de conhecimento estruturada para pesquisa, benchmarks e referências conceituais usadas nos projetos de Creative Business Turnaround.

Não há código-fonte, comandos de build ou testes. A operação é inteiramente via arquivos Markdown gerenciados pelo Obsidian.

## Estrutura de pastas prevista

Baseada no workspace.json do Obsidian:

- `CC/` — Contexto Setorial: análises por setor (publicidade, saúde, jurídico, alimentação, serviços profissionais)
- `BM/` — Benchmarks: casos reais documentados, dados comparativos
- `IA/` — IA e Inovação: referências sobre uso de IA em negócios
- `TM/` — Tendência de Mercado: sinais de mercado e movimentos setoriais

## Plugins instalados

- **dataview** (v0.5.68): permite queries em notas via frontmatter. Usar sintaxe `TABLE`, `LIST`, `TASK` em blocos de código com tipo `dataview`.
- **obsidian-git** (v2.38.0): sincronização automática com Git. Não commitar arquivos `.obsidian/workspace.json` se contiver apenas estado local da interface.

## Convenções para notas

- Frontmatter YAML para todos os arquivos de conteúdo, com campos como `tags`, `setor`, `fonte`, `data`.
- Links internos com `[[nome-da-nota]]`.
- Dados sem fonte verificada devem ser marcados como `[VERIFICAR]`.
- Arquivos gerados para cliente vão em `entregaveis/` quando aplicável.

## Regras herdadas do CLAUDE.md global

As regras de tom, voz e operação definidas em `C:\Users\Lenovo\PiraLabs\CLAUDE.md` se aplicam integralmente aqui. Em especial:
- Nunca usar travessão.
- Português brasileiro por padrão.
- Registrar em `tasks/lessons.md` após cada etapa concluída.
