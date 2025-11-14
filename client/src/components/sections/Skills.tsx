import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "SQL", "REST APIs"],
      color: "from-secondary to-purple-500",
    },
    {
      title: "Automation & Workflow",
      skills: ["n8n", "Zapier", "Webhooks", "API Integration"],
      color: "from-pink-500 to-primary",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "VSCode", "Cursor", "Jira", "Slack", "ClickUp", "Figma", "Webflow", "Salla"],
      color: "from-purple-500 to-secondary",
    },
    {
      title: "AI & Machine Learning",
      skills: ["Computer Vision", "Deep Learning", "TensorFlow/Keras", "MediaPipe", "Pose Estimation"],
      color: "from-primary to-secondary",
    },
    {
      title: "Languages",
      skills: ["Arabic (Native)", "English (Professional)"],
      color: "from-secondary to-primary",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="space-y-4">
                <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white font-bold text-sm`}>
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 text-sm font-medium bg-background/80 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
