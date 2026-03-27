import React, { useState, useRef, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Owner, Bloom Coffee Roasters',
      content:
        'Abdulkadir completely transformed our website! The new design is modern, fast, and easy to manage. Our online orders have increased by 40% since launch. Highly recommend!',
      rating: 5,
      avatar: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Director, Chen Accounting',
      content:
        'Working with Abdulkadir was a breeze. He understood our needs perfectly and delivered a professional, secure client portal. Always responsive and went the extra mile.',
      rating: 5,
      avatar: 'MC',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, FitLife Studio',
      content:
        'Abdulkadir built a custom booking system for my fitness studio. It’s intuitive and has saved me hours of admin work. The support after launch has been outstanding.',
      rating: 5,
      avatar: 'ER',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Marketing Manager, Urban Eats',
      content:
        'He helped us revamp our e-commerce platform with a modern UI and faster checkout. Sales have grown 25% year-over-year. Truly a talented developer!',
      rating: 4.5,
      avatar: 'DK',
    },
    {
      id: 5,
      name: 'Linda Turner',
      role: 'Principal, Westside Academy',
      content:
        'We needed a reliable school website. Abdulkadir delivered a secure, responsive site that parents love. His attention to detail is exceptional.',
      rating: 5,
      avatar: 'LT',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'CEO, Wilson Logistics',
      content:
        'From concept to deployment, Abdulkadir was professional and creative. He built a custom dashboard that streamlined our operations. Highly skilled and reliable.',
      rating: 5,
      avatar: 'JW',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const itemsToShow = 3;
  const totalSlides = Math.ceil(reviews.length / itemsToShow);

  // Group reviews into slides
  const slides = [];
  for (let i = 0; i < reviews.length; i += itemsToShow) {
    slides.push(reviews.slice(i, i + itemsToShow));
  }

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Reset transition lock after animation ends
  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-play (optional, can be removed or toggled)
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    while (stars.length < 5) {
      stars.push(<FaStar key={stars.length} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <section id="reviews" className="px-4 py-20 bg-white md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Client Stories</h2>
          <div className="w-20 h-1 bg-[#CF1F1F] mx-auto mt-4 rounded-full" />
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            Real feedback from businesses I've helped grow with modern websites and digital solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 w-full px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {slide.map((review) => (
                    <div
                      key={review.id}
                      className="p-6 transition-shadow duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl"
                    >
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">{renderStars(review.rating)}</div>

                      {/* Content */}
                      <p className="mb-6 italic leading-relaxed text-gray-700">
                        "{review.content}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CF1F1F] to-[#a01818] flex items-center justify-center text-white font-bold text-lg">
                          {review.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-[#CF1F1F] transition-all duration-200 z-10 ml-2"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-[#CF1F1F] transition-all duration-200 z-10 mr-2"
            aria-label="Next slide"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-[#CF1F1F] w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;