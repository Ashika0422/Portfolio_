import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
// images removed for now

const projects = [
        {
        name: "BloomCare AI",
        blurb: "AI-powered maternal health platform for pregnancy risk prediction, personalized monitoring, and real-time health assistance using ML-driven three-class risk stratification.",
        tags: ["React", "Flask", "Random Forest", "MySQL", "Groq", "Gemini API"],
        year: "2026",
        github: "https://github.com/Ashika0422/BloomCare_AI.git"
      },
        {
        name: "Predictive Energy Forecasting",
        blurb: "Built an end-to-end energy demand forecasting system on 145K hourly records with XGBoost, enabling accurate long-term demand prediction and interactive analytics.",
        tags: ["Python", "XGBoost", "Streamlit", "Power BI", "Time Series"],
        year: "2026",
        github: "https://github.com/Ashika0422/Predictive-Energy-Forecasting.git"
      },
        {
        name: "Customer Behavior Analysis",
        blurb: "Retail analytics solution uncovering customer purchasing patterns, revenue drivers, and product trends through SQL-driven insights and interactive BI dashboards.",
        tags: ["Python", "MySQL", "Power BI", "Pandas", "Data Analytics"],
        year: "2026",
        github: "https://github.com/Ashika0422/Customer_Behavior_Analysis.git"
      },
        {
        name: "Socialite",
        blurb: "Full-stack social media platform with secure authentication, personalized feeds, friend management, and scalable backend architecture built with Spring Boot.",
        tags: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf", "Tailwind CSS"],
        year: "2025",
        github: "https://github.com/Ashika0422/social-media-app.git"
      },
      {
        name: "HR Management System",
        blurb: "Desktop-based employee management platform streamlining HR workflows through role-based access, leave management, and efficient record administration.",
        tags: ["C#", ".NET", "SQL Server", "Windows Forms"],
        year: "2025",
        github: "https://github.com/Ashika0422/HR-Management-System.git"
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
            {/* image removed for now */}
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
                {/* demo link removed for now */}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
