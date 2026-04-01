import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Pira Labs — Creative Business Turnaround',
    template: '%s | Pira Labs',
  },
  description:
    'Brazilian boutique for Creative Business Turnaround. We enter businesses with untapped potential, find the real problem, and build the path to the next level.',
  keywords: [
    'Creative Business Turnaround',
    'business turnaround Brazil',
    'business consulting growth services',
    'business propulsion',
    'Pira Labs',
    'Gabriela Aguiar',
    'Celso Gama',
  ],
  authors: [
    { name: 'Gabriela Aguiar', url: 'https://piralabs.com.br/en/about' },
    { name: 'Celso Gama', url: 'https://piralabs.com.br/en/about' },
  ],
  creator: 'Pira Labs',
  metadataBase: new URL('https://piralabs.com.br'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://piralabs.com.br/en',
    siteName: 'Pira Labs',
    title: 'Pira Labs — Creative Business Turnaround',
    description: 'Brazilian boutique for Creative Business Turnaround. We unlock the next level.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Pira Labs — Business Propulsion' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pira Labs — Creative Business Turnaround',
    description: 'Brazilian boutique for Creative Business Turnaround.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://piralabs.com.br/en',
    languages: {
      'pt-BR': 'https://piralabs.com.br',
      'en': 'https://piralabs.com.br/en',
    },
  },
}

// JSON-LD EN — same Organization, EN language variant
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://piralabs.com.br/#organization',
      name: 'Pira Labs',
      alternateName: 'Pira Labs — Business Propulsion',
      url: 'https://piralabs.com.br',
      description:
        'Brazilian boutique for Creative Business Turnaround. We enter service businesses with untapped potential, find the real problem, build the path to the next level, and leave when the business is in full propulsion.',
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
            'CEO of Pira Labs. Nearly a decade in innovation and venture capital in Brazil, the US, and the Nordics. MBA professor at FIAP, mentor at FGV Ventures, studying AI at MIT.',
          sameAs: ['https://www.linkedin.com/in/gabrielaaguiarvs/'],
        },
        {
          '@type': 'Person',
          '@id': 'https://piralabs.com.br/#celso-gama',
          name: 'Celso Gama',
          jobTitle: 'Co-founder and COO',
          description:
            'Co-founder of Pira Labs. Operational turnaround specialist. Scaled revenue from R$16M to R$163M in 24 months. Turned margin from -64% to +15% in 6 months without increasing revenue.',
          sameAs: ['https://www.linkedin.com/in/celsogama/'],
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pira Labs Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'INSPIRA',
              description:
                'Real problem diagnosis. Sector reading. Curation of available technologies. The problem named, the route drawn.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TRANSPIRA',
              description:
                'Execution. We enter the operation, work alongside the team, integrate curated technology, and leave with verified results.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://piralabs.com.br/#website-en',
      url: 'https://piralabs.com.br/en',
      name: 'Pira Labs',
      inLanguage: 'en',
      publisher: { '@id': 'https://piralabs.com.br/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://piralabs.com.br/en#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Creative Business Turnaround?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Creative Business Turnaround is the service category that combines strategic diagnosis, operational execution, and technology curation to unlock the next growth level in service businesses with untapped potential. Pira Labs is the first Brazilian boutique in this category.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of company does Pira Labs work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pira Labs works with decision-makers at high-value service companies with untapped potential. Three typical situations: the founder has become the bottleneck of every decision, the business grows but the structure can\'t keep up, or the company has data but nobody has turned it into clarity.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between INSPIRA and TRANSPIRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'INSPIRA is the diagnosis: we find where the real problem is, read the sector, and map available technologies. TRANSPIRA is execution: we enter the operation, build alongside the team, and leave with verified results.',
          },
        },
      ],
    },
  ],
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav locale="en" />
      <main>{children}</main>
      <Footer locale="en" />
    </>
  )
}
