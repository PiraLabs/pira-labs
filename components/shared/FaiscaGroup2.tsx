import { CTAWithMicrocopy } from "./CTAWithMicrocopy";

type FaiscaGroup2Props = {
  className?: string;
};

export function FaiscaGroup2({ className = "" }: FaiscaGroup2Props) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Palestras */}
        <div className="border border-teal/40 rounded-lg p-8 bg-deep-teal">
          <h3 className="text-xl font-body font-semibold text-off-white mb-2">
            Palestras
          </h3>
          <p className="text-xs font-body text-off-white/40 mb-4">
            Gabriela e/ou Celso · Presencial ou remoto · 45 a 90 min com Q&A
          </p>
          <p className="text-off-white/80 font-body text-sm leading-relaxed mb-5">
            Três trilhas disponíveis: Negócio e Mercado, Pessoas e Cultura, Trajetória da Gabriela.
          </p>
          <CTAWithMicrocopy
            label="Consultar disponibilidade"
            href="/contato?origem=faisca_palestras"
            microcopy="Sob consulta. Respondemos em até dois dias úteis."
          />
        </div>

        {/* Workshops */}
        <div className="border border-teal/40 rounded-lg p-8 bg-deep-teal">
          <h3 className="text-xl font-body font-semibold text-off-white mb-2">
            Workshops
          </h3>
          <p className="text-xs font-body text-off-white/40 mb-4">
            Celso conduz · Presencial · Média 4 horas · A partir de R$12.500
          </p>
          <p className="text-off-white/80 font-body text-sm leading-relaxed mb-5">
            Aplicação prática com os casos reais do cliente. A audiência sai com algo feito, não só com algo aprendido.
          </p>
          <CTAWithMicrocopy
            label="Consultar disponibilidade"
            href="/contato?origem=faisca_workshops"
            microcopy="Sob consulta. Respondemos em até dois dias úteis."
          />
        </div>
      </div>
    </div>
  );
}
