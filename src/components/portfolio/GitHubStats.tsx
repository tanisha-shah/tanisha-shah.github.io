import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Github, GitCommit, Star, GitFork } from "lucide-react";

const stats = [
  { icon: Github, label: "Repositories", value: "5+" },
  { icon: GitCommit, label: "Contributions", value: "60+" }
  // { icon: Star, label: "Stars Earned", value: ""},
  // { icon: GitFork, label: "Forks", value: "10+" },
];

const languages = [
  { name: "Python", percent: 30, color: "hsl(220, 100%, 62%)" },
  { name: "JavaScript", percent: 25, color: "hsl(255, 60%, 56%)" },
  { name: "Java", percent: 20, color: "hsl(200, 80%, 50%)" },
  { name: "C++", percent: 12, color: "hsl(180, 60%, 45%)" },
  { name: "HTML/CSS", percent: 8, color: "hsl(340, 60%, 55%)" },
  { name: "SQL", percent: 5, color: "hsl(220, 10%, 40%)" },
];

// Generate mock contribution data
const weeks = 52;
const days = 7;
const generateContributions = () =>
  Array.from({ length: weeks }, () =>
    Array.from({ length: days }, () => Math.random())
  );

const contributions = generateContributions();

const getColor = (value: number) => {
  if (value < 0.15) return "hsl(220, 14%, 12%)";
  if (value < 0.35) return "hsl(220, 100%, 62% / 0.2)";
  if (value < 0.6) return "hsl(220, 100%, 62% / 0.45)";
  if (value < 0.8) return "hsl(220, 100%, 62% / 0.7)";
  return "hsl(220, 100%, 62%)";
};

const GitHubStats = () => (
  <section id="github" className="section-padding bg-card/30">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">GitHub Activity</p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Code <span className="text-gradient">in action</span>
        </h2>
      </SectionReveal>

      {/* Stats row */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <SectionReveal key={s.label} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-xl border border-border bg-card p-5 text-center card-shadow transition-all duration-300 hover:border-primary/30"
            >
              <s.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
              <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>

      {/* Contribution graph */}
      <SectionReveal delay={0.2}>
        <div className="mt-8 rounded-xl border border-border bg-card p-6 card-shadow overflow-x-auto">
          <h3 className="font-display text-sm font-semibold text-foreground mb-4">Contribution Graph</h3>
          <div className="flex gap-[3px]">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: wi * 0.01 + di * 0.01 }}
                    className="h-[11px] w-[11px] rounded-sm"
                    style={{ backgroundColor: getColor(day) }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Top languages */}
      <SectionReveal delay={0.3}>
        <div className="mt-6 rounded-xl border border-border bg-card p-6 card-shadow">
          <h3 className="font-display text-sm font-semibold text-foreground mb-4">Top Languages</h3>
          <div className="flex h-3 w-full overflow-hidden rounded-full">
            {languages.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ backgroundColor: lang.color }}
                className="h-full"
              />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-xs text-muted-foreground">{lang.name} {lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default GitHubStats;
