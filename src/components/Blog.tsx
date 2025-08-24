import { useState } from 'react';
import { BookOpen, Calendar, User, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise Data Analytics',
      excerpt: 'Exploring how artificial intelligence is revolutionizing business intelligence and data-driven decision making in large organizations.',
      content: `The integration of AI into enterprise data analytics represents one of the most significant technological shifts in modern business intelligence. Organizations are moving beyond traditional reporting to embrace predictive and prescriptive analytics powered by machine learning algorithms.

**Key Transformations in Enterprise AI**:

**Automated Insights Generation**: Modern BI platforms like IBM Cognos Analytics and SAS VIYA now incorporate AI engines that automatically surface anomalies, trends, and actionable insights without manual intervention.

**Natural Language Processing**: Business users can now query complex datasets using natural language, democratizing data access across organizations. Tools like IBM Watson Studio enable conversational analytics that were previously impossible.

**Predictive Maintenance and Forecasting**: AI models integrated with enterprise data warehouses can predict equipment failures, customer churn, and market trends with unprecedented accuracy.

**Real-time Decision Making**: Stream processing combined with ML models enables organizations to make split-second decisions based on live data feeds, particularly valuable in financial services and manufacturing.

In projects like the BFI Finance Big Data implementation, we've seen how cloud-native AI services can transform traditional batch processing into real-time intelligent systems. The combination of Alibaba Cloud EMR with machine learning capabilities has enabled clients to move from reactive to proactive business strategies.

The future lies in autonomous analytics systems that not only provide insights but also recommend and execute actions, fundamentally changing how enterprises operate in data-driven markets.`,
      category: 'AI & Analytics',
      date: '2024-12-15',
      author: 'Jessa Ardithya',
      readTime: '7 min read',
      tags: ['AI', 'Enterprise Analytics', 'Business Intelligence', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Machine Learning in Database Optimization',
      excerpt: 'How ML algorithms are being integrated into database management systems to automatically optimize performance and resource allocation.',
      content: `Database optimization has evolved from manual tuning to intelligent, self-managing systems powered by machine learning. Modern database platforms are incorporating AI to automatically adjust performance parameters, predict resource needs, and optimize query execution plans.

**Automated Performance Tuning**: Database systems like OceanBase and advanced PostgreSQL distributions now use ML algorithms to continuously monitor query patterns and automatically adjust indexes, memory allocation, and execution strategies.

**Predictive Resource Scaling**: Cloud databases leverage historical usage patterns to predict peak loads and automatically scale resources before performance degradation occurs. This is particularly valuable in enterprise environments with varying workloads.

**Intelligent Query Optimization**: ML-powered query optimizers analyze execution patterns and data distribution to choose optimal execution plans, often outperforming traditional rule-based optimizers.

**Anomaly Detection**: AI systems can identify unusual database behavior patterns that might indicate security threats, data corruption, or performance issues before they impact users.

**Workload Classification**: Machine learning models can automatically categorize different types of database workloads (OLTP, OLAP, mixed) and apply appropriate optimization strategies for each.

In implementations with clients using IBM Db2 and Couchbase, we've observed significant performance improvements when ML-driven optimization features are properly configured and tuned for specific enterprise workloads.

The future of database management is autonomous systems that require minimal human intervention while delivering optimal performance across diverse enterprise scenarios.`,
      category: 'Database',
      date: '2024-12-10',
      author: 'Jessa Ardithya',
      readTime: '6 min read',
      tags: ['Machine Learning', 'Database Optimization', 'Performance Tuning', 'Automation']
    },
    {
      id: 3,
      title: 'AI-Powered Data Integration: Beyond Traditional ETL',
      excerpt: 'Modern data integration platforms are leveraging AI to automate schema mapping, data quality checks, and transformation logic.',
      content: `Traditional ETL processes are being revolutionized by artificial intelligence, moving from rigid, manually-coded pipelines to intelligent, self-adapting data integration systems that can handle the complexity and scale of modern enterprise data landscapes.

**Intelligent Schema Mapping**: AI algorithms can automatically detect relationships between source and target schemas, significantly reducing the time required for data integration projects. Tools like IBM DataStage are incorporating ML capabilities to suggest optimal mapping strategies.

**Automated Data Quality Assessment**: Machine learning models can learn normal data patterns and automatically flag anomalies, inconsistencies, and quality issues without predefined rules. This is particularly valuable when dealing with diverse data sources.

**Dynamic Transformation Logic**: AI-powered integration platforms can adapt transformation rules based on changing data patterns, reducing the need for manual intervention when source systems evolve.

**Real-time Stream Processing**: Modern platforms combine traditional batch ETL with real-time streaming capabilities, using AI to determine optimal processing strategies based on data velocity, volume, and business requirements.

**Self-Healing Pipelines**: Advanced integration platforms can automatically recover from failures, reroute data flows, and adjust processing parameters when encountering unexpected conditions.

In complex implementations like the IndoRE IFRS17 project, we utilized SAS VIYA's advanced data integration capabilities combined with AI-driven data quality checks to ensure regulatory compliance while maintaining high performance across multiple data sources.

The evolution toward autonomous data integration represents a fundamental shift from reactive maintenance to proactive, intelligent data management that adapts to changing business needs.`,
      category: 'Data Integration',
      date: '2024-12-05',
      author: 'Jessa Ardithya',
      readTime: '8 min read',
      tags: ['Data Integration', 'ETL', 'AI Automation', 'Data Quality']
    },
    {
      id: 4,
      title: 'Conversational AI for Business Intelligence',
      excerpt: 'Natural language interfaces are making complex data analysis accessible to non-technical business users through AI-powered query systems.',
      content: `The democratization of data analytics through conversational AI represents a paradigm shift in how business users interact with complex data systems. Natural language processing is breaking down technical barriers and enabling intuitive data exploration.

**Natural Language Query Processing**: Modern BI platforms can interpret business questions in plain English and automatically generate appropriate SQL queries, data visualizations, and analytical reports.

**Context-Aware Conversations**: Advanced AI systems maintain conversation context, allowing users to ask follow-up questions and drill down into specific aspects of their data without starting over.

**Automated Insight Narration**: AI can generate natural language explanations of data trends, anomalies, and patterns, making complex analytical results accessible to business stakeholders.

**Intelligent Recommendation Systems**: Conversational AI can suggest relevant questions, analyses, and visualizations based on user behavior and data patterns, guiding users toward valuable insights.

**Multi-Modal Interactions**: Advanced systems combine voice, text, and visual interfaces, allowing users to interact with data through their preferred communication method.

Platforms like IBM Cognos Analytics and Tableau have integrated conversational AI capabilities that transform how business users access and understand their data. In enterprise implementations, we've seen dramatic improvements in user adoption and data-driven decision making.

The future of business intelligence lies in AI assistants that can understand business context, provide proactive insights, and enable natural conversations about data across all organizational levels.`,
      category: 'Business Intelligence',
      date: '2024-11-28',
      author: 'Jessa Ardithya',
      readTime: '6 min read',
      tags: ['Conversational AI', 'Natural Language Processing', 'Business Intelligence', 'User Experience']
    },
    {
      id: 5,
      title: 'AI Ethics in Enterprise Data Management',
      excerpt: 'As AI becomes integral to data processing and decision-making, organizations must address ethical considerations to ensure responsible AI deployment.',
      content: `The rapid adoption of AI in enterprise data management brings unprecedented opportunities alongside significant ethical responsibilities. Organizations must address critical ethical considerations to ensure responsible AI deployment.

**Data Privacy and AI**: AI systems often require large datasets for training, raising concerns about personal data usage and privacy protection. Techniques like federated learning and differential privacy are becoming essential.

**Algorithmic Bias**: AI models can perpetuate or amplify existing biases in data. Regular bias auditing and diverse training datasets are crucial for fair AI systems.

**Transparency and Explainability**: Enterprise AI decisions must be explainable, especially in regulated industries. Tools for AI interpretability are becoming mandatory requirements.

**Data Governance for AI**: Traditional data governance frameworks need updates to address AI-specific challenges like model versioning, training data lineage, and automated decision auditing.

**Key Principles for Ethical AI**:
1. **Fairness**: Ensure AI systems treat all users and groups equitably
2. **Accountability**: Maintain clear responsibility chains for AI decisions
3. **Transparency**: Make AI decision processes understandable to stakeholders
4. **Privacy**: Protect individual privacy while enabling AI innovation
5. **Reliability**: Ensure AI systems perform consistently and safely

In regulatory-heavy projects like the IndoRE IFRS17 implementation, we had to implement comprehensive AI governance frameworks to meet OJK compliance requirements.

The future of enterprise AI depends on building trust through ethical practices and transparent governance frameworks.`,
      category: 'AI Ethics',
      date: '2024-11-20',
      author: 'Jessa Ardithya',
      readTime: '9 min read',
      tags: ['AI Ethics', 'Data Governance', 'Compliance', 'Privacy']
    }
  ];

  const categories = ['All', 'AI & Analytics', 'Database', 'Data Integration', 'Business Intelligence', 'AI Ethics'];
  const postsPerPage = 3;
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const togglePost = (postId:number) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
    setExpandedPost(null);
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Insights
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Sharing knowledge and insights about AI, data analytics, and enterprise technology solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mr-4">
            <BookOpen size={16} />
            <span className="text-sm font-medium">Topics:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 dark:bg-blue-700 text-white'
                  : 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {currentPosts.map((post) => {
            const isExpanded = expandedPost === post.id;
            return (
              <article key={post.id} className="bg-slate-50 dark:bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                      {post.title}
                    </h3>

                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {isExpanded && (
                      <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
                        {post.content.split('\n\n').map((paragraph, index) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return (
                              <h4 key={index} className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-3">
                                {paragraph.replace(/\*\*/g, '')}
                              </h4>
                            );
                          }
                          if (paragraph.includes('**')) {
                            return (
                              <p key={index} className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                                {paragraph.split('**').map((part, partIndex) => 
                                  partIndex % 2 === 1 ? 
                                    <strong key={partIndex} className="font-semibold text-slate-900 dark:text-white">{part}</strong> : 
                                    part
                                )}
                              </p>
                            );
                          }
                          return (
                            <p key={index} className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => togglePost(post.id)}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                      <ArrowRight size={16} className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  <div className="lg:w-64">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-slate-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag size={16} className="text-blue-600 dark:text-blue-400" />
                        <span className="font-medium text-slate-900 dark:text-white">Category</span>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{post.category}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
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
        <div className="mt-16 bg-slate-50 dark:bg-gray-900 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{blogPosts.length}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Articles Published</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{categories.length - 1}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Topic Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {Math.round(blogPosts.reduce((acc, post) => acc + parseInt(post.readTime), 0) / blogPosts.length)}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Avg. Read Time (min)</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">2024</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Latest Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;