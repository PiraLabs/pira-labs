import Link from 'next/link'
import type { Metadata } from 'next'
import { dict } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Pira Labs — Creative Business Turnaround',
  description:
    'Brazilian boutique for Creative Business Turnaround. We unlock the next level of businesses with untapped potential.',
  alternates: {
    canonical: 'https://piralabs.com.br/en',
    languages: { 'pt-BR': 'https://piralabs.com.br' },
  },
}

const t = dict.en

export default function HomeEn() {
  const h = t.home
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen bg-navy flex items-center relative overflow-hidden pt-16">
        <div className="absolute right-0 top-0 bottom-0 w-px bg-amber/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-amber/20" />
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom right, #BA7517 0%, transparent 60%)' }}
        />
        <div className="max-w-container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-widest uppercase text-amber mb-8 fade-up">
              {h.hero.eyebrow}
            </p>
            <h1
              className="font-display text-off-white leading-none mb-8 fade-up fade-up-delay-1"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              {h.hero.h1[0]}
              <br />
              {h.hero.h1[1]}
            </h1>
            <p className="font-body text-off-white/70 text-xl leading-relaxed mb-12 max-w-xl fade-up fade-up-delay-2">
              {h.hero.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up fade-up-delay-3">
              <Link
                href="/en/contact"
                className="px-8 py-4 bg-amber text-navy font-body font-medium tracking-wide uppercase text-sm hover:bg-amber-light transition-colors duration-200 text-center"
              >
                {h.hero.ctaPrimary}
              </Link>
              <Link
                href="/en/cases"
                className="px-8 py-4 border border-off-white/30 text-off-white font-body text-sm tracking-wide uppercase hover:border-amber hover:text-amber transition-colors duration-200 text-center"
              >
                {h.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF NUMBERS */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-gray-text mb-16 text-center">
            {h.proof.eyebrow}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {h.proof.items.map((item) => (
              <div key={item.num} className="border-t border-amber pt-8">
                <p
                  className="font-display text-navy leading-none mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  {item.num}
                </p>
                <p className="font-body font-medium text-navy text-sm uppercase tracking-wide mb-2">
                  {item.label}
                </p>
                <p className="font-body text-gray-text text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-gray-text text-center mt-12">
            {h.proof.disclaimer}
          </p>
        </div>
      </section>

      {/* METHOD */}
      <section className="bg-navy py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">
              {h.method.eyebrow}
            </p>
            <h2
              className="font-display text-off-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {h.method.h2[0]}
              <br />
              {h.method.h2[1]}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {h.method.cards.map((card) => (
              <div
                key={card.badge}
                className="bg-navy-mid p-8 border-t-2"
                style={{ borderTopColor: card.color }}
              >
                <span
                  className="inline-block px-3 py-1 text-off-white font-body text-xs tracking-widest uppercase mb-6"
                  style={{ backgroundColor: card.color }}
                >
                  {card.badge}
                </span>
                <p className="font-body text-amber text-xs uppercase tracking-wide mb-4">
                  {card.sub}
                </p>
                <h3 className="font-display text-off-white text-2xl mb-4">{card.h3}</h3>
                <p className="font-body text-off-white/60 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">
                {h.forWhom.eyebrow}
              </p>
              <h2
                className="font-display text-navy mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {h.forWhom.h2[0]}
                <br />
                {h.forWhom.h2[1]}
              </h2>
              <p className="font-body text-gray-text leading-relaxed">{h.forWhom.body}</p>
            </div>
            <div className="flex flex-col gap-6">
              {h.forWhom.items.map((item) => (
                <div key={item.title} className="border-l-2 border-amber pl-6">
                  <p className="font-body font-medium text-navy mb-2">{item.title}</p>
                  <p className="font-body text-gray-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">
            {h.founders.eyebrow}
          </p>
          <h2
            className="font-display text-navy mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {h.founders.h2[0]}
            <br />
            {h.founders.h2[1]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy p-10">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-6">
                {h.founders.gabriela.role}
              </p>
              <h3 className="font-display text-off-white text-3xl mb-4">
                {h.founders.gabriela.name}
              </h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed mb-6">
                {h.founders.gabriela.body}
              </p>
              <p className="font-body text-amber text-sm italic">{h.founders.gabriela.quote}</p>
            </div>
            <div className="bg-cream border border-amber/20 p-10">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-6">
                {h.founders.celso.role}
              </p>
              <h3 className="font-display text-navy text-3xl mb-4">
                {h.founders.celso.name}
              </h3>
              <p className="font-body text-gray-text text-sm leading-relaxed mb-6">
                {h.founders.celso.body}
              </p>
              <p className="font-body text-amber text-sm italic">{h.founders.celso.quote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2
            className="font-display text-navy mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {h.cta.h2}
          </h2>
          <p className="font-body text-navy/70 text-lg mb-10 max-w-xl mx-auto">{h.cta.body}</p>
          <Link
            href="/en/contact"
            className="inline-block px-10 py-4 bg-navy text-off-white font-body text-sm tracking-wide uppercase hover:bg-navy-mid transition-colors duration-200"
          >
            {h.cta.btn}
          </Link>
        </div>
      </section>
    </>
  )
}
