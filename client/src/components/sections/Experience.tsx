import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Work Experience</h3>
            </div>

            {workExperience.map((job, index) => (
              <div key={index} className="relative group">
                {/* Animated background wave/light effect */}
                <div 
                  className="absolute -inset-0.5 rounded-lg opacity-5 group-hover:opacity-15 transition-opacity duration-500 blur-xl bg-gradient-to-r from-primary to-secondary"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 8s ease infinite',
                  }}
                ></div>
                
                <Card
                  className="relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all"
                >
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
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-foreground/90">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-purple-600 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Education</h3>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-primary">{education.institution}</h4>
                  <p className="text-xl font-semibold text-foreground/90 mt-1">{education.degree}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                      GPA {education.gpa}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-secondary to-purple-600 text-white border-0">
                      {education.honors}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-secondary">{education.year}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-primary flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <ul className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-foreground/90">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Publication */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-secondary flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Publication</h3>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
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
          </div>
        </div>
      </div>
    </section>
  );
}
