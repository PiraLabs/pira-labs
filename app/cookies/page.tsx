export const dynamic = 'force-static';

import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Política de Cookies", url: "https://piralabs.com.br/cookies" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Política de Cookies · Pira Labs",
  },
  description: "Como a Pira Labs usa cookies e como você pode gerenciá-los.",
  alternates: {
    canonical: "https://piralabs.com.br/cookies",
  },
  openGraph: {
    title: "Política de Cookies · Pira Labs",
    description: "Como a Pira Labs usa cookies e como você pode gerenciá-los.",
    url: "https://piralabs.com.br/cookies",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/cookies#webpage",
  url: "https://piralabs.com.br/cookies",
  name: "Política de Cookies · Pira Labs",
  description: "Como a Pira Labs usa cookies e como você pode gerenciá-los.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
};

export default function CookiesPage() {
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
            { label: "Política de Cookies" },
          ]}
          h1="Política de Cookies"
          subtitle="Última atualização: maio de 2026"
        />
      </Section>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-2xl font-body leading-relaxed space-y-8" style={{ color: "#e8e0d6" }}>

          <div className="p-4 space-y-1 text-sm" style={{ backgroundColor: "#004757", color: "#e8e0d6" }}>
            <p className="font-semibold" style={{ color: "#F5F5F2" }}>
              Pira Labs Consultoria Ltda.
            </p>
            <p>CNPJ: 46.954.891/0001-16</p>
            <p>Rua Curuzu, 117, Alto da Lapa, São Paulo/SP, CEP 05084-020</p>
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

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>O que são cookies</h2>
            <p>
              Cookies são pequenos arquivos de texto salvos no seu navegador quando você visita um site.
              Eles permitem que o site reconheça seu navegador em visitas futuras e armazene preferências.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-4" style={{ color: "#F5F5F2" }}>Cookies que usamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(245,245,242,0.12)" }}>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#F5F5F2" }}>Nome</th>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#F5F5F2" }}>Tipo</th>
                    <th className="text-left py-3 pr-4 font-medium" style={{ color: "#F5F5F2" }}>Finalidade</th>
                    <th className="text-left py-3 font-medium" style={{ color: "#F5F5F2" }}>Prazo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
                    <td className="py-3 pr-4 font-mono text-xs" style={{ color: "#b0a596" }}>pira_consent</td>
                    <td className="py-3 pr-4">Essencial</td>
                    <td className="py-3 pr-4">Armazena sua escolha de consentimento de cookies</td>
                    <td className="py-3">12 meses</td>
                  </tr>
                  <tr style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
                    <td className="py-3 pr-4 font-mono text-xs" style={{ color: "#b0a596" }}>_ga, _ga_*</td>
                    <td className="py-3 pr-4">Analítico</td>
                    <td className="py-3 pr-4">Google Analytics: analisa tráfego e uso do site de forma anonimizada</td>
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
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>Cookies essenciais</h2>
            <p>
              O cookie <span className="font-mono text-sm" style={{ color: "#b0a596" }}>pira_consent</span> é necessário
              para o funcionamento do banner de consentimento. Ele não rastreia você, não armazena dados
              pessoais e não pode ser desativado.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>Cookies analíticos (opcionais)</h2>
            <p>
              Usamos Google Analytics e Vercel Analytics para entender como o site é usado. Esses serviços
              coletam dados anonimizados (páginas visitadas, tempo na página, origem do tráfego). Nenhum
              dado é vinculado a você pessoalmente.
            </p>
            <p className="mt-3">
              Os cookies analíticos só são ativados se você clicar em &quot;Aceitar todos&quot; no banner de
              consentimento.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>Como gerenciar seus cookies</h2>
            <p>
              Você pode alterar sua escolha a qualquer momento clicando em &quot;Gerenciar cookies&quot; no rodapé
              do site. Também pode configurar seu navegador para bloquear todos os cookies, mas isso pode
              afetar a funcionalidade do site.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>Contato</h2>
            <p>
              Para dúvidas sobre cookies, escreva para{" "}
              <a
                href="mailto:inspira@piralabs.com.br"
                className="underline transition-colors"
                style={{ color: "#e8e0d6" }}
              >
                inspira@piralabs.com.br
              </a>
            </p>
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
