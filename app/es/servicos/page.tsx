import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios: Cuatro productos. Una secuencia natural.',
  description:
    'FAÍSCA, INSPIRA, TRANSPIRA y RESPIRA. Cuatro productos de PIRA LABS en secuencia natural, del primer contacto al negocio en propulsión.',
  alternates: {
    canonical: 'https://piralabs.com.br/es/servicos',
    languages: {
      'pt-BR': 'https://piralabs.com.br/servicos',
      'en': 'https://piralabs.com.br/en/services',
    },
  },
}

export default function EsServicos() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">SERVICIOS</p>
          <h1
            className="font-display text-off-white max-w-2xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Cuatro productos. Una secuencia natural.
          </h1>
          <p className="font-body text-off-white/60 text-xl mt-6 max-w-xl">
            Del primer contacto al negocio en propulsión.
          </p>
        </div>
      </section>

      {/* FAÍSCA */}
      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-12">
            <span
              className="inline-block px-3 py-1 font-body text-xs tracking-widest uppercase mb-3"
              style={{ backgroundColor: '#D4891F', color: '#0D1B2A' }}
            >
              FAÍSCA
            </span>
            <p className="font-body text-xs uppercase tracking-widest text-gray-text mb-4">
              La luz del conocimiento
            </p>
            <p className="font-body text-amber text-lg max-w-2xl">
              El conocimiento es nuestra chispa. El cómo iluminamos y creamos nuevos caminos y posibilidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Clases y conferencias</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed">
                El problema del negocio en perspectiva que el decisor no tenía. Usadas en eventos
                corporativos, aceleradoras e instituciones de enseñanza.
              </p>
            </div>
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Talleres</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed">
                Aplicación práctica de conocimiento y provocaciones para grupos estratégicos.
              </p>
            </div>
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">C-level as a service</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed">
                Dirección, validaciones y aprendizajes en la construcción de boards o en actuación
                periódica.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="font-display text-navy text-3xl mb-2">Temas que abordamos</h3>
            <p className="font-body text-gray-text mb-8">
              Conferencias y talleres disponibles para eventos corporativos, aceleradoras e
              instituciones de enseñanza.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Futuro del Trabajo',
                  body: 'Lo que está llegando, lo que sustituye y lo que amplifica. La pregunta que raramente aparece: no "¿mi profesión va a terminar?", sino "¿qué estoy construyendo que valdrá en el mercado que se está formando ahora?"',
                },
                {
                  title: 'Emprendiendo con IA',
                  body: 'Casos concretos donde la IA entró como amplificador y generó resultado verificable, y casos donde entró en el lugar equivocado. La conversación empieza por el problema, no por la herramienta.',
                },
                {
                  title: 'Nueva Forma de Consumo',
                  body: 'El comportamiento de compra cambió. Nuevos criterios de decisión, nuevos intermediarios, y qué significa esto para quien está construyendo un producto o servicio ahora.',
                },
                {
                  title: 'Entrada al Mercado Brasileño',
                  body: 'El tamaño, las oportunidades reales y lo que las empresas extranjeras consistentemente yerran. Práctico, no promocional.',
                },
                {
                  title: 'Ecosistema Brasileño de Innovación',
                  body: 'Quiénes son los actores principales, cómo se conectan instituciones públicas, universidades y corporates, y dónde están las puertas para investigadores y ventures de deep tech.',
                },
                {
                  title: 'Ciencia para Negocios',
                  body: 'Cómo los investigadores estructuran ventures, encuentran sus primeros socios en el sector privado y navegan la distancia entre el laboratorio y el mercado.',
                },
                {
                  title: 'Comunicación y Posicionamiento para Investigadores',
                  body: 'Cómo hablar sobre su trabajo para inversores, corporates y gestores públicos. Qué cambia, qué queda. Cómo ser visible sin perder credibilidad.',
                },
                {
                  title: 'Conexión con el Sector Privado',
                  body: 'Modelos, estrategias y las conversaciones que realmente llevan a algún lugar. Qué quieren los corporates de los investigadores y cómo ofrecerlo sin perder independencia.',
                },
                {
                  title: 'Product-Market Fit',
                  body: 'Por qué demora más de lo que dicen, qué señales realmente importan y cómo mantener el flujo de caja mientras encuentra el fit.',
                },
                {
                  title: 'Liderazgo Femenino en Innovación',
                  body: 'No es formato de panel. Es una conversación práctica sobre qué es necesario, qué muestran los datos y qué cambia cuando mujeres lideran ventures técnicas.',
                },
              ].map((tema) => (
                <div key={tema.title} className="bg-cream-dark p-6 border-l-4 border-amber">
                  <p className="font-body font-medium text-navy mb-2">{tema.title}</p>
                  <p className="font-body text-gray-text text-sm leading-relaxed">{tema.body}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/es/contato" className="font-body text-sm text-amber hover:underline">
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
              Claridad para procesos de decisión
            </p>
            <p className="font-body text-amber text-lg max-w-2xl">
              Cruce de inteligencias para formular preguntas correctas y crear caminos posibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-navy p-8">
              <h3 className="font-display text-off-white text-2xl mb-4">Investigación</h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed mb-6">
                Conducción de un proceso investigativo de datos y comportamientos humanos dentro
                de la empresa.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tecnología', 'Investigación', 'Seniority'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-navy p-8">
              <h3 className="font-display text-off-white text-2xl mb-4">Cruce</h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed mb-6">
                Datos internos se cruzan con tendencias, riesgos y oportunidades.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tecnología', 'Networking', 'Seniority'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-navy p-8">
              <h3 className="font-display text-off-white text-2xl mb-4">Escenarios</h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed mb-4">
                Entregamos en digital y formato humano un mapa actual de su negocio y posibles
                escenarios alineados a su objetivo.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Tecnología', 'Análisis', 'Estrategia'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-xs text-off-white/40 uppercase tracking-wide">
                Entrega: Informe y presentación
              </p>
            </div>
          </div>

          <p className="font-body text-xs text-gray-text italic mb-8">
            NDA y mejores prácticas de gobernanza para tecnologías digitales.
          </p>

          <Link href="/es/contato" className="font-body text-sm text-amber hover:underline">
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
              Ejecución y resultados
            </p>
            <p className="font-body text-amber text-lg max-w-2xl">
              Actuación y co-creación de procesos. Implementación con seguimiento y resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Estructura y base</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed mb-4">
                Profundización en los caminos posibles y decisiones para establecer nuevos
                procesos. Del involucramiento de un sistema ágil y eficiente.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Tecnología', 'PM', 'Seniority'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-xs text-gray-text/60 uppercase tracking-wide">
                Entrega: Documentos y curaduría de tecnología
              </p>
            </div>
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Ejecución</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed mb-4">
                Aplicación con liderazgo y equipos a 4 manos. Foco en agilidad, inteligencia y
                sensibilidad humana.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tecnología', 'Networking', 'Seniority'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-amber border border-amber/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-cream-dark p-8 border-t-2 border-amber">
              <h3 className="font-display text-navy text-2xl mb-4">Monitoreo</h3>
              <p className="font-body text-gray-text text-sm leading-relaxed mb-4">
                Momento de respiración. Reuniones de seguimiento y revisión de resultados.
              </p>
              <p className="font-body text-xs text-gray-text/60 uppercase tracking-wide">
                Entrega: Informe y presentación
              </p>
            </div>
          </div>

          <Link href="/es/contato" className="font-body text-sm text-amber hover:underline">
            Solicitar TRANSPIRA →
          </Link>
        </div>
      </section>

      <div className="border-t border-amber/20" />

      {/* RESPIRA */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-2xl">
            <span
              className="inline-block px-3 py-1 font-body text-xs tracking-widest uppercase text-off-white mb-3"
              style={{ backgroundColor: '#1F5C35' }}
            >
              RESPIRA
            </span>
            <p className="font-body text-xs uppercase tracking-widest text-gray-text mb-4">
              El resultado, no un producto
            </p>
            <p className="font-body text-gray-text text-lg leading-relaxed">
              Respira es el estado que el negocio alcanza. No es una compra. Cuando el TRANSPIRA
              concluye, el negocio opera con claridad. El decisor está al mando de lo que importa.
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
            Enciende tu chispa.
          </h2>
          <p className="font-body text-navy/70 text-lg mb-10 max-w-xl mx-auto">
            La primera conversación es gratuita y sin compromiso.
          </p>
          <Link
            href="/es/contato"
            className="inline-block px-10 py-4 bg-navy text-off-white font-body text-sm tracking-wide uppercase hover:bg-navy-mid transition-colors duration-200"
          >
            Solicitar diagnóstico →
          </Link>
        </div>
      </section>
    </>
  )
}
