import { Award, Star, Trophy, Mic } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    Icon: Trophy,
    title: "Product Hunt — #1 Product of the Day",
    desc: "Echo Notes launched to 8k upvotes and 50k installs in week one.",
  },
  {
    Icon: Award,
    title: "Awwwards — Site of the Day",
    desc: "Hatch DS marketing site recognized for craft and motion design.",
  },
  {
    Icon: Star,
    title: "GitHub Star — 2024",
    desc: "Honored for sustained open-source contributions to the React ecosystem.",
  },
  {
    Icon: Mic,
    title: "Speaker — React Summit 2024",
    desc: "Talk on “Designing systems that age well” to 2,000+ engineers.",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={<span>Moments worth <span className="text-gradient">remembering</span>.</span>}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="glass rounded-2xl p-6 flex gap-5 hover:border-primary/50 transition-colors"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <Icon size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
