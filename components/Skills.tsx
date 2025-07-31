import React from 'react';


const skills = {
  "Programming Languages": ["JavaScript", "Java", "Python", "TypeScript", "SQL"],
  "Frontend Development": ["React", "Next.js", "Angular", "Tailwind CSS", "Radix UI", "HTML5", "CSS3", "SASS", "Redux", "Webpack"],
  "Backend Development": ["Express.js", "Node.js", "FastAPI", "Django", "Spring Boot", "NestJS"],
  "Database": ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "MySQL", "Oracle", "Cassandra"],
  "API Integration": ["RESTful APIs", "GraphQL", "gRPC", "Swagger"],
  "Cloud & DevOps": ["AWS (EC2, S3, Lambda, API Gateway)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Terraform"],
  "Testing & Monitoring": ["Jest", "Cypress", "Selenium", "Mocha", "Chai", "Prometheus", "Grafana"],
  "Other Tools": ["WebSocket", "RabbitMQ", "Kafka", "Nginx", "Apache", "Jira", "Confluence"]
};

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills & Technologies</h2>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xl font-semibold text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 