import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconCode, IconDatabase, IconCloud, IconSettings, IconServer, IconBolt } from '@tabler/icons-react';
import type { Icon as TablerIcon } from '@tabler/icons-react';

interface Node {
  id: string; name: string; exp: string; color: string; bg: string;
  icon: TablerIcon; techs: string[]; projects: string[];
}

const nodes: Node[] = [
  { id: 'frontend', name: 'Frontend',         exp: '3+ yrs', color: '#60A5FA', bg: 'rgba(96,165,250,0.12)',
    icon: IconCode,     techs: ['React.js', 'JavaScript', 'HTML/CSS'], projects: ['Custom CMS', 'Sports Blog'] },
  { id: 'backend',  name: 'Backend',          exp: '5+ yrs', color: '#34D399', bg: 'rgba(52,211,153,0.12)',
    icon: IconServer,   techs: ['PHP (Laravel)', 'Node.js', 'Python', 'Java'], projects: ['Custom CMS', 'BFI Finance'] },
  { id: 'database', name: 'Databases',        exp: '5+ yrs', color: '#A78BFA', bg: 'rgba(167,139,250,0.12)',
    icon: IconDatabase, techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'IBM DB2', 'Couchbase', 'OceanBase'], projects: ['BFI Finance', 'IndoRE IFRS17'] },
  { id: 'cloud',    name: 'Cloud & Analytics',exp: '4+ yrs', color: '#38BDF8', bg: 'rgba(56,189,248,0.12)',
    icon: IconCloud,    techs: ['SAS VIYA', 'Alibaba Cloud EMR', 'IBM Watson', 'Teradata'], projects: ['BFI Finance Big Data', 'IndoRE'] },
  { id: 'devops',   name: 'DevOps',           exp: '3+ yrs', color: '#FB923C', bg: 'rgba(251,146,60,0.12)',
    icon: IconSettings, techs: ['Docker', 'Kubernetes', 'IBM DataStage', 'dbt', 'Airbyte'], projects: ['Enterprise Impls'] },
  { id: 'analytics',name: 'Analytics',        exp: '4+ yrs', color: '#F472B6', bg: 'rgba(244,114,182,0.12)',
    icon: IconBolt,     techs: ['IBM Cognos', 'Tableau', 'Alteryx', 'SAS Analytics'], projects: ['IndoRE IFRS17', 'BI Solutions'] },
];

const TechStackVisualizer = () => {
  const [active, setActive] = useState<string | null>(null);
  const sel = nodes.find((n) => n.id === active) ?? null;

  return (
    <section id="tech-stack" className="py-24 bg-violet-soft dark:bg-[#0e0b1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="section-eyebrow">Technology Ecosystem</div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink dark:text-cream tracking-tight leading-tight">
              My Tech<br /><span className="text-violet-gradient">Stack</span>
            </h2>
          </div>
          <p className="text-sm text-ink/50 dark:text-cream/40 max-w-xs">
            Click any domain card to dive into the technologies and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* Card grid — intentionally uneven */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isActive = active === node.id;
              return (
                <motion.button
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, rotate: isActive ? 0 : 1 }}
                  onClick={() => setActive(isActive ? null : node.id)}
                  className={`text-left p-5 rounded-3xl border-2 transition-all duration-250 focus:outline-none ${
                    isActive
                      ? 'border-violet bg-violet/10 dark:bg-violet/15 shadow-lg shadow-violet/20'
                      : 'border-transparent bg-white dark:bg-white/5 hover:border-violet/30'
                  }`}
                  style={{ boxShadow: isActive ? `0 0 0 2px ${node.color}40, 0 12px 40px ${node.color}25` : undefined }}
                >
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3" style={{ background: node.bg }}>
                    <Icon size={22} style={{ color: node.color }} />
                  </div>
                  <p className="font-display font-bold text-sm text-ink dark:text-cream leading-tight">{node.name}</p>
                  <p className="font-mono text-[10px] text-ink/40 dark:text-cream/30 mt-1">{node.exp}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {node.techs.slice(0, 2).map((t) => (
                      <span key={t} className="text-[9px] px-2 py-0.5 rounded-full bg-ink/6 dark:bg-cream/8 text-ink/60 dark:text-cream/50 font-medium">{t}</span>
                    ))}
                    {node.techs.length > 2 && (
                      <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: node.bg, color: node.color }}>+{node.techs.length - 2}</span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Details panel */}
          <div className="lg:sticky lg:top-24">
            {sel ? (
              <motion.div
                key={sel.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl p-6 bg-white dark:bg-white/5 border-2 shadow-lg"
                style={{ borderColor: `${sel.color}50`, boxShadow: `0 12px 50px ${sel.color}20` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: sel.bg }}>
                    <sel.icon size={28} style={{ color: sel.color }} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-ink dark:text-cream">{sel.name}</h3>
                    <span className="font-mono text-xs" style={{ color: sel.color }}>{sel.exp} experience</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink/30 dark:text-cream/30 mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {sel.techs.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: sel.bg, color: sel.color }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink/30 dark:text-cream/30 mb-2">Projects</p>
                    <ul className="space-y-1.5">
                      {sel.projects.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-ink dark:text-cream">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: sel.color }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="rounded-3xl p-8 bg-white dark:bg-white/5 border-2 border-dashed border-ink/10 dark:border-cream/10 text-center">
                <div className="text-4xl mb-3">🗂️</div>
                <p className="font-display font-bold text-ink dark:text-cream text-lg">Pick a domain</p>
                <p className="text-sm text-ink/40 dark:text-cream/30 mt-1">Click any card to explore technologies and projects.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackVisualizer;
