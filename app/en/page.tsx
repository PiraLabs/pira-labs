export const dynamic = 'force-static';

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { FAQ } from "@/components/shared/FAQ";
import NodeSystem from "@/components/shared/NodeSystem";
import { LogoVideo } from "@/components/shared/LogoVideo";
import { CountUp } from "@/components/home/CountUp";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";
import { faqPageSchema } from "@/lib/schemas/service";

export const metadata: Metadata = {
  title: { absolute: "Creative Business Turnaround · Pira Labs" },
  description:
    "Pira Labs is a Brazilian boutique of Creative Business Turnaround for service businesses that need to act before the window closes.",
  alternates: {
    canonical: "https://piralabs.com.br/en",
    languages: {
      "pt-BR": "https://piralabs.com.br/",
      "x-default": "https://piralabs.com.br/",
    },
  },
  openGraph: {
    title: "PIRA LABS · Creative Business Turnaround",
    description:
      "Brazilian boutique of Creative Business Turnaround for service businesses. We enter before the business model becomes a crisis.",
    url: "https://piralabs.com.br/en",
    locale: "en_US",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "PIRA LABS · Creative Business Turnaround" }],
  },
};

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/en" },
]);

const faqItems = [
  {
    question: "How much does it cost to work with Pira Labs?",
    answer:
      "Each project is sized individually. Entry products have public pricing: Oxigênio IA Search Fast R$3,500 / Full R$5,300. Pocket do INSPIRA R$3,900. Imersão em IA R$7,100. For INSPIRA and TRANSPIRA, the investment is defined after the first conversation.",
  },
  {
    question: "How long does it take?",
    answer:
      "Depends on the product. Oxigênio: up to 5 business days. Pocket do INSPIRA: a single 1.5h session. Imersão em IA: 3 sessions, 5.5h total. Full INSPIRA: 4 to 6 weeks. TRANSPIRA: 2 to 6 months depending on scope and configuration.",
  },
  {
    question: "What if I don't know exactly what I need?",
    answer:
      "The first conversation is exactly that. No commitment. We help name the problem before proposing any solution.",
  },
  {
    question: "How does the first contact work?",
    answer:
      "You send a message through the form. Within 2 business days Gabriela and Celso respond. Initial conversation of 30 to 45 minutes. If it makes sense for both sides, a proposal within 5 business days.",
  },
  {
    question: "Do you work with international companies?",
    answer: "Yes. We work in Portuguese and English.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/en#webpage",
  url: "https://piralabs.com.br/en",
  name: "Creative Business Turnaround · Pira Labs",
  description:
    "Pira Labs is a Brazilian boutique of Creative Business Turnaround for service businesses that need to act before the window closes.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "en",
};

const faqSchema = faqPageSchema(faqItems);

export default function EnHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HOME-1 · HERO */}
      <Section variant="dark" paddingY="xl" id="hero">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <NodeSystem variant="dark" density="sparse" />
          </div>
          <div className="relative max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl text-off-white leading-tight mb-6">
              There is a moment when transforming is still a process, not a crisis.
            </h1>
            <p className="text-lg md:text-xl text-off-white/85 font-body leading-relaxed mb-4">
              Where businesses find propulsion to new heights.
            </p>
            <p className="text-base text-off-white/70 font-body leading-relaxed mb-10">
              Pira Labs is a Brazilian boutique of Creative Business Turnaround for service
              businesses that need to act before the window closes.
            </p>
            <Link
              href="#method"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded bg-orange text-ink font-body font-medium text-base transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Understand the method
            </Link>
          </div>
        </div>
      </Section>

      {/* HOME-2 · SIGNALS */}
      <Section variant="default" paddingY="lg">
        <p className="text-sm font-body font-medium text-orange uppercase tracking-widest mb-4">
          When the operation starts costing more than it should
        </p>
        <p className="text-off-white/80 font-body leading-relaxed mb-10 max-w-2xl">
          In six months, <strong>79 percentage points of margin</strong> recovered without
          increasing revenue, in one founder trajectory evidence. The problem was exactly
          where nobody was looking. That kind of signal is what Pira Labs finds before
          recommending any solution. Five signals of when the model starts showing its cost:
        </p>
        <ul className="space-y-6 mb-8 max-w-2xl">
          {[
            "The business grows, but the margin disappears. Effort increases, results stay the same.",
            "Every important decision goes through the founder. The team waits.",
            "The operation only works because some people do what isn't their role.",
            "The company adopted AI. The result was accelerating the noise that already existed.",
            "In AI-powered searches, auto-generated lists and market recommendations, the company doesn't appear — or appears incorrectly.",
          ].map((signal, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="shrink-0 text-orange font-body font-semibold text-sm mt-1"
                aria-hidden="true"
              >
                {i + 1}.
              </span>
              <p className="text-off-white/80 font-body leading-relaxed">{signal}</p>
            </li>
          ))}
        </ul>
        <p className="text-off-white/60 font-body italic">
          If you recognized more than one, keep reading.
        </p>
      </Section>

      {/* HOME-3 · METHOD */}
      <Section variant="highlighted" paddingY="lg" id="method">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <NodeSystem variant="dark" density="medium" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-body font-semibold text-off-white mb-3">
              The method
            </h2>
            <p className="text-off-white/75 font-body mb-12 max-w-2xl">
              Three moves. Three phases. Not a metaphor. That is how the business moves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-ink/60 rounded-lg p-8 backdrop-blur-sm">
                <p className="text-orange font-body font-semibold text-sm uppercase tracking-widest mb-2">
                  INSPIRA
                </p>
                <p className="text-off-white font-body font-medium text-lg mb-4">
                  When you stop solving the wrong problem.
                </p>
                <p className="text-off-white/80 font-body leading-relaxed mb-6">
                  The diagnosis. Six layers in sequence, converging into integrated synthesis
                  with human approval at each step. No recommendation before all readings are
                  integrated. Gabriela Aguiar leads. The result is the real problem named,
                  the route drawn, and the next step defined.
                </p>
                <Link
                  href="/inspira"
                  className="text-sm font-body font-medium text-off-white hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  See INSPIRA →
                </Link>
              </div>

              <div className="bg-ink/60 rounded-lg p-8 backdrop-blur-sm">
                <p className="text-orange font-body font-semibold text-sm uppercase tracking-widest mb-2">
                  TRANSPIRA
                </p>
                <p className="text-off-white font-body font-medium text-lg mb-4">
                  When <em className="emphasis-italic">right work</em> replaces <em className="emphasis-italic">too much work</em>.
                </p>
                <p className="text-off-white/80 font-body leading-relaxed mb-6">
                  The execution. It happens inside the client&apos;s operation, with the team
                  that will operate afterwards. Redesigns the relationship between work, value,
                  technology and governance. Pira Labs does not leave when the deadline ends.
                  It leaves when the agreed results are verified. Celso Gama leads.
                </p>
                <Link
                  href="/transpira"
                  className="text-sm font-body font-medium text-off-white hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  See TRANSPIRA →
                </Link>
              </div>
            </div>

            <LogoVideo hasVideo={false} className="mb-10 max-w-sm" />

            <p className="text-off-white/70 font-body leading-relaxed mb-10 max-w-2xl">
              When clarity arrives, the rhythm returns. The business decides. The company grows
              without constant improvisation. That is RESPIRA. A state, not a product.
            </p>

            <div className="bg-ink/50 border border-teal/30 rounded-lg p-6 max-w-2xl">
              <p className="text-off-white/85 font-body leading-relaxed mb-4">
                Want to start with a closed scope and defined timeline? Oxigênio IA Search
                diagnoses how your company appears in AI engines. Fast R$3,500 · Full R$5,300.
                Delivered in up to 5 business days.
              </p>
              <Link
                href="/inspira/oxigenio"
                className="text-sm font-body font-medium text-off-white hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                Learn about Oxigênio →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* HOME-4 · PROOFS */}
      <Section variant="default" paddingY="lg" id="proofs">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <NodeSystem variant="dark" density="dense" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-body font-semibold text-off-white mb-3">
              What real operations taught us
            </h2>
            <p className="text-off-white/75 font-body mb-10 max-w-2xl">
              Not shelf theory. This is what we learned by making mistakes, correcting course,
              and delivering. Three founder trajectory evidences, before Pira Labs as a company:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal/20 border border-teal/40 rounded-lg p-8">
                <p
                  className="font-display text-5xl text-orange mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  R$16M{" → "}
                  <CountUp prefix="R$" end={163} suffix="M" duration={1.2} />
                </p>
                <p className="text-xs font-body text-off-white/40 uppercase tracking-widest mb-4">
                  pre-AI
                </p>
                <p className="text-off-white/80 font-body text-sm leading-relaxed">
                  Restructuring of the activation and events area of a multinational agency.
                  Two years of redesigned operations culminated in coordinating 600 people and
                  100 vendors for a major technology brand&apos;s global sponsorship at the Rio 2016 Games.
                </p>
              </div>

              <div className="bg-teal/20 border border-teal/40 rounded-lg p-8">
                <p
                  className="font-display text-5xl text-orange mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {"-64%"}{" → "}
                  <CountUp prefix="+" end={15} suffix="%" duration={1.2} />
                </p>
                <p className="text-xs font-body text-off-white/40 uppercase tracking-widest mb-4">
                  pre-AI
                </p>
                <p className="text-off-white/80 font-body text-sm leading-relaxed">
                  Advertising account of a beverages multinational, served by the agency where
                  Celso led operations. Process and metrics review recovered 79 percentage points
                  of margin in 6 months, without increasing revenue.
                </p>
              </div>

              <div className="bg-teal/20 border border-teal/40 rounded-lg p-8">
                <p
                  className="font-display text-5xl text-orange mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {"400h"}{" → "}
                  <CountUp end={36} suffix="h" duration={1.2} />
                </p>
                <p className="text-xs font-body text-off-white/40 uppercase tracking-widest mb-4">
                  post-AI · human supervision
                </p>
                <p className="text-off-white/80 font-body text-sm leading-relaxed">
                  High-volume legal operation. Well-applied AI supervised by humans freed
                  capacity worth R$160k in additional monthly billing with the same team the
                  client already had.
                </p>
              </div>
            </div>

            <p className="text-off-white/60 font-body text-sm leading-relaxed max-w-3xl">
              The first two came from process redesign, before the current AI wave. The third
              came after, with AI applied and human supervision. In all of them, results came
              from looking where nobody was looking.
            </p>
          </div>
        </div>
      </Section>

      {/* HOME-5 · FAÍSCA teaser */}
      <Section variant="dark" paddingY="lg">
        <h2 className="text-3xl md:text-4xl font-body font-semibold text-off-white mb-3">
          FAÍSCA · the entry point
        </h2>
        <p className="text-off-white/75 font-body mb-10 max-w-2xl">
          Short-engagement programs that teach, awaken or provoke before any larger
          commitment. Three groups, seven products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="border-t border-orange/40 pt-6">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
              Group 1
            </p>
            <h3 className="text-off-white font-body font-medium mb-3">
              Fast entry: fixed price, no friction
            </h3>
            <p className="text-off-white/65 font-body text-sm leading-relaxed">
              Imersão em IA (R$7,100) · Oxigênio IA Search (R$3,500/R$5,300) · Pocket do INSPIRA
              (R$3,900)
            </p>
          </div>
          <div className="border-t border-orange/40 pt-6">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
              Group 2
            </p>
            <h3 className="text-off-white font-body font-medium mb-3">
              Authority and relationship
            </h3>
            <p className="text-off-white/65 font-body text-sm leading-relaxed">
              Talks · Workshops
            </p>
          </div>
          <div className="border-t border-orange/40 pt-6">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
              Group 3
            </p>
            <h3 className="text-off-white font-body font-medium mb-3">Selective offering</h3>
            <p className="text-off-white/65 font-body text-sm leading-relaxed">
              C-level as a Service · FAÍSCA Jurídica
            </p>
          </div>
        </div>
        <Link
          href="/faisca"
          className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded border border-off-white text-off-white bg-transparent font-body font-medium text-base transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          Learn about FAÍSCA
        </Link>
      </Section>

      {/* HOME-6 · FOUNDERS teaser */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl">
          <Image
            src="/nos.png"
            alt="Gabriela Aguiar and Celso Gama, co-founders of Pira Labs"
            width={800}
            height={533}
            className="rounded-lg w-full object-cover mb-8"
            priority={false}
          />
          <p className="text-off-white/90 font-body leading-relaxed text-lg mb-4">
            Pira Labs is a boutique by choice, not by stage. Each project has Gabriela and
            Celso from diagnosis to delivery. No intermediary layer between the person who
            understands the problem and the person who solves it.
          </p>
          <p className="text-off-white/65 font-body leading-relaxed mb-8">
            Nearly a decade connecting global organizations in technology, innovation and
            executive education. More than 25 years of operations in multinationals. The
            combination is not common. It is what sustains every decision.
          </p>
          <Link
            href="/en/about"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded border border-off-white text-off-white bg-transparent font-body font-medium text-base transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            Meet Gabriela and Celso
          </Link>
        </div>
      </Section>

      {/* HOME-7 · FAQ */}
      <Section variant="dark" paddingY="lg">
        <FAQ heading="Questions from those arriving now" items={faqItems} />
      </Section>

      {/* HOME-8 · CTA FINAL */}
      <section className="bg-ink section-padding">
        <div className="container-site text-center">
          <p className="font-display text-2xl md:text-4xl italic text-orange mb-10 leading-snug max-w-2xl mx-auto">
            There is a next level for your business. What stands between you and it, we
            discover together.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/en/contact?origem=home_en"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded bg-orange text-ink font-body font-medium text-base transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Breathe
            </Link>
            <p className="text-sm font-body text-off-white/60">
              Initial conversation, no commitment. We respond within two business days.
            </p>
          </div>
          <p className="mt-10 font-display text-lg italic text-off-white/40">
            Inspira. Transpira. Respira.
          </p>
          <p className="mt-1 font-body text-sm text-off-white/30">We unlock the next level.</p>
        </div>
      </section>
    </>
  );
}
