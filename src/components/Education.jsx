import React from 'react';

import { Award, Calendar, BookOpen, MapPin } from 'lucide-react';

import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="py-24 bg-canvas relative overflow-hidden border-t border-black/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="editorial-section-tag justify-center">
            <span>—</span> Academics & Degrees <span>—</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-ink-950 font-heading mb-4">
            Academic <span className="text-brand-crimson">Education</span>
          </h2>

          <div className="w-12 h-1 bg-brand-crimson mx-auto rounded-full"></div>
        </div>

        {/* Side-by-Side Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="editorial-card h-full p-8 sm:p-9 rounded-3xl relative bg-white border-l-4 border-l-brand-crimson hover:border-l-ink-950 transition-all duration-300 flex flex-col justify-between"
            >
              <div>

                {/* Degree + Duration */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-ink-950 font-heading leading-tight group-hover:text-brand-crimson transition-colors duration-200">
                      {edu.degree}
                    </h3>

                    <p className="text-brand-crimson font-bold text-sm uppercase tracking-wider mt-2">
                      {edu.status}
                    </p>
                  </div>

                  <span className="shrink-0 w-fit editorial-badge text-sm">
                    <Calendar className="h-3.5 w-3.5 text-brand-crimson" />
                    {edu.duration}
                  </span>
                </div>

                {/* Affiliated University */}
                <div className="space-y-1.5 mb-7 text-black">
                  <h4 className="text-xs uppercase font-bold text-black tracking-[0.15em]">
                    Affiliated University
                  </h4>

                  <p className="font-bold text-black leading-snug text-base">
                    {edu.university || 'Dr. Babasaheb Ambedkar Technological University'}
                  </p>

                  {edu.university && (
                    <p className="text-sm text-black leading-relaxed">
                      Dr. Babasaheb Ambedkar Technological University
                    </p>
                  )}

                  <p className="text-sm text-black flex items-start gap-1">
                    <MapPin className="h-3.5 w-3.5 text-brand-crimson mt-0.5 shrink-0" />
                    <span>Nagpur, Maharashtra, India</span>
                  </p>
                </div>

              </div>

              {/* Score Badge */}
              {edu.cgpa && (
                <div className="flex items-center gap-3 py-3 px-4.5 bg-canvas rounded-2xl border border-black/[0.05] w-fit mt-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-brand-crimson" />

                    <span className="text-sm font-bold text-black uppercase tracking-wider">
                      Score:
                    </span>
                  </div>

                  <span className="text-base font-extrabold text-ink-950 font-heading">
                    {edu.cgpa}
                  </span>
                </div>
              )}

              {/* Highlights / Coursework */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-black/[0.05] mt-6">
                  <h4 className="text-xs uppercase font-bold text-black tracking-[0.15em] flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-brand-crimson" />
                    Key Highlights & Coursework
                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-sm text-black flex items-start gap-2"
                      >
                        <span className="text-brand-crimson text-base leading-none">
                          •
                        </span>

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}