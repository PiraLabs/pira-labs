import { SOCIAL } from "@/lib/constants";

type Appearance = {
  label: string;
  href?: string;
};

type MediaKitProps = {
  appearances?: Appearance[];
  pressKitHref?: string;
  className?: string;
};

export function MediaKit({
  appearances = [],
  pressKitHref,
  className = "",
}: MediaKitProps) {
  return (
    <div className={className}>
      <p className="text-off-white/80 font-body text-base leading-relaxed mb-6">
        Para entrevistas, palestras, eventos ou parcerias institucionais, escrever para{" "}
        <a
          href="mailto:inspira@piralabs.com.br"
          className="text-off-white underline hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          aria-label="Enviar email para Pira Labs"
        >
          inspira@piralabs.com.br
        </a>{" "}
        com o contexto.
      </p>

      {appearances.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-3">
            Aparições recentes
          </p>
          <ul className="space-y-2">
            {appearances.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-body text-off-white/60 hover:text-off-white transition-colors"
                  >
                    {item.label}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                ) : (
                  <span className="text-sm font-body text-off-white/60">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        {pressKitHref && (
          <a
            href={pressKitHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body text-off-white/60 underline hover:text-off-white transition-colors"
          >
            Download de bios e fotos em alta resolução
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        )}
        <a
          href={SOCIAL.GABRIELA_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-body text-off-white/60 hover:text-off-white transition-colors"
          aria-label="LinkedIn Gabriela Aguiar (abre em nova aba)"
        >
          LinkedIn Gabriela Aguiar
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
        <a
          href={SOCIAL.CELSO_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-body text-off-white/60 hover:text-off-white transition-colors"
          aria-label="LinkedIn Celso Gama (abre em nova aba)"
        >
          LinkedIn Celso Gama
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </div>
  );
}
