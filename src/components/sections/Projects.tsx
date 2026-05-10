import { ArrowUpRight } from "lucide-react";
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
  },
  {
    name: "Echo Notes",
    blurb: "A minimal note-taking app with on-device AI transcription and sync.",
    tags: ["React", "Whisper", "Tauri"],
    year: "2024",
    image: echo,
  },
  {
    name: "Hatch DS",
    blurb: "Open-source design system used by 12 startups. 200+ accessible components.",
    tags: ["TS", "Radix", "Storybook"],
    year: "2024",
    image: hatch,
  },
  {
    name: "Tidepool",
    blurb: "Personal finance tracker with predictive budgeting and bank sync.",
    tags: ["Remix", "Plaid", "ML"],
    year: "2023",
    image: tidepool,
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
            className="group glass rounded-3xl overflow-hidden hover:border-primary/60 transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
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
            <div className="p-7">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {p.year}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{p.blurb}</p>
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
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
