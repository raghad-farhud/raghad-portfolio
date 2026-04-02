import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Github, Send } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Rghfarhud@gmail.com",
      link: "mailto:Rghfarhud@gmail.com",
      gradient: "from-primary to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/raghad-farhud",
      link: "https://linkedin.com/in/raghad-farhud",
      gradient: "from-secondary to-purple-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/raghad-farhud",
      link: "https://github.com/raghad-farhud",
      gradient: "from-pink-500 to-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rabigh, Jeddah, Saudi Arabia",
      link: null,
      gradient: "from-purple-500 to-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
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
            Get In{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Touch
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
            Open to fullstack engineering roles, AI-driven product teams, or freelance web
            development projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: EASE, delay: index * 0.09 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 h-full">
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-lg bg-linear-to-br ${item.gradient} flex items-center justify-center shrink-0`}
                        whileHover={{ scale: 1.12, rotate: 6 }}
                        transition={{ type: "spring", stiffness: 280, damping: 18 }}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors wrap-break-word">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-linear-to-br ${item.gradient} flex items-center justify-center shrink-0`}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg font-medium text-foreground wrap-break-word">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            <Card className="relative p-8 md:p-12 bg-card/60 backdrop-blur-sm border-primary/30 text-center overflow-hidden">
              {/* Animated gradient background */}
              <div
                className="absolute inset-0 opacity-10 bg-linear-to-r from-primary via-secondary to-primary"
                style={{ backgroundSize: "200% 200%", animation: "gradient-shift 6s ease infinite" }}
              />

              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-lg border border-primary/20"
                animate={{ scale: [1, 1.01, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative space-y-6">
                <motion.h3
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
                >
                  Let's Build Something Amazing Together
                </motion.h3>

                <motion.p
                  className="text-lg text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
                >
                  Whether you're looking for a skilled frontend engineer, need help with a web
                  project, or want to collaborate on AI-driven solutions, I'd love to hear from you.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.5, ease: EASE }}
                >
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
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
