"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Github,
  ExternalLink,
} from "lucide-react";

type ProjectStatus = "finished" | "in_dev";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  status: ProjectStatus;
  progress?: string;
};

type Filter = "all" | ProjectStatus;

function statusLabel(status: ProjectStatus) {
  return status === "finished" ? "Finished" : "In Development";
}

// Computes icon depending on status
function StatusIcon({ status }: { status: ProjectStatus }) {
  const Icon = status === "finished" ? CheckCircle2 : Wrench;

  const card = "bg-[rgb(var(--card))] border-[rgb(var(--border))]";
  const muted = "text-[rgb(var(--muted))]";

  return (
    <div
      className={[
        "absolute right-4 top-4 z-10",
        "inline-flex items-center justify-center",
        "h-9 w-9 rounded-full border",
        card,
        "shadow-sm",
      ].join(" ")}
      aria-label={statusLabel(status)}
      title={statusLabel(status)}
    >
      <Icon className={`h-4.5 w-4.5 ${muted}`} />
    </div>
  );
}

export default function ProjectSection({ projects }: { projects: Project[] }) {
  const pageSize = 2;

  const [filter, setFilter] = useState<Filter>("all");
  const [page, setPage] = useState(0);

  // Theme tokens
  const card = "bg-[rgb(var(--card))] border-[rgb(var(--border))]";
  const heading = "text-[rgb(var(--fg))]";
  const muted = "text-[rgb(var(--muted))]";
  const chip = "border-[rgb(var(--border))] text-[rgb(var(--chip))]";
  const ringHover = "hover:border-[rgb(var(--fg))]/30";

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.status === filter);
  }, [projects, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(0);
  }, [filter]);

  const visible = useMemo(() => {
    const start = page * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const filterButton = (value: Filter, label: string) => {
    const active = filter === value;
    return (
      <button
        type="button"
        onClick={() => setFilter(value)}
        className={[
          "rounded-full border px-3 py-1 text-sm",
          active
            ? "bg-[rgb(var(--fg))] text-[rgb(var(--card))] border-[rgb(var(--fg))]"
            : `bg-transparent ${muted} border-[rgb(var(--border))] hover:border-[rgb(var(--fg))]/30`,
        ].join(" ")}
        aria-pressed={active}
      >
        {label}
      </button>
    );
  };

  return (
    <section id="projects" className="scroll-mt-24 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h2 className={`text-3xl font-bold ${heading}`}>Projects</h2>

          <p className={`text-sm ${muted}`}>
            Showing {filtered.length === 0 ? 0 : page * pageSize + 1}-
            {Math.min((page + 1) * pageSize, filtered.length)} of{" "}
            {filtered.length}
            {filter !== "all"
              ? ` • ${filter === "finished" ? "Finished" : "In Development"}`
              : ""}
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {filterButton("all", "All")}
            {filterButton("finished", "Finished")}
            {filterButton("in_dev", "In Development")}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous projects"
            className={`rounded-lg border px-3 py-2 text-sm ${card} ${muted} ${ringHover}`}
            disabled={filtered.length <= pageSize}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next projects"
            className={`rounded-lg border px-3 py-2 text-sm ${card} ${muted} ${ringHover}`}
            disabled={filtered.length <= pageSize}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <div
            key={p.title}
            className={[
              "group relative rounded-xl border p-6",
              card,
              "focus:outline-none",
              "transition-all duration-300",
              "hover:shadow-lg hover:-translate-y-1",
              ringHover,
            ].join(" ")}
          >
            {/* Status icon */}
            <StatusIcon status={p.status} />

            <div className="flex items-start justify-between gap-3 pr-10">
              <div className="space-y-1.5">
                <h3 className={`text-xl font-semibold ${heading} transition-colors group-hover:text-[rgb(var(--fg))]/80`}>{p.title}</h3>

                <p className={`text-xs ${muted}`}>
                  {statusLabel(p.status)}
                  {p.progress ? ` • ${p.progress}` : ""}
                </p>
              </div>
            </div>

            <p className={`mt-3 ${muted}`}>{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className={`text-sm rounded-full px-3 py-1 border ${chip} transition-all duration-200 hover:scale-110 hover:border-[rgb(var(--fg))]/50`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className={[
                  "inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium",
                  "transition-colors",
                  card,
                  ringHover,
                  muted,
                  "hover:text-[rgb(var(--fg))]",
                ].join(" ")}
              >
                <Github className="h-4 w-4" />
                Code
              </a>

              {p.demo ? (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium",
                    "transition-colors",
                    card,
                    ringHover,
                    muted,
                    "hover:opacity-90",
                  ].join(" ")}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
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
                "h-2 w-2 rounded-full border",
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