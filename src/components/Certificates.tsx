import { useState } from 'react';
import { BadgeCheck, Award, Wind, Trophy, FileText, Rocket, Medal, Target, Globe } from 'lucide-react';
import { certificates, type Certificate } from '@/three/data';
import { Reveal } from './Reveal';
import { TiltCard } from './TiltCard';
import { CertificateViewer } from './CertificateViewer';

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  'badge-check': BadgeCheck,
  award: Award,
  wind: Wind,
  trophy: Trophy,
  'file-text': FileText,
  rocket: Rocket,
  target: Target,
  globe: Globe,
};

export function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const certs = certificates.filter((c) => c.category === 'certificate');
  const achievements = certificates.filter((c) => c.category === 'achievement');

  return (
    <section className="snap-section relative min-h-[100svh] w-full px-5 pt-16 pb-28 md:pt-24 md:pb-16 md:pl-24 lg:pl-28">
      <div className="max-w-md mx-auto md:max-w-5xl md:mx-0">
        <Reveal>
          <p className="text-neon-400 text-xs font-medium tracking-widest uppercase">Recognition</p>
          <h2 className="mt-1 text-2xl font-bold text-mist-100 md:text-4xl">Certificates & Achievements</h2>
          <p className="mt-2 text-sm text-mist-400 leading-relaxed md:text-base md:mt-3 md:max-w-xl">
            Credentials and milestones earned along the way.
          </p>
        </Reveal>

        {/* Certificates */}
        <Reveal delay={60}>
          <div className="mt-6 flex items-center gap-2 mb-3 md:mt-8">
            <Medal className="w-4 h-4 text-neon-400" />
            <h3 className="text-sm font-semibold text-mist-200">Certificates</h3>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-4">
          {certs.map((c, i) => (
            <Reveal key={c.id} delay={80 + i * 50}>
              <TiltCard className="h-full" max={6}>
                <CertCard item={c} onOpen={() => setActiveCertificate(c)} />
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Achievements */}
        <Reveal delay={120}>
          <div className="mt-7 flex items-center gap-2 mb-3 md:mt-8">
            <Target className="w-4 h-4 text-accent-400" />
            <h3 className="text-sm font-semibold text-mist-200">Achievements</h3>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-4">
          {achievements.map((a, i) => (
            <Reveal key={a.id} delay={160 + i * 50}>
              <TiltCard className="h-full" max={6}>
                <CertCard item={a} highlight onOpen={() => setActiveCertificate(a)} />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
      {activeCertificate && <CertificateViewer certificate={activeCertificate} onClose={() => setActiveCertificate(null)} />}
    </section>
  );
}

function CertCard({ item, highlight, onOpen }: { item: Certificate; highlight?: boolean; onOpen: () => void }) {
  const Icon = icons[item.icon] ?? Award;
  if (item.category === 'achievement' && !item.image.startsWith('https://')) {
    return (
      <button onClick={onOpen} className="glass group flex w-full items-center gap-3.5 rounded-2xl p-4 text-left transition-all hover:ring-1 hover:ring-neon-500/20 active:scale-[0.98] md:h-full">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 ring-1 ring-accent-500/20">
          <Icon className="h-5 w-5 text-accent-400" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold leading-snug text-mist-100 group-hover:text-neon-400">{item.title}</h4>
          <p className="mt-0.5 text-xs text-mist-500">{item.issuer}</p>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-mist-400">{item.year}</span>
      </button>
    );
  }

  return (
    <button onClick={onOpen} className="glass group w-full overflow-hidden rounded-2xl text-left active:scale-[0.98] hover:ring-1 hover:ring-neon-500/20 transition-all md:h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-900">
        <img src={item.image} alt={`${item.title} certificate`} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        <div className={`absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl ring-1 ${highlight ? 'bg-accent-500/20 ring-accent-500/30' : 'bg-neon-500/20 ring-neon-500/30'}`}>
          <Icon className={`h-4 w-4 ${highlight ? 'text-accent-400' : 'text-neon-400'}`} />
        </div>
      </div>
      <div className="flex items-center gap-3 p-4">
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold leading-snug text-mist-100 group-hover:text-neon-400">{item.title}</h4>
          <p className="mt-0.5 text-xs text-mist-500">{item.issuer}</p>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-mist-400">{item.year}</span>
      </div>
    </button>
  );
}
