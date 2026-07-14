import { motion } from 'framer-motion';
import { IconCalendar, IconBolt, IconCircleCheck } from '@tabler/icons-react';

const projects = [
  {
    num: '01',
    title: 'BFI Finance — Big Data Platform',
    year: '2020',
    cat: 'Cloud / Big Data',
    color: '#38BDF8',
    gradient: 'from-sky-400/20 via-blue-500/10 to-transparent',
    desc: "Delivered BFI Finance's first cloud-native Big Data platform, independently, end-to-end.",
    highlights: ['First cloud Big Data platform for client', 'Real-time CDC implementation', 'On-premise → Cloud migration', 'Solo delivery under tight constraints'],
    tags: ['Alibaba Cloud EMR', 'Big Data', 'Data Works', 'CDC'],
    impact: "Modernised client's data infrastructure, enabling real-time analytics and faster business decisions.",
  },
  {
    num: '02',
    title: 'IndoRE — SAS IFRS17 Implementation',
    year: '2023',
    cat: 'Regulatory / Finance',
    color: '#A78BFA',
    gradient: 'from-violet-400/20 via-purple-500/10 to-transparent',
    desc: 'Full-stack IFRS17 delivery across Dev and Prod environments with strict OJK compliance.',
    highlights: ['OJK full compliance', 'Dev + Prod environments', 'Strict regulatory deadlines', 'Multi-team coordination'],
    tags: ['SAS IFRS17', 'SAS VIYA', 'Regulatory Compliance', 'Financial Reporting'],
    impact: 'Enabled timely 2024 regulatory reporting and streamlined financial workflows.',
  },
  {
    num: '03',
    title: 'Custom CMS & Web Apps',
    year: '2018',
    cat: 'Full-Stack Development',
    color: '#FB923C',
    gradient: 'from-orange-400/20 via-rose-500/10 to-transparent',
    desc: 'Built multiple production apps during internship — CMS, Sports Blog, and Inventory System.',
    highlights: ['Role-based access control', 'WYSIWYG editor integration', 'Real-time inventory tracking', 'Comment + search functionality'],
    tags: ['Laravel', 'MySQL', 'PHP', 'Bootstrap'],
    impact: 'Established foundational full-stack skills with production-grade delivery.',
  },
];

const Projects = () => (
  <section id="projects" className="py-24 bg-violet-soft dark:bg-[#0e0b1a] overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <div className="section-eyebrow">Case Studies</div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink dark:text-cream tracking-tight">
          Featured<br /><span className="text-violet-gradient">Projects</span>
        </h2>
      </motion.div>

      <div className="space-y-6">
        {projects.map((p, idx) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3 }}
            className="group rounded-3xl overflow-hidden bg-white dark:bg-white/4 border border-ink/6 dark:border-cream/6 transition-all duration-300 hover:shadow-2xl"
            style={{ '--hover-shadow': `0 20px 60px ${p.color}25` } as React.CSSProperties}
          >
            {/* Gradient top strip */}
            <div className={`h-1.5 bg-gradient-to-r ${p.gradient.replace('from-', 'from-').replace('/20', '').replace('/10', '/50')}`}
              style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}40)` }}
            />

            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-8">
                <div>
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-5xl font-bold text-ink/6 dark:text-cream/6 select-none leading-none">{p.num}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                          style={{ background: `${p.color}18`, color: p.color }}>
                          {p.cat}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[10px] text-ink/35 dark:text-cream/30">
                          <IconCalendar size={10} />{p.year}
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-xl text-ink dark:text-cream leading-tight">{p.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-ink/55 dark:text-cream/45 leading-relaxed mb-5">{p.desc}</p>

                  {/* Highlights */}
                  <div className="mb-5">
                    <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink/30 dark:text-cream/30 mb-2">
                      <IconBolt size={10} style={{ color: p.color }} />Key Highlights
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-ink/65 dark:text-cream/55">
                          <IconCircleCheck size={13} style={{ color: p.color }} className="shrink-0 mt-0.5" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: `${p.color}12`, color: p.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact panel */}
                <div className="rounded-2xl p-5 border flex flex-col justify-center"
                  style={{ borderColor: `${p.color}25`, background: `${p.color}06` }}>
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: p.color }}>Impact</p>
                  <p className="text-sm text-ink/70 dark:text-cream/60 leading-relaxed">{p.impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
