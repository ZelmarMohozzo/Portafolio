import React from 'react';
import { Terminal, Shield, Code, Zap } from 'lucide-react';

const Expertise = () => {
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

          <div className="space-y-12">
            {/* Kali Linux Expertise - Larger Section */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
              <div className="flex items-center mb-8">
                <div className="w-32 h-32 mr-8 flex items-center justify-center">
                  <img
                    src="https://img.icons8.com/?size=256&id=qBWtR72kluCU&format=png"
                    alt="Kali Linux"
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white font-mono">Kali Linux Expert</h3>
                  <p className="text-matrix-500 font-mono text-lg">Desde 2018 | +6 años</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {kaliExperience.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                    <span className="text-white font-mono text-lg">{item.title}</span>
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