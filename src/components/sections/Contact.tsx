import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<span>Let's build something <span className="text-gradient">good</span>.</span>}
    >
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <div className="glass rounded-3xl p-8 md:p-10">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm currently open to new collaborations, freelance projects, and
            the occasional coffee chat. The fastest way to reach me is email.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-gradient hover:opacity-80 transition-opacity"
          >
            <Mail size={28} />
            hello@example.com
          </a>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { Icon: Github, label: "GitHub" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-6 text-sm">
          <div>
            <p className="text-muted-foreground uppercase tracking-widest text-xs mb-2">
              Location
            </p>
            <p className="text-foreground">Berlin, Germany · CET</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-widest text-xs mb-2">
              Response time
            </p>
            <p className="text-foreground">Usually within 24 hours</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-widest text-xs mb-2">
              Calendar
            </p>
            <a href="#" className="text-primary hover:underline">
              Book a 30-min intro →
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Alex Morgan. Crafted with care.</p>
        <p>Built with React + TanStack Start</p>
      </footer>
    </Section>
  );
}
