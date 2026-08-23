import React from 'react';

export default function MagnetButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
  target
}) {
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-black font-semibold shadow-[0_0_16px_rgba(0,240,255,0.3)] hover:shadow-[0_0_24px_rgba(0,240,255,0.5)] border border-cyan-400/50 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97]',
    secondary:
      'bg-slate-900 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/40 hover:shadow-[0_0_16px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97]',
    outline:
      'bg-transparent text-slate-200 border border-slate-700 hover:border-cyan-400/60 hover:text-white hover:bg-white/5 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97]'
  };

  const buttonClass = `relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all duration-200 ease-out text-sm tracking-wide transform-gpu ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}

