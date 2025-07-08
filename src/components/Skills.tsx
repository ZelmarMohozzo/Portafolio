import React from 'react';
import { BarChart3, PieChart, TrendingUp, FileSpreadsheet, Calculator, Database, Filter, Target, Zap, LineChart } from 'lucide-react';

const Skills = () => {
  const excelFeatures = [
    {
      icon: BarChart3,
      title: 'Gráficos Dinámicos',
      description: 'Creación de gráficos interactivos con datos en tiempo real',
      color: 'text-blue-400',
      bgColor: 'from-blue-500 to-blue-600'
    },
    {
      icon: PieChart,
      title: 'Tablas Dinámicas',
      description: 'Análisis profundo con pivot tables y segmentación avanzada',
      color: 'text-green-400',
      bgColor: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Análisis de Tendencias',
      description: 'Forecasting y predicciones basadas en datos históricos',
      color: 'text-purple-400',
      bgColor: 'from-purple-500 to-purple-600'
    },
    {
      icon: Filter,
      title: 'Filtros Avanzados',
      description: 'Segmentación inteligente y filtros condicionales',
      color: 'text-orange-400',
      bgColor: 'from-orange-500 to-orange-600'
    },
    {
      icon: Calculator,
      title: 'Fórmulas Complejas',
      description: 'VLOOKUP, INDEX-MATCH, fórmulas matriciales y DAX',
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Target,
      title: 'KPIs & Métricas',
      description: 'Indicadores clave de rendimiento y dashboards ejecutivos',
      color: 'text-red-400',
      bgColor: 'from-red-500 to-red-600'
    }
  ];

  const excelTools = [
    { name: 'Power Query', icon: Database, color: 'hover:text-blue-400' },
    { name: 'Power Pivot', icon: BarChart3, color: 'hover:text-green-400' },
    { name: 'VBA Macros', icon: Zap, color: 'hover:text-yellow-400' },
    { name: 'Conditional Formatting', icon: Target, color: 'hover:text-red-400' },
    { name: 'Data Validation', icon: Filter, color: 'hover:text-purple-400' },
    { name: 'Solver & Analysis', icon: Calculator, color: 'hover:text-orange-400' },
    { name: 'Charts & Graphs', icon: LineChart, color: 'hover:text-cyan-400' },
    { name: 'Dashboard Design', icon: PieChart, color: 'hover:text-matrix-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="code-block inline-block mb-6">
              <span className="text-gray-500 font-mono">const</span>{' '}
              <span className="text-matrix-500 font-mono">excelAnalytics</span>{' '}
              <span className="text-white font-mono">=</span>{' '}
              <span className="text-yellow-400 font-mono">{`{`}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Panel de Análisis <span className="text-matrix-500 neon-glow">Excel</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              <span className="text-gray-500">//</span> Especialista en creación de dashboards avanzados y análisis de datos con Microsoft Excel
            </p>
            <div className="code-block inline-block mt-6">
              <span className="text-yellow-400 font-mono">{`}`}</span>
            </div>
          </div>

          {/* Excel Logo and Main Description */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl mb-8 shadow-2xl">
              <FileSpreadsheet className="w-16 h-16 text-white" />
            </div>
            <div className="neon-border bg-black/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">Microsoft Excel Expert</h3>
              <p className="text-gray-300 leading-relaxed font-mono">
                Desarrollo de <span className="text-matrix-500 font-semibold">paneles de análisis avanzados</span> con Excel, 
                combinando <span className="text-cyber-500 font-semibold">Power Query</span>, 
                <span className="text-neon-500 font-semibold"> Power Pivot</span> y 
                <span className="text-yellow-400 font-semibold"> VBA</span> para crear soluciones de 
                business intelligence robustas y automatizadas.
              </p>
            </div>
          </div>

          {/* Excel Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {excelFeatures.map((feature, index) => (
              <div
                key={index}
                className="neon-border bg-black/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-neon-green transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.bgColor} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-mono">{feature.title}</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Excel Tools Section */}
          <div className="code-block">
            <div className="mb-6">
              <div className="font-mono text-matrix-500">
                <span className="text-gray-500">const</span> <span className="text-white">excelTools</span> <span className="text-gray-500">=</span> <span className="text-yellow-400">{`{`}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
              <FileSpreadsheet className="w-6 h-6 inline mr-2 text-matrix-500" />
              Herramientas & Funcionalidades Excel
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {excelTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-matrix-500/50 transition-all duration-200 hover:scale-105 group"
                >
                  <tool.icon className={`w-8 h-8 text-gray-400 mb-2 group-hover:scale-110 transition-all duration-300 ${tool.color}`} />
                  <span className="text-gray-300 text-sm font-medium text-center font-mono">{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Sample Dashboard Preview */}
            <div className="mt-12 neon-border bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-6 text-center font-mono">
                <BarChart3 className="w-6 h-6 inline mr-2 text-matrix-500" />
                Ejemplo de Dashboard Excel
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-black/30 p-4 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white font-mono">+25%</div>
                  <div className="text-sm text-gray-400 font-mono">Crecimiento Mensual</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white font-mono">94.2%</div>
                  <div className="text-sm text-gray-400 font-mono">Eficiencia KPI</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <PieChart className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white font-mono">1.2M</div>
                  <div className="text-sm text-gray-400 font-mono">Registros Procesados</div>
                </div>
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