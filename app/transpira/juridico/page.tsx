import type { Metadata } from 'next'

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
              text: 'Não. A Pira Labs não presta consultoria jurídica, não emite parecer e não substitui advogada ou advogado habilitados. Atuamos dentro da operação, não no lugar da equipe jurídica. Todo material produzido é insumo operacional para revisão e validação do advogado habilitado do próprio escritório.',
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
      <nav aria-label="Breadcrumb" style={{ backgroundColor: '#e8e0d6', padding: '12px 80px' }}>
        <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: '0 auto', padding: 0, fontSize: '0.75rem', color: '#05262e', maxWidth: '1280px' }}>
          <li><a href="/" style={{ color: '#05262e', textDecoration: 'none' }}>Início</a></li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li><a href="/transpira" style={{ color: '#05262e', textDecoration: 'none' }}>TRANSPIRA</a></li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li style={{ opacity: 0.6 }}>TRANSPIRA Jurídico</li>
        </ol>
      </nav>

      {/* S1 — HERO | Sand */}
      <section style={{ backgroundColor: '#e8e0d6', padding: '120px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1A5568',
            marginBottom: '24px',
          }}>
            TRANSPIRA JURÍDICO
          </p>
          <h1 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: 1.1,
            color: '#05262e',
            marginBottom: '32px',
          }}>
            O trabalho jurídico que consome sua equipe hoje pode ser feito de outra{' '}
            <span style={{ color: '#eb5c2e' }}>forma</span>.
          </h1>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#05262e',
            marginBottom: '40px',
            maxWidth: '640px',
          }}>
            O TRANSPIRA Jurídico é a execução operacional de legal ops para escritórios e departamentos jurídicos com volume alto de trabalho mecânico repetitivo. Entra no fluxo de trabalho real. Opera sob supervisão humana obrigatória em cada entrega. Sem substituir advogado habilitado.
          </p>
          <a
            href="/contato?origem=transpira-juridico"
            style={{
              display: 'inline-block',
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 600,
              fontSize: '0.8125rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#F5F5F2',
              backgroundColor: '#05262e',
              padding: '14px 32px',
              textDecoration: 'none',
            }}
          >
            CONVERSAR COM A PIRA LABS
          </a>
        </div>
      </section>

      {/* S2 — O PROBLEMA | Ink */}
      <section style={{ backgroundColor: '#05262e', padding: '120px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            O QUE O MERCADO NÃO RESOLVEU
          </p>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '48px',
          }}>
            IA jurídica sem método escala o ruído que já{' '}
            <span style={{ color: '#eb5c2e' }}>existia</span>.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Escritórios de advocacia têm uma camada de complexidade que outras empresas de serviços não têm. <strong style={{ fontWeight: 600 }}>Confidencialidade rigorosa. Responsabilidade técnica intransferível do advogado.</strong> Volume de trabalho mecânico que cresceu nos últimos anos sem que a estrutura de entrega tenha acompanhado.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              A maioria das tentativas de IA jurídica entra pelo lado errado. <strong style={{ fontWeight: 600 }}>Ferramenta primeiro, processo depois.</strong> Um relatório do MIT Project NANDA divulgado em 2025 apontou que <strong style={{ fontWeight: 600 }}>95% das organizações analisadas não obtiveram retorno financeiro mensurável com IA generativa.</strong> No jurídico, a causa é a mesma: sem método antes da ferramenta, o resultado é mais uma camada de retrabalho sobre um fluxo que já estava quebrado.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Com o TRANSPIRA Jurídico, um escritório de advocacia executou em <strong style={{ fontWeight: 600 }}>36 horas mensais</strong> o que estimava que ocupava <strong style={{ fontWeight: 600 }}>400 horas da equipe.</strong> O tempo liberado resultou em <strong style={{ fontWeight: 600 }}>R$160 mil de capacidade adicional de faturamento por mês,</strong> com a mesma equipe. Não foi substituição. Foi o julgamento do advogado operando sem o peso do trabalho mecânico.
            </p>
          </div>
          <blockquote style={{ borderLeft: '2px solid #eb5c2e', paddingLeft: '24px', marginTop: '16px' }}>
            <p style={{
              fontFamily: 'AtypDisplay, sans-serif',
              fontWeight: 300,
              fontSize: '1.25rem',
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: '#F5F5F2',
              marginBottom: '12px',
            }}>
              &#8220;O escritório que entra no TRANSPIRA Jurídico não terceiriza a responsabilidade jurídica. Libera a equipe jurídica para exercer o que só ela pode exercer.&#8221;
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
      </section>

      {/* S3 — O QUE É | Teal */}
      <section style={{ backgroundColor: '#004757', padding: '120px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            TRANSPIRA JURÍDICO
          </p>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '40px',
          }}>
            Execução operacional de legal ops. Quem conduz entende de processo jurídico, não só de{' '}
            <span style={{ color: '#eb5c2e' }}>ferramenta</span>.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              O TRANSPIRA Jurídico é a frente de execução da Pira Labs para operações jurídicas com <strong style={{ fontWeight: 600 }}>alto volume de trabalho mecânico repetitivo.</strong> Entra no fluxo de trabalho real do escritório ou departamento, identifica onde a IA amplifica capacidade e <strong style={{ fontWeight: 600 }}>executa essa amplificação sob supervisão humana obrigatória em cada entrega.</strong>
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Não é diagnóstico. Não é relatório. <strong style={{ fontWeight: 600 }}>É o trabalho sendo feito de forma diferente,</strong> com a responsabilidade jurídica onde ela pertence: com o advogado habilitado do cliente.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(232,224,214,0.2)', paddingTop: '40px' }}>
            <p style={{
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 600,
              fontSize: '0.625rem',
              letterSpacing: '0.12em',
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
            COMO TRABALHAMOS
          </p>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.15,
            color: '#05262e',
            marginBottom: '64px',
          }}>
            Dois modelos. Um critério único: a responsabilidade jurídica não sai do{' '}
            <span style={{ color: '#C4421A' }}>advogado</span>.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '32px' }}>

            {/* MODELO A */}
            <div style={{ backgroundColor: '#F5F5F2', padding: '48px', borderTop: '3px solid #1A5568' }}>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1A5568',
                marginBottom: '16px',
              }}>
                MODELO A
              </p>
              <h3 style={{
                fontFamily: 'AtypDisplay, sans-serif',
                fontWeight: 400,
                fontSize: '1.375rem',
                lineHeight: 1.2,
                color: '#05262e',
                marginBottom: '20px',
              }}>
                Implementação junto ao time
              </h3>
              <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#05262e', marginBottom: '28px' }}>
                O Modelo A é a primeira configuração do TRANSPIRA Jurídico para escritórios que querem construir capacidade interna. A Pira Labs entra no escritório, redesenha os fluxos de trabalho jurídico e implementa IA onde ela amplifica capacidade sem criar risco. A equipe aprende fazendo. No final, a operação roda sem depender da Pira Labs.
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.625rem',
                letterSpacing: '0.10em',
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
                    <span style={{ color: '#1A5568', flexShrink: 0 }}>&#8212;</span>
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
            <div style={{ backgroundColor: '#F5F5F2', padding: '48px', borderTop: '3px solid #1A5568' }}>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1A5568',
                marginBottom: '16px',
              }}>
                MODELO B
              </p>
              <h3 style={{
                fontFamily: 'AtypDisplay, sans-serif',
                fontWeight: 400,
                fontSize: '1.375rem',
                lineHeight: 1.2,
                color: '#05262e',
                marginBottom: '20px',
              }}>
                Capacidade operacional assistida sob demanda
              </h3>
              <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#05262e', marginBottom: '28px' }}>
                O Modelo B é a segunda configuração do TRANSPIRA Jurídico para escritórios com volume alto de atividade mecânica repetitiva. A Pira Labs apoia a execução operacional de legal ops sob orientação do escritório. Todo material produzido é insumo operacional para revisão e validação do advogado habilitado do próprio escritório.
              </p>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.625rem',
                letterSpacing: '0.10em',
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
                    <span style={{ color: '#1A5568', flexShrink: 0 }}>&#8212;</span>
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
          <p style={{ marginTop: '24px', fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.75rem', color: '#05262e', opacity: 0.5 }}>
            * Mediante consulta e disponibilidade. Por sermos uma boutique, trabalhamos com agenda limitada de projetos simultâneos no Modelo B.
          </p>
        </div>
      </section>

      {/* S5 — PARA QUEM É + CTA INTERMEDIÁRIO | Ink */}
      <section style={{ backgroundColor: '#05262e', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            PARA QUEM É O TRANSPIRA JURÍDICO
          </p>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '56px',
          }}>
            Escritórios e departamentos jurídicos com volume. Decisores com autonomia real para mudar o funcionamento da{' '}
            <span style={{ color: '#eb5c2e' }}>operação</span>.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '64px', marginBottom: '64px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ color: '#F5F5F2', fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>&#8594;</span>
                <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.6, color: '#F5F5F2' }}>Escritórios de advocacia com <strong style={{ fontWeight: 600 }}>trabalho mecânico que consome equipe qualificada</strong> em tarefas que não exigem formação jurídica para executar.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ color: '#F5F5F2', fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>&#8594;</span>
                <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.6, color: '#F5F5F2' }}>Departamentos jurídicos em empresas B2B com <strong style={{ fontWeight: 600 }}>produção repetitiva de alto volume</strong> e pressão para reduzir custo sem reduzir qualidade.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ color: '#F5F5F2', fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>&#8594;</span>
                <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.6, color: '#F5F5F2' }}>Decisores que <strong style={{ fontWeight: 600 }}>sabem onde está o problema</strong> e têm autoridade para mudar como o trabalho é feito.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ color: '#F5F5F2', fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>&#8594;</span>
                <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.6, color: '#F5F5F2' }}>Quem veio do INSPIRA Jurídico com <strong style={{ fontWeight: 600 }}>diagnóstico pronto</strong> e quer partir para execução.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ color: '#F5F5F2', fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>&#8594;</span>
                <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.6, color: '#F5F5F2' }}>Quem não veio do INSPIRA Jurídico pode fazer o diagnóstico <strong style={{ fontWeight: 600 }}>como parte da abertura do projeto.</strong></p>
              </div>
            </div>
            <div>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                opacity: 0.6,
                marginBottom: '20px',
              }}>
                NÃO FAZ SENTIDO SE
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#e8e0d6', fontSize: '0.875rem', flexShrink: 0, marginTop: '3px' }}>&#8212;</span>
                  <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.6, color: '#e8e0d6' }}>O escritório busca <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>terceirizar a responsabilidade jurídica.</strong> O TRANSPIRA Jurídico opera dentro da operação, não no lugar da equipe jurídica.</p>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#e8e0d6', fontSize: '0.875rem', flexShrink: 0, marginTop: '3px' }}>&#8212;</span>
                  <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.6, color: '#e8e0d6' }}>Não há advogado habilitado disponível para revisar cada entrega. <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>A supervisão humana não é protocolo. É condição de funcionamento.</strong></p>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#e8e0d6', fontSize: '0.875rem', flexShrink: 0, marginTop: '3px' }}>&#8212;</span>
                  <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.6, color: '#e8e0d6' }}>O objetivo é resultado <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>sem mudar o fluxo de trabalho que existe hoje.</strong> O TRANSPIRA Jurídico redesenha o fluxo.</p>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#e8e0d6', fontSize: '0.875rem', flexShrink: 0, marginTop: '3px' }}>&#8212;</span>
                  <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.6, color: '#e8e0d6' }}>O escritório está em <strong style={{ fontWeight: 600, color: '#F5F5F2' }}>colapso operacional</strong> sem estrutura mínima para absorver mudança.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid rgba(232,224,214,0.15)' }}>
            <a
              href="/contato?origem=transpira-juridico"
              style={{
                display: 'inline-block',
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F5F5F2',
                backgroundColor: '#eb5c2e',
                padding: '14px 28px',
                textDecoration: 'none',
              }}
            >
              CONVERSAR COM A PIRA LABS
            </a>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.75rem', color: '#e8e0d6', marginTop: '12px', opacity: 0.6 }}>
              Conversa de qualificação mútua. Investimento sob consulta após alinhamento de escopo.
            </p>
          </div>
        </div>
      </section>

      {/* S6 — QUEM CONDUZ | Teal */}
      <section style={{ backgroundColor: '#004757', padding: '120px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e8e0d6',
            marginBottom: '24px',
          }}>
            QUEM EXECUTA
          </p>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '48px',
          }}>
            Celso Gama entra na operação. Sai quando o resultado acordado é{' '}
            <span style={{ color: '#eb5c2e' }}>verificado</span>.
          </h2>
          <h3 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 400,
            fontSize: '1.25rem',
            color: '#F5F5F2',
            marginBottom: '16px',
          }}>
            Celso Gama
          </h3>
          <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#F5F5F2', marginBottom: '8px' }}>
            COO e Co-founder da Pira Labs. <strong style={{ fontWeight: 600 }}>Bacharelando em Direito (Mackenzie). MIT Applied AI Certificate Program, em andamento (2026). MBA pelo Insper.</strong> Conduziu o projeto que resultou na evidência <strong style={{ fontWeight: 600 }}>400h&#8594;36h</strong> referenciada nesta página.
          </p>
          <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.7, color: '#F5F5F2', marginBottom: '40px' }}>
            O diferencial não é a ferramenta. <strong style={{ fontWeight: 600 }}>É quem opera a ferramenta entendendo o que está em jogo em cada decisão jurídica.</strong>
          </p>
          <div style={{
            borderLeft: '2px solid rgba(232,224,214,0.4)',
            paddingLeft: '24px',
          }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              A Pira Labs só utiliza ferramentas de IA no projeto após validação prévia das condições de uso, tratamento de dados e restrições de treinamento aplicáveis ao cliente. O TRANSPIRA Jurídico opera com NDA assinado antes de qualquer acesso a documentos ou sistemas do escritório.
            </p>
          </div>
        </div>
      </section>

      {/* S7 — FAQ | Sand */}
      <section style={{ backgroundColor: '#e8e0d6', padding: '120px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1A5568',
            marginBottom: '24px',
          }}>
            PERGUNTAS FREQUENTES
          </p>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.15,
            color: '#05262e',
            marginBottom: '56px',
          }}>
            O que escritórios perguntam antes de{' '}
            <span style={{ color: '#C4421A' }}>conversar</span>.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                q: 'Vocês prestam consultoria jurídica?',
                a: <><strong style={{ fontWeight: 600 }}>Não.</strong> A Pira Labs não presta consultoria jurídica, não emite parecer e não substitui advogada ou advogado habilitados. Atuamos dentro da operação, não no lugar da equipe jurídica. <strong style={{ fontWeight: 600 }}>Todo material produzido é insumo operacional para revisão e validação do advogado habilitado do próprio escritório.</strong> Nenhum material é entregue como peça final nem enviado a destinatário sem essa revisão.</>,
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
              <details
                key={item.q}
                style={{ borderBottom: '1px solid rgba(5,38,46,0.15)' }}
              >
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
                  <span style={{ color: '#1A5568', fontSize: '1.25rem', flexShrink: 0, marginLeft: '16px' }}>+</span>
                </summary>
                <p style={{
                  fontFamily: 'AtypText, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: '#05262e',
                  paddingBottom: '24px',
                  marginTop: 0,
                }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINALCTA | Ink */}
      <section style={{ backgroundColor: '#05262e', padding: '120px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.2,
            color: '#F5F5F2',
            marginBottom: '48px',
          }}>
            O julgamento jurídico fica com você. O trabalho mecânico, não precisa.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <a
              href="/contato?origem=transpira-juridico"
              style={{
                display: 'inline-block',
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F5F5F2',
                backgroundColor: '#eb5c2e',
                padding: '16px 40px',
                textDecoration: 'none',
              }}
            >
              RESPIRE
            </a>
            <a
              href="/inspira/juridico"
              style={{
                display: 'inline-block',
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F5F5F2',
                border: '1px solid rgba(245,245,242,0.4)',
                padding: '16px 40px',
                textDecoration: 'none',
              }}
            >
              CONHECER O INSPIRA JURÍDICO
            </a>
          </div>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '0.75rem',
            color: '#e8e0d6',
            marginTop: '20px',
          }}>
            Conversa inicial sem compromisso.
          </p>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '0.8125rem',
            lineHeight: 1.6,
            color: 'rgba(245,245,242,0.7)',
            maxWidth: '640px',
            margin: '32px auto 0',
          }}>
            A Pira Labs não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB. O TRANSPIRA Jurídico é operação de legal ops com supervisão obrigatória de advogado habilitado do contratante. Todo material produzido é insumo operacional para revisão da equipe jurídica do cliente.
          </p>
        </div>
      </section>
    </>
  )
}
