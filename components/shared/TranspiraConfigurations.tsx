type TranspiraConfigurationsProps = {
  className?: string;
};

export function TranspiraConfigurations({ className = "" }: TranspiraConfigurationsProps) {
  return (
    <div className={className}>
      {/* Cards das duas configurações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Configuração A */}
        <div className="border border-teal/40 rounded-lg p-8 bg-deep-teal">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
            Configuração A
          </p>
          <h3 className="text-xl md:text-2xl font-body font-semibold text-off-white mb-4">
            COO Temporário
          </h3>
          <p className="text-off-white/80 font-body text-base leading-relaxed mb-6">
            O cliente sabe o que precisa fazer. Não tem quem conduza enquanto mantém a operação rodando. A Pira entra como o executivo que falta internamente.
          </p>
          <p className="text-sm font-body text-off-white/50">
            Duração típica: 2 a 3 meses de imersão
          </p>
        </div>

        {/* Configuração B */}
        <div className="border border-teal/40 rounded-lg p-8 bg-deep-teal">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
            Configuração B
          </p>
          <h3 className="text-xl md:text-2xl font-body font-semibold text-off-white mb-4">
            Arquiteto de Delegação
          </h3>
          <p className="text-off-white/80 font-body text-base leading-relaxed mb-6">
            O recurso interno existe, mas sem estrutura, critério nem autoridade para operar sem os fundadores em cada decisão. A Pira instala o que esse recurso precisa para funcionar com autonomia.
          </p>
          <p className="text-sm font-body text-off-white/50">
            Duração típica: 45 a 60 dias de estruturação + acompanhamento
          </p>
        </div>
      </div>

      {/* Encerramento por resultado — diferencial explícito */}
      <div className="border-l-2 border-orange pl-6 mb-6">
        <p className="text-base md:text-lg font-body font-medium text-off-white leading-snug">
          A Pira não sai quando o prazo acaba. Sai quando os primeiros resultados acordados são verificados.
        </p>
      </div>

      {/* Parâmetros comuns */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-orange font-body font-semibold text-sm shrink-0 mt-0.5">—</span>
          <p className="text-sm font-body text-off-white/70">Mínimo de 8 semanas</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-orange font-body font-semibold text-sm shrink-0 mt-0.5">—</span>
          <p className="text-sm font-body text-off-white/70">Dois dias presenciais por semana + pelo menos um dia de acompanhamento remoto</p>
        </div>
      </div>

      {/* Nota de postura */}
      <p className="text-xs font-body text-off-white/40 leading-relaxed">
        A capacidade de condução simultânea é deliberadamente limitada. Esse limite é garantia de profundidade, não restrição operacional.
      </p>
    </div>
  );
}
