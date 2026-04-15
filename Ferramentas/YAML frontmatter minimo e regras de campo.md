---
tipo: prompt
tags: [agentes-ia, estrutura-prompt, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: YAML frontmatter mínimo e regras de campo
F: The Complete Guide to Building Skills for Claude.pdf
TP: configuração
FN: Define o frontmatter mínimo que faz a skill ser reconhecida e reduz risco de erro ou injeção. Use quando estiver criando ou auditando o cabeçalho YAML do SKILL.md.
PERSONA: —
ETAPAS:
- Minimal required format: declarar name e description entre delimitadores YAML.
- Field requirements: manter name em kebab-case e description com o que a skill faz e quando deve ser usada.
- Optional fields: adicionar license, compatibility e metadata quando fizer sentido.
- Security restrictions: remover XML angle brackets e nomes reservados com claude ou anthropic.
REGRAS: name é obrigatório em kebab-case; description é obrigatória, com menos de 1024 caracteres, sem XML tags, com função e trigger; não usar claude ou anthropic no nome; não inserir conteúdo malicioso no frontmatter.
SC: o frontmatter precisa ser sintaticamente válido, seguro e específico o suficiente para acionar a skill corretamente.
OF:
```text
---
name: your-skill-name
description: What it does. Use when user asks to [specific phrases].
---
```
CP: nome da skill, descrição funcional, triggers de uso, requisitos de ambiente, metadata opcional.
OT: YAML frontmatter em SKILL.md.
SP:
- compatibility: campo opcional para requisitos de ambiente, produto ou acesso de rede.
- metadata: campo opcional para author, version, mcp-server e outros key-value pairs.
