"use client";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 px-6 py-24">
      <div className="max-w-5xl mx-auto bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-xl shadow-xl">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
            <img
              src="/sanika.jpg"
              alt="Sanika Mamidwar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">About Me</h1>

        {/* Personal Intro */}
        <p className="text-gray-700 text-lg mb-8 text-center">
          Hi, Im <span className="text-blue-700 font-semibold">Sanika Mamidwar</span>, an aspiring Full Stack Developer. I enjoy building beautiful UIs and solving real-world problems through code. Let me tell you more about myself!
        </p>

        {/* Stats Cards */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="bg-blue-200 text-blue-900 px-6 py-4 rounded-xl shadow">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div className="bg-purple-200 text-purple-900 px-6 py-4 rounded-xl shadow">
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm">Languages Spoken</p>
          </div>
        </div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4 border-b pb-2">Personal Info</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li><strong>Full Name:</strong> Sanika Mamidwar</li>
            <li><strong>Education:</strong> BBA-CA at BJS College (SPPU University)</li>
            <li><strong>Course:</strong> Full Stack AngularJS at Flexit System</li>
            <li><strong>Goal:</strong> Become a Full Stack Developer specializing in Python</li>
            <li><strong>Current Focus:</strong> Real-world projects using React, Firebase, and Tailwind CSS</li>
            <li><strong>Languages:</strong> Marathi, Hindi, English</li>
          </ul>
        </motion.div>

        {/* Languages & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4 border-b pb-2">Languages & Interests</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><strong>Languages I speak:</strong> English , Hindi, Marathi </li>
            <li><strong>Hobbies:</strong> 💻 Coding, 🎨 UI Design, 🎵 Music, 📷 Photography</li>
          </ul>
        </motion.div>

        {/* Current Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4 border-b pb-2">What I’m Currently Learning</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>Advanced React patterns and hooks</li>
            <li>Authentication and Firestore integration</li>
            <li>Node.js with Express and MongoDB</li>
            <li>Real-time data handling using Firebase</li>
          </ul>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 bg-blue-50 p-4 rounded-lg"
        >
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Fun Fact 🎉</h2>
          <p className="text-gray-700">
            I love designing colorful UIs, and I once built a full project in just 2 days for a college hackathon!
          </p>
        </motion.div>

        {/* Resume + Social Links */}
        <div className="text-center mt-12 space-y-4">
          <a
            href="/Sanika_Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            📄 Download Resume
          </a>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://linkedin.com/in/YOUR-ID" target="_blank">
              <FaLinkedin className="text-3xl text-blue-700 hover:scale-110 transition" />
            </a>
            <a href="https://github.com/YOUR-ID" target="_blank">
              <FaGithub className="text-3xl text-gray-800 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
