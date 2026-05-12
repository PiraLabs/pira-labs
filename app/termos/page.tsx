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
    absolute: "Termos de Uso · PIRA LABS",
  },
  description: "Termos e condições de uso do site piralabs.com.br.",
  alternates: {
    canonical: "https://piralabs.com.br/termos",
  },
};

export default function TermosPage() {
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
            { label: "Termos de Uso" },
          ]}
          h1="Termos de Uso"
          subtitle="Última atualização: maio de 2026"
        />
      </Section>

      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl font-body text-off-white/85 leading-relaxed space-y-8">

          {/* 1. Aceitação dos termos */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">1. Aceitação dos termos</h2>
            <p className="mb-2">
              Ao acessar e utilizar o site piralabs.com.br, você concorda com estes Termos de Uso.
              Se não concordar com qualquer disposição, recomendamos que não utilize o site.
            </p>
            <p>
              Estes termos se aplicam a todos os visitantes, usuários e qualquer pessoa que acesse
              ou utilize o site.
            </p>
          </div>

          {/* 2. Quem somos */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">2. Quem somos</h2>
            <div className="bg-deep-teal/50 rounded-lg p-4 text-sm text-off-white/70 space-y-1">
              <p className="font-semibold text-off-white/90">
                PIRA LABS CONSULTORIA LTDA.
              </p>
              <p>CNPJ: 46.954.891/0001-16</p>
              <p>Rua Curuzu, 117, Alto da Lapa, São Paulo/SP, CEP 05084-020</p>
              <p>Representada por: Gabriela Aguiar Vieira dos Santos</p>
              <p>
                Contato:{" "}
                <a
                  href="mailto:inspira@piralabs.com.br"
                  className="text-peach underline hover:text-orange transition-colors"
                >
                  inspira@piralabs.com.br
                </a>
              </p>
            </div>
          </div>

          {/* 3. Uso permitido do site */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">3. Uso permitido do site</h2>
            <p className="mb-2">Você pode utilizar este site para:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Conhecer os serviços e a metodologia da PIRA LABS</li>
              <li>Entrar em contato por meio do formulário disponível</li>
              <li>Ler o conteúdo editorial publicado</li>
            </ul>
          </div>

          {/* 4. Uso proibido */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">4. Uso proibido</h2>
            <p className="mb-2">É expressamente proibido:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                Reproduzir, copiar, distribuir ou explorar comercialmente qualquer conteúdo do site
                sem autorização prévia e por escrito da PIRA LABS
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

          {/* 5. Propriedade intelectual */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              5. Propriedade intelectual
            </h2>
            <p className="mb-2">
              Todo o conteúdo disponível neste site, incluindo textos, metodologias, marcas, nomes,
              logotipos, imagens, estrutura editorial e nomenclaturas proprietárias (INSPIRA,
              TRANSPIRA, RESPIRA, FAÍSCA, Oxigênio IA Search, Creative Business Turnaround), é de
              propriedade exclusiva da PIRA LABS ou de seus licenciantes, protegido pela legislação
              brasileira de propriedade intelectual.
            </p>
            <p>A consulta e leitura do conteúdo não implica cessão de qualquer direito sobre ele.</p>
          </div>

          {/* 6. Serviços e contratação */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              6. Serviços e contratação
            </h2>
            <p className="mb-2">
              As informações sobre serviços disponíveis neste site têm caráter informativo. A
              contratação de qualquer serviço da PIRA LABS está sujeita a proposta comercial
              específica, aceita formalmente pelas partes mediante instrumento contratual próprio.
            </p>
            <p>
              A PIRA LABS se reserva o direito de recusar, a seu exclusivo critério, qualquer
              solicitação de contratação.
            </p>
          </div>

          {/* 7. Limitação de responsabilidade */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              7. Limitação de responsabilidade
            </h2>
            <p className="mb-2">A PIRA LABS não se responsabiliza por:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                Decisões tomadas com base no conteúdo publicado no site, que tem caráter informativo
                e não substitui consultoria formal
              </li>
              <li>
                Interrupções temporárias no acesso ao site por manutenção, falhas técnicas ou
                motivos alheios ao nosso controle
              </li>
              <li>Conteúdo de sites externos acessados por links presentes neste site</li>
              <li>Danos decorrentes de uso indevido do site por terceiros</li>
            </ul>
          </div>

          {/* 8. Disponibilidade do site */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              8. Disponibilidade do site
            </h2>
            <p>
              A PIRA LABS não garante disponibilidade ininterrupta do site. Podemos suspender,
              modificar ou encerrar o site ou qualquer funcionalidade a qualquer momento, sem aviso
              prévio, especialmente para manutenção ou melhorias.
            </p>
          </div>

          {/* 9. Links externos */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">9. Links externos</h2>
            <p>
              O site pode conter links para sites de terceiros. Esses links são fornecidos para
              conveniência e não representam endosso do conteúdo desses sites. A PIRA LABS não tem
              controle sobre o conteúdo externo e não se responsabiliza por ele.
            </p>
          </div>

          {/* 10. Privacidade */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">10. Privacidade</h2>
            <p>
              O tratamento dos seus dados pessoais é regido pela nossa{" "}
              <Link
                href="/politica-privacidade"
                className="text-peach underline hover:text-orange transition-colors"
              >
                Política de Privacidade
              </Link>
              , que integra estes Termos de Uso por referência.
            </p>
          </div>

          {/* 11. Alterações nestes termos */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              11. Alterações nestes termos
            </h2>
            <p>
              Podemos atualizar estes Termos de Uso a qualquer momento. A data de "última
              atualização" no início do documento indica a versão vigente. O uso continuado do site
              após alterações implica aceitação dos novos termos.
            </p>
          </div>

          {/* 12. Lei aplicável e foro */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">
              12. Lei aplicável e foro
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Fica eleito o foro da comarca
              de São Paulo/SP para dirimir quaisquer controvérsias decorrentes deste documento, com
              renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>

          {/* 13. Contato */}
          <div>
            <h2 className="text-xl font-semibold text-off-white mb-3">13. Contato</h2>
            <p className="mb-3">Para dúvidas sobre estes Termos de Uso:</p>
            <div className="bg-deep-teal/50 rounded-lg p-4 text-sm text-off-white/70 space-y-1">
              <p>
                <strong className="text-off-white/90">E-mail:</strong>{" "}
                <a
                  href="mailto:inspira@piralabs.com.br"
                  className="text-peach underline hover:text-orange transition-colors"
                >
                  inspira@piralabs.com.br
                </a>
              </p>
              <p>
                <strong className="text-off-white/90">Site:</strong> piralabs.com.br
              </p>
              <p>
                <strong className="text-off-white/90">Endereço:</strong> Rua Curuzu, 117, Alto da
                Lapa, São Paulo/SP, CEP 05084-020
              </p>
            </div>
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
