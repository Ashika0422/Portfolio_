import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Section } from "./Section";

const socialLinks = [
  { Icon: Github, label: "GitHub", href: "https://github.com/Ashika0422" },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ashika-chamodi/",
  },
  { Icon: Mail, label: "Gmail", href: "mailto:ashikadandeniya@gmail.com" },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio message from ${name || "Someone"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:ashikadandeniya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<span>Let's build something <span className="text-gradient">good</span>.</span>}
    >
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <div className="glass rounded-3xl p-6 md:p-8">
          <div className="glass rounded-2xl p-5 mb-6">
            <h4 className="text-base font-semibold mb-3">Send me a message</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-primary text-primary-foreground font-medium py-2.5 hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="space-y-6 text-sm">
          <p className="text-sm text-muted-foreground leading-relaxed">
            I’m open to internships, collaborations, and new learning opportunities
            in software development, data science, and machine learning. Feel free
            to contact me through email or social platforms.
          </p>
          <div>
            <p className="text-muted-foreground uppercase tracking-widest text-xs mb-2">
              Location
            </p>
            <p className="text-foreground">Colombo, Sri Lanka</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-widest text-xs mb-2">
              Response time
            </p>
            <p className="text-foreground">Usually within 24 hours</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-widest text-xs mb-2">
              Available
            </p>
            <a href="#" className="text-primary hover:underline">
              Open for internships and collaborations
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="w-11 h-11 rounded-full glass grid place-items-center hover:text-primary transition-colors"
                aria-label={label}
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ashika Chamodi. Crafted with care.</p>
        <p>Building Ideas into Reality</p>
      </footer>
    </Section>
  );
}
