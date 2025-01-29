import Medard from "../assets/Medard.jpg";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex flex-col md:flex-row items-center h-[100vh] gap-6 px-5 
      bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white"
      role="main"
    >
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={Medard}
          alt="Portrait of Medard"
          className="w-[200px] h-[250px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[350px] object-cover rounded-full 
          shadow-2xl border-4 border-gray-400 animate-pulse"
        />
      </div>

      <div className="w-full md:w-3/5 space-y-5 text-center md:text-left">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl">Hi, I am Medard</h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          A passionate Frontend Developer who turns design ideas into functional
          and interactive websites. My expertise includes HTML, CSS,
          JavaScript, React, and Tailwind CSS. With a strong background in
          Figma prototyping, I focus on creating pixel-perfect, responsive web
          applications that work seamlessly across all devices. 
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-500 text-white text-sm sm:text-lg py-2 sm:py-3 px-6 sm:px-10 rounded-full 
          hover:bg-blue-600 transition-all duration-300">
            <a href="#document">My Document</a>
          </button>
          
          <button
            onClick={() => alert("Sign me up")}
            className="bg-blue-500 text-white text-sm sm:text-lg py-2 sm:py-3 px-6 sm:px-10 rounded-full 
            hover:bg-blue-600 transition-all duration-300"
          >
            Sign me up
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;