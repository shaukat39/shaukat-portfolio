
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/shaukat/800/1000" 
                alt="Shaukat Hayat" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <p className="text-sm font-medium text-slate-500 mb-1">Passionate about</p>
              <p className="text-lg font-bold text-slate-900 leading-tight">Solving problems through AI & Automation</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Building the Future of Work</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                I am an AI Engineer and Automation Developer dedicated to bridging the gap between cutting-edge technology and business efficiency. With a deep focus on LLM orchestration and workflow automation, I help companies turn manual processes into intelligent, autonomous systems.
              </p>
              <p>
                My approach combines deep technical expertise in Python and Backend Engineering with a startup-first mindset. Whether it's building a complex RAG-based chatbot or a high-performance data pipeline, I prioritize reliability, scalability, and user experience.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {['Problem Solving', 'Scalability', 'Innovation', 'Efficiency'].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
