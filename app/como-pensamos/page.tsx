import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Como pensamos · Pira Labs" },
  description: "Teses, referências e vocabulário que orientam o trabalho da Pira Labs.",
  robots: { index: false, follow: false },
}

export default function ComoPensamos() {
  return (
    <main style={{
      padding: '120px 80px',
      backgroundColor: '#05262e',
      minHeight: '100vh',
      color: '#F5F5F2',
      fontFamily: 'sans-serif'
    }}>
      <p style={{ fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.5 }}>
        EM BREVE
      </p>
      <h1 style={{ fontSize: '48px', fontWeight: 600, marginTop: '24px', marginBottom: '24px' }}>
        Como pensamos.
      </h1>
      <p style={{ fontSize: '20px', fontWeight: 300, maxWidth: '600px', lineHeight: 1.75, opacity: 0.8 }}>
        Teses, referências e vocabulário que orientam cada diagnóstico e cada execução.
      </p>
    </main>
  )
}
