import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

type PageHeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  lead?: React.ReactNode;
  subtitle?: React.ReactNode;
  theme?: "light" | "dark";
};

export function PageHeader({ breadcrumbs, h1, lead, subtitle, theme = "dark" }: PageHeaderProps) {
  const isLight = theme === "light";

  return (
    <div className="pt-20 md:pt-24 pb-10 md:pb-16">
      <div className="container-site">
        <Breadcrumbs items={breadcrumbs} theme={theme} />
        <h1
          className="type-display mb-6 md:mb-8"
          style={{ color: isLight ? "#05262e" : "#F5F5F2" }}
        >
          {h1}
        </h1>
        {lead && (
          <p
            className="font-display max-w-3xl mb-4"
            style={{
              fontSize: "clamp(1.875rem, 4.4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 600,
              color: isLight ? "#05262e" : "#F5F5F2",
            }}
          >
            {lead}
          </p>
        )}
        {subtitle && (
          <p
            className="type-body max-w-2xl"
            style={{ color: isLight ? "#1A5568" : "#e8e0d6" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
