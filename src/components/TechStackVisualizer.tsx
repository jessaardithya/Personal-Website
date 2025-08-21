import { useState } from 'react';
import { Code, Database, Cloud, Settings, Server, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  position: { x: number; y: number };
  technologies: string[];
  projects: string[];
  experience: string;
}

const TechStackVisualizer = () => {
  const [selectedTech, setSelectedTech] = useState<TechNode |null>(null);

  const techNodes = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Code,
      color: 'bg-blue-500',
      position: { x: 20, y: 30 },
      technologies: ['React.js', 'JavaScript', 'HTML/CSS'],
      projects: ['Custom CMS', 'Sports Blog Platform'],
      experience: '3+ years'
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Server,
      color: 'bg-green-500',
      position: { x: 80, y: 30 },
      technologies: ['PHP (Laravel)', 'Node.js', 'Python', 'Java'],
      projects: ['Custom CMS', 'Inventory Management', 'BFI Finance Implementation'],
      experience: '5+ years'
    },
    {
      id: 'database',
      name: 'Databases',
      icon: Database,
      color: 'bg-purple-500',
      position: { x: 50, y: 70 },
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'IBM DB2', 'Couchbase', 'OceanBase'],
      projects: ['BFI Finance', 'IndoRE IFRS17', 'All Web Applications'],
      experience: '5+ years'
    },
    {
      id: 'cloud',
      name: 'Cloud & Analytics',
      icon: Cloud,
      color: 'bg-cyan-500',
      position: { x: 20, y: 70 },
      technologies: ['SAS VIYA', 'Alibaba Cloud EMR', 'IBM Watson Studio', 'Teradata'],
      projects: ['BFI Finance Big Data', 'IndoRE IFRS17'],
      experience: '4+ years'
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: Settings,
      color: 'bg-orange-500',
      position: { x: 80, y: 70 },
      technologies: ['Docker', 'Kubernetes', 'IBM DataStage', 'dbt', 'Airbyte'],
      projects: ['BFI Finance', 'Enterprise Implementations'],
      experience: '3+ years'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: Zap,
      color: 'bg-pink-500',
      position: { x: 50, y: 30 },
      technologies: ['IBM Cognos Analytics', 'Tableau', 'Alteryx', 'SAS Analytics'],
      projects: ['IndoRE IFRS17', 'Business Intelligence Solutions'],
      experience: '4+ years'
    }
  ];

  const connections = [
    { from: 'frontend', to: 'backend' },
    { from: 'backend', to: 'database' },
    { from: 'backend', to: 'cloud' },
    { from: 'cloud', to: 'analytics' },
    { from: 'database', to: 'analytics' },
    { from: 'devops', to: 'cloud' },
    { from: 'devops', to: 'backend' }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technology Ecosystem
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Interactive visualization of my technical expertise and how different technologies connect in real projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Diagram */}
          <div className="relative">
            <div className="bg-slate-50 dark:bg-gray-900 rounded-lg p-8 h-96 relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {connections.map((connection, index) => {
                  const fromNode = techNodes.find(node => node.id === connection.from);
                  const toNode = techNodes.find(node => node.id === connection.to);
                  if(!fromNode || !toNode) return null;
                  return (
                    <line
                      key={index}
                      x1={`${fromNode.position.x}%`}
                      y1={`${fromNode.position.y}%`}
                      x2={`${toNode.position.x}%`}
                      y2={`${toNode.position.y}%`}
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-300 dark:text-gray-600"
                      opacity="0.5"
                    />
                  );
                })}
              </svg>

              {techNodes.map((node) => {
                const IconComponent = node.icon;
                return (
                  <div
                    key={node.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                      selectedTech?.id === node.id ? 'scale-125 z-20' : 'z-10'
                    }`}
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`
                    }}
                    onClick={() => setSelectedTech(selectedTech?.id === node.id ? null : node)}
                  >
                    <div className={`w-16 h-16 ${node.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        {node.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Details Panel */}
          <div className="space-y-6">
            {selectedTech ? (
              <div className="bg-slate-50 dark:bg-gray-900 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${selectedTech.color} rounded-lg flex items-center justify-center`}>
                    <selectedTech.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {selectedTech.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {selectedTech.experience} experience
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTech.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Key Projects</h4>
                    <ul className="space-y-1">
                      {selectedTech.projects.map((project, index) => (
                        <li key={index} className="text-sm text-slate-600 dark:text-slate-300 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 dark:bg-gray-900 rounded-lg p-6 text-center">
                <div className="text-slate-400 dark:text-slate-500 mb-4">
                  <Code size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Explore My Tech Stack
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Click on any technology node to see detailed information about my experience, 
                  the specific technologies I work with, and the projects where I've applied them.
                </p>
              </div>
            )}

            {/* Legend */}
            <div className="bg-slate-50 dark:bg-gray-900 rounded-lg p-4">
              <h4 className="font-medium text-slate-900 dark:text-white mb-3">Technology Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {techNodes.map((node) => {
                  const IconComponent = node.icon;
                  return (
                    <div key={node.id} className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${node.color} rounded-full flex items-center justify-center`}>
                        <IconComponent size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{node.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackVisualizer;