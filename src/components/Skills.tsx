import React from 'react';
import { Code, Shield, Database, Cloud, Terminal, Lock, Zap, Globe, Users, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Seguridad Informática',
      color: 'from-red-500 to-orange-500',
      borderColor: 'border-red-500/50',
      skills: [
        { name: 'Pentesting (Web & Apps)', level: 95, color: 'bg-red-500' },
        { name: 'Ethical Hacking', level: 90, color: 'bg-orange-500' },
        { name: 'Linux Server Security', level: 88, color: 'bg-red-400' },
        { name: 'Gestión de Vulnerabilidades', level: 85, color: 'bg-orange-400' },
      ]
    },
    {
      icon: Code,
      title: 'Desarrollo Web',
      color: 'from-blue-500 to-purple-500',
      borderColor: 'border-blue-500/50',
      skills: [
        { name: 'React & JavaScript', level: 92, color: 'bg-blue-500' },
        { name: 'HTML5 & CSS3', level: 95, color: 'bg-blue-400' },
        { name: 'Node.js & Express', level: 80, color: 'bg-purple-500' },
        { name: 'UI/UX Design', level: 85, color: 'bg-purple-400' },
      ]
    },
    {
      icon: Database,
      title: 'Bases de Datos',
      color: 'from-matrix-500 to-green-400',
      borderColor: 'border-matrix-500/50',
      skills: [
        { name: 'MySQL', level: 88, color: 'bg-matrix-500' },
        { name: 'PostgreSQL', level: 85, color: 'bg-green-500' },
        { name: 'MongoDB', level: 80, color: 'bg-green-400' },
        { name: 'Database Security', level: 90, color: 'bg-matrix-400' },
      ]
    },
    {
      icon: Terminal,
      title: 'Otras Habilidades',
      color: 'from-neon-500 to-pink-500',
      borderColor: 'border-neon-500/50',
      skills: [
        { name: 'Linux Administration', level: 92, color: 'bg-neon-500' },
        { name: 'Git & GitHub', level: 90, color: 'bg-pink-500' },
        { name: 'Scrum & Kanban', level: 85, color: 'bg-neon-400' },
        { name: 'Project Management', level: 88, color: 'bg-pink-400' },
      ]
    },
  ];

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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`neon-border bg-black/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-neon-green transition-all duration-300 ${category.borderColor}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium font-mono text-sm">{skill.name}</span>
                        <span className="text-matrix-500 text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 border border-gray-700">
                        <div
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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