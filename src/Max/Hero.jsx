import React, { useState, useEffect } from 'react';
import { IoLogoHtml5 } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa6';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbBrandJavascript } from 'react-icons/tb';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Creative Coder'
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Simple role rotation (lightweight)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Fade-in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="Hero"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center mark md:px-8"
    >
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className="text-4xl font-bold text-[#CF1F1F] sm:text-5xl md:text-6xl">
          Abdulkadir Mubarak
        </h1>

        <p className="mt-4 text-xl text-white transition-all duration-500 sm:text-2xl">
          {roles[currentRole]}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {[
            { icon: IoLogoHtml5, label: 'HTML5' },
            { icon: RiTailwindCssFill, label: 'Tailwind CSS' },
            { icon: FaReact, label: 'React' },
            { icon: IoLogoFirebase, label: 'Firebase' },
            { icon: TbBrandJavascript, label: 'JavaScript' }
          ].map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform group hover:scale-110"
            >
              <Icon
                size={40}
                className="text-white transition-colors group-hover:text-[#CF1F1F]"
              />
              <span className="mt-1 text-xs text-gray-400 transition-opacity opacity-0 group-hover:opacity-100">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;