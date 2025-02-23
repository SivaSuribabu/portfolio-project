import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Java Application CI/CD Pipeline",
      description: "Architected and implemented a comprehensive CI/CD pipeline for a large-scale Java microservices application. The pipeline features automated code quality checks with SonarQube, vulnerability scanning with Trivy, and automated deployment using GitOps principles. Implemented Jenkins pipelines with parallel execution stages, reducing build times by 70%. Utilized ArgoCD for GitOps-based deployment to Kubernetes clusters, ensuring consistent application state across environments. Implemented automated rollback mechanisms and canary deployments for zero-downtime updates.",
      tools: ["Jenkins", "Kubernetes", "ArgoCD", "Docker", "SonarQube", "Trivy", "Maven", "Helm"]
    },
    {
      title: "Production AWS Infrastructure",
      description: "Designed and implemented a highly available, secure AWS infrastructure supporting mission-critical applications. Created a multi-AZ architecture with private/public subnets across three availability zones. Implemented AWS Transit Gateway for network connectivity, AWS Shield for DDoS protection, and AWS WAF for web application security. Utilized AWS Systems Manager for automated patching and configuration management. Implemented comprehensive monitoring with CloudWatch, including custom metrics and automated alerting. Achieved 99.99% uptime and reduced infrastructure costs by 40% through optimal resource utilization.",
      tools: ["AWS VPC", "EC2", "Auto Scaling", "Transit Gateway", "Systems Manager", "CloudWatch", "AWS Shield", "WAF"]
    },
    {
      title: "Enterprise Observability Platform",
      description: "Developed a comprehensive observability platform integrating logs, metrics, and traces. Implemented the EFK stack (Elasticsearch, Fluentd, Kibana) for centralized logging, with custom Fluentd plugins for log enrichment. Utilized OpenTelemetry for distributed tracing with Jaeger backend, providing end-to-end transaction visibility. Created custom Kibana dashboards for business KPIs and technical metrics. Implemented automated log rotation and retention policies, managing over 5TB of daily log data while maintaining query performance.",
      tools: ["Elasticsearch", "Fluentd", "Kibana", "OpenTelemetry", "Jaeger", "Docker", "Kubernetes"]
    },
    {
      title: "Cloud-Native Monitoring Solution",
      description: "Implemented a scalable monitoring solution using Prometheus and Grafana, covering 1000+ nodes across multiple data centers. Designed custom exporters for legacy applications and implemented automated service discovery. Created comprehensive alerting rules with multi-level escalation policies. Developed custom Grafana dashboards for different stakeholders, including business metrics and technical KPIs. Implemented high availability for the monitoring stack with cross-region failover capabilities.",
      tools: ["Prometheus", "Grafana", "AlertManager", "Node Exporter", "Thanos", "Kubernetes"]
    },
    {
      title: "Multi-Environment Kubernetes Platform",
      description: "Designed and implemented a multi-cluster Kubernetes platform on AWS EKS, supporting development, staging, and production environments. Implemented GitOps workflows with ArgoCD for automated application deployment. Created custom operators for application-specific requirements. Implemented service mesh with Istio for advanced traffic management and security. Achieved 99.99% platform availability and reduced deployment times from hours to minutes. Implemented cost optimization strategies, reducing cloud spending by 35%.",
      tools: ["AWS EKS", "Terraform", "Helm", "ArgoCD", "Istio", "Prometheus", "Grafana"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
          Projects
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {tool}
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

export default Projects;