import type { Metadata } from 'next'
import { dict } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'About the Founders',
  description:
    'Gabriela Aguiar and Celso Gama, founders of Pira Labs. Brazilian boutique for Creative Business Turnaround.',
  alternates: {
    canonical: 'https://piralabs.com.br/en/about',
    languages: { 'pt-BR': 'https://piralabs.com.br/sobre' },
  },
}

const t = dict.en.sobre

export default function AboutEn() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">
            {t.hero.eyebrow}
          </p>
          <h1
            className="font-display text-off-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {t.hero.h1[0]}
            <br />
            {t.hero.h1[1]}
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          {/* Gabriela */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-2">
                {t.gabriela.role}
              </p>
              <h2 className="font-display text-navy text-5xl mb-6">{t.gabriela.name}</h2>
              <p className="font-body text-gray-text leading-relaxed mb-4">{t.gabriela.p1}</p>
              <p className="font-body text-gray-text leading-relaxed mb-4">{t.gabriela.p2}</p>
              <p className="font-body text-gray-text leading-relaxed mb-8">{t.gabriela.p3}</p>
              <a
                href="https://www.linkedin.com/in/gabrielaaguiarvs/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-amber hover:underline"
              >
                {t.gabriela.linkedin}
              </a>
            </div>
            <div className="bg-navy-mid p-10 border-l-4 border-blue-inspira">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-6">
                {t.gabriela.badge}
              </p>
              <p className="font-display text-off-white text-2xl leading-relaxed">
                {t.gabriela.quote}
              </p>
            </div>
          </div>

          <div className="border-t border-amber/20 mb-24" />

          {/* Celso */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="order-2 md:order-1 bg-cream-dark p-10 border-l-4 border-amber">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-6">
                {t.celso.badge}
              </p>
              <div className="space-y-4">
                {t.celso.results.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-amber mt-0.5">✓</span>
                    <p className="font-body text-gray-text text-sm">{item}</p>
                  </div>
                ))}
                <p className="font-body text-xs text-gray-text/60 pt-2 italic">
                  {t.celso.disclaimer}
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-2">
                {t.celso.role}
              </p>
              <h2 className="font-display text-navy text-5xl mb-6">{t.celso.name}</h2>
              <p className="font-body text-gray-text leading-relaxed mb-4">{t.celso.p1}</p>
              <p className="font-body text-gray-text leading-relaxed mb-4">{t.celso.p2}</p>
              <p className="font-body text-gray-text leading-relaxed mb-8">{t.celso.p3}</p>
              <a
                href="https://www.linkedin.com/in/celsogama/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-amber hover:underline"
              >
                {t.celso.linkedin}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
