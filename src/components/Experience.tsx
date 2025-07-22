import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Solutions Tunisia",
      location: "Sousse, Tunisia",
      period: "Jun 2024 - Aug 2024",
      type: "Internship",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with senior developers on client projects",
        "Implemented responsive designs and optimized application performance",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Git"]
    },
    {
      title: "Final Year Project",
      company: "ISET Sousse",
      location: "Sousse, Tunisia",
      period: "Feb 2024 - May 2024",
      type: "Academic Project",
      description: [
        "Led the development of a comprehensive student management system",
        "Designed and implemented database architecture",
        "Created intuitive user interfaces for different user roles",
        "Delivered presentation to academic panel and achieved excellent grade"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"]
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      location: "Sousse, Tunisia",
      period: "Jan 2023 - Present",
      type: "Freelance",
      description: [
        "Built custom websites for local businesses and organizations",
        "Provided technical consultation and digital solution recommendations",
        "Managed client relationships and project timelines",
        "Maintained and updated existing websites with new features"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ];

  const education = [
    {
      degree: "License in Computer Science",
      institution: "Institut Supérieur des Études Technologiques de Sousse",
      location: "Sousse, Tunisia",
      period: "2021 - 2024",
      grade: "Distinction",
      highlights: [
        "Specialized in Software Engineering",
        "Member of the Computer Science Club",
        "Participated in hackathons and coding competitions"
      ]
    },
    {
      degree: "Baccalauréat in Mathematics",
      institution: "Lycée Secondaire Sousse",
      location: "Sousse, Tunisia",
      period: "2020 - 2021",
      grade: "Good",
      highlights: [
        "Strong foundation in mathematics and sciences",
        "Active in technology-related extracurricular activities"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and academic background that have shaped my expertise in technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="font-playfair text-3xl font-semibold mb-8 flex items-center">
              <Building className="h-6 w-6 mr-3 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <Badge variant={exp.type === 'Internship' ? 'default' : 'secondary'}>
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="font-playfair text-3xl font-semibold mb-8 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Badge variant="default">{edu.grade}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;