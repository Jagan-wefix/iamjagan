import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { useActiveSection, type NavKey } from './BottomNav';
import { ThemeToggle } from './ThemeToggle';

const resumeLink = 'https://drive.google.com/file/d/1cGQyT5mK1Su0ixvFksO0YQzCH_nyHA3N/view?usp=drive_link';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [_, navigate] = useActiveSection();

  const handleNavClick = (id: NavKey) => {
    navigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-950/80 backdrop-blur-md border-b border-neon-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="w-8 h-8 rounded-lg bg-neon-400 flex items-center justify-center">
            <span className="text-ink-950 font-bold text-sm">J</span>
          </div>
          <span className="text-mist-100 font-semibold tracking-tight hidden sm:inline">Jagan</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as NavKey)}
              className="text-mist-500 hover:text-mist-300 text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neon-500/40 bg-neon-500/10 px-3 py-2 text-xs font-medium text-neon-300 transition-colors hover:bg-neon-500/20"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neon-500/40 bg-neon-500/10 px-2.5 py-1.5 text-[10px] font-medium text-neon-300"
          >
            <Download className="h-3 w-3" />
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pointer-events-auto text-mist-300 hover:text-mist-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ink-900 border-t border-neon-500/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as NavKey)}
                className="text-mist-500 hover:text-mist-300 text-sm font-medium transition-colors duration-200 text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neon-500/40 bg-neon-500/10 px-3 py-2 text-xs font-medium text-neon-300"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
