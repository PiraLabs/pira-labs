import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

type PageHeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  subtitle?: React.ReactNode;
};

export function PageHeader({ breadcrumbs, h1, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-20 md:pt-24 mb-10 md:mb-16">
      <div className="container-site">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="font-display font-semibold leading-none mb-4" style={{ color: "#F5F5F2", fontSize: "clamp(48px, 6vw, 88px)", letterSpacing: "-0.02em" }}>
          {h1}
        </h1>
        {subtitle && (
          <p className="font-body leading-relaxed max-w-2xl" style={{ color: "#e8e0d6", fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.6 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
