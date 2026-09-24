import Image from "next/image";

type Experience = {
  organization: string;
  role: string;
  dates: string;
  location: string;
  logo: string;
  description: string;
  tags: string[];
};

const experiences: Experience[] = [
  {
    organization: "General Motors Cruise",
    role: "AI/ML Engineer Intern — Subsystem Evaluation",
    dates: "May 2026 – August 2026",
    location: "Sunnyvale, CA",
    logo: "/GM_Logo.png",
    description:
      "Evaluated autonomous-vehicle layers by building Python and SQL metrics plus a Streamlit dashboard that helped engineers investigate braking, steering, and other subsystem behavior.",
    tags: ["Autonomous Vehicles", "Python", "SQL", "Streamlit"],
  },
  {
    organization: "Cal Poly Pomona · Northrop Grumman Collaboration Project",
    role: "UGV Integration Software Engineer",
    dates: "August 2025 – May 2026",
    location: "Pomona, CA",
    logo: "/NGCP_Logo.jpeg",
    description:
      "Integrated an autonomous UGV stack on Ubuntu Linux by pairing ROS 2 nodes with cross-functional hardware and software testing to make system debugging more reliable.",
    tags: ["Robotics", "ROS 2", "C++", "Linux", "System Integration"],
  },
  {
    organization: "Cal Poly Pomona Autonomous Vehicle Lab · UAV Project",
    role: "Computer Vision Team",
    dates: "August 2025 – May 2026",
    location: "Pomona, CA",
    logo: "/AVL_Logo.jpg",
    description:
      "Improved thermal-image perception with a PyTorch YOLOv8 detector, then evaluated experiments with mAP, precision, and recall while tuning data augmentation.",
    tags: ["Computer Vision", "PyTorch", "YOLOv8", "Model Evaluation"],
  },
];

export default function ExperienceSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const card = "bg-[rgb(var(--card))] border-[rgb(var(--border))]";
  const heading = "text-[rgb(var(--fg))]";
  const muted = "text-[rgb(var(--muted))]";
  const chip = "border-[rgb(var(--border))] text-[rgb(var(--chip))]";

  return (
    <section id="experience" className="scroll-mt-24 space-y-6">
      <div className="space-y-2">
        <h2 className={`text-3xl font-bold ${heading}`}>Experience</h2>
      </div>

      <div className="space-y-5">
        {experiences.map((experience) => (
          <article
            key={`${experience.organization}-${experience.role}`}
            className={`rounded-2xl border p-5 sm:p-6 ${card} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--card))] p-2">
                <Image
                  src={`${basePath}${experience.logo}`}
                  alt={`${experience.organization} logo`}
                  width={72}
                  height={56}
                  className="max-h-12 w-auto object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className={`text-lg font-semibold ${heading}`}>
                      {experience.organization}
                    </h3>
                    <p className={`mt-1 text-sm ${muted}`}>{experience.role}</p>
                  </div>
                  <div className={`shrink-0 text-sm sm:text-right ${muted}`}>
                    <p>{experience.dates}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                <p className={`mt-4 leading-relaxed ${muted}`}>
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-xs sm:text-sm ${chip}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
