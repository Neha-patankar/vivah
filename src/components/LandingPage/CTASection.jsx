import React from 'react';

const CTASection = () => (
  <div className="py-5 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400">
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl md:text-2xl font-bold text-white">
        क्या आप तैयार हैं अपना जीवन साथी चुनने के लिए, फ्री रजिस्ट्रेशन करें
      </h2>
      {/* <p className="text-xl text-white/90 mb-10">
        Join thousands of happy couples who found their perfect match through Vivah Mahurat
      </p> */}
      <button className="bg-white mt-5 text-orange-600 font-bold py-2 px-8 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300">
       आज ही रजिस्टर करें
      </button>
    </div>
  </div>
);

export default CTASection;
