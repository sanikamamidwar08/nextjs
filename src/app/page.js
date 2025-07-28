"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen pt-40 px-6">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12"
        >
          {/* Left Side: Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800">
              Hi, I'm <span className="text-blue-700">Sanika Mamidwar</span>
              <br />
              <span className="text-xl text-purple-600 font-semibold">
                Aspiring Full Stack Developer
              </span>
            </h2>

            <p className="text-md text-gray-700 leading-relaxed">
              I love building user-friendly and scalable web applications using modern technologies.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-blue-700 hover:scale-110 transition" />
              </a>
              <a
                href="https://github.com/sanikamamidwar08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-800 hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-72 h-72 rounded-full overflow-hidden shadow-2xl transition-transform duration-300 ease-in-out"
          >
            <Image
              src="/sanikaa.jpg"
              alt="Sanika Mamidwar"
              width={300}
              height={300}
              className="object-cover object-top w-full h-full"
            />
          </motion.div>
        </motion.section>
      </main>

  
    </>
  );
}
