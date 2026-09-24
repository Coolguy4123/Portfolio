import Image from "next/image";

export default function Intro() {
  return (
    <section
      id="intro"
      className="flex flex-col items-center text-center space-y-6 pt-16"
    >
      <Image
        src="/Head.jpeg"
        alt="Freeman's profile picture"
        width={200}
        height={200}
        className="rounded-full border border-zinc-700"
        priority
      />

      <div className="space-y-3">

        <h1 className="text-4xl font-bold md:text-5xl">
          Freeman Yiu
        </h1>

        <p className="max-w-2xl text-lg text-[rgb(var(--fg))]">
          I build practical machine learning and software projects that turn
          data, user needs, and technical ideas into clear, working products.
        </p>

      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-[rgb(var(--muted))]">
        <span className="rounded-full border border-zinc-700 px-3 py-1">
          Machine Learning
        </span>
        <span className="rounded-full border border-zinc-700 px-3 py-1">
          Data Science
        </span>
        <span className="rounded-full border border-zinc-700 px-3 py-1">
          Software Engineering
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <a
          href="#projects"
          className="border border-zinc-700 rounded-lg px-4 py-2 hover:border-zinc-500 transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/Coolguy4123"
          target="_blank"
          rel="noreferrer"
          className="border border-zinc-700 rounded-lg px-4 py-2 hover:border-zinc-500 transition"
        >
          View GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/freeman-yiu-3ab0261a5/"
          target="_blank"
          rel="noreferrer"
          className="border border-zinc-700 rounded-lg px-4 py-2 hover:border-zinc-500 transition"
        >
          LinkedIn
        </a>

        <span
          aria-hidden="true"
          className="hidden h-10 w-px bg-[rgb(var(--fg))] opacity-60 md:block"
        />

        <a
          href="/Freeman_ML_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-zinc-700 px-4 py-2 transition hover:border-zinc-500"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
