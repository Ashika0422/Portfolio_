import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.55 0.09 220 / 0.35), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.4 0.08 245 / 0.3), transparent 45%)",
        }}
      />
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-6"
          >
            Hello — I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
          >
            <span className="text-gradient">Alex Morgan</span>
            <br />
            <span className="text-foreground/90">crafting calm</span>
            <br />
            <span className="text-muted-foreground">digital products.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Full-stack engineer & designer focused on thoughtful interfaces,
            performant systems, and the quiet details that make software feel
            effortless.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="bg-gradient-primary shadow-glow text-primary-foreground font-medium px-7 py-3.5 rounded-full hover:scale-[1.02] transition-transform"
            >
              View Work
            </a>
            <a
              href="/alex-morgan-cv.pdf"
              download
              className="inline-flex items-center gap-2 glass px-7 py-3.5 rounded-full text-foreground hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              Get in Touch
            </a>
            <div className="flex gap-3 ml-2">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "#contact" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-11 h-11 grid place-items-center rounded-full glass hover:text-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-30" />
          <div className="relative w-full h-full rounded-[2.5rem] glass shadow-glow overflow-hidden grid place-items-center">
            <div className="text-[10rem] font-display font-bold text-gradient leading-none">
              A
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>est. 2019</span>
              <span>v.5</span>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
