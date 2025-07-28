"use client";

import React, { useEffect, useState } from "react";
import { FaUser, FaPaperPlane, FaPhoneAlt, FaGithub, FaLinkedin, FaCommentDots } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Show success toast
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen pt-40 px-6">
      <ToastContainer />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div data-aos="fade-right" className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-blue-700 dark:text-white mb-6 text-center">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Name</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-white dark:bg-gray-800">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-white dark:bg-gray-800">
                <MdEmail className="text-gray-500 mr-2" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
              <div className="flex items-start border rounded-lg px-3 py-2 bg-white dark:bg-gray-800">
                <FaCommentDots className="text-gray-500 mr-2 mt-1" />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 mx-auto"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-left" className="flex flex-col justify-center bg-blue-100 dark:bg-gray-800 rounded-lg p-8 shadow-xl space-y-6">
          <h3 className="text-2xl font-semibold text-blue-800 dark:text-white">Let's Connect</h3>
          <p className="text-gray-700 dark:text-gray-300">
          I'm open to internships & full-time job opportunities. Feel free to reach out!
          </p>
          <div className="text-gray-800 dark:text-gray-200 space-y-2">
            <p><FaPhoneAlt className="inline mr-2" /> +91-XXXXXXXXXX</p>
            <p><MdEmail className="inline mr-2" /> sanikamamidwar@gmail.com</p>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/YOUR-ID" target="_blank" className="hover:scale-110 transition">
                <FaGithub className="text-2xl text-black dark:text-white" />
              </a>
              <a href="https://linkedin.com/in/YOUR-ID" target="_blank" className="hover:scale-110 transition">
                <FaLinkedin className="text-2xl text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
