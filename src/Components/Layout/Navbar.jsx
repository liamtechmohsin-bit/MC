import React, { useEffect, useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import logo from '../../assets/logo.png'
import { NavLink, useNavigate } from 'react-router';

const Navbar = () => {
  const naviagte = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const PageRedirect = () => {
    naviagte("/contact")
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`md:fixed static top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#9D2DF0]/40 backdrop-blur-[3px] shadow-lg py-3"
          : "bg-[#9D2DF0]/40 backdrop-blur-[3px] md:bg-transparent md:backdrop-blur-none py-6"
          }`}
      >
        <div className="flex justify-between items-center px-6 md:px-14 max-w-7xl mx-auto">

          {/* Logo */}
          <img src={logo} className='w-[200px] h-[40]' alt="" sizes="" srcset="" />

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex md:justify-center w-[749px] gap-9  px-6 py-3 rounded-md transition ${scrolled
              ? "text-white"
              : "bg-[#9D2DF0]/40 text-white backdrop-blur-[3px]"
              }`}
          >
            <li className="cursor-pointer hover:text-orange-900"><NavLink to='/'>Home</NavLink></li>
            <li className="cursor-pointer hover:text-orange-900"><NavLink to='/about'>About</NavLink></li>
            <li className="cursor-pointer hover:text-orange-900"><NavLink to="/services">Services</NavLink></li>
            <li className="cursor-pointer hover:text-orange-900"><NavLink to="/career">Careers</NavLink></li>
            <li className="cursor-pointer hover:text-orange-900"><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          {/* Button */}
          <button
            className={`hidden md:block md:flex md:items-center cursor-pointer gap-1  bg-transparent ${scrolled
              ? "text-[#9D2DF0]"
              : "text-[#9D2DF0]"
              }`}
            onClick={PageRedirect}
          >
            Join Us
            <MdArrowRightAlt className='text-xl' />
          </button>

          {/* Mobile Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <RxCross1 size={28} /> : <FaBarsStaggered size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="mx-6 mt-4 rounded-xl bg-white/30 backdrop-blur-md p-4 space-y-4 text-white">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">Services</p>

            <button className="w-full bg-white text-black py-2 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar