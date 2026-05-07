import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

type PageHeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  subtitle?: string;
};

export function PageHeader({ breadcrumbs, h1, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-20 md:pt-24 mb-10 md:mb-16">
      <div className="container-site">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl md:text-5xl font-semibold text-off-white leading-tight mb-4">
          {h1}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-off-white/80 font-body leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
