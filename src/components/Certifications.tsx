import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconAward, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const catColors: Record<string, string> = {
  IBM:          '#60A5FA',
  SAS:          '#34D399',
  Database:     '#A78BFA',
  Analytics:    '#FB923C',
  Professional: '#94A3B8',
};

const certs = [
  // IBM — Cloud Pak & Data Platform
  { name: 'IBM Cloud Pak for Data V3.5 Essentials',              cat: 'IBM' },
  { name: 'IBM Cloud Pak for Data V3.5 Administrator',           cat: 'IBM' },
  { name: 'IBM Cloud Pak for Data V3.5 Administration',          cat: 'IBM' },
  { name: 'IBM Cloud Pak for Data V3.5 Data Engineer',           cat: 'IBM' },
  { name: 'IBM Cloud Pak for Data V3.5 Data Access & Transformation', cat: 'IBM' },
  // IBM — DataStage & DB2
  { name: 'IBM DataStage V11.5.x on Cloud Infrastructure',       cat: 'IBM' },
  { name: 'IBM DataStage V11.5.x – Batch Processing',            cat: 'IBM' },
  { name: 'IBM DataStage V11.5.x – Combining Data',              cat: 'IBM' },
  { name: 'IBM Db2 LUW V11.x Foundation',                        cat: 'IBM' },
  { name: 'IBM Db2 LUW V11.x Advanced Database',                 cat: 'IBM' },
  // IBM — Infosphere & Data Governance
  { name: 'IBM Infosphere Data Replication V11.4.x Foundation',  cat: 'IBM' },
  { name: 'IBM Data Governance and Privacy Technical Sales Intermediate', cat: 'IBM' },
  { name: 'Master Data Management Sales Foundation',             cat: 'IBM' },
  // IBM — Informix
  { name: 'IBM Informix Technical Sales Intermediate',           cat: 'IBM' },
  { name: 'IBM Informix Sales Foundation',                       cat: 'IBM' },
  // IBM — Data Science
  { name: 'IBM Data Science Tools',                              cat: 'IBM' },
  { name: 'IBM Data Science Foundation – Level 1',               cat: 'IBM' },
  { name: 'IBM Data Science Methodology',                        cat: 'IBM' },
  { name: 'IBM Data Science for Business – Level 1',             cat: 'IBM' },
  // IBM — Customer 360
  { name: 'IBM Customer 360 Sales Foundation',                   cat: 'IBM' },
  { name: 'IBM Customer 360 Technical Sales Intermediate',       cat: 'IBM' },
  // IBM — Watsonx
  { name: 'IBM watsonx.data Technical Essentials',               cat: 'Watsonx' },
  { name: 'IBM watsonx.governance: Technical Essentials',        cat: 'Watsonx' },
  { name: 'watsonx.data Sales Foundation',                       cat: 'Watsonx' },
  { name: 'watsonx.data Technical Sales Intermediate',           cat: 'Watsonx' },
  { name: 'watsonx.data Intelligence Practitioner Advanced',     cat: 'Watsonx' },
  { name: 'IBM BOB Intermediate',                                cat: 'Watsonx' },
  { name: 'Maximo Application Suite Technical Sales Intermediate', cat: 'Watsonx' },
  // SAS
  { name: 'SAS Viya 3.5 Core Topics',                           cat: 'SAS' },
  { name: 'SAS Viya 3.5 Architecture Topics',                   cat: 'SAS' },
  { name: 'SAS Machine Learning using SAS Viya',                cat: 'SAS' },
  { name: 'SAS Visual Analytics 1 for SAS Viya: Basics',        cat: 'SAS' },
  { name: 'SAS DataFlux Management Studio: Fast Track (2.6)',   cat: 'SAS' },
  // Database
  { name: 'Teradata Vantage Fundamental',                        cat: 'Database' },
  { name: 'Teradata VantageCloud Lake',                          cat: 'Database' },
  { name: 'Teradata Vantage 2.4 with ClearScape',               cat: 'Database' },
  { name: 'Teradata Advanced SQL Engine 17.10',                  cat: 'Database' },
  { name: 'Couchbase Architecture Associated',                   cat: 'Database' },
  { name: 'OceanBase Database Associated',                       cat: 'Database' },
  // Analytics
  { name: 'Alteryx Foundation Micro-Credential',                 cat: 'Analytics' },
  { name: 'Alteryx Machine Learning Fundamentals Micro-Credential', cat: 'Analytics' },
  { name: 'Alteryx Auto Insights Micro-Credential',              cat: 'Analytics' },
  { name: 'Alteryx Designer Core Micro-Credential: General Knowledge', cat: 'Analytics' },
  { name: 'Alteryx Designer Core Micro-Credential: Data Preparation',  cat: 'Analytics' },
  { name: 'Alteryx Designer Core Micro-Credential: Data Manipulation', cat: 'Analytics' },
  { name: 'Alteryx Designer Core Micro-Credential: Data Transformation', cat: 'Analytics' },
  { name: 'Alteryx Designer Core',                               cat: 'Analytics' },
  { name: 'Alteryx Designer Advanced',                           cat: 'Analytics' },
  { name: 'Alteryx Server Administration',                       cat: 'Analytics' },
  { name: 'Alteryx Server Implementation',                       cat: 'Analytics' },
  // Professional
  { name: 'LSP for Web Programmer',                              cat: 'Professional' },
];

