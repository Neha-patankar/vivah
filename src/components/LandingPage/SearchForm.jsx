// import React, { useState } from "react";
// import { Search } from "lucide-react";

// const SearchForm = () => {
//   const [searchData, setSearchData] = useState({
//     lookingFor: "bride",
//     fromAge: "",
//     toAge: "",
//     maritalStatus: "",
//   });

//   const ageOptions = Array.from({ length: 40 }, (_, i) => i + 18); // Ages 18–57

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSearch = () => {
//     console.log("Search triggered with data:", searchData);
//     // API call or parent callback can go here
//   };

//   return (
//     <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 p-6 rounded-3xl max-w-7xl mx-auto -mt-20 relative shadow-xl">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         {/* Looking For */}
//         <div>
//           <label className="text-white font-medium block mb-1">
//              I'm looking for
//           </label>
//           <select
//             name="lookingFor"
//             value={searchData.lookingFor}
//             onChange={handleInputChange}
//             className="w-full rounded-lg p-2 focus:outline-none"
//           >
//             <option value="bride">दुल्हन (Bride)</option>
//             <option value="groom">दूल्हा (Groom)</option>
//           </select>
//         </div>

//         {/* From Age */}
//         <div>
//           <label className="text-white font-medium block mb-1">
//             आयु / From Age
//           </label>
//           <select
//             name="fromAge"
//             value={searchData.fromAge}
//             onChange={handleInputChange}
//             className="w-full rounded-lg p-2 focus:outline-none"
//           >
//             <option value="">चुनें / Select</option>
//             {ageOptions.map((age) => (
//               <option key={age} value={age}>
//                 {age}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* To Age */}
//         <div>
//           <label className="text-white font-medium block mb-1">
//             आयु / To Age
//           </label>
//           <select
//             name="toAge"
//             value={searchData.toAge}
//             onChange={handleInputChange}
//             className="w-full rounded-lg p-2 focus:outline-none"
//           >
//             <option value="">चुनें / Select</option>
//             {ageOptions.map((age) => (
//               <option key={age} value={age}>
//                 {age}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Marital Status */}
//         <div>
//           <label className="text-white font-medium block mb-1 text-nowrap">
//             विवाह स्थिति / Marital Status
//           </label>
//           <select
//             name="maritalStatus"
//             value={searchData.maritalStatus}
//             onChange={handleInputChange}
//             className="w-full rounded-lg p-2 focus:outline-none"
//           >
//             <option value="">कोई भी / Any</option>
//             <option value="unmarried">अविवाहित / Unmarried</option>
//             <option value="divorced">तलाकशुदा / Divorced</option>
//             <option value="widowed">विधवा / Widowed</option>
//             <option value="separated">अलग रह रहे हैं / Separated</option>
//           </select>
//         </div>

//         {/* Search Button */}
//         <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 flex items-end justify-center">
//           <button
//             onClick={handleSearch}
//             className="w-full bg-purple-500 text-white font-bold py-2 px-0 rounded-xl hover:scale-105 transition-all duration-300 flex justify-center items-center gap-4"
//           >
//             <Search className="w-5 h-5" />
//             शुरुआत करें / Let's Begin
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchForm;


import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ React Router navigation

const SearchForm = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const [searchData, setSearchData] = useState({
    lookingFor: "bride",
    fromAge: "",
    toAge: "",
    maritalStatus: "",
  });

  const ageOptions = Array.from({ length: 40 }, (_, i) => i + 18); // 18–57

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // create query string
    const params = new URLSearchParams(searchData).toString();
    // navigate to /rishtey with query
    navigate(`/rishtey?${params}`);
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 p-6 rounded-3xl max-w-7xl mx-auto -mt-20 relative shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Looking For */}
        <div>
          <label className="text-white font-medium block mb-1">
            I'm looking for
          </label>
          <select
            name="lookingFor"
            value={searchData.lookingFor}
            onChange={handleInputChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          >
            <option value="bride">दुल्हन (Bride)</option>
            <option value="groom">दूल्हा (Groom)</option>
          </select>
        </div>

        {/* From Age */}
        <div>
          <label className="text-white font-medium block mb-1">
            आयु / From Age
          </label>
          <select
            name="fromAge"
            value={searchData.fromAge}
            onChange={handleInputChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          >
            <option value="">चुनें / Select</option>
            {ageOptions.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        {/* To Age */}
        <div>
          <label className="text-white font-medium block mb-1">
            आयु / To Age
          </label>
          <select
            name="toAge"
            value={searchData.toAge}
            onChange={handleInputChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          >
            <option value="">चुनें / Select</option>
            {ageOptions.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        {/* Marital Status */}
        <div>
          <label className="text-white font-medium block mb-1 text-nowrap">
            विवाह स्थिति / Marital Status
          </label>
          <select
            name="maritalStatus"
            value={searchData.maritalStatus}
            onChange={handleInputChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          >
            <option value="">कोई भी / Any</option>
            <option value="unmarried">अविवाहित / Unmarried</option>
            <option value="divorced">तलाकशुदा / Divorced</option>
            <option value="widowed">विधवा / Widowed</option>
            <option value="separated">अलग रह रहे हैं / Separated</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 flex items-end justify-center">
          <button
            onClick={handleSearch}
            className="w-full bg-purple-500 text-white font-bold py-2 px-0 rounded-xl hover:scale-105 transition-all duration-300 flex justify-center items-center gap-4"
          >
            <Search className="w-5 h-5" />
            शुरुआत करें / Let's Begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
