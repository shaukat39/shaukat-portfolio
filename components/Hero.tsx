
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-gradient">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Hi, I’m Shaukat — I build <span className="text-indigo-600">AI agents</span> & automation systems
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Specializing in AI-driven workflows, LangChain, n8n, and robust backend engineering to help startups scale with intelligence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-1 h-8 rounded-full bg-slate-200 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
