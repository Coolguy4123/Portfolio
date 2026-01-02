import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import GitHubActivity from "./components/GitHubCalendar";
import BottomNav from "./components/BottomNav";

const projects = [
  {
    title: "Project One",
    description: "Short description of what this project does.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/yourname/project-one",
  },
  {
    title: "Project Two",
    description: "Another project that solves a real problem.",
    tech: ["React", "API", "UI"],
    link: "https://github.com/yourname/project-two",
  },
];

export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-12 pb-32 space-y-28">
        {/* INTRO */}
        <section id="intro" className="scroll-mt-24">
          <Intro />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <h2 className="text-3xl font-bold">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <span className="text-zinc-500">↗</span>
                </div>

                <p className="text-zinc-400 mt-2">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm border border-zinc-800 rounded-full px-3 py-1 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* GITHUB ACTIVITY */}
        <section id="github" className="scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-bold">GitHub Activity</h2>

          <p className="text-zinc-400 max-w-2xl">
            A snapshot of my recent coding activity.
          </p>

          <GitHubActivity />
        </section>

    

        {/* FOOTER */}
        <footer className="pt-12 border-t border-zinc-800 text-zinc-500 text-sm">
          © {new Date().getFullYear()} Freeman
        </footer>
      </main>

      <BottomNav />
    </>
  );
}
