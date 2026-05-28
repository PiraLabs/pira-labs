"use client";

import { useEffect, useRef, useState } from "react";

const COLOR_MAP = {
  orange: "#EB5C2E",
  teal: "#004757",
  "off-white": "#E8E0D6",
} as const;

export type NodeDef = {
  id: string;
  cx: number; // 0–100 (% of viewBox width)
  cy: number; // 0–100 (% of viewBox height)
  r?: number; // radius in viewBox units, default 4
  variant?: "hollow" | "solid";
  color?: keyof typeof COLOR_MAP;
};

export type ConnectorDef = {
  from: string; // node id
  to: string;   // node id
};

type NodeSystemProps = {
  nodes: NodeDef[];
  connectors?: ConnectorDef[];
  aspectRatio?: number; // width/height ratio, default 2
  className?: string;
};

export function NodeSystem({
  nodes,
  connectors = [],
  aspectRatio = 2,
  className = "",
}: NodeSystemProps) {
  const [visibleNodes, setVisibleNodes] = useState<Set<string>>(new Set());
  const [reducedMotion, setReducedMotion] = useState(false);
  const sentinelRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Detect prefers-reduced-motion once on mount
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setVisibleNodes(new Set(nodes.map((n) => n.id)));
    }
    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) setVisibleNodes(new Set(nodes.map((n) => n.id)));
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [nodes]);

  // One IntersectionObserver per node sentinel — scroll-driven entry
  useEffect(() => {
    if (reducedMotion) return;

    const observers: IntersectionObserver[] = [];

    nodes.forEach((node) => {
      const sentinel = sentinelRefs.current.get(node.id);
      if (!sentinel) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleNodes((prev) => new Set([...prev, node.id]));
            observer.disconnect(); // trigger once, stay visible
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
      );

      observer.observe(sentinel);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [nodes, reducedMotion]);

  const nodeMap = new Map(nodes.map((n) => [n, n.id] as const).map(([n]) => [n.id, n]));

  const connectorLength = (c: ConnectorDef): number => {
    const a = nodeMap.get(c.from);
    const b = nodeMap.get(c.to);
    if (!a || !b) return 200;
    const dx = b.cx - a.cx;
    const dy = b.cy - a.cy;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const isConnectorVisible = (c: ConnectorDef) =>
    visibleNodes.has(c.from) && visibleNodes.has(c.to);

  return (
    <div
      className={`relative pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ aspectRatio: String(aspectRatio) }}
    >
      {/* Invisible sentinels — one per node, positioned at node location */}
      {nodes.map((node) => (
        <div
          key={node.id}
          ref={(el) => {
            if (el) sentinelRefs.current.set(node.id, el);
            else sentinelRefs.current.delete(node.id);
          }}
          style={{
            position: "absolute",
            left: `${node.cx}%`,
            top: `${node.cy}%`,
            width: 1,
            height: 1,
          }}
        />
      ))}

      {/* SVG — fills the container, z-index below content */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connectors first — nodes render on top */}
        {connectors.map((c) => {
          const a = nodeMap.get(c.from);
          const b = nodeMap.get(c.to);
          if (!a || !b) return null;

          const visible = isConnectorVisible(c);
          const len = connectorLength(c);

          return (
            <line
              key={`${c.from}-${c.to}`}
              x1={a.cx}
              y1={a.cy}
              x2={b.cx}
              y2={b.cy}
              stroke={COLOR_MAP.teal}
              strokeWidth="0.5"
              strokeOpacity={0.5}
              strokeDasharray={len}
              strokeDashoffset={visible ? 0 : len}
              style={
                !reducedMotion
                  ? { transition: "stroke-dashoffset 0.6s ease-out 0.15s" }
                  : undefined
              }
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, index) => {
          const color = COLOR_MAP[node.color ?? "off-white"];
          const r = node.r ?? 4;
          const visible = visibleNodes.has(node.id);
          const delay = index * 0.08; // 80ms stagger between consecutive nodes

          const style = !reducedMotion
            ? {
                opacity: visible ? 1 : 0,
                transition: `opacity 0.6s ease-out ${delay}s`,
              }
            : { opacity: visible ? 1 : 0 };

          return node.variant === "solid" ? (
            <circle
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              r={r}
              fill={color}
              style={style}
            />
          ) : (
            <circle
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              r={r}
              fill="none"
              stroke={color}
              strokeWidth="0.8"
              style={style}
            />
          );
        })}
      </svg>
    </div>
  );
}
