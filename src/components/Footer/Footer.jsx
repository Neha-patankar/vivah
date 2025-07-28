// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#800020] text-[#f3e8e8] ">
//       {/* Main Section */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {/* Logo & Tagline */}
//         <div>
//           <img
//             src="/vivahlogo.png"
//             alt="Vivah Mahurat Logo"
//             className="w-24 h-auto mb-3"
//           />
//           {/* <h1 className="text-2xl font-bold mb-2 text-[#ffd700]">
//                Vivah Mahurat
//               </h1> */}
//           <p className="text-sm leading-relaxed">
//             Apka Vishwas, Apka Rishta – सुरक्षित और सरल जीवनसाथी खोज का मंच।
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3 text-[#ffd700]">
//             Quick Links
//           </h2>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="/about" className="hover:text-[#ffd700] transition">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="/contactus" className="hover:text-[#ffd700] transition">
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/privacypolicy"
//                 className="hover:text-[#ffd700] transition"
//               >
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="/terms" className="hover:text-[#ffd700] transition">
//                 Terms & Conditions
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3 text-[#ffd700]">
//             Services
//           </h2>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="/search" className="hover:text-[#ffd700] transition">
//                 Match Making
//               </a>
//             </li>
//             <li>
//               <a href="/membership" className="hover:text-[#ffd700] transition">
//                 Parichay Sammelan Management
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/success-stories"
//                 className="hover:text-[#ffd700] transition"
//               >
//                 White Collar Matrimony Site/App
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/success-stories"
//                 className="hover:text-[#ffd700] transition"
//               >
//                 Assistance Match Making
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/success-stories"
//                 className="hover:text-[#ffd700] transition"
//               >
//                 Marriage Biodata Maker
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/success-stories"
//                 className="hover:text-[#ffd700] transition"
//               >
//                 Premium & VIP Rishte
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/success-stories"
//                 className="hover:text-[#ffd700] transition"
//               >
//                 Vivah Management
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/success-stories"
//                 className="hover:text-[#ffd700] transition"
//               >
//                 Kundali Milan
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/success-stories"
//                 className="hover:text-[#ffd700] transition"
//               >
//                 Vivah Meetup
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/success-stories"
//                 className="hover:text-[#ffd700] transition"
//               >
//                 Advanced Biodata Maker
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Information */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3 text-[#ffd700]">
//             Contact Us
//           </h2>
//           <p className="text-sm">
//             Email:
//             <a
//               href="mailto:info@aanshisolutions.com"
//               className="ml-1 hover:text-[#ffd700] transition"
//             >
//               info@aanshisolutions.com
//             </a>
//           </p>
//           <p className="text-sm mt-2">
//             Phone:
//             <a
//               href="tel:+919827072993"
//               className="ml-1 hover:text-[#ffd700] transition"
//             >
//               +91-9827072993
//             </a>
//             ,
//             <a
//               href="tel:+919755322022"
//               className="ml-1 hover:text-[#ffd700] transition"
//             >
//               +91-9755322022
//             </a>
//           </p>
//           <p className="text-sm mt-2 leading-snug">
//             Address: 205, Prakash Tower, Y.N. Road, Indore (M.P) – 452001
//           </p>
//         </div>
//       </div>

//       {/* Footer Bottom Bar */}
//       <div className="bg-[#4b0f1f] text-center py-4 text-xs sm:text-sm text-[#f3e8e8]">
//         © {new Date().getFullYear()} Aanshi Solutions. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Heart, Phone, Mail, MapPin, Star, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#800020] via-[#9d1b3e] to-[#4b0f1f]  text-[#f3e8e8] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Heart className="w-8 h-8 text-pink-300 animate-pulse" />
        </div>
        <div className="absolute top-20 right-20">
          <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Sparkles className="w-7 h-7 text-rose-300 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-1/3">
          <Heart className="w-5 h-5 text-yellow-300 animate-pulse" />
        </div>
      </div>

      {/* Main Section */}
      <div className="relative max-w-8xl  px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md opacity-30 font-bold"></div>
              <img
                src="/vivahlogo.png"
                alt="Vivah Mahurat Logo"
                className="relative w-20 h-auto drop-shadow-lg"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] bg-clip-text text-transparent ">
              Vivah Mahurat
            </h3>
            <p className="text-sm leading-relaxed text-[#f8f4f4] font-bold">
              Apka Vishwas, Apka Rishta – सुरक्षित और सरल जीवनसाथी खोज का मंच।
            </p>
            <div className="flex justify-center space-x-1 mt-3">
              <Heart className="w-4 h-4 text-pink-300" />
              <Star className="w-4 h-4 text-yellow-300" />
              <Heart className="w-4 h-4 text-pink-300" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h2 className="text-lg  mb-4 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] bg-clip-text text-transparent font-bold flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a 
                href="/about" 
                className="hover:text-[#ffd700] transition-all duration-300 hover:translate-x-2 flex items-center group"
              >
                <span className="w-2 h-2 bg-pink-300 rounded-full mr-2 group-hover:bg-yellow-300 transition-colors font-bold"></span>
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/contactus" 
                className="hover:text-[#ffd700] transition-all duration-300 hover:translate-x-2 flex items-center group"
              >
                <span className="w-2 h-2 bg-pink-300 rounded-full mr-2 group-hover:bg-yellow-300 transition-colors font-bold"></span>
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacypolicy"
                className="hover:text-[#ffd700] transition-all duration-300 hover:translate-x-2 flex items-center group"
              >
                <span className="w-2 h-2 bg-pink-300 rounded-full mr-2 group-hover:bg-yellow-300 transition-colors font-bold"></span>
                Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="/terms" 
                className="hover:text-[#ffd700] transition-all duration-300 hover:translate-x-2 flex items-center group"
              >
                <span className="w-2 h-2 bg-pink-300 rounded-full mr-2 group-hover:bg-yellow-300 transition-colors font-bold"></span>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] bg-clip-text text-transparent flex items-center">
            <Heart className="w-5 h-5 mr-2 text-pink-300 font-bold" />
            Services
          </h2>
          <ul className="space-y-2 text-sm max-h-48 overflow-y-auto custom-scrollbar font-bold">
            {[
              "Match Making",
              "Parichay Sammelan Management", 
              "White Collar Matrimony Site/App",
              "Assistance Match Making",
              "Marriage Biodata Maker",
              "Premium & VIP Rishte",
              "Vivah Management",
              "Kundali Milan",
              "Vivah Meetup",
              "Advanced Biodata Maker"
            ].map((service, index) => (
              <li key={index}>
                <a
                  href="/services"
                  className="hover:text-[#ffd700] transition-all duration-300 hover:translate-x-1 flex items-center group text-xs"
                >
                  <span className="w-1.5 h-1.5 bg-rose-300 rounded-full mr-2 group-hover:bg-yellow-300 transition-colors font-bold"></span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] bg-clip-text text-transparent flex items-center">
            <Phone className="w-5 h-5 mr-2 text-yellow-300 font-bold" />
            Contact Us
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-gray-300 mb-1 font-bold">Email:</p>
                <a
                  href="mailto:info@aanshisolutions.com"
                  className="hover:text-[#ffd700] transition-colors break-all font-bold"
                >
                  info@aanshisolutions.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-gray-300 mb-1 font-bold">Phone:</p>
                <div className="space-y-1">
                  <a
                    href="tel:+919827072993"
                    className="block hover:text-[#ffd700] transition-colors font-bold"
                  >
                    +91-9827072993
                  </a>
                  <a
                    href="tel:+919755322022"
                    className="block hover:text-[#ffd700] transition-colors font-bold"
                  >
                    +91-9755322022
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-gray-300 mb-1 font-bold">Address:</p>
                <p className="leading-snug font-bold">
                  205, Prakash Tower, Y.N. Road, Indore (M.P) – 452001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-700 to-yellow-500 border-t border-white/10">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center py-6 text-sm text-[#f3e8e8]">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-pink-300" />
              <span>© {new Date().getFullYear()} Aanshi Solutions. All rights reserved.</span>
              <Heart className="w-4 h-4 text-pink-300" />
            </div>
          </div>
          <div className="mt-2 text-xs text-rose-200">
            Made with ❤️ for perfect matches
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 215, 0, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 215, 0, 0.8);
        }
      `}</style>
    </footer>
  );
};

export default Footer;