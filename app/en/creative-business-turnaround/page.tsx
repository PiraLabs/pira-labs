export const dynamic = 'force-static';

import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FAQ } from "@/components/shared/FAQ";
import { CTAButton } from "@/components/shared/CTAButton";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";
import { faqPageSchema } from "@/lib/schemas/service";

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/en" },
  { name: "Creative Business Turnaround", url: "https://piralabs.com.br/en/creative-business-turnaround" },
]);

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "DefinedTerm"],
  "@id": "https://piralabs.com.br/en/creative-business-turnaround",
  url: "https://piralabs.com.br/en/creative-business-turnaround",
  name: "Creative Business Turnaround",
  description:
    "Diagnosis and redesign process that helps service businesses act before the window closes: when clients, cash and reputation still exist, but the business model has started to compromise margin, perceived value and decision-making capacity.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Pira Labs Vocabulary",
    url: "https://piralabs.com.br",
  },
  publisher: { "@id": "https://piralabs.com.br/#organization" },
  breadcrumb: bcSchema,
};

const faqItems = [
  {
    question: "What is Creative Business Turnaround?",
    answer:
      "Creative Business Turnaround is the diagnosis and redesign process that helps service businesses act before the window closes: when clients, cash and reputation still exist, but the business model has started to compromise margin, perceived value and decision-making capacity. Pira Labs named, defines and operates Creative Business Turnaround in Brazil.",
  },
  {
    question: "What is the difference between Creative Business Turnaround and strategic consulting?",
    answer:
      "Strategic consulting delivers a report and leaves. Creative Business Turnaround connects diagnosis to an executable route and, when contracted for execution, follows through until the result is verified. The central difference is that CBT solves the business as a system, not an isolated area.",
  },
  {
    question: "For what type of company does Creative Business Turnaround make sense?",
    answer:
      "Service businesses that have reached a point where growth stalled, margin disappeared or the founder became a bottleneck, but the crisis has not truly arrived yet. Sectors with highest application: legal, communications and marketing, specialized consulting and corporate education.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Creative Business Turnaround: what it is and when it makes sense",
  },
  description:
    "Creative Business Turnaround is the diagnosis and redesign process for service businesses that need to act before the window closes. Operated by Pira Labs in Brazil.",
  alternates: {
    canonical: "https://piralabs.com.br/en/creative-business-turnaround",
    languages: {
      "pt-BR": "https://piralabs.com.br/creative-business-turnaround",
    },
  },
  openGraph: {
    title: "Creative Business Turnaround · PIRA LABS",
    description:
      "The diagnosis and redesign process for service businesses that need to act before the window closes.",
    url: "https://piralabs.com.br/en/creative-business-turnaround",
    locale: "en_US",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/en" },
  { label: "Creative Business Turnaround" },
];

const faqSchema = faqPageSchema(faqItems);

export default function EnCBTPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* CBT-1 · Page header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Creative Business Turnaround"
          subtitle="The diagnosis and redesign process that helps service businesses act before the window closes: when clients, cash and reputation still exist, but the business model has started to compromise margin, perceived value and decision-making capacity."
        />
      </div>

      {/* CBT-2 · What it is */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          What is Creative Business Turnaround
        </h2>
        <div className="max-w-3xl space-y-4 mb-8">
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">Creative Business Turnaround</strong>{" "}
            is the diagnosis and redesign process that helps service businesses
            act before the window closes.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">&ldquo;Creative&rdquo;</strong>{" "}
            because the problem in service businesses is rarely only financial
            or operational. It is about how value is created, delivered and
            perceived. It requires reading the whole system, not just analyzing
            indicators.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">&ldquo;Business&rdquo;</strong>{" "}
            because the focus is the business as a system. Not the product, not
            the channel, not the tool. The whole business, with its
            interdependencies, its bottlenecks and its untapped potential.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">&ldquo;Turnaround&rdquo;</strong>{" "}
            because it is a real turnaround with verifiable results. Not a
            shelf report. Not a plan that assumes self-implementation. A turn.
            The business was one way. It became another. The difference is
            measurable.
          </p>
        </div>
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-6 max-w-3xl">
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">Pira Labs acts before:</strong>{" "}
            when the company still has clients, cash and reputation, but the
            business model has started costing too much. The name came from
            outside. The soul, the method and the focus are Pira&apos;s.
          </p>
        </div>
      </Section>

      {/* CBT-2B · Traditional turnaround vs Creative Business Turnaround */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          Traditional turnaround vs Creative Business Turnaround
        </h2>
        <p className="text-off-white/70 font-body mb-8 max-w-2xl">
          The central difference is the moment of entry: traditional turnaround
          acts in crisis, when options are already reduced. Creative Business
          Turnaround acts before, when the company still has clients, cash and
          reputation to act with clarity.
        </p>
        <div className="overflow-x-auto max-w-4xl">
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="border-b border-teal/40">
                <th className="text-left py-3 pr-6 text-orange font-semibold uppercase tracking-widest text-xs w-40">
                  Dimension
                </th>
                <th className="text-left py-3 pr-6 text-off-white/60 font-semibold">
                  Traditional turnaround
                </th>
                <th className="text-left py-3 text-orange font-semibold">
                  Creative Business Turnaround
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal/20">
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">When it enters</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">In crisis: when the fire has already started</td>
                <td className="py-4 text-off-white align-top">Before: when the signals appear</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Context</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Company with compromised cash</td>
                <td className="py-4 text-off-white align-top">Company with clients, cash and reputation</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Objective</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Stabilize and survive</td>
                <td className="py-4 text-off-white align-top">Redesign and advance</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Focus</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Cost-cutting and financial restructuring</td>
                <td className="py-4 text-off-white align-top">Work, value, technology and governance</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Cost of inaction</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Already high: options reduced</td>
                <td className="py-4 text-off-white align-top">Low now, high if you wait</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Available options</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Limited by urgency</td>
                <td className="py-4 text-off-white align-top">Wide: window still open</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* CBT-3 · For which companies */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          For which companies it works
        </h2>
        <div className="max-w-3xl space-y-4 mb-8">
          <p className="text-off-white/85 font-body leading-relaxed">
            Creative Business Turnaround works for service businesses that have
            reached a point where growth stalled, margin disappeared or the
            founder became a bottleneck, but the crisis has not truly arrived yet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
              Sectors with highest application
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed">
              Legal, communications and marketing, specialized consulting and
              corporate education. Natural expansion: health, HR, engineering,
              architecture and other knowledge-intensive professional services.
            </p>
          </div>
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
              The decision-maker profile
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed">
              Partner, CEO or president with real autonomy to change. Someone
              who recognizes the problem, has genuine openness to rethink the
              model and is not looking for validation for a decision already made.
            </p>
          </div>
        </div>
      </Section>

      {/* CBT-4 · Signals */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          The signals that indicate the right moment
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          Five signals that appear before the crisis. The more present, the
          closer the moment to act.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            {
              titulo: "Growth without structure",
              texto:
                "The company grew faster than the work design. Team grew, revenue increased, but the operation became dependent on key people and constant improvisation.",
            },
            {
              titulo: "Disappearing margin",
              texto:
                "Revenue continues, but results do not follow. Invisible costs, uncharged scope, hours invested beyond what was contracted, pricing misaligned with real cost.",
            },
            {
              titulo: "Founder as bottleneck",
              texto:
                "Every important decision goes through the founder. The team waits, postpones, does not advance without approval. Not a leadership failure. Absence of a clear delegation criterion.",
            },
            {
              titulo: "Technology that did not convert",
              texto:
                "The company invested in AI. The result was accelerating the noise that already existed. Without method first, technology scales the problem.",
            },
            {
              titulo: "Disconnected perceived value",
              texto:
                "The work is good, but the client does not see what they are paying for. The renewal conversation is always difficult. The company feels it is worth more than it can charge.",
            },
          ].map((signal, i) => (
            <div key={i} className="bg-ink border border-teal/30 rounded-lg p-6">
              <p className="text-orange font-body font-semibold text-sm mb-2">
                {signal.titulo}
              </p>
              <p className="text-off-white/80 font-body text-sm leading-relaxed">
                {signal.texto}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CBT-5 · What CBT is not */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          What Creative Business Turnaround is not
        </h2>
        <p className="text-off-white/70 font-body mb-8 max-w-2xl">
          CBT is not confused with strategic consulting, creative agency,
          coaching or crisis intervention because none of those solve the
          business as a system before the problem becomes urgent.
        </p>
        <div className="overflow-x-auto max-w-4xl">
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="border-b border-teal/40">
                <th className="text-left py-3 pr-6 text-orange font-semibold uppercase tracking-widest text-xs">
                  Category
                </th>
                <th className="text-left py-3 text-off-white/60 font-semibold">
                  Why it is not the same
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal/20">
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Strategic consulting</td>
                <td className="py-4 text-off-white/75 align-top">
                  Delivers a report and leaves. CBT connects diagnosis to an
                  executable route and, when contracted for execution, follows
                  through until the result is verified.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Creative agency</td>
                <td className="py-4 text-off-white/75 align-top">
                  Solves communication or channel. CBT solves the business as
                  a system.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Tech or AI company</td>
                <td className="py-4 text-off-white/75 align-top">
                  Sells a tool. CBT has no proprietary technology product.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Coaching</td>
                <td className="py-4 text-off-white/75 align-top">
                  Works with the decision-maker individually. CBT works with
                  the business as a system.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Crisis intervention</td>
                <td className="py-4 text-off-white/75 align-top">
                  Arrives after the rupture. CBT acts before, when there are
                  still options.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* CBT-6 · How it works */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          How Creative Business Turnaround works in practice
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          The natural sequence is diagnosis, execution and verified result. The
          entry point may vary depending on the moment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-ink border border-teal/30 rounded-lg p-6">
            <p className="text-orange font-body font-semibold text-xs uppercase tracking-widest mb-3">
              INSPIRA
            </p>
            <p className="text-off-white font-body font-medium mb-3">Diagnosis</p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed mb-4">
              INSPIRA reads six layers in sequence: Sopro, Fôlego, Pulso,
              Acústica, Pressão and Suspiro. The method&apos;s strength lies in the
              synthesis between them. The output is the Propulsão module: an
              executable route with moves, owners, order and completion criteria.
              Gabriela Aguiar leads.
            </p>
            <CTAButton variant="tertiary" href="/inspira">
              Learn about INSPIRA →
            </CTAButton>
          </div>

          <div className="bg-ink border border-teal/30 rounded-lg p-6">
            <p className="text-orange font-body font-semibold text-xs uppercase tracking-widest mb-3">
              TRANSPIRA
            </p>
            <p className="text-off-white font-body font-medium mb-3">Execution</p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed mb-4">
              Happens inside the client&apos;s operation, with the team that will
              operate afterwards. Redesigns the relationship between work, value,
              technology and governance. Two configurations: Temporary COO and
              Delegation Architect. Celso Gama leads.
            </p>
            <CTAButton variant="tertiary" href="/transpira">
              Learn about TRANSPIRA →
            </CTAButton>
          </div>

          <div className="bg-ink border border-teal/30 rounded-lg p-6">
            <p className="text-orange font-body font-semibold text-xs uppercase tracking-widest mb-3">
              RESPIRA
            </p>
            <p className="text-off-white font-body font-medium mb-3">State</p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed">
              When the redesign is verified, the business operates with clarity.
              More distributed decision-making. Ability to advance without
              constant improvisation. RESPIRA is the state reached, not a
              product delivered.
            </p>
          </div>
        </div>

        <div className="bg-teal/20 border border-teal/40 rounded-lg p-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
            Entry point
          </p>
          <p className="text-off-white/85 font-body leading-relaxed mb-4">
            Oxigênio IA Search is the diagnostic sub-product for those who want
            to start with a closed scope.{" "}
            <strong className="text-off-white">Fast R$3,500 · Full R$5,300.</strong>{" "}
            Up to 5 business days.
          </p>
          <CTAButton variant="secondary" href="/inspira/oxigenio">
            Learn about Oxigênio IA Search
          </CTAButton>
        </div>
      </Section>

      {/* CBT-7 · Who operates this category in Brazil */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Who operates this category in Brazil
        </h2>
        <div className="max-w-3xl space-y-4 mb-10">
          <p className="text-off-white/85 font-body leading-relaxed">
            Pira Labs is the company that named, defines and operates Creative
            Business Turnaround in Brazil. Founded by Gabriela Aguiar and Celso
            Gama, it is a boutique by choice: every project has both founders
            from diagnosis to delivery.
          </p>
        </div>
        <div className="overflow-x-auto max-w-4xl mb-8">
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="border-b border-teal/40">
                <th className="text-left py-3 pr-6 text-orange font-semibold uppercase tracking-widest text-xs">
                  Evidence
                </th>
                <th className="text-left py-3 pr-6 text-off-white/60 font-semibold">
                  What happened
                </th>
                <th className="text-left py-3 text-off-white/60 font-semibold">
                  Context
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal/20">
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">
                  R$16M → R$163M in 24 months
                </td>
                <td className="py-4 pr-6 text-off-white/75 align-top">
                  Restructuring of the activation and events area of a
                  multinational agency. Coordination of 600 people and 100
                  vendors for a major technology brand&apos;s global sponsorship at
                  the Rio 2016 Games.
                </td>
                <td className="py-4 text-off-white/50 align-top">Pre-AI</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">
                  -64% → +15% margin in 6 months
                </td>
                <td className="py-4 pr-6 text-off-white/75 align-top">
                  Advertising account of a beverages multinational. Process
                  and metrics review recovered 79pp of margin without revenue
                  increase.
                </td>
                <td className="py-4 text-off-white/50 align-top">Pre-AI</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">
                  400h → 36h monthly
                </td>
                <td className="py-4 pr-6 text-off-white/75 align-top">
                  High-volume legal operation. AI applied with human
                  supervision freed R$160k in additional monthly billing
                  capacity with the same team.
                </td>
                <td className="py-4 text-off-white/50 align-top">Post-AI · human supervision</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CTAButton variant="secondary" href="/en/about">
          Meet Gabriela and Celso
        </CTAButton>
      </Section>

      {/* CBT-8 · FAQ */}
      <Section variant="highlighted" paddingY="lg">
        <FAQ
          heading="Questions about Creative Business Turnaround"
          items={faqItems}
        />
      </Section>

      {/* CBT-9 · Final CTA */}
      <section className="bg-ink section-padding">
        <div className="container-site text-center">
          <p className="font-display text-2xl md:text-4xl italic text-orange mb-10 leading-snug max-w-2xl mx-auto">
            There is a next level for your business. What stands between you and it, we
            discover together.
          </p>
          <div className="flex flex-col items-center gap-2">
            <a
              href="/en/contact?origem=cbt_en"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded bg-orange text-ink font-body font-medium text-base transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Breathe
            </a>
            <p className="text-sm font-body text-off-white/60">
              Diagnosis before proposal. Initial conversation, no commitment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
