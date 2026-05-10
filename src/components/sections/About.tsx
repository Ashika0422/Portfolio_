import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<span>A bit about <span className="text-gradient">me</span>.</span>}
    >
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a software engineer based in Berlin with five years of experience
            shipping web platforms used by hundreds of thousands of people.
            I care about clean architecture, accessible design, and the small
            interactions that make products memorable.
          </p>
          <p>
            Outside of code I'm usually behind a film camera, brewing pour-over,
            or hiking somewhere with poor cell reception. I believe the best
            software borrows its rhythm from physical craft.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { k: "Based in", v: "Berlin, DE" },
            { k: "Experience", v: "5+ years" },
            { k: "Focus", v: "Web · Product · Systems" },
            { k: "Available", v: "Q3 2026" },
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
