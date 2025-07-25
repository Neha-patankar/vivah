import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Calendar,
  Phone,
  Mail,
  Filter,
  Search,
  Star,
  Eye,
  MessageCircle,
  Users,
  Crown
} from 'lucide-react';

const Rishte = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Sample profiles data
  const profiles = [
    {
      id: 1,
      name: "अनिता शर्मा",
      age: 26,
      location: "दिल्ली",
      profession: "सॉफ्टवेयर इंजीनियर",
      education: "B.Tech CSE",
      height: "5'4\"",
      religion: "हिंदू",
      caste: "ब्राह्मण",
      income: "₹8-10 लाख",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face",
      isPremium: false,
      isVerified: true,
      lastSeen: "2 दिन पहले",
      bio: "परंपरागत मूल्यों के साथ आधुनिक सोच रखने वाली लड़की। संस्कारी परिवार से हूं।"
    },
    {
      id: 2,
      name: "राज पटेल",
      age: 29,
      location: "मुंबई",
      profession: "चार्टर्ड अकाउंटेंट",
      education: "CA, B.Com",
      height: "5'8\"",
      religion: "हिंदू",
      caste: "पटेल",
      income: "₹12-15 लाख",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      isPremium: true,
      isVerified: true,
      lastSeen: "ऑनलाइन",
      bio: "व्यापारिक परिवार से हूं। जीवन में संतुलन और खुशी को महत्व देता हूं।"
    },
    {
      id: 3,
      name: "प्रिया अग्रवाल",
      age: 24,
      location: "पुणे",
      profession: "डॉक्टर",
      education: "MBBS",
      height: "5'3\"",
      religion: "हिंदू",
      caste: "अग्रवाल",
      income: "₹6-8 लाख",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop&crop=face",
      isPremium: false,
      isVerified: true,
      lastSeen: "1 घंटे पहले",
      bio: "मेडिसिन की फील्ड में काम करती हूं। परिवार और करियर दोनों को संभालने में विश्वास रखती हूं।"
    },
    {
      id: 4,
      name: "अमित गुप्ता",
      age: 31,
      location: "बेंगलुरु",
      profession: "मैनेजर",
      education: "MBA",
      height: "5'10\"",
      religion: "हिंदू",
      caste: "गुप्ता",
      income: "₹15-20 लाख",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      isPremium: true,
      isVerified: true,
      lastSeen: "5 मिनट पहले",
      bio: "टेक कंपनी में मैनेजमेंट पोजिशन पर हूं। यात्रा और खाना पकाने का शौक है।"
    },
    {
      id: 5,
      name: "सुनीता जैन",
      age: 27,
      location: "जयपुर",
      profession: "टीचर",
      education: "M.Ed",
      height: "5'2\"",
      religion: "जैन",
      caste: "जैन",
      income: "₹4-6 लाख",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
      isPremium: false,
      isVerified: true,
      lastSeen: "कल",
      bio: "शिक्षा के क्षेत्र में काम करती हूं। सादगी और सच्चाई में विश्वास रखती हूं।"
    },
    {
      id: 6,
      name: "विकास सिंह",
      age: 28,
      location: "चंडीगढ़",
      profession: "इंजीनियर",
      education: "B.Tech Mechanical",
      height: "5'9\"",
      religion: "हिंदू",
      caste: "राजपूत",
      income: "₹8-12 लाख",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
      isPremium: false,
      isVerified: true,
      lastSeen: "3 दिन पहले",
      bio: "मैकेनिकल इंजीनियर हूं। स्पोर्ट्स और फिटनेस में रुचि है।"
    }
  ];

  const filters = [
    { id: 'all', label: 'सभी', count: profiles.length },
    { id: 'premium', label: 'प्रीमियम', count: profiles.filter(p => p.isPremium).length },
    { id: 'online', label: 'ऑनलाइन', count: profiles.filter(p => p.lastSeen === 'ऑनलाइन').length },
    { id: 'verified', label: 'वेरिफाइड', count: profiles.filter(p => p.isVerified).length }
  ];

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.profession.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || 
                         (activeFilter === 'premium' && profile.isPremium) ||
                         (activeFilter === 'online' && profile.lastSeen === 'ऑनलाइन') ||
                         (activeFilter === 'verified' && profile.isVerified);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">रिश्ते खोजें</h1>
          <p className="text-center text-pink-100 text-lg">अपने जीवनसाथी से मिलें</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="नाम, शहर या पेशा खोजें..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-pink-600">{filteredProfiles.length}</span> रिश्ते मिले
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map(profile => (
            <div key={profile.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {profile.isPremium && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      प्रीमियम
                    </span>
                  )}
                  {profile.isVerified && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ✓ वेरिफाइड
                    </span>
                  )}
                </div>

                {/* Online Status */}
                <div className="absolute top-4 right-4">
                  {profile.lastSeen === 'ऑनलाइन' && (
                    <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white shadow-lg">
                    <Heart className="w-4 h-4 text-pink-600" />
                  </button>
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white shadow-lg">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{profile.name}</h3>
                  <span className="text-gray-500">{profile.age} साल</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                    {profile.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Briefcase className="w-4 h-4 mr-2 text-purple-500" />
                    {profile.profession}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <GraduationCap className="w-4 h-4 mr-2 text-blue-500" />
                    {profile.education}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{profile.bio}</p>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
                  <div>कद: {profile.height}</div>
                  <div>आय: {profile.income}</div>
                  <div>धर्म: {profile.religion}</div>
                  <div>जाति: {profile.caste}</div>
                </div>

                {/* Last Seen */}
                <div className="text-xs text-gray-400 mb-4">
                  आखिरी बार देखा: {profile.lastSeen}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedProfile(profile)}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all font-medium text-sm"
                  >
                    प्रोफाइल देखें
                  </button>
                  <button className="bg-gray-100 text-gray-600 p-2 rounded-xl hover:bg-gray-200 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProfiles.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">कोई रिश्ता नहीं मिला</h3>
            <p className="text-gray-500">कृपया अपनी खोज को बदलें या फिल्टर हटाएं</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProfiles.length > 0 && (
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all font-medium">
              और रिश्ते देखें
            </button>
          </div>
        )}
      </div>

      {/* Profile Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProfile.image}
                alt={selectedProfile.name}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setSelectedProfile(null)}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{selectedProfile.name}</h2>
                <span className="text-gray-500">{selectedProfile.age} साल</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <strong>स्थान:</strong> {selectedProfile.location}
                </div>
                <div>
                  <strong>पेशा:</strong> {selectedProfile.profession}
                </div>
                <div>
                  <strong>शिक्षा:</strong> {selectedProfile.education}
                </div>
                <div>
                  <strong>कद:</strong> {selectedProfile.height}
                </div>
                <div>
                  <strong>धर्म:</strong> {selectedProfile.religion}
                </div>
                <div>
                  <strong>जाति:</strong> {selectedProfile.caste}
                </div>
                <div>
                  <strong>आय:</strong> {selectedProfile.income}
                </div>
              </div>
              
              <div className="mb-6">
                <strong>बायो:</strong>
                <p className="mt-2 text-gray-600">{selectedProfile.bio}</p>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all font-medium">
                  रुचि दिखाएं
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-all font-medium">
                  संदेश भेजें
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rishte;