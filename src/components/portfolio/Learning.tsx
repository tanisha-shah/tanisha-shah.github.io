import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Brain, Shield, TrendingUp, Database } from "lucide-react";

const items = [
  { icon: Brain, title: "Federated Learning", desc: "Researching privacy-preserving ML — training models across distributed healthcare nodes without centralizing sensitive data." },
  { icon: TrendingUp, title: "Generative AI & LLMs", desc: "Exploring prompt engineering, RAG architectures, and fine-tuning strategies for production-grade AI applications." },
  { icon: Database, title: "Big Data Analytics", desc: "Deepening expertise in large-scale data processing, real-time pipelines, and building systems that surface actionable insights." },
  { icon: Shield, title: "Cloud & Security", desc: "Expanding knowledge in Azure/GCP ecosystems, CI/CD pipelines, and application security best practices." },
];

const Learning = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Currently Learning</p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Always <span className="text-gradient">growing</span>
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <SectionReveal key={item.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4, borderColor: "hsl(220, 100%, 62%)" }}
              className="rounded-xl border border-border bg-card p-6 card-shadow transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Learning;
