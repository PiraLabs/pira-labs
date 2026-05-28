type TargetProfileProps = {
  heading?: string;
  items: string[];
  notForItems?: string[];
  className?: string;
};

export function TargetProfile({
  heading = "Para quem é",
  items,
  notForItems,
  className = "",
}: TargetProfileProps) {
  return (
    <div className={className}>
      {heading && (
        <h2 className="text-2xl md:text-3xl font-body font-semibold text-off-white mb-6">
          {heading}
        </h2>
      )}

      <div className={`grid grid-cols-1 ${notForItems?.length ? "md:grid-cols-2" : ""} gap-8`}>
        {/* Para quem é */}
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-orange font-body font-semibold text-sm shrink-0 mt-0.5" aria-hidden="true">
                +
              </span>
              <p className="text-off-white/80 font-body text-base leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>

        {/* Filtro negativo */}
        {notForItems && notForItems.length > 0 && (
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/30 mb-4">
              Não faz sentido se
            </p>
            <ul className="space-y-3">
              {notForItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-off-white/30 font-body font-semibold text-sm shrink-0 mt-0.5" aria-hidden="true">
                    –
                  </span>
                  <p className="text-off-white/50 font-body text-base leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
