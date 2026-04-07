import type { Metadata } from 'next'
import Link from 'next/link'
import { dict } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Cases: Verified results',
  description:
    'Legal case: 1,500+ pages analyzed, equivalent to 400 hours of effort delivered in 36 hours. Verified results from PIRA LABS.',
  alternates: {
    canonical: 'https://piralabs.com.br/en/cases',
    languages: { 'pt-BR': 'https://piralabs.com.br/cases' },
  },
}

const t = dict.en.cases

export default function CasesEn() {
  const c = t.case1
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
            {t.hero.h1}
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="bg-navy mb-8">
            {/* Header */}
            <div className="p-10 border-b border-off-white/10">
              <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-amber mb-2">
                    {c.sector}
                  </p>
                  <h2 className="font-display text-off-white text-4xl">
                    {c.h2[0]}
                    <br />
                    <span className="text-amber">{c.h2[1]}</span>
                  </h2>
                </div>
                <span className="px-3 py-1 border border-off-white/20 text-off-white/50 font-body text-xs uppercase tracking-wide">
                  {c.badge}
                </span>
              </div>
              <p className="font-body text-off-white/60 text-sm leading-relaxed max-w-2xl">
                {c.body}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-off-white/10">
              {c.metrics.map((m) => (
                <div key={m.num} className="p-8">
                  <p className="font-display text-off-white text-4xl mb-1">{m.num}</p>
                  <p className="font-body font-medium text-amber text-xs uppercase tracking-wide mb-2">
                    {m.label}
                  </p>
                  <p className="font-body text-off-white/40 text-sm">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Method */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-off-white/10 border-t border-off-white/10">
              {c.method.map((card) => (
                <div key={card.badge} className="p-8">
                  <span
                    className="inline-block px-2 py-0.5 font-body text-xs tracking-widest uppercase text-off-white mb-4"
                    style={{ backgroundColor: card.color }}
                  >
                    {card.badge}
                  </span>
                  <h3 className="font-display text-off-white text-xl mb-3">{card.title}</h3>
                  <p className="font-body text-off-white/50 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="p-10 border-t border-off-white/10">
              <blockquote className="border-l-4 border-amber pl-6">
                <p className="font-display text-off-white text-2xl italic mb-4">{c.quote}</p>
                <p className="font-body text-off-white/40 text-xs uppercase tracking-widest">
                  {c.quoteAuthor}
                </p>
              </blockquote>
            </div>
          </div>

          <p className="font-body text-xs text-gray-text text-center">{c.disclaimer}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-navy text-4xl mb-4">{t.cta.h2}</h2>
          <p className="font-body text-gray-text mb-8">{t.cta.body}</p>
          <Link
            href="/en/contact"
            className="inline-block px-8 py-4 bg-navy text-off-white font-body text-sm uppercase tracking-wide hover:bg-amber hover:text-navy transition-colors duration-200"
          >
            {t.cta.btn}
          </Link>
        </div>
      </section>
    </>
  )
}
