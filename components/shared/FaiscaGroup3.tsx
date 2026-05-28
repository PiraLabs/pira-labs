import { CTAWithMicrocopy } from "./CTAWithMicrocopy";
import Link from "next/link";

type FaiscaGroup3Props = {
  className?: string;
};

export function FaiscaGroup3({ className = "" }: FaiscaGroup3Props) {
  return (
    <div className={className}>
      <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-6">
        Oferta seletiva — a Pira responde à demanda, não prospecta ativamente
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* C-level as a Service */}
        <div className="border border-off-white/10 rounded-lg p-8">
          <h3 className="text-xl font-body font-semibold text-off-white mb-2">
            C-level as a Service
          </h3>
          <p className="text-xs font-body text-off-white/40 mb-4">
            Gabriela conduz
          </p>
          <p className="text-off-white/80 font-body text-sm leading-relaxed mb-5">
            Presença ativa no processo de decisão do cliente por período definido. Diferente de mentoria: Gabriela atua como C-level fracionado, não como conselheira externa.
          </p>
          <CTAWithMicrocopy
            label="Consultar disponibilidade"
            href="/contato?origem=faisca_clevel"
            microcopy="Escopo, carga e investimento sob consulta e disponibilidade."
          />
        </div>

        {/* FAÍSCA Jurídica */}
        <div className="border border-off-white/10 rounded-lg p-8">
          <h3 className="text-xl font-body font-semibold text-off-white mb-2">
            FAÍSCA Jurídica
          </h3>
          <p className="text-xs font-body text-off-white/40 mb-4">
            Celso conduz
          </p>
          <p className="text-off-white/80 font-body text-sm leading-relaxed mb-5">
            Oficina executiva para escritórios de advocacia, áreas jurídicas corporativas e instituições de ensino. Governança operacional de IA com supervisão humana.
          </p>
          <Link
            href="/faisca/juridica"
            className="inline-flex items-center text-sm font-body font-medium text-off-white hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            Conhecer
            <span className="ml-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
