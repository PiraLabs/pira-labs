"use client";

import { useState } from "react";

const LIST_ID = "17390f8c-74ca-11f1-be16-bd7425785f8a";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!checked || !email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Algo deu errado. Tente novamente.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Erro de conexão. Tente novamente.");
    }
  }

  if (status === "success") {
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
      <form onSubmit={handleSubmit} noValidate>
        {/* Campo de email */}
        <div style={{ marginBottom: "0.75rem" }}>
          <label
            htmlFor="newsletter-email"
            className="font-body font-semibold uppercase"
            style={{
              display: "block",
              fontSize: "12px",
              letterSpacing: "0.14em",
              color: "#b0a596",
              marginBottom: "0.5rem",
            }}
          >
            E-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
            style={{
              width: "100%",
              backgroundColor: "#F5F5F2",
              border: "1px solid #05262e",
              borderRadius: "0",
              color: "#05262e",
              fontSize: "16px",
              padding: "0.75rem 1rem",
              outline: "none",
            }}
          />
        </div>

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
            }}
          />
          <label
            htmlFor="newsletter-consent"
            className="font-body"
            style={{
              fontSize: "14px",
              color: "#05262e",
              lineHeight: "1.55",
              cursor: "pointer",
            }}
          >
            Autorizo a Pira Labs a me enviar a newsletter Pira de Dentro uma vez
            por mês por e-mail, conforme a{" "}
            <a
              href="/politica-privacidade"
              style={{ color: "#1A5568", textDecoration: "underline" }}
            >
              Política de Privacidade
            </a>
            .
          </label>
        </div>

        {/* Mensagem de erro */}
        {status === "error" && (
          <p
            className="font-body"
            style={{
              fontSize: "14px",
              color: "#C4421A",
              marginBottom: "1rem",
            }}
          >
            {errorMsg}
          </p>
        )}

        {/* Botão primário v2 */}
        <button
          type="submit"
          disabled={!checked || !email || status === "loading"}
          className="font-body font-semibold uppercase"
          style={{
            fontSize: "15px",
            letterSpacing: "0.14em",
            padding: "0.75rem 1.5rem",
            backgroundColor:
              checked && email ? "#eb5c2e" : "#b0a596",
            color: "#F5F5F2",
            border: "none",
            borderRadius: "0",
            minHeight: "44px",
            cursor: checked && email ? "pointer" : "not-allowed",
            transition: "background-color 0.2s",
          }}
        >
          {status === "loading" ? "ENVIANDO..." : "QUERO RECEBER"}
        </button>
      </form>
    </div>
  );
}
