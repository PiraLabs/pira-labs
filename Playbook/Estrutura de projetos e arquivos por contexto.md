---
tipo: prompt
tags: [gestão-conhecimento, estrutura-prompt, framework, produtividade]
uso: [operacional-celso]
destino: A
---

T: Estrutura de projetos e arquivos por contexto
F: playbook-a-v5.md
TP: configuração
FN: Define a arquitetura mínima de arquivos por tipo de projeto no Claude. Use quando for montar ou revisar a estrutura operacional de um projeto antes de começar a trabalhar.
PERSONA: —
ETAPAS:
- Criar um projeto com os arquivos relevantes para aquele contexto: Cada projeto carrega os arquivos relevantes para aquele contexto.
- Organizar a estrutura conforme o tipo de projeto: Use uma estrutura de arquivos distinta para projeto genérico, Arsenal Pira Labs, Voz Gabriela e projeto de cliente ou trabalho.
REGRAS: O Claude lê tudo no início de cada conversa, sem você precisar repetir.
SC: —
OF: —
CP: nome do projeto, tipo de projeto, arquivos de contexto disponíveis, cliente ou marca relacionada.
OT: Depende de projeto no Claude com leitura automática dos arquivos no início de cada conversa.
SP: Projeto genérico: base com prompt principal, guia de configuração, prompts prontos, voz, regras e referência de voz. Arsenal Pira Labs: projeto já existente com índice mestre, guias de marca, documento mestre e arquivos de voz e regras. Voz Gabriela: projeto separado a ser criado quando houver amostras suficientes da voz dela. Projeto de cliente ou trabalho: base por demanda com briefing, regras ajustadas e pasta de outputs.
