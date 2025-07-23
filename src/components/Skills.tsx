import { useState, useEffect } from "react";
import { Code, Database, Palette, Globe, Cloud, Layers, Sparkles, Zap } from "lucide-react";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      gradient: "from-blue-400 to-sky-400",
      bgGradient: "from-blue-50 to-sky-50",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "C#", level: 80 },
        { name: "Java", level: 75 },
        { name: "Python", level: 70 },
        { name: "PHP", level: 65 }
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      gradient: "from-sky-400 to-blue-500",
      bgGradient: "from-sky-50 to-blue-50",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Angular", level: 85 },
        { name: "React", level: 80 },
        { name: "Spring Boot", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "ASP.NET Core", level: 70 }
      ]
    },
    {
      icon: Database,
      title: "Database & Tools",
      gradient: "from-blue-300 to-sky-300",
      bgGradient: "from-blue-50 to-sky-50",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "SQL Server", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      icon: Layers,
      title: "Architectures & Methodologies",
      gradient: "from-sky-500 to-blue-400",
      bgGradient: "from-sky-50 to-blue-50",
      skills: [
        { name: "REST APIs", level: 80 },
        { name: "Agile Methodologies", level: 75 },
        { name: "Microservices", level: 70 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      gradient: "from-blue-500 to-sky-500",
      bgGradient: "from-blue-50 to-sky-50",
      skills: [
        { name: "Microsoft Azure", level: 70 },
        { name: "Docker", level: 65 },
        { name: "CI/CD (GitHub Actions, GitLab CI)", level: 65 },
        { name: "AWS", level: 60 }
      ]
    },
    {
      icon: Palette,
      title: "Design & Others",
      gradient: "from-sky-300 to-blue-400",
      bgGradient: "from-sky-50 to-blue-50",
      skills: [
        { name: "Figma", level: 80 },
        { name: "UI/UX Design", level: 75 }
      ]
    }
  ];

  // Animate progress bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          animated[`${categoryIndex}-${skillIndex}`] = skill.level;
        });
      });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const ProgressBar = ({ value, categoryIndex, skillIndex, gradient }) => {
    const animatedValue = animatedSkills[`${categoryIndex}-${skillIndex}`] || 0;
    
    return (
      <div className="relative h-3 bg-white/50 rounded-full overflow-hidden shadow-inner">
        <div 
          className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${animatedValue}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
    );
  };

  return (
    <section   id ="skills" className="py-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-sky-50/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-200/15 to-sky-200/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-36 h-36 bg-gradient-to-r from-sky-300/15 to-blue-300/15 rounded-full blur-2xl animate-bounce" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/2 right-10 w-28 h-28 bg-gradient-to-r from-blue-100/20 to-sky-100/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 rounded-full font-medium mb-8 shadow-lg backdrop-blur-sm border border-blue-200/50">
            <Zap className="w-4 h-4 animate-pulse" />
            Technical Expertise
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Technical{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 text-transparent bg-clip-text">
                Skills
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/20 to-sky-300/20 rounded-lg blur opacity-75 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical competencies and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100/50"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Header */}
              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${hoveredCategory === categoryIndex ? 'scale-110 rotate-6' : ''}`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="relative z-10 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700 group-hover:text-slate-800 transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                        {skill.level >= 80 && (
                          <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                        )}
                      </div>
                    </div>
                    <ProgressBar 
                      value={skill.level} 
                      categoryIndex={categoryIndex}
                      skillIndex={skillIndex}
                      gradient={category.gradient}
                    />
                  </div>
                ))}
              </div>

              {/* Hover Effect Sparkles */}
              {hoveredCategory === categoryIndex && (
                <>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-8 w-3 h-3 bg-sky-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 w-6 h-6 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-12 w-4 h-4 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-8 left-16 w-8 h-8 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 right-4 w-5 h-5 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code className="w-8 h-8 text-white animate-pulse" />
                <h3 className="text-2xl font-bold text-white">Always Learning</h3>
              </div>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                I believe in continuous improvement and staying updated with the latest technologies and best practices in software development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;