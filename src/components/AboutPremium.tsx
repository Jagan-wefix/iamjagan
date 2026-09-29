import { Download } from 'lucide-react';
import { PremiumSectionHeading } from './PremiumSectionHeading';
import { Reveal } from './Reveal';

export function AboutPremium() {
  return (
    <section className="snap-section relative w-full py-20 md:py-32 px-6 bg-gradient-to-b from-ink-950 to-ink-900">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <PremiumSectionHeading
            label="WHO I AM"
            title="3D CAD Designer × Mechanical Engineer"
            description="Mechanism design, product development, and electromechanical system thinking from concept to prototype."
          />
        </Reveal>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large intro card */}
          <Reveal delay={50} className="md:col-span-2">
            <div className="relative group h-full rounded-2xl border border-neon-500/20 bg-gradient-to-br from-neon-500/10 to-neon-500/5 p-8 md:p-12 overflow-hidden hover:border-neon-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-mist-100">From CAD Geometry to Working Systems</h3>
                <p className="text-base md:text-lg text-mist-400 leading-relaxed">
                  Mechanical Engineering undergraduate focused on 3D CAD, mechanism design, and product development. Core tools include SolidWorks, Fusion 360, AutoCAD, and ANSYS.
                </p>
                <p className="text-base md:text-lg text-mist-400 leading-relaxed">
                  I work from geometry to function: component shape, motion, assembly, manufacturability, and system behavior.
                </p>
                <a
                  href="https://drive.google.com/file/d/1cGQyT5mK1Su0ixvFksO0YQzCH_nyHA3N/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neon-500/40 bg-neon-500/10 px-4 py-2.5 text-sm font-medium text-neon-400 transition-colors hover:bg-neon-500/20"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick stats card */}
          <Reveal delay={100}>
            <div className="rounded-2xl border border-neon-500/20 bg-gradient-to-br from-neon-500/10 to-neon-500/5 p-8 hover:border-neon-500/40 transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-neon-400">8.06 / 10</p>
                  <p className="text-sm text-mist-400 mt-1">B.E. Mechanical Engineering CGPA</p>
                </div>
                <div className="border-t border-neon-500/20 pt-6">
                  <p className="text-xl font-bold text-mist-100">2023–2027</p>
                  <p className="text-sm text-mist-400 mt-1">Meenakshi Sundararajan Engineering College</p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
