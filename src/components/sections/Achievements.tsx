import { useState } from "react";
import { Calendar, MapPin, Trophy } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section } from "./Section";

type HighlightItem = {
  typeLabel: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
  images: string[];
};

type CertificationItem = {
  title: string;
  issuer: string;
  file: string;
  verifyUrl?: string;
};

const achievements: HighlightItem[] = [
  {
    typeLabel: "Achievement",
    title: "1st runner up - MiniHackathon 2025",
    subtitle: "International Conference in Data Science '25",
    date: "November 2025",
    location: "Stat Circle, University of Colombo",
    description:
      "Won the 2nd place at Mini Hackathon 2025, organized by Stat Circle, University of Colombo jointly with OCTAVE - John Keells Group as a part of 3rd International Conference in Data Science - ICDS 2025.",
    tags: ["Data Science", "ML", "Agentic AI", "ICDS 2025", "50+ Teams"],
    images: [
      "/achievements/icds-2025-1.jpeg",
      "/achievements/icds-2025-2.jpeg",
      "/achievements/icds-2025-3.jpeg",
      "/achievements/icds-2025-4.jpeg",
      "/achievements/icds-2025-5.jpeg",
    ],
  },
];

const certifications: CertificationItem[] = [
  {
    title: "Linux Essentials Certification",
    issuer: "Cisco Networking Academy",
    file: "/certificates/linux-essentials.jpg",
    verifyUrl: "https://www.netacad.com/",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    file: "/certificates/supervised-ml-regression.jpg",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/979FHRPCVEZ4",
  },
  {
    title: "What is Data Science?",
    issuer: "IBM",
    file: "/certificates/ibm-what-is-data-science.jpg",
    verifyUrl: "https://coursera.org/verify/FISNOAQZ9RAJ",
  },
  {
    title: "Programming in Python",
    issuer: "University of Moratuwa (CODL)",
    file: "/certificates/programming-in-python.png",
    verifyUrl: "https://open.uom.lk/verify",
  },
  {
    title: "AWS Essentials: A Complete Beginner's Guide",
    issuer: "Udemy",
    file: "/certificates/aws-essentials.png",
    verifyUrl: "https://ude.my/UC-3a25d889-9198-487d-9839-2fe5b2f69496",
  },
  {
    title: "KelaniXtreme Hackathon Participation",
    issuer: "Hackathon Participation",
    file: "/certificates/kelanixtermecertificate.png",
  },
  {
    title: "SpiritX Hackathon Participation",
    issuer: "Hackathon Participation",
    file: "/certificates/spiritxcertificate.png",
  },
];

export function Achievements() {
  const [activeTab, setActiveTab] = useState<"achievements" | "certifications">(
    "achievements"
  );
  const isPdf = (file: string) => file.toLowerCase().endsWith(".pdf");

  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={
        <span>
          Moments worth <span className="text-gradient">remembering</span>.
        </span>
      }
    >
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("achievements")}
          className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
            activeTab === "achievements"
              ? "bg-gradient-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          Achievements
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("certifications")}
          className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
            activeTab === "certifications"
              ? "bg-gradient-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          Certifications
        </button>
      </div>

      <div className="grid gap-5">
        {activeTab === "achievements" ? (
          achievements.map((item) => (
            <div
              key={item.title}
              className="glass rounded-3xl p-6 md:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 items-start">
                <div className="overflow-hidden rounded-2xl bg-secondary/40">
                  <Carousel opts={{ loop: true }} className="relative">
                    <CarouselContent className="ml-0">
                      {item.images.map((src, index) => (
                        <CarouselItem key={`${item.title}-${index}`} className="pl-0">
                          <img
                            src={src}
                            alt={`${item.title} photo ${index + 1}`}
                            className="w-full h-56 md:h-60 object-cover"
                            loading="lazy"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-3" />
                    <CarouselNext className="right-3" />
                  </Carousel>
                </div>
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                    <Trophy size={14} /> {item.typeLabel}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={14} /> {item.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={14} /> {item.location}
                    </span>
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
          ))
        ) : certifications.length === 0 ? (
          <div className="glass rounded-2xl p-6 text-sm text-muted-foreground">
            No certifications added yet.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.verifyUrl || "#"}
                target={cert.verifyUrl ? "_blank" : undefined}
                rel={cert.verifyUrl ? "noreferrer" : undefined}
                className={`glass rounded-2xl p-5 hover:border-primary/50 transition-colors ${
                  cert.verifyUrl ? "" : "pointer-events-none"
                }`}
              >
                <div className="rounded-xl overflow-hidden bg-secondary/40 aspect-[4/3] grid place-items-center">
                  {isPdf(cert.file) ? (
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      PDF
                    </span>
                  ) : (
                    <img
                      src={cert.file}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="mt-4 space-y-1">
                  <h4 className="font-semibold text-sm">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  {cert.verifyUrl ? (
                    <span className="text-xs text-primary">Verify certificate →</span>
                  ) : null}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
