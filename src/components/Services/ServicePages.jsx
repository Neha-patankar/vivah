// import React from "react";
// import {
//   Heart,
//   Users,
//   Briefcase,
//   HandHeart,
//   FileText,
//   Crown,
//   Calendar,
//   Star,
//   UserCheck,
//   ArrowRight,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const services = [
//   {
//     id: 1,
//     title: "Match Making",
//     slug: "match-making",
//     icon: Heart,
//     bgGradient: "from-rose-400 to-pink-500",
//     textColor: "text-rose-600",
//     hoverBorder: "hover:border-rose-200",
//     image: "/servicesimage/matchmacking.png", 
//   },
//   {
//     id: 2,
//     title: "Parichay Sammelan Management",
//     slug: "parichay-sammelan",
//     icon: Users,
//     bgGradient: "from-purple-400 to-indigo-500",
//     textColor: "text-purple-600",
//     hoverBorder: "hover:border-purple-200",
//     image: "/servicesimage/sammelanmanagement.png", 
//   },
//   {
//     id: 3,
//     title: "White Collar Matrimony Site/App",
//     slug: "white-collar-matrimony",
//     icon: Briefcase,
//     bgGradient: "from-blue-400 to-cyan-500",
//     textColor: "text-blue-600",
//     hoverBorder: "hover:border-blue-200",
//     image: "/servicesimage/whitecollarapp2.jpg", // Unique image for White Collar Matrimony
//   },
//   {
//     id: 4,
//     title: "Assistance Match Making",
//     slug: "assistance-match-making",
//     icon: HandHeart,
//     bgGradient: "from-emerald-400 to-teal-500",
//     textColor: "text-emerald-600",
//     hoverBorder: "hover:border-emerald-200",
//     image: "/servicesimage/matchmaking.png", // Unique image for Assistance Match Making
//   },
//   {
//     id: 5,
//     title: "Marriage Biodata Maker",
//     slug: "biodata-maker",
//     icon: FileText,
//     bgGradient: "from-indigo-400 to-purple-500",
//     textColor: "text-indigo-600",
//     hoverBorder: "hover:border-indigo-200",
//     image: "/servicesimage/marrieage.png", // Unique image for Biodata Maker
//   },
//   {
//     id: 6,
//     title: "Premium & VIP Rishte",
//     slug: "premium-vip-rishte",
//     icon: Crown,
//     bgGradient: "from-amber-400 to-orange-500",
//     textColor: "text-amber-600",
//     hoverBorder: "hover:border-amber-200",
//     image: "/servicesimage/vippremiumrishte2.png", // Unique image for Premium & VIP Rishte
//   },
//   {
//     id: 7,
//     title: "Vivah Management",
//     slug: "vivah-management",
//     icon: Calendar,
//     bgGradient: "from-pink-400 to-rose-500",
//     textColor: "text-pink-600",
//     hoverBorder: "hover:border-pink-200",
//     image: "/servicesimage/vsammelan.png", // Unique image for Vivah Management
//   },
//   {
//     id: 8,
//     title: "Kundali Milan",
//     slug: "kundali-milan",
//     icon: Star,
//     bgGradient: "from-orange-400 to-red-500",
//     textColor: "text-orange-600",
//     hoverBorder: "hover:border-orange-200",
//     image: "/servicesimage/kundli milan.png", // Unique image for Kundali Milan
//   },
//   {
//     id: 9,
//     title: "Vivah Meetup",
//     slug: "vivah-meetup",
//     icon: UserCheck,
//     bgGradient: "from-teal-400 to-cyan-500",
//     textColor: "text-teal-600",
//     hoverBorder: "hover:border-teal-200",
//     image: "/servicesimage/vivahmeetup.png", // Unique image for Vivah Meetup
//   },
//    {
//     id: 10,
//     title: "Biodata Maker",
//     slug: "vivah-meetup",
//     icon: UserCheck,
//     bgGradient: "from-teal-400 to-cyan-500",
//     textColor: "text-teal-600",
//     hoverBorder: "hover:border-teal-200",
//     image: "/servicesimage/biodata.png", // Unique image for Vivah Meetup
//   },
// ];

// const ServicePages = () => {
//   const navigate = useNavigate();

//   const goToService = (slug) => {
//     navigate(`/service/${slug}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-bl from-orange-200 via-white to-orange-100">
//       {/* Header */}
//       <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 text-center">
//         <h1 className="text-3xl font-bold text-white">हमारी सेवाएं</h1>
//       </div>

//       {/* Description */}
//       <div className="text-center px-4 py-8">
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
//           Discover our comprehensive matrimonial services designed to help you
//           find your perfect life partner with trust, tradition, and modern
//           efficiency.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 md:px-10 lg:px-20 sm:pb-20 pb-10">
//         {services.map((service) => {
//           const Icon = service.icon;
//           return (
//             <div
//               key={service.id}
//               onClick={() => goToService(service.slug)}
//               className={`group relative bg-white rounded-2xl p-2  shadow-md hover:shadow-xl border border-gray-100 cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${service.hoverBorder}`}
//             >
//               <div className="w-full h-44 sm:w-full sm:h-52">
//                 <img 
//                   src={service.image} 
//                   alt={service.title}
//                   className="w-full h-52 rounded-md object-cover"
//                 />
//               </div>
//               {/* Gradient Background Hover Overlay */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
//               ></div>

