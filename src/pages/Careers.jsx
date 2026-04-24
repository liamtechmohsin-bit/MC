import React from 'react'
import Banner from '../Components/Sections/Banner'
import Contour from '../Components/Sections/Contour'
import ChooseUs from '../Components/Sections/ChooseUs'
import bgimg from '../assets/aboutbg.png'
import CareerSection from '../Components/Sections/CareerSection'
const Careers = () => {
    return (
        <>
            <div className='pt-[100px]'>
                <Banner text="Careers" />
                <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover", }}>
                    <div className='py-[10px] px-[100px]'>
                        <CareerSection/>
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

export default Careers