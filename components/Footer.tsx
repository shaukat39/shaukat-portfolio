
import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xl font-bold tracking-tight text-slate-900">
              Shaukat<span className="text-indigo-600">.</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-5">
            <a href="https://www.linkedin.com/in/shaukat-hayat-b96252164" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/shaukat39" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/hayat_shaukat39" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-right">
          <p className="text-xs text-slate-400">
            © {currentYear} Shaukat Hayat. Built with precision for the future of AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
