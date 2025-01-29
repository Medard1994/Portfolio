import Logo from "../assets/Logo.jpg";


const Navbar = () => {
  return (
    <header className="bg-gray-300 fixed top-0 left-0 w-full z-10">
      <nav className="bg-green-300 flex items-center justify-between text-black h-[60px] px-4 md:px-8 lg:px-16">
        
        <img src={Logo} alt="Logo" className="w-[100px] md:w-[120px] lg:w-[150px]" />

        <ul className="hidden md:flex space-x-4 lg:space-x-10 mr-2">
          <li><a href="#home" className="hover:text-red-600 transition duration-200">Home</a></li>
          <li><a href="#about" className="hover:text-red-600 transition duration-200">AboutMe</a></li>
          <li><a href="#skills" className="hover:text-red-600 transition duration-200">Skills</a></li>
          <li><a href="#contact" className="hover:text-red-600 transition duration-200">ContactMe</a></li>
        </ul>

        <div className="md:hidden flex items-center">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <span className="sr-only">Open Menu</span>
            
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
