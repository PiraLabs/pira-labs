// Variável do Fillout — prefixo NEXT_PUBLIC_ obrigatório para disponibilidade no client side.
// Configurar também no painel da Vercel: Project Settings > Environment Variables.
export const FILL_OUT_FORM_URL =
  process.env.NEXT_PUBLIC_FILLOUT_URL || "[INSERIR_URL_FILLOUT_QUANDO_DISPONIVEL]";

// URLs completas com origem + UTMs para cada ponto de entrada do formulário.
// Não concatenar UTMs fora deste arquivo.
const UTM_BASE =
  "utm_source=site_pira&utm_medium=owned&utm_campaign=site_institucional";

export const FILLOUT_URL_HEADER =
  `${FILL_OUT_FORM_URL}?origem=header_global&${UTM_BASE}&utm_content=header_falar_com_a_pira`;

export const FILLOUT_URL_CONTATO =
  `${FILL_OUT_FORM_URL}?origem=contato&${UTM_BASE}&utm_content=pagina_contato`;

// 19 origens oficiais do sistema de rastreamento de CTAs (v5).
// Todos os CTAs que apontam para /contato incluem ?origem=[valor].
export const ORIGINS = {
  HOME:                         "home",
  SOBRE:                        "sobre",
  INSPIRA:                      "inspira",
  INSPIRA_JURIDICO:             "inspira_juridico",
  OXIGENIO:                     "oxigenio",
  OXIGENIO_IA_SEARCH:           "oxigenio-ia-search",
  TRANSPIRA:                    "transpira",
  TRANSPIRA_JURIDICO:           "transpira_juridico",
  TRANSPIRA_UNIFICADO:          "transpira_unificado",
  FAISCA:                       "faisca",
  FAISCA_JURIDICA:              "faisca_juridica",
  FAISCA_IMERSA:                "faisca_imersa",
  FAISCA_POCKET:                "faisca_pocket",
  FAISCA_PALESTRAS:             "faisca_palestras",
  FAISCA_WORKSHOPS:             "faisca_workshops",
  FAISCA_CLEVEL:                "faisca_clevel",
  CHAMA:                        "chama",
  COMO_PENSAMOS:                "como_pensamos",
  CREATIVE_BUSINESS_TURNAROUND: "creative_business_turnaround",
  HEADER_GLOBAL:                "header_global",
  NOT_FOUND:                    "404",
} as const;

export type Origin = (typeof ORIGINS)[keyof typeof ORIGINS];

export const SOCIAL = {
  PIRA_LINKEDIN: "https://www.linkedin.com/company/piralabs",
  GABRIELA_LINKEDIN: "https://www.linkedin.com/in/gabrielaaguiarvs/",
  CELSO_LINKEDIN: "https://www.linkedin.com/in/celsogama/",
  EMAIL: "inspira@piralabs.com.br",
  SUBSTACK: "https://piralabs.substack.com",
} as const;

// Feature flags — controlados via variáveis de ambiente.
// D1: achados da auto-aplicação do Celso (bloco OXIGENIO-8). Default false até 10/mai.
// D4: vídeo de método da Gabriela (bloco OXIGENIO-4). Default false até 10/mai.
// PULSO: bloco Pulso Pocket no Oxigênio (OXIGENIO-10). Default false.
export const FLAGS = {
  D1_ATIVO: process.env.NEXT_PUBLIC_FLAG_D1 === "true",
  D4_ATIVO: process.env.NEXT_PUBLIC_FLAG_D4 === "true",
  PULSO_ATIVO: process.env.NEXT_PUBLIC_FLAG_PULSO === "true",
} as const;

// Vagas disponíveis na primeira rodada do Oxigênio IA Search.
// Controla o número exibido na página /faisca/oxigenio-ia-search.
export const VAGAS_OXIGENIO = parseInt(
  process.env.NEXT_PUBLIC_VAGAS_OXIGENIO || "5",
  10
);
