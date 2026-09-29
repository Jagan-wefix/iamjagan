import { Home, Box, Wrench, Medal, User, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export type NavKey = 'hero' | 'projects' | 'skills' | 'certificates' | 'about' | 'contact';

const items: { key: NavKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'hero', label: 'Home', icon: Home },
  { key: 'projects', label: '3D', icon: Box },
  { key: 'skills', label: 'Skills', icon: Wrench },
  { key: 'certificates', label: 'Certs', icon: Medal },
  { key: 'about', label: 'About', icon: User },
  { key: 'contact', label: 'Contact', icon: Mail },
];

export function BottomNav({ active, onNavigate }: { active: NavKey; onNavigate: (k: NavKey) => void }) {
  return (
    <>
      {/* Mobile bottom bar */}
      <nav className="mobile-bottom-nav fixed bottom-0 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-3 pb-4 pt-2 pointer-events-none">
        <div className="glass rounded-full px-1.5 py-2 flex items-center justify-between pointer-events-auto shadow-2xl">
          {items.map((it) => {
            const isActive = active === it.key;
            const Icon = it.icon;
            return (
              <button
                key={it.key}
                onClick={() => onNavigate(it.key)}
                className="relative flex flex-col items-center justify-center gap-0.5 rounded-full px-2.5 py-1.5 transition-all active:scale-90"
                aria-label={it.label}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-all ${isActive ? 'bg-neon-500/15 scale-100' : 'scale-0'}`}
                />
                <Icon className={`relative w-[18px] h-[18px] transition-colors ${isActive ? 'text-neon-400' : 'text-mist-500'}`} />
                <span className={`relative text-[8px] font-medium transition-colors ${isActive ? 'text-neon-400' : 'text-mist-500'}`}>
                  {it.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop side rail */}
      <nav className="desktop-nav-rail">
        {items.map((it) => {
          const isActive = active === it.key;
          const Icon = it.icon;
          return (
            <button
              key={it.key}
              onClick={() => onNavigate(it.key)}
              className={`desktop-nav-btn ${isActive ? 'active' : ''}`}
              aria-label={it.label}
            >
              <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-neon-400' : 'text-mist-500'}`} />
              <span className="desktop-nav-label">{it.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}

/* Hook: tracks which snap section is currently in view. */
export function useActiveSection(): [NavKey, (k: NavKey) => void] {
  const [active, setActive] = useState<NavKey>('hero');

  useEffect(() => {
    const sections = items.map((it) => document.getElementById(it.key)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as NavKey);
        });
      },
      { threshold: 0.5 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const navigate = (k: NavKey) => {
    document.getElementById(k)?.scrollIntoView({ behavior: 'smooth' });
  };

  return [active, navigate];
}
