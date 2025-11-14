import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {currentYear} Raghad Farhud. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            Built with{" "}
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            using{" "}
            <span className="font-semibold text-primary">Next.js</span>,{" "}
            <span className="font-semibold text-secondary">TypeScript</span> &{" "}
            <span className="font-semibold text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
