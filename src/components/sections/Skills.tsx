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

const skillGroupsTop = groups.slice(0, 3);
const skillGroupsBottom = groups.slice(3);

const skillIcons = [
  {
    name: "Azure",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Flask",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "FastAPI",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Spring",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "NumPy",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Pandas",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    className: "invert",
  },
  {
    name: "VS Code",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

const iconStrip = [...skillIcons, ...skillIcons];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<span>Tools I reach for <span className="text-gradient">often</span>.</span>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skillGroupsTop.map((g) => (
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

      <div className="icon-marquee-mask my-6">
        <div className="icon-marquee flex items-center gap-4 pr-6">
          {iconStrip.map((icon, idx) => (
            <div
              key={`${icon.name}-${idx}`}
              className="w-12 h-12 rounded-2xl glass grid place-items-center shrink-0"
              title={icon.name}
            >
              <img
                src={icon.src}
                alt={`${icon.name} logo`}
                className={`w-7 h-7 ${icon.className ?? ""}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skillGroupsBottom.map((g) => (
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
