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
    liveUrl: 'https://github.com/shaukat39',
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
    liveUrl: 'https://github.com/shaukat39',
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