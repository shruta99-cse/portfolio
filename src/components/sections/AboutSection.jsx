import React, { useState } from 'react';
import { GraduationCap, Target, Sparkles, UserCheck } from 'lucide-react';
import { personalDetails, statsData, educationData } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles size={14} /> Profile & Credentials
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              About <span className="text-gradient-blue">Shruti Sathe</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Bridging production full-stack architecture with federated artificial intelligence research.
            </p>
          </div>
        </ScrollReveal>

        {/* Metric Cards Grid with Staggered Scroll Reveal & Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {statsData.map((stat, idx) => (
            <ScrollReveal key={idx} animation="fade-up" staggerIndex={idx} staggerStep={60}>
              <GlassCard className="text-center p-5 border border-slate-800 hover:border-cyan-500/40">
                <h3 className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono mb-1">
                  <AnimatedCounter value={stat.value} duration={900} />
                  <span className="text-slate-400 text-xl font-normal">{stat.suffix}</span>
                </h3>
                <p className="text-white font-bold text-sm mb-1">{stat.label}</p>
                <p className="text-[11px] text-slate-400 font-light">{stat.detail}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Uploaded Profile Card with Slide-Left Reveal */}
          <ScrollReveal animation="fade-left" className="lg:col-span-5">
            <GlassCard className="p-6 border border-cyan-500/30 relative">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-slate-950">
                <img
                  src={personalDetails.avatar}
                  alt={personalDetails.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover filter brightness-105 contrast-105 hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold rounded-full border border-cyan-500/40">
                    ADCET CSE • B.Tech Senior
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-white">{personalDetails.fullName}</h3>
                <p className="text-xs text-cyan-400 font-mono">Location: {personalDetails.location}</p>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Passionate software developer specializing in building responsive React frontends, robust Spring Boot & FastAPI backends, and privacy-focused machine learning pipelines.
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Primary Stack:</span>
                    <span className="font-semibold text-white">Java, Spring Boot, React, PyTorch</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Current Focus:</span>
                    <span className="font-semibold text-cyan-400">DiaFed AI & DSA in C++</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Right Column: Tabbed Information with Slide-Right Reveal */}
          <ScrollReveal animation="fade-right" className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 rounded-xl border border-slate-800">
              {[
                { id: 'summary', label: 'Summary', icon: UserCheck },
                { id: 'education', label: 'Education Timeline', icon: GraduationCap },
                { id: 'goals', label: 'Career Goals', icon: Target },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 active:scale-95 ${
                      isActive
                        ? 'bg-cyan-500 text-black shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon size={15} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="min-h-[360px]">
              {activeTab === 'summary' && (
                <div className="space-y-6 animate-hero-entrance">
                  <GlassCard className="p-6 border border-slate-800">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Sparkles size={18} className="text-cyan-400" />
                      Engineering Philosophy
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                      {personalDetails.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Full Stack Delivery</span>
                        <p className="text-xs text-slate-400">Delivered sponsored inventory portal for UMED Industry with full CRUD & Spring Boot REST APIs.</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">AI Research</span>
                        <p className="text-xs text-slate-400">Architecting DiaFed AI explainable federated diabetes framework with SHAP & Flower.</p>
                      </div>
                    </div>
                  </GlassCard>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['Java & Spring Boot', 'React & Tailwind', 'PyTorch & Flower', 'MySQL & REST APIs', 'C++ DSA Practice', 'Agile & Git Workflows'].map((tag, idx) => (
                      <div key={idx} className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl text-center hover:border-cyan-500/30 transition-colors">
                        <span className="text-xs font-semibold text-slate-200">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-4 animate-hero-entrance">
                  {educationData.map((edu, idx) => (
                    <GlassCard key={idx} className="p-5 border border-slate-800 hover:border-cyan-500/30">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                          <p className="text-xs text-cyan-400 font-mono mt-0.5">{edu.institution}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs border border-cyan-500/40">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-3">{edu.period} • {edu.status}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="px-2.5 py-1 bg-slate-950 text-slate-300 text-[11px] rounded border border-slate-800">
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              )}

              {activeTab === 'goals' && (
                <div className="space-y-4 animate-hero-entrance">
                  <GlassCard className="p-6 border border-slate-800 space-y-4">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Target size={18} className="text-cyan-400" />
                      Vision & Aspirations
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 font-bold">▹</span>
                        <span><strong>Full-Stack Excellence:</strong> Contribute to enterprise-scale SaaS products using React, Node, Spring Boot, and cloud microservices.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 font-bold">▹</span>
                        <span><strong>Privacy-First AI:</strong> Advance federated learning research to make healthcare & financial AI models privacy-preserving and explainable.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 font-bold">▹</span>
                        <span><strong>Continuous Algorithmic Mastery:</strong> Consistently elevate problem-solving mastery in Data Structures & Algorithms with C++ and LeetCode.</span>
                      </li>
                    </ul>
                  </GlassCard>
                </div>
              )}
            </div>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

