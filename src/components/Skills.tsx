import React from 'react';
import { Code, Shield, Database, Terminal, Lock, Zap, Globe } from 'lucide-react';

const Skills = () => {
  const tools = [
    { name: 'Burp Suite', icon: Shield, color: 'hover:text-red-400' },
    { name: 'Metasploit', icon: Lock, color: 'hover:text-orange-400' },
    { name: 'Wireshark', icon: Globe, color: 'hover:text-blue-400' },
    { name: 'NMAP', icon: Terminal, color: 'hover:text-matrix-500' },
    { name: 'Kali Linux', icon: Terminal, color: 'hover:text-green-400' },
    { name: 'VS Code', icon: Code, color: 'hover:text-cyan-400' },
    { name: 'Git', icon: Zap, color: 'hover:text-yellow-400' },
    { name: 'Docker', icon: Database, color: 'hover:text-purple-400' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="code-block inline-block mb-6">
              <span className="text-gray-500 font-mono">const</span>{' '}
              <span className="text-matrix-500 font-mono">skills</span>{' '}
              <span className="text-white font-mono">=</span>{' '}
              <span className="text-yellow-400 font-mono">[</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Mis <span className="text-matrix-500 neon-glow">Habilidades</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              <span className="text-gray-500">//</span> Una combinación única de desarrollo de software y expertise en cyberseguridad
            </p>
            <div className="code-block inline-block mt-6">
              <span className="text-yellow-400 font-mono">]</span>
            </div>
          </div>

          <div className="code-block">
            <div className="mb-6">
              <div className="font-mono text-matrix-500">
                <span className="text-gray-500">const</span> <span className="text-white">tools</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">{`{`}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
              <Terminal className="w-6 h-6 inline mr-2 text-matrix-500" />
              Herramientas & Tecnologías
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-matrix-500/50 transition-all duration-200 hover:scale-105 group"
                >
                  <tool.icon className={`w-8 h-8 text-gray-400 mb-2 group-hover:scale-110 transition-all duration-300 ${tool.color}`} />
                  <span className="text-gray-300 text-sm font-medium text-center font-mono">{tool.name}</span>
                </div>
              ))}
            </div>
            
            <div className="font-mono text-matrix-500">
              <span className="text-yellow-400">{`}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;