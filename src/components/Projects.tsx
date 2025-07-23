import { useState } from "react";
import { ExternalLink, Github, Star, Sparkles, Code, Eye, Award, Badge } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Axia Agile",
      description: "Axia Agile is a project management platform designed for software development teams, supporting Scrum and Kanban methodologies. It helps teams efficiently manage sprints, tasks, and workflows while providing clear visibility into project progress.",
      tags: ["React", ".NET8", "C#", "CI/CD", "SQL SERVER", "Microservices", "Scrum", "Kanban"],
      image: "src/assets/agile.png",
      github: "#",
      demo: "#",
      featured: true,
      gradient: "from-blue-500 to-sky-500",
      category: "Full-Stack"
    },
    {
      title: "EasyTimetable",
      description: "A collaborative scheduling application for managing timetables with real-time updates, team collaboration, and progress tracking. Developed using Angular for the front-end and Spring Boot for the back-end.",
      tags: ["React", "Spring Boot", "REST API", "MySQL", "Flutter"],
      image: "src/assets/emploi.png",
      github: "#",
      demo: "#",
      gradient: "from-sky-400 to-blue-400",
      category: "Web App"
    },
    {
      title: "Sony Travel UI Design",
      description: "A mobile travel reservation application designed in Figma, featuring user-friendly trip planning, booking management, and interactive itinerary views.",
      tags: ["Figma", "UI/UX Design", "Mobile App", "Travel Reservation"],
      image: "src/assets/sony.png",
      github: "#",
      demo: "#",
      gradient: "from-blue-300 to-sky-300",
      category: "UI/UX"
    },
    {
      title: "QuizMaster",
      description: "QuizMaster is an engaging online platform that allows users to test their knowledge across diverse categories. Featuring hundreds of questions, real-time leaderboards, and competitive challenges, it offers a fun and interactive experience for trivia enthusiasts and learners alike.",
      tags: ["React", "Spring Boot", "REST API", "MySQL"],
      image: "src/assets/quiz.png",
      github: "#",
      demo: "#",
      gradient: "from-sky-500 to-blue-500",
      category: "Web App"
    },
    {
      title: "Delivery Food",
      description: "A full-stack food delivery application featuring user-friendly ordering, real-time order tracking, and role-based access for customers, delivery personnel, and administrators.",
      tags: ["Angular", "Spring Boot", "REST API", "MySQL"],
      image: "src/assets/delivery.png",
      github: "#",
      demo: "#",
      gradient: "from-blue-400 to-sky-400",
      category: "Full-Stack"
    }
  ];

  const ProjectImage = ({ project, index }) => (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-sky-200 aspect-video flex items-center justify-center group">
      {/* Placeholder with project icon */}
      <div className="text-center">
        <div className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
          <Code className="w-10 h-10 text-white" />
        </div>
        <p className="text-slate-600 font-medium">{project.title}</p>
        <p className="text-slate-400 text-sm">{project.category}</p>
      </div>
      
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
        <div className="flex gap-3">
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Eye className="w-5 h-5 text-slate-700" />
          </button>
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <ExternalLink className="w-5 h-5 text-slate-700" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-sky-50/50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/4 w-56 h-56 bg-gradient-to-r from-blue-200/10 to-sky-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-r from-sky-300/10 to-blue-300/10 rounded-full blur-2xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-r from-blue-100/15 to-sky-100/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 rounded-full font-medium mb-8 shadow-lg backdrop-blur-sm border border-blue-200/50">
            <Award className="w-4 h-4 animate-pulse" />
            Portfolio Showcase
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 text-transparent bg-clip-text">
                Projects
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/20 to-sky-300/20 rounded-lg blur opacity-75 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100/50 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-6 left-6 z-20">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title and Category */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium border border-blue-200/50 hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
              
              </div>

              {/* Hover Effects */}
              {hoveredProject === index && (
                <>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 bg-sky-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-blue-300 rounded-full animate-bounce"></div>
                </>
              )}

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 left-10 w-8 h-8 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-16 w-6 h-6 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-12 left-20 w-10 h-10 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-6 right-8 w-7 h-7 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
                <h3 className="text-3xl font-bold text-white">More Projects Coming Soon</h3>
              </div>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                I'm constantly working on new projects and exploring cutting-edge technologies. 
                Stay tuned for more exciting developments!
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;