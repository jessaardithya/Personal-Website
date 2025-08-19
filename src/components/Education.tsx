import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Computer Science',
      institution: 'Universitas Bina Nusantara',
      location: 'Jakarta, Indonesia',
      period: '2021 - 2025',
      status: 'Completed'
    },
    {
      degree: 'Software Engineering',
      institution: 'SMK Wikrama Bogor',
      location: 'Bogor, Indonesia',
      period: '2016 - 2019',
      status: 'Completed'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Academic foundation in computer science and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-50 dark:bg-gray-900 rounded-lg p-8 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 md:mt-0 ${
                        edu.status === 'Completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="text-slate-600 dark:text-slate-300 space-y-2">
                      <div className="font-medium text-lg">{edu.institution}</div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;