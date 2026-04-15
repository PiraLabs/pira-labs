---
tipo: prompt
tags: [gestão-conhecimento, framework, estrutura-prompt, produtividade]
uso: [operacional-celso, posicionamento-pira]
destino: A
---

T: Roteamento de projeto por tipo de trabalho
F: playbook-a-v5.md
TP: workflow
FN: Define em qual projeto cada demanda deve rodar para evitar contaminação de contexto. Use no início de um trabalho para decidir onde executar a tarefa.
PERSONA: —
ETAPAS:
- Trabalho da Pira Labs: Use o projeto Arsenal Pira Labs.
- Trabalho de cliente específico: Crie um projeto com o nome do cliente. Suba o briefing e, se necessário, uma versão do my-rules.md ajustada para aquele contexto.
- Trabalho acadêmico: Crie um projeto separado. Suba o my-voice-celso.md mas não o my-rules.md da Pira Labs.
- Trabalho da Gabriela: Quando o my-voice-gabriela.md estiver pronto, crie um projeto separado com os arquivos dela.
REGRAS: Não misturar o contexto da Pira Labs em trabalho acadêmico. Não misturar o projeto da Gabriela com o do Celso.
SC: Criar projeto separado quando o contexto de marca não for relevante ou quando a voz exigir arquivos próprios.
OF: —
CP: tipo de trabalho, nome do cliente, existência de briefing, disponibilidade dos arquivos de voz e regras.
OT: Depende de múltiplos projetos no Claude com arquivos próprios.
SP: Arsenal Pira Labs: projeto para conteúdo, posicionamento e cliente da própria Pira Labs. Projeto de cliente: ambiente dedicado por conta ou trabalho sob demanda. Projeto acadêmico: ambiente limpo sem contaminação de marca. Projeto Gabriela — Conteúdo: ambiente dedicado à voz e aos arquivos da Gabriela.
