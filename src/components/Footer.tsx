import React from 'react';
import { Shield, Code, Heart, ArrowUp, Terminal } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-matrix-500/30">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="p-2 bg-gradient-to-r from-black to-gray-900 rounded-lg border border-matrix-500/50 shadow-neon-green">
                    <Terminal className="w-6 h-6 text-matrix-500" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-matrix-500 rounded-full animate-pulse"></div>
                </div>
                <div className="font-mono">
                  <span className="text-matrix-500 text-sm">~/</span>
                  <span className="text-white font-bold text-lg">zelmar_mohozzo</span>
                </div>
              </div>
              <div className="code-block">
                <p className="text-gray-400 max-w-md font-mono text-sm">
                  <span className="text-gray-500">//</span> Cybersecurity Specialist & Web Developer<br/>
                  <span className="text-gray-500">//</span> +6 años construyendo el futuro digital<br/>
                  <span className="text-gray-500">//</span> con código limpio y seguridad robusta
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 font-mono">
                <span className="text-gray-500">//</span> navigation:
              </h3>
              <ul className="space-y-2">
                {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-matrix-500 transition-colors duration-200 font-mono text-sm"
                    >
                      <span className="text-matrix-500 mr-2">&gt;</span>{item.toLowerCase().replace(' ', '_')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 font-mono">
                <span className="text-gray-500">//</span> services:
              </h3>
              <ul className="space-y-2 text-gray-400 font-mono text-sm">
                <li><span className="text-red-400">•</span> pentesting_ethical_hacking</li>
                <li><span className="text-blue-400">•</span> desarrollo_web_frontend</li>
                <li><span className="text-green-400">•</span> auditorias_seguridad</li>
                <li><span className="text-purple-400">•</span> consultoria_cyberseguridad</li>
                <li><span className="text-yellow-400">•</span> gestion_proyectos</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-matrix-500/30 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0 font-mono text-sm">
              <span className="text-gray-500">//</span>
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>por Zelmar Mohozzo</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm font-mono">
                © 2025 zelmar_mohozzo.dev
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-matrix-500 text-gray-400 hover:text-black rounded-lg transition-all duration-200 hover:scale-110 border border-gray-700 hover:border-matrix-500"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;