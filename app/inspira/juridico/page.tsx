import type { Metadata } from 'next'
import { ORIGINS } from '@/lib/constants'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'INSPIRA Jurídico — Diagnóstico de IA para escritórios | Pira Labs',
  description: 'O INSPIRA Jurídico é o diagnóstico da Pira Labs para escritórios e departamentos jurídicos: mapeia como o time usa IA hoje, onde pode estar exposto e entrega política mínima e plano de ação em 2 a 3 semanas. Conduzido por Gabriela Aguiar e Celso Gama.',
  alternates: {
    canonical: 'https://piralabs.com.br/inspira/juridico',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'INSPIRA Jurídico — Diagnóstico de IA para escritórios | Pira Labs',
    description: 'O INSPIRA Jurídico é o diagnóstico da Pira Labs para escritórios e departamentos jurídicos: mapeia como o time usa IA hoje, onde pode estar exposto e entrega política mínima e plano de ação em 2 a 3 semanas.',
    url: 'https://piralabs.com.br/inspira/juridico',
    images: [{ url: 'https://piralabs.com.br/piralabs-og-image.png', width: 1200, height: 630, alt: 'Pira Labs' }],
  },
}

export default function InspiraJuridicoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://piralabs.com.br/inspira/juridico',
        url: 'https://piralabs.com.br/inspira/juridico',
        name: 'INSPIRA Jurídico — Diagnóstico de IA para escritórios',
        description: 'O INSPIRA Jurídico é o diagnóstico da Pira Labs para escritórios e departamentos jurídicos: mapeia como o time usa IA hoje, onde pode estar exposto e entrega política mínima e plano de ação em 2 a 3 semanas.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': 'https://piralabs.com.br' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://piralabs.com.br' },
          { '@type': 'ListItem', position: 2, name: 'INSPIRA', item: 'https://piralabs.com.br/inspira' },
          { '@type': 'ListItem', position: 3, name: 'INSPIRA Jurídico', item: 'https://piralabs.com.br/inspira/juridico' },
        ],
      },
      {
        '@type': 'Service',
        name: 'INSPIRA Jurídico',
        description: 'Diagnóstico operacional de como o escritório ou departamento jurídico usa IA, onde pode estar exposto e o que fazer primeiro. Entrega mapeamento de uso atual, matriz de risco, política mínima de uso de IA e plano de ação priorizado em 2 a 3 semanas.',
        provider: {
          '@type': 'Organization',
          name: 'Pira Labs',
          url: 'https://piralabs.com.br',
        },
        areaServed: 'BR',
        serviceType: 'Diagnóstico jurídico operacional de IA',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Isso é consultoria jurídica?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Não. O INSPIRA Jurídico é diagnóstico operacional de como o escritório usa IA e onde pode estar exposto. Não emite parecer. Não define estratégia de caso. Não substitui advogada ou advogado habilitados. A Pira Labs não presta consultoria jurídica. O que o INSPIRA Jurídico entrega é mapeamento, classificação de exposição por tipo de uso, minuta operacional de política mínima e plano de ação — tudo para ser validado e implementado com o suporte jurídico interno ou externo do escritório.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quanto tempo leva?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De 2 a 3 semanas a partir do início do diagnóstico. O prazo começa após a conversa de calibragem e assinatura do NDA. Cada etapa tem aprovação dos decisores antes de avançar. O prazo final depende da disponibilidade de quem decide e da profundidade necessária para o perfil do escritório.',
            },
          },
          {
            '@type': 'Question',
            name: 'Como é a precificação?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sob consulta após a conversa inicial. O investimento depende do tamanho do escritório, do número de áreas e da profundidade necessária. Não há valor fixo nem tabela pública. A conversa de calibragem define o escopo antes de qualquer proposta.',
            },
          },
          {
            '@type': 'Question',
            name: 'Como vocês tratam os dados do escritório durante o diagnóstico?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O NDA é assinado antes de qualquer acesso a documentos, sistemas ou informações do escritório. Durante o diagnóstico, a Pira Labs acessa apenas o que é necessário para cada etapa específica, com aprovação dos decisores antes de avançar. Nenhum dado identificável do escritório ou de seus clientes entra na base setorial da Pira Labs. O que alimenta essa base são padrões anonimizados e aprendizados não confidenciais — nunca dados, documentos ou informações que possam ser atribuídas ao cliente.',
            },
          },
          {
            '@type': 'Question',
            name: 'O que acontece depois?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O cliente recebe o diagnóstico completo com os cinco entregáveis. O que o escritório faz com ele é decisão própria. O diagnóstico é de propriedade do cliente e pode ser executado internamente ou com qualquer parceiro. Para quem quer ir além do diagnóstico e implementar o que foi mapeado, existe o TRANSPIRA Jurídico. Mas não é compromisso antecipado.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vocês assinam NDA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sempre. O NDA é assinado antes de qualquer conversa com a equipe e antes de qualquer acesso a documentos, sistemas ou informações do escritório. Confidencialidade não é protocolo. É condição de trabalho. Se o seu contexto exige cláusulas específicas além do NDA padrão, mencione na conversa de calibragem.',
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
      <nav aria-label="Breadcrumb" style={{ backgroundColor: '#e8e0d6' }}>
        <div className="container-site" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
        <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.75rem', color: '#05262e' }}>
          <li><a href="/" style={{ color: '#05262e', textDecoration: 'none' }}>Home</a></li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li><a href="/inspira" style={{ color: '#05262e', textDecoration: 'none' }}>INSPIRA</a></li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li style={{ opacity: 0.6 }}>Jurídico</li>
        </ol>
        </div>
      </nav>

      {/* S1 — HERO | Sand */}
      <section className="section-pt section-pb" style={{ backgroundColor: '#e8e0d6' }}>
        <div className="container-site">
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1A5568',
            marginBottom: '24px',
          }}>
            INSPIRA Jurídico · Diagnóstico de IA para escritórios e departamentos jurídicos
          </p>
          <h1 className="type-display" style={{
            color: '#05262e',
            marginBottom: '32px',
            maxWidth: '800px',
            fontWeight: 700,
          }}>
            O que o seu escritório ainda não{' '}
            <span style={{ color: '#C4421A' }}>vê</span> sobre si mesmo.
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
            O INSPIRA Jurídico mapeia como o escritório ou departamento jurídico usa IA hoje, onde pode estar exposto e o que fazer primeiro. Conduzido por Gabriela Aguiar e Celso Gama em 2 a 3 semanas. O NDA é assinado antes de qualquer conversa com a equipe, acesso a documentos, sistemas ou informações sensíveis.
          </p>
          <div>
            <a
              href={`/contato?origem=${ORIGINS.INSPIRA_JURIDICO}`}
              className="btn-primary"
            >
              Conversar com a Pira Labs →
            </a>
            <p style={{
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 400,
              fontSize: '0.75rem',
              color: '#b0a596',
              marginTop: '12px',
            }}>
              Investimento sob consulta. A conversa de calibragem vem antes da proposta.
            </p>
          </div>
        </div>
      </section>

      {/* S2 — O PROBLEMA | Ink */}
      <section className="section-pt section-pb" style={{ backgroundColor: '#05262e' }}>
        <div className="container-site">
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            O que está em jogo
          </p>
          <h2 className="type-h1" style={{
            color: '#F5F5F2',
            marginBottom: '48px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            IA já está na rotina. O <span style={{ color: '#eb5c2e' }}>mapeamento</span> ainda não.
          </h2>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              A maioria dos sócios e heads jurídicos já percebeu que IA está na rotina do escritório. Mas quando perguntam com detalhe, a resposta costuma ser vaga: &#8220;a gente usa para pesquisa&#8221;, &#8220;para rascunho de emails&#8221;, &#8220;para resumir documentos&#8221;. O que raramente está mapeado é <strong style={{ fontWeight: 600 }}>quais ferramentas, em quais planos, com quais dados, com qual critério de revisão, com qual controle de acesso e se há validação jurídica, critério de governança e registro do uso.</strong>
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Dependendo da ferramenta, do plano contratado e das configurações, dado de cliente inserido em ferramenta de IA pode ser usado para treinamento, retenção ou melhoria do serviço. Peça com informação estratégica colada em ferramenta pública pode vazar contexto confidencial. <strong style={{ fontWeight: 600 }}>Decisão jurídica tomada com base em output de IA sem revisão técnica pode ser contestada.</strong> O improviso tem custo. E o custo raramente aparece antes de ser tarde.
            </p>
            <div style={{ borderTop: '1px solid rgba(245,245,242,0.12)', paddingTop: '48px', marginTop: '8px', marginBottom: '8px' }}>
              <p className="type-display" style={{ color: '#F5F5F2', fontWeight: 700, lineHeight: 1.0, marginBottom: '8px' }}>
                400h <span style={{ color: '#b0a596', fontWeight: 400 }}>→</span> 36h
              </p>
              <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 400, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b0a596', marginBottom: '24px' }}>
                mensais · mesmo time · R$160k de capacidade adicional estimada pelo cliente
              </p>
              <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
                Em um escritório de advocacia, a Pira Labs identificou que o trabalho estimado internamente em 400 horas mensais de equipe estava sendo executado com gargalo de método, não de capacidade. Com processo redesenhado, o mesmo trabalho passou a rodar em 36 horas mensais. O diagnóstico foi o que tornou essa leitura possível.
              </p>
            </div>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O INSPIRA Jurídico mapeia isso. Com precisão, sem julgamento e com plano de ação concreto ao final.
            </p>
          </div>
        </div>
      </section>

      {/* S3 — O QUE É O INSPIRA JURÍDICO | Teal */}
      <section className="section-pt section-pb" style={{ backgroundColor: '#004757' }}>
        <div className="container-site">
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            O método
          </p>
          <h2 className="type-h1" style={{
            color: '#F5F5F2',
            marginBottom: '48px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            Seis camadas. Lente <span style={{ color: '#eb5c2e' }}>jurídica</span>.
          </h2>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O INSPIRA Jurídico é o diagnóstico da Pira Labs aplicado com lente jurídica: mapeia como o escritório ou departamento jurídico usa IA hoje, onde pode estar exposto e entrega cinco entregáveis concretos em 2 a 3 semanas. Não é consultoria jurídica. Não é adequação legal completa. É diagnóstico operacional de como o time lida com IA e o que precisa mudar para operar com menos exposição e mais produtividade.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O método são as seis camadas do{' '}
              <a href="/inspira" style={{ color: '#F5F5F2', textDecoration: 'underline' }}>INSPIRA</a>{' '}
              com foco nas dimensões específicas do contexto jurídico: confidencialidade e sigilo profissional, dimensões operacionais associadas à Lei Geral de Proteção de Dados no tratamento de dados de clientes sempre sujeitas à validação jurídica do cliente, responsabilidade técnica da advogada ou do advogado, governança de uso de IA na operação do escritório e exposição operacional por tipo de ferramenta e plano contratado.
            </p>
            <div style={{ borderLeft: '2px solid rgba(232,224,214,0.12)', paddingLeft: '24px', marginTop: '8px' }}>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                marginBottom: '12px',
              }}>
                Base setorial própria
              </p>
              <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#e8e0d6' }}>
                A Pira Labs constrói uma base setorial própria a partir de padrões anonimizados e aprendizados não confidenciais observados desde 2026. Nenhum dado, documento ou informação identificável de cliente entra nessa base. Isso significa que cada novo INSPIRA Jurídico chega ao cliente mais calibrado que o anterior, com referências reais do mercado jurídico brasileiro acumuladas ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S4 — O QUE VOCÊ RECEBE | Sand */}
      <section className="section-pt section-pb" style={{ backgroundColor: '#e8e0d6' }}>
        <div className="container-site">
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1A5568',
            marginBottom: '24px',
          }}>
            Os entregáveis
          </p>
          <h2 className="type-h1" style={{
            color: '#05262e',
            marginBottom: '64px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            Cinco entregáveis. Diagnóstico que <span style={{ color: '#C4421A' }}>orienta</span>.
          </h2>
          <div style={{ maxWidth: '960px' }}>
            {[
              {
                num: '01',
                titulo: 'Mapeamento de uso atual',
                texto: 'Mapeamento de uso atual é o primeiro entregável do INSPIRA Jurídico. Levantamento de como a equipe usa IA hoje: quais ferramentas, em quais planos, com quais tipos de dado, com qual frequência. Feito via entrevistas estruturadas e análise documental. Sem suposição, sem generalização.',
              },
              {
                num: '02',
                titulo: 'Matriz de risco por tipo de uso',
                texto: 'Matriz de risco por tipo de uso é o segundo entregável do INSPIRA Jurídico. Classificação dos usos identificados em três zonas: uso liberado pela política interna, uso condicionado a controles específicos (anonimização, revisão humana, ferramentas adequadas ao contexto), e uso não mapeado ou exposto sem política específica. O escritório sai sabendo onde pode estar exposto e por quê.',
              },
              {
                num: '03',
                titulo: 'Minuta operacional de política mínima de uso de IA',
                texto: 'Minuta operacional de política mínima de uso de IA é o terceiro entregável do INSPIRA Jurídico. Rascunho prático para validação do jurídico responsável, DPO ou assessoria jurídica do cliente: critérios para o que pode ser autorizado, o que exige protocolo específico, como anonimizar documentos antes de inserir em ferramenta externa, quais critérios considerar para avaliar ferramentas e planos quando houver dados de cliente e quem aprova exceções. Calibrada para o perfil do escritório, não genérica.',
              },
              {
                num: '04',
                titulo: 'Plano de ação priorizado',
                texto: 'Plano de ação priorizado é o quarto entregável do INSPIRA Jurídico. Lista de 5 a 10 ações ordenadas por urgência e esforço: onde o escritório pode ter exposição imediata, onde há oportunidade de ganho rápido com IA bem aplicada e o que pode esperar o próximo ciclo.',
              },
              {
                num: '05',
                titulo: 'Sessão de leitura conjunta',
                texto: 'Sessão de leitura conjunta é o quinto entregável do INSPIRA Jurídico. Encontro de 45 a 60 minutos com os decisores para apresentar o diagnóstico, discutir a minuta de política mínima e definir o próximo passo. O diagnóstico é de propriedade do cliente e pode ser usado com qualquer parceiro ou internamente.',
              },
            ].map((item) => (
              <div
                key={item.titulo}
                style={{ borderTop: '1px solid rgba(5,38,46,0.12)', paddingTop: '40px', paddingBottom: '40px' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                  <div>
                    <p style={{
                      fontFamily: 'AtypText, sans-serif',
                      fontWeight: 400,
                      fontSize: '0.75rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#b0a596',
                      marginBottom: '16px',
                    }}>
                      {item.num}
                    </p>
                    <h3 className="type-h1" style={{ color: '#05262e', fontWeight: 400 }}>
                      {item.titulo}
                    </h3>
                  </div>
                  <p style={{
                    fontFamily: 'AtypText, sans-serif',
                    fontWeight: 300,
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#05262e',
                    paddingTop: '0',
                  }}>
                    {item.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5 — PARA QUEM É | Ink */}
      <section className="section-pt section-pb" style={{ backgroundColor: '#05262e' }}>
        <div className="container-site">
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            Qualificação
          </p>
          <h2 className="type-h1" style={{
            color: '#F5F5F2',
            marginBottom: '64px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            Para quem faz sentido e para quem <span style={{ color: '#eb5c2e' }}>não faz</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20" style={{ maxWidth: '1000px' }}>

            {/* Coluna esquerda */}
            <div>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                marginBottom: '32px',
              }}>
                Para quem é
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  'Sócias e sócios e heads jurídicos que sabem que a equipe usa IA mas não têm clareza de onde podem estar expostos. O uso já acontece. O mapeamento ainda não.',
                  'Escritórios em crescimento que estão contratando novas advogadas e novos advogados e estagiárias e estagiários e querem estabelecer critérios claros antes de escalar o problema.',
                  'Departamentos jurídicos de empresas com múltiplas áreas usando IA de forma descentralizada, sem política comum e sem critério de revisão.',
                  'Escritórios que passaram pela Faísca Jurídica e querem ir além da educação para o diagnóstico estruturado da operação.',
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
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                marginBottom: '32px',
              }}>
                Não faz sentido se
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  'Quem busca laudo de conformidade com a Lei Geral de Proteção de Dados ou certificação de compliance. O INSPIRA Jurídico entrega governança operacional. Adequação legal completa é trabalho de advogada ou advogado especializado em proteção de dados.',
                  'Quem quer consultoria jurídica, emissão de parecer ou definição de estratégia de caso. O INSPIRA Jurídico não emite parecer e não substitui profissional habilitado.',
                  'Quem não tem autonomia para mudar como o time usa IA após o diagnóstico. O resultado aponta o que precisa mudar. Se a decisão de agir não está na mesa de quem vai receber o diagnóstico, ele não tem onde pousar.',
                ].map((texto, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ color: '#e8e0d6', marginTop: '4px', flexShrink: 0 }}>·</span>
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
              href={`/contato?origem=${ORIGINS.INSPIRA_JURIDICO}`}
              className="btn-primary"
            >
              Faz sentido conversar →
            </a>
          </div>
        </div>
      </section>

      {/* S6 — QUEM CONDUZ | Teal */}
      <section className="section-pt section-pb" style={{ backgroundColor: '#004757' }}>
        <div className="container-site">
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            Execução direta
          </p>
          <h2 className="type-h1" style={{
            color: '#F5F5F2',
            marginBottom: '48px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            Quem lê é quem <span style={{ color: '#eb5c2e' }}>entrega</span>.
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
            Não há equipe júnior entre o dado e a interpretação. Gabriela Aguiar e Celso Gama conduzem o INSPIRA Jurídico do início ao fim.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16" style={{ maxWidth: '1000px' }}>
            <div>
              <h3 className="type-h3" style={{ color: '#F5F5F2', marginBottom: '16px' }}>
                Gabriela Aguiar
              </h3>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: '#e8e0d6',
              }}>
                CEO e Co-founder da Pira Labs. Com mais de uma década em ecossistemas globais de inovação e diagnósticos reais de empresas de serviços no Brasil. Responsável pela leitura institucional: como o escritório está posicionado, que sinais projeta para o mercado e o que os motores de inteligência artificial refletem sobre sua presença e reputação.
              </p>
            </div>
            <div>
              <h3 className="type-h3" style={{ color: '#F5F5F2', marginBottom: '16px' }}>
                Celso Gama
              </h3>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: '#e8e0d6',
              }}>
                COO e Co-founder da Pira Labs. Bacharelando em Direito (Mackenzie). Applied AI Certificate Program (MIT, em andamento, 2026). MBA pelo Insper. Responsável pela leitura de governança e exposição operacional: quais ferramentas o time usa, em quais condições, com quais dados e onde o uso atual pode criar exposição operacional, reputacional ou pontos de atenção a serem validados pelo responsável jurídico do cliente.
              </p>
            </div>
          </div>
          <div style={{ marginTop: '48px' }}>
            <a
              href="/sobre"
              style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#b0a596',
                textDecoration: 'none',
              }}
            >
              Saiba mais sobre os fundadores →
            </a>
          </div>
        </div>
      </section>

      {/* S7 — FAQ | Sand */}
      <section className="section-pt section-pb" style={{ backgroundColor: '#e8e0d6' }}>
        <div className="container-site">
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1A5568',
            marginBottom: '24px',
          }}>
            Perguntas frequentes
          </p>
          <h2 className="type-h1" style={{
            color: '#05262e',
            marginBottom: '64px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            O que você ainda quer saber antes de <span style={{ color: '#C4421A' }}>conversar</span>.
          </h2>
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
            {[
              {
                pergunta: 'Isso é consultoria jurídica?',
                resposta: 'Não. O INSPIRA Jurídico é diagnóstico operacional de como o escritório usa IA e onde pode estar exposto. Não emite parecer. Não define estratégia de caso. Não substitui advogada ou advogado habilitados. A Pira Labs não presta consultoria jurídica. O que o INSPIRA Jurídico entrega é mapeamento, classificação de exposição por tipo de uso, minuta operacional de política mínima e plano de ação — tudo para ser validado e implementado com o suporte jurídico interno ou externo do escritório.',
              },
              {
                pergunta: 'Quanto tempo leva?',
                resposta: 'De 2 a 3 semanas a partir do início do diagnóstico. O prazo começa após a conversa de calibragem e assinatura do NDA. Cada etapa tem aprovação dos decisores antes de avançar. O prazo final depende da disponibilidade de quem decide e da profundidade necessária para o perfil do escritório.',
              },
              {
                pergunta: 'Como é a precificação?',
                resposta: 'Sob consulta após a conversa inicial. O investimento depende do tamanho do escritório, do número de áreas e da profundidade necessária. Não há valor fixo nem tabela pública. A conversa de calibragem define o escopo antes de qualquer proposta.',
              },
              {
                pergunta: 'Como vocês tratam os dados do escritório durante o diagnóstico?',
                resposta: 'O NDA é assinado antes de qualquer acesso a documentos, sistemas ou informações do escritório. Durante o diagnóstico, a Pira Labs acessa apenas o que é necessário para cada etapa específica, com aprovação dos decisores antes de avançar. Nenhum dado identificável do escritório ou de seus clientes entra na base setorial da Pira Labs. O que alimenta essa base são padrões anonimizados e aprendizados não confidenciais — nunca dados, documentos ou informações que possam ser atribuídas ao cliente.',
              },
              {
                pergunta: 'O que acontece depois?',
                resposta: 'O cliente recebe o diagnóstico completo com os cinco entregáveis. O que o escritório faz com ele é decisão própria. O diagnóstico é de propriedade do cliente e pode ser executado internamente ou com qualquer parceiro. Para quem quer ir além do diagnóstico e implementar o que foi mapeado, existe o TRANSPIRA Jurídico. Mas não é compromisso antecipado.',
              },
              {
                pergunta: 'Vocês assinam NDA?',
                resposta: 'Sempre. O NDA é assinado antes de qualquer conversa com a equipe e antes de qualquer acesso a documentos, sistemas ou informações do escritório. Confidencialidade não é protocolo. É condição de trabalho. Se o seu contexto exige cláusulas específicas além do NDA padrão, mencione na conversa de calibragem.',
              },
            ].map((item) => (
              <details key={item.pergunta} className="details-clean" style={{ borderBottom: '1px solid rgba(5,38,46,0.12)' }}>
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
      <section className="section-pt section-pb" style={{ backgroundColor: '#05262e', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="type-h2" style={{
            color: '#F5F5F2',
            marginBottom: '40px',
            fontWeight: 400,
          }}>
            O diagnóstico nomeia. O que fazer pertence a você.
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a
              href={`/contato?origem=${ORIGINS.INSPIRA_JURIDICO}`}
              className="btn-primary"
            >
              Conversar com a Pira Labs →
            </a>
            <a
              href="/transpira/juridico"
              className="btn-secondary"
            >
              Ver o TRANSPIRA Jurídico
            </a>
          </div>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 400,
            fontSize: '0.75rem',
            color: '#b0a596',
            marginBottom: '32px',
          }}>
            Conversa inicial sem compromisso. Respondemos em até 2 dias úteis.
          </p>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '0.8125rem',
            lineHeight: 1.6,
            color: '#b0a596',
            maxWidth: '640px',
            margin: '0 auto',
          }}>
            A Pira Labs não presta consultoria jurídica, não emite parecer e não substitui advogada ou advogado habilitados. NDA assinado antes de qualquer acesso a documentos, sistemas ou informações do escritório.
          </p>
        </div>
      </section>
    </>
  )
}
