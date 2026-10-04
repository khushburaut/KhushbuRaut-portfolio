import React, { useState, useEffect, useRef } from 'react';
import { Mail, Download, LineChart, Code2, Terminal, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';
import characterImg from '../assets/character.jpg';

const WORDS = ["Data Analyst", "Web Developer", "AI Enthusiast", "Problem Solver"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  // Typewriter effect logic
  useEffect(() => {
    if (subIndex === WORDS[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % WORDS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setText(WORDS[index].substring(0, subIndex));
  }, [subIndex, index]);

  // Cursor Reveal Tracking for Hero Character
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(250);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50, px: 200, py: 250 });

  useEffect(() => {
    // Detect touch device
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    
    mouseX.set(x);
    mouseY.set(y);
    setCursorPos({ x: percentX, y: percentY, px: x, py: y });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-canvas">
      {/* Giant Editorial Watermark in Background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center opacity-40">
        <span className="text-[14vw] font-black uppercase tracking-tighter text-black/[0.03] leading-none whitespace-nowrap font-heading">
          CREATIVE DEVELOPER
        </span>
      </div>

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dots-pattern bg-repeat opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* =====================================================
              LEFT COLUMN: EDITORIAL HERO CONTENT
          ====================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Category / Prefix tag line */}
            <div className="flex items-center gap-3">
              <span className="text-brand-crimson font-bold text-sm uppercase tracking-[0.2em]">
                — {portfolioData.personalInfo.headline}
              </span>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-brand-300 transition-all duration-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-black">
                Available for Internships & Projects
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-lg sm:text-xl font-semibold text-black tracking-tight">
                Hi, I am
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-ink-950 font-heading leading-[1.05]">
                {portfolioData.personalInfo.name}
              </h1>
            </div>

            {/* Typewriter Dynamic Title */}
            <div className="text-xl sm:text-3xl font-bold text-black flex items-center min-h-[2.5rem] tracking-tight">
              <span className="text-black font-medium mr-2.5">I'm an aspiring</span>
              <span className="text-brand-crimson font-extrabold relative inline-block">
                {text}
                <span className="inline-block w-[3px] h-6 sm:h-8 bg-brand-crimson ml-1 animate-pulse align-middle rounded-full"></span>
              </span>
            </div>

            {/* Bio Paragraph */}
            <p className="max-w-xl text-lg sm:text-xl text-black leading-relaxed font-normal">
              {portfolioData.personalInfo.bio}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary Resume Button */}
              <a
                href="/Khushbu_Raut_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-ink-950 hover:bg-brand-crimson text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-md hover:shadow-editorial-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Resume</span>
                <span className="p-1 rounded-full bg-white/20 group-hover:bg-white group-hover:text-brand-crimson transition-colors duration-200">
                  <Download className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform duration-200" />
                </span>
              </a>

              {/* Secondary Contact Link */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-ink-50 text-black font-bold text-sm uppercase tracking-wider rounded-full border border-black/[0.1] shadow-sm hover:border-ink-900 transition-all duration-200"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-ink-400 group-hover:text-ink-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            </div>

            {/* Social Profile Dock */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-sm font-bold uppercase tracking-wider text-black mr-2">
                Connect:
              </span>
              <div className="flex items-center gap-2 p-1.5 rounded-full bg-white border border-black/[0.07] shadow-sm">
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-ink-600 hover:text-white hover:bg-ink-950 transition-all duration-200"
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-ink-600 hover:text-white hover:bg-[#0077b5] transition-all duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="p-2 rounded-full text-ink-600 hover:text-white hover:bg-brand-crimson transition-all duration-200"
                  title="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href={portfolioData.personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-full text-ink-600 hover:text-white hover:bg-[#ffa116] text-sm font-bold transition-all duration-200"
                  title="LeetCode"
                >
                  LC
                </a>
              </div>
            </div>

          </div>

          {/* =====================================================
              RIGHT COLUMN: EDITORIAL CHARACTER WITH CURSOR REVEAL
          ====================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              
              {/* Decorative Subtle Editorial Backdrop Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-100/60 via-brand-50/40 to-transparent rounded-[2.5rem] -rotate-2 scale-95 pointer-events-none"></div>
              
              {/* Interactive Cursor Reveal Card */}
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-white border border-black/[0.08] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] cursor-crosshair group select-none"
              >
                {/* 1. Monochromatic / Styled Base Layer */}
                <div className="absolute inset-0 bg-[#f4f1ea] flex items-center justify-center overflow-hidden">
                  <img
                    src={characterImg}
                    alt={portfolioData.personalInfo.name}
                    className="w-full h-full object-cover object-center filter grayscale contrast-110 opacity-85 scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle warm wash */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Faint hint text on base layer */}
                  {!isTouchDevice && (
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                      <Sparkles className="h-3 w-3 text-brand-pink" />
                      Move cursor to reveal
                    </div>
                  )}
                </div>

                {/* 2. Vibrant Full-Color Reveal Layer (Masked by Cursor or static on touch) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-300"
                  style={
                    isTouchDevice
                      ? { opacity: 1 }
                      : {
                          clipPath: isHovered
                            ? `circle(120px at ${cursorPos.x}% ${cursorPos.y}%)`
                            : `circle(80px at 50% 40%)`,
                          transition: isHovered ? 'clip-path 0.05s ease-out' : 'clip-path 0.5s ease-out',
                        }
                  }
                >
                  <img
                    src={characterImg}
                    alt={portfolioData.personalInfo.name}
                    className="w-full h-full object-cover object-center scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-crimson/10 via-transparent to-transparent"></div>
                </div>

                {/* 3. Dynamic Cursor Spotlight Ring / Lens (Desktop only) */}
                {!isTouchDevice && isHovered && (
                  <motion.div
                    className="absolute pointer-events-none rounded-full border-2 border-brand-crimson/70 shadow-[0_0_25px_rgba(255,36,83,0.35)] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: smoothX,
                      top: smoothY,
                      width: 240,
                      height: 240,
                    }}
                  />
                )}

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-ink-950 font-heading">
                      {portfolioData.personalInfo.name}
                    </p>
                    <p className="text-xs font-semibold text-brand-crimson">
                      {portfolioData.personalInfo.subheadline}
                    </p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-brand-crimson animate-ping"></span>
                </div>
              </div>

              {/* Floating Decorative Hand-drawn Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-white border border-black/[0.08] shadow-editorial flex items-center gap-3 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-crimson">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs uppercase font-bold text-black tracking-wider">Focus</p>
                  <p className="text-sm font-extrabold text-black">Web & Data Solutions</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =====================================================
            BOTTOM ROW: 3 COMBINED CAPABILITY CARDS
        ====================================================== */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full">
          {/* Card 1: Data Analytics */}
          <div className="editorial-card p-5 flex items-center gap-4 hover:border-brand-400/40 transition-all duration-300 group bg-white">
            <div className="p-3 rounded-xl bg-brand-50 border border-brand-100 text-brand-crimson group-hover:scale-105 transition-transform duration-200 shrink-0">
              <LineChart className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-ink-950 text-base group-hover:text-brand-crimson transition-colors duration-200">
                Data Analytics
              </h4>
              <p className="text-sm text-black font-medium">Power BI, SQL, Pandas</p>
            </div>
          </div>

          {/* Card 2: Web Dev */}
          <div className="editorial-card p-5 flex items-center gap-4 hover:border-brand-400/40 transition-all duration-300 group bg-white">
            <div className="p-3 rounded-xl bg-brand-50 border border-brand-100 text-brand-crimson group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-ink-950 text-base group-hover:text-brand-crimson transition-colors duration-200">
                Web Dev
              </h4>
              <p className="text-sm text-black font-medium">React, Node, Express</p>
            </div>
          </div>

          {/* Card 3: Problem Solving */}
          <div className="editorial-card p-5 flex items-center gap-4 hover:border-brand-400/40 transition-all duration-300 group bg-white">
            <div className="p-3 rounded-xl bg-brand-50 border border-brand-100 text-brand-crimson group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-ink-950 text-base group-hover:text-brand-crimson transition-colors duration-200">
                Problem Solving
              </h4>
              <p className="text-sm text-black font-medium">C/C++, DSA, Python</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
