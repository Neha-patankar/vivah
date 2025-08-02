import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  User,
  Heart,
  MapPin,
  Phone,
  Briefcase,
  Users,
  Home,
  Calendar,
  Star,
  Package,
  Car,
  Bike,
  Shield,
  Loader2,
} from "lucide-react";
import { samajData } from "./samajAndGotraData";
import TermsAndConditionsPage from "./TermsAndCondition";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    // Basic Details
    name: "",
    gender: "",
    address: "", // Current Address
    samajName: "",
    gotraName: "",
    skinColor: "",
    heightFeet: "",
    heightInch: "",
    weightInKG: "",
    maritalStatus: "",

    // Children Details (for widow/divorced)
    // children: [], // Array of { gender: '', age: '' } objects

    // Address
    permanentAddress: {
      address: "",
      status: "", // e.g., Own, Rented, Ancestral
      district: "",
      pincode: "",
    },
    currentCity: "",

    // Kundli Details
    dob: "", // Date of Birth
    age: "", // Will be calculated based on DOB
    birthTime: "",
    birthPlace: "",
    manglik: "",

    // Occupation Details
    education: "",
    occupation: "", // e.g., Private Job, Government Job, Business
    occupationName: "", // Company/Business Name
    designation: "",
    jobCity: "",
    monthlyIncome: "", // Can be a string to allow "5 Lakhs" or "50000"

    // Contact Details
    phone: "",
    email: "",
    whatsappNumber: "",

    // Family Details
    familyType: "", // e.g., Joint, Nuclear
    fatherName: "",
    fatherOccupation: "",
    fatherMobile: "",
    motherName: "",
    motherOccupation: "",
    motherMobile: "",
    totalBrothers: "",
    marriedBrothers: "",
    unmarriedBrothers: "",
    totalSisters: "",
    marriedSisters: "",
    unmarriedSisters: "",

    // Mama Details (Maternal Uncle)
    mamaName: "",
    mamaGotra: "",
    mamaCity: "",

    // Other Details
    twoWheeler: "",
    fourWheeler: "",
    homeStatus: "", // Home Ownership Status (e.g., Own, Rented, Ancestral)
    physicalDisability: {
      hasDisability: "No",
      description: "",
    },

    // Image
    image: null, // For file upload
    personalimage: null,
  });

  const [imagePreview, setImagePreview] = useState(null); // New state for image preview URL
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Calculate age automatically when DOB changes
  useEffect(() => {
    if (form.dob) {
      const birthDate = new Date(form.dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      setForm((prevForm) => ({ ...prevForm, age: calculatedAge.toString() }));
    } else {
      setForm((prevForm) => ({ ...prevForm, age: "" }));
    }
  }, [form.dob]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setSubmissionError(null); // Clear previous errors on input change
    setSubmissionSuccess(false); // Clear success message

    if (type === "file") {
      setForm({ ...form, [name]: files[0] });
      // Create a preview URL for the selected image
      if (files[0]) {
        setImagePreview(URL.createObjectURL(files[0]));
      } else {
        setImagePreview(null);
      }
    } else if (name.startsWith("permanentAddress.")) {
      const field = name.split(".")[1];
      setForm({
        ...form,
        permanentAddress: { ...form.permanentAddress, [field]: value },
      });
    } else if (name.startsWith("physicalDisability.")) {
      const field = name.split(".")[1];
      setForm({
        ...form,
        physicalDisability: { ...form.physicalDisability, [field]: value },
      });
    } else {
      // Handle number inputs specifically
      if (
        [
          "heightFeet",
          "heightInch",
          "weightInKG",
          "totalBrothers",
          "marriedBrothers",
          "unmarriedBrothers",
          "totalSisters",
          "marriedSisters",
          "unmarriedSisters",
        ].includes(name)
      ) {
        // Allow empty string for number fields, or convert to number
        setForm({ ...form, [name]: value === "" ? "" : Number(value) });
      } else {
        setForm({ ...form, [name]: value });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionError(null); // Clear any previous errors
    setSubmissionSuccess(false); // Clear any previous success messages

    const formData = new FormData();

    try {
      // Iterate over form state and append to FormData
      for (const key in form) {
        const value = form[key];

        if (value === null || value === undefined) {
          continue; // Skip null or undefined values
        }

        if (key === "image") {
          if (value) {
            // Only append image if it exists
            formData.append(key, value);
          }
        } else if (typeof value === "object" && !Array.isArray(value)) {
          // Handle nested objects: permanentAddress, physicalDisability
          // Append individual properties to formData
          for (const subKey in value) {
            if (value[subKey] !== null && value[subKey] !== undefined) {
              formData.append(`${key}.${subKey}`, value[subKey]);
            }
          }
        } else if (Array.isArray(value)) {
          // Stringify arrays like 'children'
          formData.append(key, JSON.stringify(value));
        } else {
          // Handle primitive values (strings, numbers)
          formData.append(key, value);
        }
      }

      const res = await axios.post(
        "http://localhost:5555/api/registrations",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setSubmissionSuccess(true);
      // Reset form after successful submission
      setForm({
        name: "",
        gender: "",
        address: "",
        samajName: "",
        gotraName: "",
        skinColor: "",
        heightFeet: "",
        heightInch: "",
        weightInKG: "",
        maritalStatus: "",
        permanentAddress: {
          address: "",
          status: "",
          district: "",
          pincode: "",
        },
        currentCity: "",
        dob: "",
        age: "",
        birthTime: "",
        birthPlace: "",
        manglik: "",
        education: "",
        occupation: "",
        occupationName: "",
        designation: "",
        jobCity: "",
        monthlyIncome: "",
        phone: "",
        email: "",
        whatsappNumber: "",
        familyType: "",
        fatherName: "",
        fatherOccupation: "",
        fatherMobile: "",
        motherName: "",
        motherOccupation: "",
        motherMobile: "",
        totalBrothers: "",
        marriedBrothers: "",
        unmarriedBrothers: "",
        totalSisters: "",
        marriedSisters: "",
        unmarriedSisters: "",
        mamaName: "",
        mamaGotra: "",
        mamaCity: "",
        twoWheeler: "",
        fourWheeler: "",
        homeStatus: "",
        physicalDisability: { hasDisability: "No", description: "" },
        image: null,
      });
      setImagePreview(null); // Clear image preview on successful submission
      console.log("Submission Response:", res.data);
    } catch (err) {
      console.error("Submission Error:", err.response?.data || err.message);
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "An unexpected error occurred. Please try again.";
      setSubmissionError(`Submission failed: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "samajName" ? { gotraName: "" } : {}), // Reset gotra on samaj change
    }));
  };
  // Common input/select/textarea classes
  const inputClasses =
    "w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors shadow-sm";
  const labelClasses = "block text-sm font-bold mb-1 text-black";
  const sectionTitleClasses =
    "text-2xl font-bold mb-6 text-pink-700 border-b-2 border-pink-200 pb-3";

  return (
    // <div className="min-h-screen bg-gradient-to-br from-yellow-500 to-purple-700 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
    <div className="min-h-screen bg-[url('/homeSlider/vivahmanin77.png')] bg-cover bg-center p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="bg-yellow-400 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-6xl border-2  border-pink-400 animate-fade-in-up">
        <h1 className="sm:text-2xl text-md font-extrabold text-center text-white mb-8 sm:mb-10  mt-2 ">
          <span className="bg-pink-500 p-2 border-spacing-4 rounded-xl border-2 border-purple-700">Vivah Registration</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Details */}
          <div>
            <h3
              className={` w-full  bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl p-2 text-white font-bold sm:text-xl text-lg`}
            >
              <User
                className="inline-block mr-2 text-white font-bold "
                size={24}
              />{" "}
              Personal Information / व्यक्तिगत जानकारी
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  p-2 mt-0  border-pink-400  shadow-2xl">

              
              <div>
                <label className={`font-bold text-md text-black `}>
                  Full Name / पूरा नाम
                  <span className="text-red-500 text-lg font-bold">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name / पूरा नाम"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Gender/ लिंग <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Samaj Dropdown */}
              <div>
                <label className={labelClasses}>Samaj Name / समाज नाम</label>
                <select
                  name="samajName"
                  value={form.samajName}
                  onChange={handleChanges}
                  className={inputClasses}
                >
                  <option value="">Select Samaj</option>
                  {Object.keys(samajData).map((samaj) => (
                    <option key={samaj} value={samaj}>
                      {samaj}
                    </option>
                  ))}
                </select>
              </div>

              {/* Gotra Dropdown */}
              <div>
                <label className={labelClasses}>Gotra Name / आपकी गोत्र</label>
                <select
                  name="gotraName"
                  value={form.gotraName}
                  onChange={handleChanges}
                  className={inputClasses}
                  disabled={!form.samajName}
                >
                  <option value="">Select Gotra</option>
                  {form.samajName &&
                    samajData[form.samajName].map((gotra) => (
                      <option key={gotra} value={gotra}>
                        {gotra}
                      </option>
                    ))}
                </select>
              </div>

              <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className={labelClasses}>Height (Feet)/(Inches)</label>
                  <input
                    type="number"
                    name="heightFeet"
                    value={form.heightFeet}
                    onChange={handleChange}
                    placeholder="e.g., 5"
                    min="0"
                    max="8"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Skin Color / त्वचा का कलर
                  </label>
                  <input
                    type="text"
                    name="skinColor"
                    value={form.skinColor}
                    onChange={handleChange}
                    placeholder="e.g., Fair"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Weight (KG) / वजन</label>
                  <input
                    type="number"
                    name="weightInKG"
                    value={form.weightInKG}
                    onChange={handleChange}
                    placeholder="e.g., 65"
                    min="20"
                    max="200"
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label className={labelClasses}>
                  Marital Status / वैवाहिक स्थिति
                </label>
                <select
                  name="maritalStatus"
                  value={form.maritalStatus}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Status</option>
                  <option value="Single">Unmarried</option>
                  <option value="Widow">Widow</option>
                  <option value="Divorced">Divorcee</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>
                  Education/शैक्षणिक योग्यता{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  required
                  placeholder="e.g., B.Tech, MBA"
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          {/* <hr className="border-purple-600 border-2 " /> */}

          {/* Address Details */}
          <div>
            <h3
              className={` w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl p-2 text-white font-bold sm:text-xl text-lg`}
            >
              <MapPin className="inline-block mr-2 text-white" size={24} />{" "}
              Address Details
            </h3>
            <div className="space-y-6">
              <div className=" p-4   shadow-inner">
                <h4 className="font-medium text-lg mb-4 text-gray-800">
                  Permanent Address / स्थायी पता
                </h4>
                <div className="space-y-4">
                  <div>
                    {/* <label className={labelClasses}>
                      Permanent Street Address
                    </label> */}
                    <textarea
                      name="permanentAddress.address"
                      value={form.permanentAddress.address}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Enter permanent address"
                      className={inputClasses}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClasses}>State / राज्य </label>
                      <input
                        type="text"
                        name="permanentAddress.status" // Renamed from 'status' to reflect 'state' or general address info
                        value={form.permanentAddress.status}
                        onChange={handleChange}
                        placeholder="Enter state"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>City / शहर</label>
                      <input
                        type="text"
                        name="currentCity"
                        value={form.currentCity}
                        onChange={handleChange}
                        placeholder="Enter current city"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Pincode / पिनकोड</label>
                      <input
                        type="text"
                        name="permanentAddress.pincode"
                        value={form.permanentAddress.pincode}
                        onChange={handleChange}
                        placeholder="Enter pincode"
                        className={inputClasses}
                        pattern="[0-9]{6}" // Assuming 6-digit Indian pincode
                        title="Please enter a 6-digit pincode"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <hr className="border-pink-200" /> */}

          {/* Kundli Details */}
          <div>
            <h3
              className={` w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl p-2 text-white font-bold sm:text-xl text-lg`}
            >
              <Star
                className="inline-block mr-2 text-white font-bold"
                size={24}
              />{" "}
              Kundli Details/कुंडली जानकारी
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-2  shadow-2xl">
              <div>
                <label className={labelClasses}>
                  Date of Birth/जन्म दिनांक{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Age/उम्र</label>
                <input
                  type="text"
                  name="age"
                  value={form.age}
                  readOnly
                  disabled
                  placeholder="Age will be calculated"
                  className={inputClasses + " bg-gray-100 cursor-not-allowed"}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Birth Time/जन्म टाइम<span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="birthTime"
                  value={form.birthTime}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Birth Place /जन्म स्थान<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="birthPlace"
                  value={form.birthPlace}
                  onChange={handleChange}
                  required
                  placeholder="Enter birth place"
                  className={inputClasses}
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelClasses}>
                  Manglik Status/मांगलिक <span className="text-red-500">*</span>
                </label>
                <select
                  name="manglik"
                  value={form.manglik}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">Select Manglik Status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Anshik">Anshik</option>
                  <option value="Dont know">Don't know</option>
                </select>
              </div>
            </div>
          </div>

          {/* <hr className="border-pink-200" /> */}

          {/* Occupation Details */}
          <div>
            <h3
              className={` w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl p-2 text-white font-bold sm:text-xl text-lg`}
            >
              <Briefcase
                className="inline-block mr-2 text-white font-bold"
                size={24}
              />{" "}
              Occupation Details / व्यवसाय विवरण
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-2  shadow-2xl">
              <div>
                <label className={labelClasses}>
                  Occupation Type / व्यवसाय{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={form.occupation}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Private Job, Government Job, Business"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Occupation Company / कंपनी का नाम
                </label>
                <input
                  type="text"
                  name="occupationName"
                  value={form.occupationName}
                  onChange={handleChange}
                  placeholder="Company/Organization name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Designation / कंपनी में पद
                </label>
                <input
                  type="text"
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  placeholder="Job title/position"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Occupation City / व्यवसाय का शहर
                </label>
                <input
                  type="text"
                  name="jobCity"
                  value={form.jobCity}
                  onChange={handleChange}
                  placeholder="City where you work"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Monthly Income (INR)/ महीने की सैलरी{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text" // Keep as text to allow flexible input like "5 Lakhs"
                  name="monthlyIncome"
                  value={form.monthlyIncome}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 50000 or 5 Lakhs"
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          {/* <hr className="border-pink-200" /> */}

          {/* Contact Details */}
          <div>
            <h3
              className={` w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl p-2 text-white font-bold sm:text-xl text-lg`}
            >
              <Phone
                className="inline-block mr-2 text-white font-bold"
                size={24}
              />{" "}
              Contact Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-2 mt-0  shadow-2xl ">
              <div>
                <label className={labelClasses}>
                  Login Number/लॉगिन नंबर{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 9876543210"
                  className={inputClasses}
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                />
              </div>
              <div>
                <label className={labelClasses}>Email Address / ईमेल</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g., example@domain.com"
                  className={inputClasses}
                />
              </div>
              <div className="">
                <label className={labelClasses}>
                  WhatsApp Number/व्हाट्सएप नंबर
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={form.whatsappNumber}
                  onChange={handleChange}
                  placeholder="Optional: WhatsApp number"
                  className={inputClasses}
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit WhatsApp number"
                />
              </div>
            </div>
          </div>

          {/* <hr className="border-pink-200" /> */}

          {/* Family Details */}
          <div>
            <h3
              className={` w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl p-2 text-white font-bold sm:text-xl text-lg`}
            >
              <Users
                className="inline-block mr-2 text-white font-bold"
                size={24}
              />{" "}
              Family Details/परिवार का विवरण
            </h3>
            <div className=" p-2 ">
              <div className="">
                <label className={labelClasses}>
                  Family Type (परिवार का प्रकार)
                </label>
                <select
                  name="familyType"
                  value={form.familyType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">
                    Select Family Type (परिवार का चयन करें)
                  </option>
                  <option value="Joint">Joint Family (संयुक्त परिवार)</option>
                  <option value="Nuclear">Nuclear Family (एकल परिवार)</option>
                  <option value="Other">Other (अन्य)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 ">
                <div>
                  <label className={labelClasses}>
                    Father's Name / पिताजी का नाम
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={form.fatherName}
                    onChange={handleChange}
                    placeholder="Enter father's name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Father's Occupation / पिताजी का व्यवसाय
                  </label>
                  <input
                    type="text"
                    name="fatherOccupation"
                    value={form.fatherOccupation}
                    onChange={handleChange}
                    placeholder="Father's occupation"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Father's Mobile/पिता का मोबाइल नंबर{" "}
                  </label>
                  <input
                    type="tel"
                    name="fatherMobile"
                    value={form.fatherMobile}
                    onChange={handleChange}
                    placeholder="Father's mobile number"
                    className={inputClasses}
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit mobile number"
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Mother's Name / माँ का नाम
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={form.motherName}
                    onChange={handleChange}
                    placeholder="Enter mother's name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Mother's Occupation/माता का व्यवसाय
                  </label>
                  <input
                    type="text"
                    name="motherOccupation"
                    value={form.motherOccupation}
                    onChange={handleChange}
                    placeholder="Mother's occupation"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Mother's Mobile/माता का मोबाइल नंबर
                  </label>
                  <input
                    type="tel"
                    name="motherMobile"
                    value={form.motherMobile}
                    onChange={handleChange}
                    placeholder="Mother's mobile number"
                    className={inputClasses}
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit mobile number"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold">
                <h4 className="col-span-full font-medium text-lg mb-2 text-purple-800">
                  Siblings Details
                </h4>
                <div>
                  <label className={labelClasses}>Total Brothers/कूल भाई</label>
                  <input
                    type="number"
                    name="totalBrothers"
                    value={form.totalBrothers}
                    onChange={handleChange}
                    placeholder="Total brothers"
                    min="0"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Married Brothers/विवाहित भाई
                  </label>
                  <input
                    type="number"
                    name="marriedBrothers"
                    value={form.marriedBrothers}
                    onChange={handleChange}
                    placeholder="Married brothers"
                    min="0"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Unmarried Brothers/अविवाहित भाई
                  </label>
                  <input
                    type="number"
                    name="unmarriedBrothers"
                    value={form.unmarriedBrothers}
                    onChange={handleChange}
                    placeholder="Unmarried brothers"
                    min="0"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Total Sisters/ कूल बहने
                  </label>
                  <input
                    type="number"
                    name="totalSisters"
                    value={form.totalSisters}
                    onChange={handleChange}
                    placeholder="Total sisters"
                    min="0"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Married Sisters/ विवाहित बहन
                  </label>
                  <input
                    type="number"
                    name="marriedSisters"
                    value={form.marriedSisters}
                    onChange={handleChange}
                    placeholder="Married sisters"
                    min="0"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Unmarried Sisters/ अविवाहित बहन
                  </label>
                  <input
                    type="number"
                    name="unmarriedSisters"
                    value={form.unmarriedSisters}
                    onChange={handleChange}
                    placeholder="Unmarried sisters"
                    min="0"
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <hr className="border-pink-200" /> */}

          {/* Other Details */}
          <div>
            <h3
              className={` w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl p-2 text-white font-bold sm:text-xl text-lg`}
            >
              <Package
                className="inline-block mr-2 text-white font-bold"
                size={24}
              />{" "}
              Other Details / अन्य विवरण
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-2 shadow-2xl">
              <div>
                <label className={labelClasses}>Mama's Name/मामा का नाम</label>
                <input
                  type="text"
                  name="mamaName"
                  value={form.mamaName}
                  onChange={handleChange}
                  placeholder="Maternal Uncle's name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Mama's Gotra/मामा की गोत्र
                </label>
                <input
                  type="text"
                  name="mamaGotra"
                  value={form.mamaGotra}
                  onChange={handleChange}
                  placeholder="Maternal Uncle's gotra"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Mama's City</label>
                <input
                  type="text"
                  name="mamaCity"
                  value={form.mamaCity}
                  onChange={handleChange}
                  placeholder="Maternal Uncle's city"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Vehicle Details Section */}
            <div className="mt-6 p-4 shadow-inner ">
              <h4 className="font-semibold text-lg mb-4 text-gray-800 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
                Vehicle Details / वाहन विवरण
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border border-pink-200">
                  <label className="flex items-center cursor-pointer hover:bg-pink-50 p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      name="twoWheeler"
                      checked={form.twoWheeler === "Yes"}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          twoWheeler: e.target.checked ? "Yes" : "No",
                        })
                      }
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-gray-700 font-medium">
                      🏍️ Two Wheeler / 2 पहिया वाहन
                    </span>
                  </label>
                </div>

                <div className="bg-white p-3 rounded-lg border border-pink-200">
                  <label className="flex items-center cursor-pointer hover:bg-pink-50 p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      name="fourWheeler"
                      checked={form.fourWheeler === "Yes"}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          fourWheeler: e.target.checked ? "Yes" : "No",
                        })
                      }
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-gray-700 font-medium">
                      🚗 Four Wheeler / 4 पहिया वाहन
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Home Status Section */}
            <div className="mt-2  p-4 shadow-inner ">
              <h4 className="font-semibold text-lg mb-4 text-gray-800 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home Status / मकान विवरण
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border border-pink-200">
                  <label className="flex items-center cursor-pointer hover:bg-pink-50 p-2 rounded transition-colors">
                    <input
                      type="radio"
                      name="homeStatus"
                      value="Rented"
                      checked={form.homeStatus === "Rented"}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          homeStatus: e.target.value,
                        })
                      }
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                    />
                    <span className="ml-3 text-gray-700 font-medium">
                      🏠 Rented / किराये का
                    </span>
                  </label>
                </div>

                <div className="bg-white p-3 rounded-lg border border-pink-200">
                  <label className="flex items-center cursor-pointer hover:bg-pink-50 p-2 rounded transition-colors">
                    <input
                      type="radio"
                      name="homeStatus"
                      value="Self"
                      checked={form.homeStatus === "Self"}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          homeStatus: e.target.value,
                        })
                      }
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                    />
                    <span className="ml-3 text-gray-700 font-medium">
                      🏡 Self Owned / स्वयं का
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Physical Disability Section */}
            <div className="mt-2 p-4 shadow-inner ">
              <h4 className="font-semibold text-lg mb-4 text-gray-800 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Physical Disability / शारीरिक अक्षमता
              </h4>
              <div className="flex items-center gap-4 mb-4">
                
                <div className="flex items-center space-x-6">
                  <label className="inline-flex items-center bg-white p-2 rounded-lg border border-pink-200 cursor-pointer hover:bg-pink-50 transition-colors">
                    <input
                      type="radio"
                      name="physicalDisability.hasDisability"
                      value="No"
                      checked={form.physicalDisability.hasDisability === "No"}
                      onChange={handleChange}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700 font-medium">
                      No / नहीं
                    </span>
                  </label>
                  <label className="inline-flex items-center bg-white p-2 rounded-lg border border-pink-200 cursor-pointer hover:bg-pink-50 transition-colors">
                    <input
                      type="radio"
                      name="physicalDisability.hasDisability"
                      value="Yes"
                      checked={form.physicalDisability.hasDisability === "Yes"}
                      onChange={handleChange}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700 font-medium">
                      Yes / हाँ
                    </span>
                  </label>
                </div>
              </div>
              {form.physicalDisability.hasDisability === "Yes" && (
                <div className="mt-4 bg-white p-4 rounded-lg border border-pink-200">
                  <label className={labelClasses}>
                    Description of Disability / अक्षमता का विवरण{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="physicalDisability.description"
                    value={form.physicalDisability.description}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Please describe the physical disability / कृपया शारीरिक अक्षमता का वर्णन करें"
                    className={inputClasses}
                    required={form.physicalDisability.hasDisability === "Yes"}
                  />
                </div>
              )}
            </div>
          </div>

          {/* <hr className="border-pink-200" /> */}

          {/* Image Upload */}

          <div>
            <h3
              className={` w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl p-2 text-white font-bold sm:text-xl text-lg`}
            >
              <Heart
                className="inline-block mr-2 text-white font-bold"
                size={24}
              />{" "}
              Profile Photo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-2  shadow-2xl ">
              <div>
                <label className={labelClasses}>Upload Photo</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Accepted formats: JPG, PNG, GIF (Max 5MB)
                </p>
                {form.image && (
                  <p className="text-sm text-gray-600 mt-2">
                    Selected:{" "}
                    <span className="font-medium">{form.image.name}</span>
                  </p>
                )}
                {imagePreview && ( // Display image preview if available
                  <div className="mt-4 flex justify-center">
                    <img
                      src={imagePreview}
                      alt="Image Preview"
                      className="max-w-xs max-h-48 rounded-lg shadow-md border border-gray-200 object-cover"
                    />
                  </div>
                )}
              </div>
           

            <div>
              <label className={labelClasses}>Upload Personal Photo</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer"
              />
              <p className="text-xs text-gray-500 mt-1">
                Accepted formats: JPG, PNG, GIF (Max 5MB)
              </p>
              {form.image && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected:{" "}
                  <span className="font-medium">{form.image.name}</span>
                </p>
              )}
              {imagePreview && ( // Display image preview if available
                <div className="mt-4 flex justify-center">
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    className="max-w-xs max-h-48 rounded-lg shadow-md border border-gray-200 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
           </div>

          {submissionError && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {submissionError}</span>
            </div>
          )}

          {submissionSuccess && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline">
                {" "}
                Your registration has been submitted successfully.
              </span>
            </div>
          )}
        <TermsAndConditionsPage/>
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className={`flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white ${
                loading
                  ? "bg-pink-400 cursor-not-allowed"
                  : "bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              } sm:px-10`}
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
