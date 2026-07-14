import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const posts = [
  { id: 1, title: 'The Future of AI in Enterprise Data Analytics', cat: 'AI & Analytics', date: 'Dec 15, 2024', read: '7 min',
    tags: ['AI', 'Enterprise Analytics', 'BI'],
    excerpt: 'How AI is revolutionising BI and data-driven decisions in large organisations.',
    body: `AI is transforming enterprise analytics from static reports to intelligent, real-time systems.

**Automated Insights**: IBM Cognos and SAS VIYA now surface anomalies and trends without manual analysis.

**Natural Language Queries**: Business users query data in plain English — no SQL required.

**Real-time Processing**: ML models on live data streams enable split-second decisions in finance and manufacturing.

In the BFI Finance Big Data project, cloud-native AI transformed batch pipelines into intelligent real-time systems.` },
  { id: 2, title: 'Machine Learning in Database Optimisation', cat: 'Database', date: 'Dec 10, 2024', read: '6 min',
    tags: ['ML', 'Database', 'Performance'],
    excerpt: 'How ML algorithms auto-tune databases, predict scaling needs, and optimise queries.',
    body: `Modern databases are becoming self-managing through machine learning.

**Automated Tuning**: OceanBase and advanced Postgres distros continuously adjust indexes and memory allocation.

**Predictive Scaling**: Cloud databases learn usage patterns and pre-scale before peak loads hit.

**Intelligent Query Plans**: ML optimisers outperform rule-based approaches by analysing execution patterns.

Enterprise IBM Db2 and Couchbase deployments show significant gains when ML optimisation is properly configured.` },
  { id: 3, title: 'AI-Powered Data Integration: Beyond Traditional ETL', cat: 'Data Integration', date: 'Dec 5, 2024', read: '8 min',
    tags: ['ETL', 'Data Integration', 'AI'],
    excerpt: 'AI automates schema mapping, data quality checks, and transformation logic.',
    body: `Traditional ETL is evolving into intelligent, self-adapting integration.

**Smart Schema Mapping**: AI auto-detects source-to-target relationships, slashing integration timelines.

**Automated Quality Checks**: ML learns data patterns and flags anomalies without predefined rules.

**Self-Healing Pipelines**: Systems auto-recover from failures and adapt when source schemas change.

The IndoRE IFRS17 project leveraged SAS VIYA's AI-driven quality checks to maintain compliance across multiple data sources.` },
  { id: 4, title: 'Conversational AI for Business Intelligence', cat: 'Business Intelligence', date: 'Nov 28, 2024', read: '6 min',
    tags: ['Conversational AI', 'NLP', 'BI'],
    excerpt: 'NLP interfaces let non-technical users query complex data with plain English.',
    body: `Conversational AI is democratising data access across organisations.

**Plain English Queries**: BI platforms auto-generate SQL, charts, and reports from natural language questions.

**Context Retention**: AI maintains conversation history so users can drill down without restating context.

**Insight Narration**: Automated explanations make complex analytics accessible to business stakeholders.

IBM Cognos and Tableau's conversational features have dramatically improved user adoption in enterprise rollouts.` },
  { id: 5, title: 'AI Ethics in Enterprise Data Management', cat: 'AI Ethics', date: 'Nov 20, 2024', read: '9 min',
    tags: ['AI Ethics', 'Governance', 'Compliance'],
    excerpt: 'Responsible AI deployment requires governance, explainability, and bias mitigation.',
    body: `Enterprise AI brings opportunity and ethical responsibility in equal measure.

**Privacy by Design**: Federated learning and differential privacy enable AI without compromising personal data.

**Bias Auditing**: Regular model reviews and diverse training data are critical for equitable systems.

**Explainability**: Regulated industries demand transparent AI — interpretability tools are now non-negotiable.

The IndoRE IFRS17 project required a comprehensive AI governance framework to satisfy OJK requirements.` },
];

