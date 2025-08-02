import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutUs = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-yellow-600 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Media Section */}
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="w-64 h-40 sm:w-[500px] sm:h-[300px] rounded-2xl overflow-hidden border-4 border-white shadow-md">
            <img
              src="/about/aboutimage.png"
              alt="Vivah Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Optional Video Section */}
          {/* 
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <video
              src="/about/WhatsApp Video 2025-07-23 at 1.39.29 PM.mp4"
              className="w-full h-full object-cover"
              controls
            />
          </div>
          */}
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-blue-600 bg-clip-text text-transparent mb-6">
            <Typewriter
              words={["Welcome To The Vivah Mahurat"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h2>

          <p className="font-bold text-lg text-white">
            विवाह मुहूर्त – एक ही मंच पर रिश्ते से विदाई तक की सभी सेवाएं। अब 26+ समाज और 50000+ प्रोफाइल्स में से अपने परिजनों के लिए रिश्ता खोजें। हमारी सेवाओं में है – Vivah Assist, जहाँ हमारा असिस्टेंट आपके लिए रिश्ता ढूंढेगा और मीटिंग भी अरेंज करेगा।
            Vendor Directory के ज़रिए आप कैटरिंग, डेकोरेशन और 30+ केटेगरी के वेन्डर्स से डायरेक्ट बुकिंग कर सकते हैं।
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
