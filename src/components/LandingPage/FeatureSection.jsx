import React from "react";
import { Heart, Calendar, Users } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "परफेक्ट मैचेस",
    desc: "हमारा आधुनिक एल्गोरिदम आपके लिए सबसे उपयुक्त जीवनसाथी ढूंढता है।",
  },
  {
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: "मुहूर्त मार्गदर्शन",
    desc: "आपके विवाह समारोहों के लिए विशेषज्ञ ज्योतिषीय मार्गदर्शन।",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "वेरिफाइड प्रोफाइल्स",
    desc: "प्रोफाइल की सत्यता सुनिश्चित करने के लिए पूरी तरह से जांचा गया।",
  },
];

const FeaturesSection = () => (
  <div>
    {/* Section Header */}
    <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 text-center rounded-lg ">
      <h1 className="text-3xl font-bold text-white">
        क्यों चुनें विवाह मुहूर्त?
      </h1>
    </div>

    <section className="py-10 bg-gradient-to-r from-orange-100 via-red-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-0">
        {/* Description */}
        <div className="text-center mb-14 max-w-4xl mx-auto">
          <p className="text-gray-700 md:text-lg font-bold leading-relaxed">
            विवाह मुहूर्त – एक ही मंच पर रिश्ते से विदाई तक की सभी सेवाएं। अब
            26+ समाज और 50000+ प्रोफाइल्स में से अपने परिजनों के लिए रिश्ता
            खोजें। हमारी सेवाओं में है – <strong>Vivah Assist</strong>, जहाँ
            हमारा असिस्टेंट आपके लिए रिश्ता ढूंढेगा और मीटिंग भी अरेंज करेगा।
            <strong>Vendor Directory</strong> के ज़रिए आप कैटरिंग, डेकोरेशन और
            30+ केटेगरी के वेन्डर्स से डायरेक्ट बुकिंग कर सकते हैं।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl shadow-lg p-6 text-center transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 bg-gradient-to-r from-orange-500 to-red-500">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default FeaturesSection;
