import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const roles = [
  "Curious Tech Learner",
  "Problem Solver",
  "Exploring AI & Systems",
  "Building with Purpose",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-bg)" }} />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full opacity-20 blur-[120px]" style={{ background: "var(--gradient-primary)" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-sm font-medium tracking-widest uppercase text-primary"
        >
          Hi, I'm Tanisha Shah
        </motion.p> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl"
        >
          TANISHA SHAH
          <br />
          <span className="text-gradient"></span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 h-8 font-display text-xl font-medium text-muted-foreground md:text-2xl"
        >
          <span>{displayed}</span>
          <span className="ml-0.5 inline-block w-0.5 h-6 bg-primary animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          B.Tech CSE @ Nirma University
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 glow"
            style={{ background: "var(--gradient-primary)" }}
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-muted"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
