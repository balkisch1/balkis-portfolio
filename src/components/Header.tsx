import { Button } from "@/components/ui/button";
import { Menu, X, Download, Code, Sparkles } from "lucide-react";
import { useState } from "react";
import cvFile from "../assets/balkischachia cv.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = cvFile;
      link.download = 'Balkis-Chachia-CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erreur lors du téléchargement du CV:', error);
      // Fallback: ouvrir le CV dans un nouvel onglet
      window.open(cvFile, '_blank');
    }
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50/95 via-sky-50/95 to-blue-50/95 backdrop-blur-xl border-b border-blue-200/30 shadow-sm">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -top-2 right-1/4 w-16 h-16 bg-sky-200/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute -top-6 right-10 w-20 h-20 bg-blue-300/15 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-sky-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Code className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="font-playfair text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-sky-700 transition-all duration-300">
              Balkis Chachia
            </div>
            <Sparkles className="h-4 w-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium group py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-sky-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                <div className="absolute inset-0 bg-blue-50/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            ))}
            <Button 
              className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group px-6 py-2 rounded-xl"
              onClick={handleDownloadCV}
            >
              <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-blue-200/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-5 w-5 text-slate-600 group-hover:rotate-90 transition-transform duration-300" /> : 
              <Menu className="h-5 w-5 text-slate-600 group-hover:scale-110 transition-transform duration-300" />
            }
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 py-6 border-t border-blue-200/30 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium group py-3 px-4 rounded-lg hover:bg-blue-50/50 flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span>{item.label}</span>
                  <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-sky-500 group-hover:w-6 transition-all duration-300 rounded-full"></div>
                </a>
              ))}
              <Button 
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group py-3 rounded-xl"
                onClick={() => {
                  handleDownloadCV();
                  setIsMenuOpen(false);
                }}
              >
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;