const cats = ['All', 'AI & Analytics', 'Database', 'Data Integration', 'Business Intelligence', 'AI Ethics'];
const PER = 3;

const Blog = () => {
  const [cat, setCat]   = useState('All');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<number | null>(null);

  const filtered = cat === 'All' ? posts : posts.filter((p) => p.cat === cat);
  const total    = Math.ceil(filtered.length / PER);
  const current  = filtered.slice((page - 1) * PER, page * PER);

  const handleCat = (c: string) => { setCat(c); setPage(1); setOpen(null); };
  const handlePage = (p: number) => { setPage(p); setOpen(null); };

  return (
    <section id="blog" className="py-24 bg-cream dark:bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="section-eyebrow">Writing</div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink dark:text-cream tracking-tight">
            Technical<br /><span className="text-violet-gradient">Insights</span>
          </h2>
        </motion.div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {cats.map((c) => (
            <button key={c} onClick={() => handleCat(c)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                cat === c
                  ? 'pill-active'
                  : 'bg-ink/5 dark:bg-cream/8 text-ink/60 dark:text-cream/50 hover:bg-violet/15 hover:text-violet'
              }`}
            >{c}</button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {current.map((post, idx) => {
            const isOpen = open === post.id;
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-violet/30 bg-violet/4 dark:bg-violet/8 shadow-xl shadow-violet/10'
                    : 'border-ink/8 dark:border-cream/8 bg-white dark:bg-white/4 hover:border-violet/20'
                }`}
              >
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-[11px] font-mono text-ink/35 dark:text-cream/30">
                    <span className="px-2.5 py-0.5 rounded-full bg-violet/10 text-violet font-semibold">{post.cat}</span>
                    <span>{post.date}</span>
                    <span>{post.read} read</span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-ink dark:text-cream mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-ink/55 dark:text-cream/40 leading-relaxed">{post.excerpt}</p>

                  {/* Expanded */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.35 }}
                      className="mt-5 pt-5 border-t border-ink/6 dark:border-cream/6 space-y-3 text-sm text-ink/65 dark:text-cream/55 leading-relaxed"
                    >
                      {post.body.split('\n\n').map((para, i) => (
                        <p key={i}>
                          {para.split('**').map((chunk, ci) =>
                            ci % 2 === 1
                              ? <strong key={ci} className="font-bold text-ink dark:text-cream">{chunk}</strong>
                              : chunk
                          )}
                        </p>
                      ))}
                    </motion.div>
                  )}

                  {/* Tags + CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-ink/5 dark:bg-cream/8 text-ink/50 dark:text-cream/40">{t}</span>
                      ))}
                    </div>
                    <button
                      onClick={() => setOpen(isOpen ? null : post.id)}
                      className="flex items-center gap-1.5 text-xs font-bold text-violet hover:text-violet-dark transition-colors"
                    >
                      {isOpen ? 'Collapse' : 'Read more'}
                      <IconArrowRight size={13} className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Pagination */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button onClick={() => handlePage(page - 1)} disabled={page === 1}
              className="p-2 rounded-full bg-ink/5 dark:bg-cream/8 text-ink/40 dark:text-cream/40 hover:bg-violet/15 hover:text-violet disabled:opacity-30 transition-colors">
              <IconChevronLeft size={16} />
            </button>
            {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
              <button key={n} onClick={() => handlePage(n)}
                className={`w-9 h-9 rounded-full text-xs font-bold transition-all ${page === n ? 'pill-active' : 'text-ink/50 dark:text-cream/40 hover:bg-violet/15 hover:text-violet'}`}>
                {n}
              </button>
            ))}
            <button onClick={() => handlePage(page + 1)} disabled={page === total}
              className="p-2 rounded-full bg-ink/5 dark:bg-cream/8 text-ink/40 dark:text-cream/40 hover:bg-violet/15 hover:text-violet disabled:opacity-30 transition-colors">
              <IconChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
