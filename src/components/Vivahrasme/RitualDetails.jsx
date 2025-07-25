import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rituals } from './ritualsData';
import { ArrowLeft } from 'lucide-react';

const RitualDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ritual = rituals.find(r => r.id === parseInt(id));

  if (!ritual) return <div>Ritual not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-lg shadow-md text-gray-700"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className={`${ritual.color} p-8 text-white`}>
            <div className="flex items-center gap-4 mb-4">
              {ritual.icon}
              <div>
                <h1 className="text-3xl font-bold">{ritual.name}</h1>
                <p>{ritual.category}</p>
              </div>
            </div>
            <p className="text-lg">{ritual.description}</p>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Purpose & Significance</h3>
              <p className="text-gray-700 mb-6">{ritual.details.purpose}</p>
              <p className="text-gray-700">{ritual.details.significance}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ritual Process</h3>
              <p className="text-gray-700 mb-6">{ritual.details.ritual}</p>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Required Items</h4>
              <div className="flex flex-wrap gap-2">
                {ritual.details.items.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {ritual.name === "Phere (Saat Phere)" && (
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Seven Sacred Vows</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Food and nourishment",
                  "Strength and courage",
                  "Prosperity and wealth",
                  "Happiness and harmony",
                  "Progeny and family",
                  "Health and longevity",
                  "Friendship and understanding"
                ].map((vow, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{vow}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RitualDetails;
