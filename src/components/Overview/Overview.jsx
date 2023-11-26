import React, { useState } from 'react'

const Overview = ({title,content}) => {

    const [show,setShow] = useState(false)
    
    return (
        <div >
            <div className={`${show ? "" : "pb-3"} flex justify-between items-center w-full`}>
                <div className='text-[22px] uppercase font-bold py-4'>
                  {title}
                </div>
                <div className='w-[20px] h-[20px] bg-black text-white font-semibold rounded-full flex justify-center items-center' onClick={()=> setShow(!show)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>

                </div>
            </div>
            <div  className={`${show ? "block" :"hidden"} pb-[30px] pr-[20px] font-semibold text-[14px]`}>
                {content}
            </div>
            <hr className='border-b border-black border-[1px] ' />
        </div>
    )
}

export default Overview
