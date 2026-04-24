// Dicionário de traduções PT/EN
// Mapeamento de rotas entre idiomas

export const ROUTE_MAP_PT_TO_EN: Record<string, string> = {
  '/': '/en',
  '/sobre': '/en/about',
  '/servicos': '/en/services',
  '/cases': '/en/cases',
  '/contato': '/en/contact',
}

export const ROUTE_MAP_EN_TO_PT: Record<string, string> = {
  '/en': '/',
  '/en/about': '/sobre',
  '/en/services': '/servicos',
  '/en/cases': '/cases',
  '/en/contact': '/contato',
}

export const ROUTE_MAP_PT_TO_ES: Record<string, string> = {
  '/': '/es',
  '/sobre': '/es/sobre',
  '/servicos': '/es/servicos',
  '/cases': '/es/cases',
  '/contato': '/es/contato',
}

export const ROUTE_MAP_ES_TO_PT: Record<string, string> = {
  '/es': '/',
  '/es/sobre': '/sobre',
  '/es/servicos': '/servicos',
  '/es/cases': '/cases',
  '/es/contato': '/contato',
}

function toPtPath(pathname: string): string {
  if (pathname.startsWith('/en')) return ROUTE_MAP_EN_TO_PT[pathname] ?? '/'
  if (pathname.startsWith('/es')) return ROUTE_MAP_ES_TO_PT[pathname] ?? '/'
  return pathname
}

export function getPathInLocale(pathname: string, targetLocale: 'pt' | 'en' | 'es'): string {
  const pt = toPtPath(pathname)
  if (targetLocale === 'pt') return pt
  if (targetLocale === 'en') return ROUTE_MAP_PT_TO_EN[pt] ?? '/en'
  return ROUTE_MAP_PT_TO_ES[pt] ?? '/es'
}

/** @deprecated use getPathInLocale */
export function getAlternatePath(pathname: string): string {
  if (pathname.startsWith('/en')) {
    return ROUTE_MAP_EN_TO_PT[pathname] ?? '/'
  }
  return ROUTE_MAP_PT_TO_EN[pathname] ?? '/en'
}

// ─── Traduções de conteúdo ───────────────────────────────────────────────────

