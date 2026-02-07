// Fix: Added missing React import to resolve the 'React' namespace for React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string;
}