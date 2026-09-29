import React from 'react';

interface PremiumSectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PremiumSectionHeading({
  label,
  title,
  description,
  className = '',
}: PremiumSectionHeadingProps) {
  return (
    <div className={`space-y-4 md:space-y-6 ${className}`}>
      {label && (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-500/15 border border-neon-500/30">
          <span className="text-xs font-semibold text-neon-400 tracking-widest uppercase">{label}</span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-mist-100">{title}</h2>
      {description && <p className="text-lg md:text-xl text-mist-400 max-w-2xl">{description}</p>}
    </div>
  );
}
