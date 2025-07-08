import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Code, Terminal } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-matrix-500/30' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="p-2 bg-gradient-to-r from-black to-gray-900 rounded-lg border border-matrix-500/50 shadow-neon-green">
                <Terminal className="w-6 h-6 text-matrix-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-matrix-500 rounded-full animate-pulse"></div>
            </div>
            <div className="font-mono">
              <span className="text-matrix-500 text-sm">~/</span>
              <span className="text-white font-bold text-lg terminal-cursor">zelmar_mohozzo</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-matrix-500 transition-all duration-200 relative group font-mono text-sm glitch"
              >
                <span className="group-hover:neon-glow">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-matrix-500 transition-all duration-200 group-hover:w-full shadow-neon-green"></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 border border-matrix-500/50 rounded-lg hover:bg-matrix-500/10 transition-all duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-matrix-500/30 bg-black/90 backdrop-blur-md rounded-lg">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-gray-300 hover:text-matrix-500 transition-colors duration-200 font-mono"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-matrix-500 mr-2">&gt;</span>{item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;