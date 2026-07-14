import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconBriefcase, IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const events = [
  { id: 'synnex', year: 'Jun 2026 — Present', title: 'Strategic Presales — IBM Data & AI', org: 'PT. Synnex Metrodata Indonesia', num: '01',
    desc: 'Leading IBM Data & AI presales — technical demos, government sector focus, and product-market feedback.',
    wins: [
      'Delivered technical presentations & demos for Data and AI solutions, especially for Government sector',
      'Speaker & Demonstrator at IBM BOB ISV Luncheon (2 times)',
      'Technical bridge between Product team and prospective clients',
      'Provided direct feedback on market requirements, feature gaps, and pain points to influence product roadmap',
    ],
    tags: ['IBM Data & AI', 'Watsonx', 'Government', 'Pre-Sales'] },
  { id: 'presales', year: 'Jan 2024 — Jun 2026', title: 'Technical Sales Specialist (Pre-Sales)', org: 'PT. Blue Power Technology', num: '02',
    desc: 'Led pre-sales, expanded product portfolio, and drove significant revenue growth.',
    wins: [
      'Achieved 163% of the 2024 sales target',
      '4 new clients in 2024, 5 new clients in 2025',
      '5 POCs in 2024, 2 POCs in 2025 — supporting successful closures',
      'Integrated Couchbase, OceanBase, Teradata, and Alteryx into company portfolio',
      'Speaker at Couchbase Interactive Webinar (~50 attendees, generated 3 leads)',
      'Delivered Alteryx enablement training to 30 participants from 10 strategic partners',
    ],
    tags: ['Couchbase', 'OceanBase', 'Teradata', 'Alteryx', 'Pre-Sales'] },
  { id: 'postsales', year: 'Jul 2019 — Dec 2023', title: 'Technical Specialist (Post-Sales)', org: 'PT. Blue Power Technology', num: '03',
    desc: 'Enterprise implementation and customer success across IBM and SAS ecosystems.',
    wins: ['Multiple enterprise implementations delivered', 'IBM & SAS technology specialisation', 'Cloud migration project expertise', 'Strong client relationship management'],
    tags: ['IBM DataStage', 'SAS VIYA', 'Cloud Migration'] },
  { id: 'intern', year: '2018', title: 'Backend Developer Intern', org: 'PT. Lattice Teknologi Mandiri', num: '04',
    desc: 'First professional role — built production web apps with Laravel.',
    wins: ['Custom CMS with RBAC', 'Sports Blog Platform', 'Inventory Management System', 'Laravel + MySQL stack'],
    tags: ['Laravel', 'MySQL', 'PHP', 'Bootstrap'] },
];

const ProjectTimeline = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="timeline" className="py-24 bg-cream dark:bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="section-eyebrow">Work Experience</div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink dark:text-cream tracking-tight">
            Where I've<br /><span className="text-violet-gradient">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical thread */}
          <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-violet via-sky to-lime/50 opacity-30" />

          <div className="space-y-4">
            {events.map((ev, idx) => {
              const isOpen = open === ev.id;
              return (
                <motion.div
                  key={ev.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-5 w-[18px] h-[18px] rounded-full flex items-center justify-center z-10 ring-2 ring-cream dark:ring-ink bg-violet">
                    <IconBriefcase size={9} className="text-white" />
                  </div>

                  <button
                    className="w-full text-left group"
                    onClick={() => setOpen(isOpen ? null : ev.id)}
                  >
                    <div className={`rounded-2xl border transition-all duration-250 overflow-hidden ${
                      isOpen
                        ? 'border-violet/30 bg-violet/5 dark:bg-violet/8 shadow-lg shadow-violet/10'
                        : 'border-ink/8 dark:border-cream/8 bg-white dark:bg-white/4 hover:border-violet/20'
                    }`}>
                      <div className="flex items-start justify-between gap-3 p-4">
                        <div className="flex-1 min-w-0">
                          {/* Number + date */}
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="font-mono text-[10px] font-bold text-ink/20 dark:text-cream/20">{ev.num}</span>
                            <span className="font-mono text-[10px] text-ink/35 dark:text-cream/30">{ev.year}</span>
                          </div>
                          <p className="font-display font-bold text-[15px] text-ink dark:text-cream leading-snug">{ev.title}</p>
                          <p className="text-xs text-ink/40 dark:text-cream/35 mt-0.5">{ev.org}</p>
                          <p className="text-xs text-ink/50 dark:text-cream/35 mt-2 leading-relaxed">{ev.desc}</p>
                        </div>
                        <span className="text-ink/30 dark:text-cream/30 mt-1 shrink-0">
                          {isOpen ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                        </span>
                      </div>

                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="border-t border-ink/6 dark:border-cream/6 px-4 pb-4 pt-3 space-y-3"
                        >
                          <ul className="space-y-1.5">
                            {ev.wins.map((w) => (
                              <li key={w} className="flex items-start gap-2 text-xs text-ink/70 dark:text-cream/60">
                                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-violet" />
                                {w}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {ev.tags.map((t) => (
                              <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-ink/6 dark:bg-cream/8 text-ink/60 dark:text-cream/50">{t}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
