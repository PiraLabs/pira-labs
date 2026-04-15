---
tipo: prompt
tags: [revisão-texto, auditoria-oferta, vendas]
uso: [proposta]
destino: A
---

T: Revisão de Proposta ou Entregável
F: [Arsenal Pira Labs — fonte não recuperada]
TP: workflow
FN: Faz stress test, identifica pontos frágeis, reescreve trechos vulneráveis e valida clareza para leitura fria. Use antes de enviar qualquer proposta, diagnóstico ou entregável para cliente.
PERSONA: —
ETAPAS:
- Passo 1 — Stress test:
```text
Leia esta proposta/entregável:

[COLE O DOCUMENTO]

Atue como três perfis diferentes:
1. Cliente cético que já foi decepcionado por consultoria
2. Cliente sobrecarregado que lê em 30 segundos
3. Cliente analítico que questiona cada afirmação

Para cada perfil:
- O que chama atenção positivamente
- O que gera resistência ou desconfiança
- O que falta para convencer

Não reescreva ainda. Só diagnostique.
```
- Passo 2 — Identificar os três pontos mais fracos:
```text
Com base no diagnóstico, quais são os três argumentos
ou seções mais vulneráveis deste documento?

Para cada um:
- Por que é vulnerável
- O que precisaria mudar (conteúdo, ordem ou linguagem)
- Como ficaria após a correção
```
- Passo 3 — Reescrever os pontos identificados:
```text
Reescreva os três pontos vulneráveis identificados.

Preserve o restante do documento.
Tom: direto, sem jargão, como quem já fez e pode provar
com número.
Nenhum superlativo sem evidência.
Nenhuma promessa sem mecanismo explicado.
```
- Passo 4 — Cold-friendly test:
```text
Leia o documento como alguém que nunca ouviu falar da Pira Labs.

Três perguntas:
1. Em uma frase: o que esta empresa faz?
2. Para quem especificamente é esta proposta?
3. Por que eu deveria acreditar que entregam o que prometem?

Se qualquer resposta for vaga, aponte onde o documento falha.
```
REGRAS:
- Não reescreva ainda na etapa de stress test.
- Só diagnostique na etapa de stress test.
- Preserve o restante do documento ao reescrever.
- Tom: direto, sem jargão.
- Nenhum superlativo sem evidência.
- Nenhuma promessa sem mecanismo explicado.
SC: —
OF: entregável revisado com pontos fracos identificados e corrigidos.
CP: [COLE O DOCUMENTO]
OT: Claude.
SP: —
