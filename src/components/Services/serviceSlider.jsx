
import React, { useEffect, useState } from "react";
import {
  Heart,
  Users,
  Briefcase,
  HandHeart,
  FileText,
  Crown,
  Calendar,
  Star,
  UserCheck,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Match Making",
    slug: "match-making",
    icon: Heart,
    image: "/servicesimage/vsammelan.png",
    bgGradient: "from-rose-400 to-pink-500",
    hoverBorder: "hover:border-rose-200",
  },
  {
    id: 2,
    title: "Parichay Sammelan Management",
    slug: "parichay-sammelan",
    icon: Users,
    image: "/servicesimage/vsammelan.png",
    bgGradient: "from-purple-400 to-indigo-500",
    hoverBorder: "hover:border-purple-200",
  },
  {
    id: 3,
    title: "White Collar Matrimony Site/App",
    slug: "white-collar-matrimony",
    icon: Briefcase,
    image: "/servicesimage/vsammelan.png",
    bgGradient: "from-blue-400 to-cyan-500",
    hoverBorder: "hover:border-blue-200",
  },
  {
    id: 4,
    title: "Assistance Match Making",
    slug: "assistance-match-making",
    icon: HandHeart,
    image: "/servicesimage/vsammelan.png",
    bgGradient: "from-emerald-400 to-teal-500",
    hoverBorder: "hover:border-emerald-200",
  },
  {
    id: 5,
    title: "Marriage Biodata Maker",
    slug: "biodata-maker",
    icon: FileText,
    image: "/servicesimage/vsammelan.png",
    bgGradient: "from-indigo-400 to-purple-500",
    hoverBorder: "hover:border-indigo-200",
  },
  {
    id: 6,
    title: "Premium & VIP Rishte",
    slug: "premium-vip-rishte",
    icon: Crown,
    image: "/servicesimage/vsammelan.png",
    bgGradient: "from-amber-400 to-orange-500",
    hoverBorder: "hover:border-amber-200",
  },
  {
    id: 7,
    title: "Vivah Management",
    slug: "vivah-management",
    icon: Calendar,
    image: "/servicesimage/vsammelan.png",
    bgGradient: "from-pink-400 to-rose-500",
    hoverBorder: "hover:border-pink-200",
  },
  {
    id: 8,
    title: "Kundali Milan",
    slug: "kundali-milan",
    icon: Star,
    image: "/servicesimage/vsammelan.png",
    bgGradient: "from-orange-400 to-red-500",
    hoverBorder: "hover:border-orange-200",
  },
  {
    id: 9,
    title: "Vivah Meetup",
    slug: "vivah-meetup",
    icon: UserCheck,
    image: "/servicesimage/vsammelan.png",
    bgGradient: "from-teal-400 to-cyan-500",
    hoverBorder: "hover:border-teal-200",
  },
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) setVisibleCount(5); // Desktop
      else if (width >= 768) setVisibleCount(3); // Tablet
      else setVisibleCount(1); // Mobile
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const getVisibleServices = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % services.length;
      result.push(services[index]);
    }
    return result;
  };

  return (
    <div className="bg-gradient-to-bl from-orange-100 via-white to-orange-200 py-8 px-4 sm:px-6 lg:px-16 mt-16">
      <div className="overflow-hidden w-full">
        <div className="flex gap-4 transition-all duration-500">
          {getVisibleServices().map((service) => (
            <div
              key={service.id}
              className={`w-full sm:w-[48%] md:w-[31%] xl:w-[18%] flex-shrink-0 bg-white rounded-lg border ${service.hoverBorder} shadow-md transition duration-300 overflow-hidden`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  {service.title}
                </h3>
                <button
                  className={`mt-3 px-3 py-1.5 text-xs text-white rounded-full bg-gradient-to-r ${service.bgGradient} hover:scale-105 transition`}
                >
                  और जानें
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
