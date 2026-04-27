import { HiCheckCircle } from "react-icons/hi";
const CareerForm = () => {
  return (
    <section className="career-section">
      <div className="career-container">
        {/* Left Side: Form */}
        <div className="career-form-card">
          <span className="text-[#74118C] font-bold text-sm">
            Join Our Team
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Build Your Career With Us
          </h2>

          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="form-input"
              />
            </div>

            <input
              type="text"
              placeholder="Phone Number"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Position Applied For"
              className="form-input"
            />

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-xs pl-1">Choose File</label>
              <input
                type="file"
                className="form-input file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:bg-brandPurple file:text-white"
              />
            </div>

            <textarea
              placeholder="Why should we hire you?"
              className="form-input h-32 resize-none"
            ></textarea>

            <button
              className="w-fit px-10 py-3 bg-gradient-to-r from-[#000] to-[#74118C] 
                             text-white font-bold rounded-md hover:shadow-lg transition-all 
                             active:scale-95 capitalize text-sm tracking-widest mt-2"
            >
              Send Application
            </button>
          </form>
        </div>

        {/* Right Side: Text Content */}
        <div className="career-content">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ready To Grow Your Career In Tech? <br />
            <span className="text-brandPurple">
              Let's Build The Future Together
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We are always looking for passionate developers, designers, and
            innovators. Join our team and work on exciting real-world projects.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <div className="check-item">
              <HiCheckCircle className="check-icon" />
              <span>Work on modern technologies (React, Node, AI)</span>
            </div>
            <div className="check-item">
              <HiCheckCircle className="check-icon" />
              <span>Friendly & growth-focused environment</span>
            </div>
            <div className="check-item">
              <HiCheckCircle className="check-icon" />
              <span>Real-world project experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;
