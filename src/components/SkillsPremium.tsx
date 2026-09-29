import { Cpu, Code, Cog, Zap, Database, Layers } from 'lucide-react';
import { PremiumSectionHeading } from './PremiumSectionHeading';
import { Reveal } from './Reveal';

const skillCategories = [
  {
    icon: Cog,
    category: '3D CAD & Mechanical Design',
    color: 'from-blue-500/20 to-blue-500/5',
    borderColor: 'border-blue-500/30 hover:border-blue-500/50',
    textColor: 'text-blue-400',
    skills: ['SolidWorks', 'AutoCAD', 'Fusion360', '3D Modeling', 'Assembly Design', 'Mechanism Design', 'Engineering Drawings', 'GD&T'],
  },
  {
    icon: Layers,
    category: 'Product Development',
    color: 'from-green-500/20 to-green-500/5',
    borderColor: 'border-green-500/30 hover:border-green-500/50',
    textColor: 'text-green-400',
    skills: ['Concept Development', 'Design Iteration', 'DFM/DFA', 'Prototyping', 'Product Packaging', 'Design Validation', 'Mechanical Components'],
  },
  {
    icon: Database,
    category: 'Simulation & Engineering Analysis',
    color: 'from-red-500/20 to-red-500/5',
    borderColor: 'border-red-500/30 hover:border-red-500/50',
    textColor: 'text-red-400',
    skills: ['ANSYS Workbench', 'Structural Analysis', 'Thermal Analysis', 'Design Validation'],
  },
  {
    icon: Zap,
    category: 'Robotics & Automation',
    color: 'from-purple-500/20 to-purple-500/5',
    borderColor: 'border-purple-500/30 hover:border-purple-500/50',
    textColor: 'text-purple-400',
    skills: ['Robotics', 'ROS 2', 'Automation', 'Sensors', 'Electromechanical Systems'],
  },
  {
    icon: Cpu,
    category: 'Electronics & IoT',
    color: 'from-orange-500/20 to-orange-500/5',
    borderColor: 'border-orange-500/30 hover:border-orange-500/50',
    textColor: 'text-orange-400',
    skills: ['Sensors', 'Embedded Systems', 'IoT', 'Circuit Integration'],
  },
  {
    icon: Code,
    category: 'Programming for Engineering',
    color: 'from-cyan-500/20 to-cyan-500/5',
    borderColor: 'border-cyan-500/30 hover:border-cyan-500/50',
    textColor: 'text-cyan-400',
    skills: ['Python', 'MATLAB', 'Automation Scripts', 'ROS 2', 'Engineering Tools'],
  },
];

export function SkillsPremium() {
  return (
    <section className="snap-section relative w-full py-20 md:py-32 px-6 bg-gradient-to-b from-ink-900 to-ink-950">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <PremiumSectionHeading
            label="SUPPORTING SKILLS"
            title="Engineering Capabilities"
            description="Mechanical design and product development, supported by simulation, electronics, robotics, and automation."
          />
        </Reveal>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Reveal key={category.category} delay={100 + idx * 50}>
              <div
                className={`group rounded-2xl border ${category.borderColor} bg-gradient-to-br ${category.color} p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-neon-500/20 border border-neon-500/30`}>
                    <category.icon className={`w-6 h-6 ${category.textColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-mist-100">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-neon-500/20 border border-neon-500/30 text-xs font-medium text-neon-400 hover:bg-neon-500/30 hover:border-neon-500/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tech stack summary */}
        <Reveal delay={400} className="mt-16">
          <div className="rounded-2xl border border-neon-500/20 bg-gradient-to-br from-neon-500/10 to-neon-500/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-mist-100 mb-6">Mechanical design with system-level understanding</h3>
            <p className="text-base md:text-lg text-mist-400 leading-relaxed max-w-3xl">
              I approach a product from the mechanism outward — how it moves, how components interact, how it is manufactured, and how sensors and actuators integrate into the final system. My core strength is mechanical design, supported by practical knowledge of electronics, robotics, automation, and simulation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
