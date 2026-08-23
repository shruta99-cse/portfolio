import React from 'react';
import { Trophy, Mic, Award, Rocket, Sparkles } from 'lucide-react';
import { achievementsData } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';

export default function AchievementsSection() {
  const iconMap = {
    Trophy: Trophy,
    Mic: Mic,
    Award: Award,
    Rocket: Rocket
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
              <Trophy size={14} /> Honors & Distinctions
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Achievements & <span className="text-gradient-blue">Leadership</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Recognition across academic performance, sports competitions, and public speaking leadership.
            </p>
          </div>
        </ScrollReveal>

        {/* Achievements Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <ScrollReveal key={idx} animation="fade-up" staggerIndex={idx} staggerStep={60}>
                <GlassCard className="p-6 border border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-out transform-gpu h-full flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all duration-200">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/30">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{item.detail}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                    <Sparkles size={12} />
                    <span>Verified Milestone</span>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

