"use client";

import { useState } from "react";
import Script from "next/script";

export default function NewsletterForm() {
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!checked) {
      e.preventDefault();
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-xl">
        <p
          className="font-body"
          style={{ color: "#05262e", fontSize: "18px", lineHeight: "1.6" }}
        >
          Falta um passo. Enviamos um e-mail de confirmação. Clique no link para
          concluir sua inscrição na Pira de Dentro.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl">
      <Script
        src="https://eocampaign1.com/form/d6b91a96-7501-11f1-ba11-57156a2dd8c2.js"
        data-form="d6b91a96-7501-11f1-ba11-57156a2dd8c2"
        strategy="lazyOnload"
      />

      {/* Wrapper de override de estilos do EmailOctopus */}
      <div
        id="eo-form-wrapper"
        style={{
          ["--eo-input-bg" as string]: "#e8e0d6",
          ["--eo-input-border" as string]: "#05262e",
          ["--eo-btn-bg" as string]: "#eb5c2e",
          ["--eo-btn-color" as string]: "#F5F5F2",
        }}
      >
        <style>{`
          #eo-form-wrapper form,
          #eo-form-wrapper .eo-form {
            background: transparent !important;
            padding: 0 !important;
            border: none !important;
            border-radius: 0 !important;
          }
          #eo-form-wrapper input[type="email"] {
            background-color: #e8e0d6 !important;
            border: 1px solid #05262e !important;
            border-radius: 0 !important;
            color: #05262e !important;
            font-size: 16px !important;
            padding: 0.75rem 1rem !important;
            width: 100% !important;
            margin-bottom: 0.75rem !important;
          }
          #eo-form-wrapper input[type="email"]::placeholder {
            color: #b0a596 !important;
          }
          #eo-form-wrapper input[type="submit"],
          #eo-form-wrapper button[type="submit"] {
            display: none !important;
          }
          #eo-form-wrapper .eo-form-powered-by {
            display: none !important;
          }
        `}</style>

        <form onSubmit={handleSubmit}>
          {/* O embed do EmailOctopus injeta o campo de email aqui */}
          <div data-form="d6b91a96-7501-11f1-ba11-57156a2dd8c2" />

          {/* Checkbox de consentimento LGPD */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              marginTop: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            <input
              type="checkbox"
              id="newsletter-consent"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              required
              style={{
                marginTop: "3px",
                accentColor: "#eb5c2e",
                width: "16px",
                height: "16px",
                flexShrink: 0,
                borderRadius: "0",
              }}
            />
            <label
              htmlFor="newsletter-consent"
              className="font-body"
              style={{ fontSize: "14px", color: "#05262e", lineHeight: "1.55", cursor: "pointer" }}
            >
              Autorizo a Pira Labs a me enviar a newsletter Pira de Dentro uma
              vez por mês por e-mail, conforme a{" "}
              <a
                href="/politica-privacidade"
                style={{ color: "#1A5568", textDecoration: "underline" }}
              >
                Política de Privacidade
              </a>
              .
            </label>
          </div>

          {/* Botão primário v2 */}
          <button
            type="submit"
            disabled={!checked}
            className="font-body font-semibold uppercase"
            style={{
              fontSize: "15px",
              letterSpacing: "0.14em",
              padding: "0.75rem 1.5rem",
              backgroundColor: checked ? "#eb5c2e" : "#b0a596",
              color: "#F5F5F2",
              border: "none",
              borderRadius: "0",
              minHeight: "44px",
              cursor: checked ? "pointer" : "not-allowed",
              transition: "background-color 0.2s",
            }}
          >
            QUERO RECEBER
          </button>
        </form>
      </div>
    </div>
  );
}
