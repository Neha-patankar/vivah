import React, { useState, useEffect } from 'react';
import { 
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
  Smile 
} from 'lucide-react';

const rituals = [
  {
    id: 1,
    name: "रोका समारोह",
    category: "Pre-Wedding",
    description: "विवाह की आधिकारिक घोषणा और परिवारों की सहमति।",
    icon: Calendar,
    color: "from-blue-500 to-blue-700",
    image: "/rasmeimage/rokaCeremony.png",
    link: "/ritual/roka"
  },
  {
    id: 2,
    name: "गणेश पूजा",
    category: "Pre-Wedding",
    description: "विवाह के मंगल आरम्भ हेतु भगवान गणेश की पूजा।",
    icon: Star,
    color: "from-orange-500 to-red-600",
    image: "/rasmeimage/ganeshpooja.png",
    link: "/ritual/ganesh-puja"
  },
  {
    id: 3,
    name: "माता पूजा",
    category: "Pre-Wedding",
    description: "विवाह के लिए देवी मां का आशीर्वाद प्राप्त करना।",
    icon: Flower,
    color: "from-pink-500 to-purple-700",
    image: "/rasmeimage/matapooja.png",
    link: "/ritual/mata-puja"
  },
  {
    id: 4,
    name: "तिलक",
    category: "Wedding",
    description: "दूल्हे को सम्मानित करने हेतु कन्या पक्ष द्वारा तिलक का संस्कार।",
    icon: Heart,
    color: "from-red-500 to-orange-600",
    image: "/rasmeimage/titalk.png",
    link: "/ritual/tilak"
  },
  {
    id: 5,
    name: "हल्दी",
    category: "Wedding",
    description: "दूल्हा-दुल्हन को सुंदरता हेतु हल्दी लगाई जाती है।",
    icon: Users,
    color: "from-yellow-500 to-green-600",
    image: "/rasmeimage/haldi.png",
    link: "/ritual/haldi"
  },
  {
    id: 6,
    name: "मेहंदी",
    category: "Wedding",
    description: "दुल्हन व अन्य महिलाओं के हाथों पर मेहंदी लगाई जाती है।",
    icon: Sun,
    color: "from-green-500 to-yellow-600",
    image: "/rasmeimage/mehnadi.png",
    link: "/ritual/mehendi"
  },
  {
    id: 7,
    name: "संगीत",
    category: "Wedding",
    description: "विवाह से पूर्व गीत-संगीत और नृत्य का आयोजन।",
    icon: Music,
    color: "from-purple-500 to-indigo-700",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/sangeet"
  },
  {
    id: 8,
    name: "बारात",
    category: "Wedding",
    description: "दूल्हे और बारातियों का विवाह स्थल तक जुलूस।",
    icon: Clock,
    color: "from-indigo-500 to-blue-700",
    image: "https://images.unsplash.com/photo-1594736797933-d0d3dc4348cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/baraat"
  },
  {
    id: 9,
    name: "मंडप व्यवस्था",
    category: "Wedding",
    description: "विवाह संस्कार हेतु मंडप की सुंदर सजावट।",
    icon: Home,
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/mandap"
  },
  {
    id: 10,
    name: "वरमाला",
    category: "Wedding",
    description: "दूल्हा-दुल्हन द्वारा एक-दूसरे को फूलों की माला पहनाना।",
    icon: Book,
    color: "from-red-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/varmala"
  },
  {
    id: 11,
    name: "कन्यादान",
    category: "Wedding",
    description: "पिता द्वारा कन्या को वर को सौंपने का संस्कार।",
    icon: Handshake,
    color: "from-orange-500 to-yellow-600",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/kanyadaan"
  },
  {
    id: 12,
    name: "फेरे",
    category: "Wedding",
    description: "अग्नि के चारों ओर सात फेरे और सात वचन।",
    icon: Gift,
    color: "from-purple-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1594736797933-d0d3dc4348cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/phere"
  },
  {
    id: 13,
    name: "फोटोग्राफी",
    category: "Wedding",
    description: "हर पल को यादगार बनाने के लिए फोटो।",
    icon: Camera,
    color: "from-blue-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/photography"
  },
  {
    id: 14,
    name: "विदाई",
    category: "Post-Wedding",
    description: "दुल्हन का मायके से विदा लेना।",
    icon: Globe,
    color: "from-red-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/vidai"
  },
  {
    id: 15,
    name: "गृह प्रवेश",
    category: "Post-Wedding",
    description: "दुल्हन का ससुराल में पहला प्रवेश।",
    icon: MapPin,
    color: "from-green-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/grih-pravesh"
  },
  {
    id: 16,
    name: "रिसेप्शन",
    category: "Post-Wedding",
    description: "नवविवाहित जोड़े के स्वागत हेतु आयोजन।",
    icon: Smile,
    color: "from-indigo-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1594736797933-d0d3dc4348cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    link: "/ritual/reception"
  }
];

const RitualCard = ({ ritual, index }) => {
  const IconComponent = ritual.icon;
  
  return (
    <div 
      className={`group flex-shrink-0 w-80 sm:w-96 mx-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100`}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Header with gradient background */}
      <div className={`bg-gradient-to-r ${ritual.color} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="flex items-center justify-between relative z-10">
          <div className="bg-white bg-opacity-20 p-3 rounded-full backdrop-blur-sm">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <div className="text-right">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-sm font-medium backdrop-blur-sm">
              {ritual.category}
            </span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mt-4 mb-2">{ritual.name}</h3>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          {ritual.description}
        </p>
        
        {/* Action button */}
        <button 
          className={`w-full bg-gradient-to-r ${ritual.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95`}
          onClick={() => console.log(`Navigate to ${ritual.link}`)}
        >
          विस्तार से जानें
        </button>
      </div>
    </div>
  );
};

const WeddingRitualsScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Create multiple copies for seamless infinite scroll
  const extendedRituals = [...rituals, ...rituals, ...rituals];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setScrollPosition((prev) => {
          const cardWidth = 384; // w-96 = 384px
          const totalWidth = rituals.length * cardWidth;
          return (prev + 1) % totalWidth;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className=" bg-gradient-to-br bg-red-100 pt-20">
      {/* Header */}
     

      {/* Infinite Scroll Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-20 h-full to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full  z-10 pointer-events-none"></div>
        
        {/* Scrolling content */}
        <div 
          className="flex py-0"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isPaused ? 'transform 0.5s ease-out' : 'none',
            width: 'max-content'
          }}
        >
          {extendedRituals.map((ritual, index) => (
            <RitualCard 
              key={`${ritual.id}-${Math.floor(index / rituals.length)}`} 
              ritual={ritual} 
              index={index}
            />
          ))}
        </div>
      </div>

     

     
    </div>
  );
};

export default WeddingRitualsScroll;