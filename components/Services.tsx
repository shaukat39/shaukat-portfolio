
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">Services</h2>
          <h3 className="text-4xl font-bold mb-6">How I can help your startup scale</h3>
          <p className="text-slate-400 text-lg">
            I specialize in high-impact technical solutions that combine AI logic with robust backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.title} 
              className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-slate-700/50 rounded-2xl inline-block">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