export const dict = {
  pt: {
    nav: {
      services: 'Serviços',
      cases: 'Cases',
      about: 'Sobre',
      contact: 'Contato',
      cta: 'Solicitar diagnóstico',
    },
    footer: {
      tagline: 'Propulsão de Negócios.',
      category: 'Creative Business Turnaround.',
      slogan: 'Liberamos o próximo nível.',
      nav: 'Navegação',
      contact: 'Contato',
      location: 'São Paulo, Brasil',
      rights: 'Todos os direitos reservados.',
      closing: 'Seguimos em propulsão.',
      links: [
        ['/', 'Home'],
        ['/servicos', 'Serviços'],
        ['/cases', 'Cases'],
        ['/sobre', 'Sobre'],
        ['/contato', 'Contato'],
      ] as [string, string][],
    },
    home: {
      meta: {
        title: 'PIRA LABS | Creative Business Turnaround',
        description:
          'Boutique brasileira de Creative Business Turnaround. Liberamos o próximo nível de negócios com potencial represado.',
      },
      hero: {
        eyebrow: 'Creative Business Turnaround',
        h1: ['Todo negócio tem', 'um próximo nível.'],
        body: 'O que a PIRA LABS encontra é o que está entre você e ele. Entramos, diagnosticamos o problema real, construímos junto e saímos quando o negócio está em propulsão.',
        ctaPrimary: 'Solicitar diagnóstico',
        ctaSecondary: 'Ver case',
      },
      proof: {
        eyebrow: 'Resultado verificado · Case jurídico anonimizado',
        items: [
          { num: '1.500+', label: 'Páginas analisadas', desc: 'Leis, jurisprudências e doutrina cruzadas' },
          { num: '400h → 36h', label: 'Esforço equivalente', desc: '10 profissionais por uma semana. Entregamos o equivalente em 36 horas.' },
          { num: 'R$160K/mês', label: 'Potencial de receita', desc: 'Capacidade operacional liberada para novos contratos' },
        ],
        disclaimer: 'Case anonimizado. Identidade disponível mediante NDA.',
      },
      method: {
        eyebrow: 'O método',
        h2: ['Três momentos.', 'Um processo.'],
        cards: [
          {
            badge: 'INSPIRA',
            color: '#2A6B8A',
            sub: 'Gabriela lidera',
            h3: 'Diagnóstico do problema real',
            body: 'Não chegamos com solução pronta. Chegamos com as perguntas que ninguém fez antes. Mapeamos o problema real — que muitas vezes não é onde o decisor imagina — e desenhamos a rota.',
          },
          {
            badge: 'TRANSPIRA',
            color: '#BA7517',
            sub: 'Celso lidera',
            h3: 'Execução com resultado verificado',
            body: 'Entramos na operação. Construímos junto com o time. Integramos tecnologia curada onde amplifica — depois de entender o problema, nunca antes. Saímos com resultado verificado.',
          },
          {
            badge: 'RESPIRA',
            color: '#1F5C35',
            sub: 'O resultado, não um produto',
            h3: 'Negócio em propulsão',
            body: 'O negócio opera com clareza. O decisor está no comando do que importa. Esse é o estado que cada entrega da PIRA LABS busca alcançar. Não ficamos para sempre. Não saímos antes de entregar.',
          },
        ],
      },
      forWhom: {
        eyebrow: 'Para quem',
        h2: ['Negócios de serviços', 'com potencial represado.'],
        body: 'O cliente da PIRA LABS é o decisor que reconhece que o que existe hoje não leva ao próximo nível. A condição necessária não é o tamanho da empresa. É a disposição genuína de ver o problema de novo.',
        items: [
          { title: 'Gargalo de decisão', desc: 'Tudo passa por você. Cada decisão depende de você. Não por fraqueza — por ausência de clareza sobre o que pode ser delegado e como.' },
          { title: 'Crescimento sem estrutura', desc: 'O negócio cresce mas o que funcionava antes já não sustenta o próximo nível. Crescer sem reconstruir vai quebrar o que está funcionando.' },
          { title: 'Dados que não viram decisão', desc: 'A empresa tem informação. Mas ninguém parou para transformar isso em clareza. O problema está à vista — falta o olhar externo para nomeá-lo.' },
        ],
      },
      founders: {
        eyebrow: 'Os fundadores',
        h2: ['Dois fundadores.', 'Nós que operamos.'],
        gabriela: {
          role: 'CEO · INSPIRA',
          name: 'Gabriela Aguiar',
          body: 'Quase uma década construindo ecossistemas de inovação e venture capital no Brasil, EUA e países nórdicos. Professora de MBA na FIAP, mentora na FGV Ventures, em formação em IA no MIT. Chega com o repertório global que o cliente sozinho não alcançaria em anos.',
          quote: '"Não chego com solução pronta. Chego com a pergunta que muda o enquadramento do problema."',
        },
        celso: {
          role: 'Co-fundador · TRANSPIRA',
          name: 'Celso Gama',
          body: 'Escalou R$16M para R$163M em 24 meses. Virou margem de -64% para +15% em 6 meses na Diageo, sem aumentar receita. 79 pontos percentuais, parando onde ela vazava. Esses resultados são pré-IA — construídos com julgamento calibrado por consequência real.',
          quote: '"Sei onde colocar tecnologia e onde colocar gente porque já errei nos dois."',
        },
      },
      cta: {
        h2: 'Vale uma conversa.',
        body: 'Se você reconheceu o seu negócio em qualquer ponto desta página, a primeira conversa é gratuita e sem compromisso.',
        btn: 'Solicitar diagnóstico →',
      },
    },
    sobre: {
      meta: {
        title: 'Sobre os Fundadores',
        description:
          'Gabriela Aguiar e Celso Gama, fundadores da PIRA LABS. Boutique brasileira de Creative Business Turnaround.',
      },
      hero: {
        eyebrow: 'Os fundadores',
        h1: ['Sem intermediário entre', 'quem entende e quem resolve.'],
      },
      gabriela: {
        role: 'CEO · INSPIRA',
        name: 'Gabriela Aguiar',
        p1: 'Gabriela abre caminhos que ainda não estavam no mapa. Quase uma década construindo ecossistemas ativos dentro e fora do Brasil — pela Plug and Play, German Accelerator, Web Summit, South Summit.',
        p2: 'Professora de MBA na FIAP, mentora de startups na FGV Ventures, membro do Angel Investor Club. Em formação em IA no MIT.',
        p3: 'Chega com repertório real: sabe o que funciona no ecossistema global, o que ainda não chegou no Brasil, onde estão as conexões que o cliente sozinho não alcançaria em anos.',
        linkedin: 'LinkedIn →',
        badge: 'INSPIRA',
        quote: '"Não chego com solução pronta. Chego com a pergunta que muda o enquadramento do problema e com a visão do que está chegando no ecossistema global antes de chegar ao cliente."',
      },
      celso: {
        role: 'Co-fundador · TRANSPIRA',
        name: 'Celso Gama',
        p1: 'Celso entra quando a operação precisa de alguém que já viu isso antes. Virou margem de -64% para +15% em 6 meses atendendo uma multinacional do setor de bebidas, sem aumentar receita nem cortar equipe. Escalou receita de R$16M para R$163M em 24 meses em unidade que dirigiu. Coordenou mais de 600 pessoas e 100 fornecedores em tempo real nas Olimpíadas do Rio em 2016.',
        p2: 'MBA pelo Insper, pós-graduação em Marketing pela ESPM, graduações em Direito pelo Mackenzie e Publicidade pela FAAP. Em formação em IA no MIT.',
        p3: 'Aprendeu no pré-IA. Sabe julgar o que a tecnologia resolve e o que só gente resolve.',
        linkedin: 'LinkedIn →',
        badge: 'TRANSPIRA',
        results: [
          'R$16M para R$163M em 24 meses',
          'Margem de -64% para +15% em 6 meses na Diageo, sem aumentar receita (79 pp)',
          '600 pessoas e 100 fornecedores coordenados',
          'Setor jurídico: semana de 10 pessoas substituída por 4 ciclos de 8 horas',
        ],
        disclaimer: 'Todos os resultados são pré-IA.',
      },
    },
    servicos: {
      meta: {
        title: 'Serviços — INSPIRA e TRANSPIRA',
        description:
          'INSPIRA: diagnóstico do problema real. TRANSPIRA: execução com resultado verificado.',
      },
      hero: {
        eyebrow: 'Serviços',
        h1: ['Dois serviços.', 'Uma sequência natural.'],
      },
      inspira: {
        badge: 'INSPIRA',
        h2: 'Diagnóstico do problema real',
        p1: 'O momento em que a condição certa encontra o ponto certo e algo que estava parado começa a se mover. Não chegamos com solução pronta — chegamos com as perguntas que ninguém fez antes.',
        p2: 'Saída: o problema nomeado e a rota desenhada. Em formato que o decisor pode usar — documento ou apresentação, acordado no início.',
        cta: 'Solicitar INSPIRA →',
        deliverables: {
          title: 'O que o INSPIRA entrega',
          items: [
            'Diagnóstico de onde o problema está limitando o potencial',
            'Leitura de tendências e riscos do setor',
            'Mapeamento de soluções disponíveis no mercado para o problema identificado',
            'Rota desenhada em formato que o decisor pode usar',
          ],
        },
      },
      transpira: {
        badge: 'TRANSPIRA',
        h2: 'Execução com resultado verificado',
        p1: 'Tem um momento em que o decisor percebe que o que existe hoje não leva ao próximo nível. Isso não é falha de liderança. É ausência de clareza sobre o que precisa mudar — e clareza se constrói, não se inspira.',
        p2: 'A PIRA LABS não sai quando o prazo acaba. Os critérios de encerramento são definidos no início do projeto. Saímos quando os primeiros resultados acordados são verificados.',
        cta: 'Solicitar TRANSPIRA →',
        moves: {
          title: 'Os quatro movimentos',
          items: [
            ['Leitura', 'O que está acontecendo hoje é mapeado sem julgamento.'],
            ['Construção', 'O caminho é construído com o time, não para o time.'],
            ['Ativação', 'O novo caminho entra em operação real. Com consequência real.'],
            ['Calibração', 'Ajustes finos. Verificação dos resultados acordados.'],
          ] as [string, string][],
        },
      },
      cta: {
        h2: 'Acenda sua faísca.',
        body: 'A primeira conversa é gratuita e sem compromisso.',
        btn: 'Solicitar diagnóstico →',
      },
    },
    cases: {
      meta: {
        title: 'Cases — Resultados verificados',
        description:
          'Case jurídico: 1.500+ páginas analisadas, equivalente a 400 horas de esforço entregue em 36 horas.',
      },
      hero: {
        eyebrow: 'Cases',
        h1: 'Resultados verificados.',
      },
      case1: {
        sector: 'Setor jurídico · Boutique · Direito Civil',
        h2: ['Mais capacidade.', 'Sem precisar contratar.'],
        badge: 'Case anonimizado',
        body: 'Escritório boutique de Direito Civil com alta demanda e equipe no limite. Contratar não era opção. Terceirizar, risco. O trabalho precisava ser entregue com qualidade de sócio, no prazo de cliente impaciente.',
        metrics: [
          { num: '1.500+', label: 'Páginas analisadas', desc: 'Leis, jurisprudências e doutrina' },
          { num: '400h → 36h', label: 'Esforço equivalente', desc: '10 profissionais × 1 semana = 36 horas' },
          { num: 'R$160K/mês', label: 'Receita potencial', desc: 'Receita mensal liberada para o cliente' },
        ],
        method: [
          { badge: 'INSPIRA', color: '#2A6B8A', title: 'Diagnóstico do problema real', desc: 'Não começamos com ferramentas. Mapeamos o fluxo real de trabalho para identificar onde a energia vazava.' },
          { badge: 'TRANSPIRA', color: '#BA7517', title: 'Co-criação e calibração', desc: 'Construímos um squad de agentes calibrados para o contexto jurídico, com julgamento humano ativo em cada etapa.' },
          { badge: 'RESPIRA', color: '#1F5C35', title: 'Negócio em propulsão', desc: 'Base de dados organizada como ativo. Capacidade para novos contratos. Clareza sobre estratégia de crescimento.' },
        ],
        quote: '"Fizemos o que uma equipe de 10 pessoas demoraria uma semana para fazer."',
        quoteAuthor: 'Sócio de escritório boutique de Direito Civil, após revisão do trabalho entregue',
        disclaimer: 'Case anonimizado. Identidade disponível mediante NDA. · inspira@piralabs.com.br',
      },
      cta: {
        h2: 'Seu negócio tem o próximo nível esperando.',
        body: 'A primeira conversa é gratuita e sem compromisso.',
        btn: 'Solicitar diagnóstico →',
      },
    },
    contato: {
      meta: {
        title: 'Contato — Solicitar diagnóstico',
        description:
          'Entre em contato com a PIRA LABS para solicitar um diagnóstico. A primeira conversa é gratuita e sem compromisso.',
      },
      hero: {
        eyebrow: 'Contato',
        h1: 'Vale uma conversa.',
        body: 'A primeira conversa é gratuita e sem compromisso. Se você reconheceu o seu negócio, isso é suficiente para começar.',
      },
      form: {
        h2: 'Solicitar diagnóstico',
        name: { label: 'Nome *', placeholder: 'Seu nome' },
        email: { label: 'Email *', placeholder: 'seu@email.com' },
        company: { label: 'Empresa', placeholder: 'Nome da empresa' },
        message: { label: 'O que está acontecendo no negócio?', placeholder: 'Descreva brevemente o que está travando o crescimento ou o que você quer alcançar.' },
        submit: 'Enviar mensagem →',
        subject: 'Novo contato — piralabs.com.br',
      },
      info: {
        emailLabel: 'Email direto',
        locationLabel: 'Localização',
        location: 'São Paulo, Brasil',
        linkedinLabel: 'LinkedIn',
        linkedinText: 'linkedin.com/company/piralabs →',
        card: {
          title: 'Boutique por escolha.',
          body: 'Celso e Gabriela em cada projeto, do diagnóstico ao fechamento. Sem intermediário entre quem entende o problema e quem resolve.',
        },
      },
    },
  },

  en: {
    nav: {
      services: 'Services',
      cases: 'Cases',
      about: 'About',
      contact: 'Contact',
      cta: 'Request diagnosis',
    },
    footer: {
      tagline: 'Business Propulsion.',
      category: 'Creative Business Turnaround.',
      slogan: 'We unlock the next level.',
      nav: 'Navigation',
      contact: 'Contact',
      location: 'São Paulo, Brazil',
      rights: 'All rights reserved.',
      closing: 'Full propulsion ahead.',
      links: [
        ['/en', 'Home'],
        ['/en/services', 'Services'],
        ['/en/cases', 'Cases'],
        ['/en/about', 'About'],
        ['/en/contact', 'Contact'],
      ] as [string, string][],
    },
    home: {
      meta: {
        title: 'PIRA LABS | Creative Business Turnaround',
        description:
          'Brazilian boutique for Creative Business Turnaround. We unlock the next level of businesses with untapped potential.',
      },
      hero: {
        eyebrow: 'Creative Business Turnaround',
        h1: ['Every business has', 'a next level.'],
        body: "What PIRA LABS finds is what stands between you and it. We enter, diagnose the real problem, build together, and leave when the business is in full propulsion.",
        ctaPrimary: 'Request diagnosis',
        ctaSecondary: 'See case',
      },
      proof: {
        eyebrow: 'Verified result · Anonymized legal case',
        items: [
          { num: '1,500+', label: 'Pages analyzed', desc: 'Laws, case law and doctrine cross-referenced' },
          { num: '400h → 36h', label: 'Equivalent effort', desc: '10 professionals for a week. We delivered the equivalent in 36 hours.' },
          { num: 'R$160K/mo', label: 'Revenue potential', desc: 'Operational capacity freed for new contracts' },
        ],
        disclaimer: 'Anonymized case. Identity available under NDA.',
      },
      method: {
        eyebrow: 'The method',
        h2: ['Three moments.', 'One process.'],
        cards: [
          {
            badge: 'INSPIRA',
            color: '#2A6B8A',
            sub: 'Led by Gabriela',
            h3: 'Real problem diagnosis',
            body: "We don't arrive with a ready-made solution. We arrive with the questions nobody asked before. We map the real problem — often not where the decision-maker imagines — and draw the route.",
          },
          {
            badge: 'TRANSPIRA',
            color: '#BA7517',
            sub: 'Led by Celso',
            h3: 'Execution with verified results',
            body: 'We enter the operation. We build alongside the team. We integrate curated technology where it amplifies — after understanding the problem, never before. We leave with verified results.',
          },
          {
            badge: 'RESPIRA',
            color: '#1F5C35',
            sub: 'The result, not a product',
            h3: 'Business in propulsion',
            body: "The business runs with clarity. The decision-maker commands what matters. That is the state every PIRA LABS engagement aims to reach. We don't stay forever. We don't leave before delivering.",
          },
        ],
      },
      forWhom: {
        eyebrow: 'For whom',
        h2: ['High-value service businesses', 'with untapped potential.'],
        body: "PIRA LABS' client is the decision-maker who recognizes that what exists today won't reach the next level. The prerequisite isn't the size of the company. It's the genuine willingness to look at the problem again.",
        items: [
          { title: 'Decision bottleneck', desc: "Everything goes through you. Every decision depends on you. Not from weakness — from lack of clarity about what can be delegated and how." },
          { title: 'Growth without structure', desc: "The business grows but what used to work no longer sustains the next level. Growing without rebuilding will break what's working." },
          { title: "Data that don't become decisions", desc: "The company has information. But nobody stopped to turn it into clarity. The problem is in plain sight — it takes an external eye to name it." },
        ],
      },
      founders: {
        eyebrow: 'The founders',
        h2: ['Two founders.', 'We are the ones who operate.'],
        gabriela: {
          role: 'CEO · INSPIRA',
          name: 'Gabriela Aguiar',
          body: 'Nearly a decade building innovation and venture capital ecosystems in Brazil, the US, and the Nordics. MBA professor at FIAP, mentor at FGV Ventures, studying AI at MIT. She arrives with the global repertoire the client alone could not reach in years.',
          quote: '"We don\'t arrive with a ready-made solution. We arrive with the question that reframes the problem."',
        },
        celso: {
          role: 'Co-founder · TRANSPIRA',
          name: 'Celso Gama',
          body: 'Scaled R$16M to R$163M in 24 months. Turned margin from -64% to +15% in 6 months at Diageo, without increasing revenue. 79 percentage points, plugging where it was leaking. These results are pre-AI — built with judgment calibrated by real consequence.',
          quote: '"He knows where to put technology and where to put people because he has made mistakes in both."',
        },
      },
      cta: {
        h2: "Worth a conversation.",
        body: "If you recognized your business at any point on this page, the first conversation is free and without commitment.",
        btn: 'Request diagnosis →',
      },
    },
    sobre: {
      meta: {
        title: 'About the Founders',
        description:
          'Gabriela Aguiar and Celso Gama, founders of PIRA LABS. Brazilian boutique for Creative Business Turnaround.',
      },
      hero: {
        eyebrow: 'The founders',
        h1: ['No intermediary between', 'who understands and who delivers.'],
      },
      gabriela: {
        role: 'CEO · INSPIRA',
        name: 'Gabriela Aguiar',
        p1: 'Gabriela opens paths that were not yet on the map. Nearly a decade building active ecosystems inside and outside Brazil — through Plug and Play, German Accelerator, Web Summit, South Summit.',
        p2: 'MBA professor at FIAP, startup mentor at FGV Ventures, member of the Angel Investor Club. Studying AI at MIT.',
        p3: 'She arrives with real repertoire: she knows what works in the global ecosystem, what has not yet reached Brazil, where the connections are that the client alone could not reach in years.',
        linkedin: 'LinkedIn →',
        badge: 'INSPIRA',
        quote: '"I don\'t arrive with a ready-made solution. I arrive with the question that reframes the problem and with a view of what is coming in the global ecosystem before it reaches the client."',
      },
      celso: {
        role: 'Co-founder · TRANSPIRA',
        name: 'Celso Gama',
        p1: 'Celso enters when the operation needs someone who has seen this before. He turned margin from -64% to +15% in 6 months at a multinational in the beverages sector, without increasing revenue or cutting staff. He scaled revenue from R$16M to R$163M in 24 months in a unit he led. He coordinated more than 600 people and 100 suppliers in real time at the Rio 2016 Olympics.',
        p2: 'MBA from Insper, postgraduate degree in Marketing from ESPM, undergraduate degrees in Law from Mackenzie and Advertising from FAAP. Currently studying AI at MIT.',
        p3: 'He learned pre-AI. He knows how to judge what technology solves and what only people can solve.',
        linkedin: 'LinkedIn →',
        badge: 'TRANSPIRA',
        results: [
          'R$16M to R$163M in 24 months',
          'Margin from -64% to +15% in 6 months at Diageo, without increasing revenue (79 pp)',
          '600 people and 100 suppliers coordinated',
          'Legal sector: a week of 10 people replaced by 4 cycles of 8 hours',
        ],
        disclaimer: 'All results are pre-AI.',
      },
    },
    servicos: {
      meta: {
        title: 'Services — INSPIRA and TRANSPIRA',
        description:
          'INSPIRA: real problem diagnosis. TRANSPIRA: execution with verified results.',
      },
      hero: {
        eyebrow: 'Services',
        h1: ['Two services.', 'One natural sequence.'],
      },
      inspira: {
        badge: 'INSPIRA',
        h2: 'Real problem diagnosis',
        p1: "The moment when the right condition meets the right point and something that was stuck starts to move. We don't arrive with a ready-made solution — we arrive with the questions nobody asked before.",
        p2: 'Output: the problem named and the route drawn. In a format the decision-maker can use — document or presentation, agreed at the start.',
        cta: 'Request INSPIRA →',
        deliverables: {
          title: 'What INSPIRA delivers',
          items: [
            'Diagnosis of where the problem is limiting potential',
            'Reading of sector trends and risks',
            'Mapping of available market solutions for the identified problem',
            'Route drawn in a format the decision-maker can use',
          ],
        },
      },
      transpira: {
        badge: 'TRANSPIRA',
        h2: 'Execution with verified results',
        p1: "There comes a moment when the decision-maker realizes what exists today won't reach the next level. That is not a leadership failure. It's an absence of clarity about what needs to change — and clarity is built, not inspired.",
        p2: "PIRA LABS doesn't leave when the deadline ends. Closing criteria are defined at the start of the project. We leave when the first agreed results are verified.",
        cta: 'Request TRANSPIRA →',
        moves: {
          title: 'The four moves',
          items: [
            ['Reading', 'What is happening today is mapped without judgment.'],
            ['Building', 'The path is built with the team, not for the team.'],
            ['Activation', 'The new path enters real operation. With real consequence.'],
            ['Calibration', 'Fine adjustments. Verification of agreed results.'],
          ] as [string, string][],
        },
      },
      cta: {
        h2: 'Light your spark.',
        body: 'The first conversation is free and without commitment.',
        btn: 'Request diagnosis →',
      },
    },
    cases: {
      meta: {
        title: 'Cases — Verified results',
        description:
          'Legal case: 1,500+ pages analyzed, equivalent to 400 hours of effort delivered in 36 hours.',
      },
      hero: {
        eyebrow: 'Cases',
        h1: 'Verified results.',
      },
      case1: {
        sector: 'Legal sector · Boutique · Civil Law',
        h2: ['More capacity.', 'Without having to hire.'],
        badge: 'Anonymized case',
        body: 'Boutique Civil Law firm with high demand and a team at the limit. Hiring was not an option. Outsourcing, a risk. The work needed to be delivered with partner-level quality, on the timeline of an impatient client.',
        metrics: [
          { num: '1,500+', label: 'Pages analyzed', desc: 'Laws, case law and doctrine' },
          { num: '400h → 36h', label: 'Equivalent effort', desc: '10 professionals × 1 week = 36 hours' },
          { num: 'R$160K/mo', label: 'Revenue potential', desc: 'Monthly revenue freed for the client' },
        ],
        method: [
          { badge: 'INSPIRA', color: '#2A6B8A', title: 'Real problem diagnosis', desc: "We didn't start with tools. We mapped the real workflow to identify where the energy was leaking." },
          { badge: 'TRANSPIRA', color: '#BA7517', title: 'Co-creation and calibration', desc: 'We built a squad of agents calibrated for the legal context, with active human judgment at every step.' },
          { badge: 'RESPIRA', color: '#1F5C35', title: 'Business in propulsion', desc: 'Database organized as an asset. Capacity for new contracts. Clarity on growth strategy.' },
        ],
        quote: '"We did what a team of 10 people would have taken a week to do."',
        quoteAuthor: 'Partner at a boutique Civil Law firm, after reviewing the delivered work',
        disclaimer: 'Anonymized case. Identity available under NDA. · inspira@piralabs.com.br',
      },
      cta: {
        h2: 'Your business has a next level waiting.',
        body: 'The first conversation is free and without commitment.',
        btn: 'Request diagnosis →',
      },
    },
    contato: {
      meta: {
        title: 'Contact — Request diagnosis',
        description:
          'Get in touch with PIRA LABS to request a diagnosis. The first conversation is free and without commitment.',
      },
      hero: {
        eyebrow: 'Contact',
        h1: 'Worth a conversation.',
        body: 'The first conversation is free and without commitment. If you recognized your business, that is enough to start.',
      },
      form: {
        h2: 'Request diagnosis',
        name: { label: 'Name *', placeholder: 'Your name' },
        email: { label: 'Email *', placeholder: 'your@email.com' },
        company: { label: 'Company', placeholder: 'Company name' },
        message: { label: "What is happening in the business?", placeholder: "Briefly describe what is blocking growth or what you want to achieve." },
        submit: 'Send message →',
        subject: 'New contact — piralabs.com.br',
      },
      info: {
        emailLabel: 'Direct email',
        locationLabel: 'Location',
        location: 'São Paulo, Brazil',
        linkedinLabel: 'LinkedIn',
        linkedinText: 'linkedin.com/company/piralabs →',
        card: {
          title: 'Boutique by choice.',
          body: 'Celso and Gabriela in every project, from diagnosis to close. No intermediary between who understands the problem and who solves it.',
        },
      },
    },
  },
} as const

