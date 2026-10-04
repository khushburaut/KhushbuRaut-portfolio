import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#faf9f6]/85 backdrop-blur-md border-b border-black/[0.06] py-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-crimson">
              —
            </span>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-ink-950 font-heading group-hover:text-brand-crimson transition-colors duration-200">
              {portfolioData.personalInfo.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson animate-pulse"></span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-black hover:text-brand-crimson transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-crimson transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-bold uppercase tracking-wider text-white bg-ink-950 hover:bg-brand-crimson rounded-full shadow-sm hover:shadow-editorial-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-ink-800 hover:text-brand-crimson hover:bg-black/[0.04] focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#faf9f6]/95 backdrop-blur-xl border-b border-black/[0.08] transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-5 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold uppercase tracking-wider text-black hover:text-brand-crimson hover:bg-black/[0.03] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-1">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 px-4 rounded-full bg-ink-950 hover:bg-brand-crimson text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
