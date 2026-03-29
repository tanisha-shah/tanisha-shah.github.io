import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Star } from "lucide-react";
import SectionReveal from "./SectionReveal";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  tech: string[];
  featured: boolean;
  github: string;
  demo: string;
  highlight: string;
}

const projects: Project[] = [
  {
    title: "ASHASaathi — Offline-First Mobile EHR",
    description: "Architected an offline-first Electronic Health Record app ensuring data resilience and sync in low-connectivity rural areas.",
    longDescription: "Designed and built a mobile EHR platform for ASHA healthcare workers operating in regions with unreliable internet. Engineered WatermelonDB local storage with Firebase auto-sync to guarantee zero data loss offline. Integrated a multilingual Rasa AI assistant that provides real-time clinical guidance and automates patient follow-up reminders — reducing manual workload and improving care continuity.",
    tags: ["Healthcare", "AI", "Offline-First"],
    tech: ["React", "FastAPI", "WatermelonDB", "Firebase", "Rasa"],
    featured: true,
    github: "#",
    demo: "#",
    highlight: "Zero data loss in offline environments",
  },
  {
    title: "CareerLens — Workforce Analytics Platform",
    description: "Developed a full-stack data platform to visualize AI-driven labor market transformations with real-time job demand tracking.",
    longDescription: "Built an end-to-end workforce analytics platform powered by a PostgreSQL backend and Python scraping pipeline that harvests live data from LinkedIn and Naukri. Designed interactive heatmaps and engineered an early-warning algorithm to flag declining roles and emerging talent gaps — enabling proactive career planning and workforce development decisions.",
    tags: ["Data", "Full-Stack", "Analytics"],
    tech: ["React.js", "Node.js", "PostgreSQL", "Python"],
    featured: true,
    github: "#",
    demo: "#",
    highlight: "Real-time labor market intelligence",
  },
  {
    title: "MedBot — AI Public Health Chatbot",
    description: "Built an SMS/USSD health chatbot for rural symptom prediction and treatment guidance with end-to-end encryption.",
    longDescription: "Engineered a scalable public health chatbot accessible via SMS and USSD — designed for populations without smartphone access. Built a FastAPI + MongoDB backend with end-to-end encryption to securely handle high-volume traffic. Implemented big data pattern detection on user queries to generate early disease outbreak alerts, enabling proactive public health response.",
    tags: ["AI", "Healthcare", "Backend"],
    tech: ["Rasa", "FastAPI", "MongoDB", "Twilio"],
    featured: true,
    github: "#",
    demo: "#",
    highlight: "Early outbreak detection via query patterns",
  },
  {
    title: "Smart Inventory & Warehouse System",
    description: "Architected a full-stack inventory dashboard managing multi-warehouse data with real-time stock tracking and RBAC.",
    longDescription: "Built a comprehensive inventory management system with a Node.js/Express backend and React frontend. Optimized asynchronous product update logic, reducing data retrieval latency by 30%. Implemented Role-Based Access Control (RBAC) for admin and user interfaces, ensuring data security and operational integrity across multiple warehouse locations.",
    tags: ["Full-Stack", "Enterprise"],
    tech: ["Node.js", "Express.js", "React", "SQL"],
    featured: false,
    github: "#",
    demo: "#",
    highlight: "30% reduction in data retrieval latency",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Projects</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Featured <span className="text-gradient">work</span>
          </h2>
        </SectionReveal>

        {/* Featured */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => setSelected(project)}
                className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 card-shadow relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  <Star size={12} /> Featured
                </div>
                <div className="mb-4 flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <p className="mt-3 text-xs font-medium text-primary">{project.highlight}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Others */}
        {others.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((project, i) => (
              <SectionReveal key={project.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => setSelected(project)}
                  className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 card-shadow"
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl border border-border bg-card p-8 card-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selected.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{selected.title}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
                  <X size={20} />
                </button>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{selected.longDescription}</p>
              <p className="mt-3 text-sm font-medium text-primary">⚡ {selected.highlight}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={selected.github}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={selected.demo}
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
