import { FaBarsStaggered } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`nav-fixed ${scrolled ? "py-3 bg-[#74118C]/80 backdrop-blur-md" : "py-6 bg-transparent"}`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* 1. Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            className="w-40 md:w-48 h-auto object-contain"
            alt="MetaCo Logo"
          />
        </div>

        {/* 2. Desktop Menu (Image ke mutabiq floating box) */}
        <ul
          className={`nav-menu-box ${!scrolled ? "glass-effect" : "bg-transparent border-none"}`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 3. Action Button */}
        <button
          onClick={() => navigate("/contact")}
          className={`hidden cursor-pointer md:flex nav-btn-join ${scrolled ? "text-white" : "text-[#74118C]"}`}
        >
          Join Us <MdArrowRightAlt className="text-2xl" />
        </button>

        {/* 4. Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-white" : "text-[#74118C]"} p-2`}
        >
          {open ? <RxCross1 size={26} /> : <FaBarsStaggered size={26} />}
        </button>
      </div>

      {/* 5. Mobile Side Menu (Overlay style) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${open ? "max-h-screen border-t border-white/10" : "max-h-0"}`}
      >
        <div className="flex flex-col p-8 gap-6 text-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-xl text-white font-medium"
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
            className="mt-4 cursor-pointer bg-[#74118C] py-2 rounded-md font-bold text-white"
          >
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
