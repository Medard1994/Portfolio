
import Logo from "../assets/Logo.svg";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="bg-gray-300 fixed top-0 left-0 w-full z-10">
   <nav className="bg-green-300 flex items-center justify-between text-black h-[60px]">
    <img src={Logo} alt="Logo.svg" className="w-[150px]"/>

    <div className="relative flex items-center">
    <FaSearch className="absolute left-52 text-gray-500" />
  <input
    type="text"
    placeholder="Searching"
    className="rounded-2xl border border-gray-300 px-4 py-2 pl-10 w-full focus:outline-none"
  />
  
</div>
    <ul className="space-x-10 mr-5">
        <a href="#home"className="hover:text-red-600 transition duration-200">Home</a>
        <a href="#about" className="hover:text-red-600 transition duration-200">AboutMe</a>
        <a href="#skills" className="hover:text-red-600 transition duration-200">Skills</a>
        <a href="#contact" className="hover:text-red-600 transition duration-200">ContactMe</a>
        
    </ul>
   </nav>
   </header>
  )
}

export default Navbar
