import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Code, Briefcase } from 'lucide-react';
import { personalDetails, educationData, experienceData, projectsData } from '../../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeText = `
SHRUTI PRAKASH SATHE
Phone: ${personalDetails.phone} | Email: ${personalDetails.email}
GitHub: ${personalDetails.github} | LinkedIn: ${personalDetails.linkedin} | LeetCode: ${personalDetails.leetcode}

PROFESSIONAL SUMMARY:
${personalDetails.summary}

EDUCATION:
- B.Tech in CSE: ADCET, Ashta (2024-2027) | CPI: 8.60
- Diploma in CSE: NMPI, Peth (2022-2024) | Grade: 89.03%
- SSC: Adarsh Balak Mandir, Islampur (2019-2020) | Grade: 93%

KEY PROJECTS:
1. DiaFed AI - Explainable Federated Learning for Early Diabetes Detection
2. Inventory Management System - Sponsored Industry Project (UMED Industry)
3. Phishing Web Detector - Full Stack ML App
    `;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Shruti_Sathe_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#0c0e17] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 transition-transform duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090b12]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30 text-cyan-400">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Shruti Sathe — Curriculum Vitae</h3>
              <p className="text-xs text-slate-400">CPI 8.60 • Full Stack & AI Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg text-xs transition-colors shadow-[0_0_12px_rgba(0,240,255,0.3)]"
            >
              <Download size={15} />
              Download Resume
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-sm text-slate-300">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 p-6 bg-slate-900/60 border border-slate-800 rounded-xl">
            <div>
              <h1 className="text-2xl font-black text-white">{personalDetails.fullName}</h1>
              <p className="text-cyan-400 font-medium mt-1">Computer Science Engineering Student | Full Stack & AI Enthusiast</p>
              <p className="text-xs text-slate-400 mt-2">{personalDetails.location} • {personalDetails.email} • {personalDetails.phone}</p>
            </div>
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-semibold">
              Available for Hire
            </span>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-3 uppercase tracking-wider">
              <CheckCircle2 size={16} /> Professional Summary
            </h4>
            <p className="leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 text-slate-300">
              {personalDetails.summary}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-4 uppercase tracking-wider">
              <GraduationCap size={16} /> Education
            </h4>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-white">{edu.degree}</h5>
                    <p className="text-xs text-slate-400">{edu.institution}</p>
                    <p className="text-xs text-cyan-300 mt-1">{edu.status}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-md">
                      {edu.grade}
                    </span>
                    <p className="text-xs text-slate-400 mt-1">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-4 uppercase tracking-wider">
              <Code size={16} /> Featured Engineering Projects
            </h4>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-white text-base">{proj.title}</h5>
                    <span className="text-xs px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-md font-mono">
                      {proj.metrics}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] px-2 py-0.5 bg-slate-800 text-cyan-300 rounded border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-4 uppercase tracking-wider">
              <Briefcase size={16} /> Internship Experience
            </h4>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-bold text-white">{exp.role}</h5>
                      <p className="text-xs text-cyan-400">{exp.company} • {exp.type}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-2">
                    {exp.responsibilities.map((item, rIdx) => (
                      <li key={rIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
