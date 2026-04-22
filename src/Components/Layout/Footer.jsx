import React from 'react'
import logo from '../../assets/logo.png';
import card from '../../assets/cards.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
const Footer = () => {
  return (
    <>
      <div className='flex flex-col w-full pt-[60px]'>
        <div className='flex justify-between items-center w-full px-[50px] pb-7'>
          <div className='flex flex-col justify-center gap-4 w-[30%]'>
            <div>
              <img src={logo} className='w-[280px] h-[80px]' alt="" />
            </div>
            <div className='text-white'>
              <h1>About Website Designs</h1>
              <p>Website Designs is a US-based agency specializing in integrated digital branding and marketing. As a full-service agency, we handle everything from developing new brands to promoting them widely and generating new clientele.</p>
            </div>
            <div>
              <img src={card} alt="" />
            </div>
          </div>
          <div className='flex justify-between items-start w-[70%]'>
            <div className='w-[23%]'>
              <ul className='flex flex-col gap-2.5 leading-3 text-white'>
                <li><h1 className='text-[#C502F6] text-[24px] font-semibold uppercase pb-3'>Quick Access</h1></li>
                <li className='text-[18px] py-[2px]'>Home</li>
                <li className='text-[18px] py-[2px]'>About</li>
                <li className='text-[18px] py-[2px]'>Packages</li>
                <li className='text-[18px] py-[2px]'>Combo</li>
                <li className='text-[18px] py-[2px]'>Testimonial</li>
                <li className='text-[18px] py-[2px]'>Contact</li>
                <li className='text-[18px] py-[2px]'>Privacy Policy</li>
              </ul>
              <div className='py-4'>
                <h1 className='text-[#C502F6] font-semibold text-[20px]'>Follow Us </h1>
                <div className='flex gap-1 pt-3 text-white'>
                  <FaSquareFacebook className='text-xl' />
                  <TbBrandInstagramFilled className='text-xl' />
                  <FaEnvelope className='text-xl' />
                </div>
              </div>
            </div>
            <ul className='flex flex-col gap-2.5 leading-3 w-[23%] text-white'>
              <li><h1 className='text-[#C502F6] text-[24px] font-semibold uppercase pb-3'>Quick Access</h1></li>
              <li className='text-[18px] py-[2px]'>Logo Design </li>
              <li className='text-[18px] py-[2px]'>Creative</li>
              <li className='text-[18px] py-[2px]'>Copywriting</li>
              <li className='text-[18px] py-[2px]'>Website</li>
              <li className='text-[18px] py-[2px]'>Development</li>
              <li className='text-[18px] py-[2px]'>Digital Marketing</li>
              <li className='text-[18px] py-[2px]'>Ecommerce Web</li>
              <li className='text-[18px] py-[2px]'>Illustration</li>
              <li className='text-[18px] py-[2px]'>Design Solutions</li>
              <li className='text-[18px] py-[2px]'>Marketing</li>
            </ul>
            <div className='w-[24%] text-white'>
              <h1 className='text-[#C502F6] text-[24px] font-semibold uppercase pb-3'>Address</h1>
              <div className='flex items-center gap-2 pb-2 text-white'><span><BiSolidPhoneCall /></span><p className='text-[18px]'> (855) 720-5237</p></div>
              <div className='flex items-center gap-2 pb-2' text-white><span><FaEnvelope /></span><p className='gap-2 text-[18px]'> sales@Prowebdesign.com</p></div>
              <div className='flex items-start gap-2 text-white'><span className='pt-0.5'><TiLocation /></span><p className=''>9 2372 Morse Ave, 1st-2nd Fl-Ste 2372, IRVINE, CA 92614</p></div>
            </div>
          </div>
        </div>
        <div className='flex justify-between border-t-2 border-white pb-5 px-5'>
          <div className='text-white'><p className='text-[16px] font-semibold'>© All Rights Reserved 2026 - ProWebDesignUSA</p></div>
          <ul className='flex gap-4 text-white'>
            <li className='text-[16px] font-semibold'>Terms Conditions</li>
            <li className='text-[16px] font-semibold'>Privacy Policy</li>
            <li className='text-[16px] font-semibold'>Refund Policy</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer