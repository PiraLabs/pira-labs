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
      <p className="font-body text-base leading-relaxed mb-6" style={{ color: "rgba(245,245,242,0.80)" }}>
        Para entrevistas, palestras, eventos ou parcerias institucionais, escrever para{" "}
        <a
          href="mailto:inspira@piralabs.com.br"
          style={{ color: "#F5F5F2", textDecoration: "underline" }}
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

      <div className="flex flex-col gap-3 mt-6">
        {pressKitHref && (
          <a
            href={pressKitHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(245,245,242,0.60)", textDecoration: "none" }}
          >
            Download de bios e fotos em alta resolução
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        )}
        <a
          href={SOCIAL.GABRIELA_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-flex items-center gap-2"
          style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(245,245,242,0.60)", textDecoration: "none" }}
          aria-label="LinkedIn Gabriela Aguiar (abre em nova aba)"
        >
          LinkedIn Gabriela Aguiar
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href={SOCIAL.CELSO_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-flex items-center gap-2"
          style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(245,245,242,0.60)", textDecoration: "none" }}
          aria-label="LinkedIn Celso Gama (abre em nova aba)"
        >
          LinkedIn Celso Gama
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
