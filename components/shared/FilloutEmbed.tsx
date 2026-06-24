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
      <div className="p-10 text-center" style={{ border: "1px solid rgba(245,245,242,0.12)" }}>
        <p className="font-body text-sm" style={{ color: "#e8e0d6" }}>
          Formulário Fillout pendente de configuração.
          <br />
          <code className="text-xs" style={{ color: "#e8e0d6" }}>NEXT_PUBLIC_FILLOUT_URL</code> não definido.
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
