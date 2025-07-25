import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, Shield, Star } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Find Your Perfect Life Partner",
      subtitle: "Millions of verified profiles waiting to connect with you",
      image: "/homeSlider/vivahmain1.png",
      cta: "Start Your Journey"
    },
    {
      id: 2,
      title: "Trusted by Millions",
      subtitle: "Join India's most trusted matrimonial platform with verified profiles",
      image: "/homeSlider/vivahmain2.png",
      cta: "Register Free"
    },
    {
      id: 3,
      title: "Success Stories Every Day",
      subtitle: "Thousands of couples found love through our platform",
      image: "/homeSlider/vivahmain3.png",
      cta: "View Success Stories"
    },
    {
      id: 4,
      title: "Success Stories Every Day",
      subtitle: "Thousands of couples found love through our platform",
      image: "/homeSlider/vivahmain4.png",
      cta: "View Success Stories"
    },
    {
      id: 5,
      title: "Success Stories Every Day",
      subtitle: "Thousands of couples found love through our platform",
      image: "/homeSlider/vivahmain5.png",
      cta: "View Success Stories"
    },
    {
      id: 6,
      title: "Success Stories Every Day",
      subtitle: "Thousands of couples found love through our platform",
      image: "/homeSlider/download.png",
      cta: "View Success Stories"
    },
    {
      id: 7,
      title: "Success Stories Every Day",
      subtitle: "Thousands of couples found love through our platform",
      image: "/homeSlider/vivahmanin77.png",
      cta: "View Success Stories"
    },
    {
      id: 8,
      title: "Success Stories Every Day",
      subtitle: "Thousands of couples found love through our platform",
      image: "/homeSlider/vivahmain8.png",
      cta: "View Success Stories"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Slider Container */}
      <div className="relative w-full h-full ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image - Desktop optimized */}
            <div className="absolute top-0 left-0 w-full h-full " >
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover "
                style={{
                  width: '100vw',
                  height: '100vh',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                onLoad={() => console.log('Image loaded:', slide.image)}
                onError={(e) => {
                  console.log('Image error:', slide.image);
                  // Fallback to background image
                  const parent = e.target.parentElement;
                  parent.style.backgroundImage = `url(${slide.image})`;
                  parent.style.backgroundSize = 'cover';
                  parent.style.backgroundPosition = 'center';
                  parent.style.backgroundRepeat = 'no-repeat';
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            {/* Content */}
            <div className="relative z-20 flex items-center justify-center w-full h-full px-4">
              <div className="text-center text-white max-w-4xl">
                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed opacity-90"
                  style={{
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'
                  }}
                >
                  {slide.subtitle}
                </p>
                
                {/* CTA Button */}
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Feature Icons */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 hidden lg:flex items-center space-x-12 text-white">
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span className="text-sm font-medium">50,000+ Profiles</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span className="text-sm font-medium">26 samaj</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;