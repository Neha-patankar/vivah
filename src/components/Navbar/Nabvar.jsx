import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "होम", href: "/" },
    { label: "सेवाएं", href: "/servicespage" },
    { label: "हमारे बारे में", href: "/about" },
    { label: "वेंडर डायरेक्टरी", href: "/vendor" },
    { label: "विवाह रस्में ", href: "/rasmepage" },
    { label: "रिश्ते", href: "/rishtey" },
    { label: "संपर्क करें", href: "/contactus" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/vivahlogo.png"
              alt="Vivah Logo"
              className="w-20 h-10 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent hover:underline transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/registration"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 font-bold text-white px-5 py-2 rounded-full hover:shadow-md transform hover:scale-105 transition duration-200"
            >
              रजिस्टर
            </Link>

            <Link
              to="/login"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-5 py-2 rounded-full hover:shadow-md transform hover:scale-105 transition duration-200"
            >
              लॉगिन
            </Link>

            <Link
              to="/allmembers"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-5 py-2 rounded-full hover:shadow-md transform hover:scale-105 transition duration-200"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-purple-700 hover:text-rose-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-purple-700 font-semibold hover:text-rose-500 hover:bg-rose-50 rounded-md"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/registration"
              onClick={() => setIsMenuOpen(false)}
              className="w-full block text-center mt-3 bg-gradient-to-r from-purple-600 to-indigo-600 font-bold text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-200"
            >
              रजिस्टर
            </Link>

            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-full block text-center mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-6 py-2 rounded-full hover:shadow-lg transition duration-200"
            >
              लॉगिन
            </Link>

            <Link
              to="/allmembers"
              onClick={() => setIsMenuOpen(false)}
              className="w-full block text-center mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-6 py-2 rounded-full hover:shadow-lg transition duration-200"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
