import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços: Quatro produtos. Uma sequência natural.',
  description:
    'FAÍSCA, INSPIRA, TRANSPIRA e RESPIRA. Quatro produtos da PIRA LABS em sequência natural, do primeiro contato ao negócio em propulsão.',
  alternates: {
    canonical: 'https://piralabs.com.br/servicos',
    languages: { 'en': 'https://piralabs.com.br/en/services' },
  },
}

export default function Servicos() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">SERVIÇOS</p>
          <h1
            className="font-display text-off-white max-w-2xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Quatro produtos. Uma sequência natural.
          </h1>
          <p className="font-body text-off-white/60 text-xl mt-6 max-w-xl">
            Do primeiro contato ao negócio em propulsão.
          </p>
        </div>
      </section>

      {/* FAÍSCA */}
      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 font-body text-xs tracking-widest uppercase mb-3"
              style={{ backgroundColor: '#D4891F', color: '#0D1B2A' }}>
              FAÍSCA
            </span>
            <p className="font-body text-xs uppercase tracking-widest text-gray-text mb-4">
              A luz do conhecimento
            </p>
            <p className="font-body text-amber text-lg max-w-2xl">
              Conhecimento é a nossa faísca. O como iluminamos e criamos novos caminhos e possibilidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Aulas e palestras</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed">
                O problema do negócio em perspectiva que o decisor não tinha. Usadas em eventos
                corporativos, aceleradoras e instituições de ensino.
              </p>
            </div>
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Workshops</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed">
                Aplicação prática de conhecimento e provocações para grupos estratégicos.
              </p>
            </div>
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">C-level as a service</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed">
                Direcionamento, validações e aprendizados na construção de boards ou em atuação
                periódica.
              </p>
            </div>
          </div>

          {/* Temas */}
          <div className="mb-10">
            <h3 className="font-display text-navy text-3xl mb-2">Temas que abordamos</h3>
            <p className="font-body text-gray-text mb-8">
              Palestras e workshops disponíveis para eventos corporativos, aceleradoras e instituições
              de ensino.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Futuro do Trabalho',
                  body: 'O que está chegando, o que substitui e o que amplifica. A pergunta que raramente aparece: não "minha profissão vai acabar?", mas "o que estou construindo que vai valer no mercado que está se formando agora?"',
                },
                {
                  title: 'Empreendendo com IA',
                  body: 'Casos concretos onde a IA entrou como amplificador e gerou resultado verificável, e casos onde entrou no lugar errado. A conversa começa pelo problema, não pela ferramenta.',
                },
                {
                  title: 'Nova Forma de Consumo',
                  body: 'O comportamento de compra mudou. Novos critérios de decisão, novos intermediários, e o que isso significa para quem está construindo um produto ou serviço agora.',
                },
                {
                  title: 'Entrada no Mercado Brasileiro',
                  body: 'O tamanho, as oportunidades reais e o que empresas estrangeiras consistentemente erram. Prático, não promocional.',
                },
                {
                  title: 'Ecossistema Brasileiro de Inovação',
                  body: 'Quem são os atores principais, como instituições públicas, universidades e corporates se conectam, e onde estão as portas para pesquisadores e ventures de deep tech.',
                },
                {
                  title: 'Ciência para Negócios',
                  body: 'Como pesquisadores estruturam ventures, encontram seus primeiros parceiros no setor privado e navegam a distância entre o laboratório e o mercado.',
                },
                {
                  title: 'Comunicação e Posicionamento para Pesquisadores',
                  body: 'Como falar sobre seu trabalho para investidores, corporates e gestores públicos. O que muda, o que fica. Como ser visível sem perder credibilidade.',
                },
                {
                  title: 'Conexão com o Setor Privado',
                  body: 'Modelos, estratégias e as conversas que realmente levam a algum lugar. O que corporates querem de pesquisadores e como oferecer isso sem perder independência.',
                },
                {
                  title: 'Product-Market Fit',
                  body: 'Por que demora mais do que dizem, quais sinais realmente importam e como manter o caixa enquanto você encontra o fit.',
                },
                {
                  title: 'Liderança Feminina em Inovação',
                  body: 'Não é formato de painel. É uma conversa prática sobre o que é necessário, o que os dados mostram e o que muda quando mulheres lideram ventures técnicas.',
                },
              ].map((tema) => (
                <div key={tema.title} className="bg-cream-dark p-6 border-l-4 border-amber">
                  <p className="font-body font-medium text-navy mb-2">{tema.title}</p>
                  <p className="font-body text-gray-text text-sm leading-relaxed">{tema.body}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/contato" className="font-body text-sm text-amber hover:underline">
            Solicitar FAÍSCA →
          </Link>
        </div>
      </section>

      <div className="border-t border-amber/20" />

      {/* INSPIRA */}
      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-blue-inspira text-off-white font-body text-xs tracking-widest uppercase mb-3">
              INSPIRA
            </span>
            <p className="font-body text-xs uppercase tracking-widest text-gray-text mb-4">
              Clareza para processos de decisão
            </p>
            <p className="font-body text-amber text-lg max-w-2xl">
              Cruzamentos de inteligências para formular perguntas corretas e criar caminhos possíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-navy p-8">
              <h3 className="font-display text-off-white text-2xl mb-4">Investigação</h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed mb-6">
                Condução de um processo investigativo de dados e comportamentos humanos dentro da
                empresa.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tecnologia', 'Pesquisa', 'Senioridade'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-navy p-8">
              <h3 className="font-display text-off-white text-2xl mb-4">Cruzamento</h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed mb-6">
                Dados internos são cruzados com tendências, riscos e oportunidades.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tecnologia', 'Networking', 'Senioridade'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-navy p-8">
              <h3 className="font-display text-off-white text-2xl mb-4">Cenários</h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed mb-4">
                Entregamos em digital e formato humano, um mapa atual do seu negócio e possíveis
                cenários alinhados ao seu objetivo.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Tecnologia', 'Análise', 'Estratégia'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-xs text-off-white/40 uppercase tracking-wide">
                Entrega: Relatório e apresentação
              </p>
            </div>
          </div>

          <p className="font-body text-xs text-gray-text italic mb-8">
            NDA e melhores práticas de governança para tecnologias digitais.
          </p>

          <Link href="/contato" className="font-body text-sm text-amber hover:underline">
            Solicitar INSPIRA →
          </Link>
        </div>
      </section>

      <div className="border-t border-amber/20" />

      {/* TRANSPIRA */}
      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-amber text-navy font-body text-xs tracking-widest uppercase mb-3">
              TRANSPIRA
            </span>
            <p className="font-body text-xs uppercase tracking-widest text-gray-text mb-4">
              Execução e resultados
            </p>
            <p className="font-body text-amber text-lg max-w-2xl">
              Atuação e co-criação de processos. Implementação com acompanhamento e resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Estrutura e base</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed mb-4">
                Aprofundamento nos caminhos possíveis e decisões para estabelecer novos processos.
                Do envolvimento de um sistema ágil e eficiente.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Tecnologia', 'PM', 'Senioridade'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-xs text-gray-text/60 uppercase tracking-wide">
                Entrega: Documentos e curadoria de tecnologia
              </p>
            </div>
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Execução</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed mb-4">
                Aplicação com liderança e times a 4 mãos. Foco em agilidade, inteligência e
                sensibilidade humana.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tecnologia', 'Networking', 'Senioridade'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Monitoramento</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed mb-4">
                Momento de respiração. Reuniões de acompanhamento e revisão dos resultados.
              </p>
              <p className="font-body text-xs text-gray-text/60 uppercase tracking-wide">
                Entrega: Relatório e apresentação
              </p>
            </div>
          </div>

          <Link href="/contato" className="font-body text-sm text-amber hover:underline">
            Solicitar TRANSPIRA →
          </Link>
        </div>
      </section>

      <div className="border-t border-amber/20" />

      {/* RESPIRA */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 font-body text-xs tracking-widest uppercase text-off-white mb-3"
              style={{ backgroundColor: '#1F5C35' }}>
              RESPIRA
            </span>
            <p className="font-body text-xs uppercase tracking-widest text-gray-text mb-4">
              O resultado, não um produto
            </p>
            <p className="font-body text-gray-text text-lg leading-relaxed">
              Respira é o estado que o negócio alcança. Não é uma compra. Quando o TRANSPIRA encerra,
              o negócio opera com clareza. O decisor está no comando do que importa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-amber py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2
            className="font-display text-navy mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Acenda sua faísca.
          </h2>
          <p className="font-body text-navy/70 text-lg mb-10 max-w-xl mx-auto">
            A primeira conversa é gratuita e sem compromisso.
          </p>
          <Link
            href="/contato"
            className="inline-block px-10 py-4 bg-navy text-off-white font-body text-sm tracking-wide uppercase hover:bg-navy-mid transition-colors duration-200"
          >
            Solicitar diagnóstico →
          </Link>
        </div>
      </section>
    </>
  )
}
