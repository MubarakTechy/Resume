import React from 'react';
import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiSmartphone,
  FiCloud,
  FiSettings,
} from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern frameworks like React, Next.js, and Tailwind CSS. Focus on performance, scalability, and clean code.',
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with functionality. I create intuitive interfaces that enhance user experience and engagement.',
  },
  {
    icon: FiDatabase,
    title: 'Backend Development',
    description:
      'Robust server-side solutions using Node.js, Python, and databases like PostgreSQL and MongoDB. Secure APIs and efficient data management.',
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Design',
    description:
      'Mobile-first designs that work flawlessly across all devices. Ensuring your application looks and performs great on any screen size.',
  },
  {
    icon: FiCloud,
    title: 'Cloud Integration',
    description:
      'Deployment and scaling on cloud platforms like AWS, Vercel, and Firebase. Optimized for reliability and cost-efficiency.',
  },
  {
    icon: FiSettings,
    title: 'Maintenance & Support',
    description:
      'Ongoing support, bug fixes, and feature enhancements to keep your projects up-to-date and running smoothly.',
  },
];

const Service = () => {
  return (
    <section id="services" className="relative px-4 py-20 overflow-hidden md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-[#CF1F1F] rounded-full blur-[120px] opacity-10 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[100px] opacity-10" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text">
            What I Do
          </h2>
          <div className="w-20 h-1 bg-[#CF1F1F] mx-auto mt-4 rounded-full" />
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
            I craft digital experiences that are both powerful and elegant.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl hover:shadow-[#CF1F1F]/10"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none rounded-2xl group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CF1F1F] to-purple-500 opacity-20 blur-md" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 bg-[#CF1F1F]/10 rounded-xl text-[#CF1F1F] group-hover:bg-[#CF1F1F] group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;