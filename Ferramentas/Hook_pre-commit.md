---
tipo: prompt
tags: [agentes-ia, produtividade, gestão-conhecimento]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: Hook pre-commit
F: [Arsenal Pira Labs, fonte não recuperada]
TP: configuração
FN: Executa checagens automáticas de TypeScript, ESLint e testes antes do commit. Use quando quiser bloquear commits que quebrem baseline técnico do projeto.
PERSONA: —
ETAPAS:
- TypeScript: `npx tsc --noEmit || exit 1`
- Arquivos staged: `STAGED=$(git diff --cached --name-only | grep -E '\.(ts|tsx)$')`
- ESLint: `[ -n "$STAGED" ] && npx eslint $STAGED --quiet || exit 1`
- Testes: `npm test -- --silent || exit 2`
REGRAS: Imprimir `"All checks passed!"` ao final e encerrar com `exit 0` quando tudo passar.
SC: `exit 1` em falha de TypeScript ou ESLint. `exit 2` em falha de testes.
OF: Script bash.
CP: —
OT: Arquivo `.claude/hooks/pre-commit.sh`, `npx tsc`, `npx eslint`, `npm test`.
SP: Deve ser chamado pelo hook `PreToolUse` configurado em `.claude/settings.json`.
