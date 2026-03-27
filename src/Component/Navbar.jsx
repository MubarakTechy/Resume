import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothscroll = (targetY, duration) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null; 

    const scrollStep = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * progress);
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      smoothscroll(element.offsetTop, 1000);
      // Close mobile menu after clicking
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed overflow-hidden top-0 left-0 right-0 z-50 bg-[black] shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-serif text-2xl font-bold text-gray-100 lg:text-3xl">
              MK <span className="font-light text-red-600 transition-colors duration-500">PUNK</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <span onClick={() => scrollToSection("Hero")} className="relative font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out cursor-pointer hover:text-red-500 group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
              <li>
                <span onClick={() => scrollToSection("services")} className="relative font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out cursor-pointer hover:text-red-500 group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
              <li>
                <span onClick={() => scrollToSection("about")} className="relative font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out cursor-pointer hover:text-red-500 group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
              <li>
                <span onClick={() => scrollToSection("reviews")} className="relative font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out cursor-pointer hover:text-red-500 group">
                  Reviews
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
              <li>
                <span onClick={() => scrollToSection("contact")} className="relative font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out cursor-pointer hover:text-red-500 group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
            </ul>
{/* zanerplumbing@gmail.com */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 transition-colors duration-500 hover:text-red-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <IoCloseSharp className="w-6 h-6 transition-transform duration-500 transform" />
              ) : (
                <RxHamburgerMenu className="w-6 h-6 transition-transform duration-500 transform" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">
            <li>
              <span onClick={() => scrollToSection("Hero")} className="block py-2 font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out hover:text-red-500 hover:translate-x-2">
                Home
              </span>
            </li>
            <li>
              <span onClick={() => scrollToSection("services")} className="block py-2 font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out hover:text-red-500 hover:translate-x-2">
                Services
              </span>
            </li>
            <li>
              <span onClick={() => scrollToSection("about")} className="block py-2 font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out hover:text-red-500 hover:translate-x-2">
                About
              </span>
            </li>
            <li>
              <span onClick={() => scrollToSection("reviews")} className="block py-2 font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out hover:text-red-500 hover:translate-x-2">
                Reviews
              </span>
            </li>
            <li>
              <span onClick={() => scrollToSection("contact")} className="block py-2 font-mono text-lg text-gray-100 transition-all duration-500 ease-in-out hover:text-red-500 hover:translate-x-2">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;