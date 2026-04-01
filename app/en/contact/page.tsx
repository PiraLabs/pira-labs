import type { Metadata } from 'next'
import { dict } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Contact — Request diagnosis',
  description:
    'Get in touch with Pira Labs to request a diagnosis. The first conversation is free and without commitment.',
  alternates: {
    canonical: 'https://piralabs.com.br/en/contact',
    languages: { 'pt-BR': 'https://piralabs.com.br/contato' },
  },
}

const t = dict.en.contato

export default function ContactEn() {
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
            {t.hero.h1}
          </h1>
          <p className="font-body text-off-white/60 text-xl mt-6 max-w-xl">{t.hero.body}</p>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-navy text-3xl mb-8">{t.form.h2}</h2>
              <form
                action="https://formsubmit.co/inspira@piralabs.com.br"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value={t.form.subject} />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://piralabs.com.br/en/contact?sent=true"
                />

                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-gray-text block mb-2">
                    {t.form.name.label}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-navy/20 bg-transparent px-4 py-3 font-body text-sm text-navy placeholder-gray-text/50 focus:outline-none focus:border-amber transition-colors duration-200"
                    placeholder={t.form.name.placeholder}
                  />
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-gray-text block mb-2">
                    {t.form.email.label}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-navy/20 bg-transparent px-4 py-3 font-body text-sm text-navy placeholder-gray-text/50 focus:outline-none focus:border-amber transition-colors duration-200"
                    placeholder={t.form.email.placeholder}
                  />
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-gray-text block mb-2">
                    {t.form.company.label}
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full border border-navy/20 bg-transparent px-4 py-3 font-body text-sm text-navy placeholder-gray-text/50 focus:outline-none focus:border-amber transition-colors duration-200"
                    placeholder={t.form.company.placeholder}
                  />
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-gray-text block mb-2">
                    {t.form.message.label}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full border border-navy/20 bg-transparent px-4 py-3 font-body text-sm text-navy placeholder-gray-text/50 focus:outline-none focus:border-amber transition-colors duration-200 resize-none"
                    placeholder={t.form.message.placeholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-navy text-off-white font-body text-sm tracking-wide uppercase hover:bg-amber hover:text-navy transition-colors duration-200"
                >
                  {t.form.submit}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-amber mb-4">
                  {t.info.emailLabel}
                </p>
                <p className="font-display text-navy text-2xl">inspira@piralabs.com.br</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-amber mb-4">
                  {t.info.locationLabel}
                </p>
                <p className="font-body text-gray-text">{t.info.location}</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-amber mb-4">
                  {t.info.linkedinLabel}
                </p>
                <a
                  href="https://linkedin.com/company/piralabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gray-text hover:text-amber transition-colors duration-200"
                >
                  {t.info.linkedinText}
                </a>
              </div>
              <div className="bg-cream-dark p-8 border-l-4 border-amber">
                <p className="font-display text-navy text-xl mb-3">{t.info.card.title}</p>
                <p className="font-body text-gray-text text-sm leading-relaxed">
                  {t.info.card.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
