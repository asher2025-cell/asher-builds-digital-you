import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Super Licorice Project",
      description:
        "A modern web application showcasing advanced frontend techniques with responsive design and smooth user interactions.",
      link: "https://690dbba1ebf4ddaf3fcd32fe--super-licorice-dca561.netlify.app/",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Rad Selkie Application",
      description:
        "An innovative web solution featuring elegant UI/UX design and optimized performance for seamless user experience.",
      link: "https://rad-selkie-f668e1.netlify.app/",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of web applications built with passion and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                  💻
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
