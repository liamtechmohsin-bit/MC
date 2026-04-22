import React from 'react'
import  Carousel  from './Carousel'

const Testimonial = () => {
    return (
        <>
            <div className='flex flex-col py-6 border-b border-dashed border-white'>
                <div className='flex justify-center items-center gap-5 flex-col'>
                    <h6 className='text-white font-bold'>TESTIMONIALS</h6>
                    <h1 className='text-6xl text-center px-[70px] py-3 leading-16 text-white'>What satisfied clients say about us.</h1>
                    <p className='text-center px-[300px] text-white leading-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </p>
                </div>
                <div>
                    <Carousel />
                </div>
            </div>
        </>
    )
}

export default Testimonial