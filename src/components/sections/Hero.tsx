import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/dp.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start px-6 pt-16 pb-10 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16 overflow-hidden"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            <span className="text-gradient">Ashika</span>
            <br />
            <span className="text-gradient">Chamodi</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Computer Science undergraduate interested in{" "}
            <span className="text-gradient">Software Development</span>,{" "}
            <span className="text-gradient">Data Science</span>, and{" "}
            <span className="text-gradient">Machine Learning</span>. Passionate
            about building practical projects, solving problems, and learning new
            technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="bg-gradient-primary shadow-glow text-primary-foreground font-medium px-7 py-3.5 rounded-full hover:scale-[1.02] transition-transform"
            >
              View Work
            </a>
            <a
              href="/Ashika_Chamodi.pdf"
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
                { Icon: Github, href: "https://github.com/Ashika0422" },
                { Icon: Linkedin, href: "https://linkedin.com/in/ashika-chamodi/" },
                { Icon: Mail, href: "mailto:ashikadandeniya@gmail.com" },
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
          <div className="absolute inset-0 rounded-full bg-gradient-primary blur-[70px] opacity-60" />
          <div className="absolute -inset-6 rounded-full bg-gradient-primary blur-[90px] opacity-35" />
          <div className="relative w-full h-full rounded-full p-2 bg-gradient-primary shadow-glow">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-card">
              <img
                src={heroImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
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
