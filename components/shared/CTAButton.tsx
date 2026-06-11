import Link from "next/link";

type CTAButtonProps = {
  variant: "primary" | "secondary" | "tertiary";
  href: string;
  origin?: string;
  external?: boolean;
  withAsterisk?: boolean;
  className?: string;
  theme?: "dark" | "light";
  children: React.ReactNode;
};

export function CTAButton({
  variant,
  href,
  origin,
  external = false,
  withAsterisk = false,
  className = "",
  theme = "dark",
  children,
}: CTAButtonProps) {
  const resolvedHref = origin
    ? `${href}${href.includes("?") ? "&" : "?"}origem=${origin}`
    : href;

  const colors = {
    primary: {
      dark: { backgroundColor: "#eb5c2e", color: "#05262e" },
      light: { backgroundColor: "#eb5c2e", color: "#F5F5F2" },
    },
    secondary: {
      dark: { border: "1px solid #F5F5F2", color: "#F5F5F2" },
      light: { border: "1px solid #05262e", color: "#05262e" },
    },
    tertiary: {
      dark: { color: "#e8e0d6" },
      light: { color: "#1A5568" },
    },
  }[variant][theme];

  const baseClass = {
    primary:
      "inline-flex items-center justify-center min-h-[44px] px-8 py-4 rounded font-body font-medium text-base leading-tight transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2",
    secondary:
      "inline-flex items-center justify-center min-h-[44px] px-8 py-4 rounded font-body font-medium text-base leading-tight bg-transparent transition-colors hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2",
    tertiary:
      "inline-flex items-center justify-center min-h-[44px] px-2 py-1 underline font-body font-medium text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
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
        style={colors}
      >
        {content}
        <span className="sr-only">(abre em nova aba)</span>
      </a>
    );
  }

  return (
    <Link href={resolvedHref} className={`${baseClass} ${className}`} style={colors}>
      {content}
    </Link>
  );
}
