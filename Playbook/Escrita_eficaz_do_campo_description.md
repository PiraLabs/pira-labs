---
tipo: prompt
tags: [agentes-ia, prompt-engineering, estrutura-prompt]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Escrita eficaz do campo description
F: The Complete Guide to Building Skills for Claude.pdf
TP: técnica
FN: Ensina a escrever a descrição que controla o trigger da skill sem cair em vagueza ou tecnicismo vazio. Use quando a skill existe, mas ninguém sabe quando ela deveria disparar.
PERSONA: —
ETAPAS:
- Structure: escrever a descrição na lógica [What it does] + [When to use it] + [Key capabilities].
- Include trigger phrases: mencionar tarefas e frases específicas que usuários realmente diriam.
- Mention file types if relevant: citar formatos de arquivo quando fizerem parte do trigger.
- Avoid bad descriptions: evitar descrições vagas, sem trigger ou técnicas demais para o usuário final.
REGRAS: a descrição precisa dizer o que a skill faz e quando usar; usar frases acionáveis; evitar vagueza e abstração excessiva.
SC: a descrição deve permitir que Claude saiba quando carregar a skill sem precisar abrir o resto do conteúdo.
OF: —
CP: tarefa principal, frases de ativação, arquivos ou formatos envolvidos, capacidades-chave.
OT: frontmatter YAML.
SP:
- Good descriptions: específicos, acionáveis, com trigger phrases e valor claro.
- Bad descriptions: vagos, sem trigger ou descritos no jargão interno da implementação.
