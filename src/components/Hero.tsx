import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src={profilePhoto}
              alt="Asher Gangaidzo"
              className="relative rounded-full w-full h-full object-cover border-4 border-primary/20 shadow-lg"
            />
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Asher Gangaidzo
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Fullstack Developer | Web Application Specialist | Vibe Coder
              </p>
            </div>

            <p className="text-lg text-foreground/80 max-w-2xl italic">
              "I engineer reliable, human-centered web solutions that inspire progress, empower ideas, and transform the digital experience."
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://github.com/asher2025-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <Github className="w-6 h-6 text-foreground/70 hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/asher-gangaidzo-842106348"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <Linkedin className="w-6 h-6 text-foreground/70 hover:text-primary" />
              </a>
              <a
                href="https://x.com/AsherGee2552"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <Twitter className="w-6 h-6 text-foreground/70 hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
