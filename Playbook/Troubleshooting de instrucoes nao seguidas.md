---
tipo: prompt
tags: [agentes-ia, produtividade, framework]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Troubleshooting de instruções não seguidas
F: The Complete Guide to Building Skills for Claude.pdf
TP: técnica
FN: Corrige skill que carrega, mas não obedece o que está escrito. Use quando o problema não é trigger nem conexão, e sim a forma como as instruções foram redigidas ou organizadas.
PERSONA: —
ETAPAS:
- Instructions too verbose: encurtar instruções, usar listas e mover detalhe para arquivos separados.
- Instructions buried: colocar o que é crítico no topo com headers claros.
- Ambiguous language: substituir frases vagas por validações específicas e verificáveis.
- Advanced technique: transformar validações críticas em script quando possível.
- Model laziness: acrescentar notas explícitas de thoroughness, sabendo que isso funciona melhor no prompt do usuário do que no SKILL.md.
REGRAS: instrução enterrada é quase instrução inexistente; linguagem ambígua produz execução frouxa; validação crítica deve ser determinística quando possível.
SC: Claude precisa seguir a ordem, validar o que importa e não pular passo crítico.
OF: —
CP: instruções atuais, pontos ignorados, validações exigidas, possibilidade de script.
OT: SKILL.md, scripts, prompt do usuário.
SP:
- Better validation example: Before calling create_project, verify project name, assignee e start date.
