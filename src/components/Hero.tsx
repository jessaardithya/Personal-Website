import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import profileImg from '../assets/latest_profile.jpg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;
const item = {
  hidden:  { opacity: 0, y: 50 },
  show:    { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' as const } },
} as const;

const skills = ['Data Solutions', 'Cloud Tech', 'Enterprise Software', 'Pre-Sales', 'AI & Watsonx'];

const Hero = () => (
  <section id="hero" className="relative min-h-screen overflow-hidden bg-cream dark:bg-ink pt-24 pb-16">

    {/* Animated background blobs */}
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] blob bg-violet/10 dark:bg-violet/15 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 0.95, 1.05, 1], x: [0, -20, 10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-15%] right-[-8%] w-[50vw] h-[50vw] blob-2 bg-sky/15 dark:bg-sky/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 0.96, 1], y: [0, -15, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[40%] left-[45%] w-[30vw] h-[30vw] blob bg-lime/10 dark:bg-lime/8 blur-2xl"
      />
    </div>

    {/* Decorative floating shapes */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      aria-hidden
      className="pointer-events-none absolute top-20 right-[8%] w-14 h-14 rounded-2xl border-2 border-violet/30 dark:border-violet-light/30 rotate-12 hidden lg:block"
    />
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden
      className="pointer-events-none absolute bottom-32 left-[6%] w-10 h-10 rounded-full bg-lime/40 dark:bg-lime/20 hidden lg:block"
    />

    <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center"
      >
        {/* Left — text */}
        <div className="space-y-7 order-2 lg:order-1">
          {/* Eyebrow */}
          <motion.div variants={item}>
            <div className="section-eyebrow">Currently @ Synnex Metrodata Indonesia</div>
          </motion.div>

          {/* Big name */}
          <motion.div variants={item}>
            <h1 className="font-display font-extrabold leading-[0.9] tracking-tighter text-ink dark:text-cream" style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}>
              Jessa<br />
              <span className="text-violet-gradient">Ardithya</span>
            </h1>
          </motion.div>

          {/* Role tag */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm text-ink/50 dark:text-cream/40">{'// '}</span>
            <span className="font-display text-xl font-semibold text-ink dark:text-cream">Technical Sales Specialist</span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={item} className="text-base text-ink/60 dark:text-cream/50 max-w-lg leading-relaxed">
            Technical sales professional specialising in data solutions, cloud technologies,
            and enterprise software. Proven track record translating complex technical capabilities
            into clear business value — from demos and POCs to end-to-end project delivery.
          </motion.p>

          {/* Skill pills */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span
                key={s}
                className="pill text-ink dark:text-cream border-ink/20 dark:border-cream/20 hover:bg-violet hover:!text-white hover:border-violet"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {s}
              </span>
            ))}
          </motion.div>

          {/* Contact row */}
          <motion.div variants={item} className="flex flex-wrap gap-4 text-sm text-ink/50 dark:text-cream/40 pt-1">
            <a href="mailto:jessaardithya@gmail.com" className="flex items-center gap-2 hover:text-violet transition-colors">
              <Mail size={14} className="text-violet" />
              jessaardithya@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-violet" />
              Jakarta, Indonesia
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/jessa-ardithya-chriswantoro-3a8971179/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-violet group px-6 py-3.5 text-sm hover:shadow-lg hover:shadow-violet/40 hover:scale-105"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-ink/50 dark:border-cream/20 text-ink dark:text-cream font-semibold text-sm hover:border-violet hover:text-violet dark:hover:text-violet-light transition-all hover:scale-105"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div variants={item} className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            {/* Blob bg behind photo */}
            <motion.div
              animate={{ rotate: [0, 5, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[-10%] blob bg-gradient-to-br from-violet/30 via-sky/20 to-lime/15 blur-xl"
            />
            {/* Photo container — asymmetric border radius */}
            <div
              className="relative w-64 sm:w-72 lg:w-[340px] aspect-square overflow-hidden border-4 border-cream dark:border-ink shadow-2xl"
              style={{ borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%' }}
            >
              <img
                src={profileImg}
                alt="Jessa Ardithya Chriswantoro"
                loading="eager"
                className="w-full h-full object-cover object-left-bottom scale-105 hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet/20 to-transparent" />
            </div>

            {/* Decorative badge */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-lime flex items-center justify-center shadow-md glow-lime rotate-12"
            >
              <span className="font-display text-ink text-[10px] font-bold text-center leading-tight">DATA<br/>WIZARD</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 lg:mt-24 pt-8 border-t border-ink/10 dark:border-cream/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
      >
        {[
          { value: '6+',   label: 'Years of experience',    color: 'text-violet' },
          { value: '40+',  label: 'Certifications earned',  color: 'text-sky' },
          { value: '163%', label: '2024 target achieved',   color: 'text-lime' },
          { value: '9',    label: 'New clients (2024–25)',   color: 'text-coral' },
        ].map(({ value, label, color }) => (
          <div key={label} className="space-y-1">
            <p className={`font-display text-4xl font-extrabold ${color}`}>{value}</p>
            <p className="text-xs text-ink/40 dark:text-cream/40 leading-snug">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
