// app/projects/food/page.js

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FoodProject = () => {
  const foodImages = [
    {
      src: "fhome.png",
      title: "Home Page",
      description: "Beautiful landing page with food categories and offers.",
    },
    {
      src: "fhome1.png",
      title: "Menu Page",
      description: "View all food items with filters and search options.",
    },
    {
      src: "fhome2.png",
      title: "Cart Page",
      description: "Add to cart functionality with quantity controls.",
    },
    {
      src: "fhome3.png",
      title: "Order Page",
      description: "Secure checkout and order summary section.",
    },
    {
      src: "fhome4.png",
      title: "Contact Page",
      description: "Contact form with email support and map integration.",
    },
    {
      src: "fhome5.png",
      title: "Thank You Page",
      description: "Final thank you message after successful order.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Food Ordering Website</h1>

      <p className="mb-6 max-w-2xl">
        A responsive food ordering web app with filtering, cart, checkout, and stylish design.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {foodImages.map((img, index) => (
          <div key={index} className="text-center">
            <Image
              src={`/${img.src}`}
              alt={img.title}
              width={400}
              height={250}
              className="rounded-md shadow-md object-cover mx-auto"
            />
            <h3 className="text-lg font-semibold mt-3 text-blue-600">{img.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{img.description}</p>
          </div>
        ))}
      </div>

      <Link href="/projects">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          ⬅ Back to Projects
        </button>
      </Link>
    </div>
  );
};

export default FoodProject; 