//               <div className="relative z-10 ">
//                 <div className="flex gap-4 bg-red-200 mx-5 mt-[-20px]">
//                 {/* Icon */}
//                 {/* <div
//                   className={`w-8 h-8 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.bgGradient} mb-4 shadow-md`}
//                 >
//                   <Icon className="text-white w-4 h-4" />
//                 </div> */}

//                 {/* Title */}
//                 <h2
//                   className={`text-xs font-bold mb-2 text-center items-center group-hover:${service.textColor}`}
//                 >
//                   {service.title}
//                 </h2>
//                </div>
//                 {/* Description */}
                

//                 {/* Know More Button */}
//                 <div className="flex justify-center items-center  ">
//                   <button className="bg-blue-800 text-white   px-3 py-2 rounded-full text-xs font-bold hover:bg-orange-500 transition">
//                      और जानें..
//                   </button>
                 
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServicePages;

import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Match Making",
    slug: "match-making",
    bgGradient: "from-rose-400 to-pink-500",
    textColor: "text-rose-600",
    hoverBorder: "hover:border-rose-200",
    image: "/servicesimage/matchmacking.png",
  },
  {
    id: 2,
    title: "Parichay Sammelan Management",
    slug: "parichay-sammelan",
    bgGradient: "from-purple-400 to-indigo-500",
    textColor: "text-purple-600",
    hoverBorder: "hover:border-purple-200",
    image: "/servicesimage/sammelanmanagement.png",
  },
  {
    id: 3,
    title: "White Collar Matrimony Site/App",
    slug: "white-collar-matrimony",
    bgGradient: "from-blue-400 to-cyan-500",
    textColor: "text-blue-600",
    hoverBorder: "hover:border-blue-200",
    image: "/servicesimage/whitecollarapp2.jpg",
  },
  {
    id: 4,
    title: "Assistance Match Making",
    slug: "assistance-match-making",
    bgGradient: "from-emerald-400 to-teal-500",
    textColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-200",
    image: "/servicesimage/matchmaking.png",
  },
  {
    id: 5,
    title: "Marriage Biodata Maker",
    slug: "biodata-maker",
    bgGradient: "from-indigo-400 to-purple-500",
    textColor: "text-indigo-600",
    hoverBorder: "hover:border-indigo-200",
    image: "/servicesimage/marrieage.png",
  },
  {
    id: 6,
    title: "Premium & VIP Rishte",
    slug: "premium-vip-rishte",
    bgGradient: "from-amber-400 to-orange-500",
    textColor: "text-amber-600",
    hoverBorder: "hover:border-amber-200",
    image: "/servicesimage/vippremiumrishte2.png",
  },
  {
    id: 7,
    title: "Vivah Management",
    slug: "vivah-management",
    bgGradient: "from-pink-400 to-rose-500",
    textColor: "text-pink-600",
    hoverBorder: "hover:border-pink-200",
    image: "/servicesimage/vsammelan.png",
  },
  {
    id: 8,
    title: "Kundali Milan",
    slug: "kundali-milan",
    bgGradient: "from-orange-400 to-red-500",
    textColor: "text-orange-600",
    hoverBorder: "hover:border-orange-200",
    image: "/servicesimage/kundli milan.png",
  },
  {
    id: 9,
    title: "Vivah Meetup",
    slug: "vivah-meetup",
    bgGradient: "from-teal-400 to-cyan-500",
    textColor: "text-teal-600",
    hoverBorder: "hover:border-teal-200",
    image: "/servicesimage/vivahmeetup.png",
  },
  {
    id: 10,
    title: "Biodata Maker",
    slug: "biodata-maker-alt", // Corrected duplicate slug
    bgGradient: "from-teal-400 to-cyan-500",
    textColor: "text-teal-600",
    hoverBorder: "hover:border-teal-200",
    image: "/servicesimage/biodata.png",
  },
];

const ServicePages = () => {
  const navigate = useNavigate();

  const goToService = (slug) => {
    navigate(`/service/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-orange-200 via-white to-orange-100">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 text-center">
        <h1 className="text-3xl font-bold text-white">हमारी सेवाएं</h1>
      </div>

      {/* Description */}
      <div className="text-center px-4 py-8">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Discover our comprehensive matrimonial services designed to help you
          find your perfect life partner with trust, tradition, and modern
          efficiency.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-10 lg:px-20 pb-20">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => goToService(service.slug)}
            className={`group relative bg-white rounded-2xl p-3 shadow-md hover:shadow-lg border border-gray-100 cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${service.hoverBorder}`}
          >
            {/* Image */}
            <div className="w-full h-40 sm:h-48 overflow-hidden rounded-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gradient Hover Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
            ></div>

            {/* Content */}
            <div className="relative z-10 mt-4 text-center">
              <h2
                className={`text-sm font-semibold ${service.textColor} group-hover:underline`}
              >
                {service.title}
              </h2>
              <div className="mt-3">
                <button className="bg-blue-800 text-white px-3 py-1.5 rounded-full text-xs font-bold hover:bg-orange-500 transition">
                  और जानें..
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePages;
