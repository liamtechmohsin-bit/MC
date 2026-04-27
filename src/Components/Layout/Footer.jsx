import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import TestimonialGrid from "../Sections/TestimonialGrid";

const Footer = () => {
  return (
    <footer className="footer-main">
      <TestimonialGrid />
      <hr className="border-t-2 border-dashed border-gray-400" />
      <div className="footer-container">
        {/* Column 1: Logo & About */}
        <div className="flex flex-col gap-6">
          <img
            src="/src/assets/logo.png"
            alt="MetaCo Digitals"
            className="w-48"
          />
          <div>
            <h4 className="font-bold mb-2">About Website Designs</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Website Designs is a US-based agency specializing in integrated
              digital branding and marketing. As a full-service agency, we
              handle everything from developing new brands.
            </p>
          </div>
          {/* Payment Icons Placeholder */}
          <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800 w-fit">
            <img src="/src/assets/cards.png" alt="Payments" className="h-8" />
          </div>
        </div>

        {/* Column 2: Quick Access 1 */}
        <div>
          <h3 className="footer-heading">Quick Access</h3>
          <ul className="flex flex-col">
            <li>
              <a href="#" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="footer-heading !mb-4">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <FiFacebook className="hover:text-[#7b1295] cursor-pointer" />
              <FiInstagram className="hover:text-[#7b1295] cursor-pointer" />
              <FiTwitter className="hover:text-[#7b1295] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Column 3: Quick Access 2 (Services) */}
        <div>
          <h3 className="footer-heading">Quick Access</h3>
          <ul className="flex flex-col">
            <li>
              <a href="#" className="footer-link">
                Logo Design
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Creative Copywriting
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Website Development
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Ecommerce Web
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                App Design
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Address/Contact */}
        <div>
          <h3 className="footer-heading">Address</h3>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <FiPhone className="text-[#7b1295] text-xl" />
              <span className="text-gray-400 group-hover:text-white">
                (855) 720-5237
              </span>
            </div>
            <div className="flex items-center gap-4 group">
              <FiMail className="text-[#7b1295] text-xl" />
              <span className="text-gray-400 group-hover:text-white">
                sales@prowebdesign.com
              </span>
            </div>
            <div className="flex items-start gap-4 group">
              <FiMapPin className="text-[#7b1295] text-2xl mt-1" />
              <span className="text-gray-400 group-hover:text-white">
                9 2372 Morse Ave, 1st-2nd Fl-Ste 2372, IRVINE, CA 92614
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© All Rights Reserved 2026 - MetaCo Digitals</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Terms Conditions
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
