import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, GraduationCap } from "lucide-react";

const stats = [
  { icon: Code2, value: "4+", label: "Production Projects" },
  { icon: Lightbulb, value: "15+", label: "Technologies" },
  { icon: GraduationCap, value: "9.0", label: "Current SGPA" },
  { icon: Rocket, value: "3+", label: "Research & Internships" },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">About Me</p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Driven by purpose,<br />
          <span className="text-gradient">powered by engineering</span>
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <SectionReveal delay={0.1}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I don't just build apps — I architect systems that work when the internet doesn't.
              From designing offline-first EHR platforms for rural healthcare workers to engineering
              AI chatbots that deliver public health guidance via SMS, I focus on technology that
              reaches people who need it most.
            </p>
            <p>
              As a Computer Science student at Nirma University, I've worked across the full stack —
              React frontends, FastAPI/Node.js backends, PostgreSQL databases, and ML pipelines.
              My research in Federated Learning explores how to train models without compromising
              patient privacy.
            </p>
            <p>
              Whether it's scraping labor market data to visualize workforce transformations or
              building resilient inventory systems with RBAC, I optimize for clarity, reliability,
              and measurable impact.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 card-shadow"
              >
                <stat.icon className="mb-3 h-5 w-5 text-primary" />
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default About;
