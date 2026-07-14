import { IconBrandLinkedin, IconMail, IconArrowUp } from '@tabler/icons-react';

const marqueeItems = [
  'Data Solutions', 'Cloud Analytics', 'Enterprise Software',
  'Technical Sales', 'SAS VIYA', 'IBM Cloud', 'Alibaba Cloud',
  'Pre-Sales', 'Couchbase', 'OceanBase', 'Teradata', 'Alteryx',
];

const Footer = () => (
  <footer className="bg-ink border-t border-cream/8 overflow-hidden">

    {/* Marquee strip */}
    <div className="border-b border-cream/8 py-3 overflow-hidden">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="mx-6 font-display font-bold text-sm text-cream/15 whitespace-nowrap">
            {item}
            <span className="mx-6 text-violet/40">·</span>
          </span>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <a href="#hero" className="font-display font-extrabold text-xl text-cream tracking-tight">
            J<span className="text-violet">.</span>A<span className="text-violet">.</span>C
          </a>
          <p className="text-xs text-cream/30 mt-1.5 max-w-xs leading-relaxed">
            Technical Sales Specialist — bridging enterprise data tech and business value since 2019.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2.5">
          <a href="mailto:jessaardithya@gmail.com"
            className="w-10 h-10 rounded-2xl border border-cream/10 bg-cream/4 hover:bg-violet/20 hover:border-violet/30 flex items-center justify-center text-cream/40 hover:text-violet-light transition-all"
            aria-label="Email">
            <IconMail size={16} />
          </a>
          <a href="https://www.linkedin.com/in/jessa-ardithya-chriswantoro-3a8971179/"
            target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-2xl border border-cream/10 bg-cream/4 hover:bg-violet/20 hover:border-violet/30 flex items-center justify-center text-cream/40 hover:text-violet-light transition-all"
            aria-label="LinkedIn">
            <IconBrandLinkedin size={16} />
          </a>
          <a href="#hero"
            className="w-10 h-10 rounded-2xl border border-cream/10 bg-cream/4 hover:bg-violet/20 hover:border-violet/30 flex items-center justify-center text-cream/40 hover:text-violet-light transition-all"
            aria-label="Back to top">
            <IconArrowUp size={16} />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-cream/6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[10px] text-cream/20">
          © 2025 Jessa Ardithya Chriswantoro. All rights reserved.
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          {[['About', '#hero'], ['Stack', '#tech-stack'], ['Journey', '#timeline'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']].map(([l, h]) => (
            <a key={l} href={h} className="font-mono text-[10px] text-cream/20 hover:text-violet-light transition-colors">{l}</a>
          ))}
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
