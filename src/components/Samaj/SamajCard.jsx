import React, { useState, useEffect } from 'react';
import { Search, Users, Check, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { communities } from "../Samaj/communities.js";

const SamajCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const navigate = useNavigate();

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.english.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (community) => {
    setSelectedCommunity(community.name);
    navigate(`/community/${community.id}`);
  };

  return (
    <div className=" bg-gradient-to-bl from-red-200  to-pink-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" flex text-center mb-0 items-center justify-center gap-5">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-red-600 rounded-full mb-4 shadow-xl">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-0">
            अपना समाज चुनें
          </h1>
          </div>

          <div className="mb-5 text-center">
          <div className="inline-flex items-center space-x-6 bg-white rounded-xl px-6 py-3 shadow-xl border border-purple-100">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {communities.length} +
              </div>
              <div className="text-xs text-gray-600 font-bold">samaj</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                50000+
              </div>
              <div className="text-xs text-gray-600 font-bold">Profiles</div>
            </div>
          </div>
        </div>

        {/* Selected Community Display */}
        {selectedCommunity && (
          <div className="mb-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border border-purple-100">
              <Check className="w-4 h-4 text-green-500" />
              <span className="font-medium text-purple-700">Selected: {selectedCommunity}</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            <button
              onClick={() => setSelectedCommunity('')}
              className="text-xs text-red-500 mt-2 underline"
            >
              Clear Selection
            </button>
          </div>
        )}

        {/* Search */}
        {/* <div className="relative mb-8">
          <div className="bg-white/90 rounded-2xl shadow-xl p-4 border border-purple-100">
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
        </div> */}

        {/* Community Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 ">
          {filteredCommunities.length > 0 ? (
            filteredCommunities.map((community, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(community)}
                onKeyDown={(e) => e.key === 'Enter' && handleCardClick(community)}
                className={`bg-white/90 max-w-40 rounded-xl p-2 shadow-lg border-2 border-transparent cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 transform group ${
                  selectedCommunity === community.name
                    ? 'ring-2 ring-purple-400 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300'
                    : 'hover:border-purple-200'
                }`}
              >
                <div className="text-center ">
                  <div
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-1 bg-gradient-to-r ${community.gradient} shadow-md group-hover:shadow-lg transition-all`}
                  >
                    <div className="text-xl">{community.icon}</div>
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-gray-800 group-hover:text-purple-700 transition-colors">
                    {community.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-2 text-nowrap">{community.english}</p>
                  <div className={`w-8 h-0.5 bg-gradient-to-r text-nowrap ${community.gradient} rounded-full mx-auto mb-2`}></div>
                  {/* <div className="text-xs text-gray-400 group-hover:text-purple-500 transition-colors">
                    Click for details
                  </div> */}
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No communities found.</p>
          )}
       

      
      </div>
       </div>
    </div>
  );
};

export default SamajCard;
