---
tipo: prompt
tags: [agentes-ia, produtividade, framework]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Troubleshooting de conexão MCP em skills
F: The Complete Guide to Building Skills for Claude.pdf
TP: técnica
FN: Separa falha de skill de falha do MCP e evita perder tempo mexendo no lugar errado. Use quando a skill carrega, mas chamadas de ferramenta quebram.
PERSONA: —
ETAPAS:
- Verify MCP server is connected: checar status Connected em Settings > Extensions.
- Check authentication: validar API keys, scopes, permissões e tokens.
- Test MCP independently: pedir a Claude para chamar o MCP sem skill e verificar se a falha persiste.
- Verify tool names: conferir nomes exatos das ferramentas e sensibilidade a maiúsculas.
REGRAS: se o MCP falha sozinho, o problema não está na skill; tool names precisam bater exatamente.
SC: a skill só pode ser culpada depois que conectividade, autenticação e tool names forem descartados.
OF: —
CP: mensagem de erro, serviço conectado, credenciais, nome das tools, teste direto do MCP.
OT: MCP server, autenticação do serviço, settings do Claude.
SP: —
