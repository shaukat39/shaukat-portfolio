
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Portfolio</h2>
            <h3 className="text-4xl font-bold text-slate-900">Featured Projects</h3>
          </div>
          <p className="max-w-md text-slate-600">
            A selection of my recent work in AI engineering, automation, and backend infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    <span>Codebase</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
