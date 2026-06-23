import { FILL_OUT_FORM_URL, FILLOUT_URL_CONTATO } from "@/lib/constants";

interface FilloutEmbedProps {
  origin?: string;
  title?: string;
}

export default function FilloutEmbed({ origin, title }: FilloutEmbedProps = {}) {
  const isPlaceholder = FILL_OUT_FORM_URL.startsWith("[INSERIR");
  const UTM = "utm_source=site_pira&utm_medium=owned&utm_campaign=site_institucional";
  const src = origin
    ? `${FILL_OUT_FORM_URL}?origem=${origin}&${UTM}&utm_content=${origin}`
    : FILLOUT_URL_CONTATO;
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
      src={src}
      width="100%"
      height="700"
      style={{ border: "none" }}
      title={title ?? "Formulário de contato Pira Labs"}
      loading="eager"
    />
  );
}
