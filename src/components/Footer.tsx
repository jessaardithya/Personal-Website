// import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jessa Ardithya</h3>
            <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed">
              Technical Sales Specialist passionate about data solutions, 
              cloud technologies, and helping businesses leverage analytics 
              for better decision making.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 dark:text-blue-500" />
                <a href="mailto:jessaardithya@gmail.com" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  jessaardithya@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 dark:text-blue-500" />
                <a href="tel:+628953332486" className="text-slate-400 dark:text-slate-500 hover:text-white transition-colors">
                  +62 8953-3324-8683
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                   href="https://www.linkedin.com/in/jessa-ardithya-chriswantoro-3a8971179/"
                  className="w-8 h-8 bg-blue-600 dark:bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © 2025 Jessa Ardithya Chriswantoro. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
