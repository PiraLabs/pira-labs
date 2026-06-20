export const dynamic = 'force-static'

import type { Metadata } from 'next'
import { FinalCTA } from '@/components/shared/FinalCTA'

export const metadata: Metadata = {
  title: 'Chama · Palestras, workshops, aulas e mentorias · Pira Labs',
  description: 'Gabriela Aguiar e Celso Gama conduzem palestras, workshops, aulas e mentorias sobre IA aplicada, futuro do trabalho e transformação de empresas de serviços, com conteúdo que parte de caso real e termina em próximo passo verificável.',
  alternates: { canonical: 'https://piralabs.com.br/chama' },
  openGraph: {
    title: 'Chama · Palestras, workshops, aulas e mentorias · Pira Labs',
    description: 'Conhecimento que parte de caso real e termina em próximo passo verificável. Palestras, workshops, aulas e mentorias conduzidos por Gabriela Aguiar e Celso Gama.',
    url: 'https://piralabs.com.br/chama',
    siteName: 'Pira Labs',
    locale: 'pt_BR',
    type: 'website',
  },
}

const PAD = { paddingTop: 'clamp(5rem, 10vw, 7.5rem)', paddingBottom: 'clamp(5rem, 10vw, 7.5rem)' }
const H2 = { fontSize: 'clamp(1.875rem, 4.4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600 }
const BODY = { fontSize: '1.125rem', lineHeight: 1.6, fontWeight: 400 }
const DESC = { fontSize: '0.875rem', lineHeight: 1.55, fontWeight: 400 }
const ITEM = { fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', lineHeight: 1.25, letterSpacing: '-0.01em', fontWeight: 500 }
const EYEBROW = { fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em' }
const READING = '720px'

const temasGabriela = [
  { titulo: 'Macro Tendências', desc: 'O que os ecossistemas globais de inovação já mostram sobre o futuro do trabalho em serviços antes que esse futuro chegue ao Brasil como exigência. Quem participa da palestra ou workshop da Gabriela Aguiar sobre este tema consegue ler sinal fraco antes de virar pauta.' },
  { titulo: 'Inteligência de Mercado com IA', desc: 'Como usar ferramentas de inteligência artificial para ler o que o mercado ainda não tornou óbvio. Quem participa consegue identificar oportunidade antes que o concorrente estruture a resposta.' },
  { titulo: 'O Futuro do Trabalho', desc: 'O que está mudando na relação entre trabalho, valor e tecnologia nas empresas de serviços. Quem participa consegue nomear o que está acontecendo com o próprio modelo antes de sentir no caixa.' },
  { titulo: 'Novas formas de consumo e novos canais de venda', desc: 'Como o comportamento de compra de serviços B2B está mudando e o que isso exige de quem vende. Quem participa consegue revisar onde está investindo esforço de vendas.' },
  { titulo: 'Inovação para PMEs', desc: 'Como empresas de médio porte aplicam práticas de inovação que não foram desenhadas para elas. Quem participa consegue separar o que é aplicável do que é decorativo no ecossistema de inovação.' },
  { titulo: 'Cultura e Formação de Lideranças', desc: 'Como a cultura de uma empresa de serviços é construída ou destruída pelas decisões operacionais do dia a dia. Quem participa consegue identificar onde cultura e operação estão em conflito no próprio contexto.' },
  { titulo: 'Desafios Geracionais', desc: 'Como equipes com perfis geracionais distintos tomam decisões diferentes sobre tecnologia, trabalho e carreira. Quem participa consegue calibrar a comunicação interna e a gestão de expectativas.' },
]

const exclusivosGabriela = [
  { titulo: 'Desafios e Protagonismo Feminino', desc: 'Liderança feminina no contexto de empresas de serviços: o que muda, o que permanece e o que ainda não tem nome. A perspectiva é de Gabriela Aguiar, que viveu dentro de estruturas corporativas globais e escolheu construir algo próprio.' },
  { titulo: 'Maternidade como Liderança', desc: 'O que a experiência da maternidade ensina sobre decisão sob incerteza, prioridade e redesenho de modelo. Não é pauta de diversidade. É análise de competência. Tema exclusivo de Gabriela Aguiar.' },
]

const temasCompartilhados = [
  { titulo: 'Macro Tendências', desc: 'Leitura operacional do que está chegando: o que muda na estrutura de trabalho das empresas de serviços quando as ferramentas se equalizam e o que diferencia quem age antes.' },
  { titulo: 'Inteligência de Mercado com IA', desc: 'Como usar ferramentas de inteligência artificial para ler o mercado com método, não com esperança. Quem participa consegue estruturar um processo de leitura que gera decisão, não só informação.' },
  { titulo: 'O Futuro do Trabalho', desc: 'Como a relação entre trabalho humano e ferramenta está sendo redesenhada na prática, não no papel. O que isso significa para empresas que ainda operam com o modelo antigo.' },
  { titulo: 'Novas formas de consumo e novos canais de venda', desc: 'Como o comportamento de compra de serviços B2B está mudando do ponto de vista de quem vende. O que muda no processo comercial quando o cliente pesquisa numa plataforma de IA antes de ligar para qualquer fornecedor.' },
  { titulo: 'Inovação para PMEs', desc: 'O que funciona e o que não funciona quando empresas de médio porte tentam aplicar práticas de inovação desenhadas para startups ou grandes corporações.' },
  { titulo: 'Cultura e Formação de Lideranças', desc: 'Como decisões operacionais constroem ou destroem cultura sem que ninguém perceba até ser tarde. O ponto de vista de quem lê operação por dentro, com Celso Gama ou em conjunto com Gabriela Aguiar.' },
  { titulo: 'Desafios Geracionais', desc: 'Como equipes com perfis distintos tomam decisões diferentes sobre ferramenta, processo e prioridade. O que isso produz como gargalo quando não é nomeado.' },
]

const formatos = [
  { titulo: 'Palestra', corpo: 'Para eventos, conferências e aberturas de programas para gerar perspectiva e deslocar o ponto de vista da audiência. Duração e formato adaptados ao contexto do evento. O conteúdo parte de caso real e chega numa implicação prática que a audiência pode testar na semana seguinte.' },
  { titulo: 'Workshop', corpo: 'Para grupos que precisam sair com próximo passo definido, não só com repertório ampliado. Condução estruturada com diagnóstico do contexto da turma, aplicação sobre problema real e entrega de rota verificável. A partir de R$ 12.500.' },
  { titulo: 'Aula', corpo: 'Para programas de MBA, educação executiva e formação de lideranças onde o conteúdo precisa ter profundidade técnica e estar ancorado em metodologia. Gabriela e Celso integram currículo de programas como docentes, não como palestrantes convidadas e convidados pontuais.' },
  { titulo: 'Mentoria', corpo: 'Para líderes e fundadoras e fundadores que precisam de interlocução direta, continuada e aplicada ao próprio contexto. Não é orientação genérica. É leitura do problema específico de quem está na sala, com Gabriela ou Celso como par de pensamento.' },
]

const ambientes = [
  'Aurora Festival', 'Web Summit Runway', 'HackTown', 'Campinas Innovation Week', 'Energy Summit Rio',
  'ABES Summit', 'Cliente SA', 'Startupi', 'InovaTalks', 'Embaixada da Finlândia', 'FIAP', 'USP',
  'FACEPE', 'FGV Ventures', 'German Accelerator', 'FINEP', 'Empreendedoras Tech', 'Sebrae',
]

const processo = [
  { num: '01', titulo: 'Contato', corpo: 'Você descreve o evento ou programa: contexto, audiência, objetivo e formato que está considerando. Não precisa ter tudo definido antes de entrar em contato.' },
  { num: '02', titulo: 'Calibragem', corpo: 'Conversa para entender o contexto com profundidade: quem está na sala, o que a audiência precisa fazer diferente depois e qual formato serve melhor esse objetivo. Essa etapa define o que vai ser proposto.' },
  { num: '03', titulo: 'Proposta de formato', corpo: 'Com base na calibragem, apresentamos o formato adequado, o escopo do conteúdo e o investimento. Workshop a partir de R$ 12.500. Demais formatos sob consulta conforme escopo e contexto.' },
  { num: '04', titulo: 'Execução', corpo: 'Entrega do conteúdo no formato acordado. Cada apresentação parte do contexto específico da audiência, não de um deck genérico reutilizado.' },
]

export default function ChamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://piralabs.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Chama', item: 'https://piralabs.com.br/chama' },
        ],
      },
      {
        '@type': 'Service',
        name: 'Chama · Palestras, workshops, aulas e mentorias',
        url: 'https://piralabs.com.br/chama',
        description: 'Palestras, workshops, aulas e mentorias conduzidos por Gabriela Aguiar e Celso Gama sobre IA aplicada, futuro do trabalho, liderança e transformação de empresas de serviços.',
        provider: {
          '@type': 'Organization',
          name: 'Pira Labs',
          url: 'https://piralabs.com.br',
        },
        areaServed: { '@type': 'Country', name: 'Brazil' },
        inLanguage: 'pt-BR',
        offers: {
          '@type': 'Offer',
          price: '12500',
          priceCurrency: 'BRL',
          description: 'Workshop a partir de R$ 12.500. Demais formatos sob consulta.',
        },
      },
      {
        '@type': 'Person',
        name: 'Gabriela Aguiar',
        url: 'https://piralabs.com.br/sobre',
        sameAs: [
          'https://www.linkedin.com/in/gabrielaaguiarvs/',
          'https://www.wikidata.org/wiki/Q138846653',
        ],
        jobTitle: 'CEO e Co-founder',
        worksFor: { '@type': 'Organization', name: 'Pira Labs', url: 'https://piralabs.com.br' },
      },
      {
        '@type': 'Person',
        name: 'Celso Gama',
        url: 'https://piralabs.com.br/sobre',
        sameAs: [
          'https://www.linkedin.com/in/celsogama/',
          'https://www.wikidata.org/wiki/Q138846692',
        ],
        jobTitle: 'COO e Co-founder',
        worksFor: { '@type': 'Organization', name: 'Pira Labs', url: 'https://piralabs.com.br' },
      },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>

        {/* ============================================================
            S1 — HERO — Sand #e8e0d6
            ============================================================ */}
        <section style={{ backgroundColor: '#e8e0d6', ...PAD }}>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" style={{ marginBottom: '3rem' }}>
              <ol className="flex items-center gap-2 flex-wrap">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Chama', href: null },
                ].map(({ label, href }, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {i > 0 && (
                      <span className="font-body" style={{ color: '#1A5568', fontSize: '0.75rem' }}>/</span>
                    )}
                    {href ? (
                      <a href={href} className="font-body hover:underline" style={{ color: '#1A5568', fontSize: '0.75rem' }}>{label}</a>
                    ) : (
                      <span className="font-body" style={{ color: '#05262e', fontSize: '0.75rem' }} aria-current="page">{label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <p className="font-body uppercase mb-6" style={{ ...EYEBROW, color: '#05262e' }}>
              Palestras, workshops, aulas e mentorias
            </p>
            <h1
              className="font-display mb-8"
              style={{ color: '#05262e', fontSize: 'clamp(2rem, 10.5vw, 6rem)', lineHeight: 1.0, letterSpacing: '-0.03em', fontWeight: 600, maxWidth: '15ch' }}
            >
              Conhecimento é a chama que move, não que informa.
            </h1>
            <p className="font-body mb-10" style={{ ...BODY, color: '#05262e', maxWidth: READING }}>
              Gabriela Aguiar e Celso Gama conduzem palestras, workshops, aulas e mentorias
              sobre IA aplicada, futuro do trabalho e transformação de empresas de serviços,
              para eventos, programas de MBA e educação executiva, com conteúdo que parte de
              caso real e termina em próximo passo verificável.
            </p>
            <a
              href="/contato?origem=chama"
              className="font-body uppercase inline-flex items-center gap-2 group transition-transform hover:scale-[1.02]"
              style={{ ...EYEBROW, backgroundColor: '#eb5c2e', color: '#F5F5F2', padding: '1rem 2rem' }}
            >
              Conversar sobre o seu contexto
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </section>

        {/* ============================================================
            S2 — POR QUE CONHECIMENTO SEM CONSEQUÊNCIA NÃO FUNCIONA — Ink #05262e
            ============================================================ */}
        <section style={{ backgroundColor: '#05262e', ...PAD }}>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <p className="font-body uppercase mb-4" style={{ ...EYEBROW, color: '#e8e0d6' }}>
              O problema do mercado
            </p>
            <h2 className="font-display mb-10" style={{ ...H2, color: '#F5F5F2' }}>
              Quem não opera não sente a <span style={{ color: '#eb5c2e' }}>consequência</span>.
            </h2>
            <div className="flex flex-col gap-6" style={{ maxWidth: READING }}>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                Existe um padrão no mercado de palestras e workshops que qualquer contratante
                experiente já viveu. O conteúdo é bom. A pessoa no palco é articulada. A
                audiência sai motivada. Duas semanas depois, nada mudou.
              </p>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                Não porque a audiência não prestou atenção. Porque o conteúdo não nasceu de
                uma decisão que alguém precisou tomar com risco real. Veio de pesquisa, de
                tendência, de caso alheio. Educa. Informa. Não muda comportamento porque não
                nasceu de prática.
              </p>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                Conhecimento com consequência é diferente. É o que vem de quem faz agora, não
                de quem fez antes. De quem errou o caminho e corrigiu enquanto tinha cliente
                esperando. De quem aplicou a ferramenta, viu o que não funcionou e refez com o
                resultado visível na operação.
              </p>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                Conteúdo nascido de prática real, com risco e consequência visível, é o tipo de
                conteúdo que muda como as pessoas pensam depois que saem da sala.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            S3 — O DIFERENCIAL DA CHAMA — Teal #004757
            ============================================================ */}
        <section style={{ backgroundColor: '#004757', ...PAD }}>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <p className="font-body uppercase mb-4" style={{ ...EYEBROW, color: '#e8e0d6' }}>
              Por que faz diferença
            </p>
            <h2 className="font-display mb-10" style={{ ...H2, color: '#F5F5F2' }}>
              Falamos de dentro, não de fora.
            </h2>
            <div className="flex flex-col gap-6" style={{ maxWidth: READING }}>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                A Pira Labs está em operação. Gabriela e Celso trabalham com empresas de
                serviços agora, com as mesmas pressões, os mesmos gargalos e as mesmas janelas
                de oportunidade que muitas lideranças na sala enfrentam.
              </p>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                Isso não é credencial decorativa. É lastro.
              </p>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                Quando Gabriela fala sobre sinais fracos e antecipação, está falando sobre o
                que leu em ecossistemas globais de inovação, incluindo formação em IA pelo MIT
                e passagens por ecossistemas como Plug and Play, e trouxe para diagnósticos
                reais no Brasil. Quando Celso fala sobre operação e IA aplicada, está falando
                sobre o que rodou, mediu e ajustou em empresas com clientes ativos, restrições
                reais e decisão em andamento, com formação em andamento no MIT Applied AI
                Certificate Program e MBA pelo Insper.
              </p>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                Em projetos anteriores à Pira Labs, esse julgamento produziu resultado
                verificável: margem operacional de -64% para +15% em seis meses numa
                multinacional do setor de bebidas, e escala de receita de R$16M para R$163M em
                24 meses numa operação de comunicação.
              </p>
            </div>
            <div style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
              <p
                className="font-display"
                style={{ color: '#eb5c2e', fontSize: 'clamp(2.75rem, 9vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-0.03em', fontWeight: 700 }}
              >
                R$16M → R$163M
              </p>
              <p className="font-body" style={{ ...DESC, color: '#e8e0d6', marginTop: '0.75rem' }}>
                Receita em 24 meses, operação de comunicação.
              </p>
            </div>
            <div className="flex flex-col gap-6" style={{ maxWidth: READING }}>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                Um estudo da Meta em parceria com a Fundação Dom Cabral, de 2026, identificou
                que 68,3% das grandes empresas e multinacionais analisadas não possuem núcleo
                dedicado à governança de IA. O que Gabriela e Celso trazem para a sala não é a
                notícia desse dado. É a leitura de o que fazer com ele antes que a janela de
                oportunidade se feche.
              </p>
              <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>
                O conteúdo parte de onde a audiência está. Chega onde ela precisa ir.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            S4 — FORMATOS — Sand #e8e0d6
            ============================================================ */}
        <section style={{ backgroundColor: '#e8e0d6', ...PAD }}>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <p className="font-body uppercase mb-4" style={{ ...EYEBROW, color: '#05262e' }}>
              Como trabalhamos
            </p>
            <h2 className="font-display mb-6" style={{ ...H2, color: '#05262e' }}>
              Um formato para cada <span style={{ color: '#C4421A' }}>contexto</span>.
            </h2>
            <p className="font-body mb-12" style={{ ...BODY, color: '#05262e', maxWidth: READING }}>
              O formato certo depende do que a audiência precisa fazer diferente depois. Não do
              que o evento precisa parecer.
            </p>
            <div
              className="grid gap-x-10 gap-y-10"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', maxWidth: '960px' }}
            >
              {formatos.map(({ titulo, corpo }) => (
                <div key={titulo} style={{ borderTop: '1px solid rgba(5,38,46,0.12)', paddingTop: '1.5rem' }}>
                  <p className="font-display mb-3" style={{ ...ITEM, color: '#05262e' }}>{titulo}</p>
                  <p className="font-body" style={{ ...DESC, color: '#05262e' }}>{corpo}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '3rem' }}>
              <a
                href="/contato?origem=chama"
                className="font-body uppercase inline-flex items-center gap-2 group transition-colors hover:bg-[#05262e]/5"
                style={{ ...EYEBROW, color: '#05262e', border: '1px solid #05262e', padding: '1rem 2rem' }}
              >
                Conversar sobre o seu contexto
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            S5 — TEMAS GABRIELA — Ink #05262e
            ============================================================ */}
        <section style={{ backgroundColor: '#05262e', ...PAD }}>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <p className="font-body uppercase mb-4" style={{ ...EYEBROW, color: '#e8e0d6' }}>
              Gabriela Aguiar
            </p>
            <h2 className="font-display mb-12" style={{ ...H2, color: '#F5F5F2' }}>
              Mercado, futuro e <span style={{ color: '#eb5c2e' }}>liderança</span>.
            </h2>
            <div
              className="grid gap-x-8 gap-y-10"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}
            >
              {temasGabriela.map(({ titulo, desc }) => (
                <div key={titulo} style={{ borderLeft: '1px solid rgba(245,245,242,0.12)', paddingLeft: '1.25rem' }}>
                  <h3 className="font-display mb-2" style={{ ...ITEM, color: '#F5F5F2' }}>{titulo}</h3>
                  <p className="font-body" style={{ ...DESC, color: '#e8e0d6' }}>{desc}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(245,245,242,0.12)', marginTop: '3.5rem', paddingTop: '2.5rem' }}>
              <p className="font-body uppercase mb-8" style={{ ...EYEBROW, color: '#e8e0d6' }}>
                Exclusivos Gabriela Aguiar
              </p>
              <div
                className="grid gap-x-8 gap-y-10"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}
              >
                {exclusivosGabriela.map(({ titulo, desc }) => (
                  <div key={titulo} style={{ borderLeft: '1px solid rgba(245,245,242,0.12)', paddingLeft: '1.25rem' }}>
                    <h3 className="font-display mb-2" style={{ ...ITEM, color: '#F5F5F2' }}>{titulo}</h3>
                    <p className="font-body" style={{ ...DESC, color: '#e8e0d6' }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: '3rem' }}>
              <a
                href="/contato?origem=chama"
                className="font-body uppercase inline-flex items-center gap-2 group transition-colors hover:bg-white/10"
                style={{ ...EYEBROW, color: '#F5F5F2', border: '1px solid #F5F5F2', padding: '1rem 2rem' }}
              >
                Conversar sobre o seu contexto
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            S6 — TEMAS CELSO + COMPARTILHADOS — Teal #004757
            ============================================================ */}
        <section style={{ backgroundColor: '#004757', ...PAD }}>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <p className="font-body uppercase mb-4" style={{ ...EYEBROW, color: '#e8e0d6' }}>
              Celso Gama
            </p>
            <h2 className="font-display mb-12" style={{ ...H2, color: '#F5F5F2' }}>
              Operação e <span style={{ color: '#eb5c2e' }}>IA aplicada</span>.
            </h2>
            <div
              className="grid gap-x-8 gap-y-10"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}
            >
              <div style={{ borderLeft: '1px solid rgba(245,245,242,0.12)', paddingLeft: '1.25rem' }}>
                <h3 className="font-display mb-2" style={{ ...ITEM, color: '#F5F5F2' }}>
                  Empreendendo com IA: criação de agentes e engenharia de prompts
                </h3>
                <p className="font-body" style={{ ...DESC, color: '#e8e0d6' }}>
                  Como construir e operar agentes de inteligência artificial em contextos de
                  serviços com restrições reais de tempo, orçamento e equipe. Quem participa
                  consegue identificar onde a IA amplia capacidade e onde só adiciona ruído.
                  Disponível com Celso Gama ou em conjunto com Gabriela Aguiar.
                </p>
              </div>
              <div style={{ borderLeft: '1px solid rgba(245,245,242,0.12)', paddingLeft: '1.25rem' }}>
                <h3 className="font-display mb-2" style={{ ...ITEM, color: '#F5F5F2' }}>
                  IA aplicada ao jurídico
                </h3>
                <p className="font-body" style={{ ...DESC, color: '#e8e0d6' }}>
                  Como escritórios de advocacia, áreas jurídicas corporativas e instituições de
                  ensino de Direito podem usar inteligência artificial em fluxos de trabalho
                  reais sem comprometer segurança e responsabilidade profissional. Quem
                  participa consegue mapear onde a IA entra e onde não deve entrar no próprio
                  contexto. Tema conduzido por Celso Gama.
                </p>
                <p className="font-body" style={{ fontSize: '0.8125rem', lineHeight: 1.5, fontWeight: 400, color: '#e8e0d6', marginTop: '0.75rem', fontStyle: 'italic' }}>
                  Celso Gama é bacharelando em Direito (Mackenzie). Este conteúdo é de natureza
                  técnico-operacional e não substitui consultoria jurídica, orientação de
                  advogada ou advogado habilitado ou estratégia de caso.
                </p>
              </div>
            </div>
            <p className="font-body" style={{ ...BODY, color: '#e8e0d6', maxWidth: READING, marginTop: '3rem', marginBottom: '2.5rem' }}>
              Os temas a seguir podem ser apresentados por Celso Gama individualmente ou em
              conjunto com Gabriela Aguiar, conforme o contexto do evento:
            </p>
            <div
              className="grid gap-x-8 gap-y-10"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}
            >
              {temasCompartilhados.map(({ titulo, desc }) => (
                <div key={titulo} style={{ borderLeft: '1px solid rgba(245,245,242,0.12)', paddingLeft: '1.25rem' }}>
                  <h3 className="font-display mb-2" style={{ ...ITEM, color: '#F5F5F2' }}>{titulo}</h3>
                  <p className="font-body" style={{ ...DESC, color: '#e8e0d6' }}>{desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '3rem' }}>
              <a
                href="/contato?origem=chama"
                className="font-body uppercase inline-flex items-center gap-2 group transition-colors hover:bg-white/10"
                style={{ ...EYEBROW, color: '#F5F5F2', border: '1px solid #F5F5F2', padding: '1rem 2rem' }}
              >
                Conversar sobre o seu contexto
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            S7 — ONDE JÁ ESTIVEMOS — Sand #e8e0d6
            ============================================================ */}
        <section style={{ backgroundColor: '#e8e0d6', ...PAD }}>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <p className="font-body uppercase mb-4" style={{ ...EYEBROW, color: '#05262e' }}>
              Histórico
            </p>
            <h2 className="font-display mb-6" style={{ ...H2, color: '#05262e' }}>
              Ambientes onde Gabriela e Celso já levaram essa <span style={{ color: '#C4421A' }}>perspectiva</span>.
            </h2>
            <p className="font-body mb-10" style={{ ...BODY, color: '#05262e', maxWidth: READING }}>
              O mesmo princípio em todos os formatos: conteúdo com consequência, que parte de
              caso real e chega num próximo passo verificável para quem está na sala. Eventos de
              liderança, programas de MBA, aceleradoras, conferências de inovação e programas de
              educação executiva.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3" style={{ maxWidth: '900px' }}>
              {ambientes.map((item) => (
                <span
                  key={item}
                  className="font-body"
                  style={{ color: '#05262e', fontSize: '0.9375rem', fontWeight: 400, borderBottom: '1px solid rgba(5,38,46,0.12)', paddingBottom: '2px' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            S8 — COMO FUNCIONA — Ink #05262e
            ============================================================ */}
        <section style={{ backgroundColor: '#05262e', ...PAD }}>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <p className="font-body uppercase mb-4" style={{ ...EYEBROW, color: '#e8e0d6' }}>
              Processo
            </p>
            <h2 className="font-display mb-16" style={{ ...H2, color: '#F5F5F2' }}>
              Do contato à <span style={{ color: '#eb5c2e' }}>execução</span>.
            </h2>
            <div className="flex flex-col gap-10" style={{ maxWidth: '860px' }}>
              {processo.map(({ num, titulo, corpo }) => (
                <div
                  key={num}
                  style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: '0 1.75rem', alignItems: 'start' }}
                >
                  <span
                    className="font-display"
                    style={{ color: '#b0a596', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1, fontWeight: 500 }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3 className="font-display mb-2" style={{ ...ITEM, color: '#F5F5F2' }}>{titulo}</h3>
                    <p className="font-body" style={{ ...BODY, color: '#e8e0d6' }}>{corpo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <FinalCTA
        theme="dark"
        heading="Conhecimento que move. Não que informa."
        origin="chama"
      />
    </>
  )
}
