import React from 'react';

const serviceData = [
  {
    id: 1,
    title: 'Service 1 Title',
    description: 'A clear and concise description of Service 1.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ24nKb26z4_7mrE4WicuW2xCmgWkX53C7EA&s', // Replace with your icon path
  },
  {
    id: 2,
    title: 'Service 2 Title',
    description: 'A clear and concise description of Service 2.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNV-kIxQFAZO3B0WCbeWmTssjoUduWrVKJpA&s', // Replace with your icon path
  },
  // Add more service objects as needed
];

const ServiceCard = ({ service }) => {
  return (
    <div
      className="service-card flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg-hover transition-all duration-300 ease-in-out"
      key={service.id}
    >
      <img className="w-16 h-16 mb-4" src={service.icon} alt={service.title} />
      <h3 className="text-xl font-bold text-center">{service.title}</h3>
      <p className="text-gray-700 text-center">{service.description}</p>
    </div>
  );
};

function Services() {
  return (
    <section className="services flex flex-col items-center py-40 bg-black text-white">
      <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-10 text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;

