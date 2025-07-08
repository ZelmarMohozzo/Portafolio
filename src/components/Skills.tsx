import React from 'react';
import { BarChart3, PieChart, TrendingUp, Database, Code, Globe, Zap, Terminal } from 'lucide-react';

const Skills = () => {
  const tools = [
    { name: 'Chart.js', icon: BarChart3, color: 'hover:text-blue-400' },
    { name: 'D3.js', icon: PieChart, color: 'hover:text-green-400' },
    { name: 'Plotly', icon: TrendingUp, color: 'hover:text-purple-400' },
    { name: 'Power BI', icon: BarChart3, color: 'hover:text-yellow-400' },
    { name: 'Tableau', icon: PieChart, color: 'hover:text-orange-400' },
    { name: 'Python', icon: Code, color: 'hover:text-matrix-500' },
    { name: 'R Studio', icon: TrendingUp, color: 'hover:text-cyan-400' },
    { name: 'Excel', icon: Database, color: 'hover:text-green-500' },
    { name: 'Google Analytics', icon: Globe, color: 'hover:text-red-400' },
    { name: 'Pandas', icon: Database, color: 'hover:text-blue-500' },
    { name: 'Matplotlib', icon: BarChart3, color: 'hover:text-pink-400' },
    { name: 'Seaborn', icon: PieChart, color: 'hover:text-indigo-400' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="code-block inline-block mb-6">
              <span className="text-gray-500 font-mono">const</span>{' '}
              <span className="text-matrix-500 font-mono">dataAnalytics</span>{' '}
              <span className="text-white font-mono">=</span>{' '}
              <span className="text-yellow-400 font-mono">[</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Análisis de <span className="text-matrix-500 neon-glow">Datos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              <span className="text-gray-500">//</span> Especialista en creación de paneles de análisis con gráficas interactivas y visualizaciones de datos
            </p>
            <div className="code-block inline-block mt-6">
              <span className="text-yellow-400 font-mono">]</span>
            </div>
          </div>

          <div className="code-block">
            <div className="mb-6">
              <div className="font-mono text-matrix-500">
                <span className="text-gray-500">const</span> <span className="text-white">chartingTools</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">{`{`}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
              <BarChart3 className="w-6 h-6 inline mr-2 text-matrix-500" />
              Herramientas de Visualización & Analytics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
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

            {/* Data Analytics Specialties */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="neon-border bg-black/30 p-6 rounded-lg hover:shadow-neon-green transition-all duration-300">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-400 mr-3" />
                  <h4 className="text-lg font-bold text-white font-mono">Dashboards Interactivos</h4>
                </div>
                <p className="text-gray-300 text-sm font-mono">
                  Creación de paneles dinámicos con gráficas en tiempo real, filtros avanzados y métricas KPI personalizadas.
                </p>
              </div>

              <div className="neon-border bg-black/30 p-6 rounded-lg hover:shadow-neon-blue transition-all duration-300">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                  <h4 className="text-lg font-bold text-white font-mono">Análisis Predictivo</h4>
                </div>
                <p className="text-gray-300 text-sm font-mono">
                  Modelos de machine learning para predicciones, análisis de tendencias y forecasting de datos.
                </p>
              </div>

              <div className="neon-border bg-black/30 p-6 rounded-lg hover:shadow-neon-purple transition-all duration-300">
                <div className="flex items-center mb-4">
                  <PieChart className="w-8 h-8 text-purple-400 mr-3" />
                  <h4 className="text-lg font-bold text-white font-mono">Visualización Avanzada</h4>
                </div>
                <p className="text-gray-300 text-sm font-mono">
                  Gráficas complejas, mapas de calor, diagramas de flujo y visualizaciones 3D para insights profundos.
                </p>
              </div>
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

export default Skills;