import { Calendar, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'BFI Finance - Alibaba Cloud Big Data Implementation',
      year: '2020',
      description: 'Successfully delivered BFI Finance\'s first Big Data platform on cloud, handled end-to-end independently. This project marked a milestone in the client\'s data modernization journey.',
      technologies: ['Alibaba Cloud EMR', 'Big Data', 'Data Works', 'Change Data Capture'],
      highlights: [
        'First cloud-based Big Data platform for the client',
        'End-to-end independent delivery',
        'Implemented real-time data replication with CDC',
        'Delivered on time despite limited resources'
      ],
      impact: 'Modernized client\'s data infrastructure and enabled real-time analytics capabilities'
    },
    {
      title: 'IndoRE - SAS IFRS17 Implementation',
      year: '2023',
      description: 'Delivered both Development and Production environments for SAS IFRS17 in a regulatory-driven project, ensuring full alignment with OJK compliance before the 2024 financial reporting cycle.',
      technologies: ['SAS IFRS17', 'SAS VIYA', 'Regulatory Compliance', 'Financial Reporting'],
      highlights: [
        'Full OJK compliance implementation',
        'Development and Production environments',
        'Met strict regulatory deadlines',
        'Successfully coordinated between multiple teams'
      ],
      impact: 'Enabled client to meet 2024 regulatory requirements and streamlined financial reporting processes'
    },
    {
      title: 'Custom CMS & Web Applications',
      year: '2018',
      description: 'During internship, developed multiple web applications including a Custom CMS, Sports Blog Platform, and Inventory Management System using Laravel and MySQL.',
      technologies: ['Laravel', 'MySQL', 'PHP', 'Bootstrap', 'Authentication'],
      highlights: [
        'Role-based access control implementation',
        'WYSIWYG editor integration',
        'Real-time inventory tracking',
        'Comment system and search functionality'
      ],
      impact: 'Gained foundational experience in full-stack development and database design'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Key projects demonstrating expertise in enterprise solutions and technical implementation
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 dark:bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{project.year}</span>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Zap size={16} className="text-blue-600 dark:text-blue-400" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-slate-700 dark:text-slate-300 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-400">
                    <div className="flex items-center gap-2 mb-3">
                      <Users size={16} className="text-blue-600 dark:text-blue-400" />
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Project Impact</h4>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      {project.impact}
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

export default Projects;