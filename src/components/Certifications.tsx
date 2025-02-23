import React, { useState, useEffect } from 'react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const certs = [
    {
      title: "AWS Certified Solutions Architect",
      image: "/images/aws-cert.jpg",
      issuer: "Amazon Web Services"
    },
    {
      title: "DevOps Certification",
      image: "/images/devops-cert.jpg",
      issuer: "Coursera"
    },
    {
      title: "Data Analytics Certification",
      image: "/images/analytics-cert.jpg",
      issuer: "Google"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
          Certifications
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
        </h2>
        <div className="overflow-hidden">
          <div 
            className="transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {certs.map((cert, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                  style={{ minWidth: '100%' }}
                >
                  <div className="relative group mx-auto max-w-2xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative bg-white rounded-lg p-6">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{cert.title}</h3>
                      <p className="text-lg text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;