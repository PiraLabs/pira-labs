import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'PIRA LABS | Creative Business Turnaround',
    template: '%s | PIRA LABS',
  },
  description:
    'Boutique brasileña de Creative Business Turnaround. Liberamos el próximo nivel de negocios con potencial reprimido.',
  keywords: [
    'Creative Business Turnaround',
    'turnaround empresarial',
    'consultoría crecimiento empresa servicios',
    'propulsión de negocios',
    'PIRA LABS',
    'Gabriela Aguiar',
    'Celso Gama',
  ],
  authors: [
    { name: 'Gabriela Aguiar', url: 'https://piralabs.com.br/es/sobre' },
    { name: 'Celso Gama', url: 'https://piralabs.com.br/es/sobre' },
  ],
  creator: 'PIRA LABS',
  metadataBase: new URL('https://piralabs.com.br'),
  openGraph: {
    type: 'website',
    locale: 'es_419',
    url: 'https://piralabs.com.br/es',
    siteName: 'PIRA LABS',
    title: 'PIRA LABS | Creative Business Turnaround',
    description: 'Boutique brasileña de Creative Business Turnaround. Liberamos el próximo nivel.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PIRA LABS, Propulsión de Negocios' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PIRA LABS | Creative Business Turnaround',
    description: 'Boutique brasileña de Creative Business Turnaround.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://piralabs.com.br/es',
    languages: {
      'pt-BR': 'https://piralabs.com.br',
      'en': 'https://piralabs.com.br/en',
      'es': 'https://piralabs.com.br/es',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://piralabs.com.br/#organization',
      name: 'PIRA LABS',
      alternateName: 'PIRA LABS, Propulsión de Negocios',
      url: 'https://piralabs.com.br',
      description:
        'Boutique brasileña de Creative Business Turnaround. Entramos en negocios de servicios con potencial reprimido, encontramos el problema real, construimos el camino hacia el próximo nivel y salimos cuando el negocio está en propulsión.',
      foundingDate: '2025',
      foundingLocation: {
        '@type': 'Place',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      email: 'inspira@piralabs.com.br',
      sameAs: [
        'https://linkedin.com/company/piralabs',
        'https://github.com/PiraLabs/pira-labs',
      ],
      founder: [
        {
          '@type': 'Person',
          '@id': 'https://piralabs.com.br/#gabriela-aguiar',
          name: 'Gabriela Aguiar',
          jobTitle: 'CEO',
          description:
            'CEO de PIRA LABS. Casi una década en innovación y venture capital en Brasil, EE.UU. y los países nórdicos. Profesora de MBA en FIAP, mentora en FGV Ventures, en formación en IA en el MIT.',
          sameAs: ['https://www.linkedin.com/in/gabrielaaguiarvs/'],
        },
        {
          '@type': 'Person',
          '@id': 'https://piralabs.com.br/#celso-gama',
          name: 'Celso Gama',
          jobTitle: 'Co-fundador y COO',
          description:
            'Co-fundador de PIRA LABS. Especialista en turnaround operacional. Escaló ingresos de R$16M a R$163M en 24 meses. Pasó el margen de -64% a +15% en 6 meses sin aumentar ingresos.',
          sameAs: ['https://www.linkedin.com/in/celsogama/'],
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios PIRA LABS',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'INSPIRA',
              description: 'Diagnóstico del problema real. Lectura del sector. Curaduría de tecnologías disponibles. El problema nombrado, la ruta diseñada.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TRANSPIRA',
              description: 'Ejecución. Entramos en la operación, trabajamos junto con el equipo, integramos tecnología curada y salimos con resultado verificado.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://piralabs.com.br/#website-es',
      url: 'https://piralabs.com.br/es',
      name: 'PIRA LABS',
      inLanguage: 'es',
      publisher: { '@id': 'https://piralabs.com.br/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://piralabs.com.br/es#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es Creative Business Turnaround?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Creative Business Turnaround es la categoría de servicio que combina diagnóstico estratégico, ejecución operacional y curaduría de tecnología para liberar el próximo nivel de crecimiento en empresas de servicios con potencial reprimido. PIRA LABS es la primera boutique brasileña en esta categoría.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Para qué tipo de empresa trabaja PIRA LABS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PIRA LABS trabaja con decisores de empresas de servicios de alto valor agregado que tienen potencial reprimido. Tres situaciones típicas: el fundador se convirtió en el cuello de botella de todas las decisiones, el negocio crece pero la estructura no acompaña, o la empresa tiene datos pero nadie los convirtió en decisiones.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuál es la diferencia entre INSPIRA y TRANSPIRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'INSPIRA es el diagnóstico: encontramos dónde está el problema real, leemos el sector y mapeamos las tecnologías disponibles. TRANSPIRA es la ejecución: entramos en la operación, construimos junto con el equipo y salimos con resultado verificado.',
          },
        },
      ],
    },
  ],
}

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav locale="es" />
      <main>{children}</main>
      <Footer locale="es" />
    </>
  )
}
