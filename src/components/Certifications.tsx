import { useState } from 'react';
import { Award, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const certificationsPerPage = 12;

  const certifications = [
    // IBM Certifications
    { name: 'IBM Cloud Pak for Data V3.5 Essentials', category: 'IBM', year: '2023' },
    { name: 'IBM Cloud Pak for Data V3.5 Administrator', category: 'IBM', year: '2023' },
    { name: 'IBM Cloud Pak for Data V3.5 Data Engineer', category: 'IBM', year: '2023' },
    { name: 'IBM DataStage V11.5.x on Cloud Infrastructure', category: 'IBM', year: '2022' },
    { name: 'IBM Db2 LUW V11.x Foundation', category: 'IBM', year: '2022' },
    { name: 'IBM Db2 LUW V11.x Advanced Database', category: 'IBM', year: '2022' },
    { name: 'IBM Informix Technical Sales Intermediate', category: 'IBM', year: '2021' },
    { name: 'IBM Data Science Tools', category: 'IBM', year: '2021' },
    { name: 'IBM Data Science Foundation – Level 1', category: 'IBM', year: '2021' },
    
    // SAS Certifications
    { name: 'SAS Viya 3.5 Core Topics', category: 'SAS', year: '2023' },
    { name: 'SAS Viya 3.5 Architecture Topics', category: 'SAS', year: '2023' },
    { name: 'SAS Machine Learning using SAS Viya', category: 'SAS', year: '2023' },
    { name: 'SAS Visual Analytics 1 for SAS Viya: Basics', category: 'SAS', year: '2022' },
    { name: 'SAS DataFlux Management Studio: Fast Track', category: 'SAS', year: '2022' },
    
    // Database Certifications
    { name: 'Teradata Vantage Fundamental', category: 'Database', year: '2024' },
    { name: 'Couchbase Architecture Associated', category: 'Database', year: '2024' },
    { name: 'OceanBase Database Associated', category: 'Database', year: '2024' },
    
    // Analytics Certifications
    { name: 'Alteryx Foundation Micro-Credential', category: 'Analytics', year: '2024' },
    { name: 'Alteryx Machine Learning Fundamentals', category: 'Analytics', year: '2024' },
    { name: 'Alteryx Designer Core Micro-Credential', category: 'Analytics', year: '2024' },
    { name: 'Alteryx Server Administration', category: 'Analytics', year: '2024' },
    
    // Professional Certifications
    { name: 'LSP for Web Programmer', category: 'Professional', year: '2019-2022' }
  ];

  const categories = ['All', 'IBM', 'SAS', 'Database', 'Analytics', 'Professional'];
  
  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const totalPages = Math.ceil(filteredCertifications.length / certificationsPerPage);
  const startIndex = (currentPage - 1) * certificationsPerPage;
  const currentCertifications = filteredCertifications.slice(startIndex, startIndex + certificationsPerPage);

  const getCategoryColor = (category: string) => {
    const colors = {
      'IBM': 'bg-blue-100 text-blue-700',
      'SAS': 'bg-green-100 text-green-700',
      'Database': 'bg-purple-100 text-purple-700',
      'Analytics': 'bg-orange-100 text-orange-700',
      'Professional': 'bg-gray-100 text-gray-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category:string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive certifications across leading enterprise platforms and technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mr-4">
            <Filter size={16} />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 dark:bg-blue-700 text-white'
                  : 'bg-white dark:bg-gray-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCertifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-100 dark:border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(cert.category)}`}>
                      {cert.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {cert.year}
                </span>
              </div>
              
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                currentPage === 1
                  ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-blue-600 dark:bg-blue-700 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                currentPage === totalPages
                  ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {categories.slice(1).map((category) => {
              const count = certifications.filter(cert => cert.category === category).length;
              return (
                <div key={category} className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{count}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{category}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;