


import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Heart,
  MapPin,
  GraduationCap,
  Briefcase,
  Home,
  Users,
  Calendar,
  Star,
} from "lucide-react";

const MatrimonialCarousel = () => {
  const [currentBrideIndex, setCurrentBrideIndex] = useState(0);
  const [currentGroomIndex, setCurrentGroomIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Matrimonial data
  const profiles = [
    {
      id: 1,
      name: "Priya Sharma",
      candidateId: "MAT-233018",
      age: 25,
      gender: "female",
      profileType: "Bride",
      city: "Mumbai",
      height: "5'4\"",
      education: "B.Tech",
      profession: "Software Engineer",
      familyType: "Joint Family",
      caste: "Brahmin",
      gotra: "Bharadwaj",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c27a9d12?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
    {
      id: 2,
      name: "Rahul Gupta",
      candidateId: "MAT-523077",
      age: 28,
      gender: "male",
      profileType: "Groom",
      city: "Delhi",
      height: "5'9\"",
      education: "MBA",
      profession: "Marketing Manager",
      familyType: "Nuclear Family",
      caste: "Kshatriya",
      gotra: "Kashyap",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
    {
      id: 3,
      name: "Anita Patel",
      candidateId: "MAT-370125",
      age: 24,
      gender: "female",
      profileType: "Bride",
      city: "Ahmedabad",
      height: "5'3\"",
      education: "MBBS",
      profession: "Doctor",
      familyType: "Joint Family",
      caste: "Vaishya",
      gotra: "Angiras",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
     {
      id: 4,
      name: "Anita Patel",
      candidateId: "MAT-370125",
      age: 24,
      gender: "female",
      profileType: "Bride",
      city: "Ahmedabad",
      height: "5'3\"",
      education: "MBBS",
      profession: "Doctor",
      familyType: "Joint Family",
      caste: "Vaishya",
      gotra: "Angiras",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
     {
      id: 5,
      name: "Anita Patel",
      candidateId: "MAT-370125",
      age: 24,
      gender: "female",
      profileType: "Bride",
      city: "Ahmedabad",
      height: "5'3\"",
      education: "MBBS",
      profession: "Doctor",
      familyType: "Joint Family",
      caste: "Vaishya",
      gotra: "Angiras",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
     {
      id: 6,
      name: "Anita Patel",
      candidateId: "MAT-370125",
      age: 24,
      gender: "female",
      profileType: "Bride",
      city: "Ahmedabad",
      height: "5'3\"",
      education: "MBBS",
      profession: "Doctor",
      familyType: "Joint Family",
      caste: "Vaishya",
      gotra: "Angiras",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
    {
      id: 7,
      name: "Vikram Singh",
      candidateId: "MAT-787659",
      age: 30,
      gender: "male",
      profileType: "Groom",
      city: "Jaipur",
      height: "5'11\"",
      education: "B.Com",
      profession: "Business Owner",
      familyType: "Nuclear Family",
      caste: "Rajput",
      gotra: "Gautam",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      isOnline: false,
    },
    {
      id: 8,
      name: "Kavya Reddy",
      candidateId: "MAT-558813",
      age: 26,
      gender: "female",
      profileType: "Bride",
      city: "Hyderabad",
      height: "5'2\"",
      education: "M.Ed",
      profession: "Teacher",
      familyType: "Joint Family",
      caste: "Brahmin",
      gotra: "Vatsa",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
    {
      id: 9,
      name: "Arjun Malhotra",
      candidateId: "MAT-445892",
      age: 27,
      gender: "male",
      profileType: "Groom",
      city: "Pune",
      height: "5'8\"",
      education: "CA",
      profession: "Chartered Accountant",
      familyType: "Nuclear Family",
      caste: "Brahmin",
      gotra: "Jamadagni",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
    {
      id: 10,
      name: "Sita Agarwal",
      candidateId: "MAT-192847",
      age: 23,
      gender: "female",
      profileType: "Bride",
      city: "Lucknow",
      height: "5'1\"",
      education: "B.A",
      profession: "Homemaker",
      familyType: "Joint Family",
      caste: "Vaishya",
      gotra: "Bhrigu",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
    {
      id: 11,
      name: "Rohit Jain",
      candidateId: "MAT-384756",
      age: 29,
      gender: "male",
      profileType: "Groom",
      city: "Indore",
      height: "5'10\"",
      education: "B.Tech",
      profession: "Engineer",
      familyType: "Nuclear Family",
      caste: "Jain",
      gotra: "Kasyap",
      maritalStatus: "Never Married",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      isOnline: true,
    },
  ];

  // Filter profiles by gender
  const brides = profiles.filter((profile) => profile.gender === "female");
  const grooms = profiles.filter((profile) => profile.gender === "male");

  const nextSlide = (type) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (type === "bride") {
      setCurrentBrideIndex((prevIndex) => (prevIndex + 1) % brides.length);
    } else {
      setCurrentGroomIndex((prevIndex) => (prevIndex + 1) % grooms.length);
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = (type) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (type === "bride") {
      setCurrentBrideIndex(
        (prevIndex) => (prevIndex - 1 + brides.length) % brides.length
      );
    } else {
      setCurrentGroomIndex(
        (prevIndex) => (prevIndex - 1 + grooms.length) % grooms.length
      );
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide("bride");
      setTimeout(() => nextSlide("groom"), 2000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleProfiles = (profilesArray, currentIndex) => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % profilesArray.length;
      visible.push(profilesArray[index]);
    }
    return visible;
  };

  const ProfileCard = ({ profile }) => {
    const isBride = profile.gender === "female";

    return (
      <div
        className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-80 flex-shrink-0 ${
          isBride
            ? "bg-gradient-to-b from-pink-50 to-rose-50"
            : "bg-gradient-to-b from-blue-50 to-indigo-50"
        }`}
      >
        {/* Decorative Top Border */}
        <div
          className={`h-2 ${
            isBride
              ? "bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500"
              : "bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500"
          }`}
        ></div>

        {/* Header with Image */}
        <div className="relative p-4 pb-4 ">
          <div className="flex items-center gap-4 ">
            <div className="relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div
                className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                  isBride ? "bg-pink-500" : "bg-blue-500"
                }`}
              >
                {isBride ? "👰" : "🤵"}
              </div>
            </div>

            <div className="flex-1 ">
              <div className="flex items-center gap-2 mb-1">
                <User className="w-5 h-5 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-800">
                  {profile.name}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    isBride
                      ? "bg-pink-100 text-pink-800"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {profile.candidateId}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-4 pb-6 bg-gradient-to-br from-yellow-400  to-yellow-500">
          <div className=" rounded-xl p-2 shadow-sm">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  📏
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Height</p>
                  <p className="font-medium">{profile.height}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Age</p>
                  <p className="font-medium">{profile.age} Years</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-3 h-3 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Caste</p>
                  <p className="font-medium">{profile.caste}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  🏛️
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Gotra</p>
                  <p className="font-medium">{profile.gotra}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">City</p>
                  <p className="font-medium text-xs">{profile.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Profession</p>
                  <p className="font-medium text-xs text-nowrap">{profile.profession}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm text-white transition-all duration-200 ${
                isBride
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                  : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
              }`}
            >
              Express Interest
            </button>

            <button
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm text-white transition-all duration-200 ${
                isBride
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                  : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
              }`}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CarouselSection = ({ title, profiles, currentIndex, type, emoji }) => (
    <div className="mb-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="text-4xl">{emoji}</div>
        <h2
          className={`text-3xl font-bold ${
            type === "bride" ? "text-pink-600" : "text-blue-600"
          }`}
        >
          {title}
        </h2>
        <div className="text-4xl">{emoji}</div>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => prevSlide(type)}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 shadow-lg hover:shadow-xl rounded-full p-4 transition-all duration-200 hover:scale-110 ${
            type === "bride"
              ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
          }`}
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => nextSlide(type)}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 shadow-lg hover:shadow-xl rounded-full p-4 transition-all duration-200 hover:scale-110 ${
            type === "bride"
              ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
          }`}
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden px-10">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 336}px)` }}
          >
            {getVisibleProfiles(profiles, currentIndex).map((profile, index) => (
              <ProfileCard key={`${profile.id}-${index}`} profile={profile} />
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {profiles.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                type === "bride"
                  ? setCurrentBrideIndex(index)
                  : setCurrentGroomIndex(index)
              }
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? type === "bride"
                    ? "bg-gradient-to-r from-pink-500 to-rose-500"
                    : "bg-gradient-to-r from-blue-500 to-indigo-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-orange-500">🕉️</span> Matrimonial Profiles{" "}
            <span className="text-orange-500">🕉️</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find your perfect life partner
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Brides Section */}
        <CarouselSection
          title="Bride Profiles"
          profiles={brides}
          currentIndex={currentBrideIndex}
          type="bride"
          emoji="🌸"
        />

        {/* Grooms Section */}
        <CarouselSection
          title="Groom Profiles"
          profiles={grooms}
          currentIndex={currentGroomIndex}
          type="groom"
          emoji="🎩"
        />
      </div>
    </div>
  );
};

export default MatrimonialCarousel;