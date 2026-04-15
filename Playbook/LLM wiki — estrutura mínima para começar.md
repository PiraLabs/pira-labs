---
tipo: prompt
tags: [gestão-conhecimento, agentes-ia, produtividade]
uso: [operacional-celso]
destino: A
---
T: LLM wiki — estrutura mínima para começar
F: [Arsenal Pira Labs — fonte não recuperada]
TP: configuração
FN: Define a estrutura mínima de um sistema de conhecimento persistente com pastas, regras de wiki e prompts de compilação, consulta e health check. Use ao montar a base de conhecimento de um projeto.
PERSONA: —
ETAPAS:
- —
REGRAS: raw/ contém fontes imutáveis. wiki/ é escrita e mantida inteiramente pelo LLM. outputs/ guarda respostas salvas que retroalimentam a base. Every topic gets its own .md file. Link related topics using [[topic]].
SC: —
OF: —
CP: [O que esta base cobre], [TEMA]
OT: Requer estrutura de pastas raw/, wiki/, outputs/ e arquivo CLAUDE.md no root do projeto.
SP:
- Prompt de compilação: "Read everything in raw/. Compile a wiki following CLAUDE.md rules. Create INDEX.md first."
- Prompts de consulta: "What are the 3 biggest gaps?", "Where do my sources disagree?", "Write a briefing on [TEMA]"
- Prompt de health check: "Flag contradictions. Find gaps. Suggest 3 new articles."
