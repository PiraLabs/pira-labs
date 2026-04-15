---
tipo: prompt
tags: [agentes-ia, produtividade, gestão-conhecimento]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: settings.json mínimo
F: [Arsenal Pira Labs, fonte não recuperada]
TP: configuração
FN: Define um exemplo mínimo de permissões e hook de pré execução para projetos com `.claude`. Use quando precisar estabelecer um baseline de segurança e automação no ambiente.
PERSONA: —
ETAPAS: —
REGRAS: `"allow": ["Bash(npm run lint)", "Bash(npm test)", "Bash(git diff)", "Bash(git status)"]`, `"deny": ["Bash(rm -rf*)", "Bash(git push --force)", "Read(.env*)"]`.
SC: —
OF: JSON.
CP: —
OT: Arquivo `.claude/settings.json`.
SP: Hooks: `PreToolUse` com `matcher: "Bash"` e comando `.claude/hooks/pre-commit.sh`.
