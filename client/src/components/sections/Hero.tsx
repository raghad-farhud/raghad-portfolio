import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  Raghad Farhud
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90">
                Frontend Engineer · Web Developer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Building scalable, clean, and modern web apps using{" "}
              <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">Next.js</span>,{" "}
              <span className="text-primary font-semibold">TypeScript</span> — with a growing edge in{" "}
              <span className="text-secondary font-semibold">AI</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gradient-pink-purple text-white font-semibold neon-glow"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="retro-border font-semibold"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/raghad-farhud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/raghad-farhud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image with decorative elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-50 animate-pulse"></div>
              
              {/* Profile image */}
              <div className="relative retro-border rounded-3xl overflow-hidden bg-card p-2">
                <img
                  src="/heroimage.png"
                  alt="Raghad Farhud"
                  className="w-full max-w-md rounded-2xl"
                />
              </div>

              {/* Floating DevSpace graphics */}
              {/* <div className="absolute -top-8 -right-8 w-24 h-24 opacity-80 animate-bounce">
                <img src="/devspace-graphics.png" alt="DevSpace" className="w-full h-full object-contain" />
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
}
