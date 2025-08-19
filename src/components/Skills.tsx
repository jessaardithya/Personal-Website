import { Code, Database, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        'PHP (Laravel)',
        'JavaScript',
        'Python',
        'Java',
        'HTML/CSS',
        'Node.js',
        'React.js'
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'IBM DB2',
        'MSSQL',
        'Couchbase',
        'OceanBase'
      ]
    },
    {
      title: 'Cloud & Analytics',
      icon: Cloud,
      skills: [
        'SAS VIYA',
        'Alibaba Cloud EMR',
        'IBM Watson Studio',
        'IBM Cognos Analytics',
        'Teradata',
        'Tableau',
        'Alteryx'
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: [
        'Docker',
        'Kubernetes',
        'IBM DataStage',
        'dbt',
        'Airbyte',
        'IBM CDC'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive expertise across programming, databases, cloud platforms, and analytics tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;