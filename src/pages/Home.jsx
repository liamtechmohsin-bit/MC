import React from 'react'
import Hero from '../Components/Sections/Hero'
import ChooseUs from '../Components/Sections/ChooseUs'
import AboutContent from '../Components/Sections/AboutContent'

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <AboutContent title="offers dependable tech assistance." colortext="MetaCo Digitals" />
                <ChooseUs />
            </div>
        </>
    )
}

export default Home
