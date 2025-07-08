import React, { useState } from 'react';
import { ExternalLink, Github, Shield, Code, Database, Globe, Lock, Zap, Eye, Users, BarChart3 } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'LATAM DATA HUB',
      description: 'Proyecto de análisis de datos para América Latina. Plataforma integral para procesamiento y visualización de grandes volúmenes de datos con enfoque en seguridad y escalabilidad.',
      image: '/public/latam data hub/image.png',
      category: 'development',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Python', 'D3.js'],
      features: ['Data Analytics', 'Real-time Processing', 'Security Compliance', 'Scalable Architecture'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'En desarrollo'
    },
    {
      id: 2,
      title: 'Academia de Tatuajes Platform',
      description: 'Plataforma web completa para una academia de tatuajes, incluyendo gestión de cursos, estudiantes, portafolio de trabajos y sistema de reservas online.',
      image: '/public/academia de tatuajes/image.png',
      category: 'development',
      technologies: ['React', 'Express', 'MongoDB', 'Stripe API', 'Socket.io'],
      features: ['Course Management', 'Booking System', 'Portfolio Gallery', 'Payment Integration'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'En desarrollo'
    },
    {
      id: 3,
      title: 'Panel para analizar datos',
      description: 'Dashboard interactivo para análisis y visualización de datos en tiempo real. Incluye métricas avanzadas, gráficos dinámicos y reportes automatizados para toma de decisiones basada en datos.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'development',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      features: ['Real-time Analytics', 'Interactive Charts', 'Custom Reports', 'Data Export'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'Completado'
    },
    {
      id: 4,
      title: 'Penetration Testing Suite',
      description: 'Suite de herramientas personalizadas para pentesting web y aplicaciones móviles. Incluye scripts automatizados y metodologías propias desarrolladas.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
      technologies: ['Python', 'Metasploit', 'Burp Suite', 'Kali Linux', 'Custom Tools'],
      features: ['Web App Testing', 'Mobile Security', 'Network Analysis', 'Vulnerability Assessment'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'Completado'
    },
    {
      id: 5,
      title: 'Linux Hardening Suite',
      description: 'Suite completa de scripts para hardening automático de servidores Linux. Incluye configuración de usuarios, firewall, fail2ban, SSH hardening y SELinux para máxima seguridad.',
      image: '/public/9b0e3126-7453-4913-976f-64e0bb27d2a5.png',
      category: 'security',
      technologies: ['Shell', '.sh', 'SELinux', 'SSH Hardening', 'Firewall'],
      features: ['Auto Hardening', 'Security Monitoring', 'Log Analysis', 'Compliance Checks'],
      githubUrl: 'https://github.com/ZelmarMohozzo/linux-hardening-suite',
      liveUrl: '#',
      status: 'Completado'
    },
    {
      id: 6,
      title: 'Code Society Training Platform',
      description: 'Plataforma educativa desarrollada para Code Society, enfocada en la formación de nuevos talentos en ciberseguridad con laboratorios prácticos.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'development',
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'MySQL'],
      features: ['Interactive Labs', 'Progress Tracking', 'Virtual Environments', 'Certification System'],
      githubUrl: 'https://github.com/ZelmarMohozzo',
      liveUrl: '#',
      status: 'Completado'
    },
  ];

  const categories = [
    { id: 'all', label: 'all_projects', icon: Globe },
    { id: 'development', label: 'dev_projects', icon: Code },
    { id: 'security', label: 'sec_projects', icon: Shield },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="code-block inline-block mb-6">
              <span className="text-gray-500 font-mono">git</span>{' '}
              <span className="text-matrix-500 font-mono">log</span>{' '}
              <span className="text-white font-mono">--oneline</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Mis <span className="text-matrix-500 neon-glow">Proyectos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-mono">
              <span className="text-gray-500">//</span> Una selección de proyectos que combinan desarrollo de software con mejores prácticas de cyberseguridad
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 font-mono ${
                    filter === category.id
                      ? 'bg-matrix-500 text-black shadow-neon-green'
                      : 'neon-border bg-black/50 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>./{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="neon-border bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-neon-green transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium font-mono ${
                      project.status === 'Completado' 
                        ? 'bg-matrix-500/20 text-matrix-500 border border-matrix-500/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-black/70 rounded-lg border border-gray-700">
                      {project.category === 'security' ? (
                        <Shield className="w-5 h-5 text-red-400" />
                      ) : (
                        <Code className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-matrix-500 text-sm font-semibold mb-2 font-mono">
                      <span className="text-gray-500">//</span> features:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700 font-mono"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700 font-mono">
                          +{project.features.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-cyber-500 text-sm font-semibold mb-2 font-mono">
                      <span className="text-gray-500">//</span> tech_stack:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-matrix-500 transition-colors duration-200 font-mono text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span>./code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyber-500 transition-colors duration-200 font-mono text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>./demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;