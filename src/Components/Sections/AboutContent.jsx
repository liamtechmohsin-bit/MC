import React from 'react';
import img1 from '../../assets/about.png';

const AboutContent = ({ text, colortext, title }) => {
    return (
        <>
            <div className='py-[80px] flex px-[40px] justify-between items-center'
                >
                <div className="w-[60%] pr-1">
                <h1 className='text-black text-3xl sm:text-4xl md:text-6xl leading-[1.2] font-semibold'><span className='text-[#9D2DF0]'>{colortext}</span> {title}</h1>
                    <p className='text-slate-500 pr-4 pt-3'>{text}</p>
                </div>
                <div className='w-[40%] flex justify-center'>
                    <img src={img1} className='w-[500px] h-[650px]' alt="" />
                </div>
            </div >
        </>
    )
}

export default AboutContent