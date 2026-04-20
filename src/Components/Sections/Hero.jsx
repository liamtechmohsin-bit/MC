import React from 'react'
import videoBg from "../../assets/bgvideo.mp4"
import { useNavigate } from 'react-router'
import Button from '../Common/Button'
const Hero = () => {
    const navigate = useNavigate()
    const PageRedirect = () => {
        navigate("/services");
        alert("Hello")
    }
    return (
        <> <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-fill"
            >
                <source src={videoBg} type="video/mp4" />
            </video>
            {/* Overlay (dark effect for readability) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#9D2DF0] px-52">
                    <span className='text-white'>Modernise your business</span> <br />with own AI Solutions
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white">
                    We create amazing digital experiences
                </p>
                <Button onclick={PageRedirect} text="Get Started" />
            </div>
        </div></>
    )
}

export default Hero