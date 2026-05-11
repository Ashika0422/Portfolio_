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
    <section
      id={id}
      className="px-6 pt-8 pb-14 md:pt-10 md:pb-18 lg:pt-12 lg:pb-20 scroll-mt-8 md:scroll-mt-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-12"
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
