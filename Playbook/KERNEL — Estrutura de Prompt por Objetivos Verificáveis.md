---
tipo: prompt
tags: [estrutura-prompt, prompt-engineering, framework, produtividade]
uso: [operacional-celso]
destino: A
---

T: KERNEL — Estrutura de Prompt por Objetivos Verificáveis
F: [Arsenal Pira Labs — fonte não recuperada]
TP: framework
FN: Reduz variação, desperdício de tokens e inconsistência ao estruturar prompts por objetivo verificável. Use ao quebrar tarefas complexas em prompts simples, reproduzíveis e checáveis.
PERSONA: —
ETAPAS:
- K | Keep it simple: Um objetivo claro, sem contexto longo.
- E | Easy to verify: Critério de sucesso verificável antes de pedir o output.
- R | Reproducible results: Sem referências temporais; versões e requisitos exatos.
- N | Narrow scope: Um prompt = um objetivo; dividir tarefas complexas.
- E | Explicit constraints: Dizer o que NÃO fazer; impor limites claros.
- L | Logical structure: Formatar todo prompt como Context, Task, Constraints, Format.
REGRAS: Regra de encadeamento: em vez de um prompt complexo, escrever múltiplos prompts KERNEL em sequência. Cada um faz uma coisa bem e alimenta o próximo.
SC: Teste de viabilidade: "Se você não consegue verificar o sucesso, a IA não consegue entregar." E: "O mesmo prompt deve funcionar semana que vem e mês que vem."
OF: Context, Task, Constraints, Format.
CP: objetivo claro, critério de sucesso verificável, restrições explícitas, formato de saída.
OT: —
SP: —
