import Link from 'next/link'
import type { Metadata } from 'next'
import { dict } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Services: INSPIRA and TRANSPIRA',
  description:
    'INSPIRA: real problem diagnosis. TRANSPIRA: execution with verified results. PIRA LABS services for service businesses with untapped potential.',
  alternates: {
    canonical: 'https://piralabs.com.br/en/services',
    languages: { 'pt-BR': 'https://piralabs.com.br/servicos' },
  },
}

const t = dict.en.servicos

export default function ServicesEn() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">
            {t.hero.eyebrow}
          </p>
          <h1
            className="font-display text-off-white max-w-2xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {t.hero.h1[0]}
            <br />
            {t.hero.h1[1]}
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6 space-y-16">
          {/* INSPIRA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-inspira text-off-white font-body text-xs tracking-widest uppercase mb-6">
                {t.inspira.badge}
              </span>
              <h2 className="font-display text-navy text-4xl mb-4">{t.inspira.h2}</h2>
              <p className="font-body text-gray-text leading-relaxed mb-6">{t.inspira.p1}</p>
              <p className="font-body text-gray-text leading-relaxed mb-8">{t.inspira.p2}</p>
              <Link href="/en/contact" className="font-body text-sm text-amber hover:underline">
                {t.inspira.cta}
              </Link>
            </div>
            <div className="bg-cream-dark p-8 space-y-4">
              <p className="font-body text-xs uppercase tracking-widest text-gray-text mb-4">
                {t.inspira.deliverables.title}
              </p>
              {t.inspira.deliverables.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-amber mt-0.5">→</span>
                  <p className="font-body text-sm text-gray-text leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-amber/20" />

          {/* TRANSPIRA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-3 py-1 bg-amber text-navy font-body text-xs tracking-widest uppercase mb-6">
                {t.transpira.badge}
              </span>
              <h2 className="font-display text-navy text-4xl mb-4">{t.transpira.h2}</h2>
              <p className="font-body text-gray-text leading-relaxed mb-6">{t.transpira.p1}</p>
              <p className="font-body text-gray-text leading-relaxed mb-8">{t.transpira.p2}</p>
              <Link href="/en/contact" className="font-body text-sm text-amber hover:underline">
                {t.transpira.cta}
              </Link>
            </div>
            <div className="bg-navy p-8 space-y-6">
              <p className="font-body text-xs uppercase tracking-widest text-amber mb-4">
                {t.transpira.moves.title}
              </p>
              {t.transpira.moves.items.map(([title, desc]) => (
                <div key={title} className="border-l border-amber/40 pl-4">
                  <p className="font-body font-medium text-off-white text-sm mb-1">{title}</p>
                  <p className="font-body text-off-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber py-16">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-navy text-4xl mb-4">{t.cta.h2}</h2>
          <p className="font-body text-navy/70 mb-8">{t.cta.body}</p>
          <Link
            href="/en/contact"
            className="inline-block px-8 py-4 bg-navy text-off-white font-body text-sm uppercase tracking-wide hover:bg-navy-mid transition-colors duration-200"
          >
            {t.cta.btn}
          </Link>
        </div>
      </section>
    </>
  )
}
