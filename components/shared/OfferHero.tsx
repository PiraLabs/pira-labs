import { CTAWithMicrocopy } from "./CTAWithMicrocopy";

type PriceTier = {
  label: string;
  price: string;
  description?: string;
};

type OfferHeroProps = {
  name: string;
  subtitle: string;
  priceTiers: PriceTier[];
  conductor?: string;
  ctaLabel?: string;
  ctaHref: string;
  className?: string;
};

export function OfferHero({
  name,
  subtitle,
  priceTiers,
  conductor,
  ctaLabel = "Conhecer",
  ctaHref,
  className = "",
}: OfferHeroProps) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <div>
        <h1 className="text-3xl md:text-5xl font-body font-semibold text-off-white leading-tight mb-4">
          {name}
        </h1>
        <p className="text-lg md:text-xl text-off-white/80 font-body leading-relaxed max-w-2xl">
          {subtitle}
        </p>
        {conductor && (
          <p className="mt-2 text-sm font-body text-off-white/50">{conductor}</p>
        )}
      </div>

      {/* Preços */}
      <div className="flex flex-wrap gap-4">
        {priceTiers.map((tier) => (
          <div
            key={tier.label}
            className="border border-teal/40 rounded-lg px-6 py-4 bg-deep-teal min-w-[160px]"
          >
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-1">
              {tier.label}
            </p>
            <p className="text-2xl font-body font-semibold text-orange">
              {tier.price}
            </p>
            {tier.description && (
              <p className="text-xs font-body text-off-white/50 mt-1 leading-snug">
                {tier.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <CTAWithMicrocopy label={ctaLabel} href={ctaHref} />
    </div>
  );
}
