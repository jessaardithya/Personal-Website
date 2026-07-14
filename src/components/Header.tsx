import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { label: 'About',    href: '#hero' },
  { label: 'Stack',    href: '#tech-stack' },
  { label: 'Journey',  href: '#timeline' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog',     href: '#blog' },
  { label: 'Certs',    href: '#certifications' },
];

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      {/* Floating pill nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center justify-between gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 max-w-4xl w-full ${
          scrolled
            ? 'bg-cream/90 dark:bg-ink/90 backdrop-blur-xl border-violet/20 dark:border-violet-light/20 shadow-lg shadow-violet/10'
            : 'bg-cream/60 dark:bg-ink/60 backdrop-blur-md border-black/10 dark:border-white/10'
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="font-display font-extrabold text-[15px] text-ink dark:text-cream tracking-tight shrink-0">
          J<span className="text-violet">.</span>A<span className="text-violet">.</span>C
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="underline-draw px-3 py-1.5 text-[13px] font-medium text-ink/60 dark:text-cream/60 hover:text-ink dark:hover:text-cream transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-ink dark:text-cream hover:bg-violet/15 transition-colors text-sm"
            aria-label="Toggle theme"
          >
            {isDark ? '☀' : '☽'}
          </button>
          <a
            href="#contact"
            className="btn-violet hidden md:flex px-4 py-1.5 text-[13px]"
          >
            Hire me ↗
          </a>
          <button
            className="md:hidden w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-ink dark:text-cream"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="text-xs font-bold">{open ? '✕' : '≡'}</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-4 right-4 bg-cream dark:bg-ink border border-violet/20 rounded-3xl p-4 shadow-xl shadow-violet/15"
          >
            <div className="grid grid-cols-3 gap-2 mb-3">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-2 px-3 rounded-2xl text-xs font-semibold text-center text-ink dark:text-cream hover:bg-violet/10 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-violet justify-center w-full py-3 rounded-2xl text-sm"
            >
              Hire me ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
