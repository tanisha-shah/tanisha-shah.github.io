const Footer = () => (
  <footer className="border-t border-border px-6 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Tanisha Shah — Designed & built with precision.
      </p>
      <div className="flex gap-6">
        <a href="https://github.com/tanishashah" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          GitHub
        </a>
        <a href="https://linkedin.com/in/tanisha-shah" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          LinkedIn
        </a>
        <a href="mailto:tanisha.shah@example.com" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
