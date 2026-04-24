import React from 'react'
import bgImg from "../../assets/Bannerbg.png"
const Banner = ({ text }) => {
    return (
        <>
            <div
                className="relative overflow-hidden w-full h-[170px] inset-0 bg-gradient-to-r from-[#74118C] to-[#1F0526] flex justify-center items-center"
            >
                {/* Gradient Overlay */}
                <div className="absolute w-full h-full">
                    <img src={bgImg} className='w-full h-full' alt="" />
                </div>

                {/* Content */}
                <h1 className="relative z-10 text-white text-4xl md:text-6xl capitalize">
                    {text}
                </h1>
            </div>
        </>
    )
}

export default Banner