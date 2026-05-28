import Link from "next/link";

type CTAWithMicrocopyProps = {
  label: string;
  href: string;
  microcopy?: string;
  variant?: "primary" | "outline";
};

export function CTAWithMicrocopy({
  label,
  href,
  microcopy = "Respondemos em até dois dias úteis.",
  variant = "primary",
}: CTAWithMicrocopyProps) {
  const base =
    "inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded font-body font-medium text-base transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange";

  const styles =
    variant === "primary"
      ? `${base} bg-orange text-ink`
      : `${base} border border-off-white text-off-white bg-transparent`;

  return (
    <div className="flex flex-col items-start gap-2">
      <Link href={href} className={styles}>
        {label}
      </Link>
      {microcopy && (
        <p className="text-sm font-body text-off-white/60">{microcopy}</p>
      )}
    </div>
  );
}
