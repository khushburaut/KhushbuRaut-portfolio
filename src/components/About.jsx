import React from 'react';
import { BarChart3, Code2, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-canvas relative overflow-hidden border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="editorial-section-tag justify-center">
            <span>—</span> About Me <span>—</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-ink-950 font-heading mb-4">
            Passion for <span className="text-brand-crimson">Code & Analytics</span>
          </h2>
          <div className="w-12 h-1 bg-brand-crimson mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Pillar Cards - Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-6">
              Core Competencies
            </h3>

            {/* Card 1: Data Analytics */}
            <div className="editorial-card p-6 flex gap-4 hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 group bg-white">
              <div className="p-3 bg-brand-50 border border-brand-100/80 rounded-xl text-brand-crimson group-hover:scale-105 transition-transform duration-200 h-fit shrink-0">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-ink-950 text-base group-hover:text-brand-crimson transition-colors duration-200">
                  Data Analytics
                </h4>
                <p className="text-sm text-black mt-1.5 leading-relaxed font-normal">
                  Extracting, cleaning, and transforming raw information into interactive dashboard insights using Power BI, SQL, and Pandas.
                </p>
              </div>
            </div>

            {/* Card 2: Web Dev */}
            <div className="editorial-card p-6 flex gap-4 hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 group bg-white">
              <div className="p-3 bg-brand-50 border border-brand-100/80 rounded-xl text-brand-crimson group-hover:scale-105 transition-transform duration-200 h-fit shrink-0">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-ink-950 text-base group-hover:text-brand-crimson transition-colors duration-200">
                  Full-Stack Development
                </h4>
                <p className="text-sm text-black mt-1.5 leading-relaxed font-normal">
                  Creating modern, highly responsive user interfaces in React, coupled with secure, structured Node.js/Express.js APIs.
                </p>
              </div>
            </div>

            {/* Card 3: AI & ML */}
            <div className="editorial-card p-6 flex gap-4 hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 group bg-white">
              <div className="p-3 bg-brand-50 border border-brand-100/80 rounded-xl text-brand-crimson group-hover:scale-105 transition-transform duration-200 h-fit shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-ink-950 text-base group-hover:text-brand-crimson transition-colors duration-200">
                  AI & ML Integration
                </h4>
                <p className="text-sm text-black mt-1.5 leading-relaxed font-normal">
                  Connecting LLM APIs, building automated chatbots, and applying machine learning algorithms using Scikit-Learn.
                </p>
              </div>
            </div>
          </div>

          {/* Bio and Overview - Right Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink-950 font-heading leading-snug">
              Bridging the gap between <span className="text-brand-crimson">Data Insights</span> and <span className="text-ink-900 underline decoration-brand-200 decoration-4 underline-offset-4">Web Solutions</span>
            </h3>

            <p className="text-black leading-relaxed text-lg sm:text-xl">
              I am currently pursuing my B.Tech in Computer Science & Engineering. With a solid foundation in core computing, I have developed a strong passion for exploring patterns in data and crafting responsive web interfaces.
            </p>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="editorial-card p-5 text-center bg-white hover:border-brand-200 transition-all duration-200">
                <div className="text-3xl font-black text-brand-crimson font-heading mb-1">8.56</div>
                <div className="text-xs uppercase tracking-wider text-black font-bold">Cumulative CGPA</div>
              </div>
              <div className="editorial-card p-5 text-center bg-white hover:border-brand-200 transition-all duration-200">
                <div className="text-3xl font-black text-ink-950 font-heading mb-1">3rd</div>
                <div className="text-xs uppercase tracking-wider text-black font-bold">Year of Engineering</div>
              </div>
              <div className="editorial-card p-5 text-center bg-white hover:border-brand-200 transition-all duration-200 col-span-2 sm:col-span-1">
                <div className="text-3xl font-black text-brand-crimson font-heading mb-1">4+</div>
                <div className="text-xs uppercase tracking-wider text-black font-bold">Code Languages</div>
              </div>
            </div>

            {/* Key Focus Pillars */}
            <div className="space-y-3 pt-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-black">
                Core Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Data Analysis", "Full Stack Web Development", "AI-Powered Chatbots", "Database Modeling", "Machine Learning Model Training"].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full bg-white border border-black/[0.08] text-sm text-black font-semibold shadow-sm hover:border-brand-300 hover:text-brand-crimson transition-all duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
