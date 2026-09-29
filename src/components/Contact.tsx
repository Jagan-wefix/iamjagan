import { Mail, Briefcase, Code2, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contact() {
  const email = 'iam.mr.jagan@gmail.com';

  return (
    <section className="snap-section relative min-h-[100svh] w-full px-5 pt-16 pb-28 md:pt-24 md:pb-16 md:pl-24 lg:pl-28 flex flex-col">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col md:max-w-3xl md:mx-0">
        <Reveal>
          <p className="text-neon-400 text-xs font-medium tracking-widest uppercase">Get In Touch</p>
          <h2 className="mt-1 text-2xl font-bold text-mist-100 md:text-4xl">Let's Build Something</h2>
          <p className="mt-2 text-sm text-mist-400 leading-relaxed md:text-base md:mt-3 md:max-w-xl">
            Open to opportunities in 3D CAD, Mechanical Design, Product Development, Mechanism Design, and Electromechanical Engineering.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <a
            href={`mailto:${email}`}
            className="mt-6 glass neon-glow rounded-3xl p-5 flex items-center gap-4 active:scale-[0.98] hover:bg-neon-500/5 transition-all md:mt-10 md:p-6 md:gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-neon-500/15 flex items-center justify-center ring-1 ring-neon-500/25 md:w-14 md:h-14">
              <Mail className="w-5 h-5 text-neon-400 md:w-6 md:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-mist-500">Email me</p>
              <p className="text-sm font-medium text-mist-100 truncate md:text-base">{email}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-mist-400 md:w-5 md:h-5" />
          </a>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-3 grid grid-cols-2 gap-3 md:mt-4 md:gap-4">
            <a
              href="https://www.linkedin.com/in/jagan-b-9990b72ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-3xl p-5 flex flex-col items-start gap-3 active:scale-[0.98] hover:ring-1 hover:ring-neon-500/20 transition-all md:p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-ink-700 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-mist-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-mist-100">LinkedIn</p>
                <p className="text-xs text-mist-500">/jagan-b-9990b72ba</p>
              </div>
            </a>
            <a
              href="https://github.com/Jagan-wefix"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-3xl p-5 flex flex-col items-start gap-3 active:scale-[0.98] hover:ring-1 hover:ring-neon-500/20 transition-all md:p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-ink-700 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-mist-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-mist-100">GitHub</p>
                <p className="text-xs text-mist-500">@Jagan-wefix</p>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-auto pt-8 text-center md:pt-12">
            <p className="text-[11px] text-mist-500">
              Designed & built by JAGAN.B · {new Date().getFullYear()}
            </p>
            <p className="mt-1 text-[10px] text-mist-600">
              React · Three.js · React Three Fiber
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
