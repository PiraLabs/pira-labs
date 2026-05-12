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
    absolute: "Política de Cookies · PIRA LABS",
  },
  description: "Como a PIRA LABS usa cookies e como você pode gerenciá-los.",
  alternates: {
    canonical: "https://piralabs.com.br/cookies",
  },
  openGraph: {
    title: "Política de Cookies · PIRA LABS",
    description: "Como a PIRA LABS usa cookies e como você pode gerenciá-los.",
    url: "https://piralabs.com.br/cookies",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PIRA LABS" }],
  },
};

export default function CookiesPage() {
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
            { label: "Política de Cookies" },
          ]}
          h1="Política de Cookies"
          subtitle="Última atualização: Maio de 2026"
        />
      </Section>

      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl font-body text-off-white/85 leading-relaxed space-y-8">

          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">O que são cookies</h2>
            <p>
              Cookies são pequenos arquivos de texto salvos no seu navegador quando você visita um site.
              Eles permitem que o site reconheça seu navegador em visitas futuras e armazene preferências.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-off-white mb-4">Cookies que usamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-teal/50">
                    <th className="text-left py-3 pr-4 text-off-white font-medium">Nome</th>
                    <th className="text-left py-3 pr-4 text-off-white font-medium">Tipo</th>
                    <th className="text-left py-3 pr-4 text-off-white font-medium">Finalidade</th>
                    <th className="text-left py-3 text-off-white font-medium">Prazo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal/20">
                  <tr>
                    <td className="py-3 pr-4 font-mono text-peach text-xs">pira_consent</td>
                    <td className="py-3 pr-4">Essencial</td>
                    <td className="py-3 pr-4">Armazena sua escolha de consentimento de cookies</td>
                    <td className="py-3">12 meses</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-peach text-xs">_ga, _ga_*</td>
                    <td className="py-3 pr-4">Analítico</td>
                    <td className="py-3 pr-4">Google Analytics: analisa tráfego e uso do site de forma anonimizada</td>
                    <td className="py-3">2 anos</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-peach text-xs">Vercel Analytics</td>
                    <td className="py-3 pr-4">Analítico</td>
                    <td className="py-3 pr-4">Analisa tráfego e uso do site de forma anonimizada</td>
                    <td className="py-3">Sessão</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">Cookies essenciais</h2>
            <p>
              O cookie <span className="font-mono text-peach text-sm">pira_consent</span> é necessário
              para o funcionamento do banner de consentimento. Ele não rastreia você, não armazena dados
              pessoais e não pode ser desativado.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">Cookies analíticos (opcionais)</h2>
            <p>
              Usamos Google Analytics e Vercel Analytics para entender como o site é usado. Esses serviços
              coletam dados anonimizados (páginas visitadas, tempo na página, origem do tráfego). Nenhum
              dado é vinculado a você pessoalmente.
            </p>
            <p className="mt-3">
              Os cookies analíticos só são ativados se você clicar em "Aceitar todos" no banner de
              consentimento.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">Como gerenciar seus cookies</h2>
            <p>
              Você pode alterar sua escolha a qualquer momento clicando em "Gerenciar cookies" no rodapé
              do site. Também pode configurar seu navegador para bloquear todos os cookies, mas isso pode
              afetar a funcionalidade do site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">Contato</h2>
            <p>
              Para dúvidas sobre cookies, escreva para{" "}
              <a
                href="mailto:inspira@piralabs.com.br"
                className="text-peach underline hover:text-orange transition-colors"
              >
                inspira@piralabs.com.br
              </a>
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
