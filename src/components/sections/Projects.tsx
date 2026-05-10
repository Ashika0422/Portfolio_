import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    name: "Northwind Analytics",
    blurb:
      "Real-time dashboards for logistics teams. Cut report generation from 4h to 30s.",
    tags: ["Next.js", "Postgres", "Charts"],
    year: "2025",
  },
  {
    name: "Echo Notes",
    blurb:
      "A minimal note-taking app with on-device AI transcription and sync.",
    tags: ["React", "Whisper", "Tauri"],
    year: "2024",
  },
  {
    name: "Hatch DS",
    blurb:
      "Open-source design system used by 12 startups. 200+ accessible components.",
    tags: ["TS", "Radix", "Storybook"],
    year: "2024",
  },
  {
    name: "Tidepool",
    blurb:
      "Personal finance tracker with predictive budgeting and bank sync.",
    tags: ["Remix", "Plaid", "ML"],
    year: "2023",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<span>Selected <span className="text-gradient">work</span>.</span>}
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <a
            key={p.name}
            href="#"
            className="group glass rounded-3xl p-8 hover:border-primary/60 transition-all hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {p.year}
              </span>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{p.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
