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
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-gray-200 to-gray-200 text-black z-50">
      
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex-grow"></div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="hover:text-pink-700" /> : <FaBars className="hover:text-pink-700"/>}
          </button>
        </div>
     <dev className="mr-[800px]"> 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuczoDgISohhBIYz-lnQFBNwP1ZAu8Fuqkg&s" className="w-20 h-20"/>
     </dev>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-14 right-7  bg-gray-400 md:static md:flex md:space-x-3 md:bg-transparent`}
        >
          <li className="p-4  md:p-0 text-right md:text-left">
            <Link
              to="/home"
              className={`font-extrabold block px-2 py-0 rounded-lg transition-all duration-300 ${
                location.pathname === "/home" ? "bg-pink-600 text-white" : "hover:text-pink-600"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="p-4 md:p-0 text-right md:text-left">
            <Link
              to="/about"
              className={`font-extrabold block px-2 py-0 rounded-lg transition-all duration-300 ${
                location.pathname === "/about" ? "bg-pink-600 text-white" : "hover:text-pink-600"
              }`}
            >
              AboutMe
            </Link>
          </li>
          <li className="p-4 md:p-0 text-right md:text-left">
            <Link
              to="/skills"
              className={`font-extrabold block px-2 py-0 rounded-lg transition-all duration-300 ${
                location.pathname === "/skills" ? "bg-pink-600 text-white" : "hover:text-pink-600"
              }`}
            >
              Skills
            </Link>
          </li>
          <li className="p-4 md:p-0 text-right md:text-left">
            <Link
              to="/contact"
              className={`font-extrabold block px-2 py-0 rounded-lg transition-all duration-300 ${
                location.pathname === "/contact" ? "bg-pink-600 text-white" : "hover:text-pink-600"
              }`}
            >
              ContactMe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;