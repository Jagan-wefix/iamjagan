import { projects } from '@/three/data';
import { PremiumSectionHeading } from './PremiumSectionHeading';
import { Reveal } from './Reveal';

export function ProjectsPremium({ onViewProject }: { onViewProject: (id: string) => void }) {
  return (
    <section className="snap-section relative w-full py-20 md:py-32 px-6 bg-gradient-to-b from-ink-950 to-ink-900">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <PremiumSectionHeading
            label="SELECTED ENGINEERING WORK"
            title="Projects"
            description="CAD, mechanism design, and product development projects."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={100 + idx * 50}>
              <button
                onClick={() => onViewProject(project.id)}
                className="group w-full overflow-hidden rounded-xl border border-neon-500/20 bg-ink-900/70 text-left transition-all duration-300 hover:border-neon-500/50 hover:bg-ink-900"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-ink-800">
                  <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-wider text-neon-300">Open 3D model</span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-neon-400">{project.category}</p>
                  <h3 className="mt-1 text-lg font-bold text-mist-100 group-hover:text-neon-400">{project.title}</h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
