import { Card } from "@/components/ui/card";
import { Code2, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                👋 Hello! I'm <span className="font-semibold text-primary">Asher Gangaidzo</span>, a passionate fullstack web application developer from 
                <span className="font-semibold"> Mutare, Zimbabwe 🇿🇼</span>.
              </p>
              <p>
                As my own boss and a dedicated student pursuing a{" "}
                <span className="font-semibold">Bachelor of Science Honours Degree in Information Systems</span> at 
                Manicaland State University of Applied Science, I bring together academic excellence and real-world freelance experience.
              </p>
              <p>
                I'm deeply passionate about web application development, creating innovative software solutions, and constantly pushing 
                the boundaries of what's possible in the digital realm. Whether it's crafting elegant user interfaces or building robust 
                backend systems, I thrive on bringing ideas to life through code.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-md transition-shadow border-primary/20">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovate with Purpose</h3>
              <p className="text-sm text-muted-foreground">
                Every project starts with a clear vision and goal
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-md transition-shadow border-accent/20">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Build with Precision</h3>
              <p className="text-sm text-muted-foreground">
                Attention to detail in every line of code
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-md transition-shadow border-primary/20">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Human-Centered</h3>
              <p className="text-sm text-muted-foreground">
                Solutions that truly serve and empower users
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
