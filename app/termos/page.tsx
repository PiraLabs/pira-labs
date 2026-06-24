export const dynamic = 'force-static';

import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Termos de Uso", url: "https://piralabs.com.br/termos" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Termos de Uso · Pira Labs",
  },
  description: "Termos e condições de uso do site piralabs.com.br.",
  alternates: {
    canonical: "https://piralabs.com.br/termos",
  },
  openGraph: {
    title: "Termos de Uso · Pira Labs",
    description: "Termos e condições de uso do site piralabs.com.br.",
    url: "https://piralabs.com.br/termos",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/termos#webpage",
  url: "https://piralabs.com.br/termos",
  name: "Termos de Uso · Pira Labs",
  description: "Termos e condições de uso do site piralabs.com.br.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
};

export default function TermosPage() {
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
            { label: "Termos de Uso" },
          ]}
          h1="Termos de Uso"
          subtitle="Última atualização: maio de 2026"
        />
      </Section>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-2xl font-body leading-relaxed space-y-8" style={{ color: "#e8e0d6" }}>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>1. Aceitação dos termos</h2>
            <p className="mb-2">
              Ao acessar e utilizar o site piralabs.com.br, você concorda com estes Termos de Uso.
              Se não concordar com qualquer disposição, recomendamos que não utilize o site.
            </p>
            <p>
              Estes termos se aplicam a todos os visitantes, usuários e qualquer pessoa que acesse
              ou utilize o site.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>2. Quem somos</h2>
            <div className="p-4 text-sm space-y-1" style={{ backgroundColor: "#004757", color: "#e8e0d6" }}>
              <p className="font-semibold" style={{ color: "#F5F5F2" }}>
                Pira Labs Consultoria Ltda.
              </p>
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
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>3. Uso permitido do site</h2>
            <p className="mb-2">Você pode utilizar este site para:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Conhecer os serviços e a metodologia da Pira Labs</li>
              <li>Entrar em contato por meio do formulário disponível</li>
              <li>Ler o conteúdo editorial publicado</li>
            </ul>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>4. Uso proibido</h2>
            <p className="mb-2">É expressamente proibido:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                Reproduzir, copiar, distribuir ou explorar comercialmente qualquer conteúdo do site
                sem autorização prévia e por escrito da Pira Labs
              </li>
              <li>Usar o site para fins ilícitos ou que violem direitos de terceiros</li>
              <li>
                Tentar acessar áreas restritas ou sistemas do site por meios não autorizados
              </li>
              <li>Transmitir vírus, malware ou qualquer código malicioso</li>
              <li>
                Usar técnicas automatizadas para coletar dados do site sem autorização (scraping)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              5. Propriedade intelectual
            </h2>
            <p className="mb-2">
              O conteúdo disponível no site, incluindo textos, imagens, logotipos, estrutura editorial, materiais, compilações, nomes de produtos, sinais distintivos e elementos de identidade da Pira Labs, é protegido pela legislação aplicável, conforme a natureza de cada ativo. A Pira Labs é titular ou licenciada dos direitos incidentes sobre esses conteúdos e sinais, quando aplicável.
            </p>
            <p>
              A consulta, leitura ou navegação no site não implica cessão, licença ampla, autorização de reprodução, exploração comercial ou transferência de qualquer direito, salvo quando houver autorização expressa e por escrito ou hipótese legal de uso permitido.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              6. Serviços e contratação
            </h2>
            <p className="mb-2">
              As informações sobre serviços disponíveis neste site têm caráter informativo. A
              contratação de qualquer serviço da Pira Labs está sujeita a proposta comercial
              específica, aceita formalmente pelas partes mediante instrumento contratual próprio.
            </p>
            <p>
              A Pira Labs se reserva o direito de recusar, a seu exclusivo critério, qualquer
              solicitação de contratação.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              7. Limitação de responsabilidade
            </h2>
            <p className="mb-2">
              Na extensão permitida pela legislação aplicável, a Pira Labs não se responsabiliza por decisões tomadas exclusivamente com base em conteúdo informativo publicado no site, por uso indevido do site por terceiros, por indisponibilidades temporárias, por alterações de funcionalidades não contratadas ou por conteúdos de terceiros acessados por links externos.
            </p>
            <p>
              Esta limitação não exclui nem restringe responsabilidade que não possa ser afastada por lei, incluindo responsabilidade por dolo, culpa, descumprimento contratual específico, violação de direitos de terceiros, vício ou defeito de serviço quando aplicável, publicidade enganosa ou obrigação legal inderrogável.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              8. Disponibilidade do site
            </h2>
            <p>
              A Pira Labs não garante disponibilidade ininterrupta do site. Podemos suspender,
              modificar ou encerrar o site ou qualquer funcionalidade a qualquer momento, sem aviso
              prévio, especialmente para manutenção ou melhorias.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>9. Links externos</h2>
            <p>
              O site pode conter links para sites de terceiros. Esses links são fornecidos para
              conveniência e não representam endosso do conteúdo desses sites. A Pira Labs não tem
              controle sobre o conteúdo externo e não se responsabiliza por ele.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>10. Privacidade</h2>
            <p>
              O tratamento dos seus dados pessoais é regido pela nossa{" "}
              <Link
                href="/politica-privacidade"
                className="underline transition-colors"
                style={{ color: "#e8e0d6" }}
              >
                Política de Privacidade
              </Link>
              , que integra estes Termos de Uso por referência.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              11. Alterações nestes termos
            </h2>
            <p>
              Podemos atualizar estes Termos de Uso a qualquer momento. A data de &quot;última
              atualização&quot; no início do documento indica a versão vigente. O uso continuado do site
              após alterações implica aceitação dos novos termos.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>
              12. Lei aplicável e foro
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Para controvérsias decorrentes do uso do site ou de relações não submetidas a foro legal obrigatório, fica eleito o foro da comarca de São Paulo/SP, ressalvadas normas cogentes, hipóteses legais de competência inderrogável e direitos aplicáveis a consumidores quando caracterizada relação de consumo.
            </p>
          </div>

          <div>
            <h2 className="type-h3 mb-3" style={{ color: "#F5F5F2" }}>13. Contato</h2>
            <p className="mb-3">Para dúvidas sobre estes Termos de Uso:</p>
            <div className="p-4 text-sm space-y-1" style={{ backgroundColor: "#004757", color: "#e8e0d6" }}>
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
                <strong style={{ color: "#F5F5F2" }}>Endereço:</strong> Rua Curuzu, 117, Alto da
                Lapa, São Paulo/SP, CEP 05084-020
              </p>
            </div>
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
