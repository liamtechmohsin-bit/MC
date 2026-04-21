import React from 'react'

const ChooseUs = () => {
    return (
        <>
            <div className='py-[40px] flex justify-center flex-col gap-2'>
                <div className='flex justify-center items-center gap-5 flex-col'>
                    <h6 className='text-[#74118C] font-bold'>WHY CHOOSE US</h6>
                    <h1 className='text-6xl text-center px-[70px] py-3 leading-16'>Gain a competitive edge with our exclusive solutions.</h1>
                    <p className='text-center px-[300px] text-gray-500 leading-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                    <h6 className='text-[#74118C] font-bold'>WE OFFER</h6>
                </div>
                <div className=" pb-10">
                    <div className="relative h-64">

                        {/* Ribbon 1 */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <marquee
                                className="bg-[#74118C] text-white py-4 rotate-[10deg] w-[150%]"
                                direction="right"
                                scrollamount="6"
                                loop="infinite"
                            >
                                <p className='text-3xl font-semibold'>We Offer We Offer We Offer We Offer We Offer We Offer We Offer We Offer</p>
                            </marquee>
                        </div>

                        {/* Ribbon 2 */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <marquee
                                className="bg-[#74118C] text-white py-4 -rotate-[10deg] w-[150%]"
                                direction="right"
                                scrollamount="6"
                                loop="infinite"
                            >
                                <p className='text-3xl font-semibold'>We Offer We Offer We Offer We Offer We Offer We Offer We Offer We Offer</p>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseUs