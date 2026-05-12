import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

type VolunteeringItem = {
  role: string;
  org: string;
  period: string;
  location?: string;
  description: string;
  tags: string[];
  images: string[];
};

const volunteering: VolunteeringItem[] = [
  {
    role: "Student Ambassador",
    org: "Faculy of Computing & Technology, University of Kelaniya",
    period: "May 2025",
    location: "Kelaniya, Sri Lanka",
    description:
      "Represented the ISACA Student Group UOK at the FCT Open Day by guiding visitors, sharing information about faculty activities, and promoting cybersecurity awareness.",
    tags: ["Community", "Leadership","CyberSecurity", "Outreach"],
    images: [
      "/volunteering/student-ambassador-1.jpeg",
      "/volunteering/student-ambassador-2.jpeg",
      "/volunteering/student-ambassador-3.jpeg",
      "/volunteering/student-ambassador-4.jpeg",
        ],
  },
  {
    role: "Organizing Committee Member",
    org: "Computer Science Students' Association in University of Kelaniya",
    period: "Aug 2025",
    location: "FCT, University of Kelaniya, Sri Lanka",
    description:
      "Contributed to organizing UniHack 2025, Sri Lanka’s first inter-university blockchain hackathon, by supporting event coordination, logistics, and participant management.",
    tags: ["EventManagement", "Leadership", "Teamwork","Web3","Blockchain"],
    images: [
      "/volunteering/organizing-committee-1.jpeg",
      "/volunteering/organizing-committee-2.png",
      "/volunteering/organizing-committee-3.png",      
    ],
  },
  {
    role: "Logistics Team Member – Code Quest 24",
    org: "IEEE Computer Society Chapter of University of Kelaniya",
    period: "May 2024 – Nov 2024",
    location: "FCT, University of Kelaniya, Sri Lanka",
    description:
      "Supported the successful execution of Code Quest 24’, a Python workshop organized by the IEEE CS Chapter at the University of Kelaniya, by handling event logistics, venue coordination, and participant support.",
    tags: ["Logistics", "Teamwork", "Python","EventCoordination","Leadership"],
    images: [
      "/volunteering/logistics-team-code-quest-24-1.jpg",
      "/volunteering/logistics-team-code-quest-24-2.jpg",
      "/volunteering/logistics-team-code-quest-24-3.jpeg",
      "/volunteering/logistics-team-code-quest-24-4.jpeg",
      "/volunteering/logistics-team-code-quest-24-5.jpg",
    ],
  },
  {
    role: "Delegates Handling Team Member – CyberZee 24'",
    org: "UOK ISACA Student Group",
    period: "Apr 2024 – Aug 2024",
    location: "FCT, University of Kelaniya, Sri Lanka",
    description:
      "Supported CyberZee 24’, a cybersecurity awareness initiative, by assisting with participant coordination, quiz event management, and delegate handling activities.",
    tags: ["CyberSecurity", "Teamwork", "Communication","EventManagement","Leadership"],
    images: [
      "/volunteering/delegates-handling-cyberzee-24-1.jpeg",
      "/volunteering/delegates-handling-cyberzee-24-2.jpeg",
      "/volunteering/delegates-handling-cyberzee-24-3.jpeg",
      "/volunteering/delegates-handling-cyberzee-24-4.jpg",
      "/volunteering/delegates-handling-cyberzee-24-5.jpg",
      "/volunteering/delegates-handling-cyberzee-24-6.jpg",
    ],
  },
  {
    role: "Secretary Team Member – InsightAI",
    org: "IEEE Computer Society Chapter of University of Kelaniya",
    period: "Mar 2024 – Apr 2024",
    location: "FCT, University of Kelaniya, Sri Lanka",
    description:
      "Contributed to InsightAI by supporting communication, coordinating activities, and managing documentation for initiatives focused on machine learning and data science.",
    tags: ["MachineLearning", "DataScience", "Teamwork", "Communication","Leadership"],
    images: [
      "/volunteering/secretary-team-insightai-1.jpg",
      "/volunteering/secretary-team-insightai-2.jpg",
      "/volunteering/secretary-team-insightai-3.jpg",
      "/volunteering/secretary-team-insightai-4.jpg",      
    ],
  },
  {
    role: "Public Visibility Team Member – IEEE Day 2024(TechPulse)",
    org: "IEEE Student Branch University of Kelaniya",
    period: "Sep 2024 – Oct 2024",
    location: "FCT, University of Kelaniya, Sri Lanka",
    description:
      "Contributed to IEEE Day 2024 by supporting public visibility activities, communication, and event coordination to promote engagement within the academic community.",
    tags: ["PublicRelations", "EventManagement", "Teamwork", "Communication","Leadership"],
    images: [
      "/volunteering/public-visibility-ieee-day-2024-1.jpg",         
    ],
  },
   {
    role: "Tutor Maker",
    org: "Computer Science Students' Association in University of Kelaniya",
    period: "Nov 2023 – Present",
    description:
      "Prepared tutorial materials for the Sahurdha Piyapath O/L Mathematics seminar, creating simple and effective learning resources to support students’ understanding of key concepts.",
    tags: ["Education", "Mathematics", "ContentCreation", "Teaching","Communication","Leadership"],
    images: [
      "/volunteering/tutor-maker-1.png",
    ],
  },
];

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

function VolunteeringCards({ items }: { items: VolunteeringItem[] }) {
  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <div
          key={`${item.role}-${item.org}`}
          className="glass rounded-3xl p-6 md:p-7 hover:border-primary/50 transition-colors"
        >
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 items-start">
            <div className="overflow-hidden rounded-2xl bg-secondary/40">
              {item.images.length > 0 ? (
                <Carousel opts={{ loop: true }} className="relative">
                  <CarouselContent className="ml-0">
                    {item.images.map((src, index) => (
                      <CarouselItem
                        key={`${item.role}-${item.org}-${index}`}
                        className="pl-0"
                      >
                        <img
                          src={src}
                          alt={`${item.role} photo ${index + 1}`}
                          className="w-full h-56 md:h-60 object-cover"
                          loading="lazy"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3" />
                  <CarouselNext className="right-3" />
                </Carousel>
              ) : (
                <div className="h-56 md:h-60 grid place-items-center text-xs uppercase tracking-wider text-muted-foreground">
                  Add images
                </div>
              )}
            </div>
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                Volunteering
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.org}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={14} /> {item.period}
                </span>
                {item.location ? (
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} /> {item.location}
                  </span>
                ) : null}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  const timelineTabs = { experience, education };
  type TabKey = keyof typeof timelineTabs | "volunteering";
  const [activeTab, setActiveTab] = useState<TabKey>("experience");
  const timelineItems =
    activeTab === "volunteering" ? timelineTabs.experience : timelineTabs[activeTab];

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

      {activeTab === "volunteering" ? (
        volunteering.length === 0 ? (
          <div className="glass rounded-2xl p-6 text-sm text-muted-foreground">
            No volunteering added yet.
          </div>
        ) : (
          <VolunteeringCards items={volunteering} />
        )
      ) : (
        <Timeline items={timelineItems} />
      )}
    </Section>
  );
}
