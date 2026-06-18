/* HOME-10 · FAQ · fundo Ink #05262e
   details/summary nativo · zero JS · server component
   Perguntas como H3 (GEO) · Schema FAQPage inline
   Sem Ember (Eixo 4: sem fato único a destacar nesta seção;
   marcador gira +→× por movimento, nunca por cor — Eixo 5)
   Lista em coluna de leitura 720px à esquerda (Eixo 7) */

const INK = "#05262e"
const SAND = "#e8e0d6"
const WHITE = "#F5F5F2"

const faqs = [
  {
    pergunta: "No que a Pira Labs é diferente de uma consultoria tradicional?",
    resposta:
      "A Pira Labs trabalha antes da crise, quando o negócio ainda tem clientes, caixa e reputação para agir com opções. Muitas consultorias são chamadas quando o problema já virou crise e a margem de manobra é mínima. O diagnóstico da Pira Labs não repete o que qualquer consultoria entregaria, porque cada empresa de serviços tem uma combinação única de pessoas, processos e tecnologia. A rota de saída também precisa ser única.",
  },
  {
    pergunta: "A Pira Labs é para empresas em crise?",
    resposta:
      "Não necessariamente. A Pira entra melhor quando o negócio ainda pode escolher. Se os sinais já estão presentes mas a empresa ainda tem fôlego para agir, esse é o momento. Crise reduz opções. A Pira trabalha antes que as opções diminuam. Para empresas já em crise aguda, sem caixa para os próximos 30 dias ou em paralisia operacional, indicamos especialistas em turnaround tradicional.",
  },
  {
    pergunta: "Quanto custa trabalhar com a Pira Labs?",
    resposta:
      "A Pira Labs tem entradas de preço fixo e metodologias precificadas por projeto. As entradas da Faísca têm preço público: pocket do INSPIRA a R$ 3.900, Imersão em IA a R$ 7.100, Oxigênio Fast a R$ 3.500 e Full a R$ 5.300. O INSPIRA e o TRANSPIRA são precificados por projeto, após a conversa de calibragem. O primeiro contato é gratuito e sem compromisso.",
  },
  {
    pergunta: "Quanto tempo demora?",
    resposta:
      "Depende do que o negócio precisa. As entradas da Faísca têm duração de dias ou semanas. O INSPIRA leva de 4 a 6 semanas. O TRANSPIRA encerra por resultado verificado, não por prazo. Quando o negócio consegue sustentar o próximo nível sem intervenção contínua, o trabalho está feito.",
  },
  {
    pergunta: "E se eu não sei exatamente o que preciso?",
    resposta:
      "Esse é o ponto de partida mais comum. O INSPIRA existe para isso: nomear o problema real antes de propor qualquer solução. Para quem quer uma leitura inicial antes de comprometer tempo com o diagnóstico completo, o pocket do INSPIRA é a porta de entrada. Chegar sem clareza não é obstáculo. É o começo do trabalho.",
  },
  {
    pergunta: "Como eu começo?",
    resposta:
      "Pelo formulário de contato. Conte onde a operação começou a pesar. Respondemos em até dois dias úteis para entender se faz sentido avançar.",
  },
  {
    pergunta: "Vocês implementam IA?",
    resposta:
      "A Pira Labs implementa IA quando a tecnologia entra no fluxo, não na frente dele. IA aplicada antes de entender o problema real tende a automatizar o problema errado. O diagnóstico vem primeiro. A Pira Labs não vende tecnologia e declara qualquer incentivo quando indica um parceiro.",
  },
  {
    pergunta: "Vocês atendem empresas fora do Brasil?",
    resposta:
      "Sim. A Pira Labs atende em português e inglês, e já conduziu projeto com cliente internacional. A maior parte dos projetos acontece de forma remota, com presença pontual quando necessário. O foco permanece em empresas de serviços onde o contexto de operação e território torna o diagnóstico preciso.",
  },
]

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-label="Perguntas frequentes"
      style={{ backgroundColor: INK }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)",
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          <p
            style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: SAND,
              margin: "0 0 1.25rem 0",
            }}
          >
            PERGUNTAS DE QUEM ESTÁ CHEGANDO AGORA
          </p>

          <h2
            style={{
              fontFamily: "var(--font-atyp-display), serif",
              fontSize: "clamp(30px, 4.4vw, 48px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: WHITE,
              margin: "0 0 clamp(3rem, 6vw, 5rem) 0",
            }}
          >
            Sem rodeios.
          </h2>

          <div>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}
              >
                <summary
                  style={{
                    listStyle: "none",
                    cursor: "pointer",
                    padding: "1.5rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-atyp-display), serif",
                      fontSize: "clamp(18px, 1.8vw, 24px)",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                      color: WHITE,
                      margin: 0,
                    }}
                  >
                    {faq.pergunta}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-marker"
                    style={{
                      flexShrink: 0,
                      fontSize: "1.375rem",
                      fontWeight: 400,
                      lineHeight: 1,
                      marginTop: "2px",
                      color: SAND,
                      display: "inline-block",
                      fontFamily: "var(--font-atyp-text), sans-serif",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontFamily: "var(--font-atyp-text), sans-serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: SAND,
                    maxWidth: "680px",
                    padding: "0 0 1.5rem 0",
                    margin: 0,
                  }}
                >
                  {faq.resposta}
                </p>
              </details>
            ))}
            <div style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }} />
          </div>
        </div>
      </div>

      <style>{`
        #faq details > summary::-webkit-details-marker { display: none; }
        #faq details > summary::marker { display: none; }
        #faq details[open] > summary .faq-marker { transform: rotate(45deg); }
        @media (max-width: 767px) {
          #faq h3 { font-size: 17px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          #faq .faq-marker { transition: none !important; }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.pergunta,
              acceptedAnswer: { "@type": "Answer", text: faq.resposta },
            })),
          }),
        }}
      />
    </section>
  )
}
