import Medard from "../assets/Medard.jpg";

const Hero = () => {
  return (
    
    <main
      id="home"
      
      className="flex items-center h-[100vh] gap-6 px-5 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgnHg5gs5Hbfyy0nAfmPeqH0LfmhFcw__QQ&s')] 
      bg-cover bg-no-repeat bg-center  z-0"
      role="main"
    >
      
      <div className="w-3/5 space-y-5">
        <h1 className="font-extrabold text-4xl">Hi, I am Medard</h1>
        <p className="font-extrabold text-xl ">
          A passionate Frontend Developer who turns design ideas into functional
          and interactive websites. My expertise includes HTML, CSS,
          JavaScript, React, and Tailwind CSS. With a strong background in
          Figma prototyping, I focus on creating pixel-perfect, responsive web
          applications that work seamlessly across all devices. I enjoy
          bridging the gap between design and development, ensuring every
          project I work on delivers an excellent user experience. I’m always
          eager to learn and grow, excited to contribute to innovative
          projects!
        </p>
        <button
          onClick={() => alert("Sign me up")}
          className="bg-slate-900 text-white text-[18px] py-4 px-12 rounded-full hover:bg-slate-950 focus:ring-[2px] focus:ring-offset-green-500 focus:ring-offset-[1px] outline-none"
        >
          Sign me up
        </button>
      </div>
      <div className="w-1/3 flex justify-center">
        <img
          src={Medard}
          alt="Portrait of Medard"
          className="w-[200px] h-[300px] object-cover rounded-full shadow-lg"
        />
      </div>
    </main>
  );
};

export default Hero;

