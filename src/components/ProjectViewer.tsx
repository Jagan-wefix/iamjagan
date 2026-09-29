import { lazy, Suspense, useEffect, useState } from 'react';
import { X, RotateCw, Move, ExternalLink } from 'lucide-react';
import type { Project } from '@/three/data';

const ModelScene = lazy(() => import('@/three/ModelScene'));

export function ProjectViewer({ project, onClose }: { project: Project; onClose: () => void }) {
  const [auto, setAuto] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => setLoaded(true), 400);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      clearTimeout(t);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-ink-950/95 backdrop-blur-xl flex flex-col animate-[fadeIn_0.2s_ease]">
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>

      {/* header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0">
        <div className="min-w-0">
          <p className="text-[10px] text-neon-400 font-medium uppercase tracking-widest">{project.category}</p>
          <h2 className="text-lg font-bold text-mist-100 truncate">{project.title}</h2>
        </div>
        <button
          onClick={onClose}
          className="glass-soft rounded-full p-2.5 active:scale-90 transition-transform shrink-0"
          aria-label="Close viewer"
        >
          <X className="w-5 h-5 text-mist-300" />
        </button>
      </div>

      {/* 3D stage */}
      <div className="relative flex-1 min-h-0 grid-bg">
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <ModelScene modelKey={project.modelKey} interactive autoRotate={auto} intensity="full" className="w-full h-full" />
          </Suspense>
        </div>

        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <RotateCw className="w-6 h-6 text-neon-400 animate-spin" />
            <span className="text-xs text-mist-400">Loading 3D model…</span>
          </div>
        )}

        {/* control bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-2 py-2 flex items-center gap-1">
          <button
            onClick={() => setAuto((v) => !v)}
            className={`rounded-full px-3 py-2 text-xs flex items-center gap-1.5 transition-colors ${auto ? 'text-neon-400 bg-neon-500/10' : 'text-mist-400'}`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            Auto
          </button>
          <div className="h-4 w-px bg-white/10" />
          <span className="px-3 py-2 text-xs text-mist-500 flex items-center gap-1.5">
            <Move className="w-3.5 h-3.5" />
            Drag / Pinch
          </span>
        </div>
      </div>

      {/* info panel */}
      <div className="shrink-0 px-5 pt-4 pb-6 max-h-[42vh] overflow-y-auto">
        <div className="rounded-xl border border-neon-500/20 bg-neon-500/5 px-4 py-4">
          <p className="mb-2 text-[10px] text-neon-400 uppercase tracking-widest">Project Description</p>
          <p className="text-sm text-mist-300 leading-relaxed">{project.description}</p>

          {project.documentationLink && (
            <a
              href={project.documentationLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-neon-500/40 bg-neon-500/10 px-3 py-2 text-xs font-medium text-neon-300 transition-colors hover:bg-neon-500/20"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Documentation
            </a>
          )}
        </div>

        <div className="mt-4">
          <p className="text-[10px] text-mist-500 uppercase tracking-widest mb-2">Tools Used</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="glass-soft rounded-full px-3 py-1.5 text-xs text-mist-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
