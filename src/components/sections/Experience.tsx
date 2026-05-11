import { Section } from "./Section";

const experience = [
  {
    role: "Vice Secretary",
    org: "IEEE Computer Society Chapter, University of Kelaniya",
    period: "2025 — Present",
    desc: "",
  },
  {
    role: "Co-Editor",
    org: "Computer Science Students Association, University of Kelaniya",
    period: "2024 — 2025",
    desc: "",
  },
  {
    role: "Co-Editor",
    org: "ISACA Student Group, University of Kelaniya",
    period: "2024 — 2025",
    desc: "",
  },
];

const education = [
  {
    role: "B.Sc. (Hons) in Computer Science",
    org: "University of Kelaniya",
    period: "2023 — Present",
    desc: "Data Science | CGPA: 3.96/4.00 · Dalugama, Sri Lanka",
  },
  {
    role: "G.C.E. A/L (2021)",
    org: "Rajapaksha Central College",
    period: "2012 — 2020",
    desc: "Combined Maths A, Physics B, Chemistry B | Z Score 1.5841 · Weeraketiya, Sri Lanka",
  },
];

function Timeline({ items }: { items: typeof experience }) {
  return (
    <div className="relative pl-6 border-l border-border space-y-8">
      {items.map((it) => (
        <div key={it.role + it.org} className="relative">
          <span className="absolute -left-[27px] top-2 w-3 h-3 rounded-full bg-gradient-primary shadow-glow" />
          <div className="flex flex-wrap justify-between gap-2 mb-1">
            <h4 className="text-lg font-semibold">{it.role}</h4>
            <span className="text-xs text-primary uppercase tracking-wider">
              {it.period}
            </span>
          </div>
          <p className="text-sm text-foreground/80 mb-2">{it.org}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Education & Experience"
      title={<span>The <span className="text-gradient">journey</span> so far.</span>}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Experience
          </h3>
          <Timeline items={experience} />
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Education
          </h3>
          <Timeline items={education} />
        </div>
      </div>
    </Section>
  );
}
