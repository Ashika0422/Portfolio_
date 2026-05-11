import { Section } from "./Section";

const groups = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "C", "C#", "SQL"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "PL/SQL"],
  },
  {
    title: "Frameworks",
    items: ["React", "NodeJS", "Flask", "FastAPI", "Spring Boot"],
  },
  {
    title: "Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Tools",
    items: ["Power BI", "MS Excel", "VS Code", "Postman"],
  },
  {
    title: "Cloud & Version Control",
    items: ["Azure", "AWS", "Hugging Face", "Git", "GitHub"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<span>Tools I reach for <span className="text-gradient">often</span>.</span>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="glass rounded-xl p-4 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-base font-semibold mb-3 text-gradient">
              {g.title}
            </h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
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
