import React from 'react';

const CloudTechnologies = () => {
  const technologies = [
    {
      title: "Identity & Security",
      items: ["IAM", "Security Groups", "AWS Backup"]
    },
    {
      title: "Compute & Containers",
      items: ["EC2", "Auto Scaling Groups", "EKS", "ECS"]
    },
    {
      title: "Networking",
      items: ["VPC", "NAT Gateways", "Security Groups"]
    },
    {
      title: "Storage & Database",
      items: ["S3", "RDS"]
    },
    {
      title: "Monitoring & Management",
      items: ["CloudWatch", "Systems Manager"]
    },
    {
      title: "Cost Management",
      items: ["Billing and Payments", "Cost Explorer"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
          Cloud Technologies
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500"></div>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudTechnologies;