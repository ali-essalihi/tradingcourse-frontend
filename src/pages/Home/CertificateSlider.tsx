import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink } from 'lucide-react';

const CertificateSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "AWS Solutions Architect Professional",
      description: "Advanced certification demonstrating expertise in designing and deploying scalable, highly available systems on AWS cloud platform.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      issuer: "Amazon Web Services",
      date: "June 15, 2024",
      rating: "5.0/5"
    },
    {
      id: 2,
      title: "Google Cloud Professional Data Engineer",
      description: "Professional certification validating skills in designing, building, and maintaining data processing systems and machine learning models.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
      issuer: "Google Cloud",
      date: "April 22, 2024",
      rating: "5.0/5"
    },
    {
      id: 3,
      title: "Microsoft Azure DevOps Engineer Expert",
      description: "Expert-level certification proving proficiency in combining people, process, and technologies to continuously deliver valuable products.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      issuer: "Microsoft",
      date: "March 10, 2024",
      rating: "5.0/5"
    },
    {
      id: 4,
      title: "Certified Kubernetes Administrator",
      description: "Hands-on certification demonstrating skills in installation, configuration, and management of Kubernetes clusters in production environments.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
      issuer: "Cloud Native Computing Foundation",
      date: "February 28, 2024",
      rating: "5.0/5"
    },
    {
      id: 5,
      title: "Certified Information Systems Security Professional",
      description: "Premier cybersecurity certification validating expertise in designing, implementing, and managing cybersecurity programs.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop",
      issuer: "ISC2",
      date: "January 18, 2024",
      rating: "5.0/5"
    },
    {
      id: 6,
      title: "Docker Certified Associate",
      description: "Certification that validates skills in containerization, Docker fundamentals, and container orchestration technologies.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop",
      issuer: "Docker Inc.",
      date: "December 5, 2023",
      rating: "5.0/5"
    },
    {
      id: 7,
      title: "Certified Scrum Master",
      description: "Professional certification demonstrating understanding of Scrum framework and ability to facilitate Scrum teams effectively.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      issuer: "Scrum Alliance",
      date: "November 20, 2023",
      rating: "5.0/5"
    },
    {
      id: 8,
      title: "Terraform Associate",
      description: "HashiCorp certification validating skills in Infrastructure as Code using Terraform for cloud resource management.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      issuer: "HashiCorp",
      date: "October 15, 2023",
      rating: "5.0/5"
    },
    {
      id: 9,
      title: "React Developer Certification",
      description: "Advanced certification proving expertise in building modern web applications using React.js and its ecosystem.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      issuer: "Meta",
      date: "September 8, 2023",
      rating: "5.0/5"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentCertificate = () => {
    return certificates[currentSlide];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes Certifications
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <Award className="text-green-400" size={24} />
              <span className="text-white font-medium">Certifications Vérifiées</span>
            </div>
            <div className="bg-gray-800 px-3 py-1 rounded-full">
              <span className="text-white font-medium">5.0/5</span>
            </div>
          </div>
        </div>

        {/* Certificate Card */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden border border-blue-700 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            {/* Certificate Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={getCurrentCertificate().image}
                alt={getCurrentCertificate().title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-gray-800 px-2 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">{getCurrentCertificate().rating}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Rating Stars */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-green-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <span className="text-white font-medium">{getCurrentCertificate().rating}</span>
                <span className="text-gray-300 text-sm ml-auto">{getCurrentCertificate().date}</span>
              </div>

              {/* Certificate Title */}
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {getCurrentCertificate().title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {getCurrentCertificate().description}
              </p>

              {/* Issuer */}
              <div className="mb-4">
                <span className="text-green-400 font-medium text-sm">Délivré par: </span>
                <span className="text-white font-medium">{getCurrentCertificate().issuer}</span>
              </div>

              {/* Verify Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <ExternalLink size={16} />
                Voir le Certificat
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-green-400' : 'bg-blue-700'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{certificates.length}</div>
            <div className="text-gray-300">Certifications Obtenues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Taux de Réussite</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5.0</div>
            <div className="text-gray-300">Note Moyenne</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateSlider;
