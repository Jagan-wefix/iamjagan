import React from 'react';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, icon, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary: 'bg-neon-400 text-ink-950 hover:bg-neon-300 shadow-lg hover:shadow-xl hover:shadow-neon-400/30',
      secondary: 'bg-neon-500/20 border border-neon-500/40 text-neon-400 hover:bg-neon-500/30 hover:border-neon-500/60',
      ghost: 'text-mist-300 hover:text-mist-100 hover:bg-neon-500/10',
      outline: 'border border-mist-500/30 text-mist-300 hover:border-neon-400 hover:text-neon-400 hover:bg-neon-500/5',
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  }
);

PremiumButton.displayName = 'PremiumButton';
