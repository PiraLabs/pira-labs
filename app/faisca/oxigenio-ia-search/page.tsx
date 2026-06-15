import type { Metadata } from 'next'
import { FinalCTA } from '@/components/shared/FinalCTA'

export const metadata: Metadata = {
  title: 'Oxigênio IA Search | Pira Labs',
  description: 'Diagnóstico de presença em motores de IA. O que ChatGPT, Claude, Gemini e Perplexity respondem quando alguém pesquisa sobre o seu setor.',
}

export default function OxigenioIASearchPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://piralabs.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Faísca', item: 'https://piralabs.com.br/faisca' },
          { '@type': 'ListItem', position: 3, name: 'Oxigênio IA Search', item: 'https://piralabs.com.br/faisca/oxigenio-ia-search' },
        ],
      },
      {
        '@type': 'Product',
        name: 'Oxigênio IA Search',
        description: 'Diagnóstico de presença em motores de IA. O que ChatGPT, Claude, Gemini e Perplexity respondem quando alguém pesquisa sobre o seu setor, os seus concorrentes e o problema que você resolve.',
        brand: { '@type': 'Brand', name: 'Pira Labs' },
        offers: [
          {
            '@type': 'Offer',
            name: 'Oxigênio IA Search Fast',
            price: '3500',
            priceCurrency: 'BRL',
            availability: 'https://schema.org/LimitedAvailability',
            url: 'https://piralabs.com.br/faisca/oxigenio-ia-search',
          },
          {
            '@type': 'Offer',
            name: 'Oxigênio IA Search Full',
            price: '5300',
            priceCurrency: 'BRL',
            availability: 'https://schema.org/LimitedAvailability',
            url: 'https://piralabs.com.br/faisca/oxigenio-ia-search',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Por que não faço essa pesquisa por conta própria?',
            acceptedAnswer: { '@type': 'Answer', text: 'Você pode executar queries no ChatGPT ou no Gemini e ler as respostas. O que o Oxigênio IA Search faz de diferente é estrutura, volume e interpretação. São 5 queries executadas sistematicamente em 4 plataformas com rodadas metodológicas de coleta, totalizando até 60 respostas classificadas por relevância, frequência e posicionamento relativo.' },
          },
          {
            '@type': 'Question',
            name: 'O Oxigênio IA Search é a mesma coisa que SEO?',
            acceptedAnswer: { '@type': 'Answer', text: 'Não. SEO técnico otimiza a estrutura do seu site para motores de busca como o Google. O Oxigênio IA Search diagnostica o que as plataformas de inteligência artificial estão respondendo quando alguém pesquisa sobre o seu setor. São sistemas distintos, com critérios distintos.' },
          },
          {
            '@type': 'Question',
            name: 'Quanto tempo demora?',
            acceptedAnswer: { '@type': 'Answer', text: 'Fast: até 3 dias úteis a partir do briefing preenchido. Full: até 2 semanas para o diagnóstico inicial, com nova rodada metodológica em 60 dias.' },
          },
          {
            '@type': 'Question',
            name: 'O Oxigênio IA Search inclui execução das ações indicadas?',
            acceptedAnswer: { '@type': 'Answer', text: 'Não. O Oxigênio IA Search é diagnóstico. Entrega leitura, gap identificado e próximos passos estruturados. A execução não está incluída no escopo.' },
          },
          {
            '@type': 'Question',
            name: 'Qual a diferença entre Fast e Full?',
            acceptedAnswer: { '@type': 'Answer', text: 'O Fast entrega o diagnóstico base com até 60 respostas classificadas e 3 ações estruturadas. O Full adiciona a frente de concorrente, âncora financeira e reexecução metodológica em 60 dias.' },
          },
          {
            '@type': 'Question',
            name: 'Vocês assinam NDA?',
            acceptedAnswer: { '@type': 'Answer', text: 'Quando há calibragem prévia ou conteúdo customizado, o NDA é assinado antes da conversa.' },
          },
          {
            '@type': 'Question',
            name: 'O que acontece se meu caso não encaixar no escopo?',
            acceptedAnswer: { '@type': 'Answer', text: 'Dizemos na confirmação, antes de qualquer cobrança. Quando isso acontece, indicamos o próximo passo que faz mais sentido para o contexto.' },
          },
        ],
      },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>

      <nav aria-label="Breadcrumb" style={{ backgroundColor: '#e8e0d6', paddingTop: '6rem', paddingBottom: '0' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <ol className="flex items-center gap-2 flex-wrap">
            {[
              { label: 'Home', href: '/' },
              { label: 'Faísca', href: '/faisca' },
              { label: 'Oxigênio IA Search', href: null },
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
        </div>
      </nav>

      {/* ============================================================
          S1 — HERO — Sand #e8e0d6
          ============================================================ */}
      <section style={{ backgroundColor: '#e8e0d6', paddingTop: '3rem', paddingBottom: '6rem' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#1A5568' }}
          >
            Diagnóstico de presença em IA
          </p>
          <h1
            className="font-display font-semibold leading-tight mb-6"
            style={{
              color: '#05262e',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            Oxigênio IA Search
          </h1>
          <p
            className="font-body font-light leading-relaxed mb-10 max-w-2xl"
            style={{ color: '#05262e', fontSize: '1rem' }}
          >
            O Oxigênio IA Search é o diagnóstico que mostra o que ChatGPT, Claude,
            Gemini e Perplexity respondem quando alguém pesquisa sobre o seu setor,
            os seus concorrentes e o problema que você resolve. Antes de investir em
            conteúdo, SEO, mídia ou qualquer ação de presença, você precisa saber
            onde está partindo.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/contato?origem=oxigenio-ia-search"
              className="font-body text-[13px] font-semibold uppercase tracking-wider px-6 py-3 inline-block"
              style={{
                backgroundColor: '#05262e',
                color: '#F5F5F2',
              }}
            >
              Aplicar agora
            </a>
            <p
              className="font-body"
              style={{ color: '#05262e', fontSize: '0.8125rem' }}
            >
              5 vagas Fast · 3 vagas Full. Respondemos em até 1 dia útil.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          S2 — O QUE É E O QUE NÃO É — Ink #05262e
          ============================================================ */}
      <section style={{ backgroundColor: '#05262e', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#e8e0d6' }}
          >
            Delimitação
          </p>
          <h2
            className="font-display font-normal leading-tight mb-12"
            style={{
              color: '#F5F5F2',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            Um <span style={{ color: '#eb5c2e' }}>diagnóstico</span>. Não uma solução.
          </h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0"
          >
            {/* Col 1 — O que é */}
            <div className="lg:pr-12" style={{ borderRight: '1px solid rgba(232,224,214,0.2)' }}>
              <p
                className="font-body text-[10px] font-semibold uppercase tracking-widest mb-6"
                style={{ color: '#e8e0d6' }}
              >
                O que é
              </p>
              <p
                className="font-body font-light leading-relaxed mb-4"
                style={{ color: '#F5F5F2', fontSize: '1rem' }}
              >
                O Oxigênio IA Search é um diagnóstico de presença em plataformas de
                inteligência artificial: ChatGPT, Claude, Gemini e Perplexity. A Pira
                Labs executa queries estruturadas com rodadas metodológicas de coleta,
                classifica as respostas e entrega{' '}
                <strong style={{ fontWeight: 600 }}>uma leitura de onde a sua empresa
                aparece, como aparece e o que está impedindo que apareça melhor.</strong>
              </p>
              <p
                className="font-body font-light leading-relaxed"
                style={{ color: '#F5F5F2', fontSize: '1rem' }}
              >
                O produto termina com{' '}
                <strong style={{ fontWeight: 600 }}>evidência literal, não com impressão.</strong>{' '}
                Você recebe o que as plataformas responderam, o gap identificado com
                causa específica e os próximos passos derivados da leitura, não de
                suposição.
              </p>
            </div>
            {/* Col 2 — O que não é */}
            <div className="lg:pl-12">
              <p
                className="font-body text-[10px] font-semibold uppercase tracking-widest mb-6"
                style={{ color: '#e8e0d6' }}
              >
                O que não é
              </p>
              <p
                className="font-body font-light leading-relaxed"
                style={{ color: '#e8e0d6', fontSize: '1rem' }}
              >
                <strong style={{ fontWeight: 600 }}>O Oxigênio IA Search não é SEO
                técnico.</strong> Não otimiza meta tags, não rastreia backlinks e não
                ajusta estrutura de código.{' '}
                <strong style={{ fontWeight: 600 }}>Não é gestão de mídia paga. Não
                é criação de conteúdo. Não é gestão de redes sociais.</strong>{' '}
                Se o que você precisa é de qualquer uma dessas coisas, o Oxigênio IA
                Search não é o produto certo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          S3 — PARA QUEM — Teal #004757
          ============================================================ */}
      <section style={{ backgroundColor: '#004757', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#e8e0d6' }}
          >
            Qualificação
          </p>
          <h2
            className="font-display font-normal leading-tight mb-8"
            style={{
              color: '#F5F5F2',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            Quem <span style={{ color: '#eb5c2e' }}>Chega</span> aqui e por quê.
          </h2>
          <p
            className="font-body font-light leading-relaxed mb-12 max-w-3xl"
            style={{ color: '#F5F5F2', fontSize: '1rem' }}
          >
            Uma pesquisa da Fundação Dom Cabral de 2026 identificou que 68,3% das
            empresas brasileiras não possuem núcleo dedicado à governança de IA. Esse
            dado não prova como as plataformas de IA leem essas empresas, mas mostra
            uma lacuna maior: muitas organizações avançam no uso de IA sem estrutura
            clara para entender, medir e governar seus impactos. O Oxigênio IA Search
            olha para uma parte específica dessa lacuna: como a empresa aparece quando
            alguém pesquisa seu setor, seus concorrentes e o problema que ela resolve.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Col 1 — Faz sentido */}
            <div>
              <p
                className="font-body text-[10px] font-semibold uppercase tracking-widest mb-8"
                style={{ color: '#e8e0d6' }}
              >
                Faz sentido para quem
              </p>
              <div className="flex flex-col gap-6">
                <p
                  className="font-body font-light leading-relaxed"
                  style={{ color: '#F5F5F2', fontSize: '1rem' }}
                >
                  Você sente que a empresa não aparece onde o cliente pesquisa, mas{' '}
                  <strong style={{ fontWeight: 600 }}>não tem evidência concreta</strong>{' '}
                  para sustentar essa percepção, ou para refutá-la.
                </p>
                <p
                  className="font-body font-light leading-relaxed"
                  style={{ color: '#F5F5F2', fontSize: '1rem' }}
                >
                  Você investiu em site, conteúdo ou presença digital e{' '}
                  <strong style={{ fontWeight: 600 }}>não consegue explicar por que
                  o retorno não chegou.</strong> Quer entender o que as plataformas
                  de IA estão lendo sobre o seu negócio antes de investir mais.
                </p>
                <p
                  className="font-body font-light leading-relaxed"
                  style={{ color: '#F5F5F2', fontSize: '1rem' }}
                >
                  Você está em movimento: rebrand, novo produto, expansão de setor.{' '}
                  <strong style={{ fontWeight: 600 }}>Quer saber de qual ponto está
                  partindo antes de agir.</strong>
                </p>
              </div>
            </div>
            {/* Col 2 — Não faz sentido */}
            <div>
              <p
                className="font-body text-[10px] font-semibold uppercase tracking-widest mb-8"
                style={{ color: '#e8e0d6' }}
              >
                Não faz sentido para quem
              </p>
              <div className="flex flex-col gap-6">
                <p
                  className="font-body font-light leading-relaxed"
                  style={{ color: '#e8e0d6', fontSize: '1rem' }}
                >
                  Você ainda não tem ICP minimamente definido. Sem esse recorte, as
                  queries não têm objeto e o diagnóstico não tem critério de avaliação.
                </p>
                <p
                  className="font-body font-light leading-relaxed"
                  style={{ color: '#e8e0d6', fontSize: '1rem' }}
                >
                  Você não tem presença pública mínima: nenhum site, nenhum conteúdo
                  indexado, nenhuma menção verificável. O diagnóstico leria ausência
                  total, não gap acionável.
                </p>
                <p
                  className="font-body font-light leading-relaxed"
                  style={{ color: '#e8e0d6', fontSize: '1rem' }}
                >
                  Você está buscando execução imediata: alguém que crie conteúdo, ajuste
                  o site ou gerencie as suas redes. O Oxigênio IA Search não executa.
                  Entrega leitura e rota.
                </p>
                <p
                  className="font-body font-light leading-relaxed"
                  style={{ color: '#e8e0d6', fontSize: '1rem' }}
                >
                  Você não pretende fazer nada com o resultado. O diagnóstico termina em
                  próximos passos específicos. Se não há intenção de agir, o investimento
                  não se justifica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          S4 — FAST OU FULL — Ink #05262e
          ============================================================ */}
      <section style={{ backgroundColor: '#05262e', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#e8e0d6' }}
          >
            Versões
          </p>
          <h2
            className="font-display font-normal leading-tight mb-8"
            style={{
              color: '#F5F5F2',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            Fast ou Full: qual <span style={{ color: '#eb5c2e' }}>leitura</span> você precisa agora?
          </h2>
          <p
            className="font-body font-light leading-relaxed mb-12 max-w-3xl"
            style={{ color: '#F5F5F2', fontSize: '1rem' }}
          >
            No Oxigênio IA Search, a diferença entre a versão Fast e a versão Full não
            é qualidade. É profundidade e horizonte. O Fast entrega o que o seu ICP
            encontra quando pesquisa no seu setor, quem está no seu espaço e as três
            primeiras ações estruturadas. O Full parte do mesmo diagnóstico e adiciona
            uma segunda frente: o que o seu concorrente mais próximo tem que você não
            tem, por que isso acontece e como mudar isso em 60 dias, com reexecução
            metodológica para verificar o avanço.
          </p>
          <p
            className="font-body font-light leading-relaxed mb-10 max-w-3xl"
            style={{ color: '#e8e0d6', fontSize: '1rem' }}
          >
            Se você está mapeando o terreno pela primeira vez, o Fast resolve. Se você
            já sabe que tem um concorrente ganhando espaço que deveria ser seu, o Full
            é o que faz sentido.
          </p>
          {/* Tabela Fast vs Full */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <caption
                className="font-body text-[10px] font-semibold uppercase tracking-widest text-left mb-4"
                style={{ color: '#e8e0d6', captionSide: 'top', paddingBottom: '1rem' }}
              >
                Comparativo Fast e Full
              </caption>
              <thead>
                <tr>
                  <th
                    className="font-body font-light text-left py-3 pr-8"
                    style={{ color: '#e8e0d6', fontSize: '0.875rem', borderBottom: '1px solid rgba(232,224,214,0.2)', width: '35%' }}
                  />
                  <th
                    className="font-body font-semibold text-left py-3 pr-8"
                    style={{ color: '#F5F5F2', fontSize: '1rem', borderBottom: '1px solid rgba(232,224,214,0.2)' }}
                  >
                    Fast
                  </th>
                  <th
                    className="font-body font-semibold text-left py-3"
                    style={{ color: '#e8e0d6', fontSize: '1rem', borderBottom: '1px solid rgba(232,224,214,0.2)' }}
                  >
                    Full
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Preço', 'R$ 3.500', 'R$ 5.300'],
                  ['Queries executadas', '5 queries em 4 plataformas', '5 queries + frente do concorrente'],
                  ['Respostas coletadas', 'Até 60 respostas classificadas', '60 base + até 200 adicionais'],
                  ['Entrega', 'Relatório de 2 páginas com evidência literal', 'Tudo do Fast + gap com causa específica + 3 ações customizadas + âncora financeira'],
                  ['Prazo do diagnóstico', 'Até 3 dias úteis', 'Até 2 semanas'],
                  ['Reexecução', '—', 'Nova rodada metodológica em 60 dias'],
                  ['Sessão de leitura', '45 minutos', '60 minutos'],
                ].map(([label, fast, full], i) => (
                  <tr key={i}>
                    <td
                      className="font-body font-light py-4 pr-8"
                      style={{ color: '#e8e0d6', fontSize: '0.875rem', borderBottom: '1px solid rgba(232,224,214,0.1)' }}
                    >
                      {label}
                    </td>
                    <td
                      className="font-body font-light py-4 pr-8"
                      style={{ color: '#F5F5F2', fontSize: '0.9375rem', borderBottom: '1px solid rgba(232,224,214,0.1)' }}
                    >
                      {fast}
                    </td>
                    <td
                      className="font-body font-light py-4"
                      style={{ color: '#F5F5F2', fontSize: '0.9375rem', borderBottom: '1px solid rgba(232,224,214,0.1)' }}
                    >
                      {full}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            className="font-body font-light mt-8"
            style={{ color: '#e8e0d6', fontSize: '0.8125rem' }}
          >
            Dúvida entre Fast e Full? Diga no formulário. Na confirmação, indicamos
            qual faz mais sentido para o seu contexto.
          </p>
        </div>
      </section>

      {/* ============================================================
          S5 — COMO FUNCIONA — Sand #e8e0d6
          ============================================================ */}
      <section style={{ backgroundColor: '#e8e0d6', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#1A5568' }}
          >
            Processo
          </p>
          <h2
            className="font-display font-normal leading-tight mb-16"
            style={{
              color: '#05262e',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            Do formulário ao <span style={{ color: '#C4421A' }}>diagnóstico</span>.
          </h2>
          <div className="flex flex-col gap-10">
            {[
              {
                num: '01',
                titulo: 'Aplicação',
                corpo: 'Formulário com informações básicas sobre empresa, setor e contexto. Leva entre 5 e 10 minutos. Não pedimos dados que não usamos na análise.',
              },
              {
                num: '02',
                titulo: 'Confirmação em até 24 horas',
                corpo: 'Se o caso encaixa no escopo, enviamos confirmação e um briefing curto para aprofundar o contexto antes da execução. Se não encaixa, dizemos antes de começar. Sem cobrança.',
              },
              {
                num: '03',
                titulo: 'Execução do diagnóstico',
                corpo: 'A partir do briefing preenchido. Prazo: Fast em até 3 dias úteis, Full em até 2 semanas. Se o briefing precisar de esclarecimento, o prazo começa quando estiver completo.',
              },
              {
                num: '04',
                titulo: 'Sessão de leitura conjunta',
                corpo: 'Encontro online com Gabriela Aguiar e Celso Gama para apresentar o diagnóstico. Fast: 45 minutos. Full: 60 minutos. Você pode incluir até dois convidados da sua equipe.',
              },
            ].map(({ num, titulo, corpo }) => (
              <div
                key={num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '0 2rem',
                  alignItems: 'start',
                }}
              >
                <span
                  className="font-display font-light leading-none"
                  style={{
                    color: '#1A5568',
                    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                    lineHeight: 1,
                  }}
                >
                  {num}
                </span>
                <div>
                  <p
                    className="font-display font-normal mb-2"
                    style={{ color: '#05262e', fontSize: '1.125rem' }}
                  >
                    {titulo}
                  </p>
                  <p
                    className="font-body font-light leading-relaxed"
                    style={{ color: '#05262e', fontSize: '1rem' }}
                  >
                    {corpo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          S6 — QUEM CONDUZ — Teal #004757
          ============================================================ */}
      <section style={{ backgroundColor: '#004757', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#e8e0d6' }}
          >
            Execução direta
          </p>
          <h2
            className="font-display font-normal leading-tight mb-8"
            style={{
              color: '#F5F5F2',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            Quem <span style={{ color: '#eb5c2e' }}>analisa</span> é quem entrega.
          </h2>
          <p
            className="font-body font-light leading-relaxed mb-12 max-w-3xl"
            style={{ color: '#F5F5F2', fontSize: '1rem' }}
          >
            <strong style={{ fontWeight: 600 }}>Não há equipe intermediária.</strong>{' '}
            Gabriela Aguiar e Celso Gama conduzem a execução do diagnóstico e
            apresentam os resultados na sessão. Com quem você fala na confirmação é
            quem aparece na sessão.
          </p>
          <p
            className="font-body font-light leading-relaxed mb-16 max-w-3xl"
            style={{ color: '#e8e0d6', fontSize: '1rem' }}
          >
            A Pira Labs é uma consultoria boutique que usa o Creative Business
            Turnaround para nomear sua forma de atuação: aplicar a inteligência do
            turnaround antes da crise, quando a empresa ainda tem clientes, caixa e
            reputação para agir. O Oxigênio IA Search é uma das portas de entrada
            dessa metodologia.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gabriela */}
            <div>
              <p
                className="font-display font-normal mb-1"
                style={{ color: '#F5F5F2', fontSize: '1.375rem' }}
              >
                Gabriela Aguiar
              </p>
              <p
                className="font-body font-semibold uppercase tracking-wider mb-4"
                style={{ color: '#e8e0d6', fontSize: '0.8125rem' }}
              >
                CEO e Co-founder
              </p>
              <p
                className="font-body font-light leading-relaxed"
                style={{ color: '#F5F5F2', fontSize: '1rem' }}
              >
                MIT Universal AI Foundational Modules (em andamento, 2026). Docente em
                educação executiva. Responsável pela leitura institucional e de
                presença: como a empresa é percebida, que território ocupa e o que as
                plataformas de IA refletem sobre o posicionamento declarado versus o
                posicionamento percebido.
              </p>
            </div>
            {/* Celso */}
            <div>
              <p
                className="font-display font-normal mb-1"
                style={{ color: '#F5F5F2', fontSize: '1.375rem' }}
              >
                Celso Gama
              </p>
              <p
                className="font-body font-semibold uppercase tracking-wider mb-4"
                style={{ color: '#e8e0d6', fontSize: '0.8125rem' }}
              >
                COO e Co-founder
              </p>
              <p
                className="font-body font-light leading-relaxed"
                style={{ color: '#F5F5F2', fontSize: '1rem' }}
              >
                MIT Applied AI Certificate Program (em andamento, 2026). MBA Insper.
                Bacharelando em Direito (Mackenzie). Responsável pela leitura de
                governança e exposição operacional: o que a estrutura, os processos e
                as escolhas operacionais da empresa produzem como sinal nas plataformas
                de IA.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="/sobre"
              className="font-body font-light underline"
              style={{ color: '#e8e0d6', fontSize: '0.9375rem' }}
            >
              Saiba mais sobre os fundadores
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          S7 — APLICAR — Ink #05262e
          ============================================================ */}
      <section style={{ backgroundColor: '#05262e', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#e8e0d6' }}
          >
            Próximo passo
          </p>
          <h2
            className="font-display font-normal leading-tight mb-12"
            style={{
              color: '#F5F5F2',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            Escolha a versão e <span style={{ color: '#eb5c2e' }}>aplique</span>.
          </h2>
          <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', maxWidth: '36rem' }}>
              <caption
                className="font-body text-[10px] font-semibold uppercase tracking-widest text-left"
                style={{ color: '#e8e0d6', captionSide: 'top', paddingBottom: '1rem' }}
              >
                Resumo das versões
              </caption>
              <thead>
                <tr>
                  <th style={{ borderBottom: '1px solid rgba(232,224,214,0.2)', paddingBottom: '0.75rem', width: '40%' }} />
                  <th
                    className="font-body font-semibold text-left pb-3"
                    style={{ color: '#F5F5F2', fontSize: '1rem', borderBottom: '1px solid rgba(232,224,214,0.2)' }}
                  >
                    Fast
                  </th>
                  <th
                    className="font-body font-semibold text-left pb-3 pl-6"
                    style={{ color: '#e8e0d6', fontSize: '1rem', borderBottom: '1px solid rgba(232,224,214,0.2)' }}
                  >
                    Full
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Preço', 'R$ 3.500', 'R$ 5.300'],
                  ['Prazo', 'Até 3 dias úteis', 'Até 2 semanas'],
                  ['Vagas', '5 vagas', '3 vagas'],
                ].map(([label, fast, full], i) => (
                  <tr key={i}>
                    <td
                      className="font-body font-light py-3 pr-6"
                      style={{ color: '#e8e0d6', fontSize: '0.875rem', borderBottom: '1px solid rgba(232,224,214,0.1)' }}
                    >
                      {label}
                    </td>
                    <td
                      className="font-body font-light py-3 pr-6"
                      style={{ color: '#F5F5F2', fontSize: '0.9375rem', borderBottom: '1px solid rgba(232,224,214,0.1)' }}
                    >
                      {fast}
                    </td>
                    <td
                      className="font-body font-light py-3 pl-6"
                      style={{ color: '#F5F5F2', fontSize: '0.9375rem', borderBottom: '1px solid rgba(232,224,214,0.1)' }}
                    >
                      {full}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              href="/contato?origem=oxigenio-ia-search"
              className="font-body text-[13px] font-semibold uppercase tracking-wider px-8 py-4 inline-block"
              style={{
                backgroundColor: '#eb5c2e',
                color: '#F5F5F2',
              }}
            >
              Aplicar agora
            </a>
            <p
              className="font-body font-light"
              style={{ color: '#e8e0d6', fontSize: '0.8125rem' }}
            >
              Quanto mais contexto você compartilhar na aplicação, mais útil é a
              primeira resposta. Se o seu caso não encaixa no escopo, dizemos antes
              de qualquer cobrança.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          S8 — TRÊS CAMINHOS — Teal #004757
          ============================================================ */}
      <section style={{ backgroundColor: '#004757', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#e8e0d6' }}
          >
            Depois do diagnóstico
          </p>
          <h2
            className="font-display font-normal leading-tight mb-6"
            style={{
              color: '#F5F5F2',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            O <span style={{ color: '#eb5c2e' }}>Oxigênio</span> IA Search termina
            num próximo passo, não num relatório.
          </h2>
          <p
            className="font-body font-light leading-relaxed mb-12 max-w-3xl"
            style={{ color: '#e8e0d6', fontSize: '1rem' }}
          >
            A sessão de leitura não fecha o ciclo: ela abre a rota. O que fazer
            depois depende do que o diagnóstico encontrou.
          </p>
          <div className="flex flex-col">
            {[
              {
                titulo: 'Gap de execução específico',
                corpo: 'O diagnóstico identificou onde e por que a empresa não aparece, e o que precisa mudar. O próximo passo é o TRANSPIRA, a metodologia de execução da Pira Labs, com foco em ajuste GEO/AEO sobre o gap mapeado.',
              },
              {
                titulo: 'Empresa invisível sem clareza de ponto de partida',
                corpo: 'A ausência nas plataformas de IA é sintoma, não problema. O gap de presença reflete algo mais fundo: modelo, posicionamento ou operação que ainda não produziram sinal suficiente. O próximo passo é o INSPIRA, o diagnóstico estruturado em seis camadas da Pira Labs, que lê o sistema inteiro antes de propor qualquer ação.',
              },
              {
                titulo: 'Boa presença, próximo passo claro',
                corpo: 'O diagnóstico confirmou o que você já sentia. Você sabe o que fazer e tem condição de executar. O próximo passo pode ser uma porta de entrada da Faísca, o conjunto de portas de entrada da Pira Labs, ou uma conexão com a rede de referência, dependendo do que o resultado indicou.',
              },
            ].map(({ titulo, corpo }, i, arr) => (
              <div
                key={i}
                className="py-8"
                style={{
                  borderBottom: i < arr.length - 1
                    ? '1px solid rgba(232,224,214,0.2)'
                    : 'none',
                }}
              >
                <p
                  className="font-display font-normal mb-3"
                  style={{ color: '#F5F5F2', fontSize: '1.125rem' }}
                >
                  <strong style={{ fontWeight: 600 }}>{titulo}</strong>
                </p>
                <p
                  className="font-body font-light leading-relaxed max-w-3xl"
                  style={{ color: '#e8e0d6', fontSize: '1rem' }}
                >
                  {corpo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          S9 — FAQ — Sand #e8e0d6
          ============================================================ */}
      <section style={{ backgroundColor: '#e8e0d6', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#1A5568' }}
          >
            Perguntas frequentes
          </p>
          <h2
            className="font-display font-normal leading-tight mb-12"
            style={{
              color: '#05262e',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            O que você ainda quer <span style={{ color: '#C4421A' }}>saber</span> antes de aplicar.
          </h2>
          <div>
            {[
              {
                pergunta: 'Por que não faço essa pesquisa por conta própria?',
                resposta: 'Você pode executar queries no ChatGPT ou no Gemini e ler as respostas. O que o Oxigênio IA Search faz de diferente é estrutura, volume e interpretação. São 5 queries executadas sistematicamente em 4 plataformas com rodadas metodológicas de coleta, totalizando até 60 respostas classificadas por relevância, frequência e posicionamento relativo. A diferença entre pesquisar sozinho e contratar o Oxigênio IA Search é a diferença entre medir a febre e entender o que está causando o sintoma. Um diz que algo está errado. O outro diz o quê, por quê e o que fazer.',
              },
              {
                pergunta: 'O Oxigênio IA Search é a mesma coisa que SEO?',
                resposta: 'Não. SEO técnico otimiza a estrutura do seu site para motores de busca como o Google: meta tags, velocidade de carregamento, backlinks, arquitetura de URL. O Oxigênio IA Search diagnostica o que as plataformas de inteligência artificial, que operam com lógica diferente dos motores de busca, estão respondendo quando alguém pesquisa sobre o seu setor, o seu tipo de serviço ou o problema que você resolve. São sistemas distintos, com critérios distintos, e um bom desempenho num não garante presença no outro.',
              },
              {
                pergunta: 'Quanto tempo demora?',
                resposta: 'Fast: até 3 dias úteis a partir do briefing preenchido. Full: até 2 semanas para o diagnóstico inicial, com nova rodada metodológica em 60 dias. Os prazos contam a partir da confirmação de escopo. Se o briefing vier incompleto ou precisar de esclarecimento, o prazo começa quando estiver completo.',
              },
              {
                pergunta: 'O Oxigênio IA Search inclui execução das ações indicadas?',
                resposta: 'Não. O Oxigênio IA Search é diagnóstico. Entrega leitura, gap identificado e próximos passos estruturados. A execução dessas ações não está incluída no escopo. Se o resultado indicar que faz sentido continuar com a Pira Labs na execução, isso é tratado na sessão de leitura conjunta como próximo passo separado.',
              },
              {
                pergunta: 'Qual a diferença entre Fast e Full?',
                resposta: 'O Fast entrega o que o seu ICP encontra quando pesquisa no seu setor: quem está no seu espaço, como você aparece e as três primeiras ações estruturadas, com base em até 60 respostas coletadas em rodadas metodológicas. O Full parte do mesmo diagnóstico e adiciona uma segunda frente focada no concorrente mais próximo: o que ele tem que você não tem, por que isso acontece, três ações customizadas derivadas do gap, âncora financeira do que está em jogo e nova rodada metodológica em 60 dias para medir o avanço. A escolha depende de se você quer mapear o terreno ou entender por que um competidor específico está ganhando espaço que deveria ser seu.',
              },
              {
                pergunta: 'Vocês assinam NDA?',
                resposta: 'Quando há calibragem prévia ou conteúdo customizado, o NDA é assinado antes da conversa. Se a sua situação exige confidencialidade antes mesmo da aplicação, mencione isso no formulário e tratamos isso antes de confirmar o escopo.',
              },
              {
                pergunta: 'O que acontece se meu caso não encaixar no escopo?',
                resposta: 'Dizemos na confirmação, antes de qualquer cobrança e antes de começar qualquer execução. Casos fora do escopo do Oxigênio IA Search são, na maioria das vezes, casos que precisam de outro produto ou de outra sequência: ou a empresa ainda não tem presença mínima para que o diagnóstico seja acionável, ou o problema que ela está tentando resolver é mais fundo do que o diagnóstico de presença em IA consegue capturar. Quando isso acontece, indicamos o próximo passo que faz mais sentido para o contexto.',
              },
            ].map(({ pergunta, resposta }, i) => (
              <details
                key={i}
                style={{ borderBottom: '1px solid rgba(5,38,46,0.2)' }}
              >
                <summary
                  className="font-display font-normal cursor-pointer list-none py-5"
                  style={{ color: '#05262e', fontSize: '1.0625rem' }}
                >
                  {pergunta}
                </summary>
                <p
                  className="font-body font-light leading-relaxed pb-6"
                  style={{ color: '#05262e', fontSize: '1rem', maxWidth: '48rem' }}
                >
                  {resposta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      </main>
      <FinalCTA
        theme="dark"
        heading="Pronto para saber o que seu cliente encontra quando pesquisa?"
        origin="oxigenio-ia-search"
      />
    </>
  )
}
