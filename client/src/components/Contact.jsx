// client/src/components/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

export const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      await toast.promise(
        axios.post(`${process.env.REACT_APP_API_URL}/api/messages`, formData, {
          headers: { "Content-Type": "application/json" },
        }),
        {
          loading: "Sending message...",
          success: () => {
            setFormData({ name: "", email: "", message: "" });
            return "Message sent successfully";
          },
          error: (err) => {
            console.error("Submission error:", err);
            return err.response?.data?.error || "Failed to send message";
          },
        }
      );
    } catch (error) {
      alert("Unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-12 sm:py-20 px-4 sm:px-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto w-full"
      >
        <h2 className={`text-2xl sm:text-4xl font-bold text-center mb-8 ${darkMode ? "text-white" : "text-gray-800"}`}>
          Contact Me
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className={`w-full p-2 sm:p-3 border rounded ${
              darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
            }`}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-2 sm:p-3 border rounded ${
              darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
            }`}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Message"
            className={`w-full p-2 sm:p-3 border rounded h-24 sm:h-32 ${
              darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
            }`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={isSubmitting}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-4 sm:px-6 py-2 rounded transition-colors flex items-center justify-center gap-2 ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800"
              : "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500"
          } text-white`}
        >
          {isSubmitting && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
};