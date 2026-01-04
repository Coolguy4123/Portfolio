"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectSection({ projects }: { projects: Project[] }) {
  const pageSize = 2;

  const totalPages = Math.max(1, Math.ceil(projects.length / pageSize));
  const [page, setPage] = useState(0);

  const visible = useMemo(() => {
    const start = page * pageSize;
    return projects.slice(start, start + pageSize);
  }, [projects, page]);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  // Theme for light/dark theme
  const card = "bg-[rgb(var(--card))] border-[rgb(var(--border))]";
  const heading = "text-[rgb(var(--fg))]";
  const muted = "text-[rgb(var(--muted))]";
  const chip = "border-[rgb(var(--border))] text-[rgb(var(--chip))]";
  const ringHover = "hover:border-[rgb(var(--fg))]/30";

  return (
    <section id="projects" className="scroll-mt-24 space-y-6">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className={`text-3xl font-bold ${heading}`}>Projects</h2>

          <p className={`text-sm ${muted}`}>
            Showing {projects.length === 0 ? 0 : page * pageSize + 1}-
            {Math.min((page + 1) * pageSize, projects.length)} of {projects.length}
          </p>
        </div>

        {/* Left/Right arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous projects"
            className={`rounded-lg border px-3 py-2 text-sm transition ${card} ${muted} ${ringHover}`}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next projects"
            className={`rounded-lg border px-3 py-2 text-sm transition ${card} ${muted} ${ringHover}`}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Projects cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className={`group rounded-xl border p-6 transition ${card} ${ringHover}`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className={`text-xl font-semibold ${heading}`}>{p.title}</h3>

              <ArrowUpRight
                className={`h-5 w-5 ${muted} transition group-hover:text-[rgb(var(--fg))]`}
              />
            </div>

            <p className={`mt-2 ${muted}`}>{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className={`text-sm rounded-full px-3 py-1 border ${chip}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Page dots */}
      <div className="flex justify-center gap-2 pt-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const isActive = i === page;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={[
                "h-2 w-2 rounded-full border transition",
                isActive
                  ? "bg-[rgb(var(--fg))] border-[rgb(var(--fg))]"
                  : "bg-transparent border-[rgb(var(--border))] hover:border-[rgb(var(--fg))]/30",
              ].join(" ")}
            />
          );
        })}
      </div>
    </section>
  );
}
