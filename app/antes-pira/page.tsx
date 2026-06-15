import type { Metadata } from 'next'
import { buscarPostsSubstack } from '@/lib/substack-rss'

export const metadata: Metadata = {
  title: 'Antes, Pira — Publicação editorial da Pira Labs',
  description: 'Antes, Pira é a publicação editorial da Pira Labs no Substack. Teses sobre Creative Business Turnaround, modelo de trabalho em empresas de serviços, IA aplicada à operação e o que aprendemos operando, incluindo o que não funcionou.',
  alternates: {
    canonical: 'https://piralabs.com.br/antes-pira',
  },
  openGraph: {
    title: 'Antes, Pira — Publicação editorial da Pira Labs',
    description: 'Teses sobre Creative Business Turnaround, modelo de trabalho em empresas de serviços, IA aplicada à operação e o que aprendemos operando.',
    url: 'https://piralabs.com.br/antes-pira',
    images: [{ url: 'https://piralabs.com.br/piralabs-og-image.png', width: 1200, height: 630, alt: 'Pira Labs' }],
  },
}

export default async function AntesPiraPage() {
  const posts = await buscarPostsSubstack(8)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://piralabs.com.br/antes-pira',
        url: 'https://piralabs.com.br/antes-pira',
        name: 'Antes, Pira — Publicação editorial da Pira Labs',
        description: 'Antes, Pira é a publicação editorial da Pira Labs no Substack. Teses sobre Creative Business Turnaround, modelo de trabalho em empresas de serviços, IA aplicada à operação e o que aprendemos operando.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': 'https://piralabs.com.br' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://piralabs.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Antes, Pira', item: 'https://piralabs.com.br/antes-pira' },
        ],
      },
      {
        '@type': 'Blog',
        name: 'Antes, Pira',
        description: 'Publicação editorial da Pira Labs no Substack.',
        url: 'https://piralabs.substack.com',
        publisher: {
          '@type': 'Organization',
          name: 'Pira Labs',
          url: 'https://piralabs.com.br',
        },
        inLanguage: 'pt-BR',
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
          <li style={{ opacity: 0.6 }}>Antes, Pira</li>
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
            Publicação editorial · Substack
          </p>
          <h1 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.1,
            color: '#05262e',
            marginBottom: '32px',
            maxWidth: '800px',
          }}>
            Antes<span style={{ color: '#C4421A' }}>,</span> Pira.
          </h1>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#05262e',
            maxWidth: '560px',
          }}>
            A publicação editorial da Pira Labs. Teses, estudos e o que aprendemos operando, incluindo o que não funcionou.
          </p>
        </div>
      </section>

      {/* S2 — SOBRE A PUBLICAÇÃO | Ink */}
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
            A publicação
          </p>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.15,
            color: '#F5F5F2',
            marginBottom: '48px',
            maxWidth: '700px',
          }}>
            O que não cabe em post. O que não sai sem <span style={{ color: '#eb5c2e' }}>argumento</span>.
          </h2>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Antes, Pira é a publicação editorial da Pira Labs. Vive no Substack porque é lá que conteúdo de profundidade encontra quem escolhe ler.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Publicamos teses sobre Creative Business Turnaround, estudos sobre o modelo de trabalho em empresas de serviços, observações sobre IA aplicada à operação, governança de risco em ambientes de IA, e o que aprendemos operando — incluindo o que não funcionou.
            </p>
            <p style={{ fontFamily: 'AtypText, sans-serif', fontWeight: 600, fontSize: '1rem', lineHeight: 1.7, color: '#F5F5F2' }}>
              Cada edição assina Gabriela, Celso ou ambos, dependendo do tema. A periodicidade é determinada pela existência de algo que mereça ser publicado, não por calendário fixo.
            </p>
          </div>

          {/* CTA convite — antes dos posts */}
          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://piralabs.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
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
              Receber por email
            </a>
            <a
              href="https://piralabs.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F5F5F2',
                border: '1px solid rgba(245,245,242,0.3)',
                padding: '14px 28px',
                textDecoration: 'none',
              }}
            >
              Ler no Substack
            </a>
          </div>
        </div>
      </section>

      {/* S3 — EDIÇÕES RECENTES | Sand */}
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
            Edições recentes
          </p>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.15,
            color: '#05262e',
            marginBottom: '64px',
            maxWidth: '700px',
          }}>
            O que foi <span style={{ color: '#C4421A' }}>publicado</span>.
          </h2>

          {posts.length > 0 ? (
            <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
              {posts.map((post, i) => (
                <div
                  key={post.href}
                  style={{
                    borderTop: '1px solid rgba(5,38,46,0.15)',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                  }}
                >
                  <p style={{
                    fontFamily: 'AtypText, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.75rem',
                    color: '#05262e',
                    opacity: 0.5,
                    marginBottom: '8px',
                    letterSpacing: '0.05em',
                  }}>
                    {post.data}
                  </p>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'AtypDisplay, sans-serif',
                      fontWeight: 400,
                      fontSize: '1.25rem',
                      lineHeight: 1.25,
                      color: '#05262e',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '12px',
                    }}
                  >
                    {post.titulo}
                  </a>
                  {post.previa && (
                    <p style={{
                      fontFamily: 'AtypText, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: '#05262e',
                      opacity: 0.75,
                      marginBottom: '16px',
                      maxWidth: '640px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {post.previa}
                    </p>
                  )}
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'AtypText, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#1A5568',
                      textDecoration: 'none',
                    }}
                  >
                    Ler edição →
                  </a>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(5,38,46,0.15)' }} />
              <div style={{ marginTop: '40px' }}>
                <a
                  href="/antes-pira/arquivo"
                  style={{
                    fontFamily: 'AtypText, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#1A5568',
                    textDecoration: 'none',
                  }}
                >
                  Ver todas as edições →
                </a>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: '560px' }}>
              <p style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 300,
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#05262e',
                opacity: 0.6,
              }}>
                As edições mais recentes estão disponíveis diretamente no Substack.
              </p>
              <a
                href="https://piralabs.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '24px',
                  fontFamily: 'AtypText, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#1A5568',
                  textDecoration: 'none',
                }}
              >
                Acessar Substack →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* S4 — CTA FINAL | Ink */}
      <section style={{ backgroundColor: '#05262e', padding: '120px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.2,
            color: '#F5F5F2',
            marginBottom: '40px',
          }}>
            Conteúdo que não existe para performar. Existe para pensar junto.
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://piralabs.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F5F5F2',
                backgroundColor: '#eb5c2e',
                padding: '16px 40px',
                textDecoration: 'none',
              }}
            >
              Receber por email
            </a>
            <a
              href="https://piralabs.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F5F5F2',
                border: '1px solid rgba(245,245,242,0.3)',
                padding: '16px 40px',
                textDecoration: 'none',
              }}
            >
              Ler no Substack
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
