import React, { useState, useEffect } from 'react';
import { categories } from "./VenderData.js"
const VendorDirectory = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const vendors = [
    {
      id: 1,
      name: "शाही मंडप डेकोरेशन",
      category: "decoration",
      location: "Delhi",
      rating: 4.8,
      reviews: 120,
      price: "₹25,000 - ₹1,50,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f29da78ad2?w=300&h=200&fit=crop",
      services: ["मंडप डिजाइन", "फूलों की सजावट", "लाइटिंग", "स्टेज डेकोर"],
      description: "पारंपरिक और मॉडर्न डेकोरेशन में विशेषज्ञ। 10+ साल का अनुभव।",
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: "स्वादिष्ट कैटरिंग सर्विस",
      category: "catering",
      location: "Mumbai",
      rating: 4.9,
      reviews: 85,
      price: "₹400 - ₹1,200 प्रति व्यक्ति",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
      services: ["उत्तर भारतीय", "दक्षिण भारतीय", "चाइनीज़", "मिठाई काउंटर"],
      description: "हर प्रकार के स्वादिष्ट व्यंजन। हाइजीन और क्वालिटी की गारंटी।",
      verified: true,
      featured: false
    },
    {
      id: 3,
      name: "क्लिक मेमोरीज़ फोटोग्राफी",
      category: "photography",
      location: "Jaipur",
      rating: 4.7,
      reviews: 95,
      price: "₹15,000 - ₹75,000",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=200&fit=crop",
      services: ["प्री-वेडिंग", "वेडिंग", "सिनेमैटिक वीडियो", "ड्रोन शूट"],
      description: "प्रोफेशनल फोटोग्राफी टीम। आपकी यादों को सुंदर बनाते हैं।",
      verified: true,
      featured: true
    },
    {
      id: 4,
      name: "ब्राइडल ब्यूटी स्टूडियो",
      category: "beauty",
      location: "Pune",
      rating: 4.6,
      reviews: 110,
      price: "₹5,000 - ₹25,000",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      services: ["ब्राइडल मेकअप", "हेयर स्टाइलिंग", "मेहंदी", "स्किन ट्रीटमेंट"],
      description: "अनुभवी मेकअप आर्टिस्ट्स। सभी प्रकार की ब्राइडल सर्विसेज।",
      verified: true,
      featured: false
    },
    {
      id: 5,
      name: "ग्रांड पैलेस हॉल",
      category: "venue",
      location: "Lucknow",
      rating: 4.8,
      reviews: 75,
      price: "₹50,000 - ₹2,00,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f29da78ad2?w=300&h=200&fit=crop",
      services: ["एयर कंडीशनिंग", "पार्किंग", "डीजे सिस्टम", "कैटरिंग एरिया"],
      description: "500-1000 मेहमानों के लिए शानदार वेडिंग हॉल। सभी सुविधाएं उपलब्ध।",
      verified: true,
      featured: true
    },
    {
      id: 6,
      name: "मेलोडी डीजे साउंड",
      category: "entertainment",
      location: "Bangalore",
      rating: 4.5,
      reviews: 60,
      price: "₹8,000 - ₹30,000",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
      services: ["डीजे सिस्टम", "लाइव बैंड", "साउंड सिस्टम", "लाइटिंग"],
      description: "हर प्रकार की एंटरटेनमेंट सर्विस। लेटेस्ट साउंड इक्विपमेंट।",
      verified: false,
      featured: false
    },
    {
      id: 7,
      name: "रॉयल कार रेंटल",
      category: "transport",
      location: "Chandigarh",
      rating: 4.7,
      reviews: 40,
      price: "₹3,000 - ₹15,000",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
      services: ["लक्जरी कार", "डेकोरेटेड कार", "ड्राइवर", "फूलों की सजावट"],
      description: "शादी के लिए डेकोरेटेड कार्स। सभी प्रकार की लक्जरी गाड़ियां।",
      verified: true,
      featured: false
    },
    {
      id: 8,
      name: "स्वीट सेंसेशन",
      category: "catering",
      location: "Kolkata",
      rating: 4.9,
      reviews: 130,
      price: "₹300 - ₹800 प्रति व्यक्ति",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
      services: ["बंगाली मिठाई", "नॉर्थ इंडियन", "साउथ इंडियन", "स्ट्रीट फूड"],
      description: "बंगाली और उत्तर भारतीय व्यंजनों में विशेषज्ञ। शुद्ध और स्वादिष्ट।",
      verified: true,
      featured: true
    }
  ];



  const locations = ['all', 'Delhi', 'Mumbai', 'Jaipur', 'Pune', 'Lucknow', 'Bangalore', 'Chandigarh', 'Kolkata'];

  const filteredVendors = vendors.filter(vendor => {
    const matchesCategory = activeCategory === 'all' || vendor.category === activeCategory;
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         vendor.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLocation = locationFilter === 'all' || vendor.location === locationFilter;
    
    return matchesCategory && matchesSearch && matchesLocation;
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const VendorCard = ({ vendor, index }) => (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Featured badge */}
      {vendor.featured && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          ⭐ फीचर्ड
        </div>
      )}

      {/* Verified badge */}
      {vendor.verified && (
        <div className="absolute top-4 right-4 z-20 bg-green-500 text-white p-2 rounded-full shadow-lg">
          <span className="text-xs">✓</span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={vendor.image} 
          alt={vendor.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Price overlay */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-sm font-semibold text-gray-800">{vendor.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
            {vendor.name}
          </h3>
          <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-lg">
            <span className="text-sm font-semibold">{vendor.rating}</span>
            <span className="text-xs ml-1">⭐</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <span className="text-sm">📍 {vendor.location}</span>
          <span className="mx-2">•</span>
          <span className="text-sm">👥 {vendor.reviews} रिव्यू</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {vendor.description}
        </p>

        {/* Services */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">सेवाएं:</h4>
          <div className="flex flex-wrap gap-1">
            {vendor.services.slice(0, 3).map((service, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {service}
              </span>
            ))}
            {vendor.services.length > 3 && (
              <span className="text-gray-500 text-xs px-2 py-1">+{vendor.services.length - 3} और</span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            संपर्क करें
          </button>
          <button className="flex-1 border-2 border-rose-500 text-rose-500 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300">
            विवरण देखें
          </button>
        </div>
      </div>

      {/* Hover decorative elements */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-red-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              वेंडर डायरेक्टरी
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-500">
              शादी के लिए सर्वोत्तम सेवा प्रदाताओं का चयन करें
            </p>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-600 mx-auto rounded-full animate-fade-in animation-delay-1000"></div>
          </div>

          {/* Search and filters */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="वेंडर या सेवा खोजें..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <span className="absolute left-3 top-3.5 text-white/70">🔍</span>
              </div>

              {/* Location filter */}
              <div className="relative">
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none"
                >
                  <option value="all">सभी शहर</option>
                  {locations.slice(1).map(location => (
                    <option key={location} value={location} className="text-gray-800">{location}</option>
                  ))}
                </select>
                <span className="absolute left-3 top-3.5 text-white/70">📍</span>
              </div>

              {/* Results count */}
              <div className="flex items-center justify-center text-white font-semibold">
                {filteredVendors.length} वेंडर मिले
              </div>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/20 text-white hover:bg-white/30'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Vendors grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVendors.map((vendor, index) => (
              <VendorCard key={vendor.id} vendor={vendor} index={index} />
            ))}
          </div>

          {/* No results */}
          {filteredVendors.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-white mb-2">कोई वेंडर नहीं मिला</h3>
              <p className="text-white/80">अपना फिल्टर या सर्च बदलकर देखें</p>
            </div>
          )}

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                अपना वेंडर रजिस्टर करें
              </h2>
              <p className="text-white/80 mb-6">
                क्या आप भी शादी की सेवा प्रदान करते हैं? हमारे प्लेटफॉर्म पर जुड़ें
              </p>
              <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                वेंडर बनें
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default VendorDirectory;