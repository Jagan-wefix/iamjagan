import { useCallback, useState } from 'react';
import { HeroPremium } from '@/components/HeroPremium';
import { AboutPremium } from '@/components/AboutPremium';
import { SkillsPremium } from '@/components/SkillsPremium';
import { ProjectsPremium } from '@/components/ProjectsPremium';
import { Certificates } from '@/components/Certificates';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { BottomNav, useActiveSection } from '@/components/BottomNav';
import { ProjectViewer } from '@/components/ProjectViewer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { projects } from '@/three/data';

function App() {
  const [active, navigate] = useActiveSection();
  const [viewerProjectId, setViewerProjectId] = useState<string | null>(null);

  const openViewer = useCallback((id: string) => setViewerProjectId(id), []);
  const closeViewer = useCallback(() => setViewerProjectId(null), []);

  const viewerProject = viewerProjectId ? projects.find((p) => p.id === viewerProjectId) ?? null : null;

  return (
    <main className="relative w-full bg-ink-950 text-mist-100">
      <ScrollProgress />
      <Navigation />

      <div id="hero">
        <HeroPremium onCta={() => navigate('projects')} onContact={() => navigate('contact')} />
      </div>
      <div id="projects">
        <ProjectsPremium onViewProject={openViewer} />
      </div>
      <div id="skills">
        <SkillsPremium />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="about">
        <AboutPremium />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <BottomNav active={active} onNavigate={navigate} />

      {viewerProject && <ProjectViewer project={viewerProject} onClose={closeViewer} />}
    </main>
  );
}

export default App;
