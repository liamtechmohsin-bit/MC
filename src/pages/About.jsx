import React from 'react'
import Banner from '../Components/Sections/Banner'
import AboutContent from '../Components/Sections/AboutContent'
import bgimg from '../assets/aboutbg.png'
import Contour from '../Components/Sections/Contour'
import ChooseUs from '../Components/Sections/ChooseUs'
const About = () => {
    return (
        <>
            <div className='pt-[100px]'>
                <Banner text="About Us" />
            </div>
            <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover", }}>
                <AboutContent title="offers dependable tech assistance." colortext="MetaCo Digitals" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters." />
                <div className='flex justify-center items-center py-6 px-[100px]'>
                    <Contour />
                </div>
                <ChooseUs />
            </div>
        </>
    )
}

export default About