export const dictEs = {
  nav: {
    services: 'Servicios',
    cases: 'Casos',
    about: 'Sobre',
    contact: 'Contacto',
    cta: 'Solicitar diagnóstico',
  },
  footer: {
    tagline: 'Propulsión de Negocios.',
    category: 'Creative Business Turnaround.',
    slogan: 'Liberamos el próximo nivel.',
    nav: 'Navegación',
    contact: 'Contacto',
    location: 'São Paulo, Brasil',
    rights: 'Todos los derechos reservados.',
    closing: 'Seguimos en propulsión.',
    links: [
      ['/es', 'Inicio'],
      ['/es/servicos', 'Servicios'],
      ['/es/cases', 'Casos'],
      ['/es/sobre', 'Sobre'],
      ['/es/contato', 'Contacto'],
    ] as [string, string][],
  },
  home: {
    hero: {
      eyebrow: 'Creative Business Turnaround',
      h1: ['Todo negocio tiene', 'un próximo nivel.'],
      body: 'Lo que PIRA LABS encuentra es lo que está entre usted y él. Entramos, diagnosticamos el problema real, construimos juntos y salimos cuando el negocio está en propulsión.',
      ctaPrimary: 'Solicitar diagnóstico',
      ctaSecondary: 'Ver caso',
    },
    proof: {
      eyebrow: 'Resultado verificado · Caso jurídico anonimizado',
      items: [
        { num: '1.500+', label: 'Páginas analizadas', desc: 'Leyes, jurisprudencias y doctrina cruzadas' },
        { num: '400h → 36h', label: 'Esfuerzo equivalente', desc: '10 profesionales por una semana. Entregamos el equivalente en 36 horas.' },
        { num: 'R$160K/mes', label: 'Potencial de ingresos', desc: 'Capacidad operativa liberada para nuevos contratos' },
      ],
      disclaimer: 'Caso anonimizado. Identidad disponible bajo NDA.',
    },
    method: {
      eyebrow: 'El método',
      h2: ['Tres momentos.', 'Un proceso.'],
      cards: [
        {
          badge: 'INSPIRA',
          color: '#2A6B8A',
          sub: 'Gabriela lidera',
          h3: 'Diagnóstico del problema real',
          body: 'No llegamos con una solución lista. Llegamos con las preguntas que nadie hizo antes. Mapeamos el problema real y diseñamos la ruta.',
        },
        {
          badge: 'TRANSPIRA',
          color: '#BA7517',
          sub: 'Celso lidera',
          h3: 'Ejecución con resultado verificado',
          body: 'Entramos en la operación. Construimos junto con el equipo. Integramos tecnología curada donde amplifica. Salimos con resultado verificado.',
        },
        {
          badge: 'RESPIRA',
          color: '#1F5C35',
          sub: 'El resultado, no un producto',
          h3: 'Negocio en propulsión',
          body: 'El negocio opera con claridad. El decisor está al mando de lo que importa. Ese es el estado que cada entrega de PIRA LABS busca alcanzar.',
        },
      ],
    },
    forWhom: {
      eyebrow: 'Para quién',
      h2: ['Negocios de servicios', 'con potencial reprimido.'],
      body: 'El cliente de PIRA LABS es el decisor que reconoce que lo que existe hoy no lleva al próximo nivel. La condición necesaria no es el tamaño de la empresa. Es la disposición genuina de ver el problema de nuevo.',
      items: [
        { title: 'Cuello de botella en decisiones', desc: 'Todo pasa por usted. Cada decisión depende de usted. No por debilidad, sino por ausencia de claridad sobre qué puede delegarse y cómo.' },
        { title: 'Crecimiento sin estructura', desc: 'El negocio crece pero lo que funcionaba antes ya no sostiene el próximo nivel. Crecer sin reconstruir romperá lo que está funcionando.' },
        { title: 'Datos que no se convierten en decisiones', desc: 'La empresa tiene información. Pero nadie se detuvo a convertirla en claridad. El problema está a la vista, falta la mirada externa para nombrarlo.' },
      ],
    },
    founders: {
      eyebrow: 'Los fundadores',
      h2: ['Dos fundadores.', 'Nosotros operamos.'],
      gabriela: {
        role: 'CEO · INSPIRA',
        name: 'Gabriela Aguiar',
        body: 'Casi una década construyendo ecosistemas de innovación y venture capital en Brasil, EE.UU. y los países nórdicos. Profesora de MBA en FIAP, mentora en FGV Ventures, en formación en IA en el MIT.',
        quote: '"No llego con una solución lista. Llego con la pregunta que cambia el encuadre del problema."',
      },
      celso: {
        role: 'Co-fundador · TRANSPIRA',
        name: 'Celso Gama',
        body: 'Escaló R$16M a R$163M en 24 meses. Pasó el margen de -64% a +15% en 6 meses, sin aumentar ingresos. Resultados pre-IA construidos con juicio calibrado por consecuencia real.',
        quote: '"Sé dónde poner tecnología y dónde poner personas porque ya me equivoqué en los dos."',
      },
    },
    cta: {
      h2: 'Vale una conversación.',
      body: 'Si reconoció su negocio en algún punto de esta página, la primera conversación es gratuita y sin compromiso.',
      btn: 'Solicitar diagnóstico →',
    },
  },
  sobre: {
    hero: {
      eyebrow: 'Los fundadores',
      h1: ['Sin intermediario entre', 'quien entiende y quien resuelve.'],
    },
    gabriela: {
      role: 'CEO · INSPIRA',
      name: 'Gabriela Aguiar',
      p1: 'Gabriela abre caminos que aún no estaban en el mapa. Casi una década construyendo ecosistemas activos dentro y fuera de Brasil: Plug and Play, German Accelerator, Web Summit, South Summit.',
      p2: 'Profesora de MBA en FIAP, mentora de startups en FGV Ventures, miembro del Angel Investor Club. En formación en IA en el MIT.',
      p3: 'Llega con repertorio real: sabe lo que funciona en el ecosistema global, lo que aún no llegó a Brasil, dónde están las conexiones que el cliente solo no alcanzaría en años.',
      linkedin: 'LinkedIn →',
      badge: 'INSPIRA',
      quote: '"No llego con una solución lista. Llego con la pregunta que cambia el encuadre del problema y con la visión de lo que está llegando al ecosistema global antes de llegar al cliente."',
    },
    celso: {
      role: 'Co-fundador · TRANSPIRA',
      name: 'Celso Gama',
      p1: 'Celso entra cuando la operación necesita a alguien que ya vio esto antes. Pasó el margen de -64% a +15% en 6 meses atendiendo a una multinacional del sector de bebidas, sin aumentar ingresos ni recortar equipo. Escaló ingresos de R$16M a R$163M en 24 meses en una unidad que dirigió. Coordinó más de 600 personas y 100 proveedores en tiempo real en los Juegos Olímpicos de Río 2016.',
      p2: 'MBA por el Insper, posgrado en Marketing por la ESPM, grados en Derecho por Mackenzie y Publicidad por la FAAP. En formación en IA en el MIT.',
      p3: 'Aprendió en el pre-IA. Sabe juzgar qué resuelve la tecnología y qué solo resuelve la gente.',
      linkedin: 'LinkedIn →',
      badge: 'TRANSPIRA',
      results: [
        'R$16M a R$163M en 24 meses',
        'Margen de -64% a +15% en 6 meses, sin aumentar ingresos (79 pp)',
        '600 personas y 100 proveedores coordinados',
        'Sector jurídico: semana de 10 personas reemplazada por 4 ciclos de 8 horas',
      ],
      disclaimer: 'Todos los resultados son pre-IA.',
    },
  },
  cases: {
    hero: {
      eyebrow: 'Casos',
      h1: 'Resultados verificados.',
    },
    case1: {
      sector: 'Sector jurídico · Boutique · Derecho Civil',
      h2: ['Más capacidad.', 'Sin necesidad de contratar.'],
      badge: 'Caso anonimizado',
      body: 'Estudio boutique de Derecho Civil con alta demanda y equipo al límite. Contratar no era opción. Tercerizar, un riesgo. El trabajo debía entregarse con calidad de socio, en el plazo de un cliente impaciente.',
      metrics: [
        { num: '1.500+', label: 'Páginas analizadas', desc: 'Leyes, jurisprudencias y doctrina' },
        { num: '400h → 36h', label: 'Esfuerzo equivalente', desc: '10 profesionales × 1 semana = 36 horas' },
        { num: 'R$160K/mes', label: 'Ingreso potencial', desc: 'Ingresos mensuales liberados para el cliente' },
      ],
      method: [
        { badge: 'INSPIRA', color: '#2A6B8A', title: 'Diagnóstico del problema real', desc: 'No empezamos con herramientas. Mapeamos el flujo real de trabajo para identificar dónde se filtraba la energía.' },
        { badge: 'TRANSPIRA', color: '#BA7517', title: 'Co-creación y calibración', desc: 'Construimos un equipo de agentes calibrados para el contexto jurídico, con juicio humano activo en cada etapa.' },
        { badge: 'RESPIRA', color: '#1F5C35', title: 'Negocio en propulsión', desc: 'Base de datos organizada como activo. Capacidad para nuevos contratos. Claridad sobre estrategia de crecimiento.' },
      ],
      quote: '"Hicimos lo que un equipo de 10 personas tardaría una semana en hacer."',
      quoteAuthor: 'Socio de estudio boutique de Derecho Civil, tras revisar el trabajo entregado',
      disclaimer: 'Caso anonimizado. Identidad disponible bajo NDA. · inspira@piralabs.com.br',
    },
    cta: {
      h2: 'Su negocio tiene un próximo nivel esperando.',
      body: 'La primera conversación es gratuita y sin compromiso.',
      btn: 'Solicitar diagnóstico →',
    },
  },
  contato: {
    hero: {
      eyebrow: 'Contacto',
      h1: 'Vale una conversación.',
      body: 'La primera conversación es gratuita y sin compromiso. Si reconoció su negocio, eso es suficiente para empezar.',
    },
    form: {
      h2: 'Solicitar diagnóstico',
      name: { label: 'Nombre *', placeholder: 'Su nombre' },
      email: { label: 'Email *', placeholder: 'su@email.com' },
      company: { label: 'Empresa', placeholder: 'Nombre de la empresa' },
      message: { label: '¿Qué está pasando en el negocio?', placeholder: 'Describa brevemente qué está bloqueando el crecimiento o qué quiere lograr.' },
      submit: 'Enviar mensaje →',
      subject: 'Nuevo contacto — piralabs.com.br/es',
    },
    info: {
      emailLabel: 'Email directo',
      locationLabel: 'Ubicación',
      location: 'São Paulo, Brasil',
      linkedinLabel: 'LinkedIn',
      linkedinText: 'linkedin.com/company/piralabs →',
      card: {
        title: 'Boutique por elección.',
        body: 'Celso y Gabriela en cada proyecto, del diagnóstico al cierre. Sin intermediario entre quien entiende el problema y quien lo resuelve.',
      },
    },
  },
}

export type Locale = 'pt' | 'en' | 'es'
export type Dict = typeof dict.pt
