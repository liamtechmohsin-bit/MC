import React from 'react'
import bgimg from '../../assets/contourbg.png'
const Contour = () => {
    return (
        <>
            <div className='relative flex justify-center items-center overflow-hidden bg-linear-to-r from-[#74118C] to-[#1F0526] py-4 w-[1195px] rounded-[10px] py-[170px]'>
                <div className="absolute -left-32 -top-44 spin-slow">
                    <img src={bgimg} className='w-[400px] h-[400px] overflow-hidden' alt="" />
                </div>
                <div className="absolute left-0 bottom-6 text-white">
                    <p className='leading-[3px]'>--------------------------------------------------------------------------------------------------------------------- <br />
                    ---------------------------------------------------------------------------------------------------------------------
                    </p>
                </div>
                <div className="absolute -right-32 top-44 spin-slow">
                    <img src={bgimg} className='w-[400px] h-[400px] overflow-hidden' alt="" />
                </div>
                <div className="absolute right-0 top-6 animate-rotate-slow text-white">
                    <p className='leading-[3px]'>--------------------------------------------------------------------------------------------------------------------- <br />
                    ---------------------------------------------------------------------------------------------------------------------
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-6xl font-semibold text-white'>What Makes Us Contour</h1>
                    <p className='text-sm text-white'>We work to provide you with the work-life balance you deserve!</p>
                </div>
            </div>
        </>
    )
}

export default Contour