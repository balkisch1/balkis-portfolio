import { useState } from "react";
import { Calendar, MapPin, Building, GraduationCap, Briefcase, Sparkles, Award, Users, Clock } from "lucide-react";

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const experiences = [
    {
      title: "Final-Year Software Development Intern",
      company: "Axia Solutions",
      location: "Sousse, Tunisia",
      period: "Jan 2025 – Jun 2025",
      type: "Internship",
  
      gradient: "from-blue-500 to-sky-500",
      description: [
        "Worked on Axia Agile, a project management platform for software development teams implementing Scrum and Kanban methodologies.",
        "Developed and maintained core functionalities to manage sprints, tasks, and workflows with real-time progress tracking.",
        "Contributed to the integration of AI-powered features like intelligent task prediction and smart sprint planning suggestions.",
        "Collaborated within an Agile team, focusing on scalability, usability, and performance optimization."
      ],
      technologies: ["React", ".NET 8", "SQL Server", "Git", "Azure", "Google Colab", "Machine learning", "C#"]
    },
    {
      title: "Software Development Intern",
      company: "IT Gate Group",
      location: "Sousse, Tunisia",
      period: "Jan 2024 - Feb 2024",
      type: "Internship",
      status: "Completed",
      gradient: "from-sky-400 to-blue-400",
      description: [
        "Developed a food delivery website as a full-stack web application using Angular and Spring Boot.",
        "Designed and implemented the back-end architecture, ensuring smooth data flow and secure user authentication.",
        "Created dynamic and responsive user interfaces for customers, delivery agents, and administrators.",
        "Built and managed the database structure with MySQL, ensuring data integrity and performance."
      ],
      technologies: ["Angular", "Spring Boot", "MySQL", "Java"]
    },
    {
      title: "Intern",
      company: "SNIT",
      location: "El Manar, Tunisia",
      period: "Jan 2023 - Feb 2023",
      type: "Internship",
      status: "Completed",
      gradient: "from-blue-300 to-sky-300",
      description: [
        "Assisted with diverse IT tasks, gaining hands-on experience in system administration and technical support.",
        "Collaborated on team-based projects to strengthen knowledge of networking and system infrastructure.",
        "Enhanced problem-solving abilities through troubleshooting and regular IT system maintenance."
      ],
      technologies: []
    }
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Information Systems Development",
      institution: "Higher Institute of Technological Studies of Sousse",
      location: "Sousse, Tunisia",
      period: "2022 - 2025",
      grade: "Excellent",
    
      gradient: "from-blue-500 to-sky-500",
      highlights: [
        "Specialized in Information Systems Development",
        "Member of the Google Developer Student Club (GDSC)",
        "Participated in hackathons and coding competitions"
      ]
    },
    {
      degree: "Baccalaureate in Computer Science",
      institution: "Beni Khaled High School",
      location: "Béni Khalled, Nabeul, Tunisia",
      period: "2021 - 2022",
      grade: "Good",
      status: "Completed",
      gradient: "from-sky-400 to-blue-400",
      highlights: [
        "Strong foundation in computer science and related sciences",
        "Active participation in technology-related extracurricular activities"
      ]
    }
  ];

  const ExperienceCard = ({ item, index, type }) => (
    <div
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100/50"
      onMouseEnter={() => setHoveredCard(`${type}-${index}`)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Gradient Border Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Status Badge */}
    

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${hoveredCard === `${type}-${index}` ? 'scale-110 rotate-3' : ''}`}>
              {type === 'experience' ? (
                <Briefcase className="w-8 h-8 text-white" />
              ) : (
                <GraduationCap className="w-8 h-8 text-white" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                {type === 'experience' ? item.title : item.degree}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600">
                  <Building className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">{type === 'experience' ? item.company : item.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Type/Grade Badge */}
          {type === 'experience' ? (
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Users className="w-4 h-4" />
              {item.type}
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Award className="w-4 h-4" />
              {item.grade}
            </div>
          )}
        </div>

        {/* Description/Highlights */}
        <div className="mb-6">
          <ul className="space-y-3">
            {(type === 'experience' ? item.description : item.highlights).map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        {type === 'experience' && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="text-xs bg-blue-50 text-blue-600 px-3 py-2 rounded-full font-medium border border-blue-200/50 hover:bg-blue-100 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sparkle Effects on Hover */}
      {hoveredCard === `${type}-${index}` && (
        <>
          <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-6 right-6 w-2 h-2 bg-sky-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 left-2 w-4 h-4 bg-blue-300 rounded-full animate-bounce"></div>
        </>
      )}
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-blue-50/50 via-sky-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-48 h-48 bg-gradient-to-r from-blue-200/15 to-sky-200/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-36 h-36 bg-gradient-to-r from-sky-300/15 to-blue-300/15 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-100/20 to-sky-100/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 rounded-full font-medium mb-8 shadow-lg backdrop-blur-sm border border-blue-200/50">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Professional Journey
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Experience &{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 text-transparent bg-clip-text">
                Education
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/20 to-sky-300/20 rounded-lg blur opacity-75 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey and academic background that have shaped my expertise in technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard 
                  key={index} 
                  item={exp} 
                  index={index} 
                  type="experience" 
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <ExperienceCard 
                  key={index} 
                  item={edu} 
                  index={index} 
                  type="education" 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 left-12 w-8 h-8 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-20 w-6 h-6 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-12 left-24 w-10 h-10 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-6 right-8 w-7 h-7 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-white animate-pulse" />
                <h3 className="text-3xl font-bold text-white">My Journey So Far</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-white/90">Years of Study</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-white/90">Internship Experiences</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">8+</div>
                  <div className="text-white/90">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;