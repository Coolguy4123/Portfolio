"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GitHubActivity() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div
            className={[
                "rounded-2xl border p-6 transition-colors",
                isDark
                    ? "border-zinc-800 bg-zinc-950"
                    : "border-zinc-200 bg-zinc-50",
            ].join(" ")}
        >
            <GitHubCalendar
                username="Coolguy4123"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                colorScheme={isDark ? "dark" : "light"}
                theme={{
                    dark: [
                        "#161b22",
                        "#0e4429",
                        "#006d32",
                        "#26a641",
                        "#39d353",
                    ],
                    light: [
                        "#ebedf0",
                        "#9be9a8",
                        "#40c463",
                        "#30a14e",
                        "#216e39",
                    ],
                }}
            />
        </div>
    );
}
