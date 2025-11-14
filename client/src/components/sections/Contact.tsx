import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Github, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Rghfarhud@gmail.com",
      link: "mailto:Rghfarhud@gmail.com",
      color: "from-primary to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/raghad-farhud",
      link: "https://linkedin.com/in/raghad-farhud",
      color: "from-secondary to-purple-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/raghad-farhud",
      link: "https://github.com/raghad-farhud",
      color: "from-pink-500 to-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rabigh, Jeddah, Saudi Arabia",
      link: null,
      color: "from-purple-500 to-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Open to fullstack engineering roles, AI-driven product teams, or freelance web development projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors break-words">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-lg font-medium text-foreground break-words">{item.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm border-primary/30 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Let's Build Something Amazing Together</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're looking for a skilled frontend engineer, need help with a web project, or want to
                collaborate on AI-driven solutions, I'd love to hear from you.
              </p>
              <Button
                size="lg"
                className="gradient-pink-purple text-white font-semibold neon-glow"
                asChild
              >
                <a href="mailto:Rghfarhud@gmail.com">
                  <Send className="mr-2 h-5 w-5" />
                  Send Me an Email
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
