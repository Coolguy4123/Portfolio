"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ToggleIcon() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        fixed bottom-4 right-4 z-50
        h-11 w-11 rounded-full
        flex items-center justify-center
        border border-zinc-200/70
        bg-white/80 backdrop-blur shadow-sm
        text-zinc-700 hover:text-zinc-900
        transition
        dark:border-zinc-800
        dark:bg-zinc-950/80
        dark:text-zinc-200 dark:hover:text-white
      "
    >
      {mounted ? (isDark ? "☀️" : "🌙") : "…"}
    </button>
  );
}
