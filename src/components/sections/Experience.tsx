import { useState } from "react";
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

const volunteering: typeof experience = [];

function Timeline({ items }: { items: typeof experience }) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />
      <div className="space-y-8 md:space-y-10">
        {items.map((it, index) => {
          const isLeft = index % 2 === 0;
          const content = (
            <div className={`space-y-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
              <h4 className="text-lg font-semibold">{it.role}</h4>
              <p className="text-sm text-foreground/80">{it.org}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {it.period}
              </p>
              {it.desc ? (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              ) : null}
            </div>
          );

          return (
            <div key={it.role + it.org} className="relative">
              <div className="flex gap-3 md:hidden">
                <span className="mt-1.5 w-3 h-3 rounded-full bg-gradient-primary shadow-glow" />
                {content}
              </div>
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-x-8">
                <div className="md:pr-8 md:text-right">
                  {isLeft ? content : null}
                </div>
                <div className="relative flex justify-center">
                  <span className="mt-1.5 w-3.5 h-3.5 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                </div>
                <div className="md:pl-8">
                  {!isLeft ? content : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Experience() {
  const tabItems = { experience, education, volunteering };
  type TabKey = keyof typeof tabItems;
  const [activeTab, setActiveTab] = useState<TabKey>("experience");
  const visibleItems = tabItems[activeTab];

  return (
    <Section
      id="experience"
      eyebrow="Education & Experience"
      title={<span>The <span className="text-gradient">journey</span> so far.</span>}
    >
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("experience")}
          className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
            activeTab === "experience"
              ? "bg-gradient-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          Experience
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("education")}
          className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
            activeTab === "education"
              ? "bg-gradient-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          Education
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("volunteering")}
          className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
            activeTab === "volunteering"
              ? "bg-gradient-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          Volunteering
        </button>
      </div>

      {visibleItems.length === 0 ? (
        <div className="glass rounded-2xl p-6 text-sm text-muted-foreground">
          No volunteering added yet.
        </div>
      ) : (
        <Timeline items={visibleItems} />
      )}
    </Section>
  );
}
