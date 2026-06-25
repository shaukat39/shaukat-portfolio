import { Brain, Zap, Server, Cloud, Database, Bot, Workflow, Layers, Globe, BarChart3 } from 'lucide-react';
import { Project, Skill, Service, Stat } from './types';
export const PROJECTS: Project[] = [
  // ── NEW: FinCA Agent ──────────────────────────────────────
  {
    id: '5',
    title: 'FinCA Agent — AI SaaS for Chartered Accountants',
    description:
      'Multi-agent AI platform for CA firms and FinTech companies. Automates financial report generation, QA gating, and multi-client workspace management. Integrates QuickBooks Online OAuth, Lemon Squeezy billing, and JWT-secured multi-tenancy.',
    image: '/screenshots/finca-dashboard.png',
    tags: ['Node.js', 'React', 'PostgreSQL', 'Claude AI', 'QuickBooks', 'Multi-Agent'],
    liveUrl: 'https://finca.hayatcloud.com/',
    githubUrl: 'https://github.com/shaukat39',
  },

  // ── NEW: ARCHAI 3D ────────────────────────────────────────
  {
    id: '6',
    title: 'ARCHAI — Multi-Agent Architectural Design System',
    description:
      'Commercial AI platform orchestrating 9 specialized agents to generate professional architectural design packages. Produces unified DOCX/PPTX deliverables with QA auto-correction, parametric site inputs, multi-variant pipelines, and Lemon Squeezy billing.',
    image: '/screenshots/archai-pipeline.png',
    tags: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'Prisma', 'Multi-Agent'],
    liveUrl: 'https://archai.hayatcloud.com/',
    githubUrl: 'https://github.com/shaukat39',
  },

  {
  id: '7',                          // increment the id
  title: 'WorldCup AI: Football Intelligence Platform',
  description: 'WorldCup AI is an intelligent football platform that combines AI-powered match analysis, real-time predictions, and community engagement. It helps football fans understand match dynamics, share insights, and grow their influence through a unique creator economy—all powered by advanced artificial intelligence.',
  image: '/screenshots/football-ai.png',             // screenshot URL or picsum placeholder
  tags: ['FastAPI', 'Flutter', 'PostgreSQL','Redis','AI/ML','Analytics'], // 3–6 tags
  liveUrl: 'https://football-worldcup.netlify.app/', // or your GitHub if no live demo
  githubUrl: 'https://github.com/shaukat39',
  },

  // ── EXISTING PROJECTS ─────────────────────────────────────
  {
    id: '1',
    title: 'Autonomous Research Agent',
    description:
      'An AI-powered agent that researches topics, synthesizes information, and generates deep-dive reports using GPT-4 and LangChain.',
    image: 'https://picsum.photos/seed/ai-agent/800/500',
    tags: ['Python', 'LangChain', 'OpenAI', 'Pinecone'],
    liveUrl: 'https://github.com/shaukat39',
    githubUrl: 'https://github.com/shaukat39',
  },
  {
    id: '2',
    title: 'Smart E-commerce Automation',
    description:
      'End-to-end automation system handling inventory, order processing, and customer support via n8n and custom webhooks.',
    image: 'https://picsum.photos/seed/automation/800/500',
    tags: ['n8n', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://github.com/shaukat39',
    githubUrl: 'https://github.com/shaukat39',
  },
  {
    id: '3',
    title: 'SaaS Backend Orchestrator',
    description:
      'High-performance microservices architecture for a multi-tenant SaaS platform built with FastAPI and Docker.',
    image: 'https://picsum.photos/seed/backend/800/500',
    tags: ['FastAPI', 'Docker', 'Redis', 'AWS'],
    liveUrl: 'https://github.com/shaukat39',
    githubUrl: 'https://github.com/shaukat39',
  },
  {
    id: '4',
    title: 'Data Pipeline Sentinel',
    description:
      'Real-time ETL pipeline processing millions of events per hour with integrated anomaly detection using BigQuery.',
    image: 'https://picsum.photos/seed/data/800/500',
    tags: ['Python', 'BigQuery', 'GCP', 'Kafka'],
    liveUrl: 'https://github.com/shaukat39',
    githubUrl: 'https://github.com/shaukat39',
  },
];

import React from 'react';

export const SKILLS: Skill[] = [
  {
    category: 'AI & LLMs',
    items: ['LangChain', 'OpenAI SDK', 'LlamaIndex', 'AutoGPT'],
    icon: <Brain className="w-6 h-6 text-indigo-600" />
  },
  {
    category: 'Automation',
    items: ['n8n', 'Zapier', 'Make (Integromat)', 'Webhooks'],
    icon: <Zap className="w-6 h-6 text-indigo-600" />
  },
  {
    category: 'Backend',
    items: ['Python', 'FastAPI', 'Node.js', 'Express'],
    icon: <Server className="w-6 h-6 text-indigo-600" />
  },
  {
    category: 'Cloud & DevOps',
    items: ['Docker', 'AWS Lambda', 'GCP Functions', 'Terraform'],
    icon: <Cloud className="w-6 h-6 text-indigo-600" />
  },
  {
    category: 'Databases',
    items: ['Postgres', 'MongoDB', 'Redis', 'Pinecone'],
    icon: <Database className="w-6 h-6 text-indigo-600" />
  }
];

export const SERVICES: Service[] = [
  {
    title: 'AI Chatbots & Agents',
    description: 'Custom AI solutions using RAG (Retrieval-Augmented Generation) and multi-agent systems for complex tasks.',
    icon: <Bot className="w-8 h-8 text-indigo-600" />
  },
  {
    title: 'Workflow Automation',
    description: 'Connecting your favorite apps to create seamless, hands-free business processes.',
    icon: <Workflow className="w-8 h-8 text-indigo-600" />
  },
  {
    title: 'SaaS Architecture',
    description: 'Scalable, secure, and production-ready backend systems built for modern startups.',
    icon: <Layers className="w-8 h-8 text-indigo-600" />
  },
  {
    title: 'Cloud Deployments',
    description: 'Automated CI/CD pipelines and infrastructure as code for reliable production environments.',
    icon: <Globe className="w-8 h-8 text-indigo-600" />
  },
  {
    title: 'Data Pipelines',
    description: 'Structured ETL/ELT processes to move and transform data for business intelligence.',
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />
  }
];

export const STATS: Stat[] = [
  { label: 'Automations Built', value: '25+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Hours Saved/Month', value: '200+' },
  { label: 'Client Satisfaction', value: '100%' }
];