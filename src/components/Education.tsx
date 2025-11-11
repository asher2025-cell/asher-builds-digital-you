import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  Bachelor of Science Honours in Information Systems
                </h3>
                <p className="text-primary font-medium mb-2">
                  Manicaland State University of Applied Science
                </p>
                <p className="text-muted-foreground mb-3">2023 - 2027</p>
                <p className="text-foreground/80">
                  Currently pursuing a comprehensive degree program focused on information systems, 
                  software development, database management, and modern web technologies. Combining 
                  theoretical knowledge with practical application to build real-world solutions.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  Software Engineering Certificate
                </h3>
                <p className="text-accent font-medium mb-2">
                  Online Learning Platform
                </p>
                <p className="text-muted-foreground mb-3">Completed</p>
                <p className="text-foreground/80">
                  Completed an intensive online course covering software engineering principles, 
                  modern development practices, version control, and agile methodologies. Gained 
                  hands-on experience with industry-standard tools and frameworks.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
