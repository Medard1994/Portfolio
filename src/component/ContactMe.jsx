import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    fileUrl: ""
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "contact_upload_unsigned"); // Make sure this preset is UNSIGNED

    const res = await fetch("https://api.cloudinary.com/v1_1/dwiafj08b/upload", {
      method: "POST",
      body: data
    });

    if (!res.ok) throw new Error("Upload failed");

    const fileData = await res.json();
    return fileData.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let uploadedUrl = "";

      if (file) {
        uploadedUrl = await uploadFile();
      }

      const finalData = {
        ...formData,
        fileUrl: uploadedUrl
      };

      await emailjs.send(
        "service_ybyykj1",         // EmailJS Service ID
        "template_fiey2o8",        // EmailJS Template ID
        finalData,
        "xY-TGSr3RAZdMG9DH"        // EmailJS Public Key
      );

      alert("my email receave your imformation!");
      setFormData({ name: "", email: "", message: "", fileUrl: "" });
      setFile(null);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Habaye ikibazo, ongera ugerageze.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">contactMe</h2>

        <input
          type="text"
          name="name"
          placeholder="campany name/your full names"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="your imformation about..."
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        {/* <input
          type="file"
          onChange={handleFileChange}
          className="w-full mb-4"
        /> */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? " loading.." : "sandMesage"}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
