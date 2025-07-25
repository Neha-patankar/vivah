// components/CommunityDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { communities } from '../Samaj/communities';
import { ArrowLeft } from 'lucide-react';
import GotraCrousel from './GotraCrousel';

const CommunityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const community = communities.find(c => c.id === parseInt(id));

  if (!community) {
    return <div>Community not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 p-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-purple-600" />
          <span className="text-purple-600 font-medium">Back to Home</span>
        </button>
      <div className="max-w-8xl mx-auto">
      

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className={`bg-gradient-to-r ${community.gradient} p-8 text-white`}>
            <div className="flex items-center space-x-6">
              <div className="text-6xl bg-white bg-opacity-20 p-4 rounded-full">{community.icon}</div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{community.name}</h1>
                <h2 className="text-2xl opacity-90">{community.english}</h2>
            
              </div>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">परिचय (Introduction)</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{community.description}</p>
            <p className="text-gray-600 leading-relaxed">{community.englishDesc}</p>

            <h3 className="text-2xl font-bold text-purple-800 mt-8 mb-4">Gotra</h3>
            <div className="flex flex-wrap gap-2">
              {community.gotra.map((g, index) => (
                <div key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {g}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GotraCrousel/>
    </div>
  );
};

export default CommunityDetail;
