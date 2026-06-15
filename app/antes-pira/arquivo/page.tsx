import type { Metadata } from 'next'
import { buscarPostsSubstack } from '@/lib/substack-rss'

export const metadata: Metadata = {
  title: 'Arquivo — Antes, Pira | Pira Labs',
  description: 'Todas as edições da publicação editorial Antes, Pira da Pira Labs.',
  alternates: {
    canonical: 'https://piralabs.com.br/antes-pira/arquivo',
  },
}

export default async function AntesPiraArquivoPage() {
  const posts = await buscarPostsSubstack(50)

  return (
    <>
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" style={{ backgroundColor: '#e8e0d6', padding: '12px 80px' }}>
        <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.75rem', color: '#05262e' }}>
          <li><a href="/" style={{ color: '#05262e', textDecoration: 'none' }}>Home</a></li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li><a href="/antes-pira" style={{ color: '#05262e', textDecoration: 'none' }}>Antes, Pira</a></li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li style={{ opacity: 0.6 }}>Arquivo</li>
        </ol>
      </nav>

      {/* HERO | Sand */}
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
            Antes, Pira
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
            Todas as <span style={{ color: '#C4421A' }}>edições</span>.
          </h1>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 300,
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#05262e',
            maxWidth: '560px',
          }}>
            O arquivo completo da publicação editorial da Pira Labs.
          </p>
        </div>
      </section>

      {/* LISTA COMPLETA | Ink */}
      <section style={{ backgroundColor: '#05262e', padding: '120px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {posts.length > 0 ? (
            <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
              {posts.map((post) => (
                <div
                  key={post.href}
                  style={{
                    borderTop: '1px solid rgba(232,224,214,0.15)',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                  }}
                >
                  <p style={{
                    fontFamily: 'AtypText, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.75rem',
                    color: '#e8e0d6',
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
                      color: '#F5F5F2',
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
                      color: '#e8e0d6',
                      opacity: 0.7,
                      marginBottom: '16px',
                      maxWidth: '640px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
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
              <div style={{ borderTop: '1px solid rgba(232,224,214,0.15)' }} />
            </div>
          ) : (
            <p style={{
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: '#e8e0d6',
              opacity: 0.6,
            }}>
              As edições estão disponíveis diretamente no Substack.
            </p>
          )}

          <div style={{ marginTop: '48px' }}>
            <a
              href="https://piralabs.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                textDecoration: 'none',
                opacity: 0.6,
              }}
            >
              Ver no Substack →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
