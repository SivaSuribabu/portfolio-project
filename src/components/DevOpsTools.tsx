import React from 'react';

const DevOpsTools = () => {
  const tools = [
    {
      category: "Version Control & CI/CD",
      items: ["GitHub", "Jenkins", "ArgoCD", "GitOps"]
    },
    {
      category: "Operating Systems & Infrastructure",
      items: ["Linux", "Windows", "Networking"]
    },
    {
      category: "Scripting & Automation",
      items: ["Shell Scripting", "Python", "Ansible"]
    },
    {
      category: "Containerization & Orchestration",
      items: ["Docker", "Kubernetes"]
    },
    {
      category: "Security & Quality",
      items: ["SonarQube", "Trivy", "OWASP"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">DevOps Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsTools;