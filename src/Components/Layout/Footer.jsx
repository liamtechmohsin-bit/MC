import React from 'react'
import logo from '../../assets/logo.png';
import card from '../../assets/cards.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className='flex justify-between items-center w-full px-[50px]'>
        <div className='flex flex-col justify-center gap-4 w-[30%]'>
          <div>
            <img src={logo} className='w-[280px] h-[80px]' alt="" />
          </div>
          <div>
            <h1>About Website Designs</h1>
            <p>Website Designs is a US-based agency specializing in integrated digital branding and marketing. As a full-service agency, we handle everything from developing new brands to promoting them widely and generating new clientele.</p>
          </div>
          <div>
            <img src={card} alt="" />
          </div>
        </div>
        <div className='w-[20%]'>
          <ul className='flex flex-col gap-2.5 leading-3'>
            <li><h1 className='text-[#C502F6] font-semibold uppercase pb-3'>Quick Access</h1></li>
            <li>Home</li>
            <li>About</li>
            <li>Packages</li>
            <li>Combo</li>
            <li>Testimonial</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
          <div className='py-3'>
            <h1 className='text-[#C502F6] font-semibold '>Follow Us </h1>
            <div className='flex gap-1 pt-3'>
              <FaSquareFacebook className='text-xl'/>
              <TbBrandInstagramFilled className='text-xl'/>
              <FaEnvelope className='text-xl'/>
            </div>
          </div>
        </div>
        <ul className='flex flex-col gap-2.5 w-[20%] '>
          <li><h1 className='text-[#C502F6] font-semibold uppercase pb-2'>Quick Access</h1></li>
          <li>Home</li>
          <li>About</li>
          <li>Packages</li>
          <li>Combo</li>
          <li>Testimonial</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </>
  )
}

export default Footer