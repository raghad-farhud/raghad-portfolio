import { Card } from "@/components/ui/card";
import { Code2, Brain, Rocket, BookOpen } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Excellence",
      description: "3+ years building production-ready web applications with React, Next.js, and TypeScript",
    },
    {
      icon: Brain,
      title: "AI Research",
      description: "Published research on Arabic Sign Language recognition using deep learning and computer vision",
    },
    {
      icon: Rocket,
      title: "Startup Experience",
      description: "Leading frontend architecture at Flawless, a mentorship and career-building platform",
    },
    {
      icon: BookOpen,
      title: "Content Creator",
      description: "Sharing tech knowledge and programming insights through DevSpace",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 gradient-dark opacity-50"></div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Bio */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <span className="font-bold text-primary">Raghad Farhud</span> is a frontend developer with{" "}
                  <span className="font-semibold">3+ years of experience</span> building clean, scalable, and
                  production-ready web applications. She currently works at{" "}
                  <span className="font-semibold text-secondary">Flawless</span>, where she leads the frontend
                  architecture for the company's mentorship and career-building platform using React, Next.js,
                  TypeScript, TailwindCSS, ShadCN UI, and Prisma.
                </p>
                <p>
                  She specializes in{" "}
                  <span className="font-semibold text-primary">performance optimization</span> (Core Web Vitals),
                  clean component architecture, and building intuitive user experiences. Her work spans frontend
                  engineering, backend integrations (ExpressJS, Prisma, PostgreSQL), and workflow automation with n8n.
                </p>
                <p>
                  Her technical interests extend into{" "}
                  <span className="font-semibold text-secondary">artificial intelligence</span> — demonstrated through
                  her published scientific paper on Arabic Sign Language recognition, where she used deep learning and
                  computer vision to build accessibility-focused solutions.
                </p>
                <p>
                  She's based in <span className="font-semibold">Saudi Arabia</span>, loves reading, and creates
                  content at <span className="font-semibold text-primary">DevSpace</span> around tech, personal growth,
                  and programming.
                </p>
              </div>
            </Card>
          </div>

          {/* Right side - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
