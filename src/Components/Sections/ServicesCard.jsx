import React from 'react'
import { carddetail } from '../../Servicedetail'
import { useNavigate } from 'react-router'
const ServicesCard = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='py-[20px]'>
        <h1 className='text-2xl md:text-5xl md:leading-14 px-[10px] md:px-[260px] font-semibold text-center text-[#74118C]'>We Provide Exclusive Services For Your Business</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 py-[30px] gap-3'>
        {carddetail.map((data, index) =>
          <div className='group'>
            <div key={index} className='relative bg-gradient-to-b from-[#74118C] to-[#000] px-[35px] py-[25px] rounded-md overflow-hidden hover:bg-none group-hover:bg-[white] transition-all duration-300 hover:border-[2px] border-[#74118C] hover:cursor-pointer'>
              <div className='bg-white flex justify-center items-center w-[80px] h-[80px] rounded-full group-hover:border-[1px] group-hover:border-[#74118C] group-hover:bg-transparent'>
                <img src={data.image} alt="" />
              </div>
              <img src={data.bgimg} alt="" className='absolute -right-[170px] -top-[170px]' />
              <h1 className='text-white text-[30px] md:text-[40px] font-semibold pr-[70px] leading-10 py-4 group-hover:text-[#74118C] transition-all duration-300'>{data.name}</h1>
              <p className='text-[#ffff] group-hover:text-[#ffff] transition-all duration-300 group-hover:text-gray-500'>{data.para.slice(0, 200)}</p>
              <button className='text-white relative z-10 text-sm pt-[20px] leading-8 group-hover:text-[#74118C] bg-transparent' onClick={() => navigate(`/services/${data.id}`)}>{data.btn}</button>
              <img src={data.bgimg} alt="" className='absolute -left-[200px] -bottom-[200px]' />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ServicesCard