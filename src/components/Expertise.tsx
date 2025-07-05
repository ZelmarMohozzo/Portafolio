import React from 'react';
import { Terminal, Shield, Code, Database, Server, Zap } from 'lucide-react';

const Expertise = () => {
  const technologies = [
    {
      name: 'Node.js',
      logo: 'https://img.icons8.com/?size=256&id=54087&format=png',
      description: 'Backends robustos y escalables'
    },
    {
      name: 'Next.js',
      logo: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
      description: 'SSR y generación de sitios estáticos'
    },
    {
      name: 'TypeScript',
      logo: 'https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png',
      description: 'Lenguaje base para desarrollo tipado'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://img.icons8.com/?size=100&id=xF33DQdGyLDz&format=png',
      description: 'Sistema de base de datos relacional'
    }
  ];

  const kaliExperience = [
    {
      icon: Terminal,
      title: 'Pentesting Avanzado',
      description: 'Uso experto de herramientas especializadas para auditorías de seguridad',
      color: 'text-red-400'
    },
    {
      icon: Shield,
      title: 'Automatización de Auditorías',
      description: 'Desarrollo de scripts personalizados para testing automatizado',
      color: 'text-orange-400'
    },
    {
      icon: Zap,
      title: 'Ciberseguridad Ofensiva',
      description: 'Experiencia real en entornos de red team y ethical hacking',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="code-block inline-block mb-6">
              <span className="text-gray-500 font-mono">class</span>{' '}
              <span className="text-matrix-500 font-mono">TechnicalExpertise</span>{' '}
              <span className="text-yellow-400 font-mono">{`{`}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Experiencia <span className="text-matrix-500 neon-glow">Técnica</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              <span className="text-gray-500">//</span> Especialización en ciberseguridad ofensiva y desarrollo web moderno
            </p>
            <div className="code-block inline-block mt-6">
              <span className="text-yellow-400 font-mono">{`}`}</span>
            </div>
          </div>

          {/* Kali Linux Expertise */}
          <div className="mb-16">
            <div className="code-block mb-8">
              <div className="font-mono text-matrix-500 mb-4">
                <Terminal className="w-5 h-5 inline mr-2" />
                <span className="text-gray-500">const</span> <span className="text-white">kaliExpertise</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">{`{`}</span>
              </div>
              <div className="ml-4 font-mono text-sm space-y-2">
                <div><span className="text-cyan-400">since:</span> <span className="text-green-400">"2018"</span></div>
                <div><span className="text-cyan-400">level:</span> <span className="text-orange-400">"expert"</span></div>
                <div><span className="text-cyan-400">focus:</span> <span className="text-purple-400">["pentesting", "automation", "offensive-security"]</span></div>
              </div>
              <div className="font-mono text-matrix-500 mt-2">
                <span className="text-yellow-400">{`}`}</span>
              </div>
            </div>

            <div className="neon-border bg-black/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">Kali Linux Expert</h3>
                  <p className="text-matrix-500 font-mono">Desde 2018 | +6 años de experiencia</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Manejo experto de Kali Linux desde 2018, incluyendo uso avanzado de herramientas para pentesting, 
                automatización de auditorías de seguridad y experiencia en entornos reales de ciberseguridad ofensiva.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {kaliExperience.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-matrix-500/50 transition-all duration-300 mb-4">
                      <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                      <h4 className="text-white font-semibold mb-2 font-mono">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Web Development Technologies */}
          <div>
            <div className="code-block mb-8">
              <div className="font-mono text-matrix-500 mb-4">
                <Code className="w-5 h-5 inline mr-2" />
                <span className="text-gray-500">const</span> <span className="text-white">webTechnologies</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">[</span>
              </div>
            </div>

            <div className="neon-border bg-black/50 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">Desarrollo Web Moderno</h3>
                  <p className="text-cyber-500 font-mono">Stack tecnológico actual</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Desarrollo de aplicaciones web modernas utilizando las últimas tecnologías y mejores prácticas 
                de la industria para crear soluciones robustas y escalables.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div className="neon-border bg-gray-900/50 rounded-xl p-6 hover:shadow-neon-blue transition-all duration-300">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2 font-mono">{tech.name}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 code-block">
                <div className="font-mono text-sm space-y-2">
                  <div><span className="text-gray-500">//</span> <span className="text-gray-400">Stack completo para desarrollo full-stack</span></div>
                  <div><span className="text-blue-400">🚀</span> <span className="text-white">Frontend:</span> <span className="text-gray-500">Next.js + TypeScript</span></div>
                  <div><span className="text-green-400">⚡</span> <span className="text-white">Backend:</span> <span className="text-gray-500">Node.js + Express</span></div>
                  <div><span className="text-purple-400">🗄️</span> <span className="text-white">Database:</span> <span className="text-gray-500">PostgreSQL</span></div>
                </div>
              </div>
            </div>

            <div className="code-block mt-8">
              <div className="font-mono text-matrix-500">
                <span className="text-yellow-400">]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;