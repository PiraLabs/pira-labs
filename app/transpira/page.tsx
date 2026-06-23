import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'TRANSPIRA — Execução de Creative Business Turnaround | Pira Labs',
  description: 'O TRANSPIRA é a metodologia de execução da Pira Labs: entra na operação com o time, instala processo e governança, e encerra quando os primeiros resultados acordados no escopo são verificados, não quando o prazo acaba.',
  alternates: {
    canonical: 'https://piralabs.com.br/transpira',
  },
  openGraph: {
    title: 'TRANSPIRA — Execução de Creative Business Turnaround | Pira Labs',
    description: 'O TRANSPIRA é a metodologia de execução da Pira Labs: entra na operação com o time, instala processo e governança, e encerra quando os primeiros resultados acordados no escopo são verificados, não quando o prazo acaba.',
    url: 'https://piralabs.com.br/transpira',
    images: [{ url: 'https://piralabs.com.br/piralabs-og-image.png', width: 1200, height: 630, alt: 'Pira Labs' }],
  },
}

export default function TranspiraPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://piralabs.com.br/transpira',
        url: 'https://piralabs.com.br/transpira',
        name: 'TRANSPIRA — Execução de Creative Business Turnaround',
        description: 'O TRANSPIRA é a metodologia de execução da Pira Labs: entra na operação com o time, instala processo e governança, e encerra quando os primeiros resultados acordados no escopo são verificados, não quando o prazo acaba.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': 'https://piralabs.com.br' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://piralabs.com.br' },
          { '@type': 'ListItem', position: 2, name: 'TRANSPIRA', item: 'https://piralabs.com.br/transpira' },
        ],
      },
      {
        '@type': 'Service',
        name: 'TRANSPIRA',
        description: 'Execução de Creative Business Turnaround. Entra na operação com o time, instala processo e governança. Encerra por resultado verificado, não por prazo. Duas configurações: COO Temporário e Arquiteto de Delegação.',
        provider: {
          '@type': 'Organization',
          name: 'Pira Labs',
          url: 'https://piralabs.com.br',
        },
        areaServed: 'BR',
        serviceType: 'Execução operacional',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qual a diferença entre o TRANSPIRA e contratar uma agência ou consultoria?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Uma agência entrega plano, conteúdo ou campanha. Uma consultoria tradicional recomenda de fora e passa a execução para o time do cliente. O TRANSPIRA faz diferente nas duas dimensões: entra dentro da operação e trabalha junto com o time que vai continuar operando depois, e não encerra pelo calendário, encerra quando os primeiros resultados acordados no escopo são verificados. A distinção prática é que o critério de saída não é data. É resultado. Isso muda o que a Pira Labs tem incentivo para fazer durante o projeto.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qual a diferença entre o TRANSPIRA e o INSPIRA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O INSPIRA é diagnóstico. Lê seis camadas do negócio em sequência e entrega o problema nomeado com causa específica e rota executável. O TRANSPIRA é execução. Pressupõe que o problema já foi nomeado e entra para executar o que o diagnóstico indicou, dentro da operação. O INSPIRA pode existir sem o TRANSPIRA: o cliente recebe o diagnóstico e executa com quem quiser. O TRANSPIRA pode existir sem o INSPIRA: quando o cliente já tem diagnóstico claro e precisa de execução. O programa INSPIRA+TRANSPIRA vai do problema nomeado ao resultado verificado sem interrupção entre as duas fases.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vocês trazem tecnologia própria?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Não. A Pira Labs não vende tecnologia e não tem parceiro tecnológico exclusivo. O TRANSPIRA identifica onde IA e automação amplificam capacidade real dentro da operação do cliente e indica o que faz sentido para aquele contexto específico. Quando há indicação de parceiro tecnológico, qualquer revenue share envolvido é declarado antes da recomendação. Transparência sobre incentivos é parte do método, não exceção.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qual a diferença entre as duas configurações?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O COO Temporário entra quando o cliente sabe o que precisa acontecer mas não tem quem conduza enquanto a operação continua rodando. A Pira Labs conduz decisões com o decisor, organiza o time e instala processo. O Arquiteto de Delegação entra quando o cliente tem o recurso interno mas esse recurso não tem estrutura, critério nem autoridade para operar com autonomia. A Pira Labs não substitui o recurso. Instala o que ele precisa para funcionar. A escolha entre as duas depende do diagnóstico de entrada, não de preferência do cliente.',
            },
          },
          {
            '@type': 'Question',
            name: 'O TRANSPIRA inclui o setor jurídico?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O método do TRANSPIRA é aplicável a empresas de serviços de qualquer setor, incluindo jurídico. Existe uma frente com método próprio desenvolvida para escritórios de advocacia e áreas jurídicas corporativas. Se o seu contexto é jurídico, mencione na conversa inicial.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vocês assinam NDA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Quando há calibragem prévia ou conteúdo sensível antes da conversa de qualificação, o NDA é assinado antes de começar. O TRANSPIRA entra fundo na operação do cliente: processos internos, estrutura de custos, decisões de delegação. Confidencialidade não é protocolo. É condição de trabalho. Se o seu caso exige NDA antes mesmo da conversa inicial, mencione no formulário de contato.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" style={{ backgroundColor: '#e8e0d6', padding: '12px 80px' }}>
        <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.75rem', color: '#05262e' }}>
          <li><a href="/" style={{ color: '#05262e', textDecoration: 'none' }}>Home</a></li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li style={{ opacity: 0.6 }}>TRANSPIRA</li>
        </ol>
      </nav>

      {/* S1 — HERO | Sand */}
      <section style={{ backgroundColor: '#e8e0d6', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1A5568',
            marginBottom: '24px',
          }}>
            Execução de Creative Business Turnaround
          </p>
          <h1 className="type-display" style={{
            fontWeight: 600,
            lineHeight: 1.1,
            color: '#05262e',
            marginBottom: '32px',
            maxWidth: '800px',
          }}>
            Quando o trabalho certo substitui o trabalho em{' '}
            <span style={{ color: '#C4421A' }}>excesso</span>.
          </h1>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#05262e',
            maxWidth: '600px',
            marginBottom: '40px',
          }}>
            O TRANSPIRA é a execução que acontece dentro da operação, com o time que vai operar depois. Conduzido por Celso Gama, não encerra pelo calendário. Encerra quando os primeiros resultados acordados no escopo são verificados.
          </p>
          <div>
            <a
              href="/contato?origem=transpira"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#F5F5F2',
                backgroundColor: '#eb5c2e',
                padding: '0.75rem 1.5rem',
                borderRadius: 0,
                textDecoration: 'none',
              }}
            >
              Conversar com a Pira Labs
            </a>
            <p style={{
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 300,
              fontSize: '0.75rem',
              color: '#05262e',
              opacity: 0.6,
              marginTop: '12px',
            }}>
              Investimento sob consulta. Capacidade limitada a dois projetos simultâneos.
            </p>
          </div>
        </div>
      </section>

      {/* S2 — O QUE É O TRANSPIRA | Ink */}
      <section style={{ backgroundColor: '#05262e', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            O método
          </p>
          <h2 className="type-h1" style={{
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '48px',
            maxWidth: '700px',
          }}>
            Execução de <span style={{ color: '#eb5c2e' }}>dentro</span>, não recomendação de fora.
          </h2>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O TRANSPIRA pressupõe que o problema já foi nomeado. Não chega para diagnosticar. Chega para executar o que o diagnóstico indicou, dentro da operação, com o time que vai continuar operando quando a Pira Labs sair.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              A diferença entre consultoria que recomenda e execução que transforma está em quem carrega o trabalho. No TRANSPIRA, a Pira não entrega plano para o cliente executar. Entra junto, redesenha o que precisa ser redesenhado e transfere a capacidade para o time antes de sair. <strong style={{ fontWeight: 600 }}>Com o TRANSPIRA, a operação deixa de depender de heróis. Entra processo que funciona com clareza.</strong>
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              <strong style={{ fontWeight: 600 }}>Tecnologia entra depois de entender o problema, nunca antes.</strong> O relatório &#8220;The GenAI Divide: State of AI in Business 2025&#8221;, do MIT Media Lab, iniciativa NANDA, publicado em julho de 2025, identificou que 95% dos pilotos de IA generativa estagnam na fase piloto, sem impacto mensurável no resultado financeiro. IA e automação amplificam o que já existe. Se o que existe é ruído, a tecnologia escala o ruído. O TRANSPIRA instala o método antes de indicar a ferramenta. Quando indica tecnologia, é porque há problema real que ela resolve. Quando indica parceiro, declara qualquer incentivo envolvido.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              <strong style={{ fontWeight: 600 }}>O TRANSPIRA não encerra pelo calendário. Encerra quando os primeiros resultados acordados no escopo são verificados.</strong> Esse critério é definido antes de começar, não depois. É o que diferencia execução real de projeto com data de entrega.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Celso Gama conduz o TRANSPIRA com formação em andamento no Applied AI Certificate Program (MIT), MBA pelo Insper e 25 anos operando dentro de contextos complexos de serviços. Em projetos anteriores à Pira Labs, atuou em operações que produziram resultados verificáveis: margem operacional de -64% para +15% em seis meses em uma operação da multinacional do setor de bebidas, e escala de receita de R$16M para R$163M em 24 meses em uma operação de comunicação.
            </p>
            <blockquote style={{ borderLeft: '2px solid #eb5c2e', paddingLeft: '32px', marginTop: '48px' }}>
              <p className="type-h2" style={{
                fontFamily: 'AtypDisplay, sans-serif',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.25,
                color: '#F5F5F2',
                marginBottom: '20px',
              }}>
                &#8220;Entro na operação para trabalhar junto com o time, não para o time. Quando saio, o que ficou funcionando foi construído por quem vai operar. Não por mim.&#8221;
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
              }}>
                Celso Gama, COO e Co-founder da Pira Labs
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* S3 — O QUE ENTREGAMOS | Teal */}
      <section style={{ backgroundColor: '#004757', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            O que muda
          </p>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '24px',
            maxWidth: '700px',
          }}>
            Quatro entregáveis. Operação que sustenta.
          </h2>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#F5F5F2',
            maxWidth: '720px',
            marginBottom: '64px',
          }}>
            O TRANSPIRA produz quatro entregáveis em cada projeto. São os pontos em que a operação muda de estado, não documentos para arquivar.
          </p>
          <div>
            {[
              {
                num: '01',
                nome: 'Redesenho de trabalho',
                texto: 'Redesenho de trabalho é o primeiro entregável do TRANSPIRA. Mapeamento de fluxos críticos, identificação de gargalos reais e redesenho da relação entre o que é feito, por quem e com qual objetivo. Com o TRANSPIRA, a operação para de depender de pessoas-chave que não podem sair. Entra processo com clareza de responsabilidade e rastreabilidade de resultado.',
              },
              {
                num: '02',
                nome: 'Tecnologia curada',
                texto: 'Tecnologia curada é o segundo entregável do TRANSPIRA. Identificação de onde IA e automação amplificam capacidade real, não onde parecem modernizar a aparência da operação. A Pira Labs não vende tecnologia. Quando indica parceiro, declara qualquer revenue share envolvido. Transparência sobre incentivos é parte do método.',
              },
              {
                num: '03',
                nome: 'Governança aplicada',
                texto: 'Governança aplicada é o terceiro entregável do TRANSPIRA. Processos críticos, pontos de decisão e protocolos de aprovação que sustentam o negócio depois que a Pira Labs sai. Não é manual que ninguém lê. É a estrutura que permite que decisões sejam tomadas sem que o fundador precise ser consultado em cada uma.',
              },
              {
                num: '04',
                nome: 'Valor percebido',
                texto: 'Valor percebido é o quarto entregável do TRANSPIRA. A capacidade de tornar o que a empresa entrega visível e verificável para o cliente. Em projetos anteriores à Pira Labs, esse trabalho produziu resultado mensurável: margem operacional de -64% para +15% em seis meses em uma operação do setor de bebidas. Diferenciação real que o cliente consegue perceber sem depender de explicação excessiva.',
              },
            ].map((item, i) => (
              <div
                key={item.nome}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
                style={{
                  padding: '48px 0',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(232,224,214,0.2)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
                  <span style={{
                    fontFamily: 'AtypText, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    letterSpacing: '0.14em',
                    color: '#b0a596',
                    flexShrink: 0,
                  }}>
                    {item.num}
                  </span>
                  <h3 className="type-h1" style={{
                    fontFamily: 'AtypDisplay, sans-serif',
                    fontWeight: 600,
                    lineHeight: 1.05,
                    letterSpacing: '0.01em',
                    color: '#F5F5F2',
                    margin: 0,
                  }}>
                    {item.nome}
                  </h3>
                </div>
                <p style={{
                  fontFamily: 'AtypText, sans-serif',
                  fontWeight: 300,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#e8e0d6',
                  maxWidth: '560px',
                }}>
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4 — DUAS CONFIGURAÇÕES | Sand */}
      <section style={{ backgroundColor: '#e8e0d6', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1A5568',
            marginBottom: '24px',
          }}>
            Como entramos
          </p>
          <h2 className="type-h1" style={{
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#05262e',
            marginBottom: '64px',
            maxWidth: '700px',
          }}>
            Dois modos de entrada. Um <span style={{ color: '#C4421A' }}>critério</span> de saída.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '64px', maxWidth: '1000px', marginBottom: '64px' }}>

            {/* Configuração A */}
            <div>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1A5568',
                marginBottom: '12px',
              }}>
                Configuração A
              </p>
              <h3 style={{
                fontFamily: 'AtypDisplay, sans-serif',
                fontWeight: 600,
                fontSize: '1.375rem',
                color: '#05262e',
                marginBottom: '16px',
              }}>
                COO Temporário
              </h3>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: '#05262e',
                marginBottom: '24px',
              }}>
                Para quem sabe o que precisa acontecer e não tem quem conduza enquanto a operação continua rodando. A Pira Labs entra como o executivo que não existe internamente: conduz decisões com o decisor, organiza o time, instala processo. Quando sai, deixa capacidade instalada, não dependência nova.
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: '#05262e',
                opacity: 0.6,
              }}>
                Duração típica: 2 a 3 meses de imersão.
              </p>
            </div>

            {/* Configuração B */}
            <div>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1A5568',
                marginBottom: '12px',
              }}>
                Configuração B
              </p>
              <h3 style={{
                fontFamily: 'AtypDisplay, sans-serif',
                fontWeight: 600,
                fontSize: '1.375rem',
                color: '#05262e',
                marginBottom: '16px',
              }}>
                Arquiteto de Delegação
              </h3>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: '#05262e',
                marginBottom: '24px',
              }}>
                Para quem tem o recurso interno mas esse recurso não tem estrutura, critério nem autoridade para operar sem aprovação em cada decisão. A Pira Labs não substitui esse recurso. Instala o que ele precisa para funcionar com autonomia: processo, critério de decisão e protocolo de escalada.
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: '#05262e',
                opacity: 0.6,
              }}>
                Duração típica: 45 a 60 dias de estruturação com acompanhamento.
              </p>
            </div>
          </div>

          {/* Parâmetros mínimos */}
          <div style={{ borderTop: '1px solid rgba(5,38,46,0.15)', paddingTop: '48px', maxWidth: '800px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Duração mínima: 8 semanas.',
                'Presença mínima: dois dias presenciais e pelo menos um dia de acompanhamento remoto por semana.',
                'A capacidade simultânea é deliberadamente limitada a dois projetos em operação normal. Esse limite protege a profundidade do trabalho.',
              ].map((texto, i) => (
                <p key={i} style={{
                  fontFamily: 'AtypText, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: '#05262e',
                }}>
                  {texto}
                </p>
              ))}
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: '#05262e',
              }}>
                <strong style={{ fontWeight: 600 }}>O TRANSPIRA não encerra pelo calendário. Encerra quando os primeiros resultados acordados no escopo são verificados.</strong> O critério de encerramento é definido antes de começar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S5 — PARA QUEM É | Ink */}
      <section style={{ backgroundColor: '#05262e', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            Qualificação
          </p>
          <h2 className="type-h1" style={{
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '64px',
            maxWidth: '700px',
          }}>
            Para quem faz sentido e para quem não faz.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '80px', maxWidth: '1000px' }}>

            {/* Coluna esquerda */}
            <div>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                marginBottom: '32px',
              }}>
                Para quem é
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  'O fundador tem clareza sobre o gargalo mas não tem quem conduza a mudança enquanto a operação continua rodando. Sabe o que precisa acontecer. Não tem como fazer acontecer de dentro sem parar o que já funciona.',
                  'O fundador tem o recurso interno, mas esse recurso não tem estrutura, critério nem autoridade para operar sem aprovação em cada decisão. A delegação existe no organograma. Não existe na prática.',
                  'O fundador já tentou resolver. O esforço foi real. O resultado não foi suficiente. Com frequência porque faltou método, não dedicação.',
                ].map((texto, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ color: '#F5F5F2', marginTop: '4px', flexShrink: 0 }}>&#8594;</span>
                    <p style={{
                      fontFamily: 'AtypText, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: '#F5F5F2',
                    }}>
                      {texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita */}
            <div>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                marginBottom: '32px',
              }}>
                Não faz sentido se
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  'A empresa está em crise aguda: sem caixa para os próximos 30 dias, ameaça jurídica imediata ou paralisia operacional. O TRANSPIRA não é remédio de emergência. É para quem ainda tem condições de construir com clareza.',
                  'Quem decide não tem autonomia real ou não está disposto a redesenhar o próprio papel na operação. O TRANSPIRA pressupõe que quem decide está disposto a mudar o que precisa mudar, inclusive o próprio papel. Não como condição burocrática. Como pré-requisito de funcionamento: o projeto não produz resultado se quem decide continua operando do mesmo modo que criou o problema.',
                  'Quem busca consultoria que entrega plano e sai. O TRANSPIRA acontece dentro da operação. A Pira trabalha junto com o time, não para o time. Quem quer recomendação externa para executar internamente encontra outro produto mais adequado.',
                ].map((texto, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ color: '#e8e0d6', marginTop: '4px', flexShrink: 0 }}>&#183;</span>
                    <p style={{
                      fontFamily: 'AtypText, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: '#e8e0d6',
                    }}>
                      {texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA intermediário */}
          <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid rgba(232,224,214,0.15)' }}>
            <a
              href="/contato?origem=transpira"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#F5F5F2',
                backgroundColor: '#eb5c2e',
                padding: '0.75rem 1.5rem',
                borderRadius: 0,
                textDecoration: 'none',
              }}
            >
              Conversar com a Pira Labs
            </a>
          </div>
        </div>
      </section>

      {/* S6 — INSPIRA+TRANSPIRA | Teal */}
      <section style={{ backgroundColor: '#004757', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            Contrato unificado
          </p>
          <h2 className="type-h1" style={{
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '32px',
            maxWidth: '700px',
          }}>
            Do diagnóstico à execução sem <span style={{ color: '#eb5c2e' }}>interrupção</span>.
          </h2>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Quem já sabe que precisa de diagnóstico e execução não deveria precisar tomar duas decisões separadas, assinar dois contratos e retomar o contexto no meio do caminho. O INSPIRA+TRANSPIRA é a metodologia de diagnóstico e execução da Pira Labs dentro do{' '}
              <a href="/creative-business-turnaround" style={{ color: '#F5F5F2', textDecoration: 'underline' }}>
                Creative Business Turnaround
              </a>{' '}
              — vai do problema nomeado ao resultado verificado sem interrupção.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O TRANSPIRA pode existir sem o INSPIRA, quando o cliente já tem diagnóstico claro e o que precisa é de execução. Nesse caso, o TRANSPIRA começa pela leitura de contexto antes de construir qualquer coisa.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              <strong style={{ fontWeight: 600 }}>Pré-condição de entrada:</strong> o programa só começa quando o decisor reconhece, em conversa registrada no escopo, que o projeto pode exigir redesenho do próprio papel na operação. Essa pré-condição existe para proteger o cliente e a Pira Labs. Projeto que começa sem esse reconhecimento tende a travar exatamente no ponto em que o redesenho se torna necessário.
            </p>
          </div>

          {/* Divisor interno */}
          <div style={{ borderTop: '1px solid rgba(232,224,214,0.2)', marginBottom: '64px' }} />

          {/* Duas fases */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '64px', maxWidth: '1000px' }}>
            <div>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                marginBottom: '12px',
              }}>
                Fase 1
              </p>
              <h3 style={{
                fontFamily: 'AtypDisplay, sans-serif',
                fontWeight: 600,
                fontSize: '1.125rem',
                color: '#F5F5F2',
                marginBottom: '16px',
              }}>
                Estrutura Operacional
              </h3>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: '#e8e0d6',
                marginBottom: '16px',
                opacity: 0.7,
              }}>
                0 a 3 meses
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: '#e8e0d6',
                marginBottom: '16px',
              }}>
                Processos documentados, critério de delegação instalado, rastreabilidade de tempo e custo por entrega, recurso interno operando com autonomia verificável.
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                color: '#e8e0d6',
                opacity: 0.7,
              }}>
                Critério de saída: o recurso interno executa os processos definidos sem precisar dos fundadores do cliente em 5 casos consecutivos por processo.
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                marginBottom: '12px',
              }}>
                Fase 2
              </p>
              <h3 style={{
                fontFamily: 'AtypDisplay, sans-serif',
                fontWeight: 600,
                fontSize: '1.125rem',
                color: '#F5F5F2',
                marginBottom: '16px',
              }}>
                Posicionamento e Mercado
              </h3>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: '#e8e0d6',
                marginBottom: '16px',
                opacity: 0.7,
              }}>
                3 a 12 meses
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: '#e8e0d6',
                marginBottom: '16px',
              }}>
                Canal digital para o ICP definido, conteúdo com diferencial técnico declarado, presença que o cliente descobre sem precisar conhecer o nome.
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                color: '#e8e0d6',
                opacity: 0.7,
              }}>
                Condição de entrada: Fase 1 concluída com critério verificável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S7 — FAQ | Sand */}
      <section style={{ backgroundColor: '#e8e0d6', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1A5568',
            marginBottom: '24px',
          }}>
            Perguntas frequentes
          </p>
          <h2 className="type-h1" style={{
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#05262e',
            marginBottom: '64px',
            maxWidth: '700px',
          }}>
            O que você ainda quer saber antes de <span style={{ color: '#C4421A' }}>conversar</span>.
          </h2>
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
            {[
              {
                pergunta: 'Qual a diferença entre o TRANSPIRA e contratar uma agência ou consultoria?',
                resposta: 'Uma agência entrega plano, conteúdo ou campanha. Uma consultoria tradicional recomenda de fora e passa a execução para o time do cliente. O TRANSPIRA faz diferente nas duas dimensões: entra dentro da operação e trabalha junto com o time que vai continuar operando depois, e não encerra pelo calendário, encerra quando os primeiros resultados acordados no escopo são verificados. A distinção prática é que o critério de saída não é data. É resultado. Isso muda o que a Pira Labs tem incentivo para fazer durante o projeto.',
              },
              {
                pergunta: 'Qual a diferença entre o TRANSPIRA e o INSPIRA?',
                resposta: 'O INSPIRA é diagnóstico. Lê seis camadas do negócio em sequência e entrega o problema nomeado com causa específica e rota executável. O TRANSPIRA é execução. Pressupõe que o problema já foi nomeado e entra para executar o que o diagnóstico indicou, dentro da operação. O INSPIRA pode existir sem o TRANSPIRA: o cliente recebe o diagnóstico e executa com quem quiser. O TRANSPIRA pode existir sem o INSPIRA: quando o cliente já tem diagnóstico claro e precisa de execução. O programa INSPIRA+TRANSPIRA vai do problema nomeado ao resultado verificado sem interrupção entre as duas fases.',
              },
              {
                pergunta: 'Vocês trazem tecnologia própria?',
                resposta: 'Não. A Pira Labs não vende tecnologia e não tem parceiro tecnológico exclusivo. O TRANSPIRA identifica onde IA e automação amplificam capacidade real dentro da operação do cliente e indica o que faz sentido para aquele contexto específico. Quando há indicação de parceiro tecnológico, qualquer revenue share envolvido é declarado antes da recomendação. Transparência sobre incentivos é parte do método, não exceção.',
              },
              {
                pergunta: 'Qual a diferença entre as duas configurações?',
                resposta: 'O COO Temporário entra quando o cliente sabe o que precisa acontecer mas não tem quem conduza enquanto a operação continua rodando. A Pira Labs conduz decisões com o decisor, organiza o time e instala processo. O Arquiteto de Delegação entra quando o cliente tem o recurso interno mas esse recurso não tem estrutura, critério nem autoridade para operar com autonomia. A Pira Labs não substitui o recurso. Instala o que ele precisa para funcionar. A escolha entre as duas depende do diagnóstico de entrada, não de preferência do cliente.',
              },
              {
                pergunta: 'O TRANSPIRA inclui o setor jurídico?',
                resposta: 'O método do TRANSPIRA é aplicável a empresas de serviços de qualquer setor, incluindo jurídico. Existe uma frente com método próprio desenvolvida para escritórios de advocacia e áreas jurídicas corporativas. Se o seu contexto é jurídico, mencione na conversa inicial.',
              },
              {
                pergunta: 'Vocês assinam NDA?',
                resposta: 'Quando há calibragem prévia ou conteúdo sensível antes da conversa de qualificação, o NDA é assinado antes de começar. O TRANSPIRA entra fundo na operação do cliente: processos internos, estrutura de custos, decisões de delegação. Confidencialidade não é protocolo. É condição de trabalho. Se o seu caso exige NDA antes mesmo da conversa inicial, mencione no formulário de contato.',
              },
            ].map((item) => (
              <details key={item.pergunta} style={{ borderBottom: '1px solid rgba(5,38,46,0.15)' }}>
                <summary style={{
                  fontFamily: 'AtypText, sans-serif',
                  fontWeight: 400,
                  fontSize: '1rem',
                  color: '#05262e',
                  padding: '24px 0',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  {item.pergunta}
                  <span style={{ color: '#1A5568', fontSize: '1.25rem', fontWeight: 300, flexShrink: 0, marginLeft: '16px' }}>+</span>
                </summary>
                <p style={{
                  fontFamily: 'AtypText, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: '#05262e',
                  paddingBottom: '24px',
                  maxWidth: '680px',
                }}>
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINALCTA | Ink */}
      <section style={{ backgroundColor: '#05262e', padding: '120px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="type-h2" style={{
            fontWeight: 300,
            lineHeight: 1.2,
            color: '#F5F5F2',
            marginBottom: '40px',
          }}>
            O TRANSPIRA não é projeto que se vende. É projeto que se aceita.
          </h2>
          <a
            href="/contato?origem=transpira"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#F5F5F2',
              backgroundColor: '#eb5c2e',
              padding: '0.75rem 1.5rem',
              borderRadius: 0,
              textDecoration: 'none',
            }}
          >
            RESPIRE
          </a>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '0.75rem',
            color: '#e8e0d6',
            marginTop: '16px',
          }}>
            A conversa de entrada é qualificação mútua.
          </p>
        </div>
      </section>
    </>
  )
}
