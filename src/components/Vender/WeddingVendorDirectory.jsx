import React, { useState } from "react";
import {
  useNavigate,
  useParams,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import { ArrowLeft, Star, Phone, MapPin, Clock, Users } from "lucide-react";

const categories = [
  {
    id: "all",
    name: "सभी वेंडर",
    icon: "🎯",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "catering",
    name: "कैटरिंग",
    icon: "🍽️",
    color: "from-green-500 to-teal-500",
  },
  {
    id: "decoration",
    name: "डेकोरेशन",
    icon: "🎊",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "mehandi",
    name: "मेंहदी आर्टिस्ट",
    icon: "🎨",
    color: "from-orange-500 to-red-500",
  },
  { id: "dj", name: "डीजे", icon: "🎧", color: "from-cyan-500 to-blue-500" },
  {
    id: "dancer",
    name: "डांसर",
    icon: "💃",
    color: "from-purple-500 to-pink-500",
  },
  { id: "gifts", name: "गिफ्ट", icon: "🎁", color: "from-red-500 to-pink-500" },
  {
    id: "makeup",
    name: "मेकअप आर्टिस्ट",
    icon: "💄",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "flower",
    name: "फूल सजावट",
    icon: "🌸",
    color: "from-green-400 to-pink-400",
  },
  {
    id: "garden",
    name: "मैरिज गार्डन",
    icon: "🌳",
    color: "from-green-500 to-teal-500",
  },
  {
    id: "hotel",
    name: "होटल",
    icon: "🏨",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "travels",
    name: "ट्रेवल्स",
    icon: "🚗",
    color: "from-gray-500 to-gray-700",
  },
  {
    id: "ghode",
    name: "घोड़ेवाला",
    icon: "🐎",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "pandit",
    name: "पंडितजी",
    icon: "🕉️",
    color: "from-orange-400 to-red-500",
  },
  {
    id: "kundli",
    name: "कुंडली मिलन",
    icon: "📜",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "anchor",
    name: "एंकर",
    icon: "🎤",
    color: "from-blue-400 to-purple-500",
  },
  {
    id: "photography",
    name: "फोटोग्राफर",
    icon: "📸",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "event",
    name: "इवेंट ऑर्गेनाइजर",
    icon: "🎪",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "lighting",
    name: "लाइटिंग",
    icon: "💡",
    color: "from-yellow-300 to-orange-400",
  },
  {
    id: "band",
    name: "बैंड बाजा",
    icon: "🎺",
    color: "from-red-400 to-pink-500",
  },
  {
    id: "cards",
    name: "विवाह कार्ड",
    icon: "💌",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: "dress_rental",
    name: "विवाह ड्रेस (रेंटल)",
    icon: "👗",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "dress_showroom",
    name: "विवाह ड्रेस शोरूम",
    icon: "👘",
    color: "from-indigo-400 to-purple-500",
  },
  {
    id: "jewellery_rental",
    name: "ज्वेलरी (रेंटल)",
    icon: "💍",
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: "jewellery_showroom",
    name: "ज्वेलरी शोरूम",
    icon: "💎",
    color: "from-amber-400 to-yellow-500",
  },
  {
    id: "mithai",
    name: "मिठाईवाला",
    icon: "🍬",
    color: "from-orange-400 to-red-400",
  },
  {
    id: "boutique",
    name: "बुटीक",
    icon: "✂️",
    color: "from-pink-400 to-purple-400",
  },
  {
    id: "tent",
    name: "टेंट हाउस",
    icon: "⛺",
    color: "from-green-400 to-blue-400",
  },
  {
    id: "housekeeping",
    name: "हाउस किपिंग",
    icon: "🧹",
    color: "from-teal-400 to-green-500",
  },
  {
    id: "security",
    name: "सिक्यूरिटी",
    icon: "🔒",
    color: "from-gray-600 to-gray-800",
  },
  {
    id: "celebrity",
    name: "आर्टिस्ट/सेलिब्रिटी",
    icon: "⭐",
    color: "from-yellow-500 to-orange-600",
  },
];

// Sample vendor data for different categories
const vendorData = {
  makeup: [
    {
      id: 1,
      name: "प्रिया मेकअप आर्टिस्ट",
      rating: 4.8,
      reviews: 125,
      price: "₹8,000 - ₹15,000",
      location: "भोपाल, मध्य प्रदेश",
      experience: "5+ साल",
      services: ["ब्राइडल मेकअप", "पार्टी मेकअप", "हेयर स्टाइलिंग"],
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjM2ZjgzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TWFrZXVwIEFydGlzdDwvdGV4dD48L3N2Zz4=",
    },
    {
      id: 2,
      name: "रितु ब्यूटी पार्लर",
      rating: 4.6,
      reviews: 89,
      price: "₹6,000 - ₹12,000",
      location: "भोपाल, मध्य प्रदेश",
      experience: "8+ साल",
      services: ["ब्राइडल मेकअप", "साड़ी ड्रेपिंग", "फेशियल"],
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjM2ZjgzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QmVhdXR5IFBhcmxvcjwvdGV4dD48L3N2Zz4=",
    },
    {
      id: 3,
      name: "अंजली मेकअप स्टूडियो",
      rating: 4.9,
      reviews: 156,
      price: "₹10,000 - ₹20,000",
      location: "भोपाल, मध्य प्रदेश",
      experience: "6+ साल",
      services: ["HD मेकअप", "एयरब्रश मेकअप", "प्री-वेडिंग शूट"],
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjM2ZjgzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TWFrZXVwIFN0dWRpbzwvdGV4dD48L3N2Zz4=",
    },
  ],
  catering: [
    {
      id: 1,
      name: "शुभम कैटरिंग सर्विसेस",
      rating: 4.7,
      reviews: 203,
      price: "₹300 - ₹800 प्रति प्लेट",
      location: "भोपाल, मध्य प्रदेश",
      experience: "10+ साल",
      services: ["वेज कैटरिंग", "नॉन-वेज कैटरिंग", "लाइव काउंटर"],
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjM2ZjgzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2F0ZXJpbmcgU2VydmljZTwvdGV4dD48L3N2Zz4=",
    },
    {
      id: 2,
      name: "राज फूड कैटरर्स",
      rating: 4.5,
      reviews: 167,
      price: "₹250 - ₹600 प्रति प्लेट",
      location: "भोपाल, मध्य प्रदेश",
      experience: "12+ साल",
      services: ["थाली सिस्टम", "बुफे सर्विस", "पारंपरिक व्यंजन"],
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjM2ZjgzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Rm9vZCBDYXRlcmVyczwvdGV4dD48L3N2Zz4=",
    },
  ],
  photography: [
    {
      id: 1,
      name: "प्रेम फोटोग्राफी",
      rating: 4.8,
      reviews: 98,
      price: "₹25,000 - ₹60,000",
      location: "भोपाल, मध्य प्रदेश",
      experience: "7+ साल",
      services: ["वेडिंग फोटोग्राफी", "वीडियोग्राफी", "प्री-वेडिंग शूट"],
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjM2ZjgzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGhvdG9ncmFwaGVyPC90ZXh0Pjwvc3ZnPg==",
    },
  ],
};

const WeddingVendorDirectory = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (category.id === "all") {
      navigate("/vendors/all");
    } else {
      navigate(`/vendors/${category.id}`);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const VendorCard = ({ vendor }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <img
        src={vendor.image}
        alt={vendor.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {vendor.name}
          </h3>
          <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-semibold text-gray-700">
              {vendor.rating}
            </span>
          </div>
        </div>

        <p className="text-gray-600 mb-2 flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
          {vendor.location}
        </p>

        <p className="text-gray-600 mb-2 flex items-center">
          <Clock className="w-4 h-4 mr-2 text-gray-400" />
          अनुभव: {vendor.experience}
        </p>

        <p className="text-gray-600 mb-3 flex items-center">
          <Users className="w-4 h-4 mr-2 text-gray-400" />
          {vendor.reviews} रिव्यूज
        </p>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">सेवाएं:</p>
          <div className="flex flex-wrap gap-1">
            {vendor.services.map((service, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-green-600">{vendor.price}</p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            संपर्क करें
          </button>
        </div>
      </div>
    </div>
  );

  const VendorListPage = () => {
    const vendors = vendorData[selectedCategory?.id] || [];

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <button
              onClick={handleBackToHome}
              className="mr-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center">
              <span className="text-4xl mr-4">{selectedCategory?.icon}</span>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {selectedCategory?.name}
                </h1>
                <p className="text-gray-600">
                  भोपाल में बेहतरीन {selectedCategory?.name} सेवाएं
                </p>
              </div>
            </div>
          </div>

          {vendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {vendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">{selectedCategory?.icon}</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                जल्द ही उपलब्ध
              </h3>
              <p className="text-gray-600">
                इस श्रेणी में वेंडर जल्द ही जोड़े जाएंगे।
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            💑 शादी वेंडर डायरेक्टरी
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            आपकी सपनों की शादी के लिए सबसे बेहतरीन वेंडर्स खोजें
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories
            .filter((cat) => cat.id !== "all")
            .map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`group relative bg-gradient-to-br ${category.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-white overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center leading-tight">
                    {category.name}
                  </h3>
                  <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-white/60 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );

  const AllVendorsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={handleBackToHome}
            className="mr-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">सभी वेंडर्स</h1>
            <p className="text-gray-600">भोपाल के सभी श्रेणी के वेंडर्स</p>
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(vendorData).map(([categoryId, vendors]) => {
            const category = categories.find((cat) => cat.id === categoryId);
            return (
              <div
                key={categoryId}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category?.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {category?.name}
                    </h2>
                    <p className="text-gray-600">
                      {vendors.length} वेंडर्स उपलब्ध
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vendors.slice(0, 3).map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} />
                  ))}
                </div>
                {vendors.length > 3 && (
                  <div className="text-center mt-4">
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    >
                      और देखें ({vendors.length - 3} और)
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  if (currentPage === "vendor-list") {
    return <VendorListPage />;
  }

  if (currentPage === "all-vendors") {
    return <AllVendorsPage />;
  }

  return <HomePage />;
};

export default WeddingVendorDirectory;
