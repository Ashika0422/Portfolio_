import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<span>A bit about <span className="text-gradient">me</span>.</span>}
    >
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed text-justify">
          <p>
            I am a Computer Science undergraduate at University of Kelaniya with a strong interest in Software Development, Data Science, and Machine Learning. I enjoy building practical projects, learning new technologies, and improving my problem-solving skills through real-world experiences and teamwork.

          </p>
          <p>
           Outside of academics, I enjoy watching K-dramas, gardening, and painting. I believe in staying positive, working hard, and continuously learning new things. My goal is to become a Data Scientist or Software Engineer and use technology to create meaningful and useful solutions for the future.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { k: "Based in", v: "Colombo, Sri Lanka" },
            { k: "Education", v: "B.Sc. Computer Science" },
            { k: "Focus", v: "Data Science • Web • ML" },
            { k: "Available", v: "Open to Internships" },
          ].map((row) => (
            <div
              key={row.k}
              className="flex justify-between border-b border-border pb-3 text-sm"
            >
              <span className="text-muted-foreground uppercase tracking-wider">
                {row.k}
              </span>
              <span className="text-foreground font-medium">{row.v}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
