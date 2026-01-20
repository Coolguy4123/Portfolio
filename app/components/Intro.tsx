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

      <h1 className="text-4xl md:text-5xl font-bold">
        Hello, I’m Freeman
      </h1>

      <p className="text-zinc-400 max-w-xl text-lg">
        Undergrad Computer Science, interested in Machine learning, Data Science and Software Engineering
      </p>

      <div className="flex gap-3 pt-2">
        
        {/* <a
          href="#projects"
          className="border border-zinc-700 rounded-lg px-4 py-2 hover:border-zinc-500 transition"
        >
          View Projects
        </a> */}

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
          className="h-10 w-px bg-[rgb(var(--fg))] opacity-60"
        />

        <a
          href="/Freeman_ML_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="border border-zinc-700 rounded-lg px-4 py-2 hover:border-zinc-500 transition"
        >
          Resume
        </a>

      </div>
    </section>
  );
}
