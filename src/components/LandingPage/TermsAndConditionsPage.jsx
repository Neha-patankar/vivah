import React, { useState } from "react";
import {
  FileText,
  Shield,
  AlertTriangle,
  Users,
  CreditCard,
  MapPin,
  Flag,
  Copyright,
  Phone,
  Heart,
  Star,
  Scale,
  UserCheck,
  Lock,
  Calendar,
  Info,
  CheckCircle,
  Building,
  Gavel,
} from "lucide-react";

const TermsAndConditionsPage = () => {
  const termsData = [
    {
      id: 1,
      icon: <Users className="w-6 h-6" />,
      title: "निःशुल्क पंजीकरण",
      titleEn: "Free Registration",
      content:
        "सभी उपयोगकर्ताओं के लिए निःशुल्क साइनअप उपलब्ध है, लेकिन कुछ विशेष सुविधाएं जैसा कि निर्दिष्ट है, पेड हो सकती हैं। केवल बुनियादी सेवाएं निःशुल्क हैं।",
      contentEn: "Free signup is available for all users but some premium features may be paid as specified. Only basic services are complimentary.",
      category: "registration"
    },
    {
      id: 2,
      icon: <Shield className="w-6 h-6" />,
      title: "डेटा जिम्मेदारी",
      titleEn: "Data Responsibility", 
      content:
        "आपके द्वारा प्रस्तुत सभी विवरण आपकी स्वयं की जिम्मेदारी है। vivahmahurat.com इन विवरणों को मैचिंग उद्देश्य के लिए किसी भी आगंतुक या अन्य पंजीकृत उपयोगकर्ताओं को दिखाएगा।",
      contentEn: "All details submitted by you are your own responsibility. The site will show these details to visitors and registered users for matching purposes.",
      category: "data"
    },
    {
      id: 3,
      icon: <CreditCard className="w-6 h-6" />,
      title: "निःशुल्क और पेड सुविधाएं",
      titleEn: "Free & Paid Features",
      content:
        "केवल पंजीकरण, मोबाइल ऐप और डेटा व्यू निःशुल्क है, लेकिन कुछ प्रीमियम सुविधाएं जैसे संपर्क विवरण देखना, विशेष खोज और अन्य सुविधाएं शुल्क योग्य हो सकती हैं।",
      contentEn: "Only registration, mobile app and data view are free, but premium features like contact details, special search and other services may be chargeable.",
      category: "payment"
    },
    {
      id: 4,
      icon: <Copyright className="w-6 h-6" />,
      title: "कॉपीराइट जिम्मेदारी",
      titleEn: "Copyright Responsibility",
      content:
        "उपयोगकर्ता द्वारा प्रस्तुत सभी विवरण, फोटो, वीडियो या अन्य जानकारी की कॉपीराइट जिम्मेदारी vivahmahurat की नहीं है। यदि कोई कॉपीराइट उल्लंघन पाया जाता है तो हम जिम्मेदार नहीं हैं।",
      contentEn: "vivahmahurat holds no responsibility for copyright violations of user-submitted content including photos, videos or information submitted by users.",
      category: "legal"
    },
    {
      id: 5,
      icon: <UserCheck className="w-6 h-6" />,
      title: "प्रोफाइल सत्यापन",
      titleEn: "Profile Verification",
      content:
        "सभी पंजीकृत उपयोगकर्ताओं को सलाह दी जाती है कि वे रिश्ता अंतिम करने से पहले विवरणों को क्रॉस चेक, प्रामाणिक और सत्यापित करें। vivahmahurat.com किसी भी गतिविधि या प्रदर्शित विवरणों के लिए जिम्मेदार नहीं होगा।",
      contentEn: "All registered users are advised to cross check, authenticate and verify details before finalizing any profile or relationship. vivahmahurat.com will not be responsible for any displayed information.",
      category: "verification"
    },
    {
      id: 6,
      icon: <Lock className="w-6 h-6" />,
      title: "प्रोफाइल प्रबंधन",
      titleEn: "Profile Management",
      content:
        "सभी पंजीकृत प्रोफाइल समय-समय पर सत्यापित किए जाते हैं और vivahmahurat.com की नीतियों के अनुसार अपडेट, सक्रिय, ब्लॉक या हटाए जा सकते हैं। यह निर्णय साइट के अधिकारियों का होगा।",
      contentEn: "All registered profiles are verified periodically and may be updated, activated, blocked or removed as per vivahmahurat.com policies and management decisions.",
      category: "management"
    },
    {
      id: 7,
      icon: <Building className="w-6 h-6" />,
      title: "विक्रेता जिम्मेदारी",
      titleEn: "Vendor Responsibility",
      content:
        "सभी विक्रेता श्रेणियां, विक्रेता विवरण, मूल्य और प्रोफाइल विवरण पंजीकृत विक्रेताओं द्वारा प्रदान किए जाते हैं। उपयोगकर्ताओं को चयनित विक्रेताओं की नीतियों को सत्यापित करने की सलाह दी जाती है।",
      contentEn: "All vendor categories, details, prices and profiles are provided by registered vendors. Users are advised to verify selected vendor policies before engagement.",
      category: "vendor"
    },
    {
      id: 8,
      icon: <Calendar className="w-6 h-6" />,
      title: "सेवा शुल्क परिवर्तन",
      titleEn: "Service Fee Changes",
      content:
        "उपयोगकर्ताओं, विक्रेताओं और विज्ञापनदाताओं के लिए सेवा, सब्सक्रिप्शन, रिचार्ज शुल्क बिना किसी पूर्व सूचना या सूचना के परिवर्तित, संशोधित या हटाए जा सकते हैं।",
      contentEn: "Service, subscription and recharge fees for users, vendors and advertisers are subject to change, modify or removal without prior notice or intimation.",
      category: "payment"
    },
    {
      id: 9,
      icon: <MapPin className="w-6 h-6" />,
      title: "न्यायाधिकार क्षेत्र",
      titleEn: "Legal Jurisdiction",
      content:
        "सभी विषय और मामले केवल इंदौर न्यायाधिकार के अधीन हैं। किसी भी कानूनी विवाद की स्थिति में इंदौर की अदालतों का क्षेत्राधिकार होगा।",
      contentEn: "All subjects and matters are subjected to Indore jurisdiction only. In case of any legal disputes, Indore courts will have jurisdiction.",
      category: "legal"
    },
    {
      id: 10,
      icon: <Flag className="w-6 h-6" />,
      title: "रिपोर्टिंग सिस्टम",
      titleEn: "Reporting System",
      content:
        "उपयोगकर्ता किसी भी उम्मीदवार, विक्रेता, विज्ञापनदाता प्रोफाइल की गलत जानकारी, मीडिया, फोटो या वीडियो की सीधे vivahmahurat को रिपोर्ट कर सकते हैं। सत्यापन के बाद प्रोफाइल तुरंत हटा दी जाएगी।",
      contentEn: "Users can directly report any candidate, vendor, advertiser profile for misleading information, media, photos or videos to vivahmahurat. After verification, profiles will be removed immediately.",
      category: "reporting"
    },
    {
      id: 11,
      icon: <Scale className="w-6 h-6" />,
      title: "बौद्धिक संपदा",
      titleEn: "Intellectual Property",
      content:
        "vivahmahurat की लिखित अनुमति या पारस्परिक लिखित आदेश के बिना कोई भी डिज़ाइन, अवधारणा, डेटा, नाम या लोगो का पुन: उपयोग, पुनर्निर्माण या कॉपी नहीं किया जा सकता है। उल्लंघन पर कानूनी कार्रवाई हो सकती है।",
      contentEn: "No design, concept, data, name or logo can be reused, recreated or copied without prior written permission from vivahmahurat. Legal action may be taken for violations.",
      category: "legal"
    },
    {
      id: 12,
      icon: <Phone className="w-6 h-6" />,
      title: "विक्रेता सेवाएं",
      titleEn: "Vendor Services",
      content:
        "सभी विक्रेता सेवाएं, छवियां, मूल्य, संपर्क विवरण सीधे विक्रेता द्वारा प्रबंधित और प्रदान किए जाते हैं। लिखित शिकायत के साथ प्रमाण के बिना हम किसी भी प्रदर्शित प्रोफाइल के लिए कोई जिम्मेदारी नहीं लेते।",
      contentEn: "All vendor services, images, prices and contact details are managed and provided directly by vendors. We hold no responsibility for any displayed profiles without written complaint with proof.",
      category: "vendor"
    },
  ];

  const categoryColors = {
    registration: "from-blue-500 to-blue-600",
    data: "from-green-500 to-green-600", 
    payment: "from-purple-500 to-purple-600",
    legal: "from-red-500 to-red-600",
    verification: "from-orange-500 to-orange-600",
    management: "from-teal-500 to-teal-600",
    vendor: "from-indigo-500 to-indigo-600",
    reporting: "from-pink-500 to-pink-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-32 right-16 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-16 w-24 h-24 border-3 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            {/* Logo */}
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-white/30 mb-6">
              <div className="bg-white/30 p-3 rounded-full">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold">विवाह महूर्त</div>
                <div className="text-sm text-orange-100">VIVAH MAHURAT</div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              नियम और शर्तें
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-6">
              Terms & Conditions
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
              विवाह महूर्त प्लेटफॉर्म का उपयोग करने से पहले कृपया इन नियमों को ध्यान से पढ़ें।
              <br />
              Please read these terms carefully before using the Vivah Mahurat platform.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">15K+</div>
                <div className="text-sm opacity-80">सफल विवाह</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">75K+</div>
                <div className="text-sm opacity-80">खुश परिवार</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">सुरक्षित</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-500 rounded-r-xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-orange-800 mb-4">
                  महत्वपूर्ण सूचना - Important Notice
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-orange-700">
                      विवाह महूर्त का उपयोग करने से पहले कृपया निम्नलिखित नियम और शर्तों को ध्यान से पढ़ें।
                    </span>
                    यह एक मैट्रिमोनियल प्लेटफॉर्म है जो विवाह के इच्छुक व्यक्तियों को जोड़ने का काम करता है।
                  </p>
                  <p className="text-sm text-gray-600">
                    Please read the following terms and conditions carefully before using Vivah Mahurat. 
                    This is a matrimonial platform that connects individuals seeking marriage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {termsData.map((term) => (
              <div
                key={term.id}
                className="bg-white border-2 border-orange-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:border-orange-300"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`bg-gradient-to-r ${categoryColors[term.category]} text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {term.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {term.id}
                        </span>
                        <h3 className="font-bold text-gray-800 text-xl">
                          {term.title}
                        </h3>
                      </div>
                      <p className="text-orange-600 font-semibold text-sm">
                        {term.titleEn}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Hindi Content */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-xl border border-orange-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-semibold text-orange-700">हिंदी</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {term.content}
                      </p>
                    </div>
                    
                    {/* English Content */}
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-gray-500" />
                        <span className="text-xs font-semibold text-gray-600">English</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {term.contentEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Notice */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 rounded-2xl shadow-xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white p-4 rounded-full">
                <Gavel className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-800 mb-4">
                  अंतिम शर्तें - Final Terms
                </h3>
                <div className="space-y-4 text-red-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        उपयोगकर्ता की जिम्मेदारी
                      </h4>
                      <p className="text-sm leading-relaxed">
                        सभी उपयोगकर्ता अपनी प्रदान की गई जानकारी की सत्यता के लिए पूर्णतः जिम्मेदार हैं।
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        प्लेटफॉर्म की सीमाएं
                      </h4>
                      <p className="text-sm leading-relaxed">
                        विवाह महूर्त केवल एक मध्यस्थ प्लेटफॉर्म है, विवाह की गारंटी नहीं देता।
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/50 p-4 rounded-xl border border-red-200 mt-6">
                    <p className="text-sm leading-relaxed">
                      <span className="font-bold">संपर्क जानकारी:</span> किसी भी प्रश्न या सहायता के लिए हमारी ग्राहक सेवा टीम से संपर्क करें।
                      इन नियमों में समय-समय पर परिवर्तन हो सकते हैं।
                    </p>
                    <p className="text-xs text-red-600 mt-2 italic">
                      Contact Information: For any questions or assistance, please contact our customer service team. 
                      These terms may be updated from time to time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-pink-400" />
            <span className="text-xl font-bold">विवाह महूर्त</span>
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <p className="text-gray-300">
            © 2024 Vivah Mahurat. सभी अधिकार सुरक्षित। All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Made with ❤️ for happy marriages
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;