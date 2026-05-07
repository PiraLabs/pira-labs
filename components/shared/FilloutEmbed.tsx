"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FILL_OUT_FORM_URL } from "@/lib/constants";

type FilloutEmbedProps = {
  defaultOrigin?: string;
};

export default function FilloutEmbed({ defaultOrigin = "direto" }: FilloutEmbedProps) {
  const searchParams = useSearchParams();
  const [origin, setOrigin] = useState(defaultOrigin);

  useEffect(() => {
    const o = searchParams.get("origem");
    if (o) setOrigin(o);
  }, [searchParams]);

  const isPlaceholder = FILL_OUT_FORM_URL.startsWith("[INSERIR");

  if (isPlaceholder) {
    return (
      <div className="border border-dashed border-off-white/30 rounded-lg p-10 text-center">
        <p className="text-off-white/60 font-body text-sm">
          Formulário Fillout pendente de configuração.
          <br />
          <code className="text-peach text-xs">NEXT_PUBLIC_FILLOUT_URL</code> não definido.
        </p>
      </div>
    );
  }

  const formUrl = `${FILL_OUT_FORM_URL}${
    FILL_OUT_FORM_URL.includes("?") ? "&" : "?"
  }origem=${origin}`;

  return (
    <iframe
      src={formUrl}
      width="100%"
      height="700"
      style={{ border: "none" }}
      title="Formulário de contato PIRA LABS"
      loading="lazy"
    />
  );
}
