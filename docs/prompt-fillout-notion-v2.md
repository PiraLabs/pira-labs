# Prompt para GPT separado: configurar Fillout + Notion DB
**Versão:** 2.0
**Data:** Maio 2026
**Substitui:** prompt-fillout-notion.md (v1)
**Para:** Celso colar em uma conversa nova com GPT (separada deste contexto da PIRA LABS)
**Quando usar:** uma única vez, antes do deploy do site novo

**Mudanças em relação à v1:**
- Sistema de origens fechado em 13: inclui `header_global`, `404` e `direto` além das 10 origens de produto
- Conformidade LGPD com cookie de consentimento e campo de aceite
- Notificação ajustada para o email canônico `inspira@piralabs.com.br`
- Campos do formulário ajustados conforme decisões da copy v4.3
- Fluxo de notificação por origem (separar leads de Oxigênio dos demais por urgência)

---

## INSTRUÇÕES DE USO

1. Abra uma janela nova do GPT (sessão limpa, sem o contexto da PIRA LABS)
2. Cole tudo que está abaixo desta linha como primeiro prompt
3. Siga as instruções que o GPT der para conectar Fillout e Notion via Make ou Zapier
4. Quando tudo estiver pronto, copie a URL do formulário Fillout e cole no `.env` do projeto como `NEXT_PUBLIC_FILLOUT_URL`

---

## PROMPT PARA O GPT (cole tudo abaixo desta linha)

