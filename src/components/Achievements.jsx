import React from "react";
import { Award, Code2, Flame, ExternalLink, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 bg-canvas relative overflow-hidden border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="editorial-section-tag justify-center">
            <span>—</span> Milestones & Credentials <span>—</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-ink-950 font-heading mb-4">
            Learning & <span className="text-brand-crimson">Achievements</span>
          </h2>
          <p className="text-black max-w-xl mx-auto text-base sm:text-lg font-normal">
            Highlights of my extracurricular training, coding practice profiles, certifications, and conceptual topics.
          </p>
          <div className="w-12 h-1 bg-brand-crimson mx-auto rounded-full mt-4"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* =====================================================
              LEFT SIDE - CODING PROFILE
          ====================================================== */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-ink-950 font-heading flex items-center gap-2">
              <Code2 className="h-5 w-5 text-[#ffa116]" />
              Coding Profiles
            </h3>

            {/* LeetCode Card */}
            <div className="editorial-card p-7 sm:p-8 rounded-3xl bg-white border border-black/[0.07] hover:border-[#ffa116]/40 hover:shadow-editorial-hover transition-all duration-300 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-ink-950 font-heading group-hover:text-[#ffa116] transition-colors duration-200">
                    LeetCode
                  </h4>
                  <p className="text-sm font-semibold text-black mt-0.5">
                    @Khushburaut
                  </p>
                </div>

                <span className="p-2.5 bg-[#ffa116]/10 border border-[#ffa116]/20 rounded-xl text-[#ffa116]">
                  <Flame className="h-5 w-5 animate-pulse" />
                </span>
              </div>

              {/* Solved Stats */}
              <div className="grid grid-cols-2 gap-3.5 mb-6">
                <div className="p-4 bg-canvas border border-black/[0.05] rounded-2xl">
                  <div className="text-black text-xs font-bold uppercase tracking-wider mb-1">
                    Solved
                  </div>
                  <div className="text-lg sm:text-xl font-black text-ink-950 font-heading">
                    {achievements.coding.stats.solved}
                  </div>
                </div>

                <div className="p-4 bg-canvas border border-black/[0.05] rounded-2xl">
                  <div className="text-black text-xs font-bold uppercase tracking-wider mb-1">
                    Skill Rating
                  </div>
                  <div className="text-lg sm:text-xl font-black text-ink-950 font-heading">
                    {achievements.coding.stats.rating}
                  </div>
                </div>
              </div>

              {/* Practice Areas */}
              <div className="space-y-3 mb-7">
                <h5 className="text-xs uppercase font-bold text-black tracking-[0.15em]">
                  Practice Focus Areas
                </h5>
                <div className="flex flex-wrap gap-2">
                  {achievements.coding.stats.interests.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-canvas border border-black/[0.05] text-sm font-semibold text-black"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* LeetCode Link Button */}
              <a
                href={achievements.coding.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#ffa116] hover:bg-[#e8900a] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                View Coding Profile
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE - CERTIFICATIONS
          ====================================================== */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-ink-950 font-heading flex items-center gap-2">
              <Award className="h-5 w-5 text-brand-crimson" />
              Certifications & Highlights
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* ================= INFOSYS ================= */}
              <div className="editorial-card p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.07] hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <span className="editorial-badge text-xs mb-3 inline-flex">
                    Certification
                  </span>
                  <h4 className="text-base font-bold text-ink-950 font-heading mb-2 leading-snug group-hover:text-brand-crimson transition-colors duration-200">
                    Infosys Certification
                  </h4>
                  <p className="text-sm text-black leading-relaxed mb-5 font-normal">
                    Infosys certification demonstrating successful completion of professional learning and training.
                  </p>
                </div>
                <a
                  href="/Infosys-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-wider text-brand-crimson hover:text-brand-800 flex items-center gap-1.5 mt-2 w-fit group/btn"
                >
                  View Certificate
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              {/* ================= NPTEL ================= */}
              <div className="editorial-card p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.07] hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <span className="editorial-badge text-xs mb-3 inline-flex">
                    Certification
                  </span>
                  <h4 className="text-base font-bold text-ink-950 font-heading mb-2 leading-snug group-hover:text-brand-crimson transition-colors duration-200">
                    NPTEL Soft Skills Certificate
                  </h4>
                  <p className="text-sm text-black leading-relaxed mb-5 font-normal">
                    NPTEL certification for successful completion of the Soft Skills course.
                  </p>
                </div>
                <a
                  href="/NPTEL-Soft-Skills-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-wider text-brand-crimson hover:text-brand-800 flex items-center gap-1.5 mt-2 w-fit group/btn"
                >
                  View Certificate
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              {/* ================= EDUSKILL ================= */}
              <div className="editorial-card p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.07] hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <span className="editorial-badge text-xs mb-3 inline-flex">
                    Certification
                  </span>
                  <h4 className="text-base font-bold text-ink-950 font-heading mb-2 leading-snug group-hover:text-brand-crimson transition-colors duration-200">
                    EduSkills Certificate
                  </h4>
                  <p className="text-sm text-black leading-relaxed mb-5 font-normal">
                    EduSkills certification demonstrating successful completion of the training program.
                  </p>
                </div>
                <a
                  href="/Eduskill-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-wider text-brand-crimson hover:text-brand-800 flex items-center gap-1.5 mt-2 w-fit group/btn"
                >
                  View Certificate
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              {/* ================= L&T ================= */}
              <div className="editorial-card p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.07] hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <span className="editorial-badge text-xs mb-3 inline-flex">
                    Certification
                  </span>
                  <h4 className="text-base font-bold text-ink-950 font-heading mb-2 leading-snug group-hover:text-brand-crimson transition-colors duration-200">
                    L&T Certificate
                  </h4>
                  <p className="text-sm text-black leading-relaxed mb-5 font-normal">
                    L&T certification demonstrating successful completion of the training program.
                  </p>
                </div>
                <a
                  href="/Building-Gen-AI-Systems.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-wider text-brand-crimson hover:text-brand-800 flex items-center gap-1.5 mt-2 w-fit group/btn"
                >
                  View Certificate
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}