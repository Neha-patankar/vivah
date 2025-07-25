

// // RitualList.jsx or VivahRasme.jsx
// import React from "react";
// import { rituals } from "./ritualsData";
// import { useNavigate } from "react-router-dom";

// export default function RitualList() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       {/* Page Heading */}
//       <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 text-center">
//         <h1 className="text-3xl font-bold text-white">विवाह रस्में</h1>
//       </div>

//       {/* Ritual Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
//         {rituals.map((ritual) => {
//           const Icon = ritual.icon;

//           return (
//             <div
//               key={ritual.id}
//               className="relative rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group"
//               onClick={() => navigate(ritual.link)}
//             >
//               {/* Background Image */}
//               <div className="absolute inset-0 w-full h-full">
//                 <img
//                   src={
//                     ritual.image ||
//                     "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//                   }
//                   alt={ritual.name}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//               </div>

//               {/* Gradient Color Overlay (Your Custom Color Preserved) */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${ritual.color} opacity-85 group-hover:opacity-10 transition-opacity duration-500`}
//               />

//               {/* Content */}
//               <div className="relative z-10 p-4 h-full flex flex-col justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm">
//                     <Icon className="w-7 h-7 text-black" />
//                   </div>
//                   <h2 className="text-xl font-semibold text-white drop-shadow-lg">
//                     {ritual.name}
//                   </h2>
//                 </div>

//                 <p className="mt-4 text-white text-sm leading-relaxed drop-shadow-md">
//                   {ritual.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { rituals } from "./ritualsData";
import { X } from "lucide-react"; // Close icon

export default function RitualList() {
  const [selectedRitual, setSelectedRitual] = useState(null);

  return (
    <div>
      {/* Page Heading */}
      <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 text-center">
        <h1 className="text-3xl font-bold text-white">विवाह रस्में</h1>
      </div>

      {/* Ritual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {rituals.map((ritual) => {
          const Icon = ritual.icon;

          return (
            <div
              key={ritual.id}
              className="relative rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group"
              onClick={() => setSelectedRitual(ritual)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={
                    ritual.image ||
                    "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  }
                  alt={ritual.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${ritual.color} opacity-85 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h2 className="text-xl font-semibold text-white drop-shadow-lg">
                    {ritual.name}
                  </h2>
                </div>
                <p className="mt-4 text-white text-sm leading-relaxed drop-shadow-md">
                  {ritual.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedRitual && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-black"
              onClick={() => setSelectedRitual(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-yellow-100">
                <selectedRitual.icon className="w-8 h-8 text-yellow-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedRitual.name}
              </h2>
            </div>
            <img
              src={
                selectedRitual.image ||
                "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
              alt={selectedRitual.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 text-base leading-relaxed">
              {selectedRitual.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
