import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between ${
          scrolled ? "glass rounded-full" : ""
        } transition-all duration-300`}
        style={scrolled ? { padding: "0.6rem 1.25rem" } : undefined}
      >
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">ashika.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-4 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-6 mt-2 glass rounded-2xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
