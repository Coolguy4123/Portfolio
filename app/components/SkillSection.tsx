"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Brain, BarChart3, Code2, Layers } from "lucide-react";

type Domain = {
  id: "ml" | "ds" | "swe";
  title: string;
  icon: React.ElementType;
  items: string[];
};

const coreSkills = ["Python", "TypeScript", "SQL", "Git/GitHub", "Linux", "APIs"];
const domains: Domain[] = [
  {
    id: "ml",
    title: "Machine Learning",
    icon: Brain,
    items: [
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Model evaluation",
      "Feature engineering",
      "Hyperparameter tuning",
    ],
  },
  {
    id: "ds",
    title: "Data Science",
    icon: BarChart3,
    items: ["Python", "R", "SQL", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "Data cleaning"],
  },
  {
    id: "swe",
    title: "Software Engineering",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "Git/GitHub"],
  },
];

type Pt = { 
  x: number; 
  y: number;
};

function centerOf(el: HTMLElement): Pt {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

export default function SkillsSection() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const coreDotRef = useRef<HTMLSpanElement | null>(null);
  const mlDotRef = useRef<HTMLSpanElement | null>(null);
  const dsDotRef = useRef<HTMLSpanElement | null>(null);
  const sweDotRef = useRef<HTMLSpanElement | null>(null);

  const dotRefs = useMemo(
    () => ({
      ml: mlDotRef,
      ds: dsDotRef,
      swe: sweDotRef,
    }),
    []
  );

  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });
  const [paths, setPaths] = useState<string[]>([]);

  const compute = () => {
    const canvas = canvasRef.current;
    const core = coreDotRef.current;
    if (!canvas || !core) return;

    const canvasRect = canvas.getBoundingClientRect();

    const w = Math.max(1, Math.round(canvasRect.width));
    const h = Math.max(1, Math.round(canvasRect.height));
    setSvgSize({ w, h });

    const start = centerOf(core);

    const ends = domains
      .map((d) => dotRefs[d.id]?.current)
      .filter(Boolean) as HTMLSpanElement[];

    const newPaths = ends.map((endEl) => {
      const end = centerOf(endEl);

      const sx = start.x - canvasRect.left;
      const sy = start.y - canvasRect.top;
      const ex = end.x - canvasRect.left;
      const ey = end.y - canvasRect.top;

      const midY = sy + (ey - sy) * 0.55;
      const c1x = sx;
      const c1y = midY;
      const c2x = ex;
      const c2y = midY;

      return `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`;
    });

    setPaths(newPaths);
  };

  // Layout-safe compute on mount
  useLayoutEffect(() => {
    compute();
  }, []);

  // Recompute on resize and after first paint settles
  useEffect(() => {
    compute();
    const onResize = () => compute();
    window.addEventListener("resize", onResize);

    // recompute a couple times in case fonts shift layout
    const t1 = window.setTimeout(compute, 80);
    const t2 = window.setTimeout(compute, 240);

    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <section id="skills" className="scroll-mt-24 space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Skills</h2>
      </div>

      <div ref={canvasRef} className="relative">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden md:block"
          width={svgSize.w}
          height={svgSize.h}
        >
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-zinc-700/70"
            />
          ))}
        </svg>

        {/* Core card */}
        <div className="relative mx-auto max-w-2xl rounded-2xl border border-zinc-700 p-5">
          <div className="flex items-center justify-center gap-3">
            <Layers className="h-5 w-5 text-zinc-400" />
            <h3 className="text-lg font-semibold text-zinc-100">Core skills</h3>
          </div>


          <div className="mt-3 flex flex-wrap gap-2">
            {coreSkills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Anchor dot on border */}
          <span
            ref={coreDotRef}
            aria-hidden="true"
            className="
              hidden md:block absolute left-1/2 -bottom-[6px] h-3 w-3 -translate-x-1/2 rounded-full
              bg-zinc-950 border border-zinc-700
            "
          />
        </div>

        <div className="h-20" />

        {/* Domain section */}
        <div className="grid gap-6 md:grid-cols-3">
          {domains.map((d) => {
            const Icon = d.icon;
            const topDotRef = dotRefs[d.id];

            return (
              <div key={d.id} className="relative rounded-2xl border border-zinc-700 p-6">
                {/* Anchor dot on border */}
                <span
                  ref={topDotRef}
                  aria-hidden="true"
                  className="
                    hidden md:block absolute left-1/2 -top-[6px] h-3 w-3 -translate-x-1/2 rounded-full
                    bg-zinc-950 border border-zinc-700
                  "
                />

                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-zinc-400" />
                  <h3 className="text-lg font-semibold text-zinc-100">{d.title}</h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {d.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
