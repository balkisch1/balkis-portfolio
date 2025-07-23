import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import meImage from '../assets/me.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-sky-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-sky-200/40 to-blue-300/40 rounded-full blur-lg animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-100/20 to-sky-100/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Mouse follower */}
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-blue-200/10 to-transparent rounded-full pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 rounded-full font-medium mb-8 shadow-lg backdrop-blur-sm border border-blue-200/50 hover:shadow-xl transition-all duration-300 group">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              ISET Sousse Graduate
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            </div>

            {/* Main Heading */}
            <h1 className="font-bold text-5xl lg:text-7xl mb-8 leading-tight">
              Hi, I'm{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
                  Balkis
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/20 to-sky-300/20 rounded-lg blur opacity-75 animate-pulse"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-2xl lg:text-3xl text-slate-600 mb-8 font-medium">
              Software Developer | ISET Sousse Graduate
            </h2>
            
            {/* Description */}
            <p className="text-lg text-slate-700 mb-10 max-w-2xl leading-relaxed">
              Passionate about coding and solving real-world problems, I specialize in building full-stack applications using modern technologies like 
              <span className="text-blue-600 font-semibold"> .NET</span>, 
              <span className="text-blue-600 font-semibold"> Spring Boot</span>, and 
              <span className="text-blue-600 font-semibold"> React</span>. 
              With hands-on experience in     <span className="text-blue-600 font-semibold"> DevOps</span>, <span className="text-blue-600 font-semibold"> REST APIs,</span> and system administration, I love turning ideas into clean, functional, and impactful solutions.
              <br /><br />
              Currently seeking new challenges and opportunities to grow as a developer.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
              <a href="#projects">
  <span className="flex items-center justify-center gap-2 group cursor-pointer">
    View My Work
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </span>
</a>

              </button>
          <a href="#contact">
  <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-600 border-2 border-blue-200 rounded-xl font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
    Get In Touch
  </button>
</a>

            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a   href="https://github.com/balkisch1" className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a   href="https://www.linkedin.com/in/balkis-chachia-680564251"  className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:balkischachia12@gmail.com" className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
        <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* Main Image Container */}
        <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 rounded-full p-1">
            <div className="w-full h-full bg-white rounded-full p-2">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={meImage} 
                  alt="Balkis Chachia - Software Developer"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Floating Elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-300/40 to-sky-300/40 rounded-full animate-bounce shadow-lg" style={{animationDuration: '3s'}}></div>
        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-sky-300/40 to-blue-400/40 rounded-full animate-pulse shadow-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-blue-200/60 to-sky-200/60 rounded-full animate-ping"></div>
        
        {/* Sparkle Effects */}
        <div className="absolute top-8 left-8 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-12 right-12 w-2 h-2 bg-sky-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-4 w-4 h-4 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      </div>
      </div>
    </div>
    
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Hero;