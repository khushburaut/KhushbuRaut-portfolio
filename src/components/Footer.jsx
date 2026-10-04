import React from 'react';
import { Mail, Heart, ChevronUp } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f4f2eb] border-t border-black/[0.06] py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Back to Top Button */}
        <a
          href="#home"
          className="p-3 bg-white border border-black/[0.08] rounded-full hover:bg-ink-950 hover:text-white text-ink-600 transition-all duration-300 mb-8 shadow-sm hover:shadow-md hover:-translate-y-1"
          title="Back to Top"
        >
          <ChevronUp className="h-5 w-5" />
        </a>

        {/* Social Icons Row */}
        <div className="flex items-center gap-3 mb-7">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white border border-black/[0.07] text-ink-700 hover:text-white hover:bg-ink-950 transition-all duration-200 shadow-sm"
            title="GitHub"
          >
            <Github className="h-4.5 w-4.5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white border border-black/[0.07] text-ink-700 hover:text-white hover:bg-[#0077b5] transition-all duration-200 shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="h-4.5 w-4.5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-full bg-white border border-black/[0.07] text-ink-700 hover:text-white hover:bg-brand-crimson transition-all duration-200 shadow-sm"
            title="Email"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-full bg-white border border-black/[0.07] text-ink-700 hover:text-white hover:bg-[#ffa116] font-bold text-sm transition-all duration-200 shadow-sm"
            title="LeetCode"
          >
            LC
          </a>
        </div>

        {/* Designer Credits */}
        <p className="text-base text-black flex items-center justify-center gap-1.5 mb-2 font-medium">
          Designed & Built with <Heart className="h-4 w-4 text-brand-crimson fill-brand-crimson animate-pulse" /> by{" "}
          <span className="font-bold text-ink-950">{personalInfo.name}</span>
        </p>

        {/* Copyright */}
        <p className="text-sm text-black font-normal">
          © {currentYear} Khushbu Raut. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
