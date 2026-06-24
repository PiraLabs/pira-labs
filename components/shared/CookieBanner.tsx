"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  // Começa false — o banner nunca é exibido no SSR.
  // O useEffect abaixo decide se mostra ou não, apenas no cliente.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Toda leitura de cookie acontece aqui — nunca durante SSR.
    if (typeof document === "undefined") return;
    const match = document.cookie.match(/pira_consent=([^;]+)/);
    const consent = match?.[1];
    if (consent !== "accepted" && consent !== "essential_only") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  // Gravação de cookie — só chamada por click handlers, nunca durante render.
  function saveConsent(value: "accepted" | "essential_only") {
    if (typeof document === "undefined") return;
    const expires = new Date();
    expires.setMonth(expires.getMonth() + 12);
    document.cookie = `pira_consent=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure`;
  }

  function handleAccept() {
    saveConsent("accepted");
    setVisible(false);
  }

  function handleReject() {
    saveConsent("essential_only");
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-describedby="cookie-banner-text"
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 py-5 md:px-8 md:py-6"
      style={{ backgroundColor: "#05262e", borderTop: "1px solid rgba(245,245,242,0.12)" }}
    >
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex-1">
            <p
              id="cookie-banner-text"
              className="text-sm font-body leading-relaxed"
              style={{ color: "#e8e0d6" }}
            >
              A Pira Labs usa cookies essenciais para o funcionamento do site e
              cookies analíticos para entender como o site é usado. Você pode
              aceitar todos, recusar opcionais ou{" "}
              <Link
                href="/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors"
                style={{ color: "#e8e0d6" }}
              >
                ler mais
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleAccept}
              className="min-h-[44px] px-6 py-3 font-body font-medium text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: "#eb5c2e", color: "#05262e", borderRadius: 0, outlineColor: "#eb5c2e" }}
              aria-label="Aceitar todos os cookies"
            >
              Aceitar todos
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="min-h-[44px] px-6 py-3 font-body font-medium text-sm bg-transparent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ border: "1px solid #e8e0d6", color: "#e8e0d6", borderRadius: 0, outlineColor: "#eb5c2e" }}
              aria-label="Recusar cookies opcionais, manter apenas os essenciais"
            >
              Recusar opcionais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
