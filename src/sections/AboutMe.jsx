

const AboutMe = () => {
  return (
    <main id="about" className="h-screen bg-gradient-to-r from-blue-50 to-indigo-100 pt-[6rem] z-0">
      <div className="space-y-6 max-w-5xl mx-auto flex flex-col justify-center
        items-center h-full bg-white rounded-[50px] px-24 relative shadow-lg">
        <h1 className="font-extrabold text-4xl text-center">About Me</h1>
        <h2 className="text-3xl text-black">Hello, my name is Medard NIZIGAMA.</h2>
        <strong>I’m a passionate and dedicated developer specializing in creating 
          modern, responsive, and user-friendly web applications. My skill set includes:</strong>
        <ul className="list-disc">
          <li className="text-xl text-black"><span className="font-extrabold text-indigo-700">Frontend Development:</span> HTML, CSS, JavaScript, and React.js.</li>
          <li className="text-xl text-black"><span className="font-extrabold text-indigo-700">Design & Prototyping:</span> Expertise in Figma for crafting visually stunning UI/UX designs.</li>
          <li className="text-xl text-black"><span className="font-extrabold text-indigo-700">Styling Frameworks:</span> Tailwind CSS for building clean and scalable styles efficiently.</li>
          <li className="text-xl text-black"><span className="font-extrabold text-indigo-700">Responsive Design:</span> Ensuring seamless user experiences across all devices.</li>
        </ul>
        <p className="text-justify text-purple-600 text-xl">
          I thrive on turning creative ideas into functional, high-quality 
          digital solutions. My focus is on writing clean, maintainable code and delivering 
          projects that combine aesthetics with top-notch performance. I’m always eager to 
          learn new technologies and push the boundaries of my skills to stay ahead in this
          ever-evolving field. When I’m not coding, I enjoy exploring new tools and techniques to 
          improve my craft and collaborating with like-minded individuals to 
          create impactful web experiences.
        </p>
      </div>
    </main>
  );
};

export default AboutMe;