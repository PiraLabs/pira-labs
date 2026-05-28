import Link from "next/link";

type CTAButtonProps = {
  variant: "primary" | "secondary" | "tertiary";
  href: string;
  origin?: string;
  external?: boolean;
  withAsterisk?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function CTAButton({
  variant,
  href,
  origin,
  external = false,
  withAsterisk = false,
  className = "",
  children,
}: CTAButtonProps) {
  const resolvedHref = origin
    ? `${href}${href.includes("?") ? "&" : "?"}origem=${origin}`
    : href;

  const baseClass = {
    primary:
      "inline-flex items-center justify-center min-h-[44px] px-8 py-4 rounded bg-orange text-ink font-body font-medium text-base leading-tight transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
    secondary:
      "inline-flex items-center justify-center min-h-[44px] px-8 py-4 rounded border border-off-white text-off-white font-body font-medium text-base leading-tight bg-transparent transition-colors hover:bg-off-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
    tertiary:
      "inline-flex items-center justify-center min-h-[44px] px-2 py-1 text-off-white/70 underline font-body font-medium text-base transition-colors hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
  }[variant];

  const content = (
    <>
      {children}
      {withAsterisk && (
        <span className="ml-0.5 text-sm opacity-70" aria-label="mediante consulta e disponibilidade">
          *
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={resolvedHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
      >
        {content}
        <span className="sr-only">(abre em nova aba)</span>
      </a>
    );
  }

  return (
    <Link href={resolvedHref} className={`${baseClass} ${className}`}>
      {content}
    </Link>
  );
}
