import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";

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
        live: "https://flawless.com",
      },
      gradient: "from-primary to-pink-600",
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
        paper: "https://www.mdpi.com/sensors",
        github: "https://github.com/raghad-farhud/arslt",
      },
      gradient: "from-secondary to-purple-600",
    },
    {
      title: "DevSpace",
      category: "Content Platform",
      description:
        "Personal brand and content platform focused on tech articles, programming tips, book recommendations, and UI concept designs.",
      role: [
        "Created engaging tech content and tutorials",
        "Designed UI concepts with retro-tech aesthetic",
        "Built community around programming and personal development",
      ],
      achievements: [
        "Growing audience on social media",
        "Consistent content creation schedule",
        "Unique visual brand identity",
      ],
      technologies: ["Content Creation", "UI/UX Design", "Social Media", "Community Building"],
      links: {
        live: "https://devspace.com",
      },
      gradient: "from-pink-500 to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            High-impact projects spanning web development, AI research, and content creation
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left side - Title and description */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <Badge className={`mb-3 bg-gradient-to-r ${project.gradient} text-white border-0`}>
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-lg text-muted-foreground">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-primary">Your Role</h4>
                    <ul className="space-y-2">
                      {project.role.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-secondary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">✓</span>
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side - Technologies and links */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-primary/50 text-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {project.links.live && (
                      <Button
                        variant="default"
                        className="w-full gradient-pink-purple text-white"
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
          ))}
        </div>
      </div>
    </section>
  );
}
