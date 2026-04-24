import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background Waves */}
      <div className="absolute"></div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: FORM */}
        <div className="bg-white border-2 border-[#74118C] rounded-lg p-6 shadow-md">
          
          <h2 className="text-[#74118C] font-semibold">
            Let,s Level Up Your
          </h2>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Brand Together
          </h3>

          <form className="space-y-4">
            
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-purple-400"
            />

            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full p-3 rounded-md bg-gray-100 outline-none resize-none focus:ring-2 focus:ring-purple-400"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-black to-[#74118C] cursor-pointer hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT: CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
            Envisioning To Score in The Tech World ?{" "}
            <span className="text-[#74118C] font-bold">
              Introduce Us With Your Propositions
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Let,s raise the standard of your brand together
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;