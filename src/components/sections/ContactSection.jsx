import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, FileText, CheckCircle2, Github, Linkedin, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import MagnetButton from '../ui/MagnetButton';
import ScrollReveal from '../ui/ScrollReveal';

export default function ContactSection({ onOpenResume }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#3b82f6']
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#030407]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
              <Mail size={14} /> Get In Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Let's Build Something <span className="text-gradient-blue">Extraordinary</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Open for software engineering roles, full-stack projects, and AI research collaborations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Avatar Badge & Direct Contact Details */}
          <ScrollReveal animation="fade-left" className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6 border border-cyan-500/30">
              {/* Profile Avatar Badge */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                <div className="relative w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <img
                    src={personalDetails.avatar}
                    alt={personalDetails.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full bg-slate-950"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-black animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{personalDetails.fullName}</h3>
                  <p className="text-xs text-cyan-400 font-mono">Computer Science Engineer</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">● Ready for Immediate Roles</p>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-6 text-xs text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Email Address</span>
                    <a href={`mailto:${personalDetails.email}`} className="font-semibold text-white hover:text-cyan-300 transition-colors">
                      {personalDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Phone</span>
                    <a href={`tel:${personalDetails.phone}`} className="font-semibold text-white hover:text-cyan-300 transition-colors">
                      +91 {personalDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Location</span>
                    <span className="font-semibold text-white">{personalDetails.location}</span>
                  </div>
                </div>
              </div>

              {/* Resume Trigger & Socials */}
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-4">
                <MagnetButton onClick={onOpenResume} variant="secondary" className="w-full">
                  <FileText size={16} />
                  <span>View Printable Resume</span>
                </MagnetButton>

                <div className="flex justify-center items-center gap-4 pt-2">
                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 ease-out transform-gpu"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 ease-out transform-gpu"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={personalDetails.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 ease-out transform-gpu"
                  >
                    <Code2 size={18} />
                  </a>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal animation="fade-right" className="lg:col-span-7">
            <GlassCard className="p-8 border border-slate-800 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-hero-entrance">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to Shruti Sathe. Your message has been safely logged and I will respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-slate-300">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold text-slate-300">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Opportunity / Engineering Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold text-slate-300">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shruti, I'd like to discuss an opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.97] transition-all duration-200 ease-out transform-gpu flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

