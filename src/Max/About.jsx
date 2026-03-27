import React, { useEffect, useRef } from 'react';
import { FiGithub, FiMail, FiExternalLink } from 'react-icons/fi';

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Simple fade-in on mount (no GSAP)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative w-full py-20 overflow-hidden text-white bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 h-72 w-72 rounded-full bg-[#CF1F1F] opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 delay-1000 bg-purple-600 rounded-full -right-4 h-80 w-80 opacity-20 blur-3xl animate-pulse" />
      </div>

      <div className="px-6 mx-auto max-w-7xl md:px-8">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image with decorative border */}
          <div
            ref={imageRef}
            className="relative w-full max-w-md transition-all duration-700 ease-out translate-y-8 opacity-0"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#CF1F1F] to-purple-500 opacity-75 blur-lg" />
            <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm">
              <img
                src="../src/image/press.jpg" // replace with your actual image path
                alt="Abdulkadir Mubarak"
                className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Text content */}
          <div
            ref={textRef}
            className="flex flex-col max-w-2xl space-y-6 transition-all duration-700 ease-out delay-200 translate-y-8 opacity-0"
          >
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-[#CF1F1F] to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <p className="text-base leading-relaxed text-gray-300 md:text-lg">
              Hi, I'm <span className="font-semibold text-white">Abdulkadir Mubarak</span> a
              passionate <span className="text-[#CF1F1F]">Full Stack Developer</span> and
              creative problem solver. I build digital experiences that are both functional and
              beautiful, focusing on clean code, performance, and user-centric design.
            </p>

            <p className="text-base leading-relaxed text-gray-300 md:text-lg">
              My journey started with a curiosity for how things work, and that curiosity evolved
              into a career crafting web applications, interactive interfaces, and robust backend
              systems. I thrive on turning complex ideas into elegant solutions that people love
              to use.
            </p>

            <p className="text-base leading-relaxed text-gray-300 md:text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source, or sharing knowledge with fellow developers. I believe in continuous
              learning and the power of collaboration to create meaningful impact.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#CF1F1F] px-6 py-3 font-medium text-white transition-all hover:bg-white hover:text-black hover:shadow-lg"
              >
                View Projects
                <FiExternalLink className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-500 bg-transparent px-6 py-3 font-medium text-white transition-all hover:border-[#CF1F1F] hover:bg-[#CF1F1F]/10"
              >
                <FiGithub />
                GitHub
              </a>
              <a
                href="mailto:your.email@example.com"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-500 bg-transparent px-6 py-3 font-medium text-white transition-all hover:border-[#CF1F1F] hover:bg-[#CF1F1F]/10"
              >
                <FiMail />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}