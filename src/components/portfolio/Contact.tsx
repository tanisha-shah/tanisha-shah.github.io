import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const socials = [
  { icon: Mail, label: "tanisha.shah@example.com", href: "mailto:tanisha.shah@example.com" },
  { icon: Linkedin, label: "LinkedIn — Tanisha Shah", href: "https://linkedin.com/in/tanisha-shah" },
  { icon: Github, label: "GitHub — tanishashah", href: "https://github.com/tanishashah" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Contact</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Interested in collaboration, research, or opportunities? I'd love to hear from you.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <SectionReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                style={{ background: "var(--gradient-primary)" }}
              >
                {sent ? "Message Sent! ✓" : <><Send size={16} /> Send Message</>}
              </motion.button>
            </form>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">Or reach out directly</p>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground card-shadow"
                >
                  <s.icon size={18} className="text-primary" />
                  {s.label}
                </motion.a>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
