import Link from "next/link";

type FaiscaGroup1Props = {
  className?: string;
};

const products = [
  {
    name: "Imersão em IA",
    price: "R$7.100",
    conductor: "Celso conduz",
    description: "3 sessões de trabalho com os casos reais do cliente. Do diagnóstico de uso à operação com IA integrada.",
    href: "/faisca/imersa-em-ia",
  },
  {
    name: "Oxigênio IA Search",
    price: "Fast R$3.500 · Full R$5.300",
    conductor: null,
    description: "Diagnóstico de presença e citabilidade em plataformas de IA Search. Saber onde a empresa aparece, onde não aparece e por quê.",
    href: "/inspira/oxigenio",
  },
  {
    name: "Pocket do INSPIRA",
    price: "R$3.900",
    conductor: "Gabriela + Celso",
    description: "Leitura rápida e estruturada antes de decidir o próximo passo. Uma sessão que nomeia o problema sem comprometer um projeto completo.",
    href: "/faisca/pocket",
  },
];

export function FaiscaGroup1({ className = "" }: FaiscaGroup1Props) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {products.map((product) => (
          <div
            key={product.href}
            className="border border-teal/40 rounded-lg p-6 bg-deep-teal flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-lg font-body font-semibold text-off-white mb-1">
                {product.name}
              </h3>
              <p className="text-orange font-body font-medium text-sm mb-1">
                {product.price}
              </p>
              {product.conductor && (
                <p className="text-xs font-body text-off-white/40 mb-4">
                  {product.conductor}
                </p>
              )}
              {!product.conductor && <div className="mb-4" />}
              <p className="text-off-white/70 font-body text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="mt-6">
              <Link
                href={product.href}
                className="inline-flex items-center text-sm font-body font-medium text-off-white hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                Conhecer
                <span className="ml-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Nota de postura */}
      <p className="text-xs font-body text-off-white/40 leading-relaxed">
        Preço fixo e escopo fechado. O fundador sabe o que compra antes de assinar.
      </p>
    </div>
  );
}
