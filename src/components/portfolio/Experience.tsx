import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Briefcase, FlaskConical, Users } from "lucide-react";

const experiences = [
  {
    role: "Federated Learning Research Assistant",
    org: "Nirma University",
    duration: "Ongoing",
    icon: FlaskConical,
    points: [
      "Researching privacy-preserving ML techniques for healthcare data across distributed nodes",
      "Exploring federated architectures that train models without centralizing sensitive patient records",
    ],
  },
  {
    role: "Web Development Master — IEEE Computer Society",
    org: "Nirma University",
    duration: "Aug 2025 — Present",
    icon: Users,
    points: [
      "Leading web development initiatives for the IEEE Computer Society chapter",
      "Mentoring junior members on modern frontend and backend engineering practices",
    ],
  },
  {
    role: "Data Analytics Virtual Intern",
    org: "Deloitte",
    duration: "February 2026",
    icon: Briefcase,
    points: [
      "Completed data analytics program focused on business intelligence and visualization",
      "Applied analytical frameworks to real-world datasets for actionable business insights",
    ],
  },
  {
    role: "Data Science Intern",
    org: "IIT Bhubaneswar (Rinex)",
    duration: "Sep 2024 — Oct 2024",
    icon: Briefcase,
    points: [
      "Strengthened data handling, visualization, and predictive modelling skills",
      "Worked on real datasets under mentorship from IIT faculty researchers",
    ],
  },
  {
    role: "Executive Committee Member — ACES",
    org: "Nirma University",
    duration: "Dec 2025 — Present",
    icon: Users,
    points: [
      "Serving on the executive committee of the Association of Computer Engineering Students",
      "Organizing technical events and fostering community among CS students",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding bg-card/30">
    <div className="mx-auto max-w-4xl">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Experience</p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Where I've <span className="text-gradient">contributed</span>
        </h2>
      </SectionReveal>

      <div className="relative mt-12">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />

        {experiences.map((exp, i) => (
          <SectionReveal key={exp.role} delay={i * 0.12}>
            <div className={`relative mb-12 flex flex-col md:flex-row ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />

              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 card-shadow"
                >
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <exp.icon size={14} />
                    <span className="text-xs font-medium">{exp.duration}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.org}</p>
                  <ul className="mt-3 space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
