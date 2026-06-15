import { CTAButton } from "./CTAButton";
import type { Origin } from "@/lib/constants";

type FinalCTAProps = {
  heading: string;
  origin: Origin;
  ctaLabel?: string;
  showAsterisk?: boolean;
  className?: string;
  theme?: "dark" | "light";
};

export function FinalCTA({
  heading,
  origin,
  ctaLabel = "Falar com a Pira Labs",
  showAsterisk = false,
  className = "",
  theme = "dark",
}: FinalCTAProps) {
  const bg      = theme === "light" ? "#e8e0d6" : "#05262e"
  const headingColor = theme === "light" ? "#05262e" : "#F5F5F2"
  const microColor   = theme === "light" ? "rgba(5,38,46,0.6)" : "#e8e0d6"
  const ctaVariant   = "primary" as const
  const ctaTheme     = theme === "light" ? "light" : "dark" as const

  return (
    <section className={`section-padding ${className}`} style={{ backgroundColor: bg }}>
      <div className="container-site text-center">
        <h2
          className="font-display mb-8 leading-snug mx-auto"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 300, lineHeight: 1.2, color: headingColor, fontStyle: "normal", maxWidth: '680px' }}
        >
          {heading}
        </h2>
        <CTAButton
          variant={ctaVariant}
          href="/contato"
          origin={origin}
          withAsterisk={showAsterisk}
          theme={ctaTheme}
        >
          {ctaLabel}
        </CTAButton>
        <p className="mt-4 font-body" style={{ fontSize: "14px", color: microColor }}>
          Respondemos em até dois dias úteis.
        </p>
      </div>
    </section>
  );
}
