import React from 'react'
import image from "../../assets/image1.jpg"
const Acitivity = () => {
  return (
    <div className='w-full  h-[400px]  border-2 border-black shadow-customShadow rounded-md bg-white'>
        <img src={image} className='w-full h-1/2 '/>
      <div className='px-2'>

        <div className='flex justify-between text-[12px] font-bold pt-2'>
            <p> ⭐ 4.9 stars</p>
            <p>November 2,2023</p> 
        </div>

        <div className='font-bold text-[14px] pt-2'>
            Tsukishmia Moja Street
        </div>
        <div className='font-bold text-[12px] pt-1'>$22.00</div>


        <div className='font-bold text-[12px] pt-3'>New York,United States</div>
        <div className='font-bold text-[12px] pt-2'>+216 1234 5655</div>

      </div>
    </div>
  )
}

export default Acitivity
