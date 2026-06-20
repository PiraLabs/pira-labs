// lib/faq-home.ts
// Fonte única do FAQ da home. Consumido pelo FAQSection (visual)
// e pelo schema FAQPage no page.tsx. Não duplicar perguntas em outro lugar.

export interface FaqHomeItem {
  pergunta: string
  resposta: string
}

export const faqHome: FaqHomeItem[] = [
  {
    pergunta: "No que a Pira Labs é diferente de uma consultoria tradicional?",
    resposta:
      "A Pira Labs trabalha antes da crise, quando o negócio ainda tem clientes, caixa e reputação para agir com opções. Muitas consultorias são chamadas quando o problema já virou crise e a margem de manobra é mínima. O diagnóstico da Pira Labs não repete o que qualquer consultoria entregaria, porque cada empresa de serviços tem uma combinação única de pessoas, processos e tecnologia. A rota de saída também precisa ser única.",
  },
  {
    pergunta: "A Pira Labs é para empresas em crise?",
    resposta:
      "A Pira Labs não necessariamente atende empresas em crise. A Pira Labs entra melhor quando o negócio ainda pode escolher. Se os sinais já estão presentes mas a empresa ainda tem fôlego para agir, esse é o momento. Crise reduz opções. A Pira Labs trabalha antes que as opções diminuam. Para empresas já em crise aguda, sem caixa para os próximos 30 dias ou em paralisia operacional, indicamos especialistas em turnaround tradicional.",
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
      "Pelo formulário de contato. Conte onde a operação começou a pesar. A partir daí, indicamos a porta de entrada que faz sentido para o seu momento, sem compromisso antecipado.",
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
