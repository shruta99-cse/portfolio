import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-[#030407]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
              <Briefcase size={14} /> Career Journey
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Internship <span className="text-gradient-blue">Experience</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Track record of shipping production UI components and collaborating in Agile software teams.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline with Vertical Line & Dot Reveals */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Vertical Line */}
          <ScrollReveal animation="fade-up" className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent -translate-x-1/2 hidden sm:block timeline-line" />

          <div className="space-y-10">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Animated Timeline Point Dot */}
                  <ScrollReveal animation="fade-up" delay={idx * 150} className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050609] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_#00f0ff] z-20 hidden sm:flex timeline-dot">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  </ScrollReveal>

                  {/* Experience Card */}
                  <ScrollReveal
                    animation={isEven ? 'fade-left' : 'fade-right'}
                    staggerIndex={idx}
                    staggerStep={100}
                    className="w-full sm:w-[calc(50%-2.5rem)]"
                  >
                    <GlassCard className="p-6 border border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 ease-out transform-gpu space-y-4 group">
                      <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-800/80 pb-3">
                        <div>
                          <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono uppercase font-bold border border-cyan-500/40">
                            {exp.type}
                          </span>
                          <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                          <h4 className="text-sm font-semibold text-cyan-400">{exp.company}</h4>
                        </div>
                        <div className="text-right font-mono text-xs text-slate-400 flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                          <Calendar size={13} className="text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-light">{exp.description}</p>

                      <ul className="space-y-2 text-xs text-slate-300">
                        {exp.responsibilities.map((r, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {exp.tech.map((t, tIdx) => (
                          <span key={tIdx} className="text-[11px] px-2 py-0.5 bg-slate-900 text-slate-400 rounded border border-slate-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

