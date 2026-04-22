import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'
import Testimonial from '../Sections/Testimonial'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <div className='bg-gradient-to-b from-[#74118C] to-[#000]'>
                <Testimonial />
                <Footer />
            </div>

        </>
    )
}

export default MainLayout