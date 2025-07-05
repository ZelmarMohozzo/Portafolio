import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Terminal, Lock, Users, Award, Code } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Zelmar Mohozzo';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const createMatrixChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + 'vw';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.opacity = Math.random().toString();
      document.body.appendChild(char);
      
      setTimeout(() => {
        char.remove();
      }, 5000);
    };

    const interval = setInterval(createMatrixChar, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-matrix-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="mb-8">
                <div className="code-block mb-6 inline-block">
                  <div className="flex items-center space-x-2 text-sm">
                    <Terminal className="w-4 h-4 text-matrix-500" />
                    <span className="text-matrix-500 font-mono">status:</span>
                    <span className="text-white font-mono">"online"</span>
                    <Lock className="w-4 h-4 text-cyber-500" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="font-mono text-matrix-500 text-lg mb-2">
                  <span className="text-gray-500">const</span> <span className="text-white">developer</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">{`{`}</span>
                </div>
                <div className="font-mono text-lg ml-4 space-y-1">
                  <div><span className="text-cyan-400">name:</span> <span className="text-green-400">"{text}"</span><span className="animate-pulse text-matrix-500">|</span></div>
                  <div><span className="text-cyan-400">role:</span> <span className="text-green-400">"Cybersecurity Specialist"</span></div>
                  <div><span className="text-cyan-400">experience:</span> <span className="text-orange-400">6</span></div>
                  <div><span className="text-cyan-400">skills:</span> <span className="text-purple-400">["pentesting", "web-dev", "linux"]</span></div>
                </div>
                <div className="font-mono text-matrix-500 text-lg">
                  <span className="text-yellow-400">{`}`}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="block font-mono">¡Hola, soy</span>
                <span className="block bg-gradient-to-r from-matrix-500 via-cyber-500 to-neon-500 bg-clip-text text-transparent neon-glow">
                  Zelmar Mohozzo!
                </span>
              </h1>

              <div className="code-block mb-8">
                <div className="font-mono text-sm space-y-2">
                  <div><span className="text-gray-500">//</span> <span className="text-gray-400">Especialidades</span></div>
                  <div><span className="text-red-400">🛡️</span> <span className="text-white">Cybersecurity Specialist</span> <span className="text-gray-500">+6 años</span></div>
                  <div><span className="text-blue-400">🎨</span> <span className="text-white">Web Developer</span> <span className="text-gray-500">(Frontend + Backend)</span></div>
                  <div><span className="text-green-400">📊</span> <span className="text-white">Project Manager</span> <span className="text-gray-500">| 🐧 Linux | 💣 Pentester</span></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="neon-border bg-black/50 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-neon-green transition-all duration-300">
                  <Award className="w-6 h-6 text-matrix-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white font-mono">6+</div>
                  <div className="text-sm text-gray-400 font-mono">años.exp</div>
                </div>
               <div className="neon-border bg-black/50 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-neon-blue transition-all duration-300">
                  <a href='https://www.linkedin.com/company/codesocietydev/'> <Users className="w-6 h-6 text-cyber-500 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white font-mono">Code Society</div></a>
                  <div className="text-sm text-gray-400 font-mono">formador.tester</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-matrix-500 to-cyber-500 text-black px-8 py-4 rounded-lg font-bold hover:shadow-neon-green transition-all duration-200 transform hover:scale-105 font-mono glitch"
                >
                  ./view_projects
                </a>
                <a
                  href="#contact"
                  className="border-2 border-matrix-500 text-matrix-500 px-8 py-4 rounded-lg font-bold hover:bg-matrix-500 hover:text-black transition-all duration-200 transform hover:scale-105 font-mono neon-border"
                >
                  ./contact_me
                </a>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/ZelmarMohozzo"
                  className="text-gray-400 hover:text-matrix-500 transition-colors duration-200 transform hover:scale-110 glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                  href="https://linkedin.com/in/zelmar-mohozzo"
                  className="text-gray-400 hover:text-cyber-500 transition-colors duration-200 transform hover:scale-110 glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                  href="mailto:zelmar.mohozzo@gmail.com"
                  className="text-gray-400 hover:text-neon-500 transition-colors duration-200 transform hover:scale-110 glitch"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-matrix-500 to-cyber-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden neon-border shadow-neon-green">
                  <img
                    src="/public/1751334784723.jpeg"
                    alt="Zelmar Mohozzo"
                    className="w-full h-full object-cover filter contrast-125 brightness-110 hover:filter-none transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 code-block">
                  <div className="font-mono text-xs text-matrix-500">
                    <div>status: <span className="text-green-400">active</span></div>
                    <div>mode: <span className="text-cyan-400">hacker</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <div className="font-mono text-matrix-500 text-xs mb-2">scroll_down()</div>
            <ChevronDown className="w-8 h-8 text-matrix-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;