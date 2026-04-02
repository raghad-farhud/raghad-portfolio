import { Player } from "@remotion/player";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/remotion/HeroBackground";

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "ExpressJS",
  "Prisma",
  "PostgreSQL",
  "n8n",
  "AI",
];

const SKILL_DURATION_MS = 1800;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export default function Hero() {
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveSkill((prev) => (prev + 1) % SKILLS.length),
      SKILL_DURATION_MS
    );
    return () => clearInterval(id);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* ── Remotion animated background ── */}
      <div className="absolute inset-0 -z-10">
        <Player
          component={HeroBackground}
          durationInFrames={300}
          fps={30}
          compositionWidth={1920}
          compositionHeight={1080}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
          controls={false}
          clickToPlay={false}
        />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: text content ── */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* "Available" badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for work
              </span>
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  Raghad Farhud
                </span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-foreground/90"
              >
                Fullstack Engineer · Web Developer
              </motion.h2>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Building scalable, clean, and modern web apps — from database to
              UI, powered by a growing edge in{" "}
              <span className="text-secondary font-semibold">AI</span>.
            </motion.p>

            {/* Cycling skills pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  animate={
                    i === activeSkill
                      ? { scale: 1.08, backgroundColor: "oklch(0.65 0.25 340 / 0.18)" }
                      : { scale: 1,    backgroundColor: "oklch(0.96 0.015 280 / 1)" }
                  }
                  transition={{ duration: 0.3 }}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-300 ${
                    i === activeSkill
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* "Currently building with" cycling label */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-sm text-muted-foreground">Currently building with</span>
              <div className="relative h-7 w-28 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeSkill}
                    className="absolute inset-0 flex items-center text-sm font-bold text-primary"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {SKILLS[activeSkill]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="gradient-pink-purple text-white font-semibold neon-glow"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="retro-border font-semibold"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/raghad-farhud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/raghad-farhud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: profile image ── */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: EASE }}
          >
            <div className="relative">
              {/* Animated gradient ring */}
              <div className="absolute -inset-5 rounded-3xl animate-gradient-ring opacity-60" />

              {/* Profile image */}
              <div className="relative retro-border rounded-3xl overflow-hidden bg-card p-2">
                <img
                  src="/heroimage.png"
                  alt="Raghad Farhud"
                  className="w-full max-w-md rounded-2xl"
                />
              </div>

              {/* Floating badge: open to work */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-card border border-primary/50 rounded-2xl px-4 py-3 shadow-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5, ease: EASE }}
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-sm font-semibold whitespace-nowrap">Open to opportunities</span>
                </div>
              </motion.div>

              {/* Floating badge: experience */}
              <motion.div
                className="absolute -top-5 -right-5 bg-card border border-secondary/50 rounded-2xl px-4 py-3 shadow-xl text-center"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5, ease: EASE }}
              >
                <div className="text-2xl font-bold text-primary leading-none">3+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Years Exp.</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
