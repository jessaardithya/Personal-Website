import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Technical Sales Specialist (Pre-Sales)',
      company: 'PT. Blue Power Technology',
      location: 'Jakarta, Indonesia',
      period: '2024 - Present',
      description: 'Acquired and integrated new products (Couchbase, OceanBase, Teradata, Alteryx) into company portfolio. Delivered technical presentations resulting in acquisition of 7 new clients. Successfully executed 7 POCs and maintained existing customers through technical consultations.'
    },
    {
      title: 'Technical Specialist (Post-Sales)',
      company: 'PT. Blue Power Technology',
      location: 'Jakarta, Indonesia',
      period: '2019 - 2024',
      description: 'Delivered BFI Finance\'s first Big Data platform on cloud independently. Implemented Change Data Capture (CDC) for real-time data replication. Successfully delivered SAS IFRS17 implementation for IndoRE with OJK compliance.'
    },
    {
      title: 'Backend Developer',
      company: 'PT. Lattice Teknologi Mandiri',
      location: 'Jakarta, Indonesia',
      period: '2018',
      description: 'Developed Custom CMS using Laravel and MySQL with role-based access control. Built Sports Blog Platform and created Inventory Management Web Application with real-time stock tracking.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Over 5 years of experience in technical sales and solution implementation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-800"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className={`flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award size={16} className="text-white dark:text-gray-100" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-slate-100 dark:border-gray-700 hover:-translate-y-0.5">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <div className="font-medium">{exp.company}</div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;