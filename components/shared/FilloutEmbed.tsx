import { FILL_OUT_FORM_URL, FILLOUT_URL_CONTATO } from "@/lib/constants";

export default function FilloutEmbed() {
  const isPlaceholder = FILL_OUT_FORM_URL.startsWith("[INSERIR");

  if (isPlaceholder) {
    return (
      <div className="border border-dashed border-off-white/30 rounded-lg p-10 text-center">
        <p className="text-off-white/60 font-body text-sm">
          Formulário Fillout pendente de configuração.
          <br />
          <code className="text-orange text-xs">NEXT_PUBLIC_FILLOUT_URL</code> não definido.
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={FILLOUT_URL_CONTATO}
      width="100%"
      height="700"
      style={{ border: "none" }}
      title="Formulário de contato Pira Labs"
      loading="eager"
    />
  );
}
