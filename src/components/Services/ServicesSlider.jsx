import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, Briefcase, HandHeart, FileText, Crown, Calendar, Star, UserCheck, Shield, CheckCircle } from 'lucide-react';

const MatrimonialServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Match Making",
      subtitle: "Find your perfect life partner with our personalized match making services",
      image: "/servicesimage/vsammelan.png",
      cta: "Find Matches",
      bgGradient: "from-rose-400 to-pink-500",
      icon: Heart
    },
    {
      id: 2,
      title: "Parichay Sammelan Management",
      subtitle: "Organized matrimonial events to help you meet compatible partners",
      image: "/servicesimage/vsammelan.png",
      cta: "Join Event",
      bgGradient: "from-purple-400 to-indigo-500",
      icon: Users
    },
    {
      id: 3,
      title: "White Collar Matrimony",
      subtitle: "Exclusive matrimonial platform for professionals and educated individuals",
      image: "/servicesimage/vsammelan.png",
      cta: "Explore Profiles",
      bgGradient: "from-blue-400 to-cyan-500",
      icon: Briefcase
    },
    {
      id: 4,
      title: "Assistance Match Making",
      subtitle: "Get personal assistance from our expert match makers",
      image: "/servicesimage/vsammelan.png",
      cta: "Get Assistance",
      bgGradient: "from-emerald-400 to-teal-500",
      icon: HandHeart
    },
    {
      id: 5,
      title: "Marriage Biodata Maker",
      subtitle: "Create professional and attractive marriage biodata in minutes",
      image: "/servicesimage/vsammelan.png",
      cta: "Create Biodata",
      bgGradient: "from-indigo-400 to-purple-500",
      icon: FileText
    },
    {
      id: 6,
      title: "Premium & VIP Rishte",
      subtitle: "Access exclusive premium profiles and VIP matrimonial services",
      image: "/servicesimage/vsammelan.png",
      cta: "Go Premium",
      bgGradient: "from-amber-400 to-orange-500",
      icon: Crown
    },
    {
      id: 7,
      title: "Vivah Management",
      subtitle: "Complete wedding planning and management services for your special day",
      image: "/servicesimage/vsammelan.png",
      cta: "Plan Wedding",
      bgGradient: "from-pink-400 to-rose-500",
      icon: Calendar
    },
    {
      id: 8,
      title: "Kundali Milan",
      subtitle: "Astrological compatibility matching for a blessed marriage",
      image: "/servicesimage/vsammelan.png",
      cta: "Check Compatibility",
      bgGradient: "from-orange-400 to-red-500",
      icon: Star
    },
    {
      id: 9,
      title: "Vivah Meetup",
      subtitle: "Organized meetups and social events for matrimonial connections",
      image: "/servicesimage/vsammelan.png",
      cta: "Join Meetup",
      bgGradient: "from-teal-400 to-cyan-500",
      icon: UserCheck
    }
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

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute top-0 left-0 w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                onError={(e) => {
                  // Fallback gradient background if image fails
                  const parent = e.target.parentElement;
                  parent.style.background = `linear-gradient(135deg, var(--tw-gradient-stops))`;
                  parent.className += ` bg-gradient-to-br ${slide.bgGradient}`;
                  e.target.style.display = 'none';
                }}
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50"></div>
              {/* Gradient Overlay matching service theme */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-60`}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-20 flex items-center justify-center w-full h-full px-4">
              <div className="text-center text-white max-w-4xl">
                {/* Service Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                </div>

                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed opacity-95 max-w-3xl mx-auto"
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {slide.subtitle}
                </p>
                
                {/* CTA Button */}
                <button className={`bg-gradient-to-r ${slide.bgGradient} hover:scale-105 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform shadow-2xl hover:shadow-white/20 border-2 border-white/30 backdrop-blur-sm`}>
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group border border-white/30"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group border border-white/30"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/50 ${
                index === currentSlide
                  ? 'bg-white scale-125 border-white'
                  : 'bg-white/30 hover:bg-white/60 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Matrimonial Features */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 hidden lg:flex items-center space-x-6 text-white">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">Verified Profiles</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Trusted Platform</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Heart className="h-5 w-5" />
            <span className="text-sm font-medium">Happy Marriages</span>
          </div>
        </div>

        {/* Service Counter */}
        <div className="absolute top-6 right-6 z-30 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
          <span className="text-white text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatrimonialServicesSlider;