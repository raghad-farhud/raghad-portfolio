import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Projects() {
  const projects = [
    {
      title: "Flawless Platform",
      category: "Featured Project",
      description:
        "Web & AI career mentorship platform where I lead frontend architecture. Built a scalable UI system and optimized performance across the entire application.",
      role: [
        "Led frontend architecture using Next.js, TypeScript, Tailwind, ShadCN",
        "Built reusable UI systems and optimized performance",
        "Implemented backend features: ExpressJS, Prisma, PostgreSQL",
        "Integrated automation workflows using n8n",
      ],
      achievements: [
        "Designed shared component system used across multiple web apps",
        "Improved Core Web Vitals and overall SEO",
        "Collaborated on product decisions and user flows",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "n8n"],
      links: {
        live: "https://weflawless.co",
      },
      gradient: "from-primary to-pink-600",
      accentBar: "bg-linear-to-r from-primary to-pink-600",
    },
    {
      title: "Arabic Sign Language Translation (ARSLT)",
      category: "AI Research",
      description:
        "Deep learning project published in MDPI Sensors. A system that recognizes Arabic Sign Language using pose estimation and custom deep learning models.",
      role: [
        "Built data pipeline using MediaPipe keypoints",
        "Designed and trained a Temporal Convolutional Network (TCN)",
        "Authored the research paper and deployed the model",
      ],
      achievements: [
        "Achieved 0.99 accuracy in sign language recognition",
        "Published in peer-reviewed MDPI Sensors journal (2025)",
        "Enables communication support for deaf and hard-of-hearing Arabic speakers",
      ],
      technologies: ["Python", "TensorFlow", "Keras", "MediaPipe", "Computer Vision", "Deep Learning"],
      links: {
        paper: "https://www.mdpi.com/1424-8220/25/9/2916",
        github: "https://github.com/raghad-farhud/arslt",
      },
      gradient: "from-secondary to-purple-600",
      accentBar: "bg-linear-to-r from-secondary to-purple-600",
    },
    {
      title: "DevSpace",
      category: "Content Platform",
      description:
        "Personal brand and content platform focused on tech articles, programming tips, book recommendations, and UI concept designs, built in 2023. Now inactive but still available to view.",
      role: [
        "Created engaging tech content and tutorials",
        "Designed UI concepts with retro-tech aesthetic",
        "Built community around programming and personal development",
      ],
      achievements: [
        "Built a blog system with admin dashboard",
        "Built a newsletter system with email marketing",
        "Unique visual brand identity",
      ],
      technologies: ["Vue.js", "Tailwind CSS", "Firebase"],
      links: {
        live: "https://devspace-blog.web.app",
      },
      gradient: "from-pink-500 to-primary",
      accentBar: "bg-linear-to-r from-pink-500 to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
      </div>

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
            Featured{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <motion.div
            className="h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            High-impact projects spanning web development, AI research, and content creation
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: index * 0.05 }}
              className="relative group"
            >
              {/* Animated glow layer */}
              <div
                className={`absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl bg-linear-to-r ${project.gradient}`}
                style={{ backgroundSize: "200% 200%", animation: "gradient-shift 8s ease infinite" }}
              />

              <Card className="relative overflow-hidden p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10">
                {/* Animated left accent bar */}
                <motion.div
                  className={`absolute left-0 top-0 w-1 ${project.accentBar} rounded-l-xl`}
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.05, ease: EASE }}
                />

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left — Title, description, role, achievements */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <Badge
                        className={`mb-3 bg-linear-to-r ${project.gradient} text-white border-0`}
                      >
                        {project.category}
                      </Badge>
                      <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                      <p className="text-lg text-muted-foreground">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3 text-primary">Your Role</h4>
                      <ul className="space-y-2">
                        {project.role.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: EASE }}
                          >
                            <span className="text-primary mt-1 shrink-0">▸</span>
                            <span className="text-foreground/90">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3 text-secondary">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.07, ease: EASE }}
                          >
                            <span className="text-secondary mt-1 shrink-0">✓</span>
                            <span className="text-foreground/90">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right — Technologies + links */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="border-primary/40 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {project.links.live && (
                        <Button
                          variant="default"
                          className="w-full bg-linear-to-r from-primary to-secondary text-white border-0 neon-glow"
                          asChild
                        >
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button variant="outline" className="w-full retro-border" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.links.paper && (
                        <Button variant="outline" className="w-full retro-border" asChild>
                          <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            Read Paper
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
