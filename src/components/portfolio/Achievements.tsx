import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Award, Medal, GraduationCap, Cloud } from "lucide-react";

const achievements = [
  { icon: Medal, title: "Innovate Bharat 2026 — National Finalist", desc: "Advancing to the national finals of Innovate Bharat Hackathon 2026, competing among top engineering teams across India", category: "Hackathon" },
  { icon: Medal, title: "HackaMined 2026 — 48hr National Hackathon", desc: "Competed in a 48-hour national-level hackathon, building production-ready solutions under extreme time constraints", category: "Hackathon" },
  { icon: Medal, title: "Smart India Hackathon (SIH) 2025", desc: "Qualified through the internal selection round — one of the top teams chosen to represent the university for national innovation challenges", category: "Hackathon" },
  { icon: Cloud, title: "Google Cloud — Generative AI", desc: "Completed Google Cloud Skills Boost certification in Introduction to Generative AI, covering LLMs and AI-powered solutions", category: "Certification" },
  { icon: Award, title: "Data Science Certification", desc: "Certified in data handling, visualization, and predictive modelling through structured coursework and hands-on projects", category: "Certification" },
  { icon: GraduationCap, title: "9.0 SGPA — Nirma University", desc: "Maintaining a 9.0 SGPA and 8.75 CGPA in B.Tech Computer Science & Engineering with consistently strong academic performance", category: "Academic" },
];

const Achievements = () => (
  <section id="achievements" className="section-padding">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Achievements</p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Recognition & <span className="text-gradient">milestones</span>
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <SectionReveal key={a.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 card-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <a.icon size={18} className="text-primary" />
                </div>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {a.category}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">{a.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
