import { ArrowRight, GitBranch, Globe, Mail, Sparkles } from 'lucide-react';
import { PremiumButton } from './PremiumButton';
import { useScrollY } from './useScrollY';

export function HeroPremium({ onCta, onContact }: { onCta: () => void; onContact: () => void }) {
  const scrollY = useScrollY();

  return (
    <section className="snap-section relative w-full min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div
        className="pointer-events-none absolute top-20 right-1/3 h-96 w-96 rounded-full bg-neon-500/8 blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-neon-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="mb-8 flex justify-center md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-500/30 bg-neon-500/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-neon-400" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-mist-300">Available for opportunities</span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold leading-[1.05] tracking-tight text-mist-100 md:text-7xl lg:text-8xl">
              I'm
              <span className="block text-neon-400">JAGAN B</span>
            </h1>
            <p className="mt-4 max-w-xl text-xl font-medium text-mist-300 md:text-2xl">
              3D CAD & Product Design Engineer
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-mist-400 md:text-base">
              I develop mechanical designs, mechanisms, and products using 3D CAD, supported by practical knowledge of electronics, robotics, automation, and simulation.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PremiumButton size="lg" onClick={onCta}>
                Explore Work
                <ArrowRight className="h-5 w-5" />
              </PremiumButton>
              <PremiumButton size="lg" variant="outline" onClick={onContact}>
                Get in Touch
              </PremiumButton>
            </div>

            <div className="mt-7 flex gap-3 border-t border-neon-500/20 pt-5">
              <a
                href="https://github.com/Jagan-wefix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-neon-500/20 bg-neon-500/10 p-3 text-neon-400 transition-colors hover:bg-neon-500/20"
              >
                <GitBranch className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jagan-b-9990b72ba/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-neon-500/20 bg-neon-500/10 p-3 text-neon-400 transition-colors hover:bg-neon-500/20"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="mailto:iam.mr.jagan@gmail.com"
                aria-label="Email"
                className="rounded-lg border border-neon-500/20 bg-neon-500/10 p-3 text-neon-400 transition-colors hover:bg-neon-500/20"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl border border-neon-500/20">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-500/10 to-neon-500/5 blur-xl" />
              <img
                src="https://res.cloudinary.com/dkyvctkhf/image/upload/v1787124631/sjrn5oupyfafx5hmgcuf.jpg"
                alt="Jagan B"
                className="relative block h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce text-center text-xs font-medium text-mist-500">
        SCROLL
      </div>
    </section>
  );
}
