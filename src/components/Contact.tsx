import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, CheckCircle, Terminal } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'email',
      value: 'zelmarmohozzo@gmail.com',
      href: 'mailto:zelmarmohozzo@gmail.com'
    },
    {
      icon: Phone,
      label: 'status',
      value: 'available_for_freelance',
      href: '#'
    },
    {
      icon: MapPin,
      label: 'location',
      value: 'Punta del Este, Uruguay',
      href: '#'
    }
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
      icon: MessageSquare,
      label: 'Discord',
      href: '#',
      color: 'hover:text-neon-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="code-block inline-block mb-6">
              <span className="text-gray-500 font-mono">function</span>{' '}
              <span className="text-matrix-500 font-mono">contactMe</span>
              <span className="text-white font-mono">()</span>{' '}
              <span className="text-yellow-400 font-mono">{`{`}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Trabajemos <span className="text-matrix-500 neon-glow">Juntos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              <span className="text-gray-500">//</span> ¿Tienes un proyecto en mente? Siempre en busca de nuevos desafíos y proyectos para sumar a mi lista.
            </p>
            <div className="code-block inline-block mt-6">
              <span className="text-yellow-400 font-mono">{`}`}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="code-block">
                <div className="mb-6">
                  <div className="font-mono text-matrix-500 mb-4">
                    <Terminal className="w-5 h-5 inline mr-2" />
                    <span className="text-gray-500">const</span> <span className="text-white">contactInfo</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">{`{`}</span>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 text-gray-300 hover:text-matrix-500 transition-colors duration-200 group"
                    >
                      <div className="p-3 bg-gray-800 rounded-lg border border-gray-700 group-hover:border-matrix-500/50 transition-colors duration-200">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="font-mono">
                        <div className="text-sm text-gray-500">{info.label}:</div>
                        <div className="font-medium text-sm">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 font-mono">
                    <span className="text-gray-500">//</span> social_links:
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:border-matrix-500/50`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="neon-border bg-matrix-500/10 p-4 rounded-lg">
                  <h4 className="text-matrix-500 font-semibold mb-2 font-mono">availability.status</h4>
                  <p className="text-gray-300 text-sm font-mono">
                    Actualmente disponible para proyectos freelance, colaboraciones y 
                    oportunidades que combinen desarrollo + seguridad.
                  </p>
                </div>

                <div className="mt-6 font-mono text-matrix-500">
                  <span className="text-yellow-400">{`}`}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="code-block">
                <div className="mb-6">
                  <div className="font-mono text-matrix-500 mb-4">
                    <span className="text-gray-500">class</span> <span className="text-white">ContactForm</span> <span className="text-yellow-400">{`{`}</span>
                  </div>
                </div>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-matrix-500/10 border border-matrix-500/20 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-matrix-500" />
                    <span className="text-matrix-500 font-mono">message.sent = true;</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                        <span className="text-gray-500">//</span> name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-matrix-500 focus:ring-1 focus:ring-matrix-500 transition-colors duration-200 font-mono"
                        placeholder="tu_nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                        <span className="text-gray-500">//</span> email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-matrix-500 focus:ring-1 focus:ring-matrix-500 transition-colors duration-200 font-mono"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      <span className="text-gray-500">//</span> subject:
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-matrix-500 focus:ring-1 focus:ring-matrix-500 transition-colors duration-200 font-mono"
                      placeholder="proyecto_colaboracion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      <span className="text-gray-500">//</span> message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-matrix-500 focus:ring-1 focus:ring-matrix-500 transition-colors duration-200 resize-none font-mono"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-matrix-500 to-cyber-500 text-black px-8 py-4 rounded-lg font-semibold hover:shadow-neon-green transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 font-mono"
                  >
                    <Send className="w-5 h-5" />
                    <span>./send_message</span>
                  </button>
                </form>

                <div className="mt-6 font-mono text-matrix-500">
                  <span className="text-yellow-400">{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;