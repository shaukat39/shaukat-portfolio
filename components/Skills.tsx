
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900">Technical Arsenal</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill) => (
            <div 
              key={skill.category} 
              className="bg-white p-8 rounded-2xl border border-slate-100 skill-card transition-all duration-300"
            >
              <div className="mb-6 bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
