import React from "react";

const CareerSection = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center py-12 relative overflow-hidden">
      
      {/* Background Pattern */}

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: CAREER FORM */}
        <div className="bg-white border-2 border-[#74118C] rounded-lg p-6 shadow-md">

          {/* Heading */}
          <h2 className="text-[#74118C] font-semibold">
            Join Our Team
          </h2>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Build Your Career With Us
          </h3>

          <form className="space-y-4">
            
            {/* Name + Email */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-1/2 p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-[#74118C]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-1/2 p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-[#74118C]"
              />
            </div>

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-[#74118C]"
            />

            {/* Position */}
            <input
              type="text"
              placeholder="Position Applied For"
              className="w-full p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-[#74118C]"
            />

            {/* Resume Upload */}
            <input
              type="file"
              className="w-full p-3 rounded-md bg-gray-100 outline-none cursor-pointer"
            />

            {/* Message */}
            <textarea
              rows="3"
              placeholder="Why should we hire you?"
              className="w-full p-3 rounded-md bg-gray-100 outline-none resize-none focus:ring-2 focus:ring-[#74118C]"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="px-6 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-black to-[#74118C] hover:opacity-90 transition"
            >
              Apply Now
            </button>

          </form>
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
            Ready To Grow Your Career In Tech?{" "}
            <span className="text-[#74118C] font-bold">
              Let’s Build The Future Together
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            We are always looking for passionate developers, designers, and
            innovators. Join our team and work on exciting real-world projects.
          </p>

          {/* Extra Points */}
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Work on modern technologies (React, Node, AI)</li>
            <li>✔ Friendly & growth-focused environment</li>
            <li>✔ Real-world project experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;