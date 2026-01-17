"use client";

import { Mail, Send } from "lucide-react";

export default function ContactInfo() {
  // Constant theme tokens 
  const card = "bg-[rgb(var(--card))] border-[rgb(var(--border))]";
  const heading = "text-[rgb(var(--fg))]";
  const muted = "text-[rgb(var(--muted))]";
  const ringHover = "hover:border-[rgb(var(--fg))]/30";

  return (
    <section id="contact" className="scroll-mt-28 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className={`text-3xl font-bold ${heading}`}>Contact</h2>
        <p className={`${muted} max-w-3xl`}>
          Interested in collaborating, connecting, or just have a question?
          Feel free to reach out.
        </p>
      </div>

      {/* Card */}
      <div className={`rounded-2xl border p-6 ${card}`}>
        <form
          action="https://formspree.io/f/xgooobod"
          method="POST"
          className="grid gap-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className={`text-sm ${muted}`}>Name</span>
              <input
                name="name"
                required
                placeholder="Your name"
                className={[
                  "rounded-xl border px-4 py-2 outline-none",
                  card,
                  muted,
                  "focus:border-[rgb(var(--fg))]/40",
                ].join(" ")}
              />
            </label>

            <label className="grid gap-2">
              <span className={`text-sm ${muted}`}>Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className={[
                  "rounded-xl border px-4 py-2 outline-none",
                  card,
                  muted,
                  "focus:border-[rgb(var(--fg))]/40",
                ].join(" ")}
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className={`text-sm ${muted}`}>Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className={[
                "rounded-xl border px-4 py-2 outline-none resize-y",
                card,
                muted,
                "focus:border-[rgb(var(--fg))]/40",
              ].join(" ")}
            />
          </label>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              className={[
                "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium",
                card,
                muted,
                ringHover,
              ].join(" ")}
            >
              <Send className="h-4 w-4" />
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
