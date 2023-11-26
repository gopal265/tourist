import React from 'react'

const ScrollBar = () => {
  return (
    <div className='flex overflow-hidden space-x-16 w-full overflow'>

      <div className="flex space-x-16 animate-loop-scroll  bg-red-500  h-[50px] items-center w-full overflow-hidden">
        <p className='text-[20px] uppercase font-bold'>Like never before</p>
        <div className='bg-black rounded-full text-white py-1 px-2 text-[12px] font-bold'> Excluse offers & deals</div>
        <p className='text-[20px] uppercase font-bold'>feature packed</p>
        <div className='bg-black rounded-full text-white py-1 px-2 text-[12px] font-bold'> Easy bookings</div>
        <p className='text-[20px] uppercase font-bold'>Flexible </p>
        <div className='bg-black rounded-full text-white py-1 px-2 text-[12px] font-bold w-fit flex justify-center '> No extra cost</div>
      </div>

    </div>
  )
}

export default ScrollBar
