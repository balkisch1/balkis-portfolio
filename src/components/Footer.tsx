import { Github, Linkedin, Mail, Heart, MapPin, Phone, Code, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 text-slate-800 py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-sky-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-200 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                Balkis Chachia
              </h3>
            </div>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed max-w-md">
              Passionate software developer from Tunisia, crafting digital experiences that make a meaningful impact through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/balkisch1"
                className="group bg-white/60 backdrop-blur-sm p-3 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/balkis-chachia-680564251" 
                className="group bg-white/60 backdrop-blur-sm p-3 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:balkischachia12@gmail.com" 
                className="group bg-white/60 backdrop-blur-sm p-3 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-6 text-lg flex items-center">
              <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-6 text-lg flex items-center">
              <Heart className="h-5 w-5 text-pink-500 mr-2" />
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-slate-600">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Nabeul, Tunisia</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-600">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:balkischachia12@gmail.com"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  balkischachia12@gmail.com
                </a>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-lg border border-green-200">
                <span className="text-green-700 font-medium text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-600 text-sm flex items-center">
              © 2025 Balkis Chachia. Made with 
              <Heart className="h-4 w-4 text-pink-500 mx-1 animate-pulse" />
              in Tunisia
            </p>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;