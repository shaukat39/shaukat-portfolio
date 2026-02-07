
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Message sent! Thanks for reaching out.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Get in Touch</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Let’s build something together</h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have a project in mind or want to discuss how AI can transform your business? Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                  <Mail className="text-slate-900" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Email</p>
                  <a href="mailto:shayat10943@gmail.com" className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                    shayat10943@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/shaukat-hayat-b96252164" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-900 hover:text-white hover:-translate-y-1 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/shaukat39" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-900 hover:text-white hover:-translate-y-1 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://twitter.com/hayat_shaukat39" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-900 hover:text-white hover:-translate-y-1 transition-all"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[32px] border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-indigo-700 disabled:opacity-50 transition-all group"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
