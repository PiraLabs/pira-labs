"use client";

import { useEffect, useRef } from "react";

export type NodeDensity = "sparse" | "medium" | "dense";
export type NodeColorScheme = "dark" | "light";

interface NodeSystemProps {
  density: NodeDensity;
  colorScheme?: NodeColorScheme;
  className?: string;
}

interface NodeData {
  xPct: number;   // 0–100
  yPct: number;   // 0–100
  r: number;      // radius in logical px
  state: number;  // 0–3
  stateStart: number; // timestamp when current state began
  delay: number;      // timestamp before animation starts
  active: boolean;
  color: string;
}

// ── constants ────────────────────────────────────────────────────────────────

const STATE_MS    = 800;   // ms per state transition
const CONN_DIST   = 200;   // px — max distance for connection lines

const DENSITY_CFG = {
  sparse: { count: 5,  rMin: 16, rMax: 48 },
  medium: { count: 10, rMin: 12, rMax: 42 },
  dense:  { count: 19, rMin: 8,  rMax: 36 },
} as const;

// [strokeWidth, fillAlpha, opacity, holeFraction]
type StateTuple = [number, number, number, number];
const STATES: StateTuple[] = [
  [1.5, 0, 0.40, 0.00],  // 0 — thin ring
  [9.0, 0, 0.70, 0.00],  // 1 — thick ring
  [0.0, 1, 0.85, 0.35],  // 2 — filled + horizontal hole
  [0.0, 1, 0.90, 0.00],  // 3 — full solid
];

// ── helpers ──────────────────────────────────────────────────────────────────

const ease = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function nodeColor(scheme: NodeColorScheme, i: number): string {
  // ~20% orange, rest primary
  if (i % 5 === 4) return "#eb5c2e";
  return scheme === "dark" ? "#e8e0d6" : "#05262e";
}

function initNodes(
  density: NodeDensity,
  scheme: NodeColorScheme,
  now: number
): NodeData[] {
  const { count, rMin, rMax } = DENSITY_CFG[density];
  return Array.from({ length: count }, (_, i) => ({
    xPct:       5 + Math.random() * 90,
    yPct:       5 + Math.random() * 90,
    r:          rMin + Math.random() * (rMax - rMin),
    state:      Math.floor(Math.random() * 4),
    stateStart: now,
    delay:      now + i * 180 + Math.random() * 1000,
    active:     false,
    color:      nodeColor(scheme, i),
  }));
}

// ── component ─────────────────────────────────────────────────────────────────

export default function NodeSystem({
  density,
  colorScheme = "dark",
  className,
}: NodeSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = initNodes(density, colorScheme, performance.now());
    let w = 0;
    let h = 0;
    let rafId = 0;

    // ── resize ────────────────────────────────────────────────────────────
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize();

    // ── draw ──────────────────────────────────────────────────────────────
    function draw(ts: number) {
      const ctx = canvas!.getContext("2d");
      if (!ctx || w === 0 || h === 0) {
        rafId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // advance state
      if (!reduced) {
        for (const n of nodes) {
          if (!n.active) {
            if (ts >= n.delay) { n.active = true; n.stateStart = ts; }
          } else {
            while (ts - n.stateStart >= STATE_MS) {
              n.state = (n.state + 1) % 4;
              n.stateStart += STATE_MS;
            }
          }
        }
      }

      // connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const ax = a.xPct / 100 * w, ay = a.yPct / 100 * h;
          const bx = b.xPct / 100 * w, by = b.yPct / 100 * h;
          const d  = Math.hypot(bx - ax, by - ay);
          if (d < CONN_DIST) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = a.color;
            ctx.lineWidth   = 1;
            ctx.globalAlpha = 0.15 * (1 - d / CONN_DIST);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const x = n.xPct / 100 * w;
        const y = n.yPct / 100 * h;
        const r = n.r;

        const s    = reduced ? 3 : n.state;
        const prog = (reduced || !n.active)
          ? 0
          : Math.min((ts - n.stateStart) / STATE_MS, 1);
        const t = ease(prog);

        const cs = STATES[s];
        const ns = STATES[(s + 1) % 4];

        const sw = lerp(cs[0], ns[0], t);
        const fa = lerp(cs[1], ns[1], t);
        const op = lerp(cs[2], ns[2], t);
        const hl = lerp(cs[3], ns[3], t);

        ctx.save();

        // fill layer
        if (fa > 0.01) {
          ctx.globalAlpha = op * fa;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.fill();

          // punch horizontal hole via composite
          if (hl > 0.01) {
            const hh = r * hl;
            ctx.globalCompositeOperation = "destination-out";
            ctx.globalAlpha = 1;
            ctx.fillRect(x - r - 1, y - hh, r * 2 + 2, hh * 2);
            ctx.globalCompositeOperation = "source-over";
          }
        }

        // stroke layer
        if (sw > 0.1) {
          ctx.globalAlpha = op * (1 - fa);
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.strokeStyle = n.color;
          ctx.lineWidth   = sw;
          ctx.stroke();
        }

        ctx.restore();
      }

      // stop loop if reduced motion (static render complete)
      if (!reduced) rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [density, colorScheme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none${
        className ? ` ${className}` : ""
      }`}
      aria-hidden="true"
    />
  );
}
