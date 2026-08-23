import React, { useState } from 'react';
import { Cpu, Terminal } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData.flatMap((cat) => cat.skills.map((skill) => ({ ...skill, category: cat.category })))
    : skillsData.find((cat) => cat.category === selectedCategory)?.skills.map((skill) => ({ ...skill, category: selectedCategory })) || [];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#030407]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
              <Cpu size={14} /> Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Skills & <span className="text-gradient-blue">Technologies</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Comprehensive tech stack spanning modern frontend frameworks, backend microservices, relational databases, and AI frameworks.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Category Tabs */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, idx) => (
            <ScrollReveal key={skill.name} animation="fade-up" staggerIndex={idx} staggerStep={50}>
              <GlassCard className="p-5 border border-slate-800/80 hover:border-cyan-500/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-out transform-gpu group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all duration-200">
                      <Terminal size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] text-slate-500 font-mono">{skill.category}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400">{skill.level}%</span>
                </div>

                <div className="w-full bg-slate-900/90 rounded-full h-1.5 overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

