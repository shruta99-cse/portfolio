import React from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle, Flame } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';

export default function ProjectsSection() {
  const featuredProject = projectsData.find((p) => p.id === 'diafed-ai');
  const otherProjects = projectsData.filter((p) => p.id !== 'diafed-ai');

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles size={14} /> Featured Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Engineering & <span className="text-gradient-blue">AI Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              From explainable federated AI algorithms to sponsored industry production web applications.
            </p>
          </div>
        </ScrollReveal>

        {/* FEATURED PROJECT: DiaFed AI Showcase Card */}
        {featuredProject && (
          <ScrollReveal animation="fade-up" className="mb-14">
            <GlassCard className="p-7 sm:p-10 border border-cyan-500/50 shadow-[0_0_35px_rgba(0,240,255,0.15)] bg-gradient-to-b from-[#0e1220] via-[#0b0e1a] to-[#070912] relative overflow-hidden group hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(0,240,255,0.25)] transition-all duration-300 transform-gpu">
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-mono font-bold uppercase tracking-wider">
                <Flame size={14} className="text-cyan-400" />
                {featuredProject.badge}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Specs */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      {featuredProject.type}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {featuredProject.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {featuredProject.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {featuredProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <CheckCircle size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-slate-900 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 ease-out transform-gpu"
                    >
                      <span>Live Dashboard</span>
                      <ExternalLink size={15} />
                    </a>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] text-xs font-bold uppercase tracking-wider transition-all duration-200 ease-out transform-gpu"
                    >
                      <Github size={15} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Architecture Mock */}
                <div className="lg:col-span-5 relative">
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-xl group-hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400">diafed-ai-cluster v1.0</span>
                    </div>

                    <div className="space-y-2.5 font-mono text-xs text-slate-300">
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/20 flex justify-between items-center hover:border-cyan-500/40 transition-colors">
                        <span className="text-cyan-400">Hospital Node 01 (PyTorch)</span>
                        <span className="text-emerald-400 text-[10px]">Local Training OK</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/20 flex justify-between items-center hover:border-cyan-500/40 transition-colors">
                        <span className="text-cyan-400">Hospital Node 02 (PyTorch)</span>
                        <span className="text-emerald-400 text-[10px]">Local Training OK</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/40 text-center font-bold text-cyan-300 text-[11px] hover:border-cyan-400 transition-colors">
                        Flower Aggregator ➔ Secure FedAvg Updates
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-blue-500/20 flex justify-between items-center hover:border-blue-500/40 transition-colors">
                        <span className="text-blue-400">SHAP Explainer</span>
                        <span className="text-cyan-300 text-[10px]">Feature Attribution Gen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        )}

        {/* OTHER PROJECTS GRID WITH STAGGERED REVEAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {otherProjects.map((proj, idx) => (
            <ScrollReveal key={proj.id} animation="fade-up" staggerIndex={idx} staggerStep={60}>
              <GlassCard className="p-6 border border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300 ease-out transform-gpu flex flex-col justify-between h-full group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-0.5 rounded bg-slate-900 text-cyan-400 text-[11px] font-mono border border-slate-800">
                      {proj.type}
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-semibold">
                      {proj.metrics}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {proj.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {proj.highlights.map((h, hIdx) => (
                      <p key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-400">▹</span> {h}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="text-[11px] px-2.5 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black font-semibold text-xs transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all duration-200 active:scale-95"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

