import Intro from "./components/Intro";
import GitHubActivity from "./components/GitHubCalendar";
import ToggleIcon from "./components/ToggleIcon";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";

const projects = [
  {
    title: "C++ Battleship",
    description: "CLI Battleship game that utilizes advanced data structures, algorithms, and OOP principles",
    tech: ["C++", "Apache Netbeans"],
    link: "https://github.com/Coolguy4123/Project1BattleShipV2",
    status: "finished"
  },
  {
    title: "Diabetes Classifier",
    description: "Another project that solves a real problem.",
    tech: ["React", "API", "UI"],
    link: "https://github.com/yourname/project-two",
    status: "finished",
    demo: "https://github.com/yourname/project-two"
  },
  {
    title: "Project Three",
    description: "Another project that solves a real problem.",
    tech: ["React", "API", "UI"],
    link: "https://github.com/yourname/project-three",
    status: "in_dev",
    progress: "Polishing UI"
  },
];

export default function Home() {
  // Theme for light/dark mode 
  const heading = "text-[rgb(var(--fg))]";
  const muted = "text-[rgb(var(--muted))]";
  const border = "border-[rgb(var(--border))]";

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 py-12 pb-32 space-y-28">
        {/* Intro */}
        <section id="intro" className="scroll-mt-24">
          <Intro />
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24">
          <SkillsSection />
        </section>

        {/* Projects */}
        <ProjectSection projects={projects} />

        {/* GitHub */}
        <section id="github" className="scroll-mt-28 space-y-6">
          <h2 className={`text-3xl font-bold ${heading}`}>GitHub Activity</h2>

          <p className={`${muted} max-w-2xl`}>
            A snapshot of my recent coding activity.
          </p>

          <GitHubActivity />
        </section>

        {/* Footer */}
        <footer className={`pt-12 border-t ${border} ${muted} text-sm`}>
          © {new Date().getFullYear()} Freeman
        </footer>
      </main>

      <ToggleIcon />
    </>
  );
}
