import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'INSPIRA — Diagnóstico de Creative Business Turnaround | Pira Labs',
  description: 'O INSPIRA é o diagnóstico de Creative Business Turnaround da Pira Labs: seis camadas lidas em sequência antes de nomear qualquer problema, conduzido por Gabriela Aguiar, sempre terminando com rota executável.',
  alternates: {
    canonical: 'https://piralabs.com.br/inspira',
  },
  openGraph: {
    title: 'INSPIRA — Diagnóstico de Creative Business Turnaround | Pira Labs',
    description: 'O INSPIRA é o diagnóstico de Creative Business Turnaround da Pira Labs: seis camadas lidas em sequência antes de nomear qualquer problema, conduzido por Gabriela Aguiar, sempre terminando com rota executável.',
    url: 'https://piralabs.com.br/inspira',
    images: [{ url: 'https://piralabs.com.br/piralabs-og-image.png', width: 1200, height: 630, alt: 'Pira Labs' }],
  },
}

export default function InspiraPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://piralabs.com.br/inspira',
        url: 'https://piralabs.com.br/inspira',
        name: 'INSPIRA — Diagnóstico de Creative Business Turnaround',
        description: 'O INSPIRA é o diagnóstico de Creative Business Turnaround da Pira Labs: seis camadas lidas em sequência antes de nomear qualquer problema, conduzido por Gabriela Aguiar, sempre terminando com rota executável.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': 'https://piralabs.com.br' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://piralabs.com.br' },
          { '@type': 'ListItem', position: 2, name: 'INSPIRA', item: 'https://piralabs.com.br/inspira' },
        ],
      },
      {
        '@type': 'Service',
        name: 'INSPIRA',
        description: 'Diagnóstico de Creative Business Turnaround. Seis camadas lidas em sequência antes de nomear qualquer problema. Conduzido por Gabriela Aguiar. Sempre termina com rota executável.',
        provider: {
          '@type': 'Organization',
          name: 'Pira Labs',
          url: 'https://piralabs.com.br',
        },
        areaServed: 'BR',
        serviceType: 'Diagnóstico empresarial',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qual a diferença entre o INSPIRA e uma consultoria estratégica?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Em muitos projetos de consultoria estratégica, o diagnóstico organiza uma hipótese que já chegou forte. O INSPIRA não parte de hipótese. Parte de seis leituras em sequência que convergem em síntese antes de nomear qualquer problema. A diferença prática é que o INSPIRA frequentemente encontra um problema diferente do que a empresa declarou ter. Diagnóstico que confirma o que você já sabia custa caro e entrega pouco. O INSPIRA só faz sentido para quem quer saber o que está lá, mesmo que seja diferente do esperado.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quanto tempo leva?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De 4 a 6 semanas a partir do início do diagnóstico. O prazo não começa na assinatura da proposta, começa quando a conversa de calibragem confirmou que há condições para o diagnóstico funcionar e a proposta foi aceita. Cada camada tem síntese própria com aprovação do decisor antes de avançar para a próxima. O prazo final depende da disponibilidade de quem decide em cada etapa.',
            },
          },
          {
            '@type': 'Question',
            name: 'O INSPIRA inclui execução?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Não. O INSPIRA entrega o problema nomeado com causa específica e a rota executável. Execução é o TRANSPIRA, conduzido por Celso Gama. Muitas empresas seguem para o TRANSPIRA depois do INSPIRA, mas é decisão tomada com o diagnóstico em mãos, não compromisso antecipado. O diagnóstico é de propriedade do cliente e pode ser executado com qualquer parceiro ou com o próprio time.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vocês usam IA no INSPIRA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sim, em partes do processo de coleta e organização de informação. Não no julgamento. A leitura integrada das seis camadas, a síntese e o que entra na Propulsão são feitos por Gabriela Aguiar. A IA não substitui o julgamento humano no diagnóstico porque o que diferencia o INSPIRA não é velocidade de processamento: é a capacidade de ler o que está implícito, o que contradiz o que foi dito e o que o número esconde.',
            },
          },
          {
            '@type': 'Question',
            name: 'Posso começar com algo menor antes do INSPIRA completo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sim. O pocket do INSPIRA (R$ 3.900) é uma versão compacta para quem precisa de uma leitura inicial antes de assumir o diagnóstico completo. Combina três formulários prévios, uma sessão de 1h30 e uma síntese com leitura integrada e próximos passos prioritários. É a porta de entrada para quem quer sentir o método antes de contratar o diagnóstico completo.',
            },
          },
          {
            '@type': 'Question',
            name: 'Como funciona a confidencialidade?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Todas as informações compartilhadas no processo ficam restritas à Pira Labs e não são usadas fora do escopo do projeto contratado. Quando há conteúdo sensível ou calibragem prévia que exige confidencialidade antes mesmo da conversa de calibragem, o NDA é assinado antes da conversa começar. Se esse é o seu caso, mencione no formulário de contato.',
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
      <nav aria-label="Breadcrumb" style={{ backgroundColor: '#e8e0d6', padding: '12px 0' }}>
        <div className="container-site">
          <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.75rem', color: '#1A5568' }}>
            <li><a href="/" style={{ color: '#1A5568', textDecoration: 'none' }}>Home</a></li>
            <li className="select-none" aria-hidden="true">·</li>
            <li aria-current="page">INSPIRA</li>
          </ol>
        </div>
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
            Diagnóstico de Creative Business Turnaround
          </p>
          <h1 className="type-display" style={{
            fontWeight: 600,
            lineHeight: 1.1,
            color: '#05262e',
            marginBottom: '32px',
            maxWidth: '800px',
          }}>
            Quando você para de resolver o problema{' '}
            <span style={{ color: '#C4421A' }}>errado</span>.
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
            O INSPIRA é o diagnóstico que lê seis camadas do negócio em sequência antes de nomear qualquer problema. Conduzido por Gabriela Aguiar, sempre termina com rota executável, não com relatório para arquivar.
          </p>
          <div>
            <a
              href="/contato?origem=inspira"
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
              marginTop: '12px',
            }}>
              Investimento sob consulta. A conversa de calibragem vem antes da proposta.
            </p>
          </div>
        </div>
      </section>

      {/* S2 — O QUE É O INSPIRA | Ink */}
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
            Seis leituras. Uma{' '}
            <span style={{ color: '#eb5c2e' }}>síntese</span>.
          </h2>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O INSPIRA não parte de hipótese. Parte de escuta. Antes de qualquer recomendação, seis camadas do negócio são lidas em sequência: de onde a empresa vem e o que declara querer, como aparece para o mercado, como as pessoas e os papéis reais funcionam na prática, como a governança realmente opera, onde a tensão econômica está concentrada, e o que tudo isso revela quando lido junto.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              <strong style={{ fontWeight: 600 }}>Nenhuma recomendação é feita antes de todas as seis camadas estarem integradas.</strong> Não porque seja protocolo. Porque o problema declarado raramente é o problema real. A empresa que chega com problema de vendas frequentemente tem problema de precificação. A que chega com problema de equipe frequentemente tem problema de modelo. O INSPIRA lê o sistema inteiro para não tratar o sintoma.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Em projetos anteriores à Pira Labs, os fundadores atuaram em operações que produziram resultados verificáveis: margem operacional de -64% para +15% em seis meses em uma operação da multinacional do setor de bebidas, e escala de receita de R$16M para R$163M em 24 meses em uma operação de comunicação. O INSPIRA é a metodologia que sistematizou esse julgamento.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O resultado não é relatório para apresentar na reunião de board. É a clareza de onde o problema realmente está, por que está lá e o que muda quando ele é resolvido. <strong style={{ fontWeight: 600 }}>O diagnóstico é de propriedade do cliente.</strong> O que a empresa faz com ele, e com quem faz, é decisão pós-diagnóstico.
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
                &#8220;O INSPIRA sempre termina com ação. Não com relatório para arquivar.&#8221;
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
              }}>
                Gabriela Aguiar, CEO e Co-founder da Pira Labs
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* S3 — AS SEIS CAMADAS + PROPULSÃO | Teal — bloco único com divisor interno */}
      <section style={{ backgroundColor: '#004757', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Sub-bloco: seis camadas */}
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            O diagnóstico
          </p>
          <h2 className="type-h1" style={{
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '24px',
            maxWidth: '700px',
          }}>
            Seis camadas antes de qualquer conclusão.
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
            O diagnóstico avança em sequência. Cada camada responde a uma pergunta que o negócio raramente se faz de forma estruturada. Nenhuma é opcional. É a leitura integrada das seis que produz o problema nomeado com causa específica.
          </p>

          {/* Seis camadas — faixas empilhadas */}
          <div style={{ marginBottom: '96px' }}>
            {[
              { num: '01', nome: 'SOPRO', texto: 'SOPRO abre o diagnóstico INSPIRA. De onde a empresa parte e o que declara querer. A leitura do que foi construído até aqui, do que ainda não foi dito em voz alta e do que a fundadora ou o fundador carrega como intenção sem ter transformado em direção.' },
              { num: '02', nome: 'FÔLEGO', texto: 'FÔLEGO é a segunda camada do diagnóstico INSPIRA. Como a empresa aparece para o mercado e para os motores de inteligência artificial. O que o ICP encontra quando procura, como a empresa é descrita por quem não está dentro dela e qual território está sendo ocupado por quem chegou antes.' },
              { num: '03', nome: 'PULSO', texto: 'PULSO é a terceira camada do diagnóstico INSPIRA. Como as pessoas e os papéis reais funcionam na prática. O organograma real, não o desenhado. Onde as decisões de fato acontecem, quem as toma e o que fica travado quando uma pessoa-chave está fora.' },
              { num: '04', nome: 'ACÚSTICA', texto: 'ACÚSTICA é a quarta camada do diagnóstico INSPIRA. Como a governança e os processos realmente operam. O que está documentado e o que vive na cabeça de uma pessoa. Onde o improviso substituiu o processo e qual o custo real disso na operação.' },
              { num: '05', nome: 'PRESSÃO', texto: 'PRESSÃO é a quinta camada do diagnóstico INSPIRA. Onde a tensão econômica está concentrada. O que o resultado financeiro esconde e o que a margem real revela. Onde o negócio está gerando valor e onde está trabalhando de graça sem saber.' },
              { num: '06', nome: 'SUSPIRO', texto: 'SUSPIRO é a sexta camada do diagnóstico INSPIRA. O que as cinco camadas anteriores revelam quando lidas juntas. A síntese que nenhuma leitura isolada alcança. O problema real nomeado com causa específica, separado dos sintomas que fizeram a empresa chegar até aqui achando que o problema era outro.' },
            ].map((camada, i) => (
              <div
                key={camada.nome}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
                style={{
                  padding: '48px 0',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(232,224,214,0.12)',
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
                    {camada.num}
                  </span>
                  <h3 className="type-h1" style={{
                    fontFamily: 'AtypDisplay, sans-serif',
                    fontWeight: 600,
                    lineHeight: 1.0,
                    letterSpacing: '0.01em',
                    color: '#F5F5F2',
                    margin: 0,
                  }}>
                    {camada.nome}
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
                  {camada.texto}
                </p>
              </div>
            ))}
          </div>

          {/* Divisor interno */}
          <div style={{ borderTop: '1px solid rgba(232,224,214,0.12)', marginBottom: '96px' }} />

          {/* Sub-bloco: Propulsão */}
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            O output
          </p>
          <h2 className="type-h1" style={{
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '24px',
            maxWidth: '700px',
          }}>
            <span style={{ color: '#eb5c2e' }}>Propulsão</span>: do diagnóstico à rota.
          </h2>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#F5F5F2',
            maxWidth: '720px',
          }}>
            A Propulsão é o módulo final do INSPIRA. Não é resumo executivo. É a rota que conecta o que o cliente declarou querer com o que o diagnóstico encontrou, e especifica o que muda se a rota for executada.
          </p>
        </div>
      </section>

      {/* S4 — O OUTPUT | Sand */}
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
            O que você recebe
          </p>
          <h2 className="type-h1" style={{
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#05262e',
            marginBottom: '64px',
            maxWidth: '700px',
          }}>
            Uma rota. Não um{' '}
            <span style={{ color: '#C4421A' }}>relatório</span>.
          </h2>
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {[
              { titulo: 'O que muda para vocês', texto: 'Visão de valor antes de qualquer ação. Conecta explicitamente o que o cliente declarou querer no início com o que o diagnóstico encontrou. "Vocês entraram querendo X, o diagnóstico encontrou Y, o que muda se a rota abaixo for executada é Z." Vem primeiro. Sempre.' },
              { titulo: 'Os movimentos', texto: 'Ações sequenciadas por dependência, não por urgência percebida. Grupo A: começa agora. Grupo B: condicional a decisão ou dado pendente. Cada ação tem o que fazer, quem faz, como se sabe que está feito e prazo.' },
              { titulo: 'O que precisam para rodar', texto: 'Ferramentas externas, treinamentos e recursos com custo estimado. Não é lista de desejo. É o que de fato é necessário para executar os movimentos indicados.' },
              { titulo: 'Como a Pira Labs pode ajudar', texto: 'Produtos relevantes, sequenciados, com escopo e investimento declarados. A Pira Labs não entra como caminho automático. Se o decisor pode executar sozinho ou com quem já tem, isso é dito diretamente.' },
              { titulo: 'Próximo passo', texto: 'Uma ação. Um responsável. Um prazo. Acontece nos próximos sete dias.' },
            ].map((item) => (
              <div key={item.titulo} style={{ borderTop: '1px solid rgba(5,38,46,0.12)', paddingTop: '32px' }}>
                <h3 style={{
                  fontFamily: 'AtypDisplay, sans-serif',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  color: '#05262e',
                  marginBottom: '12px',
                }}>
                  {item.titulo}
                </h3>
                <p style={{
                  fontFamily: 'AtypText, sans-serif',
                  fontWeight: 300,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#05262e',
                }}>
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#05262e',
            maxWidth: '720px',
            marginTop: '48px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(5,38,46,0.12)',
          }}>
            O entregável final é apresentado em sessão presencial ou remota. O processo leva de 4 a 6 semanas, com síntese por camada e aprovação de quem decide em cada etapa. <strong style={{ fontWeight: 600 }}>O diagnóstico é de propriedade do cliente</strong> e pode ser usado independente de qualquer continuidade com a Pira Labs. O TRANSPIRA é natural e complementar. Nunca obrigatório.
          </p>
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

            {/* Coluna esquerda — Para quem é */}
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
                  'A empresa cresceu mais rápido do que a estrutura. O time aumentou, o faturamento subiu, mas a operação ficou dependente de pessoas-chave e de improviso constante. Qualquer crescimento adicional exige resolver o que está embaixo antes.',
                  'A receita continua, mas o resultado não acompanha. Custos invisíveis, escopo não cobrado, precificação desalinhada com custo real. A empresa trabalha mais para entregar o mesmo valor percebido.',
                  'A empresa investiu em tecnologia ou em IA e o resultado foi acelerar o ruído que já existia. O relatório “The GenAI Divide: State of AI in Business 2025”, do MIT Media Lab, iniciativa NANDA, publicado em julho de 2025, identificou que 95% dos pilotos de IA generativa estagnam na fase piloto, sem impacto mensurável no resultado financeiro. Sem método antes da ferramenta, a tecnologia tende a escalar o problema.',
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

            {/* Coluna direita — Não faz sentido se */}
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
                  'O decisor não tem autonomia real para mudar o que o diagnóstico encontrar. O INSPIRA nomeia o problema e indica a rota. Se a decisão de agir não está na mesa de quem vai receber o resultado, o diagnóstico não tem onde pousar.',
                  'A empresa está em crise aguda: sem caixa para os próximos 30 dias, ameaça jurídica imediata ou paralisia operacional. O INSPIRA não é remédio de emergência. É para quem ainda tem clientes, caixa e reputação para agir com clareza.',
                  'Quem busca validação de decisão já tomada. O INSPIRA não confirma o que o fundador já decidiu. Lê o sistema e diz o que encontrou, mesmo quando é diferente do esperado.',
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
          <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid rgba(232,224,214,0.12)' }}>
            <a
              href="/contato?origem=inspira"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#F5F5F2',
                border: '1px solid #F5F5F2',
                padding: '0.75rem 1.5rem',
                borderRadius: 0,
                textDecoration: 'none',
              }}
            >
              Conversar com a Gabriela
            </a>
          </div>
        </div>
      </section>

      {/* S6 — COMO COMEÇA | Teal */}
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
            Processo
          </p>
          <h2 className="type-h1" style={{
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '32px',
            maxWidth: '700px',
          }}>
            Três etapas antes do{' '}
            <span style={{ color: '#eb5c2e' }}>diagnóstico</span>.
          </h2>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#F5F5F2',
            maxWidth: '680px',
            marginBottom: '80px',
          }}>
            Gabriela Aguiar conduz o INSPIRA do início ao fim. Com mais de uma década em ecossistemas globais de inovação e diagnósticos reais de empresas de serviços no Brasil, é ela quem verifica as condições, propõe o escopo e integra as seis camadas em síntese. MIT Universal AI Foundational Modules (em andamento, 2026). O INSPIRA é a metodologia de diagnóstico da Pira Labs dentro do{' '}
            <a href="/creative-business-turnaround" style={{ color: '#F5F5F2', textDecoration: 'underline' }}>
              Creative Business Turnaround
            </a>.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '800px' }}>
            {[
              { num: '01', titulo: 'Conversa de calibragem', texto: 'Conversa inicial entre o decisor e a Gabriela Aguiar. Não é venda. É verificar se há condições reais para o diagnóstico funcionar: autonomia para agir com o resultado, disposição para ver o problema de novo e momento adequado na operação. Se não há condições, dizemos antes de começar.' },
              { num: '02', titulo: 'Proposta com escopo definido', texto: 'Após a conversa, proposta com escopo, prazo e investimento. Não há proposta padronizada porque o escopo depende do negócio diagnosticado. O método é fixo. O recorte é calibrado.' },
              { num: '03', titulo: 'Início do INSPIRA', texto: 'Com a proposta aceita, o INSPIRA começa. As seis camadas avançam em sequência, com síntese e aprovação do decisor em cada etapa. Nenhuma recomendação é feita antes de todas estarem integradas.' },
            ].map((etapa) => (
              <div key={etapa.num} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '32px', alignItems: 'start' }}>
                <span style={{
                  fontFamily: 'AtypDisplay, sans-serif',
                  fontWeight: 300,
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                  lineHeight: 1,
                  color: 'rgba(232,224,214,0.4)',
                }}>
                  {etapa.num}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: 'AtypDisplay, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    color: '#F5F5F2',
                    marginBottom: '12px',
                  }}>
                    {etapa.titulo}
                  </h3>
                  <p style={{
                    fontFamily: 'AtypText, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    color: '#e8e0d6',
                  }}>
                    {etapa.texto}
                  </p>
                </div>
              </div>
            ))}
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
            O que você ainda quer saber antes de{' '}
            <span style={{ color: '#C4421A' }}>conversar</span>.
          </h2>
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
            {[
              { pergunta: 'Qual a diferença entre o INSPIRA e uma consultoria estratégica?', resposta: 'Em muitos projetos de consultoria estratégica, o diagnóstico organiza uma hipótese que já chegou forte. O INSPIRA não parte de hipótese. Parte de seis leituras em sequência que convergem em síntese antes de nomear qualquer problema. A diferença prática é que o INSPIRA frequentemente encontra um problema diferente do que a empresa declarou ter. Diagnóstico que confirma o que você já sabia custa caro e entrega pouco. O INSPIRA só faz sentido para quem quer saber o que está lá, mesmo que seja diferente do esperado.' },
              { pergunta: 'Quanto tempo leva?', resposta: 'De 4 a 6 semanas a partir do início do diagnóstico. O prazo não começa na assinatura da proposta, começa quando a conversa de calibragem confirmou que há condições para o diagnóstico funcionar e a proposta foi aceita. Cada camada tem síntese própria com aprovação do decisor antes de avançar para a próxima. O prazo final depende da disponibilidade de quem decide em cada etapa.' },
              { pergunta: 'O INSPIRA inclui execução?', resposta: 'Não. O INSPIRA entrega o problema nomeado com causa específica e a rota executável. Execução é o TRANSPIRA, conduzido por Celso Gama. Muitas empresas seguem para o TRANSPIRA depois do INSPIRA, mas é decisão tomada com o diagnóstico em mãos, não compromisso antecipado. O diagnóstico é de propriedade do cliente e pode ser executado com qualquer parceiro ou com o próprio time.' },
              { pergunta: 'Vocês usam IA no INSPIRA?', resposta: 'Sim, em partes do processo de coleta e organização de informação. Não no julgamento. A leitura integrada das seis camadas, a síntese e o que entra na Propulsão são feitos por Gabriela Aguiar. A IA não substitui o julgamento humano no diagnóstico porque o que diferencia o INSPIRA não é velocidade de processamento: é a capacidade de ler o que está implícito, o que contradiz o que foi dito e o que o número esconde.' },
              { pergunta: 'Posso começar com algo menor antes do INSPIRA completo?', resposta: 'Sim. O pocket do INSPIRA (R$ 3.900) é uma versão compacta para quem precisa de uma leitura inicial antes de assumir o diagnóstico completo. Combina três formulários prévios, uma sessão de 1h30 e uma síntese com leitura integrada e próximos passos prioritários. É a porta de entrada para quem quer sentir o método antes de contratar o diagnóstico completo.' },
              { pergunta: 'Como funciona a confidencialidade?', resposta: 'Todas as informações compartilhadas no processo ficam restritas à Pira Labs e não são usadas fora do escopo do projeto contratado. Quando há conteúdo sensível ou calibragem prévia que exige confidencialidade antes mesmo da conversa de calibragem, o NDA é assinado antes da conversa começar. Se esse é o seu caso, mencione no formulário de contato.' },
            ].map((item) => (
              <details key={item.pergunta} style={{ borderBottom: '1px solid rgba(5,38,46,0.12)' }}>
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
            O INSPIRA começa quando a conversa começa.
          </h2>
          <a
            href="/contato?origem=inspira"
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
            A conversa de calibragem não é venda. É verificação.
          </p>
        </div>
      </section>
    </>
  )
}
