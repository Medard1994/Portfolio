const AboutMe = () => {
  return (
    <main
      id="about"
      className="h-screen bg-gradient-to-r from-blue-50 to-indigo-100 pt-[6rem] z-0 w-full"
    >
      <div
        className="space-y-6 max-w-5xl mx-auto flex flex-col justify-center items-center h-full bg-white rounded-[50px] px-6 md:px-12 lg:px-24 relative shadow-lg"
      >
        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center">
          About Me
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-black text-center">
          Hello, my name is Medard NIZIGAMA.
        </h2>
        
        <strong className="shadow-md w-full h-auto md:h-12 text-sm md:text-base lg:text-lg text-center">
          I’m a passionate and dedicated developer specializing in creating modern, responsive, and user-friendly web applications. My skill set includes:
        </strong>

        <ul className="list-disc space-y-3 text-sm md:text-base lg:text-lg">
          <li className="text-black">
          <li className="text-black">
            <span className="font-extrabold text-indigo-700">   HTML, CSS, JavaScript, and React.js.
              </span>
          </li>

             
            
          
          </li>
          <li className="text-black">
            <span className="font-extrabold text-indigo-700">Design & Prototyping:</span> Expertise in Figma for crafting visually stunning UI/UX designs.
          </li>
          <li className="text-black">
            <span className="font-extrabold text-indigo-700">Styling Frameworks:</span> Tailwind CSS for building clean and scalable styles efficiently.
          </li>
          <li className="text-black">
            <span className="font-extrabold text-indigo-700">Responsive Design:</span> Ensuring seamless user experiences across all devices.
          </li>
        </ul>

        <ul className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-7">
          <div className="bg-slate-200 rounded-2xl p-4 text-sm md:text-base lg:text-lg">
            <p className="font-extrabold text-justify text-black">
              I thrive on turning creative ideas into functional, high-quality digital solutions.
              </p> 
          </div>
          <div className="bg-slate-200 rounded-3xl p-4 text-sm md:text-base lg:text-lg">
            <p className="font-extrabold text-justify text-black">
              I’m always eager to learn new technologies and push the boundaries of my skills to stay ahead in this ever-evolving field. When I’m not coding, I enjoy exploring new tools and techniques to improve my craft and collaborating with like-minded individuals to create impactful web experiences.
            </p>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default AboutMe;


