import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Sparkles, MessageCircle, User, AtSign, FileText, Heart } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    setStatus('');

    try {
      const data = {
        service_id: 'service_sh82vp5',
        template_id: 'template_81dix15',
        user_id: 'UbxqNhHyOTkj9Pb50',
        template_params: {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'balkischachia12@gmail.com'
        }
      };

      console.log('Sending data:', data);

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "balkischachia12@gmail.com",
      href: "mailto:balkischachia12@gmail.com",
      gradient: "from-blue-500 to-sky-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+216 55975375",
      href: "tel:+21655975375",
      gradient: "from-sky-400 to-blue-400"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nabeul, Tunisia",
      href: "#",
      gradient: "from-blue-400 to-sky-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/balkisch1",
      label: "GitHub",
      gradient: "from-blue-500 to-sky-500"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/balkis-chachia-680564251",
      label: "LinkedIn",
      gradient: "from-sky-500 to-blue-500"
    },
    {
      icon: Mail,
      href: "mailto:balkischachia12@gmail.com",
      label: "Email",
      gradient: "from-blue-400 to-sky-400"
    }
  ];

  const InputField = ({ label, name, type = "text", placeholder, icon: Icon, isTextarea = false }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className={`absolute left-4 ${isTextarea ? 'top-4' : 'top-1/2 -translate-y-1/2'} text-slate-400 ${focusedField === name ? 'text-blue-500' : ''} transition-colors`}>
          <Icon className="w-5 h-5" />
        </div>
        {isTextarea ? (
          <textarea
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            placeholder={placeholder}
            rows={6}
            required
            className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl resize-none transition-all duration-300 focus:outline-none ${
              focusedField === name 
                ? 'border-blue-400 shadow-xl shadow-blue-500/20 bg-white' 
                : 'border-blue-200/50 hover:border-blue-300'
            }`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            placeholder={placeholder}
            required
            className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none ${
              focusedField === name 
                ? 'border-blue-400 shadow-xl shadow-blue-500/20 bg-white' 
                : 'border-blue-200/50 hover:border-blue-300'
            }`}
          />
        )}
      </div>
    </div>
  );

  return (
    <section id="contact"  className="py-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-sky-50/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-52 h-52 bg-gradient-to-r from-blue-200/12 to-sky-200/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-40 h-40 bg-gradient-to-r from-sky-300/12 to-blue-300/12 rounded-full blur-2xl animate-bounce" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/2 right-16 w-36 h-36 bg-gradient-to-r from-blue-100/15 to-sky-100/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 rounded-full font-medium mb-8 shadow-lg backdrop-blur-sm border border-blue-200/50">
            <MessageCircle className="w-4 h-4 animate-pulse" />
            Let's Connect
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Get In{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 text-transparent bg-clip-text">
                Touch
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/20 to-sky-300/20 rounded-lg blur opacity-75 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, exciting projects, or just having a conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800">Let's Connect</h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you're looking for a dedicated team member, have a project in mind, 
                or just want to chat about technology, I'd love to hear from you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group block bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100/50"
                    onMouseEnter={() => setHoveredCard(`contact-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${hoveredCard === `contact-${index}` ? 'scale-110 rotate-3' : ''}`}>
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                    
                    {hoveredCard === `contact-${index}` && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                    )}
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-bold text-slate-800 text-lg mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110`}
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Send Message</h3>
            </div>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Message envoyé avec succès ! Je vous répondrai bientôt.</span>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 text-red-700 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Erreur lors de l'envoi. Veuillez réessayer ou m'envoyer un email directement.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="First Name"
                  name="firstName"
                  placeholder="Your first name"
                  icon={User}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  placeholder="Your last name"
                  icon={User}
                />
              </div>
              
              {/* Email */}
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                icon={AtSign}
              />
              
              {/* Subject */}
              <InputField
                label="Subject"
                name="subject"
                placeholder="What's this about?"
                icon={FileText}
              />
              
              {/* Message */}
              <InputField
                label="Message"
                name="message"
                placeholder="Tell me about your project or just say hello!"
                icon={MessageCircle}
                isTextarea={true}
              />
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 left-12 w-8 h-8 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-20 w-6 h-6 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-12 left-24 w-10 h-10 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-6 right-8 w-7 h-7 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-white animate-pulse" />
                <h3 className="text-3xl font-bold text-white">Ready to Work Together?</h3>
              </div>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                I'm excited to bring fresh perspectives and dedication to your next project. 
                Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;