import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-gray-200 to-gray-200 text-black z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuczoDgISohhBIYz-lnQFBNwP1ZAu8Fuqkg&s"
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
          
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="hover:text-pink-700" /> : <FaBars className="hover:text-pink-700" />}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-20 right-4 bg-gray-200 shadow-md rounded-md md:flex md:static md:bg-transparent md:shadow-none md:rounded-none md:space-x-4 transition-all duration-300`}
        >
          {[
            { to: "/home", label: "Home" },
            { to: "/about", label: "AboutMe" },
            { to: "/skills", label: "Skills" },
            { to: "/contact", label: "ContactMe" },
          ].map((link) => (
            <li key={link.to} className="p-3 md:p-0 text-right md:text-left">
              <Link
                to={link.to}
                onClick={() => setIsMenuOpen(false)} // close on click (mobile)
                className={`font-bold block px-4 py-1 rounded-md transition-all duration-300 ${
                  location.pathname === link.to
                    ? "bg-pink-600 text-white"
                    : "hover:text-pink-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
