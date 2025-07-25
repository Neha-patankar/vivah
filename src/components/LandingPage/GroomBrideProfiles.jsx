import React, { useState } from "react";
import { X } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    age: 28,
    profession: "Software Engineer",
    bio: "Loves traveling and photography.",
  },
  {
    id: 2,
    name: "Amit Verma",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    age: 29,
    profession: "Civil Engineer",
    bio: "Calm, family-oriented and adventurous.",
  },
  {
    id: 3,
    name: "Priya Singh",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    age: 26,
    profession: "Teacher",
    bio: "Creative and passionate about learning.",
  },
  {
    id: 4,
    name: "Anjali Mehra",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    age: 25,
    profession: "Fashion Designer",
    bio: "Loves art, fashion, and cooking.",
  },
    {
    id: 5,
    name: "Priya Singh",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    age: 26,
    profession: "Teacher",
    bio: "Creative and passionate about learning.",
  },
  {
    id: 6,
    name: "Anjali Mehra",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    age: 25,
    profession: "Fashion Designer",
    bio: "Loves art, fashion, and cooking.",
  },
  // Add more profiles as needed...
];

export default function GroomBrideProfiles() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className=" bg-gradient-to-r from-yellow-600 via-pink-600 to-yellow-400 py-12 px-4">
      <h2 className="text-center text-white text-sm uppercase tracking-widest font-medium mb-2">
        Introducing Profile
      </h2>
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        Our Groom & Bride
      </h1>

      {/* Profile Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 place-items-center">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedProfile(profile)}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setSelectedProfile(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedProfile.image}
                alt={selectedProfile.name}
                className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {selectedProfile.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                Age: {selectedProfile.age}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Profession: {selectedProfile.profession}
              </p>
              <p className="text-gray-600 mt-2">{selectedProfile.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
