type NodeType = "filled" | "hollow-thin" | "hollow-thick";

interface Node {
  x: number;
  y: number;
  r: number;
  type: NodeType;
}

type ConnectorPair = [number, number];

interface NodeSystemProps {
  variant: "dark" | "light";
  density: "sparse" | "medium" | "dense";
  className?: string;
}

const NODES: Record<"sparse" | "medium" | "dense", Node[]> = {
  sparse: [
    { x: 8,  y: 65, r: 20, type: "hollow-thick" },
    { x: 22, y: 30, r: 27, type: "filled"        },
    { x: 45, y: 72, r: 20, type: "hollow-thin"   },
    { x: 68, y: 20, r: 42, type: "hollow-thick"  },
    { x: 78, y: 58, r: 20, type: "filled"        },
    { x: 92, y: 35, r: 27, type: "hollow-thin"   },
  ],
  medium: [
    { x: 5,  y: 50, r: 20, type: "hollow-thin"  },
    { x: 15, y: 20, r: 27, type: "filled"        },
    { x: 28, y: 75, r: 20, type: "hollow-thick"  },
    { x: 42, y: 35, r: 42, type: "hollow-thin"   },
    { x: 55, y: 65, r: 20, type: "filled"        },
    { x: 65, y: 20, r: 27, type: "hollow-thick"  },
    { x: 72, y: 80, r: 20, type: "filled"        },
    { x: 82, y: 45, r: 27, type: "hollow-thin"   },
    { x: 94, y: 25, r: 20, type: "hollow-thick"  },
  ],
  dense: [
    { x: 4,  y: 60, r: 20, type: "filled"        },
    { x: 12, y: 25, r: 27, type: "hollow-thin"   },
    { x: 22, y: 75, r: 20, type: "hollow-thick"  },
    { x: 32, y: 40, r: 27, type: "filled"        },
    { x: 42, y: 15, r: 42, type: "hollow-thin"   },
    { x: 50, y: 70, r: 20, type: "hollow-thick"  },
    { x: 60, y: 35, r: 20, type: "filled"        },
    { x: 68, y: 80, r: 27, type: "hollow-thin"   },
    { x: 74, y: 20, r: 20, type: "hollow-thick"  },
    { x: 82, y: 55, r: 42, type: "filled"        },
    { x: 88, y: 30, r: 20, type: "hollow-thin"   },
    { x: 95, y: 65, r: 27, type: "hollow-thick"  },
  ],
};

const CONNECTORS: Record<"sparse" | "medium" | "dense", ConnectorPair[]> = {
  sparse: [[0, 1], [1, 3], [3, 4]],
  medium: [[0, 1], [1, 3], [3, 4], [4, 5], [5, 7]],
  dense:  [[0, 1], [1, 3], [2, 3], [3, 4], [4, 6], [5, 6], [6, 9], [8, 9]],
};

const COLOR: Record<"dark" | "light", string> = {
  dark:  "#e8e0d6",
  light: "#05262e",
};

export default function NodeSystem({ variant, density, className }: NodeSystemProps) {
  const color = COLOR[variant];
  const nodes = NODES[density];
  const connectors = CONNECTORS[density];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 pointer-events-none${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      {connectors.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={color}
          strokeWidth="1"
          opacity="0.5"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {nodes.map((node, i) => {
        if (node.type === "filled") {
          return (
            <circle key={i} cx={node.x} cy={node.y} r={node.r} fill={color} />
          );
        }
        if (node.type === "hollow-thin") {
          return (
            <circle
              key={i}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="none"
              stroke={color}
              strokeWidth="1.5"
            />
          );
        }
        return (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="none"
            stroke={color}
            strokeWidth="9"
          />
        );
      })}
    </svg>
  );
}
