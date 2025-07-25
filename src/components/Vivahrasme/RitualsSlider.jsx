import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Star, 
  Flower, 
  Heart, 
  Users, 
  Sun, 
  Music, 
  Clock, 
  Home, 
  Book, 
  Handshake, 
  Gift, 
  Camera, 
  Globe, 
  MapPin, 
  Smile,
  Shield,
  CheckCircle,
  Award
} from 'lucide-react';

const RitualsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const rituals = [
    {
      id: 1,
      name: "रोका समारोह",
      category: "Pre-Wedding",
      description: "विवाह की आधिकारिक घोषणा और परिवारों की सहमति का पवित्र संस्कार",
      icon: Calendar,
      color: "from-blue-500 to-blue-700",
      image: "/rasmeimage/rokaCeremony.png",
      cta: "Book Roka"
    },
    {
      id: 2,
      name: "गणेश पूजा",
      category: "Pre-Wedding", 
      description: "विवाह के मंगल आरम्भ हेतु भगवान गणेश की पूजा और आशीर्वाद",
      icon: Star,
      color: "from-orange-500 to-red-600",
      image: "/rasmeimage/ganeshpooja.png",
      cta: "Arrange Puja"
    },
    {
      id: 3,
      name: "माता पूजा",
      category: "Pre-Wedding",
      description: "विवाह के लिए देवी मां का आशीर्वाद प्राप्त करने का पावन अनुष्ठान",
      icon: Flower,
      color: "from-pink-500 to-purple-700",
      image: "/rasmeimage/matapooja.png",
      cta: "Book Mata Puja"
    },
    {
      id: 4,
      name: "तिलक समारोह",
      category: "Wedding",
      description: "दूल्हे को सम्मानित करने हेतु कन्या पक्ष द्वारा तिलक का संस्कार",
      icon: Heart,
      color: "from-red-500 to-orange-600",
      image: "/rasmeimage/titalk.png",
      cta: "Plan Tilak"
    },
    {
      id: 5,
      name: "हल्दी रस्म",
      category: "Wedding",
      description: "दूल्हा-दुल्हन को सुंदरता और मंगल कामना हेतु हल्दी का उत्सव",
      icon: Users,
      color: "from-yellow-500 to-green-600",
      image: "/rasmeimage/haldi.png",
      cta: "Organize Haldi"
    },
    {
      id: 6,
      name: "मेहंदी उत्सव",
      category: "Wedding",
      description: "दुल्हन व महिलाओं के हाथों पर मेहंदी का सुंदर कार्यक्रम",
      icon: Sun,
      color: "from-green-500 to-yellow-600",
      image: "/rasmeimage/mehnadi.png",
      cta: "Book Mehendi"
    },
    {
      id: 7,
      name: "संगीत समारोह",
      category: "Wedding",
      description: "विवाह से पूर्व गीत-संगीत और नृत्य का भव्य आयोजन",
      icon: Music,
      color: "from-purple-500 to-indigo-700",
      image: "/rasmeimage/sangit.png",
      cta: "Plan Sangeet"
    },
    {
      id: 8,
      name: "बारात यात्रा",
      category: "Wedding",
      description: "दूल्हे और बारातियों का विवाह स्थल तक शानदार जुलूस",
      icon: Clock,
      color: "from-indigo-500 to-blue-700",
      image: "/rasmeimage/barat.png",
      cta: "Arrange Baraat"
    },
    {
      id: 9,
      name: "मंडप सजावट",
      category: "Wedding",
      description: "विवाह संस्कार हेतु मंडप की भव्य और सुंदर सजावट",
      icon: Home,
      color: "from-orange-500 to-red-600",
      image: "/rasmeimage/mandap.png",
      cta: "Design Mandap"
    },
    {
      id: 10,
      name: "वरमाला रस्म",
      category: "Wedding",
      description: "दूल्हा-दुल्हन द्वारा एक-दूसरे को फूलों की माला पहनाने का संस्कार",
      icon: Book,
      color: "from-red-500 to-pink-600",
      image: "/rasmeimage/vermala.png",
      cta: "Plan Varmala"
    },
    {
      id: 11,
      name: "कन्यादान संस्कार",
      category: "Wedding",
      description: "पिता द्वारा कन्या को वर को सौंपने का पवित्र संस्कार",
      icon: Handshake,
      color: "from-orange-500 to-yellow-600",
      image: "/rasmeimage/kanyadan.png",
      cta: "Arrange Kanyadaan"
    },
    {
      id: 12,
      name: "सात फेरे",
      category: "Wedding",
      description: "अग्नि के चारों ओर सात फेरे और सपत्नी के सात पवित्र वचन",
      icon: Gift,
      color: "from-purple-500 to-pink-600",
      image: "/rasmeimage/fere1.png",
      cta: "Plan Phere"
    },
    {
      id: 13,
      name: "विवाह फोटोग्राफी",
      category: "Wedding",
      description: "हर खुशी के पल को यादगार बनाने के लिए प्रोफेशनल फोटोग्राफी",
      icon: Camera,
      color: "from-blue-500 to-cyan-600",
      image: "/rasmeimage/photograpy.png",
      cta: "Book Photography"
    },
    {
      id: 14,
      name: "विदाई रस्म",
      category: "Post-Wedding",
      description: "दुल्हन का भावुक विदाई संस्कार और मायके से अलविदा",
      icon: Globe,
      color: "from-red-500 to-orange-600",
      image: "/rasmeimage/bidai.png",
      cta: "Plan Vidai"
    },
    {
      id: 15,
      name: "गृह प्रवेश",
      category: "Post-Wedding",
      description: "दुल्हन का ससुराल में पहला स्वागत और गृह प्रवेश संस्कार",
      icon: MapPin,
      color: "from-green-500 to-teal-600",
      image: "/rasmeimage/grahpravesh.png",
      cta: "Arrange Welcome"
    },
    {
      id: 16,
      name: "रिसेप्शन पार्टी",
      category: "Post-Wedding",
      description: "नवविवाहित जोड़े के स्वागत हेतु भव्य रिसेप्शन का आयोजन",
      icon: Smile,
      color: "from-indigo-500 to-purple-600",
      image: "/rasmeimage/reception.png",
      cta: "Plan Reception"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rituals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rituals.length) % rituals.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentRitual = rituals[currentSlide];
  const IconComponent = currentRitual.icon;

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-2xl">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {rituals.map((ritual, index) => (
          <div
            key={ritual.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute top-0 left-0 w-full h-full">
              <img 
                src={ritual.image} 
                alt={ritual.name}
                className="w-full h-full object-cover"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                onError={(e) => {
                  // Fallback gradient background if image fails to load
                  const parent = e.target.parentElement;
                  parent.style.background = `linear-gradient(135deg, var(--tw-gradient-stops))`;
                  parent.className += ` bg-gradient-to-br ${ritual.color}`;
                  e.target.style.display = 'none';
                }}
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/60"></div>
              {/* Gradient Overlay matching ritual theme */}
              <div className={`absolute inset-0 bg-gradient-to-br ${ritual.color} opacity-50`}></div>
              {/* Decorative Pattern Overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '100px 100px'
              }}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-20 flex items-center justify-center w-full h-full px-4">
              <div className="text-center text-white max-w-4xl">
                {/* Category Badge */}
                <div className="flex justify-center mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium border border-white/30">
                    {ritual.category}
                  </span>
                </div>

                {/* Ritual Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 border-2 border-white/30 shadow-xl">
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                </div>

                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                    fontFamily: 'serif'
                  }}
                >
                  {ritual.name}
                </h1>
                <p 
                  className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed opacity-95 max-w-3xl mx-auto"
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {ritual.description}
                </p>
                
                {/* CTA Button */}
                <button className={`bg-gradient-to-r ${ritual.color} hover:scale-105 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform shadow-2xl hover:shadow-white/20 border-2 border-white/30 backdrop-blur-sm`}>
                  {ritual.cta}
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-1 max-w-xs overflow-x-auto">
          {rituals.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 border border-white/50 flex-shrink-0 ${
                index === currentSlide
                  ? 'bg-white scale-125 border-white'
                  : 'bg-white/30 hover:bg-white/60 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Marriage Service Features */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 hidden lg:flex items-center space-x-6 text-white">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">पारंपरिक रीति-रिवाज</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">अनुभवी पंडित जी</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Award className="h-5 w-5" />
            <span className="text-sm font-medium">संपूर्ण व्यवस्था</span>
          </div>
        </div>

        {/* Ritual Counter */}
        <div className="absolute top-6 right-6 z-30 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
          <span className="text-white text-sm font-medium">
            {currentSlide + 1} / {rituals.length}
          </span>
        </div>

        {/* Category Indicator */}
        <div className="absolute top-6 left-6 z-30">
          <div className={`bg-gradient-to-r ${currentRitual.color} px-4 py-2 rounded-full border border-white/30`}>
            <span className="text-white text-sm font-bold">
              {currentRitual.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualsSlider;