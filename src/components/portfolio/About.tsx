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
              I am a Computer Science student at Nirma University with a keen interest in understanding 
              how systems work and translating ideas into practical, reliable solutions. I value clarity 
              in thinking and enjoy approaching problems in a structured and thoughtful way.
            </p>
            <p>
              Through my work, I have explored developing user-centric applications as well as solutions aimed at improving 
              accessibility, including projects in healthcare and communication. I strive to keep my work simple, intuitive, 
              and genuinely useful.
            </p>
            <p>
              I approach every opportunity as a chance to learn and grow, taking the time to understand problems thoroughly and 
              working towards solutions that create meaningful impact.
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
