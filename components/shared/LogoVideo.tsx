"use client";

import { useEffect, useRef, useState } from "react";

type LogoVideoProps = {
  /**
   * false (default): renderiza apenas o placeholder estático.
   * true: tenta carregar public/logo-animation.webm + .mp4.
   * Só ativar quando os arquivos estiverem disponíveis em public/.
   */
  hasVideo?: boolean;
  className?: string;
};

export function LogoVideo({ hasVideo = false, className = "" }: LogoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pause immediately if reduced motion activates while video is playing
  useEffect(() => {
    if (reducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [reducedMotion]);

  const showVideo = hasVideo && !reducedMotion;

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-deep-teal ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          // Deliberadamente sem loop — vinheta editorial de 5s, entra uma vez.
          className="absolute inset-0 w-full h-full object-contain"
          aria-hidden="true"
        >
          {/* WebM primeiro — melhor compressão, suporte amplo em browsers modernos */}
          <source src="/logo-animation.webm" type="video/webm" />
          {/* MP4 como fallback para Safari e browsers sem WebM */}
          <source src="/logo-animation.mp4" type="video/mp4" />
        </video>
      ) : (
        /*
         * Placeholder estático:
         * - hasVideo=false: arquivo ainda não disponível em public/
         * - prefers-reduced-motion: usuário prefere sem movimento
         * Renderiza um espaço reservado com o símbolo tipográfico da marca.
         * Substituir por <Image src="/logo-static.png" ... /> quando o
         * arquivo estático da KZ estiver disponível.
         */
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl italic text-off-white/20 select-none">
            Pira Labs
          </span>
        </div>
      )}
    </div>
  );
}
