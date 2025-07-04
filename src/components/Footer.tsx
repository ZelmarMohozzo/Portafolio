import React from 'react';
import { Shield, Code, Heart, ArrowUp, Terminal, Github, Linkedin, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'inicio' },
    { href: '#about', label: 'sobre_mi' },
    { href: '#skills', label: 'habilidades' },
    { href: '#projects', label: 'proyectos' },
    { href: '#contact', label: 'contacto' },
  ];

  const services = [
    { name: 'pentesting_web', icon: Shield, color: 'text-red-400' },
    { name: 'desarrollo_frontend', icon: Code, color: 'text-blue-400' },
    { name: 'auditorias_seguridad', icon: Shield, color: 'text-green-400' },
    { name: 'consultoria_tech', icon: Terminal, color: 'text-purple-400' },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ZelmarMohozzo',
      color: 'hover:text-matrix-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/zelmar-mohozzo',
      color: 'hover:text-cyber-500'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:zelmarmohozzo@gmail.com',
      color: 'hover:text-neon-500'
    },
    {
      icon: MessageSquare,
      label: 'Discord',
      href: '#',
      color: 'hover:text-yellow-400'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'zelmarmohozzo@gmail.com',
      href: 'mailto:zelmarmohozzo@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Punta del Este, Uruguay',
      href: '#'
    },
    {
      icon: Phone,
      label: 'Disponible para freelance',
      href: '#'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-matrix-500/30 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-matrix-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyber-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="p-3 bg-gradient-to-r from-black to-gray-900 rounded-lg border border-matrix-500/50 shadow-neon-green">
                    <Terminal className="w-7 h-7 text-matrix-500" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-matrix-500 rounded-full animate-pulse"></div>
                </div>
                <div className="font-mono">
                  <span className="text-matrix-500 text-sm">~/</span>
                  <span className="text-white font-bold text-xl">zelmar_mohozzo</span>
                </div>
              </div>
              
              <div className="code-block mb-6">
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  <span className="text-gray-500">//</span> Cybersecurity Specialist<br/>
                  <span className="text-gray-500">//</span> & Web Developer<br/>
                  <span className="text-gray-500">//</span> +6 años de experiencia<br/>
                  <span className="text-matrix-500">></span> Construyendo el futuro digital
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:border-matrix-500/50 hover:shadow-neon-green`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6 font-mono flex items-center">
                <Code className="w-5 h-5 text-matrix-500 mr-2" />
                <span className="text-gray-500">//</span> navegacion
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-matrix-500 transition-colors duration-200 font-mono text-sm flex items-center group"
                    >
                      <span className="text-matrix-500 mr-2 group-hover:mr-3 transition-all duration-200">></span>
                      <span className="group-hover:neon-glow">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6 font-mono flex items-center">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-gray-500">//</span> servicios
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-400 font-mono text-sm">
                    <service.icon className={`w-4 h-4 ${service.color}`} />
                    <span>{service.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-6 font-mono flex items-center">
                <Mail className="w-5 h-5 text-cyber-500 mr-2" />
                <span className="text-gray-500">//</span> contacto
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-start space-x-3 text-gray-400 hover:text-matrix-500 transition-colors duration-200 group"
                    >
                      <info.icon className="w-4 h-4 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-mono text-sm leading-relaxed">{info.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Status Badge */}
              <div className="mt-6 neon-border bg-matrix-500/10 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-matrix-500 rounded-full animate-pulse"></div>
                  <span className="text-matrix-500 font-semibold font-mono text-sm">status.online</span>
                </div>
                <p className="text-gray-300 text-xs font-mono">
                  Disponible para proyectos freelance y colaboraciones
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-matrix-500/30 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm">
                <span className="text-gray-500">//</span>
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>y mucho</span>
                <Code className="w-4 h-4 text-matrix-500" />
                <span>por Zelmar Mohozzo</span>
              </div>

              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm font-mono">
                  © 2025 zelmar_mohozzo.dev
                </span>
                <button
                  onClick={scrollToTop}
                  className="p-3 bg-gray-800/50 hover:bg-matrix-500 text-gray-400 hover:text-black rounded-lg transition-all duration-200 hover:scale-110 border border-gray-700 hover:border-matrix-500 hover:shadow-neon-green group"
                  title="Volver arriba"
                >
                  <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;