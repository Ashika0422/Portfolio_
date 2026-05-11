import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import northwind from "@/assets/project-northwind.jpg";
import echo from "@/assets/project-echo.jpg";
import hatch from "@/assets/project-hatch.jpg";
import tidepool from "@/assets/project-tidepool.jpg";

const projects = [
  {
    name: "Northwind Analytics",
    blurb: "Real-time dashboards for logistics teams. Cut report generation from 4h to 30s.",
    tags: ["Next.js", "Postgres", "Charts"],
    year: "2025",
    image: northwind,
    github: "https://github.com/your-username/northwind-analytics",
    demo: "https://northwind-analytics.example.com",
  },
  {
    name: "Echo Notes",
    blurb: "A minimal note-taking app with on-device AI transcription and sync.",
    tags: ["React", "Whisper", "Tauri"],
    year: "2024",
    image: echo,
    github: "https://github.com/your-username/echo-notes",
    demo: "https://echo-notes.example.com",
  },
  {
    name: "Hatch DS",
    blurb: "Open-source design system used by 12 startups. 200+ accessible components.",
    tags: ["TS", "Radix", "Storybook"],
    year: "2024",
    image: hatch,
    github: "https://github.com/your-username/hatch-ds",
    demo: "https://hatch-ds.example.com",
  },
  {
    name: "Tidepool",
    blurb: "Personal finance tracker with predictive budgeting and bank sync.",
    tags: ["Remix", "Plaid", "ML"],
    year: "2023",
    image: tidepool,
    github: "https://github.com/your-username/tidepool",
    demo: "https://tidepool.example.com",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<span>Selected <span className="text-gradient">work</span>.</span>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href="#"
            className="group glass rounded-2xl overflow-hidden hover:border-primary/60 transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.name} preview`}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, oklch(0.16 0.018 250 / 0.7))",
                }}
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {p.year}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
