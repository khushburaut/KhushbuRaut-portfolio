import React from 'react';
import { Calendar, Building2, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-canvas relative overflow-hidden border-t border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="editorial-section-tag justify-center">
            <span>—</span> Work & Practice <span>—</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-ink-950 font-heading mb-4">
            Professional <span className="text-brand-crimson">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-brand-crimson mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline Card */}
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div 
              key={idx}
              className="editorial-card p-8 sm:p-10 rounded-3xl relative bg-white hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 group"
            >
              {/* Top Crimson Accent Bar */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-brand-crimson rounded-b-full"></div>

              {/* Flex Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-ink-950 font-heading group-hover:text-brand-crimson transition-colors duration-200">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-black mt-2 text-base">
                    <Building2 className="h-4 w-4 text-brand-crimson" />
                    <span className="font-semibold text-black">{exp.organization}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="editorial-badge text-sm">
                    <Calendar className="h-3.5 w-3.5 text-brand-crimson" />
                    {exp.duration}
                  </span>
                  <span className="editorial-badge-dark text-sm">
                    <Award className="h-3.5 w-3.5 text-brand-pink" />
                    Internship
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-black text-lg leading-relaxed mb-8 font-normal">
                {exp.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-4 mb-8 p-6 rounded-2xl bg-canvas border border-black/[0.05]">
                <h4 className="text-xs uppercase font-bold text-black tracking-[0.15em]">
                  Key Tasks & Accomplishments
                </h4>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-base text-black font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-200 text-brand-crimson flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Technologies */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-black tracking-[0.15em]">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-lg bg-white border border-black/[0.08] text-black text-sm font-bold shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
