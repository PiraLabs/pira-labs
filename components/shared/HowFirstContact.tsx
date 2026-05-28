import { CTAWithMicrocopy } from "./CTAWithMicrocopy";
import type { Origin } from "@/lib/constants";

type HowFirstContactProps = {
  ctaHref: string;
  origin?: Origin;
  className?: string;
};

const steps = [
  {
    number: 1,
    title: "Você manda mensagem pelo formulário",
    description: "Descreva o momento da empresa. Não precisa ter tudo resolvido, só ser honesto sobre onde está.",
  },
  {
    number: 2,
    title: "Gabriela e Celso respondem em até 2 dias úteis",
    description: "Lemos com atenção antes de responder. Se não for o momento certo para os dois lados, dizemos diretamente.",
  },
  {
    number: 3,
    title: "Conversa inicial de 30 a 45 minutos",
    description: "Sem compromisso, sem proposta na mesa. Só para entender o que está acontecendo e se faz sentido avançar.",
  },
  {
    number: 4,
    title: "Proposta personalizada em até 5 dias úteis",
    description: "Se fizer sentido para os dois lados, chegamos com uma proposta desenhada para o momento específico da empresa.",
  },
];

export function HowFirstContact({ ctaHref, className = "" }: HowFirstContactProps) {
  return (
    <div className={className}>
      <ol className="space-y-8 mb-10">
        {steps.map((step) => (
          <li key={step.number} className="flex gap-6 items-start">
            <span
              className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-orange text-orange font-body font-semibold text-sm"
              aria-hidden="true"
            >
              {step.number}
            </span>
            <div>
              <h3 className="text-base font-body font-semibold text-off-white mb-1">
                {step.title}
              </h3>
              <p className="text-off-white/70 font-body text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <CTAWithMicrocopy label="Começar a conversa" href={ctaHref} />
    </div>
  );
}
