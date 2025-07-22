import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/balkis-hero.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              ISET Sousse Graduate
            </div>
            
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Balkis</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8 font-inter">
              Aspiring Software Developer & Technology Enthusiast
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Recent graduate from ISET Sousse with a passion for creating innovative digital solutions. 
              I blend creativity with technical expertise to build meaningful applications that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:balkis.chachia@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden hero-card floating-animation">
                <img 
                  src={heroImage} 
                  alt="Balkis Chachia" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 floating-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 floating-animation" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;