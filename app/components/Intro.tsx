import Image from "next/image";

export default function Intro() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section
      id="intro"
      className="flex flex-col items-center text-center space-y-6 pt-16"
    >
      <Image
        src={`${basePath}/Head.jpeg`}
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
          Building intelligent systems at the intersection of autonomous
          vehicles, robotics, machine learning, and software engineering
        </p>

      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-[rgb(var(--muted))]">
        <span className="rounded-full border border-zinc-700 px-3 py-1">
          Autonomous Vehicles
        </span>
        <span className="rounded-full border border-zinc-700 px-3 py-1">
          Robotics
        </span>
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
          href="https://github.com/Coolguy4123"
          target="_blank"
          rel="noreferrer"
          className="border border-zinc-700 rounded-lg px-4 py-2 hover:border-zinc-500 transition"
        >
          GitHub
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
          href={`${basePath}/Freeman_Yiu_Resume.pdf`}
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
