import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Balkis Chachia</h3>
            <p className="text-background/80 mb-4">
              Passionate software developer from Tunisia, ready to make a positive impact through technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-background/80 hover:text-background transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-background/80 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:balkis.chachia@example.com" 
                className="text-background/80 hover:text-background transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-background/80 hover:text-background transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-background transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-background/80 hover:text-background transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-background/80">
              <p>Sousse, Tunisia</p>
              <p>balkis.chachia@example.com</p>
              <p>Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">
            © 2024 Balkis Chachia. All rights reserved.
          </p>
          <p className="text-background/80 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;