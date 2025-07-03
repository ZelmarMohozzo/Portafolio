import React from 'react';
import { Code2, Shield, Database, Users, Award, Target, Briefcase, GraduationCap, Terminal } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Shield, label: 'años_cybersec', value: '6+', color: 'text-red-400' },
    { icon: Code2, label: 'proyectos_comp', value: '50+', color: 'text-blue-400' },
    { icon: Users, label: 'estudiantes_form', value: '100+', color: 'text-green-400' },
    { icon: Award, label: 'certificaciones', value: '10+', color: 'text-purple-400' },
  ];

  const experience = [
    {
      icon: GraduationCap,
      title: 'Code Society',
      role: 'Formador & Security Tester',
      description: 'Formación de talentos en ciberseguridad y testing de seguridad en proyectos internos.',
      color: 'from-matrix-500 to-green-400',
      tech: ['Python', 'Pentesting', 'Linux', 'Training']
    },
    {
      icon: Shield,
      title: 'Security Auditor',
      role: 'Pentester & Vulnerability Assessor',
      description: 'Participación en auditorías, pruebas de penetración y desarrollo de estrategias de mitigación de riesgos.',
      color: 'from-red-500 to-orange-500',
      tech: ['OWASP', 'Burp Suite', 'Metasploit', 'Nmap']
    },
    {
      icon: Briefcase,
      title: 'Solution Maker',
      role: 'Project Realizer',
      description: 'Acompañamiento y desarrollo de ideas ajenas, transformando conceptos en productos funcionales.',
      color: 'from-cyber-500 to-blue-500',
      tech: ['React', 'Node.js', 'MongoDB', 'DevOps']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="code-block inline-block mb-6">
              <span className="text-gray-500 font-mono">function</span>{' '}
              <span className="text-matrix-500 font-mono">aboutMe</span>
              <span className="text-white font-mono">()</span>{' '}
              <span className="text-yellow-400 font-mono">{`{`}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Sobre <span className="text-matrix-500 neon-glow">Mí</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              <span className="text-gray-500">//</span> Apasionado de la tecnología con más de 6 años de experiencia
            </p>
            <div className="code-block inline-block mt-6">
              <span className="text-yellow-400 font-mono">{`}`}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in-up">
              <div className="code-block mb-6">
                <div className="font-mono text-sm">
                  <div className="text-gray-500">// Mi historia profesional</div>
                  <div className="text-matrix-500 mt-2">const <span className="text-white">myStory</span> = {`{`}</div>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300 font-mono">
                <div className="neon-border bg-black/30 p-4 rounded-lg">
                  <p className="leading-relaxed">
                    <span className="text-matrix-500">&gt;</span> Soy un apasionado de la tecnología con más de 6 años de experiencia en 
                    Ciberseguridad, Desarrollo Web y Gestión de Proyectos. Me encanta trabajar 
                    en ambientes colaborativos y enfocados en la mejora constante.
                  </p>
                </div>
                
                <div className="neon-border bg-black/30 p-4 rounded-lg">
                  <p className="leading-relaxed">
                    <span className="text-cyber-500">&gt;</span> He formado parte de <strong className="text-matrix-500 neon-glow">Code Society</strong>, 
                    donde brindé talleres de formación en seguridad informática y participé como 
                    tester de seguridad en múltiples proyectos.
                  </p>
                </div>
                
                <div className="neon-border bg-black/30 p-4 rounded-lg">
                  <p className="leading-relaxed">
                    <span className="text-neon-500">&gt;</span> Actualmente estoy explorando nuevas tecnologías, colaborando en proyectos que 
                    combinan desarrollo + seguridad, y formando nuevas generaciones en el mundo tech.
                  </p>
                </div>
              </div>

              <div className="code-block mt-6">
                <h4 className="text-matrix-500 font-semibold mb-3 font-mono">
                  <Terminal className="w-4 h-4 inline mr-2" />
                  ./current_projects --status active
                </h4>
                <ul className="text-sm space-y-2 font-mono">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-gray-300">📊 LATAM DATA HUB - Análisis de Datos</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-2">⚡</span>
                    <span className="text-gray-300">🖋️ Plataforma para Academia de Tatuajes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">🔍</span>
                    <span className="text-gray-300">Nuevos desafíos y proyectos innovadores</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="neon-border bg-black/50 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-neon-green transition-all duration-300 group"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="code-block">
            <div className="mb-6">
              <div className="font-mono text-matrix-500 mb-2">
                <span className="text-gray-500">class</span> <span className="text-white">ProfessionalExperience</span> <span className="text-yellow-400">{`{`}</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {experience.map((exp, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${exp.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 font-mono">{exp.title}</h4>
                  <h5 className="text-matrix-500 font-medium mb-3 font-mono">{exp.role}</h5>
                  <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap justify-center gap-1">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-800 text-matrix-500 px-2 py-1 rounded border border-matrix-500/30 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 font-mono text-matrix-500">
              <span className="text-yellow-400">{`}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;