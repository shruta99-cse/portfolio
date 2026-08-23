import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail, Github, Linkedin, Code2, ShieldCheck, Terminal, Cpu, Sparkles } from 'lucide-react';
import { personalDetails } from '../../data/portfolioData';
import MagnetButton from '../ui/MagnetButton';

export default function HeroSection({ onOpenResume }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % personalDetails.titles.length);
    }, 3200);
    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Hardware Accelerated Pure CSS Background Orbs with Ambient Movement */}
      <div
        className="absolute inset-0 pointer-events-none z-0 animate-bg-ambient"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(0, 240, 255, 0.09) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.09) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Name, Titles & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* 1. Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-[0_0_12px_rgba(0,240,255,0.15)] animate-hero-entrance [animation-delay:50ms] transform-gpu">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for Engineering Roles & Projects</span>
            </div>

            {/* 2. Main Name Header */}
            <div className="animate-hero-entrance [animation-delay:120ms] transform-gpu">
              <h3 className="text-slate-400 font-mono text-base sm:text-lg mb-2 flex items-center gap-2">
                <Terminal size={18} className="text-cyan-400" />
                Hi, I'm
              </h3>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
                {personalDetails.name}
              </h1>
            </div>

            {/* 3. Title Line */}
            <div className="h-12 flex items-center animate-hero-entrance [animation-delay:200ms] transform-gpu">
              <p className="text-xl sm:text-2xl font-extrabold text-gradient-blue transition-all duration-300">
                {personalDetails.titles[currentTitleIndex]}
              </p>
            </div>

            {/* 4. Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light animate-hero-entrance [animation-delay:280ms] transform-gpu">
              {personalDetails.tagline} Lead of <span className="text-cyan-300 font-medium">DiaFed AI</span> (Federated ML) and sponsored industry full-stack portals with a <span className="text-cyan-300 font-medium">8.60 CPI</span> academic distinction.
            </p>

            {/* 5. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 animate-hero-entrance [animation-delay:360ms] transform-gpu">
              <MagnetButton href="#projects" variant="primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </MagnetButton>

              <MagnetButton onClick={onOpenResume} variant="secondary">
                <FileText size={16} />
                <span>Download Resume</span>
              </MagnetButton>

              <MagnetButton href="#contact" variant="outline">
                <Mail size={16} />
                <span>Contact Me</span>
              </MagnetButton>
            </div>

            {/* 6. Social Links & Highlights */}
            <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-slate-800/80 animate-hero-entrance [animation-delay:440ms] transform-gpu">
              <div className="flex items-center gap-3">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 ease-out transform-gpu"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 ease-out transform-gpu"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={personalDetails.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 ease-out transform-gpu"
                  aria-label="LeetCode Profile"
                >
                  <Code2 size={18} />
                </a>
              </div>

              <div className="h-8 w-px bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <div>
                  <span className="block text-white font-bold text-sm">8.60 CPI</span>
                  <span>ADCET CSE</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                <div>
                  <span className="block text-cyan-400 font-bold text-sm">3+ Deployed</span>
                  <span>Full Stack Apps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Uploaded Image in Floating Tech Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center animate-hero-entrance [animation-delay:80ms] transform-gpu">
            {/* Pure CSS Tech Ring Background */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" />
            <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full border border-blue-500/10 pointer-events-none" />

            {/* Profile Glass Frame with Floating Effect */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-cyan-500/30 backdrop-blur-md shadow-[0_15px_40px_rgba(0,240,255,0.15)] group animate-float-subtle hover:scale-[1.02] hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,240,255,0.25)] transition-all duration-300 ease-out transform-gpu">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={personalDetails.avatar}
                  alt={personalDetails.name}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-103 transition-transform duration-300 ease-out"
                />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#050609] via-[#050609]/80 to-transparent border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-base flex items-center gap-1.5">
                        {personalDetails.fullName}
                        <ShieldCheck size={16} className="text-cyan-400" />
                      </h4>
                      <p className="text-xs text-cyan-300 font-mono">B.Tech CSE • Final Year Lead</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/40">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -left-4 z-20 px-3.5 py-2 rounded-xl glass-panel border border-cyan-500/40 text-xs font-semibold text-white flex items-center gap-2 shadow-[0_4px_20px_rgba(0,240,255,0.2)]">
                <Cpu size={15} className="text-cyan-400" />
                <span>React + Spring Boot</span>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -right-4 z-20 px-3.5 py-2 rounded-xl glass-panel border border-blue-500/40 text-xs font-semibold text-white flex items-center gap-2 shadow-[0_4px_20px_rgba(59,130,246,0.2)]">
                <Sparkles size={15} className="text-blue-400" />
                <span>PyTorch + Flower ML</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

}
