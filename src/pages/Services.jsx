import React from 'react'
import Banner from '../Components/Sections/Banner'
import ServicesCard from '../Components/Sections/ServicesCard'
import bgimg from '../assets/aboutbg.png'
import Contour from '../Components/Sections/Contour'
import ChooseUs from '../Components/Sections/ChooseUs'
const Services = () => {
    return (
        <>
            <div className='pt-[10px] md:pt-[100px]'>
                <Banner text="Services" />
                <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat:'no-repeat' }}>
                    <div className='px-[40px] md:px-[80px]'>
                        <ServicesCard />
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

export default Services