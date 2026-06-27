import React from 'react';
import { Check, Zap, Star } from 'lucide-react';

const PRODUCTS = [
  {
    app: 'UstaadAI',
    tagline: 'Cambridge O-Level & IGCSE Exam Preparation',
    description:
      'AI-powered tutoring platform for Pakistani students preparing for Cambridge O-Level and IGCSE exams. Five intelligent agents provide personalized coaching, mock exams, and adaptive difficulty learning.',
    plans: [
      {
        name: 'Basic',
        price: 'PKR 3,000',
        period: '/month',
        highlight: false,
        features: [
          'Access to AI Tutor Agent',
          'Up to 10 mock exam papers/month',
          'Subject coverage: up to 3 subjects',
          'PDF download of results',
          'Email support',
        ],
      },
      {
        name: 'Pro',
        price: 'PKR 5,000',
        period: '/month',
        highlight: true,
        features: [
          'All Basic features included',
          'Unlimited mock exam papers',
          'All Cambridge O-Level subjects',
          'Adaptive difficulty & syllabus mapping',
          'Detailed performance analytics',
          'Priority support',
        ],
      },
    ],
  },
  {
    app: 'FinCA Agent',
    tagline: 'AI Platform for Chartered Accountants',
    description:
      'Multi-agent AI SaaS for CA firms and FinTech companies. Automates financial report generation, client workspace management, and integrates with QuickBooks Online.',
    plans: [
      {
        name: 'Starter',
        price: 'Contact Us',
        period: '',
        highlight: false,
        features: [
          'Up to 5 client workspaces',
          'AI report generation',
          'QuickBooks Online integration',
          'JWT-secured access',
          'Email support',
        ],
      },
      {
        name: 'Agency',
        price: 'Contact Us',
        period: '',
        highlight: true,
        features: [
          'Unlimited client workspaces',
          'Multi-agent QA gating',
          'Lemon Squeezy billing integration',
          'Advanced analytics dashboard',
          'Priority support',
        ],
      },
    ],
  },
  {
    app: 'ARCHAI',
    tagline: 'Multi-Agent Architectural Design System',
    description:
      'AI platform orchestrating 9 specialized agents to generate professional architectural design packages including DOCX/PPTX deliverables with QA auto-correction.',
    plans: [
      {
        name: 'Professional',
        price: '$49',
        period: '/month',
        highlight: false,
        features: [
          '10 design packages/month',
          'Single-variant pipeline',
          'DOCX deliverables',
          'Email support',
        ],
      },
      {
        name: 'Studio',
        price: '$149',
        period: '/month',
        highlight: true,
        features: [
          'Unlimited design packages',
          'Multi-variant parallel pipelines',
          'DOCX + PPTX deliverables',
          'QA auto-correction agent',
          'Priority support',
        ],
      },
    ],
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Products & Services</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">AI SaaS Applications</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Production-ready AI platforms built for real users. Each product is independently deployed, billed, and supported.
          </p>
        </div>

        <div className="space-y-20">
          {PRODUCTS.map((product) => (
            <div key={product.app}>
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-slate-900">{product.app}</h4>
                <p className="text-indigo-600 font-semibold mb-2">{product.tagline}</p>
                <p className="text-slate-600 max-w-2xl">{product.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                {product.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-2xl p-8 border-2 relative ${
                      plan.highlight
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200'
                        : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <Star size={10} fill="currentColor" /> Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-indigo-200' : 'text-slate-500'}`}>
                        {plan.name}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        {plan.period && (
                          <span className={`text-sm ${plan.highlight ? 'text-indigo-200' : 'text-slate-500'}`}>{plan.period}</span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            plan.highlight ? 'bg-white/20' : 'bg-indigo-50'
                          }`}>
                            <Check size={12} className={plan.highlight ? 'text-white' : 'text-indigo-600'} />
                          </div>
                          <span className={`text-sm ${plan.highlight ? 'text-indigo-100' : 'text-slate-600'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                        plan.highlight
                          ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      <Zap size={14} />
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
