


import React, { useState, useEffect } from 'react';

const SadiHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leftSliderData = [
    {
      title: "वधू-वर खोजें",
      description: "हजारों प्रोफाइल्स में से अपना जीवनसाथी",
      icon: "👰",
      color: "from-pink-400 to-rose-600"
    },
    {
      title: "मैच मेकिंग",
      description: "परफेक्ट मैच के लिए एडवांस्ड फिल्टर",
      icon: "💕",
      color: "from-red-400 to-pink-600"
    },
    {
      title: "शादी की तैयारी",
      description: "A to Z शादी की सभी जरूरतें",
      icon: "💒",
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "रिश्ते का सत्यापन",
      description: "100% वेरिफाइड प्रोफाइल्स",
      icon: "✅",
      color: "from-green-400 to-teal-600"
    },
    {
      title: "कुंडली मिलान",
      description: "ज्योतिष विशेषज्ञों द्वारा मैचिंग",
      icon: "🔮",
      color: "from-orange-400 to-red-600"
    }
  ];

  const rightSliderData = [
    {
      title: "फोटो गैलरी",
      description: "सुंदर शादी की तस्वीरें देखें",
      icon: "📸",
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "वेडिंग प्लानिंग",
      description: "शादी की पूरी योजना बनाएं",
      icon: "📋",
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "डेकोरेशन सर्विस",
      description: "शानदार मंडप और सजावट",
      icon: "🎊",
      color: "from-yellow-400 to-orange-600"
    },
    {
      title: "कैटरिंग सर्विस",
      description: "स्वादिष्ट व्यंजन और मिठाइयां",
      icon: "🍽️",
      color: "from-green-400 to-teal-600"
    },
    {
      title: "मेहंदी & मेकअप",
      description: "ब्राइडल ब्यूटी सर्विसेज",
      icon: "💄",
      color: "from-rose-400 to-pink-600"
    }
  ];

  const centerImages = [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % centerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const SliderCard = ({ data, direction }) => (
    <div className={`
      hidden lg:block absolute 
      ${direction === 'left' ? 'left-0' : 'right-0'} 
      top-0 w-80 overflow-hidden
    `}>
      <div className={`flex flex-col ${direction === 'left' ? 'animate-slide-up' : 'animate-slide-down'}`}>
        {[...data, ...data, ...data].map((item, index) => (
          <div
            key={index}
            className={`min-h-32 p-6 m-2 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-sm bg-opacity-90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{item.icon}</div>
              <div className="text-white">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MobileSlider = ({ data, direction }) => (
    <div className="lg:hidden overflow-hidden w-full">
      <div className={`flex ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}`}>
        {[...data, ...data, ...data, ...data].map((item, index) => (
          <div
            key={index}
            className={`
              flex-shrink-0 w-72 sm:w-80 p-4 m-2 rounded-2xl 
              bg-gradient-to-br ${item.color} backdrop-blur-sm bg-opacity-90 
              shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer
            `}
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl sm:text-4xl">{item.icon}</div>
              <div className="text-white">
                <h3 className="text-base sm:text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className=" bg-gradient-to-br from-rose-900 via-pink-900 to-red-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full">
        <div className="w-full max-w-7xl mx-auto relative h-full">
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:h-full">
            {/* Left Slider */}
            <SliderCard data={leftSliderData} direction="left" />

            {/* Center Image Section */}
            <div className="flex justify-center items-center relative">
              <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl group">
                {centerImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Wedding Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
              </div>
            </div>

            {/* Right Slider */}
            <SliderCard data={rightSliderData} direction="right" />
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-center px-4 py-8 h-full">
            <div className="w-full">
              {/* Center Image Section - Mobile */}
              <div className="flex justify-center items-center mb-8">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-2xl group">
                {centerImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Wedding Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
              </div>
            </div>

              {/* Mobile Horizontal Sliders */}
              <div className="space-y-6">
                <MobileSlider data={leftSliderData} direction="left" />
                <MobileSlider data={rightSliderData} direction="right" />
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {centerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes slide-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        
        @keyframes slide-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        
        .animate-slide-up {
          animation: slide-up 20s linear infinite;
        }
        
        .animate-slide-down {
          animation: slide-down 20s linear infinite;
        }
        
        .animate-slide-left {
          animation: slide-left 25s linear infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 25s linear infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SadiHeroSection;