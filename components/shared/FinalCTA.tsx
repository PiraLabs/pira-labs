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
  ctaLabel = "Falar com a Pira Labs",
  showAsterisk = false,
}: FinalCTAProps) {
  return (
    <section className="bg-ink section-padding">
      <div className="container-site text-center">
        <p className="font-display italic mb-8 leading-snug max-w-2xl mx-auto"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: "#F5F5F2" }}>
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
        <p className="mt-4 font-body" style={{ fontSize: "14px", color: "rgba(245,245,242,0.6)" }}>
          Respondemos em até dois dias úteis.
        </p>
      </div>
    </section>
  );
}
