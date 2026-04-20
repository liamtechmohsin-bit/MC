import React from 'react'
import bgImg from "../../assets/Bannerbg.png"
const Banner = ({ text }) => {
    return (
        <>
            <div
                className="relative h-[170px] flex justify-center items-center"
                style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#74118C] to-[#1F0526]">
                </div>

                {/* Content */}
                <h1 className="relative z-10 text-white text-6xl">
                    {text}
                </h1>
            </div>
        </>
    )
}

export default Banner