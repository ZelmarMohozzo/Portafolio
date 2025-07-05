import React from 'react';
import { Terminal, Shield, Code, Zap } from 'lucide-react';

const Expertise = () => {
  const technologies = [
    {
      name: 'Node.js',
      logo: 'https://img.icons8.com/?size=256&id=54087&format=png',
      description: 'Backends robustos'
    },
    {
      name: 'Next.js',
      logo: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
      description: 'SSR y sitios estáticos'
    },
    {
      name: 'TypeScript',
      logo: 'https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png',
      description: 'Desarrollo tipado'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://img.icons8.com/?size=100&id=xF33DQdGyLDz&format=png',
      description: 'Base de datos relacional'
    }
  ];

  const kaliExperience = [
    {
      icon: Terminal,
      title: 'Pentesting Avanzado',
      color: 'text-red-400'
    },
    {
      icon: Shield,
      title: 'Automatización de Auditorías',
      color: 'text-orange-400'
    },
    {
      icon: Zap,
      title: 'Ciberseguridad Ofensiva',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-black to-gray-900">
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Kali Linux Expertise */}
            <div className="neon-border bg-black/50 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 mr-4 flex items-center justify-center bg-black rounded-lg border border-red-500/50">
                  <img
                    src="https://img.icons8.com/?size=256&id=qBWtR72kluCU&format=png"
                    alt="Kali Linux"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">Kali Linux Expert</h3>
                  <p className="text-matrix-500 font-mono">Desde 2018 | +6 años</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {kaliExperience.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-matrix-500/50 transition-all duration-300">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-white font-mono">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Development Technologies */}
            <div className="neon-border bg-black/50 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">Stack Tecnológico</h3>
                  <p className="text-cyber-500 font-mono">Desarrollo web moderno</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div className="neon-border bg-gray-900/50 rounded-xl p-4 hover:shadow-neon-blue transition-all duration-300">
                      <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-white rounded-lg">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 font-mono">{tech.name}</h4>
                      <p className="text-gray-400 text-xs">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;