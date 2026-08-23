import React from 'react';

export default function GlassCard({ children, className = '', hoverGlow = true, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-[1.01] ${
        hoverGlow ? 'hover:border-cyan-500/40 hover:shadow-[0_8px_25px_rgba(0,240,255,0.12)]' : ''
      } ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

