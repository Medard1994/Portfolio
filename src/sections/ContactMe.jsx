import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your Email.js service ID
        "YOUR_TEMPLATE_ID", // Replace with your Email.js template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "YOUR_USER_ID" // Replace with your Email.js public key/user ID
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response.status, response.text);
          setSubmissionMessage("Thank you! Your message has been sent.");
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSubmissionMessage("Something went wrong. Please try again.");
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-2xl mx-auto text-center z-0 min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
        Contact Me
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
        Feel free to reach out to me through the form below or connect via social media.
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical text-sm md:text-base"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 text-sm md:text-base"
        >
          Send Message
        </button>
      </form>
      {submissionMessage && (
        <p className="mt-4 text-green-600 font-semibold text-sm md:text-base">
          {submissionMessage}
        </p>
      )}
    </section>
  );
};

export default ContactMe;
