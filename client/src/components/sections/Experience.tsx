import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Award, FileText } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function SectionBlock({
  icon: Icon,
  iconGradient,
  title,
  delay = 0,
  children,
}: {
  icon: React.ElementType;
  iconGradient: string;
  title: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`w-12 h-12 rounded-lg ${iconGradient} flex items-center justify-center shrink-0`}
          whileHover={{ scale: 1.12, rotate: 5 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

export default function Experience() {
  const workExperience = [
    {
      title: "Web Developer",
      company: "Flawless",
      period: "Mar 2023 – Present",
      location: "Remote, Saudi Arabia",
      highlights: [
        "Lead frontend development for the company's mentorship platform",
        "Built scalable UI systems in Next.js + Tailwind + ShadCN",
        "Developed backend features with ExpressJS, Prisma, PostgreSQL",
        "Solved critical performance & architecture problems",
        "Worked directly with founders in a lean, fast-moving team",
        "Implemented automation workflows using n8n",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "n8n"],
    },
  ];

  const education = {
    degree: "BSc Computer Science",
    institution: "Saudi Electronic University",
    gpa: "3.87/4",
    honors: "First-Class Honors",
    year: "May 2025",
  };

  const certifications = [
    "Machine Learning with Python — IBM",
    "Deep Learning with Keras & TensorFlow — IBM",
    "Computer Vision & Image Processing — IBM",
    "Deep Neural Networks with Keras — IBM",
    "Teamwork & Communication — University of Colorado Boulder",
  ];

  const publication = {
    title: "Arabic Sign Language Translation (ARSLT)",
    journal: "MDPI Sensors",
    year: "2025",
    link: "https://www.mdpi.com/1424-8220/25/9/2916",
    description:
      "A peer-reviewed research project using deep learning and computer vision to translate Arabic Sign Language into text. Focused on accessibility and real-time recognition.",
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-secondary/6 rounded-full blur-3xl" />
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
            Experience &{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Education
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

        {/* Vertical timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block">
            <motion.div
              className="w-full bg-linear-to-b from-primary to-secondary"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: EASE }}
            />
          </div>

          <div className="space-y-14 md:pl-16">
            {/* ── Work Experience ── */}
            <SectionBlock
              icon={Briefcase}
              iconGradient="bg-linear-to-br from-primary to-secondary"
              title="Work Experience"
              delay={0}
            >
              {workExperience.map((job, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-xl bg-linear-to-r from-primary to-secondary" />
                  <Card className="relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all overflow-hidden">
                    {/* Left accent bar */}
                    <motion.div
                      className="absolute left-0 top-0 w-1 bg-linear-to-b from-primary to-secondary rounded-l-xl"
                      initial={{ height: "0%" }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                    />

                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h4 className="text-2xl font-bold text-primary">{job.title}</h4>
                          <p className="text-xl font-semibold text-foreground/90">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-medium text-secondary">{job.period}</p>
                          <p className="text-muted-foreground">{job.location}</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-lg font-bold mb-3">Highlights</h5>
                        <ul className="space-y-2">
                          {job.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -14 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease: EASE }}
                            >
                              <span className="text-primary mt-1 shrink-0">▸</span>
                              <span className="text-foreground/90">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {job.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </SectionBlock>

            {/* ── Education ── */}
            <SectionBlock
              icon={GraduationCap}
              iconGradient="bg-linear-to-br from-secondary to-purple-600"
              title="Education"
              delay={0.05}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-primary">{education.institution}</h4>
                    <p className="text-xl font-semibold text-foreground/90 mt-1">{education.degree}</p>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <Badge className="bg-linear-to-r from-primary to-secondary text-white border-0">
                        GPA {education.gpa}
                      </Badge>
                      <Badge className="bg-linear-to-r from-secondary to-purple-600 text-white border-0">
                        {education.honors}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-secondary">{education.year}</p>
                </div>
              </Card>
            </SectionBlock>

            {/* ── Certifications ── */}
            <SectionBlock
              icon={Award}
              iconGradient="bg-linear-to-br from-pink-500 to-primary"
              title="Certifications"
              delay={0.1}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <ul className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08, ease: EASE }}
                    >
                      <span className="text-primary mt-1 shrink-0">✓</span>
                      <span className="text-foreground/90">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </SectionBlock>

            {/* ── Publication ── */}
            <SectionBlock
              icon={FileText}
              iconGradient="bg-linear-to-br from-purple-600 to-secondary"
              title="Publication"
              delay={0.15}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all overflow-hidden relative">
                <motion.div
                  className="absolute left-0 top-0 w-1 bg-linear-to-b from-secondary to-purple-600 rounded-l-xl"
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold text-primary">{publication.title}</h4>
                    <p className="text-lg font-semibold text-secondary mt-1">
                      {publication.journal} · {publication.year}
                    </p>
                  </div>
                  <p className="text-foreground/90 text-lg">{publication.description}</p>
                  <Button variant="outline" className="w-fit retro-border" asChild>
                    <a href={publication.link} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      Read Paper
                    </a>
                  </Button>
                </div>
              </Card>
            </SectionBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
