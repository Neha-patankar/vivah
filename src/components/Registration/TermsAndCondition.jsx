import React, { useState } from "react";
import {
  X,
  FileText,
  Shield,
  AlertTriangle,
  Users,
  Camera,
  CreditCard,
  MapPin,
  Flag,
  Copyright,
  Phone,
} from "lucide-react";

const TermsAndConditionsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const termsData = [
    {
      id: 1,
      icon: <Users className="w-5 h-5" />,
      title: "Free Registration",
      content:
        "Free signup is free registration for all users but some features may be paid as specified.",
    },
    {
      id: 2,
      icon: <Shield className="w-5 h-5" />,
      title: "Data Responsibility",
      content:
        "All the details submitted by you is your own responsibility, the site vivahmahurat.com will show the details to any visitor or other users (registered and authorized) for matching purpose.",
    },
    {
      id: 3,
      icon: <CreditCard className="w-5 h-5" />,
      title: "Free & Paid Features",
      content:
        "Only registration, mobile app and data view is free, but there may be features which may be chargeable.",
    },
    {
      id: 4,
      icon: <Copyright className="w-5 h-5" />,
      title: "Copyright Responsibility",
      content:
        "All the details, photos, videos or any other information submitted, updated, provided by user or you hold no responsibility of vivahmahurat for any copyright laws violation if the data or other material submitted is found to be copied or violation of any copyright laws, we are a common matrimony profile matching platform and do not hold any responsibility of the images, details, information or videos as provided by the registrar.",
    },
    {
      id: 5,
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Profile Verification",
      content:
        "It is advisable to all registered users to kindly cross check, authenticate, verify the details, Rishta before finalizing the profile or Rishta, vivahmahurat.com will not be responsible for any activity or details displayed as they are provided by other users.",
    },
    {
      id: 6,
      icon: <Shield className="w-5 h-5" />,
      title: "Profile Management",
      content:
        "All the profiles as registered are verified time to time and updated, activated, blocked or may be removed as may after the confirmation or as per the decision of vivahmahurat.com authorities, staff or management as per the policies of the site.",
    },
    {
      id: 7,
      icon: <Users className="w-5 h-5" />,
      title: "Vendor Responsibility",
      content:
        "All the vendor categories, vendor details, prices and profile details are provided and finalized by vendors registered on the website and users are advised to kindly cross check and confirm the policies of the selected vendors, if found any mis consumption and reported to the site, the vendor may be blacklisted or removed from the platform.",
    },
    {
      id: 8,
      icon: <CreditCard className="w-5 h-5" />,
      title: "Service Fee Changes",
      content:
        "The service, subscription, recharge fee for users, vendors, advertisers are subject to change, modify, updated or may be if removed with out any prior notice or intimation to any users, and may be done as per the decisions and policies or decision of the vivahmahurat authorities.",
    },
    {
      id: 9,
      icon: <MapPin className="w-5 h-5" />,
      title: "Jurisdiction",
      content:
        "All subjects and matters are subjected to Indore jurisdiction only.",
    },
    {
      id: 10,
      icon: <Flag className="w-5 h-5" />,
      title: "Reporting System",
      content:
        "The user can directly report any candidate, vendor, advertiser profile anytime to vivahmahurat if found any mislead, information, media, photo or video, vivahmahurat will identify the issue, will verify and if found ok, the profile will be removed immediately and legal action can be taken if required.",
    },
    {
      id: 11,
      icon: <Copyright className="w-5 h-5" />,
      title: "Intellectual Property",
      content:
        "No design, concept, data, name or logo can be reused or recreated and cannot be copied without prior written permission or mutual order in written by vivahmahurat to the use, if found legal action may be taken against the user.",
    },
    {
      id: 12,
      icon: <Phone className="w-5 h-5" />,
      title: "Vendor Services",
      content:
        "All the vendor services, images, prices, contact details are managed and provided directly by vendor himself and we hold no responsibility for any profile displayed until, unless as reported by any user with proof to vivahmahurat.com along with written complaint.",
    },
  ];

  const TermsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white p-6 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center">
            <FileText className="w-8 h-8 mr-3" />
            <div>
              <h1 className="text-2xl font-bold">Terms and Conditions</h1>
              <p className="text-pink-100 mt-1">
                Vivah Mahurat - नियम और शर्तें
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[60vh] p-6">
          <div className="mb-6 p-4 bg-pink-50 border-l-4 border-pink-500 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-pink-700">
                By clicking on the agree button, you agree and accept all the
                terms and conditions of Vivah Mahurat usage:
              </span>
            </p>
          </div>

          <div className="space-y-4">
            {termsData.map((term) => (
              <div
                key={term.id}
                className="bg-white border border-pink-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-pink-100 text-pink-600 p-2 rounded-lg">
                    {term.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">
                        {term.id}
                      </span>
                      {term.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {term.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-red-800 mb-1">
                  Important Notice
                </h4>
                <p className="text-red-700 text-sm">
                  Please read all terms and conditions carefully before
                  agreeing. By accepting these terms, you acknowledge that you
                  have read, understood, and agree to be bound by these
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label
                htmlFor="agreeTerms"
                className="ml-2 text-sm text-gray-700"
              >
                I have read and agree to the Terms and Conditions
              </label>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (isAgreed) {
                    setIsOpen(false);
                    // Handle agreement logic here
                    alert("Terms and Conditions accepted!");
                  }
                }}
                disabled={!isAgreed}
                className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                  isAgreed
                    ? "bg-pink-500 text-white hover:bg-pink-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Accept & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" ">
      <div className="max-w-6xl mx-auto">
        {/* Demo Registration Form Section */}
        <div className=" rounded-xl shadow-lg p-6 mb-8">
          <div className="space-y-4">
            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start space-x-3 p-4 bg-pink-50 border border-pink-200 rounded-lg">
              <input
                type="checkbox"
                id="terms"
                onClick={() => setIsOpen(true)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded mt-1 cursor-pointer"
              />
              <div className="flex-1">
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-700 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  I agree to the{" "}
                  <span className="text-pink-600 hover:text-pink-700 underline font-bold">
                    Terms and Conditions
                  </span>{" "}
                
                
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      {isOpen && <TermsModal />}
    </div>
  );
};

export default TermsAndConditionsPage;
