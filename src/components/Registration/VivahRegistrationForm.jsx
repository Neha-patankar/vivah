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
} from "lucide-react";
// Import additional icons needed for navigation buttons
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

const VivahRegistrationForm = () => {
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
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [childForm, setChildForm] = useState({ gender: "", age: "" });
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const sections = [
    { name: "Basic Details", icon: User },
    { name: "Address Details", icon: MapPin },
    { name: "Kundli Details", icon: Star },
    { name: "Occupation Details", icon: Briefcase },
    { name: "Contact Details", icon: Phone },
    { name: "Family Details", icon: Users },
    { name: "Other Details", icon: Package }, // Changed icon for "Other Details"
  ];

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

  // const addChild = () => {
  //   if (childForm.gender && childForm.age && !isNaN(Number(childForm.age)) && Number(childForm.age) >= 0) {
  //     setForm({
  //       ...form,
  //       children: [...form.children, { gender: childForm.gender, age: Number(childForm.age) }]
  //     });
  //     setChildForm({ gender: '', age: '' });
  //   } else {
  //     setSubmissionError("Please enter valid gender and age for the child.");
  //   }
  // };

  // const removeChild = (index) => {
  //   setForm({
  //     ...form,
  //     children: form.children.filter((_, i) => i !== index)
  //   });
  // };

  const validateCurrentSection = () => {
    // Basic validation for required fields in the current section
    switch (currentSection) {
      case 0: // Basic Details
        if (!form.name || !form.gender) {
          setSubmissionError("Please fill in Name and Gender.");
          return false;
        }
        // if ((form.maritalStatus === 'Widow' || form.maritalStatus === 'Divorced') && form.children.length === 0) {
        //   setSubmissionError("Please add at least one child's details for Widow/Divorced status.");
        //   return false;
        // }
        break;
      case 1: // Address Details
        // Add specific validation for permanentAddress fields if needed
        break;
      case 2: // Kundli Details
        if (!form.dob || !form.birthTime || !form.birthPlace || !form.manglik) {
          setSubmissionError(
            "Please fill in all Kundli Details (DOB, Birth Time, Birth Place, Manglik Status)."
          );
          return false;
        }
        break;
      case 3: // Occupation Details
        if (!form.education || !form.occupation || !form.monthlyIncome) {
          setSubmissionError(
            "Please fill in Education, Occupation, and Monthly Income."
          );
          return false;
        }
        break;
      case 4: // Contact Details
        if (!form.phone || !form.email) {
          setSubmissionError("Please fill in Phone Number and Email Address.");
          return false;
        }
        // Basic email regex validation
        if (!/\S+@\S+\.\S+/.test(form.email)) {
          setSubmissionError("Please enter a valid email address.");
          return false;
        }
        // Basic 10-digit phone number validation
        if (!/^\d{10}$/.test(form.phone)) {
          setSubmissionError("Phone number must be 10 digits.");
          return false;
        }
        break;
      case 5: // Family Details
        if (!form.familyType || !form.fatherName || !form.motherName) {
          setSubmissionError(
            "Please fill in Family Type, Father's Name, and Mother's Name."
          );
          return false;
        }
        // Example: Ensure total brothers/sisters numbers are consistent
        if (
          Number(form.totalBrothers) <
          Number(form.marriedBrothers) + Number(form.unmarriedBrothers)
        ) {
          setSubmissionError(
            "Total brothers cannot be less than married + unmarried brothers."
          );
          return false;
        }
        if (
          Number(form.totalSisters) <
          Number(form.marriedSisters) + Number(form.unmarriedSisters)
        ) {
          setSubmissionError(
            "Total sisters cannot be less than married + unmarried sisters."
          );
          return false;
        }
        break;
      case 6: // Other Details (including Mama and Physical Disability)
        if (
          form.physicalDisability.hasDisability === "Yes" &&
          !form.physicalDisability.description
        ) {
          setSubmissionError("Please describe the physical disability.");
          return false;
        }
        break;
      default:
        break;
    }
    setSubmissionError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionError(null); // Clear any previous errors
    setSubmissionSuccess(false); // Clear any previous success messages

    // Run full form validation before submission
    for (let i = 0; i < sections.length; i++) {
      setCurrentSection(i); // Temporarily switch to validate all sections
      if (!validateCurrentSection()) {
        setLoading(false);
        return; // Stop submission if any section is invalid
      }
    }
    // Switch back to the last section or first after validation
    setCurrentSection(sections.length - 1);

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
      setCurrentSection(0); // Go back to the first section
      setChildForm({ gender: "", age: "" }); // Reset child form
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

  const nextSection = () => {
    if (validateCurrentSection()) {
      // Validate current section before moving
      if (currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      }
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Common input/select/textarea classes
  const inputClasses =
    "w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors shadow-sm";
  const labelClasses = "block text-sm font-medium mb-1 text-gray-700";
  const sectionTitleClasses =
    "text-2xl font-semibold mb-6 text-pink-700 border-b-2 border-pink-200 pb-3";

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Basic Details
        return (
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>
              <User className="inline-block mr-2 text-pink-600" size={24} />{" "}
              Basic Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter full name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Gender <span className="text-red-500">*</span>
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
            </div>

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Samaj Name</label>
                <input
                  type="text"
                  name="samajName"
                  value={form.samajName}
                  onChange={handleChange}
                  placeholder="Enter samaj name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Gotra Name</label>
                <input
                  type="text"
                  name="gotraName"
                  value={form.gotraName}
                  onChange={handleChange}
                  placeholder="Enter gotra name"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className={labelClasses}>Height (Feet)</label>
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
                <label className={labelClasses}>Height (Inches)</label>
                <input
                  type="number"
                  name="heightInch"
                  value={form.heightInch}
                  onChange={handleChange}
                  placeholder="e.g., 6"
                  min="0"
                  max="11"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Weight (KG)</label>
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
              <div>
                <label className={labelClasses}>Skin Color</label>
                <input
                  type="text"
                  name="skinColor"
                  value={form.skinColor}
                  onChange={handleChange}
                  placeholder="e.g., Fair"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>Marital Status</label>
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

            {/* {(form.maritalStatus === 'Widow' || form.maritalStatus === 'Divorced') && (
              <div className="border border-pink-200 rounded-lg p-4 bg-pink-50 shadow-inner">
                <h4 className="font-medium mb-3 text-pink-800">Children Details</h4>
                <div className="flex flex-col sm:flex-row gap-2 mb-3">
                  <select
                    value={childForm.gender}
                    onChange={(e) => setChildForm({ ...childForm, gender: e.target.value })}
                    className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <input
                    type="number" // Changed to number for age
                    placeholder="Age"
                    value={childForm.age}
                    onChange={(e) => setChildForm({ ...childForm, age: e.target.value })}
                    className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    min="0"
                  />
                  <button
                    type="button"
                    onClick={addChild}
                    className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors whitespace-nowrap"
                  >
                    Add Child
                  </button>
                </div>
                {form.children.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm text-gray-700">Added Children:</h5>
                    {form.children.map((child, index) => (
                      <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                        <span className="text-sm">
                          <span className="font-medium">{child.gender}</span>, Age: <span className="font-medium">{child.age}</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => removeChild(index)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )} */}

            <div>
              <label className={labelClasses}>
                Education <span className="text-red-500">*</span>
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
            </div>
          </div>
        );

      case 1: // Address Details
        return (
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>
              <MapPin className="inline-block mr-2 text-pink-600" size={24} />{" "}
              Address Details
            </h3>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-inner">
              <h4 className="font-medium text-lg mb-4 text-gray-800">
                Permanent Address
              </h4>
              <div className="space-y-4">
                <div>
                  <label className={labelClasses}>
                    Permanent Street Address
                  </label>
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
                    <label className={labelClasses}>State</label>
                    <select
                      name="permanentAddress.status"
                      value={form.permanentAddress.status}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select State</option>
                      {/* <option value="Owned">Owned</option>
                      <option value="Rented">Rented</option>
                      <option value="Ancestral">Ancestral</option> */}
                    </select>
                  </div>
                  {/* <div>
                    <label className={labelClasses}>District</label>
                    <input
                      type="text"
                      name="permanentAddress.district"
                      value={form.permanentAddress.district}
                      onChange={handleChange}
                      placeholder="Enter district"
                      className={inputClasses}
                    />
                  </div> */}
                  <div>
                    <label className={labelClasses}>Current City</label>
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
                    <label className={labelClasses}>Pincode</label>
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

            {/* <div>
              <label className={labelClasses}>Current City</label>
              <input
                type="text"
                name="currentCity"
                value={form.currentCity}
                onChange={handleChange}
                placeholder="Enter current city"
                className={inputClasses}
              />
            </div> */}
          </div>
        );

      case 2: // Kundli Details
        return (
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>
              <Star className="inline-block mr-2 text-pink-600" size={24} />{" "}
              Kundli Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Date of Birth <span className="text-red-500">*</span>
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
                <label className={labelClasses}>Age (Calculated)</label>
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Birth Time <span className="text-red-500">*</span>
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
                  Birth Place <span className="text-red-500">*</span>
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
            </div>
            <div>
              <label className={labelClasses}>
                Manglik Status <span className="text-red-500">*</span>
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
                <option value="Anshik">Dont know</option>
              </select>
            </div>
          </div>
        );

      case 3: // Occupation Details
        return (
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>
              <Briefcase
                className="inline-block mr-2 text-pink-600"
                size={24}
              />{" "}
              Occupation Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <div>
                <label className={labelClasses}>
                  Education <span className="text-red-500">*</span>
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
              </div> */}
              <div>
                <label className={labelClasses}>
                  Occupation Type <span className="text-red-500">*</span>
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Occupation Company</label>
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
                <label className={labelClasses}>Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  placeholder="Job title/position"
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}> Occupation City</label>
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
                  Monthly Income (INR) <span className="text-red-500">*</span>
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
        );

      case 4: // Contact Details
        return (
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>
              <Phone className="inline-block mr-2 text-pink-600" size={24} />{" "}
              Contact Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Login Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter 10-digit phone number"
                  className={inputClasses}
                  pattern="[0-9]{10}"
                  title="Please enter a 10 digit phone number"
                />
              </div>
              <div>
               
                <label className={labelClasses}>WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={form.whatsappNumber}
                  onChange={handleChange}
                  placeholder="Enter WhatsApp number (if different)"
                  className={inputClasses}
                  pattern="[0-9]{10}"
                  title="Please enter a 10 digit WhatsApp number"
                />
              </div>
            </div>
            <div>
               <label className={labelClasses}>
                  Email Address <span className="text-red-500"></span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address"
                  className={inputClasses}
                />
             
            </div>
          </div>
        );

      case 5: // Family Details
        return (
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>
              <Users className="inline-block mr-2 text-pink-600" size={24} />{" "}
              Family Details
            </h3>
            <div>
              <label className={labelClasses}>
                Family Type <span className="text-red-500">*</span>
              </label>
              <select
                name="familyType"
                value={form.familyType}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="">Select Family Type</option>
                <option value="Joint">Joint Family</option>
                <option value="Nuclear">Nuclear Family</option>
                 <option value="Joint">other</option>
              </select>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-inner">
              <h4 className="font-medium text-lg mb-4 text-gray-800">
                Father Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelClasses}>
                    Father's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={form.fatherName}
                    onChange={handleChange}
                    required
                    placeholder="Enter father's name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Father's Occupation</label>
                  <input
                    type="text"
                    name="fatherOccupation"
                    value={form.fatherOccupation}
                    onChange={handleChange}
                    placeholder="Enter father's occupation"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Father's Mobile</label>
                  <input
                    type="tel"
                    name="fatherMobile"
                    value={form.fatherMobile}
                    onChange={handleChange}
                    placeholder="Enter father's mobile"
                    className={inputClasses}
                    pattern="[0-9]{10}"
                    title="Please enter a 10 digit mobile number"
                  />
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-inner">
              <h4 className="font-medium text-lg mb-4 text-gray-800">
                Mother Details <span className="text-red-500">*</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelClasses}>
                    Mother's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={form.motherName}
                    onChange={handleChange}
                    required
                    placeholder="Enter mother's name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Mother's Occupation</label>
                  <input
                    type="text"
                    name="motherOccupation"
                    value={form.motherOccupation}
                    onChange={handleChange}
                    placeholder="Enter mother's occupation"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Mother's Mobile</label>
                  <input
                    type="tel"
                    name="motherMobile"
                    value={form.motherMobile}
                    onChange={handleChange}
                    placeholder="Enter mother's mobile"
                    className={inputClasses}
                    pattern="[0-9]{10}"
                    title="Please enter a 10 digit mobile number"
                  />
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-inner">
              <h4 className="font-medium text-lg mb-4 text-gray-800">
                Siblings Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelClasses}>Total Brothers</label>
                  <input
                    type="number"
                    name="totalBrothers"
                    value={form.totalBrothers}
                    onChange={handleChange}
                    placeholder="Total"
                    min="0"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Married Brothers</label>
                  <input
                    type="number"
                    name="marriedBrothers"
                    value={form.marriedBrothers}
                    onChange={handleChange}
                    placeholder="Married"
                    min="0"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Unmarried Brothers</label>
                  <input
                    type="number"
                    name="unmarriedBrothers"
                    value={form.unmarriedBrothers}
                    onChange={handleChange}
                    placeholder="Unmarried"
                    min="0"
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelClasses}>Total Sisters</label>
                  <input
                    type="number"
                    name="totalSisters"
                    value={form.totalSisters}
                    onChange={handleChange}
                    placeholder="Total"
                    min="0"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Married Sisters</label>
                  <input
                    type="number"
                    name="marriedSisters"
                    value={form.marriedSisters}
                    onChange={handleChange}
                    placeholder="Married"
                    min="0"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Unmarried Sisters</label>
                  <input
                    type="number"
                    name="unmarriedSisters"
                    value={form.unmarriedSisters}
                    onChange={handleChange}
                    placeholder="Unmarried"
                    min="0"
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 6: // Other Details
        return (
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>
              <Package className="inline-block mr-2 text-pink-600" size={24} />{" "}
              Other Details
            </h3>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-inner">
              <h4 className="font-medium text-lg mb-4 text-gray-800">
                Mama (Maternal Uncle) Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelClasses}>Mama's Name</label>
                  <input
                    type="text"
                    name="mamaName"
                    value={form.mamaName}
                    onChange={handleChange}
                    placeholder="Enter mama's name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Mama's Gotra</label>
                  <input
                    type="text"
                    name="mamaGotra"
                    value={form.mamaGotra}
                    onChange={handleChange}
                    placeholder="Enter mama's gotra"
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
                    placeholder="Enter mama's city"
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Do you have a Two Wheeler?
                </label>
                <select
                  name="twoWheeler"
                  value={form.twoWheeler}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>
                  Do you have a Four Wheeler?
                </label>
                <select
                  name="fourWheeler"
                  value={form.fourWheeler}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>Home Ownership</label>
                <select
                  name="homeStatus"
                  value={form.homeStatus}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Status</option>
                  <option value="Owned">Owned</option>
                  <option value="Rented">Rented</option>
                  <option value="Ancestral">Ancestral</option>
                </select>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className={labelClasses}>
                Any Physical Disability? <span className="text-red-500">*</span>
              </label>
              <select
                name="physicalDisability.hasDisability"
                value={form.physicalDisability.hasDisability}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            {form.physicalDisability.hasDisability === "Yes" && (
              <div className="col-span-1 md:col-span-2">
                <label className={labelClasses}>
                  Describe Disability <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="physicalDisability.description"
                  value={form.physicalDisability.description}
                  onChange={handleChange}
                  rows="3"
                  required
                  className={inputClasses}
                  placeholder="e.g., Visually impaired, Mobility issues, etc."
                />
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 sm:p-8 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white p-6 sm:p-10 rounded-2xl shadow-xl space-y-8 border border-gray-100"
      >
        <h1 className="text-5xl font-extrabold text-center text-pink-800 mb-6 font-display leading-tight">
          Vivah Registration
        </h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          Embark on your journey to find your life partner.
        </p>

        {/* Navigation Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSection(index)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                  ${
                    currentSection === index
                      ? "bg-pink-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-700"
                  }`}
              >
                <IconComponent className="mr-2" size={18} />
                {section.name}
              </button>
            );
          })}
        </div>

        {/* Error and Success Messages */}
        {submissionError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Oops! </strong>
            <span className="block sm:inline ml-1">{submissionError}</span>
          </div>
        )}

        {submissionSuccess && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Success! </strong>
            <span className="block sm:inline ml-1">
              Your registration has been submitted successfully.
            </span>
          </div>
        )}

        {/* Current Section Renderer */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100">
          {renderSection()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevSection}
            disabled={currentSection === 0 || loading}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center"
          >
            <ArrowLeft size={20} className="mr-2" /> Previous
          </button>
          {currentSection < sections.length - 1 ? (
            <button
              type="button"
              onClick={nextSection}
              disabled={loading}
              className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center"
            >
              Next <ArrowRight size={20} className="ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center"
            >
              {loading ? (
                <span className="flex items-center">
                  <Loader2 className="animate-spin mr-2" size={20} />{" "}
                  Submitting...
                </span>
              ) : (
                <>
                  <Heart className="mr-2" size={20} /> Submit Registration
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VivahRegistrationForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const VivahRegistrationForm = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     gender: '',
//     address: '',
//     image: null
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       setForm({ ...form, image: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       for (let key in form) {
//         formData.append(key, form[key]);
//       }

//       const res = await axios.post('http://localhost:5555/api/registrations', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });

//       alert('Form submitted successfully');
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Submission failed: " + err.response?.data?.error || err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-3 border rounded">
//       <h2 className="text-xl font-bold">Vivah Registration</h2>
//       <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full border p-2" />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full border p-2" />
//       <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required className="w-full border p-2" />
//       <select name="gender" onChange={handleChange} required className="w-full border p-2">
//         <option value="">Select Gender</option>
//         <option>Male</option>
//         <option>Female</option>
//       </select>
//       <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full border p-2" />
//       <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full border p-2" />

//       <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Submit</button>
//     </form>
//   );
// };

// export default VivahRegistrationForm;
