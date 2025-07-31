export default function Projects() {
  const projects = [
    {
      "title": "Justice League Communication System: A WebSocket Broadcasting Server",
      "description": "Built a secure communication channel for the Justice League using modern web technologies. The system allows real-time broadcasting, dynamic hero identity assignment, secure member-only access, and active roster tracking, all powered by WebSocket communication.",
      "technologies": ["Node.js", "TypeScript", "WebSocket Protocol", "Commander.js"],
      "github": "https://lnkd.in/gAdsBfpC",
      "live": "https://justice-league-communication-server.com",
      "image": "/justice-league-server.jpg"
    },
    {
      "title": "EfficientAi: AI-Powered Receptionist for Small Service Businesses",
      "description": "EfficientAi is a 24/7 AI receptionist service built to help small service-based businesses eliminate missed calls, improve customer experience, and capture every opportunity for revenue. It handles appointment booking, FAQ responses, lead generation, and spam filtering with customizable responses and AI-driven automation.",
      "technologies": ["Node.js", "TypeScript", "WebSocket Protocol", "React", "FastAPI", "Stripe Integration"],
      "github": "https://github.com/yourusername/efficientai",
      "live": "https://efficientai-demo.com",
      "image": "/efficientai.jpg"
    },
    {
      "title": "Banking Loan Risk Prediction ETL",
      "description": "Developed an ETL pipeline for banking loan risk prediction that uses Python for data preprocessing, AWS S3 for storage, AWS SageMaker for model training, and Snowflake for data storage and analysis. The system assesses the risk of loan applicants based on historical data.",
      "technologies": ["Python", "AWS S3", "AWS SageMaker", "Snowflake"],
      "github": "https://github.com/yourusername/banking-loan-risk-prediction-etl",
      "live": "https://banking-loan-risk-prediction-demo.com",
      "image": "/banking-loan-risk-prediction.jpg"
    },
    {
      "title": "GenAI Gmail Search & Analytics",
      "description": "An end-to-end pipeline that turns your Gmail inbox into a searchable document store. The system uses the Gmail API to fetch raw email payloads, converts them to plain text, packages them into Haystack Document objects, and indexes them in Elasticsearch for fast search and analysis. This provides low-latency, scalable email-QA and analytics backend.",
      "technologies": ["Python", "Gmail API", "Haystack", "Elasticsearch"],
      "github": "https://github.com/yourusername/genai-gmail-search",
      "live": "https://genai-gmail-search-demo.com",
      "image": "/genai-gmail-search.jpg"
    }
  ]
  
  

    return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
              <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Featured Projects
            </span>
          </h2>
                      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve built that showcase my skills and passion for creating innovative solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-700"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-all duration-300">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-purple-800 text-purple-200 text-xs sm:text-sm font-medium rounded-full border border-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 text-white py-3 sm:py-2 px-4 rounded-lg text-center hover:bg-gray-600 transition-colors font-medium"
                  >
                    View Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-2 px-4 rounded-lg text-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
} 