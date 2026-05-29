import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Política de Privacidade", url: "https://piralabs.com.br/politica-privacidade" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Política de Privacidade · PIRA LABS",
  },
  description:
    "Como a PIRA LABS coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
  alternates: {
    canonical: "https://piralabs.com.br/politica-privacidade",
  },
  openGraph: {
    title: "Política de Privacidade · PIRA LABS",
    description: "Como a PIRA LABS coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
    url: "https://piralabs.com.br/politica-privacidade",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PIRA LABS" }],
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Section variant="dark" paddingY="lg">
        <PageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Política de Privacidade" },
          ]}
          h1="Política de Privacidade"
          subtitle="Última atualização: maio de 2026"
        />
      </Section>

      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl font-body text-off-white/85 leading-relaxed space-y-8">

          {/* 1. Quem somos */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">1. Quem somos</h2>
            <p className="mb-4">
              A PIRA LABS é uma consultoria brasileira especializada em Creative Business Turnaround
              para empresas de serviços. Operamos em conformidade com a Lei Geral de Proteção de
              Dados Pessoais (Lei nº 13.709/2018, LGPD).
            </p>
            <div className="bg-deep-teal/50 rounded-lg p-4 text-sm text-off-white/70 space-y-1">
              <p className="font-semibold text-off-white/90">Controladora dos dados:</p>
              <p>PIRA LABS CONSULTORIA LTDA.</p>
              <p>CNPJ: 46.954.891/0001-16</p>
              <p>Rua Curuzu, 117, Alto da Lapa, São Paulo/SP, CEP 05084-020</p>
              <p>Representada por: Gabriela Aguiar Vieira dos Santos</p>
              <p>
                Contato:{" "}
                <a
                  href="mailto:inspira@piralabs.com.br"
                  className="text-orange underline hover:text-orange transition-colors"
                >
                  inspira@piralabs.com.br
                </a>
              </p>
            </div>
          </div>

          {/* 2. Dados que coletamos */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-4">2. Dados que coletamos</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-semibold text-off-white mb-2">
                  2.1 Dados fornecidos diretamente por você
                </h3>
                <p className="mb-2">
                  Quando você preenche nosso formulário de contato, coletamos:
                </p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Nome</li>
                  <li>E-mail</li>
                  <li>Empresa e cargo (quando informados)</li>
                  <li>Mensagem ou descrição do seu contexto</li>
                </ul>
                <p className="mt-2">
                  Esses dados são necessários para que possamos responder à sua solicitação.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-off-white mb-2">
                  2.2 Dados coletados automaticamente
                </h3>
                <p className="mb-2">
                  Ao navegar em piralabs.com.br, coletamos automaticamente:
                </p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>
                    Dados de acesso: páginas visitadas, tempo de permanência, origem do tráfego
                  </li>
                  <li>
                    Dados de dispositivo: tipo de navegador, sistema operacional, resolução de tela
                  </li>
                  <li>Endereço IP (anonimizado pelo Google Analytics)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Como usamos seus dados */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">3. Como usamos seus dados</h2>
            <ul className="space-y-1 list-disc list-inside mb-4">
              <li>Responder às suas mensagens e solicitações de contato</li>
              <li>Analisar o desempenho e a usabilidade do site</li>
              <li>Melhorar o conteúdo e a experiência de navegação</li>
              <li>Cumprir obrigações legais quando aplicável</li>
            </ul>
            <p>
              Não usamos seus dados para decisões automatizadas que produzam efeitos jurídicos ou
              impactos significativos sobre você.
            </p>
          </div>

          {/* 4. Cookies */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-4">4. Cookies</h2>
            <p className="mb-4">Utilizamos os seguintes cookies:</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-teal/50">
                    <th className="text-left py-3 pr-4 text-off-white font-medium">Cookie</th>
                    <th className="text-left py-3 pr-4 text-off-white font-medium">Tipo</th>
                    <th className="text-left py-3 pr-4 text-off-white font-medium">Finalidade</th>
                    <th className="text-left py-3 text-off-white font-medium">Duração</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal/20">
                  <tr>
                    <td className="py-3 pr-4 font-mono text-orange text-xs">pira_consent</td>
                    <td className="py-3 pr-4">Essencial</td>
                    <td className="py-3 pr-4">
                      Armazena sua preferência de consentimento de cookies
                    </td>
                    <td className="py-3">1 ano</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-orange text-xs">_ga, _ga_*</td>
                    <td className="py-3 pr-4">Analítico</td>
                    <td className="py-3 pr-4">
                      Google Analytics: análise de tráfego e comportamento no site
                    </td>
                    <td className="py-3">2 anos</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-orange text-xs">Vercel Analytics</td>
                    <td className="py-3 pr-4">Analítico</td>
                    <td className="py-3 pr-4">Métricas de desempenho e acesso ao site</td>
                    <td className="py-3">Sessão</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              Você pode gerenciar suas preferências de cookies a qualquer momento pela nossa{" "}
              <Link href="/cookies" className="text-orange underline hover:text-orange transition-colors">
                Política de Cookies
              </Link>
              .
            </p>
            <p>
              Os cookies analíticos só são ativados com seu consentimento. Cookies essenciais são
              necessários para o funcionamento básico do site e não podem ser desativados.
            </p>
          </div>

          {/* 5. Compartilhamento de dados */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              5. Compartilhamento de dados
            </h2>
            <p className="mb-3">Seus dados podem ser compartilhados com:</p>
            <ul className="space-y-2 list-disc list-inside mb-3">
              <li>
                <strong className="text-off-white">Fillout</strong> (fillout.com): plataforma de
                formulários que processa as submissões de contato
              </li>
              <li>
                <strong className="text-off-white">Google</strong> (analytics.google.com): análise
                de tráfego via Google Analytics
              </li>
              <li>
                <strong className="text-off-white">Vercel</strong> (vercel.com): infraestrutura de
                hospedagem do site
              </li>
            </ul>
            <p className="mb-2">
              Todos os prestadores de serviço listados acima operam em conformidade com suas
              próprias políticas de privacidade e não utilizam seus dados para finalidades próprias.
            </p>
            <p>Não vendemos, alugamos nem cedemos seus dados a terceiros para fins comerciais.</p>
          </div>

          {/* 6. Base legal para o tratamento */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              6. Base legal para o tratamento
            </h2>
            <p className="mb-3">
              Tratamos seus dados com base nas seguintes hipóteses legais previstas na LGPD:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong className="text-off-white">Consentimento</strong> (art. 7º, I): para
                cookies analíticos, coletado via banner de cookies
              </li>
              <li>
                <strong className="text-off-white">Legítimo interesse</strong> (art. 7º, IX): para
                análise de desempenho do site e melhoria da experiência
              </li>
              <li>
                <strong className="text-off-white">
                  Execução de contrato ou procedimentos preliminares
                </strong>{" "}
                (art. 7º, V): para responder às suas solicitações de contato
              </li>
            </ul>
          </div>

          {/* 7. Seus direitos */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">7. Seus direitos</h2>
            <p className="mb-3">Como titular dos dados, você tem direito a:</p>
            <ul className="space-y-2 list-disc list-inside mb-3">
              <li>
                <strong className="text-off-white">Confirmar</strong> a existência de tratamento
                dos seus dados
              </li>
              <li>
                <strong className="text-off-white">Acessar</strong> os dados que mantemos sobre
                você
              </li>
              <li>
                <strong className="text-off-white">Corrigir</strong> dados incompletos, inexatos ou
                desatualizados
              </li>
              <li>
                <strong className="text-off-white">
                  Solicitar a anonimização, bloqueio ou eliminação
                </strong>{" "}
                de dados desnecessários ou tratados em desconformidade
              </li>
              <li>
                <strong className="text-off-white">Revogar o consentimento</strong> a qualquer
                momento, sem prejuízo à licitude dos tratamentos anteriores
              </li>
              <li>
                <strong className="text-off-white">Solicitar a portabilidade</strong> dos seus
                dados
              </li>
            </ul>
            <p>
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{" "}
              <a
                href="mailto:inspira@piralabs.com.br"
                className="text-orange underline hover:text-orange transition-colors"
              >
                inspira@piralabs.com.br
              </a>
              . Respondemos em até 15 dias úteis.
            </p>
          </div>

          {/* 8. Retenção dos dados */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-4">8. Retenção dos dados</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-teal/50">
                    <th className="text-left py-3 pr-6 text-off-white font-medium">Dado</th>
                    <th className="text-left py-3 text-off-white font-medium">
                      Prazo de retenção
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal/20">
                  <tr>
                    <td className="py-3 pr-6">Formulários de contato</td>
                    <td className="py-3">
                      Até 5 anos após o último contato, salvo obrigação legal que exija período
                      maior
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6">Dados analíticos (Google Analytics)</td>
                    <td className="py-3">
                      14 meses (configuração padrão com retenção reduzida)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6">Dados de consentimento de cookies</td>
                    <td className="py-3">1 ano</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 9. Segurança */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">9. Segurança</h2>
            <p className="mb-3">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra
              acesso não autorizado, perda, alteração ou divulgação indevida. Isso inclui:
            </p>
            <ul className="space-y-1 list-disc list-inside mb-3">
              <li>Tráfego criptografado via HTTPS em todo o site</li>
              <li>Headers de segurança ativos (CSP, HSTS, X-Frame-Options e outros)</li>
              <li>Acesso restrito aos dados por pessoas autorizadas</li>
            </ul>
            <p>
              Em caso de incidente de segurança que possa acarretar risco ou dano relevante a você,
              comunicaremos a ocorrência dentro do prazo previsto pela LGPD.
            </p>
          </div>

          {/* 10. Links externos */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">10. Links externos</h2>
            <p>
              Nosso site pode conter links para outros sites. Esta Política de Privacidade se aplica
              exclusivamente ao piralabs.com.br. Não nos responsabilizamos pelas práticas de
              privacidade de terceiros.
            </p>
          </div>

          {/* 11. Alterações nesta política */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              11. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta política periodicamente. A data de "última atualização" no
              início do documento indica quando a versão vigente foi publicada. Mudanças
              significativas serão comunicadas de forma destacada no site.
            </p>
          </div>

          {/* 12. Contato e canal do encarregado */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              12. Contato e canal do encarregado
            </h2>
            <p className="mb-3">
              Para dúvidas, solicitações ou exercício dos seus direitos:
            </p>
            <div className="bg-deep-teal/50 rounded-lg p-4 text-sm text-off-white/70 space-y-1">
              <p>
                <strong className="text-off-white/90">E-mail:</strong>{" "}
                <a
                  href="mailto:inspira@piralabs.com.br"
                  className="text-orange underline hover:text-orange transition-colors"
                >
                  inspira@piralabs.com.br
                </a>
              </p>
              <p>
                <strong className="text-off-white/90">Site:</strong> piralabs.com.br
              </p>
              <p>
                <strong className="text-off-white/90">Endereço:</strong> São Paulo, SP, Brasil
              </p>
            </div>
            <p className="mt-3">Respondemos em até 15 dias úteis.</p>
          </div>

          {/* Rodapé legal */}
          <div className="pt-4 border-t border-teal/20">
            <p className="text-xs text-off-white/40">
              PIRA LABS CONSULTORIA LTDA. · CNPJ 46.954.891/0001-16 · piralabs.com.br · São Paulo, Brasil
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
