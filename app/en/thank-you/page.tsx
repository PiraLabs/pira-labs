import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Message received',
  description: 'Message received by PIRA LABS.',
  robots: { index: false, follow: false },
}

export default function ThankYou() {
  return (
    <section className="min-h-screen bg-navy flex items-center">
      <div className="max-w-container mx-auto px-6 py-24">
        <div className="max-w-xl">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-8">
            PIRA LABS
          </p>
          <h1
            className="font-display text-off-white mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Message received.
          </h1>
          <p className="font-body text-off-white/70 text-xl leading-relaxed mb-12">
            We received your message. PIRA LABS will review it and reply through the contact channel provided if there is a clear fit between your request and our work.
          </p>
          <Link
            href="/en"
            className="inline-block px-8 py-4 bg-amber text-navy font-body font-medium tracking-wide uppercase text-sm hover:bg-amber-light transition-colors duration-200"
          >
            Back to website
          </Link>
        </div>
      </div>
    </section>
  )
}
