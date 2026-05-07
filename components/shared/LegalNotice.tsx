type LegalNoticeProps = {
  variant?: "short" | "inspira_juridico" | "transpira_juridico" | "faisca_juridica";
};

const notices = {
  short:
    "A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB. As páginas da vertical jurídica tratam de fluxos de trabalho, governança operacional de IA e capacidade produtiva, com supervisão obrigatória de advogado habilitado do escritório contratante.",
  inspira_juridico:
    "A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB. O INSPIRA Jurídico é um diagnóstico operacional e de governança de IA, não uma avaliação legal. Toda implementação subsequente requer supervisão de advogado habilitado.",
  transpira_juridico:
    "A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB. O Modelo B do TRANSPIRA Jurídico é descrito como capacidade de produção jurídica sob demanda. Todo material produzido passa pelo advogado habilitado do escritório contratante para revisão e assinatura.",
  faisca_juridica:
    "A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB. A FAÍSCA Jurídica trata de fluxos de trabalho, governança operacional de IA e capacidade produtiva no setor jurídico.",
};

export function LegalNotice({ variant = "short" }: LegalNoticeProps) {
  return (
    <p className="text-[13px] leading-relaxed text-off-white/70 font-body border-t border-off-white/10 pt-6 mt-6">
      {notices[variant]}
    </p>
  );
}
