import { CTAButton } from "./CTAButton";
import type { Origin } from "@/lib/constants";

type FinalCTAProps = {
  heading: string;
  origin: Origin;
  ctaLabel?: string;
  showAsterisk?: boolean;
};

export function FinalCTA({
  heading,
  origin,
  ctaLabel = "Falar com a PIRA LABS",
  showAsterisk = false,
}: FinalCTAProps) {
  return (
    <section className="bg-ink section-padding">
      <div className="container-site text-center">
        <p className="font-display text-2xl md:text-3xl italic text-peach mb-8 leading-snug max-w-2xl mx-auto">
          {heading}
        </p>
        <CTAButton
          variant="primary"
          href="/contato"
          origin={origin}
          withAsterisk={showAsterisk}
        >
          {ctaLabel}
        </CTAButton>
        <p className="mt-4 text-sm text-off-white/60 font-body">
          Respondemos em até dois dias úteis.
        </p>
      </div>
    </section>
  );
}
