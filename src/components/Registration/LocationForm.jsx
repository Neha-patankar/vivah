// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LocationForm = () => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Countries fetch करने के लिए
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('http://localhost:5555/api/location/countries');
//         setCountries(response.data);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };
//     fetchCountries();
//   }, []);

//   // जब country change हो तो states fetch करने के लिए
//   const handleCountryChange = async (event) => {
//     const countryID = event.target.value;
//     setSelectedCountry(countryID);
//     setSelectedState(''); // Country बदलने पर state को reset करें
//     setSelectedCity('');  // Country बदलने पर city को reset करें
//     setCities([]);        // Cities list को reset करें

//     if (countryID) {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5555/api/location/states/${countryID}`);
//         setStates(response.data);
//       } catch (error) {
//         console.error('Error fetching states:', error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setStates([]);
//     }
//   };

//   // जब state change हो तो cities fetch करने के लिए
//   const handleStateChange = async (event) => {
//     const stateID = event.target.value;
//     setSelectedState(stateID);
//     setSelectedCity('');  // State बदलने पर city को reset करें

//     if (stateID) {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5555/api/location/cities/${stateID}`);
//         setCities(response.data);
//       } catch (error) {
//         console.error('Error fetching cities:', error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setCities([]);
//     }
//   };

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   return (
//     <div className='pt-10'>
//       <h2>Registration Form</h2>
//       <form>
//         <div>
//           <label htmlFor="country">Country:</label>
//           <select id="country" value={selectedCountry} onChange={handleCountryChange}>
//             <option value="">Select a country</option>
//             {countries.map((country) => (
//               <option key={country.countryID} value={country.countryID}>
//                 {country.countryName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="state">State:</label>
//           <select id="state" value={selectedState} onChange={handleStateChange} disabled={!selectedCountry || loading}>
//             <option value="">
//               {loading ? 'Loading states...' : 'Select a state'}
//             </option>
//             {states.map((state) => (
//               <option key={state.stateID} value={state.stateID}>
//                 {state.stateName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="city">City:</label>
//           <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!selectedState || loading}>
//             <option value="">
//               {loading ? 'Loading cities...' : 'Select a city'}
//             </option>
//             {cities.map((city) => (
//               <option key={city.cityID} value={city.cityID}>
//                 {city.cityName}
//               </option>
//             ))}
//           </select>
//         </div>
//         {/* Other form fields */}
//       </form>
//     </div>
//   );
// };

// export default LocationForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationForm = () => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [countrySearchTerm, setCountrySearchTerm] = useState('');
    const [stateSearchTerm, setStateSearchTerm] = useState('');
    const [citySearchTerm, setCitySearchTerm] = useState('');

    const [filteredCountries, setFilteredCountries] = useState([]);
    const [filteredStates, setFilteredStates] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    const [loading, setLoading] = useState(false);

    // 👇 NEW STATES TO CONTROL SUGGESTION VISIBILITY
    const [showCountrySuggestions, setShowCountrySuggestions] = useState(false);
    const [showStateSuggestions, setShowStateSuggestions] = useState(false);
    const [showCitySuggestions, setShowCitySuggestions] = useState(false);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('http://localhost:5555/api/location/countries');
                setCountries(response.data);
                setFilteredCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };
        fetchCountries();
    }, []);

    useEffect(() => {
        const results = countries.filter(country =>
            country.countryName.toLowerCase().includes(countrySearchTerm.toLowerCase())
        );
        setFilteredCountries(results);
    }, [countrySearchTerm, countries]);

    useEffect(() => {
        const results = states.filter(state =>
            state.stateName.toLowerCase().includes(stateSearchTerm.toLowerCase())
        );
        setFilteredStates(results);
    }, [stateSearchTerm, states]);

    useEffect(() => {
        const results = cities.filter(city =>
            city.cityName.toLowerCase().includes(citySearchTerm.toLowerCase())
        );
        setFilteredCities(results);
    }, [citySearchTerm, cities]);

    const handleCountrySearch = (event) => {
        const searchTerm = event.target.value;
        setCountrySearchTerm(searchTerm);
        setShowCountrySuggestions(true);

        if (searchTerm === '') {
            setSelectedCountry('');
            setStates([]);
            setCities([]);
            setStateSearchTerm('');
            setCitySearchTerm('');
        }
    };

    const handleCountrySelect = async (countryID) => {
        const country = countries.find(c => c.countryID == countryID);
        setSelectedCountry(countryID);
        setCountrySearchTerm(country ? country.countryName : '');
        setShowCountrySuggestions(false);

        setSelectedState('');
        setSelectedCity('');
        setStates([]);
        setCities([]);
        setStateSearchTerm('');
        setCitySearchTerm('');

        if (countryID) {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:5555/api/location/states/${countryID}`);
                setStates(response.data);
                setFilteredStates(response.data);
            } catch (error) {
                console.error('Error fetching states:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleStateSearch = (event) => {
        const searchTerm = event.target.value;
        setStateSearchTerm(searchTerm);
        setShowStateSuggestions(true);

        if (searchTerm === '') {
            setSelectedState('');
            setCities([]);
            setCitySearchTerm('');
        }
    };

    const handleStateSelect = async (stateID) => {
        const state = states.find(s => s.stateID == stateID);
        setSelectedState(stateID);
        setStateSearchTerm(state ? state.stateName : '');
        setShowStateSuggestions(false);

        setSelectedCity('');
        setCities([]);
        setCitySearchTerm('');

        if (stateID) {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:5555/api/location/cities/${stateID}`);
                setCities(response.data);
                setFilteredCities(response.data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleCitySearch = (event) => {
        const searchTerm = event.target.value;
        setCitySearchTerm(searchTerm);
        setShowCitySuggestions(true);

        if (searchTerm === '') {
            setSelectedCity('');
        }
    };

    const handleCitySelect = (cityID) => {
        const city = cities.find(c => c.cityID == cityID);
        setSelectedCity(cityID);
        setCitySearchTerm(city ? city.cityName : '');
        setShowCitySuggestions(false);
    };

    return (
        <div className="pt-10 max-w-xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Registration Form (Autocomplete)</h2>
            <form className="space-y-6 bg-white p-6 rounded-lg shadow-md border">

                {/* Country */}
                <div>
                    <label htmlFor="country" className="block font-semibold mb-1 text-gray-700">
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        value={countrySearchTerm}
                        onChange={handleCountrySearch}
                        placeholder="Type to search country..."
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {showCountrySuggestions && countrySearchTerm && filteredCountries.length > 0 && (
                        <ul className="border rounded-lg mt-2 max-h-40 overflow-y-auto bg-white shadow-md z-10">
                            {filteredCountries.map((country) => (
                                <li
                                    key={country.countryID}
                                    onClick={() => handleCountrySelect(country.countryID)}
                                    className="px-4 py-2 hover:bg-purple-100 cursor-pointer"
                                >
                                    {country.countryName}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* State */}
                <div>
                    <label htmlFor="state" className="block font-semibold mb-1 text-gray-700">
                        State
                    </label>
                    <input
                        type="text"
                        id="state"
                        value={stateSearchTerm}
                        onChange={handleStateSearch}
                        disabled={!selectedCountry}
                        placeholder="Type to search state..."
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
                    />
                    {showStateSuggestions && stateSearchTerm && filteredStates.length > 0 && (
                        <ul className="border rounded-lg mt-2 max-h-40 overflow-y-auto bg-white shadow-md z-10">
                            {filteredStates.map((state) => (
                                <li
                                    key={state.stateID}
                                    onClick={() => handleStateSelect(state.stateID)}
                                    className="px-4 py-2 hover:bg-purple-100 cursor-pointer"
                                >
                                    {state.stateName}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* City */}
                <div>
                    <label htmlFor="city" className="block font-semibold mb-1 text-gray-700">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        value={citySearchTerm}
                        onChange={handleCitySearch}
                        disabled={!selectedState}
                        placeholder="Type to search city..."
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
                    />
                    {showCitySuggestions && citySearchTerm && filteredCities.length > 0 && (
                        <ul className="border rounded-lg mt-2 max-h-40 overflow-y-auto bg-white shadow-md z-10">
                            {filteredCities.map((city) => (
                                <li
                                    key={city.cityID}
                                    onClick={() => handleCitySelect(city.cityID)}
                                    className="px-4 py-2 hover:bg-purple-100 cursor-pointer"
                                >
                                    {city.cityName}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LocationForm;
