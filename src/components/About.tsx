import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "ISET Sousse Graduate",
      description: "Completed my license degree with distinction"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistent high performance throughout studies"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led multiple successful group projects"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and growth"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate technology enthusiast and recent graduate from ISET Sousse, 
            ready to make my mark in the digital world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-playfair text-3xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                My journey in technology began at ISET Sousse, where I discovered my passion 
                for software development and digital innovation. Throughout my studies, I've 
                been fascinated by the power of technology to solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground">
                As a Tunisian woman in tech, I'm committed to breaking barriers and inspiring 
                others to pursue their dreams in technology. I believe in the importance of 
                diversity in driving innovation and creating inclusive solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                I'm eager to contribute to meaningful projects and continue learning from 
                experienced professionals in the field. My goal is to create technology 
                that makes a positive impact on people's lives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <achievement.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Values */}
        <Card className="hero-card border-0 text-center p-8">
          <CardContent className="space-y-4">
            <h3 className="font-playfair text-2xl font-semibold text-primary-foreground">
              My Values
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Innovation • Integrity • Collaboration • Continuous Learning • Excellence
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;