import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Terminal, Lock, Users, Award, Code, Shield, Zap, Eye, X } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showSkills, setShowSkills] = useState(false);
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
    },
    {
      name: 'MySQL',
      logo: '/pngwing.com.png',
      description: 'Base de datos SQL'
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

  const detailedSkills = {
    pentesting: [
      'Burp Suite Professional',
      'OWASP ZAP',
      'Metasploit Framework',
      'Nmap & Nessus',
      'SQLmap',
      'Nikto',
      'Gobuster',
      'Hydra & John the Ripper'
    ],
    forensics: [
      'Autopsy',
      'Volatility',
      'Wireshark',
      'Sleuth Kit',
      'FTK Imager',
      'Binwalk',
      'Foremost',
      'Hashcat'
    ],
    networking: [
      'Aircrack-ng',
      'Kismet',
      'Ettercap',
      'Tcpdump',
      'Netcat',
      'Masscan',
      'Zmap',
      'Hping3'
    ],
    exploitation: [
      'Exploit-DB',
      'Searchsploit',
      'Msfvenom',
      'Social Engineer Toolkit',
      'BeEF',
      'Empire',
      'Cobalt Strike',
      'Custom Exploits'
    ]
  };
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

          {/* Technology Stack Section */}
          <div className="mt-20 mb-12">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">Stack Tecnológico</h3>
                  <p className="text-cyber-500 font-mono">Desarrollo web moderno</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-gray-900/30 rounded-xl p-6 hover:bg-gray-800/30 transition-all duration-300">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h4 className="text-white font-bold text-base mb-2 font-mono">{tech.name}</h4>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kali Linux Expert Section */}
          <div className="mb-12">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-12 relative">
              {/* Skills Button */}
              <button
                onClick={() => setShowSkills(!showSkills)}
                className="absolute top-6 right-6 flex items-center space-x-2 bg-matrix-500/20 hover:bg-matrix-500/30 border border-matrix-500/50 text-matrix-500 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-mono text-sm"
              >
                <Eye className="w-4 h-4" />
                <span>{showSkills ? 'Ocultar' : 'Ver'} Skills</span>
              </button>

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
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                    <span className="text-white font-mono text-lg">{item.title}</span>
                  </div>
                ))}
              </div>

              {/* Detailed Skills Modal/Overlay */}
              {showSkills && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-6">
                  <div className="bg-gray-900 rounded-2xl border border-matrix-500/30 max-w-7xl w-full max-h-[95vh] overflow-y-auto">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-matrix-500/20 rounded-lg">
                            <Terminal className="w-8 h-8 text-matrix-500" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white font-mono">Herramientas & Skills</h3>
                            <p className="text-matrix-500 font-mono">Kali Linux | Ciberseguridad | Informática Forense</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowSkills(false)}
                          className="p-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <Shield className="w-6 h-6 text-red-400" />
                            <h4 className="text-xl font-bold text-white font-mono">Pentesting</h4>
                          </div>
                          {detailedSkills.pentesting.map((skill, index) => (
                            <div key={index} className="flex items-center space-x-3 p-2 bg-black/30 rounded-lg border border-red-500/20">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <span className="text-gray-300 font-mono text-sm">{skill}</span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <Terminal className="w-6 h-6 text-blue-400" />
                            <h4 className="text-xl font-bold text-white font-mono">Forense</h4>
                          </div>
                          {detailedSkills.forensics.map((skill, index) => (
                            <div key={index} className="flex items-center space-x-3 p-2 bg-black/30 rounded-lg border border-blue-500/20">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-300 font-mono text-sm">{skill}</span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <Zap className="w-6 h-6 text-yellow-400" />
                            <h4 className="text-xl font-bold text-white font-mono">Networking</h4>
                          </div>
                          {detailedSkills.networking.map((skill, index) => (
                            <div key={index} className="flex items-center space-x-3 p-2 bg-black/30 rounded-lg border border-yellow-500/20">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-gray-300 font-mono text-sm">{skill}</span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <Lock className="w-6 h-6 text-purple-400" />
                            <h4 className="text-xl font-bold text-white font-mono">Explotación</h4>
                          </div>
                          {detailedSkills.exploitation.map((skill, index) => (
                            <div key={index} className="flex items-center space-x-3 p-2 bg-black/30 rounded-lg border border-purple-500/20">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-gray-300 font-mono text-sm">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-matrix-500/10 rounded-lg border border-matrix-500/30">
                        <div className="flex items-center space-x-3 mb-4">
                          <Award className="w-6 h-6 text-matrix-500" />
                          <h4 className="text-xl font-bold text-white font-mono">Certificaciones & Experiencia</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <p className="text-gray-300 font-mono text-sm">
                              <span className="text-matrix-500">&gt;</span> +6 años de experiencia práctica
                            </p>
                            <p className="text-gray-300 font-mono text-sm">
                              <span className="text-matrix-500">&gt;</span> Pentesting en entornos reales
                            </p>
                            <p className="text-gray-300 font-mono text-sm">
                              <span className="text-matrix-500">&gt;</span> Formación en Code Society
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-gray-300 font-mono text-sm">
                              <span className="text-matrix-500">&gt;</span> Auditorías de seguridad
                            </p>
                            <p className="text-gray-300 font-mono text-sm">
                              <span className="text-matrix-500">&gt;</span> Análisis forense digital
                            </p>
                            <p className="text-gray-300 font-mono text-sm">
                              <span className="text-matrix-500">&gt;</span> Desarrollo de exploits custom
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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