import React from 'react'
import { useParams } from 'react-router'
import { carddetail } from '../Servicedetail';
import Banner from '../Components/Sections/Banner';
import Contour from '../Components/Sections/Contour';
import ChooseUs from '../Components/Sections/ChooseUs';
import bgimg from '../assets/aboutbg.png'
import img1 from '../assets/Servicesimg/singleicons/img1.png'
import img2 from '../assets/Servicesimg/singleicons/img2.png'
import img3 from '../assets/Servicesimg/singleicons/img3.png'
import img4 from '../assets/Servicesimg/singleicons/img4.png'
import img5 from '../assets/Servicesimg/singleicons/img5.png'
import img6 from '../assets/Servicesimg/singleicons/img6.png'
const SingleService = () => {
    const deliver = [
        {
            img: img1,
            text: "Software Quality & Delivery Services"
        },
        {
            img: img2,
            text: "Software Development Services"
        },
        {
            img: img3,
            text: "Finance Service Line"
        },
        {
            img: img4,
            text: "Sales & Marketing Team Augmentation"
        },
        {
            img: img5,
            text: "Sales & Marketing Team Augmentation"
        },
        {
            img: img6,
            text: "Client Care & Maintenance Support Staff Augmentation"
        }
    ]
    const { id } = useParams();
    const service = carddetail.find((item) => item.id === id);
    return (
        <>
            <div className='pt-[100px]'>
                <Banner text={service.name} />
                <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover", }}>
                    <div className='px-[100px] pt-[100px] pb-[30px]'>
                        <div className='flex justify-between gap-[20px]'>
                            <div className='w-[60%]'>
                                <h1 className='text-5xl text-[#555555]'>Service <span className='text-[#74118C]'>Overview</span></h1>
                                <p className='pt-[30px] pr-[20px] text-[#555555]'>{service.para}</p>
                                <div className='flex justify-center items-center bg-linear-to-r from-[#74118C] to-[#1F0526] rounded-md w-[630px] h-[340px] mt-[50px]'>
                                    <img src={service.img} alt="" />
                                </div>
                            </div>
                            <div className='w-[40%] pl-7'>
                                <h1 className='pr-[200px] text-[30px] font-semibold text-[#555555]'>We Deliver <span className='text-[#74118C]'>Excellence</span></h1>
                                <div className='flex flex-col gap-[30px] pt-[30px]'>
                                    {deliver.map((data) => (
                                        <div className='flex gap-4 items-center'>
                                            <img src={data.img} className='w-[50px]' alt="" />
                                            <p className='text-[18px]'>{data.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
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

export default SingleService