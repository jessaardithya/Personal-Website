import { motion } from 'framer-motion';

const cats = [
  { name: 'Programming Languages', color: '#60A5FA', emoji: '⌨️',
    skills: ['PHP (Laravel)', 'JavaScript', 'React.js', 'Node.js', 'Python', 'Java', 'HTML/CSS'] },
  { name: 'Databases', color: '#A78BFA', emoji: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'IBM DB2', 'MSSQL', 'Couchbase', 'OceanBase'] },
  { name: 'Data Warehouse', color: '#38BDF8', emoji: '🏗️',
    skills: ['Teradata Vantage', 'IBM DB2 Warehouse', 'Alibaba Cloud EMR'] },
  { name: 'Analytics Platforms', color: '#34D399', emoji: '📊',
    skills: ['SAS VIYA', 'SAS Analytics Pro', 'SAS Data Management', 'SAS Fraud Management', 'SAS IFRS17', 'IBM Cognos Analytics', 'Tableau', 'Alteryx'] },
  { name: 'IBM AI & Data', color: '#F472B6', emoji: '🤖',
    skills: ['Watsonx.ai', 'Watsonx.data', 'Watsonx.data Integration', 'Watsonx.data Intelligence', 'IBM Watson Studio', 'IBM Watson Machine Learning', 'IBM DataStage'] },
  { name: 'DevOps & Tools', color: '#FB923C', emoji: '🔧',
    skills: ['Docker', 'Kubernetes', 'dbt', 'Airbyte', 'IBM Change Data Capture', 'IBM Cognos Analytics'] },
];

const Skills = () => (
  <section id="skills" className="py-24 bg-cream dark:bg-ink overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <div>
          <div className="section-eyebrow">Expertise</div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink dark:text-cream tracking-tight">
            Technical<br /><span className="text-violet-gradient">Skills</span>
          </h2>
        </div>
        <p className="text-sm text-ink/50 dark:text-cream/40 max-w-xs">
          A broad stack spanning languages, databases, cloud platforms, and AI analytics tooling.
        </p>
      </motion.div>

      {/* Skill categories */}
      <div className="space-y-10">
        {cats.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, x: ci % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row sm:items-start gap-5"
          >
            {/* Label */}
            <div className="sm:w-52 shrink-0">
              <div className="inline-flex items-center gap-2">
                <span className="text-2xl">{cat.emoji}</span>
                <span className="font-display font-bold text-sm text-ink dark:text-cream leading-tight">{cat.name}</span>
              </div>
            </div>

            {/* Pills — flowing, no rigid grid */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: si * 0.04 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="px-3.5 py-2 rounded-full text-sm font-semibold border-2 transition-all cursor-default"
                  style={{
                    borderColor: `${cat.color}30`,
                    background: `${cat.color}10`,
                    color: cat.color,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom marquee */}
      <div className="mt-16 overflow-hidden -mx-5 sm:-mx-8">
        <div className="marquee-track">
          {[...cats.flatMap((c) => c.skills), ...cats.flatMap((c) => c.skills)].map((s, i) => (
            <span key={i} className="mx-4 font-display font-bold text-3xl sm:text-4xl text-ink/5 dark:text-cream/5 whitespace-nowrap">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
