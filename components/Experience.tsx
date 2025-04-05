import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Hoosier Community Network, USA",
      period: "Jul 2024 - Present",
      description: `• Supervised and led a development team, overseeing the development and optimization of full-stack applications using React, Express.js, and PostgreSQL, improving response times by 45% through caching and query optimization.
• Improved UI responsiveness and performance through code-splitting, lazy loading, and memoization.
• Implemented CI/CD pipelines using Jenkins, reducing deployment time by 60% and increasing release frequency.
• Designed and deployed microservices architecture using Docker and Kubernetes, improving system scalability and fault tolerance.`,
    },
    {
        title: "Software Engineer",
        company: "Motorola Solutions, USA",
        period: "Jul 2023 – Dec 2023",
        description: `• Architected and implemented real-time Cross-Platform monitoring dashboards using React, Next.js and Node.js for
        PagerDuty integration, resulting in 30% faster incident response times and improved team productivity.
• Built a high-performance event processing system using Node.js and Elasticsearch, implementing WebSocket
        connections for real-time alerts and achieving 98% accuracy in anomaly detection.
• Optimized AWS Lambda functions, reducing cold start times by 40% and improving overall system performance.
• Implemented serverless architecture using AWS services (Lambda, API Gateway, S3) for cost-effective scaling.`
      },
      {
        title: "Software Engineer",
        company: "Motorola Solutions, India",
        period: "Mar 2021 – Mar 2022",
        description: `• Spearheaded development of IAM solution using MERN stack, implementing JWT authentication and role-based
        access control serving 500+ daily active users.
• Designed and implemented real-time analytics dashboard using React, D3.js, and Socket.IO, processing millions of
            data points and reducing visualization latency by 40%.
• Developed custom Python scripts for automated database migrations ensuring zero downtime during deployments.
• Built responsive UI components using React and Material-UI, improving user experience and increasing engagement
        by 25%.
• Implemented AWS S3 for efficient storage and retrieval of large datasets, reducing storage costs by 30%.`,
      },
    // Add more experiences as needed
  ];

  const highlightTech = (text: string) => {
    const techStack = ['React', 'Express.js', 'PostgreSQL', 'Jenkins', 'Docker', 'Kubernetes', 
      'Next.js', 'Node.js', 'WebSocket', 'Elasticsearch', 'AWS', 'Lambda', 'S3', 'MERN', 'JWT', 
      'D3.js', 'Socket.IO', 'Python', 'Material-UI'];
    
    return text.split('\n').map((line, i) => (
      <div key={i} className="flex items-start">
        {/* <span className="mr-2">•</span> */}
        <span>
          {line.split(' ').map((word, index) => {
            const cleanWord = word.replace(/[.,]/g, '');
            return techStack.includes(cleanWord) ? (
              <React.Fragment key={index}>
                <span className=" font-bold">{word}</span>{' '}
              </React.Fragment>
            ) : (
              word + ' '
            );
          })}
        </span>
      </div>
    ));
  };

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-gray-200 pl-6 hover:border-blue-500 transition-colors">
            <div className="flex items-center">
              <FaBuilding className="text-white-500 font-semibold" />
              <h3 className='text-xl'> &nbsp;{exp.company}</h3>
            </div>

            <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400">
              <FaBriefcase className="text-gray-500" />
              <p>{exp.title}</p>
            </div>
            

            
            <div className="flex items-center gap-2 mt-1 mb-4">
              <FaCalendarAlt className="text-gray-500" />
              <p className="text-sm text-gray-500">{exp.period}</p>
            </div>
            
            <div className="mt-2 text-gray-700 dark:text-gray-300 space-y-2">
              {highlightTech(exp.description)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 