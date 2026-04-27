import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
const ContactForm = () => {
  return (
    <section className="contact-section">
      
      {/* 1. Top Info Cards */}
      <div className="contact-cards-grid">
        <div className="contact-info-card">
          <FiPhone className="text-3xl text-[#74118C]" />
          <p className="text-gray-700 font-medium">(855) 720-5237</p>
        </div>
        <div className="contact-info-card">
          <FiMail className="text-3xl text-[#74118C]" />
          <p className="text-gray-700 font-medium">info@prowebdesign.com</p>
        </div>
        <div className="contact-info-card">
          <FiMapPin className="text-3xl text-[#74118C]" />
          <p className="text-gray-700 font-medium">4400 River Oaks Dr, Calumet City, IL</p>
        </div>
      </div>

      {/* 2. Main Form & Heading Grid */}
      <div className="contact-main-grid">
        
        {/* Left Side: Form */}
        <div className="contact-form-box">
          <div className="mb-2">
            <h4 className="text-[#74118C] font-bold">Let's Level Up Your</h4>
            <h2 className="text-2xl font-bold text-gray-900">Brand Together</h2>
          </div>

          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="contact-input" />
              <input type="email" placeholder="Email" className="contact-input" />
            </div>
            <input type="text" placeholder="Phone" className="contact-input" />
            <textarea placeholder="Your Message" rows="4" className="contact-input resize-none"></textarea>
            
            <button className="w-fit px-10 mx-auto md:mx-0 py-3 bg-gradient-to-r from-[#000] to-[#74118C] 
                             text-white font-bold rounded-md hover:shadow-lg transition-all 
                             active:scale-95 uppercase text-sm tracking-widest mt-2">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Heading Text */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Envisioning To Score in The Tech World? 
            <span className="text-[#74118C] block mt-2">Introduce Us With Your Propositions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Let's raise the standard of your brand together.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
