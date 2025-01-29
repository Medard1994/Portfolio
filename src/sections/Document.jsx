import Diplom from "../assets/Diplom.jpg";
import Cv from "../assets/Cv.jpg";
import Alongs from "../assets/Alongs.jpg";
import Certifacate from "../assets/Certifacate.jpg";

const Document = () => {
  const handleDownload = (file, filename) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = filename;
    link.click();
  };

  return (
    <main id="document" className="px-4 py-8">
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        <img
          src={Diplom}
          alt="Diplom"
          className="w-48 h-56 sm:w-60 sm:h-72 md:w-72 md:h-80 lg:w-[300px] lg:h-[350px] object-cover shadow-2xl border-4 border-gray-400 animate-pulse cursor-pointer"
          onClick={() => handleDownload(Diplom, "Diplom.jpg")}
        />
        <img
          src={Cv}
          alt="Curriculum Vitae"
          className="w-48 h-56 sm:w-60 sm:h-72 md:w-72 md:h-80 lg:w-[300px] lg:h-[350px] object-cover rounded shadow-xl cursor-pointer"
          onClick={() => handleDownload(Cv, "Cv.jpg")}
        />
        <img
          src={Alongs}
          alt="Additional Document"
          className="w-48 h-56 sm:w-60 sm:h-72 md:w-72 md:h-80 lg:w-[300px] lg:h-[350px] object-cover rounded shadow-xl cursor-pointer"
          onClick={() => handleDownload(Alongs, "Alongs.jpg")}
        />
        <img
          src={Certifacate}
          alt="Certificate"
          className="w-48 h-56 sm:w-60 sm:h-72 md:w-72 md:h-80 lg:w-[300px] lg:h-[350px] object-cover rounded shadow-xl cursor-pointer"
          onClick={() => handleDownload(Certifacate, "Certifacate.jpg")}
        />
      </div>
    </main>
  );
};

export default Document;
