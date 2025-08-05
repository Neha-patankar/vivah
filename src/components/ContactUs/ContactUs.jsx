import React, { useState } from "react";
import { Phone, User, MessageCircle, Send, Heart, Sparkles } from "lucide-react";

// Sample communities data (replace with your actual import)
const communities = [
  { name: "अग्रवाल समाज" },
  { name: "गुप्ता समाज" },
  { name: "शर्मा समाज" },
  { name: "वर्मा समाज" },
  { name: "पटेल समाज" },
  { name: "जैन समाज" },
  { name: "सिंह समाज" },
  { name: "राजपूत समाज" }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    samaj: "",
    mobile: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form submitted:", formData);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", samaj: "", mobile: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden mt-16">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel with Circular Images */}
          <div className="lg:w-1/2 bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 p-8 flex flex-col justify-center items-center text-white relative min-h-[600px]">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-5 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            
            {/* Floating Hearts */}
            <Heart className="absolute top-16 right-16 w-6 h-6 text-pink-200 animate-bounce" />
            <Sparkles className="absolute bottom-20 left-16 w-5 h-5 text-yellow-200 animate-pulse" />

            {/* Logo */}
            <div className="relative z-10 mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                <img 
                  src="/vivahlogo.png" 
                  alt="Vivah Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Circular Images Layout */}
            <div className="relative z-10 mb-8">
              {/* Main Couple Image - Center */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl mx-auto hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/HeroSection/couple.png" 
                    alt="Happy Couple" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>

             
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                Contact Us
              </h2>
              <p className="text-lg opacity-90 max-w-sm leading-relaxed">
                आपके विवाह महूर्त के लिए हमसे संपर्क करें। हम आपकी सहायता के लिए यहाँ हैं।
              </p>
              
              {/* Stats */}
              <div className="flex justify-center gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-xs opacity-80">सफल विवाह</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-xs opacity-80">खुश जोड़े</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full mb-3">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Get In Touch</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">संपर्क फॉर्म.</h1>
              <p className="text-gray-600">हमें अपना संदेश भेजें</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Message Sent! 💝
                </h3>
                <p className="text-gray-600 text-lg">
                  आपका संदेश सफलतापूर्वक भेजा गया है। हम जल्दी ही आपसे संपर्क करेंगे।
                </p>
                <div className="flex justify-center mt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-4 h-4 text-pink-500 animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Name Field */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-pink-600 mb-1"
                  >
                    Name / नाम <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-pink-500 transition-colors" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="अपना नाम लिखें"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all bg-gray-50 focus:bg-white focus:shadow-lg"
                    />
                  </div>
                </div>

                {/* Samaj Dropdown */}
                <div className="group">
                  <label
                    htmlFor="samaj"
                    className="block text-sm font-semibold text-pink-600 mb-1"
                  >
                    Select Samaj / समाज चुनें <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="samaj"
                    name="samaj"
                    value={formData.samaj}
                    onChange={handleInputChange}
                    className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all bg-gray-50 focus:bg-white focus:shadow-lg"
                  >
                    <option value="">-- समाज चुनें --</option>
                    {communities.map((samaj, index) => (
                      <option key={index} value={samaj.name}>
                        {samaj.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mobile Field */}
                <div className="group">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold text-pink-600 mb-1"
                  >
                    Mobile / मोबाइल <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-pink-500 transition-colors" />
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="मोबाइल नंबर लिखें"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all bg-gray-50 focus:bg-white focus:shadow-lg"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-pink-600 mb-1"
                  >
                    Message / संदेश
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-4 text-gray-400 w-5 h-5 group-focus-within:text-pink-500 transition-colors" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="अपना संदेश लिखें..."
                      rows="4"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all bg-gray-50 focus:bg-white focus:shadow-lg resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold text-lg uppercase tracking-wide hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Send Message
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}