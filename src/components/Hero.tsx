import { Mail, Phone, MapPin, Linkedin, Cloud, Database, Briefcase } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 pt-16 transition-colors duration-300 overflow-hidden">
      {/* subtle background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-700/20"></div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-700/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1 animate-fadeInUp">
            <div className="relative">
              <div className="w-40 md:w-56 lg:w-80 aspect-square rounded-full bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 shadow-2xl overflow-hidden ring-4 ring-white/80 dark:ring-gray-900/80">
                <img
                  src={profileImg}
                  alt="Jessa Ardithya"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-left-bottom"
                />
              </div>
              
{/*               <div aria-hidden="true" className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"></div>
              <div aria-hidden="true" className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20"></div> */}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-2 animate-fadeInUp">
            {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-xs font-medium mb-4">
              <Sparkles size={14} /> Open to new opportunities
            </span> */}
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Jessa Ardithya
              <span className="block text-blue-600 dark:text-blue-400">Chriswantoro</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              Technical Sales Specialist
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl lg:max-w-none mb-8">
              Experienced technical sales professional specializing in data solutions, cloud technologies, 
              and enterprise software implementations. Proven track record in client acquisition, 
              technical consultations, and successful project delivery.
            </p>

            {/* Expertise chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 dark:bg-gray-700 dark:text-slate-200 text-sm">
                <Database size={16} /> Data Solutions
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 dark:bg-gray-700 dark:text-slate-200 text-sm">
                <Cloud size={16} /> Cloud Technologies
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 dark:bg-gray-700 dark:text-slate-200 text-sm">
                <Briefcase size={16} /> Enterprise Software
              </span>
            </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-blue-600 dark:text-blue-400" />
              <span>jessaardithya@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-blue-600 dark:text-blue-400" />
              <span>+62 8953-3324-8683</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-slate-200 dark:bg-gray-700 text-slate-700 dark:text-slate-200 font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-gray-600 transition-all duration-200 shadow-sm hover:shadow md:hover:translate-y-[-1px]"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a> */}
            <a
              href="https://www.linkedin.com/in/jessa-ardithya-chriswantoro-3a8971179/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white dark:bg-gray-800 font-medium rounded-lg hover:bg-black dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
