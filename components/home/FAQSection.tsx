"use client"

import { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"

/* HOME-10 · FAQ · fundo Teal #004757
   Grid 2 colunas desktop, coluna única mobile.
   Acordeão compartilhado: abrir em uma coluna fecha na outra.
   font-body = alias para var(--font-atyp-text) no tailwind.config. */

const faqs = [
  {
    pergunta: "No que a Pira Labs é diferente de uma consultoria tradicional?",
    resposta:
      "Muitas consultorias são chamadas quando o problema já virou crise. A Pira Labs trabalha antes: quando o negócio ainda tem clientes, caixa e reputação para agir com opções. O diagnóstico não repete o que qualquer consultoria entregaria, porque cada empresa de serviços tem uma combinação única de pessoas, processos e tecnologia. A rota de saída também precisa ser.",
  },
  {
    pergunta: "A Pira Labs é para empresas em crise?",
    resposta:
      "Não necessariamente. A Pira entra melhor quando o negócio ainda pode escolher. Se os sinais já estão presentes, mas a empresa ainda tem fôlego para agir, esse é o momento. Crise reduz opções. A Pira trabalha antes que as opções diminuam.",
  },
  {
    pergunta: "Quanto custa trabalhar com a Pira Labs?",
    resposta:
      "As entradas da Faísca têm preço fixo: pocket do INSPIRA a R$3.900, Imersão em IA a R$7.100, Oxigênio Fast a R$3.500 e Full a R$5.300. INSPIRA e TRANSPIRA são precificados por projeto, após o diagnóstico inicial. O primeiro contato é gratuito e sem compromisso.",
  },
  {
    pergunta: "Quanto tempo demora?",
    resposta:
      "Depende do que o negócio precisa. As entradas da Faísca têm duração de dias ou semanas. O TRANSPIRA encerra por resultado verificado, não por prazo. Quando o negócio consegue sustentar o próximo nível sem intervenção contínua, o trabalho está feito.",
  },
  {
    pergunta: "E se eu não sei exatamente o que preciso?",
    resposta:
      "Esse é o ponto de partida mais comum. O INSPIRA existe para isso: nomear o problema real antes de propor qualquer solução. Chegar sem clareza não é obstáculo, é o começo do trabalho.",
  },
  {
    pergunta: "Como eu começo?",
    resposta:
      "Pelo formulário de contato. Conte onde a operação começou a pesar. Respondemos em até dois dias úteis para entender se faz sentido avançar.",
  },
  {
    pergunta: "Vocês implementam IA?",
    resposta:
      "Sim, quando a tecnologia entra no fluxo, não na frente dele. IA aplicada antes de entender o problema real tende a automatizar o problema errado. O diagnóstico vem primeiro.",
  },
  {
    pergunta: "Vocês atendem empresas fora do Brasil?",
    resposta:
      "Sim. A Pira Labs atende em português e inglês. A maior parte dos projetos acontece de forma remota, com presença pontual quando necessário.",
  },
]

function FAQItem({
  faq,
  index,
  openIndex,
  setOpenIndex,
  entryStyle,
}: {
  faq: { pergunta: string; resposta: string }
  index: number
  openIndex: number
  setOpenIndex: (i: number) => void
  entryStyle: CSSProperties
}) {
  const isOpen = openIndex === index

  return (
    <div style={{ borderTop: "1px solid rgba(245,245,242,0.12)", ...entryStyle }}>
      <button
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          className="font-display"
          style={{
            fontSize: "clamp(16px, 1.5vw, 20px)",
            fontWeight: isOpen ? 500 : 400,
            color: isOpen ? "#F5F5F2" : "rgba(245,245,242,0.7)",
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
            transition: "color 0.25s",
          }}
        >
          {faq.pergunta}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2px",
            color: isOpen ? "#eb5c2e" : "rgba(245,245,242,0.4)",
            fontSize: "22px",
            fontWeight: 300,
            lineHeight: 1,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), color 0.25s",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "400px" : "0",
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <p
          className="font-body font-light"
          style={{
            fontSize: "15px",
            color: "rgba(245,245,242,0.6)",
            paddingBottom: "24px",
            lineHeight: 1.8,
          }}
        >
          {faq.resposta}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const entry = (delay: string): CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  })

  const col1 = faqs.slice(0, 4)
  const col2 = faqs.slice(4, 8)

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-label="Perguntas frequentes"
      style={{ backgroundColor: "#004757" }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 80px",
        }}
      >
        {/* Header */}
        <div style={{ ...entry("0s"), marginBottom: "80px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest"
            style={{ fontSize: "10px", color: "rgba(245,245,242,0.45)", marginBottom: "20px" }}
          >
            PERGUNTAS DE QUEM ESTÁ CHEGANDO AGORA
          </p>
          <h2
            className="font-display font-medium leading-none"
            style={{
              fontSize: "clamp(64px, 8vw, 112px)",
              color: "#F5F5F2",
              letterSpacing: "-0.03em",
            }}
          >
            Sem rodeios.
          </h2>
        </div>

        {/* Grid 2 colunas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 80px",
          }}
        >
          {/* Coluna 1 */}
          <div>
            {col1.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                entryStyle={entry(`${0.1 + i * 0.05}s`)}
              />
            ))}
            <div style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }} />
          </div>

          {/* Coluna 2 */}
          <div>
            {col2.map((faq, i) => (
              <FAQItem
                key={i + 4}
                faq={faq}
                index={i + 4}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                entryStyle={entry(`${0.1 + (i + 4) * 0.05}s`)}
              />
            ))}
            <div style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          #faq > div {
            padding: 80px 24px !important;
          }
          #faq > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #faq * {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
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
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.resposta,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
