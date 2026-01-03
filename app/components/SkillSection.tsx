"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, BarChart3, Code2 } from "lucide-react";

type SkillGroup = {
  title: string;
  subtitle: string;
  items: string[];
};

const groups = [
  {
    title: "Machine Learning",
    subtitle: "Modeling, training, and experimentation",
    icon: Brain,
    items: [
      "Scikit-learn",
      "PyTorch",
      "Tensorflow",
      "Model evaluation",
      "Feature engineering",
      "Hyperparameter tuning",
    ],
  },
  {
    title: "Data Science",
    subtitle: "Data work, analysis, and visualization",
    icon: BarChart3,
    items: [
      "Python",
      "R",
      "SQL",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
      "Data cleaning",
    ],
  },
  {
    title: "Software Engineering",
    subtitle: "Building and shipping products",
    icon: Code2,
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Git/GitHub",
    ],
  },
];


export default function SkillsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="scroll-mt-24 space-y-6">
      {/* Header */}
      <div
        className={[
          "space-y-2 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        ].join(" ")}
      >
        <h2 className="text-3xl font-bold">Skills</h2>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g, groupIndex) => (
          <div
            key={g.title}
            className={[
              "rounded-2xl border p-6 transition-all duration-700",
              "border-zinc-300 dark:border-zinc-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: visible ? `${groupIndex * 90}ms` : "0ms" }}
          >
            <div className="flex items-center gap-3">
              <g.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {g.title}
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item, i) => (
                <span
                  key={item}
                  className={[
                    "inline-flex items-center rounded-full border px-3 py-1 text-sm",
                    "border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300",
                    "transition-all duration-500",
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    "hover:-translate-y-[1px] hover:border-zinc-500 dark:hover:border-zinc-500",
                  ].join(" ")}
                  style={{
                    transitionDelay: visible
                      ? `${groupIndex * 120 + i * 35}ms`
                      : "0ms",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
