import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis"],
  },
  {
    title: "Tooling & Cloud",
    items: ["AWS", "Docker", "Vite", "GitHub Actions", "Vercel"],
  },
  {
    title: "Design",
    items: ["Figma", "Design systems", "Accessibility", "Motion", "Prototyping"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<span>Tools I reach for <span className="text-gradient">often</span>.</span>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="glass rounded-2xl p-6 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-4 text-gradient">{g.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {g.items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
