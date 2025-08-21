import { useState } from 'react';
import { Calendar, MapPin, Users, Trophy, ChevronDown, ChevronUp, Briefcase, GraduationCap } from 'lucide-react';

const ProjectTimeline = () => {
    const [expandedEvent, setExpandedEvent] = useState<null | string>(null);


  const timelineEvents = [
    {
      id: 'current',
      year: '2024 - Present',
      title: 'Technical Sales Specialist (Pre-Sales)',
      company: 'PT. Blue Power Technology',
      type: 'career',
      icon: Briefcase,
      color: 'bg-blue-500',
      location: 'Jakarta, Indonesia',
      description: 'Leading pre-sales activities and expanding product portfolio',
      achievements: [
        'Acquired 7 new clients through technical presentations',
        'Successfully executed 7 POCs with high conversion rate',
        'Integrated 4 new products into company portfolio (Couchbase, OceanBase, Teradata, Alteryx)',
        'Speaker at Couchbase Interactive Webinar with 50+ attendees'
      ],
      technologies: ['Couchbase', 'OceanBase', 'Teradata', 'Alteryx', 'Technical Sales'],
      impact: 'Expanded business reach and strengthened technical expertise across multiple platforms'
    },
    {
      id: 'indore-project',
      year: '2023',
      title: 'IndoRE - SAS IFRS17 Implementation',
      company: 'Major Regulatory Project',
      type: 'project',
      icon: Trophy,
      color: 'bg-green-500',
      location: 'Jakarta, Indonesia',
      description: 'Delivered comprehensive SAS IFRS17 solution for regulatory compliance',
      achievements: [
        'Delivered both Development and Production environments',
        'Achieved full OJK compliance before 2024 deadline',
        'Successfully coordinated between multiple technical teams',
        'Implemented complex financial reporting workflows'
      ],
      technologies: ['SAS IFRS17', 'SAS VIYA', 'Regulatory Compliance', 'Financial Reporting'],
      impact: 'Enabled client to meet critical regulatory requirements and streamlined financial reporting processes'
    },
    {
      id: 'education-binus',
      year: '2021 - 2025',
      title: 'Computer Science Degree',
      company: 'Universitas Bina Nusantara',
      type: 'education',
      icon: GraduationCap,
      color: 'bg-purple-500',
      location: 'Jakarta, Indonesia',
      description: 'Advanced studies in computer science and software engineering',
      achievements: [
        'Specialized in data structures and algorithms',
        'Advanced database management systems',
        'Software engineering methodologies',
        'Machine learning and AI fundamentals'
      ],
      technologies: ['Computer Science', 'Software Engineering', 'Data Structures', 'Algorithms'],
      impact: 'Strengthened theoretical foundation and advanced technical knowledge'
    },
    {
      id: 'bfi-project',
      year: '2020',
      title: 'BFI Finance - Big Data Implementation',
      company: 'Milestone Cloud Project',
      type: 'project',
      icon: Trophy,
      color: 'bg-cyan-500',
      location: 'Jakarta, Indonesia',
      description: 'First cloud-based Big Data platform implementation for BFI Finance',
      achievements: [
        'Delivered end-to-end independently with limited resources',
        'Implemented real-time Change Data Capture (CDC)',
        'Successfully migrated from on-premise to cloud infrastructure',
        'Completed project on time despite technical challenges'
      ],
      technologies: ['Alibaba Cloud EMR', 'Big Data', 'Data Works', 'Change Data Capture'],
      impact: 'Modernized client\'s data infrastructure and enabled real-time analytics capabilities'
    },
    {
      id: 'post-sales',
      year: '2019 - 2024',
      title: 'Technical Specialist (Post-Sales)',
      company: 'PT. Blue Power Technology',
      type: 'career',
      icon: Briefcase,
      color: 'bg-orange-500',
      location: 'Jakarta, Indonesia',
      description: 'Focused on solution implementation and customer success',
      achievements: [
        'Successfully delivered multiple enterprise implementations',
        'Specialized in IBM and SAS technology stacks',
        'Built expertise in cloud migration projects',
        'Developed strong client relationship management skills'
      ],
      technologies: ['IBM DataStage', 'SAS VIYA', 'Cloud Migration', 'Enterprise Solutions'],
      impact: 'Established foundation in enterprise technology implementation and customer success'
    },
    {
      id: 'education-smk',
      year: '2016 - 2019',
      title: 'Software Engineering Diploma',
      company: 'SMK Wikrama Bogor',
      type: 'education',
      icon: GraduationCap,
      color: 'bg-indigo-500',
      location: 'Bogor, Indonesia',
      description: 'Comprehensive software engineering education with practical focus',
      achievements: [
        'Mastered fundamental programming concepts',
        'Developed web development skills',
        'Completed multiple software projects',
        'Built strong foundation in database design'
      ],
      technologies: ['PHP', 'MySQL', 'Web Development', 'Software Engineering'],
      impact: 'Established core programming skills and software development methodologies'
    },
    {
      id: 'internship',
      year: '2018',
      title: 'Backend Developer Internship',
      company: 'PT. Lattice Teknologi Mandiri',
      type: 'career',
      icon: Briefcase,
      color: 'bg-pink-500',
      location: 'Jakarta, Indonesia',
      description: 'First professional experience in software development',
      achievements: [
        'Developed Custom CMS with role-based access control',
        'Built Sports Blog Platform with full functionality',
        'Created Inventory Management System with real-time tracking',
        'Gained hands-on experience with Laravel framework'
      ],
      technologies: ['Laravel', 'MySQL', 'PHP', 'Bootstrap', 'Authentication'],
      impact: 'Gained foundational experience in full-stack development and established career direction'
    }
  ];

  const getTypeColor = (type:string) => {
    switch (type) {
      case 'career': return 'border-blue-200 dark:border-blue-800';
      case 'project': return 'border-green-200 dark:border-green-800';
      case 'education': return 'border-purple-200 dark:border-purple-800';
      default: return 'border-gray-200 dark:border-gray-700';
    }
  };

  const getTypeLabel = (type:string) => {
    switch (type) {
      case 'career': return 'Career';
      case 'project': return 'Project';
      case 'education': return 'Education';
      default: return 'Event';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Interactive timeline showcasing my career progression, key projects, and educational milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-300 dark:bg-gray-600"></div>

          <div className="space-y-8">
            {timelineEvents.map((event) => {
              const IconComponent = event.icon;
              const isExpanded = expandedEvent === event.id;

              return (
                <div key={event.id} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-8 transform -translate-x-1/2 w-4 h-4 ${event.color} rounded-full border-4 border-white dark:border-gray-900 z-10`}></div>

                  {/* Content */}
                  <div className="ml-20">
                    <div 
                      className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border-l-4 ${getTypeColor(event.type)}`}
                      onClick={() => setExpandedEvent(isExpanded ? null : event.id as string | null)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 ${event.color} rounded-lg flex items-center justify-center`}>
                              <IconComponent size={20} className="text-white" />
                            </div>
                            <div>
                              <span className="inline-block px-2 py-1 bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 rounded text-xs font-medium mb-1">
                                {getTypeLabel(event.type)}
                              </span>
                              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {event.title}
                              </h3>
                            </div>
                          </div>

                          <div className="text-slate-600 dark:text-slate-300 mb-2">
                            <div className="font-medium">{event.company}</div>
                            <div className="flex items-center gap-4 text-sm mt-1">
                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                {event.year}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                {event.location}
                              </div>
                            </div>
                          </div>

                          <p className="text-slate-700 dark:text-slate-300 text-sm">
                            {event.description}
                          </p>
                        </div>

                        <div className="ml-4">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </div>

                      {/* Expanded content */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-gray-700 space-y-4">
                          <div>
                            <h4 className="font-medium text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                              <Trophy size={16} className="text-yellow-500" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {event.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="text-slate-700 dark:text-slate-300 text-sm flex items-start">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="bg-slate-50 dark:bg-gray-900 rounded-lg p-4">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <Users size={16} className="text-green-500" />
                              Impact & Results
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">
                              {event.impact}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">3</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Major Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">7</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">New Clients (2024)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;