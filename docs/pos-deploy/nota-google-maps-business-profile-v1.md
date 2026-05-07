# Nota Operacional · Atualização Google Business Profile e Google Maps
**Versão:** 1.0
**Data:** Maio 2026
**Para:** Celso ou Gabriela executam após o deploy do site novo
**Quando:** dentro de 7 dias após o site novo entrar no ar
**Tempo estimado:** 30 a 45 minutos

---

## Por que isso importa

A presença da PIRA LABS no Google Business Profile (antigo Google Meu Negócio) e no Google Maps afeta diretamente:

1. Como a PIRA aparece em buscas locais ("consultoria em São Paulo", "Creative Business Turnaround Brasil")
2. Como o Google Search mostra a empresa no Knowledge Panel à direita dos resultados
3. Como AI Overview e SearchGPT mostram a PIRA quando alguém pergunta "quem é a PIRA LABS"
4. A consistência da descrição da empresa em todos os pontos onde o Google indexa

A auditoria GEO de 28/04/2026 mostrou Score de Estrutura em 76/100. Parte desse gap é o site, parte é a presença em diretórios que o Google trata como fontes confiáveis. O Business Profile é uma dessas fontes.

---

## Checklist de atualização

### 1. Acessar e verificar o Business Profile

- [ ] Entrar em https://business.google.com/ com a conta Google que controla o Business Profile da PIRA LABS
- [ ] Se não houver Business Profile criado ainda, criar agora
- [ ] Verificar se o perfil está verificado (selo verde "Verificada"). Se não estiver, iniciar processo de verificação (geralmente envio de cartão postal com código)

### 2. Padronizar a descrição da empresa

**Descrição curta (até 150 caracteres):**

> A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.

**Descrição longa (até 750 caracteres):**

> A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise. Fundada em 2025 por Gabriela Aguiar e Celso Gama, a empresa atende sócios e CEOs de publicidade, saúde, jurídico, alimentação e serviços profissionais que chegaram a um ponto onde o crescimento parou ou a margem sumiu, mas a crise ainda não chegou. O método tem três fases: INSPIRA (diagnóstico), TRANSPIRA (execução com a equipe do cliente) e RESPIRA (estado de operação com clareza). Cada projeto tem os dois fundadores presentes, sem camada júnior intermediária.

**Importante:** este texto deve ser idêntico ao que está no `llms.txt` e nos schemas Organization do site. Consistência entre fontes é o sinal mais forte para LLMs.

### 3. Categorias do Business Profile

**Categoria principal:**
- Consultoria de gestão (Management consultant)

**Categorias secundárias (até 9 permitidas):**
- Consultoria empresarial (Business management consultant)
- Consultoria de marketing (Marketing consultant)
- Empresa de serviços corporativos
- Consultoria de inovação

### 4. Endereço

**Decisão estratégica:** a PIRA LABS é uma boutique sem escritório físico de atendimento. Há dois caminhos:

**Opção A · Endereço comercial em São Paulo (recomendada)**
- Listar endereço administrativo da empresa em São Paulo
- Marcar como "Service area business" (área de atendimento) em vez de "Storefront" (físico aberto ao público)
- Áreas de atendimento: São Paulo, Brasil, América Latina

**Opção B · Sem endereço público**
- Marcar como exclusivamente service area business sem endereço visível
- Pode reduzir a presença em buscas locais
- Apenas usar se houver razão forte para não publicar endereço

Recomendação: Opção A.

### 5. Contato

- Email: inspira@piralabs.com.br
- Site: https://piralabs.com.br
- Telefone: [decisão pendente, usar apenas se houver linha dedicada]

### 6. Horário de atendimento

- Segunda a sexta: 9h às 19h
- Sábados, domingos e feriados: fechado
- Atendimento exclusivamente por email (sem walk-in)

### 7. Fotos

Mínimo recomendado:
- [ ] Logo (versão final da KZ quando disponível; até lá, versão provisória)
- [ ] Foto dos fundadores (Gabriela e Celso), usar `Nós.png` aprovado
- [ ] Foto institucional/conceitual (qualidade alta, não meramente decorativa)

Não fazer: fotos genéricas de banco de imagem ("equipe sorrindo", "aperto de mãos"). Ofuscam o caráter boutique.

### 8. Posts no Business Profile (manter ativo)

Postar pelo menos 1 vez por mês conteúdo curto (200-300 caracteres) que reforce:
- Lançamentos de novos artigos do "Antes da Crise"
- Resultados verificados (anonimizados conforme regras canônicas)
- Atualizações da vertical jurídica

Posts antigos somem após 7 dias. Manter o ritmo importa para sinal de "empresa ativa".

### 9. Reviews

- [ ] Não pedir reviews ativamente nos primeiros meses (o Google penaliza picos súbitos)
- [ ] Se um cliente satisfeito mencionar gratidão por email, sugerir naturalmente: "se quiser, deixa um review no nosso Google Business"
- [ ] Responder a todos os reviews recebidos (positivos e negativos) com tom profissional, sem clichê

### 10. Google Maps

Após atualizar o Business Profile, verificar no Google Maps:
- [ ] Buscar "PIRA LABS" e ver como aparece
- [ ] Buscar "Creative Business Turnaround São Paulo" e ver se a PIRA aparece
- [ ] Buscar "consultoria boutique São Paulo" e ver se a PIRA aparece

Se aparecer com informação errada ou desatualizada, sinalizar correção via "Sugerir uma edição" para si mesmo.

---

## Verificação após 14 dias

Marcar no calendário 14 dias após a atualização para verificar:

- [ ] Knowledge Panel da PIRA LABS aparece quando se busca "PIRA LABS" no Google Search
- [ ] Descrição no Knowledge Panel bate com a descrição canônica
- [ ] Site piralabs.com.br aparece como link oficial no Knowledge Panel
- [ ] Foto do logo aparece corretamente
- [ ] Endereço aparece como service area, não como location pin físico

Se algum desses itens estiver errado, abrir ticket no Google Business Profile Help.

---

## Se for criar Business Profile do zero

Caso o Business Profile da PIRA LABS ainda não exista:

1. Criar conta em business.google.com com email institucional (inspira@piralabs.com.br)
2. Adicionar a empresa
3. Escolher "Sim, atendo clientes em diferentes áreas" (service area business)
4. Definir áreas de atendimento: São Paulo, Brasil, América Latina
5. Aguardar verificação por cartão postal (5 a 14 dias úteis para chegar)
6. Após verificar, executar todo o checklist acima

---

## Conexão com llms.txt e schemas

A descrição do Business Profile deve ser literal e idêntica à que aparece em:

1. `llms.txt` no site
2. Schema Organization no site (campo `description`)
3. Página `/sobre` do site
4. Bio do LinkedIn da PIRA LABS
5. Bio das contas pessoais de Gabriela e Celso (quando relevante)

Inconsistência aqui é o que mais impacta o score de Estrutura na auditoria GEO. Vale o tempo de fazer certo.

---

*Nota Operacional · Google Business Profile · PIRA LABS · Maio 2026*
