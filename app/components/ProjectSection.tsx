"use client";

import { useMemo, useState } from "react";

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

  return (
    <section id="projects" className="scroll-mt-24 space-y-6">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Projects</h2>

          <p className="text-sm text-zinc-700 dark:text-zinc-400">
            Showing {page * pageSize + 1}-{Math.min((page + 1) * pageSize, projects.length)} of{" "}
            {projects.length}
          </p>
        </div>

        {/* Left/Right arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous projects"
            className="
              rounded-lg border px-3 py-2 text-sm transition
              border-zinc-400 text-zinc-800 hover:border-zinc-500
              dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:border-zinc-500
            "
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next projects"
            className="
              rounded-lg border px-3 py-2 text-sm transition
              border-zinc-400 text-zinc-800 hover:border-zinc-500
              dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:border-zinc-500
            "
          >
            →
          </button>
        </div>
      </div>

      {/* Projects card */}
      <div className="grid md:grid-cols-2 gap-6">
        {visible.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="
              group rounded-xl border p-6 transition
              border-zinc-300 hover:border-zinc-400
              dark:border-zinc-700 dark:hover:border-zinc-500
            "
          >
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-400">
                {p.title}
              </h3>

              <span
                className="
                  text-zinc-800 dark:text-zinc-300
                  group-hover:text-zinc-900 dark:group-hover:text-zinc-200
                  transition
                "
              >
                ↗
              </span>
            </div>

            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="
                    text-sm rounded-full px-3 py-1 border
                    border-zinc-300 text-zinc-600
                    dark:border-zinc-700 dark:text-zinc-400
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Page dors for index */}
      <div className="flex justify-center gap-2 pt-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setPage(i)}
            aria-label={`Go to page ${i + 1}`}
            className={[
              "h-2 w-2 rounded-full border transition",
              i === page
                ? "bg-zinc-900 border-zinc-900 dark:bg-zinc-200 dark:border-zinc-200"
                : "bg-transparent border-zinc-400 hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}
