import React, { useState } from 'react';

import { ExternalLink, ShieldAlert, Sparkles, Database, Code } from 'lucide-react';

import { Github } from './BrandIcons';

import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const { projects } = portfolioData;

  const categories = ['All', 'Web Development', 'Data Analytics', 'AI / Intelligent'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'AI / Intelligent') return project.isAI;
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-24 bg-canvas relative overflow-hidden border-t border-black/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="editorial-section-tag justify-center">
            <span>—</span> Portfolio & Works <span>—</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-ink-950 font-heading mb-4">
            Featured <span className="text-brand-crimson">Projects</span>
          </h2>

          <p className="text-black max-w-xl mx-auto text-base sm:text-lg font-normal">
            A curated selection of my work across software development, AI models, and database analysis.
          </p>

          <div className="w-12 h-1 bg-brand-crimson mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-ink-950 text-white shadow-md shadow-black/10 scale-105'
                  : 'bg-white text-black hover:text-ink-950 hover:bg-ink-50 border border-black/[0.08] shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="editorial-card rounded-3xl overflow-hidden flex flex-col group bg-white border border-black/[0.07] hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 hover:-translate-y-1.5"
            >

              {/* Project Image Panel */}
              <div className="relative h-60 overflow-hidden bg-ink-100 border-b border-black/[0.06]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Category Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-ink-900 border border-black/[0.08] shadow-sm flex items-center gap-1.5">
                    {project.category === 'Web Development' ? (
                      <Code className="h-3.5 w-3.5 text-brand-crimson" />
                    ) : (
                      <Database className="h-3.5 w-3.5 text-brand-crimson" />
                    )}

                    {project.category}
                  </span>

                  {project.isAI && (
                    <span className="editorial-badge shadow-sm">
                      <Sparkles className="h-3 w-3 text-brand-crimson" />
                      AI Powered
                    </span>
                  )}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-950 font-heading mb-3 group-hover:text-brand-crimson transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-base text-black mb-6 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-sm font-semibold bg-canvas text-black border border-black/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-5 border-t border-black/[0.06]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-white hover:bg-ink-50 text-black hover:text-ink-950 border border-black/[0.1] font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Github className="h-4 w-4" />
                      Codebase
                    </a>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-ink-950 hover:bg-brand-crimson text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-editorial-glow"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex-1 py-2.5 px-4 rounded-xl bg-canvas text-black border border-black/[0.05] font-semibold text-sm flex items-center justify-center gap-2 cursor-not-allowed">
                      <ShieldAlert className="h-4 w-4" />
                      Internal Project
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}