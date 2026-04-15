---
tipo: prompt
tags: [agentes-ia, gestão-conhecimento, produtividade]
uso: [operacional-celso]
destino: B
---

T: Second Brain — MCPs para Obsidian
F: fonte não identificada — sessão 05/04/2026
TP: configuração
FN: Conecta Claude Code ao vault do Obsidian para busca semântica, consultas estruturadas e integração geral. Use quando precisar montar ou consultar uma arquitetura de second brain baseada em Obsidian.
PERSONA: —
ETAPAS:
- Instalação: Instale smart-connections para busca semântica, qmd para consultas estruturadas e metadados, e obsidian-mcp para integração geral.
- Config JSON: Configure os servidores MCP no arquivo `~/.claude/claude_desktop_config.json`.
- Estrutura de vault recomendada: Organize o vault com as pastas `00-home`, `atlas`, `inbox`, `knowledge`, `sessions` e `voice-notes`.
REGRAS: —
SC: —
OF: —
CP: caminho do vault do Obsidian
OT:
```text
# smart-connections: busca semântica
pip install smart-connections-mcp

# qmd: consultas estruturadas e metadados
npx -y @tobilu/qmd mcp

# obsidian-mcp: integração geral
npx -y obsidian-mcp
```

```text
{
  "mcpServers": {
    "smart-connections": {
      "command": "python",
      "args": ["smart-connections-mcp/server.py"],
      "env": {
        "OBSIDIAN_VAULT_PATH": "~/obsidian/seu-vault"
      }
    },
    "qmd": {
      "command": "qmd",
      "args": ["mcp"],
      "env": { "HOME": "~" }
    },
    "obsidian": {
      "command": "npx",
      "args": ["-y", "obsidian-mcp"]
    }
  }
}
```
SP:
- smart-connections: busca semântica.
- qmd: consultas estruturadas e metadados.
- obsidian-mcp: integração geral.
- Estrutura de vault recomendada:
```text
obsidian-vault/
├── 00-home/
│   ├── index.md
│   ├── daily/
│   └── top-of-mind.md
├── atlas/
│   ├── projects.md
│   └── research.md
├── inbox/
│   └── queue-generated/
├── knowledge/
├── sessions/
└── voice-notes/
```
