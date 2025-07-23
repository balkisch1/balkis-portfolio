import { useState } from "react";
import { GraduationCap, Award, Users, Target, Sparkles, Heart, Code, Lightbulb } from "lucide-react";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievements = [
    {
      icon: GraduationCap,
      title: "ISET Sousse Graduate",
      description: "Completed my license degree with excellence",
      gradient: "from-blue-400 to-sky-400"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistent high performance throughout studies",
      gradient: "from-sky-400 to-blue-500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led multiple successful group projects",
      gradient: "from-blue-300 to-sky-300"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and growth",
      gradient: "from-sky-500 to-blue-400"
    }
  ];

  const values = [
    { icon: Lightbulb, text: "Innovation" },
    { icon: Heart, text: "Integrity" },
    { icon: Users, text: "Collaboration" },
    { icon: Code, text: "Continuous Learning" },
    { icon: Sparkles, text: "Excellence" }
  ];

  return (
    <section id ="about" className="py-20 bg-gradient-to-b from-blue-50/50 via-sky-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-40 h-40 bg-gradient-to-r from-blue-200/20 to-sky-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-r from-sky-300/20 to-blue-300/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-100/30 to-sky-100/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 rounded-full font-medium mb-8 shadow-lg backdrop-blur-sm border border-blue-200/50">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Get to know me better
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 text-transparent bg-clip-text">
                Me
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/20 to-sky-300/20 rounded-lg blur opacity-75 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate technology enthusiast and recent graduate from ISET Sousse, 
            ready to make my mark in the digital world.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Journey Text */}
          <div className="Space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100/50 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800">My Journey</h3>
              </div>
              
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-lg">
                  My journey in technology began at{" "}
                  <span className="text-blue-600 font-semibold">ISET Sousse</span>, where I discovered my passion 
                  for software development and digital innovation. Throughout my studies, I've 
                  been fascinated by the power of technology to solve real-world problems.
                </p>
                
                <p className="text-lg">
                  As a{" "}
                  <span className="text-blue-600 font-semibold">Tunisian woman in tech</span>, I'm committed to breaking barriers and inspiring 
                  others to pursue their dreams in technology. I believe in the importance of 
                  diversity in driving innovation and creating inclusive solutions.
                </p>
                
                <p className="text-lg">
                  I'm now looking to contribute to meaningful, impactful projects, collaborate with experienced professionals, and continue expanding my skills. My goal is simple:{" "}
                  <span className="text-blue-600 font-semibold">to build technology that makes life better</span> — for users, communities, and the future.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50 cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ${hoveredCard === index ? 'scale-110 rotate-3' : ''}`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="font-bold text-slate-800 mb-3 text-lg group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
                
                {/* Sparkle Effect */}
                {hoveredCard === index && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-8 w-6 h-6 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-8 left-12 w-4 h-4 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-white">My Core Values</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/30 transition-all duration-300 group">
                    <value.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">{value.text}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
                These values guide every project I work on and every decision I make in my career journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;