import type { Metadata } from 'next'
import { ORIGINS } from '@/lib/constants'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'TRANSPIRA Jurídico · Execução operacional de legal ops · Pira Labs',
  description: 'O TRANSPIRA Jurídico é a frente de execução da Pira Labs para operações jurídicas: implementa legal ops com supervisão humana obrigatória em cada entrega, sem substituir advogado habilitado. Conduzido por Celso Gama.',
  alternates: { canonical: 'https://piralabs.com.br/transpira/juridico' },
  openGraph: {
    title: 'TRANSPIRA Jurídico · Execução operacional de legal ops · Pira Labs',
    description: 'Execução operacional de legal ops para escritórios e departamentos jurídicos. Dois modelos: implementação junto ao time ou capacidade operacional assistida sob demanda.',
    url: 'https://piralabs.com.br/transpira/juridico',
    images: [{ url: '/piralabs-og-image.png', width: 1200, height: 630, alt: 'Pira Labs' }],
  },
}

export default function TranspiraJuridicoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://piralabs.com.br/transpira/juridico#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://piralabs.com.br' },
          { '@type': 'ListItem', position: 2, name: 'TRANSPIRA', item: 'https://piralabs.com.br/transpira' },
          { '@type': 'ListItem', position: 3, name: 'TRANSPIRA Jurídico', item: 'https://piralabs.com.br/transpira/juridico' },
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://piralabs.com.br/transpira/juridico#service',
        name: 'TRANSPIRA Jurídico',
        description: 'O TRANSPIRA Jurídico é a frente de execução da Pira Labs para operações jurídicas com alto volume de trabalho mecânico repetitivo. Entra no fluxo de trabalho real do escritório ou departamento, identifica onde a IA amplifica capacidade e executa essa amplificação sob supervisão humana obrigatória em cada entrega.',
        url: 'https://piralabs.com.br/transpira/juridico',
        serviceType: 'Execução operacional de legal ops',
        provider: {
          '@type': 'Organization',
          name: 'Pira Labs',
          url: 'https://piralabs.com.br',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Modelos do TRANSPIRA Jurídico',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Modelo A — Implementação junto ao time',
              description: 'Redesenho de fluxos de trabalho jurídico e implementação de IA onde ela amplifica capacidade. A equipe aprende fazendo. Duração: 12 a 20 semanas.',
            },
            {
              '@type': 'Offer',
              name: 'Modelo B — Capacidade operacional assistida sob demanda',
              description: 'Execução de trabalho operacional de legal ops sob orientação do escritório. Todo material produzido é insumo operacional para revisão e validação do advogado habilitado.',
            },
          ],
        },
        areaServed: 'BR',
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://piralabs.com.br/transpira/juridico#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Vocês prestam consultoria jurídica?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Não. A Pira Labs não presta consultoria jurídica, não emite parecer jurídico e não define estratégia de caso. Atuamos dentro da operação, não no lugar da equipe jurídica. Todo material produzido é insumo operacional para revisão e validação de advogadas e advogados regularmente inscritos na OAB do próprio escritório. Nenhum material é entregue como peça final nem enviado a destinatários externos sem essa revisão e autorização.',
            },
          },
          {
            '@type': 'Question',
            name: 'Como vocês protegem a confidencialidade?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NDA assinado antes de qualquer acesso a documentos, sistemas ou informações do escritório. A Pira Labs só utiliza ferramentas de IA no projeto após validação prévia das condições de uso, tratamento de dados e restrições de treinamento aplicáveis ao cliente. Nenhum material preparado é enviado diretamente para destinatário final sem aprovação do responsável jurídico do cliente.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qual a qualificação de quem executa o trabalho?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O TRANSPIRA Jurídico é conduzido por Celso Gama, COO e Co-founder da Pira Labs. Bacharelando em Direito (Mackenzie). MIT Applied AI Certificate Program, em andamento (2026). MBA pelo Insper. Celso conduziu o projeto que resultou em 36 horas mensais de execução sobre um fluxo que o próprio escritório estimava em 400 horas.',
            },
          },
          {
            '@type': 'Question',
            name: 'Como começa um projeto?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Com uma conversa de qualificação mútua. A Pira Labs verifica se o escritório tem as condições necessárias para o projeto. O escritório verifica se a abordagem faz sentido para a operação. Se houver alinhamento, definimos escopo e assinamos NDA antes de qualquer avanço.',
            },
          },
          {
            '@type': 'Question',
            name: 'Qual a diferença entre Modelo A e Modelo B?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O Modelo A constrói capacidade interna: redesenha os fluxos, implementa IA com supervisão e capacita o time para operar sem depender da Pira Labs ao final. O Modelo B apoia a execução operacional sob demanda: organização, sistematização, triagem, estruturação de informação e preparação de materiais preliminares para revisão da equipe jurídica. Em ambos, a responsabilidade jurídica permanece com o advogado habilitado do cliente.',
            },
          },
          {
            '@type': 'Question',
            name: 'O resultado de 400h para 36h é típico?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'É o resultado documentado de um projeto específico. Nenhum resultado futuro é garantido — cada escritório tem uma operação diferente e um ponto de partida diferente. O que é consistente: quando há volume alto de trabalho mecânico e método de implementação correto, a redução de tempo é significativa e mensurável.',
            },
          },
          {
            '@type': 'Question',
            name: 'É possível começar pelo TRANSPIRA Jurídico sem ter feito o INSPIRA Jurídico?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sim. Quem já tem clareza sobre o problema e quer ir direto para execução pode começar pelo TRANSPIRA Jurídico. Nesses casos, incluímos uma fase de leitura no início do projeto para garantir que a Pira Labs entende o contexto antes de construir qualquer coisa. Quem não tem esse diagnóstico pronto pode fazer o INSPIRA Jurídico como parte da abertura do projeto.',
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
        <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.75rem', color: '#1A5568' }}>
          <li><a href="/" style={{ color: '#1A5568', textDecoration: 'none' }}>Início</a></li>
          <li className="select-none" aria-hidden="true">·</li>
          <li><a href="/transpira" style={{ color: '#1A5568', textDecoration: 'none' }}>TRANSPIRA</a></li>
          <li className="select-none" aria-hidden="true">·</li>
          <li aria-current="page">TRANSPIRA Jurídico</li>
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
            TRANSPIRA JURÍDICO · Execução operacional de legal ops
          </p>
          <h1 className="type-display" style={{
            color: '#05262e',
            marginBottom: '32px',
            maxWidth: '800px',
            fontWeight: 700,
          }}>
            O trabalho <span style={{ color: '#C4421A' }}>mecânico</span> que consome sua equipe pode ser feito de outra forma.
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
            O TRANSPIRA Jurídico é a execução operacional de legal ops para escritórios e departamentos jurídicos com volume alto de trabalho mecânico repetitivo. Entra no fluxo de trabalho real. Opera sob supervisão humana obrigatória em cada entrega. Sem substituir advogado habilitado.
          </p>
          <div>
            <a
              href={`/contato?origem=${ORIGINS.TRANSPIRA_JURIDICO}`}
              className="btn-primary"
            >
              Conversar com a Pira Labs →
            </a>
            <p style={{
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 300,
              fontSize: '0.75rem',
              color: '#b0a596',
              marginTop: '12px',
            }}>
              Investimento sob consulta. A conversa de qualificação vem antes da proposta.
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
            O QUE O MERCADO NÃO RESOLVEU
          </p>
          <h2 className="type-h1" style={{
            color: '#F5F5F2',
            marginBottom: '48px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            IA jurídica sem método escala o ruído que já{' '}
            <span style={{ color: '#eb5c2e' }}>existia</span>.
          </h2>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Escritórios de advocacia têm uma camada de complexidade que outras empresas de serviços não têm. <strong style={{ fontWeight: 600 }}>Confidencialidade rigorosa. Responsabilidade técnica intransferível do advogado.</strong> Volume de trabalho mecânico que cresceu nos últimos anos sem que a estrutura de entrega tenha acompanhado.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              A maioria das tentativas de IA jurídica entra pelo lado errado. <strong style={{ fontWeight: 600 }}>Ferramenta primeiro, processo depois.</strong> O relatório &#8220;The GenAI Divide: State of AI in Business 2025&#8221;, do MIT Media Lab, iniciativa NANDA, publicado em julho de 2025, identificou que <strong style={{ fontWeight: 600 }}>95% dos pilotos de IA generativa estagnam na fase piloto, sem impacto mensurável no resultado financeiro.</strong> No jurídico, a causa é a mesma: sem método antes da ferramenta, o resultado é mais uma camada de retrabalho sobre um fluxo que já estava quebrado.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(245,245,242,0.12)', paddingTop: '48px', marginTop: '8px', marginBottom: '8px' }}>
            <p className="type-display" style={{ color: '#F5F5F2', fontWeight: 700, lineHeight: 1.0, marginBottom: '8px' }}>
              400h <span style={{ color: '#b0a596', fontWeight: 400 }}>→</span> 36h
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 400, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b0a596', marginBottom: '24px' }}>
              mensais · mesmo time · R$160k de capacidade adicional estimada pelo cliente
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2', marginBottom: '48px' }}>
              Com o TRANSPIRA Jurídico, um escritório de advocacia executou em 36 horas mensais o que estimava que ocupava 400 horas da equipe. Não foi substituição. Foi o julgamento do advogado operando sem o peso do trabalho mecânico.
            </p>
          </div>
          <blockquote style={{ borderLeft: '2px solid #eb5c2e', paddingLeft: '32px', marginTop: '0', maxWidth: '720px' }}>
            <p className="type-h2" style={{
              fontStyle: 'italic',
              color: '#F5F5F2',
              marginBottom: '16px',
              fontWeight: 300,
            }}>
              &#8220;O escritório que entra no TRANSPIRA Jurídico não terceiriza a responsabilidade jurídica. Libera a equipe jurídica para exercer o que só ela pode exercer.&#8221;
            </p>
            <p style={{
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#b0a596',
            }}>
              Celso Gama · COO e Co-founder da Pira Labs
            </p>
          </blockquote>
        </div>
      </section>

      {/* S3 — O QUE É | Teal */}
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
            marginBottom: '40px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            Execução operacional de legal ops. Quem conduz entende de processo jurídico, não só de{' '}
            <span style={{ color: '#eb5c2e' }}>ferramenta</span>.
          </h2>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O TRANSPIRA Jurídico é a frente de execução da Pira Labs para operações jurídicas com <strong style={{ fontWeight: 600 }}>alto volume de trabalho mecânico repetitivo.</strong> Entra no fluxo de trabalho real do escritório ou departamento, identifica onde a IA amplifica capacidade e <strong style={{ fontWeight: 600 }}>executa essa amplificação sob supervisão humana obrigatória em cada entrega.</strong>
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Não é diagnóstico. Não é relatório. <strong style={{ fontWeight: 600 }}>É o trabalho sendo feito de forma diferente,</strong> com a responsabilidade jurídica onde ela pertence: com o advogado habilitado do cliente.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(232,224,214,0.12)', paddingTop: '40px', maxWidth: '720px' }}>
            <p style={{
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#e8e0d6',
              marginBottom: '16px',
            }}>
              COMO O TRANSPIRA JURÍDICO OPERA
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O TRANSPIRA Jurídico tem dois modelos de atuação. O Modelo A constrói capacidade interna. O Modelo B apoia a execução operacional sob demanda. A escolha depende do que o escritório precisa agora.
            </p>
          </div>
        </div>
      </section>

      {/* S4 — OS DOIS MODELOS | Sand */}
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
            COMO TRABALHAMOS
          </p>
          <h2 className="type-h1" style={{
            color: '#05262e',
            marginBottom: '64px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            Dois modelos. Um critério único: a responsabilidade jurídica não sai do{' '}
            <span style={{ color: '#C4421A' }}>advogado</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* MODELO A */}
            <div style={{ backgroundColor: '#F5F5F2', padding: 'clamp(24px, 4vw, 48px)', borderTop: '1px solid rgba(5,38,46,0.12)' }}>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1A5568',
                marginBottom: '16px',
              }}>
                MODELO A
              </p>
              <h3 className="type-h3" style={{ color: '#05262e', marginBottom: '20px', fontWeight: 400 }}>
                Implementação junto ao time
              </h3>
              <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#05262e', marginBottom: '28px' }}>
                O Modelo A é a primeira configuração do TRANSPIRA Jurídico para escritórios que querem construir capacidade interna. A Pira Labs entra no escritório, redesenha os fluxos de trabalho jurídico e implementa IA onde ela amplifica capacidade sem criar risco. A equipe aprende fazendo. No final, a operação roda sem depender da Pira Labs.
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1A5568',
                marginBottom: '12px',
              }}>
                O QUE ENTRA NO MODELO A DO TRANSPIRA JURÍDICO
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Mapeamento de fluxos críticos e gargalos reais',
                  'Implementação de legal ops com supervisão humana',
                  'Estrutura de governança de uso de IA',
                  'Capacitação do time para operar o novo desenho',
                  'Gates de aprovação humana em cada etapa',
                ].map((item) => (
                  <li key={item} style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.6, color: '#05262e', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#1A5568', flexShrink: 0 }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: '1px solid rgba(5,38,46,0.15)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.8125rem', color: '#05262e' }}>
                  <strong style={{ fontWeight: 600 }}>Para quem:</strong> escritórios que querem construir capacidade interna.
                </p>
                <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.8125rem', color: '#05262e' }}>
                  <strong style={{ fontWeight: 600 }}>Duração típica:</strong> 12 a 20 semanas.
                </p>
              </div>
            </div>

            {/* MODELO B */}
            <div style={{ backgroundColor: '#F5F5F2', padding: 'clamp(24px, 4vw, 48px)', borderTop: '1px solid rgba(5,38,46,0.12)' }}>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1A5568',
                marginBottom: '16px',
              }}>
                MODELO B
              </p>
              <h3 className="type-h3" style={{ color: '#05262e', marginBottom: '20px', fontWeight: 400 }}>
                Capacidade operacional assistida sob demanda
              </h3>
              <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#05262e', marginBottom: '28px' }}>
                O Modelo B é a segunda configuração do TRANSPIRA Jurídico para escritórios com volume alto de atividade mecânica repetitiva. A Pira Labs apoia a execução operacional de legal ops sob orientação do escritório. Todo material produzido é insumo operacional para revisão e validação do advogado habilitado do próprio escritório.
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1A5568',
                marginBottom: '12px',
              }}>
                O QUE ENTRA NO MODELO B DO TRANSPIRA JURÍDICO
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Levantamento preliminar de jurisprudência para revisão, seleção e validação da equipe jurídica',
                  'Organização e decupagem documental de processos para revisão da equipe jurídica',
                  'Estruturação de modelos internos e rascunhos operacionais, sempre a partir de orientação e validação do advogado responsável',
                  'Organização e sistematização de documentação interna',
                  'Preparação de materiais preliminares para revisão e validação do advogado',
                ].map((item) => (
                  <li key={item} style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.6, color: '#05262e', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#1A5568', flexShrink: 0 }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: '1px solid rgba(5,38,46,0.15)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.8125rem', color: '#05262e' }}>
                  <strong style={{ fontWeight: 600 }}>Para quem:</strong> escritórios com volume alto de atividade mecânica repetitiva.
                </p>
                <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.8125rem', color: '#05262e' }}>
                  <strong style={{ fontWeight: 600 }}>Duração:</strong> por projeto, escopo definido antes de começar. Investimento sob consulta.
                </p>
              </div>
            </div>

          </div>
          <p style={{ marginTop: '24px', fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.75rem', color: '#b0a596' }}>
            * Mediante consulta e disponibilidade. Por sermos uma boutique, trabalhamos com agenda limitada de projetos simultâneos no Modelo B.
          </p>
        </div>
      </section>

      {/* S5 — PARA QUEM É + CTA INTERMEDIÁRIO | Ink */}
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
            PARA QUEM É O TRANSPIRA JURÍDICO
          </p>
          <h2 className="type-h1" style={{
            color: '#F5F5F2',
            marginBottom: '64px',
            maxWidth: '700px',
            fontWeight: 400,
          }}>
            Escritórios e departamentos jurídicos com volume. Decisores com autonomia real para mudar o funcionamento da{' '}
            <span style={{ color: '#eb5c2e' }}>operação</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20" style={{ maxWidth: '1000px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { texto: <>Escritórios de advocacia com <strong style={{ fontWeight: 600 }}>trabalho mecânico que consome equipe qualificada</strong> em tarefas que não exigem formação jurídica para executar.</> },
                { texto: <>Equipes jurídicas internas e departamentos jurídicos com <strong style={{ fontWeight: 600 }}>alto volume de demandas repetitivas</strong> que precisam estruturar fluxos de legal operations, padronizar documentação, instalar governança de uso de IA e garantir que todo material produzido passe por revisão supervisionada da área jurídica responsável.</> },
                { texto: <>Decisores que <strong style={{ fontWeight: 600 }}>sabem onde está o problema</strong> e têm autoridade para mudar como o trabalho é feito.</> },
                { texto: <>Quem veio do INSPIRA Jurídico com <strong style={{ fontWeight: 600 }}>diagnóstico pronto</strong> e quer partir para execução.</> },
                { texto: <>Quem não veio do INSPIRA Jurídico pode fazer o diagnóstico <strong style={{ fontWeight: 600 }}>como parte da abertura do projeto.</strong></> },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ color: '#F5F5F2', marginTop: '4px', flexShrink: 0 }}>&#8594;</span>
                  <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#F5F5F2' }}>{item.texto}</p>
                </div>
              ))}
            </div>
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
                  { texto: <>O escritório busca <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>terceirizar a responsabilidade jurídica.</strong> O TRANSPIRA Jurídico opera dentro da operação, não no lugar da equipe jurídica.</> },
                  { texto: <>Não há advogado habilitado disponível para revisar cada entrega. <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>A supervisão humana não é protocolo. É condição de funcionamento.</strong></> },
                  { texto: <>O objetivo é resultado <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>sem mudar o fluxo de trabalho que existe hoje.</strong> O TRANSPIRA Jurídico redesenha o fluxo.</> },
                  { texto: <>O escritório está em <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>colapso operacional</strong> sem estrutura mínima para absorver mudança.</> },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ color: '#e8e0d6', marginTop: '4px', flexShrink: 0 }}>·</span>
                    <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#e8e0d6' }}>{item.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid rgba(232,224,214,0.12)' }}>
            <a
              href={`/contato?origem=${ORIGINS.TRANSPIRA_JURIDICO}`}
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
              Conversa de qualificação mútua. Investimento sob consulta após alinhamento de escopo.
            </p>
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
            Celso Gama entra na operação. Sai quando o resultado acordado é{' '}
            <span style={{ color: '#eb5c2e' }}>verificado</span>.
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
            Não há equipe júnior entre o problema e a execução. Celso Gama conduz o TRANSPIRA Jurídico do início ao fim.
          </p>
          <div style={{ maxWidth: '720px' }}>
            <h3 className="type-h3" style={{ color: '#F5F5F2', marginBottom: '16px' }}>
              Celso Gama
            </h3>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#e8e0d6', marginBottom: '24px' }}>
              COO e Co-founder da Pira Labs. <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>Bacharelando em Direito (Mackenzie). MIT Applied AI Certificate Program, em andamento (2026). MBA pelo Insper.</strong> Conduziu o projeto que resultou na evidência <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>400h&#8594;36h</strong> referenciada nesta página.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#e8e0d6', marginBottom: '40px' }}>
              O diferencial não é a ferramenta. <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>É quem opera a ferramenta entendendo o que está em jogo em cada decisão jurídica.</strong>
            </p>
            <div style={{ borderLeft: '2px solid rgba(232,224,214,0.3)', paddingLeft: '24px' }}>
              <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#e8e0d6' }}>
                A Pira Labs só utiliza ferramentas de IA no projeto após validação prévia das condições de uso, tratamento de dados e restrições de treinamento aplicáveis ao cliente. O TRANSPIRA Jurídico opera com NDA ou instrumento equivalente de confidencialidade assinado antes de qualquer acesso a documentos, sistemas ou informações do escritório.
              </p>
            </div>
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
            O que escritórios perguntam antes de{' '}
            <span style={{ color: '#C4421A' }}>conversar</span>.
          </h2>
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
            {[
              {
                q: 'Vocês prestam consultoria jurídica?',
                a: <><strong style={{ fontWeight: 600 }}>Não.</strong> A Pira Labs não presta consultoria jurídica, não emite parecer jurídico e não define estratégia de caso. Atuamos dentro da operação, não no lugar da equipe jurídica. <strong style={{ fontWeight: 600 }}>Todo material produzido é insumo operacional para revisão e validação de advogadas e advogados regularmente inscritos na OAB do próprio escritório.</strong> Nenhum material é entregue como peça final nem enviado a destinatários externos sem essa revisão e autorização.</>,
              },
              {
                q: 'Como vocês protegem a confidencialidade?',
                a: <><strong style={{ fontWeight: 600 }}>NDA assinado antes de qualquer acesso</strong> a documentos, sistemas ou informações do escritório. A Pira Labs só utiliza ferramentas de IA no projeto após <strong style={{ fontWeight: 600 }}>validação prévia das condições de uso, tratamento de dados e restrições de treinamento</strong> aplicáveis ao cliente. Nenhum material preparado é enviado diretamente para destinatário final sem aprovação do responsável jurídico do cliente.</>,
              },
              {
                q: 'Qual a qualificação de quem executa o trabalho?',
                a: <>O TRANSPIRA Jurídico é conduzido por <strong style={{ fontWeight: 600 }}>Celso Gama, COO e Co-founder da Pira Labs.</strong> Bacharelando em Direito (Mackenzie). MIT Applied AI Certificate Program, em andamento (2026). MBA pelo Insper. Celso conduziu o projeto que resultou em <strong style={{ fontWeight: 600 }}>36 horas mensais de execução</strong> sobre um fluxo que o próprio escritório estimava em 400 horas.</>,
              },
              {
                q: 'Como começa um projeto?',
                a: <>Com uma conversa de qualificação mútua. A Pira Labs verifica se o escritório tem as condições necessárias para o projeto. O escritório verifica se a abordagem faz sentido para a operação. <strong style={{ fontWeight: 600 }}>Se houver alinhamento, definimos escopo e assinamos NDA antes de qualquer avanço.</strong> O investimento é definido após esse alinhamento, por consulta.</>,
              },
              {
                q: 'Qual a diferença entre Modelo A e Modelo B?',
                a: <><strong style={{ fontWeight: 600 }}>O Modelo A constrói capacidade interna:</strong> redesenha os fluxos, implementa IA com supervisão e capacita o time para operar sem depender da Pira Labs ao final. <strong style={{ fontWeight: 600 }}>O Modelo B apoia a execução operacional sob demanda:</strong> organização, sistematização, triagem, estruturação de informação e preparação de materiais preliminares para revisão da equipe jurídica. Em ambos, a responsabilidade jurídica permanece com o advogado habilitado do cliente.</>,
              },
              {
                q: 'O resultado de 400h para 36h é típico?',
                a: <>É o resultado documentado de um projeto específico. <strong style={{ fontWeight: 600 }}>Nenhum resultado futuro é garantido</strong> — cada escritório tem uma operação diferente e um ponto de partida diferente. O que é consistente: quando há volume alto de trabalho mecânico e método de implementação correto, <strong style={{ fontWeight: 600 }}>a redução de tempo é significativa e mensurável.</strong></>,
              },
              {
                q: 'É possível começar pelo TRANSPIRA Jurídico sem ter feito o INSPIRA Jurídico?',
                a: <>Sim. Quem já tem clareza sobre o problema e quer ir direto para execução pode começar pelo TRANSPIRA Jurídico. Nesses casos, <strong style={{ fontWeight: 600 }}>incluímos uma fase de leitura no início do projeto</strong> para garantir que a Pira Labs entende o contexto antes de construir qualquer coisa. Quem não tem esse diagnóstico pronto pode fazer o INSPIRA Jurídico como parte da abertura do projeto.</>,
              },
            ].map((item) => (
              <details key={item.q} className="details-clean" style={{ borderBottom: '1px solid rgba(5,38,46,0.12)' }}>
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
                  {item.q}
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
                  {item.a}
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
            O julgamento jurídico fica com você. O trabalho mecânico, não precisa.
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a
              href={`/contato?origem=${ORIGINS.TRANSPIRA_JURIDICO}`}
              className="btn-primary"
            >
              Conversar com a Pira Labs →
            </a>
            <a
              href="/inspira/juridico"
              className="btn-secondary"
            >
              Ver o INSPIRA Jurídico
            </a>
          </div>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 400,
            fontSize: '0.75rem',
            color: '#b0a596',
            marginBottom: '32px',
          }}>
            Conversa inicial sem compromisso.
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
            A Pira Labs não presta consultoria jurídica, não emite parecer jurídico e não define estratégia de caso. O TRANSPIRA Jurídico é uma operação de legal operations e apoio técnico-operacional, executada com supervisão obrigatória da equipe jurídica do contratante ou de profissional externo indicado pelo cliente, regularmente inscrito na OAB. Todo material produzido é insumo operacional para revisão, validação e aprovação pela equipe jurídica do cliente. Nenhum material deve ser tratado como peça final, orientação jurídica, parecer jurídico ou estratégia de caso, nem enviado a destinatários externos sem a revisão e autorização do responsável jurídico do contratante.
          </p>
        </div>
      </section>
    </>
  )
}
