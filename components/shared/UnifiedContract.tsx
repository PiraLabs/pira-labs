import { CTAWithMicrocopy } from "./CTAWithMicrocopy";

type UnifiedContractProps = {
  className?: string;
};

export function UnifiedContract({ className = "" }: UnifiedContractProps) {
  return (
    <div className={className}>
      {/* Posicionamento */}
      <p className="text-off-white/80 font-body text-base leading-relaxed mb-8 max-w-2xl">
        Para quem já sabe que precisa de diagnóstico e execução: um contrato, uma decisão, sem interrupção entre as fases. O programa começa no INSPIRA e avança para o TRANSPIRA sem nova rodada de proposta.
      </p>

      {/* Cláusula de pré-condição — condição de entrada */}
      <div className="bg-teal/20 border border-teal rounded-lg p-6 mb-8">
        <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
          Condição de entrada
        </p>
        <p className="text-off-white font-body text-base leading-relaxed">
          O contrato só é assinado com reconhecimento explícito, por escrito ou em conversa documentada, de que o projeto pode exigir redesenho do papel do fundador na operação. Sem esse reconhecimento, não começamos.
        </p>
      </div>

      {/* Duas fases */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="border border-off-white/10 rounded-lg p-6">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            Fase 1
          </p>
          <p className="text-base font-body font-semibold text-off-white mb-1">
            Estrutura Operacional
          </p>
          <p className="text-sm font-body text-off-white/60">
            0 a 3 meses
          </p>
        </div>
        <div className="border border-off-white/10 rounded-lg p-6">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            Fase 2
          </p>
          <p className="text-base font-body font-semibold text-off-white mb-1">
            Posicionamento e Mercado
          </p>
          <p className="text-sm font-body text-off-white/60">
            3 a 12 meses — condicional ao critério verificável da Fase 1
          </p>
        </div>
      </div>

      {/* Nota de flexibilidade */}
      <p className="text-sm font-body text-off-white/50 mb-8">
        O TRANSPIRA pode existir sem o INSPIRA quando o cliente já tem diagnóstico claro.
      </p>

      {/* CTA */}
      <CTAWithMicrocopy
        label="Quero entender esse caminho"
        href="/contato?origem=transpira_unificado"
      />
    </div>
  );
}
