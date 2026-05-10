import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            {eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
