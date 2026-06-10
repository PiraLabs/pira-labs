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
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ color: "#F5F5F2" }}>
          {h1}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl font-body leading-relaxed max-w-2xl" style={{ color: "#e8e0d6" }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
