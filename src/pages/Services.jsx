import React from 'react'
import Banner from '../Components/Sections/Banner'
import ServicesCard from '../Components/Sections/ServicesCard'

const Services = () => {
    return (
        <>
            <div className='pt-[100px]'>
                <Banner text="Services" />
                <ServicesCard />
            </div>
        </>
    )
}

export default Services