```
Você é meu consultor técnico para configurar uma integração entre Fillout (formulário) 
e Notion (banco de dados) para captação de leads de uma empresa de serviços.

A empresa se chama PIRA LABS. É uma boutique brasileira de Creative Business 
Turnaround para empresas de serviços. O site é piralabs.com.br.

Preciso da sua ajuda para:

1. Configurar o formulário no Fillout com a estrutura de campos abaixo
2. Configurar o Notion DB com a estrutura de colunas abaixo
3. Conectar Fillout → Notion via integração nativa do Fillout (preferencial) ou via Make/Zapier
4. Configurar duas notificações por email para inspira@piralabs.com.br

================================================================================
ESTRUTURA DO FORMULÁRIO FILLOUT
================================================================================

Nome do formulário: PIRA LABS · Falar conosco

Campos do formulário (na ordem em que aparecem para o usuário):

1. Nome (Texto curto, obrigatório)
   Placeholder: "Como você prefere ser chamado?"
   Validação: mínimo 2 caracteres

2. Email (Email, obrigatório)
   Placeholder: "Email para retorno"
   Validação: formato de email válido

3. Empresa (Texto curto, obrigatório)
   Placeholder: "Nome da empresa"

4. Setor (Dropdown, obrigatório)
   Opções:
   - Publicidade e agências criativas
   - Saúde
   - Jurídico
   - Alimentação
   - Serviços profissionais
   - Outro

5. Cargo (Texto curto, obrigatório)
   Placeholder: "Seu cargo na empresa (sócio, CEO, head etc.)"

6. Sobre o que você quer falar? (Dropdown com seleção múltipla, obrigatório)
   Opções:
   - INSPIRA (diagnóstico)
   - INSPIRA Jurídico (diagnóstico para escritórios)
   - Oxigênio IA Search (diagnóstico de presença em IAs)
   - TRANSPIRA (execução)
   - TRANSPIRA Jurídico (execução para escritórios)
   - FAÍSCA (palestras e mentorias)
   - FAÍSCA Jurídica (palestras para o setor jurídico)
   - Imprensa
   - Parceria
   - Outro

7. Conte um pouco do contexto (Texto longo, obrigatório)
   Placeholder: "O que está acontecendo na sua empresa hoje? O que te trouxe até aqui? 
   Não precisa de formalidade, só do que é importante para começar a conversa."
   Validação: mínimo 30 caracteres

8. Como você prefere o primeiro contato? (Dropdown, obrigatório)
   Opções:
   - Email para agendar conversa
   - Resposta com mais informações antes de marcar reunião
   - Tanto faz

9. Aceite LGPD (Checkbox, obrigatório)
   Texto: "Li e concordo com a Política de Privacidade da PIRA LABS. 
   Autorizo o uso dos meus dados para retorno desta conversa."
   Link: https://piralabs.com.br/politica-privacidade

10. Origem (Texto curto, oculto para o usuário, capturado automaticamente da URL)
    Captura o parâmetro ?origem= da URL onde o formulário foi acessado
    Valores possíveis: home, sobre, inspira, oxigenio, transpira, transpira_juridico, 
    inspira_juridico, faisca, faisca_juridica, creative_business_turnaround, 
    header_global, 404, direto

================================================================================
ESTRUTURA DO NOTION DB
================================================================================

Nome do DB: PIRA LABS · Leads

Colunas:

1. Data e hora (Created time, automático)
2. Nome (Texto, vem do campo 1 do formulário)
3. Email (Email, vem do campo 2)
4. Empresa (Texto, vem do campo 3)
5. Setor (Select com as 6 opções, vem do campo 4)
6. Cargo (Texto, vem do campo 5)
7. Interesse (Multi-select com as 10 opções, vem do campo 6)
8. Contexto (Texto longo, vem do campo 7)
9. Preferência de contato (Select, vem do campo 8)
10. Aceite LGPD (Checkbox, vem do campo 9)
11. Origem (Select com 13 opções: home, sobre, inspira, inspira_juridico, oxigenio, 
    transpira, transpira_juridico, faisca, faisca_juridica, 
    creative_business_turnaround, header_global, 404, direto)
12. Status (Select, valor padrão: "Aberto")
    Opções: Aberto, Em conversa, Proposta enviada, Convertido, Não convertido, Inválido
13. Atribuído a (Pessoa — funciona se Gabriela Aguiar e Celso Gama estiverem como membros do workspace Notion)
14. Responsável inicial (Select com duas opções: "Gabriela Aguiar" e "Celso Gama" — campo auxiliar de contingência, preencher junto com "Atribuído a". Se a automação de Pessoa falhar por conta de permissões ou workspace, este campo garante que a atribuição fique registrada e legível.)
    Opções: Gabriela Aguiar, Celso Gama
15. Próxima ação (Texto)
16. Data da próxima ação (Date)
17. Notas internas (Texto longo, sem aparecer em views resumidas)

================================================================================
LÓGICA DE ATRIBUIÇÃO INICIAL
================================================================================

Quando um lead chega, atribuir automaticamente conforme regra abaixo.

REGRA DE PRIORIDADE: interesse declarado prevalece sobre origem, exceto Oxigênio.
Se o lead veio de `home` mas marcou TRANSPIRA no interesse, atribuir a Celso.
Se o lead veio de `transpira` mas marcou INSPIRA no interesse, atribuir a Gabriela.
Exceção: se origem ou interesse for Oxigênio, sempre Celso, independente do restante.

- Origem `oxigenio` OU interesse contém Oxigênio → Atribuir a Celso Gama (PRIORIDADE MÁXIMA)
- Interesse contém TRANSPIRA OU TRANSPIRA Jurídico → Atribuir a Celso Gama
- Interesse contém INSPIRA OU INSPIRA Jurídico → Atribuir a Gabriela Aguiar
- Interesse contém FAÍSCA (qualquer variante) → Atribuir a Gabriela Aguiar
- Origem `header_global` OU `404` OU `creative_business_turnaround` OU `home` sem interesse específico → Atribuir a Gabriela Aguiar (primeiro contato institucional)
- Imprensa → Atribuir a Gabriela Aguiar
- Parceria → Atribuir a Gabriela Aguiar
- Demais casos → Atribuir a Gabriela Aguiar (default)

================================================================================
NOTIFICAÇÕES POR EMAIL
================================================================================

Configurar duas regras de notificação separadas:

Regra 1: Notificação padrão
- Disparar para: inspira@piralabs.com.br
- Quando: novo lead chega no Notion
- Assunto: "[PIRA LEAD] {Nome} ({Empresa}) — origem: {Origem}"
- Corpo: incluir todos os campos do formulário formatados em texto plano

Regra 2: Notificação de urgência (apenas para Oxigênio)
- Disparar para: inspira@piralabs.com.br
- Quando: novo lead com Origem = "oxigenio" OU Interesse inclui "Oxigênio IA Search"
- Assunto: "[PIRA · OXIGÊNIO] {Nome} ({Empresa}) — primeiro contato em até 24h"
- Corpo: incluir todos os campos + nota de prazo apertado

A notificação de urgência existe porque o Oxigênio tem oferta limitada (5 vagas para 
fundadores na primeira rodada a R$6.200) e cada lead precisa de retorno mais rápido 
do que os demais.

================================================================================
RESPOSTA AUTOMÁTICA DO FILLOUT (após submit)
================================================================================

Após o usuário enviar o formulário, mostrar mensagem de sucesso com este texto:

"Obrigado por escrever para a PIRA LABS.

Recebemos sua mensagem e vamos retornar em até dois dias úteis.

Se você tem urgência ou prefere seguir por email direto, escreva para 
inspira@piralabs.com.br citando o assunto.

— Gabriela Aguiar e Celso Gama"

Não enviar email automático de confirmação ao remetente. O retorno será humano, 
em até 48 horas, conforme política da PIRA LABS.

================================================================================
TESTES OBRIGATÓRIOS ANTES DE COLOCAR EM PRODUÇÃO
================================================================================

1. Submeter um lead de teste com cada uma das 13 origens diferentes na URL e 
   verificar que o campo Origem é capturado corretamente no Notion
2. Submeter um lead com origem oxigenio e verificar que a Regra 2 de notificação 
   dispara (e a Regra 1 também, simultaneamente)
3. Submeter um lead com aceite LGPD desmarcado e confirmar que o formulário 
   recusa o envio
4. Submeter um lead vazio em campos obrigatórios e confirmar mensagens de erro 
   em português
5. Verificar que a atribuição automática (Gabriela ou Celso) está acontecendo 
   conforme a regra
6. Testar em mobile (iPhone e Android) que o formulário é usável sem zoom

================================================================================

Por favor, me dê o passo a passo para configurar isso em ordem prática:
1. Primeiro o que fazer no Notion
2. Depois o que fazer no Fillout
3. Depois como conectar os dois
4. Depois como configurar as notificações
5. Depois os testes

Se precisar que eu te dê alguma informação adicional (como tokens de API, IDs do 
Notion etc.), me explique exatamente como obter cada um.
```

---

## DEPOIS QUE O FORMULÁRIO ESTIVER PRONTO

1. Copiar a URL do formulário Fillout (algo como `https://forms.fillout.com/t/abc123`)
2. Substituir no `.env.local` do projeto: `NEXT_PUBLIC_FILLOUT_URL=https://...`
3. Fazer um teste pelo site (acessar `/contato` e enviar um lead de teste)
4. Verificar no Notion DB se o lead chegou
5. Verificar no Gmail se as notificações chegaram
6. Marcar nas tasks do projeto: `[FILLOUT_CONFIGURADO_OK]`

---

*Prompt Fillout v2.0 · PIRA LABS · Maio 2026*