const allCats = ['All', 'IBM', 'SAS', 'Database', 'Analytics', 'Professional'];
const PER = 12;

const Certifications = () => {
  const [sel, setSel] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = sel === 'All' ? certs : certs.filter((c) => c.cat === sel);
  const total    = Math.ceil(filtered.length / PER);
  const current  = filtered.slice((page - 1) * PER, page * PER);

  const handleSel = (s: string) => { setSel(s); setPage(1); };

  return (
    <section id="certifications" className="py-24 bg-violet-soft dark:bg-[#0e0b1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="section-eyebrow">Credentials</div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink dark:text-cream tracking-tight">
            Professional<br /><span className="text-violet-gradient">Certifications</span>
          </h2>
          <p className="mt-3 text-ink/50 dark:text-cream/40 text-sm">{certs.length} certifications across leading enterprise platforms.</p>
        </motion.div>

        {/* Category filter with counts */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {allCats.map((c) => {
            const count = c === 'All' ? certs.length : certs.filter((x) => x.cat === c).length;
            const color = catColors[c] ?? '#94A3B8';
            const isActive = sel === c;
            return (
              <button key={c} onClick={() => handleSel(c)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 text-xs font-bold transition-all"
                style={{
                  borderColor: isActive ? color : `${color}30`,
                  background:  isActive ? color : `${color}10`,
                  color:       isActive ? '#0A0A0A' : color,
                  boxShadow:   isActive ? `0 4px 20px ${color}40` : undefined,
                }}
              >
                <IconAward size={12} />
                {c}
                <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-black ${isActive ? 'bg-black/20' : 'bg-current/10'}`}
                  style={{ background: isActive ? 'rgba(0,0,0,0.2)' : `${color}20` }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {current.map((cert, idx) => {
            const color = catColors[cert.cat] ?? '#94A3B8';
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, rotate: 0.5 }}
                className="flex items-start gap-3 rounded-2xl border bg-white dark:bg-white/4 p-4 transition-all"
                style={{ borderColor: `${color}25` }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
                  <IconAward size={17} style={{ color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-ink dark:text-cream leading-snug">{cert.name}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest" style={{ color }}>{cert.cat}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}
              className="p-2 rounded-full bg-ink/5 dark:bg-cream/8 text-ink/40 dark:text-cream/40 hover:bg-violet/15 hover:text-violet disabled:opacity-30 transition-colors">
              <IconChevronLeft size={16} />
            </button>
            {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
              <button key={n} onClick={() => setPage(n)}
                className={`w-9 h-9 rounded-full text-xs font-bold transition-all ${page === n ? 'pill-active' : 'text-ink/50 dark:text-cream/40 hover:bg-violet/15 hover:text-violet'}`}>
                {n}
              </button>
            ))}
            <button onClick={() => setPage((p) => p + 1)} disabled={page === total}
              className="p-2 rounded-full bg-ink/5 dark:bg-cream/8 text-ink/40 dark:text-cream/40 hover:bg-violet/15 hover:text-violet disabled:opacity-30 transition-colors">
              <IconChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
