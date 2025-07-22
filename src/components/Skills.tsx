import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Palette, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "React", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 }
      ]
    },
    {
      icon: Database,
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 65 }
      ]
    },
    {
      icon: Palette,
      title: "Design & Others",
      skills: [
        { name: "UI/UX Design", level: 75 },
        { name: "Figma", level: 80 },
        { name: "Adobe Suite", level: 70 },
        { name: "Agile/Scrum", level: 75 }
      ]
    }
  ];

  const certifications = [
    "JavaScript Fundamentals",
    "React Development",
    "Database Design",
    "Web Development",
    "Project Management",
    "Problem Solving"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical competencies and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="bg-muted/30 border-0">
          <CardHeader>
            <CardTitle className="text-center font-playfair text-2xl">
              Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;