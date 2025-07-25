import React, { useState, useEffect } from 'react';
import { Search, Users, ChevronDown, Check, Heart, Star, Crown, ArrowLeft, Home } from 'lucide-react';
import { communities } from "../Samaj/communities.js";

const SamajCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCommunityData, setSelectedCommunityData] = useState(null);

  
  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.english.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.community-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelect = (community) => {
    setSelectedCommunity(community.name);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleCardClick = (community) => {
    setSelectedCommunityData(community);
    setCurrentPage('community');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedCommunityData(null);
  };

  if (currentPage === 'community' && selectedCommunityData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-medium">Back to Home</span>
            </button>
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-all"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
          </div>

          {/* Community Detail Page */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Hero Section */}
            <div className={`bg-gradient-to-r ${selectedCommunityData.gradient} p-8 text-white`}>
              <div className="flex items-center space-x-6">
                <div className="text-6xl bg-white bg-opacity-20 p-4 rounded-full">
                  {selectedCommunityData.icon}
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">{selectedCommunityData.name}</h1>
                  <h2 className="text-2xl opacity-90">{selectedCommunityData.english}</h2>
                  <p className="text-xl opacity-80 mt-2">Population: {selectedCommunityData.population}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Description */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">परिचय (Introduction)</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {selectedCommunityData.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedCommunityData.englishDesc}
                    </p>
                  </div>

                  {/* Traditions */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">परंपराएं (Traditions)</h3>
                    <div className="space-y-2">
                      {selectedCommunityData.traditions.map((tradition, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-purple-50 p-3 rounded-lg">
                          <Star className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700">{tradition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Regions */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">मुख्य क्षेत्र (Main Regions)</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedCommunityData.regions.map((region, index) => (
                        <div key={index} className={`bg-gradient-to-r ${selectedCommunityData.gradient} p-4 rounded-lg text-white text-center font-medium`}>
                          {region}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">समुदाय की जानकारी</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Population</span>
                        <span className="font-bold text-purple-700">{selectedCommunityData.population}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Main Regions</span>
                        <span className="font-bold text-purple-700">{selectedCommunityData.regions.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Traditions</span>
                        <span className="font-bold text-purple-700">{selectedCommunityData.traditions.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-red-600 rounded-full mb-4 shadow-xl">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
            अपना समुदाय चुनें
          </h1>
          <p className="text-gray-600">Choose Your Community</p>
        </div>

        {/* Selected Community Display */}
        {selectedCommunity && (
          <div className="mb-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border border-purple-100">
              <Check className="w-4 h-4 text-green-500" />
              <span className="font-medium text-purple-700">Selected: {selectedCommunity}</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
          </div>
        )}

        {/* Search */}
        <div className="community-selector relative mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-purple-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search communities... समुदाय खोजें..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Compact Community Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCommunities.map((community, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(community)}
              className={`bg-white rounded-xl p-4 shadow-lg border-2 border-transparent cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 transform group ${
                selectedCommunity === community.name 
                  ? 'ring-2 ring-purple-400 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300' 
                  : 'hover:border-purple-200'
              }`}
            >
              <div className="text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 bg-gradient-to-r ${community.gradient} shadow-md group-hover:shadow-lg transition-all`}>
                  <div className="text-xl">{community.icon}</div>
                </div>
                
                {/* Name */}
                <h3 className="font-bold text-sm mb-1 text-gray-800 group-hover:text-purple-700 transition-colors">
                  {community.name}
                </h3>
                
                {/* English name */}
                <p className="text-gray-500 text-xs mb-2">{community.english}</p>
                
                {/* Gradient line */}
                <div className={`w-8 h-0.5 bg-gradient-to-r ${community.gradient} rounded-full mx-auto mb-2`}></div>
                
                {/* Click indicator */}
                <div className="text-xs text-gray-400 group-hover:text-purple-500 transition-colors">
                  Click for details
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center space-x-6 bg-white rounded-xl px-6 py-3 shadow-xl border border-purple-100">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{communities.length}</div>
              <div className="text-xs text-gray-600">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">50000+</div>
              <div className="text-xs text-gray-600">Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamajCard;