import Intro from "./components/Intro";
import GitHubActivity from "./components/GitHubCalendar";
import ToggleIcon from "./components/ToggleIcon";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";

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
  ,
  {
    title: "Project Three",
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

        {/* Intro */}
        <section id="intro" className="scroll-mt-24">
          <Intro />
        </section>

        {/* Skill section */}
        <section id="skills" className="scroll-mt-24">
          <SkillsSection />
        </section>

        <ProjectSection projects={projects} />

        {/* Github contribution graph */}
        <section id="github" className="scroll-mt-28 space-y-6">
          <h2 className="text-3xl font-bold">GitHub Activity</h2>

          <p className="text-zinc-400 max-w-2xl">
            A snapshot of my recent coding activity.
          </p>

          <GitHubActivity />
        </section>

    

        {/* Footer */}
        <footer className="pt-12 border-t border-zinc-800 text-zinc-500 text-sm">
          © {new Date().getFullYear()} Freeman
        </footer>
      </main>

      <ToggleIcon />
    </>
  );
}
