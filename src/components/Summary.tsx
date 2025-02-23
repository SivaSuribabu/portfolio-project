import React from 'react';

const Summary = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
          Executive Summary
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed space-y-4">
            <span className="block">
              Seasoned IT professional with 8 years of extensive experience in Application Support, 
              actively transitioning into DevOps Engineering and Cloud Operations. Proven track record 
              in implementing and managing complex cloud infrastructure using AWS services including 
              EC2, VPC, S3, and CloudWatch.
            </span>
            <span className="block">
              Expertise in cloud infrastructure design and implementation, with hands-on experience in 
              setting up and managing AWS resources such as EC2 instances, Auto Scaling groups, VPC 
              networking, S3 storage solutions, and RDS databases. Proficient in implementing robust 
              monitoring and observability solutions using industry-standard tools including Prometheus, 
              Grafana, EFK (Elasticsearch, Fluentd, Kibana) stack, and Jaeger for distributed tracing.
            </span>
            <span className="block">
              Strong background in database management, including MySQL administration and optimization. 
              Demonstrated ability to implement comprehensive monitoring solutions, establish efficient 
              CI/CD pipelines, and maintain high-availability systems. Passionate about automation, 
              infrastructure as code, and implementing DevOps best practices to streamline development 
              and deployment processes.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;