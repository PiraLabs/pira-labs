---
tipo: prompt
tags: [estrutura-prompt, prompt-engineering, framework, produtividade]
uso: [operacional-celso]
destino: A
---

T: Estruturação de Prompts com XML — Mega-Prompt Framework
F: [Arsenal Pira Labs — fonte não recuperada]
TP: framework
FN: Organiza prompts em compartimentos XML para separar função, meta, etapas, contexto e formato. Use quando a tarefa pede fluxo multi-etapa, contexto modular ou controle fino de tom e forma do output.
PERSONA: —
ETAPAS:
- `<role>`: usar quando precisa de expertise especializada; pular quando a tarefa é de conhecimento geral.
- `<goal>`: usar sempre; nunca pular.
- `<key_tasks>`: usar quando o trabalho é multi-etapa com ordem específica; pular quando a tarefa é simples de ação única.
- `<response_structure>`: usar quando tom, profundidade ou persona importam; pular quando o tom padrão serve.
- `<session_structure>`: usar quando quer fluxo multi-turno guiado; pular quando quer tudo em uma resposta.
- `<examples>`: usar quando tem um estilo específico de output em mente; pular quando está explorando.
- `<information_about_me>`: usar quando o modelo precisa do seu contexto específico; pular quando a tarefa é hipotética ou genérica.
- `<response_format>`: usar quando precisa de shape específico no output; pular quando está bem com o modelo escolher.
REGRAS: Distinção crítica: `<response_structure>` controla caráter da resposta. `<response_format>` controla forma do output. Os nomes das tags são flexíveis.
SC: `<goal>` — sempre, nunca pular.
OF:
```text
<role>
[Expertise + especialização + contexto de indústria]
</role>

<goal>
[Resultado único em 1-2 frases]
</goal>

<key_tasks>
Step 1: [Ação]
Step 2: [Ação]
Step 3: [Ação]
</key_tasks>

<response_structure>
- [Guia de tom e profundidade]
- [Perspectiva ou persona a adotar]
- [Restrições de estilo]
</response_structure>

<session_structure>
- [Resposta única vs. multi-turno]
- [Quem lidera: você ou Claude]
- [Checkpoints ou aprovações necessárias]
</session_structure>

<examples>
Exemplo 1:
Input: [Amostra]
Output: [Output exato desejado]
</examples>

<information_about_me>
- [Detalhe relevante #1]
- [Detalhe relevante #2]
</information_about_me>

<response_format>
[Estrutura exata: lista, tabela, narrativa, código]
[Restrições de tamanho ou formatação]
</response_format>
```
CP: expertise e contexto, resultado desejado, etapas-chave, guias de tom, estrutura de sessão, exemplos, informações relevantes sobre você, formato de resposta.
OT: Claude foi treinado para reconhecer tags XML como delimitadores estruturais.
SP: Exemplos de flexibilidade de nomes: `<brand_info>` no lugar de `<information_about_me>`, `<steps>` no lugar de `<key_tasks>`.
