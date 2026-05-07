type SectionProps = {
  variant?: "default" | "highlighted" | "dark";
  fullBleed?: boolean;
  paddingY?: "sm" | "md" | "lg" | "xl";
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const paddingMap = {
  sm: "py-8 md:py-8",
  md: "py-10 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

const variantMap = {
  default: "bg-deep-teal",
  highlighted: "bg-teal",
  dark: "bg-ink",
};

export function Section({
  variant = "default",
  fullBleed = false,
  paddingY = "lg",
  id,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`${variantMap[variant]} ${paddingMap[paddingY]} ${className}`}>
      {fullBleed ? (
        children
      ) : (
        <div className="container-site">{children}</div>
      )}
    </section>
  );
}
