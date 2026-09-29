import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Certificate } from '@/three/data';

export function CertificateViewer({ certificate, onClose }: { certificate: Certificate; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-ink-950/95 p-5 backdrop-blur-xl animate-[fadeIn_0.2s_ease]">
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-widest text-neon-400">Certificate image</p>
          <h2 className="truncate text-lg font-bold text-mist-100">{certificate.title}</h2>
        </div>
        <button onClick={onClose} className="glass-soft shrink-0 rounded-full p-2.5" aria-label="Close certificate">
          <X className="h-5 w-5 text-mist-300" />
        </button>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center py-6">
        <img src={certificate.image} alt={certificate.title} className="max-h-full max-w-full rounded-xl object-contain shadow-2xl" />
      </div>
    </div>
  );
}
