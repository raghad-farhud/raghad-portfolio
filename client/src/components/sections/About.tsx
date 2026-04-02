import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Brain, Rocket, BookOpen } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.1 },
  }),
};

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Excellence",
      description:
        "3+ years building production-ready web apps with React, Next.js, TypeScript, Tailwind, ExpressJS, Prisma, PostgreSQL, and n8n.",
    },
    {
      icon: Brain,
      title: "AI Research",
      description:
        "Published research on Arabic Sign Language recognition using deep learning and computer vision.",
    },
    {
      icon: Rocket,
      title: "Startup Experience",
      description:
        "Leading full stack development at Flawless, a mentorship and career-building platform.",
    },
    {
      icon: BookOpen,
      title: "Automation Expert",
      description:
        "Automated workflows using n8n, Zapier, Webhooks, and API integrations.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 gradient-dark opacity-50" />

      <div className="container">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <motion.div
            className="h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio card — slide from left */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 h-full">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <span className="font-bold text-primary">Raghad Farhud</span> is a full stack
                  developer with <span className="font-semibold">3+ years of experience</span>{" "}
                  building clean, scalable, and production-ready web applications. She currently
                  works at{" "}
                  <span className="font-semibold text-secondary">Flawless</span>, leading full
                  stack development using React, Next.js, TypeScript, TailwindCSS, ShadCN UI,
                  ExpressJS, Prisma, PostgreSQL, and n8n.
                </p>
                <p>
                  She specializes in{" "}
                  <span className="font-semibold text-primary">performance optimization</span>{" "}
                  (Core Web Vitals), clean component architecture, and building intuitive user
                  experiences spanning frontend, backend integrations, and workflow automation.
                </p>
                <p>
                  Her technical interests extend into{" "}
                  <span className="font-semibold text-secondary">artificial intelligence</span> —
                  demonstrated through her published paper on Arabic Sign Language recognition
                  using deep learning and computer vision for accessibility-focused solutions.
                </p>
                <p>
                  Based in <span className="font-semibold">Saudi Arabia</span>. Loves reading,
                  exploring new technologies, and building projects that solve real problems.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Highlight cards — stagger from right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 h-full group">
                  <div className="space-y-4">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center"
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
