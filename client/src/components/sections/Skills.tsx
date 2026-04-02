import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.08 },
  }),
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: EASE, delay: 0.1 + i * 0.04 },
  }),
};

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "ShadCN UI",
        "Responsive Design",
        "SEO & Core Web Vitals",
        "Clean Architecture",
      ],
      color: "from-primary to-pink-500",
      bar: "bg-linear-to-r from-primary to-pink-500",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "SQL", "REST APIs"],
      color: "from-secondary to-purple-500",
      bar: "bg-linear-to-r from-secondary to-purple-500",
    },
    {
      title: "Automation & Workflow",
      skills: ["n8n", "Zapier", "Webhooks", "API Integration"],
      color: "from-pink-500 to-primary",
      bar: "bg-linear-to-r from-pink-500 to-primary",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "VSCode", "Cursor", "Jira", "Slack", "ClickUp", "Figma", "Webflow", "Salla"],
      color: "from-purple-500 to-secondary",
      bar: "bg-linear-to-r from-purple-500 to-secondary",
    },
    {
      title: "AI & Machine Learning",
      skills: ["Computer Vision", "Deep Learning", "TensorFlow/Keras", "MediaPipe", "Pose Estimation"],
      color: "from-primary to-secondary",
      bar: "bg-linear-to-r from-primary to-secondary",
    },
    {
      title: "Languages",
      skills: ["Arabic (Native)", "English (Professional)"],
      color: "from-secondary to-primary",
      bar: "bg-linear-to-r from-secondary to-primary",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
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
            Technical{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills
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
            A comprehensive toolkit for building modern web applications and AI-powered solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 h-full group overflow-hidden relative">
                {/* Animated top accent bar */}
                <motion.div
                  className={`absolute top-0 left-0 h-0.5 ${category.bar}`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: EASE }}
                />

                <div className="space-y-4 pt-2">
                  <div
                    className={`inline-block px-4 py-1.5 rounded-lg bg-linear-to-r ${category.color} text-white font-bold text-sm`}
                  >
                    {category.title}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        custom={skillIndex}
                        variants={badgeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="outline"
                          className="px-3 py-1 text-sm font-medium bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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
