import { motion } from 'framer-motion';
import { IconSchool, IconMapPin, IconCalendar, IconStar } from '@tabler/icons-react';

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Universitas Bina Nusantara Online Learning',
    loc: 'Jakarta',
    period: 'Jul 2021 — May 2025',
    honor: 'Magna Cum Laude — GPA 3.78',
  },
  {
    degree: 'Software Engineering',
    school: 'SMK Wikrama Bogor',
    loc: 'Bogor',
    period: '2016 — 2019',
    honor: null,
  },
];

const Education = () => (
  <section id="education" className="py-24 bg-violet-soft dark:bg-[#0e0b1a]">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <div className="section-eyebrow">Academic Background</div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink dark:text-cream tracking-tight">Education</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, rotate: -0.5 }}
            className="card-lift rounded-3xl p-6 bg-white dark:bg-white/5 border border-ink/8 dark:border-cream/8"
          >
            <div className="w-12 h-12 rounded-2xl bg-violet/10 flex items-center justify-center mb-4">
              <IconSchool size={24} className="text-violet" />
            </div>
            <p className="font-display font-extrabold text-xl text-ink dark:text-cream leading-tight">{e.degree}</p>
            <p className="mt-1 text-sm font-semibold text-ink/60 dark:text-cream/50">{e.school}</p>
            <div className="mt-4 flex flex-col gap-1 text-xs text-ink/40 dark:text-cream/30">
              <span className="flex items-center gap-1.5"><IconMapPin size={12} className="text-violet" />{e.loc}, Indonesia</span>
              <span className="flex items-center gap-1.5"><IconCalendar size={12} className="text-violet" />{e.period}</span>
            </div>
            {e.honor && (
              <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-2xl bg-violet/10 border border-violet/20">
                <IconStar size={14} className="text-violet shrink-0" />
                <span className="text-xs font-bold text-violet dark:text-violet-light">{e.honor}</span>
              </div>
            )}
            {!e.honor && (
              <div className="mt-4">
                <span className="pill text-emerald-600 dark:text-emerald-400 border-emerald-400/40 text-[10px]">✓ Completed</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
