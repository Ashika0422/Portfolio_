import { Section } from "./Section";

const experience = [
  {
    role: "Senior Software Engineer",
    org: "Lumen Labs",
    period: "2023 — Present",
    desc: "Lead engineer on the core platform. Shipped a full design-system rewrite and reduced p95 latency by 60%.",
  },
  {
    role: "Software Engineer",
    org: "Northwind",
    period: "2021 — 2023",
    desc: "Built data-heavy dashboards and an internal component library used by 40+ engineers.",
  },
  {
    role: "Frontend Developer",
    org: "Studio Kova",
    period: "2019 — 2021",
    desc: "Crafted bespoke marketing sites and product UIs for early-stage startups.",
  },
];

const education = [
  {
    role: "B.Sc. Computer Science",
    org: "TU Munich",
    period: "2015 — 2019",
    desc: "Thesis on perceptual color spaces in data visualization. Graduated with honors.",
  },
  {
    role: "Exchange Program",
    org: "University of Tokyo",
    period: "2018",
    desc: "Semester focused on HCI and interaction design research.",
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
