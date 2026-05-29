"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  duration?: number; // segundos, default 1.2
  prefix?: string;
  suffix?: string;
};

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({ end, duration = 1.2, prefix = "", suffix = "" }: CountUpProps) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, started]);

  useEffect(() => {
    if (!started) return;

    const ms = duration * 1000;

    const tick = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / ms, 1);
      setValue(Math.round(easeOut(progress) * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [started, end, duration]);

  return (
    <span ref={sentinelRef}>
      {prefix}{value}{suffix}
    </span>
  );
}
