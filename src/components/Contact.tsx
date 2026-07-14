import { motion } from 'framer-motion';
import { IconMail, IconPhone, IconMapPin, IconBrandLinkedin, IconClock } from '@tabler/icons-react';

const links = [
  { icon: IconMail,           label: 'Email',        val: 'jessaardithya@gmail.com', href: 'mailto:jessaardithya@gmail.com' },
  { icon: IconPhone,          label: 'Phone',        val: '+62 8953-3324-8683',       href: 'tel:+6289533248683' },
  { icon: IconBrandLinkedin,  label: 'LinkedIn',     val: 'jessa-ardithya',           href: 'https://www.linkedin.com/in/jessa-ardithya-chriswantoro-3a8971179/', ext: true },
  { icon: IconMapPin,         label: 'Location',     val: 'Jakarta, Indonesia',       href: null },
  { icon: IconClock,          label: 'Availability', val: 'Open to opportunities',    href: null },
];

const Contact = () => (
  <section id="contact" className="py-24 bg-ink dark:bg-ink overflow-hidden relative">

    {/* Blobs on dark bg */}
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] blob bg-violet/15 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 0.95, 1], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-[-20%] right-[-5%] w-[45vw] h-[45vw] blob-2 bg-sky/10 blur-3xl"
      />
    </div>

    <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <div className="section-eyebrow">Get in touch</div>
        <h2 className="font-display font-extrabold text-cream tracking-tight leading-[0.9]" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
          Let's<br />
          <span className="text-violet-gradient">Connect</span>
        </h2>
        <p className="mt-5 text-cream/40 text-base max-w-md leading-relaxed">
          Interested in data solutions, enterprise tech, or potential collaboration? Let's talk.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3"
        >
          {links.map(({ icon: Icon, label, val, href, ext }) => {
            const inner = (
              <div className="flex items-center gap-4 group-hover:translate-x-1 transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-violet/20 flex items-center justify-center shrink-0 group-hover:bg-violet/35 transition-colors">
                  <Icon size={19} className="text-violet-light" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-cream/30 mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-cream">{val}</p>
                </div>
                {href && <span className="ml-auto text-cream/20 group-hover:text-violet-light transition-colors text-sm">↗</span>}
              </div>
            );
            return href ? (
              <a key={label} href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group block rounded-2xl border border-cream/8 bg-cream/4 hover:border-violet/30 hover:bg-violet/8 p-4 transition-all">
                {inner}
              </a>
            ) : (
              <div key={label} className="rounded-2xl border border-cream/8 bg-cream/4 p-4">{inner}</div>
            );
          })}
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-violet/20 bg-violet/8 p-8 flex flex-col justify-between glow-violet"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-violet/20 flex items-center justify-center mb-5">
              <span className="text-2xl">👋</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-cream mb-3">Jessa Ardithya</h3>
            <p className="text-sm text-cream/50 leading-relaxed mb-6">
              Strategic Presales at PT. Synnex Metrodata Indonesia — 6+ years turning complex enterprise data technologies into real business outcomes.
            </p>
            <div className="space-y-2.5 mb-8">
              {[
                ['Role',          'Strategic Presales'],
                ['Company',       'PT. Synnex Metrodata Indonesia'],
                ['Experience',    '6+ Years'],
                ['Specialisation','IBM Data & AI Solutions'],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between items-baseline gap-4 pb-2 border-b border-cream/6">
                  <span className="text-xs text-cream/30">{l}</span>
                  <span className="text-xs font-semibold text-cream/80 text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <a
            href="mailto:jessaardithya@gmail.com"
            className="btn-violet justify-center w-full py-4 rounded-2xl hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] text-sm"
          >
            <IconMail size={16} />
            Send a Message
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
