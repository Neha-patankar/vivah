import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#800020] text-[#f3e8e8] ">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <img
            src="/vivahlogo.png"
            alt="Vivah Mahurat Logo"
            className="w-24 h-auto mb-3"
          />
          {/* <h1 className="text-2xl font-bold mb-2 text-[#ffd700]">
            Vivah Mahurat
          </h1> */}
          <p className="text-sm leading-relaxed">
            Apka Vishwas, Apka Rishta – सुरक्षित और सरल जीवनसाथी खोज का मंच।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-[#ffd700]">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-[#ffd700] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#ffd700] transition">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-[#ffd700] transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#ffd700] transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-[#ffd700]">
            Services
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/search" className="hover:text-[#ffd700] transition">
                Match Finder
              </a>
            </li>
            <li>
              <a href="/membership" className="hover:text-[#ffd700] transition">
                Membership Plans
              </a>
            </li>
            <li>
              <a
                href="/success-stories"
                className="hover:text-[#ffd700] transition"
              >
                Success Stories
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-[#ffd700]">
            Contact Us
          </h2>
          <p className="text-sm">
            Email:
            <a
              href="mailto:info@aanshisolutions.com"
              className="ml-1 hover:text-[#ffd700] transition"
            >
              info@aanshisolutions.com
            </a>
          </p>
          <p className="text-sm mt-2">
            Phone:
            <a
              href="tel:+919827072993"
              className="ml-1 hover:text-[#ffd700] transition"
            >
              +91-9827072993
            </a>
            ,
            <a
              href="tel:+919755322022"
              className="ml-1 hover:text-[#ffd700] transition"
            >
              +91-9755322022
            </a>
          </p>
          <p className="text-sm mt-2 leading-snug">
            Address: 205, Prakash Tower, Y.N. Road, Indore (M.P) – 452001
          </p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#4b0f1f] text-center py-4 text-xs sm:text-sm text-[#f3e8e8]">
        © {new Date().getFullYear()} Aanshi Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
