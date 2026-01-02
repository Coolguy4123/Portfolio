"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { href: "#intro", label: "Intro" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function BottomNav() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200/70 bg-white/80 backdrop-blur shadow-sm
                      dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="flex items-center justify-between px-4 py-3">
          <nav className="flex gap-4 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900
                       dark:border-zinc-800 dark:text-zinc-200 dark:hover:text-white transition"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted ? (isDark ? "☀️" : "🌙") : "…"}
          </button>
        </div>
      </div>
    </div>
  );
}
