import Intro from "./components/Intro";
import GitHubActivity from "./components/GitHubCalendar";
import ToggleIcon from "./components/ToggleIcon";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";
import ContactInfo from "./components/ContactInfo";

const projects = [
  {
    title: "C++ Battleship",
    description:
      "CLI Battleship game built with object-oriented design, custom data structures, and game-state validation.",
    tech: ["C++", "Apache Netbeans"],
    link: "https://github.com/Coolguy4123/Project1BattleShipV2",
    status: "finished",
  },
  {
    title: "Diabetes Classifier",
    description:
      "Machine learning workflow for predicting diabetes risk from patient health data with exploratory analysis and model evaluation.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
    ],
    link: "https://github.com/Coolguy4123",
    status: "finished",
    demo: "https://github.com/Coolguy4123",
  },
  {
    title: "YouTube Comments Sentiment Analysis",
    description:
      "Analyzes viewer sentiment from a YouTube video URL and summarizes comment polarity with NLP tooling.",
    tech: ["Python", "NLP", "Streamlit"],
    link: "https://github.com/Coolguy4123",
    status: "finished",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built with Next.js and Tailwind to showcase projects, skills, and GitHub activity.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Coolguy4123",
    status: "in_dev",
    progress: "Refining project presentation",
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
            My recent coding activity on GitHub
          </p>

          <GitHubActivity />
        </section>

        <ContactInfo />

        {/* Footer */}
        <footer className={`pt-12 border-t ${border} ${muted} text-sm`}>
          © {new Date().getFullYear()} Freeman
        </footer>
      </main>

      <ToggleIcon />
    </>
  );
}
