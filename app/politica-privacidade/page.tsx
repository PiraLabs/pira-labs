export const dynamic = 'force-static';

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
    absolute: "Política de Privacidade · Pira Labs",
  },
  description:
    "Como a Pira Labs coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
  alternates: {
    canonical: "https://piralabs.com.br/politica-privacidade",
  },
  openGraph: {
    title: "Política de Privacidade · Pira Labs",
    description: "Como a Pira Labs coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
    url: "https://piralabs.com.br/politica-privacidade",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/politica-privacidade#webpage",
  url: "https://piralabs.com.br/politica-privacidade",
  name: "Política de Privacidade · Pira Labs",
  description: "Como a Pira Labs coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Section variant="ink" paddingY="lg">
        <PageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Política de Privacidade" },
          ]}
          h1="Política de Privacidade"
          subtitle="Última atualização: maio de 2026"
        />
      </Section>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-2xl font-body leading-relaxed space-y-8" style={{ color: "#e8e0d6" }}>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>1. Quem somos</h2>
            <p className="mb-4">
              A Pira Labs é uma consultoria brasileira especializada em Creative Business Turnaround
              para empresas de serviços. Operamos em conformidade com a Lei Geral de Proteção de
              Dados Pessoais (Lei nº 13.709/2018, LGPD).
            </p>
            <div className="p-4 text-sm space-y-1" style={{ backgroundColor: "#004757", color: "#e8e0d6" }}>
              <p className="font-semibold" style={{ color: "#F5F5F2" }}>Controladora dos dados:</p>
              <p>Pira Labs Consultoria Ltda.</p>
              <p>CNPJ: 46.954.891/0001-16</p>
              <p>Rua Curuzu, 117, Alto da Lapa, São Paulo/SP, CEP 05084-020</p>
              <p>Representada por: Gabriela Aguiar Vieira dos Santos</p>
              <p>
                Contato:{" "}
                <a
                  href="mailto:inspira@piralabs.com.br"
                  className="underline transition-colors"
                  style={{ color: "#e8e0d6" }}
                >
                  inspira@piralabs.com.br
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="type-h3 mb-4" style={{ color: "#F5F5F2" }}>2. Dados que coletamos</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "#F5F5F2", fontSize: "1rem" }}>
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
                <h3 className="font-semibold mb-2" style={{ color: "#F5F5F2", fontSize: "1rem" }}>
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

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>3. Como usamos seus dados</h2>
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

          <div>
            <h2 className="type-h3 mb-4" style={{ color: "#F5F5F2" }}>4. Cookies</h2>
            <p className="mb-4">Utilizamos os seguintes cookies:</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(245,245,242,0.12)" }}>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#F5F5F2" }}>Cookie</th>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#F5F5F2" }}>Tipo</th>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#F5F5F2" }}>Finalidade</th>
                    <th className="text-left py-3 font-medium" style={{ color: "#F5F5F2" }}>Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
                    <td className="py-3 pr-4 font-mono text-xs" style={{ color: "#b0a596" }}>pira_consent</td>
                    <td className="py-3 pr-4">Essencial</td>
                    <td className="py-3 pr-4">
                      Armazena sua preferência de consentimento de cookies
                    </td>
                    <td className="py-3">12 meses</td>
                  </tr>
                  <tr style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
                    <td className="py-3 pr-4 font-mono text-xs" style={{ color: "#b0a596" }}>_ga, _ga_*</td>
                    <td className="py-3 pr-4">Analítico</td>
                    <td className="py-3 pr-4">
                      Google Analytics: análise de tráfego e comportamento no site
                    </td>
                    <td className="py-3">2 anos</td>
                  </tr>
                  <tr style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
                    <td className="py-3 pr-4 font-mono text-xs" style={{ color: "#b0a596" }}>Vercel Analytics</td>
                    <td className="py-3 pr-4">Analítico</td>
                    <td className="py-3 pr-4">Analisa tráfego e uso do site de forma anonimizada</td>
                    <td className="py-3">Sessão</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              Você pode gerenciar suas preferências de cookies a qualquer momento pela nossa{" "}
              <Link href="/cookies" className="underline transition-colors" style={{ color: "#e8e0d6" }}>
                Política de Cookies
              </Link>
              .
            </p>
            <p>
              Os cookies analíticos só são ativados com seu consentimento. Cookies essenciais são
              necessários para o funcionamento básico do site e não podem ser desativados.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              5. Compartilhamento de dados
            </h2>
            <p className="mb-3">Seus dados podem ser compartilhados com:</p>
            <ul className="space-y-2 list-disc list-inside mb-3">
              <li>
                <strong style={{ color: "#F5F5F2" }}>Fillout</strong> (fillout.com): plataforma de
                formulários que processa as submissões de contato
              </li>
              <li>
                <strong style={{ color: "#F5F5F2" }}>Google</strong> (analytics.google.com): análise
                de tráfego via Google Analytics
              </li>
              <li>
                <strong style={{ color: "#F5F5F2" }}>Vercel</strong> (vercel.com): infraestrutura de
                hospedagem do site
              </li>
            </ul>
            <p className="mb-2">
              Todos os prestadores de serviço listados acima operam em conformidade com suas
              próprias políticas de privacidade e não utilizam seus dados para finalidades próprias.
            </p>
            <p>Não vendemos, alugamos nem cedemos seus dados a terceiros para fins comerciais.</p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              6. Base legal para o tratamento
            </h2>
            <p className="mb-3">
              Tratamos seus dados com base nas seguintes hipóteses legais previstas na LGPD:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong style={{ color: "#F5F5F2" }}>Execução de contrato ou procedimentos preliminares</strong>{" "}
                (art. 7º, V): para responder às suas solicitações de contato, pois o preenchimento do formulário representa procedimento preliminar à eventual contratação
              </li>
              <li>
                <strong style={{ color: "#F5F5F2" }}>Consentimento</strong> (art. 7º, I): para
                cookies analíticos e comunicações opcionais, coletado via banner de cookies, podendo ser revogado a qualquer momento
              </li>
              <li>
                <strong style={{ color: "#F5F5F2" }}>Legítimo interesse</strong> (art. 7º, IX): para
                análise de desempenho do site e melhoria da experiência, desde que não prevaleçam interesses ou direitos fundamentais do titular
              </li>
            </ul>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>7. Seus direitos</h2>
            <p className="mb-3">Como titular dos dados, você tem direito a:</p>
            <ul className="space-y-2 list-disc list-inside mb-3">
              <li>
                <strong style={{ color: "#F5F5F2" }}>Confirmar</strong> a existência de tratamento
                dos seus dados
              </li>
              <li>
                <strong style={{ color: "#F5F5F2" }}>Acessar</strong> os dados que mantemos sobre
                você
              </li>
              <li>
                <strong style={{ color: "#F5F5F2" }}>Corrigir</strong> dados incompletos, inexatos ou
                desatualizados
              </li>
              <li>
                <strong style={{ color: "#F5F5F2" }}>Solicitar a anonimização, bloqueio ou eliminação</strong>{" "}
                de dados desnecessários ou tratados em desconformidade
              </li>
              <li>
                <strong style={{ color: "#F5F5F2" }}>Revogar o consentimento</strong> a qualquer
                momento, sem prejuízo à licitude dos tratamentos anteriores
              </li>
              <li>
                <strong style={{ color: "#F5F5F2" }}>Solicitar a portabilidade</strong> dos seus
                dados
              </li>
            </ul>
            <p>
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{" "}
              <a
                href="mailto:inspira@piralabs.com.br"
                className="underline transition-colors"
                style={{ color: "#e8e0d6" }}
              >
                inspira@piralabs.com.br
              </a>
              . Respondemos em até 15 dias úteis.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-4" style={{ color: "#F5F5F2" }}>8. Retenção dos dados</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(245,245,242,0.12)" }}>
                    <th className="text-left py-3 pr-6 font-medium" style={{ color: "#F5F5F2" }}>Dado</th>
                    <th className="text-left py-3 font-medium" style={{ color: "#F5F5F2" }}>
                      Prazo de retenção
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
                    <td className="py-3 pr-6">Formulários de contato</td>
                    <td className="py-3">
                      Até 5 anos após o último contato, salvo obrigação legal que exija período
                      maior
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
                    <td className="py-3 pr-6">Dados analíticos (Google Analytics)</td>
                    <td className="py-3">
                      14 meses (configuração padrão com retenção reduzida)
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
                    <td className="py-3 pr-6">Dados de consentimento de cookies</td>
                    <td className="py-3">12 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>9. Segurança</h2>
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
              Em caso de incidente de segurança confirmado envolvendo dados pessoais sujeitos à LGPD e capaz de acarretar risco ou dano relevante aos titulares, a Pira Labs avaliará a ocorrência e, quando cabível, comunicará a ANPD e os titulares afetados no prazo regulatório aplicável.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>10. Links externos</h2>
            <p>
              Nosso site pode conter links para outros sites. Esta Política de Privacidade se aplica
              exclusivamente ao piralabs.com.br. Não nos responsabilizamos pelas práticas de
              privacidade de terceiros.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              11. Tratamento de dados em projetos contratados
            </h2>
            <p>
              Esta política cobre exclusivamente os dados tratados no contexto da navegação e do contato via site. O tratamento de dados pessoais realizado no âmbito de projetos contratados, incluindo o TRANSPIRA Jurídico e demais engajamentos com acesso a documentos e sistemas do cliente, é disciplinado por instrumento contratual específico celebrado entre as partes, que define regras sobre dados pessoais, dados sensíveis, sigilo, uso de ferramentas de IA, suboperadores, retenção, eliminação e transferência internacional quando aplicável.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              12. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta política periodicamente. A data de &quot;última atualização&quot; no
              início do documento indica quando a versão vigente foi publicada. Mudanças
              significativas serão comunicadas de forma destacada no site.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              13. Contato e canal de comunicação com titulares
            </h2>
            <p className="mb-3">
              Para dúvidas, solicitações ou exercício dos seus direitos:
            </p>
            <div className="p-4 text-sm space-y-1" style={{ backgroundColor: "#004757", color: "#e8e0d6" }}>
              <p>
                <strong style={{ color: "#F5F5F2" }}>Encarregado pelo tratamento de dados:</strong> Celso Rielli da Gama
              </p>
              <p>
                <strong style={{ color: "#F5F5F2" }}>E-mail:</strong>{" "}
                <a
                  href="mailto:inspira@piralabs.com.br"
                  className="underline transition-colors"
                  style={{ color: "#e8e0d6" }}
                >
                  inspira@piralabs.com.br
                </a>
              </p>
              <p>
                <strong style={{ color: "#F5F5F2" }}>Site:</strong> piralabs.com.br
              </p>
              <p>
                <strong style={{ color: "#F5F5F2" }}>Endereço:</strong> Rua Curuzu, 117, Alto da Lapa, São Paulo/SP, CEP 05084-020
              </p>
            </div>
            <p className="mt-3">Respondemos em até 15 dias úteis.</p>
          </div>

          <div className="pt-4" style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
            <p className="text-xs" style={{ color: "#b0a596" }}>
              Pira Labs Consultoria Ltda. · CNPJ 46.954.891/0001-16 · piralabs.com.br · São Paulo, Brasil
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
