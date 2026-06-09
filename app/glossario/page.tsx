import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Glossário · Pira Labs" },
  description: "Vocabulário canônico da Pira Labs — os termos que usamos e o que significam.",
  robots: { index: false, follow: false },
}

export default function Glossario() {
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
        Glossário.
      </h1>
      <p style={{ fontSize: '20px', fontWeight: 300, maxWidth: '600px', lineHeight: 1.75, opacity: 0.8 }}>
        Os termos que usamos, o que significam e por que importam.
      </p>
    </main>
  )
}
