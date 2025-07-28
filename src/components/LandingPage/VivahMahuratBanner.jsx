// import React, { useEffect, useState } from "react";
// import Confetti from "react-confetti";

// const VivahMahuratBanner = () => {
//   const [showBanner, setShowBanner] = useState(true);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   const fullText = "Welcome to VivahMahurat";
//   const [displayText, setDisplayText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [typingForward, setTypingForward] = useState(true);

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (typingForward) {
//         if (textIndex < fullText.length) {
//           setDisplayText(fullText.substring(0, textIndex + 1));
//           setTextIndex((prev) => prev + 1);
//         } else {
//           setTypingForward(false);
//         }
//       } else {
//         if (textIndex > 0) {
//           setDisplayText(fullText.substring(0, textIndex - 1));
//           setTextIndex((prev) => prev - 1);
//         } else {
//           setTypingForward(true);
//         }
//       }
//     }, 150);
//     return () => clearTimeout(timer);
//   }, [textIndex, typingForward]);

//   if (!showBanner) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
//       <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
//         <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} recycle={true} />

//         {/* Close Button */}
//         <button
//           onClick={() => setShowBanner(false)}
//           className="absolute top-4 right-4 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 backdrop-blur-sm text-white font-bold"
//         >
//           ✕
//         </button>

//         {/* Banner Content */}
//         <div
//           className="h-[460px] sm:h-[480px] md:h-[500px] lg:h-[520px] bg-gradient-to-br from-rose-500 via-pink-500 to-yellow-600 text-white
//             p-4 sm:p-6 md:p-8 flex flex-col justify-start items-center relative"
//           style={{
//             backgroundImage: "url('/homeSlider/vivahmanin77.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           {/* Ganesha Logo */}
//           <img src="/Banner/ganesha.png" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-2" />

//           <div>
//           {/* Typewriter Title */}
//           <h1 className="text-xl  text-red-500 sm:text-2xl md:text-3xl font-semibold tracking-wide mb-1 text-center">
//             {displayText}
//             <span className="border-r-2 border-white ml-1 animate-pulse" />
//           </h1>

//           {/* Welcome Text Styled as Footer */}
//           <p className="text-sm sm:text-base md:text-lg text-center font-bold mt-2 px-4 text-red-100">
//             26+ समाज के 50000+ परिवारों के <br></br>विवाह मिलन में आपका स्वागत है
//           </p>
//            {/* Vivah Logo */}
//           {/* <img
//             src="/vivahlogo.png"
//             alt="Vivah Logo"
//             className="w-28 h-24 sm:w-32 sm:h-28 md:w-36 md:h-32 mb-4"
//           /> */}
//          </div>
//           {/* Decorative Circles */}
//           <div className="absolute inset-0 opacity-10 pointer-events-none">
//             <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-ping"></div>
//             <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full animate-bounce"></div>
//             <div className="absolute top-1/3 left-1/2 w-12 h-12 border border-white rounded-full animate-spin"></div>

//           </div>

//           {/* Falling Flowers */}
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={`flower-${i}`}
//               className="absolute w-6 h-6 bg-no-repeat bg-contain animate-flowerFall"
//               style={{
//                 backgroundImage: 'url("/flower.png")',
//                 top: `${Math.random() * -100}px`,
//                 left: `${Math.random() * 100}%`,
//                 animationDuration: `${3 + Math.random() * 3}s`,
//                 animationDelay: `${Math.random() * 2}s`,
//               }}
//             />
//           ))}

//           {/* Sparkles */}
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={`sparkle-${i}`}
//               className="absolute w-2 h-2 rounded-full bg-yellow-300 animate-ping"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDuration: `${1 + Math.random()}s`,
//               }}
//             />
//           ))}

//           {/* Bottom Decoration Strip */}
//           <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-white to-transparent opacity-30"></div>

//         </div>
//              <p className="text-sm sm:text-base md:text-lg text-center font-bold mt-2 px-4 text-red-100">
//             26+ समाज के 50000+ परिवारों के <br></br>विवाह मिलन में आपका स्वागत है
//           </p>

//       </div>

//     </div>
//   );
// };

// export default VivahMahuratBanner;

import React, { useEffect, useState } from "react";

const VivahMahuratBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const fullText = "Welcome to VivahMahurat";
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typingForward) {
        if (textIndex < fullText.length) {
          setDisplayText(fullText.substring(0, textIndex + 1));
          setTextIndex((prev) => prev + 1);
        } else {
          setTypingForward(false);
        }
      } else {
        if (textIndex > 0) {
          setDisplayText(fullText.substring(0, textIndex - 1));
          setTextIndex((prev) => prev - 1);
        } else {
          setTypingForward(true);
        }
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [textIndex, typingForward]);

  // Confetti Component (Simple implementation)
  const ConfettiPiece = ({ delay, duration, startX }) => (
    <div
      className="absolute w-2 h-2 opacity-80"
      style={{
        left: `${startX}%`,
        top: "-10px",
        backgroundColor: [
          "#ff6b9d",
          "#ffd93d",
          "#6bcf7f",
          "#4ecdc4",
          "#45b7d1",
        ][Math.floor(Math.random() * 5)],
        animation: `confettiFall ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        transform: "rotate(45deg)",
      }}
    />
  );

  // Flower Component
  const FloatingFlower = ({ delay, duration, startX, flower }) => (
    <div
      className="absolute text-2xl opacity-70"
      style={{
        left: `${startX}%`,
        top: "-50px",
        animation: `flowerFloat ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {flower}
    </div>
  );

  if (!showBanner) return null;

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(${windowSize.height + 50}px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes flowerFloat {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(${windowSize.height + 50}px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
        {/* Confetti Effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <ConfettiPiece
              key={`confetti-${i}`}
              delay={Math.random() * 3}
              duration={3 + Math.random() * 2}
              startX={Math.random() * 100}
            />
          ))}
        </div>

        {/* Floating Flowers */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <FloatingFlower
              key={`flower-${i}`}
              delay={Math.random() * 4}
              duration={4 + Math.random() * 3}
              startX={Math.random() * 100}
              flower={
                ["🌸", "🌺", "🌻", "🌷", "🌹", "💐", "🏵️"][
                  Math.floor(Math.random() * 7)
                ]
              }
            />
          ))}
        </div>

        <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 backdrop-blur-sm text-gray-800 font-bold transition-all duration-200"
          >
            ✕
          </button>

          {/* Main Banner Content */}
          <div
            className="h-[400px] sm:h-[420px] md:h-[440px] lg:h-[460px] bg-gradient-to-br from-rose-500 via-pink-500 to-yellow-600 text-white 
              p-4 sm:p-6 md:p-8 flex flex-col  items-center relative"
            style={{
              backgroundImage: "url('/homeSlider/vivahmanin77.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
          <p className="text-red-600 font-bold">ॐ श्री गणेशाय नमः</p>
            {/* Ganesha Logo */}
            <img
              src="/Banner/ganesha.png"
              alt="Ganesha"
              className="w-20 h-20 sm:w-22 sm:h-22 md:w-28 md:h-28 mb-4 mt-[-10px]"
            />
           
            {/* Typewriter Title */}
            {/* <h1 className="text-xl text-rose-600 sm:text-2xl md:text-3xl font-semibold tracking-wide mb-6 text-center drop-shadow-lg">
              {displayText}
              <span className="border-r-2 border-white ml-1 animate-pulse" />
            </h1> */}

            {/* Decorative Circles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-ping"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full animate-bounce"></div>
              <div className="absolute top-1/3 left-1/2 w-12 h-12 border border-white rounded-full animate-spin"></div>
            </div>

            {/* Sparkles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-yellow-300 animate-ping"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  animationDuration: `${1 + Math.random()}s`,
                }}
              />
            ))}
          </div>

          {/* Footer Section with Welcome Text */}
          <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white py-4 px-4 text-center relative">
            {/* Decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
           
            {/* Typewriter Title */}
            <h1 className="text-xl text-white sm:text-2xl md:text-3xl font-semibold tracking-wide mb-6 text-center drop-shadow-lg">
              {displayText}
              <span className="border-r-2 border-white ml-1 animate-pulse" />
            </h1>
           
            {/* Welcome Text */}
            <p className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-md mb-5">
              26+ समाज के 50000+ परिवारों के विवाह मिलन में आपका स्वागत है
            </p>

            {/* Bottom decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-1">
              {/* <span className="text-yellow-300">🪷</span>
              <span className="text-yellow-300">🕉️</span>
              <span className="text-yellow-300">🪷</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VivahMahuratBanner;
