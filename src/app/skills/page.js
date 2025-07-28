"use client";
import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaPython,
  FaGitAlt, FaGithub, FaAws, FaFire, FaLaptopCode, FaTools
} from "react-icons/fa";
import {
  SiTailwindcss, SiC, SiCplusplus, SiFirebase,
  SiNetlify, SiVercel
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import {
  MdOutlineGroups, MdOutlineManageAccounts,
  MdOutlineAccessTime, MdChangeCircle
} from "react-icons/md";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const sectionStyle = "bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-4";
  const sectionHeading = "text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4 flex items-center gap-2";
  const skillItem = "flex items-center gap-2 text-gray-800 dark:text-gray-200";

  return (
    <section className="bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen pt-40 px-6">
      <div className="max-w-4xl mx-auto px-6 rounded-xl ">
        <h1 className="text-3xl font-bold text-blue-800 dark:text-white mb-10 text-center">
          My Skills
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={sectionStyle}
        >
          {/* Frontend */}
          <h2 className={sectionHeading}>
            <FaLaptopCode className="text-blue-500" /> Frontend
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <li className={skillItem}><FaHtml5 className="text-orange-600" /> HTML5</li>
            <li className={skillItem}><FaCss3Alt className="text-blue-500" /> CSS3</li>
            <li className={skillItem}><FaJs className="text-yellow-500" /> JavaScript (ES6+)</li>
            <li className={skillItem}><SiTailwindcss className="text-cyan-500" /> Tailwind CSS</li>
            <li className={skillItem}><FaReact className="text-blue-600" /> React.js</li>
            <li className={skillItem}><FaAngular className="text-red-600" /> AngularJS</li>
            <li className={skillItem}><SiC className="text-gray-600" /> C</li>
            <li className={skillItem}><SiCplusplus className="text-blue-700" /> C++</li>
            <li className={skillItem}><FaLaptopCode className="text-indigo-500" /> Bootstrap</li>
            <li className={skillItem}><FaReact className="text-gray-900" /> Next.js</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={sectionStyle}
        >
          {/* Backend */}
          <h2 className={sectionHeading}>
            <FaFire className="text-orange-500" /> Backend
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <li className={skillItem}><FaPython className="text-yellow-600" /> Python</li>
            <li className={skillItem}><SiFirebase className="text-yellow-400" /> Firebase (Auth & DB)</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={sectionStyle}
        >
          {/* Tools */}
          <h2 className={sectionHeading}>
            <FaTools className="text-gray-700" /> Tools & Platforms
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <li className={skillItem}><FaGitAlt className="text-red-500" /> Git</li>
            <li className={skillItem}><FaGithub className="text-black dark:text-white" /> GitHub</li>
            <li className={skillItem}><TbBrandVscode className="text-blue-600" /> VS Code</li>
            <li className={skillItem}><SiNetlify className="text-green-500" /> Netlify</li>
            <li className={skillItem}><SiVercel className="text-black dark:text-white" /> Vercel</li>
            <li className={skillItem}><FaAws className="text-orange-500" /> AWS</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={sectionStyle}
        >
          {/* Soft Skills */}
          <h2 className={sectionHeading}>
            <MdOutlineGroups className="text-purple-600" /> Soft Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2">
            <li className={skillItem}><MdOutlineGroups /> Team Collaboration</li>
            <li className={skillItem}><MdOutlineManageAccounts /> Problem Solving</li>
            <li className={skillItem}><MdOutlineAccessTime /> Time Management</li>
            <li className={skillItem}><MdChangeCircle /> Adaptability</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={sectionStyle}
        >
          {/* Experience */}
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">Hands-on Experience</h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-1">
            <li>Built real-world responsive websites using React & Tailwind</li>
            <li>Created JavaScript-based dynamic form with OTP & validation</li>
            <li>Connected Firebase Firestore and Auth in a full-stack project</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={sectionStyle}
        >
          {/* Currently Learning */}
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">Currently Learning</h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-1">
            <li>Next.js & server-side rendering</li>
            <li>MongoDB with Node.js</li>
            <li>Animations with Framer Motion</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="/projects" className="text-blue-700 dark:text-blue-300 font-semibold hover:underline">
            → Explore My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
