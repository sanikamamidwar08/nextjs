"use client";
import React from "react";
import Image from "next/image";

const projectList = [
  {
    title: "Food Ordering Website",
    image: "/food.png", 
    description: "HTML and css use, Interactive food delivery website with filters.",
  },
  {
    title: "Fashion Optical Store",
    image: "/fashion.png",
    description: "React e-commerce site with cart & Firestore.",
  },
  {
    title: "Loan Application Form",
    image: "/loan.png",
    description: "JS form with OTP, validation, and captcha.",
  },
  {
    title: "Figma to HTML Site",
    image: "/figma.png",
    description: "Converted Figma design to clean HTML/CSS.",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen px-8 py-16 bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        My Projects
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projectList.map((proj, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <Image
              src={proj.image}
              alt={proj.title}
              width={800}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-700">
                {proj.title}
              </h2>
              <p className="mt-2 text-gray-600">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
