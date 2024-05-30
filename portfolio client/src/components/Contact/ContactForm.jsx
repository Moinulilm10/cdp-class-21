import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const URL = "http://localhost:3000/contact";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message");
    }
  };

  return (
    <form className="flex flex-col justify-center p-6 " onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="hidden">
          Full Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="your full name"
          value={formData.name}
          onChange={handleChange}
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="email" className="hidden">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your email"
          value={formData.email}
          onChange={handleChange}
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="message" className="hidden">
          Write Your Message
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="message"
          value={formData.message}
          onChange={handleChange}
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 mt-3 font-bold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-lg md:w-32 hover:bg-blue-dark hover:bg-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
