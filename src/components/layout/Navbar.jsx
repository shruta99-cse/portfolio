import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { personalDetails } from '../../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform-gpu animate-hero-entrance ${
        scrolled
          ? 'py-3 bg-[#050609]/95 border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Profile Avatar */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_12px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform duration-200">
              <img
                src={personalDetails.avatar}
                alt={personalDetails.name}
                className="w-full h-full object-cover rounded-full bg-slate-950"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-black animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {personalDetails.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase flex items-center gap-1">
                <Sparkles size={10} /> Full Stack & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-full transition-colors nav-link-underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <FileText size={14} />
              Resume
            </button>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_15px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-cyan-400 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090b12]/98 backdrop-blur-lg border-b border-slate-800 px-6 py-6 space-y-4 animate-hero-entrance shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 py-2.5 w-full bg-slate-900 border border-cyan-500/30 text-cyan-300 rounded-xl text-xs font-semibold hover:border-cyan-400 active:scale-95 transition-all"
            >
              <FileText size={15} /> View Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 w-full text-center bg-cyan-500 text-black font-semibold rounded-xl text-xs shadow-[0_0_15px_rgba(0,240,255,0.4)] active:scale-95 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
