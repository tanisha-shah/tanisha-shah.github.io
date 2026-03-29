import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 78 },
      { name: "SQL", level: 82 },
      { name: "HTML/CSS", level: 88 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js / Express", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "AngularJS / jQuery", level: 65 },
      { name: "Rasa NLU/Core", level: 75 },
      { name: "Pandas / NumPy / Scikit-Learn", level: 78 },
    ],
  },
  {
    title: "Databases & Infrastructure",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "WatermelonDB", level: 75 },
      { name: "Firebase", level: 78 },
      { name: "Azure / GCP", level: 65 },
      { name: "CI/CD Pipelines", level: 70 },
    ],
  },
  {
    title: "Concepts & Methods",
    skills: [
      { name: "Data Structures & Algorithms", level: 88 },
      { name: "RESTful API Design", level: 85 },
      { name: "AI / ML / Neural Networks", level: 75 },
      { name: "Generative AI (LLMs)", level: 70 },
      { name: "Agile / Scrum", level: 80 },
      { name: "Application Resiliency", level: 78 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-card/30">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Skills</p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Technical <span className="text-gradient">arsenal</span>
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {categories.map((cat, ci) => (
          <SectionReveal key={cat.title} delay={ci * 0.1}>
            <div className="rounded-xl border border-border bg-card p-6 card-shadow">
              <h3 className="font-display text-lg font-semibold text-foreground mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
