---
tipo: prompt
tags: [agentes-ia, produtividade, estrutura-prompt]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Troubleshooting de upload de skill
F: The Complete Guide to Building Skills for Claude.pdf
TP: técnica
FN: Diagnostica por que a skill nem sobe antes de qualquer teste funcional. Use quando o erro é estrutural e ocorre no upload, não na execução do workflow.
PERSONA: —
ETAPAS:
- Error: Could not find SKILL.md in uploaded folder: renomear o arquivo para SKILL.md com capitalização exata e verificar a presença dele na pasta.
- Error: Invalid frontmatter: corrigir delimitadores YAML, aspas abertas e sintaxe quebrada.
- Error: Invalid skill name: trocar nome com espaços ou capitais por kebab-case válido.
REGRAS: começar por nome do arquivo, sintaxe do YAML e nome da skill antes de caçar erro mais sofisticado.
SC: o upload só avança quando a estrutura mínima e a sintaxe básica estão íntegras.
OF: —
CP: mensagem de erro, estrutura atual da pasta, conteúdo do frontmatter, nome declarado da skill.
OT: filesystem local e pacote de upload.
SP: —
