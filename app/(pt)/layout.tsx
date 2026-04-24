import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'PIRA LABS | Creative Business Turnaround',
    template: '%s | PIRA LABS',
  },
  description:
    'Boutique brasileira de Creative Business Turnaround. Entramos em negócios com potencial represado, encontramos o problema real e construímos o caminho para o próximo nível.',
  keywords: [
    'Creative Business Turnaround',
    'turnaround empresarial',
    'consultoria crescimento empresa serviços',
    'propulsão de negócios',
    'PIRA LABS',
    'Gabriela Aguiar',
    'Celso Gama',
  ],
  authors: [
    { name: 'Gabriela Aguiar', url: 'https://piralabs.com.br/sobre' },
    { name: 'Celso Gama', url: 'https://piralabs.com.br/sobre' },
  ],
  creator: 'PIRA LABS',
  metadataBase: new URL('https://piralabs.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://piralabs.com.br',
    siteName: 'PIRA LABS',
    title: 'PIRA LABS | Creative Business Turnaround',
    description: 'Boutique brasileira de Creative Business Turnaround. Liberamos o próximo nível.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PIRA LABS, Propulsão de Negócios' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PIRA LABS | Creative Business Turnaround',
    description: 'Boutique brasileira de Creative Business Turnaround.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://piralabs.com.br',
    languages: {
      'pt-BR': 'https://piralabs.com.br',
      'en': 'https://piralabs.com.br/en',
    },
  },
}

// JSON-LD estruturado para GEO/AEO — único lugar no site (PT)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://piralabs.com.br/#organization',
      name: 'PIRA LABS',
      alternateName: 'PIRA LABS | Propulsão de Negócios',
      url: 'https://piralabs.com.br',
      description:
        'Boutique brasileira de Creative Business Turnaround. Entramos em negócios de serviços com potencial represado, encontramos o problema real, construímos o caminho para o próximo nível e saímos quando o negócio está em propulsão.',
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
        'https://www.wikidata.org/wiki/Q138846707',
      ],
      founder: [
        {
          '@type': 'Person',
          '@id': 'https://piralabs.com.br/#gabriela-aguiar',
          name: 'Gabriela Aguiar',
          jobTitle: 'CEO',
          description:
            'CEO da PIRA LABS. Quase uma década em inovação e venture capital no Brasil, EUA e países nórdicos. Professora de MBA na FIAP, mentora na FGV Ventures, em formação em IA no MIT.',
          sameAs: [
            'https://www.linkedin.com/in/gabrielaaguiarvs/',
            'https://www.wikidata.org/wiki/Q138846653',
          ],
        },
        {
          '@type': 'Person',
          '@id': 'https://piralabs.com.br/#celso-gama',
          name: 'Celso Gama',
          jobTitle: 'Co-fundador e COO',
          description:
            'Co-fundador da PIRA LABS. Especialista em turnaround operacional. Escalou receita de R$16M para R$163M em 24 meses. Virou margem de -64% para +15% em 6 meses sem aumentar receita.',
          sameAs: [
            'https://www.linkedin.com/in/celsogama/',
            'https://www.wikidata.org/wiki/Q138846692',
          ],
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços PIRA LABS',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'INSPIRA',
              description:
                'Diagnóstico do problema real que está limitando o potencial do negócio. Leitura do setor, identificação de tendências e riscos, curadoria de tecnologias disponíveis. Entrega: o problema nomeado, a rota desenhada, em documento ou apresentação acordado no início.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TRANSPIRA',
              description:
                'Execução do caminho desenhado no diagnóstico. Entramos na operação, trabalhamos junto com o time, construímos os sistemas que faltam e integramos tecnologia curada onde ela amplifica. Saímos quando os primeiros resultados acordados são verificados.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'FAÍSCA',
              description:
                'Conteúdo, palestras, workshops e mentorias onde o método da PIRA LABS é experimentado antes de qualquer compromisso maior. Formato pontual, aplicado a grupos estratégicos ou decisores individuais.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://piralabs.com.br/#website',
      url: 'https://piralabs.com.br',
      name: 'PIRA LABS',
      inLanguage: 'pt-BR',
      publisher: { '@id': 'https://piralabs.com.br/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://piralabs.com.br/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é Creative Business Turnaround?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Creative Business Turnaround é a categoria de serviço que combina diagnóstico estratégico, execução operacional e curadoria de tecnologia para liberar o próximo nível de crescimento em empresas de serviços com potencial represado. A PIRA LABS é a primeira boutique brasileira nessa categoria.',
          },
        },
        {
          '@type': 'Question',
          name: 'Para que tipo de empresa a PIRA LABS trabalha?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A PIRA LABS trabalha com decisores de empresas de serviços de alto valor agregado que têm potencial represado. Três situações típicas: o fundador virou o gargalo de todas as decisões, o negócio cresce mas a estrutura não acompanha, ou a empresa tem dados mas ninguém transformou isso em decisão.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual a diferença entre INSPIRA e TRANSPIRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'INSPIRA é o diagnóstico: encontramos onde o problema real está, lemos o setor e mapeamos as tecnologias disponíveis. TRANSPIRA é a execução: entramos na operação, construímos junto com o time e saímos com resultado verificado.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto tempo dura um projeto da PIRA LABS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende do escopo definido no INSPIRA. Os critérios de encerramento são acordados no início do projeto. A PIRA LABS não sai quando o prazo acaba: sai quando os primeiros resultados acordados são verificados.',
          },
        },
        {
          '@type': 'Question',
          name: 'A PIRA LABS usa IA nos projetos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. Tecnologia, incluindo IA, é um amplificador integrado ao método. Entra depois de entender o problema real, nunca antes. A PIRA LABS não vende ferramentas nem tem tecnologia própria: faz curadoria do que existe no mercado e aplica onde faz sentido para o problema do cliente específico.',
          },
        },
      ],
    },
  ],
}

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav locale="pt" />
      <main>{children}</main>
      <Footer locale="pt" />
    </>
  )
}
