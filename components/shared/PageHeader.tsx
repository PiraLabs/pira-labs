import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

type PageHeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  subtitle?: React.ReactNode;
  theme?: "light" | "dark";
};

export function PageHeader({ breadcrumbs, h1, subtitle, theme = "dark" }: PageHeaderProps) {
  const isLight = theme === "light";

  return (
    <div className="pt-20 md:pt-24 pb-10 md:pb-16">
      <div className="container-site">
        <Breadcrumbs items={breadcrumbs} theme={theme} />
        <h1
          className="font-display leading-none mb-6 md:mb-8"
          style={{ color: isLight ? "#05262e" : "#F5F5F2", fontSize: "clamp(52px, 10.2vw, 112px)", fontWeight: 700, letterSpacing: "-0.035em" }}
        >
          {h1}
        </h1>
        {subtitle && (
          <p
            className="font-body leading-relaxed max-w-2xl"
            style={{ color: isLight ? "#1A5568" : "#e8e0d6", fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.6 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
