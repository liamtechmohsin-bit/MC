import React from 'react'
import Banner from '../Components/Sections/Banner'
import Contour from '../Components/Sections/Contour'
import ChooseUs from '../Components/Sections/ChooseUs'
import bgimg from '../assets/aboutbg.png'
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import ContactForm from '../Components/Sections/ContactForm'
const Contact = () => {
    const contactinfo = [
        {
            icon: <FiPhoneCall />,
            text: "(000) 000-0000"
        },
        {
            icon: <FaRegEnvelope />,
            text: "info@Prowebdesign.com"
        },
        {
            icon: <LuMapPin />,
            text: "665 River Oaks Dr.Calumet City, IL 60409 USA"
        },
    ]
    return (
        <>
            <div className='pt-[100px]'>
                <Banner text="Contact" />
                <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover", }}>
                    <div className='px-[100px] pb-[40px] pt-[70px]'>
                        <div className='grid grid-cols-1 grid-cols-3 gap-3'>
                            {contactinfo.map((data) => (
                                <div className='border border-[#74118C] border-[2px] rounded-lg flex gap-[5px] flex-col justify-center items-center py-[50px]'>
                                    <span className='text-4xl text-[#74118C]'>{data.icon}</span>
                                    <p className='text-[16px]'>{data.text}</p>
                                </div>
                            ))}

                        </div>
                        <div className='flex justify-between py-[20px] items-center'>
                            <ContactForm />
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-6 px-[100px]'>
                        <Contour />
                    </div>
                    <ChooseUs />
                </div>
            </div>
        </>
    )
}

export default Contact