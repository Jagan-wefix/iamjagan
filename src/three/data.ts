import type { ModelKey } from './Models';

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  modelKey: ModelKey;
  thumbnail: string;
  documentationLink?: string;
};

export function createProject(project: Project): Project {
  return project;
}

export const projects: Project[] = [
    createProject({
    id: 'eas-tag-internal-mechanism',
    title: 'EAS Internal Mechanism Redesign — Automated Unlocking',
    category: 'Product CAD Design',
    description: 'Redesigned the internal mechanical mechanism of an EAS security tag for automated unlocking after payment verification. Combined mechanical motion, electromagnetic actuation, embedded control, and 3D-printed prototyping to develop and iterate the mechanism.',
    tools: ['SolidWorks', 'Mechanism Design', 'Electromechanical', 'Prototyping', 'Automation'],
    modelKey: 'eas-tag-internal-mechanism',
    thumbnail: 'https://res.cloudinary.com/dkyvctkhf/image/upload/v1790671941/a6vtl4km71xh6idr8shb.png',
    documentationLink: 'https://drive.google.com/file/d/1GQG_MJbCBpvyAOWaKdri6X4OQD118qaT/view',
  }),
    createProject({
    id: 'urinal-assembly',
    title: 'Automated Urinal Cleaning System — Mechanism Design',
    category: 'Product CAD Design',
    description: 'Conceptual cleaning mechanism designed around a guided two-wheel system that grips the urinal edges and traverses the surface while a rotating brush performs cleaning. Developed with focus on mechanism motion, contact, stability, brush positioning, and compact mechanical packaging.',
    tools: ['SolidWorks', 'Mechanism Design', 'Motion', 'Product Design', 'Automation'],
    modelKey: 'urinal-assembly',
    thumbnail: 'https://res.cloudinary.com/dkyvctkhf/image/upload/v1790054325/otax5bovisvckeyjfszx.png',
    documentationLink: 'https://drive.google.com/file/d/1rp1FMnhTvoETQcmQHNayxEV71WiRgncb/view',
  }),
  createProject({
    id: 'drone-scout',
    title: 'Tethered Paint-Spraying Drone — Concept Development',
    category: 'Drones',
    description: '3D CAD concept for a tethered aerial painting system with ground-based paint delivery. Designed around a lightweight no-payload/no-battery architecture, integrating mechanical structure, fluid delivery, spray positioning, and aerodynamic considerations.',
    tools: ['SolidWorks', 'Mechanical Design', 'Concept Development', 'Fluid Systems', 'Aerodynamics'],
    modelKey: 'quadcopter',
    thumbnail: 'https://res.cloudinary.com/dkyvctkhf/image/upload/v1790054568/pdxiymq1s35pw3nih2gh.png',
    documentationLink: 'https://example.com/tethered-paint-spraying-drone',
  })
];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'certificate' | 'achievement';
  icon: string;
  image: string;
};

export function createCertificate(certificate: Certificate): Certificate {
  return certificate;
}

export const certificates: Certificate[] = [
  createCertificate({
    id: 'solidworks-course',
    title: 'SOLIDWORKS Course',
    issuer: 'Udemy',
    year: '—',
    category: 'certificate',
    icon: 'badge-check',
    image: 'https://res.cloudinary.com/dkyvctkhf/image/upload/v1790052156/xyaz1mnnphmmstz4avzp.jpg',
  }),
  createCertificate({
    id: 'gdt-course',
    title: 'GD&T Course',
    issuer: 'Udemy',
    year: '—',
    category: 'certificate',
    icon: 'award',
    image: 'https://res.cloudinary.com/dkyvctkhf/image/upload/v1790051973/s1t5dk23bv7wqdbjlfgf.jpg',
  }),
  createCertificate({
    id: 'ros2-course',
    title: 'ROS2 Course',
    issuer: 'Udemy',
    year: '—',
    category: 'certificate',
    icon: 'wind',
    image: 'https://res.cloudinary.com/dkyvctkhf/image/upload/v1790052083/mdyai5olei5ku7gxzyfl.jpg',
  }),
  createCertificate({
    id: 'innovation-fest',
    title: 'First Prize — Innovation Fest',
    issuer: 'MSEC',
    year: '—',
    category: 'achievement',
    icon: 'trophy',
    image: 'https://res.cloudinary.com/dkyvctkhf/image/upload/v1790053790/plm4iwjvmzbhtvz9tl1f.jpg',
  }),
  createCertificate({
    id: 'incepta-hack',
    title: 'Runner-Up — Incepta Hack',
    issuer: 'Internal Hackathon, MSEC · Ed-Tech LMS Project',
    year: '—',
    category: 'achievement',
    icon: 'rocket',
    image: 'https://res.cloudinary.com/dkyvctkhf/image/upload/v1790053794/wzrqwxiowame1q86jbwa.jpg',
  }),
  createCertificate({
    id: 'sae-bicycle',
    title: 'Participant — SAE India Bicycle Competition',
    issuer: 'SAE India',
    year: '—',
    category: 'achievement',
    icon: 'award',
    image: 'https://res.cloudinary.com/dkyvctkhf/image/upload/v1790053807/ohk4hwomuhniueks8hzz.jpg',
  }),
   createCertificate({
    id: 'robotics-coordinator',
    title: 'Overall Coordinator — Robotics Club',
    issuer: 'MSEC',
    year: '2025–2026',
    category: 'achievement',
    icon: 'target',
    image: '/images/certificates/robotics-coordinator.svg',
  }),
  createCertificate({
    id: 'sih-2024',
    title: 'Participant — SIH 2024',
    issuer: 'LMS-based project',
    year: '2024',
    category: 'achievement',
    icon: 'file-text',
    image: '/images/certificates/sih-2024.svg',
  }),
  createCertificate({
    id: 'sih-2025',
    title: 'Participant — SIH 2025',
    issuer: 'Smart tourism-based project',
    year: '2025',
    category: 'achievement',
    icon: 'globe',
    image: '/images/certificates/sih-2025.svg',
  }),
];

export type SkillGroup = {
  name: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: 'Mechanical',
    icon: 'cog',
    skills: ['SolidWorks', 'AutoCAD', 'ANSYS', 'Fusion 360'],
  },
  {
    name: 'Programming',
    icon: 'code',
    skills: ['C++', 'Python', 'JavaScript', 'MATLAB'],
  },
  {
    name: 'Web',
    icon: 'globe',
    skills: ['React', 'Firebase', 'Three.js', 'Tailwind'],
  },
];
